// localStorage.setItem('name','humoyun')
// const getName=localStorage.getItem('name')
// console.log(getName)
// localStorage.clear()
const names=['humoyun','sanjar','doniyor']
localStorage.setItem('names',JSON.stringify(names))
const getName=JSON.parse(localStorage.getItem('names'))
