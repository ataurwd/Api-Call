document.getElementById('btn').addEventListener('click', function(){
      const titel = document.getElementById('titel').value;
      const bodeText = document.getElementById('bodyText').value;
      const post = {titel: titel, body: bodeText};
      nowPostToServer(post);

})


function nowPostToServer(post){
      fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
      }

      function displayname(users){
            const userName = users.map( user => user.username);
            const ul = document.getElementById('listItem');

            for (let i = 0; i < userName.length; i++) {
                const user = userName[i];
                const li = document.createElement('li');
                li.innerHTML = user;
                ul.appendChild(li);
                
            }
      }
