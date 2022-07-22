const button = document.getElementById("addBtn");
const lists = document.getElementById("lists")

async function listUsers() {
    // データのやり取り
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    // DOM操作
    users.forEach(function(user){
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list)
    });
};

window.addEventListener("load", listUsers());
button.addEventListener("click", listUsers());
