class User {
  constructor(name, surname) {
    (this.nome = name), (this.cognome = surname);
  }
}

/*function printData() {
  let name = document.getElementById("name-value").value;
  let surname = document.getElementById("surname-value").value;
  let list = document.getElementById("data-list");
  let newUser = document.createElement("li");

  newUser.innerHTML += name += surname;

  list.appendChild(newUser);
}*/

console.log(new User("Luigi", "Crisci"));
