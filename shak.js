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
  let decrypt_3 = decrypt_1.split(decrypt_2);
  let decrypt_4 = decrypt_3[1];
  
  return LZString.decompress(decrypt_4);
}
