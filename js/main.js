function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0";
    document.body.classList.toggle("opacity");
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);

  // BACKTOP function
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}

// Navbar Shrink
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

// Aos function
AOS.init({
    duration: 1000
});

function toggleOpacity(buttonIndex) {
    const cardIndex = buttonIndex;
    const card = document.getElementsByClassName('card-info')[cardIndex];
    const button = document.getElementsByClassName('toggle-button')[buttonIndex];
    if (card.style.opacity === '0') {
      card.style.opacity = '1';
      button.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
      button.style.backgroundColor = '#79C8C7';
    } else {
      card.style.opacity = '0';
      button.innerHTML = '+';
      button.style.backgroundColor = '#F67E7E';
    }
  }

  const buttons = document.getElementsByClassName('toggle-button');
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', () => toggleOpacity(i));
}