async function quickSort() {
  const ele = document.querySelectorAll(".bar");
  await quickSortHelper(ele, 0, ele.length - 1);
}

async function quickSortHelper(ele, l, r) {
  if (l >= r) {
    if (l >= 0 && l < ele.length && r >= 0 && r < ele.length) {
      ele[r].style.backgroundColor = "green";
      ele[l].style.backgroundColor = "green";
    }
    return;
  }
  const boundary = await partition(ele, l, r);
  await quickSortHelper(ele, l, boundary - 1);
  await quickSortHelper(ele, boundary + 1, r);
}

async function partition(ele, l, r) {
  const pivot = r;
  let boundary = l - 1;
  if(flag) return;
  await delayTime(delay);
  ele[pivot].style.backgroundColor = "#e05194";
  for (let i = l; i < r; i++) {
    if(flag) return;
    if (parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)) {
      swap(ele[i], ele[++boundary]);
      ele[boundary].style.backgroundColor = 'orange';
      if(i != boundary) ele[i].style.backgroundColor = 'red';
      await delayTime(delay);
    }
    else {
      ele[i].style.backgroundColor = 'red';
      await delayTime(delay);
    }
  }
  swap(ele[pivot], ele[++boundary]);
  if(Flag) return;
  await delayTime(delay);
  ele[boundary].style.backgroundColor = 'green';
  for(let k=0; k<ele.length; k++) {
      if(flag) return;
      if(ele[k].style.backgroundColor != 'green') {
          ele[k].style.backgroundColor = 'darkblue';    
      }
  }
  return boundary;
}
