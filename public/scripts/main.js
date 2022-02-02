import Modal from "./modal.js";

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const cancelButton = document.querySelector('.modal button')
//Pegar todos os botões que existe com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButtons = document.querySelectorAll('.actions a.delete')

//rodar por cada elemento do tipo selecionado a cima
checkButtons.forEach(button =>{
  //adicionar a escuta
  button.addEventListener('click', handleClick)
  //{}ñ esquecer...
})


deleteButtons.forEach(button =>{
  button.addEventListener('click', event => handleClick(event, false))
  //{}... 
  
})

function handleClick(event, check = true) {
  event.preventDefault()
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  
  const form = document.querySelector('.modal form')

  const slug = check ? "check" : "delete"
  const text = check ? "Marcar como lida" : "Excluir"

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text}`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  if (check) {
    cancelButton.classList.remove('red')
    cancelButton.classList.add('green')
    modalButton.innerHTML = "Sim, marcar"
  } else {
    cancelButton.classList.remove('green')
    cancelButton.classList.add('red')
    modalButton.innerHTML = "Sim, excluir"
  }
  modal.open()
}