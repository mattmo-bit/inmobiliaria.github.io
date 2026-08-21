Desafio Inmobiliaria - Renderizacion Dinamica con DOM
Descripcion del Desafio
El objetivo principal del proyecto fue transformar un sitio web estatico de una inmobiliaria en una aplicacion web dinamica utilizando JavaScript vanilla. Se requeria gestionar catalogos de propiedades (en venta y en alquiler) representados mediante arreglos de objetos, insertandolos dinamicamente en el HTML mediante la manipulacion del DOM.

Principales requerimientos implementados:

Creacion de dos arreglos de objetos independientes con al menos 4 propiedades cada uno (propiedades_venta.js y propiedades_alquiler.js).

Generacion de las vistas correspondientes: index.html (pagina principal), propiedades_venta.html y propiedades_alquiler.html.

Renderizado dinamico utilizando ciclos de iteracion (for...of) e interpolacion de cadenas mediante template literals (innerHTML).

Logica condicional para modificar textos, colores e iconos segun los atributos booleanos smoke (permitido/prohibido fumar) y pets (mascotas permitidas/no permitidas).

Limitacion del renderizado en la pagina principal (index.html) a un maximo de 3 propiedades por seccion, con botones enlazados a sus respectivas paginas completas.

Solucion Aplicada
La solucion se ejecuto mediante una arquitectura modular basada en ES Modules de JavaScript para promover la reutilizacion de codigo y mantener una estructura limpia.

Estructura de Datos: Se crearon arreglos de objetos con llaves estandarizadas (nombre, src, descripcion, ubicacion, habitaciones, banos, costo, smoke, pets).

Evaluacion Condicional: Dentro de los bucles de renderizado, se implemento una logica con operadores ternarios y bloques condicionales para determinar el estilo CSS de Bootstrap (text-success o text-danger), el icono de FontAwesome y el texto explicativo para los permisos de fumar y mascotas.

Paginacion y Límite de Muestra:

En index.js, se utilizo el metodo .slice(0, 3) sobre los arreglos para limitar la vista previa a 3 elementos por seccion.

En venta_page.js y alquiler_page.js, se recorrieron los arreglos completos sin restriccion para listar la totalidad de las propiedades.

Estructura del Proyecto
Plaintext
/
├── assets/
│   ├── css/
│   │   └── estilos.css
│   └── js/
│       ├── propiedades_venta.js
│       ├── propiedades_alquiler.js
│       ├── index.js
│       ├── venta_page.js
│       └── alquiler_page.js
├── index.html
├── propiedades_venta.html
└── propiedades_alquiler.html
Tecnologias Utilizadas
HTML5

CSS3

Bootstrap 5

JavaScript (ES6 Modules, DOM Manipulation)

FontAwesome Icons
