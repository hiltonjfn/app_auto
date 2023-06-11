function pontos() {
    const res = document.getElementById('res')
    const resPonto = document.getElementById('resPonto')
    const inputs = document.getElementsByTagName('input')

    const select = []

    for (let x = 0; x < inputs.length; x++) {
        0
        if (inputs[x].checked == true) {
            select.push(inputs[x])
        }
    }

    const funValor = e => e.value

    let valor = select.map(funValor)

    if (valor.includes('x')) {
        res.innerText = 'Falta eliminatoria'
    }else{res.innerText = 'Sem falta eliminatoria'}

    let soma = 0;

    for (let i = 0; i < valor.length; i++) {
      const numero = parseFloat(valor[i]);
      
      if (!isNaN(numero)) {
        soma += numero;
      }
    }
    resPonto.innerText = `Pontuação final: ${soma}`
    if(soma > 3){resPonto.innerText += ' Reprovado!'}
    console.log(soma)
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}