export const getCache = (key: string): string | null => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

export const setCache = (key: string, value: any): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const deleteCache=(key:string):void=>{
  window.localStorage.removeItem(key)
}

export const clearCache=():void=>{
  window.localStorage.clear()
}