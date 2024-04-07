import * as CryptoJS from "crypto-js";

export const encryptData = (data: string) => {
  const key = "12345678901234567890123456789012";
  const iv = "1234567890123456";
  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}
