const COURSE_DATA = {
  grade: 'cuarto_perito',
  title: 'Computación · Cuarto Perito Contador',
  subtitle: 'Excel: funciones lógicas, ordenar, filtrar, gráficos y validación',
  classes: [
    {
      id: 'c1', num: 1, icon: '📊',
      title: 'Introducción a Excel y funciones básicas',
      tagline: 'Conoce la interfaz de Excel, las celdas, los rangos y las primeras funciones.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>📊 ¡Bienvenido a Computación, Cuarto Perito!</h3>
          <p>Este año vamos a dominar <strong>Microsoft Excel</strong> a nivel avanzado. Trabajaremos funciones lógicas, ordenamiento, filtros, gráficos y validación de datos.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Fórmulas</h5>
              <p>Funciones SI, Y, O y combinaciones lógicas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Ordenar y Filtrar</h5>
              <p>Organizar datos y encontrar información rápida.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📈</div>
              <h5>Gráficos</h5>
              <p>Columnas, circulares y personalización.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases serás capaz de usar Excel como una herramienta profesional de análisis de datos.</p>
          </div>
        `},
        { tag: 'Interfaz de Excel', html: `
          <h3>🖥️ Conoce la interfaz de Excel</h3>
          <p>Excel es un programa de <strong>hojas de cálculo</strong> organizado en filas y columnas. Cada intersección se llama <strong>celda</strong>.</p>
          <h4>🔑 Partes principales</h4>
          <ul>
            <li><strong>Columnas:</strong> letras A, B, C ... XFD (16,384 columnas).</li>
            <li><strong>Filas:</strong> números 1, 2, 3 ... 1,048,576 filas.</li>
            <li><strong>Celda activa:</strong> la que está seleccionada, identificada por su referencia (ej. A1).</li>
            <li><strong>Barra de fórmulas:</strong> donde se escriben y editan las fórmulas.</li>
            <li><strong>Cuadro de nombres:</strong> muestra la referencia de la celda activa.</li>
            <li><strong>Hoja activa:</strong> las pestañas abajo (Hoja1, Hoja2, etc.).</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Presiona <kbd>Ctrl + Inicio</kbd> (Windows) o <kbd>Fn + Control + ←</kbd> (Mac) para ir rápidamente a la celda A1.</p>
          </div>
        `},
        { tag: 'Celdas y rangos', html: `
          <h3>🔲 Celdas, rangos y referencias</h3>
          <p>Una <strong>celda</strong> se identifica por la letra de la columna y el número de la fila: <code>A1</code>, <code>B5</code>, <code>F10</code>.</p>
          <p>Un <strong>rango</strong> es un grupo de celdas. Se escribe con dos puntos entre la primera y la última celda:</p>
          <ul>
            <li><code>A1:A10</code> → celdas de la fila 1 a la 10 en la columna A.</li>
            <li><code>B2:D8</code> → un bloque rectangular de 3 columnas × 7 filas.</li>
            <li><code>A1:E1</code> → un rango horizontal en la fila 1.</li>
          </ul>
          <h4>📝 Cómo escribir una fórmula</h4>
          <p>Toda fórmula en Excel empieza con el signo <strong>=</strong></p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=A1+B1          → Suma los valores de A1 y B1
=A1*B1-C1       → Multiplica A1 por B1 y resta C1
=(A1+B1)*C1     → Suma A1 y B1, luego multiplica por C1</code></pre>
        `},
        { tag: 'Referencias absolutas y relativas', html: `
          <h3>📍 Referencias relativas, absolutas y mixtas</h3>
          <p>Cuando copias una fórmula a otra celda, las referencias cambian. Entender esto es clave:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔀</div>
              <h5>Referencia relativa</h5>
              <p><code>=A1+B1</code> → Al copiarla a la derecha se convierte en <code>=B1+C1</code>. Se ajusta automáticamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔒</div>
              <h5>Referencia absoluta</h5>
              <p><code>=$A$1+$B$1</code> → El símbolo <strong>$</strong> fija la columna y la fila. No cambia al copiar.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔓</div>
              <h5>Referencia mixta</h5>
              <p><code>=$A1</code> (columna fija) o <code>=A$1</code> (fila fija). Solo una parte se ajusta.</p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error común:</strong> olvidar fijar con $ las celdas que no deben cambiar al copiar una fórmula. Presiona <kbd>F4</kbd> para alternar entre tipos de referencia.</p>
          </div>
        `},
        { tag: 'Funciones básicas', html: `
          <h3>🔢 Primeras funciones de Excel</h3>
          <p>Excel tiene funciones predefinidas. Las más usadas son:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">➕</div>
              <h5>SUMA</h5>
              <p><code>=SUMA(A1:A10)</code><br>Suma todos los valores del rango.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>PROMEDIO</h5>
              <p><code>=PROMEDIO(B1:B10)</code><br>Calcula el promedio aritmético.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>CONTAR</h5>
              <p><code>=CONTAR(C1:C10)</code><br>Cuenta cuántas celdas tienen números.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📈</div>
              <h5>MAX / MIN</h5>
              <p><code>=MAX(D1:D10)</code><br><code>=MIN(D1:D10)</code><br>Valor máximo y mínimo del rango.</p>
            </div>
          </div>
          <h4>💡 Ejemplo práctico</h4>
          <p>Si tienes las notas de 10 estudiantes en A1:A10:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SUMA(A1:A10)      → Suma total de notas
=PROMEDIO(A1:A10)   → Promedio del curso
=MAX(A1:A10)        → Nota más alta
=MIN(A1:A10)        → Nota más baja</code></pre>
        `},
        { tag: 'Ejercicio guiado', html: `
          <h3>✏️ Ejercicio: Registro de ventas</h3>
          <p>Crea una tabla con este ejemplo y practica:</p>
          <h4>📋 Tabla de ventas semanales</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B           C
1   Producto    Cantidad    Precio
2   Lapiceros   50          2.50
3   Cuadernos   30          5.00
4   Borradores  20          1.50
5   Reglas      15          3.00</code></pre>
          <h4>🎯 Calcula con fórmulas</h4>
          <ul>
            <li>Total por producto: en D2 escribe <code>=B2*C2</code> y arrastra hacia abajo.</li>
            <li>Suma total de ventas: <code>=SUMA(D2:D5)</code>.</li>
            <li>Producto más vendido: <code>=MAX(B2:B5)</code>.</li>
            <li>Promedio de precios: <code>=PROMEDIO(C2:C5)</code>.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Recuerda:</strong> usa el cuadro de autollenado (el cuadrito en la esquina inferior derecha de la celda) para copiar fórmulas rápidamente.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Celda', hint: '¿Cuál es la referencia de la celda que está en la columna D y fila 10?' },
        { term: 'Rango', hint: '¿Cómo se escribe un rango que va de A1 a H20?' },
        { term: 'Referencia absoluta', hint: '¿Qué símbolo se usa para fijar una celda y qué tecla lo inserta?' },
        { term: 'Referencia relativa', hint: '¿Qué pasa con las referencias relativas cuando copias una fórmula a otra celda?' },
        { term: 'SUMA', hint: '¿Cuál es la sintaxis de la función SUMA para sumar A1 hasta A20?' },
        { term: 'PROMEDIO', hint: 'Diferencia entre SUMA y PROMEDIO. ¿Cuándo usarías cada una?' },
        { term: 'Barra de fórmulas', hint: '¿Dónde se escribe una fórmula en Excel y qué signo debe tener al inicio?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Cómo se identifica la celda que está en la columna B y fila 3?', options: [
          { value: 'a', label: '3B' },
          { value: 'b', label: 'B3' },
          { value: 'c', label: 'B:3' },
          { value: 'd', label: '3-B' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '¿Cuál de estas es una referencia ABSOLUTA?', options: [
          { value: 'a', label: '=A1+B1' },
          { value: 'b', label: '=$A$1+$B$1' },
          { value: 'c', label: '=A$1+B1' },
          { value: 'd', label: '=A1+$B1' }
        ], answer: 'b' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'Toda fórmula en Excel debe comenzar con el signo = (igual).', answer: 'true' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'El rango que incluye desde la celda A1 hasta la celda A20 se escribe _______.', answer: 'A1:A20' }
      ],
      tasks: [
        { id: 'c1t1', title: '📊 Crea tu primera hoja de cálculo', description: 'Crea un archivo llamado "Ventas_Semanales.xlsx". Diseña una tabla con: 5 productos, cantidades vendidas y precios unitarios. Calcula el total por producto (cantidad*precio), el total general (SUMA), el promedio de precios (PROMEDIO) y el producto más vendido (MAX).', evidence: 'Captura de pantalla de tu hoja con fórmulas visibles.' },
        { id: 'c1t2', title: '🔍 Investiga referencias', description: 'Crea una tabla de 3×3 (A1:C3) con números. En D1 escribe =A1*2 y copia D1 hacia D2 y D3. Observa cómo cambia la referencia. Luego repite con =$A$1*2 y =A$1*2. Explica la diferencia en un documento de texto.', evidence: 'Archivo Excel + documento con explicación.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre introducción a Excel.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Las columnas en Excel se identifican con:', options: [
            { value: 'a', label: 'Números' },
            { value: 'b', label: 'Letras' },
            { value: 'c', label: 'Símbolos' },
            { value: 'd', label: 'Colores' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué función calcula el promedio de un rango?', options: [
            { value: 'a', label: '=SUMA()' },
            { value: 'b', label: '=PROMEDIO()' },
            { value: 'c', label: '=MAX()' },
            { value: 'd', label: '=CONTAR()' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La referencia $A$1 es absoluta y no cambia al copiar la fórmula.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El rango A1:B3 incluye:', options: [
            { value: 'a', label: '2 celdas' },
            { value: 'b', label: '6 celdas' },
            { value: 'c', label: '3 celdas' },
            { value: 'd', label: '9 celdas' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La tecla que alterna entre referencias relativas, absolutas y mixtas es _______.', answer: 'F4' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🔢',
      title: 'Función lógica SI (IF)',
      tagline: 'Aprende la función más importante de Excel: la función condicional SI.',
      info: [
        { tag: '¿Qué es una función lógica?', html: `
          <h3>🧠 ¿Qué son las funciones lógicas?</h3>
          <p>Las funciones lógicas evalúan una condición y devuelven un resultado según si se cumple o no. Son la base de la <strong>toma de decisiones automatizada</strong> en Excel.</p>
          <h4>🔑 Operadores de comparación</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>=</h5>
              <p>Igual a.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>&gt;</h5>
              <p>Mayor que.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>&lt;</h5>
              <p>Menor que.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>&gt;=</h5>
              <p>Mayor o igual que.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>&lt;=</h5>
              <p>Menor o igual que.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>&lt;&gt;</h5>
              <p>Distinto de.</p>
            </div>
          </div>
        `},
        { tag: 'Sintaxis de SI', html: `
          <h3>📐 Sintaxis de la función SI</h3>
          <p>La función <strong>SI</strong> (IF en inglés) tiene 3 partes:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(prueba_lógica, valor_si_verdadero, valor_si_falso)</code></pre>
          <div class="slide-grid">
            <div class="grid-item" style="grid-column:span 3">
              <div class="icon">1️⃣</div>
              <h5>Prueba lógica</h5>
              <p>Una condición que puede ser VERDADERO o FALSO. Ej: <code>A1>=60</code>.</p>
            </div>
            <div class="grid-item" style="grid-column:span 3">
              <div class="icon">2️⃣</div>
              <h5>Valor si verdadero</h5>
              <p>Lo que se muestra si la condición se cumple. Ej: <code>"Aprobado"</code>.</p>
            </div>
            <div class="grid-item" style="grid-column:span 3">
              <div class="icon">3️⃣</div>
              <h5>Valor si falso</h5>
              <p>Lo que se muestra si la condición NO se cumple. Ej: <code>"Reprobado"</code>.</p>
            </div>
          </div>
          <h4>💡 Ejemplo básico</h4>
          <p>Si la nota está en A1:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1>=60,"Aprobado","Reprobado")</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>Los textos en las fórmulas van <strong>entre comillas dobles</strong>. Los números NO llevan comillas.</p>
          </div>
        `},
        { tag: 'Ejemplos prácticos', html: `
          <h3>📋 Ejemplos prácticos de SI</h3>
          <h4>🎯 Ejemplo 1: Evaluar notas</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1>=80,"Excelente",SI(A1>=60,"Bueno","Necesita mejorar"))</code></pre>
          <h4>💰 Ejemplo 2: Calcular descuento</h4>
          <p>Si compras más de Q100, tienes 10% de descuento:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1>100,A1*0.9,A1)</code></pre>
          <h4>✅ Ejemplo 3: Estado de inventario</h4>
          <p>Si el stock es menor a 10, mostrar "Pedir urgente":</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(B2<10,"Pedir urgente","Suficiente")</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Puedes anidar varios SI para crear múltiples condiciones. Pero cuidado: más de 3 niveles puede ser confuso.</p>
          </div>
        `},
        { tag: 'SI anidados', html: `
          <h3>🪆 SI anidados: múltiples condiciones</h3>
          <p>Un <strong>SI anidado</strong> es un SI dentro de otro SI. Se usa cuando hay más de dos posibles resultados.</p>
          <h4>📊 Ejemplo: Calificación con letras</h4>
          <p>Nota en A1, resultado en B1:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1>=90,"A",SI(A1>=80,"B",SI(A1>=70,"C",SI(A1>=60,"D","F"))))</code></pre>
          <p>¿Cómo funciona? Excel revisa de izquierda a derecha:</p>
          <ol>
            <li>Si A1 >= 90 → "A". Si no...</li>
            <li>Si A1 >= 80 → "B". Si no...</li>
            <li>Si A1 >= 70 → "C". Si no...</li>
            <li>Si A1 >= 60 → "D". Si no → "F".</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Límite:</strong> Excel permite hasta 64 SI anidados, pero más de 3-4 se vuelve difícil de leer. En esos casos, usa la función <strong>SI.CONJUNTO</strong> (IFS).</p>
          </div>
        `},
        { tag: 'SI con texto y fechas', html: `
          <h3>📅 SI con texto y fechas</h3>
          <h4>🔤 SI con texto</h4>
          <p>Puedes comparar si una celda contiene un texto específico:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1="Guatemala","Nacional","Extranjero")</code></pre>
          <h4>📅 SI con fechas</h4>
          <p>Las fechas en Excel son números. Puedes compararlas:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(A1>HOY(),"Fecha futura","Fecha pasada")</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Función HOY():</strong> devuelve la fecha actual del sistema. Se actualiza cada vez que abres el archivo.</p>
          </div>
          <h4>⚡ Error común</h4>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Al comparar texto, asegúrate de escribir exactamente igual, incluyendo mayúsculas/minúsculas y espacios. <code>"Guatemala"</code> no es igual a <code>"guatemala "</code>.</p>
          </div>
        `},
        { tag: 'Ejercicio práctico', html: `
          <h3>✏️ Vamos a practicar con SI</h3>
          <h4>📋 Tabla de empleados</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B           C
1   Nombre      Horas       Sueldo/hora
2   Ana López   45          15.00
3   Carlos Ruiz 38          12.50
4   María Pérez 50          18.00
5   Juan Díaz   30          14.00</code></pre>
          <h4>🎯 Calcula usando SI</h4>
          <ul>
            <li>En D2: sueldo total = <code>=B2*C2</code>.</li>
            <li>En E2: bonificación si trabajó más de 40 horas: <code>=SI(B2>40,D2*0.1,0)</code>.</li>
            <li>En F2: total a pagar = <code>=D2+E2</code>.</li>
            <li>En G2: categoría = <code>=SI(B2>=45,"Tiempo completo",SI(B2>=20,"Medio tiempo","Por horas"))</code>.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Desafío:</strong> ¿Puedes modificar la fórmula para que la bonificación sea del 15% si trabajó más de 48 horas?</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Función SI', hint: '¿Cuáles son los 3 argumentos de la función SI?' },
        { term: 'Prueba lógica', hint: '¿Qué tipo de resultado debe devolver la prueba lógica de un SI?' },
        { term: 'Operador de comparación', hint: 'Escribe 4 operadores de comparación y su significado.' },
        { term: 'SI anidado', hint: '¿Qué es un SI anidado y cuándo se usa?' },
        { term: '=SI(A1>10,"Mayor","Menor")', hint: '¿Qué mostraría esta fórmula si A1 vale 15?' },
        { term: 'Comillas en fórmulas', hint: '¿Los números en las fórmulas llevan comillas? ¿Y los textos?' },
        { term: 'HOY()', hint: '¿Qué función devuelve la fecha actual y cómo se combina con SI?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Cuál es la sintaxis correcta de la función SI?', options: [
          { value: 'a', label: '=SI(valor_si_verdadero, prueba, valor_si_falso)' },
          { value: 'b', label: '=SI(prueba_lógica, valor_si_verdadero, valor_si_falso)' },
          { value: 'c', label: '=SI(prueba_lógica, valor_si_falso, valor_si_verdadero)' },
          { value: 'd', label: '=SI(valor_si_falso, prueba, valor_si_verdadero)' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: '¿Qué operador significa "distinto de"?', options: [
          { value: 'a', label: '!=' },
          { value: 'b', label: '<>' },
          { value: 'c', label: '=<' },
          { value: 'd', label: '><' }
        ], answer: 'b' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'La función SI puede tener un número ilimitado de anidaciones en Excel.', answer: 'false' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'Si A1=75, la fórmula =SI(A1>=60,"Gana","Pierde") devuelve _______.', answer: 'Gana' }
      ],
      tasks: [
        { id: 'c2t1', title: '📊 Sistema de notas con SI', description: 'Crea un archivo "Notas_Estudiantes.xlsx" con: 10 nombres de estudiantes, notas en la columna B (0-100). En la columna C usa SI para mostrar "Aprobado" (>=60) o "Reprobado". En D: "Excelente" (>=90), "Bueno" (>=80), "Regular" (>=70), "Malo" (>=60) o "Deficiente". En E: usa SI para dar una bonificación de 5 puntos si la calificación es >= 80.', evidence: 'Captura del archivo con fórmulas visibles.' },
        { id: 'c2t2', title: '💰 Cálculo de descuentos', description: 'Crea una tabla de 8 productos con precios originales. Aplica: si el precio > 100, descuento del 15%, de lo contrario descuento del 5%. Muestra el precio final después del descuento. Investiga la función SI.CONJUNTO y escribe un breve resumen de cómo funciona.', evidence: 'Archivo Excel + resumen de SI.CONJUNTO.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre la función SI.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La función SI evalúa una condición y devuelve:', options: [
            { value: 'a', label: 'Un número aleatorio' },
            { value: 'b', label: 'Un valor si es verdadero y otro si es falso' },
            { value: 'c', label: 'Solo verdadero o falso' },
            { value: 'd', label: 'Un gráfico' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué mostrará =SI(5>10,"Sí","No")?', options: [
            { value: 'a', label: 'Sí' },
            { value: 'b', label: 'No' },
            { value: 'c', label: 'VERDADERO' },
            { value: 'd', label: 'FALSO' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'En Excel, los textos dentro de una función SI deben ir entre comillas dobles.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Qué tecla presionas para fijar una celda como referencia absoluta?', options: [
            { value: 'a', label: 'F2' },
            { value: 'b', label: 'F4' },
            { value: 'c', label: 'F5' },
            { value: 'd', label: 'F9' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La función que devuelve la fecha actual del sistema se llama _______.', answer: 'HOY' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '🧩',
      title: 'Funciones Y, O y combinación con SI',
      tagline: 'Combina múltiples condiciones con las funciones Y, O y SI.',
      info: [
        { tag: 'Función Y (AND)', html: `
          <h3>🔗 Función Y (AND)</h3>
          <p>La función <strong>Y</strong> devuelve <strong>VERDADERO</strong> solo si <strong>todas</strong> las condiciones se cumplen. Si al menos una es falsa, devuelve <strong>FALSO</strong>.</p>
          <h4>📐 Sintaxis</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=Y(condición1, condición2, condición3, ...)</code></pre>
          <h4>💡 Ejemplos</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Dos condiciones</h5>
              <p><code>=Y(A1>10, B1<20)</code><br>VERDADERO solo si A1>10 Y B1<20.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Tres condiciones</h5>
              <p><code>=Y(A1>=60, B1="Aprobado", C1>0)</code><br>Verdadero solo si todo se cumple.</p>
            </div>
          </div>
          <h4>📋 Tabla de verdad de Y</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Cond1   Cond2   Resultado
V       V       V
V       F       F
F       V       F
F       F       F</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Regla mnemotécnica:</strong> Y es exigente. TODAS deben ser verdaderas para que el resultado sea verdadero.</p>
          </div>
        `},
        { tag: 'Función O (OR)', html: `
          <h3>🔀 Función O (OR)</h3>
          <p>La función <strong>O</strong> devuelve <strong>VERDADERO</strong> si al menos <strong>una</strong> de las condiciones se cumple. Solo devuelve FALSO cuando todas son falsas.</p>
          <h4>📐 Sintaxis</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=O(condición1, condición2, condición3, ...)</code></pre>
          <h4>💡 Ejemplos</h4>
          <ul>
            <li><code>=O(A1>10, B1<20)</code> → VERDADERO si A1>10 O si B1<20 O ambas.</li>
            <li><code>=O(A1="Guatemala", A1="El Salvador", A1="Honduras")</code> → VERDADERO si es cualquiera de esos países.</li>
          </ul>
          <h4>📋 Tabla de verdad de O</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Cond1   Cond2   Resultado
V       V       V
V       F       V
F       V       V
F       F       F</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Regla mnemotécnica:</strong> O es flexible. Con que UNA sea verdadera, todo es verdadero.</p>
          </div>
        `},
        { tag: 'Combinar Y + SI', html: `
          <h3>🧩 Combinar Y con SI</h3>
          <p>La verdadera potencia está en combinar Y y O dentro de un SI. Así puedes evaluar condiciones múltiples.</p>
          <h4>🎯 Ejemplo 1: Becas por rendimiento</h4>
          <p>Un estudiante recibe beca si tiene promedio >= 80 Y asistencia >= 90%:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(Y(A1>=80,B1>=90),"Beca otorgada","No cumple requisitos")</code></pre>
          <h4>📊 Ejemplo 2: Préstamo bancario</h4>
          <p>Se aprueba un préstamo si ingresos > 5000 Y antigüedad >= 2 años:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(Y(A2>5000,B2>=2),"Préstamo aprobado","Préstamo denegado")</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Cuando tienes múltiples condiciones que todas deben cumplirse, ponlas dentro de Y() y el resultado en el primer argumento del SI.</p>
          </div>
        `},
        { tag: 'Combinar O + SI', html: `
          <h3>🧩 Combinar O con SI</h3>
          <p>La función O dentro de SI permite aprobar si se cumple <strong>cualquier</strong> condición.</p>
          <h4>🎯 Ejemplo 1: Promoción de productos</h2>
          <p>Descuento especial si el cliente compró el producto A O el producto B:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(O(A1="Producto A",A1="Producto B"),"Descuento 15%","Precio normal")</code></pre>
          <h4>📋 Ejemplo 2: Exención de examen</h4>
          <p>Un estudiante eximido si nota >= 90 O asistencia perfecta (100%):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(O(A2>=90,B2=100),"Eximido","Debe hacer examen")</code></pre>
          <h4>💡 Ejemplo 3: Combinando Y y O</h4>
          <p>Puedes mezclar Y y O en la misma fórmula. Por ejemplo, bono si (ventas > 10000 Y antigüedad >= 3 años) O (es gerente):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(O(Y(A1>10000,B1>=3),C1="Gerente"),"Bono aprobado","Sin bono")</code></pre>
        `},
        { tag: 'Más ejemplos combinados', html: `
          <h3>📋 Ejemplos avanzados con Y, O y SI</h3>
          <h4>🎓 Sistema de admisión</h4>
          <p>Un estudiante es admitido si: (nota >= 70 Y promedio >= 75) O (es deportista destacado = "Sí"):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(O(Y(A1>=70,B1>=75),C1="Sí"),"Admitido","No admitido")</code></pre>
          <h4>🚚 Logística de envíos</h4>
          <p>Envío gratuito si: (peso <= 5 Y destino = "Local") O (total compra > 500):</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=SI(O(Y(A1<=5,B1="Local"),C1>500),"Envío gratis","Costo normal")</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error común:</strong> Olvidar cerrar todos los paréntesis. Cada función Y y O necesita su propio par de paréntesis. Cuenta los que abres y los que cierras.</p>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Regla de oro:</strong> Escribe la fórmula paso a paso. Primero la condición dentro de Y/O, luego pruébala sola, y después intégrala al SI.</p>
          </div>
        `},
        { tag: 'Ejercicio práctico', html: `
          <h3>✏️ Practica combinando Y, O y SI</h3>
          <h4>📋 Tabla de empleados</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B       C           D
1   Nombre      Ventas  Asistencia  Puesto
2   Ana López   12000   98          Vendedor
3   Carlos Ruiz 8000    85          Vendedor
4   María Pérez 15000   100         Gerente
5   Juan Díaz   5000    92          Vendedor</code></pre>
          <h4>🎯 Calcula con Y, O y SI</h4>
          <ul>
            <li>En E2: bono si (ventas > 10000 Y asistencia >= 90): <code>=SI(Y(B2>10000,C2>=90),"Bono Q1000","Sin bono")</code>.</li>
            <li>En F2: ascenso si (ventas > 12000 O puesto = "Gerente"): <code>=SI(O(B2>12000,D2="Gerente"),"Elegible","No elegible")</code>.</li>
            <li>En G2: premio si (ventas > 10000 Y asistencia >= 90) O puesto = "Gerente": <code>=SI(O(Y(B2>10000,C2>=90),D2="Gerente"),"Premio","---")</code>.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Desafío:</strong> ¿Puedes crear una fórmula que dé "Excelente" si ventas > 14000, "Buena" si ventas > 8000, y "Regular" si no?</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Función Y', hint: '¿Cuándo devuelve VERDADERO la función Y?' },
        { term: 'Función O', hint: '¿Cuándo devuelve VERDADERO la función O?' },
        { term: 'Tabla de verdad', hint: '¿Cuál es la tabla de verdad de Y con 2 condiciones?' },
        { term: 'Y + SI', hint: '¿Cómo se escribe un SI que verifica dos condiciones que deben cumplirse ambas?' },
        { term: 'O + SI', hint: '¿Cómo se escribe un SI que da TRUE si al menos una de dos condiciones se cumple?' },
        { term: 'Combinar Y y O', hint: 'Escribe una fórmula que combine Y y O dentro de un mismo SI.' },
        { term: 'Paréntesis', hint: '¿Por qué es importante contar los paréntesis al escribir fórmulas combinadas?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '¿Cuándo la función Y devuelve VERDADERO?', options: [
          { value: 'a', label: 'Cuando al menos una condición es verdadera' },
          { value: 'b', label: 'Cuando todas las condiciones son verdaderas' },
          { value: 'c', label: 'Cuando ninguna condición es verdadera' },
          { value: 'd', label: 'Siempre devuelve verdadero' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: 'La fórmula =SI(O(A1>=90,B1>=90),"Aprobado","Reprobado"):', options: [
          { value: 'a', label: 'Aprueba si A1>=90 Y B1>=90' },
          { value: 'b', label: 'Aprueba si A1>=90 O B1>=90' },
          { value: 'c', label: 'Aprueba solo si ambas son >=90' },
          { value: 'd', label: 'Siempre reprobado' }
        ], answer: 'b' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'Si Cond1=V y Cond2=F, la función Y(Cond1,Cond2) devuelve FALSO.', answer: 'true' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'Para que una función Y dé VERDADERO, ______ las condiciones deben ser verdaderas.', answer: 'todas' }
      ],
      tasks: [
        { id: 'c3t1', title: '🧩 Sistema de bonificaciones', description: 'Crea un archivo "Bonificaciones.xlsx". Tabla de 8 empleados con: nombre, ventas, asistencia (%), puesto. Usa Y+SI para: bono si ventas>=8000 Y asistencia>=90%. Usa O+SI para: ascenso si ventas>=12000 O puesto="Gerente". Usa Y+O+SI combinado para premio especial.', evidence: 'Archivo Excel con fórmulas funcionando.' },
        { id: 'c3t2', title: '📋 Tabla de becas', description: 'Diseña un sistema de becas para 10 estudiantes. Columnas: nombre, nota (0-100), ingresos familiares, deportista (Sí/No). Criterios: beca académica (nota>=85 Y ingresos<5000), beca deportiva (deportista="Sí" Y nota>=70), beca general si cumple cualquiera de las dos anteriores. Documenta las fórmulas.', evidence: 'Archivo Excel + documento explicativo.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre Y, O y SI.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Qué función devuelve VERDADERO si AL MENOS UNA condición es verdadera?', options: [
            { value: 'a', label: '=Y()' },
            { value: 'b', label: '=O()' },
            { value: 'c', label: '=SI()' },
            { value: 'd', label: '=NO()' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Qué devuelve =Y(5>2, 3<1)?', options: [
            { value: 'a', label: 'VERDADERO' },
            { value: 'b', label: 'FALSO' },
            { value: 'c', label: '5>2' },
            { value: 'd', label: 'Error' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La función O(verdadero, falso) devuelve VERDADERO.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Para dar una beca si nota>=80 Y asistencia>=90, usas:', options: [
            { value: 'a', label: '=SI(O(A1>=80,B1>=90),"Sí","No")' },
            { value: 'b', label: '=SI(Y(A1>=80,B1>=90),"Sí","No")' },
            { value: 'c', label: '=Y(SI(A1>=80,B1>=90),"Sí","No")' },
            { value: 'd', label: '=SI(A1>=80,B1>=90,"Sí","No")' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Si Cond1=V y Cond2=F, la función O(Cond1,Cond2) devuelve _______.', answer: 'VERDADERO' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '📋',
      title: 'Ordenar y filtrar datos',
      tagline: 'Organiza tus datos y encuentra información rápidamente.',
      info: [
        { tag: '¿Qué es ordenar?', html: `
          <h3>🔤 ¿Qué significa ordenar datos?</h3>
          <p>Ordenar significa reorganizar los datos en un orden específico: <strong>ascendente</strong> (menor a mayor, A a Z) o <strong>descendente</strong> (mayor a menor, Z a A).</p>
          <h4>📊 ¿Para qué sirve ordenar?</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🏆</div>
              <h5>Ver rankings</h5>
              <p>¿Quién tuvo la nota más alta? ¿Cuál es el producto más vendido?</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Orden cronológico</h5>
              <p>Ordenar fechas de más antigua a más reciente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Orden alfabético</h5>
              <p>Listas de nombres, ciudades o productos en orden A-Z.</p>
            </div>
          </div>
          <h4>🖱️ Pasos para ordenar</h4>
          <ol>
            <li>Selecciona cualquier celda dentro de la tabla.</li>
            <li>Ve a la pestaña <strong>Datos</strong>.</li>
            <li>Haz clic en <strong>Ordenar de A a Z</strong> (ascendente) o <strong>Ordenar de Z a A</strong> (descendente).</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> No dejes filas o columnas vacías dentro de la tabla. Excel puede no ordenar correctamente si hay datos sueltos.</p>
          </div>
        `},
        { tag: 'Ordenar por múltiples criterios', html: `
          <h3>📑 Ordenar por múltiples criterios</h3>
          <p>Puedes ordenar por varios niveles. Ejemplo: primero por departamento (A-Z), luego por ventas (mayor a menor).</p>
          <h4>🖱️ Pasos</h4>
          <ol>
            <li>Selecciona la tabla completa.</li>
            <li>Ve a <strong>Datos → Ordenar</strong>.</li>
            <li>Se abre el cuadro de diálogo "Ordenar".</li>
            <li>En <strong>Nivel 1</strong>: elige la primera columna (ej. Departamento).</li>
            <li>Haz clic en <strong>Agregar nivel</strong>.</li>
            <li>En <strong>Nivel 2</strong>: elige la segunda columna (ej. Ventas, de mayor a menor).</li>
          </ol>
          <h4>💡 Ejemplo visual</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Datos originales:
Nombre      Depto       Ventas
Ana         Ventas      12000
Carlos      Ventas      8000
María       Marketing   15000
Juan        Marketing   5000

Ordenado por: Depto (A-Z), luego Ventas (mayor a menor):
Nombre      Depto       Ventas
María       Marketing   15000
Juan        Marketing   5000
Ana         Ventas      12000
Carlos      Ventas      8000</code></pre>
        `},
        { tag: '¿Qué es filtrar?', html: `
          <h3>🔍 ¿Qué significa filtrar datos?</h3>
          <p>Filtrar permite mostrar <strong>solo los datos que cumplen una condición</strong> y ocultar temporalmente el resto. Los datos no se borran, solo se esconden.</p>
          <h4>🖱️ Cómo activar filtros</h4>
          <ol>
            <li>Selecciona la tabla (incluyendo los encabezados).</li>
            <li>Ve a <strong>Datos → Filtro</strong> o presiona <kbd>Ctrl + Mayús + L</kbd> (Windows) / <kbd>Cmd + Mayús + F</kbd> (Mac).</li>
            <li>Aparecerán flechas en cada encabezado de columna.</li>
          </ol>
          <h4>📋 Tipos de filtro</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Filtro por selección</h5>
              <p>Marca o desmarca valores específicos de la lista desplegable.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Filtro numérico</h5>
              <p>Mayor que, menor que, entre, igual a... Ideal para números.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Filtro de texto</h5>
              <p>Contiene, comienza con, termina con... Para columnas de texto.</p>
            </div>
          </div>
        `},
        { tag: 'Filtros avanzados', html: `
          <h3>⚡ Filtros avanzados y personalizados</h3>
          <h4>🔢 Filtros numéricos</h4>
          <p>Haz clic en la flecha del encabezado → <strong>Filtros numéricos</strong>:</p>
          <ul>
            <li><strong>Mayor que:</strong> muestra valores > X.</li>
            <li><strong>Menor que:</strong> muestra valores &lt; X.</li>
            <li><strong>Entre:</strong> muestra valores entre X e Y.</li>
            <li><strong>Los 10 mejores:</strong> muestra los N valores más altos.</li>
          </ul>
          <h4>🔤 Filtros de texto</h4>
          <p>Haz clic en la flecha del encabezado → <strong>Filtros de texto</strong>:</p>
          <ul>
            <li><strong>Contiene:</strong> muestra celdas que contienen una palabra.</li>
            <li><strong>Comienza con:</strong> muestra celdas que empiezan con...</li>
            <li><strong>Termina con:</strong> muestra celdas que terminan con...</li>
          </ul>
          <h4>🎨 Filtro por color</h4>
          <p>Si aplicaste colores a las celdas, puedes filtrar por color de relleno o de fuente.</p>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Usa <kbd>Ctrl + Mayús + L</kbd> para activar/desactivar filtros rápidamente. Es uno de los atajos más útiles de Excel.</p>
          </div>
        `},
        { tag: 'Práctica guiada', html: `
          <h3>✏️ Ejercicio guiado: Análisis de ventas</h3>
          <h4>📋 Tabla de datos</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B           C           D
1   Vendedor    Región      Producto    Ventas
2   Ana López   Norte       Laptop      15000
3   Carlos Ruiz Sur         Mouse       3200
4   María Pérez Norte       Monitor     8500
5   Juan Díaz   Centro      Teclado     2100
6   Luis García Sur         Laptop      12000
7   Rosa Martínez Centro    Monitor     9500</code></pre>
          <h4>🎯 Tareas</h4>
          <ol>
            <li>Ordena por <strong>Ventas</strong> de mayor a menor (descendente).</li>
            <li>Ordena por <strong>Región</strong> (A-Z) y luego por <strong>Producto</strong> (A-Z).</li>
            <li>Filtra para mostrar solo la <strong>Región = "Norte"</strong>.</li>
            <li>Filtra para mostrar <strong>Ventas > 5000</strong>.</li>
            <li>Filtra para mostrar productos que <strong>contengan</strong> la palabra "Monitor".</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Desafío:</strong> ¿Puedes combinar filtros? Por ejemplo, Región="Norte" Y Ventas>8000. Excel lo hace automáticamente al aplicar filtros en varias columnas.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Ordenar ascendente', hint: '¿Qué significa ordenar de A a Z o de menor a mayor?' },
        { term: 'Ordenar descendente', hint: '¿Cuándo usarías orden descendente en una columna de ventas?' },
        { term: 'Filtro', hint: '¿Los datos filtrados se borran o solo se ocultan?' },
        { term: 'Ctrl + Mayús + L', hint: '¿Qué hace este atajo de teclado en Excel?' },
        { term: 'Filtro numérico', hint: 'Menciona 3 tipos de filtros numéricos disponibles en Excel.' },
        { term: 'Filtro de texto', hint: '¿Cómo filtrarías una columna para mostrar solo "Guatemala"?' },
        { term: 'Múltiples criterios', hint: '¿Cómo ordenas por departamento y luego por salario?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: '¿Qué hace el filtro en Excel?', options: [
          { value: 'a', label: 'Borra los datos que no quieres ver' },
          { value: 'b', label: 'Muestra solo los datos que cumplen una condición' },
          { value: 'c', label: 'Cambia el color de las celdas' },
          { value: 'd', label: 'Crea un gráfico automáticamente' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: 'El atajo para activar o desactivar filtros en Excel es:', options: [
          { value: 'a', label: 'Ctrl + S' },
          { value: 'b', label: 'Ctrl + Mayús + L' },
          { value: 'c', label: 'Ctrl + F' },
          { value: 'd', label: 'Ctrl + H' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'Al ordenar datos, Excel modifica permanentemente el orden de las filas en la hoja.', answer: 'true' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'Para ordenar de mayor a menor se usa orden _______.', answer: 'descendente' }
      ],
      tasks: [
        { id: 'c4t1', title: '📊 Análisis de ventas con filtros', description: 'Crea un archivo "Analisis_Ventas.xlsx" con 15 filas de datos: Vendedor, Región (Norte/Sur/Centro), Producto, Ventas (Q). Practica: ordenar por ventas descendente, filtrar por región, filtrar ventas > 8000, filtrar productos que contengan "Teclado". Toma captura de cada resultado.', evidence: 'Archivo Excel con filtros aplicados + capturas.' },
        { id: 'c4t2', title: '📑 Ordenamiento complejo', description: 'Crea una tabla de 12 estudiantes con: Nombre, Grado (4to/5to/6to), Nota (0-100), Edad. Ordena por: Grado (A-Z), luego por Nota (mayor a menor). Luego filtra para mostrar solo 4to grado con nota > 80. Explica los pasos en un documento.', evidence: 'Archivo Excel + explicación paso a paso.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre ordenar y filtrar.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Al activar un filtro, los datos que no cumplen la condición:', options: [
            { value: 'a', label: 'Se borran permanentemente' },
            { value: 'b', label: 'Se ocultan temporalmente' },
            { value: 'c', label: 'Se mueven a otra hoja' },
            { value: 'd', label: 'Se copian a otro archivo' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Desde qué pestaña se activa la opción Ordenar y Filtrar?', options: [
            { value: 'a', label: 'Inicio' },
            { value: 'b', label: 'Insertar' },
            { value: 'c', label: 'Datos' },
            { value: 'd', label: 'Fórmulas' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Para ordenar por múltiples criterios, debes usar el cuadro de diálogo "Ordenar" y agregar niveles.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Si quieres ver los 3 productos más vendidos, usas:', options: [
            { value: 'a', label: 'Filtro de texto' },
            { value: 'b', label: 'Filtro numérico → Los 10 mejores' },
            { value: 'c', label: 'Ordenar A-Z' },
            { value: 'd', label: 'Eliminar filas' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'El filtro que muestra valores que contienen una palabra específica se llama filtro de _______.', answer: 'texto' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '📈',
      title: 'Gráficos básicos: columnas y circular',
      tagline: 'Aprende a crear y personalizar gráficos de columnas y circulares.',
      info: [
        { tag: '¿Qué es un gráfico?', html: `
          <h3>📈 ¿Qué es un gráfico en Excel?</h3>
          <p>Un <strong>gráfico</strong> es una representación visual de los datos. Permite identificar patrones, tendencias y comparaciones de un solo vistazo.</p>
          <h4>🎯 ¿Por qué usar gráficos?</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👁️</div>
              <h5>Visual</h5>
              <p>Los datos numéricos se entienden mejor visualmente que en tablas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Comparativo</h5>
              <p>Compara valores fácilmente entre categorías.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📉</div>
              <h5>Tendencias</h5>
              <p>Muestra cómo cambian los datos en el tiempo.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Regla importante:</strong> Elige el tipo de gráfico según lo que quieras comunicar. No todos los gráficos sirven para todos los datos.</p>
          </div>
        `},
        { tag: 'Gráfico de columnas', html: `
          <h3>📊 Gráfico de columnas</h3>
          <p>El gráfico de <strong>columnas</strong> usa barras verticales para comparar valores entre categorías. Es ideal para mostrar comparaciones.</p>
          <h4>🖱️ Pasos para crearlo</h4>
          <ol>
            <li>Selecciona los datos (incluyendo encabezados).</li>
            <li>Ve a <strong>Insertar → Gráficos → Columna agrupada 2D</strong>.</li>
            <li>Listo, el gráfico aparece en la hoja.</li>
          </ol>
          <h4>💡 Ejemplo: Ventas por mes</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B
1   Mes         Ventas
2   Enero       45000
3   Febrero     52000
4   Marzo       38000
5   Abril       61000
6   Mayo        48000</code></pre>
          <p>Selecciona A1:B6 → Insertar → Columna agrupada. Obtendrás 5 columnas, una por mes, cuya altura representa las ventas.</p>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Para cambiar entre filas y columnas (intercambiar ejes), haz clic derecho en el gráfico → "Seleccionar datos" → "Cambiar fila/columna".</p>
          </div>
        `},
        { tag: 'Gráfico circular (pastel)', html: `
          <h3>🥧 Gráfico circular (pastel)</h3>
          <p>El gráfico <strong>circular</strong> (de pastel o pie) muestra la proporción de cada categoría respecto al total. Cada "rebanada" es un porcentaje del total.</p>
          <h4>🤔 ¿Cuándo usarlo?</h4>
          <ul>
            <li>✅ Cuando tienes <strong>pocas categorías</strong> (2-6).</li>
            <li>✅ Cuando quieres mostrar <strong>porcentajes</strong> del total.</li>
            <li>✅ Para ver qué categoría es la que más contribuye.</li>
            <li>❌ NO cuando tienes muchas categorías (se ve abarrotado).</li>
            <li>❌ NO para mostrar cambios en el tiempo.</li>
          </ul>
          <h4>🖱️ Pasos para crearlo</h4>
          <ol>
            <li>Selecciona los datos (categorías y valores).</li>
            <li>Ve a <strong>Insertar → Gráficos → Circular 2D</strong>.</li>
            <li>Selecciona el primer subtipo (circular simple).</li>
          </ol>
          <h4>💡 Ejemplo: Presupuesto por área</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B
1   Área        Presupuesto
2   Ventas      120000
3   Marketing   80000
4   RRHH        50000
5   Operaciones 60000</code></pre>
        `},
        { tag: 'Partes de un gráfico', html: `
          <h3>🔧 Partes de un gráfico en Excel</h3>
          <p>Conocer las partes del gráfico te ayuda a personalizarlo:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📐</div>
              <h5>Área del gráfico</h5>
              <p>El fondo completo donde está el gráfico.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Serie de datos</h5>
              <p>Las barras, columnas o rebanadas que representan los valores.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Eje X (horizontal)</h5>
              <p>Categorías (meses, productos, nombres).</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Eje Y (vertical)</h5>
              <p>Valores numéricos. Muestra la escala de los datos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏷️</div>
              <h5>Título del gráfico</h5>
              <p>Describe de qué trata el gráfico.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Leyenda</h5>
              <p>Identifica qué representa cada color o serie.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> Haz clic en cualquier parte del gráfico para activar las herramientas de "Diseño" y "Formato" en la cinta de opciones.</p>
          </div>
        `},
        { tag: 'Personalizar gráficos', html: `
          <h3>🎨 Personaliza tus gráficos</h3>
          <p>Excel permite cambiar colores, estilos y agregar elementos al gráfico:</p>
          <h4>🎯 Elementos que puedes agregar</h4>
          <ul>
            <li><strong>Etiquetas de datos:</strong> muestra los valores exactos sobre cada barra/rebanada.</li>
            <li><strong>Tabla de datos:</strong> muestra la tabla original debajo del gráfico.</li>
            <li><strong>Líneas de cuadrícula:</strong> líneas que facilitan la lectura de valores.</li>
            <li><strong>Formato de color:</strong> cambia el color de cada serie individualmente.</li>
          </ul>
          <h4>🖱️ Cómo personalizar</h4>
          <ol>
            <li>Selecciona el gráfico.</li>
            <li>Usa el botón <strong>+</strong> (Elementos del gráfico) a la derecha.</li>
            <li>Marca/desmarca: Etiquetas de datos, Título, Leyenda, etc.</li>
            <li>Usa el pincel <strong>🎨</strong> (Estilos de gráfico) para cambiar el diseño.</li>
            <li>Haz doble clic en un elemento para abrir el panel de formato detallado.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip profesional:</strong> En gráficos circulares, activa "Porcentaje" en las etiquetas de datos para mostrar el % de cada rebanada. También puedes "explotar" una rebanada (separarla) para resaltarla.</p>
          </div>
        `},
        { tag: 'Ejercicio práctico', html: `
          <h3>✏️ Crea tus propios gráficos</h3>
          <h4>📋 Datos de práctica</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>    A           B           C
1   Producto    Vendido     Devoluciones
2   Laptop      150         12
3   Tablet      95          8
4   Teléfono    210         15
5   Monitor     75          3
6   Audífonos   180         10</code></pre>
          <h4>🎯 Tareas</h4>
          <ol>
            <li>Crea un <strong>gráfico de columnas</strong> con Producto y Vendido.</li>
            <li>Agrega etiquetas de datos a las columnas.</li>
            <li>Cambia el título a "Productos más vendidos".</li>
            <li>Crea un <strong>gráfico circular</strong> con Producto y Devoluciones.</li>
            <li>Agrega etiquetas con porcentaje al gráfico circular.</li>
            <li>Cambia el color de la rebanada más grande a rojo.</li>
          </ol>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Desafío:</strong> Crea un gráfico de columnas agrupadas con dos series: Vendido y Devoluciones. Así puedes comparar ambas métricas lado a lado.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Gráfico de columnas', hint: '¿Para qué tipo de comparación es ideal el gráfico de columnas?' },
        { term: 'Gráfico circular', hint: '¿Cuándo es apropiado usar un gráfico circular (pastel)?' },
        { term: 'Eje X', hint: '¿Qué información va en el eje horizontal de un gráfico de columnas?' },
        { term: 'Eje Y', hint: '¿Qué información va en el eje vertical de un gráfico de columnas?' },
        { term: 'Etiquetas de datos', hint: '¿Cómo se agregan etiquetas de datos a un gráfico?' },
        { term: 'Leyenda', hint: '¿Qué función cumple la leyenda en un gráfico?' },
        { term: 'Explotar rebanada', hint: '¿Qué significa "explotar" una rebanada en un gráfico circular?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Qué tipo de gráfico es mejor para mostrar PORCENTAJES del total?', options: [
          { value: 'a', label: 'Gráfico de columnas' },
          { value: 'b', label: 'Gráfico circular' },
          { value: 'c', label: 'Gráfico de líneas' },
          { value: 'd', label: 'Gráfico de dispersión' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: '¿Qué representa el eje X en un gráfico de columnas?', options: [
          { value: 'a', label: 'Los valores numéricos' },
          { value: 'b', label: 'Las categorías' },
          { value: 'c', label: 'El título' },
          { value: 'd', label: 'La leyenda' }
        ], answer: 'b' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'Un gráfico circular es recomendable cuando tienes muchas categorías (más de 10).', answer: 'false' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'Las etiquetas que identifican qué representa cada color en un gráfico se llaman _______.', answer: 'leyenda' }
      ],
      tasks: [
        { id: 'c5t1', title: '📊 Informe de ventas con gráficos', description: 'Crea un archivo "Informe_Ventas.xlsx" con: 6 meses de ventas y 6 meses de gastos. Crea: (1) gráfico de columnas comparando ventas vs gastos por mes, (2) gráfico circular mostrando la distribución de gastos por categoría (5 categorías). Personaliza colores, títulos y etiquetas.', evidence: 'Archivo Excel con ambos gráficos.', },
        { id: 'c5t2', title: '📈 Encuesta visual', description: 'Crea una tabla con datos de una encuesta ficticia (ej: redes sociales favoritas de 100 personas). Crea un gráfico circular con porcentajes. Luego crea un gráfico de columnas con los mismos datos. Compara ambos: ¿cuál comunica mejor la información? Escribe tu conclusión.', evidence: 'Archivo Excel + breve análisis.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre gráficos en Excel.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Desde qué pestaña se inserta un gráfico en Excel?', options: [
            { value: 'a', label: 'Inicio' },
            { value: 'b', label: 'Insertar' },
            { value: 'c', label: 'Datos' },
            { value: 'd', label: 'Diseño' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'El gráfico de columnas es ideal para:', options: [
            { value: 'a', label: 'Mostrar porcentajes del total' },
            { value: 'b', label: 'Comparar valores entre categorías' },
            { value: 'c', label: 'Mostrar relaciones entre dos variables' },
            { value: 'd', label: 'Mostrar jerarquías' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La leyenda de un gráfico identifica qué representa cada color.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Qué elemento muestra los valores numéricos sobre cada barra?', options: [
            { value: 'a', label: 'Leyenda' },
            { value: 'b', label: 'Título' },
            { value: 'c', label: 'Etiquetas de datos' },
            { value: 'd', label: 'Eje Y' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'En un gráfico circular, la técnica de separar una rebanada del resto se llama _______.', answer: 'explotar' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Validación de datos + Examen final',
      tagline: 'Controla qué datos se ingresan y demuestra todo lo aprendido en el examen final.',
      info: [
        { tag: '¿Qué es validación de datos?', html: `
          <h3>✅ ¿Qué es la validación de datos?</h3>
          <p>La <strong>validación de datos</strong> permite controlar qué tipo de datos puede ingresar el usuario en una celda. Ayuda a evitar errores y mantener la integridad de la información.</p>
          <h4>🖱️ Dónde se encuentra</h4>
          <p>Ve a <strong>Datos → Herramientas de datos → Validación de datos</strong>.</p>
          <h4>📋 Tipos de validación</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Lista desplegable</h5>
              <p>Solo permite seleccionar valores de una lista predefinida.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Número entero</h5>
              <p>Permite solo números enteros entre un mínimo y máximo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📅</div>
              <h5>Fecha</h5>
              <p>Solo permite fechas dentro de un rango.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>Longitud de texto</h5>
              <p>Controla la cantidad de caracteres permitidos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✏️</div>
              <h5>Personalizada</h5>
              <p>Usa una fórmula para definir una regla personalizada.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⏹️</div>
              <h5>Restringir entrada</h5>
              <p>Bloquea la entrada si no cumple la regla.</p>
            </div>
          </div>
        `},
        { tag: 'Validación: listas', html: `
          <h3>📋 Validación con lista desplegable</h3>
          <p>La validación de <strong>lista</strong> crea un menú desplegable con opciones predefinidas. Así el usuario solo puede elegir una de ellas, evitando errores de escritura.</p>
          <h4>🖱️ Pasos para crearla</h4>
          <ol>
            <li>Selecciona la celda o rango donde quieres la lista.</li>
            <li>Ve a <strong>Datos → Validación de datos</strong>.</li>
            <li>En "Permitir", elige <strong>Lista</strong>.</li>
            <li>En "Origen", escribe las opciones separadas por coma (sin espacios): <code>Guatemala,El Salvador,Honduras</code>.</li>
            <li>Opcional: marca "Mostrar lista desplegable en la celda".</li>
            <li>En la pestaña "Mensaje de entrada" puedes poner una instrucción.</li>
            <li>En "Mensaje de error" puedes personalizar el aviso si ingresan un dato no válido.</li>
          </ol>
          <h4>💡 Ejemplo: Lista de departamentos</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Origen:  Ventas,Marketing,RRHH,Operaciones,Finanzas</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Tip:</strong> También puedes referenciar un rango de celdas como origen. Ej: <code>=$A$1:$A$5</code> donde A1:A5 contiene las opciones. Así es más fácil actualizar la lista.</p>
          </div>
        `},
        { tag: 'Validación: rangos y personalizada', html: `
          <h3>📏 Validación por rango y reglas personalizadas</h3>
          <h4>🔢 Validación por rango numérico</h4>
          <p>Permite solo números dentro de un rango. Ejemplo: notas entre 0 y 100:</p>
          <ul>
            <li>Permitir: <strong>Número entero</strong>.</li>
            <li>Datos: <strong>entre</strong>.</li>
            <li>Mínimo: <code>0</code>, Máximo: <code>100</code>.</li>
          </ul>
          <h4>✏️ Validación personalizada con fórmula</h4>
          <p>Puedes crear reglas usando fórmulas. Ejemplo: permitir solo si la celda A1 es mayor que B1:</p>
          <ul>
            <li>Permitir: <strong>Personalizada</strong>.</li>
            <li>Fórmula: <code>=A1>B1</code>.</li>
          </ul>
          <h4>💡 Ejemplos de fórmulas personalizadas</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>=A1>=0        → Valor no negativo
=A1<=100      → No mayor a 100
=ESNUMERO(A1) → Solo números
=SI(A1="","",A1>=60) → Si no está vacío, debe ser >=60</code></pre>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> La fórmula personalizada debe devolver VERDADERO para que la entrada sea válida. Si devuelve FALSO, se rechaza.</p>
          </div>
        `},
        { tag: 'Mensajes y errores', html: `
          <h3>💬 Mensajes de entrada y alertas de error</h3>
          <p>La validación de datos tiene 3 pestañas. Las dos adicionales mejoran la experiencia del usuario:</p>
          <h4>💡 Pestaña: Mensaje de entrada</h4>
          <p>Muestra un mensaje cuando el usuario selecciona la celda. Ejemplo:</p>
          <ul>
            <li><strong>Título:</strong> "Ingreso de notas"</li>
            <li><strong>Mensaje:</strong> "Ingresa una nota entre 0 y 100."</li>
          </ul>
          <h4>⚠️ Pestaña: Mensaje de error</h4>
          <p>Define qué pasa si el usuario ingresa un valor no válido:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">⛔</div>
              <h5>Detener</h5>
              <p>Bloquea la entrada. El usuario no puede continuar hasta ingresar un valor válido.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚠️</div>
              <h5>Advertencia</h5>
              <p>Muestra una advertencia, pero permite continuar si el usuario confirma.</p>
            </div>
            <div class="grid-item">
              <div class="icon">ℹ️</div>
              <h5>Información</h5>
              <p>Solo informa, pero permite cualquier valor.</p>
            </div>
          </div>
          <p>Personaliza el título y mensaje según tu necesidad.</p>
        `},
        { tag: 'Resumen del curso', html: `
          <h3>🎓 Lo que aprendimos en este grado</h3>
          <p>¡Felicitaciones por llegar a la última clase! Has recorrido un camino increíble en Excel. Repasemos los temas:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Excel básico</h5>
              <p>Celdas, rangos, referencias, SUMA, PROMEDIO, CONTAR, MAX, MIN.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Función SI</h5>
              <p>=SI(), operadores de comparación, SI anidados.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧩</div>
              <h5>Y, O + SI</h5>
              <p>Combinar condiciones con Y() y O() dentro de SI().</p>
            </div>
            <div class="grid-item">
              <div class="icon">📋</div>
              <h5>Ordenar y filtrar</h5>
              <p>Múltiples criterios, filtros numéricos y de texto.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📈</div>
              <h5>Gráficos</h5>
              <p>Columnas, circulares, personalización y etiquetas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✅</div>
              <h5>Validación</h5>
              <p>Listas desplegables, rangos, reglas personalizadas.</p>
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
            <li><strong>Repasa las palabras clave</strong> antes de empezar: están en cada clase.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">🌟</span>
            <p><strong>Recuerda:</strong> El examen final cubre los 6 temas del curso. Necesitas al menos 60% para aprobar. ¡Tú puedes!</p>
          </div>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p><strong>¡Lo lograste!</strong> Al completar este curso has dominado las funciones avanzadas de Excel. Sigue practicando y explorando nuevas funciones para convertirte en un experto.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Validación de datos', hint: '¿Dónde se encuentra la opción Validación de datos en la cinta de Excel?' },
        { term: 'Lista desplegable', hint: '¿Cómo separas las opciones en el campo "Origen" de una lista?' },
        { term: 'Mensaje de error', hint: '¿Cuáles son los 3 estilos de mensaje de error en validación?' },
        { term: 'Fórmula personalizada', hint: '¿Qué debe devolver la fórmula para que la entrada sea válida?' },
        { term: 'Validación de rango', hint: '¿Cómo limitarías una celda para que solo acepte números entre 1 y 100?' },
        { term: 'Mensaje de entrada', hint: '¿En qué pestaña se configura el mensaje que aparece al seleccionar la celda?' },
        { term: 'Función lógica general', hint: 'Explica con tus palabras la diferencia entre Y, O y SI.' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿En qué pestaña de Excel se encuentra Validación de datos?', options: [
          { value: 'a', label: 'Inicio' },
          { value: 'b', label: 'Insertar' },
          { value: 'c', label: 'Datos' },
          { value: 'd', label: 'Fórmulas' }
        ], answer: 'c' },
        { id: 'c6e2', n: 2, type: 'mc', prompt: '¿Qué tipo de validación usarías para crear un menú desplegable?', options: [
          { value: 'a', label: 'Número entero' },
          { value: 'b', label: 'Lista' },
          { value: 'c', label: 'Fecha' },
          { value: 'd', label: 'Personalizada' }
        ], answer: 'b' },
        { id: 'c6e3', n: 3, type: 'tf', prompt: 'La validación personalizada usa una fórmula que debe devolver VERDADERO para aceptar el dato.', answer: 'true' },
        { id: 'c6e4', n: 4, type: 'fill', prompt: 'El estilo de mensaje de error que bloquea completamente la entrada se llama _______.', answer: 'Detener' },
        { id: 'c6e5', n: 5, type: 'mc', prompt: '¿Cómo se separan las opciones en una lista de validación?', options: [
          { value: 'a', label: 'Con punto y coma (;)' },
          { value: 'b', label: 'Con coma (,)' },
          { value: 'c', label: 'Con espacio ( )' },
          { value: 'd', label: 'Con dos puntos (:)' }
        ], answer: 'b' }
      ],
      tasks: [
        { id: 'c6t1', title: '✅ Sistema de ingreso de datos con validación', description: 'Crea un archivo "Sistema_Validacion.xlsx" con: (1) Lista desplegable para departamentos (Ventas, Marketing, RRHH, Finanzas, Operaciones), (2) Validación numérica para notas (0-100), (3) Validación personalizada que impida ingresar un gasto mayor al ingreso (A1>B1), (4) Mensaje de entrada instructivo en cada celda validada, (5) Mensaje de error personalizado.', evidence: 'Archivo Excel con todas las validaciones funcionando.' },
        { id: 'c6t2', title: '🎯 Proyecto final: Sistema de control', description: 'Crea un sistema completo en Excel que integre todo lo aprendido: (1) Tabla de 10 empleados con validaciones, (2) Función SI para calcular bonos, (3) Y/O para condiciones múltiples (bono si ventas>5000 Y asistencia>=90), (4) Filtros para analizar datos, (5) Gráfico de columnas con resultados, (6) Gráfico circular con distribución. Guarda como "Proyecto_Final_CuartoPerito_TuNombre.xlsx".', evidence: 'Archivo Excel completo del proyecto final.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Responde las 5 preguntas sobre validación de datos.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál es el propósito de la validación de datos?', options: [
            { value: 'a', label: 'Dar color a las celdas' },
            { value: 'b', label: 'Controlar qué datos se ingresan en una celda' },
            { value: 'c', label: 'Crear gráficos automáticos' },
            { value: 'd', label: 'Ordenar los datos' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Si necesitas que el usuario solo pueda elegir entre "Sí" y "No", usas:', options: [
            { value: 'a', label: 'Validación → Lista con origen: Sí,No' },
            { value: 'b', label: 'Formato condicional' },
            { value: 'c', label: 'Filtro avanzado' },
            { value: 'd', label: 'Gráfico circular' }
          ], answer: 'a' },
          { id: 'q3', type: 'tf', prompt: 'El mensaje de entrada aparece solo cuando el usuario ingresa un valor no válido.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: '¿Qué estilo de error permite al usuario ingresar un valor no válido después de una advertencia?', options: [
            { value: 'a', label: 'Detener' },
            { value: 'b', label: 'Advertencia' },
            { value: 'c', label: 'Información' },
            { value: 'd', label: 'Error crítico' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'En validación personalizada, la fórmula debe devolver _______.', answer: 'VERDADERO' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Cuarto Perito Contador',
        description: '15 preguntas cubriendo los 6 temas del curso. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Excel básico) · La referencia $B$4 es un ejemplo de referencia:', options: [{ value: 'a', label: 'Relativa' }, { value: 'b', label: 'Absoluta' }, { value: 'c', label: 'Mixta' }, { value: 'd', label: 'Circular' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Excel básico) · ¿Qué función calcula el promedio de un rango?', options: [{ value: 'a', label: '=SUMA()' }, { value: 'b', label: '=CONTAR()' }, { value: 'c', label: '=PROMEDIO()' }, { value: 'd', label: '=MAX()' }], answer: 'c' },
          { id: 'f3', type: 'mc', prompt: 'Tema 2 (Función SI) · ¿Cuál es la sintaxis correcta de la función SI?', options: [{ value: 'a', label: '=SI(prueba, valor_verdadero, valor_falso)' }, { value: 'b', label: '=SI(valor_verdadero, prueba, valor_falso)' }, { value: 'c', label: '=SI(prueba, valor_falso, valor_verdadero)' }, { value: 'd', label: '=SI(valor_falso, prueba, valor_verdadero)' }], answer: 'a' },
          { id: 'f4', type: 'tf', prompt: 'Tema 2 (Función SI) · Los textos en una fórmula de Excel deben ir entre comillas dobles.', answer: 'true' },
          { id: 'f5', type: 'mc', prompt: 'Tema 3 (Y, O) · ¿Qué devuelve =Y(10>5, 3<1)?', options: [{ value: 'a', label: 'VERDADERO' }, { value: 'b', label: 'FALSO' }, { value: 'c', label: '10>5' }, { value: 'd', label: 'Error' }], answer: 'b' },
          { id: 'f6', type: 'mc', prompt: 'Tema 3 (Y, O) · Para aprobar si nota>=60 Y asistencia>=80 se usa:', options: [{ value: 'a', label: '=SI(O(nota>=60,asistencia>=80),"Aprueba","Reprueba")' }, { value: 'b', label: '=SI(Y(nota>=60,asistencia>=80),"Aprueba","Reprueba")' }, { value: 'c', label: '=Y(SI(nota>=60,asistencia>=80),"Aprueba")' }, { value: 'd', label: '=SI(nota>=60,asistencia>=80)' }], answer: 'b' },
          { id: 'f7', type: 'tf', prompt: 'Tema 3 (Y, O) · La función O devuelve FALSO solo cuando todas las condiciones son falsas.', answer: 'true' },
          { id: 'f8', type: 'mc', prompt: 'Tema 4 (Ordenar y filtrar) · ¿Cuál es el atajo para activar filtros?', options: [{ value: 'a', label: 'Ctrl + S' }, { value: 'b', label: 'Ctrl + Mayús + L' }, { value: 'c', label: 'Ctrl + F' }, { value: 'd', label: 'Ctrl + D' }], answer: 'b' },
          { id: 'f9', type: 'mc', prompt: 'Tema 4 (Ordenar y filtrar) · Al filtrar datos, los datos ocultados:', options: [{ value: 'a', label: 'Se borran' }, { value: 'b', label: 'Se ocultan temporalmente' }, { value: 'c', label: 'Se mueven a otra hoja' }, { value: 'd', label: 'Se imprimen igual' }], answer: 'b' },
          { id: 'f10', type: 'tf', prompt: 'Tema 4 (Ordenar) · Puedes ordenar por múltiples criterios usando el cuadro de diálogo "Ordenar".', answer: 'true' },
          { id: 'f11', type: 'mc', prompt: 'Tema 5 (Gráficos) · ¿Qué gráfico es mejor para mostrar porcentajes del total?', options: [{ value: 'a', label: 'Columnas' }, { value: 'b', label: 'Circular' }, { value: 'c', label: 'Líneas' }, { value: 'd', label: 'Dispersión' }], answer: 'b' },
          { id: 'f12', type: 'mc', prompt: 'Tema 5 (Gráficos) · Los elementos que identifican cada color en un gráfico se llaman:', options: [{ value: 'a', label: 'Etiquetas' }, { value: 'b', label: 'Ejes' }, { value: 'c', label: 'Leyenda' }, { value: 'd', label: 'Título' }], answer: 'c' },
          { id: 'f13', type: 'tf', prompt: 'Tema 5 (Gráficos) · Un gráfico circular es ideal para mostrar muchas categorías (más de 10).', answer: 'false' },
          { id: 'f14', type: 'mc', prompt: 'Tema 6 (Validación) · Para crear un menú desplegable, usas validación tipo:', options: [{ value: 'a', label: 'Número entero' }, { value: 'b', label: 'Lista' }, { value: 'c', label: 'Fecha' }, { value: 'd', label: 'Personalizada' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema 6 (Validación) · El estilo de error que bloquea completamente la entrada no válida se llama _______.', answer: 'Detener' }
        ]
      }
    }
  ]
};
