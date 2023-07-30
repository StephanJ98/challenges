# Guía para crear API's REST con Node.js y Express.js

## Introducción

En esta guía, aprenderás a crear API's RESTful utilizando Node.js y Express.js, dos de las tecnologías más populares para el desarrollo de aplicaciones web y servidores. Una API REST es una interfaz que permite a diferentes aplicaciones comunicarse entre sí a través de la web mediante solicitudes HTTP. Utilizaremos Express.js, un marco de aplicaciones web rápido y minimalista para Node.js, que facilita la creación de API's RESTful de manera eficiente y estructurada.

## Requisitos previos

Para seguir esta guía, necesitarás tener instalados los siguientes componentes en tu máquina:

1. Node.js: Puedes descargar la última versión estable de Node.js desde el sitio oficial: https://nodejs.org
2. NPM (o similar como `pnpm` o `yarn`)

## Paso 1: Configuración del proyecto

1. Crea una nueva carpeta para tu proyecto y navega a ella desde la línea de comandos:

```bash
mkdir mi-proyecto-api
cd mi-proyecto-api
```

2. Inicializa un nuevo proyecto de Node.js usando el comando `pnpm init`. Puedes aceptar las configuraciones por defecto o personalizarlas según tus preferencias.

```bash
pnpm init
```

3. Crea un archivo `.gitignore` y añade la linea `node_modules`.
    Esto hace que git no tenga en cuenta los archivos dentro de la carpeta `node_modules`.

## Paso 2: Configuración de package.json

Mediante el comando `pnpm add nodemon` instalaremos el paquete `nodemon`.

``Nodemon`` es una herramienta para desarrolladores de Node.js que permite reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos de código. Facilita el proceso de desarrollo al eliminar la necesidad de reiniciar manualmente el servidor cada vez que se realizan modificaciones. Con ``Nodemon``, los cambios se reflejan en tiempo real, lo que agiliza el flujo de desarrollo y mejora la productividad. Es una herramienta útil para el desarrollo local, pero no se debe utilizar en entornos de producción.

Modificaremos el campo `scripts`para añadir 2 nuevas macros, el resultado final sera algo similar a lo siguiente.

```json
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
};
```

Esto nos permite tener una macro para desarrollo y otra para producción.

## Paso 3: Instalación de Express.js

1. Instala Express.js en tu proyecto utilizando PNPM:

```bash
pnpm add express
```

2. Crea un archivo llamado `index.js` (o cualquier otro nombre que desees) en la raíz de tu proyecto. Este será el punto de entrada de tu aplicación.

## Paso 4: Configuración básica de Express.js

3. Abre el archivo `index.js` con tu editor de código y agrega el siguiente código para configurar una aplicación básica de Express:

```javascript
// Importar módulos
const express = require('express');
const app = express();
const port = 3000; // El número de puerto que desees utilizar

// Configurar rutas
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi API REST!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
```

## Paso 5: Creación de rutas y controladores

1. En una API REST, cada ruta representa una operación específica. A continuación, aprenderás a crear rutas y controladores para tus solicitudes HTTP.

En el archivo `index.js`, vamos a crear algunas rutas de ejemplo:

```javascript
// Importar módulos
const express = require('express');
const app = express();
const port = 3000; // El número de puerto que desees utilizar

// Configurar rutas
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi API REST!');
});

// Ruta para obtener todos los elementos
app.get('/api/items', (req, res) => {
  // Aquí puedes obtener y devolver una lista de elementos desde tu base de datos o cualquier otra fuente de datos.
  const items = ['item1', 'item2', 'item3'];
  res.json(items);
});

// Ruta para obtener un elemento por su ID
app.get('/api/items/:id', (req, res) => {
  // Aquí puedes obtener y devolver un elemento específico según el ID proporcionado.
  const itemId = req.params.id;
  const item = { id: itemId, name: 'Nombre del item' };
  res.json(item);
});

// Ruta para crear un nuevo elemento
app.post('/api/items', (req, res) => {
  // Aquí puedes procesar los datos enviados en el cuerpo de la solicitud (req.body) para crear un nuevo elemento.
  // Luego, devuelve el nuevo elemento creado.
  const newItem = { id: 'nuevoId', name: 'Nuevo item' };
  res.json(newItem);
});

// Ruta para actualizar un elemento existente
app.put('/api/items/:id', (req, res) => {
  // Aquí puedes procesar los datos enviados en el cuerpo de la solicitud (req.body) para actualizar el elemento según su ID.
  // Luego, devuelve el elemento actualizado.
  const itemId = req.params.id;
  const updatedItem = { id: itemId, name: 'Item actualizado' };
  res.json(updatedItem);
});

// Ruta para eliminar un elemento existente
app.delete('/api/items/:id', (req, res) => {
  // Aquí puedes procesar el ID proporcionado en la solicitud y eliminar el elemento correspondiente de tu base de datos u otra fuente de datos.
  // Luego, devuelve un mensaje de éxito.
  const itemId = req.params.id;
  res.json({ message: `Elemento con ID ${itemId} eliminado correctamente` });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
```

## Paso 6: Ejecutar la aplicación

1. Guarda todos los cambios en `index.js`.

2. Ejecuta tu aplicación utilizando los siguientes comandos:

```bash
pnpm dev
o
pnpm start
```

3. Tu servidor estará en funcionamiento en `http://localhost:3000` (o el puerto que hayas especificado). Puedes probar las rutas definidas en el navegador o utilizando herramientas como Postman para realizar solicitudes HTTP.

> Recomendación utilizar la extensión VsCode de Postman `Postman.postman-for-vscode`
