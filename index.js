function takeANumber(katzDeli, name) {
    katzDeli.push(name)
  return ("Welcome, "+ name +". You are number "+(katzDeli.length)+" in line.")
}
function nowServing(katzDeliLine) {
  let i = 0
 if (i < katzDeliLine.length) {
   katzDeliLine.shift(name)
   return ("Currently serving "+(katzDeliLine.length-1)+".")
 } else {
   return ("There is nobody waiting to be served!")
 }
}