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
  id: 'neat-snake',
  hasCover: true
})(markdown(components)`

Existem vários desafios ao modelar métodos de inteligência artificial para jogadores autônomos em jogos (bots).
O NEAT é um dos modelos que, combinando algoritmos genéticos e redes neurais, procura descrever um comportamento bot de maneira mais inteligente.
No NEAT, uma rede neural é usada para tomada de decisão, recebendo informações relevantes do ambiente e dando decisões em tempo real. 
De uma maneira mais abstrata, um algoritmo genético é aplicado para a etapa de aprendizado dos pesos, camadas e parâmetros das redes neurais. 

Esta postagem descreve um projeto que fiz no [lia](https://lia-univali.github.io/).
O código fonte pode ser encontrado no [GitHub](https://github.com/lia-univali/neat-snake)

# Introdução

Este projeto utiliza de uma técnica denominada NEAT (Neuro-Evolution of Augmenting Topologies), que usufrui tanto de redes neurais quanto de algoritmos genéticos para gerar indivíduos mais aptos.



`)
