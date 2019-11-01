const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  
]
const testVar = {}
function testFunc() {
  return "hi"
}

function superbowlWin(record){
   let winRes=[];
   let resultFound = record.find(function(e){
    winRes = e.result==="W";
    return winRes;
  });
  return winRes === true ? resultFound.year : undefined;
}