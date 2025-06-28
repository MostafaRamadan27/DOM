


var imgs = Array.from(document.querySelectorAll(".img-item"));
var lightboxcontainer = document.querySelector("#lightboxcontainer");
var lightboxitem = document.querySelector("#lightboxitem");
var closeIcon = document.querySelector("#close");
var nextIcon = document.querySelector("#next");
var prevIcon = document.querySelector("#prev");
var imgsIndex = 0;
for (let i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener("click" , function (e) {

        
       imgsIndex = imgs.indexOf(e.target);

        // open model
        lightboxcontainer.style.display ="flex" 

        // change url
        var imgsTraget = e.target.getAttribute("src");
        lightboxitem.style.backgroundImage = `url(${imgsTraget})`

    })
    
}

// close Model
function closeModel() {
    lightboxcontainer.style.display ="none" 
}
closeIcon.addEventListener("click" , function () {
 closeModel();
})

// next Img
function nextImg() {
     imgsIndex++;
    if (imgsIndex == imgs.length) {
        imgsIndex = 0;
    }
    var imgSrc = imgs[imgsIndex].getAttribute("src");
    lightboxitem.style.backgroundImage = `url(${imgSrc})`
}
nextIcon.addEventListener("click" , function(){
   nextImg();
})

// prev Img
function prevImg() {
     imgsIndex--;
    if (imgsIndex == -1) {
        imgsIndex = imgs.length - 1;
    }
    var imgSrc = imgs[imgsIndex].getAttribute("src");
    lightboxitem.style.backgroundImage = `url(${imgSrc})`
}
prevIcon.addEventListener("click" , function(){
   prevImg();
})

document.body.addEventListener("keydown" , function(e){
    if (e.key == "ArrowRight") {
       nextImg()
    }else if (e.key == "ArrowLeft") {
        prevImg()
    }else if (e.key == "Escape") {
        closeModel()
    }
})