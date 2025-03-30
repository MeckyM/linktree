document.addEventListener("wheel", function(event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "+" || event.key === "-")) {
      event.preventDefault();
    }
  });
  