(function () {
  "use strict";

  document.querySelectorAll("[data-news-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector("[data-news-track]");
    var slides = Array.prototype.slice.call(carousel.querySelectorAll("[data-news-slide]"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-news-index]"));
    var previousButton = carousel.querySelector("[data-news-prev]");
    var nextButton = carousel.querySelector("[data-news-next]");
    var currentLabel = carousel.querySelector("[data-news-current]");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var currentIndex = 0;
    var timer = null;
    var touchStartX = null;

    if (!track || slides.length === 0) return;

    function render() {
      track.style.transform = "translate3d(-" + (currentIndex * 100) + "%, 0, 0)";

      slides.forEach(function (slide, index) {
        var isActive = index === currentIndex;
        slide.setAttribute("aria-hidden", String(!isActive));
        slide.querySelectorAll("a, button").forEach(function (control) {
          if (isActive) control.removeAttribute("tabindex");
          else control.setAttribute("tabindex", "-1");
        });
      });

      dots.forEach(function (dot, index) {
        if (index === currentIndex) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });

      if (currentLabel) currentLabel.textContent = String(currentIndex + 1);
    }

    function show(index) {
      currentIndex = (index + slides.length) % slides.length;
      render();
    }

    function stop() {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      stop();
      if (slides.length < 2 || reducedMotion.matches || document.hidden) return;
      timer = window.setInterval(function () {
        show(currentIndex + 1);
      }, 6500);
    }

    function resumeWhenIdle() {
      if (!carousel.matches(":hover") && !carousel.contains(document.activeElement)) start();
    }

    if (previousButton) {
      previousButton.addEventListener("click", function () {
        show(currentIndex - 1);
        stop();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        show(currentIndex + 1);
        stop();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-news-index")) || 0);
        stop();
      });
    });

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", resumeWhenIdle);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", function () {
      window.setTimeout(resumeWhenIdle, 0);
    });
    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(currentIndex - 1);
        stop();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(currentIndex + 1);
        stop();
      }
    });
    carousel.addEventListener("touchstart", function (event) {
      touchStartX = event.changedTouches[0].clientX;
      stop();
    }, { passive: true });
    carousel.addEventListener("touchend", function (event) {
      if (touchStartX === null) return;
      var distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) > 44) show(currentIndex + (distance < 0 ? 1 : -1));
      resumeWhenIdle();
    }, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else resumeWhenIdle();
    });

    if (typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", function () {
        if (reducedMotion.matches) stop();
        else resumeWhenIdle();
      });
    }

    render();
    start();
  });
})();
