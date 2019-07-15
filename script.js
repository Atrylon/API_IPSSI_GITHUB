const title = document.getElementById('root');

var orgName = '';

const logo = document.createElement('img');
logo.src = 'http://pngimg.com/uploads/github/github_PNG30.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

title.appendChild(logo);
title.appendChild(container);

const app = document.getElementById('content');

function getOrgName(){
    orgName=document.getElementById("org").value;

    resetMemberList();

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
                p.innerHTML = '<ul>';

                fetch('https://api.github.com/users/'+members.login+'/starred?sort=forks&per_page=5')
                 .then(function(response) {
                     return response.json();
                 })
                 .then(function(data) {
                     // console.log(data);
                     data.forEach(repos => {
                         p.innerHTML += `<li><span id="star"><a href="`+repos.html_url+`" target="_blank">`+repos.name+`</a> <img src="https://i1.wp.com/cours-galilee.com/wp-content/uploads/2018/12/star.png?ssl=1">`+repos.stargazers_count+`</span>`+repos.description+`</li>` ;
                     });

                     p.innerHTML += '</ul>';
                 })
                 .catch(function(response) {
                     const errorMessage = document.createElement('marquee');
                     errorMessage.innerHTML = `Gah, it's not working!`;
                     app.appendChild(errorMessage);
                 });

                 container.appendChild(card);
                 card.appendChild(avatar);
                 card.appendChild(h1);
                 card.appendChild(p);

            })
         })
        .catch(function(response) {
                const errorMessage = document.createElement('marquee');
                errorMessage.textContent = `Gah, it's not working!`;
                app.appendChild(errorMessage);
        });
}

function resetMemberList(){
    while(app.firstChild){
        app.removeChild(app.firstChild);
    }
}


