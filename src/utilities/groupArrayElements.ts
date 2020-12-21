import { IGroupArrayElementArgs } from "../interfaces/groupArrayElements.interface";

export const groupArrayElements = (args: IGroupArrayElementArgs) => {
  const { array, split } = args;
  let result = [];
  let groupBy = split;

  if (split === 0) {
    return array;
  }

  // Check if the reminder equals to zero
  const isDividend = array.length % groupBy === 0;
  // Check the contents of array to be inserted
  let contentSize = Math.ceil(array.length / groupBy);

  while (array.length) {
    // Check the contents of array to be inserted if the original array cannot be divided equally by N
    if (!isDividend) {
      contentSize = Math.ceil(array.length / groupBy);
    }
    // Push and splice the contents of array
    result.push(array.splice(0, contentSize));
    groupBy -= 1;
  }

  return result;
};
