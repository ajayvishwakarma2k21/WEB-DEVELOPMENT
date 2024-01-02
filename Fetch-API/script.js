
const userCardTemplate = document.getElementById('profile-card-template');
const container = document.getElementById('main');

async function fetchData(){
    const responce = await fetch('https://dummyjson.com/users');
    const data = await responce.json();
    const users = data.users;
    bindData(users);
}

function bindData(users){
    users.forEach((user)=> {
        const userCardClone = userCardTemplate.content.cloneNode(true);

        const userImage =userCardClone.querySelector('#user-image');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail =userCardClone.querySelector('#user-email');
         
        userImage.src=user.image;
        userName.innerHTML = `${user.firstName} ${user.lastName}`;
        userEmail.innerHTML = user.email;

        container.appendChild(userCardClone);
    })
    // userCard.style.display='none';   
}
fetchData();