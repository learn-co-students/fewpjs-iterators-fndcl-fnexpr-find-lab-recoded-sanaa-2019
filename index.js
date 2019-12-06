const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


function superbowlWin(arr){
  let res_yer
  res_yer =arr.find( function(f) { return f.result === "W" })
  if(typeof res_yer ==="undefined"){return res_yer}
  else{
    return res_yer.year} 
}
superbowlWin(record);
