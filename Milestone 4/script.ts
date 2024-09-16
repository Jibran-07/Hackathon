const form = document.getElementById("resume") as HTMLFormElement
const display = document.getElementById("display") as HTMLDivElement

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("contact") as HTMLInputElement).value
    const institutes = (document.getElementById("institutes") as HTMLInputElement).value
    const organizations = (document.getElementById("organizations") as HTMLInputElement).value
    const skill = (document.getElementById("skill") as HTMLInputElement).value

    const resume = `
    <h2><b>Resume<b></h2>
    <h3>Personal Info</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Contact:</b> <span contenteditable="true">${contact}</span></p>
    <h3>Education</h3>
    <p  contenteditable="true">${institutes}
    <h3>Experience</h3>
    <p contenteditable="true">${organizations}
    <h3>Skills</h3>
    <p  contenteditable="true">${skill}
    `
    if(display){
        display.innerHTML = resume
    }
})
