class Livro {
    constructor() {
        this.livros = localStorage.getItem('tbLivros') === null
        ? []
        : JSON.parse(localStorage.getItem('tbLivros'))
    }

    compra(livro){
        if(document.getElementById('codigo').getAttribute('disabled') === 'disabled'){
            this.apaga(livro.codigo)
        }
		
        this.livros.push(livro) //adiciona um novo elemento ao array
        localStorage.setItem('tbLivros' , JSON.stringify(this.livros))
        alert('Compra efetuada com sucesso!')
    }

    apaga(codigo){
        let index = this.livros.findIndex(livro => livro.codigo == codigo)
        this.livros.splice(index, 1) 
        //salvamos a alteração
        localStorage.setItem('tbLivros', JSON.stringify(this.livros))
        livro.atualiza()
    }

    edita(livro){
        document.getElementById('codigo').setAttribute('disabled', 'disabled')
        document.getElementById('codigo').value = livro.codigo
        document.getElementById('titulo').value = livro.titulo
        document.getElementById('aluno').value = livro.aluno
        document.getElementById('editora').value = livro.editora
        document.getElementById('ano').value = livro.ano
        document.getElementById('valor').value = livro.valor
        document.getElementById('total').value = livro.total
    }

    lista(){
        const listCompras = this.livros.map((livro) => (
            `<tr>
             <td>${livro.codigo}</td>
             <td>${livro.titulo}</td>
             <td>${livro.editora}</td>
             <td>${livro.valor}</td>
             <td>${livro.total}</td>
             <td>
                <button id='apagar' onclick='livro.apaga(${livro.codigo})'>
                Apagar</button>
                <button id='editar' onclick='livro.edita(${JSON.stringify(livro)})'>
                Editar</button>
             </td>
             </tr>
             `//a crase concatena string com variável, antes da variavel usa-se $
        )) //abaixo faz a tabela, incluindo o cabeçalho da listagem
        return (`<table border='1' class='purpleHorizon'>
        <caption>Relação de Compras Efetuadas</caption>
        <thead>
            <th>Código</th> 
            <th>Título do Livro</th> 
            <th>Editora</th>
            <th>Valor do Livro</th>
            <th>Total Pago</th> 
            <th>Opções</th>
        </thead> 
        <tbody>${listCompras}</tbody>
        </table>
        `)
    }

    atualiza(){
        document.getElementById('listCompras').innerHTML = livro.lista()
    }
}

const livro = new Livro()
//tratamos o botão comprar
    document.getElementById('comprar').onclick = function () {
    const registro = { //pegando os valores digitados nos campos
        codigo: document.getElementById('codigo').value,
        titulo: document.getElementById('titulo').value,
        aluno: document.getElementById('aluno').value,
        editora: document.getElementById('editora').value,
		ano: document.getElementById('ano').value,
        valor: document.getElementById('valor').value,
        total: document.getElementById('total').value      
        }
		livro.compra(registro)
    }
    //tratamos a listagem
    window.onload = function() {
        livro.atualiza()
    }

document.getElementById('tabelaPreco').onclick = function () {
    alert('Preço Tabelado dos Livros: \n\n * Anterior à 2000 = R$ 20,00 \n * 2001-2010 = R$ 30,00 \n * 2011-2020 = R$ 40,00')
}
//tratamos o valor do livro, conforme data de edição
document.getElementById('ano').onchange = function () {
	let e = document.getElementById('ano');
    var selecao = e.options[e.selectedIndex].value;   

    if (selecao=='ano1'){
        let check = document.getElementById('aluno');
        if(check.checked == true) {
            let valor = 20
            let total = valor * (1-0.10)
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }else{
            let valor = 20
            let total = valor
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }
    }

    if (selecao=='ano2'){
        let check = document.getElementById('aluno');
        if(check.checked == true) {
            let valor =30
            let total = valor * (1-0.10)
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }else{
            let valor = 30
            let total = valor
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }
    }

    if (selecao=='ano3'){
        let check = document.getElementById('aluno');
        if(check.checked == true) {
            let valor = 40
            let total = valor * (1-0.10)
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }else{
            let valor = 40
            let total = valor
            document.getElementById('valor').value = valor.toFixed(2)
            document.getElementById('total').value = total.toFixed(2)
        }
    }
	
}
