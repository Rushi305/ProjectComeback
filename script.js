
   const nah = document.getElementById("nah");

      function runAway(event) {
        const rect = nah.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        let x, y;

        do {
          x = Math.random() * maxX;
          y = Math.random() * maxY;
        } while (
          Math.hypot(
            x + rect.width / 2 - event.clientX,
            y + rect.height / 2 - event.clientY,
          ) < 150
        );

        nah.style.position = "fixed";
        nah.style.left = x + "px";
        nah.style.top = y + "px";
      }

      nah.addEventListener("mouseenter", runAway);

      nah.addEventListener("touchstart", (event) => {
        event.preventDefault();
        runAway(event.touches[0]);
      });

      nah.addEventListener("click", (event) => {
        event.preventDefault();
        runAway(event);
      });
