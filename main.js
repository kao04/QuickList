let items = []

function addItem() {
    const itemName = document.querySelector('#item').value

    if (itemName === "") {
        alert("Digite um item valido")
        return
    }

    const item = {
        name: itemName,
        checked: false,
    }

    items.push(item)

    document.querySelector('#item').value = ""

    showItemsList()
}

function showItemsList() {
    const selectionlist = document.querySelector('.list')
    selectionlist.textContent = ""

items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))
asdas
    items.map((item, index) => {
        selectionlist.innerHTML += `
         <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked && "checked"}>

                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button>
            </div>
         `
    })

    localStorage.setItem("items", JSON.stringify(items))
}

function removeItem(itemName) {
    const itemIndex = items.findIndex(item => item.name === itemName)
    const divWarning = document.querySelector('.warning')

    divWarning.classList.remove('hide-warning')

    setTimeout(() => {
        divWarning.classList.add('hide-warning')
    }, 4000)

    if (itemIndex !== -1) {

        items.splice(itemIndex, 1)

        showItemsList()

    }
}

function checkItem(itemName) {
    const item = items.find(item => item.name === itemName)

    /*if (item === true) {
        items.checkItem = false
    } else {
        items.checkItem = true
    }*/

    ///item.checked ? item.checkItem = false : item.checkItem = true

    item.checked = !item.checked

    console.log(item)

    showItemsList()
}

function addHideWarningclass() {
    document.querySelector(".warning").classList.add("hide-warning")
}

function verifyLocalStorage() {
    const localStorageItems = localStorage.getItem("items")

    if (localStorageItems) {
        items = JSON.parse(localStorageItems)
        showItemsList()
    }
}

verifyLocalStorage()