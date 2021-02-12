import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import { Image, MediumImage } from '../../components/figure'

export default asPost({
  id: 'censo-reddit-2020',
  hasCover: true
})(markdown(components)`
Todos os anos é realizada uma pesquisa interna no [r/brasil](https://www.reddit.com/r/brasil/) afim de melhor compreender os usuários do sub.

A pesquisa foi feita entre setembro e outubro de 2020 e contou com **1810** participantes, que responderam cerca de **100** perguntas.

## Sobre o processamento de dados

Todos os dados foram coletados de maneira anônima, a partir do formulario do Google criado pelos admins do sub.
  
Para geração dos gráficos foi utilizada a linguagem [Python](https://www.python.org/), com as ferramentas [pandas](https://pandas.pydata.org/), [numpy](https://numpy.org/), [matplotlib](https://matplotlib.org/), [plotly](https://plotly.com/) e [seaborn](https://seaborn.pydata.org/).

# Quem São?
Os usuários do SUB são em sua maioria homens héteros.

${(
  <div className="columns">
    <MediumImage
      src="/static/essays/2021/censo-reddit-2020/genero.jpg"
      className="column"
    />
    <MediumImage
    src="/static/essays/2021/censo-reddit-2020/orientacao.jpg"
    className="column"
  />
  </div>
  
  
)}

Com idade média de 26 anos.
![](/static/essays/2021/censo-reddit-2020/idade.jpg)

14% dos usuários têm entre 14 e 24 anos, 52% entre 25 e 44 anos.
![](/static/essays/2021/censo-reddit-2020/faixaetaria.jpg)

37% são universitários, e 47% têm ensino superior completo ou maior grau de escolaridade.
![](/static/essays/2021/censo-reddit-2020/escolaridade.jpg)

Formados principalmente nas áreas de Engenharia e Computação.
![](/static/essays/2021/censo-reddit-2020/formacao.jpg)

# Onde Vivem?
Em números gerais, a maior parte dos usuários do Reddit /r/brasil estão na região sul, sudeste e no Distrito Federal. 
![](/static/essays/2021/censo-reddit-2020/usuarios_estado.jpg)

Analisando, entretanto, a quantidade de usuários dividido pela população de cada estado, podemos ver um comportamento interessante. 
![](/static/essays/2021/censo-reddit-2020/mapa_estados.jpg)

Proporcionalmente à população, o estado com maior concentração de usuários é o Distrito Federal. Estando este em um destaque considerável com relação ao resto do país. Além disso, as regiões sul e sudeste mantem-se como as com maior quantidade proporcional de usuários.

Há também os usuários do /r/brasil que moram fora do país. Estes moram principalmente nos Estado Unidos e na Alemanha.
![](/static/essays/2021/censo-reddit-2020/outside.jpg)

# Como se posicionam?

No espectro político, os usuários do Reddit são de esquerda e centro-esquerda.
![](/static/essays/2021/censo-reddit-2020/politico.jpg)

Já com relação ao espectro social, são em maioria progressistas.
![](/static/essays/2021/censo-reddit-2020/social.jpg)

Com relação ao espectro econômico, os usuários se consideram majoritariamente interventores ou muito interventores.
![](/static/essays/2021/censo-reddit-2020/economico.jpg)

## O impacto do tempo.

Enquanto por um lado, o espectro político-social se manteve quase estável durante os últimos 3 anos.
![](/static/essays/2021/censo-reddit-2020/comparacao_politico.jpg)

É possível perceber que no econômico, os usuários tenderam a uma mudança em direção ao intervencionismo.
![](/static/essays/2021/censo-reddit-2020/comparacao_economico.jpg)
`)
