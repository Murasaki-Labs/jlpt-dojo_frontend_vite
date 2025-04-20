import "./style.scss";
import { renderHome } from "./pages/Home";

const app = document.querySelector<HTMLDivElement>("#app")!;

async function render() {
  app.innerHTML = await renderHome();
}

window.addEventListener("DOMContentLoaded", render);
