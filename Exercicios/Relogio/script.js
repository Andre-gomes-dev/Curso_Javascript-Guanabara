function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')    
    var boasVindas = document.getElementById('boasVindas')
    
    var momento
    var data = new Date
    var hora = data.getHours()
    var minutos =  data.getMinutes()
    
   

    
    if(hora < 6){
        momento = 'Boa Madrugada'
        img.src = 'imagens/Cortados/MadrugadaDefinitivo.png'
        document.body.style.background = '#002a6a'
    }else if(hora < 12){
        momento = 'Bom dia'
        img.src = 'imagens/Cortados/ManhaDefinitivo.png'
        document.body.style.background = '#feca01'
    }else if(hora < 18){
        momento = 'Boa tarde'
        img.src = 'imagens/Cortados/TardeDefinitivo.png'
        document.body.style.background = '#f54d03'
        
     }else{
       momento = 'Boa noite'
        img.src = 'imagens/Cortados/NoiteDefinitivo.png'
        document.body.style.background = '#071c1f'
    }
   
    ////boasVindas.src = `Teste ${boasVindas}`
    boasVindas.innerHTML = `<h1>Olá, ${momento}</h1>`
    msg.innerHTML += `Agora são ${hora} horas e ${minutos} minutos`
    

}

