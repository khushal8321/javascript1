
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
