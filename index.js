function displayname(users){
    const userName = users.map(user => user.userName);
    const ul = document.getElementById('listItem');

    for(let i = 0; i< userName.lenght; i++){
        const user = userName[i];
        const li = document.getElementById('li');
        li.innerHTML = user;
        ul.appendChild(li);
    }
}


function displayname1(user){
    const userName = user.map(user => user.userName);
    const ul = document.getElementById('listItem');

    for (let i = 0; i < userName.length; i++) {
        const user = userName[i];
        const li = document.getElementById('li');
        li.innerHTML = user;
        ul.appendChild(li);     
    }
}