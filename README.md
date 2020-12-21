## twig-code-challenge

## Code Challenge

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

Example pseudo-code:

groupArrayElements([ 1, 2, 3, 4, 5], 3 );
> [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]


## Solution 

### Usecase 1: The size of the original array cannot be divided equally by N

Input: ([1, 2, 3, 4, 5], 3) <br>
Ouput: [[1, 2], [3, 4], [5]]

Logic:

length of the array is 5 <br>
No. of equally sized arrays = 3 <br>

Since the original array is not equally divided by N hence we need to ensure the contents are split into equally sized arrays. Here, in this use case we are expecting the array to be split into 3 sub arrays and ensure each array has length equal to remainder otherwise distribute left over contents equally.

```
while (array.length) {
  // Check the contents of array to be inserted if the original array cannot be divided equally by N
  if (!isDividend) {
    contentSize = Math.ceil(array.length / groupBy);
  }
  // Push and splice the contents of array
  result.push(array.splice(0, contentSize));
  groupBy -= 1;
}
```

### Usecase 1: The size of the original array can be divided equally by N

Input: ([1, 2, 3, 4, 5], 5) <br>
Ouput: [[1], [2], [3], [4], [5]]

Logic:

length of the array is 5 <br>
No. of equally sized arrays = 5 <br>

Since the original array is equally divided by N hence we need to ensure the contents are split into equally sized arrays. Here, in this use case we are expecting the array to be split into 5 sub arrays.

```
// Check the contents of array to be inserted
let contentSize = Math.ceil(array.length / groupBy);

while (array.length) {
  // Push and splice the contents of array
  result.push(array.splice(0, contentSize));
  groupBy -= 1;
}
```

### Installation and Usage

Install the dependencies with 
```
npm install
```

Start the server
```
npm start
```

Send POST request http://localhost:8080/run-cases

Sample request payload

```
[
    {
        "array": [1,2,4,5,5, 4,5,5, 4,5,5],
        "split": 9
    },
    {
        "array": [1,2,4,5,5, 4,5,5, 4,5,5],
        "split": 2
    }
]
```

Sample Request Response

```
{"status":200,"body":[{"testCase":[[1,2],[4,5],[5],[4],[5],[5],[4],[5],[5]]},{"testCase":[[1,2,4,5,5,4],[5,5,4,5,5]]}]}
```
