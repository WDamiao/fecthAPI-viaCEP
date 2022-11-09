const inputRua = document.getElementById("rua")
const inputBairro = document.getElementById("bairro")
const inputCidade = document.getElementById("cidade")
const inputestado = document.getElementById("estado")

async function consultaCEP(cep) {
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`http://viacep.com.br/ws/${cep}/json/`, options)
        .then(res => res.json()
            .then(data => showData(data)))

}

function showData(dados) {
    inputRua.value = dados.logradouro
    inputBairro.value = dados.bairro
    inputCidade.value = dados.localidade
    inputestado.value = dados.uf
}

export default consultaCEP;
