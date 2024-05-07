//lesson 13
const skillsSectiom = document.getElementById("skills")
const skillsList = document.getElementById("skills-list")
const projectSection = document.getElementById("projects")

const skills = [ "HTML", "CSS","Javascript"];

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li')
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}


document.body.appendChild(document.createElement('footer'));

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer')

const copyright = document.createElement('p')
copyright.innerHTML = `\u00A9 Michael Castro ${thisYear}`
footer.appendChild(copyright)

let messageForm = document.querySelector("form[name = 'leave_message']")//selects the form from html

//creates submit form that takes users name, email, & messages.
messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const form = event.target;//stores the form itself

    let name = form.usersName.value;
    let usersEmail = form.usersEmail.value;
    let usersMessage = form.usersMessage.value;

    console.log(form,name, usersEmail)

    let messageSection = document.getElementById("messages");
   

    //when a new list item is added, the hide message class shoudl toggle

    let messageList = messageSection.querySelector('ul');//contains the full list in the message section
    
    let newMessage = document.createElement('li')

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${name}</a>
        <span>${usersMessage}</span>
    `
    messageForm.reset();

    let removeButton = document.createElement('button')

    removeButton.innerText = 'remove'
    removeButton.type = 'button';

    removeButton.addEventListener('click', function(){
        const entry = removeButton.parentNode
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
})


//Fetches All of my projects from github and stores them in a list 
fetch("https://api.github.com/users/CodeBlue709/repos",{
    method: "GET"
}).then(res => { //checks to see if fetched link is incorrect
        if(!res.ok){
            throw new Error('Oops')
        }
        return res.json()
    })
.then(repositories => {
    
    for(let i = 0; i< repositories.length;i++){
        let project = document.createElement('li')
        project.innerText = repositories[i].name;

        projectSection.appendChild(project)
    }
}
     
    
)
.catch(error => console.log(error))

