const getInput = document.querySelector("#inputForList")

document.querySelector("#btnForAdd").addEventListener("click", addList)


function addList() {
    if (getInput.value != "") {
        let createElem = document.createElement("li")
        createElem.classList.add("liAdd");
        let inText = createElem.innerText = getInput.value
        console.log(inText, createElem);
        document.querySelector("ul").append(createElem)

        let createBtnInli = document.createElement("button")
        createBtnInli.classList.add("deleteLi")
        createBtnInli.innerText = "x"
        createBtnInli.addEventListener("click", deleteLi)
        createElem.append(createBtnInli)
        getInput.value = "";
        function deleteLi() {
            // console.log(value)
            createElem.remove()
        }
    }
    else {
        alert("Please Enter text")
    }

}








