document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar");
  
    function animateBars() {
      bars.forEach(bar => {
        const scaleY = Math.random() * 1.5 + 0.5;
        bar.style.transform = `scaleY(${scaleY})`;
      });
    }
  
    setInterval(animateBars, 100);
  });
  

  $(document).ready(function () {
    const navLinks = $(".navbox li a");
  
    
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
      $(`a[href="${activeLink}"]`).addClass("on");
    }
  
    navLinks.click(function (event) {
      event.preventDefault();
  
      navLinks.removeClass("on");
  
      $(this).addClass("on");
  
      localStorage.setItem("activeLink", $(this).attr("href"));
    });
  });
  