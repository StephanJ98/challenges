# :bookmark: Utilización de Git paso a paso :bookmark:

:sparkles: Git es un sistema de control de versiones distribuido que te permitirá gestionar y mantener el historial de cambios en tus proyectos de software.

- **Paso 1: Instalación de Git**

    Lo primero que necesitas es instalar Git en tu computadora. Puedes descargarlo desde el sitio oficial de Git (https://git-scm.com/downloads) e instalarlo siguiendo las instrucciones para tu sistema operativo.

- **Paso 2: Configurar tu nombre y correo electrónico**
    
    Antes de empezar a usar Git, es importante configurar tu nombre y dirección de correo electrónico, ya que esta información quedará registrada en cada commit (cambio) que realices. Para hacerlo, ejecuta los siguientes comandos en tu terminal (reemplaza "Nombre Apellido" y "correo@example.com" con tus datos):
    
        git config --global user.name "Nombre Apellido"
        git config --global user.email correo@example.com
    

- **Paso 3: Iniciar un repositorio**

    Un repositorio Git es un directorio que contiene todos los archivos y la información del historial de cambios de tu proyecto. Para iniciar un repositorio en un directorio existente, ve a la ubicación del proyecto y ejecuta el siguiente comando:
        
        git init

- **Paso 4: Agregar archivos al área de preparación**

    Antes de hacer un commit, debes agregar los archivos que quieres incluir en el próximo cambio. Esto se hace utilizando el comando `git add`. Por ejemplo, si quieres agregar todos los archivos en el directorio actual, ejecuta:

        git add .

- **Paso 5: Realizar un commit**

    Un commit es un registro de los cambios realizados en el repositorio. Es importante incluir un mensaje descriptivo que explique los cambios que hiciste. Para hacer un commit, utiliza el comando `git commit`:

        git commit -m "Descripción de los cambios realizados"

- **Paso 6: Ver el historial de cambios**

    Puedes ver el historial de commits en el repositorio utilizando el comando `git log`. Esto te mostrará información como el autor, fecha y mensaje del commit.

        git log

- **Paso 7: Trabajar con ramas (branching)**

    Git permite trabajar en diferentes ramas para aislar cambios y funcionalidades. La rama principal se llama "master" (o "main" en versiones más recientes). Puedes crear una nueva rama y cambiarte a ella con los siguientes comandos:

        git branch nombre-de-la-rama
        git checkout nombre-de-la-rama
    O simplemente puedes hacerlo en un solo comando con:

        git checkout -b nombre-de-la-rama

- **Paso 8: Fusionar ramas (merging)**

    Una vez que hayas realizado cambios en una rama y estés satisfecho con ellos, puedes fusionar esos cambios de vuelta a la rama principal (por ejemplo, "main"). Para hacerlo, primero asegúrate de estar en la rama de destino y luego ejecuta:

        git merge nombre-de-la-rama

- **Paso 9: Subir cambios a un repositorio remoto**

    Git te permite trabajar con repositorios remotos, lo que facilita la colaboración con otros desarrolladores. Para subir tus cambios a un repositorio remoto (por ejemplo, en GitHub), primero debes agregar el repositorio remoto a tu repositorio local:

        git remote add origin URL-del-repositorio-remoto

    Luego, para subir tus cambios, usa el comando git push:

        git push origin nombre-de-la-rama

- **Paso 10: Obtener cambios del repositorio remoto**

    Si otros desarrolladores han realizado cambios en el repositorio remoto, puedes obtener esos cambios en tu repositorio local utilizando el comando ``git pull``:

        git pull origin nombre-de-la-rama


> :white_check_mark: Estos son solo algunos comandos básicos para comenzar a usar Git. Hay muchas más características y comandos avanzados en Git.