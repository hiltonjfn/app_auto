const eliminatoria = ['Desobedecer à sinalização semafórica e de parada obrigatória',
    'Avançar sobre o meio-fio',
    'Não colocar o veículo na área balizada em, no máximo, três tentativas, no tempo estabelecido (5min)',
    'Avançar sobre o balizamento demarcado quando do estacionamento do veículo na vaga (Bater na baliza)',
    'Transitar em contramão de direção',
    'Não completar a realização de todas as etapas do exame',
    'Avançar a via preferencial',
    'Provocar acidente durante a realização do exame',
    'Exceder a velocidade regulamentada para a via (30km)',
    'Cometer qualquer outra infração de trânsito de natureza gravíssima']

const p3 = ['Desobedecer à sinalização da via ou agente da autoridade de trânsito',
    'Não observar as regras de ultrapassagem ou de mudança de direção',
    'Não dar preferência de passagem ao pedestre que estiver atravessando a via transversal mesmo que ocorra sinal verde para o veículo',
    'Manter aporta do veículo aberta ou semiaberta durante o percurso do exame ou parte dele',
    'Não sinalizar com antecedência a manobra pretendida ou sinalizá-la incorretamente',
    'Não usar devidamente o cinto de segurança',
    'Perder o controle da direção do veículo em movimento',
    'Cometer qualquer outra infração de trânsito de natureza grave']

const p2 = ['Executar o percurso da prova, no todo ou parte dele, sem estar com o freio de mão inteiramente livre',
    'Trafegar em velocidade inadequada para as condições adversas do local, da circulação do veículo ou do clima',
    'Interromper o funcionamento do motor, sem justa razão, após o início do exame',
    'Fazer a conversão incorretamente',
    'Usar a buzina sem necessidade ou em local proibido',
    'Desengrenar o veículo nos declives',
    'Colocar o veículo em movimento, sem observar as cautelas necessárias',
    'Usar o pedal de embreagem, antes de usar o pedal de freio nas frenagens',
    'Entrar nas curvas com a engrenagem de tração do veículo em ponto neutro',
    'Engrenar ou utilizar as marchas de maneira incorreta durante o percurso',
    'Cometer qualquer outra infração de trânsito de natureza média']

const p1 = ['Provocar movimentos irregulares no veículo sem motivo justificado',
    'Ajustar incorretamente o banco de veículo destinado ao condutor',
    'Não ajustar devidamente os espelhos retrovisores',
    'Apoiar o pé no pedal de embreagem com o veículo engrenado e em movimento',
    'Utilizar ou interpretar incorretamente os instrumentos do painel do veículo',
    'Dar partida ao veículo com a engrenagem de tração ligada',
    'Tentar movimentar o veículo com a engrenagem de tração em ponto neutro',
    'Cometer qualquer outra infração de natureza leve']

function lista(x,z,w) {
    const main = document.getElementById('accordionExample')

    main.innerHTML += `<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${z}" aria-expanded="true" aria-controls="collapse${z}">
            ${w}
        </button>
    </h2>
    <div id="collapse${z}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <ul class="list-group">
                ${x.map(e => li(e,z)).join(' ')}
            </ul>
        </div>
    </div>
</div>`
}

lista(eliminatoria,'x','Faltas Eliminatórias')
lista(p3,3,'Faltas Graves (3 pontos):')
lista(p2,2,'Faltas Médias (2 pontos):')
lista(p1,1,'Faltas Leves (1 pontos):')

