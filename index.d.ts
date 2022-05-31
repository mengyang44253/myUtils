declare const getCache: (key: string) => string | null;
declare const setCache: (key: string, value: any) => void;
declare const deleteCache: (key: string) => void;
declare const clearCache: () => void;

export { clearCache, deleteCache, getCache, setCache };
