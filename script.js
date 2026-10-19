const gridContainer = document.querySelector(".grid-container");

function createGrid(num){
    for (let i = 1; i <= num*num; i++) {
        const gridItem = document.createElement("div");
        let size = 400/num
        gridItem.classList.add("grid-item")
        
        gridItem.style.width = `${size}px`
        gridItem.style.height = `${size}px`
        gridItem.addEventListener("mouseenter", (e) => {
            let randomR = Math.floor(Math.random()*256);
            let randomG = Math.floor(Math.random()*256);
            let randomB = Math.floor(Math.random()*256);
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        })
        gridContainer.append(gridItem)
    }

}
createGrid(16)


let btn = document.querySelector(".gridSizeBtn")
btn.addEventListener("click", ()=>{
    let userInp = prompt("What grid size do you want? (Max: 100)")
    if(userInp > 100 || isNaN(userInp) || userInp < 1){
        alert("Wrong Input!")
    }else{
        gridContainer.innerHTML=""
        createGrid(userInp)
    }
})

