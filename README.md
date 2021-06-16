
# Eco-tías 🌱
Las eco-tías es principalmente una distribuidora de productos ecológicos, está conformado por dos amigos que, su pasión es chismear y cuidar el planeta. Cuentan con una gran variedad de productos: Cuidado del cabello, cuerpo, íntimo, bucal; productos de belleza; y accesorios.
Dentro de sus principales objetivos está el crear consciencia sobre la cantidad de residuos que se generan diariamente a través de lo que hacen mejor, chismear.
Aunque no se consideran expertos en el tema, quieren dar consejos (de tías) sobre lo que saben que funciona y son fáciles de poner en práctica.
Su negocio está abierto a todo público que quiera lograr un cambio en su estilo de vida con el objetivo de ser más amigable con el ambiente y sustentable 🌳.

## Integrantes del equipo 👨🏼‍💻👨🏼‍💻👩🏼‍💻
Somos Alejandro Espíndola, Juan Jiménez y Elisa Villeda, un tercio con perfiles totalmente diferentes, pero con el objetivo de convertirnos en desarrolladores web Full-Stack 😎. En este proyecto ponemos a prueba nuestros conocimientos adquiridos para poder satisfacer las necesidades de nuestro cliente, además de llevarnos la grata experiencia de trabajar como equipo en un proyecto real 🤠.

## Sitios de referencia 🌐
- [Ecobutik](https://www.ecobutik.com/ "Ecobutik"): Tienen productos similares y creemos que por sus funcionalidades, así como la estética, es amigable y agradable para el usuario.

- [Somos Tierra](https://www.somostierra.com.mx/shop "Somos Tierra"): Tienen productos similares. Consideramos que la página es "sencilla", pero funcional.

- [itemerie](https://itemerie.com/ "itemerie"): Está orientada a la venta de productos similares, tiene un diseño de tendencia lo cual es bastante llamativo. Sus funcionalidades parecen ser adecuadas.

- [Nanah](https://nanah.mx/ "Nanah"): Sitio web con productos similares. La página está bien organizada.

- [Verdecitos](https://verdecitos.mx/ "Verdecitos"): Sitio web orientado a la venta de productos ecólogicos, apunta a un publico que lleva la sustentabilidad como un estilo de vida, además de publicar artículos relacionados a la ecología.

## Retrospectiva

Siguiendo la dinámica "estrella de mar", los 3 concluimos que deberíamos organizarnos y comenzar con el sprint desde el día en el que éste comienza; de esta forma tendríamos tiempo para que el profesor pueda darnos retroalimentación de nuestros avances antes del día de entrega. Por otro lado, nos dimos cuenta que necesitamos mejorar nuestra comunicación en cada paso que demos en el sprint, incluido el uso de Trello. También consideramos externar nuestras dudas en el momento en el que surgen y establecer un canal de comunicación con nuestro profesor a cargo. 
En cuanto a las actividades que debemos continuar haciendo están el repartir las tareas homogeneamente y tener presente nuestro objetivo que es el de aprender.
Acordamos dejar de procrastinar y realmente comprometernos y practicar lo más que podamos. 

## Trello

- [Proyecto Integrador](https://trello.com/b/s7m1O6XI/proyecto-integrador-e9/ "Proyecto Integrador")

# Lineamientos generales
### 1. Documentar el código
Es importante que escribamos comentarios en código para hacerlo más entendible para todo el equipo y no solo para quien lo escribe.

Comentarios en CSS: `/* COMENTARIO */`

Comentarios en HTML: `<!-- COMENTARIO  -->`

### 2.- Usar selectores de clase o ID
Evitar usar selectores de etiqueta para dar algún estilo de manera general y no correr el riesgo de romper código que otro miembro del equipo haga.

Por ejemplo, en vez de usar `a {}` para darle estilos a los enlaces de cierta sección, podemos ser más específicos y usar una clase ej. `.linksHeader {}`.

### 3.- Marco común

Todos los archivos HTML deben llevar las siguientes etiquetas dentro de `<head>`:

-  **Fuente Google fonts**

Fuente Montserrat, weight: 300, 400, 500 y 700

`<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet">`

- **Iconos Font Awesome**

[Font Awesome](https://fontawesome.com)

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />`

- **Etiqueta de estilos general** 

El archivo styles.css contiene los estilos del header y footer, así como un estilo general para todo el sitio  `* {}` como tipo de fuente, `margin: 0`, `padding: 0`, etc. Por lo que en sus archivos ya no habrá necesidad de que pongan estilos que apliquen a todo el documento (`* {}`), en caso de querer hacerlo, modificar el archivo styles.css con el estilo que deseen agregar.
El archivo  está disponible en la rama develop, hacer un git pull para traer el archivo a su repositorio local.

`<link rel="stylesheet" href="/css/styles.css">`

### 4. Breakpoints
Usar las siguientes medidas para sus media queries **768px** y **opcionalmente 1280px**. Se recomienda utilizar la estrategia _mobile first_.

`@media (min-width: 768px)` y opcionalmente ``@media (min-width: 1280px)``

### 5. Nombre de archivos CSS
Nombrar sus archivos CSS con el mismo nombre de la sección que estén trabajando. Ej. login.css, register.css, productCart.css, etc.

### 6. Medidas relativas

**Tratar** de usar medidas **_rem_**, la medida por default del navegador es 16px. Por lo tanto, 1 rem = 16px, si quiero que un margen tenga 5px usaria `margin: 0.3125rem` (5/16).

### Importante: Antes de hacer un git push, siempre hacer git pull para traer los cambios más recientes ya que alguien del equipo pudo haber hecho cambios.

##### Cualquier pregunta, sugerencia o cambio lo comentamos por WhatsApp 🤠

