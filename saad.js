document.addEventListener('DOMContentLoaded', () => {
  const screens = {
    gift: document.getElementById('gift-screen'),
    namePrompt: document.getElementById('name-prompt-screen'),
    main: document.getElementById('main-content'),
    gallery: document.getElementById('gallery-screen'),
  };

  const giftBox = document.getElementById('gift-box');
  const submitNameBtn = document.getElementById('submit-name-btn');
  const nameInput = document.getElementById('name-input');
  const birthdaySong = document.getElementById('birthday-song');

  const messageContainer = document.getElementById('message-container');
  const choiceContainer = document.getElementById('choice-container');
  const choiceQuestion = document.getElementById('choice-question');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const catImage = document.querySelector('.mochi-cat');

  let userName = '';

  const messages = [
    {
      text: "Happy birthday, gorgeous! Today is all about celebrating you.",
      img: "https://media.tenor.com/7b73h3o1TXYAAAAi/peach-goma.gif",
    },
    {
      text: "You are the sunshine of my life 🌞💗",
      img: "https://media.tenor.com/s_SfT35F5R4AAAAi/peach-goma-peach-and-goma.gif",
    },
    {
      text: "Aaj ka din itna special isliye hai kyunki aapka birthday hai 🎂✨",
      img: "https://media.tenor.com/l-en3s2b1d0AAAAi/peach-and-goma-kiss.gif",
    },
    {
      text: "Happy Birthday meri khoobsurat princess 💝",
      img: "https://media.tenor.com/x0g1Zp2c0JcAAAAi/peach-and-goma.gif",
    },
    {
      text: "Tere bina adhuri thi meri kahaani 🌸",
      img: "https://media.tenor.com/Q2H3-V5v3MAAAAAi/peach-and-goma.gif",
    },
    {
      text: "CHALO MUMMA MOMOS KHATE HAI 🤌🏻",
      img: "https://media.tenor.com/7z8i8o1i09wAAAAi/peach-and-goma.gif",
    },
  ];

  const switchScreen = (screenName) => {
    for (let key in screens) {
      screens[key].classList.add('hidden');
    }
    screens[screenName].classList.remove('hidden');
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const playMessageSequence = async () => {
    for (const msg of messages) {
      catImage.src = msg.img;
      messageContainer.textContent = msg.text;
      await delay(4000);
    }

    messageContainer.classList.add('hidden');
    choiceQuestion.textContent = `${userName}, shall we celebrate now? 🎉`;
    choiceContainer.classList.remove('hidden');
  };

  giftBox.addEventListener('click', () => {
    birthdaySong.play();
    switchScreen('namePrompt');
  });

  submitNameBtn.addEventListener('click', () => {
    userName = nameInput.value.trim();
    if (userName === '') {
      alert('Please enter your name!');
      return;
    }

    document.getElementById('birthday-greeting').textContent = `Happy Birthday, ${userName}!`;
    document.getElementById('gallery-title').textContent = `Happy Birthday ${userName}`;
    switchScreen('main');
    playMessageSequence();
  });

  yesBtn.addEventListener('click', () => {
    switchScreen('gallery');
  });

  noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  switchScreen('gift');
});
