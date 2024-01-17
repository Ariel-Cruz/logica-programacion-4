
function fibonacci(){
    const numero = document.getElementById("number").value;
    const resultado = document.getElementById("result");
    const boton = document.querySelector("button");
    resultado.innerHTML='';
    let n1 = 0, n2 = 1;
    array=[n1,n2]    
    for (let i=2; i<numero; i++){
        let n3 = array[i-1] + array[i-2];
        array.push(n3);      
    }
resultado.innerHTML = array.join(',');

}
fibonacci()