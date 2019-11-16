const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {
    year: "2018", 
    result: "L"
  },
  {
    year: "2017",
     result: "W"
    },
  {
    year: "2016", 
    result: "N/A"
  }
  
]

function superbowlWin(record){

let returned=record.find(function(item){
  return item.result=="W"
})

if (returned==undefined){
  return undefined
}else{

  return returned.year
}

}
superbowlWin(record)
