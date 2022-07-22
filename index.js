// DOM 取得
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists")

// DOM 操作(関数)
function addList(user){
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list)
};

// データのやり取り(非同期関数)
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users
};

// (非同期関数)
async function listUsers() {
    // データのやり取り
    const users = await getUsers();
    // DOM操作
    users.forEach(addList);
};

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
