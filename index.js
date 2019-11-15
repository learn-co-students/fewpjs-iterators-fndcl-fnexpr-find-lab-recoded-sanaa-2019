/*const testVar = {}

function testFunc() {
  return "hi"
}*/

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "N/A"},
  {year: "2016", result: "N/A"},
  {year: "2015", result: "L"},
  {year: "2014", result: "W"},
  {year: "2013", result: "N/A"},
  {year: "2012", result: "L"},
  {year: "2011", result: "L"},
  {year: "2010", result: "N/A"}
  
];

function superbowlWin(x){
  let result;
  let y = x.find(e=> {
    if (e.result === "W"){
    result = e.year;
    return result;
  }
  else{
    result = undefined;
  }
  
});
return result;
}
   
console.log(superbowlWin(record));
