// This script handles the functionality of the "Go to Top" button 
 const goTopBtn = document.getElementById("goTopBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goTopBtn.style.display = "block";
      } else {
        goTopBtn.style.display = "none";
      }
    };
    goTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });



    // Typewriter effect for the text
    // This script creates a typewriter effect for the text "I'm Abrefah Benjamin"
    const text = "I'm Abrefah Benjamin";
    const typingElement = document.getElementById('typing');

    const typingDelay = 100;
    const deletingDelay = 100;
    const pauseAfterTyping = 10000; // 10 seconds pause after typing
    const pauseBeforeTyping = 1000; // 1 second initial delay before typing starts

    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting) {
        typingElement.textContent = text.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === text.length) {
          isDeleting = true;
          setTimeout(typeLoop, pauseAfterTyping);
        } else {
          setTimeout(typeLoop, typingDelay);
        }
      } else {
        typingElement.textContent = text.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setTimeout(typeLoop, pauseBeforeTyping);
        } else {
          setTimeout(typeLoop, deletingDelay);
        }
      }
    }

    setTimeout(typeLoop, pauseBeforeTyping);

//mouse cursor effect
// This script creates a custom mouse cursor effect that expands on click
    const cursor = document.querySelector('.mousecursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })