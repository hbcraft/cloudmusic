import path from 'path'
export const loadFile = (filePath: string): string => {
  return path.join(process.env.NODE_ENV === 'production' ? __dirname : 'public/', filePath)
}