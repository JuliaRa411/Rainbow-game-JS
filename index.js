const input  = document.querySelector("#color");
const button = document.querySelector("#generate");
let colors = ["red", "orange", "yellow", "green","blue", "lightblue;", "purple"];
const answer =  colors[Math.floor(Math.random() * colors.length)]

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
  event.preventDefault();
  }

input.addEventListener("keypress", function(e){
  if (e.keyCode ===13){
      play();    
  }
})

button.addEventListener("click", play)

function play() {
const userColor = document.querySelector("#color").value.toLowerCase();

 



 
    if (userColor === answer )  {

       
Swal.fire({
  title: 'YOU WIN!!!',
  imageUrl: 'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80)',
  imageWidth: 600,
  imageHeight: 400,
  imageAlt: 'Custom image',
  
})
          }
        
       
       
      else {
          
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "LET'S TRY AGAIN!",
           
          })
        					
        }
  }
   



  
