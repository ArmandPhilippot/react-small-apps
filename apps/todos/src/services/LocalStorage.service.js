export const LocalStorage = {
  get(key) {
    try {
      const serialItem = localStorage.getItem(key);
      if (!serialItem) return undefined;
      return JSON.parse(serialItem);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  },
  set(key, value) {
    try {
      const serialItem = JSON.stringify(value);
      localStorage.setItem(key, serialItem);
    } catch (e) {
      console.log(e);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};
