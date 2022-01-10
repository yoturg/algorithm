const orgin = [2,7,26,25,19,17,1,90,3,36]

function heapify(heap, index) {
  const left = index * 2 + 1
  const right = index * 2 + 2
  let largeat = index

  if(left < heap.length && heap[left] > heap[largeat]) {
    largeat = left
  }
  if(right < heap.length && heap[right] > heap[largeat]) {
    largeat = right 
  }
  if(largeat !== index) {
    [heap[index], heap[largeat]] = [heap[largeat], heap[index]]
    heapify(heap, largeat)
  }
  
}

function buildMaxHeap(heap) {
  for(let i = Math.floor(heap.length / 2); i >= 0; i--) {
    heapify(heap, i)
  }
  return heap
}

function heapSort (list) {
  const orgin = [...list]
  const result = []
  buildMaxHeap(orgin)
  
  while(orgin.length > 0) {
    result.push(orgin.shift())
    heapify(orgin, 0)
  }
  return result
}
console.log(heapSort(orgin))