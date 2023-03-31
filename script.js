// assigning variables to the forward and backward buttons
const back = document.querySelector('.back');
const next = document.querySelector('.next');
// set a variable for photos and add them
const photos = ['image/1NY.jpg',  'image/2NY.jpg', 'image/3NY.jpg', 'image/4NY.jpg', 'image/5NY.jpg','image/6NY.jpg'];
console.log(photos [4])
//set the variable i where it is the index.
let i = 0;

//add wiretapping on click
next.addEventListener('click', () =>{
    i++;
    //set conditions IF
    if (i > photos.length -1){
i = 0;
    }
    document.querySelector('.pictures').src = photos[i];
})


back.addEventListener('click', () => {
    i--
        if (i < 0){
    i = photos.length -1;
        }
    document.querySelector('.pictures').src = photos[i];
    })