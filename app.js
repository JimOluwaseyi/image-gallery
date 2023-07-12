const images = document.querySelectorAll("img");
const body = document.body;
let color =["red", "green", "steelblue", "burlywood", "brown", "grey", "pink"];



const clickedImage = () =>{
let randomColor = Math.floor(Math.random() *color.length);
        body.style.backgroundColor = color[randomColor];
console.log(body);
}

for(let i =0; i < images.length; i++){
images[i].addEventListener("click", clickedImage);
}
