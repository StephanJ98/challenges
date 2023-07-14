# Creación de un FrontEnd con Vite + React

> **Es necesario tener instalado NodeJS.** Ver [Web de NodeJS (Recomendado)](https://nodejs.org/en), o si quereis tener varias versiones de NodeJs simultaneas [NVM Linux](https://github.com/nvm-sh/nvm) o [NVM Windows](https://github.com/coreybutler/nvm-windows).

***Seguir las siguientes instrucciónes para instalar correctamente las herramientas necesarias.***

1. **Que es y como instalar `pnpm` ?**
    1. ***Que  es `pnpm`?***
        
        [PNPM](https://pnpm.io/es) es una herramienta de gestión de paquetes que se utiliza para administrar las dependencias de un proyecto. PNPM significa "Plug'n'Play Package Manager" (Administrador de paquetes Plug'n'Play) y es una alternativa a otras herramientas populares como npm (Node Package Manager) y Yarn.
    2. ***Alternativas***
    
        Algunas alternativas son el manejador de maquetes por defecto de Node (NPM) que viene instalado con Node. O [YARN](https://yarnpkg.com).

        Usan sintaxis y comandos similares entre ellos pero con ciertas diferencias. Por defecto se usara `pnpm`.

    3. ***Instalación***

        Podeis seguir la guía que propone `PNPM` en su [web oficial](https://pnpm.io/es/installation).
2. **Que es y como utilizar `Vite` ?**
    1. ***Que es `Vite` ?***

        [Vite](https://es.vitejs.dev) (palabra en francés para "rápido", pronunciado como /vit/) es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Consta de dos partes principales:

        - Un servidor de desarrollo que proporciona mejoras enriquecidas de funcionalidades sobre módulos ES nativos, por ejemplo Hot Module Replacement (HMR) extremadamente rápido.

        - Un comando de compilación que empaqueta tu código con [Rollup](https://rollupjs.org), preconfigurado para generar recursos estáticos altamente optimizados para producción.
    
    2. ***Utilización***

        Podeis seguir la guía que propone `Vite` en su [web oficial](https://es.vitejs.dev/guide/#monta-tu-primer-proyecto-vite).

        O seguir estos pasos rapidos:

        1. Ejecutar el comando `pnpm create vite`.
            1. Se pedira un nombre de proyecto. En esta caso de ejemplo usaremos `task_1`.
            2. Se pedira un framework. En este caso de ejemplo usaremos `React`. Y en la variante usaremos `JavaScript`.
            3. Una vez terminada la configuración se mostrara por el cmd el mensaje siguente con algunos comandos que ejecutaremos.

            ```
            Done. Now run:

                cd task_1
                pnpm install
                pnpm run dev
            ```
            4. El comando `cd task_1` para entrar en la carpeta de nuestro proyecto.
            5. El comando `pnpm install` instalara todos los paquetes necesarios para el funcionamiento de nuestro proyecto. Cronstruira la carpeta `node_modules`, que contiene todas nuestras dependencias.
            6. El comando `pnpm run dev` o `pnpm dev` lanzara un servidor de desarrollo para nuestro proyecto.

