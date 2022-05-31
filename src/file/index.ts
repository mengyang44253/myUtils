/**
 * 获取文件后缀名
 * @param filePath
 */
export function getFileType(file:string):string{
  let startIndex=file.lastIndexOf('.')
  if (startIndex !== -1){
    return file.substring(startIndex+1,file.length)
  }else return ''
}

/**
 * 获取文件名
 * @param file
 */
export function getFileName(file:string):string{
  return file.replace(/(.*\/)*([^.]+).*/gi, "$2")
}

/**
 * 获取文件大小
 * @param fileByte
 */
export function getFileSize(fileByte:number):string{
  let fileSizeByte=fileByte
  let fileSizeMsg=""
  if(fileSizeByte < 1048576){
    fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
  }else if(fileSizeByte === 1048576){
    fileSizeMsg = "1MB";
  }else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824){
    fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
  }else if(fileSizeByte > 1048576 && fileSizeByte == 1073741824){
    fileSizeMsg = "1GB";
  }else if(fileSizeByte > 1073741824 && fileSizeByte < 1099511627776){
    fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }else{
    fileSizeMsg = ">1TB";
  }
  return fileSizeMsg
}
