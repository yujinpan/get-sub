import {networkInterfaces} from 'os'

export function getServerIP() {
  const interfaces = networkInterfaces();
  return (interfaces['en0'] || interfaces['eth0']).find(item => item.family === 'IPv4')?.address
}