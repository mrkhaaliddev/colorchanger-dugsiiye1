let btns = document.querySelectorAll(".btn");
let box = document.querySelector(".bigbox");


btns[0].addEventListener("click", function(e){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "red";

 });

 btns[1].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "blue";
 });
 btns[2].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "green";
 });
 btns[3].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "yellow";
 });
 btns[4].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "brown";
 });
 btns[5].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "white";
 });
 btns[6].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "black";
 });
 btns[7].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "yellowgreen";
 });
 btns[8].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "skyblue";
 });
 btns[9].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "grey";
 });
 btns[10].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "gold";
 });
 btns[11].addEventListener("click", function(){
    console.log(btns.innerHTML);
    box.style.backgroundColor = "aqua";
 });

let size  = document.querySelector("#input1");
let h1 = document.querySelector("h1");
size.addEventListener("keyup", function(){
   h1.style.fontSize = size.value;
    
})


let border = document.querySelector("#input2");
border.addEventListener("keyup", function(){
   box.style.borderRadius = border.value;
});



let weight  = document.querySelector("#input3");
weight.addEventListener("keyup", function(){
   h1.style.fontWeight = weight.value;
    
})

let color = document.querySelector("#input4");
color.addEventListener("keyup", function(){
   h1.style.color = color.value;
})


// let optoins = document.querySelector("#select");
// let myElement = documentquerySelector("#myElement");
// optoins.addEventListener("change", function(){ 
//    const slectedfont = optoins.value
//    myElement.style.fontFamily = slectedfont;
// });



    // Get the necessary elements
    const optoins = document.querySelector("#select");
    optoins.addEventListener('change', function() {
      h1.style.textTransform = optoins.value;
    });

    const optoins1 = document.querySelector("#select1");
    optoins1.addEventListener('change', function() {
      h1.style.fontFamily = optoins1.value;
    });