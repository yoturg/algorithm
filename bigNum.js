const num1 =   '5645678912345656456789123456'
const num2 = '987654321987599356456789123456'



function bigMutl (num1, num2) {
  let result = ''
  num1 = String(num1)
  num2 = String(num2)
  
  let more = 0
  if(num1.length >= num2.length) {
    more = num1.slice(0, num1.length - num2.length)
    num1 = num1.slice(num1.length - num2.length)
  } else {
    more = num2.slice(0, num2.length - num1.length)
    num2 = num2.slice(num2.length - num1.length)
  }

  let overflow = 0
  for (let i = num1.length - 1; i >= 0; i--) {
    const res = ( +num1[i] ) + ( +num2[i] ) + overflow
    overflow = Math.floor(res / 10)
    result = `${res % 10}${result}` 
  }

  return `${( +more ) + overflow}${result}`
}

function bigMutl2 (num1, num2) {
  let result = ''
  num1 = reverseStr(num1)
  num2 = reverseStr(num2)
  
  let overflow = 0
  let i = 0
  for (; i < num1.length && i < num2.length; i++) {
    const res = Number(num1[i]) + Number(num2[i]) + overflow
    overflow = Math.floor(res / 10)
    result += String(res%10)
  }

  const more = i >= num1.length ? num2.slice(i) :num1.slice(i)
  return `${Number(reverseStr(more))}${reverseStr(result)}`

}

function reverseStr(str) {
  return str.split('').reverse().join('')
}

function bigMutl3 (num1, num2) {
  num1 = reverseStr(num1)
  num2 = reverseStr(num2)

  if(num1.length < num2.length) {
    [num1, num2] = [num2, num1]
  }

  let i = 0;
  let overflow = 0
  let result = ''
  while(i < num1.length || overflow === 1) {
    const res = Number(num1[i] || 0) + Number(num2[i++] || 0) + overflow
    overflow = Math.floor(res / 10)
    result += String(res % 10)
  }
  
  return reverseStr(result)
}

function bigMutl4(num1, num2) {
  if(num1.length < num2.length) {
    [num1, num2] = [num2, num1]
  }

  let i = 1
  let overflow = 0
  let result = ''
  while(i <= num1.length || overflow === 1) {
    const char1 = num1[num1.length - i]
    const char2 = num2[num2.length - i]
    
    const res = Number(char1 || 0) + Number(char2 || 0) + overflow
    overflow = Math.floor(res / 10)
    result = String(res % 10) + result
    i++
  }

  return result
}

console.log('bigMutl1', bigMutl(num1, num2))
console.log('bigMutl2', bigMutl2(num1, num2))
console.log('bigMutl3', bigMutl3(num1, num2))
console.log('bigMutl4', bigMutl4(num1, num2))
