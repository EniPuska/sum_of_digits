document.getElementById("calculate_button").onclick = function(){
     var value = document.getElementById("thenumber").value;
        sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  } 
  var result = document.getElementById("result").innerHTML = sum;
  sum = result.value;
}