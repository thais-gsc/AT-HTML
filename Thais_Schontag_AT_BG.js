async function mostrarFamosos(){
    let url = "https://api.boardgameatlas.com/api/search?random&pretty=true&limit=10&client_id=BBbVj4m8NB";

    const response = await fetch(url);

    const json = await response.json();

    for (let item of json.games){
        let foto = document.createElement("img");
        foto.src = item.image_url;
        foto.style.width = "11%";
        foto.alt = item.name;
        foto.title = item.name;
        foto.href = "#";
        foto.setAttribute('item', item);
        foto.addEventListener("click", infoSugestao);

        document.getElementById("sugestao").appendChild(foto);

        function infoSugestao(event){
            console.log(item.name);
            let imagem = document.createElement("img");
            imagem.src = item.image_url;
            imagem.style.width = "80%";
            imagem.className = "infoImagem";
            imagem.alt = item.name;
            imagem.title = item.name;

            document.querySelector("#imgSug").appendChild(imagem);
            document.querySelector("#nomeSug").innerText = `Nome: ${item.name}`;
            document.querySelector("#jogadoresSug").innerText = `Número de jogadores: ${item.min_players} a ${item.max_players}`;
            document.querySelector("#tempoSug").innerText = `Tempo estimado de partida: ${item.min_playtime} a ${item.max_playtime} minutos`;
            document.querySelector("#idadeSug").innerText = `Recomendado para maiores de ${item.min_age} anos`;

            function mostrarInfoSug(){
                document.querySelector("#sugestao").style.display = "none";
                document.querySelector("#infoSugestoes").style.display = "block";
                document.querySelector("#info0").style.display = "flex";
                document.querySelector(".botao").style.display = "block";
            }

            mostrarInfoSug();
        }
    }
}

function limparSugestoes(){
    document.getElementById("infoSugestoes").innerHTML = "";
    document.querySelector("#sugestao").style.display = "block";
}


mostrarFamosos();

async function buscarNome(){
    let nome = document.getElementById("buscaNome").value;

    let url = "https://api.boardgameatlas.com/api/search?name=" + nome + "&limit=9&client_id=BBbVj4m8NB";

    const response = await fetch(url);

    const json = await response.json();

    for (let item of json.games){
        let foto = document.createElement("img");
        foto.src = item.image_url;
        foto.style.width = "20%";
        foto.alt = item.name;
        foto.title = item.name;
        foto.href = "#";
        foto.className = "jogoNome";
        foto.id = item.id;
        foto.setAttribute('item', item);
        foto.addEventListener("click", infoNome);

        document.getElementById("resultadosNome").appendChild(foto);

        function infoNome(event){
            console.log(item.name);
            let imagem = document.createElement("img");
            imagem.src = item.image_url;
            imagem.style.width = "80%";
            imagem.className = "infoImagem";
            imagem.alt = item.name;
            imagem.title = item.name;

            document.querySelector("#imagemNome").appendChild(imagem);
            document.querySelector("#nomeNome").innerText = `Nome: ${item.name}`;
            document.querySelector("#jogadoresNome").innerText = `Número de jogadores: ${item.min_players} a ${item.max_players}`;
            document.querySelector("#tempoNome").innerText = `Tempo estimado de partida: ${item.min_playtime} a ${item.max_playtime} minutos`;
            document.querySelector("#idadeNome").innerText = `Recomendado para maiores de ${item.min_age} anos`;

            function mostrarInfoNome(){
                document.getElementById("resultadosNome").innerHTML = "";
                document.querySelector("#pesquisaNome").style.display = "none";
                document.querySelector("#infoNome").style.display = "block";
                document.querySelector("#info1").style.display = "flex";
                document.querySelector(".botao").style.display = "block";
            }

            mostrarInfoNome();
        }
    }
}

function limparNome(){
    document.querySelector("#infoNome").innerHTML = "";
    document.querySelector("#pesquisaNome").style.display = "block";
}

