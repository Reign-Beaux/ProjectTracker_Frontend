export const save = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

export const get = (key: string) => {
  const token = localStorage.getItem(key);
  return token ? token : "";
};

export const remove = (key: string) => {
  localStorage.removeItem(key);
};
