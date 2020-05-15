import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Code, InlineCode } from '../../components/code'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import { Image, MediumImage } from '../../components/figure'
import javascript from 'highlight.js/lib/languages/javascript'

export default asPost({
  id: 'bbb-minecraft-e-programacao',
  hasCover: true
})(markdown(components)`
Recentemente me perguntaram quais as vantagens de aprender programação.

Existem várias respostas prontas e aceitas para esta pergunta. Poderia falar sobre a necessidade de programadores no mercado de trabalho ou sobre o que o futuro nos reserva, mas para mim as vantagens de programar podem ser explicadas com uma analogia só.

>Saber programar é como entender de redstone no Minecraft.

O jogo Minecraft já tem mais de 10 anos, e é o jogo mais vendido da história. Nele você pode utilizar redstone para automatizar coisas.

${(
  <MediumImage
    src="/static/essays/2020/bbb-minecraft-e-programacao/redstone.png"
    width={200}
  />
)}
O legal da redstone é que ela pode ser usada para coisas tão simples quanto abrir uma porta. Até projetos gigantescos, que exigem circuitos extremamente complexos.

O que não se pode negar, entretanto, é que quem sabe utilizar redstone no Minecraft consegue ter um jogo bem mais tranquilo. Não tendo que se preocupar com Níveis ou Itens, já que tudo isso pode ser automatizado. 

Foi por isso que comecei a aprender programação.

## Mas o que isso tem a ver com BBB?
2020 é o melhor ano do BBB. Uma edição nunca foi tão comentada, e nunca teve tantos votos quanto esta. O paredão entre Prior, Manu e Mari atingiu 1,5 BILHÕES de votos. E a população continua votando muito.

No BBB cada telespectador tem seus favoritos e seus odiados. E movimentos a fim de gerar grandes quantidades de votos nos odiados são comuns. Inclusive entre celebridades, como o [Cid]( https://twitter.com/naosalvo) que fez uma live votando 1000 vezes no Daniel. 

Quando finalmente a pessoa que eu queria que saísse foi indicada ao paredão, combinei com alguns colegas de cada um votar 500 vezes nela. O problema é. Como contar?

É claro que não utilizamos nenhum tipo de bot para realizar os votos, já que isso é contra as regras do Gshow. Estas mesmas regras, entretanto, permitem ao usuário votar mais de uma vez no mesmo participante, porém não há nenhum feedback com relação à quantidade de votos que cada usuário deu.

A ideia de criar um contador de votos surgiu com um script bem simples, em Jquery, que aumentava um contador sempre que o usuário apertasse o botão “Votar Novamente”. Bastava colar o script no console e o contador começava.

${(
  <Code language="javascript" syntax={javascript}>{`contador = 1;
$("._2FQp0pTz1KSUdFKaO754EC").click(function(){
    $(".header-editoria--link").html(contador++)
})`}</Code>
)}

Este script, porém, não guardava estado. Isso quer dizer que caso o usuário fechasse a aba do navegador, ao voltar teria que inserir o script novamente, e o contador estaria zerado. Então a pessoa ainda tem que ficar marcando quantos votos deu em cada seção.

Pesquisando sobre maneiras melhores de resolver este problema, cheguei à conclusão de que uma extensão do Chrome seria o mais cabível. Mas tem um problema. Eu não tinha ideia de como fazer.

Lendo códigos e documentações, descobri que era relativamente fácil. E consegui fazer uma extensão do Chrome que conta os votos que você deu no BBB, e guarda esta informação. A quantidade de votos é mostrada no ícone da extensão.

${<MediumImage src="/static/essays/2020/bbb-minecraft-e-programacao/ext.png" />}

E foi assim que surgiu o meu [contador de votos no BBB](https://github.com/AlissonSteffens/contador-de-votos-bbb). A extensão é simples, mas faz o que precisa ser feito. E principalmente, me ajudou a desenvolver uma nova habilidade.

`)
