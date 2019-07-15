const app = document.getElementById('root');

var orgName = '';

const logo = document.createElement('img');
logo.src = 'http://pngimg.com/uploads/github/github_PNG30.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function getOrgName(){
    orgName=document.getElementById("org").value;


fetch('https://api.github.com/orgs/'+orgName+'/members')
    .then(function(response) {
        return response.json();
    })
     .then(function(data){
         data.forEach(members => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const h1 = document.createElement('h1');
                h1.textContent = members.login;

                const p = document.createElement('p');
                p.textContent = `Y A RIEN...`;

                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
            });
     })
    .catch(function(response) {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
    });
//
//     var request = new XMLHttpRequest();
//     alert('https://api.github.com/orgs/'+orgName);
//     request.open('GET', 'https://api.github.com/orgs/'+orgName+'/members', true);
//     request.onload = function () {
//
//         // Begin accessing JSON data here
//         var data = JSON.parse(this.response);
//         if (request.status >= 200 && request.status < 400) {
//             data.forEach(members => {
//                 const card = document.createElement('div');
//                 card.setAttribute('class', 'card');
//
//                 const h1 = document.createElement('h1');
//                 h1.textContent = members.login;
//
//                 const p = document.createElement('p');
//                 p.textContent = `Y A RIEN...`;
//
//                 container.appendChild(card);
//                 card.appendChild(h1);
//                 card.appendChild(p);
//             });
//         } else {
//             const errorMessage = document.createElement('marquee');
//             errorMessage.textContent = `Gah, it's not working!`;
//             app.appendChild(errorMessage);
//         }
//     };
//
//     request.send();
}




