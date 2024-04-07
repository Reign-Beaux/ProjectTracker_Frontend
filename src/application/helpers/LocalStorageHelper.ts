export const localStorageSave = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const localStorageGet = (key: string) => {
  const token = localStorage.getItem(key);
  return token ? token : "";
};

export const localStorageRemove = (key: string) => {
  localStorage.removeItem(key);
};
