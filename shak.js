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
    preset_key = "public";
  }
  
  if (base === null || base === undefined || base === "") {
    preset_base = "";
  }
  
  let string_key = String(preset_key);
  let string_base = String(base);
  
  let compressed_base = LZString.compress(string_base);
  let compressed_key = LZString.compress(string_key);
  
  let encrypted_key = "";
  
  encrypted_key = preset_base + "-KEY-&8" + preset_key;
  
  const final_encrypt = btoa(encrypted_key);
  return final_encrypt;
}

function decryptBase (base, key) {
  let preset_key = key;
  let preset_base = base;
  
  if (key === null || key === undefined || key === "") {
    preset_key = "public";
  }
  
  if (base === null || base === undefined || base === "") {
    preset_base = "";
  }
  
  const de1 = atob(read_base.value);
  let de2 = de1.replace("-KEY-&8" + user_key.value, "");
  
  if (de1.includes("-KEY-&8" + user_key.value)) {
    return de2;
  }
  
  else {
    return "Incorrect key used";
  }
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

alert('confirmed2');