async function buscarMinJogadores(){
    let minimo = document.getElementById("buscaMinJogadores").value;

    let urlMin = "https://api.boardgameatlas.com/api/search?min_players=" + minimo + "&limit=9&client_id=BBbVj4m8NB";

    const response = await fetch(urlMin);

    const json = await response.json();


    for (let item of json.games){
        let foto = document.createElement("img");
        foto.src = item.image_url;
        foto.style.width = "20%";
        foto.alt = item.name;
        foto.title = item.name;
        foto.href = "#";
        foto.className = "jogoNome";
        foto.id = item.id;
        foto.setAttribute('item', item);
        foto.addEventListener("click", infoMin);

        document.getElementById("resultadosMin").appendChild(foto);

        function infoMin(event){
            console.log(item.name);
            let imagem = document.createElement("img");
            imagem.src = item.image_url;
            imagem.style.width = "80%";
            imagem.className = "infoImagem";
            imagem.alt = item.name;
            imagem.title = item.name;

            document.querySelector("#imagemMin").appendChild(imagem);
            document.querySelector("#nomeMin").innerText = `Nome: ${item.name}`;
            document.querySelector("#jogadoresMin").innerText = `Número de jogadores: ${item.min_players} a ${item.max_players}`;
            document.querySelector("#tempoMin").innerText = `Tempo estimado de partida: ${item.min_playtime} a ${item.max_playtime} minutos`;
            document.querySelector("#idadeMin").innerText = `Recomendado para maiores de ${item.min_age} anos`;

            function mostrarInfoMin(){
                document.getElementById("resultadosMin").innerHTML = "";
                document.querySelector("#pesquisaMin").style.display = "none"
                document.querySelector("#infoMin").style.display = "block";
                document.querySelector("#info2").style.display = "flex";
                document.querySelector(".botao").style.display = "block";
            }
            mostrarInfoMin();
        }
    }
}

function limparMin(){
    document.querySelector("#infoMin").innerHTML = "";
    document.querySelector("#pesquisaMin").style.display = "block";
}

async function buscarMaxJogadores(){
    let maximo = document.getElementById("buscaMaxJogadores").value;

    let urlMax = "https://api.boardgameatlas.com/api/search?max_players=" + maximo + "&limit=9&client_id=BBbVj4m8NB";

    const response = await fetch(urlMax);

    const json = await response.json();

    for (let item of json.games){
        let foto = document.createElement("img");
        foto.src = item.image_url;
        foto.style.width = "20%";
        foto.alt = item.name;
        foto.title = item.name;
        foto.href = "#";
        foto.setAttribute('item', item);
        foto.addEventListener("click", infoMax);

        document.getElementById("resultadosMax").appendChild(foto);


        function infoMax(event){
            console.log(item.name);
            let imagem = document.createElement("img");
            imagem.src = item.image_url;
            imagem.style.width = "80%";
            imagem.className = "infoImagem";
            imagem.alt = item.name;
            imagem.title = item.name;

            document.querySelector("#imagemMax").appendChild(imagem);
            document.querySelector("#nomeMax").innerText = `Nome: ${item.name}`;
            document.querySelector("#jogadoresMax").innerText = `Número de jogadores: ${item.min_players} a ${item.max_players}`;
            document.querySelector("#tempoMax").innerText = `Tempo estimado de partida: ${item.min_playtime} a ${item.max_playtime} minutos`;
            document.querySelector("#idadeMax").innerText = `Recomendado para maiores de ${item.min_age} anos`;

            function mostrarInfoMax(){
                document.getElementById("resultadosMax").innerHTML = "";
                document.querySelector("#pesquisaMax").style.display = "none"
                document.querySelector("#infoMax").style.display = "block";
                document.querySelector("#info3").style.display = "flex";
                document.querySelector(".botao").style.display = "block";
            }
            mostrarInfoMax()
        }
    }
}

function limparMax(){
    document.querySelector("#infoMax").innerHTML = "";
    document.querySelector("#pesquisaMax").style.display = "block";
}