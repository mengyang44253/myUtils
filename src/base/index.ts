export function trim(str:string){
  const reg=/^\s*|\s*$/g;
  return str.replace(reg,"")
}