// Helpers
import moment from 'moment'

// Components
import Link from 'next/link'
import Title from '../components/title'
import Back from '../components/back'
import { Image, SimpleImage } from '../components/figure'
import { Code, InlineCode } from '../components/code'

// Layouts
import Page from '../layouts/page'
import markdown from 'markdown-in-js'
import components from '../components'
import python from 'highlight.js/lib/languages/python'

const text = markdown(components)`
# Sobre o Itinerário

O Pensamento Computacional é uma ferramenta para resolver problemas, mas também envolve projetos de sistemas, entendimento do comportamento humano, pensar recursivamente, abstração e decomposição para resolver problemas complexos, modularização, uso de heurísticas de raciocínio por meio de algoritmos.

## Objetivos

* Entender como os computadores processam os dados e geram informações.
* Escrever programas capazes de automatizar tarefas diárias
* Compreender e utilizar o processo de modelagem e desenvolvimentos de sistemas simples (APPs)

Para ter uma visão melhor da turma, foi feito um [formulário](http://bit.ly/PCsalesiano). Peço aos que ainda não responderam que o façam.

O plano de aula pode ser encontrado [aqui](https://drive.google.com/file/d/1ZPzveZgqt5rmaewgZaoE1zvKyF8gRIz1/view?usp=sharing)

O pessoal da turma 1 criou um [documento do Google Docs](https://docs.google.com/document/d/19U2PPUZHITOw29YYn-nLeltKG5fPdQ8Kkbn95hlvV2U/edit?usp=sharing) onde eles fazem algumas anotações das aulas.

### Alguns links importantes:
* [lightbot](https://lightbot.com/flash.html)
* [Google Colab](https://colab.research.google.com/)


# Unidade 1 - Resolução de Problemas


[${(
  <SimpleImage src="https://img.shields.io/badge/slides-Unidade_1-f3558e.svg?style=flat&logo=microsoft-powerpoint&logoColor=white&labelColor=9c1de7" />
)}](https://drive.google.com/file/d/15_gSZ6SLpyMk23H0r2f5CltLPKxKACD0/view?usp=sharing)


Na Unidade 1, vimos o conceito de resolução de problemas, e que ela é baseada em quatro etapas: Compreensão, Desenvolvimento de Estratégia, Execução e Revisão.

Para desenvolver estratégias de solução podemos utilizar de fluxogramas. Estes, podem ser utilizados como base na criação de algorítmos, pois representam a lógica de um algorítmo de maneira fiel.

Para deixar os fluxogramas mais bonitos, podemos utilizar um programa chamado [draw.io](https://www.draw.io/)

# Unidade 2 - Variáveis e Operações
[${(
  <SimpleImage src="https://img.shields.io/badge/slides-Unidade_2-f3558e.svg?style=flat&logo=microsoft-powerpoint&logoColor=white&labelColor=9c1de7" />
)}](https://drive.google.com/file/d/1cglJudMVZDX6xWseA8WURONlZPCBWHIc/view?usp=sharing)

Na unidade dois transformamos fluxogramas em código e resolvemos problemas com programas. A linguagem programação utilizada foi Python.

A progrmaçaão em python pode ser feita de maneira local (processando os programas em seu computador) com a utilização do [Anaconda](https://www.anaconda.com/), ou online com o [Google Colab](https://colab.research.google.com/).

## Escrever

A maneira mais fácil de demonstrar algo utlizando Python, é escrevendo uma mensagem no console. Para isso, podemos utilizar a função *print()*

${<Code language="python" syntax={python}>{`print("Olá Mundo")`}</Code>}

## Ler

Outra função importante é a *input*, com ela podemos receber informações do usuário
${(
  <Code
    language="python"
    syntax={python}
  >{`nomedapessoa = input("Digite seu nome: ")
print("Meu nome é", nomedapessoa)`}</Code>
)}

> O input sempre retorna um valor do tipo String, caso queira um numero, é necessário converter

A conversão pode ser para inteiro (int) ou real (float)
${(
  <Code language="python" syntax={python}>{`x = input("Digite um número: ")
x = int(x)
x = x/3
print("O valor de x/3 é", x)`}</Code>
)}

## Desvio Condicional

Além de String (texto) e Números, há um terceiro tipo de variável chamado Lógico (ou booleano)

Ele pode ter apenas dois valores: True e False.

${(
  <Code language="python" syntax={python}>{`hojevaichover = True
print(hojevaichover)`}</Code>
)}

Uma variável do tipo lógico pode ser utilizada como teste lógico de um desvio condicional.

${(
  <Code language="python" syntax={python}>{`if (hojevaichover):
  print("Vai chover")
else:
  print("Não vai chover")`}</Code>
)}

Estas variáveis podem receber valores de qualquer inequação

${(
  <Code language="python" syntax={python}>{`dezehmenorquevinte = 10 < 20
if(dezehmenorquevinte):
  print("É menor")`}</Code>
)}

Estes testes podem ser postos diretamente na condição do desvio

${(
  <Code language="python" syntax={python}>{`if(10 < 20 ):
  print("é menor")`}</Code>
)}

### Testando Condições

Utilizando todo o que vimos até agora podemos fazer:

${(
  <Code
    language="python"
    syntax={python}
  >{`numero = int(input("Digite um número inteiro"))
if (numero < 10):
  print("Número informado é menor que 10")
else:
  print("Número informado não é menor que 10")`}</Code>
)}

É possivel realizar mais de um teste lógico utilizando as palavras chave *and* e *or*
${(
  <Code language="python" syntax={python}>{`if(numero < 10 and numero > 5):
print("número entre 5 e 10")`}</Code>
)}

Por fim, é possível verificar também se um número é igual ou diferente
${(
  <Code language="python" syntax={python}>{`if(numero == 7):
  print("é sete")
if(numero != 10):
  print("não é dez"))`}</Code>
)}



`

export default () => (
  <Page>
    <Title />

    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="text-column">
                <h1 className="title">Pensamento Computacional</h1>
                <p>
                  O pensamento computacional é uma distinta capacidade criativa,
                  crítica e estratégica de usar os fundamentos da computação nas
                  mais diversas áreas de conhecimento com a finalidade de
                  resolver problemas de uma maneira individual ou colaborativa.
                </p>
                <p>
                  Esta pégina destina-se ao compartilhamento de informações
                  sobre o Itinerário de Pensamento Computacional do{' '}
                  <a
                    href="https://salesianoitajai.g12.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colégio Salesiano Itajaí
                  </a>.
                </p>
              </div>
            </div>
            <div className="column image-column" />
          </div>
        </div>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="white"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>
      <Back />
    </section>

    <section className="section">
      <div className="container">{text}</div>
    </section>

    <style jsx>{`
      figure {
        text-align: left !important;
      }
    `}</style>
    <style global jsx>{`
      figure {
        text-align: left !important;
      }
    `}</style>
  </Page>
)
