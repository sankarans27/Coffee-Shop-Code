function changePrice(size) {
    var price;
    if (size === "10oz") {
      price = "$4";
    } else if (size === "16oz") {
      price = "$5.50";
    } else {
      price = "$4-$5.50";
    }
    document.getElementById("price1").innerHTML = price;
  } 
  
  function changePrice1(size1) {
    var price1;
    if (size1 === "10oz") {
      price1 = "$3";
    } else if (size1 === "16oz") {
      price1 = "$3.50";
    } else {
      price1 = "$3-$3.50";
    }
    document.getElementById("price2").innerHTML = price1;
  }
  
  function changePrice2(size2) {
    var price2;
    if (size2 === "10oz") {
      price2 = "$3";
    } else if (size2 === "16oz") {
      price2 = "$3.50";
    } else {
      price2 = "$3-$3.50";
    }
    document.getElementById("price3").innerHTML = price2;
  }

  
  function changePrice3(size3) {
    var price3;
    if (size3 === "16oz") {
      price3 = "$3.50";
    } else if (size3 === "20oz") {
      price3 = "$4";
    } else {
      price3 = "$3.50-$4";
    }
    document.getElementById("price4").innerHTML = price3;
  }

  function changePrice4(size4) {
    var price4;
    if (size4 === "16oz") {
      price4 = "$4";
    } else if (size4 === "20oz") {
      price4 = "$4.50";
    } else {
      price4 = "$4-$4.50";
    }
    document.getElementById("price5").innerHTML = price4;
  }

  function changePrice5(size5) {
    var price5;
    if (size5 === "10oz") {
      price5 = "$4";
    } else if (size5 === "16oz") {
      price5 = "$4.50";
    } else {
      price5 = "$4-$4.50";
    }
    document.getElementById("price6").innerHTML = price5;
  }

  function changePrice6(size6) {
    var price6
    if (size6 === "10oz") {
      price6 = "$4";
    } else if (size6 === "16oz") {
      price6 = "$4.50";
    } else {
      price6 = "$4-$4.50";
    }
    document.getElementById("price7").innerHTML = price6;
  }

  function changePrice7(size7) {
    var price7
    if (size7 === "16oz") {
      price7 = "$5.50";
    } else if (size7 === "20oz") {
      price7 = "$6";
    } else {
      price7 = "$5.50-$6";
    }
    document.getElementById("price8").innerHTML = price7;
  }


  function changePrice8(milk) {
    var fee = 0.75;
    var price6 = parseFloat(document.getElementById("price6").innerText.replace('$', '').split('-')[0]);
    
    if (milk === "1" || milk === "2") {
        var totalPrice = price6 + fee;
        document.getElementById("price7").innerHTML = "$" + totalPrice.toFixed(2);
    } else {
        var totalPrice = price6 - fee;
        document.getElementById("price7").innerHTML = "$" + price6.toFixed(2);
    }
}
console.log(milk)
