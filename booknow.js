function fun() {
  // document.write("fjdi");
  document.getElementsByClassName("main")[0].style.visibility = "hidden";
  document.getElementsByClassName("main")[0].style.position = "absolute";

  document.getElementsByClassName("last")[0].style.visibility = "visible";
  // document.getElementById("check").style.color = "white";

  d1 = document.getElementById("name");
  d2 = document.getElementById("mono");
  d3 = document.getElementById("email");
  d4 = document.getElementById("adults");
  d5 = document.getElementById("Childs");
  d6 = document.getElementById("date");

  d7 = document.getElementById("one");
  d8 = document.getElementById("two");
  d9 = document.getElementById("three");
  d10 = document.getElementById("four");
  d11 = document.getElementById("five");
  d12 = document.getElementById("six");

  v1 = d1.value;
  v2 = d2.value;
  v3 = d3.value;
  v4 = d4.value;
  v5 = d5.value;
  v6 = d6.value;
  d7.innerHTML = v1;
  d8.innerHTML = v2;
  d9.innerHTML = v3;
  d10.innerHTML = v4;
  d11.innerHTML = v5;
  d12.innerHTML = v6;
}
