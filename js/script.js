
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let open = document.getElementById("open");
let buttons = document.getElementsByClassName("btn-header");
let close = true;


function menus(){
	let Desplazamiento_Actual = window.pageYOffset;

	if (Desplazamiento_Actual <= 380) {
		nav.classList.remove("nav2");
		nav.className = ("nav1");	
		nav.style.transition = ".8s";
		menu.style.top = "60px";
		open.style.color = "white" ;
	}else{
		nav.classList.remove("nav1");
		nav.className = ("nav2");
		nav.style.transition = ".8s";
		menu.style.top = "70px";
		open.style.color = "black" ;
	}
}


function opening(){
    if(close){
        menu.style.width = "45vw";
        close = false;
    }else{
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        close = true;
    }
}

window.addEventListener("load", function(){
	menus();
});

window.addEventListener("click", function(e){
	if (close == false) {
		let span = document.querySelector("span");
		if (e.target !== span && e.target !== open) {
			menu.style.width = "0%";
			menu.style.overflow = "hidden";
			close = true;
		}
	}
});

window.addEventListener("scroll", function(){
	console.log(window.pageYOffset);

	menus(); 
});

window.addEventListener("resize", function(){
	if (screen.width >= 700) {
		close = true;
		menu.style.removeProperty ("overflow");
		menu.style.removeProperty ("width");
	}
});

open.addEventListener("click", function(){
	opening();
});




/* Filtro botones dash*/

$(function () {
    $(".filter").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        let valor =  $(this).attr("data-nombre");
        if(valor == "todos"){
        	$(".content-post").show("1000");	
        }else{
        	$(".content-post").not("."+ valor).hide("1000");
        	$(".content-post").filter("."+ valor).show("1000");
        }        
    });



/* Enlaces */


    window.addEventListener("resize", function(){
        let home = $("#home").offset().top;
        
        
    });

    $("#enlace-home").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        },600);
    });

  
});




