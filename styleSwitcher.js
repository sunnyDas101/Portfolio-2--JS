const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
const styleSwitcher = document.querySelector(".style-switcher")

// style switch menu toggle
styleSwitcherToggle.addEventListener("click", ()=> {
    styleSwitcher.classList.toggle("open")
})

// stlye switch menu close on scroll
window.addEventListener("scroll", ()=> {
    if(styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open")
    }
})

// style colors
const alternateStyles = document.querySelectorAll(".alternate-style")

const setActiveStyle = (color) =>{
   alternateStyles.forEach((e)=> {
    if(color === e.getAttribute("title")){
        e.removeAttribute("disabled")
    } else{
        e.setAttribute("disabled", "true")
    }
   })
}

// light and dark mode
const dayNight = document.querySelector(".day-night")
const icon = dayNight.querySelector("i")

dayNight.addEventListener("click", ()=>{
    icon.classList.toggle("fa-sun")
    icon.classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", ()=> {
    if(document.body.classList.contains("dark")){
        icon.classList.add("fa-sun")
    } else{
        icon.classList.add("fa-moon")
    }
})