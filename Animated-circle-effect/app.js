const container= document.querySelector("section")
const text= document.querySelector(".text")
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>" );

const elements = document.querySelectorAll("span");
console.log(elements)

elements.forEach( (item, index) => {
    item.style.transform = `rotate(${index * 16.5}deg)`
    console.log(index)
});

container.addEventListener("mousemove", (e) =>{
    text.style.left = `${e.clientX}px`
    text.style.top = `${e.clientY}px`
    
})