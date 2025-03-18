// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de entrada
    const nomeAmigo = inputAmigo.value.trim(); // Valor do campo, removendo espaços extras

    // Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    // Verifica se o nome já está na lista
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array
    listaAmigos.push(nomeAmigo);

    // Atualiza a lista de nomes na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = '';
}

// Função para atualizar a lista de nomes na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); // Elemento <ul>
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    listaAmigos.forEach((amigo) => {
        const itemLista = document.createElement('li'); // Cria um <li>
        itemLista.textContent = amigo; // Define o texto do <li>
        listaAmigosElement.appendChild(itemLista); // Adiciona o <li> à <ul>
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    // Verifica se há pelo menos 2 nomes na lista
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos 2 nomes para sortear.');
        return;
    }

    // Embaralha a lista de amigos
    const listaEmbaralhada = embaralharLista([...listaAmigos]);

    // Cria o resultado do sorteio
    const resultadoElement = document.getElementById('resultado'); // Elemento <ul> do resultado
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior

    // Exibe o resultado do sorteio
    listaEmbaralhada.forEach((amigo, index) => {
        const itemLista = document.createElement('li'); // Cria um <li>
        const amigoSorteado = listaEmbaralhada[(index + 1) % listaEmbaralhada.length]; // Pega o próximo amigo da lista
        itemLista.textContent = `${amigo} tirou ${amigoSorteado}`; // Define o texto do <li>
        resultadoElement.appendChild(itemLista); // Adiciona o <li> à <ul>
    });
}

// Função para embaralhar a lista (algoritmo Fisher-Yates)
function embaralharLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório
        [lista[i], lista[j]] = [lista[j], lista[i]]; // Troca os elementos
    }
    return lista;
}