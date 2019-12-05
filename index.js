



function superbowlWin(Array){
  
  const n= Array.find(({ result })=>result==="W")
  if(typeof n === "undefined"){
    return undefined;
  }else{
    return n.year;
  }
  
}

