import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers: {
        'Content-Type': 'application/json' // 配置请求头content-type
      }
    }).then((response) => { // Promise兑现时的回调函数
      resolve(response.data)
    }, err => { // Promise拒绝时的回调函数
      reject(err)
    })
  })
}
