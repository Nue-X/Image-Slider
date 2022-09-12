let images = ["Images/Autumn.jpg", 
"Images/Landscape.jpg", 
"Images/Mountainscape.jpg",
"Images/Seascape.jpg",
"Images/Taiga.jpg"];

let imageNames = ["Autumn", "Landscape", "Mountainscape", "Seascape", "Taiga" ]

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const source_img = document.getElementById("bg-image") ;
const imageName = document.getElementById("image-text")
const imageContainer = document.getElementById("image-container")

prev.addEventListener('click', prevFunc);
next.addEventListener('click', nextFunc);



let count = 0;

function prevFunc(){
    count--
    if (count < 0){
        count = images.length-1
    } 
    source_img.src = images[count]
    imageName.innerHTML = imageNames[count]
    document.body.style.backgroundImage = `url(${images[count]})`;
}

function nextFunc(){
    count++
    if (count > images.length-1){
        count = 0
    } 
    source_img.src = images[count]
    imageName.innerHTML = imageNames[count]
    document.body.style.backgroundImage = `url(${images[count]})`;
    // source_img.style.transition = "3s ease";
}