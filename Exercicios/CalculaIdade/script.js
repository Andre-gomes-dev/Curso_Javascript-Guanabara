function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtAno") 
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano ){
        alert("[ERRO] verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "homem"
            if(idade >=0 &&idade <10){
                //kid
                img.setAttribute("src", "imagens/Cortados/Homem_Bebe.png")
            }else if(idade <21){
                //teen
                img.setAttribute("src", "imagens/Cortados/Homem_Jovem.png")
            }else if(idade < 50){
                //adult
                img.setAttribute("src", "imagens/Cortados/Homem_Adulto.png")
            }else{
                //old
                img.setAttribute("src", "imagens/Cortados/Homem_Idoso.png")
            }
        
        }else if(fsex[1].checked){
            genero = "mulher"
            if(idade >=0 &&idade <10){
                //kid
                img.setAttribute("src", "imagens/Cortados/Mulher_Bebe.png")
            }else if(idade <21){
                //teen
                img.setAttribute("src", "imagens/Cortados/Mulher_Jovem.png")
            }else if(idade < 50){
                //adult
                img.setAttribute("src", "imagens/Cortados/Mulher_Adulta.png")
            }else{
                //old
                img.setAttribute("src", "imagens/Cortados/Mulher_Idosa.png")
            }
        }
         res.innerHTML = `Detectamos ${genero} com ${idade} anos`
         res.appendChild(img)   
    }
}

