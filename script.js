function getalluserposts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const tbody = document.getElementById("tbody");
        const usersids = posts.map(post => post.userId);
        const particularuserids = [...new Set(usersids)]; // Get unique user ids
        const userrequests = particularuserids.map(userId =>
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
        );

        Promise.all(userrequests)
          .then(users => {
            const usersById = users.reduce((acc, user) => {
              acc[user.id] = user;
              return acc;
            }, {});

            const rowsHtml = posts.map(post => `
              <tr>
                <td>${post.id}</td>
                <td>${usersById[post.userId].name}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
              </tr>
            `);

            tbody.innerHTML = rowsHtml.join('');
          });
      });
  }
  

  
  

function getallpost(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {console.log(json);
       
       const tableBody = document.getElementById("tbody");
       console.log(tableforpost)
       const rowsHtml = json.map(json=>`
        <tr>
            <td>${json.id}</td>
            <td>${json.title}</td>
            <td>${json.body}</td>
        </tr>
        `)
        tableBody.innerHTML = rowsHtml.join('');
})
 }

 function getallcomment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => {console.log("commnet "+json);
           const tableBody = document.getElementById("tbody");
           console.log(tableforpost)
           const rowsHtml = json.map(json=>`
            <tr>
                <td>${json.postId}</td>
                <td>${json.id}</td>
                <td>${json.name}</td>
                <td>${json.email}</td>
                <td>${json.body}</td>
            </tr>
            `)
            tableBody.innerHTML = rowsHtml.join('');
    })
     }
