const number1=document.getElementById('number1')
const number2=document.getElementById('number2')
const SumBtn=document.getElementById('btn')

SumBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const num1=number1.value
    const num2=number2.value
    let result=eval(num1+num2) //eval executes anything of your javascript code represented as a string MAAR nooit gebruiken, want groot security risk. Hackers kunnen immers die velden van de input aanpassen en javascript injection doen om bijvoorbeeld paswoorden te verkrijgen
    console.log(result)
})
//we kunnen dit bypassen als we const num1=Number(number1.value) doen. Dan kunnen ze het type van de input niet aanpassen, wat ze nodig hebben om die javascript injection te doen. In ieder geval: nooit eval gebruiken

