function dobrar(num){valorm = num *2;
    return num;
}
let valor = 10;
console.log(dobrar (valor)); // 20
console.log(valor); // (valor origial não mudou)    

function saudacao(nome="Visitante") {
    console.log(`Ola, ${nome}`)
}
saudacao();//
saudacao("joshua"); //

function adicionarItem(lista) {
    lista.push("Novo item");
}
let itens=["Item 1" ,"Item 2"];
adicionarItem(itens);
console.log(itens);//["Item 1","Item 2", "Novo item"]..