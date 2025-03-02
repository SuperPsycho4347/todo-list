const addBtn = document.querySelector('.add-btn')
const submitBtn = document.querySelector('.submit-btn')
const cancelBtn = document.querySelector('.cancel-btn')
const wholeContainer = document.querySelector('.container')

const diag = document.querySelector('dialog')

addBtn.addEventListener('click', () => {
    diag.showModal()
})

submitBtn.addEventListener('click', () => {
    const titleField = document.querySelector('#title-inp').value
    const descripField = document.querySelector('#descrip-inp').value
    const checkBox = document.querySelector('#complete-inp')
    let checkVal = "not complete"

    if(checkBox.checked === true) {
        checkVal = "completed"
    }

    const currList = new List(titleField, descripField, checkVal)

    populate(currList)

    diag.close()
})

cancelBtn.addEventListener('click', () => {
    diag.close()
})

function populate(currList) {
    const listCard = document.createElement('div')
    listCard.classList.add('list-card')
    
    const titleField = currList.title
    const descrip = currList.description
    const check = currList.checked

    const title = document.createElement('h2')
    title.textContent = titleField
    title.classList.add('title-card')

    const description = document.createElement('p')
    description.textContent = descrip
    description.classList.add('descrip-card')

    const checked = document.createElement('p')
    checked.textContent = check
    checked.classList.add('checked-card')

    listCard.appendChild(title)
    listCard.appendChild(description)
    listCard.appendChild(checked)
    wholeContainer.appendChild(listCard)
}

class List {
    constructor(title, description, checked) {
        this.title = title
        this.description = description
        this.checked = checked
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getChecked() {
        return this.checked
    }
}