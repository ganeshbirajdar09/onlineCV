let theme = localStorage.getItem("portfolio-theme");
let themeCSS = document.querySelector("link#theme-css");

if (theme !== null) {
  if (theme == "dark") {
    themeCSS.href = "/styles/dark.css";
    document.getElementById("themeDark").style.background = "#fff";
    document.getElementById("themeDark").style.color = "#000";
  }
} else {
  themeCSS.href = "";
  document.getElementById("themeLight").style.background = "#000";
  document.getElementById("themeLight").style.color = "#fff";
}

Array.from(document.querySelectorAll("button.themeBtn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.id == "themeDark") {
      localStorage.setItem("portfolio-theme", "dark");
      themeCSS.href = "/styles/dark.css";
      document.getElementById("themeDark").style.background = "#fff";
      document.getElementById("themeDark").style.color = "#000";
      document.getElementById("themeLight").removeAttribute("style");
    }
    if (e.target.id == "themeLight") {
      localStorage.removeItem("portfolio-theme");
      themeCSS.href = "";
      document.getElementById("themeLight").style.background = "#000";
      document.getElementById("themeLight").style.color = "#fff";
      document.getElementById("themeDark").removeAttribute("style");
    }
  });
});
