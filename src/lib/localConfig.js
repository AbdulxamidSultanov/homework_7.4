export const setToLocal = (name, data) => {
  if (Array.isArray(data) && data.length > 0) {
    localStorage.setItem(name, JSON.stringify(data));
  }
};

export const getFromLocal = (name) => {
  const ls = localStorage.getItem(name);
  return ls ? JSON.parse(ls) : [];
};

export const removeFromLocal = (name) => {
  localStorage.removeItem(name);
};
