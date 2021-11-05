const add = document.getElementById("btn");
let table = document.getElementById("table");
let modal = document.getElementById("myModal");


let person = {};
let id =0

function createPerson(){

  id++
  
    const name = prompt('Enter Name');
    const salary = '5'
    const designation = 'eng'
    person.id = id
    person.name = name
    person.salary = salary
    person.designation = designation

    let row = document.createElement('tr')
    
    row.innerHTML=`<td>${person.id}</td>
    <td>${person.name}</td>
    <td>${person.salary}</td>
    <td>${person.designation}</td>
    <td><button>Edit</button></td>
    <td><button>delete</button></td>`
    table.append(row)
    
    editBtn = row.querySelector("button")
    editBtn.addEventListener('click',editDetails)
    delBtn = row.lastElementChild
    delBtn.addEventListener('click',deletee)
} 

function editDetails(e){
modal.classList.toggle('modal')
const editRow = e.target.parentNode.parentNode;

console.log(editRow)

function submit(){
  let name = document.getElementById('name').value
  let salary =  document.getElementById('salary').value
  let designation = document.getElementById('designation').value
  
  editRow.innerHTML=`<td>${person.id}</td>
  <td>${name}</td>
  <td>${salary}</td>
  <td>${designation}</td>
  <td><button>Edit</button></td>`

  modal.classList.toggle('modal')

  deletee(editRow)
}



let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click',submit)
}


function deletee(e){

  const editrow = e.target.parentNode.parentNode
  editrow.remove()

}
add.addEventListener('click',createPerson)


