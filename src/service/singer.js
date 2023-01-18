import request from "./base";

export function getSingerList() {
  return request.get('/api/getSingerList')
}