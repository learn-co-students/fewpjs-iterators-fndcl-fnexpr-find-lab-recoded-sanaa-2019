const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  ]

function testFunc() {
  return "hi"
}

function superbowlWin(Array){
  
  const n= Array.find(({ result })=>result==="W")
  if(typeof n === "undefined"){
    return undefined;
  }else{
    return n.year;
  }
  
}

superbowlWin(testVar)