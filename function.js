function showMessage() {
    document.getElementById("loveMessage").style.display = "block";
    document.getElementById("openBtn").style.display = "none";
  };


  const colors = ['#ff69b4', '#ff1493', '#ffc0cb'];

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.textContent = '🎊';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  setInterval(createHeart, 300);