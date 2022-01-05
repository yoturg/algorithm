let orgin = [7, 1, 6, 5, 3, 2, 4, 9, 8]

const test1 = [5,3,9,1,7]
const test2 = [6, 4, 8, 2, 0]
// const test1 = [1,3,5,7,9, 13, 15,17]
// const test2 = [0,2,4,6,8]

function merge (l1, l2) {
  let i1 = 0
  let i2 = 0
  const resultList = []
  while(i1 < l1.length && i2 < l2.length) {
    l1[i1] < l2[i2] ? resultList.push(l1[i1++]) : resultList.push(l2[i2++])
  }
  return resultList.concat(l1.slice(i1), l2.slice(i2))
}

function mergeSort(list) {
  if(list.length < 2) {
    return list
  }
  const mid = Math.floor(list.length / 2)
  const left = mergeSort(list.slice(0, mid))
  const right = mergeSort(list.slice(mid))
  return merge(left, right)
}



// console.log(merge(test1, test2))
console.log(mergeSort([...test1, ...test2]))