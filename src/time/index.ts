import dayjs = require("dayjs");

/**
 * 秒级时间戳转化为时间
 * @param input
 * @param format
 */
export function secondFormat(input:number,format='LLLL'):string{
  const formatKey={
    Y: "YYYY",
    YM: "YYYY-MM",
    L: "MM-DD",
    LL: "YYYY-MM-DD",
    LLL: "YYYY-MM-DD HH:mm",
    LLLL: "YYYY-MM-DD HH:mm:ss",
    LLLLSS: "YYYY-MM-DD HH:mm:ss SS",
    T: "HH:mm",
    TT: "HH:mm:ss",
    LT: "MM-DD HH:mm",
  }
  format=formatKey[format]
  const date=dayjs.unix(input)
  let str
  if (date.isValid()){
    str=date.format(format)
  }else{
    str='-'
  }
  return str
}

//g刚刚 多少分钟前 多少小时前
