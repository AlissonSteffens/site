import markdown from 'markdown-in-js'
import asPost from '../../layouts/post'
import { Code, InlineCode } from '../../components/code'
import Link from '../../components/link'
import P from '../../components/paragraph'
import { Ref, FootNotes, Note } from '../../components/footnotes'
import components from '../../components'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import { Image, MediumImage } from '../../components/figure'

export default asPost({
  id: 'engines',
  hasCover: true
})(markdown(components)`
Nós estamos vivendo uma das épocas mais importantes pros Motores de Jogos no entretenimento, e eu vou explicar o porquê.

Motores de jogos são um dos grandes responsáveis pelo surgimento e morte de jogos. Um grande exemplo disso é o Anthem.
Hoje eu vou explicar como um motor de jogos pode matar o Anthem antes mesmo do lançamento do jogo, e como outro está matando o League os Legends.

# Os Motores de Jogos

Antes de tudo, acho válido explicar o que é um motor de jogo (game engine) e de onde surgiu este conceito.

Basicamente tudo começou com o DOOM. Antes dele todos os jogos eram feitos em um blocão de código que era responsável pela animação, movimentação, física e toda a lógica do jogo.

Cada vez que uma empresa ou pessoa ia fazer um jogo, ela tinha que começar do zero. e implementar todas as partes dele. Nesta época fazer um jogo era um processo muito caro e demorado. Dificilmente uma pessoa sozinha seria capaz de fazer.

Quando a galera da IdSoftware começou a fazer o DOOM, eles pensaram em dividir as funções do jogo que poderiam mais tarde ser reutilizadas. separaram a renderização da física e da lógica do jogo. Com isso, eles conseguiram após o DOOM fazer o Wolfenstein reutilizando grande parte do código. A esse conjunto de códigos reutilizaveis, a IdSoftware chamou de IdTech.

## IdTech
A IdTech é uma engine ainda muito utilizada. Ela foi sendo atualizada e deu origem a outros jogos (como Rage, Quake e Call of Duty), e outras engines como a Source.

## Source Engine
A source é uma engine desenvolvida pela Valve (a galera da Steam) e ela é baseada na IdTech. Com ela foram feitos Counter Strike, HalfLife, TeamFortres e DoTa.


Após o sucesso do DOOM, outras empresas começaram a tentar fazer seus próprios motores. Um exemplo foi a Epic Games que criou o Unreal Tournament. O jogo é no estilo de quake, e foi feito para competir com o Quake III arena.
Assim como a IdSoftware, a Epic também fez o jogo de maneira modular, e lançou sua propria engine chamada de Unreal.

## Unreal Engine
A Unreal é atualmente uma das engines mais utilizadas, e foi responsável por jogos enormes como Gears e Fortnite.

Na contramão dos motores apresnetados até agora, foi criada a Unity.

## Unity
A Unity é o único motor de jogos entre os grandes que não foi baseada em nenhum jogo. Ela foi criada apenas pra ser um motor de jogos. Ultimamente tem ganhado bastante força, principalmente depois do HearthStone, mas isso vai ser falado mais pra frente.

Ok, agora sabendo mais ou menos como surgiram os motores de jogos famosos, vamos para os problemas.

${<MediumImage src="/static/essays/2020/engines/anthem.jpg" />}

# Anthem

Todo mundo sabe que o jogo Anthem foi um dos grandes desastres da indústria dos games. O que nem todos sabem é que isso não foi culpa só da falta de vontade da EA.

A Eletronic Arts não utilia nenhum dos motores citados ali em cima. Eles utlizam um chamado Frostbite.

## Frostbite
A Frostbite foi criada pela DICE para o jogo Battlefield: Bad Company. Desde então ela foi utilizada pela EA para Need for Speed, Dragon Age, Star Wars Battlefront, FIFA, Plants vs Zombies (?) e o famoso Anthem.

O problema é que a engine não foi feita pra ser tão genérica assim. Ela foi feita pra rodar Battlefield. Como ela é fechada e apenas a própria galera da EA tem acesso, é claro que ela também tem muita gambiarra e pouca documentação (além de todos os problemas que uma engine aberta já teria).

Com os desenvolvedores desesperados para conseguir fazer o jogo e lançar em tempo, muitas das funcionalidades do jogo foram deixadas de lado pelo simples fato de que ninguém sabia como fazer isso na engine. Com o tempo, tudo foi virando uma bola de neve e a BioWare acabou se perdendo.

A escolha pela Frostbite acabou fazendo com que o Anthem morresse antes mesmo de ser lançado.

Mas a EA não é a única empresa que tem uma engine própria e apanha por isso. A blizzard passou recentemente por uma situação parecida.

${<MediumImage src="/static/essays/2020/engines/warcraft.jpg" />}

# Warcraft 3: Reforged

A Blizzard é uma empresa que gosta de ter controle de seus jogos. Por isso quase todos os seus jógos contam com um Motor próprio, feito especialmente para ele. No caso da Blizzard, isso costuma dar certo (COmo o exemplo do Overwatch).

A engine desenvolvida para o Warcraft 3, é muito importante, pois foi graças aos mods que ela permitia, que surgiram DoTA e League of Legends. Mas isso foi a 20 anos. Utiliza-la agora para o Reforged foi um erro.

Quando a Capcom fez o remake de Resident Evil 2, muitos ficaram incomodados com o fato de terem migrado para a Engine do 7, mas quando o jogo saiu todos perceberam que foi a melhor escolha a ser tomada.

Por mais que todos tenhamos boas memórias do Warcraft 3 original, o motor dele já muito ultrapassado, e segurou muito o que os desenvolvedores da Blizzard puderam fazer. Como resultado, o jogo foi o pior avaliado da hitória da Blizzard, e um dos piores do Metacritc.

Se a Blizzard tivesse utilizado a engine de StarCraft 2, ou um outro motor comercial, os resultados poderiam ter sido MUITO mais positivos.

Mas nem todos os casos de jogos mortos pela engine acontecem no seu lançamento. Alguns vão apenas envelhecendo, como é o caso do filho do Warcraft 3, o LoL.


${<MediumImage src="/static/essays/2020/engines/lol.jpg" />}

# League of Legends

O LoL é um jogo baseado no MOD de Warcraft 3 chamado DoTA. Ele foi lançado em 2009, e depois de mais de 10 anos, a sua engine está começando a ser um problema.

A Riot continua alimentando a mesmo motor próprio desde o lançamento do jogo, mas a verdade é que ele está começando a patinar. Mesmo sem ter gráficos absurdos, as últimas atualizações do jogos estão utilizando cada vez mais hardware, e isso era esperado. 

Motores como a Unreal e a Unity são abertos, de maneira que além dos funcionários existe uma comunidade gigante ajudando a otimizar e implementar novas funcionalidades. É quase que impossível para uma empresa ter um motor próprio tão otimizado quanto os abertos. Então sempre que a Riot adiciona funcionalidades no jogo, ou tenta aumentar os polígonos dos modelos, tudo fica mais lento.

A prova de que os desenvolvedores já estão começando a se enrolar nas próprias gambiarras, é o fato de que recentemente, no evento de natal, não foi possível colocar o mapa de neve. Isso porque os dragões novos não eram compatíveis com o mapa.

Graficamente falando a engine do LoL é simples. Não há iluminação dinâmica, não há necessidade de tantas funcionalidades como uma engine comercial. Mas o jogo tem muita skin e muitos personagens.

Refazer o League of Legends seria um gasto enorme pra Riot, mas não refazer vai fazer com que o jogo morra em poucos anos.

Mas a Riot sabe disso. Até pouco tempo atrás ela só trabalhava no LoL e parecia satisfeita com isso. O primeiro jogo que ela lançou além do Lol foi o Team Fight Tactics, mas ele roda dentro do lol e usa a mesma engine.

Valorant entretanto é feito na Unreal Engine e o Legends of Runeterra na Unity.

Mas nem tudo está perdido para as engines proprietárias. A única empresa grande que aparenta ainda estar focada em manter a sua engine própria funcionando é a Valve.

${<MediumImage src="/static/essays/2020/engines/valve.jpg" />}

# A Valve

Em contra partida com a movimentação das outras empresas, a Valve continua utlizando sua Source. Recentemente lançou dois jogos o Half-Life: Alix e o Dota Underlords. Estes jogos mostram que a Valve está correndo atrás e a Source já é capaz de portar jogos para celular e Realizada Virtual.

Isso tudo entratando não é de graça. Os lançamentos de jogos da Valve demoram muito, pois ela sempre tem que criar as funcionalidades que quer. E enquanto foca nisso, está deixando a sua plataforma Steam ser derrubada pela Epic (do Unreal). A Epic está aproveitando que quase todos os desenvolvedores utilizam sua engine para fazer parcerias e contratos de exclusividade, o que têm feito muitos jogadores migrarem pra nova plataforma.

# O futuro dos Motores de Jogos

A Blizzard e a Riot desistiram de criar motores próprios e começaram a utilizar a Unity e a Unreal. A EA anunciou recentemente uma parceria com a Unity também.

A Valve mantém o suporte e foco na Source, mas só o tempo vai dizer se esta escolha valeu a pena ou não.

Os motores de jogos comerciais vão ser cada vez mais utilizados, uma possível aposta da Valve para um futuro próximo seria tentar posicionar a Source e transforma-la em uma concorrente forte contra a Unity e a Unreal, mas não sei se a valve tem tempo ou dinheiro pra isso.

Enquanto isso cabe aos desenvolvedores indies (e pelos exeplos mostrados aqui, as grandes empresas também), escolherem bem seus motores de jogos antes de iniciar um projeto. Pois esta escolha pode ser crucial na caacidae de um jogo de dar certo ou não.

`)
