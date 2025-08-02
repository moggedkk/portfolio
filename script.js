  const text = "a computer science student with a passion for tech and innovation.";
  const element = document.getElementById("typewriter");
  let i = 0;

  function type() {
    if (i < text.length) {
      const char = text.charAt(i);
      element.innerHTML += char;
      i++;
      setTimeout(type, 50);
    }
  }

  window.onload = type;