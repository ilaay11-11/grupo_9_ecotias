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
Usar las siguientes medidas para sus media queries **320px** y  **768px**. Lo que esté afuera de 768px se considera como default (resolución 768px+). Se recomienda utilizar la estrategia _mobile first_.

### 5. Nombre de archivos CSS
Nombrar sus archivos CSS con el mismo nombre de la sección que estén trabajando. Ej. login.css, register.css, productCart.css, etc.

### 6. Medidas relativas

**Tratar** de usar medidas **_rem_**, la medida por default del navegador es 16px. Por lo tanto, 1 rem = 16px, si quiero que un margen tenga 5px usaria `margin: 0.3125rem` (5/16).

### Importante: Antes de hacer un git push, siempre hacer git pull para traer los cambios más recientes ya que alguien del equipo pudo haber hecho cambios.

##### Cualquier pregunta, sugerencia o cambio lo comentamos por WhatsApp 🤠
