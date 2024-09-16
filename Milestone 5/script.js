var form = document.getElementById("resume");
var display = document.getElementById("display");
var shareableLinkContainer = document.getElementById('share-link');
var shareableLinkElement = document.getElementById('resume-link');
var downloadPdfButton = document.getElementById('download-btn');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var institutes = document.getElementById("institutes").value;
    var organizations = document.getElementById("organizations").value;
    var skill = document.getElementById("skill").value;
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        institutes: institutes,
        organizations: organizations,
        skill: skill
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resume = "\n    <h2><b>Resume<b></h2>\n    <h3>Personal Info</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact:</b> <span contenteditable=\"true\">").concat(contact, "</span></p>\n    <h3>Education</h3>\n    <p  contenteditable=\"true\">").concat(institutes, "\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(organizations, "\n    <h3>Skills</h3>\n    <p  contenteditable=\"true\">").concat(skill, "\n    ");
    if (display) {
        display.innerHTML = resume;
    }
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('contact').value =
                resumeData.contact;
            document.getElementById('institutes').value =
                resumeData.institutes;
            document.getElementById('organizations').value
                = resumeData.organizations;
            document.getElementById('skill').value =
                resumeData.skill;
        }
    }
});
