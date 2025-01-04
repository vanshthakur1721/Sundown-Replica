const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let fixed = document.querySelector("#fixedimage")
let a =document.querySelector('#elemcon')
a.addEventListener('mouseenter',function(){
fixed.style.display= "block"
})
a.addEventListener("mouseleave",function(){
    fixed.style.display ="none"
})
let elm = document.querySelectorAll(".elem")
elm.forEach(function(e){
    e.addEventListener('mouseenter',function(){
        var img = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${img})`
    })
})
let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
});

document.addEventListener('mousemove',function(dets){
    gsap.to(".cursor",{
left:dets.x,
top:dets.y    }
    )

    
 })
 document.querySelectorAll('.swiper').forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    elem.addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
})
let load = document.querySelector('#loader')
setTimeout(function(){
    load.style.top="-100%";
},4000)

 let h=document.querySelector("#design1")
h.addEventListener("click",function(){

    
    console.log("vansh")
    
})