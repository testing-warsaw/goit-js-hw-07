function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlPanel = document.querySelector("#controls")
const boxesPlace = document.querySelector("#boxes")

const inputForm = controlPanel.querySelector("input")
const btnCreate = controlPanel.querySelector("button[data-create]")
const btnDelete = controlPanel.querySelector("button[data-destroy]")

function createBoxes(amount) {
  let sizeBox = 30

  for(let i = 0; i < amount; i++){
    
    const divBox = document.createElement("div")

    divBox.style.width = `${sizeBox}px`
    divBox.style.height = `${sizeBox}px`
    divBox.style.backgroundColor = getRandomHexColor()
    
    boxesPlace.append(divBox)
    
    sizeBox += 10
  }
}

function destroyBoxes() {
   boxesPlace.remove()
 };

btnCreate.addEventListener("click", () => createBoxes(inputForm.value))
btnDelete.addEventListener("click", destroyBoxes)


