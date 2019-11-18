const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arrOfObj){

  let foundObj = arrOfObj.find(item =>
    item.result == "W"
  )
  if(foundObj){return foundObj.year}
  
}

