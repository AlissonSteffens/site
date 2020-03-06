// Helpers
import moment from 'moment'

// Components
import Link from 'next/link'
import Title from '../components/title'
import Back from '../components/back'
import { Image } from '../components/figure'

// Layouts
import Page from '../layouts/page'
import markdown from 'markdown-in-js'
import components from '../components'

const text = (markdown(components)`
# Sobre o Itinerário


## Objetivos

* Entender como os computadores processam os dados e geram informações.
* Escrever programas capazes de automatizar tarefas diárias
* Compreender e utilizar o processo de modelagem e desenvolvimentos de sistemas simples (APPs)

Para ter uma visão melhor da turma, foi feito um [formulário](http://bit.ly/PCsalesiano). Peço aos que ainda não responderam que o façam.

O plano de aula pode ser encontrado [aqui](https://drive.google.com/file/d/1ZPzveZgqt5rmaewgZaoE1zvKyF8gRIz1/view?usp=sharing)

# Unidade 1 - Resolução de Problemas

Todo o conteúdo da aula pode ser encontrado nos [slides](https://drive.google.com/file/d/1cglJudMVZDX6xWseA8WURONlZPCBWHIc/view?usp=sharing), que serão atualizados progressivamente durante o itinerário.

Alguns links importantes:
* [lightbot](https://lightbot.com/flash.html)
* [Google Colab](https://colab.research.google.com/)

`)

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
                <p>O pensamento computacional é uma distinta capacidade criativa, crítica e estratégica de usar os fundamentos da computação nas mais diversas áreas de conhecimento com a finalidade de resolver problemas de uma maneira individual ou colaborativa.</p>
                <p>Esta pégina destina-se ao compartilhamento de informações sobre o Itinerário de Pensamento Computacional do <a href="https://salesianoitajai.g12.br/" target="_blank" rel="noopener noreferrer">Colégio Salesiano Itajaí</a>.</p>
              </div>
            </div>
            <div className="column image-column">
              <Image
                src="./static/dev_focus.svg"
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
        <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
      </svg>
      <Back />
    </section>

    
    
    <section className="section">
      <div className="container">
        {text}
      </div>
    </section>

    <style jsx>{`
    `}</style>
    <style global jsx>{`

    `}</style>
  </Page>
)
