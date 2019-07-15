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

    try{
        document.getElementById("root").innerHTML = "";
    }
    catch(error){
        console.log(error);
    }

    const logo = document.createElement('img');
    logo.src = 'http://pngimg.com/uploads/github/github_PNG30.png';

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(logo);
    app.appendChild(container);

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

                const avatar = document.createElement('img');
                avatar.src = members.avatar_url;

                const p = document.createElement('p');
                p.textContent = `Pas d'infos disponibles...`;

                container.appendChild(card);
                card.appendChild(avatar);
                card.appendChild(h1);
                card.appendChild(p);
            });
     })
    .catch(function(response) {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            app.appendChild(errorMessage);
    });
}




