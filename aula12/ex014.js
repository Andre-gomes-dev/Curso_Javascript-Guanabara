var agora = new Date

var diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Seu dia da semana é domingo')
        break;
    case 1:
        console.log('Seu dia da semana é Segunda')   
         break;
    case  2:
        console.log('Seu dia da semana é terça ')
        break;
    case  3:
        console.log('Seu dia da semana é quarta')
        break;
     case 4:
        console.log('Seu dia da semana é quinta')
        break;
     case  5:
     console.log('Seu dia da semana é sexta')
        break; 
     case  6:
        console.log('Seu dia da semana é sabado')  
     break;
}