let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let submitForm= document.getElementById('contact-form');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("navbar-active"); 
});

submitForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent normal form submission
    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('form-response').style.display = 'block';
            form.reset(); // clear the form
        } else {
            response.json().then(data => {
                alert(data.error || "Oops! There was a problem.");
            })
        }
    }).catch(error => {
        alert("Oops! There was a problem.");
    });
});