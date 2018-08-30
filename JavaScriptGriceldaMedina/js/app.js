var operandoa;
var operandob;
var operacion;
var cadena="";
var tam=0;
var prim=false;

//BOTON ON
function downOn(){
	document.getElementById('on').style="height:59px;";
	cadena = "0";
	document.getElementById("display").innerHTML = cadena;
}
document.getElementById('on').onmousedown=downOn;

function upOn(){
	document.getElementById('on').style="height:65|px;";
}
document.getElementById('on').onmouseup=upOn;

//BOTON SIGNO
function downSigno(){
	document.getElementById('sign').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	var sig = cadena.includes("-");
	
	if(tam==1 && prim==true){
		cadena = "0";
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false && sig==false){
		cadena = "-"+cadena;
		document.getElementById("display").innerHTML = cadena;
	}
	if (tam<8 && tam>1 && sig==false){
		cadena = "-"+cadena;
		document.getElementById("display").innerHTML = cadena;
	}
	
	if(tam==2 && prim==false && sig==true){
		var cad = cadena.substring(1,(tam));
		cadena =cad;
		document.getElementById("display").innerHTML = cadena;
	}
	if (tam<8 && tam>2 && sig==true){
		cadena = cadena.substring(1,(tam));
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('sign').onmousedown=downSigno;

function upSigno(){
	document.getElementById('sign').style="height:65|px;";
}
document.getElementById('sign').onmouseup=upSigno;

//BOTON DIV

/*
division.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "/";
  		limpiar();
}
*/

function limpiar(){
  cadena = "";
  document.getElementById("display").innerHTML = cadena;
}

function downDiv(){
	document.getElementById('dividido').style="height:59px;";
	operandoa = cadena;
  	operacion = "/";
  	limpiar();
}
document.getElementById('dividido').onmousedown=downDiv;

function upDiv(){
	document.getElementById('dividido').style="height:65|px;";
}
document.getElementById('dividido').onmouseup=upDiv;

//BOTON 7
function down7(){
	document.getElementById('7').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "7");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"7";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"7";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "7";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('7').onmousedown=down7;

function up7(){
	document.getElementById('7').style="height:65|px;";
}
document.getElementById('7').onmouseup=up7;

//BOTON 8
function down8(){
	document.getElementById('8').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "8");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"8";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"8";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "8";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('8').onmousedown=down8;

function up8(){
	document.getElementById('8').style="height:65|px;";
}
document.getElementById('8').onmouseup=up8;

// BOTON 9
function down9(){
	document.getElementById('9').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "9");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"9";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"9";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "9";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('9').onmousedown=down9;

function up9(){
	document.getElementById('9').style="height:65|px;";
}
document.getElementById('9').onmouseup=up9;

//BOTON POR
function downPor(){
	document.getElementById('por').style="height:59px;";
	operandoa = cadena;
  	operacion = "*";
  	limpiar();
}
document.getElementById('por').onmousedown=downPor;

function upPor(){
	document.getElementById('por').style="height:65|px;";
}
document.getElementById('por').onmouseup=upPor;

//BOTON 4
function down4(){
	document.getElementById('4').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "4");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"4";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"4";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "4";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('4').onmousedown=down4;

function up4(){
	document.getElementById('4').style="height:65|px;";
}
document.getElementById('4').onmouseup=up4;

//BOTON 5
function down5(){
	document.getElementById('5').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "5");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"5";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"5";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "5";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('5').onmousedown=down5;

function up5(){
	document.getElementById('5').style="height:65|px;";
}
document.getElementById('5').onmouseup=up5;

//BOTON 6
function down6(){
	document.getElementById('6').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "6");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"6";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"6";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "6";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('6').onmousedown=down6;

function up6(){
	document.getElementById('6').style="height:65|px;";
}
document.getElementById('6').onmouseup=up6;

//BOTON MENOS
function downMenos(){
	document.getElementById('menos').style="height:59px;";
	operandoa = cadena;
  	operacion = "-";
  	limpiar();
}
document.getElementById('menos').onmousedown=downMenos;

function upMenos(){
	document.getElementById('menos').style="height:65|px;";
}
document.getElementById('menos').onmouseup=upMenos;

//BOTON 1
function down1(){
	document.getElementById('1').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "1");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"1";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"1";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "1";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('1').onmousedown=down1;

function up1(){
	document.getElementById('1').style="height:65|px;";
}
document.getElementById('1').onmouseup=up1;

//BOTON 2
function down2(){
	document.getElementById('2').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "2");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"2";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"2";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "2";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('2').onmousedown=down2;

function up2(){
	document.getElementById('2').style="height:65|px;";
}
document.getElementById('2').onmouseup=up2;

//BOTON 3
function down3(){
	document.getElementById('3').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	/*Si hay un solo número y es cero reemplaza*/
	if(tam==1 && prim==true){
		cadena = cadena.replace("0", "3");
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"3";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"3";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "3";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('3').onmousedown=down3;

function up3(){
	document.getElementById('3').style="height:65|px;";
}
document.getElementById('3').onmouseup=up3;

//BOTON 0
function down0(){
	document.getElementById('0').style="height:59px;";
	tam = cadena.length;
	prim = cadena.startsWith("0");
	if(tam==1 && prim==true){
		cadena = "0";
		document.getElementById("display").innerHTML = cadena;
	}
	if(tam==1 && prim==false){
		cadena = cadena+"0";
		document.getElementById("display").innerHTML = cadena;
	}
	/*Si hay menos de 8 digitos, pero más de 1 y el primero es agrega*/
	if (tam<8 && tam>1){
		cadena = cadena +"0";
		document.getElementById("display").innerHTML = cadena;
	}
	if (cadena==""){
		cadena = "0";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('0').onmousedown=down0;

function up0(){
	document.getElementById('0').style="height:65|px;";
}
document.getElementById('0').onmouseup=up0;

//BOTON PUNTO
function downPunto(){
	document.getElementById('punto').style="height:59px;";
	tam = cadena.length;
	var pt = cadena.includes(".");
	if (tam<8 && pt==false){
		cadena = cadena +".";
		document.getElementById("display").innerHTML = cadena;
	}
}
document.getElementById('punto').onmousedown=downPunto;

function upPunto(){
	document.getElementById('punto').style="height:65|px;";
}
document.getElementById('punto').onmouseup=upPunto;

//BOTON IGUAL

igual.onclick = function(e){
  		operandob = resultado.textContent;
  		resolver();
  }
  
function resetear(){
  cadena = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  //resetear();
  var resu= res.toString();
  cadena=resu.substring(0,8);
  document.getElementById("display").innerHTML = cadena;
}

function downIgual(){
	document.getElementById('igual').style="height:59px;";
	operandob = cadena;
	resolver();
}
document.getElementById('igual').onmousedown=downIgual;

function upIgual(){
	document.getElementById('igual').style="height:65|px;";
}
document.getElementById('igual').onmouseup=upIgual;

//BOTON MAS
function downMas(){
	document.getElementById('mas').style="height:130px;";
	operandoa = cadena;
  	operacion = "+";
  	limpiar();
}
document.getElementById('mas').onmousedown=downMas;

function upMas(){
	document.getElementById('mas').style="height:140px;";
}
document.getElementById('mas').onmouseup=upMas;