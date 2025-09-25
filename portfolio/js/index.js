document.querySelectorAll("details").forEach((el) => {
  el.addEventListener("toggle", () => {
    if (el.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== el) other.removeAttribute("open");
      });
    }
  });
});