async function selectionSort() {
  const ele = document.querySelectorAll(".bar");
  var n = ele.length;
  for (let i = 0; i < n; i++) {
    if(flag) return;
    let index = i;
    ele[i].style.backgroundColor = "orange";
    for (let j = i+1; j < n; j++) {
      ele[j].style.backgroundColor = "red";
      await delayTime(delay);
      if(flag) return;
      if (parseInt(ele[j].style.height) < parseInt(ele[index].style.height)) {
        if(index != i){
            ele[index].style.backgroundColor = "darkblue";
        }
        index = j;
      }
      else{
          ele[j].style.backgroundColor = "darkblue";
      }
    }
    if(flag) return;
    swap(ele[index], ele[i]);
    ele[index].style.backgroundColor = "darkblue";
    ele[i].style.backgroundColor = "green";
  }
  ele[0].style.backgroundColor = "green";
}
