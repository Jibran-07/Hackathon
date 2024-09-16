const form = document.getElementById("resume") as HTMLFormElement
const display = document.getElementById("display") as HTMLDivElement
const shareableLinkContainer = document.getElementById('share-link') as HTMLDivElement;
const shareableLinkElement = document.getElementById('resume-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-btn') as HTMLButtonElement;

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();
    const username = (document.getElementById("username") as HTMLInputElement).value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("contact") as HTMLInputElement).value
    const institutes = (document.getElementById("institutes") as HTMLInputElement).value
    const organizations = (document.getElementById("organizations") as HTMLInputElement).value
    const skill = (document.getElementById("skill") as HTMLInputElement).value

    const resumeData = {
        name,
        email,
        contact	,
        institutes,
        organizations,
        skill
        };
        localStorage.setItem(username, JSON.stringify(resumeData));

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
    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
})
downloadPdfButton.addEventListener('click', () => {
    window.print();
})
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {

        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('username') as HTMLInputElement).value =
        username;
        (document.getElementById('name') as HTMLInputElement).value =
        resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value =
        resumeData.email;
        (document.getElementById('contact') as HTMLInputElement).value =
        resumeData.contact;
        (document.getElementById('institutes') as HTMLTextAreaElement).value =
        resumeData.institutes;
        (document.getElementById('organizations') as HTMLTextAreaElement).value
        = resumeData.organizations;
        (document.getElementById('skill') as HTMLTextAreaElement).value =
        resumeData.skill;
        }
    }
});