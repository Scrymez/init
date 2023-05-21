
//navigation
const nav = document.querySelectorAll(".li");
const active = document.querySelector(".active")
console.log(nav)
nav.forEach((item,index)=>{
   console.log(index,item)
   item.addEventListener('click',()=>{
      nav.forEach(elem => {
         elem.classList.remove('active')
      })
      item.classList.add('active')
   })
})

//like
const like = document.querySelectorAll(".like-active");
const tap = document.querySelector(".active")
console.log(like)
like.forEach((item,index)=>{
   console.log(index,item)
   item.addEventListener('click',()=>{
      item.classList.toggle('link__like_active')
   })
})





