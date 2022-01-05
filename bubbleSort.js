let orgin = [7, 1, 6, 5, 3, 2, 4]

function bubbleSort (list) {
  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length - i; j++){
      if(list[j] > list[j+1]){
        [list[j], list[j+1]] = [list[j+1], list[j]]
      }
    }
  }
  return list
}

console.log(bubbleSort(orgin))