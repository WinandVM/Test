// step1: create a function that takes in a string of the form "username:password"
// step2: split the string into an array of strings
// step3: return an object with the username and password
// step4: send the object to the server with fetch API

let UserAccounts = `Amber_Jaskolski:EcyN82bJAxwJBxe
Providenci35:q2UXxxRlqD_GkWW
Reva.Champlin84:a9XuZk5e4UcDRD3
Lorenz_Witting:oHrzxr9IPIL0YjK
Leila42:wl8Uh5orryhRE7K
Patrick_Auer85:zqMcql6e9uqlSf9
Toy44:u8pNJYZ71_VgnQb
Alphonso_Sawayn7:Bwa0zaRJ43BFTb6
Jayde_Beier:z2SjLN_F8ci8e9c
Ana.Gottlieb:u3Cr3CzDtzPJ4tX
Ronny80:5gShWzlPBv8mSgg
Mya34:CYyuVLe8X_CiXbc
Terrence17:CV301DEo8Pd861Q
Mariah_Kertzmann:Xv_EG6Jk6JsTcup
Ayla_Greenholt52:kvW8BlXiZKbZ9cF
Samson37:AMo8duSO0Ggxxj1
Richie_Pouros:PPQ997UwOshJDc5
Alexandria21:iTMU5kWTFriM_i4
Cesar67:lvKUIHenNexA3mS
Ryder.Gibson:HZ47I0WeHZhVwW4`


//Mijn poging
let UserString=String.raw`${UserAccounts}`
const array=UserString.split(/[:\n]+/)
console.log(array)
const numsPerGroup=Math.ceil(array.length/20)
const result = new Array(20).fill('').map((_, i) => array.slice(i * numsPerGroup, (i + 1) * numsPerGroup));
console.log(result)
const objs = result.map(x => ({
    username:x[0],
    password:x[1]
}))
console.log(objs)


const postBtn = document.getElementById('post') //probleem hierbij is dat er een array aan objects wordt gestuurd, en we willen dat er aparte objects worden gestuurd. Anders krijgen die geen ID. Hoera, dit is opgelost met een forEach!
postBtn.addEventListener("click",(e)=>{
        objs.forEach(function(splitObject){
        fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(splitObject) 
    })
    e.preventDefault()})
})


//Atilla zijn oplossing
// var result;
// const postBtn = document.getElementById('post')
// // split line by line
// result = UserAccounts.split("\n")

// postBtn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     result.forEach(user=>{
//     let userInfo = user.split(":")
//     let obj = {
//         username: userInfo[0],
//         password: userInfo[1]
//     }
//     fetch('http://localhost:3000/users',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify(obj)
//     })
//     console.log(obj)
// })

// })