document.getElementById("switch").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.getElementById("cambio-boton").classList.replace("izq", "der");
  } else {
    document.getElementById("cambio-boton").classList.replace("der", "izq");
  }

  document.getElementById("info").classList.toggle("info-dark");

  if (document.body.classList.contains("dark")) {
    document
      .getElementById("volver")
      .classList.replace("btn-volver", "btn-volver-dark");
  } else {
    document
      .getElementById("volver")
      .classList.replace("btn-volver-dark", "btn-volver");
  }

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

cargaTema = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    document.getElementById("cambio-boton").classList.replace("izq", "der");
    document.getElementById("info").classList.add("info-dark");
    document
      .getElementById("volver")
      .classList.replace("btn-volver", "btn-volver-dark");
  } else {
    document.body.classList.remove("dark");
    document.getElementById("cambio-boton").classList.replace("der", "izq");
    document.getElementById("info").classList.remove("info-dark");
    document
      .getElementById("volver")
      .classList.replace("btn-volver-dark", "btn-volver");
  }
};

document.getElementById("dropdown").addEventListener("click", () => {
  document.querySelector(".links").classList.toggle("links-block");

  document.getElementById("btn-sobre-mi").addEventListener("click", () => {
    document.querySelector(".links").classList.remove("links-block");
  });
  document.getElementById("btn-mis-proyectos").addEventListener("click", () => {
    document.querySelector(".links").classList.remove("links-block");
  });
  document.getElementById("btn-contacto").addEventListener("click", () => {
    document.querySelector(".links").classList.remove("links-block");
  });
});
