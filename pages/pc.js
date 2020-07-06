// Components
import Title from '../components/title'
import Back from '../components/back'
import { Image, SimpleImage } from '../components/figure'
import { Code, InlineCode } from '../components/code'

// Layouts
import Page from '../layouts/page'
import markdown from 'markdown-in-js'
import components from '../components'

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

<a href='https://drive.google.com/file/d/15_gSZ6SLpyMk23H0r2f5CltLPKxKACD0/view?usp=sharin' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Unidade_1-2c3e50.svg?style=flat-square&logo=microsoft-powerpoint&logoColor=white&labelColor=e74c3c" />
</a>

Na Unidade 1, vimos o conceito de resolução de problemas, e que ela é baseada em quatro etapas: Compreensão, Desenvolvimento de Estratégia, Execução e Revisão.

Para desenvolver estratégias de solução podemos utilizar de fluxogramas. Estes, podem ser utilizados como base na criação de algorítmos, pois representam a lógica de um algorítmo de maneira fiel.

Para deixar os fluxogramas mais bonitos, podemos utilizar um programa chamado [draw.io](https://www.draw.io/)

# Unidade 2 - Variáveis e Operações


<a href='https://drive.google.com/file/d/1cglJudMVZDX6xWseA8WURONlZPCBWHIc/view?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Unidade_2-2c3e50.svg?style=flat-square&logo=microsoft-powerpoint&logoColor=white&labelColor=e74c3c" />
</a>
<a href='https://colab.research.google.com/drive/19N_NSL4HKb1ZjMIswBqeY2sapkiuB6Bu?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Leitura Escrita e Desvio-2c3e50.svg?style=flat-square&logo=jupyter&logoColor=white&labelColor=f39c12" />
</a>

Na unidade dois transformamos fluxogramas em código e resolvemos problemas com programas. A linguagem programação utilizada foi Python.

A programação em python pode ser feita de maneira local (processando os programas em seu computador) com a utilização do [Anaconda](https://www.anaconda.com/) , ou online com o [Google Colab](https://colab.research.google.com/).

## Bibliocas
Preparei alguns materiais sobre bibliotecas Python que podemos utilizar.


<a href='https://colab.research.google.com/drive/1VGHuVyaNtdux6CPwZMLLA23_u0AFg51s?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Pandas-2c3e50.svg?style=flat-square&logo=python&logoColor=white&labelColor=9c1de7" />
</a>

<a href='https://colab.research.google.com/drive/1Nc1zf4Vaie820uVxxxSmTjBq78AYkOxh?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Matplotlib-2c3e50.svg?style=flat-square&logo=python&logoColor=white&labelColor=9c1de7" />
</a>


<a href='https://colab.research.google.com/drive/1pUahKyytQUdRmBbrKtPpZxUHoLmyHLSs?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Plotly-2c3e50.svg?style=flat-square&logo=python&logoColor=white&labelColor=9c1de7" />
</a>

O que faz o Python forte são suas bibliotecas. Com elas podemos fazer Data Science, Gráficos, Jogos etc. Esta Unidade é voltada às principais bibliotecas do Python.

# Unidade 3 - Ferramentas de Desenvolvimento

Agora que já aprendemos o básico da lógica de programação com o Python, podemos começar a criar nossos projetos.

<a href='https://bit.ly/TDC4kids2020' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Piskel-2c3e50.svg?style=flat-square&logo=awesome-lists&logoColor=white&labelColor=fc5185" />
</a>

<a href='https://docs.google.com/presentation/d/1j8NTonOgMRGBvvpw5gxUc5zMIsRGCkr4GiByePQYiqc/edit?usp=sharing' target='_blank' rel="noreferrer">
  <SimpleImage src="https://img.shields.io/badge/Unity_Playground-2c3e50.svg?style=flat-square&logo=unity&logoColor=white&labelColor=000000" />
</a>



`

export default () => (
  <Page>
    <Title
      maintitle={'Pensamento Computacional'}
      description={
        'Esta pégina destina-se ao compartilhamento de informações sobre o Itinerário de Pensamento Computacional do Colégio Salesiano Itajaí.'
      }
      coverURL={'/static/pc.png'}
    />
    <section className="section" id="hero">
      <div className="container">
        <h1 className="title">Pensamento Computacional</h1>
        <h2 className="subtitle" />
        <p>
          O pensamento computacional é uma distinta capacidade criativa, crítica
          e estratégica de usar os fundamentos da computação nas mais diversas
          áreas de conhecimento com a finalidade de resolver problemas de uma
          maneira individual ou colaborativa.
        </p>
        <p>
          Esta pégina destina-se ao compartilhamento de informações sobre o
          Itinerário de Pensamento Computacional do{' '}
          <a
            href="https://salesianoitajai.g12.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colégio Salesiano Itajaí
          </a>.
        </p>
      </div>
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
