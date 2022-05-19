// code your solution here
function superbowlWin(arr){
  let res = arr.find(s => s.result === 'W')
  return res ? res.year : undefined
}
