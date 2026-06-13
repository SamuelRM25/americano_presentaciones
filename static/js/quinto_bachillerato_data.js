const COURSE_DATA = {
  grade: 'quinto_bachillerato',
  title: 'Computación II · Quinto Bachillerato en Computación',
  subtitle: 'Programación Web: HTML, CSS y JavaScript',
  classes: [
    {
      id: 'c1', num: 1, icon: '🌐',
      title: 'Introducción a HTML · Estructura y etiquetas básicas',
      tagline: 'Aprende la estructura básica de una página web y las etiquetas de texto fundamentales.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 ¡Bienvenido a Computación II!</h3>
          <p>Este año aprenderás <strong>Programación Web</strong> desde cero. Vas a crear tus propias páginas web usando <strong>HTML, CSS y JavaScript</strong>.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🌐</div>
              <h5>HTML</h5>
              <p>Estructura y contenido de la página. ¡Los huesos!</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>CSS</h5>
              <p>Estilos, colores y diseño. ¡La piel y la ropa!</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>JavaScript</h5>
              <p>Interactividad y lógica. ¡El cerebro!</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases serás capaz de crear una página web completa con HTML, darle estilo con CSS y agregar interactividad básica con JavaScript.</p>
          </div>
        `},
        { tag: 'Estructura básica', html: `
          <h3>🏗️ Estructura básica de un documento HTML</h3>
          <p>Toda página web en HTML5 comienza con esta estructura:</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Mi primera página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;¡Hola, mundo!&lt;/h1&gt;
  &lt;p&gt;Este es mi primer párrafo en HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>&lt;!DOCTYPE html&gt;</h5>
              <p>Declara que el documento usa HTML5.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧠</div>
              <h5>&lt;head&gt;</h5>
              <p>Meta datos, título y enlaces a CSS. No se ve en la página.</p>
            </div>
            <div class="grid-item">
              <div class="icon">👁️</div>
              <h5>&lt;body&gt;</h5>
              <p>Todo lo visible para el usuario va aquí.</p>
            </div>
          </div>
        `},
        { tag: 'Etiquetas de texto', html: `
          <h3>📝 Etiquetas de texto</h3>
          <p>HTML tiene etiquetas especiales para dar formato al texto:</p>
          <pre><code>&lt;h1&gt;Encabezado principal&lt;/h1&gt;
&lt;h2&gt;Subtítulo&lt;/h2&gt;
&lt;h3&gt;Sección&lt;/h3&gt;
&lt;p&gt;Este es un párrafo de texto normal.&lt;/p&gt;
&lt;p&gt;Texto en &lt;strong&gt;negrita&lt;/strong&gt; y en &lt;em&gt;cursiva&lt;/em&gt;.&lt;/p&gt;
&lt;p&gt;Salto de línea&lt;br&gt;aquí mismo.&lt;/p&gt;
&lt;hr&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>&lt;h1&gt; a &lt;h6&gt;</h5>
              <p>Encabezados de mayor a menor importancia. Solo un &lt;h1&gt; por página.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💪</div>
              <h5>&lt;strong&gt;</h5>
              <p>Texto en negrita con énfasis semántico.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✒️</div>
              <h5>&lt;em&gt;</h5>
              <p>Texto en cursiva con énfasis.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↩️</div>
              <h5>&lt;br&gt; y &lt;hr&gt;</h5>
              <p>&lt;br&gt; salta de línea. &lt;hr&gt; dibuja una línea horizontal.</p>
            </div>
          </div>
        `},
        { tag: 'Atributos', html: `
          <h3>🏷️ Atributos HTML: id, class y style</h3>
          <p>Los <strong>atributos</strong> dan información adicional a las etiquetas. Se escriben dentro de la etiqueta de apertura:</p>
          <pre><code>&lt;p id="parrafo-principal" class="texto-destacado" style="color: blue;"&gt;
  Este párrafo tiene atributos.
&lt;/p&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🆔</div>
              <h5>id</h5>
              <p>Identificador <strong>único</strong> para un elemento. No se repite.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📦</div>
              <h5>class</h5>
              <p>Clase que puede compartirse entre varios elementos. Muy usada en CSS.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>style</h5>
              <p>Estilo en línea (inline). Se usa para aplicar CSS directamente.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>El atributo <strong>id</strong> debe ser único en toda la página. <strong>class</strong> puede repetirse en varios elementos.</p>
          </div>
        `},
        { tag: 'Comentarios', html: `
          <h3>💬 Comentarios en HTML</h3>
          <p>Los <strong>comentarios</strong> son notas que el programador escribe para sí mismo o para otros desarrolladores. El navegador NO los muestra.</p>
          <pre><code>&lt;!-- Esto es un comentario HTML --&gt;
&lt;!-- Puede ocupar varias líneas
  y todo lo que escribas aquí
  será ignorado por el navegador --&gt;

&lt;p&gt;Este texto sí se ve en la página.&lt;/p&gt;
&lt;!-- &lt;p&gt;Este párrafo está "comentado" y no se ve.&lt;/p&gt; --&gt;</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Útil para:</strong> desactivar temporalmente código sin borrarlo, dejar notas sobre lo que hace una sección, o documentar tu trabajo.</p>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Usa comentarios para explicar secciones complejas de tu código. ¡Te lo agradecerás cuando vuelvas a leerlo meses después!</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Manos a la obra: tu primera página</h3>
          <p>Crea un archivo llamado <code>index.html</code> y escribe la estructura básica con:</p>
          <ul>
            <li>Un título "Mi primera página web" en &lt;title&gt;.</li>
            <li>Un encabezado &lt;h1&gt; con el texto "¡Bienvenidos!"</li>
            <li>Tres párrafos: uno con &lt;strong&gt;, otro con &lt;em&gt;, y otro normal.</li>
            <li>Una línea horizontal (&lt;hr&gt;) entre cada párrafo.</li>
            <li>Un comentario que diga "Creado por [tu nombre]"</li>
          </ul>
          <div class="slide-info">
            <span class="icon">📂</span>
            <p><strong>¿Cómo abrir tu página?</strong> Guarda el archivo con extensión <code>.html</code> y haz doble clic. Se abrirá en tu navegador web.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'HTML', hint: '¿Qué significan las siglas HTML y para qué sirve?' },
        { term: 'Etiqueta', hint: '¿Cuál es la diferencia entre una etiqueta de apertura y una de cierre?' },
        { term: 'DOCTYPE', hint: '¿Por qué es importante el DOCTYPE en un documento HTML?' },
        { term: 'Encabezado', hint: '¿Cuántos niveles de encabezado existen y cómo se usan?' },
        { term: 'Atributo', hint: '¿Para qué sirven los atributos id, class y style?' },
        { term: 'Comentario', hint: '¿Cómo se escribe un comentario en HTML y para qué sirve?' },
        { term: 'body', hint: '¿Qué diferencia hay entre head y body en un documento HTML?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Cuál es la estructura correcta para iniciar un documento HTML5?', options: [
          { value: 'a', label: '<html><head><body>' },
          { value: 'b', label: '<!DOCTYPE html><html><head><body>' },
          { value: 'c', label: '<body><head><html>' },
          { value: 'd', label: '<DOCTYPE><html><head>' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '¿Qué etiqueta se usa para el encabezado MÁS importante de una página?', options: [
          { value: 'a', label: '<h6>' },
          { value: 'b', label: '<h1>' },
          { value: 'c', label: '<h2>' },
          { value: 'd', label: '<header>' }
        ], answer: 'b' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'El atributo id puede repetirse en varios elementos de una misma página.', answer: 'false' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'Los comentarios en HTML se escriben entre <!-- y ____.', answer: '-->' }
      ],
      tasks: [
        { id: 'c1t1', title: '🌐 Crea tu primera página web', description: 'Crea un archivo index.html con la estructura básica de HTML5. Incluye un título, un encabezado h1, tres párrafos (uno con strong, uno con em, uno normal), una línea hr y un comentario con tu nombre.', evidence: 'Captura de la página abierta en el navegador.' },
        { id: 'c1t2', title: '🔍 Identifica etiquetas', description: 'Busca una página web real (puede ser google.com o cualquier sitio). Haz clic derecho → "Ver código fuente". Identifica y anota: DOCTYPE, etiquetas head y body, al menos 3 tipos diferentes de etiquetas que encuentres.', evidence: 'Captura del código fuente con anotaciones.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre introducción a HTML.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué etiqueta envuelve todo el contenido visible de una página?', options: [
            { value: 'a', label: '<head>' },
            { value: 'b', label: '<body>' },
            { value: 'c', label: '<html>' },
            { value: 'd', label: '<title>' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál es el propósito de la etiqueta <em>?', options: [
            { value: 'a', label: 'Poner texto en negrita' },
            { value: 'b', label: 'Poner texto en cursiva con énfasis' },
            { value: 'c', label: 'Crear un encabezado' },
            { value: 'd', label: 'Insertar una imagen' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El atributo class puede ser usado por múltiples elementos en una página.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Los comentarios en HTML:', options: [
            { value: 'a', label: 'Se muestran en el navegador' },
            { value: 'b', label: 'No se muestran en el navegador' },
            { value: 'c', label: 'Solo se ven al imprimir' },
            { value: 'd', label: 'Aparecen como popup' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La etiqueta ____ se usa para insertar un salto de línea.', answer: 'br' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🔗',
      title: 'HTML: Enlaces, Imágenes y Listas',
      tagline: 'Conecta páginas, muestra imágenes y organiza contenido con listas.',
      info: [
        { tag: 'Enlaces (a)', html: `
          <h3>🔗 La etiqueta &lt;a&gt; para enlaces</h3>
          <p>Los enlaces conectan una página con otra. Se crean con la etiqueta <strong>&lt;a&gt;</strong> (anchor):</p>
          <pre><code>&lt;a href="https://www.google.com"&gt;Ir a Google&lt;/a&gt;
&lt;a href="pagina2.html"&gt;Ir a otra página del sitio&lt;/a&gt;
&lt;a href="#seccion1"&gt;Ir a una sección interna&lt;/a&gt;</code></pre>
          <h4>🎯 Atributos importantes</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔗</div>
              <h5>href</h5>
              <p>La URL o ruta del destino del enlace.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🆕</div>
              <h5>target="_blank"</h5>
              <p>Abre el enlace en una <strong>nueva pestaña</strong> del navegador.</p>
            </div>
          </div>
          <pre><code>&lt;a href="https://www.google.com" target="_blank"&gt;
  Google (se abre en nueva pestaña)
&lt;/a&gt;</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Usa <strong>target="_blank"</strong> cuando el enlace lleve a otro sitio web. Para páginas dentro de tu mismo sitio, no es necesario.</p>
          </div>
        `},
        { tag: 'Imágenes (img)', html: `
          <h3>🖼️ La etiqueta &lt;img&gt; para imágenes</h3>
          <p>Las imágenes se insertan con la etiqueta <strong>&lt;img&gt;</strong> (no necesita cierre):</p>
          <pre><code>&lt;img src="foto.jpg" alt="Descripción de la imagen"&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🖼️</div>
              <h5>src</h5>
              <p>La ruta o URL de la imagen. Puede ser absoluta o relativa.</p>
            </div>
            <div class="grid-item">
              <div class="icon">♿</div>
              <h5>alt</h5>
              <p>Texto alternativo que se muestra si la imagen no carga. También leído por lectores de pantalla.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>width / height</h5>
              <p>Define el ancho y alto en píxeles o porcentaje.</p>
            </div>
          </div>
          <pre><code>&lt;img src="https://ejemplo.com/logo.png" alt="Logo del colegio" width="200"&gt;
&lt;img src="imagenes/foto.jpg" alt="Foto de la excursión" height="300"&gt;</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Siempre incluye el atributo <strong>alt</strong>. Es obligatorio para la accesibilidad web y buen posicionamiento (SEO).</p>
          </div>
        `},
        { tag: 'Listas', html: `
          <h3>📋 Listas ordenadas y no ordenadas</h3>
          <p>HTML permite dos tipos de listas:</p>
          <h4>🔵 Lista no ordenada (&lt;ul&gt;)</h4>
          <pre><code>&lt;ul&gt;
  &lt;li&gt;Manzanas&lt;/li&gt;
  &lt;li&gt;Naranjas&lt;/li&gt;
  &lt;li&gt;Plátanos&lt;/li&gt;
&lt;/ul&gt;</code></pre>
          <p>Se muestra con viñetas •</p>
          <h4>🔢 Lista ordenada (&lt;ol&gt;)</h4>
          <pre><code>&lt;ol&gt;
  &lt;li&gt;Primero, pela las frutas&lt;/li&gt;
  &lt;li&gt;Luego, córtalas en trozos&lt;/li&gt;
  &lt;li&gt;Finalmente, mézclalas&lt;/li&gt;
&lt;/ol&gt;</code></pre>
          <p>Se muestra con números 1, 2, 3...</p>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Usa &lt;ul&gt; cuando el orden no importe (lista de compras). Usa &lt;ol&gt; cuando el orden sea importante (pasos de una receta).</p>
          </div>
        `},
        { tag: 'Div y Span', html: `
          <h3>📦 &lt;div&gt; y &lt;span&gt;: los contenedores</h3>
          <p>Son etiquetas <strong>contenedoras</strong> que agrupan otros elementos. No tienen estilo propio, pero son esenciales para aplicar CSS:</p>
          <pre><code>&lt;div style="background: #f0f0f0; padding: 20px;"&gt;
  &lt;h2&gt;Sección de noticias&lt;/h2&gt;
  &lt;p&gt;Este es un &lt;span style="color: red;"&gt;texto en rojo&lt;/span&gt; dentro del párrafo.&lt;/p&gt;
&lt;/div&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📦</div>
              <h5>&lt;div&gt;</h5>
              <p>Contenedor en <strong>bloque</strong>. Ocupa todo el ancho disponible. Ideal para secciones.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>&lt;span&gt;</h5>
              <p>Contenedor <strong>en línea</strong>. Solo ocupa el espacio de su contenido. Ideal para palabras o frases.</p>
            </div>
          </div>
        `},
        { tag: 'Rutas relativas y absolutas', html: `
          <h3>🗺️ Rutas relativas y absolutas</h3>
          <p>Al enlazar archivos (imágenes, páginas), puedes usar dos tipos de rutas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🌍</div>
              <h5>Ruta absoluta</h5>
              <p>Contiene la URL completa: <code>https://ejemplo.com/imagenes/foto.jpg</code></p>
              <p>Funciona desde cualquier lugar, pero si cambia el dominio, se rompe.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Ruta relativa</h5>
              <p>Indica la ubicación desde el archivo actual: <code>imagenes/foto.jpg</code></p>
              <p>Más portable. Si mueves todo el proyecto, sigue funcionando.</p>
            </div>
          </div>
          <pre><code>&lt;!-- Ruta absoluta --&gt;
&lt;img src="https://colegio.edu/logo.png"&gt;

&lt;!-- Ruta relativa: la imagen está en una subcarpeta "img" --&gt;
&lt;img src="img/logo.png"&gt;

&lt;!-- Ruta relativa: subir un nivel con .. --&gt;
&lt;img src="../img/logo.png"&gt;</code></pre>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Construye una página con enlaces, imágenes y listas</h3>
          <p>Crea un nuevo archivo <code>recetas.html</code> que incluya:</p>
          <ul>
            <li>Un encabezado &lt;h1&gt; "Mis recetas favoritas"</li>
            <li>Una imagen de comida (puede ser de internet usando ruta absoluta)</li>
            <li>Un enlace a la receta original (abrir en nueva pestaña)</li>
            <li>Una lista ordenada con los pasos de la receta</li>
            <li>Una lista no ordenada con los ingredientes</li>
            <li>Un &lt;div&gt; con un &lt;span&gt; de color diferente dentro</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> La ruta relativa de una imagen en la misma carpeta es solo el nombre del archivo: <code>&lt;img src="foto.jpg"&gt;</code></p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Enlace', hint: '¿Qué atributo de <a> define la dirección del enlace?' },
        { term: 'target', hint: '¿Qué valor del atributo target abre el enlace en una nueva pestaña?' },
        { term: 'Imagen', hint: '¿Qué dos atributos son obligatorios en la etiqueta <img>?' },
        { term: 'Lista ordenada', hint: '¿Cuál es la diferencia entre <ol> y <ul>?' },
        { term: 'div', hint: '¿Qué diferencia hay entre <div> y <span>?' },
        { term: 'Ruta relativa', hint: '¿Qué significa "../" en una ruta relativa?' },
        { term: 'Ruta absoluta', hint: 'Da un ejemplo de ruta absoluta y uno de ruta relativa.' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Qué atributo de <a> permite abrir el enlace en una nueva pestaña?', options: [
          { value: 'a', label: 'href' },
          { value: 'b', label: 'target="_blank"' },
          { value: 'c', label: 'src' },
          { value: 'd', label: 'rel' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: '¿Cuál de estas etiquetas crea una lista con viñetas (puntos)?', options: [
          { value: 'a', label: '<ol>' },
          { value: 'b', label: '<li>' },
          { value: 'c', label: '<ul>' },
          { value: 'd', label: '<list>' }
        ], answer: 'c' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'La etiqueta <img> necesita una etiqueta de cierre </img>.', answer: 'false' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'El texto alternativo de una imagen se define con el atributo ____.', answer: 'alt' }
      ],
      tasks: [
        { id: 'c2t1', title: '🔗 Crea una galería de imágenes', description: 'Crea un archivo galeria.html con 4 imágenes (pueden ser enlaces a imágenes de internet). Cada imagen debe tener un enlace que al hacer clic lleve al sitio original (target="_blank"). Debajo de cada imagen, pon un pie de foto usando <p>.', evidence: 'Captura de la galería en el navegador.' },
        { id: 'c2t2', title: '📋 Página de lista de tareas', description: 'Crea un archivo tareas.html que tenga: un título principal, una lista ordenada de tus 5 tareas pendientes del día, una lista no ordenada de materiales que necesitas, y un div que contenga un enlace a google.com y un span con tu nombre en color azul.', evidence: 'Captura de pantalla.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre enlaces, imágenes y listas.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué etiqueta se usa para insertar una imagen?', options: [
            { value: 'a', label: '<image>' },
            { value: 'b', label: '<pic>' },
            { value: 'c', label: '<img>' },
            { value: 'd', label: '<picture>' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: 'Una lista ordenada se crea con la etiqueta:', options: [
            { value: 'a', label: '<ul>' },
            { value: 'b', label: '<ol>' },
            { value: 'c', label: '<li>' },
            { value: 'd', label: '<list>' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El atributo target="_blank" abre el enlace en la misma pestaña.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál es la diferencia entre <div> y <span>?', options: [
            { value: 'a', label: 'No hay diferencia' },
            { value: 'b', label: '<div> es en bloque, <span> es en línea' },
            { value: 'c', label: '<div> es para imágenes, <span> para texto' },
            { value: 'd', label: '<div> es más pequeño que <span>' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La ruta que incluye la URL completa se llama ruta ____.', answer: 'absoluta' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '📋',
      title: 'HTML: Tablas y Formularios',
      tagline: 'Organiza datos en tablas y aprende a crear formularios interactivos.',
      info: [
        { tag: 'Tablas', html: `
          <h3>📊 Tablas en HTML</h3>
          <p>Las tablas organizan información en filas y columnas. Se construyen con estas etiquetas:</p>
          <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Nombre&lt;/th&gt;
    &lt;th&gt;Edad&lt;/th&gt;
    &lt;th&gt;Ciudad&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Ana&lt;/td&gt;
    &lt;td&gt;15&lt;/td&gt;
    &lt;td&gt;Guatemala&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Luis&lt;/td&gt;
    &lt;td&gt;16&lt;/td&gt;
    &lt;td&gt;Antigua&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>&lt;table&gt;</h5>
              <p>Define la tabla completa.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↔️</div>
              <h5>&lt;tr&gt;</h5>
              <p>Table Row: una fila de la tabla.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📌</div>
              <h5>&lt;th&gt;</h5>
              <p>Table Header: encabezado (texto en negrita).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>&lt;td&gt;</h5>
              <p>Table Data: una celda de datos.</p>
            </div>
          </div>
        `},
        { tag: 'Formularios', html: `
          <h3>📝 Introducción a formularios</h3>
          <p>Los formularios permiten al usuario <strong>enviar datos</strong> a un servidor. Se crean con la etiqueta <strong>&lt;form&gt;</strong>:</p>
          <pre><code>&lt;form action="procesar.php" method="POST"&gt;
  &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre"&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🎯</div>
              <h5>action</h5>
              <p>La URL a donde se envían los datos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📤</div>
              <h5>method</h5>
              <p>GET (datos visibles en URL) o POST (datos ocultos).</p>
            </div>
          </div>
        `},
        { tag: 'Inputs', html: `
          <h3>⌨️ Tipos de &lt;input&gt;</h3>
          <p>La etiqueta &lt;input&gt; cambia su comportamiento según el atributo <strong>type</strong>:</p>
          <pre><code>&lt;input type="text" placeholder="Texto normal"&gt;
&lt;input type="password" placeholder="Contraseña"&gt;
&lt;input type="email" placeholder="Correo electrónico"&gt;
&lt;input type="number" placeholder="Edad"&gt;</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>text</h5>
              <p>Texto de una sola línea.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔒</div>
              <h5>password</h5>
              <p>Oculta los caracteres escritos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📧</div>
              <h5>email</h5>
              <p>Valida que tenga formato de correo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>number</h5>
              <p>Solo permite números.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>El atributo <strong>placeholder</strong> muestra un texto de ayuda dentro del campo que desaparece al escribir.</p>
          </div>
        `},
        { tag: 'Textarea y Select', html: `
          <h3>📋 Textarea, Select y Button</h3>
          <h4>📄 &lt;textarea&gt;: texto multilínea</h4>
          <pre><code>&lt;textarea rows="4" cols="50" placeholder="Escribe aquí tu mensaje..."&gt;&lt;/textarea&gt;</code></pre>
          <h4>📑 &lt;select&gt;: menú desplegable</h4>
          <pre><code>&lt;select name="pais"&gt;
  &lt;option value="gt"&gt;Guatemala&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
  &lt;option value="sv"&gt;El Salvador&lt;/option&gt;
&lt;/select&gt;</code></pre>
          <h4>🔘 &lt;button&gt;: botón</h4>
          <pre><code>&lt;button type="submit"&gt;Enviar formulario&lt;/button&gt;
&lt;button type="reset"&gt;Limpiar campos&lt;/button&gt;</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Usa <strong>&lt;label&gt;</strong> para asociar texto con cada campo de formulario. Mejora la accesibilidad: al hacer clic en el label, el campo se selecciona automáticamente.</p>
          </div>
        `},
        { tag: 'GET vs POST', html: `
          <h3>📤 GET vs POST: ¿cuál usar?</h3>
          <p>Son los dos métodos para enviar datos de un formulario:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👁️</div>
              <h5>GET</h5>
              <p>Los datos se ven en la URL: <code>?nombre=Ana&edad=15</code></p>
              <p>✅ Bueno para búsquedas</p>
              <p>❌ No para contraseñas o datos sensibles</p>
              <p>❌ Límite de 2048 caracteres</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔒</div>
              <h5>POST</h5>
              <p>Los datos van en el cuerpo de la petición (ocultos).</p>
              <p>✅ Para contraseñas, registros, archivos</p>
              <p>✅ Sin límite de tamaño</p>
              <p>❌ No se puede compartir la URL con los datos</p>
            </div>
          </div>
          <pre><code>&lt;!-- Búsqueda: GET --&gt;
&lt;form action="buscar.php" method="GET"&gt;
  &lt;input type="text" name="q" placeholder="Buscar..."&gt;
&lt;/form&gt;

&lt;!-- Registro: POST --&gt;
&lt;form action="registrar.php" method="POST"&gt;
  &lt;input type="password" name="pass"&gt;
&lt;/form&gt;</code></pre>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Crea una tabla y un formulario</h3>
          <p>Crea un archivo <code>horario.html</code> que contenga:</p>
          <h4>📊 Tabla de horario de clases</h4>
          <ul>
            <li>Una tabla con los días de la semana como columnas (&lt;th&gt;)</li>
            <li>Filas con las horas y las materias en cada celda (&lt;td&gt;)</li>
          </ul>
          <h4>📝 Formulario de registro</h4>
          <ul>
            <li>Un formulario con method POST</li>
            <li>Campos: nombre (text), correo (email), contraseña (password), edad (number)</li>
            <li>Un &lt;select&gt; para elegir grado</li>
            <li>Un &lt;textarea&gt; para comentarios</li>
            <li>Un botón de enviar</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Usa el atributo <strong>required</strong> en los campos obligatorios para que el navegador valide antes de enviar.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Tabla HTML', hint: '¿Qué significan <tr>, <td> y <th> en una tabla?' },
        { term: 'Formulario', hint: '¿Qué atributos de <form> definen a dónde y cómo se envían los datos?' },
        { term: 'Input', hint: 'Menciona 3 tipos diferentes de input y para qué sirve cada uno.' },
        { term: 'Textarea', hint: '¿Cuál es la diferencia entre <input type="text"> y <textarea>?' },
        { term: 'Select', hint: '¿Qué etiquetas se usan dentro de <select> para crear las opciones?' },
        { term: 'GET', hint: '¿Cuándo es mejor usar GET en lugar de POST?' },
        { term: 'POST', hint: '¿Por qué POST es más seguro que GET para contraseñas?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '¿Qué etiqueta se usa para crear una celda de ENCABEZADO en una tabla?', options: [
          { value: 'a', label: '<td>' },
          { value: 'b', label: '<th>' },
          { value: 'c', label: '<tr>' },
          { value: 'd', label: '<header>' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: '¿Qué tipo de input se usa para ocultar los caracteres mientras se escriben?', options: [
          { value: 'a', label: 'text' },
          { value: 'b', label: 'hidden' },
          { value: 'c', label: 'password' },
          { value: 'd', label: 'secret' }
        ], answer: 'c' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'El método GET muestra los datos del formulario en la URL del navegador.', answer: 'true' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'La etiqueta ____ se usa para crear un menú desplegable en un formulario.', answer: 'select' }
      ],
      tasks: [
        { id: 'c3t1', title: '📊 Tabla de notas', description: 'Crea un archivo notas.html con una tabla que muestre las notas de 5 compañeros (reales o inventados). Columnas: Nombre, Matemáticas, Español, Computación, Promedio. Usa <th> para encabezados y <td> para datos.', evidence: 'Captura de la tabla.' },
        { id: 'c3t2', title: '📝 Formulario de encuesta', description: 'Crea un archivo encuesta.html con un formulario que pregunte: nombre, edad (number), correo (email), materia favorita (select con 4 opciones), comentarios (textarea), y un botón de enviar. Usa method POST y etiquetas <label> para cada campo.', evidence: 'Captura del formulario.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre tablas y formularios.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué etiqueta representa una FILA en una tabla HTML?', options: [
            { value: 'a', label: '<td>' },
            { value: 'b', label: '<tr>' },
            { value: 'c', label: '<th>' },
            { value: 'd', label: '<table>' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál es el método más seguro para enviar una contraseña?', options: [
            { value: 'a', label: 'GET' },
            { value: 'b', label: 'POST' },
            { value: 'c', label: 'PUT' },
            { value: 'd', label: 'DELETE' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La etiqueta <textarea> permite al usuario escribir múltiples líneas de texto.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El atributo que define a dónde se envían los datos del formulario es:', options: [
            { value: 'a', label: 'method' },
            { value: 'b', label: 'action' },
            { value: 'c', label: 'target' },
            { value: 'd', label: 'href' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Para validar que un campo tiene formato de correo electrónico, se usa type="____".', answer: 'email' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '🎨',
      title: 'CSS: Estilos y Selectores',
      tagline: 'Dale estilo a tus páginas web con colores, fuentes y diseño.',
      info: [
        { tag: '¿Qué es CSS?', html: `
          <h3>🎨 ¿Qué es CSS?</h3>
          <p><strong>CSS</strong> (Cascading Style Sheets) es el lenguaje que da <strong>estilo visual</strong> a las páginas web. Mientras HTML es la estructura, CSS es la apariencia.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🎯</div>
              <h5>Selectores</h5>
              <p>Indican a QUÉ elementos aplicar el estilo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Propiedades</h5>
              <p>Qué aspecto cambiar (color, tamaño, etc.).</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Valores</h5>
              <p>El nuevo valor que toma la propiedad.</p>
            </div>
          </div>
          <h4>💡 Sintaxis básica</h4>
          <pre><code>selector {
  propiedad: valor;
  propiedad: valor;
}</code></pre>
          <h4>Ejemplo:</h4>
          <pre><code>p {
  color: blue;
  font-size: 18px;
}</code></pre>
          <p>CSS puede ir en un archivo separado (<code>styles.css</code>) y enlazarse con <strong>&lt;link&gt;</strong> en el &lt;head&gt;.</p>
        `},
        { tag: 'Selectores', html: `
          <h3>🎯 Los 3 tipos de selectores básicos</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Selector de elemento</h5>
              <p>Selecciona todas las etiquetas de ese tipo.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;font-size:0.85rem"><code>h1 { color: red; }
p { font-size: 16px; }</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🔵</div>
              <h5>Selector de clase (.clase)</h5>
              <p>Selecciona elementos con class="..." específica.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;font-size:0.85rem"><code>.destacado {
  background: yellow;
}</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🆔</div>
              <h5>Selector de id (#id)</h5>
              <p>Selecciona el elemento con id único.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;font-size:0.85rem"><code>#logo {
  width: 200px;
}</code></pre>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>El <strong>selector de clase</strong> (.nombre) es el más usado porque puedes aplicarlo a varios elementos. El <strong>selector de id</strong> (#nombre) solo aplica a un elemento.</p>
          </div>
        `},
        { tag: 'Colores y fondos', html: `
          <h3>🎨 Color y fondo</h3>
          <p>CSS permite cambiar colores de texto y fondos de varias formas:</p>
          <pre><code>/* Color por nombre */
color: red;
background-color: lightblue;

/* Color hexadecimal (más común) */
color: #ff6600;
background-color: #f0f0f0;

/* Color RGB */
color: rgb(255, 0, 0);
background-color: rgba(0, 0, 0, 0.1);</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">✏️</div>
              <h5>color</h5>
              <p>Color del <strong>texto</strong> del elemento.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🖌️</div>
              <h5>background-color</h5>
              <p>Color de <strong>fondo</strong> del elemento.</p>
            </div>
          </div>
          <h4>💡 Ejemplo combinado</h4>
          <pre><code>.tarjeta {
  color: #333;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}</code></pre>
        `},
        { tag: 'Fuentes y texto', html: `
          <h3>🔤 Propiedades de texto y fuentes</h3>
          <pre><code>body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
}

h1 {
  font-family: Georgia, serif;
  font-size: 36px;
  text-align: left;
}

p {
  font-size: 18px;
  text-align: justify;
}</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>font-family</h5>
              <p>Tipo de letra. Se pueden listar varias como respaldo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>font-size</h5>
              <p>Tamaño de la fuente en píxeles (px), em o rem.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↔️</div>
              <h5>text-align</h5>
              <p>Alineación: left, center, right o justify.</p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Fuentes seguras:</strong> Arial, Georgia, Times New Roman, Verdana, Courier New. Siempre pon una fuente genérica al final (serif, sans-serif, monospace).</p>
          </div>
        `},
        { tag: 'Box model', html: `
          <h3>📦 Modelo de caja: margin, padding y border</h3>
          <p>En CSS, cada elemento es una <strong>caja</strong> con:</p>
          <pre><code>.caja {
  /* Espacio INTERNO entre el contenido y el borde */
  padding: 20px;

  /* Línea alrededor del elemento */
  border: 2px solid #333;

  /* Espacio EXTERNO entre este elemento y los vecinos */
  margin: 15px;

  /* Borde redondeado */
  border-radius: 10px;

  /* Sombra */
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
}</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📦</div>
              <h5>padding</h5>
              <p>Espacio <strong>dentro</strong> del elemento, entre el contenido y el borde.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗂️</div>
              <h5>margin</h5>
              <p>Espacio <strong>fuera</strong> del elemento, entre el borde y otros elementos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔲</div>
              <h5>border</h5>
              <p>Borde visible: ancho, estilo y color.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Usa <code>border-radius: 50%</code> para hacer un círculo perfecto. Útil para fotos de perfil.</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Dale estilo a tu página</h3>
          <p>Crea un archivo <code>index.html</code> y otro <code>styles.css</code>. Enlázalos con:</p>
          <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
          <p>En tu HTML pon:</p>
          <ul>
            <li>Un &lt;h1&gt; con id "titulo-principal"</li>
            <li>Tres &lt;p&gt; con clase "texto-destacado"</li>
            <li>Un &lt;div&gt; con clase "tarjeta"</li>
          </ul>
          <p>En tu CSS aplica:</p>
          <ul>
            <li>#titulo-principal: color azul, font-size 40px, text-align center</li>
            <li>.texto-destacado: color verde, font-family Arial, font-size 18px</li>
            <li>.tarjeta: background gray claro, padding 20px, border-radius 10px, box-shadow, margin 20px</li>
          </ul>
        `}
      ],
      keywords: [
        { term: 'CSS', hint: '¿Qué significan las siglas CSS y para qué sirve?' },
        { term: 'Selector', hint: '¿Cuál es la diferencia entre selector de clase y selector de id?' },
        { term: 'Color hexadecimal', hint: '¿Cómo se representa el color blanco en hexadecimal?' },
        { term: 'font-family', hint: '¿Por qué es buena práctica listar varias fuentes en font-family?' },
        { term: 'Box model', hint: '¿Cuál es la diferencia entre margin y padding?' },
        { term: 'border-radius', hint: '¿Qué valor de border-radius hace un círculo perfecto?' },
        { term: 'Propiedad', hint: '¿Qué hace la propiedad text-align: justify?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '¿Qué selector CSS se usa para apuntar a elementos con class="destacado"?', options: [
          { value: 'a', label: '#destacado' },
          { value: 'b', label: '.destacado' },
          { value: 'c', label: 'destacado' },
          { value: 'd', label: '*destacado' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: '¿Qué propiedad cambia el color de FONDO de un elemento?', options: [
          { value: 'a', label: 'color' },
          { value: 'b', label: 'background-color' },
          { value: 'c', label: 'font-color' },
          { value: 'd', label: 'bgcolor' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'La propiedad margin define el espacio DENTRO del elemento, entre el contenido y el borde.', answer: 'false' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'La propiedad que redondea las esquinas de un elemento se llama ____.', answer: 'border-radius' }
      ],
      tasks: [
        { id: 'c4t1', title: '🎨 Tarjetas de presentación', description: 'Crea 3 tarjetas (divs) con tu información personal (nombre, edad, hobby favorito). Aplica una clase compartida "tarjeta" con: background suave, padding, border-radius, box-shadow. Cada tarjeta debe tener un id único con un color diferente de borde.', evidence: 'Captura de las tarjetas.' },
        { id: 'c4t2', title: '📝 Página con estilo completo', description: 'Toma tu archivo index.html de la clase 1 o 2 y aplícale CSS. Debe incluir: un selector de elemento (body con font-family), un selector de clase para párrafos, un selector de id para el título, uso de color, background-color, padding, margin, y border-radius.', evidence: 'Antes y después, mostrando el HTML sin CSS y luego con CSS.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre CSS: estilos y selectores.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué símbolo se usa en CSS para seleccionar elementos por su ID?', options: [
            { value: 'a', label: '.' },
            { value: 'b', label: '#' },
            { value: 'c', label: '@' },
            { value: 'd', label: ':' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'La propiedad que define el espaciado DENTRO del elemento es:', options: [
            { value: 'a', label: 'margin' },
            { value: 'b', label: 'padding' },
            { value: 'c', label: 'border' },
            { value: 'd', label: 'gap' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El color en hexadecimal #ffffff representa el color blanco.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Qué propiedad se usa para cambiar el tipo de letra?', options: [
            { value: 'a', label: 'font-size' },
            { value: 'b', label: 'font-family' },
            { value: 'c', label: 'text-align' },
            { value: 'd', label: 'letter-spacing' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La propiedad que agrega una sombra a un elemento se llama ____.', answer: 'box-shadow' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '📱',
      title: 'CSS: Flexbox y Responsive Design',
      tagline: 'Crea diseños flexibles que se vean bien en cualquier pantalla.',
      info: [
        { tag: '¿Qué es Flexbox?', html: `
          <h3>📐 Flexbox: diseño flexible</h3>
          <p><strong>Flexbox</strong> es un modelo de CSS que facilita organizar elementos en filas o columnas de manera flexible y responsive.</p>
          <h4>💡 Activar flexbox</h4>
          <pre><code>.contenedor {
  display: flex;
}</code></pre>
          <p>Al poner <code>display: flex</code> en un contenedor, sus hijos se colocan uno al lado del otro (por defecto en fila).</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>display: flex</strong> se aplica al <strong>contenedor padre</strong>. Los elementos hijos se convierten automáticamente en <strong>ítems flexibles</strong>.</p>
          </div>
        `},
        { tag: 'Dirección y alineación', html: `
          <h3>🧭 Dirección y alineación con Flexbox</h3>
          <h4>↔️ flex-direction</h4>
          <pre><code>.contenedor {
  display: flex;
  flex-direction: row;        /* Por defecto: en fila */
  flex-direction: column;     /* En columna */
  flex-direction: row-reverse;/* Fila invertida */
}</code></pre>
          <h4>🎯 Alineación</h4>
          <pre><code>.contenedor {
  display: flex;
  justify-content: center;    /* Centrar en el eje principal (horizontal) */
  align-items: center;        /* Centrar en el eje cruzado (vertical) */
  gap: 20px;                  /* Espacio entre elementos */
}</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">↔️</div>
              <h5>justify-content</h5>
              <p>Alinea en el eje principal: flex-start, center, flex-end, space-between, space-around.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↕️</div>
              <h5>align-items</h5>
              <p>Alinea en el eje cruzado: flex-start, center, flex-end, stretch.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>gap</h5>
              <p>Espacio entre los elementos hijos. Muy práctico.</p>
            </div>
          </div>
        `},
        { tag: 'Ejemplo Flexbox', html: `
          <h3>🏗️ Ejemplo práctico de Flexbox</h3>
          <p>HTML:</p>
          <pre><code>&lt;div class="contenedor-flex"&gt;
  &lt;div class="caja"&gt;1&lt;/div&gt;
  &lt;div class="caja"&gt;2&lt;/div&gt;
  &lt;div class="caja"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>
          <p>CSS:</p>
          <pre><code>.contenedor-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #f5f5f5;
}

.caja {
  background: #3498db;
  color: white;
  padding: 30px;
  border-radius: 8px;
  font-size: 24px;
}</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Con solo <code>display: flex</code>, <code>justify-content: center</code> y <code>gap: 15px</code> tienes un diseño profesional y responsive.</p>
          </div>
        `},
        { tag: 'Responsive y Media Queries', html: `
          <h3>📱 Diseño responsive con Media Queries</h3>
          <p>El diseño <strong>responsive</strong> hace que tu página se vea bien en computadoras, tablets y celulares.</p>
          <h4>📐 Viewport meta tag (obligatorio)</h4>
          <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
          <p>Esta etiqueta va en el &lt;head&gt; y le dice al navegador que se adapte al ancho del dispositivo.</p>
          <h4>📏 Media Queries: CSS condicional</h4>
          <pre><code>/* Estilos base (para escritorio) */
.contenedor {
  display: flex;
  gap: 20px;
}

/* Para pantallas MENORES a 768px (tablets y celulares) */
@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
  }
}

/* Para pantallas MENORES a 480px (celulares pequeños) */
@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}</code></pre>
        `},
        { tag: 'Ejemplo Responsive', html: `
          <h3>📱 Ejemplo completo responsive</h3>
          <p>HTML:</p>
          <pre><code>&lt;div class="galeria"&gt;
  &lt;div class="item"&gt;Foto 1&lt;/div&gt;
  &lt;div class="item"&gt;Foto 2&lt;/div&gt;
  &lt;div class="item"&gt;Foto 3&lt;/div&gt;
  &lt;div class="item"&gt;Foto 4&lt;/div&gt;
&lt;/div&gt;</code></pre>
          <p>CSS:</p>
          <pre><code>.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.item {
  background: #2ecc71;
  padding: 40px;
  border-radius: 10px;
  flex: 1 1 200px; /* Mínimo 200px, crece si hay espacio */
}

/* En celular: una columna */
@media (max-width: 600px) {
  .item {
    flex: 1 1 100%;
  }
}</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>La propiedad <code>flex-wrap: wrap</code> permite que los elementos salten a la siguiente línea si no caben. Ideal para galerías.</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Crea un diseño responsive</h3>
          <p>Crea un archivo <code>responsive.html</code> y otro <code>responsive.css</code> que incluyan:</p>
          <ul>
            <li>Un contenedor con <code>display: flex</code> y 4 cajas dentro</li>
            <li>Las cajas centradas con justify-content y gap</li>
            <li>Un &lt;h1&gt; centrado arriba del contenedor</li>
            <li>Una media query a 768px que cambie flex-direction a column</li>
            <li>Una media query a 480px que reduzca el font-size del body</li>
            <li>El viewport meta tag en el head</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Pro tip:</strong> Redimensiona tu navegador para probar cómo se ve en diferentes tamaños de pantalla. ¡No necesitas un celular real!</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Flexbox', hint: '¿Qué propiedad CSS activa flexbox en un contenedor?' },
        { term: 'justify-content', hint: '¿Qué valores puede tomar justify-content?' },
        { term: 'align-items', hint: '¿Cuál es la diferencia entre justify-content y align-items?' },
        { term: 'gap', hint: '¿Para qué sirve la propiedad gap en flexbox?' },
        { term: 'Media Query', hint: '¿Qué sintaxis se usa para aplicar estilos en pantallas menores a 768px?' },
        { term: 'Viewport', hint: '¿Qué hace la etiqueta meta viewport y por qué es importante?' },
        { term: 'Responsive', hint: '¿Qué significa diseño responsive y por qué es necesario?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Qué propiedad CSS activa el modo flexbox?', options: [
          { value: 'a', label: 'flex: 1' },
          { value: 'b', label: 'display: flex' },
          { value: 'c', label: 'position: flex' },
          { value: 'd', label: 'flex-direction' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: '¿Qué propiedad de flexbox centra elementos en el eje PRINCIPAL?', options: [
          { value: 'a', label: 'align-items' },
          { value: 'b', label: 'justify-content' },
          { value: 'c', label: 'text-align' },
          { value: 'd', label: 'gap' }
        ], answer: 'b' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'La etiqueta meta viewport es opcional y no afecta el diseño responsive.', answer: 'false' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'La regla CSS que aplica estilos condicionales según el ancho de pantalla se llama ____.', answer: 'media query' }
      ],
      tasks: [
        { id: 'c5t1', title: '📱 Galería responsive', description: 'Crea una galería de 6 imágenes (pueden ser emojis o colores) usando flexbox. Debe verse en 3 columnas en escritorio, 2 en tablet y 1 en celular. Usa flex-wrap y media queries.', evidence: 'Captura en 3 tamaños de pantalla diferentes.' },
        { id: 'c5t2', title: '🧭 Barra de navegación con Flexbox', description: 'Crea una barra de navegación horizontal con flexbox que contenga: logo (izquierda) y 4 enlaces (derecha). En celular (menos de 600px), los enlaces deben ir uno debajo del otro (flex-direction: column).', evidence: 'Captura en escritorio y celular.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre Flexbox y responsive design.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué propiedad flexbox distribuye el espacio entre elementos?', options: [
            { value: 'a', label: 'align-items' },
            { value: 'b', label: 'gap' },
            { value: 'c', label: 'flex-direction' },
            { value: 'd', label: 'flex-wrap' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para que los elementos flexibles salten a la siguiente línea si no caben, se usa:', options: [
            { value: 'a', label: 'flex-direction: column' },
            { value: 'b', label: 'flex-wrap: wrap' },
            { value: 'c', label: 'justify-content: center' },
            { value: 'd', label: 'align-items: stretch' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La media query @media (max-width: 768px) aplica estilos en pantallas más ANCHAS de 768px.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Qué etiqueta es necesaria en el <head> para el diseño responsive?', options: [
            { value: 'a', label: '<meta charset="UTF-8">' },
            { value: 'b', label: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
            { value: 'c', label: '<meta name="description" content="...">' },
            { value: 'd', label: '<meta name="keywords" content="...">' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'El valor por defecto de flex-direction es ____.', answer: 'row' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '⚡',
      title: 'JavaScript: Variables, DOM y Eventos',
      tagline: 'Agrega interactividad a tus páginas con JavaScript básico.',
      info: [
        { tag: '¿Qué es JavaScript?', html: `
          <h3>⚡ Introducción a JavaScript</h3>
          <p><strong>JavaScript</strong> es el lenguaje de programación que hace que las páginas web sean <strong>interactivas</strong>. Mientras HTML da la estructura y CSS los estilos, JavaScript añade comportamiento.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🌐</div>
              <h5>HTML</h5>
              <p>Estructura</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>CSS</h5>
              <p>Estilos</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>JavaScript</h5>
              <p>Interactividad</p>
            </div>
          </div>
          <p>JavaScript se puede incluir directamente en el HTML:</p>
          <pre><code>&lt;script&gt;
  console.log("¡Hola desde JavaScript!");
&lt;/script&gt;</code></pre>
          <p>O en un archivo externo (mejor práctica):</p>
          <pre><code>&lt;script src="script.js"&gt;&lt;/script&gt;</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>El &lt;script&gt; suele ir al final del &lt;body&gt; para que primero cargue el HTML y luego el JavaScript.</p>
          </div>
        `},
        { tag: 'Variables', html: `
          <h3>📦 Variables en JavaScript: let y const</h3>
          <p>Las <strong>variables</strong> almacenan datos que puedes usar y modificar en tu programa:</p>
          <pre><code>// let: la variable puede cambiar
let nombre = "Ana";
nombre = "Carlos";  // ✅ Se puede cambiar

// const: la variable NO puede cambiar (constante)
const PI = 3.1416;
// PI = 3;  ❌ Error: no se puede reasignar

// Tipos de datos comunes
let edad = 16;                // número
let precio = 19.99;           // número decimal
let mensaje = "Hola mundo";   // texto (string)
let esVerdad = true;          // booleano
let colores = ["rojo", "verde", "azul"];  // array</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Regla:</strong> Usa <strong>const</strong> por defecto. Solo usa <strong>let</strong> cuando sepas que la variable va a cambiar. NUNCA uses <strong>var</strong> (está obsoleto).</p>
          </div>
        `},
        { tag: 'Funciones', html: `
          <h3>🔧 Funciones: bloques de código reutilizables</h3>
          <p>Una <strong>función</strong> es un bloque de código que hace una tarea específica y puede ejecutarse cuando la necesites:</p>
          <pre><code>// Definir una función
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Llamar a la función
saludar("María");  // Muestra: ¡Hola, María!
saludar("Pedro");  // Muestra: ¡Hola, Pedro!

// Función que calcula y devuelve un valor
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado);  // Muestra: 8</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Las funciones ayudan a <strong>organizar el código</strong> y evitar repetir las mismas instrucciones varias veces.</p>
          </div>
        `},
        { tag: 'DOM', html: `
          <h3>🌳 Manipulación del DOM</h3>
          <p>El <strong>DOM</strong> (Document Object Model) es la representación de tu página HTML como un árbol de objetos. JavaScript puede <strong>modificar</strong> ese árbol para cambiar la página en tiempo real.</p>
          <h4>🔍 Seleccionar elementos</h4>
          <pre><code>// Seleccionar por ID
let titulo = document.getElementById("miTitulo");

// Seleccionar por clase (devuelve una lista)
let parrafos = document.getElementsByClassName("texto");

// Seleccionar con CSS (más moderno)
let elemento = document.querySelector("#miTitulo");     // Primer match
let elementos = document.querySelectorAll(".texto");   // Todos</code></pre>
          <h4>✏️ Modificar elementos</h4>
          <pre><code>let titulo = document.getElementById("miTitulo");

// Cambiar el texto
titulo.textContent = "Nuevo título";

// Cambiar estilos
titulo.style.color = "red";
titulo.style.fontSize = "40px";
titulo.style.backgroundColor = "yellow";</code></pre>
        `},
        { tag: 'Eventos', html: `
          <h3>🖱️ Eventos: responder a interacciones</h3>
          <p>Los <strong>eventos</strong> permiten que tu código reaccione a acciones del usuario (clic, escribir, pasar el ratón, etc.):</p>
          <pre><code>// HTML
// &lt;button id="miBoton"&gt;Haz clic aquí&lt;/button&gt;
// &lt;p id="mensaje"&gt;Texto inicial&lt;/p&gt;

// JavaScript
let boton = document.getElementById("miBoton");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  mensaje.textContent = "¡Has hecho clic!";
  mensaje.style.color = "green";
});</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🖱️</div>
              <h5>click</h5>
              <p>Al hacer clic en un elemento.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>keydown</h5>
              <p>Al presionar una tecla.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🖌️</div>
              <h5>mouseover</h5>
              <p>Al pasar el ratón sobre un elemento.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>input</h5>
              <p>Al escribir en un campo de formulario.</p>
            </div>
          </div>
        `},
        { tag: 'Práctica final', html: `
          <h3>✏️ Proyecto: Página interactiva</h3>
          <p>Crea un archivo <code>interactivo.html</code> y <code>script.js</code> con:</p>
          <ul>
            <li>Un &lt;h1&gt; con id="titulo" que diga "Bienvenido"</li>
            <li>Un &lt;p&gt; con id="texto" que diga "Este texto cambiará"</li>
            <li>Un &lt;button&gt; que al hacer clic cambie el texto y color del párrafo</li>
            <li>Un &lt;button&gt; que al hacer clic cambie el título a "¡Modificado!"</li>
            <li>Un &lt;input type="text"&gt; que al escribir modifique en tiempo real un párrafo con el texto escrito</li>
            <li>Variables con let/const, una función propia, y console.log para depurar</li>
          </ul>
          <div class="slide-success">
            <span class="icon">🌟</span>
            <p><strong>¡Enhorabuena!</strong> Has llegado al final del curso. Con HTML, CSS y JavaScript puedes crear páginas web completas, bonitas e interactivas. ¡Sigue practicando!</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'JavaScript', hint: '¿Qué etiqueta HTML se usa para incluir JavaScript en una página?' },
        { term: 'Variable', hint: '¿Cuál es la diferencia entre let y const?' },
        { term: 'Función', hint: '¿Cómo se define una función en JavaScript?' },
        { term: 'DOM', hint: '¿Qué significan las siglas DOM y para qué sirve?' },
        { term: 'getElementById', hint: '¿Qué método del DOM selecciona un elemento por su id?' },
        { term: 'addEventListener', hint: '¿Qué evento se usa para detectar un clic en un botón?' },
        { term: 'console.log', hint: '¿Para qué sirve console.log en JavaScript?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿Qué palabra clave se usa en JavaScript para declarar una variable que NO puede cambiar?', options: [
          { value: 'a', label: 'let' },
          { value: 'b', label: 'const' },
          { value: 'c', label: 'var' },
          { value: 'd', label: 'static' }
        ], answer: 'b' },
        { id: 'c6e2', n: 2, type: 'mc', prompt: '¿Qué método del DOM selecciona un elemento por su ID?', options: [
          { value: 'a', label: 'document.querySelector' },
          { value: 'b', label: 'document.getElementById' },
          { value: 'c', label: 'document.getElementsByClass' },
          { value: 'd', label: 'document.querySelectorAll' }
        ], answer: 'b' },
        { id: 'c6e3', n: 3, type: 'tf', prompt: 'addEventListener("click", function) se usa para ejecutar código cuando se hace clic en un elemento.', answer: 'true' },
        { id: 'c6e4', n: 4, type: 'fill', prompt: 'Para cambiar el contenido de un elemento del DOM se usa la propiedad ____.', answer: 'textContent' }
      ],
      tasks: [
        { id: 'c6t1', title: '⚡ Página interactiva completa', description: 'Crea una página HTML + JS que tenga: un contador que aumente al hacer clic en un botón (usando let), un botón para reiniciar el contador, un campo de texto que muestre lo que escribes en tiempo real en un párrafo, y un botón que cambie el color de fondo de la página usando style.backgroundColor.', evidence: 'Captura de la página funcionando.' },
        { id: 'c6t2', title: '🎯 Mini proyecto final', description: 'Crea una página web que simule una "calculadora de propinas". Debe tener: inputs para total de cuenta y porcentaje de propina, un botón "Calcular" que use una función para calcular la propina y el total final, y muestre el resultado en un párrafo usando textContent. Incluye estilos CSS básicos.', evidence: 'Captura de la calculadora funcionando.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Responde las 5 preguntas sobre JavaScript.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la forma correcta de declarar una constante en JavaScript?', options: [
            { value: 'a', label: 'var PI = 3.14' },
            { value: 'b', label: 'let PI = 3.14' },
            { value: 'c', label: 'const PI = 3.14' },
            { value: 'd', label: 'int PI = 3.14' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: '¿Qué método agrega un evento a un elemento del DOM?', options: [
            { value: 'a', label: 'addEvent' },
            { value: 'b', label: 'addEventListener' },
            { value: 'c', label: 'onClick' },
            { value: 'd', label: 'setEvent' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El DOM (Document Object Model) es la representación de la página HTML como un árbol de objetos.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Qué propiedad se usa para cambiar el texto de un elemento?', options: [
            { value: 'a', label: 'innerHTML' },
            { value: 'b', label: 'textContent' },
            { value: 'c', label: 'value' },
            { value: 'd', label: 'src' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Para cambiar un estilo CSS desde JavaScript se usa la propiedad ____.', answer: 'style' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Computación II',
        description: '15 preguntas cubriendo HTML, CSS y JavaScript. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'HTML · ¿Qué etiqueta contiene el contenido visible de una página web?', options: [{ value: 'a', label: '<head>' }, { value: 'b', label: '<body>' }, { value: 'c', label: '<html>' }, { value: 'd', label: '<title>' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'HTML · ¿Qué atributo se usa en <a> para abrir un enlace en una nueva pestaña?', options: [{ value: 'a', label: 'href' }, { value: 'b', label: 'target="_blank"' }, { value: 'c', label: 'src' }, { value: 'd', label: 'rel' }], answer: 'b' },
          { id: 'f3', type: 'tf', prompt: 'HTML · La etiqueta <ul> crea una lista ordenada (numerada).', answer: 'false' },
          { id: 'f4', type: 'mc', prompt: 'HTML · ¿Qué tipo de input oculta los caracteres escritos?', options: [{ value: 'a', label: 'text' }, { value: 'b', label: 'password' }, { value: 'c', label: 'hidden' }, { value: 'd', label: 'secret' }], answer: 'b' },
          { id: 'f5', type: 'mc', prompt: 'HTML · ¿Qué método de formulario envía los datos OCULTOS en el cuerpo de la petición?', options: [{ value: 'a', label: 'GET' }, { value: 'b', label: 'POST' }, { value: 'c', label: 'PUT' }, { value: 'd', label: 'VIEW' }], answer: 'b' },
          { id: 'f6', type: 'mc', prompt: 'CSS · ¿Qué selector apunta a elementos con class="destacado"?', options: [{ value: 'a', label: '#destacado' }, { value: 'b', label: '.destacado' }, { value: 'c', label: 'destacado' }, { value: 'd', label: 'class: destacado' }], answer: 'b' },
          { id: 'f7', type: 'tf', prompt: 'CSS · La propiedad padding define el espacio INTERNO entre el contenido y el borde.', answer: 'true' },
          { id: 'f8', type: 'mc', prompt: 'CSS · ¿Qué propiedad de flexbox centra elementos en el eje principal (horizontal)?', options: [{ value: 'a', label: 'align-items' }, { value: 'b', label: 'justify-content' }, { value: 'c', label: 'text-align' }, { value: 'd', label: 'flex-direction' }], answer: 'b' },
          { id: 'f9', type: 'mc', prompt: 'CSS · ¿Qué regla CSS aplica estilos según el tamaño de la pantalla?', options: [{ value: 'a', label: '@import' }, { value: 'b', label: '@media' }, { value: 'c', label: '@font-face' }, { value: 'd', label: '@keyframes' }], answer: 'b' },
          { id: 'f10', type: 'tf', prompt: 'CSS · El viewport meta tag es necesario para el diseño responsive en dispositivos móviles.', answer: 'true' },
          { id: 'f11', type: 'mc', prompt: 'JavaScript · ¿Qué palabra clave declara una variable que NO se puede reasignar?', options: [{ value: 'a', label: 'let' }, { value: 'b', label: 'const' }, { value: 'c', label: 'var' }, { value: 'd', label: 'static' }], answer: 'b' },
          { id: 'f12', type: 'mc', prompt: 'JavaScript · ¿Qué método del DOM selecciona un elemento por su ID?', options: [{ value: 'a', label: 'document.querySelector' }, { value: 'b', label: 'document.getElementById' }, { value: 'c', label: 'document.getElementsByTagName' }, { value: 'd', label: 'document.querySelectorAll' }], answer: 'b' },
          { id: 'f13', type: 'tf', prompt: 'JavaScript · addEventListener("mouseover", fn) ejecuta la función cuando se hace clic en el elemento.', answer: 'false' },
          { id: 'f14', type: 'fill', prompt: 'HTML · La etiqueta que crea una fila en una tabla HTML es ____.', answer: 'tr' },
          { id: 'f15', type: 'fill', prompt: 'CSS · La propiedad que redondea las esquinas de un elemento se llama ____.', answer: 'border-radius' }
        ]
      }
    }
  ]
};
