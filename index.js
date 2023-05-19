function insideOutside() {
    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);
    var radius = parseInt(document.getElementById("radius").value);
  
    var distance = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  
    var output = document.getElementById("output");
    if (distance <= radius) {
      output.textContent = "Point(" + x2 + ", " + y2 + ") is inside the circle with radius " + radius;
    } else {
      output.textContent = "Point(" + x2 + ", " + y2 + ") is outside the circle with radius " + radius;
    }
  }
  