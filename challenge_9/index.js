// Importar módulos
const express = require('express')
const app = express()
const port = 3000 // El número de puerto que desees utilizar

// Configurar rutas
app.get('/', (_req, res) => {
    res.send('¡Hola, bienvenido a mi API REST!')
})

// Ruta para obtener todos los elementos
app.get('/api/items', (_req, res) => {
    // Aquí puedes obtener y devolver una lista de elementos desde tu base de datos o cualquier otra fuente de datos.
    const items = ['item1', 'item2', 'item3']
    res.json(items)
})

// Ruta para obtener un elemento por su ID
app.get('/api/items/:id', (req, res) => {
    // Aquí puedes obtener y devolver un elemento específico según el ID proporcionado.
    const itemId = req.params.id
    const item = { id: itemId, name: 'Nombre del item' }
    res.json(item)
})

// Ruta para crear un nuevo elemento
app.post('/api/items', (_req, res) => {
    // Aquí puedes procesar los datos enviados en el cuerpo de la solicitud (req.body) para crear un nuevo elemento.
    // Luego, devuelve el nuevo elemento creado.
    const newItem = { id: 'nuevoId', name: 'Nuevo item' }
    res.json(newItem)
})

// Ruta para actualizar un elemento existente
app.put('/api/items/:id', (req, res) => {
    // Aquí puedes procesar los datos enviados en el cuerpo de la solicitud (req.body) para actualizar el elemento según su ID.
    // Luego, devuelve el elemento actualizado.
    const itemId = req.params.id
    const updatedItem = { id: itemId, name: 'Item actualizado' }
    res.json(updatedItem)
})

// Ruta para eliminar un elemento existente
app.delete('/api/items/:id', (req, res) => {
    // Aquí puedes procesar el ID proporcionado en la solicitud y eliminar el elemento correspondiente de tu base de datos u otra fuente de datos.
    // Luego, devuelve un mensaje de éxito.
    const itemId = req.params.id
    res.json({ message: `Elemento con ID ${itemId} eliminado correctamente` })
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`)
})
