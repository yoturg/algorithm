let orgin = [7, 1, 6, 5, 3, 2, 4]

function selectionSort (list) {
  for(let i = 0; i < list.length; i ++) {
    let target = list[i]
    let targetIndex = i
    for(let j = i; j < list.length; j++) {
      if(list[j] < target) {
        target = list[j]
        targetIndex = j
      }
    }
    if(targetIndex !== i) {
      [list[i], list[targetIndex]] = [list[targetIndex], list[i]]
    }
  }
  return list
}

console.log(selectionSort(orgin))