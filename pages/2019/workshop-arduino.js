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
  id: 'workshop-arduino',
  hasCover: true
})(markdown(components)`
# Desbravando o Arduino com tecnologias de programação mais amigáveis

Este docuemnto foi desenvolvido para a TDC Florianópolis 2019. Neste evento eu tive a oportunidade de realizar este workshop com 30 crianças. A intenção de disponibilizar aqui o planejamento, é permitir que a mesma metodologia seja utilizada em outros eventos e aplicada por outras pessoas.
![](/static/talks/tdcflp-2019.jpg)

## Materiais


* 1 Computador com o Arduino IDE Instalado.
* 1 Arduino
* 4 Resistores de 330 ohm
* 2 Resistores de 560 ohm
* 2 LEDs verdes, 2 amarelos e dois vermelhos.
* Papel branco (aproximadamente duas folhas por criança)
* Papel celofane colorido (uma folha para cada 4 crianças)
* Uma caixa de leite
* Tesouras
* Cola branca

![](/static/essays/2019/workshop-arduino/cover.jpg)

## Espaço

É necessário organizar um espaço no qual as crianças possam se distribuir de maneira confortável para utilizar seus computadores. Isto inclui, mesas e cadeiras para todos.
Caso as crianças queiram trabalhar em grupo, deve-se restringir esta quantidade à quatro crianças por computador. 

## Chegada

Após a recepção deverá ser realizada uma listagem dos estudantes e dos materiais entregues a cada um.

## Introdução

Explicar o Arduino, sensores, atuadores, programas, firmware, e como isso pode ser utilizado. Ensinar a mandar código para o Arduino pela IDE (dado digital)

## Descobrindo Programação

Programar com as crianças um firmware capaz de acender um LED e mantê-lo aceso.

## Atividade Principal 

* Um LED piscando
* Um LED que pode ser aceso ou apagado (pelo computador)
* Uma casa que pode ser acesa ou apagada (pelo computador)

![](/static/essays/2019/workshop-arduino/houses.jpg)

# Atividade Extra (se der tempo/desafio)

Fazer uma sinaleira realista, com tempos diferentes entre cada sinal.

`)
