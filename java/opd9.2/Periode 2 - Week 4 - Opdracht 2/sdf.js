function toonTafel(getal) {
    document.write("<h2>Tafel van " + getal + "</h2>");
  
    for (let i = 1; i <= 10; i++) {
      let resultaat = i * getal;
      document.write(i + " x " + getal + " = " + resultaat + "<br>");
    }
  }
  
  toonTafel(5); 
  toonTafel(8); 
  toonTafel(12); 