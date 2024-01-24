function myFunction() {
    alert("You have clicked a button.");
}

function addUser() {
    var userName = document.getElementById("userName").value;
    var userList = document.getElementById("userList");
    var listItem = document.createElement("li");
    listItem.textContent = userName;
    userList.appendChild(listItem);
}