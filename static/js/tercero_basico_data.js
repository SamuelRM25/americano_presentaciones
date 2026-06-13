const COURSE_DATA = {
  grade: 'tercero_basico',
  title: 'TAC (Procesamiento de Textos) · Tercero Básico',
  subtitle: 'Procesamiento de textos en Word y Google Docs',
  classes: [
    {
      id: 'c1', num: 1, icon: '📝',
      title: 'Introducci\u00f3n al procesamiento de textos',
      tagline: 'Aprende qu\u00e9 es un procesador de textos y c\u00f3mo usar Word y Google Docs.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 \u00a1Bienvenido a TAC, Tercero B\u00e1sico!</h3>
          <p>Este a\u00f1o vamos a aprender <strong>procesamiento de textos</strong> con dos herramientas muy poderosas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Microsoft Word</h5>
              <p>El procesador de textos m\u00e1s usado en el mundo. Perfecto para documentos profesionales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">\u2601\ufe0f</div>
              <h5>Google Docs</h5>
              <p>Procesador en la nube, gratuito y colaborativo. Funciona desde cualquier dispositivo con internet.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Herramientas b\u00e1sicas</h5>
              <p>Listas, tablas, encabezados, pie de p\u00e1gina y revisi\u00f3n ortogr\u00e1fica para crear documentos completos.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases ser\u00e1s capaz de crear documentos bien estructurados usando listas, tablas, encabezados, pie de p\u00e1gina y revisi\u00f3n ortogr\u00e1fica autom\u00e1tica.</p>
          </div>
        `},
        { tag: '\u00bfQu\u00e9 es un procesador de textos?', html: `
          <h3>💻 \u00bfQu\u00e9 es un procesador de textos?</h3>
          <p>Un <strong>procesador de textos</strong> es un programa inform\u00e1tico que permite crear, editar, dar formato e imprimir documentos de texto. Es como un cuaderno digital, pero con herramientas muy poderosas.</p>
          <h4>📌 Los procesadores m\u00e1s populares</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🪟</div>
              <h5>Microsoft Word</h5>
              <p>Parte del paquete Office. Es el est\u00e1ndar mundial. Archivos con extensi\u00f3n .docx.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🌐</div>
              <h5>Google Docs</h5>
              <p>Gratuito, funciona en el navegador. Guarda autom\u00e1ticamente en Google Drive. Ideal para trabajar en equipo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🦁</div>
              <h5>LibreOffice Writer</h5>
              <p>Alternativa gratuita y de c\u00f3digo abierto. Compatible con archivos de Word.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Dato curioso:</strong> El primer procesador de textos fue <em>WordStar</em>, lanzado en 1978. Hoy, m\u00e1s de 1,200 millones de personas usan Microsoft Office en el mundo.</p>
          </div>
        `},
        { tag: 'Interfaz de Microsoft Word', html: `
          <h3>🪟 Conoce la interfaz de Word</h3>
          <p>Al abrir Word, ves una ventana con varias partes importantes. Identifica cada una:</p>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Captura de pantalla: Interfaz de Microsoft Word]</p>
          </div>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📌</div>
              <h5>Barra de t\u00edtulo</h5>
              <p>Arriba del todo. Muestra el nombre del documento y el programa.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎀</div>
              <h5>Cinta de opciones (Ribbon)</h5>
              <p>La barra con pesta\u00f1as: Inicio, Insertar, Dise\u00f1o, Referencias, etc. Cada pesta\u00f1a agrupa herramientas relacionadas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Regla</h5>
              <p>Muestra los m\u00e1rgenes y la posici\u00f3n del texto. Sirve para ajustar sangr\u00edas y tabulaciones.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>\u00c1rea de documento</h5>
              <p>El espacio blanco donde escribes. Es como una hoja de papel en blanco.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Barra de estado</h5>
              <p>Abajo. Muestra el n\u00famero de p\u00e1gina, cantidad de palabras, idioma y zoom.</p>
            </div>
            <div class="grid-item">
              <div class="icon">\u26a1</div>
              <h5>Barra de acceso r\u00e1pido</h5>
              <p>La barrita peque\u00f1a arriba a la izquierda con Guardar, Deshacer y Rehacer.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Consejo:</strong> Pasa el mouse sobre cualquier bot\u00f3n y aparecer\u00e1 un recuadrito explicando su funci\u00f3n. \u00a1As\u00ed aprender\u00e1s r\u00e1pido!</p>
          </div>
        `},
        { tag: 'Interfaz de Google Docs', html: `
          <h3>🌐 Conoce la interfaz de Google Docs</h3>
          <p>Google Docs es muy parecido a Word, pero funciona en el navegador web. Solo necesitas una cuenta de Google:</p>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Captura de pantalla: Interfaz de Google Docs]</p>
          </div>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🏷\ufe0f</div>
              <h5>T\u00edtulo del documento</h5>
              <p>Arriba. Haz clic en "Sin t\u00edtulo" para nombrar tu documento.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📂</div>
              <h5>Men\u00fa principal</h5>
              <p>Archivo, Editar, Ver, Insertar, Formato, Herramientas, Extensiones, Ayuda.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🛠\ufe0f</div>
              <h5>Barra de herramientas</h5>
              <p>Debajo del men\u00fa. Tiene los botones m\u00e1s usados: negrita, cursiva, colores, alineaci\u00f3n, listas, etc.</p>
            </div>
            <div class="grid-item">
              <div class="icon">👥</div>
              <h5>Bot\u00f3n Compartir</h5>
              <p>Arriba a la derecha. Permite invitar a otras personas a editar el documento en tiempo real.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🖼\ufe0f</div>
              <h5>\u00c1rea de trabajo</h5>
              <p>El espacio central donde escribes. Muy similar a Word.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗂\ufe0f</div>
              <h5>Explorador de Drive</h5>
              <p>A la izquierda, muestra tus documentos recientes. Puedes abrir y organizar archivos.</p>
            </div>
          </div>
        `},
        { tag: 'Crear y guardar documentos', html: `
          <h3>💾 Crear y guardar documentos</h3>
          <h4>🪟 En Microsoft Word</h4>
          <ol>
            <li>Abre Word desde el men\u00fa Inicio o el escritorio.</li>
            <li>Selecciona <strong>Documento en blanco</strong>.</li>
            <li>Escribe tu contenido.</li>
            <li>Presiona <strong>Ctrl + S</strong> (Windows) o <strong>Cmd + S</strong> (Mac).</li>
            <li>Elige una carpeta, ponle nombre al archivo y haz clic en Guardar.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Entra a <strong>docs.google.com</strong> e inicia sesi\u00f3n.</li>
            <li>Haz clic en el bot\u00f3n <strong>"+"</strong> (Documento en blanco).</li>
            <li>Escribe tu contenido. <strong>Se guarda autom\u00e1ticamente</strong> en Google Drive.</li>
            <li>Cambia el nombre haciendo clic en "Sin t\u00edtulo".</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">\u26a0\ufe0f</span>
            <p><strong>\u00a1Cuidado!</strong> En Word, si no guardas y se va la luz o se cierra el programa, perder\u00e1s todo. En Google Docs, todo se guarda en la nube autom\u00e1ticamente.</p>
          </div>
          <h4>🔑 Atajos de teclado importantes</h4>
          <ul>
            <li><strong>Ctrl + S</strong> (Windows) / <strong>Cmd + S</strong> (Mac): Guardar.</li>
            <li><strong>Ctrl + N</strong> (Windows) / <strong>Cmd + N</strong> (Mac): Nuevo documento.</li>
            <li><strong>Ctrl + P</strong> (Windows) / <strong>Cmd + P</strong> (Mac): Imprimir.</li>
            <li><strong>Ctrl + Z</strong> (Windows) / <strong>Cmd + Z</strong> (Mac): Deshacer.</li>
          </ul>
        `},
        { tag: 'Manos a la obra', html: `
          <h3>\u270f\ufe0f Manos a la obra</h3>
          <p>Vamos a practicar lo aprendido con este ejercicio guiado:</p>
          <h4>📝 Ejercicio pr\u00e1ctico</h4>
          <ol>
            <li>Abre Word (o Google Docs).</li>
            <li>Crea un documento nuevo.</li>
            <li>Escribe un t\u00edtulo: <strong>"Mis vacaciones so\u00f1adas"</strong>.</li>
            <li>Escribe 3 p\u00e1rrafos cortos describiendo tu lugar ideal para vacacionar.</li>
            <li>Guarda el documento con el nombre: <code>Mis_Vacaciones_TuNombre.docx</code>.</li>
            <li>Si usas Google Docs, c\u00e1mbiale el nombre haciendo clic en el t\u00edtulo.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>\u00a1Buen trabajo!</strong> Ya creaste tu primer documento. En las pr\u00f3ximas clases aprenderemos a darle formato con listas, tablas y mucho m\u00e1s.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Procesador de textos', hint: '\u00bfCu\u00e1l es la diferencia entre un procesador de textos y un editor de texto simple?' },
        { term: 'Microsoft Word', hint: '\u00bfQu\u00e9 extensi\u00f3n tienen los archivos de Word?' },
        { term: 'Google Docs', hint: '\u00bfPor qu\u00e9 Google Docs guarda autom\u00e1ticamente y Word no?' },
        { term: 'Cinta de opciones', hint: '\u00bfQu\u00e9 pesta\u00f1as contiene la cinta de opciones de Word?' },
        { term: 'Ctrl + S', hint: '\u00bfQu\u00e9 hace Ctrl + S en Windows y Cmd + S en Mac?' },
        { term: 'Barra de estado', hint: '\u00bfQu\u00e9 informaci\u00f3n muestra la barra de estado de Word?' },
        { term: 'Extensi\u00f3n de archivo', hint: '\u00bfQu\u00e9 extensi\u00f3n usan los documentos de Word y de Google Docs al descargarlos?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '\u00bfQu\u00e9 es un procesador de textos?', options: [
          { value: 'a', label: 'Un programa para editar videos' },
          { value: 'b', label: 'Un programa para crear, editar y dar formato a documentos de texto' },
          { value: 'c', label: 'Un navegador de internet' },
          { value: 'd', label: 'Una red social' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '\u00bfCu\u00e1l de estos NO es un procesador de textos?', options: [
          { value: 'a', label: 'Microsoft Word' },
          { value: 'b', label: 'Google Docs' },
          { value: 'c', label: 'LibreOffice Writer' },
          { value: 'd', label: 'Google Chrome' }
        ], answer: 'd' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'Google Docs guarda los documentos autom\u00e1ticamente en la nube.', answer: 'true' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'El atajo de teclado para guardar un documento en Windows es Ctrl + _______.', answer: 'S' }
      ],
      tasks: [
        { id: 'c1t1', title: '📝 Crea tu primer documento', description: 'Abre Word o Google Docs y crea un documento titulado "Mi presentaci\u00f3n". Escribe 3 p\u00e1rrafos sobre ti: qui\u00e9n eres, qu\u00e9 te gusta hacer y tus metas para este curso. Guarda el archivo con un nombre descriptivo.', evidence: 'Captura del documento creado con el nombre del archivo visible.' },
        { id: 'c1t2', title: '🔍 Explora la interfaz', description: 'Abre Word y nombra 5 partes de la interfaz que vimos en clase. En Google Docs, identifica 3 diferencias con Word. Escribe tus respuestas en un documento de texto.', evidence: 'Captura de pantalla con las partes se\u00f1aladas.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen \u00b7 Clase 1',
        description: 'Responde las 5 preguntas sobre introducci\u00f3n al procesamiento de textos.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfCu\u00e1l de estos es un procesador de textos?', options: [
            { value: 'a', label: 'Photoshop' },
            { value: 'b', label: 'Word' },
            { value: 'c', label: 'Excel' },
            { value: 'd', label: 'Chrome' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfQu\u00e9 tecla se usa junto con Ctrl o Cmd para guardar?', options: [
            { value: 'a', label: 'G' },
            { value: 'b', label: 'N' },
            { value: 'c', label: 'S' },
            { value: 'd', label: 'P' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'La cinta de opciones (Ribbon) contiene pesta\u00f1as como Inicio, Insertar y Dise\u00f1o.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '\u00bfD\u00f3nde se guardan los documentos de Google Docs autom\u00e1ticamente?', options: [
            { value: 'a', label: 'En el disco duro de tu PC' },
            { value: 'b', label: 'En Google Drive' },
            { value: 'c', label: 'En un USB' },
            { value: 'd', label: 'No se guardan' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La extensi\u00f3n de archivo de un documento de Word es _______.', answer: '.docx' }
        ]
      }
    },
    {
      id: 'c2', num: 2, icon: '📋',
      title: 'Listas con vi\u00f1etas y numeraci\u00f3n',
      tagline: 'Aprende a organizar informaci\u00f3n usando listas con vi\u00f1etas y numeradas.',
      info: [
        { tag: '\u00bfQu\u00e9 son las listas?', html: `
          <h3>📋 \u00bfQu\u00e9 son las listas en un documento?</h3>
          <p>Las <strong>listas</strong> son una forma de organizar informaci\u00f3n en elementos separados, uno debajo del otro. Hacen que el texto sea m\u00e1s f\u00e1cil de leer y entender.</p>
          <h4>🎯 Tipos de listas</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">•</div>
              <h5>Listas con vi\u00f1etas</h5>
              <p>Usan s\u00edmbolos (puntos, cuadros, guiones) para marcar cada elemento. \u00datiles para enumerar ideas sin orden espec\u00edfico.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Listas numeradas</h5>
              <p>Usan n\u00fameros (1, 2, 3...) o letras (a, b, c...). Ideales para pasos, instrucciones o rankings.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📚</div>
              <h5>Listas multinivel</h5>
              <p>Combinan vi\u00f1etas y n\u00fameros en niveles jer\u00e1rquicos. Por ejemplo: 1, 1.1, 1.1.1.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>\u00bfCu\u00e1ndo usar cada una?</strong> Usa vi\u00f1etas para listas simples sin orden. Usa numeraci\u00f3n cuando el orden importe (pasos, instrucciones). Usa multinivel para esquemas o \u00edndices.</p>
          </div>
        `},
        { tag: 'Listas con vi\u00f1etas', html: `
          <h3>• Listas con vi\u00f1etas en Word y Google Docs</h3>
          <p>Las <strong>vi\u00f1etas</strong> son ideales para listar elementos donde el orden no es importante, como una lista de compras o caracter\u00edsticas de un producto.</p>
          <h4>🪟 En Microsoft Word</h4>
          <ol>
            <li>Selecciona el texto o coloca el cursor donde quieras la lista.</li>
            <li>Ve a la pesta\u00f1a <strong>Inicio</strong> y busca el grupo <strong>P\u00e1rrafo</strong>.</li>
            <li>Haz clic en el bot\u00f3n <strong>Vi\u00f1etas</strong> (parece una lista con puntos negros).</li>
            <li>Para cambiar el estilo de vi\u00f1eta, haz clic en la flecha al lado del bot\u00f3n y elige un s\u00edmbolo.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Haz clic en el bot\u00f3n <strong>Lista con vi\u00f1etas</strong> en la barra de herramientas.</li>
            <li>Tambi\u00e9n puedes ir a <strong>Formato > Vi\u00f1etas y numeraci\u00f3n</strong>.</li>
            <li>Para cambiar el estilo, haz clic derecho sobre la vi\u00f1eta y elige \u00abM\u00e1s vi\u00f1etas\u00bb.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Tip:</strong> Presiona Enter para agregar un nuevo elemento. Presiona Enter dos veces o Backspace para terminar la lista.</p>
          </div>
        `},
        { tag: 'Listas numeradas', html: `
          <h3>🔢 Listas numeradas en Word y Google Docs</h3>
          <p>Las listas <strong>numeradas</strong> se usan cuando el orden de los elementos es importante. Por ejemplo: pasos de una receta, instrucciones o procesos.</p>
          <h4>🪟 En Microsoft Word</h4>
          <ol>
            <li>Selecciona el texto o coloca el cursor.</li>
            <li>En la pesta\u00f1a <strong>Inicio</strong>, grupo <strong>P\u00e1rrafo</strong>, haz clic en <strong>Numeraci\u00f3n</strong>.</li>
            <li>Word numerar\u00e1 autom\u00e1ticamente 1, 2, 3, etc.</li>
            <li>Para cambiar el formato (n\u00fameros romanos, letras), haz clic en la flecha del bot\u00f3n.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Haz clic en <strong>Lista numerada</strong> en la barra de herramientas.</li>
            <li>O ve a <strong>Formato > Vi\u00f1etas y numeraci\u00f3n > Lista numerada</strong>.</li>
            <li>Para cambiar el estilo, haz clic en el men\u00fa desplegable del bot\u00f3n.</li>
          </ol>
          <h4>📝 Ejemplo: Instrucciones para hacer un s\u00e1ndwich</h4>
          <div class="slide-info">
            <span class="icon">🥪</span>
            <p>
              1. Toma dos rebanadas de pan.<br>
              2. Unta mayonesa en una rebanada.<br>
              3. Coloca jam\u00f3n y queso.<br>
              4. Agrega lechuga y tomate.<br>
              5. Tapa con la otra rebanada.<br>
              6. \u00a1Disfruta!
            </p>
          </div>
        `},
        { tag: 'Listas multinivel', html: `
          <h3>📚 Listas multinivel: organizaci\u00f3n jer\u00e1rquica</h3>
          <p>Las listas <strong>multinivel</strong> permiten crear sub-elementos dentro de elementos principales. Son ideales para esquemas, \u00edndices o documentos con secciones y subsecciones.</p>
          <h4>📝 Ejemplo de esquema</h4>
          <div class="slide-info">
            <span class="icon">📚</span>
            <p>
              1. Introducci\u00f3n<br>
              &nbsp;&nbsp;&nbsp;1.1 Qu\u00e9 es un procesador de textos<br>
              &nbsp;&nbsp;&nbsp;1.2 Historia breve<br>
              2. Herramientas b\u00e1sicas<br>
              &nbsp;&nbsp;&nbsp;2.1 Listas<br>
              &nbsp;&nbsp;&nbsp;2.2 Tablas<br>
              &nbsp;&nbsp;&nbsp;2.3 Encabezados<br>
              3. Conclusi\u00f3n
            </p>
          </div>
          <h4>🔑 Atajos para multinivel</h4>
          <ul>
            <li><strong>Tab:</strong> Aumenta el nivel (sub-elemento).</li>
            <li><strong>Shift + Tab:</strong> Disminuye el nivel (vuelve al nivel anterior).</li>
            <li><strong>Enter:</strong> Agrega un nuevo elemento del mismo nivel.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">\u26a0\ufe0f</span>
            <p><strong>\u00a1Importante!</strong> Para crear una lista multinivel en Word, usa el bot\u00f3n <strong>Lista multinivel</strong> (no el de vi\u00f1etas ni numeraci\u00f3n simple). En Google Docs, usa <strong>Formato > Vi\u00f1etas y numeraci\u00f3n > Opciones de numeraci\u00f3n</strong>.</p>
          </div>
        `},
        { tag: 'Personalizar listas', html: `
          <h3>🎨 Personalizar el aspecto de tus listas</h3>
          <p>Puedes cambiar el estilo, color y tama\u00f1o de las vi\u00f1etas o n\u00fameros para que tu documento se vea m\u00e1s profesional.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>Cambiar s\u00edmbolo de vi\u00f1eta</h5>
              <p>En Word: haz clic en la flecha del bot\u00f3n Vi\u00f1etas y elige <strong>Definir nueva vi\u00f1eta</strong>. Puedes usar s\u00edmbolos, im\u00e1genes o fuentes.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>En Google Docs</h5>
              <p>Haz clic derecho sobre la vi\u00f1eta y elige <strong>M\u00e1s vi\u00f1etas</strong>. Aparecer\u00e1 un men\u00fa con muchos s\u00edmbolos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Cambiar formato de n\u00fameros</h5>
              <p>En Word, haz clic derecho sobre un n\u00famero y elige <strong>Ajustar valores de lista</strong> para cambiar el n\u00famero inicial.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🌈</div>
              <h5>Colores y tama\u00f1os</h5>
              <p>Selecciona la vi\u00f1eta o el n\u00famero y apl\u00edcale color, negrita o un tama\u00f1o diferente como si fuera texto normal.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Consejo profesional:</strong> Usa el mismo estilo de vi\u00f1eta en todo el documento para mantener consistencia visual.</p>
          </div>
        `},
        { tag: 'Pr\u00e1ctica con listas', html: `
          <h3>\u270f\ufe0f Vamos a practicar listas</h3>
          <p>Crea un documento con los siguientes elementos:</p>
          <h4>📝 Ejercicio 1: Lista de compras</h4>
          <p>Crea una lista con vi\u00f1etas con 8 art\u00edculos de supermercado. Cambia la vi\u00f1eta por un s\u00edmbolo diferente (como \u2714 o \u2605).</p>
          <h4>📝 Ejercicio 2: Instrucciones</h4>
          <p>Crea una lista numerada con los pasos para preparar tu comida favorita (m\u00ednimo 5 pasos).</p>
          <h4>📝 Ejercicio 3: Esquema</h4>
          <p>Crea una lista multinivel (\u00edndice) con 3 temas principales y 2 sub-temas cada uno. Ejemplo de tema: "Animales", "Deportes", "Pa\u00edses".</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> Usa Tab para crear sub-niveles y Shift + Tab para salir de ellos.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Vi\u00f1eta', hint: '\u00bfCu\u00e1ndo es mejor usar vi\u00f1etas en lugar de numeraci\u00f3n?' },
        { term: 'Lista numerada', hint: '\u00bfQu\u00e9 tipos de formatos de numeraci\u00f3n existen (n\u00fameros, letras, romanos)?' },
        { term: 'Lista multinivel', hint: '\u00bfQu\u00e9 tecla se usa para crear un sub-nivel en una lista?' },
        { term: 'Tab', hint: '\u00bfQu\u00e9 efecto tiene presionar Tab dentro de una lista?' },
        { term: 'Shift + Tab', hint: '\u00bfQu\u00e9 diferencia hay entre Tab y Shift + Tab en las listas?' },
        { term: 'Personalizar', hint: '\u00bfC\u00f3mo se cambia el s\u00edmbolo de vi\u00f1eta en Word?' },
        { term: 'Esquema', hint: '\u00bfPor qu\u00e9 es \u00fatil usar listas multinivel para hacer esquemas?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '\u00bfCu\u00e1ndo se usa una lista numerada?', options: [
          { value: 'a', label: 'Cuando el orden de los elementos no importa' },
          { value: 'b', label: 'Cuando el orden de los elementos s\u00ed importa (pasos, instrucciones)' },
          { value: 'c', label: 'Solo para t\u00edtulos' },
          { value: 'd', label: 'Nunca se usan' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: '\u00bfQu\u00e9 tecla se usa para crear un sub-nivel en una lista?', options: [
          { value: 'a', label: 'Enter' },
          { value: 'b', label: 'Espacio' },
          { value: 'c', label: 'Tab' },
          { value: 'd', label: 'Shift' }
        ], answer: 'c' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'Las listas con vi\u00f1etas se usan cuando el orden de los elementos no es importante.', answer: 'true' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'Para disminuir el nivel de una lista multinivel se usa Shift + _______.', answer: 'Tab' }
      ],
      tasks: [
        { id: 'c2t1', title: '📋 Crea una gu\u00eda tur\u00edstica', description: 'Crea un documento en Word o Google Docs con: (1) Una lista numerada de 5 lugares tur\u00edsticos que te gustar\u00eda visitar, (2) Una lista con vi\u00f1etas con 3 razones para visitar cada lugar, (3) Una lista multinivel con pa\u00edses y ciudades correspondientes.', evidence: 'Documento completo con los 3 tipos de listas.' },
        { id: 'c2t2', title: '📖 Esquema de estudio', description: 'Elige un tema de cualquier materia y crea un esquema con lista multinivel. Ejemplo: "Los vertebrados" con sub-niveles: mam\u00edferos, aves, reptiles, anfibios, peces. Cada sub-nivel debe tener al menos 2 ejemplos.', evidence: 'Captura del esquema en tu documento.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen \u00b7 Clase 2',
        description: 'Responde las 5 preguntas sobre listas con vi\u00f1etas y numeraci\u00f3n.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfPara qu\u00e9 sirven las listas en un documento?', options: [
            { value: 'a', label: 'Solo para decorar' },
            { value: 'b', label: 'Para organizar informaci\u00f3n de forma clara y ordenada' },
            { value: 'c', label: 'Para hacer dibujos' },
            { value: 'd', label: 'No sirven para nada' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfQu\u00e9 tipo de lista usar\u00edas para los pasos de una receta?', options: [
            { value: 'a', label: 'Lista con vi\u00f1etas' },
            { value: 'b', label: 'Lista numerada' },
            { value: 'c', label: 'Lista multinivel' },
            { value: 'd', label: 'Ninguna' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'En una lista multinivel, la tecla Tab aumenta el nivel (crea un sub-elemento).', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '\u00bfD\u00f3nde est\u00e1 el bot\u00f3n de vi\u00f1etas en Word?', options: [
            { value: 'a', label: 'En la pesta\u00f1a Insertar' },
            { value: 'b', label: 'En la pesta\u00f1a Inicio, grupo P\u00e1rrafo' },
            { value: 'c', label: 'En la pesta\u00f1a Dise\u00f1o' },
            { value: 'd', label: 'En la barra de estado' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Para terminar una lista, presiona Enter dos veces o presiona la tecla _______.', answer: 'Backspace' }
        ]
      }
    },
    {
      id: 'c3', num: 3, icon: '📊',
      title: 'Insertar tablas simples',
      tagline: 'Aprende a crear, modificar y dar formato a tablas en tus documentos.',
      info: [
        { tag: '\u00bfQu\u00e9 es una tabla?', html: `
          <h3>📊 \u00bfQu\u00e9 es una tabla?</h3>
          <p>Una <strong>tabla</strong> es una estructura que organiza informaci\u00f3n en <strong>filas</strong> (horizontales) y <strong>columnas</strong> (verticales). Cada intersecci\u00f3n de una fila y una columna se llama <strong>celda</strong>.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>\u00bfPara qu\u00e9 sirven?</h5>
              <p>Horarios de clases, listas de precios, comparaciones, calendarios, datos num\u00e9ricos y mucho m\u00e1s.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↔</div>
              <h5>Filas</h5>
              <p>Van de izquierda a derecha (horizontales). Se numeran de arriba hacia abajo. Fila 1, Fila 2...</p>
            </div>
            <div class="grid-item">
              <div class="icon">↕</div>
              <h5>Columnas</h5>
              <p>Van de arriba a abajo (verticales). Se nombran A, B, C... o Columna 1, Columna 2...</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗑\ufe0f</div>
              <h5>Celdas</h5>
              <p>Es cada casilla donde se escribe un dato. Por ejemplo: "Celda A1" es la intersecci\u00f3n de la columna A y la fila 1.</p>
            </div>
          </div>
          <h4>📝 Ejemplo de tabla de horario</h4>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Imagen: Tabla de horario escolar con d\u00edas en columnas y horas en filas]</p>
          </div>
        `},
        { tag: 'Crear tablas en Word', html: `
          <h3>🪟 C\u00f3mo crear una tabla en Microsoft Word</h3>
          <p>Word ofrece varias formas de insertar tablas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🖱\ufe0f</div>
              <h5>M\u00e9todo 1: Cuadr\u00edcula</h5>
              <p>Ve a <strong>Insertar > Tabla</strong> y selecciona con el mouse el n\u00famero de filas y columnas en la cuadr\u00edcula. Es el m\u00e9todo m\u00e1s r\u00e1pido.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>M\u00e9todo 2: Insertar tabla</h5>
              <p>Ve a <strong>Insertar > Tabla > Insertar tabla</strong>. Aparece un cuadro donde escribes exactamente cu\u00e1ntas filas y columnas quieres.</p>
            </div>
            <div class="grid-item">
              <div class="icon">\u270f\ufe0f</div>
              <h5>M\u00e9todo 3: Dibujar tabla</h5>
              <p>Ve a <strong>Insertar > Tabla > Dibujar tabla</strong>. El cursor se convierte en l\u00e1piz y dibujas las l\u00edneas a mano.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>M\u00e9todo 4: Tabla r\u00e1pida</h5>
              <p>Word tiene tablas predise\u00f1adas: calendarios, tablas con formato, etc. Ve a <strong>Insertar > Tabla > Tablas r\u00e1pidas</strong>.</p>
            </div>
          </div>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Ve a <strong>Insertar > Tabla</strong>.</li>
            <li>Selecciona la cantidad de filas y columnas en la cuadr\u00edcula.</li>
            <li>La tabla aparecer\u00e1 en el documento lista para llenar.</li>
          </ol>
        `},
        { tag: 'Modificar tablas', html: `
          <h3>🔧 C\u00f3mo modificar una tabla</h3>
          <p>Una vez creada la tabla, puedes ajustarla de muchas formas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">➕</div>
              <h5>Agregar filas/columnas</h5>
              <p>Haz clic derecho en una celda y elige <strong>Insertar</strong> > Filas arriba/abajo o Columnas izquierda/derecha.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➖</div>
              <h5>Eliminar filas/columnas</h5>
              <p>Selecciona las filas o columnas, haz clic derecho y elige <strong>Eliminar filas</strong> o <strong>Eliminar columnas</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">↔</div>
              <h5>Ajustar ancho de columnas</h5>
              <p>Arrastra el borde de una columna para hacerla m\u00e1s ancha o angosta. Tambi\u00e9n puedes arrastrar los bordes de las filas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔀</div>
              <h5>Combinar celdas</h5>
              <p>Selecciona varias celdas, haz clic derecho y elige <strong>Combinar celdas</strong>. \u00datil para crear encabezados que abarquen varias columnas.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Atajo r\u00e1pido:</strong> En Word, al hacer clic dentro de una tabla, aparecen dos pesta\u00f1as nuevas en la cinta: <strong>Dise\u00f1o de tabla</strong> y <strong>Presentaci\u00f3n</strong>. Ah\u00ed tienes todas las herramientas de formato y modificaci\u00f3n.</p>
          </div>
        `},
        { tag: 'Formato de tablas', html: `
          <h3>🎨 Dar formato a las tablas</h3>
          <p>Una tabla bien formateada se ve profesional y es f\u00e1cil de leer.</p>
          <h4>🪟 En Microsoft Word</h4>
          <ul>
            <li><strong>Estilos de tabla:</strong> En la pesta\u00f1a <strong>Dise\u00f1o de tabla</strong>, elige entre muchos estilos predise\u00f1ados con colores y bordes.</li>
            <li><strong>Bordes:</strong> Puedes agregar o quitar bordes de celdas espec\u00edficas.</li>
            <li><strong>Sombreado:</strong> Aplica color de fondo a celdas, filas o columnas completas.</li>
            <li><strong>Alinear texto:</strong> Elige si el texto va arriba, al centro o abajo de la celda.</li>
            <li><strong>Direcci\u00f3n del texto:</strong> Puedes rotar el texto para que se lea verticalmente.</li>
          </ul>
          <h4>🌐 En Google Docs</h4>
          <ul>
            <li>Haz clic derecho en la tabla y elige <strong>Propiedades de la tabla</strong>.</li>
            <li>Ah\u00ed puedes cambiar: color de fondo, ancho de columna, alineaci\u00f3n, bordes y color de borde.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Regla de dise\u00f1o:</strong> Usa un color de fondo suave para los encabezados de la tabla. Alterna colores en las filas (efecto cebra) para facilitar la lectura.</p>
          </div>
        `},
        { tag: 'Ejemplos pr\u00e1cticos', html: `
          <h3>📊 Ejemplos de tablas \u00fatiles</h3>
          <p>Las tablas tienen much\u00edsimas aplicaciones en la vida escolar y personal:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Horario de clases</h5>
              <p>Filas: horas del d\u00eda. Columnas: d\u00edas de la semana. Cada celda: la materia y el aula.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💰</div>
              <h5>Presupuesto mensual</h5>
              <p>Filas: categor\u00edas de gasto. Columnas: presupuesto, gasto real, diferencia.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📐</div>
              <h5>Comparativa de productos</h5>
              <p>Filas: caracter\u00edsticas. Columnas: producto A, producto B, producto C.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Lista de tareas</h5>
              <p>Filas: cada tarea. Columnas: tarea, fecha l\u00edmite, estado (pendiente/hecho).</p>
            </div>
          </div>
          <h4>📝 Tabla de ejemplo: Calificaciones</h4>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Imagen: Tabla con columnas: Nombre, Matem\u00e1ticas, Lenguaje, Ciencias, Promedio]</p>
          </div>
        `},
        { tag: 'Pr\u00e1ctica con tablas', html: `
          <h3>\u270f\ufe0f Vamos a practicar tablas</h3>
          <p>Crea los siguientes ejercicios en un documento:</p>
          <h4>📝 Ejercicio 1: Horario escolar</h4>
          <p>Crea una tabla con tus materias. Columnas: Hora, Lunes, Martes, Mi\u00e9rcoles, Jueves, Viernes. Agrega 6 filas (una por hora de clase). Usa color de fondo en los encabezados.</p>
          <h4>📝 Ejercicio 2: Tabla de营养素</h4>
          <p>Crea una tabla de 4 columnas: Alimento, Porci\u00f3n, Calor\u00edas, Prote\u00ednas. Agrega 5 alimentos diferentes. Aplica el estilo "cebra" (colores alternados).</p>
          <h4>📝 Ejercicio 3: Combinar celdas</h4>
          <p>Crea una tabla de 3x3. Combina las 3 celdas de la primera fila para hacer un encabezado \u00fanico. Escribe "Mi tabla personalizada" en el encabezado.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> En Word, la pesta\u00f1a <strong>Dise\u00f1o de tabla</strong> aparece solo cuando tienes seleccionada una tabla.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Tabla', hint: '\u00bfCu\u00e1les son las partes b\u00e1sicas de una tabla?' },
        { term: 'Fila', hint: '\u00bfLas filas van en horizontal o vertical?' },
        { term: 'Columna', hint: '\u00bfC\u00f3mo se agrega una columna nueva a una tabla existente?' },
        { term: 'Celda', hint: '\u00bfQu\u00e9 es una celda y c\u00f3mo se identifica su posici\u00f3n?' },
        { term: 'Combinar celdas', hint: '\u00bfPara qu\u00e9 sirve combinar celdas en una tabla?' },
        { term: 'Estilo de tabla', hint: '\u00bfD\u00f3nde se encuentran los estilos predise\u00f1ados de tabla en Word?' },
        { term: 'Bordes', hint: '\u00bfC\u00f3mo se cambia el color de los bordes de una tabla?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '\u00bfC\u00f3mo se llama cada casilla dentro de una tabla?', options: [
          { value: 'a', label: 'Fila' },
          { value: 'b', label: 'Columna' },
          { value: 'c', label: 'Celda' },
          { value: 'd', label: 'Tabla' }
        ], answer: 'c' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: '\u00bfEn qu\u00e9 pesta\u00f1a de Word se encuentra el bot\u00f3n Tabla?', options: [
          { value: 'a', label: 'Inicio' },
          { value: 'b', label: 'Insertar' },
          { value: 'c', label: 'Dise\u00f1o' },
          { value: 'd', label: 'Referencias' }
        ], answer: 'b' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'Para unir varias celdas en una sola se usa la opci\u00f3n "Combinar celdas".', answer: 'true' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'La intersecci\u00f3n de una fila y una columna se llama _______.', answer: 'celda' }
      ],
      tasks: [
        { id: 'c3t1', title: '📊 Crea tu horario semanal', description: 'En Word o Google Docs, crea una tabla con tu horario de clases. Columnas: Hora, Lunes, Martes, Mi\u00e9rcoles, Jueves, Viernes. Agrega todas tus materias. Aplica formato: color de fondo en encabezados, bordes visibles y alineaci\u00f3n centrada.', evidence: 'Captura de la tabla completa con formato.' },
        { id: 'c3t2', title: '💰 Tabla de presupuesto', description: 'Crea una tabla de presupuesto mensual con 4 columnas: Concepto, Presupuesto (Q), Gasto real (Q), Diferencia (Q). Agrega al menos 6 conceptos (alimentos, transporte, entretenimiento, etc.). Calcula los totales debajo de cada columna.', evidence: 'Tabla completa con totales calculados.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen \u00b7 Clase 3',
        description: 'Responde las 5 preguntas sobre tablas.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfCu\u00e1ntas columnas tiene una tabla de 3 filas por 4 columnas?', options: [
            { value: 'a', label: '3' },
            { value: 'b', label: '4' },
            { value: 'c', label: '7' },
            { value: 'd', label: '12' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfQu\u00e9 opci\u00f3n NO es un m\u00e9todo para insertar tabla en Word?', options: [
            { value: 'a', label: 'Cuadr\u00edcula' },
            { value: 'b', label: 'Insertar tabla' },
            { value: 'c', label: 'Dibujar tabla' },
            { value: 'd', label: 'Tabla desde imagen' }
          ], answer: 'd' },
          { id: 'q3', type: 'tf', prompt: 'Las filas de una tabla van en direcci\u00f3n vertical (de arriba a abajo).', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '\u00bfCu\u00e1l es la funci\u00f3n de "Combinar celdas"?', options: [
            { value: 'a', label: 'Dividir una celda en dos' },
            { value: 'b', label: 'Unir dos o m\u00e1s celdas en una sola' },
            { value: 'c', label: 'Eliminar una celda' },
            { value: 'd', label: 'Copiar una celda' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'En Google Docs, la opci\u00f3n para ajustar el formato de una tabla se encuentra en _______.', answer: 'Propiedades de la tabla' }
        ]
      }
    },
    {
      id: 'c4', num: 4, icon: '📄',
      title: 'Encabezado y pie de p\u00e1gina',
      tagline: 'Aprende a agregar encabezados, pies de p\u00e1gina y n\u00fameros de p\u00e1gina.',
      info: [
        { tag: '\u00bfQu\u00e9 son encabezado y pie de p\u00e1gina?', html: `
          <h3>📄 \u00bfQu\u00e9 son el encabezado y el pie de p\u00e1gina?</h3>
          <p>El <strong>encabezado</strong> es el \u00e1rea en la <strong>parte superior</strong> de cada p\u00e1gina. El <strong>pie de p\u00e1gina</strong> es el \u00e1rea en la <strong>parte inferior</strong>. Ambos se repiten autom\u00e1ticamente en todas las p\u00e1ginas del documento.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Encabezado</h5>
              <p>Parte superior. Suele contener: t\u00edtulo del documento, nombre del autor, logo, fecha.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Pie de p\u00e1gina</h5>
              <p>Parte inferior. Suele contener: n\u00famero de p\u00e1gina, nombre del archivo, pie de nota, fecha de impresi\u00f3n.</p>
            </div>
          </div>
          <h4>📝 Ejemplo visual</h4>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Imagen: Documento con encabezado "TAC - Tercero B\u00e1sico - Samuel" y pie de p\u00e1gina "P\u00e1gina 1 de 10"]</p>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>\u00bfPor qu\u00e9 son \u00fatiles?</strong> Porque si tu documento tiene 30 p\u00e1ginas, no tienes que escribir el t\u00edtulo en cada una: el encabezado lo hace autom\u00e1ticamente.</p>
          </div>
        `},
        { tag: 'Insertar encabezado', html: `
          <h3>🪟 C\u00f3mo insertar un encabezado en Word</h3>
          <ol>
            <li>Ve a la pesta\u00f1a <strong>Insertar</strong>.</li>
            <li>En el grupo <strong>Encabezado y pie de p\u00e1gina</strong>, haz clic en <strong>Encabezado</strong>.</li>
            <li>Elige un estilo predise\u00f1ado o selecciona <strong>Editar encabezado</strong> para personalizarlo.</li>
            <li>Escribe el contenido del encabezado (t\u00edtulo, nombre, fecha, etc.).</li>
            <li>Haz clic en <strong>Cerrar encabezado y pie de p\u00e1gina</strong> o presiona <strong>Esc</strong>.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Ve a <strong>Insertar > Encabezados y pies de p\u00e1gina > Encabezado</strong>.</li>
            <li>Se abrir\u00e1 el \u00e1rea del encabezado para que escribas.</li>
            <li>Para salir, haz clic fuera del \u00e1rea o presiona Esc.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">\u26a0\ufe0f</span>
            <p><strong>\u00a1Importante!</strong> El texto del encabezado se ve atenuado (m\u00e1s clarito) para indicar que es un \u00e1rea especial, no el cuerpo del documento. Pero al imprimir, se ve normal.</p>
          </div>
        `},
        { tag: 'Insertar pie de p\u00e1gina', html: `
          <h3>📁 C\u00f3mo insertar un pie de p\u00e1gina</h3>
          <h4>🪟 En Microsoft Word</h4>
          <ol>
            <li>Ve a la pesta\u00f1a <strong>Insertar</strong>.</li>
            <li>Haz clic en <strong>Pie de p\u00e1gina</strong>.</li>
            <li>Elige un estilo o selecciona <strong>Editar pie de p\u00e1gina</strong>.</li>
            <li>Escribe el contenido o inserta elementos como n\u00famero de p\u00e1gina.</li>
            <li>Cierra con <strong>Cerrar encabezado y pie de p\u00e1gina</strong>.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Ve a <strong>Insertar > Encabezados y pies de p\u00e1gina > Pie de p\u00e1gina</strong>.</li>
            <li>Escribe el contenido del pie.</li>
            <li>Haz clic fuera para terminar.</li>
          </ol>
          <h4>🔢 Insertar n\u00famero de p\u00e1gina</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🪟</div>
              <h5>En Word</h5>
              <p>Dentro del encabezado o pie, haz clic en <strong>N\u00famero de p\u00e1gina</strong> y elige posici\u00f3n y formato.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🌐</div>
              <h5>En Google Docs</h5>
              <p>Ve a <strong>Insertar > N\u00famero de p\u00e1gina</strong>. Puedes elegir si aparece desde la primera p\u00e1gina o no.</p>
            </div>
          </div>
        `},
        { tag: 'Configuraciones avanzadas', html: `
          <h3>🛠\ufe0f Configuraciones avanzadas</h3>
          <p>Los procesadores de texto ofrecen opciones \u00fatiles para personalizar encabezados y pies:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔟</div>
              <h5>Primera p\u00e1gina diferente</h5>
              <p>Muy usado en trabajos acad\u00e9micos: la portada no lleva encabezado ni n\u00famero de p\u00e1gina visible. En Word, marca la opci\u00f3n <strong>Primera p\u00e1gina diferente</strong> en la pesta\u00f1a <strong>Dise\u00f1o</strong> (que aparece al editar encabezado).</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>Pares e impares diferentes</h5>
              <p>Para documentos a doble cara (libros, revistas). Los encabezados pares e impares pueden ser distintos. Activa <strong>Diferentes en pares e impares</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Saltos de secci\u00f3n</h5>
              <p>Si necesitas encabezados diferentes en distintas partes del documento, usa <strong>Saltos de secci\u00f3n</strong> (Insertar > Salto de secci\u00f3n).</p>
            </div>
            <div class="grid-item">
              <div class="icon">⏰</div>
              <h5>Fecha y hora autom\u00e1tica</h5>
              <p>Dentro del encabezado/pie, ve a <strong>Insertar > Fecha y hora</strong>. Elige si quieres que se actualice autom\u00e1ticamente al abrir el documento.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Tip profesional:</strong> En Word, la pesta\u00f1a <strong>Dise\u00f1o</strong> aparece autom\u00e1ticamente cuando est\u00e1s editando el encabezado o pie. All\u00ed tienes todas las opciones: primera diferente, pares/impares, posici\u00f3n, etc.</p>
          </div>
        `},
        { tag: 'Ejemplos y buenas pr\u00e1cticas', html: `
          <h3>📝 Qu\u00e9 poner en encabezados y pies</h3>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(34,197,94,0.3)">
              <div class="icon">\u2705</div>
              <h5>Buenas pr\u00e1cticas</h5>
              <p>
                <strong>Encabezado:</strong> T\u00edtulo del documento, nombre del autor, curso.<br>
                <strong>Pie:</strong> N\u00famero de p\u00e1gina, fecha, nombre del archivo.<br>
                <strong>Fuente:</strong> Misma fuente que el cuerpo, pero m\u00e1s peque\u00f1a (10-11 pt).<br>
                <strong>Sencillez:</strong> Sin colores ni efectos exagerados.
              </p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">\u274c</div>
              <h5>Malas pr\u00e1cticas</h5>
              <p>
                <strong>No pongas:</strong> Informaci\u00f3n irrelevante, emojis en documentos formales, fuentes decorativas.<br>
                <strong>No repitas:</strong> Lo mismo en encabezado y pie.<br>
                <strong>No uses:</strong> May\u00fascula sostenida en todo el encabezado (es dif\u00edcil de leer).
              </p>
            </div>
          </div>
          <h4>📝 Ejemplo de documento acad\u00e9mico</h4>
          <div style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-family:monospace;font-size:0.9rem">
            <p style="text-align:center;color:var(--text-3)">[Imagen: Documento con encabezado "TAC - Tercero B\u00e1sico - Proyecto Final", pie con n\u00famero de p\u00e1gina centrado]</p>
          </div>
        `},
        { tag: 'Pr\u00e1ctica', html: `
          <h3>\u270f\ufe0f Vamos a practicar</h3>
          <p>Realiza los siguientes ejercicios en un documento nuevo:</p>
          <h4>📝 Ejercicio 1: Encabezado con tu nombre</h4>
          <ol>
            <li>Crea un documento nuevo.</li>
            <li>Inserta un encabezado con tu nombre completo y el curso: "TAC - Tercero B\u00e1sico - [Tu Nombre]".</li>
            <li>Escribe 3 p\u00e1rrafos de contenido (cualquier tema).</li>
          </ol>
          <h4>📝 Ejercicio 2: Pie con n\u00famero de p\u00e1gina</h4>
          <ol>
            <li>Agrega un pie de p\u00e1gina con el n\u00famero de p\u00e1gina centrado.</li>
            <li>Escribe suficiente texto para que el documento tenga al menos 3 p\u00e1ginas.</li>
          </ol>
          <h4>📝 Ejercicio 3: Primera p\u00e1gina diferente</h4>
          <ol>
            <li>Activa la opci\u00f3n <strong>Primera p\u00e1gina diferente</strong>.</li>
            <li>La primera p\u00e1gina debe tener un encabezado vac\u00edo (sin nada).</li>
            <li>Las p\u00e1ginas 2 en adelante deben mostrar el encabezado con tu nombre.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> En Word, la opci\u00f3n "Primera p\u00e1gina diferente" est\u00e1 en la pesta\u00f1a <strong>Dise\u00f1o</strong> que aparece al editar el encabezado.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Encabezado', hint: '\u00bfEn qu\u00e9 parte de la p\u00e1gina se encuentra el encabezado?' },
        { term: 'Pie de p\u00e1gina', hint: '\u00bfQu\u00e9 informaci\u00f3n se suele colocar en el pie de p\u00e1gina?' },
        { term: 'N\u00famero de p\u00e1gina', hint: '\u00bfC\u00f3mo se inserta un n\u00famero de p\u00e1gina autom\u00e1tico?' },
        { term: 'Primera p\u00e1gina diferente', hint: '\u00bfPara qu\u00e9 sirve la opci\u00f3n "Primera p\u00e1gina diferente"?' },
        { term: 'Salto de secci\u00f3n', hint: '\u00bfQu\u00e9 es un salto de secci\u00f3n y cu\u00e1ndo se usa?' },
        { term: 'Dise\u00f1o', hint: '\u00bfEn qu\u00e9 pesta\u00f1a aparecen las opciones de encabezado y pie al editarlos?' },
        { term: 'Fecha autom\u00e1tica', hint: '\u00bfC\u00f3mo se inserta la fecha actual que se actualiza sola?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '\u00bfD\u00f3nde se encuentra el encabezado en un documento?', options: [
          { value: 'a', label: 'En la parte inferior de cada p\u00e1gina' },
          { value: 'b', label: 'En la parte superior de cada p\u00e1gina' },
          { value: 'c', label: 'Solo en la primera p\u00e1gina' },
          { value: 'd', label: 'En los m\u00e1rgenes laterales' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: '\u00bfEn qu\u00e9 pesta\u00f1a de Word se inserta un encabezado?', options: [
          { value: 'a', label: 'Inicio' },
          { value: 'b', label: 'Insertar' },
          { value: 'c', label: 'Revisar' },
          { value: 'd', label: 'Vista' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'El encabezado y el pie de p\u00e1gina aparecen solo en la primera p\u00e1gina del documento.', answer: 'false' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'La opci\u00f3n para que la primera p\u00e1gina tenga un encabezado diferente se llama "Primera p\u00e1gina _______.', answer: 'diferente' }
      ],
      tasks: [
        { id: 'c4t1', title: '📄 Documento con encabezado y pie', description: 'Crea un documento sobre un tema libre (m\u00ednimo 3 p\u00e1ginas) que incluya: (1) Encabezado con t\u00edtulo del documento y tu nombre, (2) Pie de p\u00e1gina con n\u00famero de p\u00e1gina, (3) La primera p\u00e1gina (portada) sin encabezado visible.', evidence: 'Captura de las primeras 3 p\u00e1ginas mostrando encabezados y pie.' },
        { id: 'c4t2', title: '📚 Trabajo acad\u00e9mico completo', description: 'Crea un mini trabajo de investigaci\u00f3n sobre un tema de tu inter\u00e9s. Debe tener: portada sin encabezado, encabezado con t\u00edtulo del trabajo en las p\u00e1ginas interiores, pie con n\u00famero de p\u00e1gina, al menos 2 secciones con diferentes encabezados usando saltos de secci\u00f3n.', evidence: 'Documento completo mostrando las diferentes secciones.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen \u00b7 Clase 4',
        description: 'Responde las 5 preguntas sobre encabezado y pie de p\u00e1gina.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfQu\u00e9 elemento suele colocarse en el pie de p\u00e1gina?', options: [
            { value: 'a', label: 'El t\u00edtulo del documento' },
            { value: 'b', label: 'El n\u00famero de p\u00e1gina' },
            { value: 'c', label: 'El logo de la empresa' },
            { value: 'd', label: 'Las im\u00e1genes' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfC\u00f3mo se llama la opci\u00f3n que permite que la portada no tenga encabezado?', options: [
            { value: 'a', label: 'Portada diferente' },
            { value: 'b', label: 'Primera p\u00e1gina diferente' },
            { value: 'c', label: 'Encabezado \u00fanico' },
            { value: 'd', label: 'Ocultar encabezado' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Para salir del modo de edici\u00f3n de encabezado, puedes presionar la tecla Esc.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '\u00bfQu\u00e9 te permite hacer un "Salto de secci\u00f3n"?', options: [
            { value: 'a', label: 'Cambiar el tipo de letra' },
            { value: 'b', label: 'Tener encabezados diferentes en partes del documento' },
            { value: 'c', label: 'Insertar una imagen' },
            { value: 'd', label: 'Guardar el documento' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'El \u00e1rea en la parte inferior de cada p\u00e1gina que se repite autom\u00e1ticamente se llama pie de _______.', answer: 'p\u00e1gina' }
        ]
      }
    },
    {
      id: 'c5', num: 5, icon: '\u270f\ufe0f',
      title: 'Revisi\u00f3n ortogr\u00e1fica autom\u00e1tica',
      tagline: 'Aprende a usar el corrector ortogr\u00e1fico, la gram\u00e1tica y la autocorrecci\u00f3n.',
      info: [
        { tag: '\u00bfQu\u00e9 es la revisi\u00f3n ortogr\u00e1fica?', html: `
          <h3>\u270f\ufe0f \u00bfQu\u00e9 es la revisi\u00f3n ortogr\u00e1fica autom\u00e1tica?</h3>
          <p>Los procesadores de texto incluyen herramientas que <strong>revisan autom\u00e1ticamente</strong> la ortograf\u00eda y la gram\u00e1tica mientras escribes. Te ayudan a detectar errores y mejorar la calidad de tus documentos.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📖</div>
              <h5>Corrector ortogr\u00e1fico</h5>
              <p>Revisa que cada palabra est\u00e9 escrita correctamente seg\u00fan el diccionario del idioma. Las palabras mal escritas aparecen con <span style="color:red"><strong>subrayado rojo</strong></span>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Corrector gramatical</h5>
              <p>Revisa la estructura de las oraciones: concordancia, tiempos verbales, puntuaci\u00f3n. Los errores gramaticales aparecen con <span style="color:blue"><strong>subrayado azul</strong></span>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">\u2699\ufe0f</div>
              <h5>Autocorrecci\u00f3n</h5>
              <p>Corrige errores comunes autom\u00e1ticamente mientras escribes, sin que tengas que hacer nada. Por ejemplo, "hola" se corrige a "Hola" al inicio de una oraci\u00f3n.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Sin\u00f3nimos</h5>
              <p>Los procesadores incluyen un diccionario de sin\u00f3nimos para ayudarte a variar el lenguaje y evitar repeticiones.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>\u00bfSab\u00edas que?</strong> Word revisa autom\u00e1ticamente mientras escribes, pero tambi\u00e9n puedes hacer una revisi\u00f3n completa con la tecla <strong>F7</strong>.</p>
          </div>
        `},
        { tag: 'Corrector en Word', html: `
          <h3>🪟 Corrector ortogr\u00e1fico y gramatical en Word</h3>
          <p>Word tiene dos formas de revisar tu texto:</p>
          <h4>🔄 Revisi\u00f3n autom\u00e1tica mientras escribes</h4>
          <ul>
            <li><span style="color:red"><strong>Subrayado rojo ondulado:</strong></span> Error ortogr\u00e1fico (palabra mal escrita).</li>
            <li><span style="color:blue"><strong>Subrayado azul ondulado:</strong></span> Error gramatical (concordancia, puntuaci\u00f3n, estilo).</li>
            <li><span style="color:green"><strong>Subrayado verde ondulado:</strong></span> Problema de estilo o claridad (solo en versiones recientes).</li>
          </ul>
          <p>Haz clic derecho sobre una palabra subrayada para ver sugerencias de correcci\u00f3n.</p>
          <h4>🔑 Revisi\u00f3n completa con F7</h4>
          <ol>
            <li>Presiona la tecla <strong>F7</strong> en tu teclado.</li>
            <li>Word revisar\u00e1 todo el documento de principio a fin.</li>
            <li>Por cada error, te mostrar\u00e1 sugerencias. Puedes: <strong>Cambiar</strong>, <strong>Cambiar todas</strong>, <strong>Omitir una vez</strong>, <strong>Omitir todas</strong> o <strong>Agregar al diccionario</strong>.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">\u26a0\ufe0f</span>
            <p><strong>\u00a1Cuidado!</strong> El corrector autom\u00e1tico no es perfecto. Puede marcar como error palabras correctas (como nombres propios o tecnicismos) y puede dejar pasar errores que suenan bien pero est\u00e1n mal escritos.</p>
          </div>
        `},
        { tag: 'Corrector en Google Docs', html: `
          <h3>🌐 Corrector ortogr\u00e1fico en Google Docs</h3>
          <p>Google Docs tambi\u00e9n revisa la ortograf\u00eda y gram\u00e1tica mientras escribes:</p>
          <h4>🔄 Revisi\u00f3n autom\u00e1tica</h4>
          <ul>
            <li><span style="color:red"><strong>Subrayado rojo:</strong></span> Error ortogr\u00e1fico.</li>
            <li><span style="color:orange"><strong>Subrayado naranja (discontinuo):</strong></span> Error gramatical o de estilo.</li>
          </ul>
          <p>Haz clic derecho sobre la palabra subrayada para ver sugerencias.</p>
          <h4>🔍 Revisi\u00f3n completa</h4>
          <ol>
            <li>Ve a <strong>Herramientas > Ortograf\u00eda > Revisi\u00f3n ortogr\u00e1fica</strong>.</li>
            <li>O presiona <strong>Ctrl + Alt + X</strong> (Windows) / <strong>Cmd + Alt + X</strong> (Mac).</li>
            <li>Se abrir\u00e1 un panel lateral con los errores encontrados. Puedes: <strong>Aceptar</strong>, <strong>Ignorar</strong> o <strong>Agregar al diccionario personal</strong>.</li>
          </ol>
          <h4>💡 Modo de sugerencias (solo Google Docs)</h4>
          <p>Google Docs tiene un <strong>Modo de sugerencias</strong> que permite a los revisores hacer cambios que el autor puede aceptar o rechazar. Es ideal para trabajos colaborativos.</p>
        `},
        { tag: 'Autocorrecci\u00f3n', html: `
          <h3>\u2699\ufe0f Autocorrecci\u00f3n: corrige mientras escribes</h3>
          <p>La <strong>autocorrecci\u00f3n</strong> es una funci\u00f3n que reemplaza autom\u00e1ticamente errores comunes mientras escribes. Por ejemplo, escribe "advinar" y se corregir\u00e1 a "adivinar".</p>
          <h4>🪟 En Word</h4>
          <ul>
            <li>Ve a <strong>Archivo > Opciones > Revisi\u00f3n > Opciones de autocorrecci\u00f3n</strong>.</li>
            <li>Ah\u00ed ver\u00e1s una lista de correcciones autom\u00e1ticas: "aunk" se convierte en "aunque", "xq" en "por qu\u00e9".</li>
            <li>Puedes <strong>agregar tus propias entradas</strong>. Por ejemplo, si escribes "tac" que se convierta autom\u00e1ticamente en "Tecnolog\u00edas de Aprendizaje".</li>
          </ul>
          <h4>🌐 En Google Docs</h4>
          <ul>
            <li>Ve a <strong>Herramientas > Preferencias > Sustituci\u00f3n autom\u00e1tica</strong>.</li>
            <li>Aqu\u00ed puedes agregar o quitar sustituciones autom\u00e1ticas.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Tip \u00fatil:</strong> Puedes crear tus propias abreviaturas. Por ejemplo, configura "tc" para que se convierta en "Tecnolog\u00eda de la Informaci\u00f3n". \u00a1Te ahorrar\u00e1 mucho tiempo!</p>
          </div>
        `},
        { tag: 'Sin\u00f3nimos y diccionario', html: `
          <h3>🔍 Diccionario de sin\u00f3nimos</h3>
          <p>Para evitar repetir la misma palabra muchas veces, usa el <strong>diccionario de sin\u00f3nimos</strong>:</p>
          <h4>🪟 En Word</h4>
          <ol>
            <li>Selecciona la palabra que quieres reemplazar.</li>
            <li>Haz clic derecho y elige <strong>Sin\u00f3nimos</strong>.</li>
            <li>Aparecer\u00e1 una lista de palabras con significado similar.</li>
            <li>Tambi\u00e9n puedes ir a <strong>Revisar > Diccionario de sin\u00f3nimos</strong> o presionar <strong>Shift + F7</strong>.</li>
          </ol>
          <h4>🌐 En Google Docs</h4>
          <ol>
            <li>Selecciona la palabra.</li>
            <li>Ve a <strong>Herramientas > Diccionario</strong>.</li>
            <li>Se abrir\u00e1 un panel lateral con definiciones y sin\u00f3nimos.</li>
          </ol>
          <h4>📚 Agregar palabras al diccionario</h4>
          <p>Si el corrector marca como error una palabra que est\u00e1 bien escrita (como tu apellido o un t\u00e9rmino t\u00e9cnico), puedes <strong>Agregarla al diccionario</strong>. As\u00ed el corrector no la marcar\u00e1 m\u00e1s.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Ejemplo:</strong> "Quetzalcoatl" es una palabra correcta, pero el corrector la marcar\u00e1 como error. Agr\u00e9gala al diccionario y ya no volver\u00e1 a marcarla.</p>
          </div>
        `},
        { tag: 'Pr\u00e1ctica integral', html: `
          <h3>\u270f\ufe0f Vamos a practicar la revisi\u00f3n ortogr\u00e1fica</h3>
          <h4>📝 Ejercicio 1: Corrige el texto</h4>
          <div class="slide-warn">
            <span class="icon">\u26a0\ufe0f</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El lunes prazado fui al parque con mis amingos. Jugamos futbol toda la tarde y despues comimos una pizza deliziosa. El martes yniciamos las tareas del colegio. Mi profesor dijo que ubiera estudiao mas para el ex\u00e1men de matem\u00e1ticas. Aunque no me fue tan mal."
            </p>
          </div>
          <ol>
            <li>Copia el texto en Word o Google Docs.</li>
            <li>Observa las palabras subrayadas en rojo (ortograf\u00eda).</li>
            <li>Haz clic derecho en cada una y elige la correcci\u00f3n correcta.</li>
            <li>\u00bfHay errores gramaticales (subrayado azul)?</li>
            <li>Anota cu\u00e1ntos errores encontraste.</li>
          </ol>
          <h4>📝 Ejercicio 2: Mejora el vocabulario</h4>
          <p>Escribe una oraci\u00f3n que use la palabra "importante". Luego usa el diccionario de sin\u00f3nimos para reemplazarla por 3 palabras diferentes: "fundamental", "esencial", "trascendental".</p>
          <h4>📝 Ejercicio 3: Agrega al diccionario</h4>
          <p>Escribe tu nombre y apellido en el documento. Si el corrector los marca como error, agr\u00e9galos al diccionario para que no vuelvan a aparecer subrayados.</p>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Recuerda:</strong> El corrector ortogr\u00e1fico es una herramienta de ayuda, pero siempre debes leer tu texto antes de entregarlo. La m\u00e1quina no entiende contexto ni intenci\u00f3n.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Ortograf\u00eda', hint: '\u00bfQu\u00e9 diferencia hay entre el corrector ortogr\u00e1fico y el gramatical?' },
        { term: 'Subrayado rojo', hint: '\u00bfQu\u00e9 significa el subrayado rojo ondulado en Word?' },
        { term: 'Subrayado azul', hint: '\u00bfQu\u00e9 tipo de error marca el subrayado azul?' },
        { term: 'F7', hint: '\u00bfQu\u00e9 hace la tecla F7 en Word?' },
        { term: 'Autocorrecci\u00f3n', hint: '\u00bfC\u00f3mo se agrega una entrada personalizada de autocorrecci\u00f3n en Word?' },
        { term: 'Sin\u00f3nimos', hint: '\u00bfCu\u00e1l es el atajo de teclado para abrir el diccionario de sin\u00f3nimos en Word?' },
        { term: 'Diccionario personal', hint: '\u00bfPor qu\u00e9 es \u00fatil agregar palabras al diccionario personal?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '\u00bfQu\u00e9 significa el subrayado ROJO ondulado en Word?', options: [
          { value: 'a', label: 'Error gramatical' },
          { value: 'b', label: 'Error ortogr\u00e1fico (palabra mal escrita)' },
          { value: 'c', label: 'Problema de formato' },
          { value: 'd', label: 'Comentario de un revisor' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: '\u00bfQu\u00e9 tecla abre la revisi\u00f3n ortogr\u00e1fica completa en Word?', options: [
          { value: 'a', label: 'F1' },
          { value: 'b', label: 'F5' },
          { value: 'c', label: 'F7' },
          { value: 'd', label: 'F12' }
        ], answer: 'c' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'La autocorrecci\u00f3n permite crear entradas personalizadas para que ciertas palabras se corrijan autom\u00e1ticamente.', answer: 'true' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'En Word, el atajo de teclado para abrir el diccionario de sin\u00f3nimos es Shift + _______.', answer: 'F7' }
      ],
      tasks: [
        { id: 'c5t1', title: '\u270f\ufe0f Corrige un texto con errores', description: 'Escribe un p\u00e1rrafo de al menos 100 palabras que contenga 5 errores ortogr\u00e1ficos intencionales y 2 errores gramaticales. Luego, usa el corrector de Word o Google Docs para encontrar y corregir todos los errores. Anota cu\u00e1ntos errores encontr\u00f3 el corrector y si encontr\u00f3 todos los que pusiste.', evidence: 'Antes y despu\u00e9s del texto, mostrando los errores encontrados.' },
        { id: 'c5t2', title: '🔍 Crea una lista de autocorrecci\u00f3n', description: 'Investiga y configura 5 entradas de autocorrecci\u00f3n \u00fatiles para tus estudios. Por ejemplo: "xq" se convierta en "por qu\u00e9", "xfa" en "por favor", "tmb" en "tambi\u00e9n". Explica cada una y muestra la configuraci\u00f3n.', evidence: 'Captura de la ventana de opciones de autocorrecci\u00f3n con tus 5 entradas.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen \u00b7 Clase 5',
        description: 'Responde las 5 preguntas sobre revisi\u00f3n ortogr\u00e1fica.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfQu\u00e9 color de subrayado se usa para errores ortogr\u00e1ficos en Word?', options: [
            { value: 'a', label: 'Azul' },
            { value: 'b', label: 'Rojo' },
            { value: 'c', label: 'Verde' },
            { value: 'd', label: 'Naranja' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfQu\u00e9 hace la autocorrecci\u00f3n?', options: [
            { value: 'a', label: 'Corrige errores autom\u00e1ticamente mientras escribes' },
            { value: 'b', label: 'Cuenta las palabras del documento' },
            { value: 'c', label: 'Cambia el idioma del documento' },
            { value: 'd', label: 'Inserta im\u00e1genes' }
          ], answer: 'a' },
          { id: 'q3', type: 'tf', prompt: 'El corrector ortogr\u00e1fico autom\u00e1tico es 100% confiable y nunca se equivoca.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '\u00bfD\u00f3nde se encuentra la opci\u00f3n de autocorrecci\u00f3n en Word?', options: [
            { value: 'a', label: 'En la pesta\u00f1a Inicio' },
            { value: 'b', label: 'En Archivo > Opciones > Revisi\u00f3n' },
            { value: 'c', label: 'En la pesta\u00f1a Insertar' },
            { value: 'd', label: 'En la barra de estado' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La tecla que abre la revisi\u00f3n ortogr\u00e1fica completa en Word es _______.', answer: 'F7' }
        ]
      }
    },
    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Proyecto integrador + Examen final',
      tagline: 'Aplica todo lo aprendido en un proyecto completo y demuestra tus conocimientos.',
      info: [
        { tag: 'Resumen del curso', html: `
          <h3>🎓 \u00a1Llegaste a la \u00faltima clase!</h3>
          <p>Felicitaciones por llegar hasta aqu\u00ed. Repasemos todo lo que aprendimos en este curso de <strong>procesamiento de textos</strong>:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Clase 1: Introducci\u00f3n</h5>
              <p>Procesadores de texto, interfaz de Word y Google Docs, crear y guardar documentos, atajos de teclado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Clase 2: Listas</h5>
              <p>Listas con vi\u00f1etas, numeradas y multinivel. Personalizar s\u00edmbolos, Tab y Shift + Tab para niveles.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Clase 3: Tablas</h5>
              <p>Crear, modificar y formatear tablas. Filas, columnas, celdas, combinar celdas, estilos de tabla.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Clase 4: Encabezado y pie</h5>
              <p>Encabezados, pies de p\u00e1gina, n\u00fameros de p\u00e1gina, primera p\u00e1gina diferente, saltos de secci\u00f3n.</p>
            </div>
            <div class="grid-item">
              <div class="icon">\u270f\ufe0f</div>
              <h5>Clase 5: Ortograf\u00eda</h5>
              <p>Corrector ortogr\u00e1fico (F7), subrayados rojo/azul, autocorrecci\u00f3n, diccionario de sin\u00f3nimos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏆</div>
              <h5>Clase 6: Proyecto final</h5>
              <p>Integrar todo en un proyecto completo y presentar el examen final.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo cumplido:</strong> Ahora sabes crear documentos profesionales con listas, tablas, encabezados, pies de p\u00e1gina y revisi\u00f3n ortogr\u00e1fica en Word y Google Docs.</p>
          </div>
        `},
        { tag: 'Proyecto integrador', html: `
          <h3>🏆 Proyecto integrador: Revista escolar</h3>
          <p>Tu proyecto final consiste en crear una <strong>revista escolar digital</strong> de 4 p\u00e1ginas que demuestre todo lo aprendido.</p>
          <h4>📝 Requisitos del proyecto</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>P\u00e1gina 1: Portada</h5>
              <p>T\u00edtulo de la revista, nombre del autor, fecha. Sin encabezado visible (primera p\u00e1gina diferente).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>P\u00e1gina 2: Noticia principal</h5>
              <p>Un art\u00edculo con t\u00edtulo, 3 p\u00e1rrafos y una lista con vi\u00f1etas de datos importantes.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>P\u00e1gina 3: Tabla informativa</h5>
              <p>Una tabla con datos comparativos (ej: "Los 5 pa\u00edses m\u00e1s poblados"). Incluye encabezados con color de fondo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>P\u00e1gina 4: Opini\u00f3n</h5>
              <p>Art\u00edculo de opini\u00f3n con lista numerada de argumentos. Pie de p\u00e1gina con n\u00famero de p\u00e1gina.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">\u2728</span>
            <p><strong>Entrega:</strong> Guarda el archivo como <code>Revista_TuNombre_TerceroB.docx</code> y env\u00edalo a tu profesor. Aseg\u00farate de que el nombre del archivo siga las reglas de nomenclatura que aprendimos.</p>
          </div>
        `},
        { tag: 'Consejos para el examen final', html: `
          <h3>💡 Consejos para el examen final</h3>
          <p>El examen final tiene <strong>15 preguntas</strong> que cubren todos los temas del curso. Necesitas al menos <strong>60% (9 respuestas correctas)</strong> para aprobar.</p>
          <ul>
            <li><strong>Lee cada pregunta con calma.</strong> Tienes todo el tiempo que necesites.</li>
            <li><strong>Si no sabes una respuesta, pasa a la siguiente.</strong> No te detengas en una sola pregunta.</li>
            <li><strong>En las preguntas de opci\u00f3n m\u00faltiple (mc),</strong> descarta primero las opciones incorrectas. As\u00ed reduces las posibilidades.</li>
            <li><strong>En las de verdadero/falso (tf),</strong> piensa: \u00bfes 100% verdad o 100% falso? Si hay alguna excepci\u00f3n, es falso.</li>
            <li><strong>En las de completar (fill),</strong> escribe una sola palabra o frase corta. Relee la frase completa con tu respuesta.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">📚</span>
            <p><strong>Repasa estos temas:</strong> Interfaz de Word y Google Docs, listas (vi\u00f1etas, numeradas, multinivel), tablas (crear, modificar, formato), encabezado y pie de p\u00e1gina, revisi\u00f3n ortogr\u00e1fica (F7, subrayados, autocorrecci\u00f3n).</p>
          </div>
        `},
        { tag: '\u00a1Lo lograste!', html: `
          <h3>🏆 \u00a1Felicidades por completar el curso!</h3>
          <p>Al terminar este curso, has aprendido habilidades valios\u00edsimas para tu vida acad\u00e9mica y profesional. Ahora puedes:</p>
          <ul>
            <li>Crear documentos en <strong>Word y Google Docs</strong> con confianza.</li>
            <li>Organizar informaci\u00f3n con <strong>listas con vi\u00f1etas, numeradas y multinivel</strong>.</li>
            <li>Dise\u00f1ar <strong>tablas profesionales</strong> con formato y estilo.</li>
            <li>Agregar <strong>encabezados, pies de p\u00e1gina y n\u00fameros de p\u00e1gina</strong>.</li>
            <li>Usar el <strong>corrector ortogr\u00e1fico y gramatical</strong> para mejorar tu escritura.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">💡</span>
            <p><strong>Sigue practicando:</strong> La pr\u00e1ctica hace al maestro. Crea documentos para tus otras materias, usa listas y tablas en tus trabajos, y siempre revisa la ortograf\u00eda antes de entregar. \u00a1T\u00fa puedes!</p>
          </div>
          <h4>🌍 \u00bfQu\u00e9 sigue despu\u00e9s?</h4>
          <p>En los pr\u00f3ximos cursos de TAC aprender\u00e1s temas m\u00e1s avanzados como: hojas de c\u00e1lculo (Excel/Sheets), presentaciones (PowerPoint/Slides), im\u00e1genes y gr\u00e1ficos, y trabajo colaborativo en la nube. \u00a1Nos vemos!</p>
        `}
      ],
      keywords: [
        { term: 'Procesador de textos', hint: '\u00bfCu\u00e1l es la diferencia entre Word y Google Docs?' },
        { term: 'Lista multinivel', hint: '\u00bfQu\u00e9 tecla crea un sub-nivel y cu\u00e1l lo disminuye?' },
        { term: 'Tabla', hint: '\u00bfCu\u00e1ntos m\u00e9todos de insertar tabla conoces?' },
        { term: 'Encabezado', hint: '\u00bfC\u00f3mo se hace que la primera p\u00e1gina tenga un encabezado diferente?' },
        { term: 'Corrector ortogr\u00e1fico', hint: '\u00bfQu\u00e9 significan los subrayados rojo y azul en Word?' },
        { term: 'F7', hint: '\u00bfQu\u00e9 funci\u00f3n cumple la tecla F7 en Word?' },
        { term: 'Proyecto final', hint: '\u00bfQu\u00e9 elementos debe incluir tu revista escolar?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '\u00bfCu\u00e1l de estos NO es un procesador de textos?', options: [
          { value: 'a', label: 'Microsoft Word' },
          { value: 'b', label: 'Google Docs' },
          { value: 'c', label: 'Microsoft Excel' },
          { value: 'd', label: 'LibreOffice Writer' }
        ], answer: 'c' },
        { id: 'c6e2', n: 2, type: 'mc', prompt: '\u00bfQu\u00e9 tecla se usa para abrir la revisi\u00f3n ortogr\u00e1fica completa en Word?', options: [
          { value: 'a', label: 'F1' },
          { value: 'b', label: 'F7' },
          { value: 'c', label: 'F10' },
          { value: 'd', label: 'F12' }
        ], answer: 'b' },
        { id: 'c6e3', n: 3, type: 'tf', prompt: 'En una lista multinivel, Shift + Tab aumenta el nivel del elemento.', answer: 'false' },
        { id: 'c6e4', n: 4, type: 'fill', prompt: 'La opci\u00f3n para que la portada no tenga encabezado se llama "Primera p\u00e1gina _______.', answer: 'diferente' }
      ],
      tasks: [
        { id: 'c6t1', title: '🏆 Proyecto integrador: Revista escolar', description: 'Crea una revista escolar de 4 p\u00e1ginas siguiendo los requisitos de la clase. Incluye: portada sin encabezado, art\u00edculo con listas, tabla informativa con formato, art\u00edculo de opini\u00f3n con lista numerada. Agrega encabezados y pies de p\u00e1gina en las p\u00e1ginas 2-4. Usa corrector ortogr\u00e1fico antes de entregar.', evidence: 'Documento completo de 4 p\u00e1ginas en Word o Google Docs.' },
        { id: 'c6t2', title: '📚 Autoevaluaci\u00f3n del curso', description: 'Escribe un documento de 1 p\u00e1gina (con encabezado y pie) respondiendo: (1) \u00bfQu\u00e9 fue lo m\u00e1s \u00fatil que aprendiste? (2) \u00bfQu\u00e9 tema te gustar\u00eda profundizar? (3) \u00bfC\u00f3mo aplicar\u00e1s estos conocimientos en tus otras materias? Agrega una lista con vi\u00f1etas de 3 metas para seguir mejorando.', evidence: 'Documento con tu reflexi\u00f3n y metas.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen \u00b7 Clase 6',
        description: 'Repaso final antes del examen acumulativo.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '\u00bfQu\u00e9 extensi\u00f3n tienen los archivos de Microsoft Word?', options: [
            { value: 'a', label: '.pdf' },
            { value: 'b', label: '.docx' },
            { value: 'c', label: '.xlsx' },
            { value: 'd', label: '.txt' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '\u00bfQu\u00e9 color de subrayado indica un error ortogr\u00e1fico en Word?', options: [
            { value: 'a', label: 'Azul' },
            { value: 'b', label: 'Rojo' },
            { value: 'c', label: 'Verde' },
            { value: 'd', label: 'Naranja' }
          ], answer: 'b' },
          { id: 'q3', type: 'mc', prompt: '\u00bfD\u00f3nde se encuentra el bot\u00f3n para insertar una tabla en Word?', options: [
            { value: 'a', label: 'Pesta\u00f1a Inicio' },
            { value: 'b', label: 'Pesta\u00f1a Insertar' },
            { value: 'c', label: 'Pesta\u00f1a Dise\u00f1o' },
            { value: 'd', label: 'Pesta\u00f1a Revisar' }
          ], answer: 'b' },
          { id: 'q4', type: 'tf', prompt: 'En Google Docs, los documentos se guardan autom\u00e1ticamente en Google Drive.', answer: 'true' },
          { id: 'q5', type: 'fill', prompt: 'En una tabla, las divisiones verticales se llaman _______.', answer: 'columnas' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final \u00b7 Tercero B\u00e1sico',
        description: '15 preguntas cubriendo los 5 temas del curso. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Introducci\u00f3n) \u00bfCu\u00e1l de estos es un procesador de textos?', options: [{ value: 'a', label: 'Adobe Photoshop' }, { value: 'b', label: 'Microsoft Word' }, { value: 'c', label: 'Google Chrome' }, { value: 'd', label: 'Windows Media Player' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Introducci\u00f3n) \u00bfCu\u00e1l es el atajo para guardar un documento en Windows?', options: [{ value: 'a', label: 'Ctrl + G' }, { value: 'b', label: 'Ctrl + N' }, { value: 'c', label: 'Ctrl + S' }, { value: 'd', label: 'Ctrl + P' }], answer: 'c' },
          { id: 'f3', type: 'tf', prompt: 'Tema 1 (Introducci\u00f3n) En Google Docs, los documentos se guardan autom\u00e1ticamente en la nube.', answer: 'true' },
          { id: 'f4', type: 'mc', prompt: 'Tema 2 (Listas) \u00bfQu\u00e9 tipo de lista usar\u00edas para los pasos de una receta?', options: [{ value: 'a', label: 'Lista con vi\u00f1etas' }, { value: 'b', label: 'Lista numerada' }, { value: 'c', label: 'Lista multinivel' }, { value: 'd', label: 'Lista de definiciones' }], answer: 'b' },
          { id: 'f5', type: 'mc', prompt: 'Tema 2 (Listas) \u00bfQu\u00e9 tecla se usa para crear un sub-nivel en una lista?', options: [{ value: 'a', label: 'Enter' }, { value: 'b', label: 'Espacio' }, { value: 'c', label: 'Tab' }, { value: 'd', label: 'Shift' }], answer: 'c' },
          { id: 'f6', type: 'tf', prompt: 'Tema 2 (Listas) Las listas con vi\u00f1etas se usan cuando el orden de los elementos es importante.', answer: 'false' },
          { id: 'f7', type: 'mc', prompt: 'Tema 3 (Tablas) \u00bfC\u00f3mo se llama cada casilla dentro de una tabla?', options: [{ value: 'a', label: 'Fila' }, { value: 'b', label: 'Columna' }, { value: 'c', label: 'Celda' }, { value: 'd', label: 'Margen' }], answer: 'c' },
          { id: 'f8', type: 'mc', prompt: 'Tema 3 (Tablas) \u00bfEn qu\u00e9 pesta\u00f1a de Word se inserta una tabla?', options: [{ value: 'a', label: 'Inicio' }, { value: 'b', label: 'Insertar' }, { value: 'c', label: 'Revisar' }, { value: 'd', label: 'Vista' }], answer: 'b' },
          { id: 'f9', type: 'mc', prompt: 'Tema 3 (Tablas) \u00bfQu\u00e9 hace la opci\u00f3n "Combinar celdas"?', options: [{ value: 'a', label: 'Divide una celda en dos' }, { value: 'b', label: 'Une varias celdas en una sola' }, { value: 'c', label: 'Elimina una celda' }, { value: 'd', label: 'Cambia el color de la celda' }], answer: 'b' },
          { id: 'f10', type: 'mc', prompt: 'Tema 4 (Encabezado/Pie) \u00bfD\u00f3nde se encuentra el encabezado en un documento?', options: [{ value: 'a', label: 'En la parte inferior de cada p\u00e1gina' }, { value: 'b', label: 'En la parte superior de cada p\u00e1gina' }, { value: 'c', label: 'Solo en la \u00faltima p\u00e1gina' }, { value: 'd', label: 'En los m\u00e1rgenes laterales' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Encabezado/Pie) \u00bfQu\u00e9 funci\u00f3n tiene "Primera p\u00e1gina diferente"?', options: [{ value: 'a', label: 'Cambia el tipo de letra de la primera p\u00e1gina' }, { value: 'b', label: 'Permite que la portada tenga un encabezado distinto o ninguno' }, { value: 'c', label: 'Elimina la primera p\u00e1gina' }, { value: 'd', label: 'Agrega un borde a la primera p\u00e1gina' }], answer: 'b' },
          { id: 'f12', type: 'tf', prompt: 'Tema 4 (Encabezado/Pie) El pie de p\u00e1gina aparece en la parte superior de cada p\u00e1gina.', answer: 'false' },
          { id: 'f13', type: 'mc', prompt: 'Tema 5 (Ortograf\u00eda) \u00bfQu\u00e9 tecla abre la revisi\u00f3n ortogr\u00e1fica completa en Word?', options: [{ value: 'a', label: 'F1' }, { value: 'b', label: 'F5' }, { value: 'c', label: 'F7' }, { value: 'd', label: 'F12' }], answer: 'c' },
          { id: 'f14', type: 'mc', prompt: 'Tema 5 (Ortograf\u00eda) \u00bfQu\u00e9 significa el subrayado rojo ondulado en Word?', options: [{ value: 'a', label: 'Error gramatical' }, { value: 'b', label: 'Error ortogr\u00e1fico' }, { value: 'c', label: 'Problema de formato' }, { value: 'd', label: 'Comentario de un revisor' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general \u00bfC\u00f3mo se llama el espacio en blanco al inicio de la primera l\u00ednea de un p\u00e1rrafo?', answer: 'sangr\u00eda' }
        ]
      }
    }
  ]
};
