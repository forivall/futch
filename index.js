exports.default = function(girlname) {
  return (girlname ? (girlname + ' is') : 'im') + ' futch'
}

// use default as bare export
module.exports = Object.getOwnPropertyNames(exports).reduce(
  (x, p) => Object.defineProperty(x, p, Object.getOwnPropertyDescriptor(exports, p)),
  exports.default,
)
