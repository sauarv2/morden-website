gsap.to(".imageontainer ",
{
    ease: Expo.easeInOut,
    width: "97%",
    duration:2,
    stagger:2,
    opacity:1
})

gsap.to(".txt h1",{
    ease: Expo.easeInOut,
    stagger:2,
    top:"0px"
})

gsap.to(".txt h1",{
    delay:2,
    ease: Expo.easeInOut,
    stagger:2,
    top:"-100px",

})