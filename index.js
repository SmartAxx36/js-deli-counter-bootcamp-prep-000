function takeANumber(katzDeli, name) {
    katzDeli.push(name)
  return ("Welcome, "+ name +". You are number "+(katzDeli.length)+" in line.")
}
function nowServing(katzDeliLine) {
  let i = 0
 if (i < katzDeliLine.length) {
   return ("Currently serving "+(katzDeliLine.shift(name))+".")
 } else {
   return ("There is nobody waiting to be served!")
 }}
 function currentLine(line) {
   for (i=0)
   if (i < line.length) {
    return ("The line is currently:"+line.length+". "+line)
   } else {
      return ("The line is currently empty.")
   }
  }