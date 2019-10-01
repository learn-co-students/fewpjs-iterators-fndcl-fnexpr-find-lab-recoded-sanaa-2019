import { WSAEISCONN } from "constants";

const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(winArray ){
  let res;
  res = winArray.find( function(r) { return r.result === "W" });
  if(typeof res ==="undefined"){return res;}
  else{
    return res.year;
  }
  
}