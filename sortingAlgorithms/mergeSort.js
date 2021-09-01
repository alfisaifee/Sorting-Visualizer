async function mergeSort() {
  const ele = document.querySelectorAll(".bar");
  let n = ele.length;
  if(flag) return;
  await mergeSortHelper(ele, 0, n - 1);
}

async function mergeSortHelper(ele, l, r) {
  if (l < r) {
    let m = l + Math.floor((r - l) / 2);
    await mergeSortHelper(ele, l, m);
    await mergeSortHelper(ele, m + 1, r);
    await merge(ele, l, m, r);
  }
}

async function merge(ele, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    if(flag) return;
    await delayTime(delay);
    ele[l + i].style.backgroundColor = "red";
    left[i] = ele[l + i].style.height;
  }

  for (let j = 0; j < n2; j++) {
    if(flag) return;
    await delayTime(delay);
    ele[m + 1 + j].style.backgroundColor = "orange";
    right[j] = ele[m + 1 + j].style.height;
  }

  let i = 0,
    j = 0,
    k = l;

  while (i < n1 && j < n2) {
    if(flag) return;
    await delayTime(delay);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (n1 + n2 == ele.length) ele[k].style.backgroundColor = "green";
      else ele[k].style.backgroundColor = "purple";
      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (n1 + n2 == ele.length) ele[k].style.backgroundColor = "green";
      else ele[k].style.backgroundColor = "purple";
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }

  while (i < n1) {
    if(flag) return;
    if (n1 + n2 == ele.length) ele[k].style.backgroundColor = "green";
    else ele[k].style.backgroundColor = "purple";
    ele[k].style.height = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    if(flag) return;
    if (n1 + n2 == ele.length) ele[k].style.backgroundColor = "green";
    else ele[k].style.backgroundColor = "purple";
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}
