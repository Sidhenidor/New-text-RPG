//*************UVODNA OBRAZOVKA***********//
document.querySelector(".enterButton").addEventListener("click", function(){
    document.querySelector(".enterButton").style.display = "none";
    document.querySelector("#enterForm").style.display = "block";
});

document.querySelector("#enterForm").addEventListener("click", function(){
    document.querySelector("#enterForm").style.display = "none";
    document.querySelector(".enterButton").style.display = "block";
});


document.querySelector(".regButton").addEventListener("click", function(){
    document.querySelector("#enter").style.display = "none";
    document.querySelector("#registration").style.display = "block";
});

//******************REGISTRACNA OBRAZOVKA*************//
document.querySelector(".jq--scroll-first").addEventListener("click", function(){
    document.querySelector(".jq--scroll-to-first").scrollIntoView();
    document.querySelector(".first").classList.add("active");
    document.querySelector(".second").classList.remove("active");
    document.querySelector(".third").classList.remove("active");
    document.querySelector(".fourth").classList.remove("active");
});


document.querySelector(".jq--scroll-second").addEventListener("click", function(){
    document.querySelector(".jq--scroll-to-second").scrollIntoView();
    document.querySelector(".first").classList.remove("active");
    document.querySelector(".second").classList.add("active");
    document.querySelector(".third").classList.remove("active");
    document.querySelector(".fourth").classList.remove("active");
});

document.querySelector(".jq--scroll-third").addEventListener("click", function(){
    document.querySelector(".jq--scroll-to-third").scrollIntoView();
    document.querySelector(".first").classList.remove("active");
    document.querySelector(".second").classList.remove("active");
    document.querySelector(".third").classList.add("active");
    document.querySelector(".fourth").classList.remove("active");
});

document.querySelector(".jq--scroll-fourth").addEventListener("click", function(){
    document.querySelector(".jq--scroll-to-fourth").scrollIntoView();
    document.querySelector(".first").classList.remove("active");
    document.querySelector(".second").classList.remove("active");
    document.querySelector(".third").classList.remove("active");
    document.querySelector(".fourth").classList.add("active");
});


document.querySelector("#cross").addEventListener("click", function(){
    document.querySelector("#registration").style.display = "none";
    document.querySelector("#enter").style.display = "block";
});
