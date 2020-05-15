import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'

export default asPost({
  id: 'censo-reddit',
  hasCover: true
})(markdown(components)`
Todos os anos é realizada uma pesquisa interna no [r/brasil](https://www.reddit.com/r/brasil/) afim de melhor compreender os usuários do sub.

A pesquisa feita no ano de 2019 contou com **1810** participantes, que responderam cerca de **100** perguntas.

## Sobre o processamento de dados

Todos os dados foram coletados de maneira anônima, a partir do [formulario do Google](href="https://www.reddit.com/r/brasil/comments/e53tr9/censo_do_rbrasil_2019/) criado pelos admins do sub.
  
Para geração dos gráficos foi utilizada a linguagem [Python](https://www.python.org/), com as ferramentas [pandas](https://pandas.pydata.org/), [numpy](https://numpy.org/), [matplotlib](https://matplotlib.org/) e [seaborn](https://seaborn.pydata.org/).

## 1\. Redditor Médio

No geral, os usuários do [r/brasil](https://www.reddit.com/r/brasil/) estão há cerca de 3 anos no reddit
  
![](/static/essays/2020/censo-reddit/reddit_time.png)
  
Algumas informações diretas que podem ser extraídas das respostas estão nesta seção inicial. Com elas é possível criar a imagem do "redditor médio".
  
### 1.1\. Estado Civil
  
![](/static/essays/2020/censo-reddit/ordered_love.png)
  
### 1.2\. Região
  
![](/static/essays/2020/censo-reddit/ordered_region.png)
  
### 1.3\. Etinia
  
![](/static/essays/2020/censo-reddit/ordered_race.png)

### 1.4\. Religião
  
![](/static/essays/2020/censo-reddit/ordered_religion.png)

### 1.5\. Alimentação
  
![](/static/essays/2020/censo-reddit/ordered_food.png)

### 1.6\. Moradia
  
![](/static/essays/2020/censo-reddit/ordered_living.png)

### 1.7\. Identidade de Gênero
  
![](/static/essays/2020/censo-reddit/ordered_gender_id.png)

### 1.8\. Conformidade de Gênero
  
![](/static/essays/2020/censo-reddit/ordered_gender.png)

### 1.9\. Orientação Sexual
  
![](/static/essays/2020/censo-reddit/ordered_sexual_orientation.png)

### 1.10\. País <small>*Exceto Brasil</small>
  
![](/static/essays/2020/censo-reddit/ordered_country.png)

### 1.11\. Situação Empregatícia
  
![](/static/essays/2020/censo-reddit/ordered_job_situation.png)

### 1.12\. Emprego
  
![](/static/essays/2020/censo-reddit/ordered_job.png)
  
## 2\. Idade
  
Em relação à idade, os ususários se distribuem em uma curva normal, o redditor médio tem entre 19 e 32 anos.
  
![](/static/essays/2020/censo-reddit/age.png)
  
## 3\. Renda
  
O redditor médio tem uma renda familiar média de 5 salários mínimos.
  
![](/static/essays/2020/censo-reddit/incomming.png)
  
### 3.1\. Renda por Cor/Raça
  
Em relação a renda, os indígenas são os que (percentualmente), têm maior renda familiar, enquanto os pretos possuem a menor renda.
  
![](/static/essays/2020/censo-reddit/incomming_by_race.png)
  
## 4\. Ensino
  
Os dados de ensino são ordenados por grau. Com eles é possível entender melhor o nível de formação dos redditors. Estes dados talvez auxiliem a responder a pergunta do [u/Math_Pacheco](https://www.reddit.com/r/brasil/comments/e4rbtu/pessoas_do_reddit_s%C3%A3o_cultas/) sobre a educação da galera o [r/brasil](https://www.reddit.com/r/brasil/).
  
Com o gráfico é possível perceber que o redditor médio está cursando ou já finalizou a graduação.
  
![](/static/essays/2020/censo-reddit/degree.png)
  
### 4.1\. Áreas de Formação
  
A maior parte dos redditors é da área de exatas.
  
![](/static/essays/2020/censo-reddit/knoledge_area.png)

## 5\. Política
  
A analise política foi feita de maneira diferente, comparando as preferências com outras variáveis

### 5.1\. Espectro Econômico

Em relação ao espectro econômico, os redditors se distribuem de forma normal. Desta forma, a maior parte encontra-se próximo ao centro, com uma leve inclinação ao Intervensionismo.

![](/static/essays/2020/censo-reddit/economics.png)

### 5.2\. Economia por Grau de Formação

O comportamento de Curva Normal mantem-se em praticamente todos os graus de formação. Sendo mais polarizados nos com Ensino Fundamental incompleto, e menos polarizados entre os mestrandos e doutorandos.

![](/static/essays/2020/censo-reddit/economics_by_education.png)
  
### 5.3\. Espectro Político

Com relação ao aspécto político, o comportamento dos redditors tende a uma exponencial progressista.

![](/static/essays/2020/censo-reddit/politics.png)

### 5.4\. Política e Grau de Formação

O comportamento da curva mantem-se em praticamente todos os graus de formação. Sendo, novamente, mais polarizados nos com Ensino Fundamental incompleto, e "menos polarizados" entre os mestrandos e doutorandos.

![](/static/essays/2020/censo-reddit/politics_by_education.png)

### 5.5\. Política e Economia

Os extremistas no espectro político, também o são no econômico

![](/static/essays/2020/censo-reddit/politics_and_economy.png)

## 6\. Anos anteriores

Afim de acompanhar o avanço e mudanças na comunidade, foi feita uma comparação com os resultados do ano passado.

### 6.1\. Espectro Econômico

Foi possível perceber uma mudança com relação a posicionamento economico dos participantes.

### 2018

![](/static/essays/2020/censo-reddit/economics_2018.png)

### 2019

![](/static/essays/2020/censo-reddit/economics.png)
`)
