// localStorage.setItem('name','humoyun')
// const getName=localStorage.getItem('name')
// console.log(getName)
// localStorage.clear()
// const names=['humoyun','sanjar','doniyor']
// localStorage.setItem('names',JSON.stringify(names))
// const getName=JSON.parse(localStorage.getItem('names'))
// setTimeout(()=>{
//     console.log('hello world')
// },7000)

// function callfor(){
//     alert('humoyun salom')
// }
// setTimeout(callfor, 3000);
// const nima=setInterval(()=>{
//     console.log('salom')
// },3000)
// setTimeout(()=>{
//     clearInterval(nima)
// },10000)


// XMLHttpRequest obyekti yaratiladi va bu obyekt, ma'lumotlarni olish uchun belgilangan
//  URL dan (JSONPlaceholder da todo ro'yhati) ma'lumotlarni olish uchun 'GET' so'rovini yuborish uchun moslashtiriladi
const requst=new XMLHttpRequest('GET','https://jsonplaceholder.typicode.com/todos/')

//  readystatechange hodisasi tinglovchi qo'shiladi. Bu, har qanday o'zgarish 
// bo'lganda (masalan, so'rov holati o'zgarganda) chaqiriladigan funktsiyani beradi.
//  Funktsiya, har qanday o'zgarishda so'rov holatini (readyState) va so'rov o'zini konsolga yozadi.
requst.addEventListener('readystatechange',()=>{
    if(requst.readyState==4&&requst.status==200){
        console.log(requst.responseText)
    }else if(requst.readyState==4){
        console.log('malumotni olishni uloji yuq')
    }
})
requst.open('GET','https://jsonplaceholder.typicode.com/todos/')
//So'rov yuboriladi. Bu, belgilangan URL ga GET so'rovini jo'natadi va javobni kutiladi.
requst.send()


