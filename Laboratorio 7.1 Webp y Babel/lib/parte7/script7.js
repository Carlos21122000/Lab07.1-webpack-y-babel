"use strict";

require("core-js/modules/es.symbol.match-all.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.promise.all-settled.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.string.match-all.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.typed-array.float32-array.js");

require("core-js/modules/es.typed-array.float64-array.js");

require("core-js/modules/es.typed-array.int8-array.js");

require("core-js/modules/es.typed-array.int16-array.js");

require("core-js/modules/es.typed-array.int32-array.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.uint8-clamped-array.js");

require("core-js/modules/es.typed-array.uint16-array.js");

require("core-js/modules/es.typed-array.uint32-array.js");

require("core-js/modules/es.typed-array.from.js");

require("core-js/modules/es.typed-array.of.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url.to-json.js");

require("core-js/modules/web.url-search-params.js");

require("../CSS/csspaginas.scss");

var _img = _interopRequireDefault(require("../multimedia/img23.jpeg"));

var _img2 = _interopRequireDefault(require("../multimedia/img25.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const header1 = document.createElement("header");
const nav1 = document.createElement("nav");
const ul_general = document.createElement("ul");
const li_inicio = document.createElement("li");
const a_inicio = document.createElement("a");
const span_inicio = document.createElement("span");
a_inicio.href = "./principal.html";
a_inicio.innerText = "Inicio";
span_inicio.class = "primero";
a_inicio.appendChild(span_inicio);
li_inicio.appendChild(a_inicio);
ul_general.appendChild(li_inicio);
nav1.appendChild(ul_general);
header1.appendChild(nav1);
const li_primeras = document.createElement("li");
const a_primeras = document.createElement("a");
const span_primeras = document.createElement("span");
a_primeras.href = ""; //no es necesario agregar pagina aqui

a_primeras.innerText = "Primeras 3";
span_primeras.class = "segundo";
a_primeras.appendChild(span_primeras);
li_primeras.appendChild(a_primeras);
ul_general.appendChild(li_primeras);
nav1.appendChild(ul_general);
header1.appendChild(nav1);
const ul_primeras = document.createElement("ul");
const li_primeras1 = document.createElement("li");
const a_primeras1 = document.createElement("a");
a_primeras1.href = "./Parte1.html";
a_primeras1.innerText = "Parte 1, llegada al aereopuerto";
li_primeras1.appendChild(a_primeras1);
ul_primeras.appendChild(li_primeras1);
li_primeras.appendChild(ul_primeras);
const li_primeras2 = document.createElement("li");
const a_primeras2 = document.createElement("a");
a_primeras2.href = "../Parte2.html";
a_primeras2.innerText = "Parte 2, durante el vuelo y llegada";
li_primeras2.appendChild(a_primeras2);
ul_primeras.appendChild(li_primeras2);
li_primeras.appendChild(ul_primeras);
const li_primeras3 = document.createElement("li");
const a_primeras3 = document.createElement("a");
a_primeras3.href = "./Parte3.html";
a_primeras3.innerText = "Parte 3, salida a San Francisco";
li_primeras3.appendChild(a_primeras3);
ul_primeras.appendChild(li_primeras3);
li_primeras.appendChild(ul_primeras);
const li_siguientes = document.createElement("li");
const a_siguientes = document.createElement("a");
const span_siguientes = document.createElement("span");
a_siguientes.href = ""; //no es necesario agregar pagina aqui

a_siguientes.innerText = "Siguientes 3";
span_siguientes.class = "tercero";
a_siguientes.appendChild(span_siguientes);
li_siguientes.appendChild(a_siguientes);
ul_general.appendChild(li_siguientes);
nav1.appendChild(ul_general);
header1.appendChild(nav1);
const ul_siguientes = document.createElement("ul");
const li_siguientes1 = document.createElement("li");
const a_siguientes1 = document.createElement("a");
a_siguientes1.href = "./Parte4.html";
a_siguientes1.innerText = "Parte 4, Estando en SF";
li_siguientes1.appendChild(a_siguientes1);
ul_siguientes.appendChild(li_siguientes1);
li_siguientes.appendChild(ul_siguientes);
const li_siguientes2 = document.createElement("li");
const a_siguientes2 = document.createElement("a");
a_siguientes2.href = "./Parte5.html";
a_siguientes2.innerText = "Parte 5, Las vegas";
li_siguientes2.appendChild(a_siguientes2);
ul_siguientes.appendChild(li_siguientes2);
li_siguientes.appendChild(ul_siguientes);
const li_siguientes3 = document.createElement("li");
const a_siguientes3 = document.createElement("a");
a_siguientes3.href = "./Parte6.html";
a_siguientes3.innerText = "Parte 6, Mi primer partido de Base";
li_siguientes3.appendChild(a_siguientes3);
ul_siguientes.appendChild(li_siguientes3);
li_siguientes.appendChild(ul_siguientes);
const li_ultimas = document.createElement("li");
const a_ultimas = document.createElement("a");
const span_ultimas = document.createElement("span");
a_ultimas.href = ""; //no es necesario agregar pagina aqui

a_ultimas.innerText = "Ultimas 4";
span_ultimas.class = "cuarto";
a_ultimas.appendChild(span_ultimas);
li_ultimas.appendChild(a_ultimas);
ul_general.appendChild(li_ultimas);
nav1.appendChild(ul_general);
header1.appendChild(nav1);
const ul_ultimas = document.createElement("ul");
const li_ultimas1 = document.createElement("li");
const a_ultimas1 = document.createElement("a");
a_ultimas1.href = "./Parte7.html";
a_ultimas1.innerText = "Parte 7, Ida a Six Flag";
li_ultimas1.appendChild(a_ultimas1);
ul_ultimas.appendChild(li_ultimas1);
li_ultimas.appendChild(ul_ultimas);
const li_ultimas2 = document.createElement("li");
const a_ultimas2 = document.createElement("a");
a_ultimas2.href = "./Parte8.html";
a_ultimas2.innerText = "Parte 8, Ida a estudios Universales";
li_ultimas2.appendChild(a_ultimas2);
ul_ultimas.appendChild(li_ultimas2);
li_ultimas.appendChild(ul_ultimas);
const li_ultimas3 = document.createElement("li");
const a_ultimas3 = document.createElement("a");
a_ultimas3.href = "./Parte9.html";
a_ultimas3.innerText = "Parte 9, Ida a Disney";
li_ultimas3.appendChild(a_ultimas3);
ul_ultimas.appendChild(li_ultimas3);
li_ultimas.appendChild(ul_ultimas);
const li_ultimas4 = document.createElement("li");
const a_ultimas4 = document.createElement("a");
a_ultimas4.href = "./Parte10.html";
a_ultimas4.innerText = "Parte 10, Estadio LAFC";
li_ultimas4.appendChild(a_ultimas4);
ul_ultimas.appendChild(li_ultimas4);
li_ultimas.appendChild(ul_ultimas);
const li_personal = document.createElement("li");
const a_personal = document.createElement("a");
const span_personal = document.createElement("span");
a_personal.href = "./personal.html";
a_personal.innerText = "Quien Soy?";
span_personal.class = "quinto";
a_personal.appendChild(span_personal);
li_personal.appendChild(a_personal);
ul_general.appendChild(li_personal);
nav1.appendChild(ul_general);
header1.appendChild(nav1);
const h1 = document.createElement("h1");
const titulo = document.createTextNode("IDA A SIX FLAX LOS ANGELES");
h1.appendChild(titulo);
const h4 = document.createElement("h4");
const texto1 = document.createTextNode("experiencia");
h4.appendChild(texto1);
const main_div = document.createElement("div");
const parrafo = document.createElement("p");
const contenido = document.createTextNode("De los parque de diversion que fue, este fue mi favorito, por tanta montaña rusa y lo extremo que era el parque a comparacion de disney y estudios universales");
parrafo.appendChild(contenido);
const detail = document.createElement("details");
const summary = document.createElement("summary");
summary.innerText = "SIX FLAG";
detail.appendChild(summary);
main_div.appendChild(detail);
const image2 = document.createElement("img");
image2.src = _img.default;
image2.style.width = "450px";
image2.style.height = "350px";
image2.style.display = "block";
image2.style.margin = "auto";
detail.appendChild(image2);
const image3 = document.createElement("img");
image3.src = _img2.default;
image3.style.width = "450px";
image3.style.height = "450px";
image3.style.display = "block";
image3.style.margin = "auto";
detail.appendChild(image3);
const br3_texto = document.createElement("br");
main_div.appendChild(br3_texto);
const label1 = document.createElement("label1");
label1.id = "link";
label1.innerText = "link";
const Lista1 = document.createElement("ol");
const Li_1 = document.createElement("li");
const a_1 = document.createElement("a");
a_1.href = "https://www.sixflags.com/magicmountain";
a_1.innerText = "Six Flax los angeles";
Li_1.appendChild(a_1);
Lista1.appendChild(Li_1);
const Li_2 = document.createElement("li");
const a_2 = document.createElement("a");
a_2.href = "./principal.html";
a_2.innerText = "Regresar a Pagina Principal"; // regresar a pagina principal

Li_2.appendChild(a_2);
Lista1.appendChild(Li_2);
const label = document.createElement("label");
label.id = "pagina";
label.innerText = "Pagina 7  \t";
const progressbar = document.createElement("progress");
progressbar.id = "file";
progressbar.innerText = "63%";
progressbar.value = 63;
progressbar.max = 100; // Añadir el nodo Element como hijo de la pagina
//document.body.appendChild(div);

document.body.appendChild(header1);
document.body.appendChild(h1);
document.body.appendChild(h4);
document.body.appendChild(parrafo);
document.body.appendChild(main_div);
document.body.appendChild(label1);
document.body.appendChild(Lista1);
document.body.appendChild(label);
document.body.appendChild(progressbar);