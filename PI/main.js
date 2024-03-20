const btnAddProduto = document.querySelector(".button-add")
var newValue
const tableIten = document.querySelector(".tableIten")
var inputItemCod = document.getElementById("inputCodProduto")
var inputItemName = document.getElementById("inputNameProduto")
var inputItemPrice = document.getElementById("inputPriceProduto")

btnAddProduto.addEventListener("click",function(e){
   
    createNewIten(); //Função que só é acionada ao clicar no botão
    console.log("Button Add");
})
//Essa aqui é a função que cria as linhas da tabela
function createNewIten(){
    const newItem = document.createElement("tr")
    for (let i = 0; i < 4; i++) {
        //Valores da entrada dos inputs
        var produtosDados = [
            inputItemCod.value,
            inputItemName.value,
            inputItemPrice.value
        ]
        //Isso aqui adiciona os valores da entrada nas celulas da tabela
        newValue = document.createElement("td");
        newValue.innerHTML = produtosDados[i] 
        newItem.appendChild(newValue);  
    }
    tableIten.appendChild(newItem);//esse aqui adiciona a linha da tabela

}


