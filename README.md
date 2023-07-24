<h1 align='center'>
    <strong>::__Indice__::</strong>
</h1>

- [:zap: Utilización](#util)
    - [:white_check_mark: Como trabajar con una rama secundaria](#✅-como-trabajar-con-una-rama-secundaria-y-mantener-siempre-la-última-version-de-los-los-ejercicios-y-de-las-correciónes)
    - [:white_check_mark: Como mantener actualizado vuestro fork](#✅-como-mantener-actualizado-vuestro-fork-para-tener-siempre-la-última-version-de-los-los-ejercicios-y-de-las-correciónes)
- [:computer: Principales tecnologías empleadas](#pte)
- [:pencil: Recursos de interes](#ri)
- [:art: Extensiones VSCode Recomendadas](#reco)

---

<div align='center'>
<table>
    <tr>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_0">✨Challenge_0 Git ✨</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_1">Challenge_1</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_2">Challenge_2</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_3">Challenge_3</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_4">Challenge_4</a>
        </th>
    </tr>
    <tr>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_5">Challenge_5</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_6">Challenge_6</a>
        </th>
        <th>
            <a href="https://github.com/StephanJ98/challenges/tree/main/challenge_7">Challenge_7</a>
        </th>
    </tr>
</table>
</div>

---

<h1 align='center' id='util'>
    <strong>⚡ Utilización</strong>
</h1>

*Se añadirán carpetas en el directorio raíz en las que habrá un ejercicio o mini proyecto a realizar, basándose en una documentación proporcionada. Para realizar las entregas se podra hacer de 2 formas diferentes mediante un fork o mediante una rama secundaria.*

- *Mediante un fork. Será necesario hacer un fork del repositorio y luego crear una pull request para cada entrega en este mismo repositorio.*

- *Mediante una rama secundaria. Sera necesario crear una rama secundaria en el repositorio y luego crear una pull request para cada entrega en este mismo repositorio.*

<pre align='center'>Después de un período de tiempo variable, se publicará una posible solución.</pre>

### :white_check_mark: Como trabajar con una rama secundaria y mantener siempre la última version de los los ejercicios y de las correciónes.

Para trabajar en una rama secundaria (branch) en GitHub y mantenerla actualizada con los cambios de la rama principal (main o master), puedes seguir estos pasos:

1. Crear una nueva rama y cambiar a ella:

    En tu repositorio en GitHub, navega a la pestaña "Branch" o "Rama" y crea una nueva rama con el nombre que desees para tu trabajo. Luego, clona tu repositorio en tu computadora si aún no lo has hecho.

        git clone URL-del-repositorio.git
        cd nombre-del-repositorio

2. Configurar el seguimiento de la rama remota:

    Cuando clonas un repositorio que tiene una rama principal (main o master), tu rama local principal se configurará automáticamente para realizar el seguimiento de la rama principal remota. Sin embargo, si creaste una nueva rama secundaria, deberás configurarla para que realice el seguimiento de la rama principal remota.

        git checkout nombre-de-la-rama-secundaria
        git branch -u origin/main

    > Con esto, la rama secundaria que acabas de crear realizará el seguimiento de la rama principal (main).

3. Trabajar en la rama secundaria:

    Ahora puedes hacer cambios en la rama secundaria y hacer commits normalmente. Tu rama secundaria estará completamente separada de la rama principal, lo que te permitirá trabajar en nuevas características o correcciones de errores sin afectar directamente la rama principal.

        git add .
        git commit -m "Descripción de los cambios"

4. Mantener la rama secundaria actualizada con la rama principal:

    Para mantener tu rama secundaria actualizada con los cambios que se realizan en la rama principal, necesitas fusionar los cambios de la rama principal en tu rama secundaria de forma regular. Para hacerlo, sigue estos pasos:

    1. Cambia a la rama principal y obtén los últimos cambios de la rama principal remota:

            git checkout main
            git pull

    2. Cambia de vuelta a tu rama secundaria:

            git checkout nombre-de-la-rama-secundaria

    3. Fusiona los cambios de la rama principal en tu rama secundaria:

            git merge main

    > Si hay conflictos entre los cambios de la rama principal y los cambios de tu rama secundaria, Git te pedirá que los resuelvas antes de continuar con la fusión.

5. Subir los cambios a la rama secundaria en GitHub:

    Una vez que hayas fusionado los cambios de la rama principal en tu rama secundaria local, puedes subir esos cambios a tu repositorio en GitHub.

        git push origin nombre-de-la-rama-secundaria

    O simplemente `git push` si la rama secundaria ya ha sido registrada una primera vez.

> Repite estos pasos regularmente para mantener tu rama secundaria actualizada con los cambios de la rama principal y asegurarte de que estás trabajando con la última versión del proyecto. Al mantener tu rama secundaria actualizada, también facilitas el proceso de integración de tus cambios en la rama principal a través de una solicitud de extracción (pull request) si es necesario.

### :white_check_mark: Como mantener actualizado vuestro fork, para tener siempre la última version de los los ejercicios y de las correciónes.

> Los pasos 2,3,4 se realizaran cada vez antes de empezar a trabajar sobre el código para asegurarnos de trabajar sobre la última versión.

1. Agregar un control remoto para el repositorio original:

    En tu repositorio local (el fork), puedes agregar un control remoto para el repositorio original, a menudo denominado "upstream". Esto te permitirá obtener los cambios que se realicen en el repositorio original.

        git remote add upstream https://github.com/StephanJ98/challenges.git

2. Obtener los cambios del repositorio original:

    Una vez que hayas configurado el control remoto "upstream", puedes obtener los cambios del repositorio original utilizando el comando ``git fetch``. Esto no afectará tus cambios locales.

        git fetch upstream

3. Fusionar los cambios del repositorio original con tu fork:

    Después de obtener los cambios del repositorio original, puedes fusionarlos con tu fork utilizando el comando ``git merge``.

        git merge upstream/nombre-de-la-rama

    > Recuerda que debes estar en la rama de tu fork que deseas actualizar al fusionar los cambios.

4. Subir los cambios a tu fork en GitHub:

    Una vez que hayas fusionado los cambios del repositorio original en tu fork local, puedes subir esos cambios a tu repositorio fork en GitHub utilizando ``git push``.

        git push origin nombre-de-la-rama

De esta manera, tu fork estará actualizado con los cambios que se han realizado en el repositorio original.

Es importante tener en cuenta que, aunque es posible mantener actualizado tu fork con los cambios del repositorio original, es responsabilidad del propietario del fork asegurarse de realizar esta sincronización según sea necesario, especialmente si hay cambios importantes o conflictos entre las versiones.

---

<h1 align='center' id='pte'>
    <strong>💻 Principales tecnologías empleadas</strong>
</h1>

<div align='center'>
    <table>
        <tr>
            <td>
                <a href='https://www.learn-html.org/'>HTML & CSS</a>
            </td>
            <td>
                <a href='https://www.learn-js.org/'>JavaScript</a>
            </td>
            <td>
                <a href='https://www.typescriptlang.org/'>TypeScript</a>
            </td>
            <td>
                <a href='https://nodejs.org/en'>NodeJs</a>
            </td>
            <td>
                <a href='https://react.dev/'>ReactJs</a>
            </td>
            <td>
                <a href='https://github.com/css-modules/css-modules'>CSS-Modules</a>
            </td>
            <td>
                <a href='https://tailwindcss.com/'>Tailwindcss</a>
            </td>
            <td>
                <a href='https://daisyui.com/'>DaisyUI</a>
            </td>
        </tr>
    </table>
</div>

---

<h1 align='center' id='ri'>
        <strong>📝 Recursos de interes</strong>
</h1>

- Servicios web interesantes:
    * https://vercel.com (Hosting)
    * https://www.netlify.com (Hosting FrontEnd/BackEnd)
    * https://firebase.google.com (Hosting BackEnd)
    * https://www.mongodb.com (Hosting BD NoSQL)
    * https://planetscale.com (Hosting BD SQL)
- Herramientas interesantes:
    * https://astro.build
    * https://capacitorjs.com (iOS, Android, PWA)
    * https://stripe.com/docs (Para implentar formas de pago)
- Tutoriales interesantes:
    * https://react-tutorial.app
    * https://learngitbranching.js.org
- Enlaces interesantes para trabajar con React:
    * https://react.dev
    * https://vitejs.dev
    * https://nextjs.org
- Mmodulos interesantes para React:
    * https://reactrouter.com/en/main
    * https://axios-http.com
    * https://recoiljs.org
    * https://typesense.org
- TypeScript:
    * https://www.typescriptlang.org/docs
    * https://www.typescripttutorial.net 

---

<h1 align='center' id='reco'>
    <strong>🎨 Extensiones VSCode Recomendadas</strong>
</h1>

- dsznajder.es7-react-js-snippets
- dbaeumer.vscode-eslint
- ritwickdey.LiveServer
- bradlc.vscode-tailwindcss

