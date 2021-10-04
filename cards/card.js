"use strict"

const herois = [
    'Irond - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]


const pegarConteudo = (cont)=>{
const posVir = cont.lastIndexOf(",")
return cont.substring(posVir)
}

const criarItem = (card, indice)=>{
    const container = document.querySelector('.container-cards')
    const novoTitulo = document.createElement('div')
    novoTitulo.classList.add("primeira")
    novoTitulo.id = pegarConteudo(card)
    novoTitulo.innerHTML = ` 
    <div class="primeira">
            <h2> titulo</h2>
        <div>
        lorem lorem lorem lorem lorem lorem

      </div>
    </div>
               
`
            container.appendChild(novoTitulo)
}
const carregarItem  = (card) => card.forEach(criarItem)
carregarItem(herois);