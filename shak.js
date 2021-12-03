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
  
  const _0x18cbe5=_0x1350;(function(_0x237a2e,_0x26832f){const _0x19b3f6=_0x1350,_0x31d3bf=_0x237a2e();while(!![]){try{const _0x20c4b9=parseInt(_0x19b3f6(0x7a))/0x1+-parseInt(_0x19b3f6(0x7c))/0x2*(-parseInt(_0x19b3f6(0x81))/0x3)+-parseInt(_0x19b3f6(0x7f))/0x4+-parseInt(_0x19b3f6(0x82))/0x5+-parseInt(_0x19b3f6(0x79))/0x6+parseInt(_0x19b3f6(0x7b))/0x7*(-parseInt(_0x19b3f6(0x7d))/0x8)+parseInt(_0x19b3f6(0x80))/0x9;if(_0x20c4b9===_0x26832f)break;else _0x31d3bf['push'](_0x31d3bf['shift']());}catch(_0x472f28){_0x31d3bf['push'](_0x31d3bf['shift']());}}}(_0x2230,0x3c4db),encrypted_key=preset_base+_0x18cbe5(0x7e)+preset_key+')');const final_encrypt=btoa(encrypted_key);function _0x1350(_0x2c721d,_0x48c5b6){const _0x223022=_0x2230();return _0x1350=function(_0x1350c6,_0x45f58d){_0x1350c6=_0x1350c6-0x79;let _0x4d438f=_0x223022[_0x1350c6];return _0x4d438f;},_0x1350(_0x2c721d,_0x48c5b6);}return final_encrypt;function _0x2230(){const _0x5bc392=['-KEY-&8(','1154888LWBcjr','8504163ZGweCe','21SbVrJu','1514835FYdoOV','1468938bIIhxL','282231DWsGMp','19642anPrUf','62386BFpjdN','1032DrQNWl'];_0x2230=function(){return _0x5bc392;};return _0x2230();}
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
  
  function _0x2c2b(_0x2012a9,_0x1d11a5){const _0x189485=_0x1894();return _0x2c2b=function(_0x2c2b70,_0x57641b){_0x2c2b70=_0x2c2b70-0x93;let _0x46f323=_0x189485[_0x2c2b70];return _0x46f323;},_0x2c2b(_0x2012a9,_0x1d11a5);}const _0x34a86e=_0x2c2b;function _0x1894(){const _0x534ddb=['8369559GcVtNv','365006qCPTPq','Incorrect\x20key\x20used','742600fXPTyx','includes','2034RFZAPO','4bJWhsL','527541TDdnmt','1Cedbcf','replace','value','8gnHlSo','23330smSYQv','2188080aNTpbz','-KEY-&8(','1041313cummSh'];_0x1894=function(){return _0x534ddb;};return _0x1894();}(function(_0x1a5120,_0x1cb2f9){const _0x3c77c7=_0x2c2b,_0x2dc495=_0x1a5120();while(!![]){try{const _0x1867d5=-parseInt(_0x3c77c7(0xa2))/0x1*(-parseInt(_0x3c77c7(0x9b))/0x2)+-parseInt(_0x3c77c7(0xa1))/0x3*(parseInt(_0x3c77c7(0xa0))/0x4)+-parseInt(_0x3c77c7(0x9d))/0x5+parseInt(_0x3c77c7(0x97))/0x6+parseInt(_0x3c77c7(0x99))/0x7*(-parseInt(_0x3c77c7(0x95))/0x8)+parseInt(_0x3c77c7(0x9f))/0x9*(-parseInt(_0x3c77c7(0x96))/0xa)+parseInt(_0x3c77c7(0x9a))/0xb;if(_0x1867d5===_0x1cb2f9)break;else _0x2dc495['push'](_0x2dc495['shift']());}catch(_0x4d5b1b){_0x2dc495['push'](_0x2dc495['shift']());}}}(_0x1894,0x4b1d4));const de1=atob(read_base[_0x34a86e(0x94)]);let de2=de1[_0x34a86e(0x93)](_0x34a86e(0x98)+user_key[_0x34a86e(0x94)]+')','');return de1[_0x34a86e(0x9e)]('-KEY-&8('+user_key[_0x34a86e(0x94)]+')')?de2:_0x34a86e(0x9c);
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
