function soma() {

    		var num1 = parseFloat(document.getElementById('p').value);
    		var num2 = parseFloat(document.getElementById('s').value);

    		var sinal = document.getElementById("sinal").value;


    		if(sinal == "1"){
              document.getElementById('r').value= num1 + num2;
    		}
    		if(sinal == "2"){
              document.getElementById('r').value= num1 - num2;
    		}
    		if(sinal == "3"){
              document.getElementById('r').value= num1 * num2;
    		}
    		if(sinal == "4"){
              document.getElementById('r').value= (num1 / num2).toFixed(4);
    		}
    	}
