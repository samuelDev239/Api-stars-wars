var div1 = document.querySelector(".cep")
var div2 = document.querySelector(".logradouro")
var div3 = document.querySelector(".bairro")
var div4 = document.querySelector(".localidade")
var div5 = document.querySelector(".uf")
var tab = document.querySelector('.table')
var input = SelecionarTags('#caixaNome')



function buscar() {
   var resultado = input.value
   console.log(input)


var url = `https://swapi.dev/api/people/${resultado}/`

fetch(url)
.then(function(response){

    return response.json()
     
}).then(function(response){
    tab.classList.remove("table");
    tab.classList.add("tablevisible");
    var p1 = document.createElement('p') 
var p2 = document.createElement('p')
var p3 = document.createElement('p')
var p4 = document.createElement('p')
var p5 = document.createElement('p')
var p6 = document.createElement('p')

 

p1.textContent = response.name
p2.textContent = response.eye_color
p3.textContent = response.height
p4.textContent = response.mass
p5.textContent = response.birth_year


div1.appendChild(p1)
    div2.appendChild(p5)
    div3.appendChild(p2)
    div4.appendChild(p3)
    div5.appendChild(p4)
    

}
  )

    console.log(resultado)
}

function SelecionarTags(tag){
    var selecao = document.querySelector(tag)
    return selecao;
}

