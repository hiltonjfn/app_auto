var timer; // Variável global para armazenar o intervalo
var countdown; // Variável para armazenar o tempo restante

function startTimer() {
  try {
    var timeElement = document.querySelector("#baliza p");
    timeElement.remove();
  } catch { }


  countdown = 300; // 5 minutos em segundos
  var baliza = document.getElementById("baliza");

  // Remove o botão "Iniciar"
  var startButton = document.getElementById("start-button");
  startButton.remove();

  // Cria o botão "Parar"
  var stopButton = document.createElement("button");
  stopButton.textContent = "Parar";
  stopButton.className = "btn btn-primary"; // Adiciona a classe "btn btn-primary" ao botão
  stopButton.onclick = stopTimer;
  baliza.appendChild(stopButton);

  // Cria um elemento <p> para exibir o tempo
  var timeElement = document.createElement("p");
  timeElement.id = "time-element"; // Adiciona um ID ao elemento para manipulação posterior
  timeElement.textContent = formatTime(countdown);
  baliza.appendChild(timeElement, timeElement, timeElement);


  //checkbox!
  var div = document.createElement('div');
  div.id = 'checkbox_div';

  // Define o estilo da div
  div.style.display = 'inline-block';

  // Cria os três inputs
  for (var i = 0; i < 3; i++) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.onchange = verificarCheckboxes;
    input.className = 'form-check-input col-2';

    // Adiciona os inputs à div
    div.appendChild(input);
  }
  baliza.appendChild(div);




  // Cria um intervalo para atualizar o tempo a cada segundo
  timer = setInterval(function () {
    countdown--;

    // Atualiza o texto do elemento <p> com o tempo restante formatado
    timeElement.textContent = formatTime(countdown);

    if (countdown <= 0) {
      clearInterval(timer);
      timeElement.textContent = "Tempo esgotado!";
    }
  }, 1000);
}

function stopTimer() {


  clearInterval(timer);
  var baliza = document.getElementById("baliza");

  // Remove o botão "Parar"
  var stopButton = document.querySelector("#baliza button");
  stopButton.remove();

  var checkbox_div = document.getElementById('checkbox_div')
  checkbox_div.remove()

  // Remove o antigo 'p'
  var timeElement = document.getElementById('time-element');
  timeElement.remove();

  // Cria o botão "Iniciar" novamente
  var startButton = document.createElement("button");
  startButton.textContent = "Reiniciar";
  startButton.id = "start-button";
  startButton.className = "btn btn-primary"; // Adiciona a classe "btn btn-primary" ao botão
  startButton.addEventListener("click", startTimer);
  baliza.appendChild(startButton);


  var timeElement = document.createElement("p");
  timeElement.id = "time-element"; // Adiciona um ID ao elemento para manipulação posterior
  timeElement.textContent = formatTime(countdown);
  baliza.appendChild(timeElement);
  // Não remove o elemento <p> com o tempo
  // Não faz nenhuma alteração no elemento <p>
}

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var secondsRemaining = seconds % 60;
  var formattedMinutes = minutes.toString().padStart(2, "0");
  var formattedSeconds = secondsRemaining.toString().padStart(2, "0");
  return formattedMinutes + ":" + formattedSeconds;
}


var indice = [0, 0, 0, 0, 0]


const recurso1 = () => alterarImagem(["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg"], 1)

const recurso2 = () => alterarImagem(["img/img8.jpg", "img/img9.jpg", "img/img10.jpg"], 2)

const recurso3 = () => alterarImagem(["img/img11.jpg", "img/img12.jpg", "img/img13.jpg", "img/img13.jpg"], 3)

const recurso4 = () => alterarImagem(["img/img15.jpg", "img/img16.jpg", "img/img17.jpg", "img/img18.jpg", "img/img19.jpg"], 4)

function chamarFuncoes() {
  recurso1();
  recurso2();
  recurso3();
  recurso4();
}

function alterarImagem(imagens, x) {
  var imagem1 = document.getElementById(`image${x}`);
  indice[x] = (indice[x] + 1) % imagens.length; // Alterna entre as imagens em loop
  imagem1.src = imagens[indice[x]];



}

setInterval(chamarFuncoes, 1000); // Chama a função a cada 5 segundos (5000 milissegundos)


function verificarCheckboxes() {
  // Obtém os checkboxes dentro da div com o id "checkbox_div"
  var checkboxes = document.querySelectorAll('#checkbox_div input[type="checkbox"]');

  // Verifica se todos os checkboxes foram marcados
  var todosMarcados = true;
  checkboxes.forEach(function(checkbox) {
    if (!checkbox.checked) {
      todosMarcados = false;
    }
  });

  // Exibe o modal caso todos os checkboxes tenham sido marcados
  var modal = document.getElementById('modal');
  if (todosMarcados) {
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

function fecharModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}