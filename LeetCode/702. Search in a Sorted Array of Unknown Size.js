//psuedo

let searchFunction = (reader, target) => {
  let left = 0;
  let right = 1;

  while (target > reader.get(right)) {
    left = right;
    right = right * 2;
  }

  let mid = Math.floor(left + (right - left) / 2);

  while (left <= right) {
    if (reader.get(left) <= target && reader.get(mid) === target) return mid;

    if (target > reader.get(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
