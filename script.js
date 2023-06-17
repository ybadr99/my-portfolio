const form = document.querySelector('#contact-form');

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Option clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'style.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  }

  localStorage.setItem('theme', mode);
}

// Start Form validation

// show a message with a type of the input
function showMessage(input, message, type) {
  // get the <small> element and set the message
  const msg = input.parentNode.querySelector('small');
  msg.className = 'error';
  msg.innerText = message;
}

form.addEventListener('submit', (e) => {
  // select the inputs
  const { name } = form.elements;
  const { subject } = form.elements;
  const { email } = form.elements;
  const { message } = form.elements;

  // validate inputs
  if (name.value.trim().length === 0) {
    e.preventDefault();
    showMessage(name, 'Please enter a valid name', false);
  } else {
    showMessage(name, '', true);
  }

  if (subject.value.trim().length === 0) {
    e.preventDefault();
    showMessage(subject, 'Please enter a valid subject', false);
  } else {
    showMessage(subject, '', true);
  }

  if (message.value.trim().length === 0) {
    e.preventDefault();
    showMessage(message, 'Please enter a valid text', false);
  } else {
    showMessage(message, '', true);
  }
  // validate the email and email should be lowercase
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    email.value.trim().length === 0 ||
    email.value.trim().toLowerCase() !== email.value.trim() ||
    !emailRegex.test(email.value.trim())
  ) {
    e.preventDefault();
    showMessage(email, 'Please enter a valid Email', false);
  } else {
    showMessage(email, '', true);
  }

  form.reset();
});
