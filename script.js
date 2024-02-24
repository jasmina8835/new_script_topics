// CLASS

class User {
    constructor(name, year, address){
        this.name = name
        this.year = year
        this.address = address
    }
    age(){
        return 2024 - this.year
    }
}

// EXTEND

class Students extends User {
    currentYear = 2024
    constructor(name, year, school, group){
        super(name, year)
        this.school = school
        this.group = group
    }
    info() {
        return this.name + ' '+ this.year + "da tug'ilgan"
    }
    set Mark(mark) {
        this.mark = mark
    }
    get Mark() {
        return this.mark
    }
    get Age() {
        this.#salom()
        return this.currentYear - this.year
    }
    // Private
    #salom() {
        console.log(asdadadsa);
    }
}

// GETTER va SETTER
let u = new Students('Sardor', 1999, 'ITpark', '23-guruh')
console.log(u);
u.Mark = 5
console.log(u.Mark);
u.age = 258
console.log(u.age);
// u.#salom()

$('h1').on('click', () => {
    $('h1').setColor('red')
    $('h1').lsp('20px')
    $('h1').yozuvrazmeri = '55px'
})
