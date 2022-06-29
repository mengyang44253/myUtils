/**
 *去除字符串两端的空格
 * @param str
 *
 * @return string
 */
declare function trim(str: string): string;
/**
 * 文本格式化 无数据显示-
 * @param input
 */
declare function textFormat(input: string): string;
/**
 * 数字格式化
 * @param number
 * @param format
 */
declare function numberFormat(number: number, format?: number): number | string;
/**
 * 富文本转化为纯文本
 * @param input
 * @param length
 */
declare function fullTextFormat(input: string, length?: number): string;

declare const getCache: (key: string) => string | null;
declare const setCache: (key: string, value: any) => void;
declare const deleteCache: (key: string) => void;
declare const clearCache: () => void;

/**
 * 获取文件后缀名
 * @param filePath
 */
declare function getFileType(file: string): string;
/**
 * 获取文件名
 * @param file
 */
declare function getFileName(file: string): string;
/**
 * 获取文件大小
 * @param fileByte
 */
declare function getFileSize(fileByte: number): string;

/**
 * 是否是一个对象
 * @param obj
 */
declare function isObject(obj: object): boolean;

export { clearCache, deleteCache, fullTextFormat, getCache, getFileName, getFileSize, getFileType, isObject, numberFormat, setCache, textFormat, trim };
