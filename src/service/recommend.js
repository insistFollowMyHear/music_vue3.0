import request from "./base";

export function getRecommend() {
  return request.get('/api/getRecommend')
}