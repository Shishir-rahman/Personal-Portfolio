let image = ["./Image/IMG-20220303-WA0074-01.jpeg", "./Image/1701956868286-01.jpeg", "./Image/1698561709365-01.jpeg"];
let imgTag = document.getElementById("section2-pic");
let count = 0;


function next(){
    count++;

    if(count >= image.length){
        count = 0;
        imgTag.src = image[count];
    }
    else{
        imgTag.src = image[count];
    }
}


function prev(){
    count--;

    if(count < 0){
        count = image.length - 1;
        imgTag.src = image[count];
    }
    else{
        imgTag.src = image[count];
    }
}