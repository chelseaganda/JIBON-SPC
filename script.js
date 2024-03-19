// const title = document.querySelector(".about__title li");
// const desc = document.querySelecter(".about__main-skills");

// title.addEventListener("click",() =>{
//     desc.classlist.toggle("open");
//     title.classlist.toggle("open");
// })


const title = document.querySelector(".about__title li");
const desc = document.querySelector(".about__main-skills");

title.addEventListener("click",() =>{
    desc.classList.toggle("open");
    title.classList.toggle("open");
})