const COURSE_DATA = {
  grade: 'quinto_perito',
  title: 'Computación II · Quinto Perito Contador',
  subtitle: 'Excel avanzado: tablas dinámicas, segmentación, texto, fecha, validación y dashboards',
  classes: [
    {
      id: 'c1', num: 1, icon: '\u{1f4ca}',
      title: 'Introducción a tablas dinámicas',
      tagline: 'Aprende qué son las tablas dinámicas y cómo resumir grandes cantidades de datos en segundos.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 ¡Bienvenido a Computación II, Quinto Perito Contador!</h3>
          <p>Este año vamos a dominar <strong>herramientas avanzadas de Excel</strong> para el análisis de datos:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Tablas dinámicas</h5>
              <p>Resumir, agrupar y analizar datos con solo arrastrar campos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✂️</div>
              <h5>Segmentación</h5>
              <p>Filtrar visualmente con slicers y líneas de tiempo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Funciones texto/fecha</h5>
              <p>Manipular cadenas y calcular diferencias entre fechas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Validación y dashboards</h5>
              <p>Controlar datos ingresados y crear tableros visuales.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar serás capaz de construir dashboards profesionales combinando tablas dinámicas, segmentaciones, gráficos y validaciones.</p>
          </div>
        `},
        { tag: '¿Qué es una tabla dinámica?', html: `
          <h3>📊 ¿Qué es una tabla dinámica?</h3>
          <p>Una <strong>tabla dinámica</strong> (pivot table) es una herramienta de Excel que permite <strong>resumir, analizar y explorar</strong> grandes volúmenes de datos de forma interactiva.</p>
          <p>Con ella puedes convertir miles de filas en un informe resumido en segundos, sin escribir fórmulas manualmente.</p>
          <h4>💡 ¿Para qué sirve?</h4>
          <ul>
            <li>Resumir ventas por producto, región o vendedor.</li>
            <li>Calcular totales, promedios, conteos y porcentajes.</li>
            <li>Agrupar datos por meses, trimestres o años.</li>
            <li>Crear informes ejecutivos con solo arrastrar campos.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Dato clave:</strong> Una tabla dinámica NO modifica los datos originales. Solo los reorganiza para mostrarlos de otra forma.</p>
          </div>
        `},
        { tag: 'Crear una tabla dinámica', html: `
          <h3>🛠️ Crear una tabla dinámica paso a paso</h3>
          <h4>📋 Datos de ejemplo</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>  Vendedor  |  Producto  |  Región  |  Monto  |  Fecha
  María     |  Laptop    |  Norte   |  15000  |  01/01/2024
  Juan      |  Mouse     |  Sur     |  250    |  15/02/2024
  María     |  Teclado   |  Norte   |  450    |  10/01/2024
  Ana       |  Laptop    |  Centro  |  15000  |  20/03/2024
  Juan      |  Monitor   |  Sur     |  3200   |  05/02/2024</code></pre>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Selecciona cualquier celda dentro de tus datos.</li>
            <li>Ve a <strong>Insertar → Tabla dinámica</strong> (Insert → PivotTable).</li>
            <li>Excel seleccionará automáticamente el rango. Elige <strong>"Nueva hoja de cálculo"</strong>.</li>
            <li>Aparecerá un lienzo vacío con el <strong>panel de campos</strong> a la derecha.</li>
            <li>Arrastra los campos a las áreas: Filas, Columnas, Valores, Filtros.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>¡Listo!</strong> En segundos tienes un resumen interactivo de tus datos.</p>
          </div>
        `},
        { tag: 'Campos de tabla dinámica', html: `
          <h3>📐 Las 4 áreas de una tabla dinámica</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Filas (Rows)</h5>
              <p>Los datos únicos aparecen como filas. Ej: nombre del vendedor, producto.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Columnas (Columns)</h5>
              <p>Los datos aparecen como columnas. Ej: meses, regiones.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Valores (Values)</h5>
              <p>Los números que se resumen. Ej: suma de montos, conteo de ventas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Filtros (Filters)</h5>
              <p>Filtran toda la tabla dinámica por un criterio. Ej: mostrar solo una región.</p>
            </div>
          </div>
          <h4>💡 Ejemplo práctico</h4>
          <p>Para saber <strong>cuánto vendió cada vendedor</strong>:</p>
          <ul>
            <li>Arrastra <strong>Vendedor</strong> → Filas</li>
            <li>Arrastra <strong>Monto</strong> → Valores (se mostrará la suma)</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Consejo:</strong> Puedes arrastrar varios campos a Valores para ver suma y conteo al mismo tiempo.</p>
          </div>
        `},
        { tag: 'Configurar valores', html: `
          <h3>⚙️ Configuración de campos de valor</h3>
          <p>Haz clic derecho sobre un valor en la tabla dinámica y elige <strong>"Configuración de campos de valor"</strong> (Value Field Settings).</p>
          <h4>📊 Operaciones disponibles</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">➕</div>
              <h5>Suma</h5>
              <p>Suma todos los valores. Es la opción predeterminada para números.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Cuenta</h5>
              <p>Cuenta cuántas filas hay. Útil para texto o IDs.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Promedio</h5>
              <p>Calcula el promedio de los valores.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📈</div>
              <h5>% del total</h5>
              <p>Muestra cada valor como porcentaje del gran total.</p>
            </div>
          </div>
          <h4>💡 También puedes cambiar el formato</h4>
          <p>Desde el mismo panel puedes aplicar formato de moneda, porcentaje o número a los valores.</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Recuerda:</strong> Si actualizas los datos originales, debes hacer clic derecho → <strong>Actualizar</strong> (Refresh) para que la tabla dinámica refleje los cambios.</p>
          </div>
        `},
        { tag: 'Actualizar y buenas prácticas', html: `
          <h3>🔄 Actualizar tabla dinámica</h3>
          <p>Las tablas dinámicas NO se actualizan automáticamente. Cuando cambien los datos originales:</p>
          <ul>
            <li>Haz clic derecho sobre la tabla dinámica → <strong>Actualizar</strong> (Refresh).</li>
            <li>O ve a la cinta <strong>Datos → Actualizar todo</strong>.</li>
          </ul>
          <h4>🌟 Buenas prácticas</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🏷️</div>
              <h5>Datos en tabla</h5>
              <p>Convierte tus datos en <strong>Tabla</strong> (Ctrl+T) antes de crear la tabla dinámica. Así al agregar filas, la tabla dinámica las incluirá al actualizar.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧹</div>
              <h5>Datos limpios</h5>
              <p>Sin filas vacías ni columnas sin nombre. Cada columna debe tener un encabezado único.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📁</div>
              <h5>Formato consistente</h5>
              <p>Los números deben ser números (no texto), las fechas deben ser fechas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🗂️</div>
              <h5>Nombre descriptivo</h5>
              <p>Cambia el nombre de la tabla dinámica en <strong>Analizar → Nombre de tabla dinámica</strong>.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Regla de oro:</strong> Datos ordenados + Tabla dinámica bien configurada = Informe profesional en segundos.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Tabla dinámica', hint: '¿Qué es una tabla dinámica y para qué sirve?' },
        { term: 'Campo', hint: 'Nombra las 4 áreas de una tabla dinámica y la función de cada una.' },
        { term: 'Filas', hint: '¿Qué pasa si arrastras "Vendedor" al área de Filas?' },
        { term: 'Valores', hint: '¿Qué operaciones puedes hacer en el área de Valores?' },
        { term: 'Actualizar', hint: '¿Por qué hay que actualizar manualmente una tabla dinámica?' },
        { term: 'Suma', hint: '¿Cómo cambias la operación de Suma a Promedio?' },
        { term: 'Panel de campos', hint: '¿Dónde aparece el panel de campos de la tabla dinámica?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Qué es una tabla dinámica?', options: [
          { value: 'a', label: 'Una tabla normal con colores' },
          { value: 'b', label: 'Una herramienta que resume y analiza datos interactivamente' },
          { value: 'c', label: 'Un tipo de gráfico en Excel' },
          { value: 'd', label: 'Una función de texto' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '¿Cuál de estos NO es un área de campos de tabla dinámica?', options: [
          { value: 'a', label: 'Filas' },
          { value: 'b', label: 'Columnas' },
          { value: 'c', label: 'Valores' },
          { value: 'd', label: 'Formato' }
        ], answer: 'd' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'Las tablas dinámicas se actualizan automáticamente cuando cambian los datos originales.', answer: 'false' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'Para cambiar la operación de un campo de valor, usamos la opción ______ de campos de valor.', answer: 'Configuración' }
      ],
      tasks: [
        { id: 'c1t1', title: '📊 Crear tabla dinámica', description: 'Crea una tabla con 10 filas de datos de ventas (producto, vendedor, región, monto, fecha). Inserta una tabla dinámica que muestre la suma de montos por vendedor. Luego agréguiele producto como filtro.', evidence: 'Captura de la tabla dinámica terminada.' },
        { id: 'c1t2', title: '🔢 Explorar campos', description: 'Usando la misma tabla dinámica, arrastra diferentes campos a las 4 áreas. Prueba: poner región en Filas, producto en Columnas, monto en Valores. Después cambia la operación de Suma a Promedio.', evidence: '2 capturas: antes y después de cambiar la operación.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre tablas dinámicas.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuántas áreas tiene el panel de campos de una tabla dinámica?', options: [
            { value: 'a', label: '2' },
            { value: 'b', label: '4' },
            { value: 'c', label: '6' },
            { value: 'd', label: '8' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué operación es la predeterminada para valores numéricos?', options: [
            { value: 'a', label: 'Cuenta' },
            { value: 'b', label: 'Promedio' },
            { value: 'c', label: 'Suma' },
            { value: 'd', label: 'Máximo' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'La tabla dinámica modifica los datos originales.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Desde qué pestaña se crea una tabla dinámica?', options: [
            { value: 'a', label: 'Insertar → Tabla dinámica' },
            { value: 'b', label: 'Datos → Tabla dinámica' },
            { value: 'c', label: 'Fórmulas → Tabla dinámica' },
            { value: 'd', label: 'Inicio → Tabla dinámica' }
          ], answer: 'a' },
          { id: 'q5', type: 'fill', prompt: 'El área que filtra toda la tabla dinámica por un criterio se llama _______.', answer: 'Filtros' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '✂️',
      title: 'Tablas dinámicas con segmentación',
      tagline: 'Aprende a filtrar visualmente con slicers y líneas de tiempo.',
      info: [
        { tag: 'Segmentación de datos', html: `
          <h3>✂️ ¿Qué es una segmentación de datos?</h3>
          <p>Una <strong>segmentación de datos</strong> (Slicer) es un filtro visual que permite seleccionar qué datos mostrar en una tabla dinámica con un solo clic.</p>
          <p>A diferencia de los filtros tradicionales, los slicers muestran <strong>botones interactivos</strong> que facilitan ver qué filtros están activos.</p>
          <h4>🎯 ¿Para qué sirven?</h4>
          <ul>
            <li>Filtrar datos de forma visual e intuitiva.</li>
            <li>Ver rápidamente qué filtros están aplicados.</li>
            <li>Conectar un mismo slicer a varias tablas dinámicas.</li>
            <li>Crear paneles de control interactivos.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Dato clave:</strong> Los slicers se introdujeron en Excel 2010 y desde entonces son la forma más recomendada de filtrar tablas dinámicas.</p>
          </div>
        `},
        { tag: 'Insertar un slicer', html: `
          <h3>🏭 Insertar una segmentación de datos</h3>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Selecciona cualquier celda dentro de la tabla dinámica.</li>
            <li>Ve a <strong>Analizar (Analyze) → Insertar segmentación</strong> (Insert Slicer).</li>
            <li>Elige el o los campos por los que quieres filtrar (ej: Región, Producto).</li>
            <li>Haz clic en <strong>Aceptar</strong>.</li>
            <li>Aparecerán botones con los valores únicos de cada campo.</li>
          </ol>
          <h4>💡 Consejos</h4>
          <ul>
            <li>Para seleccionar varios valores, mantén presionada la tecla <strong>Ctrl</strong> mientras haces clic.</li>
            <li>Para limpiar el filtro, haz clic en el botón <strong>Limpiar filtro</strong> (icono de embudo tachado).</li>
            <li>Puedes <strong>mover y redimensionar</strong> el slicer como cualquier objeto gráfico.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Cambia el estilo del slicer desde la pestaña <strong>Opciones</strong> usando los estilos predeterminados para que combine con tu informe.</p>
          </div>
        `},
        { tag: 'Timeline o línea de tiempo', html: `
          <h3>📅 Timeline: filtrar por fechas</h3>
          <p>La <strong>línea de tiempo</strong> (Timeline) es un slicer especializado para campos de <strong>fecha</strong>.</p>
          <h4>✅ Pasos para insertar una Timeline</h4>
          <ol>
            <li>Selecciona la tabla dinámica.</li>
            <li>Ve a <strong>Analizar → Insertar línea de tiempo</strong> (Insert Timeline).</li>
            <li>Elige el campo de fecha.</li>
            <li>Aparecerá un control deslizante para seleccionar meses, trimestres o años.</li>
          </ol>
          <h4>💡 Niveles de la Timeline</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Años</h5>
              <p>Filtra por años completos. Útil para tendencias anuales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📆</div>
              <h5>Trimestres</h5>
              <p>Filtra por trimestres (Q1, Q2, Q3, Q4).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Meses</h5>
              <p>Filtra por meses individuales. Ideal para reportes mensuales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📆</div>
              <h5>Días</h5>
              <p>Filtra por días específicos.</p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> La Timeline solo funciona con campos de tipo fecha bien formateados en Excel.</p>
          </div>
        `},
        { tag: 'Conexiones múltiples', html: `
          <h3>🔗 Conectar un slicer a varias tablas dinámicas</h3>
          <p>Una de las características más poderosas es que <strong>un mismo slicer puede filtrar varias tablas dinámicas</strong> al mismo tiempo.</p>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Crea dos o más tablas dinámicas desde los mismos datos.</li>
            <li>Inserta un slicer para un campo (ej: Región).</li>
            <li>Haz clic derecho sobre el slicer → <strong>Conexiones de informes</strong> (Report Connections).</li>
            <li>Marca todas las tablas dinámicas que quieres que filtre.</li>
            <li>Al seleccionar un valor en el slicer, todas las tablas se actualizan simultáneamente.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Uso práctico:</strong> Crea un panel con una tabla de totales y un gráfico. Conecta ambos al mismo slicer para que se filtren juntos.</p>
          </div>
        `},
        { tag: 'Formato de tabla dinámica', html: `
          <h3>🎨 Formato y estilos de tabla dinámica</h3>
          <p>Excel ofrece <strong>estilos predeterminados</strong> para que las tablas dinámicas se vean profesionales.</p>
          <h4>🎨 Cambiar el estilo</h4>
          <ul>
            <li>Selecciona la tabla dinámica.</li>
            <li>En la pestaña <strong>Diseño (Design)</strong> elige entre los estilos disponibles.</li>
            <li>Puedes personalizar colores, bordes y formato de números.</li>
          </ul>
          <h4>💡 Opciones de diseño útiles</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>Totales generales</h5>
              <p>Mostrar u ocultar la fila y columna de totales.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📗</div>
              <h5>Subtotales</h5>
              <p>Mostrar subtotales al inicio o al final de cada grupo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📗</div>
              <h5>Aplicar formato condicional</h5>
              <p>Agrega barras de datos o escalas de color a los valores.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Formato de números</h5>
              <p>Desde Configuración de campos puedes aplicar formato de moneda, %, decimales.</p>
            </div>
          </div>
        `},
        { tag: 'Ejemplo práctico', html: `
          <h3>📊 Ejemplo completo: Dashboard con slicers</h3>
          <h4>📋 Escenario</h4>
          <p>Tienes datos de ventas con: Vendedor, Producto, Región, Monto, Fecha. Quieres crear un panel con:</p>
          <ol>
            <li>Una tabla dinámica que sume montos por vendedor.</li>
            <li>Una segunda tabla dinámica que sume montos por producto.</li>
            <li>Un <strong>slicer de Región</strong> conectado a AMBAS tablas.</li>
            <li>Una <strong>Timeline de Fecha</strong> conectada a AMBAS tablas.</li>
          </ol>
          <h4>✅ Resultado</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Al seleccionar "Norte" en el slicer, ambas tablas se filtran para mostrar solo las ventas de la región Norte. Al mover la Timeline, se filtran por las fechas seleccionadas. <strong>Todo en un solo clic.</strong></p>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Consejo profesional:</strong> Usa <strong>tablas de Excel</strong> (Ctrl+T) como origen de datos. Cuando agregues nuevas filas, las tablas dinámicas las incluirán automáticamente al actualizar.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Segmentación de datos', hint: '¿Qué es un slicer y en qué se diferencia de un filtro normal?' },
        { term: 'Slicer', hint: '¿Cómo se inserta un slicer en una tabla dinámica?' },
        { term: 'Timeline', hint: '¿Para qué sirve la línea de tiempo y qué tipo de campo necesita?' },
        { term: 'Conexiones', hint: '¿Cómo conectas un slicer a múltiples tablas dinámicas?' },
        { term: 'Formato', hint: '¿Dónde se cambia el estilo de una tabla dinámica?' },
        { term: 'Limpiar filtro', hint: '¿Cómo se limpia un filtro aplicado con un slicer?' },
        { term: 'Panel de control', hint: '¿Qué ventaja tiene usar slicers en un panel de control?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Qué es un slicer (segmentación de datos)?', options: [
          { value: 'a', label: 'Un tipo de gráfico' },
          { value: 'b', label: 'Un filtro visual con botones interactivos' },
          { value: 'c', label: 'Una función de Excel' },
          { value: 'd', label: 'Un tipo de dato' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: '¿Desde qué pestaña se inserta un slicer?', options: [
          { value: 'a', label: 'Inicio' },
          { value: 'b', label: 'Insertar' },
          { value: 'c', label: 'Analizar (Análisis de tabla dinámica)' },
          { value: 'd', label: 'Fórmulas' }
        ], answer: 'c' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'Un slicer puede filtrar varias tablas dinámicas al mismo tiempo.', answer: 'true' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'El control visual para filtrar fechas en una tabla dinámica se llama _______.', answer: 'Timeline' }
      ],
      tasks: [
        { id: 'c2t1', title: '✂️ Slicers conectados', description: 'Crea dos tablas dinámicas desde los mismos datos de ventas. La primera: suma de montos por vendedor. La segunda: conteo de ventas por producto. Inserta un slicer de región y conéctalo a ambas tablas. Prueba filtrar.', evidence: 'Captura mostrando ambas tablas filtradas por una región seleccionada en el slicer.' },
        { id: 'c2t2', title: '📅 Timeline en acción', description: 'Agrega una columna de fechas a tus datos. Inserta una Timeline conectada a ambas tablas dinámicas. Filtra por diferentes meses y captura los cambios.', evidence: '2 capturas con diferentes meses seleccionados en la Timeline.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre segmentación.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cómo se conecta un slicer a varias tablas dinámicas?', options: [
            { value: 'a', label: 'No se puede conectar a varias tablas' },
            { value: 'b', label: 'Clic derecho → Conexiones de informes' },
            { value: 'c', label: 'Se conecta automáticamente' },
            { value: 'd', label: 'Desde la pestaña Insertar' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'La Timeline solo funciona con campos de tipo:', options: [
            { value: 'a', label: 'Texto' },
            { value: 'b', label: 'Número' },
            { value: 'c', label: 'Fecha' },
            { value: 'd', label: 'Booleano' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Para seleccionar varios valores en un slicer debes presionar la tecla Ctrl mientras haces clic.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál de estos NO es un nivel de la Timeline?', options: [
            { value: 'a', label: 'Días' },
            { value: 'b', label: 'Meses' },
            { value: 'c', label: 'Trimestres' },
            { value: 'd', label: 'Horas' }
          ], answer: 'd' },
          { id: 'q5', type: 'fill', prompt: 'El botón que limpia el filtro de un slicer se llama _______.', answer: 'Limpiar filtro' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '🔤',
      title: 'Funciones de texto y fecha',
      tagline: 'Domina las funciones para manipular texto y calcular fechas en Excel.',
      info: [
        { tag: 'Funciones de texto I', html: `
          <h3>🔤 Funciones de texto - Parte 1</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔸</div>
              <h5>=IZQUIERDA(texto, número)</h5>
              <p>Extrae los primeros caracteres de la izquierda.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=IZQUIERDA(A1,5)</code></pre>
              <p><small>"Excel avanzado" → "Excel"</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">🔺</div>
              <h5>=DERECHA(texto, número)</h5>
              <p>Extrae los últimos caracteres de la derecha.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=DERECHA(A1,7)</code></pre>
              <p><small>"Excel avanzado" → "avanzado"</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">🔹</div>
              <h5>=EXTRAE(texto, inicio, n)</h5>
              <p>Extrae caracteres desde una posición intermedia.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=EXTRAE(A1,7,4)</code></pre>
              <p><small>"Excel avanzado" → "avan"</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>=LARGO(texto)</h5>
              <p>Cuenta cuántos caracteres tiene un texto.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=LARGO(A1)</code></pre>
              <p><small>"Excel avanzado" → 14</small></p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Uso práctico:</strong> Extraer códigos de producto, separar nombres completos en nombre y apellido, limpiar datos importados.</p>
          </div>
        `},
        { tag: 'Funciones de texto II', html: `
          <h3>🔤 Funciones de texto - Parte 2</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">💬</div>
              <h5>=CONCATENAR / CONCAT</h5>
              <p>Une varios textos en uno solo.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=CONCATENAR(A1," ",B1)
=CONCAT(A1," ",B1)</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>=TEXTO(valor, formato)</h5>
              <p>Convierte un número/fecha a texto con formato.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=TEXTO(A1,"dd/mm/aaaa")
=TEXTO(B1,"$#,##0.00")</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🇦</div>
              <h5>=MAYUSC / MINUSC</h5>
              <p>Convierte texto a mayúsculas o minúsculas.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=MAYUSC(A1)  =MINUSC(A1)</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🔠</div>
              <h5>=NOMPROPIO</h5>
              <p>Capitaliza la primera letra de cada palabra.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=NOMPROPIO(A1)</code></pre>
              <p><small>"juan pérez" → "Juan Pérez"</small></p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Diferencia:</strong> <code>=ESPACIOS(A1)</code> elimina espacios redundantes. Útil para limpiar datos copiados de otros sistemas.</p>
          </div>
        `},
        { tag: 'Funciones de fecha I', html: `
          <h3>📅 Funciones de fecha - Parte 1</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🕐</div>
              <h5>=HOY()</h5>
              <p>Devuelve la fecha actual del sistema.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=HOY()</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🕑</div>
              <h5>=AHORA()</h5>
              <p>Devuelve la fecha y hora actual.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=AHORA()</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">📆</div>
              <h5>=FECHA(año, mes, día)</h5>
              <p>Crea una fecha a partir de números.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=FECHA(2024,12,25)</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>=DIAS(fecha_fin, fecha_ini)</h5>
              <p>Diferencia en días entre dos fechas.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=DIAS(B1,A1)</code></pre>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Importante:</strong> <code>HOY()</code> y <code>AHORA()</code> son funciones <strong>volátiles</strong>: se recalculan cada vez que Excel se actualiza.</p>
          </div>
        `},
        { tag: 'Funciones de fecha II', html: `
          <h3>📅 Funciones de fecha - Parte 2</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>=DIAS360(fecha_ini, fecha_fin)</h5>
              <p>Diferencia en días usando el año comercial (360 días).</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=DIAS360(A1,B1)</code></pre>
              <p><small>Usado en finanzas y contabilidad</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>=DIAS.LAB(fecha_ini, fecha_fin)</h5>
              <p>Días laborales entre dos fechas (sin sáb/dom).</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=DIAS.LAB(A1,B1)</code></pre>
              <p><small>Puede incluir días festivos opcionales</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">📆</div>
              <h5>=SIFECHA(ini, fin, unidad)</h5>
              <p>Diferencia en años, meses o días.</p>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=SIFECHA(A1,B1,"y")
=SIFECHA(A1,B1,"m")
=SIFECHA(A1,B1,"d")</code></pre>
              <p><small>"y"=años, "m"=meses, "d"=días</small></p>
            </div>
          </div>
          <h4>💡 Ejemplo con SIFECHA</h4>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Para calcular la <strong>edad exacta</strong> de una persona: <code>=SIFECHA(A1,HOY(),"y")</code> te da los años. Combínalo: <code>=SIFECHA(A1,HOY(),"y") & " años, " & SIFECHA(A1,HOY(),"ym") & " meses"</code>.</p>
          </div>
        `},
        { tag: 'Ejemplos combinados', html: `
          <h3>📊 Ejemplos combinados: texto + fecha</h3>
          <h4>📋 Escenario 1: Formatear reporte</h4>
          <p>Generar texto tipo: "El vendedor JUAN PÉREZ reportó ventas el día 15/03/2024"</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=CONCATENAR("El vendedor ",MAYUSC(A1)," reportó ventas el día ",TEXTO(B1,"dd/mm/aaaa"))</code></pre>
          <h4>📋 Escenario 2: Antigüedad laboral</h4>
          <p>Calcular antigüedad de un empleado en años:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SIFECHA(C1,HOY(),"y") & " años, " & SIFECHA(C1,HOY(),"ym") & " meses"</code></pre>
          <h4>📋 Escenario 3: Código de producto</h4>
          <p>Extraer los primeros 3 caracteres del nombre y año de fecha:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=CONCAT(IZQUIERDA(A1,3),TEXTO(B1,"aaaa"))</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> La función <code>CONCAT</code> es la versión moderna de <code>CONCATENAR</code>. Ambas funcionan igual, pero CONCAT admite rangos completos: <code>=CONCAT(A1:A5)</code>.</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Ejercicios prácticos</h3>
          <h4>📝 Prueba estas fórmulas</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Extraer nombre</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=IZQUIERDA(A1,HALLAR(" ",A1)-1)</code></pre>
              <p><small>Extrae el primer nombre hasta el espacio</small></p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Días hasta fin de año</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=DIAS(FECHA(AÑO(HOY()),12,31),HOY())</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">💬</div>
              <h5>Nombre completo</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=NOMPROPIO(A1) & " " & NOMPROPIO(B1)</code></pre>
              <p><small>Capitaliza nombre y apellido</small></p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Recuerda:</strong> Los nombres de funciones en Excel en español usan acentos y la letra Ñ: SIFECHA, NOMPROPIO, IZQUIERDA, DIAS.LAB, etc.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'IZQUIERDA', hint: '¿Qué extrae la función IZQUIERDA y cuáles son sus parámetros?' },
        { term: 'CONCATENAR', hint: '¿Cuál es la diferencia entre CONCATENAR y CONCAT?' },
        { term: 'HOY', hint: '¿Qué devuelve HOY() y cada cuánto se actualiza?' },
        { term: 'SIFECHA', hint: '¿Qué significan los parámetros "y", "m", "d" en SIFECHA?' },
        { term: 'DIAS.LAB', hint: '¿Qué días excluye DIAS.LAB al calcular?' },
        { term: 'NOMPROPIO', hint: '¿En qué se diferencia NOMPROPIO de MAYUSC?' },
        { term: 'TEXTO', hint: '¿Para qué sirve la función TEXTO y qué formatos acepta?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '¿Qué función extrae los primeros caracteres de la izquierda?', options: [
          { value: 'a', label: '=DERECHA()' },
          { value: 'b', label: '=IZQUIERDA()' },
          { value: 'c', label: '=EXTRAE()' },
          { value: 'd', label: '=LARGO()' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: '¿Cuál de estas funciones NO es de texto?', options: [
          { value: 'a', label: '=MAYUSC()' },
          { value: 'b', label: '=NOMPROPIO()' },
          { value: 'c', label: '=SIFECHA()' },
          { value: 'd', label: '=ESPACIOS()' }
        ], answer: 'c' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'La función HOY() devuelve la fecha y hora actual del sistema.', answer: 'false' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'La función que calcula días laborales entre dos fechas se llama _______.', answer: 'DIAS.LAB' }
      ],
      tasks: [
        { id: 'c3t1', title: '🔤 Función concatenar', description: 'Crea una hoja con 5 nombres completos en columnas separadas (nombre, apellido1, apellido2). Usa CONCATENAR con espacios para unirlos. Luego usa NOMPROPIO para capitalizarlos correctamente.', evidence: 'Captura de la hoja con las fórmulas visibles.' },
        { id: 'c3t2', title: '📅 Cálculo de edad', description: 'Crea una tabla con 5 fechas de nacimiento. Calcula: (1) edad en años con SIFECHA, (2) días desde su último cumpleaños, (3) próximo cumpleaños con FECHA y HOY. Formatea con TEXTO.', evidence: 'Captura mostrando las fórmulas y resultados.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre funciones de texto y fecha.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la sintaxis correcta de SIFECHA para calcular años?', options: [
            { value: 'a', label: '=SIFECHA(A1,B1,"y")' },
            { value: 'b', label: '=SIFECHA(A1,B1,"años")' },
            { value: 'c', label: '=SIFECHA(A1,B1,1)' },
            { value: 'd', label: '=SIFECHA(A1,B1)' }
          ], answer: 'a' },
          { id: 'q2', type: 'mc', prompt: '¿Qué función convierte "juan perez" en "Juan Perez"?', options: [
            { value: 'a', label: '=MAYUSC()' },
            { value: 'b', label: '=MINUSC()' },
            { value: 'c', label: '=NOMPROPIO()' },
            { value: 'd', label: '=TEXTO()' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'La función DIAS.LAB incluye los sábados y domingos en el cálculo.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Qué función es volátil (se actualiza constantemente)?', options: [
            { value: 'a', label: '=FECHA()' },
            { value: 'b', label: '=DIAS()' },
            { value: 'c', label: '=HOY()' },
            { value: 'd', label: '=CONCAT()' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'La función DIAS360 usa el año comercial de ______ días.', answer: '360' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '✅',
      title: 'Validación con fórmulas personalizadas',
      tagline: 'Controla los datos que se ingresan en tus hojas de Excel con reglas inteligentes.',
      info: [
        { tag: '¿Qué es validación de datos?', html: `
          <h3>✅ ¿Qué es la validación de datos?</h3>
          <p>La <strong>validación de datos</strong> es una herramienta de Excel que permite <strong>controlar qué datos puede ingresar el usuario</strong> en una celda.</p>
          <h4>🎯 ¿Para qué sirve?</h4>
          <ul>
            <li>Evitar errores de captura (fechas incorrectas, números negativos).</li>
            <li>Restringir valores a una lista predefinida (sí/no, departamentos).</li>
            <li>Mostrar mensajes de ayuda al seleccionar la celda.</li>
            <li>Mostrar alertas cuando se ingresa un dato inválido.</li>
          </ul>
          <h4>✅ Cómo acceder</h4>
          <p>Ve a <strong>Datos → Validación de datos</strong> (Data → Data Validation). Aparecerá un cuadro con 3 pestañas: Configuración, Mensaje de entrada, Alerta de error.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Dato clave:</strong> La validación de datos NO impide pegar datos inválidos desde el portapapeles. Siempre verifica tus datos después de pegar.</p>
          </div>
        `},
        { tag: 'Lista personalizada', html: `
          <h3>📋 Lista personalizada de valores</h3>
          <p>Una de las validaciones más usadas es restringir una celda a una <strong>lista de valores permitidos</strong>.</p>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Selecciona las celdas donde quieres la validación.</li>
            <li><strong>Datos → Validación de datos</strong>.</li>
            <li>En <strong>Permitir</strong> elige <strong>Lista</strong>.</li>
            <li>En <strong>Origen</strong> escribe los valores separados por coma: <code>Norte,Sur,Centro,Oriente</code>.</li>
            <li>O selecciona un rango: <code>=$A$1:$A$4</code>.</li>
            <li>Activa <strong>Lista desplegable en celda</strong>.</li>
            <li>Haz clic en Aceptar.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Si marcas <strong>Lista desplegable en celda</strong>, aparecerá una flecha para elegir el valor. Útil para formularios.</p>
          </div>
        `},
        { tag: 'INDIRECTO y rangos dinámicos', html: `
          <h3>🔗 Rangos dinámicos con INDIRECTO</h3>
          <p>La función <strong>INDIRECTO</strong> permite usar el texto de una celda como referencia de rango. Es útil para crear <strong>listas dependientes</strong>: la lista de opciones cambia según el valor de otra celda.</p>
          <h4>📋 Ejemplo: Departamento y puesto</h4>
          <p>Crea rangos con nombre para cada departamento:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Rango "Ventas":  Vendedor, Supervisor, Gerente
Rango "IT":       Programador, Soporte, Analista
Rango "RRHH":     Reclutador, Capacitador, Analista</code></pre>
          <h4>✅ Validación con INDIRECTO</h4>
          <ol>
            <li>En A1: lista de departamentos (Ventas, IT, RRHH).</li>
            <li>En B1: validación con <code>=INDIRECTO(A1)</code> como origen.</li>
            <li>Al cambiar A1, la lista de B1 se actualiza automáticamente.</li>
          </ol>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Nota:</strong> INDIRECTO es una función volátil. Úsala con moderación en archivos grandes.</p>
          </div>
        `},
        { tag: 'Fórmulas personalizadas', html: `
          <h3>📊 Validación con fórmulas personalizadas</h3>
          <p>Puedes crear <strong>reglas complejas</strong> escribiendo una fórmula en la validación. La fórmula debe devolver VERDADERO para datos válidos o FALSO para inválidos.</p>
          <h4>📋 Ejemplos útiles</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Número positivo</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=A1>0</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Fecha futura</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=A1>HOY()</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">💬</div>
              <h5>Sin duplicados</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=CONTAR.SI($A$1:$A$100,A1)=1</code></pre>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Texto con condición</h5>
              <pre style="background:var(--bg-1);padding:0.5rem;border-radius:var(--radius-sm);font-size:0.75rem"><code>=IZQUIERDA(A1,2)="GT"</code></pre>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> La fórmula debe referirse a la <strong>celda activa</strong> (la primera celda seleccionada). Excel ajustará las referencias automáticamente.</p>
          </div>
        `},
        { tag: 'Validación cruzada', html: `
          <h3>🔗 Validación cruzada entre celdas</h3>
          <p>La <strong>validación cruzada</strong> permite que el valor de una celda dependa del valor de otra celda.</p>
          <h4>📋 Ejemplo 1: Fecha inicio < Fecha fin</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>En B1 (Fecha fin): =B1>A1</code></pre>
          <p>La fecha fin debe ser mayor que la fecha de inicio.</p>
          <h4>📋 Ejemplo 2: Presupuesto no supere límite</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>En C1 (Gasto): =C1<=$E$1</code></pre>
          <p>El gasto en C1 no puede superar el presupuesto en E1.</p>
          <h4>📋 Ejemplo 3: Combinación única</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=CONTAR.SI($A$1:$A$100,A1&"|"&B1)=1</code></pre>
          <p>Valida que la combinación A1+B1 sea única en el rango.</p>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip profesional:</strong> Usa validación cruzada para crear formularios de captura sin errores. Combínala con mensajes de entrada descriptivos.</p>
          </div>
        `},
        { tag: 'Buenas prácticas', html: `
          <h3>🌟 Buenas prácticas en validación</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Mensajes de entrada</h5>
              <p>En la pestaña <strong>Mensaje de entrada</strong> escribe una ayuda clara: "Ingresa solo números positivos".</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚠️</div>
              <h5>Alertas de error</h5>
              <p>En <strong>Alerta de error</strong> elige entre: Detener (bloquea), Advertencia (avisa pero permite), Información (solo avisa).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Rangos con nombre</h5>
              <p>Define rangos con nombre (<strong>Fórmulas → Administrador de nombres</strong>) para fácil mantenimiento de las listas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Validar existentes</h5>
              <p>Después de aplicar validación, usa <strong>Validación de datos → Rodear con un círculo</strong> para encontrar datos inválidos existentes.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> La validación se aplica a las celdas, no a los datos. Si borras la validación, cualquier valor será aceptado.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Validación de datos', hint: '¿Dónde se encuentra la herramienta de validación de datos en Excel?' },
        { term: 'Lista', hint: '¿Cómo creas una lista desplegable con valores fijos?' },
        { term: 'INDIRECTO', hint: '¿Para qué sirve INDIRECTO en validación de datos?' },
        { term: 'CONTAR.SI', hint: '¿Cómo usas CONTAR.SI para evitar duplicados?' },
        { term: 'Validación cruzada', hint: '¿Qué es validación cruzada y cómo se implementa?' },
        { term: 'Fórmula personalizada', hint: '¿Qué debe devolver una fórmula personalizada de validación?' },
        { term: 'Mensaje de entrada', hint: '¿Cuáles son los 3 tipos de alerta de error en validación?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '¿Dónde se encuentra la validación de datos en Excel?', options: [
          { value: 'a', label: 'Inicio → Validación' },
          { value: 'b', label: 'Datos → Validación de datos' },
          { value: 'c', label: 'Fórmulas → Validación' },
          { value: 'd', label: 'Insertar → Validación' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: '¿Qué función permite usar el texto de una celda como referencia de rango?', options: [
          { value: 'a', label: '=BUSCARV()' },
          { value: 'b', label: '=INDIRECTO()' },
          { value: 'c', label: '=SI()' },
          { value: 'd', label: '=CONTAR()' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'La validación de datos evita que se peguen datos inválidos desde el portapapeles.', answer: 'false' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'Para evitar duplicados en un rango usamos la función _______.', answer: 'CONTAR.SI' }
      ],
      tasks: [
        { id: 'c4t1', title: '📋 Listas dependientes', description: 'Crea 3 rangos con nombre: Frutas (Manzana, Pera, Uva), Verduras (Zanahoria, Brócoli, Lechuga), Lácteos (Leche, Queso, Yogur). En A1: lista desplegable con categorías. En B1: validación con INDIRECTO que cambie según la categoría seleccionada.', evidence: 'Captura mostrando el cambio de lista en B1 al cambiar A1.' },
        { id: 'c4t2', title: '✅ Formulario sin errores', description: 'Crea un formulario de 5 campos con validaciones: (1) Nombre: solo texto, (2) Edad: entre 0 y 120, (3) Fecha de ingreso: debe ser anterior a HOY(), (4) Departamento: lista desplegable, (5) Salario: debe ser positivo y no superar 100000. Agrega mensajes de entrada y alertas de error.', evidence: 'Captura del formulario completo con la validación funcionando.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre validación de datos.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es la opción para crear una lista desplegable en validación?', options: [
            { value: 'a', label: 'Permitir: Número entero' },
            { value: 'b', label: 'Permitir: Lista' },
            { value: 'c', label: 'Permitir: Fecha' },
            { value: 'd', label: 'Permitir: Texto' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué tipo de alerta BLOQUEA completamente el ingreso de datos inválidos?', options: [
            { value: 'a', label: 'Información' },
            { value: 'b', label: 'Advertencia' },
            { value: 'c', label: 'Detener' },
            { value: 'd', label: 'Error' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'La validación cruzada permite que el valor de una celda dependa de otra.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál de estas fórmulas evita valores duplicados en A1:A100?', options: [
            { value: 'a', label: '=SUMA(A1:A100)=1' },
            { value: 'b', label: '=CONTAR.SI($A$1:$A$100,A1)=1' },
            { value: 'c', label: '=CONTAR(A1:A100)=1' },
            { value: 'd', label: '=SI(A1=A2,1,0)' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La pestaña que muestra ayuda al seleccionar una celda validada se llama _______.', answer: 'Mensaje de entrada' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '📊',
      title: 'Dashboards básicos',
      tagline: 'Combina tablas dinámicas, segmentaciones y gráficos en un tablero visual profesional.',
      info: [
        { tag: '¿Qué es un dashboard?', html: `
          <h3>📊 ¿Qué es un dashboard?</h3>
          <p>Un <strong>dashboard</strong> (tablero de control) es una herramienta visual que muestra los <strong>indicadores más importantes</strong> de un negocio o proyecto en una sola pantalla.</p>
          <p>En Excel, un dashboard combina <strong>tablas dinámicas, gráficos dinámicos y segmentaciones</strong> para crear un panel interactivo y fácil de entender.</p>
          <h4>🎯 Características de un buen dashboard</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>Visual</h5>
              <p>Prioriza gráficos sobre números. Un buen gráfico dice más que mil celdas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎯</div>
              <h5>Interactivo</h5>
              <p>Usa slicers y timelines para que el usuario explore los datos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📌</div>
              <h5>Enfocado</h5>
              <p>Muestra solo lo esencial. Un dashboard no es un reporte de todo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>Actualizable</h5>
              <p>Al actualizar los datos, el dashboard se actualiza. No requiere recrearse.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Regla de oro:</strong> Un dashboard debe responder preguntas de negocio en menos de 5 segundos de observación.</p>
          </div>
        `},
        { tag: 'Combinar tablas y gráficos', html: `
          <h3>📊 Combinar tablas dinámicas y gráficos dinámicos</h3>
          <h4>📋 Elementos de un dashboard</h4>
          <ol>
            <li><strong>Datos originales:</strong> una tabla limpia con filas y columnas.</li>
            <li><strong>Tablas dinámicas:</strong> resúmenes de los datos (ventas por región, productos más vendidos, etc.).</li>
            <li><strong>Gráficos dinámicos:</strong> representación visual de las tablas dinámicas.</li>
            <li><strong>Segmentaciones:</strong> controles para filtrar todo el dashboard.</li>
          </ol>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Crea una <strong>tabla dinámica</strong> con los datos que quieres graficar.</li>
            <li>Selecciona la tabla y ve a <strong>Analizar → Gráfico dinámico</strong> (PivotChart).</li>
            <li>Elige el tipo de gráfico: columna, barra, línea, circular, etc.</li>
            <li>Coloca el gráfico al lado de la tabla en la misma hoja.</li>
            <li>Agrega slicers y conéctalo a todos los elementos.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Los gráficos dinámicos heredan los filtros de su tabla dinámica. Si conectas un slicer a la tabla, el gráfico se filtrará automáticamente.</p>
          </div>
        `},
        { tag: 'Gráficos dinámicos', html: `
          <h3>📈 Tipos de gráfico para tu dashboard</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Gráfico de columnas</h5>
              <p>Ideal para comparar valores entre categorías. Ej: ventas por vendedor.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📈</div>
              <h5>Gráfico de barras</h5>
              <p>Similar a columnas pero horizontal. Bueno para muchas categorías.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📉</div>
              <h5>Gráfico de líneas</h5>
              <p>Perfecto para tendencias en el tiempo. Ej: ventas por mes.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔴</div>
              <h5>Gráfico circular</h5>
              <p>Muestra proporciones de un total. Máximo 5-6 categorías.</p>
            </div>
          </div>
          <h4>💡 Consejos para elegir gráfico</h4>
          <ul>
            <li><strong>Comparar:</strong> columnas o barras.</li>
            <li><strong>Evolución:</strong> líneas.</li>
            <li><strong>Proporción:</strong> circular (pastel).</li>
            <li><strong>Relación:</strong> dispersión (XY).</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error común:</strong> Usar gráfico circular con más de 6 categorías. Hace ilegible el dashboard.</p>
          </div>
        `},
        { tag: 'Formatear el dashboard', html: `
          <h3>🎨 Formato y diseño del dashboard</h3>
          <p>Un dashboard profesional no solo tiene buenos datos, también debe <strong>verse bien</strong>.</p>
          <h4>🎨 Consejos de formateo</h4>
          <ul>
            <li><strong>Fondo limpio:</strong> usa colores claros o blanco. Evita fondos oscuros.</li>
            <li><strong>Paleta de colores:</strong> escoge 2-3 colores principales y úsalos en todo el dashboard.</li>
            <li><strong>Tipografía:</strong> usa una sola fuente. Tamaños: título 16-18pt, etiquetas 10-11pt.</li>
            <li><strong>Bordes y sombras:</strong> agrupa elementos visualmente con bordes suaves o sombras.</li>
            <li><strong>Eliminar líneas de cuadrícula:</strong> en <strong>Vista → Líneas de cuadrícula</strong>, desmarca para limpiar la hoja.</li>
            <li><strong>Título del dashboard:</strong> coloca un título grande y claro en la parte superior.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip profesional:</strong> Agrupa tus slicers en un <strong>panel lateral</strong> con un borde o fondo de color para que el usuario sepa dónde están los controles.</p>
          </div>
        `},
        { tag: 'Principios visuales', html: `
          <h3>🎯 Principios visuales para dashboards efectivos</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔍</div>
              <h5>1. Diseño en Z</h5>
              <p>El ojo humano escanea de izquierda a derecha y de arriba abajo. Coloca lo más importante arriba a la izquierda.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💡</div>
              <h5>2. Mínimo texto</h5>
              <p>Los números y gráficos deben hablar por sí solos. Evita párrafos explicativos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>3. Consistencia</h5>
              <p>Mismo formato, mismos colores, mismos tamaños en todos los elementos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📌</div>
              <h5>4. KISS (Keep It Simple)</h5>
              <p>Menos es más. Si un elemento no aporta información, elimínalo.</p>
            </div>
          </div>
          <h4>📋 Estructura recomendada</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>  +------------------------------------------------+
  |  DASHBOARD DE VENTAS                [slicers]   |
  +--------+--------+--------+--------+------------+
  | Total  | Promed | Cliente|        |            |
  | ventas | venta  | top    | Gráfico |  Gráfico   |
  | $150k  | $1,200 | Ana    | ventas  |  ventas   |
  |        |        |        | x mes   |  x vended |
  +--------+--------+--------+---------+-----------+
  |            Gráfico de tendencia anual          |
  +------------------------------------------------+</code></pre>
        `},
        { tag: 'Ejemplo completo', html: `
          <h3>📊 Construyendo tu primer dashboard</h3>
          <h4>📋 Escenario</h4>
          <p>Tienes datos de ventas con: Fecha, Vendedor, Producto, Región, Monto, Cantidad.</p>
          <h4>✅ Elementos del dashboard</h4>
          <ol>
            <li><strong>KPI superior:</strong> 4 celdas con =TOTAL, =PROMEDIO, =MÁXIMO, =CONTAR usando la tabla dinámica o funciones BD.</li>
            <li><strong>Gráfico 1:</strong> Columnas apiladas - Ventas por región y producto.</li>
            <li><strong>Gráfico 2:</strong> Líneas - Tendencia mensual de ventas.</li>
            <li><strong>Gráfico 3:</strong> Circular - Proporción de ventas por vendedor (top 5).</li>
            <li><strong>Tabla dinámica:</strong> Detalle de ventas por vendedor y producto.</li>
            <li><strong>Slicers:</strong> Región + Timeline de Fecha, conectados a todo.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Resultado:</strong> Un panel interactivo donde al seleccionar una región, todos los gráficos y la tabla se actualizan al instante. ¡Eso es un dashboard!</p>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Para entregar:</strong> Oculta las hojas de datos y tablas auxiliares. Deja visible solo el dashboard. Ve a <strong>Archivo → Guardar como</strong> y elige tipo PDF o imprime para compartir.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Dashboard', hint: '¿Qué es un dashboard y cuáles son sus características principales?' },
        { term: 'Gráfico dinámico', hint: '¿Cómo se crea un gráfico dinámico a partir de una tabla dinámica?' },
        { term: 'Tabla dinámica', hint: '¿Por qué las tablas dinámicas son la base de un dashboard en Excel?' },
        { term: 'Segmentación', hint: '¿Cómo se conecta un slicer a los elementos del dashboard?' },
        { term: 'Visualización', hint: '¿Qué tipo de gráfico usarías para mostrar tendencias en el tiempo?' },
        { term: 'KPI', hint: '¿Qué es un KPI y cómo se muestra en un dashboard?' },
        { term: 'KISS', hint: '¿Qué significa KISS y por qué es importante en dashboards?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Qué es un dashboard?', options: [
          { value: 'a', label: 'Un reporte de texto en Word' },
          { value: 'b', label: 'Un tablero visual que muestra indicadores clave en una pantalla' },
          { value: 'c', label: 'Una tabla dinámica sin formato' },
          { value: 'd', label: 'Un tipo de gráfico' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: '¿Qué gráfico es mejor para mostrar tendencias en el tiempo?', options: [
          { value: 'a', label: 'Circular' },
          { value: 'b', label: 'Columnas' },
          { value: 'c', label: 'Líneas' },
          { value: 'd', label: 'Barras' }
        ], answer: 'c' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'Un dashboard debe mostrar toda la información disponible sin importar su relevancia.', answer: 'false' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'El principio de diseño que dice "menos es más" se llama _______.', answer: 'KISS' }
      ],
      tasks: [
        { id: 'c5t1', title: '📊 Mi primer dashboard', description: 'Crea un dashboard con: (1) datos de ventas de al menos 30 filas, (2) 2 tablas dinámicas, (3) 2 gráficos dinámicos, (4) 2 slicers conectados a todos los elementos, (5) título y formato profesional.', evidence: 'Captura de pantalla del dashboard completo con slicers visibles.' },
        { id: 'c5t2', title: '🎨 Mejora visual', description: 'Toma el dashboard de la tarea anterior y mejora su apariencia: aplica un tema de colores consistente, elimina líneas de cuadrícula, agrega bordes suaves, organiza los slicers en un panel lateral y agrega KPI numéricos arriba.', evidence: 'Captura del antes y después.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre dashboards.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es el primer paso para crear un dashboard?', options: [
            { value: 'a', label: 'Insertar gráficos' },
            { value: 'b', label: 'Tener datos limpios y ordenados' },
            { value: 'c', label: 'Aplicar formato' },
            { value: 'd', label: 'Agregar slicers' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué es un KPI?', options: [
            { value: 'a', label: 'Un tipo de gráfico' },
            { value: 'b', label: 'Un indicador clave de rendimiento' },
            { value: 'c', label: 'Un slicer' },
            { value: 'd', label: 'Una función de Excel' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Los gráficos dinámicos se actualizan automáticamente al cambiar los slicers conectados.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Qué tipo de gráfico es mejor para mostrar proporciones?', options: [
            { value: 'a', label: 'Circular' },
            { value: 'b', label: 'Líneas' },
            { value: 'c', label: 'Dispersión' },
            { value: 'd', label: 'Áreas' }
          ], answer: 'a' },
          { id: 'q5', type: 'fill', prompt: 'El principio "Keep It Simple, Stupid" se abrevia _______.', answer: 'KISS' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Repaso general + Examen final',
      tagline: 'Demuestra todo lo aprendido y obtén tu certificado de Quinto Perito Contador.',
      info: [
        { tag: 'Resumen del curso', html: `
          <h3>🎓 Lo que aprendimos en este curso</h3>
          <p>¡Felicitaciones por llegar a la última clase! Has aprendido herramientas avanzadas de Excel. Repasemos los 5 temas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Tablas dinámicas</h5>
              <p>Crear tablas dinámicas, arrastrar campos a Filas/Columnas/Valores/Filtros, configurar Suma/Promedio/Cuenta.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✂️</div>
              <h5>Segmentación</h5>
              <p>Slicers visuales, Timeline de fechas, conexión a múltiples tablas, formato y estilos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Funciones texto/fecha</h5>
              <p>IZQUIERDA, DERECHA, EXTRAE, CONCATENAR, TEXTO, NOMPROPIO, HOY, SIFECHA, DIAS.LAB.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Validación</h5>
              <p>Listas desplegables, INDIRECTO para listas dependientes, CONTAR.SI para duplicados, fórmulas personalizadas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Dashboards</h5>
              <p>Combinar tablas + gráficos + slicers, principios visuales, KPIs, formato profesional.</p>
            </div>
          </div>
        `},
        { tag: 'Tips para el examen', html: `
          <h3>💡 Consejos para el examen final</h3>
          <ul>
            <li><strong>Lee cada pregunta con calma.</strong> Tienes tiempo de sobra.</li>
            <li><strong>Si no sabes una respuesta, no te detengas.</strong> Pasa a la siguiente y vuelve después.</li>
            <li><strong>En las preguntas verdadero/falso</strong>, piensa: ¿es 100% verdad o 100% falso?</li>
            <li><strong>En las de opción múltiple</strong>, descarta primero las que sabes que están mal.</li>
            <li><strong>En las de completar</strong>, relee la frase con tu respuesta puesta. ¿Suena bien?</li>
            <li><strong>Repasa las palabras clave</strong> de cada clase antes de empezar.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">🌟</span>
            <p><strong>Recuerda:</strong> El examen final tiene 15 preguntas que cubren los 5 temas del curso. Necesitas al menos 60% para aprobar.</p>
          </div>
        `},
        { tag: 'Después del examen', html: `
          <h3>🚀 ¿Qué sigue después?</h3>
          <p>Cuando apruebes el examen final, puedes seguir mejorando con estas prácticas:</p>
          <ul>
            <li><strong>Crea dashboards para tus proyectos personales</strong>: gastos mensuales, ahorros, presupuestos.</li>
            <li><strong>Practica funciones avanzadas</strong>: BUSCARV, SI anidados, SUMAR.SI.CONJUNTO, tablas dinámicas con PowerPivot.</li>
            <li><strong>Explora Power BI</strong>: la herramienta profesional de dashboards de Microsoft.</li>
            <li><strong>Automatiza con macros</strong>: graba macros para tareas repetitivas.</li>
            <li><strong>Comparte tus dashboards</strong>: exporta a PDF o publica en Excel Online.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p><strong>¡Lo lograste!</strong> Al completar este curso has dado un paso enorme hacia el análisis profesional de datos con Excel. Sigue practicando y verás cómo cada vez eres más rápido y eficiente.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Tabla dinámica', hint: '¿Cuáles son las 4 áreas del panel de campos?' },
        { term: 'Slicer', hint: '¿Cómo conectas un slicer a múltiples tablas dinámicas?' },
        { term: 'SIFECHA', hint: '¿Qué parámetros recibe SIFECHA y qué devuelve cada uno?' },
        { term: 'INDIRECTO', hint: '¿Para qué sirve INDIRECTO en validación de datos?' },
        { term: 'Dashboard', hint: '¿Cuáles son los 4 elementos clave de un dashboard en Excel?' },
        { term: 'CONTAR.SI', hint: '¿Cómo se usa CONTAR.SI para evitar duplicados?' },
        { term: 'Gráfico dinámico', hint: '¿Desde qué pestaña se inserta un gráfico dinámico?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿Cuántas áreas tiene una tabla dinámica?', options: [
          { value: 'a', label: '3' },
          { value: 'b', label: '4' },
          { value: 'c', label: '5' },
          { value: 'd', label: '6' }
        ], answer: 'b' },
        { id: 'c6e2', n: 2, type: 'mc', prompt: '¿Qué función extrae caracteres desde una posición intermedia?', options: [
          { value: 'a', label: '=IZQUIERDA()' },
          { value: 'b', label: '=DERECHA()' },
          { value: 'c', label: '=EXTRAE()' },
          { value: 'd', label: '=LARGO()' }
        ], answer: 'c' },
        { id: 'c6e3', n: 3, type: 'tf', prompt: 'La función DIAS360 usa el año comercial de 360 días.', answer: 'true' },
        { id: 'c6e4', n: 4, type: 'mc', prompt: '¿Qué gráfico es mejor para tendencias en el tiempo?', options: [
          { value: 'a', label: 'Circular' },
          { value: 'b', label: 'Líneas' },
          { value: 'c', label: 'Columnas' },
          { value: 'd', label: 'Barras' }
        ], answer: 'b' },
      ],
      tasks: [
        { id: 'c6t1', title: '🏆 Proyecto final: Dashboard completo', description: 'Crea un archivo de Excel con: (1) hoja de datos con 50+ filas, (2) 3 tablas dinámicas diferentes, (3) 3 gráficos dinámicos, (4) 2 slicers conectados a todo, (5) validación de datos en una hoja de captura con lista desplegable y fórmula personalizada, (6) hoja de dashboard con formato profesional.', evidence: 'Archivo .xlsx completo + captura del dashboard.' },
        { id: 'c6t2', title: '📝 Reflexión del curso', description: 'Escribe un documento de texto respondiendo: (1) ¿Qué tema te gustó más y por qué? (2) ¿Qué aplicación práctica le ves a las tablas dinámicas en tu vida profesional? (3) ¿Cómo crees que los dashboards pueden ayudar a tomar decisiones en una empresa? Mínimo 3 párrafos.', evidence: 'Documento de Word o PDF con tus respuestas.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Repaso final antes del examen acumulativo.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué función devuelve la fecha actual?', options: [
            { value: 'a', label: '=AHORA()' },
            { value: 'b', label: '=HOY()' },
            { value: 'c', label: '=FECHA()' },
            { value: 'd', label: '=DIAS()' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Dónde se encuentra la validación de datos?', options: [
            { value: 'a', label: 'Inicio → Validación' },
            { value: 'b', label: 'Datos → Validación de datos' },
            { value: 'c', label: 'Insertar → Validación' },
            { value: 'd', label: 'Fórmulas → Validación' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Un dashboard debe tener muchos colores y efectos visuales.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Cómo se llama el filtro visual con botones?', options: [
            { value: 'a', label: 'Segmentación de datos' },
            { value: 'b', label: 'Filtro avanzado' },
            { value: 'c', label: 'Autofiltro' },
            { value: 'd', label: 'Formato condicional' }
          ], answer: 'a' },
          { id: 'q5', type: 'fill', prompt: 'La función que capitaliza la primera letra de cada palabra se llama _______.', answer: 'NOMPROPIO' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Quinto Perito Contador',
        description: '15 preguntas cubriendo los 5 temas del curso. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Tablas dinámicas) · ¿Cuántas áreas tiene el panel de campos de una tabla dinámica?', options: [{ value: 'a', label: '2' }, { value: 'b', label: '4' }, { value: 'c', label: '6' }, { value: 'd', label: '8' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Tablas dinámicas) · ¿Qué operación es la predeterminada para valores numéricos en una tabla dinámica?', options: [{ value: 'a', label: 'Cuenta' }, { value: 'b', label: 'Suma' }, { value: 'c', label: 'Promedio' }, { value: 'd', label: 'Máximo' }], answer: 'b' },
          { id: 'f3', type: 'tf', prompt: 'Tema 1 (Tablas dinámicas) · Las tablas dinámicas se actualizan automáticamente cuando cambian los datos originales.', answer: 'false' },
          { id: 'f4', type: 'mc', prompt: 'Tema 2 (Segmentación) · ¿Qué es un slicer?', options: [{ value: 'a', label: 'Un tipo de gráfico' }, { value: 'b', label: 'Un filtro visual con botones interactivos' }, { value: 'c', label: 'Una función de texto' }, { value: 'd', label: 'Un tipo de dato' }], answer: 'b' },
          { id: 'f5', type: 'mc', prompt: 'Tema 2 (Segmentación) · ¿Cómo se conecta un slicer a varias tablas dinámicas?', options: [{ value: 'a', label: 'No se puede conectar' }, { value: 'b', label: 'Clic derecho → Conexiones de informes' }, { value: 'c', label: 'Se conecta automáticamente' }, { value: 'd', label: 'Desde la pestaña Insertar' }], answer: 'b' },
          { id: 'f6', type: 'tf', prompt: 'Tema 2 (Segmentación) · La Timeline solo funciona con campos de tipo fecha.', answer: 'true' },
          { id: 'f7', type: 'mc', prompt: 'Tema 3 (Texto) · ¿Qué función extrae los primeros caracteres de la izquierda?', options: [{ value: 'a', label: '=DERECHA()' }, { value: 'b', label: '=IZQUIERDA()' }, { value: 'c', label: '=EXTRAE()' }, { value: 'd', label: '=LARGO()' }], answer: 'b' },
          { id: 'f8', type: 'mc', prompt: 'Tema 3 (Fecha) · ¿Qué función calcula días laborales entre dos fechas?', options: [{ value: 'a', label: '=DIAS()' }, { value: 'b', label: '=DIAS360()' }, { value: 'c', label: '=DIAS.LAB()' }, { value: 'd', label: '=SIFECHA()' }], answer: 'c' },
          { id: 'f9', type: 'tf', prompt: 'Tema 3 (Texto) · La función NOMPROPIO convierte texto a mayúsculas.', answer: 'false' },
          { id: 'f10', type: 'mc', prompt: 'Tema 4 (Validación) · ¿En qué pestaña se encuentra la validación de datos en Excel?', options: [{ value: 'a', label: 'Inicio' }, { value: 'b', label: 'Datos' }, { value: 'c', label: 'Insertar' }, { value: 'd', label: 'Revisar' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Validación) · ¿Qué función evita duplicados en validación?', options: [{ value: 'a', label: '=SUMA()' }, { value: 'b', label: '=SI()' }, { value: 'c', label: '=CONTAR.SI()' }, { value: 'd', label: '=BUSCARV()' }], answer: 'c' },
          { id: 'f12', type: 'tf', prompt: 'Tema 4 (Validación) · La validación de datos evita pegar datos inválidos desde el portapapeles.', answer: 'false' },
          { id: 'f13', type: 'mc', prompt: 'Tema 5 (Dashboards) · ¿Qué tipo de gráfico es mejor para tendencias en el tiempo?', options: [{ value: 'a', label: 'Circular' }, { value: 'b', label: 'Líneas' }, { value: 'c', label: 'Columnas' }, { value: 'd', label: 'Anillos' }], answer: 'b' },
          { id: 'f14', type: 'mc', prompt: 'Tema 5 (Dashboards) · ¿Qué es un KPI?', options: [{ value: 'a', label: 'Un tipo de gráfico' }, { value: 'b', label: 'Un indicador clave de rendimiento' }, { value: 'c', label: 'Un slicer' }, { value: 'd', label: 'Una función' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · El principio de diseño que dice "menos es más" se llama _______.', answer: 'KISS' }
        ]
      }
    }
  ]
};
