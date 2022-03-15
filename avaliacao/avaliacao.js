
var resultados = []

function calcular(){

   let valor1 = document.getElementById('valor1').value
   let valor2 = document.getElementById('valor2').value
   let resultado = parseFloat(valor1) / parseFloat(valor2)
   resultados.push(resultado)
   document.getElementById('R').value = resultados
 

  }
  
function limpar(){
   document.getElementById("valor1").value =""
   document.getElementById("valor2").value =""

}
   