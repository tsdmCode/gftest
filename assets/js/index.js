const form = document.getElementById('signupform');
const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const noSpecialSignsRegex = new RegExp(/[!@$%^&*(),?":{}|<>]/);

let hasErrors = false;

function submitForm(event) {
  event.preventDefault();
  clearErrors();

  const firstName = event.target.firstname;
  const lastName = event.target.lastname;
  const email = event.target.email;
  const password = event.target.password;
  const passwordRepeat = event.target.passwordRepeat;

  if (firstName.value.length < 2) {
    setErrorMessage(firstName, 'Fornavn skal være på mere end et bogstav');
  } else if (noSpecialSignsRegex.test(firstName.value)) {
    setErrorMessage(firstName, 'Dit navn er for mærkeligt, DUDE!');
  }

  if (lastName.value.length < 2) {
    setErrorMessage(lastName, 'Efternavn skal være på mere end et bogstav');
  } else if (noSpecialSignsRegex.test(lastName.value)) {
    setErrorMessage(lastName, 'Dit efternavn er for mærkeligt, DUDE!');
  }

  if (!emailRegex.test(email.value)) {
    setErrorMessage(email, 'Indtast en gyldig e-mail!');
  }

  //pw
  if (password.value.length < 6) {
    setErrorMessage(password, 'Password skal være længere end 6');
  }

  if (!noSpecialSignsRegex.test(password.value)) {
    setErrorMessage(password, 'Password skal have mindst en speciel karakter');
  }
  //pwrepeat
  if (password.value !== passwordRepeat.value) {
    setErrorMessage(passwordRepeat, 'Dit password matcher ikke');
  }

  if (!hasErrors) {
    alert('Tillykke du har indsendt formen');
  }
}

//helper function to create an error message

function setErrorMessage(target, message) {
  hasErrors = true;
  let errorMessage = document.createElement('b');
  errorMessage.classList.add('error');
  errorMessage.innerText = message;
  target.after(errorMessage);
}

function clearErrors() {
  hasErrors = false;
  let errors = document.querySelectorAll('b');
  errors.forEach((el) => {
    el.remove();
  });
}

const imgArr = [
  {
    source: 'assets/images/Plane-In-Sunset.jpg',
    alt: 'Et fly der flyver under solnedgang',
  },
  {
    source: 'assets/images/Slider-Plane-In-Sunrise.jpg',
    alt: 'et fly der flyver under solopgang',
  },
  {
    source: 'assets/images/Slider-Plane-on-Runway.jpg',
    alt: 'et fly der står på en flybane',
  },
];

const heroImage = document.getElementById('mainpic');
const buttons = document.querySelectorAll('.sliderbutton');
let currentIndex = 0;

const increment = () => {
  if (currentIndex == imgArr.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  heroImage.src = imgArr[currentIndex].source;
  heroImage.alt = imgArr[currentIndex].alt;
};

const decrement = () => {
  if (currentIndex == 0) {
    currentIndex = imgArr.length - 1;
  } else {
    currentIndex--;
  }
  heroImage.src = imgArr[currentIndex].source;
  heroImage.alt = imgArr[currentIndex].alt;
};

buttons[1].addEventListener('click', increment);
buttons[0].addEventListener('click', decrement);

buttons[1].addEventListener('touch', increment);
buttons[0].addEventListener('touch', decrement);
