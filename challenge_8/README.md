# Challenge_8

## **Documentación del Temporizador Pomodoro**

**Descripción:**
El Temporizador Pomodoro es una aplicación web basada en React que implementa la técnica de gestión del tiempo conocida como "Técnica Pomodoro". Esta técnica divide el trabajo en intervalos de tiempo, tradicionalmente de 25 minutos de trabajo seguidos de 5 minutos de descanso. El objetivo es mejorar la productividad y mantener la concentración en las tareas durante los períodos de trabajo.

**Instalación:**
1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde https://nodejs.org.
2. Crea un proyecto React con Vite, como ya hemos hecho anteriormente.
3. Navega hasta el directorio del proyecto en la terminal.
4. Ejecuta `pnpm install` o `pnpm i` para instalar las dependencias necesarias.

**Ejecución:**
Una vez que hayas instalado las dependencias, puedes iniciar el servidor de desarrollo para la aplicación. Ejecuta el siguiente comando:

```
pnpm dev
```

**Características:**
1. **Modos de Trabajo y Descanso:**
   - La aplicación se inicia en el modo "Trabajo" con una duración predeterminada de 25 minutos.
   - Una vez que finaliza el tiempo de "Trabajo", cambia automáticamente al modo "Descanso" con una duración de 5 minutos.
   - Al finalizar el tiempo de "Descanso", la aplicación vuelve al modo "Trabajo" y así sucesivamente.

2. **Contador Regresivo:**
   - En la pantalla principal, hay un contador regresivo que muestra el tiempo restante en minutos y segundos para el modo actual.
   - El contador se actualiza en tiempo real durante el modo "Trabajo" o "Descanso".

3. **Control del Temporizador:**
   - Hay dos  botones de control: `Iniciar` y `Exit`.
   - Al hacer clic en "Iniciar", se inicia el temporizador y comienza el modo "Trabajo".
   - El botón "Exit" restablece el temporizador al modo "Trabajo" y recarga la página.

4. **Notificación de Cambio de Modo:**
   - Cuando la aplicación cambia del modo "Trabajo" al modo "Descanso" y viceversa, se muestra una notificación en la pantalla. (Opcional)
   - Cuando la aplicación cambia del modo "Descanso" al modo "Trabajo" se aumenta un contador que se muestra por pantalla.

5. **Personalización de la Duración:**
   - El usuario puede personalizar la duración del modo "Trabajo" y del modo "Descanso".
   - Hay dos campos de entrada donde el usuario puede ingresar los valores en minutos.
   - Al hacer clic en el botón "Iniciar", la duración se actualiza y se lanza en el temporizador.

6. **Responsividad:**
   - La aplicación está diseñada para ser responsiva y funcionar correctamente en dispositivos móviles y pantallas de diferentes tamaños.

**Funcionamiento de la aplicación:**

1. El usuario abre la aplicación web, lo primero que ve en pantalla es un boton `Iniciar sesión` y 3 selectores:
    - Un input para elegir la duración de la fase activa. ***Por defecto 25 minutos.***
    - Un input para elegir la duración de la fase de descanso. ***Por defecto 5 minutos.***
    - Un input para elegir la hora de fin. ***Si llegamos a esa hora para todos los ciclos.***
        - (OPCIONAL) Encima de este input poner un texto que indique `Tiempo de trabajo X horas`.
2. Una vez pulsemos en `Iniciar sesión` en la pantalla solo aparecera:
    - Una cuenta atrás que indica el tiempo restante en esta fase.
    - 3 indicadores que muestran:
        - Hora de inicio
        - Tiempo restante para fin de sesión
        - Hora de fin
    - Un boton `stop` para finalizar la sesión.
3. La aplicación continuara automaticamente las fases de trabajo y descanso automaticamente hasta que se pulse el boton `stop` o quese llegue a la hora de fin.

> El color de fondo de la aplicación variara según la fase actual.

## :art: Estructura y estilos

La estructura de la aplicación es libre, y los estilos aplicados tambien. Solo deben cumplir las siguientes condiciones.

- UX y UI simple y amigable.
    > **Consejo:** Optad por cosas simples y que os resulten faciles de usar y sean visualmente agradables.
- UI responsive. Esto es si varia el tamaño de pantalla la distribución se debe adaptar.

**Mejoras Futuras:**
- Agregar sonidos de alerta al finalizar cada modo.
- Permitir al usuario personalizar el intervalo de trabajo y descanso según sus preferencias.
- Implementar un historial para que el usuario pueda ver cuántos ciclos de trabajo completó en una sesión.