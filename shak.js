const user_key = document.getElementById("a-key");
const read_base = document.getElementById("read-base");
const append_base = document.getElementById("append-base");
const new_shak = document.getElementById("new-shak");
const shak_name = document.getElementById("shak-name");
const key_name = document.getElementById("key-name");
const og_base = document.getElementById("og-base");
const done_read = document.getElementById("done-read");

function encryptBase (base, key) {
  let preset_key = key;
  let preset_base = base;
  
  if (key === null || key === undefined || key === "") {
    preset_key = "";
  }
  
  if (base === null || base === undefined || base === "") {
    preset_base = "";
  }
  
  let string_key = String(preset_key);
  let string_base = String(base);
  
  let compressed_base = LZString.compress(string_base);
  let compressed_key = LZString.compress(string_key);
  
  let encrypted_base = "";
  
  return LZString.compress(compressed_key + LZString.compress("--key--") +  compressed_base);
}

function decryptBase (base, key) {
  let preset_key = key;
  let preset_base = base;
  
  if (key === null || key === undefined || key === "") {
    preset_key = "";
  }
  
  if (base === null || base === undefined || base === "") {
    preset_base = "";
  }
  
  let decrypt_1 = LZString.decompress(preset_base);
  let decrypt_2 = LZString.compress(preset_key) + LZString.compress("--key--");
  let decrypt_3 = decrypt_1.split("--key--");
  let decrypt_4 = decrypt_3[1];
  
  return LZString.decompress(decrypt_4);
}

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.innerText = decryptBase(read_base.value, user_key.value);
});

$("#append-only").submit(function () {
  event.preventDefault();
  
  const decrypt_1 = decryptBase(og_base.value, user_key.value);
  let space = `
  `;
  
  new_shak.innerText = LZString.compress(LZString.compress(user_key.value) + LZString.compress("--key--") + LZString.compress(decrypt_1 + space + append_base.value));
});

$("#create-shak").submit(function () {
  event.preventDefault();
  
  let space = `
  `;
  
  new_shak.innerText = encryptBase(shak_name.value + space, "");
});
