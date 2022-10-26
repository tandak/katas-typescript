export function getHighestNumber(input: Array<number>): number {
  var highest = input[0]

  for (let i = 0; i <= input.length; i++) {
    if (highest <= input[i]) {
      highest = input[i]
    }
  }

  return highest
}

//Optimised Solution
export function getHighestNumber2(numbers: number[]): number {
  return numbers.slice().sort()[numbers.length - 1]
}
