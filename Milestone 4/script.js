var form = document.getElementById("resume");
var display = document.getElementById("display");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var institutes = document.getElementById("institutes").value;
    var organizations = document.getElementById("organizations").value;
    var skill = document.getElementById("skill").value;
    var resume = "\n    <h2><b>Resume<b></h2>\n    <h3>Personal Info</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Contact:</b> <span contenteditable=\"true\">").concat(contact, "</span></p>\n    <h3>Education</h3>\n    <p  contenteditable=\"true\">").concat(institutes, "\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(organizations, "\n    <h3>Skills</h3>\n    <p  contenteditable=\"true\">").concat(skill, "\n    ");
    if (display) {
        display.innerHTML = resume;
    }
});
