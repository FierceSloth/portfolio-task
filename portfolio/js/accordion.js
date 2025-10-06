const currentAccordId = sessionStorage.getItem("currentAccorId") || document.querySelector('details').id;

document.querySelectorAll("details").forEach((other) => {
  other.removeAttribute("open");
});
document.getElementById(currentAccordId).open = true;

document.querySelectorAll("details").forEach((el) => {
  el.addEventListener("toggle", () => {
    if (el.open) {
      document.querySelectorAll("details").forEach((other) => {
        if (other !== el) other.removeAttribute("open");
      });
      sessionStorage.setItem("currentAccorId", el.id);
    }
  });
});