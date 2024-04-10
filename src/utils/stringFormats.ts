export function cutString(str: string, char: string, position: number) {
  const strSplit = str.split(char || '')
  return strSplit.at(position) || ''
}