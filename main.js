import consultaCEP from "./fetch.js"

const inputCep = document.getElementById("cep")


inputCep.addEventListener("blur", async () => {
    consultaCEP(inputCep.value)
})
