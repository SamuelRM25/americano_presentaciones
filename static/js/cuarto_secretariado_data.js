const COURSE_DATA = {
  grade: 'cuarto_secretariado',
  title: 'Computación I · Cuarto Secretariado',
  subtitle: 'Archivos, digitalización, correo electrónico y agenda digital',
  classes: [
    {
      id: 'c1', num: 1, icon: '📁',
      title: 'Gestión de archivos y carpetas en Windows',
      tagline: 'Aprende a organizar, crear, copiar, mover y eliminar archivos en el explorador de Windows.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 ¡Bienvenido a Computación I, Cuarto Secretariado!</h3>
          <p>Este curso te preparará en <strong>4 habilidades digitales esenciales</strong> para el entorno de oficina:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Archivos</h5>
              <p>Organización y gestión de carpetas en Windows.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Digitalización</h5>
              <p>OCR y escaneo de documentos para convertir papel en texto.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✉️</div>
              <h5>Correo electrónico</h5>
              <p>Organización profesional de bandeja de entrada.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Agenda digital</h5>
              <p>Calendarios, eventos, recordatorios y organización del tiempo.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases serás capaz de manejar un flujo de trabajo digital completo: digitalizar documentos, organizarlos en carpetas, enviarlos por correo electrónico y gestionar tu agenda.</p>
          </div>
        `},
        { tag: 'Explorador de archivos', html: `
          <h3>📂 El Explorador de archivos de Windows</h3>
          <p>El <strong>Explorador de archivos</strong> (File Explorer) es la herramienta principal para navegar, organizar y administrar archivos y carpetas en Windows.</p>
          <h4>🔑 Partes principales del Explorador</h4>
          <ul>
            <li><strong>Barra de direcciones:</strong> muestra la ruta de la carpeta actual. Ej: <code>Este equipo &gt; Documentos &gt; Secretariado</code>.</li>
            <li><strong>Panel de navegación:</strong> a la izquierda, muestra accesos rápidos: Escritorio, Descargas, Documentos, Este equipo.</li>
            <li><strong>Área de contenido:</strong> muestra los archivos y carpetas de la ubicación actual.</li>
            <li><strong>Barra de búsqueda:</strong> permite buscar archivos por nombre, tipo o contenido.</li>
            <li><strong>Cinta de opciones:</strong> barra superior con acciones como Copiar, Pegar, Eliminar, Renombrar.</li>
          </ul>
          <h4>⌨️ Atajos esenciales</h4>
          <ul>
            <li><strong>Ctrl + C:</strong> copiar archivo/carpeta seleccionado.</li>
            <li><strong>Ctrl + X:</strong> cortar archivo/carpeta.</li>
            <li><strong>Ctrl + V:</strong> pegar archivo/carpeta.</li>
            <li><strong>F2:</strong> renombrar archivo/carpeta seleccionado.</li>
            <li><strong>Supr / Del:</strong> eliminar archivo/carpeta (va a la Papelera).</li>
            <li><strong>Ctrl + Z:</strong> deshacer la última acción.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Puedes seleccionar múltiples archivos con <strong>Ctrl + clic</strong> (archivos no contiguos) o <strong>Shift + clic</strong> (archivos contiguos).</p>
          </div>
        `},
        { tag: 'Crear y organizar carpetas', html: `
          <h3>📁 Crear, copiar, mover y eliminar carpetas</h3>
          <h4>🆕 Crear una carpeta nueva</h4>
          <ol>
            <li>Abre el Explorador de archivos y navega al lugar donde quieras la carpeta.</li>
            <li>Haz clic derecho en un espacio vacío → <strong>Nuevo → Carpeta</strong>.</li>
            <li>Escribe el nombre de la carpeta y presiona <strong>Enter</strong>.</li>
          </ol>
          <h4>📋 Copiar y mover archivos</h4>
          <ul>
            <li><strong>Copiar:</strong> selecciona el archivo, presiona <strong>Ctrl + C</strong>, ve al destino y presiona <strong>Ctrl + V</strong>.</li>
            <li><strong>Mover:</strong> selecciona el archivo, presiona <strong>Ctrl + X</strong>, ve al destino y presiona <strong>Ctrl + V</strong>.</li>
            <li><strong>Arrastrar:</strong> también puedes arrastrar el archivo de una carpeta a otra para moverlo. Si mantienes presionado <strong>Ctrl</strong> mientras arrastras, se copia en vez de moverse.</li>
          </ul>
          <h4>🗑️ Eliminar archivos</h4>
          <ul>
            <li>Selecciona el archivo y presiona <strong>Supr</strong> (o Delete).</li>
            <li>El archivo se mueve a la <strong>Papelera de reciclaje</strong>, donde puedes recuperarlo si fue un error.</li>
            <li>Para eliminar definitivamente, vacía la Papelera o usa <strong>Shift + Supr</strong> (con cuidado).</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>IMPORTANTE:</strong> Siempre verifica que estás eliminando el archivo correcto. Una vez vaciada la Papelera, los archivos eliminados no se pueden recuperar fácilmente.</p>
          </div>
        `},
        { tag: 'Extensiones de archivo', html: `
          <h3>🔤 Extensiones de archivo: ¿qué son y por qué importan?</h3>
          <p>La <strong>extensión</strong> es la parte del nombre del archivo que va después del punto (<code>.</code>). Le indica a Windows qué programa debe usar para abrirlo.</p>
          <h4>📋 Extensiones más comunes</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>.docx</h5>
              <p>Documento de Word. Se abre con Microsoft Word o Google Docs.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>.xlsx</h5>
              <p>Hoja de cálculo de Excel. Tablas, fórmulas y gráficos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🖼️</div>
              <h5>.jpg / .png</h5>
              <p>Imágenes y fotografías digitales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📕</div>
              <h5>.pdf</h5>
              <p>Documento portable. Se ve igual en cualquier dispositivo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎬</div>
              <h5>.mp4</h5>
              <p>Video digital. Se reproduce en reproductores multimedia.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📦</div>
              <h5>.zip / .rar</h5>
              <p>Archivo comprimido. Contiene otros archivos adentro.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Para ver las extensiones en Windows, abre el Explorador, ve a <strong>Ver → Mostrar → Extensiones de nombre de archivo</strong>.</p>
          </div>
        `},
        { tag: 'Renombrar y buenas prácticas', html: `
          <h3>✏️ Renombrar archivos y buenas prácticas</h3>
          <p>Para renombrar un archivo o carpeta: selecciona y presiona <strong>F2</strong>, escribe el nuevo nombre y presiona Enter. También puedes hacer clic derecho → <strong>Renombrar</strong>.</p>
          <h4>✅ Buenas prácticas para nombrar archivos</h4>
          <ul>
            <li>Usa nombres <strong>descriptivos</strong>: <code>Oficio_Contrato_Servicio_2025.docx</code> en vez de <code>Documento1.docx</code>.</li>
            <li>Usa <strong>guiones bajos (_)</strong> en lugar de espacios para evitar errores.</li>
            <li>Incluye <strong>fecha</strong> cuando sea relevante: <code>Factura_Enero_2025.pdf</code>.</li>
            <li>Ordena con <strong>números</strong> al inicio para archivos secuenciales: <code>01_Carta_Presentacion</code>, <code>02_Anexos</code>.</li>
            <li>No uses caracteres especiales como <code>/ \ : * ? " &lt; &gt; |</code>.</li>
          </ul>
          <h4>📂 Organización de carpetas recomendada</h4>
          <p>Para un entorno de oficina, organiza tus documentos así:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Documentos/
  └── Secretariado_2025/
        ├── 01_Cartas/
        ├── 02_Oficios/
        ├── 03_Reportes/
        ├── 04_Recibos/
        └── 05_Plantillas/</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Regla de oro:</strong> Si en 5 segundos no encuentras un archivo, tu sistema de organización necesita mejorar.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Explorador de archivos', hint: '¿Qué tecla abre el Explorador de archivos en Windows (atajo Win + ?)' },
        { term: 'Extensión de archivo', hint: '¿Qué extensión tiene un documento de Word y una imagen JPG?' },
        { term: 'Ctrl + C / Ctrl + V', hint: '¿Qué diferencia hay entre copiar (Ctrl+C) y cortar (Ctrl+X)?' },
        { term: 'F2', hint: '¿Para qué sirve la tecla F2 en el Explorador de archivos?' },
        { term: 'Papelera de reciclaje', hint: '¿Dónde van los archivos cuando los eliminas y cómo los recuperas?' },
        { term: 'Carpeta', hint: '¿Cuál es la diferencia entre un archivo y una carpeta?' },
        { term: 'Organización', hint: 'Propón una estructura de carpetas para organizar los documentos de una oficina.' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Cuál es el atajo para RENOMBRAR un archivo en Windows?', options: [
          { value: 'a', label: 'Ctrl + R' },
          { value: 'b', label: 'F2' },
          { value: 'c', label: 'Ctrl + N' },
          { value: 'd', label: 'F5' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: 'Si presionas Ctrl + X y luego Ctrl + V en otra carpeta, el archivo se:', options: [
          { value: 'a', label: 'Copia' },
          { value: 'b', label: 'Mueve' },
          { value: 'c', label: 'Elimina' },
          { value: 'd', label: 'Duplica' }
        ], answer: 'b' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'La extensión .xlsx corresponde a un documento de Word.', answer: 'false' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'Los archivos eliminados van temporalmente a la _______.', answer: 'Papelera de reciclaje' }
      ],
      tasks: [
        { id: 'c1t1', title: '📁 Crea tu estructura de carpetas', description: 'Crea la siguiente estructura de carpetas en Documentos: "Secretariado_2025" con subcarpetas "Cartas", "Oficios", "Reportes", "Recibos" y "Plantillas". Dentro de cada una, guarda un documento de Word con un nombre descriptivo.', evidence: 'Captura de pantalla del Explorador mostrando la estructura completa.' },
        { id: 'c1t2', title: '✏️ Ejercicio de renombrado', description: 'Descarga 5 imágenes (o usa las que tengas). Asígnales nombres como: "01_Foto_Perfil.jpg", "02_Evento_Escolar.jpg". Luego muévelas a una carpeta llamada "Fotos_Secretariado".', evidence: 'Captura mostrando los archivos renombrados ordenados.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre gestión de archivos en Windows.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la extensión de un documento de Word?', options: [
            { value: 'a', label: '.xlsx' },
            { value: 'b', label: '.docx' },
            { value: 'c', label: '.pptx' },
            { value: 'd', label: '.pdf' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para copiar un archivo se usa el atajo:', options: [
            { value: 'a', label: 'Ctrl + X' },
            { value: 'b', label: 'Ctrl + C' },
            { value: 'c', label: 'Ctrl + V' },
            { value: 'd', label: 'Ctrl + Z' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Al presionar Supr (Delete), el archivo se elimina permanentemente sin posibilidad de recuperación.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Qué tecla se usa para renombrar un archivo rápidamente?', options: [
            { value: 'a', label: 'F1' },
            { value: 'b', label: 'F2' },
            { value: 'c', label: 'F3' },
            { value: 'd', label: 'F5' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Es mejor usar ______ al inicio de los nombres de archivo secuenciales para ordenarlos.', answer: 'números' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '📄',
      title: 'Digitalización y OCR básico',
      tagline: 'Convierte documentos físicos en texto digital editable mediante escaneo y OCR.',
      info: [
        { tag: '¿Qué es la digitalización?', html: `
          <h3>📄 ¿Qué es digitalizar un documento?</h3>
          <p><strong>Digitalizar</strong> es convertir un documento físico (papel) en un archivo digital (imagen o PDF). Esto permite almacenarlo, editarlo y compartirlo electrónicamente.</p>
          <h4>🎯 Beneficios de la digitalización</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">💾</div>
              <h5>Ahorra espacio</h5>
              <p>Miles de documentos caben en un disco duro. No más archivadores llenos de papel.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Búsqueda rápida</h5>
              <p>Encuentra cualquier documento por nombre, fecha o contenido en segundos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✉️</div>
              <h5>Compartir fácil</h5>
              <p>Envía documentos por correo electrónico al instante, sin fotocopias ni mensajería.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🛡️</div>
              <h5>Respaldo</h5>
              <p>Haz copias de seguridad en la nube o en discos externos. Nunca pierdas un documento.</p>
            </div>
          </div>
          <h4>📷 ¿Cómo digitalizar con el celular?</h4>
          <ul>
            <li>Usa la app <strong>Google Drive</strong> (Android/iOS): toca el botón + → Escanear.</li>
            <li>Usa <strong>Microsoft Lens</strong>: escanea documentos, pizarras, tarjetas de presentación.</li>
            <li>Usa la cámara directamente: toma una foto clara y nítida del documento.</li>
            <li>Consejo: busca buena iluminación, evita sombras y mantén el teléfono paralelo al papel.</li>
          </ul>
        `},
        { tag: '¿Qué es OCR?', html: `
          <h3>🔤 OCR: Reconocimiento Óptico de Caracteres</h3>
          <p><strong>OCR</strong> (Optical Character Recognition) es una tecnología que convierte imágenes de texto escrito o impreso en <strong>texto digital editable</strong>. Es decir, toma una foto de un documento y extrae las letras para que puedas copiarlas, editarlas o buscarlas.</p>
          <h4>💡 ¿Cómo funciona?</h4>
          <ol>
            <li>Escaneas o fotografías un documento → obtienes una <strong>imagen</strong>.</li>
            <li>El software OCR analiza la imagen y reconoce las <strong>formas de las letras</strong>.</li>
            <li>Convierte esas formas en <strong>caracteres digitales</strong> (texto que puedes editar).</li>
            <li>El resultado es un documento de texto editable (Word, TXT, o PDF con texto seleccionable).</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Ejemplo práctico:</strong> Escaneas una carta impresa en papel. Sin OCR, es solo una imagen. Con OCR, puedes copiar el texto al correo electrónico, buscarlo por palabras clave o editarlo en Word.</p>
          </div>
          <h4>🔗 Herramientas gratuitas de OCR</h4>
          <ul>
            <li><strong>Google Drive / Google Docs:</strong> sube una imagen o PDF, ábrelo con Google Docs y el OCR se aplica automáticamente.</li>
            <li><strong>OnlineOCR.net:</strong> sitio web gratuito que convierte imágenes a texto.</li>
            <li><strong>Microsoft Lens:</strong> app gratuita que escanea y aplica OCR desde el celular.</li>
            <li><strong>Tesseract OCR:</strong> software libre y gratuito para computadora.</li>
          </ul>
        `},
        { tag: 'OCR con Google Docs', html: `
          <h3>☁️ Cómo usar OCR con Google Drive y Google Docs</h3>
          <p>Este es el método más sencillo y gratuito para aplicar OCR a cualquier documento:</p>
          <h4>📋 Pasos</h4>
          <ol>
            <li>Ve a <strong>drive.google.com</strong> e inicia sesión con tu cuenta de Gmail.</li>
            <li>Haz clic en <strong>+ Nuevo → Subir archivo</strong> y selecciona la imagen o PDF escaneado.</li>
            <li>Una vez subido, haz clic derecho sobre el archivo → <strong>Abrir con → Google Docs</strong>.</li>
            <li>Google Docs <strong>automáticamente aplica OCR</strong> y abre un documento nuevo con el texto extraído.</li>
            <li>Revisa y corrige errores: ningún OCR es 100% preciso, especialmente con mala calidad de imagen.</li>
            <li>Guarda el documento como <strong>.docx</strong> o <strong>.pdf</strong> desde Archivo → Descargar.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Limitaciones:</strong> El OCR de Google funciona mejor con texto impreso claro y bien iluminado. Letras manuscritas, fuentes decorativas o imágenes borrosas darán resultados con errores.</p>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Si el documento tiene muchas páginas, conviértelo a PDF antes de subirlo. Google Docs OCR puede procesar documentos PDF de varias páginas.</p>
          </div>
        `},
        { tag: 'Digitación de documentos', html: `
          <h3>⌨️ Digitación: cuándo escribir en vez de escanear</h3>
          <p>A veces no tienes un escáner o la calidad del documento no es buena. En esos casos, la <strong>digitación</strong> (escribir el contenido manualmente) es la solución.</p>
          <h4>📋 Consejos para digitar documentos</h4>
          <ul>
            <li><strong>Usa Word o Google Docs</strong> para escribir el contenido.</li>
            <li><strong>Respeta el formato original:</strong> párrafos, viñetas, negritas, tablas.</li>
            <li><strong>Revisa la ortografía</strong> antes de finalizar. Usa el corrector integrado (F7 en Word).</li>
            <li><strong>Agrega encabezado</strong> con el título del documento, fecha y número de página.</li>
            <li><strong>Guarda en formato .docx</strong> para mantener el formato y .pdf para compartir.</li>
          </ul>
          <h4>💼 Flujo de trabajo recomendado</h4>
          <ol>
            <li>Digitaliza el documento físico → imagen o PDF.</li>
            <li>Aplica OCR → obtén texto editable.</li>
            <li>Revisa y corrige errores del OCR.</li>
            <li>Da formato profesional al texto.</li>
            <li>Guarda en <strong>.docx</strong> (editable) y exporta a <strong>.pdf</strong> (para compartir).</li>
            <li>Archiva en la carpeta correspondiente de tu estructura organizada.</li>
          </ol>
        `},
        { tag: 'Práctica de OCR', html: `
          <h3>✏️ Ejercicio práctico de digitalización</h3>
          <h4>📝 Paso 1: Consigue un documento físico</h4>
          <p>Toma cualquier documento impreso que tengas a mano: una carta, un recibo, una hoja de tu cuaderno, un volante.</p>
          <h4>📷 Paso 2: Escanea con el celular</h4>
          <ul>
            <li>Abre Google Drive en tu celular.</li>
            <li>Toca el botón <strong>+</strong> (flotante) → <strong>Escanear</strong>.</li>
            <li>Toma la foto del documento. Ajusta los bordes si es necesario.</li>
            <li>Toca <strong>Listo</strong> y luego <strong>Guardar</strong> como PDF.</li>
          </ul>
          <h4>🔤 Paso 3: Aplica OCR</h4>
          <ul>
            <li>Desde la computadora, abre Google Drive.</li>
            <li>Haz clic derecho en el PDF → <strong>Abrir con → Google Docs</strong>.</li>
            <li>Espera a que el texto aparezca.</li>
          </ul>
          <h4>✅ Paso 4: Verifica</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Compara el texto original con el texto digital. ¿Qué errores encontraste? ¿Qué palabras no reconoció bien el OCR? Anota 3 errores y corrígelos manualmente.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Digitalización', hint: '¿Cuál es la diferencia entre digitalizar un documento y escanearlo?' },
        { term: 'OCR', hint: '¿Qué significan las siglas OCR y para qué sirve?' },
        { term: 'Google Docs OCR', hint: '¿Cómo se aplica OCR a una imagen usando Google Drive y Google Docs?' },
        { term: 'Microsoft Lens', hint: 'Investiga: ¿qué funciones tiene Microsoft Lens además del escaneo?' },
        { term: 'Formato PDF', hint: '¿Por qué es útil guardar un documento en PDF además de en Word?' },
        { term: 'Digitación', hint: '¿En qué casos es mejor digitar manualmente un documento que usar OCR?' },
        { term: 'Respaldo digital', hint: '¿Qué ventajas tiene respaldar documentos digitales en la nube?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: 'OCR es una tecnología que:', options: [
          { value: 'a', label: 'Comprime imágenes para ahorrar espacio' },
          { value: 'b', label: 'Convierte imágenes de texto en texto editable' },
          { value: 'c', label: 'Mejora la calidad de las fotografías' },
          { value: 'd', label: 'Crea carpetas automáticamente' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: 'Para aplicar OCR gratis con Google, debes:', options: [
          { value: 'a', label: 'Comprar una licencia de Google Docs' },
          { value: 'b', label: 'Subir la imagen a Drive y abrirla con Google Docs' },
          { value: 'c', label: 'Usar solo Microsoft Word' },
          { value: 'd', label: 'Descargar un programa especial de Google' }
        ], answer: 'b' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'El OCR funciona igual de bien con cualquier tipo de letra, incluso manuscrita.', answer: 'false' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'La app de Microsoft para escanear documentos desde el celular se llama _______.', answer: 'Microsoft Lens' }
      ],
      tasks: [
        { id: 'c2t1', title: '📷 Digitaliza un documento real', description: 'Toma un documento físico (recibo, carta, volante). Escanéalo con tu celular usando Google Drive. Aplica OCR abriéndolo con Google Docs. Corrige los errores que encuentres. Guarda el resultado como .docx', evidence: 'Captura de la imagen original + captura del texto digital en Google Docs.' },
        { id: 'c2t2', title: '🔤 Comparación de OCR', description: 'Consigue 3 documentos impresos diferentes: uno con letra grande y clara, uno con letra pequeña y uno manuscrito. Escanéalos y aplícales OCR. Anota en una tabla cuál funcionó mejor y cuál peor, y por qué.', evidence: 'Tabla comparativa con las 3 muestras y los resultados de OCR.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre digitalización y OCR.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué significa la sigla OCR?', options: [
            { value: 'a', label: 'Online Character Reader' },
            { value: 'b', label: 'Optical Character Recognition' },
            { value: 'c', label: 'Office Computer Resource' },
            { value: 'd', label: 'Original Copy Render' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál es el primer paso para digitalizar un documento?', options: [
            { value: 'a', label: 'Enviarlo por correo' },
            { value: 'b', label: 'Escanearlo o fotografiarlo' },
            { value: 'c', label: 'Imprimirlo' },
            { value: 'd', label: 'Borrar el original' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Google Docs aplica OCR automáticamente al abrir una imagen o PDF subido a Drive.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál de estos NO es un beneficio de la digitalización?', options: [
            { value: 'a', label: 'Ahorrar espacio físico' },
            { value: 'b', label: 'Buscar documentos rápidamente' },
            { value: 'c', label: 'Ocupar más archivadores' },
            { value: 'd', label: 'Compartir documentos fácilmente' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'El OCR convierte una imagen de texto en texto _______.', answer: 'editable' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '✉️',
      title: 'Organización de correo electrónico',
      tagline: 'Domina Gmail: bandeja de entrada, etiquetas, filtros, reglas y búsqueda avanzada.',
      info: [
        { tag: 'Introducción a Gmail', html: `
          <h3>✉️ Bienvenido a Gmail: mucho más que correo</h3>
          <p>Gmail es el servicio de correo electrónico de Google. Es el más usado del mundo y ofrece herramientas muy potentes para organizar tu bandeja de entrada.</p>
          <h4>📬 Partes principales de Gmail</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📥</div>
              <h5>Bandeja de entrada</h5>
              <p>Aquí llegan todos los correos nuevos. Se organizan por fecha y pueden tener categorías.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⭐</div>
              <h5>Destacados</h5>
              <p>Correos importantes que Gmail identifica automáticamente. Puedes marcarlos manualmente también.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📤</div>
              <h5>Bandeja de salida</h5>
              <p>Correos que has enviado. Se guardan automáticamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗑️</div>
              <h5>Papelera</h5>
              <p>Correos eliminados. Se vacían automáticamente después de 30 días.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🚫</div>
              <h5>Spam</h5>
              <p>Correos no deseados o sospechosos. Gmail los detecta automáticamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏷️</div>
              <h5>Etiquetas</h5>
              <p>Categorías que creas tú para organizar los correos (como carpetas, pero más flexibles).</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> En tu teléfono, descarga la app <strong>Gmail</strong> para recibir notificaciones al instante y gestionar tu correo desde cualquier lugar.</p>
          </div>
        `},
        { tag: 'Etiquetas y carpetas', html: `
          <h3>🏷️ Etiquetas: la forma inteligente de organizar</h3>
          <p>En Gmail, las <strong>etiquetas</strong> funcionan como carpetas, pero con una diferencia clave: un correo puede tener <strong>varias etiquetas a la vez</strong>.</p>
          <h4>🆕 Cómo crear etiquetas</h4>
          <ol>
            <li>En Gmail (web), desplázate al panel izquierdo y haz clic en <strong>Más</strong>.</li>
            <li>Haz clic en <strong>Crear etiqueta nueva</strong>.</li>
            <li>Escribe el nombre (ej: "Facturas", "Clientes", "Urgente", "Secretariado").</li>
            <li>Opcional: crea <strong>subetiquetas</strong> jerárquicas (ej: "Clientes/Activos", "Clientes/Potenciales").</li>
          </ol>
          <h4>🏷️ Cómo aplicar etiquetas</h4>
          <ul>
            <li>Selecciona uno o varios correos.</li>
            <li>Haz clic en el ícono de <strong>etiqueta</strong> (🏷️) en la barra superior.</li>
            <li>Elige la etiqueta deseada. ¡Listo!</li>
          </ul>
          <h4>💡 Diferencia entre etiquetas y carpetas clásicas</h4>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>En Outlook o en el correo tradicional, un mensaje solo puede estar en <strong>una carpeta</strong>. En Gmail, un mensaje puede tener <strong>varias etiquetas</strong> y aparecer en todas ellas. Por ejemplo, un correo puede ser "Factura" Y "Urgente" al mismo tiempo.</p>
          </div>
        `},
        { tag: 'Filtros y reglas', html: `
          <h3>⚙️ Filtros y reglas: automatiza tu organización</h3>
          <p>Los <strong>filtros</strong> son reglas automáticas que Gmail aplica a los correos que llegan. Por ejemplo: si un correo es de un cliente específico, automáticamente lo etiqueta, lo marca como importante y lo archiva.</p>
          <h4>🔧 Cómo crear un filtro</h4>
          <ol>
            <li>En Gmail, haz clic en el ícono de <strong>Configuración</strong> (⚙️) → <strong>Ver toda la configuración</strong>.</li>
            <li>Ve a la pestaña <strong>Filtros y direcciones bloqueadas</strong>.</li>
            <li>Haz clic en <strong>Crear un filtro nuevo</strong>.</li>
            <li>Define los criterios: <strong>De</strong> (remitente), <strong>Asunto</strong>, <strong>Tiene las palabras</strong>, etc.</li>
            <li>Define la acción: Aplicar etiqueta, Marcar como importante, Archivar, Reenviar, Eliminar.</li>
            <li>Haz clic en <strong>Crear filtro</strong>.</li>
          </ol>
          <h4>💡 Ejemplo de filtro útil</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Filtro para facturas:</strong> Si el asunto contiene "Factura" → aplicar etiqueta "Facturas", marcar como importante, y nunca enviar a Spam. Así todas las facturas llegan organizadas automáticamente.</p>
          </div>
        `},
        { tag: 'Bandeja de entrada y spam', html: `
          <h3>📥 Gestiona tu bandeja de entrada y el spam</h3>
          <h4>🧹 Categorías de bandeja de entrada</h4>
          <p>Gmail organiza automáticamente tu bandeja en pestañas:</p>
          <ul>
            <li><strong>Principal:</strong> correos de personas conocidas y mensajes importantes.</li>
            <li><strong>Social:</strong> notificaciones de redes sociales.</li>
            <li><strong>Promociones:</strong> ofertas, newsletters, publicidad.</li>
            <li><strong>Foros:</strong> notificaciones de grupos y foros.</li>
          </ul>
          <h4>🚫 ¿Qué es el Spam?</h4>
          <p><strong>Spam</strong> son correos electrónicos no solicitados, normalmente publicitarios o fraudulentos. Gmail los detecta y los envía automáticamente a la carpeta de Spam.</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> Revisa la carpeta Spam de vez en cuando. A veces un correo legítimo puede terminar allí por error. Si encuentras uno, selecciónalo y haz clic en "<strong>No es spam</strong>" para entrenar al filtro.</p>
          </div>
          <h4>🔍 Búsqueda avanzada en Gmail</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>from:cliente@gmail.com         → Correos de ese remitente
has:attachment                  → Correos con archivos adjuntos
before:2025/01/01               → Correos anteriores a una fecha
label:Facturas                  → Correos con una etiqueta
is:unread                       → Correos no leídos
subject:"informe"               → Correos con esa palabra en el asunto</code></pre>
        `},
        { tag: 'Archivos adjuntos y buenas prácticas', html: `
          <h3>📎 Archivos adjuntos y reglas de etiqueta digital</h3>
          <h4>📎 Cómo adjuntar archivos correctamente</h4>
          <ul>
            <li>Haz clic en el ícono <strong>📎 (clip)</strong> al redactar un correo.</li>
            <li>Selecciona el archivo desde tu computadora o Google Drive.</li>
            <li>Tamaño máximo por archivo: <strong>25 MB</strong>. Para archivos más grandes, usa Google Drive y comparte el enlace.</li>
            <li>Nombra el archivo adjunto con un nombre descriptivo antes de enviarlo.</li>
          </ul>
          <h4>✅ Buenas prácticas de correo profesional</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">✏️</div>
              <h5>Asunto claro</h5>
              <p>Ej: "Informe mensual - Secretariado - Enero 2025"</p>
            </div>
            <div class="grid-item">
              <div class="icon">👋</div>
              <h5>Saludo y despedida</h5>
              <p>"Estimado/a [Nombre]" al inicio y "Saludos cordiales" al final.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Mensaje conciso</h5>
              <p>Ve al grano. Usa párrafos cortos y puntos clave.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📎</div>
              <h5>Adjuntos ordenados</h5>
              <p>Menciona en el cuerpo del mensaje qué archivos adjuntas.</p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Nunca</strong> uses mayúsculas sostenidas en un correo (equivale a gritar). Revisa la ortografía antes de enviar. Y recuerda: un correo profesional puede definir tu imagen laboral.</p>
          </div>
        `},
        { tag: 'Práctica de Gmail', html: `
          <h3>✏️ Ejercicio práctico: organiza tu bandeja</h3>
          <h4>📋 Actividades</h4>
          <ol>
            <li>Crea <strong>5 etiquetas</strong> en Gmail: "Trabajo", "Personal", "Facturas", "Urgente", "Secretariado".</li>
            <li>Crea un <strong>filtro</strong> que etiquete automáticamente como "Urgente" los correos cuyo asunto contenga "URGENTE" o "Importante".</li>
            <li>Crea otro <strong>filtro</strong> que archive y etiquete como "Facturas" los correos de proveedores.</li>
            <li>Marca 3 correos de tu bandeja con la etiqueta "Secretariado".</li>
            <li>Usa el <strong>buscador avanzado</strong> para encontrar: correos con adjuntos de la semana pasada.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Meta:</strong> Al final, tu bandeja de entrada debe tener 0 correos sin clasificar. Todo debe estar etiquetado, archivado o eliminado.</p>
          </div>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p>La técnica del <strong>Inbox Zero</strong> (bandeja cero): procesa cada correo una sola vez: responde, archiva, etiqueta o elimina. No dejes correos sin leer acumulados.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Bandeja de entrada', hint: '¿Cuál es la diferencia entre bandeja de entrada y bandeja de salida?' },
        { term: 'Etiqueta', hint: '¿Qué ventaja tienen las etiquetas de Gmail sobre las carpetas tradicionales?' },
        { term: 'Filtro', hint: 'Crea un filtro hipotético para organizar correos de un cliente específico.' },
        { term: 'Spam', hint: '¿Cómo entrenas a Gmail para que no envíe un correo legítimo a Spam?' },
        { term: 'Inbox Zero', hint: 'Investiga: ¿qué es la metodología Inbox Zero y cómo se aplica?' },
        { term: 'Búsqueda avanzada', hint: 'Escribe una búsqueda que muestre solo correos no leídos de un remitente específico.' },
        { term: 'Archivo adjunto', hint: '¿Cuál es el límite de tamaño para adjuntar archivos en Gmail?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: 'En Gmail, las etiquetas permiten:', options: [
          { value: 'a', label: 'Poner un correo en una sola carpeta' },
          { value: 'b', label: 'Poner un correo en varias categorías a la vez' },
          { value: 'c', label: 'Eliminar correos automáticamente' },
          { value: 'd', label: 'Cambiar el color del correo' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: '¿Qué debes hacer si un correo legítimo llega a Spam?', options: [
          { value: 'a', label: 'Ignorarlo' },
          { value: 'b', label: 'Seleccionarlo y hacer clic en "No es spam"' },
          { value: 'c', label: 'Eliminarlo' },
          { value: 'd', label: 'Reenviarlo a otro correo' }
        ], answer: 'b' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'Gmail permite un máximo de 10 MB por archivo adjunto.', answer: 'false' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'En Gmail, para buscar correos con archivos adjuntos se usa el operador _______.', answer: 'has:attachment' }
      ],
      tasks: [
        { id: 'c3t1', title: '🏷️ Organiza tu Gmail', description: 'Crea 5 etiquetas en tu Gmail: "Trabajo", "Secretariado", "Facturas", "Clientes", "Urgente". Crea 2 filtros automáticos. Aplica las etiquetas a al menos 10 correos existentes. Toma captura de tus etiquetas y filtros.', evidence: 'Captura del panel de etiquetas + captura de la lista de filtros creados.' },
        { id: 'c3t2', title: '✉️ Redacción profesional', description: 'Redacta un correo electrónico formal a un profesor o jefe ficticio solicitando información sobre un proyecto. Debe incluir: saludo, presentación, cuerpo del mensaje con 2 párrafos, despedida cordial y un archivo adjunto de prueba.', evidence: 'Captura del correo redactado (puedes enviártelo a ti mismo para mostrar el resultado).' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre organización de correo electrónico.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cómo se llaman las categorías que creas en Gmail para organizar correos?', options: [
            { value: 'a', label: 'Carpetas' },
            { value: 'b', label: 'Etiquetas' },
            { value: 'c', label: 'Buzones' },
            { value: 'd', label: 'Archivos' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál es el tamaño máximo de un archivo adjunto en Gmail?', options: [
            { value: 'a', label: '10 MB' },
            { value: 'b', label: '25 MB' },
            { value: 'c', label: '50 MB' },
            { value: 'd', label: '100 MB' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'En Gmail, un filtro puede aplicar automáticamente una etiqueta a los correos que coincidan con ciertos criterios.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál de estos operadores de búsqueda es correcto para encontrar correos de un remitente?', options: [
            { value: 'a', label: 'to:cliente@gmail.com' },
            { value: 'b', label: 'from:cliente@gmail.com' },
            { value: 'c', label: 'sender:cliente@gmail.com' },
            { value: 'd', label: 'send:cliente@gmail.com' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Los correos no deseados o fraudulentos se conocen como _______.', answer: 'spam' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '📅',
      title: 'Agenda digital y recordatorios',
      tagline: 'Organiza tu tiempo con Google Calendar: eventos, recordatorios, notificaciones y calendarios compartidos.',
      info: [
        { tag: 'Introducción a la agenda digital', html: `
          <h3>📅 ¿Por qué usar una agenda digital?</h3>
          <p>Una <strong>agenda digital</strong> (como Google Calendar o Outlook Calendar) te permite organizar tu tiempo de forma más eficiente que una agenda de papel.</p>
          <h4>🎯 Ventajas de la agenda digital</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔔</div>
              <h5>Recordatorios</h5>
              <p>El calendario te avisa antes de cada evento. Nunca olvidas una cita.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📱</div>
              <h5>En todos tus dispositivos</h5>
              <p>Lo que agregas en tu celular aparece en tu computadora y viceversa.</p>
            </div>
            <div class="grid-item">
              <div class="icon">👥</div>
              <h5>Compartir</h5>
              <p>Puedes compartir tu calendario con compañeros, jefes o familiares.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>Colores</h5>
              <p>Asigna colores a diferentes tipos de eventos para verlos de un vistazo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>Eventos recurrentes</h5>
              <p>Crea un evento una vez y repítelo todas las semanas, meses o años.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔗</div>
              <h5>Integración</h5>
              <p>Se conecta con Gmail, Google Meet, Google Tasks y otras apps.</p>
            </div>
          </div>
        `},
        { tag: 'Google Calendar básico', html: `
          <h3>📅 Google Calendar: tu agenda en la nube</h3>
          <p>Google Calendar es el calendario digital de Google. Es gratuito y viene con cualquier cuenta de Gmail.</p>
          <h4>🚀 Primeros pasos</h4>
          <ol>
            <li>Ve a <strong>calendar.google.com</strong> o abre la app "Calendar" en tu celular.</li>
            <li>Verás una vista mensual, semanal o diaria (puedes cambiar entre ellas arriba a la derecha).</li>
            <li>Haz clic en un espacio en blanco para crear un evento.</li>
            <li>También puedes hacer clic en el botón <strong>"+" (Crear)</strong>.</li>
          </ol>
          <h4>📋 Partes de la interfaz</h4>
          <ul>
            <li><strong>Panel izquierdo:</strong> lista de calendarios (puedes tener varios: personal, trabajo, escuela).</li>
            <li><strong>Vista principal:</strong> muestra los eventos en el día/semana/mes.</li>
            <li><strong>Botón "Hoy":</strong> te lleva al día actual rápidamente.</li>
            <li><strong>Vistas:</strong> Día, Semana, Mes, Programa (agenda).</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Presiona la tecla <strong>C</strong> en Google Calendar (web) para crear un evento nuevo al instante. Presiona <strong>T</strong> para ir al día de hoy.</p>
          </div>
        `},
        { tag: 'Crear eventos y recordatorios', html: `
          <h3>📝 Crear eventos, recordatorios y tareas</h3>
          <h4>🎉 Crear un evento</h4>
          <ol>
            <li>Haz clic en <strong>"Crear"</strong> o en una hora del calendario.</li>
            <li>Escribe el <strong>título</strong> del evento (ej: "Entrega de informe").</li>
            <li>Define la <strong>fecha y hora</strong> de inicio y fin.</li>
            <li>Si es todo el día, marca <strong>"Todo el día"</strong>.</li>
            <li>Agrega <strong>ubicación</strong> (opcional) y <strong>descripción</strong>.</li>
            <li>Configura <strong>notificaciones</strong>: 10 min antes, 1 hora antes, 1 día antes.</li>
            <li>Si se repite, elige <strong>"No se repite"</strong> o selecciona la frecuencia (diaria, semanal, etc.).</li>
            <li>Elige un <strong>color</strong> para el evento y el calendario donde guardarlo.</li>
          </ol>
          <h4>🔔 Recordatorios vs Eventos</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🎉</div>
              <h5>Evento</h5>
              <p>Tiene fecha y hora de inicio Y de fin. Ocupa un bloque en el calendario. Ej: "Clase de Computación de 8:00 a 9:00".</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔔</div>
              <h5>Recordatorio</h5>
              <p>Te avisa en una fecha/hora pero NO ocupa un bloque. Ej: "Llamar al cliente" a las 10:00.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Tarea</h5>
              <p>Tiene fecha de vencimiento. Se muestra como lista de pendientes. Ej: "Terminar informe".</p>
            </div>
          </div>
        `},
        { tag: 'Compartir calendarios', html: `
          <h3>👥 Compartir calendarios con otras personas</h3>
          <p>Una de las funciones más potentes de Google Calendar es poder <strong>compartir</strong> tu calendario con otras personas para coordinar horarios.</p>
          <h4>🔗 Cómo compartir un calendario</h4>
          <ol>
            <li>En el panel izquierdo, busca el calendario que quieres compartir.</li>
            <li>Haz clic en los <strong>tres puntos</strong> (⋮) junto al nombre → <strong>Configuración y uso compartido</strong>.</li>
            <li>En la sección <strong>Compartir con personas específicas</strong>, haz clic en <strong>+ Añadir personas</strong>.</li>
            <li>Escribe el correo electrónico de la persona.</li>
            <li>Elige el nivel de permisos:
              <ul>
                <li><strong>Ver solo disponibilidad (ocultar detalles):</strong> ven si estás ocupado, pero no los detalles.</li>
                <li><strong>Ver todos los detalles:</strong> ven toda la información del evento.</li>
                <li><strong>Realizar cambios:</strong> pueden editar eventos.</li>
                <li><strong>Realizar cambios y gestionar uso compartido:</strong> control total.</li>
              </ul>
            </li>
          </ol>
          <h4>💡 Ejemplo de uso en oficina</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Una secretaria puede compartir el calendario de su jefe con "Ver solo disponibilidad". Así otros empleados pueden ver cuándo está libre sin conocer los detalles de cada reunión. ¡Profesional y eficiente!</p>
          </div>
        `},
        { tag: 'Notificaciones y productividad', html: `
          <h3>🔔 Notificaciones inteligentes y productividad</h3>
          <h4>⏰ Configurar notificaciones por defecto</h4>
          <ol>
            <li>Ve a <strong>Configuración</strong> (⚙️) en Google Calendar.</li>
            <li>Selecciona <strong>"Configuración de eventos"</strong>.</li>
            <li>En <strong>Notificaciones</strong>, elige cuánto antes quieres que te avise: 10 minutos, 30 minutos, 1 hora, 1 día.</li>
            <li>También puedes configurar notificaciones por <strong>correo electrónico</strong> además de la notificación en pantalla.</li>
          </ol>
          <h4>🎨 Organización por colores</h4>
          <p>Asigna colores a tus calendarios para identificar rápidamente el tipo de evento:</p>
          <ul>
            <li>🔵 <strong>Azul:</strong> Clases y estudio.</li>
            <li>🟢 <strong>Verde:</strong> Trabajo/oficina.</li>
            <li>🟡 <strong>Amarillo:</strong> Citas personales.</li>
            <li>🔴 <strong>Rojo:</strong> Urgente / fechas límite.</li>
            <li>🟣 <strong>Morado:</strong> Eventos sociales.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Consejo:</strong> No pongas 10 recordatorios para un mismo evento. Con 2 está bien: uno el día anterior y otro 15-30 minutos antes. Demasiadas notificaciones hacen que ignores todas.</p>
          </div>
        `},
        { tag: 'Práctica con Google Calendar', html: `
          <h3>✏️ Ejercicio práctico: organiza tu semana</h3>
          <h4>📋 Actividades</h4>
          <ol>
            <li>Crea un <strong>evento recurrente</strong> para tus clases de Computación: "Clase de Computación I", todos los [día de la semana] de 8:00 a 9:00, con recordatorio 30 min antes.</li>
            <li>Crea un <strong>evento</strong> llamado "Entrega de proyecto final" con fecha específica, recordatorio 1 día antes, color rojo.</li>
            <li>Crea un <strong>recordatorio</strong> diario para "Revisar correo electrónico" a las 9:00 AM.</li>
            <li>Comparte tu calendario con un compañero (modo "Ver todos los detalles").</li>
            <li>Agrega al menos 5 eventos diferentes en los próximos 7 días y asígnales colores distintos.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Meta:</strong> Tu calendario debe reflejar tu semana real. Si ves tu calendario y sabes qué vas a hacer cada hora, estás usando bien la agenda digital.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Agenda digital', hint: '¿Qué ventajas tiene una agenda digital sobre una agenda de papel?' },
        { term: 'Google Calendar', hint: '¿Cómo se crea un evento recurrente en Google Calendar?' },
        { term: 'Recordatorio', hint: '¿Cuál es la diferencia entre un evento y un recordatorio?' },
        { term: 'Notificación', hint: '¿Cuántos minutos antes recomiendan configurar las notificaciones?' },
        { term: 'Calendario compartido', hint: '¿Qué nivel de permiso elegirías para compartir tu calendario con tu jefe?' },
        { term: 'Evento recurrente', hint: '¿Qué tipos de recurrencia ofrece Google Calendar?' },
        { term: 'Color coding', hint: '¿Por qué es útil asignar colores a los calendarios o eventos?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '¿Cuál es la diferencia entre un EVENTO y un RECORDATORIO en Google Calendar?', options: [
          { value: 'a', label: 'No hay diferencia' },
          { value: 'b', label: 'El evento tiene hora de inicio y fin; el recordatorio solo avisa' },
          { value: 'c', label: 'El recordatorio ocupa un bloque en el calendario' },
          { value: 'd', label: 'El evento no puede tener notificaciones' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: '¿Qué tecla de acceso rápido crea un nuevo evento en Google Calendar (web)?', options: [
          { value: 'a', label: 'N' },
          { value: 'b', label: 'C' },
          { value: 'c', label: 'E' },
          { value: 'd', label: 'A' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'Al compartir tu calendario con "Ver solo disponibilidad", la otra persona puede ver los detalles de tus eventos.', answer: 'false' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'Un evento que se repite todas las semanas se llama evento _______.', answer: 'recurrente' }
      ],
      tasks: [
        { id: 'c4t1', title: '📅 Crea tu calendario mensual', description: 'En Google Calendar, planifica tu mes completo. Agrega: clases, horas de estudio, actividades extracurriculares, cumpleaños, fechas de entrega. Usa al menos 4 colores diferentes. Crea 2 eventos recurrentes.', evidence: 'Captura de la vista mensual de tu calendario mostrando todos los eventos.' },
        { id: 'c4t2', title: '👥 Comparte y coordina', description: 'Comparte tu calendario con un compañero de clase (modo "Ver todos los detalles"). Coordinen un evento juntos (ej: una reunión de estudio). Envía una invitación desde el calendario.', evidence: 'Captura de la configuración de uso compartido + captura de la invitación enviada.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre agenda digital y Google Calendar.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál de estos NO es un tipo de elemento en Google Calendar?', options: [
            { value: 'a', label: 'Evento' },
            { value: 'b', label: 'Recordatorio' },
            { value: 'c', label: 'Nota' },
            { value: 'd', label: 'Tarea' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: 'Para compartir tu calendario sin revelar detalles de los eventos, usas:', options: [
            { value: 'a', label: 'Ver solo disponibilidad (ocultar detalles)' },
            { value: 'b', label: 'Ver todos los detalles' },
            { value: 'c', label: 'Realizar cambios' },
            { value: 'd', label: 'No compartir nunca' }
          ], answer: 'a' },
          { id: 'q3', type: 'tf', prompt: 'Un evento recurrente en Google Calendar puede repetirse diario, semanal, mensual o anualmente.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cómo se llama la función que te avisa antes de un evento?', options: [
            { value: 'a', label: 'Alarma' },
            { value: 'b', label: 'Notificación' },
            { value: 'c', label: 'Recordatorio' },
            { value: 'd', label: 'Aviso' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'En Google Calendar, la tecla de acceso rápido ______ lleva al día de hoy.', answer: 'T' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '🔄',
      title: 'Ofimática digital integrada',
      tagline: 'Integra digitalización, archivo, correo electrónico y agenda en un flujo de trabajo profesional.',
      info: [
        { tag: 'Flujo de trabajo digital', html: `
          <h3>🔄 El flujo de trabajo digital completo</h3>
          <p>En las clases anteriores aprendiste 4 habilidades por separado. Ahora vamos a <strong>integrarlas</strong> en un flujo de trabajo profesional de oficina.</p>
          <h4>📋 El ciclo completo</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>1. Digitalizar</h5>
              <p>Escanea un documento físico con tu celular o escáner. Aplica OCR si necesitas texto editable.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>2. Archivar</h5>
              <p>Guarda el documento en la carpeta correcta de tu estructura organizada. Nombra el archivo descriptivamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✉️</div>
              <h5>3. Enviar por correo</h5>
              <p>Redacta un correo profesional, adjunta el documento, usa etiquetas y filtros.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>4. Agendar</h5>
              <p>Crea un evento o recordatorio para el seguimiento. Comparte el calendario si es necesario.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo:</strong> Al dominar este ciclo, puedes manejar cualquier proceso documental de oficina de inicio a fin, sin usar papel.</p>
          </div>
        `},
        { tag: 'Caso práctico: Recibo de pago', html: `
          <h3>💼 Caso práctico 1: Digitalizar y archivar un recibo de pago</h3>
          <h4>📋 Situación</h4>
          <p>Recibes un recibo de pago en papel. Necesitas digitalizarlo, archivarlo y enviarlo por correo al departamento de contabilidad.</p>
          <h4>✅ Pasos</h4>
          <ol>
            <li><strong>Digitalizar:</strong> Toma una foto del recibo con Google Drive (escanear) o un escáner. Guarda como PDF.</li>
            <li><strong>Aplicar OCR (opcional):</strong> Si necesitas extraer el texto, abre el PDF con Google Docs.</li>
            <li><strong>Nombrar:</strong> Renombra el archivo como <code>Recibo_Pago_Enero_2025.pdf</code>.</li>
            <li><strong>Archivar:</strong> Guárdalo en <code>Secretariado_2025/Recibos/</code>.</li>
            <li><strong>Enviar por correo:</strong> Redacta un correo a contabilidad@empresa.com con asunto "Recibo de pago - Enero 2025". Adjunta el PDF. Usa etiqueta "Recibos".</li>
            <li><strong>Agendar:</strong> Crea un recordatorio en Google Calendar para "Confirmar recepción de recibo" en 3 días.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Resultado:</strong> En menos de 10 minutos, el recibo pasó de ser un papel en tu escritorio a un archivo digital organizado, enviado y con seguimiento agendado.</p>
          </div>
        `},
        { tag: 'Caso práctico: Carta oficial', html: `
          <h3>📝 Caso práctico 2: Redactar, enviar y dar seguimiento a una carta oficial</h3>
          <h4>📋 Situación</h4>
          <p>Tu jefe te pide redactar una carta oficial, enviarla a un cliente y agendar una reunión de seguimiento.</p>
          <h4>✅ Pasos</h4>
          <ol>
            <li><strong>Redactar:</strong> Crea un documento en Word con formato de carta oficial. Incluye: membrete, fecha, destinatario, asunto, saludo, cuerpo, despedida y firma.</li>
            <li><strong>Guardar:</strong> Nombra el archivo <code>Carta_Cliente_ABC_Corporation.docx</code>. Guarda también una copia en PDF: <code>Carta_Cliente_ABC_Corporation.pdf</code>.</li>
            <li><strong>Archivar:</strong> Guarda ambos archivos en <code>Secretariado_2025/Cartas/</code>.</li>
            <li><strong>Enviar:</strong> Redacta un correo profesional al cliente. Asunto: "Carta de presentación - ABC Corporation". Adjunta el PDF. Aplica etiqueta "Clientes".</li>
            <li><strong>Agendar:</strong> Crea un evento en Google Calendar: "Reunión de seguimiento - ABC Corporation" para 1 semana después. Invita a tu jefe al evento. Color verde (trabajo).</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>IMPORTANTE:</strong> Siempre guarda una copia en PDF antes de enviar por correo. El PDF se ve igual en cualquier dispositivo, mientras que el .docx puede verse diferente según la versión de Word.</p>
          </div>
        `},
        { tag: 'Caso práctico: Minuta de reunión', html: `
          <h3>📋 Caso práctico 3: Digitalizar acta de reunión y distribuir</h3>
          <h4>📋 Situación</h4>
          <p>Después de una reunión, tienes notas manuscritas en tu cuaderno. Necesitas pasarlas a digital y distribuirlas a los asistentes.</p>
          <h4>✅ Pasos</h4>
          <ol>
            <li><strong>Digitalizar:</strong> Toma fotos claras de tus notas manuscritas con tu celular (Google Drive → Escanear).</li>
            <li><strong>Transcribir:</strong> Abre las imágenes en Google Docs (OCR). Corrige los errores del reconocimiento. Dale formato profesional.</li>
            <li><strong>Estructurar:</strong> Agrega: fecha de la reunión, asistentes, temas tratados, acuerdos, próximos pasos.</li>
            <li><strong>Guardar:</strong> Nombra el archivo <code>Acta_Reunion_2025-02-15.docx</code> y exporta a PDF.</li>
            <li><strong>Archivar:</strong> Guarda en <code>Secretariado_2025/Reportes/</code>.</li>
            <li><strong>Enviar:</strong> Redacta un correo a todos los asistentes. Asunto: "Acta de reunión - 15/02/2025". Adjunta el PDF.</li>
            <li><strong>Agendar:</strong> Si se acordó una próxima reunión, créala en Google Calendar como evento recurrente e invita a los asistentes.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Crea una <strong>plantilla de minuta</strong> en Word con los campos ya listos (fecha, asistentes, agenda). Así solo llenas los espacios vacíos cada vez.</p>
          </div>
        `},
        { tag: 'Herramientas integradas', html: `
          <h3>🔗 Herramientas que se integran entre sí</h3>
          <p>La magia de la ofimática moderna es que las herramientas <strong>se conectan entre sí</strong>:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Google Drive → Google Docs</h5>
              <p>Escanea con Drive, edita con Docs (OCR).</p>
            </div>
            <div class="grid-item">
              <div class="icon">✉️</div>
              <h5>Gmail → Google Calendar</h5>
              <p>Los correos con fechas pueden crear eventos automáticamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Calendar → Gmail</h5>
              <p>Las invitaciones de calendario se envían por correo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☁️</div>
              <h5>Drive → Gmail</h5>
              <p>Adjunta archivos de Drive directamente sin descargarlos.</p>
            </div>
          </div>
          <h4>💡 Ejemplo de integración</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Escaneas un documento con Google Drive (teléfono) → se guarda automáticamente en Drive (computadora) → lo abres con Google Docs para OCR → lo descargas como PDF → lo adjuntas a un correo en Gmail → creas un evento en Calendar recordando hacer seguimiento. <strong>Todo en el ecosistema Google, sin salir de tu cuenta.</strong></p>
          </div>
        `},
        { tag: 'Práctica integrada', html: `
          <h3>✏️ Ejercicio práctico: simula un flujo completo</h3>
          <div class="slide-info">
            <span class="icon">📋</span>
            <p><strong>Escenario:</strong> Eres secretario/a en una oficina. Tu jefe te da una nota manuscrita pidiéndote que: (1) redactes un oficio, (2) lo envíes al cliente y (3) agendes una reunión.</p>
          </div>
          <h4>✅ Pasos a realizar</h4>
          <ol>
            <li>Redacta un <strong>oficio</strong> en Word dirigido a "Distribuidora La Cosecha, S.A." solicitando una cotización actualizada.</li>
            <li>Guarda el oficio como <code>Oficio_Cotizacion_LaCosecha.docx</code> y exporta a PDF.</li>
            <li>Archiva en la carpeta <code>Secretariado_2025/Oficios/</code>.</li>
            <li>Redacta un correo profesional adjuntando el PDF. Usa etiqueta "Clientes".</li>
            <li>Crea un evento en Google Calendar llamado "Revisar cotización - La Cosecha" en 5 días.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p><strong>¡Completaste el flujo integrado!</strong> Este es exactamente el tipo de tarea que realizarás en un entorno laboral real. Practica hasta que te salga de forma natural y rápida.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Flujo de trabajo', hint: '¿Cuáles son los 4 pasos del flujo de trabajo digital completo?' },
        { term: 'Integración', hint: '¿Cómo se integran Google Drive y Gmail para adjuntar archivos?' },
        { term: 'PDF', hint: '¿Por qué es recomendable enviar documentos en PDF en lugar de Word?' },
        { term: 'Plantilla', hint: '¿Qué ventaja tiene crear plantillas en Word para documentos repetitivos?' },
        { term: 'Seguimiento', hint: '¿Cómo usas Google Calendar para dar seguimiento a un correo enviado?' },
        { term: 'Digitalizar', hint: '¿Qué app de Google permite escanear documentos desde el celular?' },
        { term: 'Ecosistema digital', hint: '¿Qué significa trabajar dentro de un ecosistema digital como el de Google?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Cuál es el flujo correcto para procesar un documento físico?', options: [
          { value: 'a', label: 'Archivar → Digitalizar → Enviar → Agendar' },
          { value: 'b', label: 'Digitalizar → Archivar → Enviar → Agendar' },
          { value: 'c', label: 'Enviar → Digitalizar → Archivar → Agendar' },
          { value: 'd', label: 'Agendar → Digitalizar → Archivar → Enviar' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: '¿Por qué es recomendable enviar documentos en PDF en lugar de Word?', options: [
          { value: 'a', label: 'Porque pesan menos' },
          { value: 'b', label: 'Porque se ven igual en cualquier dispositivo' },
          { value: 'c', label: 'Porque se pueden editar más fácilmente' },
          { value: 'd', label: 'Porque solo el PDF se puede adjuntar en Gmail' }
        ], answer: 'b' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'Google Calendar puede enviar invitaciones por correo electrónico automáticamente.', answer: 'true' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'Un documento predefinido con campos listos para llenar se llama _______.', answer: 'plantilla' }
      ],
      tasks: [
        { id: 'c5t1', title: '🔄 Flujo completo: Oficio real', description: 'Simula ser secretario/a: (1) Redacta un oficio formal en Word solicitando una cotización a una empresa ficticia. (2) Guarda como .docx y .pdf. (3) Archiva en tu estructura de carpetas. (4) Redacta un correo profesional adjuntando el PDF. (5) Crea un evento de seguimiento en Calendar para 1 semana.', evidence: 'Captura del oficio en Word + captura del correo redactado + captura del evento en Calendar.' },
        { id: 'c5t2', title: '📁 Plantilla de minuta', description: 'Crea una plantilla en Word para minutas de reunión. Debe incluir: encabezado con logo ficticio, campos para fecha, asistentes, agenda (tabla de 3 columnas: tema, discusión, acuerdos), y espacio para firma. Guárdala como plantilla (.dotx) en tu carpeta "Plantillas".', evidence: 'Captura de la plantilla abierta en Word con los campos visibles.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre ofimática digital integrada.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es el primer paso del flujo de trabajo digital?', options: [
            { value: 'a', label: 'Enviar por correo' },
            { value: 'b', label: 'Digitalizar' },
            { value: 'c', label: 'Agendar' },
            { value: 'd', label: 'Archivar' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para escanear un documento desde el celular, la app recomendada es:', options: [
            { value: 'a', label: 'Google Fotos' },
            { value: 'b', label: 'Google Drive' },
            { value: 'c', label: 'Gmail' },
            { value: 'd', label: 'Google Calendar' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Un documento en PDF se puede editar tan fácilmente como un documento de Word.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál es el último paso del flujo de trabajo digital?', options: [
            { value: 'a', label: 'Digitalizar' },
            { value: 'b', label: 'Archivar' },
            { value: 'c', label: 'Agendar seguimiento' },
            { value: 'd', label: 'Imprimir' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'En el flujo integrado, después de archivar un documento se debe _______.', answer: 'enviar por correo' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Repaso general + Examen final',
      tagline: 'Demuestra todo lo aprendido en el curso y obtén tu certificado de Cuarto Secretariado.',
      info: [
        { tag: 'Resumen del curso', html: `
          <h3>🎓 Lo que aprendimos en este curso</h3>
          <p>¡Felicitaciones por llegar a la última clase! Repasemos los 4 temas principales:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Archivos y carpetas</h5>
              <p>Explorador de Windows, crear/copiar/mover/eliminar, extensiones, atajos de teclado, organización profesional.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Digitalización y OCR</h5>
              <p>Escanear documentos, reconocimiento óptico de caracteres, Google Docs OCR, Microsoft Lens.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✉️</div>
              <h5>Correo electrónico</h5>
              <p>Gmail, etiquetas, filtros, reglas, búsqueda avanzada, buenas prácticas profesionales, spam.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Agenda digital</h5>
              <p>Google Calendar, eventos, recordatorios, notificaciones, colores, calendarios compartidos.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🔄</span>
            <p><strong>Flujo integrado:</strong> Digitalizar → Archivar → Enviar por correo → Agendar seguimiento. Este ciclo resume todo lo aprendido.</p>
          </div>
        `},
        { tag: 'Repaso: Archivos y OCR', html: `
          <h3>📁📄 Repaso: Gestión de archivos y digitalización</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📂</div>
              <h5>Explorador de archivos</h5>
              <p>Atajos: Ctrl+C (copiar), Ctrl+X (cortar), Ctrl+V (pegar), F2 (renombrar), Supr (eliminar).</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Extensiones</h5>
              <p>.docx (Word), .xlsx (Excel), .pdf (documento portable), .jpg (imagen), .zip (comprimido).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Organización</h5>
              <p>Estructura de carpetas: 01_Cartas, 02_Oficios, 03_Reportes. Nombres descriptivos con guión bajo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>OCR</h5>
              <p>Subir imagen/PDF a Google Drive → Abrir con Google Docs → Texto editable automáticamente.</p>
            </div>
          </div>
          <h4>💡 Preguntas de repaso</h4>
          <ul>
            <li>¿Qué tecla renombra un archivo en el Explorador?</li>
            <li>¿Cuál es la diferencia entre copiar y mover?</li>
            <li>¿Qué extensión tiene una hoja de cálculo de Excel?</li>
            <li>¿Cómo aplicas OCR a una imagen escaneada con Google Drive?</li>
            <li>¿Qué app de Microsoft permite escanear desde el celular?</li>
          </ul>
        `},
        { tag: 'Repaso: Correo y agenda', html: `
          <h3>✉️📅 Repaso: Correo electrónico y agenda digital</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🏷️</div>
              <h5>Etiquetas de Gmail</h5>
              <p>Un correo puede tener varias etiquetas. Más flexible que las carpetas tradicionales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚙️</div>
              <h5>Filtros</h5>
              <p>Reglas automáticas: si el asunto contiene X → aplicar etiqueta Y, marcar importante, archivar.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Búsqueda avanzada</h5>
              <p>from:, has:attachment, before:, label:, is:unread, subject: "texto".</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Google Calendar</h5>
              <p>Eventos (bloque de tiempo), recordatorios (aviso), tareas (pendientes). Notificaciones, colores, compartir.</p>
            </div>
          </div>
          <h4>💡 Preguntas de repaso</h4>
          <ul>
            <li>¿Qué ventaja tienen las etiquetas sobre las carpetas?</li>
            <li>¿Cómo creas un filtro en Gmail para etiquetar correos automáticamente?</li>
            <li>¿Cuál es el operador para buscar correos con archivos adjuntos?</li>
            <li>¿Cuál es la diferencia entre un evento y un recordatorio en Google Calendar?</li>
            <li>¿Cómo compartes tu calendario con otra persona?</li>
          </ul>
        `},
        { tag: 'Consejos para el examen', html: `
          <h3>💡 Consejos para el examen final</h3>
          <ul>
            <li><strong>Lee cada pregunta con calma.</strong> Tienes tiempo de sobra.</li>
            <li><strong>Si no sabes una respuesta, no te detengas.</strong> Pasa a la siguiente y vuelve después.</li>
            <li><strong>En las preguntas verdadero/falso</strong>, piensa: ¿es 100% verdad o 100% falso?</li>
            <li><strong>En las de opción múltiple</strong>, descarta primero las opciones incorrectas.</li>
            <li><strong>En las de completar</strong>, relee la frase con tu respuesta puesta. ¿Suena bien?</li>
            <li><strong>Repasa las palabras clave</strong> de las 5 clases antes de empezar.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">🌟</span>
            <p><strong>Recuerda:</strong> El examen final tiene 15 preguntas y necesitas 60% para aprobar. Cubre los 4 temas del curso más el flujo integrado.</p>
          </div>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p>Al completar el examen con éxito, habrás demostrado dominio de las herramientas digitales fundamentales para el entorno de oficina. ¡Mucho éxito!</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Flujo de trabajo', hint: 'Escribe los 4 pasos del flujo de trabajo digital en orden.' },
        { term: 'OCR', hint: '¿Cómo aplicas OCR a un PDF usando herramientas gratuitas de Google?' },
        { term: 'Etiqueta vs Carpeta', hint: '¿Cuál es la principal diferencia entre etiquetas de Gmail y carpetas tradicionales?' },
        { term: 'Evento vs Recordatorio', hint: '¿Cuándo usas un evento y cuándo un recordatorio en Google Calendar?' },
        { term: 'Extensión de archivo', hint: '¿Qué extensión usarías para guardar un documento que se debe ver igual en cualquier PC?' },
        { term: 'Filtro de Gmail', hint: 'Crea un filtro que archive automáticamente los correos de un remitente específico.' },
        { term: 'Agenda compartida', hint: '¿Qué nivel de permiso usarías para compartir tu calendario con tu jefe?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿Cuál es el orden correcto del flujo de trabajo digital?', options: [
          { value: 'a', label: 'Archivar → Enviar → Digitalizar → Agendar' },
          { value: 'b', label: 'Digitalizar → Archivar → Enviar → Agendar' },
          { value: 'c', label: 'Enviar → Agendar → Digitalizar → Archivar' },
          { value: 'd', label: 'Agendar → Digitalizar → Archivar → Enviar' }
        ], answer: 'b' },
        { id: 'c6e2', n: 2, type: 'tf', prompt: 'Un correo en Gmail solo puede tener una etiqueta a la vez.', answer: 'false' },
        { id: 'c6e3', n: 3, type: 'mc', prompt: '¿Cuál de estos operadores busca correos NO leídos?', options: [
          { value: 'a', label: 'has:attachment' },
          { value: 'b', label: 'is:unread' },
          { value: 'c', label: 'from:cliente' },
          { value: 'd', label: 'before:2025' }
        ], answer: 'b' },
        { id: 'c6e4', n: 4, type: 'mc', prompt: '¿Qué extensión tiene un documento portable que se ve igual en cualquier dispositivo?', options: [
          { value: 'a', label: '.docx' },
          { value: 'b', label: '.xlsx' },
          { value: 'c', label: '.pdf' },
          { value: 'd', label: '.pptx' }
        ], answer: 'c' },
        { id: 'c6e5', n: 5, type: 'fill', prompt: 'La tecla ______ se usa para renombrar un archivo en el Explorador de Windows.', answer: 'F2' }
      ],
      tasks: [
        { id: 'c6t1', title: '🎯 Proyecto final: Flujo completo', description: 'Simula que eres secretario/a de una empresa. Tu jefe te entrega una nota manuscrita (escríbela tú mismo/a) pidiendo: (1) Redactar un oficio formal. (2) Digitalizar la nota original. (3) Archivar ambos documentos en la carpeta correcta. (4) Enviar el oficio por correo a un destinatario ficticio. (5) Agendar una reunión de seguimiento. Documenta cada paso con capturas.', evidence: 'Documento con todas las capturas numeradas del paso 1 al 5.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Repaso final antes del examen acumulativo.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es el atajo para COPIAR un archivo en Windows?', options: [
            { value: 'a', label: 'Ctrl + X' },
            { value: 'b', label: 'Ctrl + C' },
            { value: 'c', label: 'Ctrl + V' },
            { value: 'd', label: 'Ctrl + Z' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué tecnología convierte imágenes de texto en texto editable?', options: [
            { value: 'a', label: 'GPS' },
            { value: 'b', label: 'OCR' },
            { value: 'c', label: 'PDF' },
            { value: 'd', label: 'URL' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'En Gmail, un filtro puede aplicar etiquetas automáticamente.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál es el límite de tamaño para archivos adjuntos en Gmail?', options: [
            { value: 'a', label: '10 MB' },
            { value: 'b', label: '25 MB' },
            { value: 'c', label: '50 MB' },
            { value: 'd', label: '100 MB' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'En Google Calendar, un elemento que ocupa un bloque de tiempo se llama _______.', answer: 'evento' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Cuarto Secretariado',
        description: '15 preguntas cubriendo los 4 temas del curso y el flujo integrado. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Archivos) · ¿Qué tecla se usa para renombrar un archivo en el Explorador de Windows?', options: [{ value: 'a', label: 'F1' }, { value: 'b', label: 'F2' }, { value: 'c', label: 'F3' }, { value: 'd', label: 'F5' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Archivos) · La extensión .xlsx corresponde a:', options: [{ value: 'a', label: 'Word' }, { value: 'b', label: 'Excel' }, { value: 'c', label: 'PowerPoint' }, { value: 'd', label: 'PDF' }], answer: 'b' },
          { id: 'f3', type: 'tf', prompt: 'Tema 1 (Archivos) · Al presionar Supr (Delete), el archivo se elimina permanentemente sin posibilidad de recuperación.', answer: 'false' },
          { id: 'f4', type: 'mc', prompt: 'Tema 2 (OCR) · ¿Qué significa la sigla OCR?', options: [{ value: 'a', label: 'Online Character Reader' }, { value: 'b', label: 'Optical Character Recognition' }, { value: 'c', label: 'Office Computer Resource' }, { value: 'd', label: 'Original Copy Render' }], answer: 'b' },
          { id: 'f5', type: 'mc', prompt: 'Tema 2 (OCR) · ¿Cómo aplicas OCR a una imagen usando Google Drive?', options: [{ value: 'a', label: 'Subir la imagen y hacer clic en "OCR"' }, { value: 'b', label: 'Subir la imagen a Drive y abrirla con Google Docs' }, { value: 'c', label: 'Enviar la imagen por Gmail' }, { value: 'd', label: 'Usar Google Calendar' }], answer: 'b' },
          { id: 'f6', type: 'tf', prompt: 'Tema 2 (OCR) · El OCR funciona igual de bien con cualquier tipo de letra, incluso manuscrita.', answer: 'false' },
          { id: 'f7', type: 'mc', prompt: 'Tema 3 (Correo) · En Gmail, las categorías que creas para organizar correos se llaman:', options: [{ value: 'a', label: 'Carpetas' }, { value: 'b', label: 'Etiquetas' }, { value: 'c', label: 'Buzones' }, { value: 'd', label: 'Archivos' }], answer: 'b' },
          { id: 'f8', type: 'mc', prompt: 'Tema 3 (Correo) · ¿Cuál es el operador para buscar correos con archivos adjuntos?', options: [{ value: 'a', label: 'from:' }, { value: 'b', label: 'subject:' }, { value: 'c', label: 'has:attachment' }, { value: 'd', label: 'is:unread' }], answer: 'c' },
          { id: 'f9', type: 'tf', prompt: 'Tema 3 (Correo) · Un correo en Gmail puede tener varias etiquetas al mismo tiempo.', answer: 'true' },
          { id: 'f10', type: 'mc', prompt: 'Tema 4 (Agenda) · ¿Cuál es la diferencia entre un EVENTO y un RECORDATORIO en Google Calendar?', options: [{ value: 'a', label: 'No hay diferencia' }, { value: 'b', label: 'El evento tiene hora de inicio y fin; el recordatorio solo avisa' }, { value: 'c', label: 'El recordatorio ocupa un bloque en el calendario' }, { value: 'd', label: 'El evento no puede tener notificaciones' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Agenda) · Al compartir tu calendario con "Ver solo disponibilidad", la otra persona:', options: [{ value: 'a', label: 'Ve todos los detalles de los eventos' }, { value: 'b', label: 'Ve si estás ocupado pero no los detalles' }, { value: 'c', label: 'Puede editar los eventos' }, { value: 'd', label: 'No ve nada' }], answer: 'b' },
          { id: 'f12', type: 'tf', prompt: 'Tema 4 (Agenda) · En Google Calendar, la tecla de acceso rápido C crea un nuevo evento.', answer: 'true' },
          { id: 'f13', type: 'mc', prompt: 'Flujo integrado · ¿Cuál es el orden correcto del flujo de trabajo digital?', options: [{ value: 'a', label: 'Archivar → Enviar → Digitalizar → Agendar' }, { value: 'b', label: 'Digitalizar → Archivar → Enviar → Agendar' }, { value: 'c', label: 'Enviar → Agendar → Digitalizar → Archivar' }, { value: 'd', label: 'Agendar → Digitalizar → Archivar → Enviar' }], answer: 'b' },
          { id: 'f14', type: 'mc', prompt: 'Flujo integrado · ¿Por qué es recomendable enviar documentos en PDF?', options: [{ value: 'a', label: 'Porque pesan menos' }, { value: 'b', label: 'Porque se ven igual en cualquier dispositivo' }, { value: 'c', label: 'Porque se pueden editar fácilmente' }, { value: 'd', label: 'Porque solo el PDF se puede adjuntar en Gmail' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · La app de Google que permite escanear documentos desde el celular se llama Google _______.', answer: 'Drive' }
        ]
      }
    }
  ]
};
