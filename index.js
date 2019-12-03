const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  { year: '1969', result: 'W' }
]

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  let row = record.find(item => {
  let result = item.result === "W";
  return result;
  });
 if(row !== undefined)
 return row.year;
 else return undefined;
}

superbowlWin(record);