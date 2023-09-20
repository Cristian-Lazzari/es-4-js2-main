
//quando si preme invia l'elemento viene visualizzato come li
//scrivendo un altro elemento viene visuallizzato sotto



let Input = document.querySelector('.input')
console.log(Input)
let Enter = document.querySelector('.enter')
console.log(Enter)
let list = document.querySelector('.list')

let newArr = [];

function valueInput(){
    newArr.push(Input.value)
    console.log(newArr)
    render()
}

Enter.addEventListener("click", valueInput)

function render(){
    list.innerHTML = ''

    for(let i=0; i < newArr.length; i++){
        let prodotto =  document.createElement('li')
        list.innerHTML = Input.value
        list.appendChild(prodotto)
        console.log(prodotto)
        
    }
}

