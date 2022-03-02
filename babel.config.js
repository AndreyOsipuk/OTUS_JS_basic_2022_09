// module.exports = api => {
module.exports = {
  // console.log(api.caller((caller) => console.log('target', caller.target)))
  // return {

  presets: [
    [
      "@babel/preset-env",
      // {
      //   useBuiltIns: "entry",
      //   // caller.target will be the same as the target option from webpack
      //   targets: api.caller(caller => caller && caller.target === "node")
      //     ? { node: "current" }
      //     : { chrome: "58", ie: "11" }
      // }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ],
}
// }