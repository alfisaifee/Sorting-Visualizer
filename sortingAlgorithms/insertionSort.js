async function insertionSort() {
  const ele = document.querySelectorAll(".bar");
  var n = ele.length;
  if(flag) return;
  ele[0].style.background = 'green';
  for (let i = 0; i < n; i++) {
    let j = i;
    while (
      j > 0 &&
      parseInt(ele[j-1].style.height) > parseInt(ele[j].style.height)
    ) {
      if(flag) return;
      ele[j].style.background = 'red';
      ele[j-1].style.background = 'red';
      await delayTime(delay);
      swap(ele[j], ele[j-1]);
      ele[j].style.backgroundColor = "green";
      ele[j-1].style.backgroundColor = "green";
      j--;
    }
  }
}
