
function AdicionarTarefa() {

    let tasksAdded = document.getElementById("TarefasAdicionadas");
    let tasks = document.getElementById("Tarefa").value;
    let newTasks = document.createElement("li");

    let tasksNumber = tasksAdded.getElementsByTagName("li").length;

    if (tasksNumber >= 10){
        alert("Limite de tarefas atingido!");
        return; 
    }

    tasks = document.getElementById("Tarefa").value.trim();
    if (tasks === "") return; 
    newTasks.textContent = `⤿ ${tasks}`;

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = `Remover`;
    deletebutton.onclick = function () {
        newTasks.remove();

        atualizarContador(); 
    };

    newTasks.appendChild(deletebutton);

    tasksAdded.appendChild(newTasks);

    atualizarContador();

    document.getElementById("Tarefa").value = "";
}

function atualizarContador(){
    const Count = document.getElementById("TarefasAdicionadas").getElementsByTagName("li").length;
    document.getElementById("contador").textContent = `${Count}/10`;
}


function tocarMusica(){

    const music = document.getElementById('musica');
    music = music.play();

}

function pararMusica(){

    const music = document.getElementById('musica');
    music = music.pause();

}

function abaixarVolume(){
    const music = document.getElementById('musica');
    music.volume = 0.1;
    console.log("funcionando");
}