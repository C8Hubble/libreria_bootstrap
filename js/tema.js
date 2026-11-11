var theme = localStorage.getItem('theme')
var tema = document.getElementById('btn-tema')
var icon_tema = document.getElementById('icon_tema')

if (theme === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    icon_tema.classList.remove("bi-moon-fill")
    icon_tema.classList.add("bi-sun-fill")
}

function cambiarTema(){    
    
    if (theme !== "dark"){
        document.documentElement.setAttribute("data-bs-theme", "dark")
        icon_tema.classList.remove("bi-moon-fill")
        icon_tema.classList.add("bi-sun-fill")
        theme = "dark"
        localStorage.setItem('theme', 'dark')
                
    }else{        
        document.documentElement.removeAttribute("data-bs-theme");
        icon_tema.classList.remove("bi-sun-fill")
        icon_tema.classList.add("bi-moon-fill")
        theme = "light"
        localStorage.setItem('theme', 'light');
    }

    localStorage.setItem('theme', document.documentElement.getAttribute("data-bs-theme"))
    console.log(localStorage.getItem('theme'))
    console.log(document.documentElement.getAttribute("data-bs-theme"))
}
