import * as CryptoJS from "crypto-js";

export const encryptData = (data: string) => {
  const key = import.meta.env.VITE_KEY_ENCRYPT;
  const iv = import.meta.env.VITE_KEY_IV;
  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}
