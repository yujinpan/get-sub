import {networkInterfaces} from 'os'

export function getServerIP() {
  return networkInterfaces()['en0'].find(item => item.family === 'IPv4')?.address
}