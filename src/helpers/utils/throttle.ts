// export function throttle(callback: (...args: any[]) => void, interval: number) {
//   let enableCall = true

//   return function (...args: any) {
//     if (!enableCall) return

//     enableCall = false
//     callback.apply(this, args)
//     setTimeout(() => {
//       enableCall = true
//     }, interval)
//   }
// }
