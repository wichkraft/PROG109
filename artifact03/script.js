// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

//method for creating rhombus, puts top and bottom halves together
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    up(pHeight, pColorEven, pColorOdd, pSymbol);
    down(pHeight, pColorEven, pColorOdd, pSymbol);
    }

//function for top half of rhombus
function up(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine = "";
      for (i=0; i<pHeight; i++){
        rLine +="<p>";
        //Create each line on the Rhombus
      
        for(j=0;j<=i*2;j++){

            //Is the position even or odd so we can change the color
            if (j%2) //even
                rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else //odd
                rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        } 

        rLine +="</p>";
        // console.log(rLine);
    }
    document.getElementById("up").innerHTML = rLine;
}

//function for top half of rhombus
function down(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine = "";
    for (i=pHeight;i >= 0;i--) {
        rLine +="<p>";

        //Create each line on the Rhombus
        for(j=1;j<i*2;j++){

            //Is the position even or odd so we change the color
            if (j%2) //even
                rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>"; 
            else //odd
                rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
        rLine +="</p>";
        // console.log(rLine);
    }
    document.getElementById("down").innerHTML = rLine;
}