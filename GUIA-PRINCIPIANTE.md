# Guía sencilla para entender este proyecto

Esta guía explica el proyecto sin asumir que ya sabes programación.

## 1. ¿Qué hace cada carpeta?

```text
artifacts/
└── biografia-timeline/       ← La página de tu biografía
    ├── src/                  ← El código que vemos y editamos
    │   ├── App.tsx           ← Une las partes principales de la página
    │   ├── index.css         ← Colores, tipografías, tamaños y animaciones
    │   ├── data/             ← Textos y datos de tu biografía
    │   ├── components/       ← Piezas reutilizables y componentes de apoyo
    │   └── pages/             ← Páginas especiales, como la página no encontrada
    ├── index.html            ← El documento inicial que carga el navegador
    ├── package.json           ← Lista de herramientas que necesita el proyecto
    └── vite.config.ts         ← Configuración para ejecutar la página
```

## 2. ¿Dónde cambio mi información?

Empieza por este archivo:

```text
artifacts/biografia-timeline/src/data/biografia.ts
```

Ahí encontrarás:

- Tu nombre y tus iniciales.
- Tu profesión y ubicación.
- El texto de la portada.
- La introducción.
- Los hitos destacados.
- Tus principios.
- El correo y los enlaces de redes.
- Cada evento de la línea del tiempo.

## 2.1. ¿Cómo añado una foto?

Las imágenes de la página van dentro de esta carpeta:

```text
artifacts/biografia-timeline/public/images/
```

Pasos:

1. Copia tu foto dentro de `public/images`.
2. Usa un nombre sencillo, por ejemplo `retrato.jpg`.
3. Abre `src/data/biografia.ts`.
4. Busca esta línea:

```ts
imagen: '',
```

5. Cámbiala por:

```ts
imagen: 'images/retrato.jpg',
```

La foto aparecerá en el retrato de la portada. Si dejas `imagen: ''`, la página mostrará la ilustración original.

Acepta formatos habituales como `.jpg`, `.jpeg`, `.png` y `.webp`. Evita nombres con espacios o tildes.

Por ejemplo, para cambiar el nombre:

```ts
nombre: 'Mi Nombre',
```

Para añadir o cambiar un evento, busca `lineaDelTiempo` y edita uno de sus objetos:

```ts
{
  year: '2026',
  title: 'Un nuevo capítulo',
  place: 'Mi ciudad',
  copy: 'Aquí explico qué ocurrió.',
  note: 'Lo que aprendí de ese momento.',
  side: 'left',
}
```

`side` puede ser `'left'` o `'right'`. Solo controla el lado de la tarjeta en pantallas grandes.

## 3. ¿Qué significa `.tsx`?

Un archivo `.tsx` mezcla:

- Código JavaScript o TypeScript.
- Etiquetas parecidas a HTML.

Por eso en `App.tsx` verás cosas como:

```tsx
<h1>Mi título</h1>
```

La etiqueta `<h1>` crea un título. Las etiquetas `<p>` crean párrafos y `<section>` separa zonas de la página.

## 4. ¿Qué significa `className`?

En React se usa `className` en lugar de `class`:

```tsx
<p className="text-lg">Un párrafo grande</p>
```

Las palabras dentro de `className` indican el aspecto visual. La mayoría vienen de Tailwind CSS.

No necesitas aprender todas las clases de una vez. Para empezar, cambia textos en `biografia.ts` y deja el diseño tranquilo.

## 5. ¿Qué hace `index.css`?

Este archivo controla el aspecto general:

- Colores.
- Tipografías.
- Espaciados.
- Animaciones.
- Comportamiento en móvil.

Las variables de color están al principio, dentro de `:root`.

## 6. ¿Cómo se ejecuta la página?

Desde la terminal, ubicada en la carpeta principal del proyecto:

```powershell
pnpm install
```

Este comando instala las herramientas necesarias. Normalmente solo hace falta ejecutarlo la primera vez.

Para iniciar la página:

```powershell
$env:PORT=5173
$env:BASE_PATH="/"
pnpm --filter @workspace/biografia-timeline run dev
```

Después abre `http://localhost:5173` en el navegador.

## 7. Orden recomendado para aprender

1. Cambia el nombre en `src/data/biografia.ts`.
2. Cambia un solo evento de la línea del tiempo.
3. Guarda el archivo y actualiza el navegador.
4. Cambia un color en `src/index.css`.
5. Más adelante, aprende a modificar `App.tsx`.

Si algo deja de funcionar, vuelve atrás con `Ctrl + Z` en WebStorm y guarda otra vez.