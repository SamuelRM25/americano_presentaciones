const COURSE_DATA = {
  grade: 'cuarto_madurez',
  title: 'Tecnologías de la Información y la Comunicación',
  subtitle: 'Cuarto Bachillerato por Madurez',
  classes: [
    {
      id: 'c1', num: 1, icon: '🖥️',
      title: 'Hardware y software: componentes básicos',
      tagline: 'Conoce las piezas que hacen funcionar tu computadora y los programas que las controlan.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 Bienvenido a tu primera clase</h3>
          <p>En esta clase vamos a conocer las <strong>piezas fundamentales</strong> que componen una computadora y cómo interactúan entre sí. Empezaremos desde lo más básico: ¿qué es realmente una computadora? ¿Qué la hace funcionar? Y lo más importante: ¿cuáles son sus componentes?</p>
          <p>Al finalizar esta clase serás capaz de identificar cada componente físico de un equipo (hardware) y los principales tipos de programas (software) que utiliza.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Dato curioso:</strong> La primera computadora electrónica, la ENIAC (1945), pesaba 27 toneladas, ocupaba 167 m² y consumía 150.000 vatios. Tu laptop actual es millones de veces más potente.</p>
          </div>
          <h3>🎯 Objetivos de la clase</h3>
          <ul>
            <li>Diferenciar entre hardware y software.</li>
            <li>Identificar los componentes internos principales de una computadora.</li>
            <li>Reconocer los dispositivos periféricos de entrada, salida y mixtos.</li>
            <li>Clasificar el software en sus diferentes categorías.</li>
            <li>Comprender el proceso de arranque (boot) del sistema.</li>
          </ul>
        `},
        { tag: 'Definiciones', html: `
          <h3>📖 ¿Qué es hardware y qué es software?</h3>
          <p>Imagina que una computadora es una <strong>persona</strong>:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🦴</div>
              <h5>Hardware</h5>
              <p>Es el <strong>cuerpo físico</strong>: las piezas tangibles que puedes tocar. El procesador, la memoria, la pantalla, el teclado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧠</div>
              <h5>Software</h5>
              <p>Es la <strong>mente e instrucciones</strong>: los programas que le dicen al hardware qué hacer. Windows, Word, un juego.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🤝</span>
            <p>Hardware y software <strong>necesitan trabajar juntos</strong>. Sin software, el hardware es un conjunto inerte de piezas. Sin hardware, el software no tiene dónde ejecutarse.</p>
          </div>
        `},
        { tag: 'Componentes internos', html: `
          <h3>🔩 Componentes internos principales</h3>
          <p>Son las piezas que están <strong>dentro del gabinete/torre</strong> o soldadas en la laptop. Conócelas una por una:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🧠</div>
              <h5>CPU / Procesador</h5>
              <p>El "cerebro". Ejecuta instrucciones. Marcas líderes: Intel y AMD. Se mide por GHz y núcleos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>Memoria RAM</h5>
              <p>Memoria de trabajo temporal. Se borra al apagar. Más RAM = más programas abiertos a la vez.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💾</div>
              <h5>Disco duro / SSD</h5>
              <p>Almacenamiento permanente: fotos, documentos, sistema. Los SSD son mucho más rápidos que los HDD.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔌</div>
              <h5>Placa base (motherboard)</h5>
              <p>La "espina dorsal" que conecta todos los componentes entre sí.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎨</div>
              <h5>Tarjeta gráfica (GPU)</h5>
              <p>Procesa imágenes y video. Esencial para juegos y diseño. Puede ser integrada o dedicada.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔋</div>
              <h5>Fuente de alimentación</h5>
              <p>Convierte la corriente alterna (AC) del enchufe en corriente continua (DC) que usan los componentes.</p>
            </div>
          </div>
        `},
        { tag: 'Periféricos', html: `
          <h3>🖱️ Dispositivos periféricos</h3>
          <p>Son los dispositivos que se <strong>conectan al equipo</strong> para extender sus capacidades. Se clasifican en tres grandes grupos:</p>
          <h4>📥 Periféricos de entrada (envían datos HACIA la computadora)</h4>
          <ul>
            <li><strong>Teclado</strong>: introduce texto y comandos.</li>
            <li><strong>Ratón (mouse)</strong>: señala y hace clic.</li>
            <li><strong>Escáner</strong>: digitaliza imágenes y documentos.</li>
            <li><strong>Micrófono</strong>: captura audio y voz.</li>
            <li><strong>Cámara web (webcam)</strong>: captura video en tiempo real.</li>
            <li><strong>Lector de código de barras</strong>: lee productos en tiendas.</li>
          </ul>
          <h4>📤 Periféricos de salida (la computadora envía datos HACIA ti)</h4>
          <ul>
            <li><strong>Monitor/pantalla</strong>: muestra información visual.</li>
            <li><strong>Impresora</strong>: saca información en papel.</li>
            <li><strong>Altavoces/parlantes</strong>: emiten sonido.</li>
            <li><strong>Auriculares</strong>: audio personal.</li>
            <li><strong>Proyector</strong>: muestra imagen en pared/pantalla grande.</li>
          </ul>
          <h4>🔄 Periféricos mixtos (entrada + salida)</h4>
          <ul>
            <li><strong>Pantalla táctil</strong>: muestra y recibe toques.</li>
            <li><strong>Disco duro externo</strong>: lee y escribe datos.</li>
            <li><strong>Memoria USB</strong>: almacena y recupera archivos.</li>
            <li><strong>Módem/router</strong>: envía y recibe datos de internet.</li>
          </ul>
        `},
        { tag: 'Tipos de software', html: `
          <h3>💿 Clasificación del software</h3>
          <p>El software se divide en dos grandes familias: <strong>sistema</strong> y <strong>aplicación</strong>.</p>
          <h4>🛠️ Software de sistema</h4>
          <p>Es el que <strong>controla el hardware</strong> y permite que otros programas funcionen.</p>
          <ul>
            <li><strong>Sistema operativo</strong>: Windows, macOS, Linux, Android, iOS. Sin él, la PC no funciona.</li>
            <li><strong>Controladores (drivers)</strong>: pequeños programas que permiten al SO hablar con cada pieza de hardware.</li>
            <li><strong>Utilerías</strong>: antivirus, desfragmentadores, limpiadores, herramientas de respaldo.</li>
            <li><strong>BIOS/UEFI</strong>: programa grabado en la placa base que arranca el equipo antes del SO.</li>
          </ul>
          <h4>📦 Software de aplicación</h4>
          <p>Son los programas que <strong>usa el usuario</strong> para tareas específicas.</p>
          <ul>
            <li><strong>Productividad</strong>: Microsoft Office, Google Docs, LibreOffice.</li>
            <li><strong>Navegadores</strong>: Chrome, Firefox, Edge, Safari.</li>
            <li><strong>Comunicación</strong>: WhatsApp Web, Zoom, Gmail.</li>
            <li><strong>Diseño</strong>: Photoshop, Illustrator, Canva, GIMP.</li>
            <li><strong>Entretenimiento</strong>: Spotify, Netflix, Steam, juegos.</li>
            <li><strong>Educación</strong>: Duolingo, Khan Academy, Moodle.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>También existe el <strong>software de programación</strong>, que son las herramientas (editores, compiladores) que usan los programadores para crear otros programas.</p>
          </div>
        `},
        { tag: 'Arranque y cierre', html: `
          <h3>🚀 ¿Cómo enciende una computadora?</h3>
          <p>El proceso de <strong>arranque (boot)</strong> sigue estos pasos:</p>
          <ol>
            <li>Pulsas el botón de encendido y llega corriente a la fuente.</li>
            <li>La <strong>BIOS/UEFI</strong> (chip de la placa base) se ejecuta y hace un <strong>POST</strong> (Power-On Self-Test): verifica que CPU, RAM y disco funcionen.</li>
            <li>La BIOS busca un dispositivo de arranque (disco duro, SSD, USB).</li>
            <li>Carga el <strong>gestor de arranque</strong> (bootloader) del disco.</li>
            <li>Se carga el <strong>núcleo (kernel)</strong> del sistema operativo en la RAM.</li>
            <li>Se inician los servicios y programas de inicio.</li>
            <li>Aparece la pantalla de login: ya puedes usar la PC.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Cuidado con los cortes de luz</strong> durante el arranque: pueden dañar archivos del sistema. Por eso existen los UPS (sistemas de alimentación ininterrumpida).</p>
          </div>
          <h3>🔚 ¿Y cómo se apaga correctamente?</h3>
          <p>Nunca desconectes directo. Siempre usa <strong>Inicio → Apagar</strong> (o Shift + Apagar para hibernar). El sistema guarda configuraciones abiertas y detiene procesos de forma segura.</p>
        `}
      ],
      keywords: [
        { term: 'Hardware', hint: 'Busca: ¿de dónde viene la palabra y qué otras cosas incluye además de lo visto en clase?' },
        { term: 'Software', hint: 'Diferencia entre software de sistema y de aplicación. Da 3 ejemplos de cada uno.' },
        { term: 'CPU', hint: 'Explica qué significa "núcleos" e "hilos" en un procesador moderno.' },
        { term: 'Memoria RAM', hint: '¿Por qué se llama "de acceso aleatorio"? ¿Qué pasa si se llena?' },
        { term: 'SSD', hint: 'Diferencias entre SSD y HDD. ¿Cuál es más rápido? ¿Cuál más barato?' },
        { term: 'Placa base', hint: '¿Qué chipset tiene y qué conectores principales ofrece?' },
        { term: 'Periférico', hint: 'Clasifica tu ratón, tu monitor y tu USB. ¿Entrada, salida o mixto?' },
        { term: 'BIOS / UEFI', hint: '¿Qué significan estas siglas y cuál es la diferencia?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Cuál de los siguientes es un ejemplo de HARDWARE?', options: [
          { value: 'a', label: 'Microsoft Word' },
          { value: 'b', label: 'Una memoria USB' },
          { value: 'c', label: 'Google Chrome' },
          { value: 'd', label: 'El sistema operativo Windows' }
        ], answer: 'b', explain_ok: 'La USB es tangible, puedes tocarla.' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: 'El componente conocido como el "cerebro" de la computadora es:', options: [
          { value: 'a', label: 'La memoria RAM' },
          { value: 'b', label: 'El disco duro' },
          { value: 'c', label: 'La CPU' },
          { value: 'd', label: 'La fuente de poder' }
        ], answer: 'c', explain_ok: 'La CPU (Unidad Central de Procesamiento) ejecuta las instrucciones.' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'La memoria RAM conserva la información de forma permanente, incluso después de apagar la computadora.', answer: 'false', explain: 'La RAM es VOLÁTIL: pierde todo al apagar. El almacenamiento permanente es el disco duro o SSD.' },
        { id: 'c1e4', n: 4, type: 'mc', prompt: 'Un ejemplo de periférico MIXTO (entrada y salida) es:', options: [
          { value: 'a', label: 'El monitor' },
          { value: 'b', label: 'El teclado' },
          { value: 'c', label: 'La pantalla táctil' },
          { value: 'd', label: 'La impresora' }
        ], answer: 'c', explain_ok: 'La pantalla táctil muestra imágenes y recibe toques.' },
        { id: 'c1e5', n: 5, type: 'fill', prompt: 'El software que controla el hardware y permite que otros programas funcionen se llama software de _____.', answer: 'sistema' }
      ],
      tasks: [
        { id: 'c1t1', title: '🔍 Investigación en tu hogar', description: 'Identifica en tu casa (o en la foto de un equipo) los siguientes componentes: CPU, RAM, disco, monitor, teclado, mouse. Anota la marca o modelo de cada uno si los conoces.', evidence: 'Toma una foto o dibuja un esquema y márcalos.' },
        { id: 'c1t2', title: '📊 Tabla comparativa', description: 'Crea una tabla con dos columnas: "Hardware" y "Software". Escribe al menos 5 ejemplos en cada columna que uses en tu vida diaria.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas para demostrar lo aprendido.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué componente es considerado el "cerebro" de la computadora?', options: [
            { value: 'a', label: 'Disco duro' },
            { value: 'b', label: 'Memoria RAM' },
            { value: 'c', label: 'Procesador (CPU)' },
            { value: 'd', label: 'Monitor' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál de estos es software de APLICACIÓN?', options: [
            { value: 'a', label: 'Windows 11' },
            { value: 'b', label: 'Linux Ubuntu' },
            { value: 'c', label: 'Microsoft Excel' },
            { value: 'd', label: 'macOS' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Una impresora es únicamente un periférico de salida.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'La BIOS/UEFI se encarga de:', options: [
            { value: 'a', label: 'Reproducir música' },
            { value: 'b', label: 'Iniciar el hardware y buscar el sistema operativo' },
            { value: 'c', label: 'Conectar a internet' },
            { value: 'd', label: 'Editar fotos' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Las siglas CPU significan: Unidad Central de _______.', answer: 'procesamiento' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🧹',
      title: 'Mantenimiento preventivo del equipo (físico)',
      tagline: 'Aprende a cuidar tu equipo para que dure muchos años.',
      info: [
        { tag: 'Introducción', html: `
          <h3>🛡️ ¿Por qué es importante el mantenimiento?</h3>
          <p>Una computadora bien cuidada puede durar <strong>más de 8 años</strong> funcionando correctamente. Una descuidada puede fallar en menos de 3. El <strong>mantenimiento preventivo</strong> es como ir al médico: mejor prevenir que reparar.</p>
          <div class="slide-warn">
            <span class="icon">📊</span>
            <p><strong>Dato importante:</strong> El 80% de las fallas en computadoras se deben a falta de mantenimiento. El polvo, el calor y los descuidos del usuario son los peores enemigos.</p>
          </div>
          <h3>🎯 Objetivos de la clase</h3>
          <ul>
            <li>Conocer las tareas de mantenimiento físico del hardware.</li>
            <li>Aprender a limpiar correctamente los componentes.</li>
            <li>Identificar los factores que dañan un equipo (calor, humedad, polvo).</li>
            <li>Establecer una rutina de cuidado periódico.</li>
            <li>Saber cómo organizar y proteger los cables.</li>
          </ul>
        `},
        { tag: 'Limpieza externa', html: `
          <h3>🧼 Limpieza externa del equipo</h3>
          <p>Es lo más básico y debes hacerlo <strong>al menos una vez al mes</strong>.</p>
          <h4>🖥️ Monitor / pantalla</h4>
          <ul>
            <li>Apaga y desconecta el monitor.</li>
            <li>Usa un <strong>paño de microfibra</strong> ligeramente humedecido (nunca en chorro).</li>
            <li>Pasa de arriba hacia abajo, sin presionar fuerte.</li>
            <li>Para manchas difíciles, usa una mezcla 50/50 de agua y vinagre blanco.</li>
            <li><strong>NUNCA</strong> uses productos con amoníaco, alcohol o limpiadores de vidrio (dañan el coating).</li>
          </ul>
          <h4>⌨️ Teclado</h4>
          <ul>
            <li>Voltéalo y sacúdelo suavemente para que caigan migajas.</li>
            <li>Usa aire comprimido entre las teclas.</li>
            <li>Pasa un hisopo con alcohol isopropílico al 70% por la superficie.</li>
            <li>Si puedes retirar las teclas (cuidado con laptops), límpialas una por una.</li>
          </ul>
          <h4>🖱️ Mouse</h4>
          <ul>
            <li>Pasa un paño con alcohol por la superficie.</li>
            <li>Si es óptico, limpia el LED inferior con un hisopo.</li>
            <li>Para mouse con bola (antiguos): abre la tapa, saca la bola y limpia las ruedas interiores.</li>
          </ul>
        `},
        { tag: 'Limpieza interna', html: `
          <h3>🔧 Limpieza interna (dentro del gabinete/laptop)</h3>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>PRECAUCIÓN:</strong> Siempre apaga y desconecta el equipo de la corriente antes de abrirlo. Toca una superficie metálica para descargarte de estática.</p>
          </div>
          <h4>🌀 Ventiladores (coolers)</h4>
          <p>Son los que más polvo acumulan. Cuando se llenan, el equipo se sobrecalienta.</p>
          <ul>
            <li>Usa <strong>aire comprimido</strong> en ráfagas cortas (no sostenidas, daña los rodamientos).</li>
            <li>Sujeta el aspa del ventilador con un dedo para que no gire (girar forzado lo daña).</li>
            <li>Aplica una <strong>gota de aceite lubricante</strong> (de máquina de coser) en el eje si hace ruido.</li>
          </ul>
          <h4>🔥 Pasta térmica</h4>
          <p>Es un compuesto que se pone entre el procesador y el disipador para mejorar la transferencia de calor. Se seca cada 2-3 años y debe reemplazarse.</p>
          <h4>🌪️ Filtros de polvo</h4>
          <p>Muchos gabinetes traen filtros en las entradas de aire. Límpialos con agua y sécalos completamente antes de ponerlos de nuevo.</p>
        `},
        { tag: 'Factores de riesgo', html: `
          <h3>☠️ Enemigos de tu equipo</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🌡️</div>
              <h5>Calor</h5>
              <p>El enemigo #1. Por encima de 70°C los componentes se degradan. Mantén ventilado el equipo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💧</div>
              <h5>Humedad y líquidos</h5>
              <p>Causan cortocircuitos. Nunca bebas cerca del teclado. Si derramas, apaga y seca inmediatamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🌫️</div>
              <h5>Polvo</h5>
              <p>Se acumula y bloquea la ventilación. Limpia con aire comprimido cada 3-6 meses.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>Variaciones eléctricas</h5>
              <p>Apagones y picos de voltaje. Usa un regulador o UPS.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🍔</div>
              <h5>Comida y bebida</h5>
              <p>Migas, azúcar y líquidos son letales para el teclado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☀️</div>
              <h5>Luz solar directa</h5>
              <p>Daña la pantalla y calienta el equipo. Ubícalo en sombra.</p>
            </div>
          </div>
        `},
        { tag: 'Cables y entorno', html: `
          <h3>🔌 Organización de cables y entorno adecuado</h3>
          <p>Un <strong>entorno ordenado</strong> no es solo estético: previene accidentes y facilita la ventilación.</p>
          <h4>📏 Buenas prácticas con cables</h4>
          <ul>
            <li>Usa <strong>bridas o cinchos</strong> para agrupar cables.</li>
            <li>Etiqueta los cables con etiquetas adhesivas.</li>
            <li>No tires de los cables para desconectar: agarra siempre la clavija.</li>
            <li>No enrolles los cables muy ajustados (puede dañar el interior).</li>
            <li>Los cables de alimentación deben tener un poco de holgura.</li>
          </ul>
          <h4>🏠 Ubicación del equipo</h4>
          <ul>
            <li>Sobre un escritorio firme, nunca en el piso (allí va el polvo).</li>
            <li>Alejado de ventanas (sol, lluvia) y radiadores (calor).</li>
            <li>Con al menos 10 cm de espacio libre a los lados para ventilación.</li>
            <li>En una superficie no conductora (madera, plástico), nunca metálica.</li>
            <li>Lejos de campos magnéticos fuertes (parlantes grandes, imanes).</li>
          </ul>
        `},
        { tag: 'Rutina preventiva', html: `
          <h3>📅 Rutina de mantenimiento recomendada</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Diario</h5>
              <p>Limpia la pantalla y el escritorio. Apaga correctamente al final del día.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗓️</div>
              <h5>Semanal</h5>
              <p>Limpia el exterior con paño microfibra. Saca el polvo visible.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗓️</div>
              <h5>Mensual</h5>
              <p>Limpia teclado y mouse a fondo. Revisa cables y conexiones.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗓️</div>
              <h5>Trimestral</h5>
              <p>Aire comprimido en ventiladores. Limpieza interna básica.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗓️</div>
              <h5>Semestral</h5>
              <p>Limpieza interna profunda. Revisar pasta térmica cada 2 años.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗓️</div>
              <h5>Anual</h5>
              <p>Respaldo completo. Revisión profesional si hay ruidos raros.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">📝</span>
            <p><strong>Tip profesional:</strong> Lleva un registro de las limpiezas y revisiones. Esto ayuda a detectar patrones y predecir fallas.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Mantenimiento preventivo', hint: 'Diferencia con el mantenimiento correctivo. ¿Cuándo conviene cada uno?' },
        { term: 'Estática', hint: '¿Qué es la electricidad estática y cómo puede dañar tu PC al tocarla?' },
        { term: 'Pasta térmica', hint: '¿De qué está hecha y por qué se debe reemplazar?' },
        { term: 'Aire comprimido', hint: '¿Por qué se vende enlatado y no se puede usar un soplete?' },
        { term: 'UPS', hint: 'Diferencia entre UPS, regulador y supresor de picos.' },
        { term: 'Refrigeración líquida', hint: '¿En qué casos se usa y qué ventajas tiene sobre los ventiladores?' },
        { term: 'Tarjeta madre', hint: 'Busca: ¿qué significa "limpieza de los slots de RAM con goma de borrar"?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Con qué frecuencia mínima se recomienda limpiar el polvo interno de un equipo de escritorio?', options: [
          { value: 'a', label: 'Una vez al año' },
          { value: 'b', label: 'Cada 3 a 6 meses' },
          { value: 'c', label: 'Una vez cada 5 años' },
          { value: 'd', label: 'Nunca, la PC se limpia sola' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'tf', prompt: 'Es seguro limpiar el interior de una computadora con un soplete de aire a alta presión.', answer: 'false', explain: 'El aire comprimido debe aplicarse en ráfagas cortas; alta presión daña los rodamientos de los ventiladores.' },
        { id: 'c2e3', n: 3, type: 'mc', prompt: '¿Cuál es la función principal de un UPS?', options: [
          { value: 'a', label: 'Acelerar el procesador' },
          { value: 'b', label: 'Mantener energía durante apagones breves' },
          { value: 'c', label: 'Limpiar el polvo interno' },
          { value: 'd', label: 'Refrigerar la CPU' }
        ], answer: 'b' },
        { id: 'c2e4', n: 4, type: 'mc', prompt: 'Antes de abrir un equipo para limpiarlo internamente, lo primero que debes hacer es:', options: [
          { value: 'a', label: 'Tocar el procesador' },
          { value: 'b', label: 'Apagar y desconectar de la corriente' },
          { value: 'c', label: 'Vaciar la papelera' },
          { value: 'd', label: 'Actualizar el antivirus' }
        ], answer: 'b' }
      ],
      tasks: [
        { id: 'c2t1', title: '🧹 Limpieza real', description: 'Realiza una limpieza externa completa de tu equipo (o del equipo del aula) y documenta con 3 fotos: antes, durante y después.', evidence: 'Sube las fotos a una carpeta compartida o muéstralas al profesor.' },
        { id: 'c2t2', title: '📋 Plan de mantenimiento', description: 'Crea un calendario mensual con las tareas de mantenimiento que aplicarás a tu equipo personal. Incluye fechas y recordatorios.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre mantenimiento físico.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'El enemigo número uno de los componentes electrónicos es:', options: [
            { value: 'a', label: 'El polvo' },
            { value: 'b', label: 'El calor excesivo' },
            { value: 'c', label: 'El sonido fuerte' },
            { value: 'd', label: 'Los colores brillantes' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para limpiar el monitor se recomienda usar:', options: [
            { value: 'a', label: 'Un trapo con amoníaco' },
            { value: 'b', label: 'Alcohol en gel' },
            { value: 'c', label: 'Paño de microfibra ligeramente húmedo' },
            { value: 'd', label: 'Papel higiénico' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'La pasta térmica se debe reemplazar cada 2 a 3 años.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El aire comprimido se debe aplicar a los ventiladores:', options: [
            { value: 'a', label: 'De forma continua por 1 minuto' },
            { value: 'b', label: 'En ráfagas cortas, sujetando el aspa' },
            { value: 'c', label: 'Nunca, se dañan' },
            { value: 'd', label: 'Con el equipo encendido' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Antes de abrir un equipo, debemos descargarnos de la energía _____.', answer: 'estática' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '🛡️',
      title: 'Mantenimiento preventivo del software',
      tagline: 'Mantén tu sistema rápido, seguro y actualizado.',
      info: [
        { tag: 'Introducción', html: `
          <h3>🧹 Mantenimiento lógico: el otro lado del cuidado</h3>
          <p>De nada sirve tener un equipo limpio por fuera si por dentro está lleno de virus, archivos basura y programas desactualizados. El <strong>mantenimiento de software</strong> es igual de importante que el físico.</p>
          <div class="slide-info">
            <span class="icon">⏱️</span>
            <p>Dedicar <strong>30 minutos al mes</strong> al mantenimiento lógico puede duplicar la velocidad de un equipo y prevenir la pérdida de datos.</p>
          </div>
          <h3>🎯 Objetivos de la clase</h3>
          <ul>
            <li>Aprender a actualizar correctamente el sistema operativo.</li>
            <li>Conocer y usar un antivirus.</li>
            <li>Liberar espacio en disco y limpiar archivos innecesarios.</li>
            <li>Configurar copias de seguridad automáticas.</li>
            <li>Identificar y eliminar programas maliciosos.</li>
          </ul>
        `},
        { tag: 'Actualizaciones', html: `
          <h3>🔄 Actualizaciones del sistema y programas</h3>
          <p>Las actualizaciones no son opcionales: corrigen <strong>fallos de seguridad</strong>, mejoran el rendimiento y agregan funciones.</p>
          <h4>🪟 En Windows</h4>
          <ul>
            <li>Ve a <strong>Configuración → Windows Update</strong>.</li>
            <li>Activa las actualizaciones automáticas.</li>
            <li>Tipos: seguridad (críticas), de características (nuevas funciones), de controladores.</li>
            <li>Reinicia cuando te lo pida (muchas actualizaciones lo requieren).</li>
          </ul>
          <h4>🍎 En macOS</h4>
          <ul>
            <li>Menú 🍎 → Configuración del Sistema → Actualización de software.</li>
            <li>Activa "Actualizar mi Mac automáticamente".</li>
          </ul>
          <h4>🐧 En Linux</h4>
          <ul>
            <li>En Ubuntu: <code>sudo apt update && sudo apt upgrade</code> en la terminal.</li>
            <li>O usa el "Actualizador de software" gráfico.</li>
          </ul>
          <h4>📦 Actualizar programas instalados</h4>
          <p>No solo el SO. También los navegadores, plugins y demás aplicaciones. Usa el actualizador automático de cada programa o herramientas como <strong>Patch My PC</strong> o <strong>Chocolatey</strong> en Windows.</p>
        `},
        { tag: 'Antivirus y seguridad', html: `
          <h3>🦠 Antivirus y antimalware</h3>
          <p>Un <strong>antivirus</strong> es un programa que detecta, previene y elimina software malicioso. Pero no necesitas gastar dinero: hay excelentes opciones gratuitas.</p>
          <h4>🏆 Antivirus recomendados (gratuitos)</h4>
          <ul>
            <li><strong>Windows Defender</strong>: ya viene con Windows 10/11 y es muy bueno.</li>
            <li><strong>Avast Free</strong> / <strong>AVG Free</strong>: clásicos y efectivos.</li>
            <li><strong>Bitdefender Free</strong>: ligero y potente.</li>
            <li><strong>Malwarebytes</strong>: excelente complemento para análisis puntuales.</li>
          </ul>
          <h4>🔍 Tipos de malware</h4>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">🐛</div><h5>Virus</h5><p>Se adjunta a archivos y se propaga.</p></div>
            <div class="grid-item"><div class="icon">🕷️</div><h5>Gusano</h5><p>Se replica por la red sin acción del usuario.</p></div>
            <div class="grid-item"><div class="icon">🎣</div><h5>Phishing</h5><p>Engaño para robar contraseñas.</p></div>
            <div class="grid-item"><div class="icon">🔒</div><h5>Ransomware</h5><p>Encripta tus archivos y pide rescate.</p></div>
            <div class="grid-item"><div class="icon">👁️</div><h5>Spyware</h5><p>Espía tu actividad.</p></div>
            <div class="grid-item"><div class="icon">📢</div><h5>Adware</h5><p>Muestra publicidad no deseada.</p></div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Regla de oro:</strong> nunca tengas dos antivirus en tiempo real al mismo tiempo. Se bloquean entre sí y vuelven el equipo lentísimo.</p>
          </div>
        `},
        { tag: 'Limpieza de disco', html: `
          <h3>🗑️ Liberar espacio y limpiar el sistema</h3>
          <p>Con el tiempo se acumulan archivos temporales, caché y programas que ya no usas. Esto ocupa espacio y ralentiza el equipo.</p>
          <h4>🧽 Liberador de espacio en Windows</h4>
          <ol>
            <li>Presiona <strong>Win + S</strong> y escribe "Liberador de espacio".</li>
            <li>Selecciona la unidad C:.</li>
            <li>Marca: Archivos temporales, Papelera de reciclaje, Caché de miniaturas.</li>
            <li>Haz clic en "Liberar espacio" y espera.</li>
            <li>Para una limpieza más profunda, marca "Limpiar archivos del sistema".</li>
          </ol>
          <h4>📁 ¿Qué archivos puedo borrar con seguridad?</h4>
          <ul>
            <li>Archivos en <strong>Descargas</strong> que ya no necesites.</li>
            <li>Documentos en <strong>Papelera de reciclaje</strong>.</li>
            <li>Videos y fotos duplicados o muy antiguos.</li>
            <li>Programas que no usas: <strong>Configuración → Aplicaciones</strong>.</li>
            <li>Archivos temporales (<code>%TEMP%</code>) y caché del navegador.</li>
          </ul>
          <h4>❌ Lo que NUNCA debes borrar</h4>
          <ul>
            <li>Archivos en <code>C:\Windows</code> o <code>C:\Archivos de programa</code>.</li>
            <li>La carpeta <code>System32</code>.</li>
            <li>Archivos con extensiones <code>.dll</code>, <code>.sys</code> si no sabes qué son.</li>
          </ul>
        `},
        { tag: 'Respaldos', html: `
          <h3>💾 Copias de seguridad (backups)</h3>
          <p>"Si no tienes respaldo, no tienes nada". Las copias de seguridad son tu <strong>seguro contra la pérdida de datos</strong>.</p>
          <h4>📋 Regla 3-2-1 (estándar profesional)</h4>
          <ul>
            <li><strong>3</strong> copias de tus datos importantes.</li>
            <li><strong>2</strong> en soportes diferentes (disco local + nube, por ejemplo).</li>
            <li><strong>1</strong> fuera de tu casa u oficina.</li>
          </ul>
          <h4>☁️ Servicios en la nube</h4>
          <ul>
            <li><strong>Google Drive</strong>: 15 GB gratis. Integración con Gmail y Docs.</li>
            <li><strong>OneDrive</strong>: 5 GB gratis. Integrado en Windows.</li>
            <li><strong>Dropbox</strong>: 2 GB gratis. Sincronización rápida.</li>
            <li><strong>iCloud</strong>: 5 GB gratis. Para usuarios de Apple.</li>
          </ul>
          <h4>💽 En Windows</h4>
          <p>Usa <strong>Historial de archivos</strong>: Configuración → Sistema → Almacenamiento → Opciones de copia de seguridad. Conecta un disco externo y se harán copias automáticas.</p>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Configura las copias automáticas y olvídate. Que el sistema trabajje por ti.</p>
          </div>
        `},
        { tag: 'Buenas prácticas', html: `
          <h3>🌟 Buenas prácticas de uso diario</h3>
          <ul>
            <li><strong>No instales programas de dudosa procedencia.</strong> Usa páginas oficiales.</li>
            <li><strong>Desconfía de adjuntos en correos</strong> de remitentes desconocidos.</li>
            <li><strong>Usa contraseñas seguras</strong> y diferentes para cada servicio. Considera un gestor como Bitwarden o KeePass.</li>
            <li><strong>Activa la verificación en dos pasos</strong> (2FA) en tus cuentas importantes.</li>
            <li><strong>No hagas clic en enlaces sospechosos</strong>. Pasa el mouse por encima para ver la URL real.</li>
            <li><strong>Cierra sesión</strong> cuando uses equipos compartidos.</li>
            <li><strong>Usa un navegador actualizado</strong> y un bloqueador de anuncios (uBlock Origin).</li>
            <li><strong>Configura el firewall</strong> de tu sistema operativo.</li>
            <li><strong>Haz respaldo antes</strong> de instalar algo nuevo o actualizar el sistema.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>El <strong>sentido común</strong> es la mejor herramienta de seguridad. Si algo parece demasiado bueno o te genera duda, no lo abras.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Malware', hint: 'Diferencia entre virus, gusano, troyano y ransomware. Da un ejemplo de daño de cada uno.' },
        { term: 'Phishing', hint: '¿Cómo identificar un correo phishing? Da señales de alerta.' },
        { term: 'Firewall', hint: '¿Qué hace el firewall y por qué no debe desactivarse?' },
        { term: 'Copia de seguridad', hint: 'Explica la regla 3-2-1 con un ejemplo personal.' },
        { term: 'Antivirus', hint: '¿Por qué no se deben instalar dos antivirus en tiempo real al mismo tiempo?' },
        { term: 'Actualización', hint: '¿Qué tipos de actualizaciones existen (seguridad, drivers, características)?' },
        { term: 'Disco de arranque', hint: '¿Cómo se crea un USB de arranque para reparar el sistema?' },
        { term: 'CCleaner', hint: 'Investiga: ¿es seguro? ¿Qué alternativas hay?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '¿Cuál de las siguientes NO es una buena práctica de seguridad?', options: [
          { value: 'a', label: 'Activar verificación en dos pasos' },
          { value: 'b', label: 'Usar la misma contraseña en todas las cuentas' },
          { value: 'c', label: 'Mantener el sistema operativo actualizado' },
          { value: 'd', label: 'Hacer respaldos periódicos' }
        ], answer: 'b', explain: 'Reutilizar contraseñas es uno de los errores más peligrosos.' },
        { id: 'c3e2', n: 2, type: 'tf', prompt: 'La regla 3-2-1 de respaldos significa: 3 copias, en 2 soportes, 1 fuera del lugar.', answer: 'true' },
        { id: 'c3e3', n: 3, type: 'mc', prompt: 'Un ransomware es un malware que:', options: [
          { value: 'a', label: 'Muestra publicidad' },
          { value: 'b', label: 'Encripta archivos y pide rescate' },
          { value: 'c', label: 'Envía spam desde tu correo' },
          { value: 'd', label: 'Roba contraseñas' }
        ], answer: 'b' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'El nombre de la técnica de engaño que usa correos falsos para robar contraseñas se llama _____.', answer: 'phishing' }
      ],
      tasks: [
        { id: 'c3t1', title: '🔍 Auditoría de tu equipo', description: 'Verifica el estado de tu equipo (o el del aula): ¿está actualizado el sistema? ¿Cuánto espacio libre queda? ¿Hay programas que ya no usas? Haz un informe breve.', evidence: 'Capturas de pantalla de Configuración → Windows Update y Almacenamiento.' },
        { id: 'c3t2', title: '☁️ Configura un respaldo en la nube', description: 'Crea una cuenta en Google Drive o OneDrive (si no tienes) y sube 5 archivos importantes a la nube. Anota el espacio usado.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre mantenimiento lógico.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es el método para limpiar archivos temporales en Windows?', options: [
            { value: 'a', label: 'Borrar la carpeta Windows' },
            { value: 'b', label: 'Usar el Liberador de espacio en disco' },
            { value: 'c', label: 'Formatear la PC' },
            { value: 'd', label: 'Reiniciar la PC' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué tipo de malware bloquea tus archivos y pide dinero?', options: [
            { value: 'a', label: 'Adware' },
            { value: 'b', label: 'Spyware' },
            { value: 'c', label: 'Ransomware' },
            { value: 'd', label: 'Phishing' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Es buena idea tener instalados dos antivirus en tiempo real al mismo tiempo.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'La regla 3-2-1 indica que tus respaldos deben estar:', options: [
            { value: 'a', label: 'En 3 lugares distintos' },
            { value: 'b', label: 'En 1 sola nube' },
            { value: 'c', label: 'Solo en el disco duro principal' },
            { value: 'd', label: 'En un disquete' }
          ], answer: 'a' },
          { id: 'q5', type: 'fill', prompt: 'El software malicioso que se hace pasar por un programa legítimo se llama _____.', answer: 'troyano' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '🆓',
      title: 'Software libre vs. propietario · Conceptos',
      tagline: 'Dos filosofías: comunidad vs. empresa. Conoce las diferencias clave.',
      info: [
        { tag: 'Introducción', html: `
          <h3>⚖️ Dos modelos, dos filosofías</h3>
          <p>Cuando compras un programa, ¿pagas por el programa en sí o solo por usarlo? ¿Puedes ver cómo está hecho? ¿Puedes compartirlo con un amigo? La respuesta depende de si es <strong>software libre, propietario o de código abierto</strong>.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Richard Stallman, fundador del movimiento del software libre, resume la idea así: "<strong>El software debería ser libre como la libertad de expresión</strong>".</p>
          </div>
          <h3>🎯 Objetivos de la clase</h3>
          <ul>
            <li>Definir software libre, de código abierto y propietario.</li>
            <li>Conocer las 4 libertades del software libre.</li>
            <li>Identificar ejemplos famosos de cada tipo.</li>
            <li>Comprender los tipos de licencias (GPL, MIT, Apache, etc.).</li>
            <li>Reflexionar sobre ventajas y desventajas de cada modelo.</li>
          </ul>
        `},
        { tag: 'Software propietario', html: `
          <h3>🔒 Software propietario</h3>
          <p>Es aquel cuyo <strong>código fuente está oculto</strong> y su uso, copia y modificación están restringidos por una licencia. Normalmente hay que pagar por él.</p>
          <h4>📜 Características</h4>
          <ul>
            <li>El código fuente es secreto (no puedes ver cómo está hecho).</li>
            <li>Necesitas una <strong>licencia</strong> para usarlo (que se compra).</li>
            <li>No puedes copiarlo, modificarlo ni redistribuirlo libremente.</li>
            <li>El fabricante decide cómo y cuándo actualizarlo.</li>
            <li>Sueles pagar por soporte técnico oficial.</li>
          </ul>
          <h4>🌟 Ejemplos famosos</h4>
          <ul>
            <li><strong>Microsoft Windows</strong> y <strong>Microsoft Office</strong>.</li>
            <li><strong>macOS</strong> y la suite <strong>iWork</strong> (Pages, Numbers, Keynote).</li>
            <li><strong>Adobe Photoshop</strong>, Illustrator, Premiere.</li>
            <li><strong>Juegos</strong> de PlayStation, Xbox, Nintendo.</li>
            <li><strong>Autodesk AutoCAD</strong>.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Usar software propietario sin licencia es <strong>piratería</strong>, un delito en la mayoría de países y que además expone tu equipo a riesgos.</p>
          </div>
        `},
        { tag: 'Software libre', html: `
          <h3>🕊️ Software libre</h3>
          <p>Es aquel que respeta la <strong>libertad de los usuarios</strong>. La Free Software Foundation (FSF) lo define por las 4 libertades esenciales:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">0️⃣</div>
              <h5>Libertad 0</h5>
              <p>Usar el programa con <strong>cualquier propósito</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">1️⃣</div>
              <h5>Libertad 1</h5>
              <p>Estudiar cómo funciona y <strong>modificarlo</strong> (requiere acceso al código fuente).</p>
            </div>
            <div class="grid-item">
              <div class="icon">2️⃣</div>
              <h5>Libertad 2</h5>
              <p><strong>Redistribuir copias</strong> para ayudar a otros.</p>
            </div>
            <div class="grid-item">
              <div class="icon">3️⃣</div>
              <h5>Libertad 3</h5>
              <p>Mejorar el programa y <strong>compartir las mejoras</strong> con el público.</p>
            </div>
          </div>
          <h4>🌟 Ejemplos famosos</h4>
          <ul>
            <li><strong>GNU/Linux</strong> (Ubuntu, Debian, Fedora, Arch, Mint).</li>
            <li><strong>LibreOffice</strong> (suite ofimática).</li>
            <li><strong>Firefox</strong> y <strong>Chromium</strong> (navegadores).</li>
            <li><strong>GIMP</strong> (editor de imágenes).</li>
            <li><strong>Apache</strong>, <strong>Nginx</strong> (servidores web).</li>
            <li><strong>VLC</strong> (reproductor multimedia).</li>
            <li><strong>WordPress</strong> (CMS para sitios web).</li>
          </ul>
        `},
        { tag: 'Código abierto', html: `
          <h3>📖 Open source (código abierto)</h3>
          <p>Es un concepto <strong>cercano al software libre</strong> pero con énfasis diferente:</p>
          <ul>
            <li><strong>Software libre</strong>:强调 las <strong>libertades del usuario</strong> (enfoque ético/social).</li>
            <li><strong>Código abierto</strong>: destaca las <strong>ventajas prácticas</strong> de tener acceso al código (enfoque técnico/económico).</li>
          </ul>
          <p>En la práctica, casi todo el software libre es open source y viceversa, aunque hay excepciones.</p>
          <h4>🏛️ Definición de Open Source (OSI)</h4>
          <ol>
            <li>Distribución libre.</li>
            <li>Código fuente disponible.</li>
            <li>Trabajos derivados permitidos.</li>
            <li>Integridad del autor del código fuente.</li>
            <li>No discriminación contra personas o grupos.</li>
            <li>No discriminación contra campos de uso.</li>
            <li>Distribución de la licencia.</li>
            <li>La licencia no debe ser específica de un producto.</li>
            <li>La licencia no debe restringir otro software.</li>
            <li>La licencia debe ser tecnológicamente neutral.</li>
          </ol>
        `},
        { tag: 'Licencias', html: `
          <h3>📜 Tipos de licencias</h3>
          <p>Las licencias son el "contrato" que define qué puedes hacer con el software.</p>
          <h4>🕊️ Licencias libres/open source</h4>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">⚖️</div><h5>GPL (v3)</h5><p>Copyleft fuerte. Todo software derivado debe ser también GPL. Usada por Linux.</p></div>
            <div class="grid-item"><div class="icon">📄</div><h5>MIT</h5><p>Muy permisiva. Solo requiere mantener el aviso de copyright. Usada en React, jQuery.</p></div>
            <div class="grid-item"><div class="icon">📄</div><h5>Apache 2.0</h5><p>Permisiva con protección de patentes. Usada por Android, Kubernetes.</p></div>
            <div class="grid-item"><div class="icon">📄</div><h5>BSD</h5><p>Muy similar a MIT. Usada en macOS y FreeBSD.</p></div>
            <div class="grid-item"><div class="icon">⚖️</div><h5>LGPL</h5><p>Versión "light" de GPL, permite enlazar con software propietario.</p></div>
            <div class="grid-item"><div class="icon">📄</div><h5>Mozilla MPL 2.0</h5><p>Copyleft a nivel de archivo. Usada en Firefox.</p></div>
          </div>
          <h4>🔒 Licencias propietarias</h4>
          <ul>
            <li><strong>Licencia de uso personal/comercial</strong>: pagas por el derecho de usar.</li>
            <li><strong>Shareware</strong>: prueba limitada, pagas si quieres la versión completa.</li>
            <li><strong>Freeware</strong>: gratis pero con derechos reservados (no es libre).</li>
            <li><strong>OEM</strong>: viene preinstalado en el hardware que compraste.</li>
          </ul>
        `},
        { tag: 'Comparativa', html: `
          <h3>⚖️ Ventajas y desventajas</h3>
          <h4>🕊️ Software libre</h4>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(16,185,129,0.3)">
              <div class="icon">✅</div>
              <h5>Ventajas</h5>
              <p>Gratis (en su mayoría). Código auditable. Sin ataduras. Gran comunidad. Personalizable.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">⚠️</div>
              <h5>Desventajas</h5>
              <p>Curva de aprendizaje mayor en algunos casos. Menos soporte comercial. A veces faltan drivers o software especializado.</p>
            </div>
          </div>
          <h4>🔒 Software propietario</h4>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(16,185,129,0.3)">
              <div class="icon">✅</div>
              <h5>Ventajas</h5>
              <p>Soporte técnico oficial. Interfaces pulidas. Compatibilidad garantizada. Documentación profesional.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">⚠️</div>
              <h5>Desventajas</h5>
              <p>Precio (licencias). No puedes modificarlo. Dependencia del proveedor. A veces recopila datos del usuario.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🤝</span>
            <p>En la práctica, la mayoría de usuarios mezcla ambos: usa Windows (propietario) con Firefox (libre) y LibreOffice (libre) con Microsoft Office (propietario).</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Software libre', hint: 'Cita las 4 libertades que define la FSF.' },
        { term: 'Código abierto', hint: 'Diferencia entre "open source" y "software libre" según Stallman.' },
        { term: 'Copyleft', hint: '¿Qué significa y en qué se diferencia del copyright tradicional?' },
        { term: 'Licencia GPL', hint: 'Investiga proyectos famosos que usen GPL v3.' },
        { term: 'Freeware', hint: '¿Es lo mismo que software libre? ¿Por qué no?' },
        { term: 'Piratería', hint: '¿Qué riesgos legales y de seguridad implica usar software pirata?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '¿Cuál de estos programas es software LIBRE?', options: [
          { value: 'a', label: 'Microsoft Windows' },
          { value: 'b', label: 'LibreOffice' },
          { value: 'c', label: 'Adobe Photoshop' },
          { value: 'd', label: 'AutoCAD' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'tf', prompt: 'El "freeware" (gratis) es lo mismo que "software libre".', answer: 'false', explain: 'Freeware es gratis pero mantiene derechos reservados; el software libre es libre en las 4 libertades, no necesariamente gratis.' },
        { id: 'c4e3', n: 3, type: 'mc', prompt: 'La licencia GPL es conocida por su:', options: [
          { value: 'a', label: 'Permisividad total' },
          { value: 'b', label: 'Copyleft (las obras derivadas deben ser GPL)' },
          { value: 'c', label: 'Restricción a uso personal' },
          { value: 'd', label: 'Vigencia limitada' }
        ], answer: 'b' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'La FSF (Free Software Foundation) fue fundada por _____.', answer: 'Stallman' }
      ],
      tasks: [
        { id: 'c4t1', title: '📋 Inventario de software', description: 'Haz una lista de los 10 programas que más usas en tu computadora. Marca cuáles son libres, de código abierto o propietarios.', evidence: 'Investiga la licencia de cada uno en su página oficial.' },
        { id: 'c4t2', title: '💬 Debate escrito', description: 'Escribe un párrafo a favor y otro en contra del software libre. Mínimo 5 oraciones por postura.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre tipos de software.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Las 4 libertades del software libre incluyen:', options: [
            { value: 'a', label: 'Usar, estudiar, modificar y compartir' },
            { value: 'b', label: 'Comprar, vender, piratear y compartir' },
            { value: 'c', label: 'Instalar, copiar, eliminar y desinstalar' },
            { value: 'd', label: 'Ver, oír, leer y escribir' }
          ], answer: 'a' },
          { id: 'q2', type: 'mc', prompt: 'Un ejemplo de software de código abierto es:', options: [
            { value: 'a', label: 'Microsoft Office' },
            { value: 'b', label: 'Linux Ubuntu' },
            { value: 'c', label: 'macOS' },
            { value: 'd', label: 'iOS' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El software propietario permite ver y modificar su código fuente.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'La licencia GPL es de tipo:', options: [
            { value: 'a', label: 'Permisiva' },
            { value: 'b', label: 'Copyleft' },
            { value: 'c', label: 'Comercial' },
            { value: 'd', label: 'Propietaria' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La FSF significa: Free Software _______.', answer: 'Foundation' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '🐧',
      title: 'Software libre en la práctica · Linux y suites',
      tagline: 'Sal del mundo Windows: conoce Linux, GIMP, LibreOffice y más.',
      info: [
        { tag: 'Linux', html: `
          <h3>🐧 Linux: el sistema operativo libre por excelencia</h3>
          <p>Linux es un <strong>sistema operativo completo</strong> cuyo kernel fue creado por Linus Torvalds en 1991 como un proyecto universitario en Finlandia. Hoy impulsa desde teléfonos Android hasta la Estación Espacial Internacional.</p>
          <div class="slide-info">
            <span class="icon">📊</span>
            <p>El <strong>96% de los servidores web del mundo</strong> usan Linux. También está en supercomputadoras, routers, smart TVs, autos y más.</p>
          </div>
          <h4>🌍 Distribuciones (distros) populares</h4>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">🟠</div><h5>Ubuntu</h5><p>La más popular para principiantes. Basada en Debian. Gran comunidad.</p></div>
            <div class="grid-item"><div class="icon">🟢</div><h5>Linux Mint</h5><p>Similar a Windows, ideal para migrar. Basada en Ubuntu.</p></div>
            <div class="grid-item"><div class="icon">🔵</div><h5>Debian</h5><p>Madre de Ubuntu. Muy estable, ideal para servidores.</p></div>
            <div class="grid-item"><div class="icon">🔴</div><h5>Fedora</h5><p>Patrocinada por Red Hat. Trae lo último en tecnología.</p></div>
            <div class="grid-item"><div class="icon">⚪</div><h5>Arch Linux</h5><p>Para usuarios avanzados. Configuras todo desde cero.</p></div>
            <div class="grid-item"><div class="icon">🟣</div><h5>Pop!_OS</h5><p>De System76, optimizada para gaming y desarrollo.</p></div>
          </div>
        `},
        { tag: 'Comandos básicos', html: `
          <h3>⌨️ La terminal: el poder de Linux</h3>
          <p>Una de las grandes diferencias con Windows es que en Linux puedes controlar <strong>todo</strong> desde la terminal (consola de texto).</p>
          <h4>📟 Comandos esenciales</h4>
          <ul>
            <li><code>ls</code>: lista archivos en el directorio actual.</li>
            <li><code>cd carpeta</code>: cambia de directorio.</li>
            <li><code>pwd</code>: muestra la ruta actual.</li>
            <li><code>mkdir nueva</code>: crea una carpeta llamada "nueva".</li>
            <li><code>rm archivo</code>: borra un archivo. <code>rm -rf carpeta</code> borra una carpeta con todo.</li>
            <li><code>cp origen destino</code>: copia archivos.</li>
            <li><code>mv origen destino</code>: mueve o renombra.</li>
            <li><code>cat archivo</code>: muestra el contenido de un archivo.</li>
            <li><code>sudo comando</code>: ejecuta con permisos de administrador.</li>
            <li><code>apt install programa</code>: instala un programa (Debian/Ubuntu).</li>
            <li><code>apt update</code>: actualiza la lista de paquetes.</li>
            <li><code>man comando</code>: muestra el manual de un comando.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Cuidado con <code>sudo rm -rf</code></strong>: borra archivos del sistema sin pedir confirmación. Un error aquí puede dejar Linux inservible.</p>
          </div>
        `},
        { tag: 'Alternativas libres', html: `
          <h3>🔄 Alternativas libres a programas populares</h3>
          <p>No necesitas Windows ni Mac para ser productivo. Aquí tienes <strong>equivalencias</strong>:</p>
          <h4>📦 Productividad</h4>
          <ul>
            <li><strong>Microsoft Office</strong> → <strong>LibreOffice</strong> (Writer, Calc, Impress).</li>
            <li><strong>Google Docs</strong> → <strong>OnlyOffice</strong> o <strong>CryptPad</strong> (en la nube).</li>
            <li><strong>Outlook</strong> → <strong>Thunderbird</strong>.</li>
            <li><strong>OneNote</strong> → <strong>Joplin</strong> o <strong>Obsidian</strong>.</li>
          </ul>
          <h4>🎨 Diseño y multimedia</h4>
          <ul>
            <li><strong>Photoshop</strong> → <strong>GIMP</strong> y <strong>Krita</strong>.</li>
            <li><strong>Illustrator</strong> → <strong>Inkscape</strong>.</li>
            <li><strong>Premiere</strong> → <strong>Kdenlive</strong> y <strong>DaVinci Resolve</strong> (este último es gratis pero propietario).</li>
            <li><strong>AutoCAD</strong> → <strong>FreeCAD</strong> y <strong>LibreCAD</strong>.</li>
            <li><strong>Sculptris</strong> → <strong>Blender</strong> (modelado 3D).</li>
          </ul>
          <h4>🌐 Internet y comunicación</h4>
          <ul>
            <li><strong>Chrome</strong> → <strong>Firefox</strong>, <strong>Chromium</strong>, <strong>LibreWolf</strong>.</li>
            <li><strong>Skype</strong> → <strong>Jitsi Meet</strong>, <strong>Element</strong> (Matrix).</li>
            <li><strong>WhatsApp Web</strong> → funciona en cualquier navegador.</li>
          </ul>
        `},
        { tag: 'Virtualización', html: `
          <h3>📦 Virtualización: usa Windows dentro de Linux (y al revés)</h3>
          <p>Una <strong>máquina virtual</strong> es un programa que simula ser una computadora completa. Puedes instalar un Windows dentro de tu Linux, o probar una distro Linux sin instalarla.</p>
          <h4>🖥️ Software de virtualización</h4>
          <ul>
            <li><strong>VirtualBox</strong> (Oracle): gratis, multiplataforma, fácil de usar.</li>
            <li><strong>VMware Workstation Player</strong>: gratuito para uso personal.</li>
            <li><strong>GNOME Boxes</strong> y <strong>KVM</strong>: nativos de Linux.</li>
            <li><strong>QEMU</strong>: el más técnico pero muy potente.</li>
          </ul>
          <h4>🎯 Usos comunes</h4>
          <ul>
            <li>Probar un sistema operativo nuevo sin riesgo.</li>
            <li>Usar programas que solo corren en Windows.</li>
            <li>Aprender redes y administración de servidores.</li>
            <li>Probar software sospechoso de forma aislada.</li>
            <li>Desarrollar aplicaciones para otras plataformas.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>También existen los <strong>contenedores</strong> (Docker, Podman) que son como "mini máquinas virtuales" mucho más ligeras y rápidas, ideales para desarrolladores.</p>
          </div>
        `},
        { tag: '¿Cuándo usar cada uno?', html: `
          <h3>🎯 Entonces, ¿uso libre o propietario?</h3>
          <p>La respuesta corta: <strong>depende del caso</strong>. Aquí una guía práctica:</p>
          <h4>✅ Usa software libre cuando...</h4>
          <ul>
            <li>Necesitas editar documentos, hojas de cálculo, presentaciones (LibreOffice).</li>
            <li>Programas y desarrollo web (VS Code, Git, Linux, Python).</li>
            <li>Quieres privacidad y evitar el rastreo.</li>
            <li>Tu presupuesto es limitado (estudiantes,ONGs).</li>
            <li>Trabajas en ciencia, ingeniería o educación.</li>
            <li>Necesitas personalizar el software a tu medida.</li>
          </ul>
          <h4>✅ Usa software propietario cuando...</h4>
          <ul>
            <li>Necesitas compatibilidad estricta con colegas (formato .docx con macros complejas).</li>
            <li>Software especializado solo disponible en esa plataforma (algunos juegos, plugins CAD).</li>
            <li>Trabajas en una empresa con políticas específicas.</li>
            <li>El soporte técnico profesional es crítico.</li>
            <li>Software muy nicho (DAWs de música, edición de video profesional).</li>
          </ul>
          <div class="slide-success">
            <span class="icon">🌟</span>
            <p>El <strong>conocimiento</strong> es más importante que la herramienta. Un buen profesional sabe usar ambos mundos.</p>
          </div>
        `},
        { tag: 'Curiosidades', html: `
          <h3>🌍 Casos curiosos de software libre</h3>
          <ul>
            <li>🛰️ La <strong>Estación Espacial Internacional</strong> migró de Windows a Linux para sus laptops por estabilidad.</li>
            <li>🇫🇷 El <strong>gobierno de Francia</strong> migró miles de PCs a Linux para ahorrar costos y soberanía digital.</li>
            <li>🇪🇸 <strong>Municipio de Zaragoza</strong> y otros en España usan software libre en sus administraciones.</li>
            <li>📱 <strong>Android</strong> está basado en el kernel Linux.</li>
            <li>🎬 <strong>DreamWorks, Pixar y Weta Digital</strong> usaron Blender en sus producciones.</li>
            <li>🏦 <strong>Bancos y bolsas</strong> de todo el mundo corren en Linux por su estabilidad.</li>
            <li>🔬 La <strong>búsqueda del Bosón de Higgs</strong> en el CERN se hizo con software libre.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">🎓</span>
            <p>Estudiar software libre también mejora tu perfil profesional: muchas empresas buscan personas que conozcan Linux, Git y herramientas open source.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Distribución Linux', hint: '¿Qué es y por qué hay tantas? Investiga 3 distros orientadas a educación.' },
        { term: 'Terminal', hint: 'Investiga: ¿por qué muchos linuxeros prefieren la terminal al ratón?' },
        { term: 'Kernel', hint: '¿Qué es el kernel de un sistema operativo y qué hace?' },
        { term: 'Máquina virtual', hint: 'Diferencia entre VirtualBox, QEMU y Docker.' },
        { term: 'GIMP', hint: '¿Es tan potente como Photoshop? ¿Qué limitaciones tiene?' },
        { term: 'Blender', hint: 'Investiga: ¿qué películas famosas se han hecho con Blender?' },
        { term: 'Driver propietario', hint: '¿Por qué a veces Linux no funciona bien con impresoras o tarjetas WiFi?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Quién creó el kernel de Linux?', options: [
          { value: 'a', label: 'Bill Gates' },
          { value: 'b', label: 'Steve Jobs' },
          { value: 'c', label: 'Linus Torvalds' },
          { value: 'd', label: 'Mark Zuckerberg' }
        ], answer: 'c' },
        { id: 'c5e2', n: 2, type: 'tf', prompt: 'La suite ofimática LibreOffice es software libre y gratuito.', answer: 'true' },
        { id: 'c5e3', n: 3, type: 'mc', prompt: '¿Qué programa libre se usa para editar imágenes como alternativa a Photoshop?', options: [
          { value: 'a', label: 'Inkscape' },
          { value: 'b', label: 'GIMP' },
          { value: 'c', label: 'Krita' },
          { value: 'd', label: 'Blender' }
        ], answer: 'b' },
        { id: 'c5e4', n: 4, type: 'mc', prompt: 'Para instalar un programa en Ubuntu desde la terminal, el comando es:', options: [
          { value: 'a', label: 'install programa' },
          { value: 'b', label: 'sudo apt install programa' },
          { value: 'c', label: 'get programa' },
          { value: 'd', label: 'download programa' }
        ], answer: 'b' },
        { id: 'c5e5', n: 5, type: 'fill', prompt: 'Una _____ es un software que simula ser una computadora completa para probar otros sistemas.', answer: 'máquina virtual' }
      ],
      tasks: [
        { id: 'c5t1', title: '🐧 Tour por una distro', description: 'Descarga una ISO de Ubuntu o Linux Mint y pruébala en una máquina virtual (o USB booteable). Toma capturas de las 4 principales secciones: Escritorio, Configuración, Navegador y Terminal.', evidence: 'Carpeta con 4 capturas de pantalla y un párrafo describiendo tu experiencia.' },
        { id: 'c5t2', title: '🔄 Tabla de equivalencias', description: 'Crea una tabla de 10 filas con: (1) software propietario que uses, (2) alternativa libre, (3) nivel de dificultad de migrar (bajo/medio/alto).' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre software libre en la práctica.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la distribución Linux más recomendada para principiantes?', options: [
            { value: 'a', label: 'Arch Linux' },
            { value: 'b', label: 'Ubuntu' },
            { value: 'c', label: 'Gentoo' },
            { value: 'd', label: 'Slackware' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'El editor de imágenes libre equivalente a Photoshop es:', options: [
            { value: 'a', label: 'Inkscape' },
            { value: 'b', label: 'GIMP' },
            { value: 'c', label: 'Krita' },
            { value: 'd', label: 'Blender' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Android está basado en el kernel Linux.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El comando "sudo apt install" se usa para:', options: [
            { value: 'a', label: 'Borrar archivos' },
            { value: 'b', label: 'Instalar programas en Ubuntu/Debian' },
            { value: 'c', label: 'Apagar la computadora' },
            { value: 'd', label: 'Conectar a internet' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'VirtualBox es un programa de _____ que permite correr otros sistemas dentro de una ventana.', answer: 'virtualización' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '📊',
      title: 'Ofimática integrada + Examen final',
      tagline: 'Aprende a usar las suites ofimáticas y demuestra todo lo aprendido.',
      info: [
        { tag: 'Ofimática', html: `
          <h3>🗂️ ¿Qué es la ofimática?</h3>
          <p>La <strong>ofimática</strong> (oficina + informática) es el conjunto de técnicas, herramientas y aplicaciones que se usan para <strong>crear, editar y gestionar documentos</strong> en el entorno de oficina y educación.</p>
          <h4>🧰 Herramientas clásicas</h4>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">📝</div><h5>Procesador de texto</h5><p>Word, Writer, Google Docs. Crea documentos, informes, cartas.</p></div>
            <div class="grid-item"><div class="icon">📊</div><h5>Hoja de cálculo</h5><p>Excel, Calc, Google Sheets. Tablas, fórmulas, gráficos.</p></div>
            <div class="grid-item"><div class="icon">🎨</div><h5>Presentaciones</h5><p>PowerPoint, Impress, Google Slides. Diapositivas para exponer.</p></div>
            <div class="grid-item"><div class="icon">📇</div><h5>Base de datos</h5><p>Access, Base, LibreOffice Base. Grandes volúmenes de datos.</p></div>
            <div class="grid-item"><div class="icon">📅</div><h5>Calendario/Agenda</h5><p>Outlook Calendar, Google Calendar. Citas y recordatorios.</p></div>
            <div class="grid-item"><div class="icon">📧</div><h5>Correo electrónico</h5><p>Outlook, Gmail, Thunderbird. Comunicación formal.</p></div>
          </div>
        `},
        { tag: 'Suites', html: `
          <h3>📦 Suites ofimáticas principales</h3>
          <h4>🔒 Microsoft 365 (antes Office)</h4>
          <ul>
            <li>La más usada del mundo. <strong>Word, Excel, PowerPoint, OneNote, Outlook, Access, Publisher, Teams</strong>.</li>
            <li>Versión de escritorio con licencia o <strong>Microsoft 365</strong> por suscripción.</li>
            <li>Versión online gratuita: <strong>office.com</strong> (con cuenta Microsoft).</li>
            <li>Excelente compatibilidad con formatos estándar de la industria.</li>
          </ul>
          <h4>🕊️ LibreOffice</h4>
          <ul>
            <li>Suite libre, gratuita, de código abierto. Hecha por The Document Foundation.</li>
            <li>Componentes: <strong>Writer, Calc, Impress, Draw, Math, Base</strong>.</li>
            <li>Abre y guarda en formato Microsoft (.docx, .xlsx, .pptx).</li>
            <li>Disponible en Windows, macOS y Linux.</li>
            <li>Versión portable (no requiere instalación).</li>
          </ul>
          <h4>☁️ Google Workspace</h4>
          <ul>
            <li>Totalmente en la nube: <strong>Google Docs, Sheets, Slides, Forms, Drive, Gmail</strong>.</li>
            <li>Gratis con cuenta de Gmail (15 GB compartidos).</li>
            <li>Colaboración en tiempo real: varias personas editan a la vez.</li>
            <li>No necesita instalación ni actualizaciones manuales.</li>
          </ul>
          <h4>🍎 Apple iWork</h4>
          <ul>
            <li><strong>Pages, Numbers, Keynote</strong>. Gratis para dispositivos Apple.</li>
            <li>Diseño cuidado, pero menor compatibilidad fuera del ecosistema Apple.</li>
          </ul>
        `},
        { tag: 'Integración', html: `
          <h3>🔗 Ofimática integrada: el verdadero poder</h3>
          <p>El término <strong>"integrada"</strong> significa que las herramientas se <strong>comunican entre sí</strong>: insertas una tabla de Excel en un documento de Word, o gráficas en una presentación de PowerPoint, y todo se actualiza automáticamente.</p>
          <h4>🎯 Ejemplos de integración</h4>
          <ul>
            <li>Insertar una <strong>tabla dinámica de Excel</strong> en un <strong>informe en Word</strong> con datos en vivo.</li>
            <li>Crear una <strong>presentación de PowerPoint</strong> con gráficas generadas en Excel.</li>
            <li>Vincular <strong>gráficos de Excel</strong> en <strong>diapositivas de PowerPoint</strong> que se actualizan al cambiar los datos.</li>
            <li>Combinar correspondencia: <strong>Word + Excel + Outlook</strong> para enviar cartas personalizadas.</li>
            <li>Insertar un <strong>objeto de Access</strong> (consulta, formulario) en un documento Word.</li>
            <li>Usar <strong>OneNote</strong> como cuaderno digital donde se incrustan documentos, imágenes y audios.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>En la nube es aún más fácil: en Google Docs puedes insertar una hoja de Sheets con solo un clic, y se actualiza en tiempo real.</p>
          </div>
        `},
        { tag: 'Buenas prácticas', html: `
          <h3>✨ Buenas prácticas ofimáticas</h3>
          <h4>📝 En el procesador de texto</h4>
          <ul>
            <li>Usa <strong>estilos</strong> (Título 1, Título 2, Normal) en vez de formatear manualmente.</li>
            <li>Crea un <strong>índice automático</strong> con esos estilos.</li>
            <li>Aplica <strong>interlineado 1.5</strong> para facilitar la lectura y corrección.</li>
            <li>Guarda con <strong>nombres descriptivos</strong>: "Informe_Final_v3.docx" no "Documento1.docx".</li>
            <li>Usa la <strong>función "Control de cambios"</strong> al revisar trabajos de otros.</li>
          </ul>
          <h4>📊 En la hoja de cálculo</h4>
          <ul>
            <li>Una <strong>celda = un dato</strong>. No combines información en una sola celda.</li>
            <li>Usa <strong>referencias absolutas ($A$1)</strong> al copiar fórmulas.</li>
            <li>Aplica <strong>formato de tabla</strong> para filtros y orden automático.</li>
            <li>Las <strong>fórmulas simples</strong> son mejores: =SUMA(A1:A10) en vez de =A1+A2+A3+...</li>
            <li>Haz <strong>gráficos limpios</strong>: sin efectos 3D ni colores estridentes.</li>
          </ul>
          <h4>🎨 En presentaciones</h4>
          <ul>
            <li>Regla del <strong>6×6</strong>: máx 6 líneas por diapositiva, máx 6 palabras por línea.</li>
            <li>Usa <strong>imágenes grandes y de calidad</strong>, no clipsart.</li>
            <li><strong>Una idea por diapositiva</strong>.</li>
            <li>Cuida la <strong>contraste</strong>: texto oscuro sobre fondo claro, o viceversa.</li>
            <li>Practica antes: <strong>no leas las diapositivas</strong>, explayate con tus palabras.</li>
          </ul>
        `},
        { tag: 'Repaso final', html: `
          <h3>🎓 Repaso general antes del examen final</h3>
          <p>Has recorrido un camino enorme. Repasemos lo esencial de las 6 clases:</p>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">🖥️</div><h5>Clase 1</h5><p>Hardware (CPU, RAM, disco) y software (sistema vs aplicación).</p></div>
            <div class="grid-item"><div class="icon">🧹</div><h5>Clase 2</h5><p>Mantenimiento físico: limpieza, calor, polvo, organización.</p></div>
            <div class="grid-item"><div class="icon">🛡️</div><h5>Clase 3</h5><p>Mantenimiento lógico: antivirus, actualizaciones, respaldos.</p></div>
            <div class="grid-item"><div class="icon">🆓</div><h5>Clase 4</h5><p>Software libre vs propietario. 4 libertades. Licencias.</p></div>
            <div class="grid-item"><div class="icon">🐧</div><h5>Clase 5</h5><p>Linux, GIMP, LibreOffice, virtualización, terminales.</p></div>
            <div class="grid-item"><div class="icon">📊</div><h5>Clase 6</h5><p>Suites ofimáticas, integración, buenas prácticas.</p></div>
          </div>
          <div class="slide-success">
            <span class="icon">🌟</span>
            <p>¡Ahora viene el <strong>examen final</strong>! Son 15 preguntas que cubren los 4 temas principales. Demuestra todo lo aprendido.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Suite ofimática', hint: 'Nombra 3 suites y sus componentes principales.' },
        { term: 'Procesador de texto', hint: '¿Qué diferencia hay entre Writer, Word y Google Docs?' },
        { term: 'Hoja de cálculo', hint: 'Busca: ¿qué es una "fórmula relativa" y en qué se diferencia de la absoluta?' },
        { term: 'Combinación de correspondencia', hint: '¿Cómo funciona y para qué sirve en una oficina?' },
        { term: 'Formato abierto', hint: 'Investiga: ¿por qué ODF (.odt) es importante para la interoperabilidad?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿Cuál de los siguientes NO es parte de una suite ofimática?', options: [
          { value: 'a', label: 'Procesador de texto' },
          { value: 'b', label: 'Hoja de cálculo' },
          { value: 'c', label: 'Editor de video' },
          { value: 'd', label: 'Programa de presentaciones' }
        ], answer: 'c' },
        { id: 'c6e2', n: 2, type: 'tf', prompt: 'LibreOffice es una suite ofimática libre y gratuita.', answer: 'true' },
        { id: 'c6e3', n: 3, type: 'mc', prompt: 'La "combinación de correspondencia" combina:', options: [
          { value: 'a', label: 'Word + Excel + correo' },
          { value: 'b', label: 'PowerPoint + Word' },
          { value: 'c', label: 'Excel + Access' },
          { value: 'd', label: 'Outlook + OneNote' }
        ], answer: 'a' }
      ],
      tasks: [
        { id: 'c6t1', title: '🎯 Mini-proyecto integrador', description: 'Crea un mini-proyecto con 3 documentos: (1) un informe en Writer/Word con un título, índice y 2 páginas; (2) una hoja de cálculo con un presupuesto personal; (3) una presentación de 5 diapositivas sobre cualquier tema que te guste. Sube los 3 archivos.', evidence: '3 archivos digitales (.docx, .xlsx, .pptx o equivalentes de LibreOffice).' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Responde las 5 preguntas sobre ofimática.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la suite ofimática de código abierto más popular?', options: [
            { value: 'a', label: 'Microsoft Office' },
            { value: 'b', label: 'LibreOffice' },
            { value: 'c', label: 'iWork' },
            { value: 'd', label: 'WPS Office' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Google Docs se diferencia de Word principalmente porque:', options: [
            { value: 'a', label: 'Es de pago' },
            { value: 'b', label: 'Funciona en la nube y permite colaboración en tiempo real' },
            { value: 'c', label: 'Solo abre imágenes' },
            { value: 'd', label: 'No tiene tablas' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Es posible insertar una tabla de Excel dentro de un documento de Word manteniendo los datos actualizados.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'La regla 6×6 en presentaciones significa:', options: [
            { value: 'a', label: '6 colores y 6 fuentes' },
            { value: 'b', label: '6 diapositivas y 6 animaciones' },
            { value: 'c', label: 'Máx 6 líneas por diapositiva y 6 palabras por línea' },
            { value: 'd', label: '6 minutos por diapositiva' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'El programa de LibreOffice para presentaciones se llama _____.', answer: 'Impress' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🎓 Examen Final Acumulativo',
        description: '15 preguntas cubriendo los 4 temas del grado. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Hardware) · ¿Qué componente realiza los cálculos de la computadora?', options: [{ value: 'a', label: 'Monitor' }, { value: 'b', label: 'CPU' }, { value: 'c', label: 'Teclado' }, { value: 'd', label: 'Impresora' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Hardware) · ¿Cuál es la diferencia entre RAM y disco duro?', options: [{ value: 'a', label: 'No hay diferencia' }, { value: 'b', label: 'La RAM es temporal y volátil; el disco es permanente' }, { value: 'c', label: 'La RAM es más grande' }, { value: 'd', label: 'El disco duro es volátil' }], answer: 'b' },
          { id: 'f3', type: 'mc', prompt: 'Tema 1 (Hardware) · ¿Qué periférico es de SALIDA?', options: [{ value: 'a', label: 'Teclado' }, { value: 'b', label: 'Ratón' }, { value: 'c', label: 'Monitor' }, { value: 'd', label: 'Escáner' }], answer: 'c' },
          { id: 'f4', type: 'tf', prompt: 'Tema 1 (Hardware) · El sistema operativo es un tipo de software de sistema.', answer: 'true' },
          { id: 'f5', type: 'mc', prompt: 'Tema 2 (Mantenimiento) · ¿Con qué se debe limpiar un monitor?', options: [{ value: 'a', label: 'Alcohol en gel' }, { value: 'b', label: 'Amoníaco' }, { value: 'c', label: 'Paño de microfibra' }, { value: 'd', label: 'Papel toalla' }], answer: 'c' },
          { id: 'f6', type: 'tf', prompt: 'Tema 2 (Mantenimiento) · Se recomienda limpiar el polvo interno con aire comprimido cada 3 a 6 meses.', answer: 'true' },
          { id: 'f7', type: 'mc', prompt: 'Tema 2 (Mantenimiento) · La pasta térmica sirve para:', options: [{ value: 'a', label: 'Pegar componentes' }, { value: 'b', label: 'Mejorar la transferencia de calor del CPU' }, { value: 'c', label: 'Limpiar la pantalla' }, { value: 'd', label: 'Aislar el polvo' }], answer: 'b' },
          { id: 'f8', type: 'mc', prompt: 'Tema 3 (Mantenimiento lógico) · ¿Qué tipo de malware encripta archivos y pide rescate?', options: [{ value: 'a', label: 'Adware' }, { value: 'b', label: 'Spyware' }, { value: 'c', label: 'Ransomware' }, { value: 'd', label: 'Gusano' }], answer: 'c' },
          { id: 'f9', type: 'tf', prompt: 'Tema 3 (Mantenimiento lógico) · La regla 3-2-1 es una estrategia de respaldos.', answer: 'true' },
          { id: 'f10', type: 'mc', prompt: 'Tema 3 (Mantenimiento lógico) · ¿Por qué no instalar dos antivirus en tiempo real?', options: [{ value: 'a', label: 'Cuestan más dinero' }, { value: 'b', label: 'Se bloquean entre sí y ralentizan el sistema' }, { value: 'c', label: 'Es ilegal' }, { value: 'd', label: 'No hay razón' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Software) · ¿Cuál de estos es software LIBRE?', options: [{ value: 'a', label: 'Windows' }, { value: 'b', label: 'Photoshop' }, { value: 'c', label: 'LibreOffice' }, { value: 'd', label: 'AutoCAD' }], answer: 'c' },
          { id: 'f12', type: 'tf', prompt: 'Tema 4 (Software) · La licencia GPL es de tipo copyleft.', answer: 'true' },
          { id: 'f13', type: 'mc', prompt: 'Tema 5 (Ofimática) · ¿Cuál es la suite de Google?', options: [{ value: 'a', label: 'Microsoft Office' }, { value: 'b', label: 'LibreOffice' }, { value: 'c', label: 'Google Workspace' }, { value: 'd', label: 'iWork' }], answer: 'c' },
          { id: 'f14', type: 'mc', prompt: 'Tema 5 (Ofimática) · ¿Qué herramienta se usa para hacer presentaciones?', options: [{ value: 'a', label: 'Word' }, { value: 'b', label: 'Excel' }, { value: 'c', label: 'PowerPoint / Impress / Slides' }, { value: 'd', label: 'Access' }], answer: 'c' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · El sistema operativo de código abierto más popular para servidores se llama _____.', answer: 'linux' }
        ]
      }
    }
  ]
};
