
const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin(record)

function superbowlWin(array) {
  let arr = array.find(function (e) {
    return e.result === "W"


  })

  if (arr != undefined) {
    console.log(arr.year);

    return arr.year
  } else {
    console.log(undefined);

    return undefined
  }

}

