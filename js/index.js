
const skillsSectiom = document.getElementById("skills")
const skillsList = document.getElementById("skills-list")

const skills = [ "HTML", "CSS","Javascript"];

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li')
    skill.textContent = `${skills[i]}`
    skillsList.appendChild(skill)
}


document.body.appendChild(document.createElement('footer'));

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer')

const copyright = document.createElement('p')
copyright.innerHTML = `\u00A9 Michael Castro ${thisYear}`
footer.appendChild(copyright)

