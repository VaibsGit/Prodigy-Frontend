window.onload = () => {
  alert("Welcome to Vaibhavi More's Portfolio!");
};
const btn = document.createElement("button");
btn.innerText = "Toggle Theme";
btn.style.position = "fixed";
btn.style.top = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.background = "#444";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";

btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.body.appendChild(btn);
