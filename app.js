const btnURock = document.getElementById('btnURock')
const btnUPaper = document.getElementById('btnUPaper')
const btnUScissor = document.getElementById('btnUScissor')
const resultU = document.getElementById('resultUser')
const resultCpu = document.getElementById('resultCpu')
const titleResultUser = document.querySelector('.titleResultUser')
const numUser = document.getElementById('numUser')
const numCpu = document.getElementById('numCpu')
const winnerP = document.getElementById('winner') 
const btnreload = document.getElementById('btn-reload')

btnURock.addEventListener('click', userPlayRock)
btnUPaper.addEventListener('click', userPlayPaper)
btnUScissor.addEventListener('click', userPlayScissor)
btnreload.addEventListener('click', reloadPlay);
let user
let contUser = 0
let contCpu = 0

function userPlayRock(){
    resultU.src = "assets/piedra.png"
    let cpu = Math.round(getRandomNumber(1,3))
    titleResultUser.classList.add('.title-Result-User')
    user = 1;
    showCpu(cpu)
    winner(user,cpu)
}

function userPlayPaper(){
    resultU.src = "assets/papel.png"
    let cpu = Math.round(getRandomNumber(1,3))
    console.log(cpu)
    user = 2;
    showCpu(cpu)
    winner(user,cpu)

}

function userPlayScissor(){
    resultU.src = "assets/tijera.png"
    let cpu = Math.round(getRandomNumber(1,3))
    console.log(cpu)
    user = 3;
    showCpu(cpu)
    winner(user,cpu)
}

// Función para generar un número aleatorio.
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function showCpu(cpu){
    if(cpu == 1){
        return resultCpu.src = "assets/piedra.png"
    }else if(cpu == 2){
        return resultCpu.src = "assets/papel.png"
    }else {
        return resultCpu.src = "assets/tijera.png"
    }
}

function winner(user, cpu){
    if(
        (user == 1 && cpu == 3) ||
        (user == 2 && cpu == 1) ||
        (user == 3 && cpu == 2)
        ){
            console.log('gana user')
            contUser++
            winnerP.textContent = ('gana usuario 😎')
            numUser.textContent = contUser
            console.log('numeroU: '+contUser)
        }else if(
        (cpu == 1 && user == 3) ||
        (cpu == 2 && user == 1) ||
        (cpu == 3 && user == 2)
        ){
            console.log('pierde user')
            contCpu++
            winnerP.textContent = ('pierde usuario 😪')
            numCpu.textContent = contCpu
            console.log('numeroC: '+contCpu)
        }else{
        // tie();
        winnerP.textContent = ('Empate 😫')
        }

    if(contUser === 3){
        Swal.fire("Haz Ganado😎!");
        reloadPlay()
    }else if(contCpu === 3){
        Swal.fire("Haz Perdido😪!");
        reloadPlay()
        
    }
}

function reloadPlay(){
    contCpu = 0
    contUser = 0
    resultCpu.src = contCpu
    resultU.src = contUser
    numUser.textContent = contCpu
    numCpu.textContent = contUser
    winnerP.textContent = ""
}





































// const btnreload = document.getElementById('btn-reload')

// const resultU = document.getElementById('resultUser')
// const resultCpu = document.getElementById('resultCpu')

// const numUser = document.getElementById('numUser')
// const numCpu = document.getElementById('numCpu')

// const btn = document.querySelectorAll('.btn')

// const winnerG = document.getElementById('winner') 

// // botones de usuario
// const btnPlayU = document.querySelectorAll(".btnJuego")

// btnreload.addEventListener('click', reloadPlay);


// let pointsUser = 0
// let pointsCpu = 0


// btnPlayU.forEach(btn =>{
//     btn.addEventListener("click", shifts)
// })

// function shifts(e){

//     let optionCpu = Math.floor(Math.random()*3)
//     console.log( "cpu option "+optionCpu)
//     let optionUser =   e.currentTarget.id

//     if(optionUser == 1){
//         resultU.src = "assets/piedra.png"
        
//     }else if(optionUser == 2){
//         resultU.src = "assets/papel.png"
//     }else if(optionUser == 3){
//         resultU.src = "assets/tijera.png"
//     }
//     console.log("option user: "+ optionUser)

//     if(optionCpu === 0){
//         resultCpu.src = "assets/piedra.png"
//     }else if(optionCpu === 1){
//         resultCpu.src = "assets/papel.png"
//     }else if(optionCpu === 2){
//         resultCpu.src = "assets/tijera.png"
//     }


    
//     if(
//         (optionUser == 1 && optionCpu == 2) ||
//         (optionUser == 2 && optionCpu == 0) ||
//         (optionUser == 3 && optionCpu == 1)
//     ){
//         wonUser();
//     }else if(
//         (optionCpu == 0 && optionUser == 3) ||
//         (optionCpu == 1 && optionUser == 1) ||
//         (optionCpu == 2 && optionUser == 2)
//     ){
//         wonCpu()
//     }else{
//         // tie();
//         console.log("empate")
//     }

//     if(pointsUser == 3 || pointsCpu == 3){
//         if(pointsUser == 3){
//             winnerG.textContent = "Haz ganado!!😎"
//         }
//         if(pointsCpu == 3){
//             winnerG.textContent = "Haz perdido 😪"
//         }
//         resultCpu.src = ""
//         resultU.src = ""
        
//     }
// }  

// function wonUser(){
//     pointsUser++
//     numUser.textContent = pointsUser
// }

// function wonCpu(){
//     pointsCpu++
//     numCpu.textContent = pointsCpu
// }

// // function tie(){
// //     winnerG.textContent = "😣"
// // }

// function reloadPlay(){
//     pointsCpu = 0
//     pointsUser = 0

//     resultCpu.src = pointsCpu
//     resultU.src = pointsUser

//     numUser.textContent = pointsUser
//     numCpu.textContent = pointsCpu

//     winnerG.textContent = ""
// }
























// let optionUser;

// function cpuAl(){
//     const generateRandomNumBetween = (min, max) => {
//         return  Math.floor(Math.random() * (max - min + 1) + min);
//     }
//     const randomNum = generateRandomNumBetween(1,3)
//     console.log(randomNum);

//     if(randomNum == 1){
//         resultCpu.src = "assets/piedra.png"
//     }else if(randomNum == 2){
//         resultCpu.src = "assets/papel.png"
//     }else if(randomNum == 3){
//         resultCpu.src = "assets/tijera.png"
//     }
// }

// function btnUser(){
//     btnURock.addEventListener('click', btnUserRock)
//     btnUPaper.addEventListener('click', btnUserPaper)
//     btnUScissors.addEventListener('click', btnUserScissors)

//     function btnUserRock(){
//         if(btnURock){
//             resultU.src = "assets/piedra.png"
//             cpuAl()
//         }
//     }
//     function btnUserPaper(){
//         if(btnUPaper) {
//             resultU.src = "assets/papel.png"
//             cpuAl()
//         } 
        
//     }
    
//     function btnUserScissors(){
//         if (btnUScissors){
//             resultU.src = "assets/tijera.png"
//             cpuAl()
//         }
//     }
// }

