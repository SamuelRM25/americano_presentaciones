const COURSE_DATA = {
  grade: 'sexto_pc',
  title: 'Computación III · Funciones Avanzadas de Excel',
  subtitle: 'Sexto Perito Contador',
  classes: [
    {
      id: 'c1', num: 1, icon: '🎯',
      title: 'INDICE y COINCIDIR · Búsquedas fundamentales',
      tagline: 'Las dos funciones básicas que todo usuario avanzado de Excel debe dominar.',
      info: [
        { tag: 'Introducción', html: `
          <h3>👋 Bienvenido a Computación III</h3>
          <p>En este curso llevaremos tus habilidades de Excel al <strong>siguiente nivel</strong>. Aprenderás 10 funciones modernas que convertirán hojas de cálculo simples en verdaderas <strong>herramientas profesionales de análisis de datos</strong>.</p>
          <div class="slide-info">
            <span class="icon">📊</span>
            <p><strong>Dato clave:</strong> Estas funciones están disponibles en <strong>Microsoft 365, Excel 2021 y Excel para la web</strong>. Si usas Excel 2019 o anterior, algunas no funcionarán.</p>
          </div>
          <h3>🎯 Objetivos del curso completo</h3>
          <ul>
            <li>Dominar 10 funciones modernas de Excel.</li>
            <li>Crear reportes dinámicos y profesionales.</li>
            <li>Automatizar tareas repetitivas con fórmulas.</li>
            <li>Construir tus propias funciones personalizadas con LAMBDA.</li>
            <li>Resolver problemas reales del mundo contable y administrativo.</li>
          </ul>
        `},
        { tag: 'INDICE', html: `
          <h3>🎯 Función INDICE</h3>
          <p>La función <strong>INDICE</strong> devuelve el <strong>valor de una celda</strong> específica dentro de un rango, indicando su número de fila y columna. Es como un sistema de coordenadas: tú le dices "dame la fila 5, columna 3" y te devuelve ese valor exacto.</p>
          <h4>📝 Sintaxis</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(matriz, núm_fila, [núm_columna])</code></pre>
          <ul>
            <li><strong>matriz</strong>: el rango de datos donde buscar.</li>
            <li><strong>núm_fila</strong>: la fila dentro del rango (empieza en 1).</li>
            <li><strong>núm_columna</strong>: la columna (opcional si el rango es de una sola columna).</li>
          </ul>
          <h4>💡 Ejemplo práctico</h4>
          <p>Supón que tienes una tabla de productos en <code>A1:C10</code> con columnas <strong>Producto, Precio, Stock</strong>:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(A1:C10, 5, 2)  → devuelve el precio del 5° producto
=INDICE(A1:A10, 3)    → devuelve el nombre del 3er producto
=INDICE(B1:B10, 7)    → devuelve el precio del 7° producto</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip clave:</strong> INDICE es <strong>no volátil</strong>, lo que significa que no se recalcula constantemente. Esto la hace más rápida que otras funciones como DESREF o INDIRECTO.</p>
          </div>
        `},
        { tag: 'COINCIDIR', html: `
          <h3>🔍 Función COINCIDIR</h3>
          <p>La función <strong>COINCIDIR</strong> busca un valor dentro de un rango y devuelve su <strong>posición numérica</strong> (no el valor en sí). Es la mitad del famoso combo <code>INDICE + COINCIDIR</code>.</p>
          <h4>📝 Sintaxis</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=COINCIDIR(valor_buscado, matriz_buscada, [tipo_de_coincidencia])</code></pre>
          <ul>
            <li><strong>valor_buscado</strong>: lo que quieres encontrar.</li>
            <li><strong>matriz_buscada</strong>: el rango donde buscar (una sola fila o columna).</li>
            <li><strong>tipo_de_coincidencia</strong>:
              <ul>
                <li><code>1</code> u omitido: <strong>aproximada</strong> (la lista debe estar ordenada ASC).</li>
                <li><code>0</code>: <strong>exakta</strong> (lo más usado).</li>
                <li><code>-1</code>: <strong>aproximada</strong> (lista ordenada DESC).</li>
              </ul>
            </li>
          </ul>
          <h4>💡 Ejemplo práctico</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Si A1:A5 = {"Ana", "Beto", "Carla", "David", "Elena"}:
=COINCIDIR("Carla", A1:A5, 0)  → devuelve 3 (tercera posición)
=COINCIDIR("ZZZ", A1:A5, 0)    → devuelve #N/A (no existe)</code></pre>
        `},
        { tag: 'INDICE+COINCIDIR', html: `
          <h3>🤝 La combinación mágica: INDICE + COINCIDIR</h3>
          <p>Juntas, estas dos funciones reemplazan al famoso <strong>BUSCARV</strong> (que está obsoleto) con una versión <strong>mucho más flexible</strong>.</p>
          <h4>✨ ¿Por qué es mejor que BUSCARV?</h4>
          <ul>
            <li>✅ Puede buscar hacia la <strong>izquierda</strong> (BUSCARV no puede).</li>
            <li>✅ Funciona con datos en <strong>filas o columnas</strong>.</li>
            <li>✅ No se rompe si insertas columnas nuevas en la tabla.</li>
            <li>✅ Es <strong>más rápida</strong> en tablas grandes.</li>
          </ul>
          <h4>💡 Ejemplo clásico</h4>
          <p>Tabla en <code>A1:C10</code>: <strong>Producto (A), Precio (B), Stock (C)</strong>. Quieres buscar el precio de un producto cuyo nombre está en la celda <code>E1</code>:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(B1:B10, COINCIDIR(E1, A1:A10, 0))</code></pre>
          <p>Si quisieras el stock (columna C) en lugar del precio, simplemente cambias <code>B1:B10</code> por <code>C1:C10</code>. <strong>¡Sin contar columnas!</strong></p>
          <h4>🎯 Con búsqueda en dos direcciones</h4>
          <p>Imagina que quieres el dato de la intersección de un producto (fila) y un mes (columna). Tabla en <code>A1:N20</code> con productos en filas y meses en columnas:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(B2:N20, COINCIDIR(E1, A2:A20, 0), COINCIDIR(F1, B1:N1, 0))</code></pre>
        `},
        { tag: 'INDICE con matrices', html: `
          <h3>🚀 INDICE avanzado: devolver rangos completos</h3>
          <p>Una variante muy poderosa: cuando <strong>no especificas fila o columna</strong>, INDICE devuelve la fila/columna completa. Esto es la base de funciones más avanzadas.</p>
          <h4>💡 Ejemplo: devolver toda una columna</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(A1:C100, , 2)  → devuelve TODA la columna 2 (precios)</code></pre>
          <h4>💡 Ejemplo: devolver toda una fila</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDICE(A1:C10, 5, )  → devuelve TODA la fila 5 completa</code></pre>
          <p>Esto se vuelve <strong>extremadamente útil</strong> combinado con <code>SUMA</code>, <code>PROMEDIO</code>, <code>MAX</code>, <code>FILTRAR</code> u otras funciones de matriz dinámica que veremos más adelante.</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Cuidado:</strong> Si usas esta técnica con funciones que no son de matriz dinámica (versiones antiguas de Excel), necesitarás <strong>Ctrl+Shift+Enter</strong> en lugar de solo Enter. En Excel 365 esto se hace automático.</p>
          </div>
        `},
        { tag: 'Errores comunes', html: `
          <h3>🛠️ Manejo de errores y buenas prácticas</h3>
          <h4>🚨 Errores típicos</h4>
          <ul>
            <li><strong>#¡REF!</strong>: el rango no existe o fue eliminado.</li>
            <li><strong>#¡VALOR!</strong>: el número de fila/columna es 0 o negativo.</li>
            <li><strong>#N/A</strong>: el valor buscado no se encuentra (en COINCIDIR).</li>
          </ul>
          <h4>🛡️ Cómo envolver con SI.ERROR</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI.ERROR(INDICE(B1:B10, COINCIDIR(E1, A1:A10, 0)), "Producto no encontrado")</code></pre>
          <h4>📋 Buenas prácticas</h4>
          <ul>
            <li>Usa <strong>nombres de rangos</strong> en lugar de referencias A1:B10. Hace las fórmulas más legibles.</li>
            <li>Combina <strong>SI.ERROR</strong> para dar mensajes amigables.</li>
            <li>Para bases de datos grandes, convierte el rango a <strong>Tabla</strong> (Ctrl+T) y usa referencias estructuradas.</li>
            <li>Documenta las fórmulas complejas con <strong>comentarios</strong> (clic derecho → Insertar comentario).</li>
          </ul>
        `}
      ],
      keywords: [
        { term: 'INDICE', hint: 'Investiga la diferencia entre INDICE en su forma de referencia vs. forma de matriz.' },
        { term: 'COINCIDIR', hint: '¿Qué significan los valores 1, 0 y -1 en el tercer argumento?' },
        { term: 'Tipo de coincidencia', hint: '¿Cuándo se usa coincidencia exacta vs. aproximada?' },
        { term: 'Fila y columna', hint: '¿En qué número empiezan a contar las filas y columnas en INDICE?' },
        { term: 'BUSCARV', hint: 'Investiga: ¿por qué BUSCARV se considera obsoleto y se reemplaza por INDICE+COINCIDIR?' },
        { term: 'Matriz dinámica', hint: '¿Qué es y desde qué versión de Excel existe?' },
        { term: 'SI.ERROR', hint: '¿Cómo se usa para capturar errores y mostrar mensajes personalizados?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: 'Si tienes datos en A1:C10 y ejecutas =INDICE(A1:C10, 4, 2), ¿qué obtienes?', options: [
          { value: 'a', label: 'El valor de la celda B4' },
          { value: 'b', label: 'El valor de la celda A4' },
          { value: 'c', label: 'El valor de la celda C4' },
          { value: 'd', label: 'Un error #¡REF!' }
        ], answer: 'a' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: 'Para que COINCIDIR encuentre el valor exacto, el tercer argumento debe ser:', options: [
          { value: 'a', label: '1' },
          { value: 'b', label: '0' },
          { value: 'c', label: '-1' },
          { value: 'd', label: 'VERDADERO' }
        ], answer: 'b' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'La combinación INDICE + COINCIDIR puede buscar datos hacia la IZQUIERDA, a diferencia de BUSCARV.', answer: 'true' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'La función COINCIDIR devuelve la posición ______ del valor buscado (no el valor en sí).', answer: 'numérica' }
      ],
      tasks: [
        { id: 'c1t1', title: '📋 Tabla de productos y precios', description: 'Crea una hoja con 10 productos (columna A) y sus precios (columna B). Luego en otra celda, escribe el nombre de un producto y usa INDICE+COINCIDIR para mostrar su precio automáticamente.', evidence: 'Captura de pantalla de la fórmula funcionando y el resultado.' },
        { id: 'c1t2', title: '🔄 Búsqueda bidimensional', description: 'Crea una tabla de ventas: 5 productos en filas y 4 meses (Ene, Feb, Mar, Abr) en columnas. Usa INDICE+COINCIDIR+COINCIDIR para que el usuario escriba un producto y un mes y obtenga el valor de venta.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre INDICE y COINCIDIR.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué devuelve =INDICE(A1:C10, 3, 2)?', options: [
            { value: 'a', label: 'El valor de A3' },
            { value: 'b', label: 'El valor de B3' },
            { value: 'c', label: 'El valor de C3' },
            { value: 'd', label: 'Error' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para una búsqueda EXACTA con COINCIDIR, usamos:', options: [
            { value: 'a', label: 'COINCIDIR(valor, rango, 1)' },
            { value: 'b', label: 'COINCIDIR(valor, rango, 0)' },
            { value: 'c', label: 'COINCIDIR(valor, rango)' },
            { value: 'd', label: 'COINCIDIR(valor, rango, -1)' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'INDICE+COINCIDIR puede reemplazar a BUSCARV con más flexibilidad.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Si =COINCIDIR("Ana", A1:A10, 0) devuelve 3, significa que:', options: [
            { value: 'a', label: 'Ana está en A3' },
            { value: 'b', label: 'Ana es el 3er valor en el rango' },
            { value: 'c', label: 'Hay 3 Ana' },
            { value: 'd', label: 'Ana vale 3' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Para evitar el error #N/A cuando un valor no existe, envolvemos la fórmula con _____.', answer: 'SI.ERROR' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🔎',
      title: 'BUSCARX · La búsqueda moderna definitiva',
      tagline: 'Reemplaza BUSCARV, BUSCARH y BUSCAR. Más simple, más poderosa.',
      info: [
        { tag: 'Introducción', html: `
          <h3>🔎 BUSCARX: el nuevo rey de las búsquedas</h3>
          <p>La función <strong>BUSCARX (XLOOKUP)</strong> llegó en <strong>Excel 2021 / Microsoft 365</strong> y reemplazó de un solo golpe a <strong>BUSCARV</strong>, <strong>BUSCARH</strong> y <strong>BUSCAR</strong>. Es <strong>más simple</strong>, más flexible y maneja errores de forma elegante.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Microsoft la recomienda</strong> oficialmente: "Si aún no has aprendido BUSCARV, aprende BUSCARX directamente".</p>
          </div>
          <h3>📝 Sintaxis completa</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(valor_buscado, matriz_buscada, matriz_resultado,
        [si_no_encontrado], [modo_coincidencia], [modo_búsqueda])</code></pre>
          <p>Los corchetes indican argumentos opcionales. Los <strong>tres primeros</strong> son obligatorios.</p>
        `},
        { tag: 'Básica', html: `
          <h3>✨ BUSCARX en su forma más simple</h3>
          <h4>💡 Ejemplo: buscar el precio de un producto</h4>
          <p>Tabla en <code>A1:B10</code>: <strong>Producto (A), Precio (B)</strong>. Quieres el precio del producto escrito en <code>D1</code>:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, A1:A10, B1:B10)</code></pre>
          <p>¡Y listo! Solo 3 argumentos. <strong>Sin contar columnas, sin especificar FALSE</strong> como en BUSCARV.</p>
          <h4>💡 Ejemplo: con mensaje si no encuentra</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, A1:A10, B1:B10, "No existe ese producto")</code></pre>
          <p>El cuarto argumento es el mensaje que aparece si el valor no se encuentra. <strong>Se acabaron los #N/A</strong> en tus reportes.</p>
          <div class="slide-success">
            <span class="icon">🎉</span>
            <p>Esta es la diferencia más inmediata vs. BUSCARV: <strong>manejo nativo de errores</strong> sin necesidad de SI.ERROR.</p>
          </div>
        `},
        { tag: 'Ventajas', html: `
          <h3>🏆 Las 6 ventajas de BUSCARX sobre BUSCARV</h3>
          <ol>
            <li><strong>🔄 Busca en cualquier dirección</strong>: puede devolver columnas a la izquierda o derecha del valor buscado, sin necesidad de reorganizar datos.</li>
            <li><strong>🛡️ Manejo de errores integrado</strong>: el cuarto argumento define qué mostrar si no encuentra el valor.</li>
            <li><strong>📊 Modos de coincidencia avanzados</strong>: comodines, coincidencia exacta, aproximada y de rango.</li>
            <li><strong>🔍 Búsqueda vertical y horizontal</strong> con la misma función.</li>
            <li><strong>🔁 Búsqueda inversa</strong> (de abajo hacia arriba) con el sexto argumento.</li>
            <li><strong>⚡ Búsqueda binaria rápida</strong> en rangos ordenados (sexto argumento).</li>
          </ol>
          <h4>💡 Ejemplo: buscar a la izquierda</h4>
          <p>Con BUSCARV era imposible. Con BUSCARX, natural:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, B1:B10, A1:A10)  // precio en B, nombre en A</code></pre>
        `},
        { tag: 'Coincidencia', html: `
          <h3>🎯 Modos de coincidencia (5° argumento)</h3>
          <p>El quinto argumento controla cómo se compara el valor buscado:</p>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">0️⃣</div><h5>Coincidencia exacta</h5><p><code>=BUSCARX(valor, rango, resultado, , 0)</code> (valor por defecto).</p></div>
            <div class="grid-item"><div class="icon">-1️⃣</div><h5>Coincidencia exacta o siguiente menor</h5><p>Para rangos ordenados DESC. Devuelve el valor más cercano hacia abajo.</p></div>
            <div class="grid-item"><div class="icon">1️⃣</div><h5>Coincidencia exacta o siguiente mayor</h5><p>Para rangos ordenados ASC. Devuelve el valor más cercano hacia arriba.</p></div>
            <div class="grid-item"><div class="icon">2️⃣</div><h5>Comodín</h5><p>Permite usar <code>*</code> y <code>?</code> en el valor buscado.</p></div>
            <div class="grid-item"><div class="icon">🔍</div><h5>Ejemplo comodín</h5><p><code>=BUSCARX("Mar*", A:A, B:B, , 2)</code> encuentra María, Marcos, Marta...</p></div>
          </div>
        `},
        { tag: 'Búsqueda', html: `
          <h3>🧭 Modos de búsqueda (6° argumento)</h3>
          <p>El sexto argumento controla cómo se <strong>recorre</strong> el rango:</p>
          <ul>
            <li><strong>1</strong> u omitido: del <strong>primero al último</strong> (normal).</li>
            <li><strong>-1</strong>: del <strong>último al primero</strong> (búsqueda inversa, útil para encontrar la <strong>última</strong> coincidencia).</li>
            <li><strong>2</strong>: <strong>búsqueda binaria ascendente</strong> (requiere orden ascendente, es rapidísima).</li>
            <li><strong>-2</strong>: <strong>búsqueda binaria descendente</strong> (requiere orden descendente).</li>
          </ul>
          <h4>💡 Ejemplo: encontrar la última venta de un producto</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, A:A, C:C, "Sin ventas", 0, -1)</code></pre>
          <p>Esto busca el producto D1 de abajo hacia arriba y devuelve la <strong>última</strong> venta registrada.</p>
          <div class="slide-info">
            <span class="icon">⚡</span>
            <p>En rangos de miles de filas, la búsqueda binaria (<code>2</code> o <code>-2</code>) es <strong>hasta 100x más rápida</strong> que la búsqueda secuencial.</p>
          </div>
        `},
        { tag: 'Avanzado', html: `
          <h3>🚀 BUSCARX avanzado · Múltiples resultados</h3>
          <p>BUSCARX puede devolver <strong>múltiples valores a la vez</strong> si pasas un rango de varias columnas en el tercer argumento.</p>
          <h4>💡 Ejemplo: devolver nombre, precio y stock de un producto</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, A2:A20, B2:D20)
// Devuelve un "arreglo" con Nombre, Precio y Stock</code></pre>
          <p>En Excel 365, esta fórmula <strong>se desborda</strong> automáticamente en las celdas adyacentes. Selecciona solo la primera celda antes de escribir la fórmula.</p>
          <h4>💡 Búsqueda anidada (de izquierda a derecha)</h4>
          <p>Si necesitas el dato de una intersección (fila y columna):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=BUSCARX(D1, A2:A20, BUSCARX(E1, B1:F1, B2:F20))</code></pre>
          <p>El BUSCARX interno encuentra la columna correcta, y el externo devuelve el valor de la celda de intersección.</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Versión:</strong> BUSCARX requiere Excel 2021, Microsoft 365 o Excel para la web. Si tus estudiantes usan Excel 2019, no funcionará.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'BUSCARX', hint: '¿Desde qué versión de Excel está disponible y por qué reemplaza a BUSCARV?' },
        { term: 'XLOOKUP', hint: 'Investiga: ¿en qué idioma inglés se llama y cuándo se introdujo?' },
        { term: 'Coincidencia exacta', hint: '¿Cuál es el valor por defecto del 5° argumento de BUSCARX?' },
        { term: 'Comodín', hint: '¿Qué caracteres se usan en BUSCARX y qué representa cada uno?' },
        { term: 'Búsqueda inversa', hint: '¿Cómo se usa el 6° argumento para buscar de abajo hacia arriba?' },
        { term: 'Búsqueda binaria', hint: '¿Qué requisito tiene para que funcione correctamente?' },
        { term: 'Matriz resultado', hint: '¿Puede devolver múltiples columnas a la vez? ¿Cómo se llama ese efecto?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Cuál es la sintaxis MÍNIMA de BUSCARX?', options: [
          { value: 'a', label: 'BUSCARX(valor_buscado)' },
          { value: 'b', label: 'BUSCARX(valor_buscado, matriz_buscada, matriz_resultado)' },
          { value: 'c', label: 'BUSCARX(valor_buscado, matriz_buscada, matriz_resultado, si_no_encontrado)' },
          { value: 'd', label: 'BUSCARX(valor_buscado, matriz_buscada, matriz_resultado, columna, FALSO)' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'tf', prompt: 'BUSCARX puede buscar datos a la izquierda del valor de búsqueda (cosa que BUSCARV no podía).', answer: 'true' },
        { id: 'c2e3', n: 3, type: 'mc', prompt: 'Para buscar un valor que contenga la palabra "Mar" (María, Marcos, etc.) usamos el modo de coincidencia:', options: [
          { value: 'a', label: '0 (exacto)' },
          { value: 'b', label: '1 (exacto o mayor)' },
          { value: 'c', label: '2 (comodín)' },
          { value: 'd', label: '-1 (inverso)' }
        ], answer: 'c' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'Para buscar de abajo hacia arriba (encontrar la última coincidencia) el 6° argumento debe ser _____.', answer: '-1' }
      ],
      tasks: [
        { id: 'c2t1', title: '🔄 Migrar de BUSCARV a BUSCARX', description: 'Toma una hoja de cálculo que ya tengas con fórmulas BUSCARV. Crea una copia y reemplaza cada BUSCARV por BUSCARX, simplificando la sintaxis. Compara el rendimiento.', evidence: 'Captura del antes y después, y al menos 3 ejemplos migrados.' },
        { id: 'c2t2', title: '🔍 Búsqueda con comodines', description: 'Crea una lista de 20 nombres. Usa BUSCARX con modo 2 (comodín) para encontrar todos los nombres que empiecen con una letra específica.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre BUSCARX.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuántos argumentos OBLIGATORIOS tiene BUSCARX?', options: [
            { value: 'a', label: '1' },
            { value: 'b', label: '2' },
            { value: 'c', label: '3' },
            { value: 'd', label: '6' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: 'El 5° argumento con valor -1 significa:', options: [
            { value: 'a', label: 'Búsqueda inversa' },
            { value: 'b', label: 'Coincidencia exacta o siguiente menor' },
            { value: 'c', label: 'Comodín' },
            { value: 'd', label: 'Búsqueda binaria' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'BUSCARX requiere de SI.ERROR para manejar el caso de "no encontrado".', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'Para encontrar la ÚLTIMA venta de un producto en una lista, usarías:', options: [
            { value: 'a', label: 'BUSCARX(producto, ventas, monto, , 0, 1)' },
            { value: 'b', label: 'BUSCARX(producto, ventas, monto, , 0, -1)' },
            { value: 'c', label: 'BUSCARX(producto, ventas, monto, , 2, 1)' },
            { value: 'd', label: 'BUSCARX(producto, ventas, monto, , -1, 0)' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'BUSCARX puede devolver múltiples columnas a la vez gracias a las ______ dinámicas.', answer: 'matrices' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '↔️',
      title: 'DESREF · Referencias dinámicas',
      tagline: 'Crea rangos que se mueven, crecen o se encogen automáticamente.',
      info: [
        { tag: 'Introducción', html: `
          <h3>↔️ Función DESREF (OFFSET)</h3>
          <p>La función <strong>DESREF</strong> devuelve una <strong>referencia a un rango</strong> que se "mueve" a partir de una celda base. Es como decirle a Excel: "desde esta celda, muévete 3 filas abajo, 2 columnas a la derecha, y toma un bloque de 4 filas por 5 columnas".</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> DESREF es una función <strong>volátil</strong>, lo que significa que se recalcula cada vez que hay CUALQUIER cambio en la hoja. En archivos muy grandes puede hacer que Excel se ponga lento. Úsala con moderación.</p>
          </div>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=DESREF(ref, filas, columnas, [alto], [ancho])</code></pre>
          <ul>
            <li><strong>ref</strong>: la celda base desde donde parte el movimiento.</li>
            <li><strong>filas</strong>: cuántas filas mover (positivo = abajo, negativo = arriba).</li>
            <li><strong>columnas</strong>: cuántas columnas mover (positivo = derecha, negativo = izquierda).</li>
            <li><strong>alto</strong>: cuántas filas debe tener el rango resultante (opcional).</li>
            <li><strong>ancho</strong>: cuántas columnas debe tener (opcional).</li>
          </ul>
        `},
        { tag: 'Básico', html: `
          <h3>💡 Ejemplos paso a paso</h3>
          <h4>1️⃣ Moverse a una celda específica</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=DESREF(A1, 5, 2)  → devuelve la celda C6
// Empezamos en A1, bajamos 5 filas (a A6) y vamos 2 columnas a la derecha (a C6)</code></pre>
          <h4>2️⃣ Definir un rango rectangular</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=DESREF(A1, 2, 1, 5, 3)  → devuelve C3:E7
// Desde A1, baja 2 filas (fila 3) y 1 columna (columna C).
// Luego toma 5 filas de alto y 3 columnas de ancho → C3:E7</code></pre>
          <h4>3️⃣ Usar valores de celdas para hacer el rango dinámico</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=DESREF(A1, 0, 0, B1, C1)
// Si B1=10 y C1=3, devuelve A1:C10
// Las celdas B1 y C1 controlan el tamaño del rango</code></pre>
        `},
        { tag: 'Nombres dinámicos', html: `
          <h3>🏷️ Rangos con nombre dinámicos: el superpoder de DESREF</h3>
          <p>El uso más poderoso de DESREF es crear <strong>rangos con nombre dinámicos</strong> que crecen automáticamente cuando agregas datos. Esto se logra con:</p>
          <ul>
            <li><strong>CONTARA()</strong>: cuenta celdas no vacías.</li>
            <li><strong>DESREF()</strong>: crea el rango basado en esa cuenta.</li>
          </ul>
          <h4>💡 Ejemplo: rango de ventas que crece solo</h4>
          <p>Tienes una lista de ventas en la columna A que crece día a día. Defines un nombre llamado <code>Ventas</code> con esta fórmula:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=DESREF(Hoja1!$A$2, 0, 0, CONTARA(Hoja1!$A:$A)-1, 1)</code></pre>
          <p>Este rango automáticamente:</p>
          <ul>
            <li>Empieza en A2 (la primera venta).</li>
            <li>Su alto se ajusta según el conteo de celdas con datos.</li>
            <li>Cada vez que agregas una venta, el rango crece.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">📍</span>
            <p>Para crear un rango con nombre: <strong>Fórmulas → Administrador de nombres → Nuevo</strong>. Pega la fórmula DESREF en "Se refiere a".</p>
          </div>
        `},
        { tag: 'Gráficos', html: `
          <h3>📊 Gráficos dinámicos con DESREF</h3>
          <p>Combinando rangos dinámicos con <strong>SERIES de gráficos</strong>, puedes hacer que un gráfico se actualice solo cuando agregas datos.</p>
          <h4>💡 Pasos para un gráfico dinámico</h4>
          <ol>
            <li>Crea dos rangos con nombre dinámico:
              <ul>
                <li><code>Categorias</code>: =DESREF($A$2, 0, 0, CONTARA($A:$A)-1, 1)</li>
                <li><code>Valores</code>: =DESREF($B$2, 0, 0, CONTARA($B:$B)-1, 1)</li>
              </ul>
            </li>
            <li>Crea un gráfico con datos de A1:B10.</li>
            <li>Clic en el gráfico → <strong>Seleccionar datos</strong>.</li>
            <li>Edita la Serie: en "Valores Y" escribe <code>=Hoja1!Valores</code></li>
            <li>Edita Categorías: escribe <code>=Hoja1!Categorias</code></li>
          </ol>
          <p>Ahora agrega más datos y verás cómo el gráfico <strong>se expande solo</strong>.</p>
        `},
        { tag: 'Con tablas', html: `
          <h3>📋 ¿DESREF o Tablas oficiales?</h3>
          <p>Aunque DESREF es poderosa, <strong>no siempre es la mejor opción</strong> en Excel 365. Considera estas alternativas modernas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Tablas (Ctrl+T)</h5>
              <p>Convertir datos en Tabla oficial. Crece automáticamente, mejor rendimiento que DESREF.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🆕</div>
              <h5>Matrices dinámicas</h5><p>Excel 365 las usa automáticamente. =A2# toma toda la columna.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📐</div>
              <h5>DESREF + CONTARA</h5><p>Cuando necesitas rangos con nombre que otras fórmulas puedan usar.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚠️</div>
              <h5>Cuándo evitar DESREF</h5><p>En archivos con miles de filas o muchos gráficos: usa Tablas en su lugar.</p>
            </div>
          </div>
          <h4>💡 Truco: anidar DESREF con otras funciones</h4>
          <p>DESREF devuelve un rango, así que puedes pasarlo a SUMA, PROMEDIO, MAX, etc.:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SUMA(DESREF(A1, 0, 1, 10, 1))  // Suma B1:B10
=PROMEDIO(DESREF(A1, 0, 2, CONTARA(A:A)-1, 1))  // Promedio dinámico
=MAX(DESREF(A1, 1, 3, 5, 1))  // Máximo de D2:D6</code></pre>
        `}
      ],
      keywords: [
        { term: 'DESREF', hint: '¿Qué significa "función volátil" y por qué afecta el rendimiento?' },
        { term: 'OFFSET', hint: 'Investiga: ¿en qué versión se introdujo y para qué se diseñó originalmente?' },
        { term: 'Función volátil', hint: 'Lista de funciones volátiles de Excel: INDIRECTO, AHORA, HOY, ALEATORIO...' },
        { term: 'Rango con nombre', hint: 'Investiga: ¿cómo se accede al Administrador de nombres?' },
        { term: 'CONTARA', hint: '¿Qué diferencia hay entre CONTARA, CONTAR y CONTAR.SI?' },
        { term: 'Gráfico dinámico', hint: 'Investiga: ¿qué es un "gráfico autorregulable" y cuándo conviene?' },
        { term: 'Tabla estructurada', hint: '¿Cómo se crea una Tabla con Ctrl+T y qué ventajas tiene sobre un rango normal?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '=DESREF(A1, 3, 2, 4, 5) devuelve un rango de:', options: [
          { value: 'a', label: 'Una sola celda' },
          { value: 'b', label: '4 filas por 5 columnas' },
          { value: 'c', label: '3 filas por 2 columnas' },
          { value: 'd', label: '5 filas por 4 columnas' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'tf', prompt: 'DESREF es una función volátil: se recalcula cada vez que cambia cualquier celda de la hoja.', answer: 'true' },
        { id: 'c3e3', n: 3, type: 'mc', prompt: 'Para crear un rango dinámico que crezca con los datos, DESREF se combina con:', options: [
          { value: 'a', label: 'CONTARA' },
          { value: 'b', label: 'SUMA' },
          { value: 'c', label: 'BUSCARV' },
          { value: 'd', label: 'ALEATORIO' }
        ], answer: 'a' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'Para crear un rango con nombre dinámico se usa el menú Fórmulas → Administrador de _______.', answer: 'nombres' }
      ],
      tasks: [
        { id: 'c3t1', title: '📊 Lista de precios dinámica', description: 'Crea una lista de 10 productos con precios. Define un rango con nombre dinámico llamado "ListaPrecios" usando DESREF + CONTARA. Luego crea un gráfico de barras que use ese rango y agranda la lista: el gráfico debe actualizarse solo.', evidence: 'Video o secuencia de capturas mostrando el crecimiento automático.' },
        { id: 'c3t2', title: '🔍 Comparación DESREF vs Tabla', description: 'Crea el mismo escenario dos veces: una con DESREF y otra con Tabla (Ctrl+T). Llena 1000 filas de datos y compara el tiempo de cálculo. ¿Cuál es más rápido?' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre DESREF.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '=DESREF(A1, 2, 1) devuelve:', options: [
            { value: 'a', label: 'La celda B3' },
            { value: 'b', label: 'La celda C3' },
            { value: 'c', label: 'La celda B2' },
            { value: 'd', label: 'Un error' }
          ], answer: 'a' },
          { id: 'q2', type: 'mc', prompt: 'Para hacer un rango dinámico, DESREF se combina con:', options: [
            { value: 'a', label: 'SUMA' },
            { value: 'b', label: 'CONTARA' },
            { value: 'c', label: 'PROMEDIO' },
            { value: 'd', label: 'MAX' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'DESREF es no volátil y no afecta el rendimiento del archivo.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'En Excel 365, ¿cuál es la alternativa moderna preferida a DESREF?', options: [
            { value: 'a', label: 'BUSCARV' },
            { value: 'b', label: 'Tablas con Ctrl+T' },
            { value: 'c', label: 'La función Y' },
            { value: 'd', label: 'No hay alternativa' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'DESREF devuelve una ______ a un rango, no el rango en sí.', answer: 'referencia' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '🧹',
      title: 'FILTRAR y UNICOS · Limpieza y extracción de datos',
      tagline: 'Extrae lo que necesitas y elimina duplicados de forma automática.',
      info: [
        { tag: 'FILTRAR', html: `
          <h3>🧹 Función FILTRAR (FILTER)</h3>
          <p><strong>FILTRAR</strong> extrae todos los registros de un rango que cumplan una o varias condiciones. A diferencia del filtro tradicional (que es manual), FILTRAR crea una <strong>lista dinámica</strong> que se actualiza automáticamente.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Está disponible desde <strong>Excel 2021 / Microsoft 365</strong>. Devuelve una matriz que se "desborda" automáticamente en las celdas adyacentes.</p>
          </div>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(matriz, incluir, [si_vacía])</code></pre>
          <ul>
            <li><strong>matriz</strong>: el rango o columna a filtrar.</li>
            <li><strong>incluir</strong>: una condición lógica (VERDADERO/FALSO) que se evalúa por fila.</li>
            <li><strong>si_vacía</strong>: (opcional) qué devolver si no hay coincidencias.</li>
          </ul>
        `},
        { tag: 'FILTRAR básico', html: `
          <h3>💡 Ejemplos de FILTRAR</h3>
          <h4>1️⃣ Filtrar ventas mayores a 1000</h4>
          <p>Tienes ventas en A2:D100 (con encabezados en fila 1). Para obtener solo las mayores a Q1000:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, D2:D100>1000, "Sin ventas grandes")</code></pre>
          <h4>2️⃣ Filtrar por un texto específico</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, B2:B100="Guatemala", "Sin datos")</code></pre>
          <h4>3️⃣ Filtrar por múltiples condiciones (Y lógico)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, (B2:B100="Guatemala")*(D2:D100>1000), "Sin coincidencias")</code></pre>
          <p>Multiplicar dos condiciones = operador AND. Para OR se usa la suma <code>+</code>.</p>
        `},
        { tag: 'FILTRAR avanzado', html: `
          <h3>🎯 FILTRAR con condiciones múltiples</h3>
          <h4>💡 AND lógico (ambas condiciones deben cumplirse)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, (C2:C100="Aprobado")*(D2:D100>=80))</code></pre>
          <h4>💡 OR lógico (cualquiera de las condiciones)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, (C2:C100="Aprobado")+(C2:C100="Excelente"))</code></pre>
          <h4>💡 Negación (NO incluye)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, C2:C100<>"Reprobado")</code></pre>
          <h4>💡 Filtrar las top 3 ventas</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(A2:D100, D2:D100>=K.ESIMO.MAYOR(D2:D100, 3))</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Si el rango filtrado se expande, asegúrate de tener <strong>espacio libre</strong> en las celdas adyacentes. Si hay datos, Excel mostrará <strong>#¡DESBORDAMIENTO!</strong></p>
          </div>
        `},
        { tag: 'UNICOS', html: `
          <h3>🎯 Función UNICOS (UNIQUE)</h3>
          <p><strong>UNICOS</strong> devuelve los <strong>valores únicos</strong> de un rango, eliminando duplicados automáticamente. Es una de las funciones más útiles para limpiar datos.</p>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=UNICOS(matriz, [por_columna], [solo_una_vez])</code></pre>
          <ul>
            <li><strong>matriz</strong>: el rango del cual extraer únicos.</li>
            <li><strong>por_columna</strong>: <code>FALSO</code> (por fila) o <code>VERDADERO</code> (por columna).</li>
            <li><strong>solo_una_vez</strong>: <code>VERDADERO</code> = solo los que aparecen una vez. Por defecto: <code>FALSO</code>.</li>
          </ul>
          <h4>💡 Ejemplo básico</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Si A1:A10 = {A,B,A,C,B,D,A}:
=UNICOS(A1:A10)  → devuelve {A,B,C,D}</code></pre>
          <h4>💡 Lista de clientes únicos ordenada</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=ORDENAR(UNICOS(A2:A100))</code></pre>
          <p>Combinar UNICOS con ORDENAR da un resultado limpio y presentable.</p>
        `},
        { tag: 'Combinaciones', html: `
          <h3>🚀 Combinaciones poderosas</h3>
          <h4>💡 UNICOS + CONTAR.SI: lista con frecuencias</h4>
          <p>Para ver cuántas veces aparece cada producto único:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>// Columna 1: nombres únicos
=UNICOS(A2:A100)

// Columna 2: conteo (junto a cada nombre)
=CONTAR.SI(A2:A100, [celda_unico])</code></pre>
          <h4>💡 FILTRAR + UNICOS: reporte maestro</h4>
          <p>Obtén los clientes únicos de una región específica:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=UNICOS(FILTRAR(A2:A100, B2:B100="Guatemala"))</code></pre>
          <h4>💡 Top 5 clientes por monto total</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=TOMAR(ORDENARPOR(UNICOS(A2:A100), 
   SUMAR.SI.CONJUNTO(D2:D100, A2:A100, UNICOS(A2:A100)), -1), 5)</code></pre>
          <p>Esta fórmula devuelve los 5 clientes que más han comprado, ordenados de mayor a menor. ¡Solo con funciones modernas!</p>
        `},
        { tag: 'Casos prácticos', html: `
          <h3>💼 Casos prácticos contables</h3>
          <h4>📊 1. Reporte de morosidad</h4>
          <p>De una lista de clientes con sus deudas, obtener solo los que tienen más de 30 días vencidos:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(Clientes, (Saldo>0)*(DiasVencido>30), "Sin morosos")</code></pre>
          <h4>📊 2. Catálogo de productos únicos por categoría</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(UNICOS(Productos), Categoria="Electrónica")</code></pre>
          <h4>📊 3. Validación: detectar errores de captura</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=FILTRAR(Datos, NO(ESNUMERO(Cantidad)), "Sin errores")</code></pre>
          <p>Esta fórmula encuentra filas donde la columna "Cantidad" no es un número: ideal para encontrar errores de captura antes de cerrar el mes.</p>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p>Estas técnicas son la base de los <strong>dashboards modernos</strong> de Excel: limpian, filtran y resumen los datos en tiempo real.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'FILTRAR', hint: '¿Qué versión de Excel se requiere? ¿Cómo se manejan múltiples condiciones?' },
        { term: 'UNICOS', hint: 'Investiga: ¿qué hace el argumento "solo_una_vez" en UNICOS?' },
        { term: 'Matriz desbordada', hint: '¿Qué significa el error #¡DESBORDAMIENTO! y cómo se corrige?' },
        { term: 'Spill range', hint: 'Investiga: ¿qué es el "rango de desbordamiento" en inglés?' },
        { term: 'AND lógico en fórmulas', hint: '¿Cómo se representa el AND con el símbolo * y el OR con +?' },
        { term: 'ORDENAR', hint: 'Investiga: ¿esta función es nueva también? ¿Cuál es su sintaxis?' },
        { term: 'CONTAR.SI', hint: '¿Cómo se diferencia de CONTAR.SI.CONJUNTO?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: 'Para filtrar con condición Y (AND) usando FILTRAR, se usa el operador:', options: [
          { value: 'a', label: 'Y()' },
          { value: 'b', label: '*' },
          { value: 'c', label: '+' },
          { value: 'd', label: '&' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'tf', prompt: 'La función UNICOS modifica los datos originales eliminando los duplicados.', answer: 'false', explain: 'UNICOS solo devuelve los únicos, no modifica el rango original.' },
        { id: 'c4e3', n: 3, type: 'mc', prompt: 'Si FILTRAR no encuentra coincidencias y no especificamos el 3er argumento, devuelve:', options: [
          { value: 'a', label: '0' },
          { value: 'b', label: 'Texto vacío' },
          { value: 'c', label: '#¡CALC!' },
          { value: 'd', label: '#N/A' }
        ], answer: 'c' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'La función UNICOS por defecto devuelve los valores que aparecen al menos una vez; con el argumento ______ en VERDADERO solo muestra los que aparecen una sola vez.', answer: 'solo_una_vez' }
      ],
      tasks: [
        { id: 'c4t1', title: '🧹 Limpieza de base de datos', description: 'Crea una hoja con 30 registros de clientes donde haya duplicados intencionales. Usa UNICOS para obtener la lista limpia. Luego agrega 5 columnas (ciudad, saldo, días vencidos) y usa FILTRAR para obtener solo los morosos de "Guatemala".', evidence: 'Captura de la lista original, la lista única y el filtro.' },
        { id: 'c4t2', title: '📊 Dashboard básico de ventas', description: 'Con una tabla de 50 ventas, crea 3 reportes dinámicos: (1) ventas del último mes, (2) top 5 productos, (3) ventas por vendedor. Cada uno con FILTRAR u ORDENAR.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre FILTRAR y UNICOS.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Para filtrar registros que sean "Aprobado" O "Excelente", la fórmula es:', options: [
            { value: 'a', label: 'FILTRAR(A:D, C:C="Aprobado"*C:C="Excelente")' },
            { value: 'b', label: 'FILTRAR(A:D, (C:C="Aprobado")+(C:C="Excelente"))' },
            { value: 'c', label: 'FILTRAR(A:D, C:C="Aprobado"|C:C="Excelente")' },
            { value: 'd', label: 'FILTRAR(A:D, O(C:C="Aprobado",C:C="Excelente"))' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'UNICOS puede configurarse para mostrar solo los valores que aparecen una vez usando el argumento:', options: [
            { value: 'a', label: 'por_columna' },
            { value: 'b', label: 'solo_una_vez' },
            { value: 'c', label: 'única_vez' },
            { value: 'd', label: 'sin_repetir' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El error #¡DESBORDAMIENTO! aparece cuando hay datos en las celdas adyacentes a donde FILTRAR intenta expandirse.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Para ver las ventas de los top 10 productos, combinarías:', options: [
            { value: 'a', label: 'FILTRAR + UNICOS' },
            { value: 'b', label: 'FILTRAR + ORDENAR + TOMAR' },
            { value: 'c', label: 'UNICOS + BUSCARV' },
            { value: 'd', label: 'SUMA + PROMEDIO' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'FILTRAR devuelve una ______ de resultados que se desborda automáticamente en las celdas siguientes.', answer: 'matriz' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '🔗',
      title: 'INDIRECTO y LET · Referencias y optimización',
      tagline: 'Transforma texto en referencias y crea fórmulas eficientes.',
      info: [
        { tag: 'INDIRECTO', html: `
          <h3>🔗 Función INDIRECTO (INDIRECT)</h3>
          <p><strong>INDIRECTO</strong> convierte un <strong>texto</strong> en una <strong>referencia real</strong> de Excel. Es como magia: le das "A1" como texto y te devuelve el valor de A1. Pero su verdadero poder es crear <strong>referencias dinámicas</strong> a partir de cadenas.</p>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDIRECTO(ref_texto, [a1])</code></pre>
          <ul>
            <li><strong>ref_texto</strong>: la referencia escrita como texto (puede incluir concatenación).</li>
            <li><strong>a1</strong>: <code>VERDADERO</code> para estilo A1 (por defecto), <code>FALSO</code> para estilo F1C1.</li>
          </ul>
          <h4>💡 Ejemplos básicos</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDIRECTO("A1")        // = el valor de A1
=INDIRECTO("Hoja2!B5")   // = el valor de B5 de Hoja2
=INDIRECTO("A"&B1)       // Si B1=10, lee A10 (concatena "A" con 10)</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>INDIRECTO es volátil</strong>. En archivos grandes, puede hacer que Excel se ponga lento. Úsala solo cuando sea necesario.</p>
          </div>
        `},
        { tag: 'INDIRECTO menú', html: `
          <h3>📋 Crear menús desplegables dinámicos</h3>
          <p>El uso más popular de INDIRECTO: <strong>listas dependientes</strong> donde la segunda lista cambia según la selección de la primera.</p>
          <h4>💡 Ejemplo: País → Ciudad</h4>
          <ol>
            <li>En una hoja "Listas", crea rangos con nombre: <code>Guatemala</code>, <code>México</code>, <code>USA</code>, cada uno con sus ciudades.</li>
            <li>En una celda (A1) crea una <strong>lista desplegable</strong> con validación de datos usando los países.</li>
            <li>En otra celda (A2), crea otra lista con esta fórmula como origen:
              <pre style="background:var(--bg-1);padding:0.6rem;border-radius:var(--radius-sm);overflow-x:auto;margin:0.5rem 0"><code>=INDIRECTO($A$1)</code></pre>
            </li>
          </ol>
          <p>Cuando el usuario selecciona "Guatemala" en A1, automáticamente A2 muestra solo ciudades de Guatemala.</p>
          <h4>💡 Hojas con nombre dinámico</h4>
          <p>Si tienes 12 hojas llamadas "Enero", "Febrero"... y el usuario elige el mes en B1:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=INDIRECTO("'"&B1&"'!B5")</code></pre>
          <p>Devuelve el valor de B5 de la hoja cuyo nombre coincide con B1.</p>
        `},
        { tag: 'LET', html: `
          <h3>🆕 Función LET</h3>
          <p><strong>LET</strong> permite <strong>declarar variables dentro de una fórmula</strong>. Esto evita repetir cálculos, acelera el archivo y hace las fórmulas mucho más legibles.</p>
          <div class="slide-info">
            <span class="icon">🚀</span>
            <p>LET está disponible en <strong>Excel 2021 / Microsoft 365</strong> y es una de las adiciones más importantes de los últimos años.</p>
          </div>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(nombre1, valor1, [nombre2, valor2, ...,] cálculo)</code></pre>
          <p>Defines pares de <code>nombre, valor</code> y al final pones la expresión que los usa. Puedes definir hasta <strong>126 variables</strong>.</p>
          <h4>💡 Ejemplo simple</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>// Sin LET: repite C2*2 cinco veces
=(C2*2 + C3*2 + C4*2 + C5*2 + C6*2) / 5

// Con LET: lo calcula una sola vez
=LET(multiplicador, 2, (C2*multiplicador + C3*multiplicador + C4*multiplicador + C5*multiplicador + C6*multiplicador) / 5)</code></pre>
        `},
        { tag: 'LET avanzado', html: `
          <h3>🎯 LET con cálculos complejos</h3>
          <h4>💡 Calcular precio con IVA y descuento</h4>
          <p>Sin LET, una fórmula compleja sería ilegible. Con LET:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(
  precio, A2,
  descuento, B2,
  iva, 0.12,
  precioConDescuento, precio * (1 - descuento),
  precioFinal, precioConDescuento * (1 + iva),
  precioFinal
)</code></pre>
          <h4>💡 Beneficios de LET</h4>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">⚡</div><h5>Velocidad</h5><p>Si una subexpresión se repite, LET la calcula una sola vez.</p></div>
            <div class="grid-item"><div class="icon">📖</div><h5>Legibilidad</h5><p>Las fórmulas se entienden como párrafos explicativos.</p></div>
            <div class="grid-item"><div class="icon">🛠️</div><h5>Mantenimiento</h5><p>Si cambias una variable, solo modificas un lugar.</p></div>
            <div class="grid-item"><div class="icon">🧪</div><h5>Depuración</h5><p>Puedes aislar partes de la fórmula probando variables.</p></div>
          </div>
          <h4>💡 LET + FILTRAR: análisis eficiente</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(
  ventas, A2:D100,
  regiones, B2:B100,
  ventasGuatemala, FILTRAR(ventas, regiones="Guatemala"),
  total, SUMA(INDICE(ventasGuatemala,,4)),
  total
)</code></pre>
        `},
        { tag: 'INDIRECTO vs LET', html: `
          <h3>⚖️ INDIRECTO vs LET: ¿cuándo usar cada una?</h3>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(124,58,237,0.3)">
              <div class="icon">🔗</div>
              <h5>INDIRECTO</h5>
              <p><strong>Convierte texto en referencia</strong>. Úsala cuando necesites referencias dinámicas a celdas/hojas/archivos.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(6,182,212,0.3)">
              <div class="icon">🆕</div>
              <h5>LET</h5>
              <p><strong>Declara variables en la fórmula</strong>. Úsala cuando una subexpresión se repite o quieres hacer la fórmula más clara.</p>
            </div>
          </div>
          <h4>💡 Combinación poderosa: INDIRECTO dentro de LET</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(
  mes, B1,
  hoja, INDIRECTO("'"&mes&"'!A1:Z100"),
  totalVentas, SUMA(INDICE(hoja,,5)),
  totalVentas
)</code></pre>
          <p>Esta fórmula cambia automáticamente la hoja de la cual suma ventas, según el mes seleccionado en B1.</p>
        `},
        { tag: 'Casos', html: `
          <h3>💼 Casos prácticos contables</h3>
          <h4>📊 1. Consolidar datos de 12 hojas mensuales</h4>
          <p>Supón 12 hojas "Enero" a "Diciembre" con la misma estructura. Para sumar el total de Q1 (enero, febrero, marzo):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(
  meses, {"Enero","Febrero","Marzo"},
  totalQ1, SUMA(
    INDIRECTO("'"&INDICE(meses,1)&"'!H100"),
    INDIRECTO("'"&INDICE(meses,2)&"'!H100"),
    INDIRECTO("'"&INDICE(meses,3)&"'!H100")
  ),
  totalQ1
)</code></pre>
          <h4>📊 2. Reporte de comisiones eficiente</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LET(
  ventas, D2,
  meta, 50000,
  porcentajeBase, 0.02,
  bono, SI(ventas>meta, (ventas-meta)*0.05, 0),
  comision, ventas*porcentajeBase + bono,
  comision
)</code></pre>
          <h4>📊 3. Lista desplegable de hojas</h4>
          <p>Para que el usuario elija a qué mes consultar:</p>
          <ol>
            <li>Crea una lista con los 12 meses.</li>
            <li>Usa INDIRECTO para apuntar a la hoja correspondiente.</li>
            <li>Combina con BUSCARX para extraer varios datos.</li>
          </ol>
        `}
      ],
      keywords: [
        { term: 'INDIRECTO', hint: '¿Por qué se considera "volátil" y cómo afecta al rendimiento?' },
        { term: 'INDIRECT', hint: 'Investiga: ¿cuál es la versión en inglés y por qué su nombre es tan confuso?' },
        { term: 'Lista desplegable dependiente', hint: 'Investiga: ¿qué otros métodos existen además de INDIRECTO?' },
        { term: 'LET', hint: '¿Desde qué versión de Excel está disponible y qué problema resuelve?' },
        { term: 'Variable en fórmula', hint: '¿Cuántas variables se pueden definir dentro de un LET?' },
        { term: 'Concatenar referencias', hint: 'Investiga: ¿qué hace el símbolo & en Excel?' },
        { term: 'Validación de datos', hint: '¿Cómo se accede al menú "Validación de datos" en Excel 365?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: 'Si A1 contiene el texto "B5", ¿qué devuelve =INDIRECTO(A1)?', options: [
          { value: 'a', label: 'El texto "B5"' },
          { value: 'b', label: 'El valor de la celda B5' },
          { value: 'c', label: 'La referencia "B5" como texto' },
          { value: 'd', label: 'Error #¡REF!' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'tf', prompt: 'LET permite declarar variables dentro de una fórmula para evitar repetir cálculos.', answer: 'true' },
        { id: 'c5e3', n: 3, type: 'mc', prompt: 'Para concatenar el texto de la celda A1 con la palabra "Hoja", usas:', options: [
          { value: 'a', label: '=CONCAT(A1, "Hoja")' },
          { value: 'b', label: '=A1 + "Hoja"' },
          { value: 'c', label: '=A1 & "Hoja"' },
          { value: 'd', label: '=JUNTAR(A1, "Hoja")' }
        ], answer: 'c' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'INDIRECTO y LET están disponibles desde Excel _____.', answer: '2021' }
      ],
      tasks: [
        { id: 'c5t1', title: '📋 Menú país→ciudad→hoteles', description: 'Crea tres niveles de listas dependientes: (1) país, (2) ciudad según país, (3) hotel según ciudad. Usa INDIRECTO para los niveles 2 y 3. Mínimo 3 países, 9 ciudades, 15 hoteles.', evidence: 'Video mostrando la selección en cascada funcionando.' },
        { id: 'c5t2', title: '⚡ Refactor con LET', description: 'Toma una fórmula compleja que ya tengas (o crea una) que repita una subexpresión 3+ veces. Refactorízala usando LET. Mide el tiempo de recálculo antes y después.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre INDIRECTO y LET.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'INDIRECTO sirve principalmente para:', options: [
            { value: 'a', label: 'Sumar celdas' },
            { value: 'b', label: 'Convertir texto en referencia dinámica' },
            { value: 'c', label: 'Contar celdas vacías' },
            { value: 'd', label: 'Crear gráficos' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'LET fue introducido en:', options: [
            { value: 'a', label: 'Excel 2007' },
            { value: 'b', label: 'Excel 2016' },
            { value: 'c', label: 'Excel 2021' },
            { value: 'd', label: 'Excel 365 (no existe en versiones anteriores)' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'LET hace que las fórmulas sean más rápidas cuando se repite una subexpresión.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Para crear un menú desplegable dependiente se usa INDIRECTO combinado con:', options: [
            { value: 'a', label: 'Formatos condicionales' },
            { value: 'b', label: 'Validación de datos' },
            { value: 'c', label: 'Tablas dinámicas' },
            { value: 'd', label: 'Filtros automáticos' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'INDIRECTO es una función ______, se recalcula cada vez que cambia cualquier celda.', answer: 'volátil' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '⚡',
      title: 'IMPORTARDATOSDINAMICOS, LAMBDA + Examen final',
      tagline: 'Crea tus propias funciones y extrae datos de tablas dinámicas.',
      info: [
        { tag: 'Tablas dinámicas', html: `
          <h3>📊 Tablas dinámicas en Excel</h3>
          <p>Una <strong>tabla dinámica</strong> (Pivot Table) es una herramienta que <strong>resume, agrupa y analiza grandes cantidades de datos</strong> con arrastrar y soltar. Es una de las funciones más poderosas de Excel.</p>
          <h4>💡 Crear una tabla dinámica</h4>
          <ol>
            <li>Selecciona los datos (o cualquier celda de una Tabla).</li>
            <li>Ve a <strong>Insertar → Tabla dinámica</strong>.</li>
            <li>Elige dónde colocarla (nueva hoja o existente).</li>
            <li>Arrastra campos a las áreas: <strong>Filas, Columnas, Valores, Filtros</strong>.</li>
          </ol>
          <h4>🎯 Estructura de una tabla dinámica</h4>
          <ul>
            <li><strong>Filas</strong>: agrupa los datos por categorías (ej. vendedor, mes).</li>
            <li><strong>Columnas</strong>: subcategorías (ej. región, tipo de producto).</li>
            <li><strong>Valores</strong>: lo que se calcula (suma, promedio, conteo).</li>
            <li><strong>Filtros</strong>: filtros globales (ej. año).</li>
          </ul>
        `},
        { tag: 'IMPORTARDATOSDINAMICOS', html: `
          <h3>🔄 Función IMPORTARDATOSDINAMICOS (GETPIVOTDATA)</h3>
          <p>Esta función <strong>extrae datos de una tabla dinámica</strong> usando una fórmula. Lo poderoso: si la tabla cambia de tamaño o se reorganiza, la fórmula sigue funcionando correctamente.</p>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=IMPORTARDATOSDINAMICOS(campo_datos, tabla_dinámica, [campo1, item1], [campo2, item2], ...)</code></pre>
          <ul>
            <li><strong>campo_datos</strong>: el nombre del campo de valor a extraer (entre comillas).</li>
            <li><strong>tabla_dinámica</strong>: referencia a UNA celda dentro de la tabla dinámica.</li>
            <li><strong>campo1, item1, ...</strong>: pares que indican la intersección exacta.</li>
          </ul>
          <h4>💡 Ejemplo básico</h4>
          <p>Tabla dinámica en <code>$A$3</code> muestra ventas por vendedor y mes. Para obtener las ventas de "Ana" en "Marzo":</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=IMPORTARDATOSDINAMICOS("Ventas", $A$3, "Vendedor", "Ana", "Mes", "Marzo")</code></pre>
        `},
        { tag: 'IDD avanzado', html: `
          <h3>🎯 Casos prácticos de IMPORTARDATOSDINAMICOS</h3>
          <h4>💡 Reporte con múltiples valores</h4>
          <p>Para llenar un reporte que extrae varios valores de la tabla dinámica:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=IMPORTARDATOSDINAMICOS("Total", $A$3, "Producto", $A2, "Mes", B$1)</code></pre>
          <p>Arrastrando esta fórmula se llena automáticamente toda la matriz de reporte.</p>
          <h4>💡 Truco: que aparezca automáticamente</h4>
          <p>Para que la función se active automáticamente, escribe <code>=</code> y haz clic en la celda de la tabla dinámica. Excel la escribe por ti.</p>
          <h4>💡 Manejo de errores</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI.ERROR(
  IMPORTARDATOSDINAMICOS("Ventas", $A$3, "Vendedor", $B1),
  0
)</code></pre>
          <p>Si la combinación no existe, devuelve 0 en lugar de #¡REF!.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Si no quieres que Excel inserte automáticamente esta función al hacer clic, ve a <strong>Archivo → Opciones → Fórmulas → Quitar la marca de "Usar GetPivotData"</strong>.</p>
          </div>
        `},
        { tag: 'LAMBDA', html: `
          <h3>⚡ Función LAMBDA: inventa tus propias funciones</h3>
          <p><strong>LAMBDA</strong> permite crear <strong>funciones personalizadas reutilizables</strong> sin saber programar. Es el avance más importante de Excel en décadas.</p>
          <div class="slide-info">
            <span class="icon">🚀</span>
            <p>Disponible en <strong>Excel 2021 / Microsoft 365</strong>. Una vez que guardas una LAMBDA con nombre, aparece en la lista de funciones y puede ser llamada como cualquier otra.</p>
          </div>
          <h3>📝 Sintaxis</h3>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LAMBDA([parámetro1, parámetro2, ...], cálculo)</code></pre>
          <h4>💡 LAMBDA simple (uso único)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LAMBDA(x, x*2)(5)  → devuelve 10
// Define una función que multiplica por 2, y la aplica a 5</code></pre>
          <h4>💡 LAMBDA con múltiples parámetros</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LAMBDA(precio, iva, precio * (1 + iva))(100, 0.12)  → 112</code></pre>
        `},
        { tag: 'LAMBDA guardar', html: `
          <h3>💾 Guardar LAMBDA como función nombrada</h3>
          <p>Lo realmente poderoso es <strong>guardar la LAMBDA con un nombre</strong> y reutilizarla en todo el libro.</p>
          <h4>💡 Pasos para guardar</h4>
          <ol>
            <li>Ve a <strong>Fórmulas → Administrador de nombres</strong>.</li>
            <li>Clic en <strong>Nuevo</strong>.</li>
            <li>Nombre: <code>PRECIO_FINAL</code></li>
            <li>Se refiere a:
              <pre style="background:var(--bg-1);padding:0.6rem;border-radius:var(--radius-sm);overflow-x:auto;margin:0.5rem 0"><code>=LAMBDA(precio, iva, precio * (1 + iva))</code></pre>
            </li>
            <li>Aceptar.</li>
          </ol>
          <p>Ahora en cualquier celda puedes usar <code>=PRECIO_FINAL(100, 0.12)</code> y obtienes 112. ¡Como una función nativa!</p>
          <h4>💡 LAMBDA con LET (mejor práctica)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=LAMBDA(precio, descuento, iva,
  LET(
    conDesc, precio * (1 - descuento),
    conIva, conDesc * (1 + iva),
    conIva
  )
)</code></pre>
        `},
        { tag: 'Repaso', html: `
          <h3>🎓 Repaso general antes del examen final</h3>
          <p>Has dominado <strong>10 funciones modernas</strong> de Excel. Veamos el mapa completo:</p>
          <div class="slide-grid">
            <div class="grid-item"><div class="icon">🎯</div><h5>Clase 1</h5><p><strong>INDICE + COINCIDIR</strong>: búsquedas fundamentales. Reemplazan a BUSCARV.</p></div>
            <div class="grid-item"><div class="icon">🔎</div><h5>Clase 2</h5><p><strong>BUSCARX</strong>: la búsqueda moderna. 6 argumentos poderosos.</p></div>
            <div class="grid-item"><div class="icon">↔️</div><h5>Clase 3</h5><p><strong>DESREF</strong>: referencias dinámicas. Rangos con nombre que crecen.</p></div>
            <div class="grid-item"><div class="icon">🧹</div><h5>Clase 4</h5><p><strong>FILTRAR + UNICOS</strong>: limpieza y extracción de datos masiva.</p></div>
            <div class="grid-item"><div class="icon">🔗</div><h5>Clase 5</h5><p><strong>INDIRECTO + LET</strong>: referencias por texto y fórmulas optimizadas.</p></div>
            <div class="grid-item"><div class="icon">⚡</div><h5>Clase 6</h5><p><strong>IDD + LAMBDA</strong>: tablas dinámicas y funciones personalizadas.</p></div>
          </div>
          <div class="slide-success">
            <span class="icon">🌟</span>
            <p>El examen final trae <strong>15 preguntas</strong> cubriendo las 10 funciones. Demuestra todo lo aprendido y obtén tu certificado de <strong>Experto en Excel Avanzado</strong>.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Tabla dinámica', hint: 'Investiga: ¿cuál es la diferencia entre "Actualizar" y "Cambiar origen de datos"?' },
        { term: 'IMPORTARDATOSDINAMICOS', hint: '¿Cómo se desactiva la generación automática al hacer clic en celdas de la TD?' },
        { term: 'GETPIVOTDATA', hint: 'Investiga: ¿qué ocurre si la tabla cambia de posición y por qué la fórmula sigue funcionando?' },
        { term: 'LAMBDA', hint: '¿Cuántos parámetros puede aceptar como máximo una función LAMBDA?' },
        { term: 'Función personalizada', hint: 'Investiga: ¿qué diferencia hay entre LAMBDA y las macros VBA para crear funciones?' },
        { term: 'Administrador de nombres', hint: '¿Cómo se accede y para qué sirve este menú?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: 'IMPORTARDATOSDINAMICOS extrae datos de:', options: [
          { value: 'a', label: 'Una hoja normal' },
          { value: 'b', label: 'Una tabla dinámica' },
          { value: 'c', label: 'Un archivo de texto' },
          { value: 'd', label: 'Una imagen' }
        ], answer: 'b' },
        { id: 'c6e2', n: 2, type: 'tf', prompt: 'LAMBDA permite crear funciones personalizadas sin saber programar en VBA.', answer: 'true' },
        { id: 'c6e3', n: 3, type: 'mc', prompt: 'Para guardar una LAMBDA con nombre se usa:', options: [
          { value: 'a', label: 'Guardar como' },
          { value: 'b', label: 'Fórmulas → Administrador de nombres' },
          { value: 'c', label: 'Insertar función' },
          { value: 'd', label: 'Power Query' }
        ], answer: 'b' },
        { id: 'c6e4', n: 4, type: 'mc', prompt: 'LAMBDA fue introducido oficialmente en:', options: [
          { value: 'a', label: 'Excel 2010' },
          { value: 'b', label: 'Excel 2016' },
          { value: 'c', label: 'Excel 2021' },
          { value: 'd', label: 'Excel 2007' }
        ], answer: 'c' },
        { id: 'c6e5', n: 5, type: 'fill', prompt: 'LAMBDA funciona mejor cuando se combina con la función ______, porque permite definir variables internas.', answer: 'LET' }
      ],
      tasks: [
        { id: 'c6t1', title: '🏗️ Proyecto final: Dashboard completo', description: 'Crea un libro con: (1) hoja de datos crudos con 50+ registros, (2) tabla dinámica que resuma ventas, (3) reporte que use IMPORTARDATOSDINAMICOS para alimentar 5 KPIs, (4) una LAMBDA personalizada llamada "CLASIFICAR" que clasifique ventas en "Baja/Media/Alta" según monto, (5) al menos un FILTRAR y un UNICOS en el reporte.', evidence: 'Libro de Excel completo + capturas de las 4 funciones modernas en acción.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Responde las 5 preguntas sobre IDD y LAMBDA.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué hace IMPORTARDATOSDINAMICOS?', options: [
            { value: 'a', label: 'Crea tablas dinámicas' },
            { value: 'b', label: 'Extrae datos de una tabla dinámica usando fórmulas' },
            { value: 'c', label: 'Importa datos de un archivo CSV' },
            { value: 'd', label: 'Convierte una tabla en gráfico' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'LAMBDA es una función que:', options: [
            { value: 'a', label: 'Solo funciona con VBA' },
            { value: 'b', label: 'Permite crear funciones personalizadas sin programar' },
            { value: 'c', label: 'Cuenta celdas con números' },
            { value: 'd', label: 'Borra duplicados' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Las funciones LAMBDA se pueden guardar con nombre y usar como cualquier función nativa.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'La ventaja principal de IMPORTARDATOSDINAMICOS sobre referencias directas es:', options: [
            { value: 'a', label: 'Es más rápida' },
            { value: 'b', label: 'Funciona aunque la tabla cambie de tamaño o se reorganice' },
            { value: 'c', label: 'No tiene errores' },
            { value: 'd', label: 'No requiere sintaxis' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Para guardar una LAMBDA con nombre, se usa Fórmulas → Administrador de _______.', answer: 'nombres' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Experto en Excel Avanzado',
        description: '15 preguntas cubriendo las 10 funciones del grado. Necesitas 60% para obtener el certificado.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema INDICE · =INDICE(A1:C10, 5, 2) devuelve:', options: [{ value: 'a', label: 'B5' }, { value: 'b', label: 'C5' }, { value: 'c', label: 'A5' }, { value: 'd', label: 'Error' }], answer: 'a' },
          { id: 'f2', type: 'mc', prompt: 'Tema COINCIDIR · Para búsqueda exacta, el 3er argumento es:', options: [{ value: 'a', label: '1' }, { value: 'b', label: '0' }, { value: 'c', label: '-1' }, { value: 'd', label: 'VERDADERO' }], answer: 'b' },
          { id: 'f3', type: 'mc', prompt: 'Tema BUSCARX · La sintaxis mínima tiene:', options: [{ value: 'a', label: '1 argumento' }, { value: 'b', label: '2 argumentos' }, { value: 'c', label: '3 argumentos' }, { value: 'd', label: '6 argumentos' }], answer: 'c' },
          { id: 'f4', type: 'tf', prompt: 'Tema BUSCARX · Puede buscar a la izquierda, a diferencia de BUSCARV.', answer: 'true' },
          { id: 'f5', type: 'mc', prompt: 'Tema DESREF · =DESREF(A1, 2, 1, 3, 2) devuelve un rango de:', options: [{ value: 'a', label: '2x3' }, { value: 'b', label: '3x2' }, { value: 'c', label: '1x1' }, { value: 'd', label: '5x3' }], answer: 'b' },
          { id: 'f6', type: 'tf', prompt: 'Tema DESREF · Es una función volátil que se recalcula frecuentemente.', answer: 'true' },
          { id: 'f7', type: 'mc', prompt: 'Tema FILTRAR · Para AND entre dos condiciones se usa:', options: [{ value: 'a', label: '+' }, { value: 'b', label: '*' }, { value: 'c', label: 'Y()' }, { value: 'd', label: 'O()' }], answer: 'b' },
          { id: 'f8', type: 'mc', prompt: 'Tema UNICOS · El argumento "solo_una_vez" muestra:', options: [{ value: 'a', label: 'Los valores duplicados' }, { value: 'b', label: 'Los valores que aparecen solo una vez' }, { value: 'c', label: 'Los valores ordenados' }, { value: 'd', label: 'Los valores de la última columna' }], answer: 'b' },
          { id: 'f9', type: 'mc', prompt: 'Tema INDIRECTO · Si A1="B5", =INDIRECTO(A1) devuelve:', options: [{ value: 'a', label: 'El texto "B5"' }, { value: 'b', label: 'El valor de B5' }, { value: 'c', label: 'La celda A1' }, { value: 'd', label: 'Error' }], answer: 'b' },
          { id: 'f10', type: 'mc', prompt: 'Tema LET · Permite:', options: [{ value: 'a', label: 'Convertir texto en referencia' }, { value: 'b', label: 'Declarar variables en una fórmula' }, { value: 'c', label: 'Contar celdas' }, { value: 'd', label: 'Crear tablas' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema IDD · Para desactivar la generación automática al hacer clic en una TD, vas a:', options: [{ value: 'a', label: 'Archivo → Opciones' }, { value: 'b', label: 'Insertar → Tabla' }, { value: 'c', label: 'Datos → Validación' }, { value: 'd', label: 'Revisar → Ortografía' }], answer: 'a' },
          { id: 'f12', type: 'tf', prompt: 'Tema IDD · La fórmula sigue funcionando si la tabla dinámica cambia de tamaño.', answer: 'true' },
          { id: 'f13', type: 'mc', prompt: 'Tema LAMBDA · Se guarda con nombre usando:', options: [{ value: 'a', label: 'Archivo → Guardar como' }, { value: 'b', label: 'Fórmulas → Administrador de nombres' }, { value: 'c', label: 'Insertar → Función' }, { value: 'd', label: 'Power Query' }], answer: 'b' },
          { id: 'f14', type: 'mc', prompt: 'Tema LAMBDA · =LAMBDA(x, x*2)(5) devuelve:', options: [{ value: 'a', label: '5' }, { value: 'b', label: '10' }, { value: 'c', label: '25' }, { value: 'd', label: '2' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · La versión mínima de Excel que soporta BUSCARX, LET, LAMBDA y matrices dinámicas es _____.', answer: '2021' }
        ]
      }
    }
  ]
};
