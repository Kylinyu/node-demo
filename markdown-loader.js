const loaderUtils = require("loader-utils");

module.exports = async function(source) {
  const options = loaderUtils.getOptions(this);
  console.log('***options***', options)
  // this.callback(null, `kk`)
  const fff = (param) => {
    return new Promise((resolve, reject) => {
      if (param) {
        resolve(1)
      } else {
        resolve(0)
      }
    })
  }
  const data = await fff()
  return `${data}`
}

module.exports.pitch = (remaining, preceding, data) => {
  console.log('***remaining***', remaining)
  console.log('***preceding***', preceding)
  // data会被挂在到当前loader的上下文this上在loaders之间传递
  data.value = "test"
}