let orgin = [7, 1, 6, 5, 3, 2, 4, 9, 8]

function countingSort (list) {
  const count = []
  const result = []
  for (let i = 0; i < list.length; i++) {
    count[list[i]] = (count[list[i]] || 0) + 1
  }

  for (let i = 0; i < count.length; i++) {
    for(let j = 0; j < count[i]; j++) {
      result.push(i)
    }
  }
  return result 
}

console.log(countingSort(orgin))