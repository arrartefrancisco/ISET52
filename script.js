// jshint esnext: true
"use strict"; // jshint ignore:line

const btnBurger = document.getElementById("burger");
const title = document.querySelector("h1");
const text = document.querySelector("p");
const links = document.querySelectorAll(".links");
const map = document.querySelector("#map");
const iframeContact = document.querySelector("#iframeContact");
const figures = document.body.querySelectorAll("figure");
// const galleryFigure = document.querySelector("#galleryFigure");
const divMap = document.querySelector("#divMap");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
let desktop = window.matchMedia("(min-width: 768px)");
const textoCarrera = "Es una carrera que capacita por medio de la ciencia, del arte y de la técnica, para crear paisajes que protejan y regeneren el ambiente, privilegiando la calidad de vida .Se concibe al Paisajismo como un instrumento para la conservación de la biodiversidad y el desarrollo sustentable. Nuestros egresados deberán ser capaces de desarrollar las siguientes aptitudes: Diseñar, Construir y mantener espacios verdes, seleccionar los materiales y equipos requeridos para la implementación de proyectos paisajísticos, supervisar y controlar las actividades contempladas en los programas de trabajo. La Profesión de Paisajista fusiona la creatividad y la competencia técnica, abarcando el planeamiento, diseño y gestión de espacios públicos y privados, siendo además una profesión en constante evolución.";

//
//// Muestra/Oculta opciones principales para las pantallas mas chicas al hacer click en un menu especial
//// solo visible para esas pantallas
//

btnBurger.addEventListener("click", ToggleMenu);
//
//// Muestra el nombre de la seccion en la seccion "main"
//// También oculta el menu
//
links.forEach(nn =>
	nn.addEventListener("click", () =>
			////
		{
			if (desktop.matches === false)
			{
				switch (nn.innerText)
				{
					case "Carrera":
						ToggleMenu();
						ToggleMap(nn.innerText);
						break;
					// case "Galería":
					// 	ToggleMenu();
					// 	if (title.innerText !== "Galería")
					// 	{
					// 		title.innerHTML = "Galería";
					// 		ToggleMap(title.innerText);
					// 	}
					// 	break;
					case "Instituto":
						ToggleMenu();
						title.innerHTML = nn.innerText;
						ToggleMap(title.innerText);
						break;
					case "Noticias":
						ToggleMenu();
						if (aside.style.display === "none")
						{
							aside.style.display = "flex";
						}
						else
						{
							aside.style.display = "none";
						}
						break;
				}
			}
			else
			{
				switch (nn.innerText)
				{
					case "Carrera":
						text.innerHTML = nn.innerText;
						ToggleMap(nn.innerText);
						break;
					// case "Galería":
					// 	ToggleMap(nn.innerText);
					// 	break;
					case "Instituto":
						ToggleMap(nn.innerText);
						break;
					case "Noticias":
						if (aside.style.display === "none")
						{
							aside.style.display = "flex";
						}
						else
						{
							aside.style.display = "none";
						}
						break;
				}
			}
		}
	)
);

function ToggleMenu()
{
	if (main.style.display !== "none")
	{
		main.style.display = "none";
		links.forEach(nn => nn.style.display = "flex");
	}
	else
	{
		main.style.display = "block";
		links.forEach(nn => nn.style.display = "none");
	}
}
function ToggleMap(txt)
{
	title.innerHTML = txt;
	switch (title.innerText)
	{
		case "Carrera":
			text.innerHTML = textoCarrera;
			figures.forEach(nn => nn.style.display = "none");
			divMap.style.display = "none";
			map.style.display = "none";
			aside.style.display = "none";
			break;
		// case "Galería":
		// 	text.innerHTML = null;
		// 	galleryFigure.style.display = "flex";
		// 	figures.forEach(nn => nn.style.display = "flex");
		// 	divMap.style.display = "none";
		// 	map.style.display = "none";
		// 	aside.style.display = "none";
		// 	break;
		case "Instituto":
			text.innerHTML = null;
			divMap.style.display = "flex";
			map.style.display = "inherit";
			iframeContact.style.display = "inherit";
			aside.style.display = "none";
			galleryFigure.style.display = "none";
			title.innerHTML = txt;
			text.innerHTML = null;
			break;
	}
}

//
//// Alterna la visibilidad de la descripción de las imagenes de la galeria
//
figures.forEach(nn => nn.addEventListener("click", () =>
{
	if (nn.querySelector("figcaption").style.display === "none")
	{
		nn.querySelector("figcaption").style.display = "flex";
	}
	else
	{
		nn.querySelector("figcaption").style.display = "none";
	}
}) );

//if ((title.innerText !== "Carrera") && (title.innerText !== "Galeria") && (title.innerText !== "Instituto"))
//{
//    document.querySelector("aside").style.display = "flex";
//}
//else
//{
//    document.querySelector("aside").style.display = "none";
//}
