//lesson 13
const skillsSectiom = document.getElementById("skills")
const skillsList = document.getElementById("skills-list")
const projectSection = document.getElementById("projects")
const otherProjectsContainer = document.getElementById("other-projects")
const darkModeBtn = document.getElementById("dark-mode-btn")
const pageContainer = document.getElementById("page-container")


/////////////////////////////// NAVBAR SECTION DARK MODE CODE//////////////////////////////////////////////////
let darkModeIsOn = true;

darkModeBtn.addEventListener('click',toggleDarkMode)

function toggleDarkMode(){
    console.log("Dark mode btn clicked")

    //if dark mode is on
    if(darkModeIsOn){
        darkModeBtn.classList.toggle("fa-toggle-on")
        pageContainer.classList.toggle("light-text")
        darkModeIsOn = false;
        pageContainer.style.backgroundColor = "rgb(33, 31, 31)"
    }

    //if dark mode is off
    else if(!darkModeIsOn){
        darkModeBtn.classList.toggle("fa-toggle-on")
        pageContainer.classList.toggle("light-text")
        darkModeIsOn = true;
        pageContainer.style.backgroundColor = "aliceblue"
    }
}

/////////////////////////////////////////////////////////// SKILLS SECTION ///////////////////////////////////////////////////////////////////

const skills = [ "HTML", "CSS","Javascript"];

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('h4')
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}



////////////////////////////////////////////////////PROJECTS SECTION////////////////////////////////////////////////////////////

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

        otherProjectsContainer.appendChild(project)
    }
}
     
    
)
.catch(error => console.log(error))


///////////////////////////////////////////////////////////MESSAGES SECTION//////////////////////////////////////////////////////////

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
   

    //when a userMessage list item is added, the hide message class should be toggled on and the button should show

    let messageList = messageSection.querySelector('ul');//contains the full list in the message section
    
    let newMessage = document.createElement('li')

    newMessage.innerHTML = `
        <div style = "margin-top:20px">
            Sending To
            <a class = 'dark-text' href="mailto:${usersEmail}">${name}</a>
            <span> (Message) 🡆 ${usersMessage}</span>
        </div>
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


////////////////////////////////////////////////// FOOTER SECTION //////////////////////////////////////////////////////////////////

//GETS THE CURRENT YEAR AND APPENDS COPYRIGHT DATE TO THE FOOTER
document.body.appendChild(document.createElement('footer'));

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.getElementById('footer')
footer.style.backgroundColor = "blueviolet"
footer.style.color = "white"

const copyright = document.createElement('p')
copyright.innerHTML = `\u00A9 Michael Castro ${thisYear}`
footer.appendChild(copyright)