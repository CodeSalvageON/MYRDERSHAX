const user_key = document.getElementById("a-key");
const read_base = document.getElementById("read-base");
const append_base = document.getElementById("append-base");
const new_shak = document.getElementById("new-shak");
const shak_name = document.getElementById("shak-name");
const key_name = document.getElementById("key-name");
const og_base = document.getElementById("og-base");
const done_read = document.getElementById("done-read");
const append_shak = document.getElementById("append-shak");

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
  
  let encrypted_key = "";
  
  for (i = 0; i < preset_base.length; i++) {
    encrypted_key += preset_base[i] + string_key;
  }
  
  const final_encrypt = LZString.compress(encrypted_key);
  return final_encrypt;
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
  
  const de1 = LZString.decompress(read_base.value);
  alert(de1);
}

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.value = decryptBase(read_base.value, user_key.value);
});

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.value = decryptBase(read_base.value, user_key.value);
});

$("#append-only").submit(function () {
  event.preventDefault();
  
  let space = "--space--";
  
  const decrypt_1 = decryptBase(og_base.value, user_key.value);
  const decrypt_2 = encryptBase(space + append_base.value, user_key.value);
  
  append_shak.value = encryptBase(decrypt_1, user_key.value) + decrypt_2;
});

$("#create-shak").submit(function () {
  event.preventDefault();
  
  let space = "--space--";
  
  new_shak.value = encryptBase(shak_name.value + space, key_name.value);
});
