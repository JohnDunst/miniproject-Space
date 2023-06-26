//Space ship array 
let spaceship = [
    {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
        img: 'https://cdnb.artstation.com/p/assets/images/images/008/895/207/original/almir-sharifullin-1st-spaceship.gif?1515963945'
    }
]
// randon nums
const generateRandomNum = (min, max) => {
    let rando = Math.floor(Math.random() * (max - min) + min);
    return rando;
};
// Alien spaceship empty array, for loop will populate the alien ships
let alien = []

//For loop creating the alien ships
for(let i=0;i<6;i++) {
    let img = ['https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://cdn.pixabay.com/animation/2022/08/16/16/28/16-28-36-108_512.gif','https://media1.giphy.com/media/q0FsdbzsbwHVm/200w.gif?cid=6c09b952kq4n9b6alcdz39glvhg3zb4efcfdg6ieyibdpaeu&ep=v1_gifs_search&rid=200w.gif&ct=g','https://media3.giphy.com/media/Z70x1bA6mL3OM/giphy.gif','https://media4.giphy.com/media/r88w2d7tHqazFwNEGN/200w.gif?cid=6c09b9526tx067bwkm8f10092lkyjx1svusbbcm6usja0b1l&ep=v1_gifs_search&rid=200w.gif&ct=g','https://media.tenor.com/oHgHEzWWAFQAAAAC/space-adventure-cobra-spaceship.gif']
    let enemy = {
        hull: Math.floor(Math.random() * 4) + 3,
        firepower: Math.floor(Math.random() * 3) + 2,
        accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
        img: img[i]
    }
    alien.push(enemy)
}

// Initial USS status display
// i basically just copied a simple web dev video. just had to change elements and properties
const hull1 = document.querySelector('.hull1')
hull1.innerHTML = `Hull: ${spaceship[0].hull}`
const firepower1 = document.querySelector('.firepower1')
firepower1.innerHTML = `Firepower: ${spaceship[0].firepower}`
const accuracy1 = document.querySelector('.accuracy1')
accuracy1.innerHTML = `Accuracy: ${spaceship[0].accuracy}`
const img1 = document.querySelector('.ussImg')
img1.setAttribute('src', spaceship[0].img)
let userButton = document.querySelector('.userAtk')

// Initial Enemy Status display
const hull2 = document.querySelector('.hull2')
hull2.innerHTML = `${alien[0].hull} :Hull`
const firepower2 = document.querySelector('.firepower2')
firepower2.innerHTML = `${alien[0].firepower} :Firepower`
const accuracy2 = document.querySelector('.accuracy2')
accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
const img2 = document.querySelector('.alienImg')
img2.setAttribute('src', alien[0].img)
let enemyButton = document.querySelector('.enemyAtk')

const message = document.querySelector('.message')
const retreatButton = document.querySelector('.retreat')

//Acts as ON/OFF switch for USS and Enemy Turns
let ussTurn = true
let alienTurn = false

// Attack function 
// Code was  tried to understand logic
const userAttack = () => {
    if(ussTurn) {
        if(Math.random() < spaceship[0].accuracy ) {
            alien[0].hull -= spaceship[0].firepower
            hull2.innerHTML = `${alien[0].hull} :Hull`
            if(alien[0].hull <= 0) {
                console.log(alien)
                alien.shift()
                if(alien.length === 0) {
                    console.log('You Win!')
                    message.innerHTML = 'You Win!'
                    ussTurn = false
                    alienTurn = false
                    retreatButton.innerHTML = 'Play Again'
                    img2.setAttribute('src','')
                }else {
                    console.log('You destroyed the enemy spaceship! Attack or Retreat?')
                    message.innerHTML = 'You destroyed the enemy spaceship! Attack or Retreat?'
                    alien[0].accuracy = Math.floor(Math.random()*3+6)/10
                    hull2.innerHTML = `${alien[0].hull} :Hull`
                    firepower2.innerHTML = `${alien[0].firepower} :Firepower`
                    accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
                    img2.setAttribute('src', alien[0].img)
                }
            } else {
                console.log(`You hit the enemy. Enemy has ${alien[0].hull} hull remaining`)
                message.innerHTML = `You hit the enemy. Enemy has ${alien[0].hull} hull remaining`
                alien[0].accuracy = Math.floor(Math.random()*3+6)/10
                accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
                ussTurn = false
                alienTurn = true
            }
        } else {
            console.log('You missed!')
            message.innerHTML = 'You missed!'
            ussTurn = false
            alienTurn = true
        }
        console.log(alien)
        console.log(spaceship)
    }

}

//Attack function for the alien ship add to onclick
const enemyAttack = () => {
    if(alienTurn) {
        if(Math.random() < alien[0].accuracy) {
            spaceship[0].hull -= alien[0].firepower
            hull1.innerHTML = `Hull: ${spaceship[0].hull}`
            if(spaceship[0].hull <= 0) {
                console.log('You have been defeated!')
                message.innerHTML = 'You have been defeated!'
                ussTurn = false
                alienTurn = false
                retreatButton.innerHTML = 'Play Again'
                img1.setAttribute('src','shipGIF/transparentImage.png')
            } else {
                console.log(`You have been hit! You have ${spaceship[0].hull} hull remaining`)
                message.innerHTML = `You have been hit! You have ${spaceship[0].hull} hull remaining`
                alienTurn = false
                ussTurn = true
            }
        } else {
            console.log('The enemy missed!')
            message.innerHTML = 'The enemy missed!'
            alienTurn = false
            ussTurn = true
        }

        alien[0].accuracy = Math.floor(Math.random()*3+6)/10  //Changes the accuracy of enemy
        accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
        console.log(alien)
        console.log(spaceship)
    }
}

//starter function
const startGame = () => {
    spaceship = [
        {
            hull: 20,
            firepower: 5,
            accuracy: 0.7,
            img: 'shipGIF/ship5.gif'
        }
    ]
    alien = []
    
    for(let i=0;i<6;i++) {
        let img = ['https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif','https://i.gifer.com/origin/24/2432cf5ff737ad7d1794a29d042eb02e_w200.gif']
        let enemy = {
           hull: Math.floor(Math.random() * 4) + 3,
        firepower: Math.floor(Math.random() * 3) + 2,
        accuracy: (Math.floor(Math.random() * 3) + 6) / 10,
        img: img[i]
        }
        alien.push(enemy)
    }
    // User status display
    //web3 gave example for using innerHTML for text in game
    hull1.innerHTML = `Hull: ${spaceship[0].hull}`
    firepower1.innerHTML = `Firepower: ${spaceship[0].firepower}`
    accuracy1.innerHTML = `Accuracy: ${spaceship[0].accuracy}`
    img1.setAttribute('src', spaceship[0].img)
    
    // Enemy Status display
    hull2.innerHTML = `${alien[0].hull} :Hull`
    firepower2.innerHTML = `${alien[0].firepower} :Firepower`
    accuracy2.innerHTML = `${alien[0].accuracy} :Accuracy`
    img2.setAttribute('src', alien[0].img)
    
    ussTurn = true
    alienTurn = false
    message.innerHTML = ''
}

//Retreat function 

const retreat = () => {
    if(retreatButton.innerHTML === 'Play Again') {
        startGame()
    }
    if(ussTurn && retreatButton.style.backgroundColor !=='rgb(239, 29, 36)') {
        if(alien.length < 6) {
  
            ussTurn = false
     
            alienTurn = false
   
            message.innerHTML = 'You retreated. GAME OVER!'
            retreatButton.innerHTML = "Play Again"
        }
    }

}