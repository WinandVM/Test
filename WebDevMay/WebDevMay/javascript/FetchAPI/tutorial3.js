const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const putBtn = document.getElementById('updateput')
const patchBtn = document.getElementById('updatepatch')
const deleteBtn = document.getElementById('del')

//get request
getBtn.addEventListener("click",(e)=>{ //die e functioneert dan als callback method
    fetch('http://localhost:5000/api')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    e.preventDefault() //this prevents the page from refreshing after clicking
})

//put request
putBtn.addEventListener("click",(e)=>{
    fetch('http://localhost:5000/api/2',{ //tweede argument van deze fetch moet een object zijn waarin de request is uitgelegd
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ //dit moet een string zijn, dus vandaar doen we JSON.stringify
            "username":"Joe Dalton" //omdat we enkel username hebben ingegeven, is de password property verloren (want 't is een put request en geen patch request)
        }) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PUT request: ${data}`)
    })
    e.preventDefault()
})

//patch request
patchBtn.addEventListener("click",(e)=>{
    fetch('http://localhost:5000/api/2',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "password":"root31261464" //hier hebben we enkel password ingegeven, maar dat is niet erg voor een patch request (itt een put request)
        }) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`PATCH request: ${data}`)
    })
    e.preventDefault()
})

//post request
postBtn.addEventListener("click",(e)=>{
    fetch('http://localhost:5000/api',{ //we posten in de basic array, niet bij een specifieke user
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "username":"student001",
            "password":"123456"
        }) 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`POST request: ${data}`)
    })
    e.preventDefault()
})

//delete request
deleteBtn.addEventListener("click",(e)=>{
    fetch('http://localhost:5000/api/3',{
        method:'DELETE' 
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`Delete: ${data}`)
    })
    e.preventDefault()
})