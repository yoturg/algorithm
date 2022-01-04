let orgin = [7, 1, 6, 5, 3, 2, 4]

function swap (arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

function partition (array, start, end) {
  const pivot = array[end]
  let j = start
  for(let i = start; i <= end; i++) {
    if(array[i] <= pivot) {
      swap(array, i, j++)
    }
  }
  return j - 1
}
function quickSort (array, start, end) {
  if(end - start < 1) return array
  const pivot = partition(array, start, end)
  quickSort(array, start, pivot - 1)
  quickSort(array, pivot + 1, end)
}

console.log('before', JSON.stringify(orgin))
quickSort(orgin, 0, orgin.length - 1)
console.log('after', JSON.stringify(orgin))
