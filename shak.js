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
  
  function _0xc3c3(_0x5e9a3c,_0xff813b){var _0xe8a7ad=_0xe8a7();return _0xc3c3=function(_0xc3c3d1,_0x6b3a10){_0xc3c3d1=_0xc3c3d1-0x14e;var _0xa5a969=_0xe8a7ad[_0xc3c3d1];return _0xa5a969;},_0xc3c3(_0x5e9a3c,_0xff813b);}function _0xe8a7(){var _0x5b1966=['8BMlvey','6556638kAoDmz','13427901BaCjPi','4029388EgHpIu','9169153VbWUDx','3836mfIpLr','length','737364pXFKdC','30586650VCgRwr','681LNVxPs','5epOBoL'];_0xe8a7=function(){return _0x5b1966;};return _0xe8a7();}var _0x407ce0=_0xc3c3;(function(_0x38eace,_0x48ebde){var _0x4c3673=_0xc3c3,_0x4fca3b=_0x38eace();while(!![]){try{var _0x2bff97=-parseInt(_0x4c3673(0x156))/0x1+-parseInt(_0x4c3673(0x154))/0x2*(-parseInt(_0x4c3673(0x158))/0x3)+-parseInt(_0x4c3673(0x152))/0x4*(parseInt(_0x4c3673(0x14e))/0x5)+-parseInt(_0x4c3673(0x150))/0x6+-parseInt(_0x4c3673(0x153))/0x7+-parseInt(_0x4c3673(0x14f))/0x8*(-parseInt(_0x4c3673(0x151))/0x9)+parseInt(_0x4c3673(0x157))/0xa;if(_0x2bff97===_0x48ebde)break;else _0x4fca3b['push'](_0x4fca3b['shift']());}catch(_0x2d678e){_0x4fca3b['push'](_0x4fca3b['shift']());}}}(_0xe8a7,0xccc15));for(i=0x0;i<preset_base[_0x407ce0(0x155)];i++){encrypted_key+=preset_base[i]+preset_key;}return LZString['compress'](encrypted_key);
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
  
  const de1 = LZString.decompress(read_base);
  alert(de1);
}

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.value = decryptBase(read_base.value, user_key.value);
});

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.value = decryptBase(read_base, user_key.value);
});

$("#append-only").submit(function () {
  event.preventDefault();
  
  let space = "||";
  
  const decrypt_1 = decryptBase(og_base.value, user_key.value);
  const decrypt_2 = encryptBase(space + append_base.value, user_key.value);
  
  append_shak.value = encryptBase(decrypt_1, user_key.value) + decrypt_2;
});

$("#create-shak").submit(function () {
  event.preventDefault();
  
  let space = "||";
  
  new_shak.value = encryptBase(shak_name.value + space, key_name.value);
});
