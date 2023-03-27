var arr = [];
var sum = 0;

function SumOfArray(arr) {
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

sum = SumOfArray([1, 2, 3]);

console.log(sum);
