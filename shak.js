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
  
  function _0x32a9(_0x210a7e,_0x5ba9be){const _0x1e1cfd=_0x1e1c();return _0x32a9=function(_0x32a9de,_0x1d8b46){_0x32a9de=_0x32a9de-0x196;let _0x1832ec=_0x1e1cfd[_0x32a9de];return _0x1832ec;},_0x32a9(_0x210a7e,_0x5ba9be);}const _0x54b346=_0x32a9;(function(_0x5415ae,_0x305cdb){const _0x2e91f2=_0x32a9,_0x4d13a3=_0x5415ae();while(!![]){try{const _0x3a32e0=-parseInt(_0x2e91f2(0x199))/0x1*(-parseInt(_0x2e91f2(0x19e))/0x2)+-parseInt(_0x2e91f2(0x1a1))/0x3+parseInt(_0x2e91f2(0x196))/0x4*(parseInt(_0x2e91f2(0x19d))/0x5)+parseInt(_0x2e91f2(0x198))/0x6*(-parseInt(_0x2e91f2(0x19c))/0x7)+parseInt(_0x2e91f2(0x19f))/0x8+-parseInt(_0x2e91f2(0x19a))/0x9*(parseInt(_0x2e91f2(0x197))/0xa)+parseInt(_0x2e91f2(0x1a0))/0xb*(parseInt(_0x2e91f2(0x19b))/0xc);if(_0x3a32e0===_0x305cdb)break;else _0x4d13a3['push'](_0x4d13a3['shift']());}catch(_0x3e8a73){_0x4d13a3['push'](_0x4d13a3['shift']());}}}(_0x1e1c,0x72c84));const decrypt_1=LZString[_0x54b346(0x1a2)](preset_base),decrypt_2=decrypt_1['replace'](key,'');return decrypt_2;function _0x1e1c(){const _0xff9b92=['11099wuESFi','351792mdTlRN','decompress','1802252RRGBXz','179420hAgmSb','6XKlTXT','2NrhWED','45xekNeC','4284BtQcsg','5469576qgkjkl','5WFBbYH','402946WlnNXy','1958144icWJhQ'];_0x1e1c=function(){return _0xff9b92;};return _0x1e1c();}
}

$("#read-only").submit(function () {
  event.preventDefault();
  
  done_read.value = decryptBase(read_base.value, user_key.value);
});

$("#append-only").submit(function () {
  event.preventDefault();
  
  let space = `
  `;
  
  const decrypt_1 = decryptBase(og_base.value, user_key.value);
  const decrypt_2 = encryptBase(space + append_base.value, user_key.value);
  
  append_shak.value = encryptBase(decrypt_1, user_key.value) + decrypt_2;
});

$("#create-shak").submit(function () {
  event.preventDefault();
  
  let space = `
  `;
  
  new_shak.value = encryptBase(shak_name.value + space, user_key.value);
});
