const a = [['a', 'b', 'c', 'd'], [1,2,3,10, 5, 8 ,7,9]]

function show(_a) {
  const rowsLength = _a.length 
  const colLength = _a[_a.length -1].length 
  const lastElement = _a[rowsLength-1][colLength-1] 

  // console.log(colLength, rowsLength)
  console.log(_a)
  if(colLength == 1){
    console.log(lastElement)
    _a.pop()
    return show(a)
  }
  else{
    console.log(lastElement)
    _a[rowsLength-1].pop()
    return show(a)
  }
}

show(a)