function startAnimation() {
    document.querySelectorAll('.glass').forEach(el => {
      el.classList.remove('animate');
      void el.offsetWidth;
      el.classList.add('animate');
    });
    }
    window.addEventListener('load', startAnimation);
    window.addEventListener('click', startAnimation);