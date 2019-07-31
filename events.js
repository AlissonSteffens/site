let events = [
    {
        "link":"http://www.thedevelopersconference.com.br/tdc/2019/florianopolis/tdc4kids",
        "img":"./img/tdc2019.jpg",
        "nome":"TDC4Kids",
        "desc":["Workshop com Arduino"],
        "funcao":["coordenador"],
        "edicoes":["SC 2018","SC 2019","SP 2019"]
    },{
        "link":"https://gestalt.link/nsd/",
        "img":"./img/nasa2.jpg",
        "nome":"Nasa Science Days",
        "desc":["Atividade com Makey Makey"],
        "funcao":["palestrante"],
        "edicoes":["2018"]
    },{
        "link":"https://docs.google.com/viewerng/viewer?url=https://www.bcnoticias.com.br/wp-content/uploads/2018/02/1º-BC-Smart-Week-Programação.pdf",
        "img":"./img/bcsmartweek.jpg",
        "nome":"BC Smart Week",
        "desc":["Workshop de Scratch"],
        "funcao":["palestrante"],
        "edicoes":["2018"]
    },{
        "link":"http://lite.acad.univali.br/site/",
        "img":"./img/site.jpg",
        "nome":"S.I.T.E",
        "desc":["Palestra sobre Portugol"],
        "funcao":["palestrante"],
        "edicoes":["2018"]
    },{
        "link":"http://www.br-ie.org/pub/index.php/wie/article/view/7261",
        "img":"./img/familyday.jpg",
        "nome":"Scratch Day",
        "desc":["Criação de histórias"],
        "funcao":["palestrante","coordenador"],
        "edicoes":["2017","2019"]
        
    },{
        "link":"http://www.br-ie.org/pub/index.php/wie/article/view/7261",
        "img":"./img/tinar2.jpg",
        "nome":"Tem Ideia na Rede",
        "desc":["Pensamento Computacional"],
        "funcao":["palestrante"],
        "edicoes":["2016","2017"]
    },{
        "link":"http://www.br-ie.org/pub/index.php/wie/article/view/7261",
        "img":"./img/labmaker.jpg",
        "nome":"LabMaker",
        "desc":["Workshop maker"],
        "funcao":["palestrante"],
        "edicoes":["2016"]
    }
]

$(document).ready(()=>{
    events.forEach(element => {
        let div = $('#template-event').html()
        div = div.replace('{nome}',element.nome)
        
        let p = ""
        element.desc.forEach(descrip =>{
            p = p+""+descrip+"<br/>"
        })
        div = div.replace('{desc}',p)

        p = ""
        element.funcao.forEach(descrip =>{
            p = p+"<span class='badge badge-"+descrip+"' title='"+descrip+"'>"+'<i class="fas fa-user"></i>'+"</span>"
        })
        div = div.replace('{func}',p)

        if(element.edicoes){
            p = ""
            element.edicoes.forEach(descrip =>{
                p = p+"<span class='badge badge-info'>"+descrip+"</span>"
            })
            div = div.replace('{edi}',p)
        }
        

        div = div.replace('{title-data}',element.nome)
        div = div.replace('{link}',element.link)
        div = div.replace('./img/logo.svg',element.img)
        div = div.replace('./img/logo.svg',element.img)

        $('#lista-eventos').append(div)
    })
})