new WOW().init();
/* ----------------------------------------
                language
 ------------------------------------------*/
function openAbility(Ability,el,color){
    let i,languageContent,languageLink;
    languageContent=document.getElementsByClassName('language-content');
    for(i=0;i<languageContent.length;i++){
        languageContent[i].style.display= "none";
    }
    languageLink=document.getElementsByClassName('language-link');
    for(i=0;i<languageLink.length;i++){
        languageLink[i].style.backgroundColor="";
    }
    document.getElementById(Ability).style.display="block";
    el.style.backgroundColor = color; 
}
document.getElementById("default-open").click();
/* ----------------------------------------
                ability 
 ------------------------------------------*/

$('#ability').owlCarousel({
    loop:true,
    margin:10,
    
    autoPlay:true,
    smartSpeed: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
html



