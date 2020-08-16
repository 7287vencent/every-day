function jsonp({url, params, callback}) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    // 成功返回
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }

    params = {...params, callback} // wb=b&callback=show
    let arr = []
    for(let key in params) {
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.body.appendChild(script)
  })
}