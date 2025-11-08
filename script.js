const MENU = '☰'
const X = 'x'
let menuOpen = false

const handleMenu = () => {
    console.log('opening menu...')
    let button = document.getElementById('menu')
    let menuIcon = document.getElementById('menu-icon')
    let dropdown = document.getElementById('menu-dropdown')
    if (menuOpen) {
        menuIcon.innerText = MENU
        dropdown.style = 'display:none;'
    } else {
        menuIcon.innerText = X
        dropdown.style = 'display:flex;'
    }
    menuOpen = !menuOpen
}