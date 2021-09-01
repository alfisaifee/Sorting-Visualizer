async function bubbleSort() {
    const ele = document.querySelectorAll(".bar");
    var n = ele.length;
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n-1-i; j++){
        if(flag) return;
        ele[j].style.backgroundColor = 'red';
        ele[j+1].style.backgroundColor = 'red';
        if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
          await delayTime(delay);
          swap(ele[j], ele[j+1]);
        }
        ele[j].style.backgroundColor = 'darkblue';
        ele[j+1].style.backgroundColor = 'darkblue';
      }
      ele[n-1-i].style.backgroundColor = 'green';
    }
    ele[0].style.backgroundColor = 'green';
}