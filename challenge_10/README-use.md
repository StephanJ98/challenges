# Como usar TailwindCSS

El uso básico de Tailwind CSS consiste en aplicar clases directamente en tus elementos HTML para estilizarlos sin necesidad de escribir CSS personalizado. Tailwind CSS proporciona una amplia gama de clases predefinidas que cubren casi todos los estilos que puedas necesitar. Aquí tienes algunos ejemplos de cómo usar Tailwind CSS en tu HTML:

1. Cambiar el color del texto:
```html
<p class="text-red-500">Este texto será rojo</p>
```

2. Aplicar estilos de fondo:
```html
<div class="bg-blue-200">Este div tendrá un fondo azul claro</div>
```

3. Agregar espacios internos y externos:
```html
<div class="p-4">Este div tendrá un espacio interno de 1 rem en todos los lados</div>
<div class="m-4">Este div tendrá un margen externo de 1 rem en todos los lados</div>
```

4. Centrar elementos:
```html
<div class="flex justify-center items-center h-16 bg-gray-200">Este div se centrará horizontalmente y verticalmente</div>
```

5. Establecer el tamaño de texto:
```html
<p class="text-2xl">Este texto tendrá un tamaño de fuente más grande</p>
```

6. Crear diseños responsivos:
```html
<div class="md:w-1/2 lg:w-1/4">Este div ocupará la mitad del ancho de la pantalla en dispositivos medianos y un cuarto en dispositivos grandes</div>
```

7. Ocultar elementos en diferentes tamaños de pantalla:
```html
<div class="hidden md:block">Este div estará oculto en pantallas pequeñas, pero visible en pantallas medianas y grandes</div>
```

8. Aplicar efectos de sombra:
```html
<div class="shadow-lg">Este div tendrá una sombra grande</div>
```

Estos son solo algunos ejemplos de cómo usar Tailwind CSS. Puedes combinar múltiples clases para crear estilos complejos y personalizados. Recuerda que las clases de Tailwind CSS están diseñadas para seguir una nomenclatura predecible, donde los nombres representan claramente las propiedades que se están aplicando. Esto facilita mucho la escritura y lectura del código. Puedes encontrar una lista completa de todas las clases disponibles en la documentación oficial de Tailwind CSS: https://tailwindcss.com/docs

En resumen, Tailwind CSS simplifica el proceso de estilización de tus elementos HTML al ofrecer clases predefinidas para casi todos los estilos comunes que puedas necesitar. Solo necesitas agregar las clases directamente en tus elementos HTML para aplicar los estilos deseados.

> Los ejemplos anteriores son para HTML5, para aplicarlo a React tendras que transformar la palabra `class` por `className` como es normal en React.