class Elems{
    constructor(el) {
        this.el = el
    }
    on(event, el) {
        this.el.addEventListener(event.el)
    }
    setColor(color){
        this.el.style.color = color
    }
    lsp(size) {
        this.el.style.letterSpacing = size
    }
    set yozuvRazmeri(razmer){
        this.el.style.fontSize = razmer
    }
}

function $(el) {
    return new Elems(document.querySelector(el))
}