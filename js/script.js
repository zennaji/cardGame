// functions
const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    const pName = document.querySelector('.intro input');

    // take the nbame
    const getName = () =>{
        return pName.value;
    } 
    //loader function 
    const chechLoader = () =>{
        const loader = document.querySelector('.progress');
        loader.classList.add("fadeIn");
     };



    // start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.btn');
        const introScreen  = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const userName = document.querySelector('.userName');
        const nameError = document.querySelector('.intro p');
        const scoreName = document.querySelector('.player-score h2');

    
        
        playBtn.addEventListener("click", () =>{
            
            if(pName.value === ""){
            nameError.textContent = 'De naam is leeg!';
            }else{
                chechLoader();
                setTimeout(() => {
                    
                    introScreen.classList.add("fadeOut");
                    match.classList.add("fadeIn");
                    const user = getName();
                    userName.textContent = user;
                    scoreName.textContent = `${user}'s Score`;
                }, 1000)                        
            };
        });
        

    
    };


    // computer Options array
    const computerOptions = ['1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D'];

    // Computer choice function
    const getComputerCard = () =>{
        const computerNumber = Math.floor(Math.random() *11);
        const computerChoice = computerOptions[computerNumber];
        return computerChoice;
        
    }
    // 
    let cChoice =  getComputerCard();
    // get imgs card function
    const getComputerImg = (computerChoice) =>{
        setTimeout(() =>{
            const ComputerCard = document.querySelector('.ComputerCard img');
            ComputerCard.src = `imgs/${getComputerCard()}.png`;

        }, 1000)
       

    }


    //checkWinner function
    const checkWinner = (playerChoice, cChoice) =>{
        //checking for win
        if(playerChoice === cChoice){
            alert(`${user} Wins`);
        }else{
            alert("Wrong Guess!");
        }

    }

    // chech imgs
    const checkImgs = () => {
     const cards = document.querySelectorAll('.cards img');
     
     

     cards.forEach(card =>{
         card.addEventListener('click', function(){
             this.style.opacity = "45%";
             const playerCard = document.querySelector('.playerCard img');
            playerCard.src = this.src;

            for(let i =0; i<cards.length;i++){
                cards[i].classList.add("fadeOutCard");
            }
            getComputerCard();
            getComputerImg();
            
            setTimeout(() =>{
                checkWinner(this.src, cChoice);
            }, 2000)


         })
         
     })
     
    }

     
    // is call all the inner function
     startGame();
     checkImgs();
     
};




//start the game function
game();