let orgin = [7, 1, 6, 5, 3, 2, 4, 9, 8]

function insertionSort (list) {
  for(let i = 1; i < list.length; i++) {
    for(let j = i; j >= 0; j--){
      if(list[j] < list[j -1]){
        [list[j], list[j - 1]] = [list[j-1], list[j]]
      }
    }
  }
  return list
}

console.log(insertionSort(orgin))