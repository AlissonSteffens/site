import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Code, InlineCode } from '../../components/code'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'

export default asPost({
  id: 'workshop-desplugado',
  hasCover: true
})(markdown(components)`
# Computação Desplugada em Jogos de Tabuleiro

Este documento foi desenvolvido para a TDC São Paulo 2019. Neste evento eu tive a oportunidade de realizar este workshop com 45 crianças. A intenção de disponibilizar aqui o planejamento, é permitir que a mesma metodologia seja utilizada em outros eventos e aplicada por outras pessoas.

![](/static/talks/tdcsp-2019.jpg)

Este workshop tem como objetivo introduzir os participantes à computação desplugada por meio de jogos de tabuleiro, que tratam conceitos computacionais. Esta atividade tem o diferencial de ser rotativa, serão aplicados vários jogos simultaneamente, e os participantes poderão trocar. O período de aplicação total é de cerca de duas horas, mas cada jogo (Explicação + gameplay) levará algo entre 15  e 45 minutos e, não havendo sequência exata, ao terminar uma atividade, a criança pode partir para outro jogo ou outro workshop.

## Chegada

Após a recepção deverá ser realizada uma listagem dos estudantes. Como não há necessariamente uma sequência de ações ou regras, as crianças não precisam de muita informação nesta etapa. Antes de cada partida nos jogos entretanto, deverá ser explicado o jogo, suas regras e objetivos.

## Materiais

Os participantes não precisarão de nenhum material próprio para participar das atividades, cada jogo entretanto contém uma lista de objetos que devem ser utilizados para sua aplicação. 

# Robot Turtle (4 participantes)

Robot Turtle é um jogo de tabuleiro para até quatro jogadores, cujo objetivo é levar uma tartaruga até uma gema posicionada no tabuleiro. A cada partida é necessário posicionar no tabuleiro: as tartarugas, as gemas e os obstáculos. Essas posições podem ser indicadas em um desafio predefinido ou podem ser definidas de maneira aleatória, desde que para cada tartaruga haja uma gema de mesma cor alcançável. Esses obstáculos podem ser de três tipos, “obstáculos de pedra” que precisam ser contornados; “obstáculos de gelo” que podem ser derretidos pelo personagem e “caixas” que podem ser empurradas pelo personagem.

# Code Master (1 participante)

Code Master é um jogo para um jogador, cujo o objetivo é levar o personagem, até o portal, coletando no caminho cristais de poder que são anexados à espada do personagem.
O jogo base é acompanhado de dez mapas, cada um com seis desafios, totalizando sessenta níveis, além de um segundo tabuleiro, com espaços onde devem ser inseridas as fichas com cores que indicam a aresta pela qual o personagem irá se movimentar.

# Chocolate Fix (1 participante)

Chocolate Fix é um jogo de lógica para um único jogador, onde o personagem principal é um aprendiz de padeiro que deve organizar caixas customizadas de chocolate. Para isso, o jogo traz apenas algumas pistas de como a caixa deve ser preenchida e o jogador deve completá-la de maneira correta para agradar os clientes.

# Labirinto (4 participantes)

Consiste em vários labirintos onde as crianças devem utilizar cartas com comandos semelhantes aos da linguagem LOGO para mover o personagem até a porta de saída.

`)
