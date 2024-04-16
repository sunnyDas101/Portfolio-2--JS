document.addEventListener('DOMContentLoaded', ()=> {
    const navItems = document.querySelectorAll('.nav a')

    navItems.forEach((e)=> {
        e.addEventListener('click', ()=> {
            navItems.forEach((navItem)=> {
                navItem.classList.remove('active');
            })
            e.classList.add('active');
        })
    })
})