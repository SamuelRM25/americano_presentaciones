const COURSE_DATA = {
  grade: 'primero_basico',
  title: 'TAC (Mecanografía) · Primero Básico',
  subtitle: 'Mecanografía básica y teclado',
  classes: [
    {
      id: 'c1', num: 1, icon: '⌨️',
      title: 'Teclas inferiores (ZXCV-BNM)',
      tagline: 'Aprende a usar la fila inferior del teclado sin mirar las teclas.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 ¡Bienvenido a TAC, Primero Básico!</h3>
          <p>Este año vamos a aprender <strong>mecanografía básica</strong>. Vas a descubrir cómo usar el teclado sin mirar las teclas.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Teclado</h5>
              <p>Conocerás todas las filas del teclado y cómo usar cada dedo correctamente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✍️</div>
              <h5>Escritura</h5>
              <p>Aprenderás a escribir palabras y oraciones completas con buena técnica.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>Velocidad</h5>
              <p>Poco a poco escribirás más rápido sin mirar el teclado.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases serás capaz de escribir en el teclado usando todas las filas, con los signos de puntuación básicos y a buena velocidad.</p>
          </div>
        `},
        { tag: 'Fila inferior', html: `
          <h3>⬇️ ¿Qué son las teclas inferiores?</h3>
          <p>El teclado tiene <strong>4 filas</strong> principales. La fila de <strong>abajo</strong> se llama <strong>fila inferior</strong> y tiene estas teclas:</p>
          <div class="slide-info">
            <span class="icon">⌨️</span>
            <p><strong>Fila inferior:</strong> <code>Z X C V B N M , . -</code></p>
          </div>
          <p>Hoy vamos a enfocarnos en las letras: <strong>Z X C V</strong> (mano izquierda) y <strong>B N M</strong> (mano derecha).</p>
          <h4>📍 Posición de las manos</h4>
          <p>Tus dedos descansan en la <strong>fila home</strong> (A S D F - J K L Ñ). Para bajar a la fila inferior, los dedos se estiran hacia abajo desde esa posición.</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Fila superior:   Q W E R T Y U I O P
Fila home:       A S D F G H J K L Ñ
Fila inferior:   Z X C V B N M , . -</code></pre>
        `},
        { tag: 'Mano izquierda', html: `
          <h3>👈 Mano izquierda: Z X C V</h3>
          <p>Estas 4 teclas las controla la <strong>mano izquierda</strong>. Cada dedo baja hacia abajo desde su posición en la fila home.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🤏</div>
              <h5>Tecla Z</h5>
              <p>La pulsa el <strong>meñique izquierdo</strong>. Baja desde la tecla A.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla X</h5>
              <p>La pulsa el <strong>anular izquierdo</strong>. Baja desde la tecla S.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla C</h5>
              <p>La pulsa el <strong>medio izquierdo</strong>. Baja desde la tecla D.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla V</h5>
              <p>La pulsa el <strong>índice izquierdo</strong>. Baja desde la tecla F.</p>
            </div>
          </div>
          <h4>💡 Ejercicio de memoria</h4>
          <p>Sin mirar el teclado, repite en voz alta: <strong>Z con meñique, X con anular, C con medio, V con índice</strong>.</p>
        `},
        { tag: 'Mano derecha', html: `
          <h3>👈 Mano derecha: B N M</h3>
          <p>Estas 3 teclas las controla la <strong>mano derecha</strong>. Los dedos bajan desde la fila home.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla B</h5>
              <p>La pulsa el <strong>índice derecho</strong>. Baja desde la tecla J.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla N</h5>
              <p>La pulsa el <strong>medio derecho</strong>. Baja desde la tecla K.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Tecla M</h5>
              <p>La pulsa el <strong>anular derecho</strong>. Baja desde la tecla L.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Recuerda:</strong> La tecla M es la más usada en español. El anular derecho debe practicar mucho para encontrarla sin mirar.</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Palabras con la fila inferior</h3>
          <p>Practica escribiendo estas palabras. Recuerda: <strong>no mires el teclado</strong>.</p>
          <h4>📝 Con Z, X, C, V</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>zorro  xilófono  casa  vaca
zapato  examen  coco  vaso
zona  texto  cinco  vida</code></pre>
          <h4>📝 Con B, N, M</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>bota  nube  mano  banana
bien  nota  mono  bomba
brazo  nunca  mesa  nube</code></pre>
          <h4>📝 Combinaciones de fila inferior</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>zumba  cebra  novia  cambio
mueve  buzo  zanja  nación
vuelve  cien  bien  común</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Escribe cada palabra 3 veces. La primera vez despacio, la segunda a velocidad normal, la tercera lo más rápido que puedas.</p>
          </div>
        `},
        { tag: 'Errores comunes', html: `
          <h3>🚫 Errores comunes al usar la fila inferior</h3>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Usar el dedo equivocado</h5>
              <p>Por ejemplo, pulsar X con el medio en vez del anular. Cada tecla tiene su dedo.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Mirar el teclado</h5>
              <p>Si miras, nunca aprenderás. Confía en tus dedos, aunque al principio sea lento.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Mover toda la mano</h5>
              <p>Solo los dedos se estiran hacia abajo. La mano no se desplaza.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Saltarse la fila home</h5>
              <p>Siempre vuelve a la fila home después de pulsar una tecla inferior.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">💪</span>
            <p><strong>Ejercicio diario:</strong> Practica 10 minutos al día. Escribe el abecedario completo en minúsculas: <code>a b c d e f g h i j k l m n ñ o p q r s t u v w x y z</code>. Nota qué dedos bajan a la fila inferior.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Fila inferior', hint: '¿Qué teclas forman la fila inferior del teclado?' },
        { term: 'Tecla Z', hint: '¿Qué dedo pulsa la tecla Z?' },
        { term: 'Tecla X', hint: '¿Qué dedo pulsa la tecla X?' },
        { term: 'Tecla C', hint: '¿Qué dedo pulsa la tecla C?' },
        { term: 'Tecla V', hint: '¿Qué dedo pulsa la tecla V?' },
        { term: 'Tecla B', hint: '¿Qué dedo pulsa la tecla B?' },
        { term: 'Fila home', hint: '¿Cuáles son las teclas de la fila home y por qué se llaman así?' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: 'La fila inferior del teclado contiene las teclas:', options: [
          { value: 'a', label: 'QWERTYUIOP' },
          { value: 'b', label: 'ZXCVBNM' },
          { value: 'c', label: 'ASDFGHJKLÑ' },
          { value: 'd', label: '1234567890' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '¿Qué dedo pulsa la tecla V?', options: [
          { value: 'a', label: 'Meñique izquierdo' },
          { value: 'b', label: 'Anular izquierdo' },
          { value: 'c', label: 'Índice izquierdo' },
          { value: 'd', label: 'Pulgar izquierdo' }
        ], answer: 'c' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'La tecla M la pulsa el anular derecho.', answer: 'true' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'La tecla B la pulsa el ______ derecho.', answer: 'índice' }
      ],
      tasks: [
        { id: 'c1t1', title: '⌨️ Practica cada dedo', description: 'Escribe 5 veces cada una de estas palabras, enfocándote en usar el dedo correcto de la fila inferior: ZORRO, XILÓFONO, CASA, VACA, BOTA, NUBE, MANO. No mires el teclado.', evidence: 'Documento con las palabras escritas 5 veces cada una.' },
        { id: 'c1t2', title: '📝 Escribe un trabalenguas', description: 'Busca un trabalenguas corto que tenga letras de la fila inferior (Z, X, C, V, B, N, M). Escríbelo 3 veces sin mirar el teclado. Ejemplo: "El cielo está enladrillado, ¿quién lo desenladrillará?".', evidence: 'Captura del trabalenguas escrito.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre la fila inferior.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La tecla C la pulsa:', options: [
            { value: 'a', label: 'El meñique izquierdo' },
            { value: 'b', label: 'El medio izquierdo' },
            { value: 'c', label: 'El índice izquierdo' },
            { value: 'd', label: 'El anular izquierdo' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál de estas teclas pertenece a la fila inferior?', options: [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'M' },
            { value: 'c', label: 'O' },
            { value: 'd', label: 'Q' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La tecla Z la pulsa el meñique izquierdo.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'La tecla N la pulsa:', options: [
            { value: 'a', label: 'El índice derecho' },
            { value: 'b', label: 'El medio derecho' },
            { value: 'c', label: 'El anular derecho' },
            { value: 'd', label: 'El meñique derecho' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Después de pulsar una tecla de la fila inferior, los dedos deben volver a la fila _______.', answer: 'home' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🧩',
      title: 'Combinación de filas completas',
      tagline: 'Combina la fila home, superior e inferior para escribir palabras completas.',
      info: [
        { tag: 'Repaso de filas', html: `
          <h3>🔄 Recordemos las 3 filas principales</h3>
          <p>El teclado tiene <strong>3 filas de letras</strong> que debes dominar:</p>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Fila superior:   Q W E R T Y U I O P
Fila home:       A S D F G H J K L Ñ
Fila inferior:   Z X C V B N M</code></pre>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🏠</div>
              <h5>Fila home</h5>
              <p>Posición de descanso. Dedos sobre ASDF - JKLÑ.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⬆️</div>
              <h5>Fila superior</h5>
              <p>Los dedos suben desde la fila home. Letras Q-P.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⬇️</div>
              <h5>Fila inferior</h5>
              <p>Los dedos bajan desde la fila home. Letras Z-M.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Regla clave:</strong> Los dedos SIEMPRE vuelven a la fila home después de pulsar cualquier tecla.</p>
          </div>
        `},
        { tag: 'Movimiento de dedos', html: `
          <h3>🖐️ Cómo se mueven los dedos</h3>
          <p>Cada dedo tiene <strong>3 teclas</strong> que debe controlar: una en la fila superior, una en la home y una en la inferior.</p>
          <h4>👈 Mano izquierda</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🤏</div>
              <h5>Meñique (A)</h5>
              <p>Sube a Q, baja a Z.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Anular (S)</h5>
              <p>Sube a W, baja a X.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Medio (D)</h5>
              <p>Sube a E, baja a C.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Índice (F)</h5>
              <p>Sube a R o T, baja a V o B.</p>
            </div>
          </div>
          <h4>👉 Mano derecha</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Índice (J)</h5>
              <p>Sube a Y o U, baja a B o N.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Medio (K)</h5>
              <p>Sube a I, baja a N.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☝️</div>
              <h5>Anular (L)</h5>
              <p>Sube a O, baja a M.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🤏</div>
              <h5>Meñique (Ñ)</h5>
              <p>Sube a P, no baja.</p>
            </div>
          </div>
        `},
        { tag: 'Combinaciones', html: `
          <h3>🧩 Combinaciones comunes de filas</h3>
          <p>Muchas palabras en español combinan letras de las 3 filas. Veamos ejemplos:</p>
          <h4>📝 Palabras con fila home + superior</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>queso  (Q-superior, U-superior, E-superior, S-home, O-superior)
piedra (P-superior, I-superior, E-superior, D-home, R-superior, A-home)
puesto (P-superior, U-superior, E-superior, S-home, T-superior, O-superior)</code></pre>
          <h4>📝 Palabras con fila home + inferior</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>casa   (C-inferior, A-home, S-home, A-home)
mundo  (M-inferior, U-superior, N-inferior, D-home, O-superior)
vaca   (V-inferior, A-home, C-inferior, A-home)</code></pre>
          <h4>📝 Palabras que usan las 3 filas</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>trabajo  computadora  teclado  escribir
pantalla  documento  carpeta  archivo
biblioteca  escuela  maestro  estudiante</code></pre>
        `},
        { tag: 'Práctica guiada', html: `
          <h3>🎯 Práctica guiada: combinando filas</h3>
          <p>Vamos a practicar palabras que usan diferentes filas. Sigue estos pasos:</p>
          <h4>📋 Palabras de 4 letras (fáciles)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>hola  casa  mesa  pelo  gato  mano
silla  perro  libro  campo  puerta  verde</code></pre>
          <h4>📋 Palabras de 5-6 letras (medias)</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>escuela  ventana  cuaderno  lámpara
película  teléfono  computo  escribir
plástico  amistad  corazón  hermoso</code></pre>
          <div class="slide-info">
            <span class="icon">⏱️</span>
            <p><strong>Ritmo sugerido:</strong> Escribe cada palabra en 2 segundos. Si te toma más, repite hasta lograr fluidez. No mires el teclado.</p>
          </div>
        `},
        { tag: 'Ejercicio de fluidez', html: `
          <h3>🏋️ Ejercicio de fluidez</h3>
          <p>Ahora vamos a practicar frases completas. Estas frases usan letras de todas las filas.</p>
          <h4>📝 Frases para practicar</h4>
          <div class="slide-info">
            <span class="icon">📖</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El perro corre por el campo verde."<br>
              "Mi casa tiene una puerta grande."<br>
              "El estudiante escribe en su cuaderno."<br>
              "La biblioteca tiene muchos libros."<br>
              "El teléfono suena en la mañana."
            </p>
          </div>
          <h4>✅ Pasos</h4>
          <ol>
            <li>Escribe cada frase <strong>3 veces</strong>.</li>
            <li>La primera vez despacio, enfócate en la técnica.</li>
            <li>La segunda vez a velocidad normal.</li>
            <li>La tercera vez lo más rápido posible.</li>
            <li>Al terminar cada frase, toma 5 segundos de descanso.</li>
          </ol>
        `},
        { tag: 'Errores y consejos', html: `
          <h3>🚫 Errores al combinar filas</h3>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>No volver a la fila home</h5>
              <p>Si dejas los dedos en otra fila, te confundes. Siempre vuelve a ASDF - JKLÑ.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Mover la muñeca</h5>
              <p>Las muñecas deben estar quietas. Solo los dedos se estiran hacia arriba o abajo.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Usar siempre el mismo dedo</h5>
              <p>No uses el índice para todo. Cada dedo tiene sus teclas asignadas.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Consejo del día:</strong> Pon música relajante de fondo. El ritmo de la música te ayuda a mantener un ritmo constante al escribir. ¡Inténtalo!</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Fila superior', hint: '¿Qué teclas forman la fila superior del teclado?' },
        { term: 'Meñique izquierdo', hint: '¿A qué teclas sube y baja el meñique izquierdo?' },
        { term: 'Índice derecho', hint: '¿Qué teclas de la fila superior e inferior controla el índice derecho?' },
        { term: 'Movimiento de dedos', hint: 'Explica cómo se mueven los dedos desde la fila home a las otras filas.' },
        { term: 'Anular derecho', hint: '¿Qué tecla de la fila superior y de la inferior controla el anular derecho?' },
        { term: 'Volver a home', hint: '¿Por qué es importante volver a la fila home después de cada pulsación?' },
        { term: 'Ritmo constante', hint: '¿Cómo ayuda la música a mejorar el ritmo al escribir?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: '¿Cuál es la fila de descanso de los dedos?', options: [
          { value: 'a', label: 'Fila superior' },
          { value: 'b', label: 'Fila home' },
          { value: 'c', label: 'Fila inferior' },
          { value: 'd', label: 'Fila de números' }
        ], answer: 'b' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: 'El anular izquierdo (S) sube a la tecla:', options: [
          { value: 'a', label: 'Q' },
          { value: 'b', label: 'W' },
          { value: 'c', label: 'E' },
          { value: 'd', label: 'R' }
        ], answer: 'b' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'El índice derecho controla tanto la fila superior como la inferior.', answer: 'true' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'Después de pulsar una tecla, los dedos deben volver a la fila _______.', answer: 'home' }
      ],
      tasks: [
        { id: 'c2t1', title: '✍️ Escribe un cuento corto', description: 'Escribe un cuento de 5 líneas sobre un tema que te guste (animales, deportes, amigos). Usa palabras que tengan letras de las 3 filas. No mires el teclado.', evidence: 'El cuento escrito en un documento.' },
        { id: 'c2t2', title: '📊 Mide tu tiempo', description: 'Escribe las siguientes palabras lo más rápido que puedas: TRABAJO, COMPUTADORA, TECLADO, ESCRIBIR, PANTALLA, DOCUMENTO, ESCUELA, BIBLIOTECA. Crónometra cuánto tiempo te toma. Luego repite 2 veces más y compara.', evidence: 'Tabla con los 3 tiempos.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre combinación de filas.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Los dedos deben descansar en la fila:', options: [
            { value: 'a', label: 'Superior' },
            { value: 'b', label: 'Home' },
            { value: 'c', label: 'Inferior' },
            { value: 'd', label: 'Numérica' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'El meñique izquierdo sube a la tecla:', options: [
            { value: 'a', label: 'W' },
            { value: 'b', label: 'E' },
            { value: 'c', label: 'Q' },
            { value: 'd', label: 'R' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Al escribir, las muñecas deben moverse hacia arriba y abajo.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'El medio derecho (K) sube a la tecla:', options: [
            { value: 'a', label: 'U' },
            { value: 'b', label: 'I' },
            { value: 'c', label: 'O' },
            { value: 'd', label: 'P' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La fila de letras que está arriba de la fila home se llama fila _______.', answer: 'superior' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '❓',
      title: 'Uso de comas, signos de interrogación y exclamación',
      tagline: 'Aprende a escribir los signos de puntuación básicos con buena técnica.',
      info: [
        { tag: 'Signos en el teclado', html: `
          <h3>⌨️ Los signos de puntuación en el teclado</h3>
          <p>Hoy vamos a aprender a escribir <strong>3 signos importantes</strong> que usamos todos los días al escribir:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">,</div>
              <h5>Coma</h5>
              <p>Separa elementos de una lista o hace pausas cortas. Está en la fila inferior, al lado de la M.</p>
            </div>
            <div class="grid-item">
              <div class="icon">¿?</div>
              <h5>Interrogación</h5>
              <p>Para hacer preguntas. El signo de apertura (¿) y cierre (?) están en la fila superior.</p>
            </div>
            <div class="grid-item">
              <div class="icon">¡!</div>
              <h5>Exclamación</h5>
              <p>Para expresar emociones. El signo de apertura (¡) y cierre (!) están en la fila superior.</p>
            </div>
          </div>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Fila superior: ... P ¡ ¿  (con Shift)
Fila home:     ... L Ñ
Fila inferior: ... M , . -</code></pre>
        `},
        { tag: 'La coma', html: `
          <h3>📝 La coma (,)</h3>
          <p>La <strong>coma</strong> es el signo de puntuación más usado después del punto.</p>
          <h4>⌨️ ¿Dónde está y cómo se pulsa?</h4>
          <ul>
            <li>Está en la <strong>fila inferior</strong>, a la derecha de la tecla M.</li>
            <li>La pulsa el <strong>anular derecho</strong> (el mismo dedo que pulsa L y O).</li>
            <li>Se estira el dedo hacia abajo y a la derecha desde L.</li>
          </ul>
          <h4>💡 Usos de la coma</h4>
          <ul>
            <li>Separar elementos de una lista: "Compré pan, leche, huevos y fruta."</li>
            <li>Antes de conectores: "Estudié mucho, pero no terminé."</li>
            <li>Separar el vocativo: "María, ven aquí."</li>
            <li>Enumerar lugares o ideas: "Visité México, Guatemala y Costa Rica."</li>
          </ul>
          <div class="slide-info">
            <span class="icon">⌨️</span>
            <p><strong>Técnica:</strong> Después de escribir la coma, SIEMPRE deja un espacio antes de continuar escribiendo.</p>
          </div>
        `},
        { tag: 'Interrogación', html: `
          <h3>❓ Signos de interrogación (¿?)</h3>
          <p>En español, las preguntas llevan <strong>dos signos</strong>: uno de apertura (¿) y uno de cierre (?).</p>
          <h4>⌨️ ¿Dónde están?</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">¿</div>
              <h5>Signo de apertura ¿</h5>
              <p>Está en la fila superior. Se pulsa con <strong>Shift + tecla</strong> (a la derecha de la P). Lo pulsa el <strong>meñique derecho</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">?</div>
              <h5>Signo de cierre ?</h5>
              <p>Está en la misma tecla. También se pulsa con <strong>Shift + tecla</strong>. Lo pulsa el <strong>meñique derecho</strong>.</p>
            </div>
          </div>
          <h4>💡 Cómo escribir una pregunta</h4>
          <ol>
            <li>Presiona Shift con el <strong>meñique izquierdo</strong>.</li>
            <li>Mientras mantienes Shift, pulsa la tecla ¿? con el <strong>meñique derecho</strong>.</li>
            <li>Suelta Shift.</li>
            <li>Escribe la pregunta normalmente.</li>
            <li>Al final, presiona Shift + la misma tecla para el ? de cierre.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error común:</strong> Olvidar el signo de apertura (¿). En español TODAS las preguntas llevan ambos signos.</p>
          </div>
        `},
        { tag: 'Exclamación', html: `
          <h3>❗ Signos de exclamación (¡!)</h3>
          <p>Las exclamaciones expresan <strong>emociones</strong>: sorpresa, alegría, enojo, admiración.</p>
          <h4>⌨️ ¿Dónde están?</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">¡</div>
              <h5>Signo de apertura ¡</h5>
              <p>Está en la misma tecla que ¿, pero sin Shift. Lo pulsa el <strong>meñique derecho</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">!</div>
              <h5>Signo de cierre !</h5>
              <p>Está en la misma tecla que ?, sin Shift. Lo pulsa el <strong>meñique derecho</strong>.</p>
            </div>
          </div>
          <h4>💡 Diferencia con la interrogación</h4>
          <ul>
            <li><strong>¿? (con Shift):</strong> haces <strong>preguntas</strong>.</li>
            <li><strong>¡! (sin Shift):</strong> haces <strong>exclamaciones</strong>.</li>
          </ul>
          <h4>✏️ Ejemplos</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>¡Hola!         ¿Cómo estás?
¡Qué bonito!   ¿Qué hora es?
¡Feliz cumpleaños!  ¿Te gusta el chocolate?</code></pre>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Practica oraciones con signos</h3>
          <p>Escribe estas oraciones usando los signos correctamente.</p>
          <h4>📝 Oraciones con coma</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Compré manzanas, peras, uvas y sandía.
Mi hermana, la mayor, estudia medicina.
Guatemala, Honduras, El Salvador y Nicaragua.</code></pre>
          <h4>📝 Oraciones con interrogación</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>¿Cómo te llamas?
¿Dónde vives?
¿Cuántos años tienes?
¿Te gusta la música?</code></pre>
          <h4>📝 Oraciones con exclamación</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>¡Qué día tan bonito!
¡Me encanta la pizza!
¡Feliz cumpleaños, amigo!
¡Qué sorpresa verte aquí!</code></pre>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip:</strong> Practica escribir estas oraciones 3 veces cada una. La primera vez despacio, enfócate en encontrar las teclas de los signos sin mirar.</p>
          </div>
        `},
        { tag: 'Combinando todo', html: `
          <h3>🎯 Combinando comas, preguntas y exclamaciones</h3>
          <p>Ahora vamos a escribir textos completos que usan todos los signos.</p>
          <h4>📝 Diálogo corto</h4>
          <div class="slide-info">
            <span class="icon">💬</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              — ¡Hola, María! ¿Cómo estás?<br>
              — ¡Hola, Juan! Estoy muy bien, ¿y tú?<br>
              — Bien, gracias. ¿Quieres ir al parque?<br>
              — ¡Claro que sí! Vamos ahora mismo.<br>
              — ¡Qué bien! Trae tu bicicleta, tu pelota y tu agua.<br>
              — ¡Buena idea! Nos vemos en la esquina, ¿verdad?<br>
              — ¡Sí, allí nos vemos!
            </p>
          </div>
          <h4>✅ Instrucciones</h4>
          <ol>
            <li>Escribe el diálogo completo <strong>2 veces</strong>.</li>
            <li>La primera vez, concéntrate en la técnica de cada signo.</li>
            <li>La segunda vez, intenta mantener un ritmo fluido.</li>
            <li>No mires el teclado. Si te pierdes, busca los relieves en F y J.</li>
          </ol>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Recuerda:</strong> Después de una coma siempre va un espacio. Después de ¿? y ¡! también va un espacio, excepto si sigue otro signo.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Coma', hint: '¿Qué dedo pulsa la tecla de la coma?' },
        { term: 'Signo de interrogación', hint: '¿Con qué tecla se escribe ¿ y ?, y con qué mano se pulsa Shift?' },
        { term: 'Signo de exclamación', hint: '¿Qué diferencia hay entre escribir ¡! y ¿?' },
        { term: 'Shift', hint: '¿Qué dedo de la mano izquierda presiona Shift?' },
        { term: 'Meñique derecho', hint: '¿Qué teclas especiales controla el meñique derecho?' },
        { term: 'Espacio después de coma', hint: '¿Cuántos espacios se dejan después de una coma?' },
        { term: 'Apertura y cierre', hint: '¿Por qué en español las preguntas llevan DOS signos?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: 'La coma (,) está ubicada en:', options: [
          { value: 'a', label: 'La fila superior' },
          { value: 'b', label: 'La fila home' },
          { value: 'c', label: 'La fila inferior, al lado de la M' },
          { value: 'd', label: 'La fila de números' }
        ], answer: 'c' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: 'El signo de interrogación de apertura (¿) se escribe con:', options: [
          { value: 'a', label: 'Shift + tecla (meñique derecho)' },
          { value: 'b', label: 'Solo la tecla sin Shift' },
          { value: 'c', label: 'Ctrl + tecla' },
          { value: 'd', label: 'Alt + tecla' }
        ], answer: 'a' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'Después de una coma siempre debe ir un espacio en blanco.', answer: 'true' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'El signo de exclamación de apertura (¡) se escribe sin _______.', answer: 'Shift' }
      ],
      tasks: [
        { id: 'c3t1', title: '✍️ Escribe 5 preguntas y 5 exclamaciones', description: 'Escribe 5 preguntas sobre tus gustos (comida, música, deportes) y 5 exclamaciones sobre tu día. Usa comas donde sea necesario. No mires el teclado.', evidence: 'Documento con las preguntas y exclamaciones.' },
        { id: 'c3t2', title: '💬 Crea un diálogo', description: 'Escribe un diálogo corto entre 2 personas (mínimo 6 intercambios) que use comas, signos de interrogación y de exclamación. Ejemplo: una conversación en una tienda.', evidence: 'El diálogo completo en un documento.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre comas, interrogación y exclamación.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La coma la pulsa:', options: [
            { value: 'a', label: 'El meñique derecho' },
            { value: 'b', label: 'El anular derecho' },
            { value: 'c', label: 'El índice derecho' },
            { value: 'd', label: 'El pulgar derecho' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'El signo de interrogación de cierre (?) se escribe:', options: [
            { value: 'a', label: 'Sin Shift' },
            { value: 'b', label: 'Con Shift' },
            { value: 'c', label: 'Con Ctrl' },
            { value: 'd', label: 'Con Alt' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Las preguntas en español solo llevan el signo de cierre (?).', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'Los signos de interrogación y exclamación los pulsa:', options: [
            { value: 'a', label: 'El índice derecho' },
            { value: 'b', label: 'El medio derecho' },
            { value: 'c', label: 'El meñique derecho' },
            { value: 'd', label: 'El anular derecho' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'La coma se usa para separar elementos de una _______.', answer: 'lista' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '🎤',
      title: 'Dictado corto en tiempo real',
      tagline: 'Practica escribir al ritmo de un dictado sin mirar el teclado.',
      info: [
        { tag: '¿Qué es el dictado?', html: `
          <h3>🎤 ¿Qué es un dictado de mecanografía?</h3>
          <p>Un <strong>dictado</strong> en mecanografía consiste en escribir lo que alguien dice en voz alta, en tiempo real, sin pausar y sin mirar el teclado.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👂</div>
              <h5>Escucha</h5>
              <p>Presta atención a lo que se dice. No te adelantes ni te atrases.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧠</div>
              <h5>Procesa</h5>
              <p>Tu cerebro convierte el sonido en palabras y las palabras en movimientos de dedos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Escribe</h5>
              <p>Tus dedos escriben automáticamente sin que pienses en cada tecla.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo:</strong> Escribir 20 palabras por minuto en dictado, con máximo 2 errores por frase.</p>
          </div>
        `},
        { tag: 'Preparación', html: `
          <h3>🧘 Prepárate para el dictado</h3>
          <p>Antes de empezar cualquier dictado, sigue estos pasos:</p>
          <h4>✅ Paso 1: Postura correcta</h4>
          <ul>
            <li>Espalda recta, pies en el suelo, codos a 90 grados.</li>
            <li>Manos sobre la fila home (ASDF - JKLÑ).</li>
            <li>Mirada en la pantalla, NUNCA en el teclado.</li>
          </ul>
          <h4>✅ Paso 2: Dedos en posición</h4>
          <ul>
            <li>Índices sobre F y J (busca el relieve táctil).</li>
            <li>Pulgares sobre la barra espaciadora.</li>
            <li>Dedos ligeramente curvados, relajados.</li>
          </ul>
          <h4>✅ Paso 3: Mentalidad</h4>
          <ul>
            <li>No te detengas en los errores. Sigue escribiendo.</li>
            <li>Si te atrasas, salta la palabra y continúa.</li>
            <li>Respira profundo antes de empezar.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Si te equivocas en una palabra, <strong>no borres</strong>. Sigue adelante. Lo importante es mantener el ritmo y mejorar después.</p>
          </div>
        `},
        { tag: 'Dictado 1', html: `
          <h3>🎤 Dictado corto 1: La casa</h3>
          <p>Voy a leer un texto corto. Escucha primero, luego escríbelo mientras lo leo de nuevo.</p>
          <h4>📖 Texto del dictado</h4>
          <div class="slide-info">
            <span class="icon">📖</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "Mi casa es grande y bonita. Tiene tres ventanas, una puerta blanca y un jardín con flores. En la sala hay un sofá, una mesa y dos sillas. La cocina es pequeña pero muy limpia. Me gusta mi casa porque allí vivo con mi familia."
            </p>
          </div>
          <h4>📊 Datos del dictado</h4>
          <ul>
            <li><strong>Palabras:</strong> 40 aproximadamente.</li>
            <li><strong>Tiempo estimado:</strong> 2 minutos (a 20 PPM).</li>
            <li><strong>Signos que usa:</strong> coma, punto, mayúsculas.</li>
          </ul>
        `},
        { tag: 'Dictado 2', html: `
          <h3>🎤 Dictado corto 2: La escuela</h3>
          <p>Este segundo dictado incluye signos de interrogación y exclamación.</p>
          <h4>📖 Texto del dictado</h4>
          <div class="slide-info">
            <span class="icon">📖</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "¡Buenos días, amigos! ¿Cómo están hoy? Yo estoy muy contento porque vamos a aprender cosas nuevas. La escuela es un lugar especial donde estudiamos, jugamos y hacemos amigos. ¿Cuál es tu materia favorita? La mía es la clase de TAC, ¡me encanta escribir en el teclado!"
            </p>
          </div>
          <h4>📊 Datos del dictado</h4>
          <ul>
            <li><strong>Palabras:</strong> 45 aproximadamente.</li>
            <li><strong>Tiempo estimado:</strong> 2 minutos 15 segundos.</li>
            <li><strong>Signos que usa:</strong> coma, interrogación, exclamación, punto.</li>
          </ul>
        `},
        { tag: 'Cómo mejorar', html: `
          <h3>📈 Cómo mejorar en los dictados</h3>
          <p>La práctica del dictado es una de las mejores formas de mejorar tu velocidad y precisión.</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👂</div>
              <h5>Escucha activa</h5>
              <p>Concéntrate en las palabras, no en los sonidos. Trata de anticipar la palabra completa.</p>
            </div>
            <div class="grid-item">
              <div class="icon">✏️</div>
              <h5>Practica a diario</h5>
              <p>5-10 minutos de dictado cada día mejora más que 1 hora una vez a la semana.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Corrige después</h5>
              <p>Al terminar, revisa tus errores. ¿Qué dedo se equivocó? ¿Qué tecla te costó encontrar?</p>
            </div>
            <div class="grid-item">
              <div class="icon">📊</div>
              <h5>Lleva registro</h5>
              <p>Anota tu velocidad y tus errores cada día. Ver tu progreso te motiva a seguir.</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Ejercicio recomendado:</strong> Pídele a un familiar que te lea un párrafo de un libro o noticia. Tú escríbelo en tiempo real. Cada día que pase, pídele que lea un poco más rápido.</p>
          </div>
        `},
        { tag: 'Autoevaluación', html: `
          <h3>📋 Autoevaluación del dictado</h3>
          <p>Después de cada dictado, evalúate con esta tabla:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🟢</div>
              <h5>Excelente</h5>
              <p>0-2 errores. Escribiste sin mirar el teclado. Mantuviste el ritmo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🟡</div>
              <h5>Bien</h5>
              <p>3-5 errores. Buen ritmo, pero necesitas practicar algunas teclas específicas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🟠</div>
              <h5>Regular</h5>
              <p>6-10 errores. Te atrasaste o miraste el teclado. Repite el dictado más despacio.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔴</div>
              <h5>Practica más</h5>
              <p>Más de 10 errores. Vuelve a las clases 1-3 para reforzar las bases.</p>
            </div>
          </div>
          <h4>📝 Registro de progreso</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Fecha       | Dictado     | Errores | PPM
-----------|-------------|---------|-----
Lunes      | La casa     |    4    | 18
Martes     | La escuela  |    3    | 20
Miércoles  | Mi familia  |    2    | 22</code></pre>
        `}
      ],
      keywords: [
        { term: 'Dictado', hint: '¿Qué habilidad principal se practica con los dictados?' },
        { term: 'Ritmo', hint: '¿Por qué es mejor seguir adelante que borrar los errores en un dictado?' },
        { term: 'Escucha activa', hint: '¿En qué consiste la escucha activa durante un dictado?' },
        { term: 'Postura', hint: '¿Cuáles son los 3 puntos clave de la postura correcta?' },
        { term: 'PPM en dictado', hint: '¿Cuál es la meta de palabras por minuto en dictado para esta clase?' },
        { term: 'Autoevaluación', hint: '¿Qué puntaje de errores se considera "Excelente" en la autoevaluación?' },
        { term: 'Práctica diaria', hint: '¿Cuántos minutos diarios de dictado recomienda esta clase?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: 'Al cometer un error en un dictado, lo mejor es:', options: [
          { value: 'a', label: 'Borrar y corregir inmediatamente' },
          { value: 'b', label: 'Seguir adelante sin detenerse' },
          { value: 'c', label: 'Empezar de nuevo' },
          { value: 'd', label: 'Mirar el teclado para asegurarse' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'mc', prompt: '¿Cuántos minutos al día se recomienda practicar dictado?', options: [
          { value: 'a', label: '30 minutos' },
          { value: 'b', label: '5-10 minutos' },
          { value: 'c', label: '1 hora' },
          { value: 'd', label: '2 minutos' }
        ], answer: 'b' },
        { id: 'c4e3', n: 3, type: 'tf', prompt: 'En un dictado, debes mirar el teclado para no equivocarte.', answer: 'false' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'La meta de velocidad en dictado para esta clase es de ______ palabras por minuto.', answer: '20' }
      ],
      tasks: [
        { id: 'c4t1', title: '🎤 Dictado con un compañero', description: 'Pídele a un familiar o amigo que te dicte el siguiente texto: "El sol brilla en el cielo azul. Los pájaros cantan en los árboles. ¡Qué día tan hermoso! ¿Te gusta la naturaleza? A mí me encanta salir al parque, jugar y respirar aire fresco." Escríbelo sin mirar el teclado.', evidence: 'Captura del texto escrito y el número de errores que tuviste.' },
        { id: 'c4t2', title: '📊 Registro semanal', description: 'Durante una semana, haz un dictado cada día. Puedes usar los textos de esta clase o pedirle a alguien que te dicte. Lleva un registro de: fecha, texto, número de errores y PPM.', evidence: 'Tabla con los 7 registros.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre dictado en tiempo real.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Al escribir un dictado, la mirada debe estar en:', options: [
            { value: 'a', label: 'El teclado' },
            { value: 'b', label: 'La pantalla' },
            { value: 'c', label: 'El papel' },
            { value: 'd', label: 'Las manos' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Si te equivocas en un dictado, debes:', options: [
            { value: 'a', label: 'Borrar inmediatamente' },
            { value: 'b', label: 'Seguir adelante' },
            { value: 'c', label: 'Detener el dictado' },
            { value: 'd', label: 'Mirar el teclado' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'El dictado ayuda a mejorar la velocidad y la precisión al escribir.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Un puntaje de 0-2 errores se considera:', options: [
            { value: 'a', label: 'Excelente' },
            { value: 'b', label: 'Regular' },
            { value: 'c', label: 'Malo' },
            { value: 'd', label: 'Practica más' }
          ], answer: 'a' },
          { id: 'q5', type: 'fill', prompt: 'La habilidad de concentrarse en las palabras que se escuchan se llama escucha _______.', answer: 'activa' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '⚡',
      title: 'Práctica avanzada de velocidad',
      tagline: 'Eleva tu velocidad al escribir con técnicas avanzadas y ejercicios desafiantes.',
      info: [
        { tag: '¿Qué es la velocidad?', html: `
          <h3>⚡ ¿Qué es la velocidad de mecanografía?</h3>
          <p>La velocidad de mecanografía se mide en <strong>palabras por minuto (PPM)</strong>. Una palabra equivale a <strong>5 caracteres</strong> incluyendo espacios.</p>
          <h4>📊 Metas para Primero Básico</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🐢</div>
              <h5>Inicio</h5>
              <p>10-15 PPM. Es normal al comenzar. No te preocupes por la velocidad, preocúpate por la técnica.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🚶</div>
              <h5>Meta mínima</h5>
              <p>20-25 PPM. Puedes escribir oraciones simples con fluidez.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏃</div>
              <h5>Meta del grado</h5>
              <p>30-35 PPM. Escribes sin mirar y con pocos errores.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🚀</div>
              <h5>Meta avanzada</h5>
              <p>40+ PPM. ¡Ya eres muy rápido! Sigue practicando.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>La velocidad llega con la práctica.</strong> No trates de ir rápido al principio. Primero la técnica correcta, luego la velocidad llegará sola.</p>
          </div>
        `},
        { tag: 'Técnicas avanzadas', html: `
          <h3>🚀 Técnicas para aumentar la velocidad</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👀</div>
              <h5>1. Mira la pantalla</h5>
              <p>Nunca mires el teclado. Confía en la memoria muscular de tus dedos.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📄</div>
              <h5>2. Lee adelantado</h5>
              <p>Mientras escribes una palabra, tu vista ya debe estar leyendo la siguiente.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🖐️</div>
              <h5>3. Dedos ligeros</h5>
              <p>No golpees las teclas. Tus dedos deben tocar suavemente, como si acariciaran el teclado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎵</div>
              <h5>4. Ritmo constante</h5>
              <p>Mantén un ritmo regular. No aceleres y frenes. Como un metrónomo: tic-tic-tic constante.</p>
            </div>
          </div>
          <h4>💡 Ejercicio de dedos ligeros</h4>
          <p>Coloca las manos sobre la fila home. Sin presionar, solo toca cada tecla muy suavemente: A-S-D-F-J-K-L-Ñ. Repite hasta que sientas que tus dedos flotan.</p>
        `},
        { tag: 'Combinaciones rápidas', html: `
          <h3>🔤 Combinaciones de letras que aparecen mucho</h3>
          <p>En español hay combinaciones de letras que se repiten mucho. Practicarlas te hará más rápido.</p>
          <h4>📋 Combinaciones comunes</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Vocales + consonante</h5>
              <p>la, le, li, lo, lu<br>ma, me, mi, mo, mu<br>ta, te, ti, to, tu</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Consonante + vocal</h5>
              <p>al, el, il, ol, ul<br>am, em, im, om, um<br>as, es, is, os, us</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Dos consonantes</h5>
              <p>br, bl, cr, cl, dr, gr, gl, pr, pl, tr, tl</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Finales comunes</h5>
              <p>ción, sión, dad, mente, miento, ción</p>
            </div>
          </div>
          <h4>📝 Practica estas palabras</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>brazo  blanco  creador  clima  drama
grano  globo  prueba  plato  trabajo
lección  pasión  bondad  fácilmente
pensamiento  educación  comunicación</code></pre>
        `},
        { tag: 'Carrera de velocidad', html: `
          <h3>⏱️ Carrera de velocidad: el reto del minuto</h3>
          <p>Vamos a hacer un ejercicio clásico: escribir todo lo que puedas en <strong>1 minuto</strong>.</p>
          <h4>📝 Texto para la carrera</h4>
          <div class="slide-info">
            <span class="icon">⌨️</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El hombre trabaja en el campo desde la mañana. Planta maíz, frijol y tomate en la tierra fértil. Cuando llega la tarde, descansa bajo la sombra de un gran árbol. Su familia le lleva agua fresca y comida caliente. ¡Qué hermosa es la vida en el campo!"
            </p>
          </div>
          <h4>✅ Instrucciones</h4>
          <ol>
            <li>Prepara un cronómetro de 1 minuto.</li>
            <li>Coloca las manos en la fila home.</li>
            <li>Di "¡Ya!" y empieza a escribir y cronometrar al mismo tiempo.</li>
            <li>Al terminar el minuto, cuenta las palabras que escribiste.</li>
            <li>Resta 1 palabra por cada error.</li>
            <li>Ese es tu puntaje de PPM.</li>
          </ol>
        `},
        { tag: 'Medición y progreso', html: `
          <h3>📊 Mide tu progreso cada semana</h3>
          <p>Llevar un registro de tu velocidad te ayuda a ver cómo mejoras.</p>
          <h4>📋 Tabla de progreso semanal</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>Semana  | PPM brutas | Errores | PPM netas
--------|------------|---------|----------
Semana 1|     25      |    5    |    20
Semana 2|     28      |    4    |    24
Semana 3|     32      |    3    |    29
Semana 4|     35      |    2    |    33</code></pre>
          <h4>📝 Cómo calcular PPM netas</h4>
          <p><code>PPM netas = PPM brutas - errores</code></p>
          <p>Ejemplo: escribiste 25 palabras pero tuviste 5 errores. Tus PPM netas son 20.</p>
          <div class="slide-success">
            <span class="icon">🎯</span>
            <p><strong>Meta para esta clase:</strong> Al terminar, debes haber alcanzado al menos <strong>25 PPM netas</strong> en el texto de práctica.</p>
          </div>
        `},
        { tag: 'Consejos finales', html: `
          <h3>💪 Consejos finales para la velocidad</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>Repite palabras difíciles</h5>
              <p>Si una palabra te cuesta, escríbela 10 veces seguidas hasta que salga fluida.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎮</div>
              <h5>Usa juegos de mecanografía</h5>
              <p>Typing.com, Keybr.com o NitroType tienen juegos divertidos para practicar.</p>
            </div>
            <div class="grid-item">
              <div class="icon">☕</div>
              <h5>Toma descansos</h5>
              <p>Cada 15 minutos de práctica, descansa 2 minutos. Mueve los dedos y las muñecas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏆</div>
              <h5>Celebra tu progreso</h5>
              <p>Cada PPM que ganas es un logro. Compare tus resultados de hoy con los de la semana pasada.</p>
            </div>
          </div>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Importante:</strong> La velocidad sin precisión no sirve. Es mejor escribir 20 PPM sin errores que 40 PPM con 20 errores. Primero precisión, luego velocidad.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'PPM', hint: '¿Qué significan las siglas PPM y cómo se calculan?' },
        { term: 'Memoria muscular', hint: '¿Qué es la memoria muscular y cómo ayuda en mecanografía?' },
        { term: 'Ritmo constante', hint: '¿Por qué es mejor un ritmo constante que acelerar y frenar?' },
        { term: 'Combinaciones', hint: 'Menciona 5 combinaciones de letras comunes en español.' },
        { term: 'Precisión', hint: '¿Qué es más importante: la velocidad o la precisión? ¿Por qué?' },
        { term: 'Dedos ligeros', hint: '¿Cómo deben tocar los dedos las teclas?' },
        { term: 'PPM netas', hint: '¿Cómo se calculan las PPM netas?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: '¿Qué es más importante al empezar a aprender mecanografía?', options: [
          { value: 'a', label: 'Escribir muy rápido' },
          { value: 'b', label: 'Usar la técnica correcta' },
          { value: 'c', label: 'Mirar el teclado' },
          { value: 'd', label: 'Usar solo dos dedos' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: 'Las PPM netas se calculan:', options: [
          { value: 'a', label: 'PPM brutas + errores' },
          { value: 'b', label: 'PPM brutas - errores' },
          { value: 'c', label: 'Errores x 2' },
          { value: 'd', label: 'PPM brutas x errores' }
        ], answer: 'b' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'Para escribir más rápido, debes golpear las teclas con fuerza.', answer: 'false' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'La meta de velocidad para Primero Básico es de al menos ______ PPM netas.', answer: '25' }
      ],
      tasks: [
        { id: 'c5t1', title: '⏱️ Carrera de 1 minuto', description: 'Realiza la carrera de 1 minuto con el texto de la clase. Hazla 3 veces y registra: PPM brutas, errores y PPM netas de cada intento. Escribe en un documento los resultados.', evidence: 'Tabla con los 3 intentos y sus resultados.' },
        { id: 'c5t2', title: '🔄 Practica combinaciones', description: 'Escribe 10 veces cada una de estas combinaciones: BR, BL, CR, DR, GR, PL, TR. Luego escribe 10 palabras que contengan esas combinaciones. No mires el teclado.', evidence: 'Documento con las combinaciones y las palabras.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre velocidad de mecanografía.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La velocidad de mecanografía se mide en:', options: [
            { value: 'a', label: 'Letras por hora' },
            { value: 'b', label: 'Palabras por minuto (PPM)' },
            { value: 'c', label: 'Caracteres por día' },
            { value: 'd', label: 'Páginas por minuto' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Para escribir más rápido, tus dedos deben:', options: [
            { value: 'a', label: 'Golpear fuerte las teclas' },
            { value: 'b', label: 'Tocar suavemente las teclas' },
            { value: 'c', label: 'Descansar fuera del teclado' },
            { value: 'd', label: 'Mirar cada tecla' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Es mejor tener 40 PPM con 10 errores que 20 PPM sin errores.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'PPM netas = PPM brutas -:', options: [
            { value: 'a', label: 'Palabras' },
            { value: 'b', label: 'Errores' },
            { value: 'c', label: 'Segundos' },
            { value: 'd', label: 'Minutos' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La capacidad de los dedos de recordar dónde están las teclas se llama memoria _______.', answer: 'muscular' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Repaso general + Examen final',
      tagline: 'Repasa todo lo aprendido y demuestra tus habilidades en el examen final.',
      info: [
        { tag: 'Resumen del grado', html: `
          <h3>🎓 Lo que aprendimos en este grado</h3>
          <p>¡Felicitaciones por llegar a la última clase! Has recorrido un camino increíble. Repasemos los 5 temas principales:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Teclas inferiores</h5>
              <p>Z (meñique izq.), X (anular izq.), C (medio izq.), V (índice izq.), B (índice der.), N (medio der.), M (anular der.).</p>
            </div>
            <div class="grid-item">
              <div class="icon">🧩</div>
              <h5>Combinación de filas</h5>
              <p>Home (ASDF - JKLÑ), superior (QWERTYUIOP), inferior (ZXCVBNM). Cada dedo sube y baja desde home.</p>
            </div>
            <div class="grid-item">
              <div class="icon">❓</div>
              <h5>Comas y signos</h5>
              <p>Coma con anular derecho, ¿? con Shift + meñique derecho, ¡! sin Shift + meñique derecho.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🎤</div>
              <h5>Dictado en tiempo real</h5>
              <p>Escribir sin mirar, mantener el ritmo, no detenerse en los errores. Meta: 20 PPM.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>Velocidad avanzada</h5>
              <p>Técnica correcta, dedos ligeros, ritmo constante, combinaciones de letras. Meta: 25 PPM netas.</p>
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
            <p><strong>Recuerda:</strong> El examen es para ayudarte a saber qué tanto aprendiste. Si no obtienes 100% en el primer intento, puedes repasar y volver a hacerlo. ¡Lo importante es aprender!</p>
          </div>
        `},
        { tag: 'Después del examen', html: `
          <h3>🚀 ¿Qué sigue después?</h3>
          <p>Cuando apruebes el examen final, puedes seguir mejorando con estas prácticas:</p>
          <ul>
            <li><strong>Practica 10 minutos al día</strong> en sitios como typing.com o keybr.com.</li>
            <li><strong>Escribe un diario</strong> en el computador. Cuenta tu día usando el teclado.</li>
            <li><strong>Usa signos de puntuación</strong> en tus escritos. Comas, interrogaciones y exclamaciones.</li>
            <li><strong>Haz dictados</strong> con tus compañeros o familiares para mejorar velocidad.</li>
            <li><strong>Mide tu velocidad</strong> cada semana y celebra tu progreso.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p><strong>¡Lo lograste!</strong> Al completar este curso has dado un paso enorme hacia el dominio de la mecanografía. Sigue practicando y verás cómo cada vez es más natural y rápido.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Fila inferior', hint: '¿Qué teclas de la fila inferior controla la mano izquierda?' },
        { term: 'Combinación de filas', hint: 'Explica cómo se mueven los dedos desde la fila home a la superior e inferior.' },
        { term: 'Coma', hint: '¿Qué dedo pulsa la coma y dónde está ubicada?' },
        { term: 'Signos de interrogación', hint: '¿Con qué mano se presiona Shift para escribir ¿ y ??' },
        { term: 'Dictado', hint: '¿Cuál es la regla más importante al hacer un dictado?' },
        { term: 'PPM netas', hint: '¿Cómo se calculan las PPM netas y por qué son importantes?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: 'La tecla C de la fila inferior la pulsa:', options: [
          { value: 'a', label: 'El meñique izquierdo' },
          { value: 'b', label: 'El medio izquierdo' },
          { value: 'c', label: 'El índice izquierdo' },
          { value: 'd', label: 'El anular izquierdo' }
        ], answer: 'b' },
        { id: 'c6e2', n: 2, type: 'tf', prompt: 'Los signos de interrogación se escriben presionando Shift + la tecla correspondiente.', answer: 'true' },
        { id: 'c6e3', n: 3, type: 'mc', prompt: 'La fila home del teclado es:', options: [
          { value: 'a', label: 'ZXCVBNM' },
          { value: 'b', label: 'ASDF - JKLÑ' },
          { value: 'c', label: 'QWERTYUIOP' },
          { value: 'd', label: '1234567890' }
        ], answer: 'b' },
        { id: 'c6e4', n: 4, type: 'mc', prompt: 'Al cometer un error en un dictado debes:', options: [
          { value: 'a', label: 'Borrar y corregir' },
          { value: 'b', label: 'Seguir adelante' },
          { value: 'c', label: 'Empezar de nuevo' },
          { value: 'd', label: 'Mirar el teclado' }
        ], answer: 'b' },
        { id: 'c6e5', n: 5, type: 'fill', prompt: 'Las metas de PPM para Primero Básico son: dictado a ______ PPM y velocidad a 25 PPM netas.', answer: '20' }
      ],
      tasks: [
        { id: 'c6t1', title: '🎯 Proyecto final: Carta mecanografiada', description: 'Escribe una carta de al menos 100 palabras dirigida a un familiar o amigo. La carta debe contar qué aprendiste en TAC (Mecanografía) este grado. Usa correctamente: todas las filas del teclado, comas, signos de interrogación y exclamación. No mires el teclado mientras escribes.', evidence: 'La carta completa en un documento de Word.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Repaso final antes del examen acumulativo.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La tecla Z la pulsa:', options: [
            { value: 'a', label: 'El meñique izquierdo' },
            { value: 'b', label: 'El anular izquierdo' },
            { value: 'c', label: 'El medio izquierdo' },
            { value: 'd', label: 'El índice izquierdo' }
          ], answer: 'a' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál de estas NO es una fila del teclado?', options: [
            { value: 'a', label: 'Fila home' },
            { value: 'b', label: 'Fila superior' },
            { value: 'c', label: 'Fila inferior' },
            { value: 'd', label: 'Fila central' }
          ], answer: 'd' },
          { id: 'q3', type: 'tf', prompt: 'Los signos de exclamación (¡!) se escriben sin Shift.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'Las PPM netas se calculan como:', options: [
            { value: 'a', label: 'PPM brutas + errores' },
            { value: 'b', label: 'PPM brutas - errores' },
            { value: 'c', label: 'PPM brutas x 2' },
            { value: 'd', label: 'PPM brutas / errores' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'El dedo que pulsa la coma es el ______ derecho.', answer: 'anular' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Primero Básico',
        description: '15 preguntas cubriendo los 5 temas del grado. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Teclas inferiores) · La fila inferior del teclado contiene las teclas:', options: [{ value: 'a', label: 'QWERTYUIOP' }, { value: 'b', label: 'ZXCVBNM' }, { value: 'c', label: 'ASDFGHJKLÑ' }, { value: 'd', label: '1234567890' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Teclas inferiores) · La tecla V la pulsa:', options: [{ value: 'a', label: 'El meñique izquierdo' }, { value: 'b', label: 'El anular izquierdo' }, { value: 'c', label: 'El índice izquierdo' }, { value: 'd', label: 'El medio izquierdo' }], answer: 'c' },
          { id: 'f3', type: 'mc', prompt: 'Tema 1 (Teclas inferiores) · ¿Qué dedo pulsa la tecla N?', options: [{ value: 'a', label: 'Índice derecho' }, { value: 'b', label: 'Medio derecho' }, { value: 'c', label: 'Anular derecho' }, { value: 'd', label: 'Meñique derecho' }], answer: 'b' },
          { id: 'f4', type: 'mc', prompt: 'Tema 2 (Combinación de filas) · La posición de descanso de los dedos es la fila:', options: [{ value: 'a', label: 'Superior' }, { value: 'b', label: 'Home' }, { value: 'c', label: 'Inferior' }, { value: 'd', label: 'Numérica' }], answer: 'b' },
          { id: 'f5', type: 'tf', prompt: 'Tema 2 (Combinación de filas) · Después de pulsar una tecla, los dedos deben volver a la fila home.', answer: 'true' },
          { id: 'f6', type: 'mc', prompt: 'Tema 2 (Combinación de filas) · El meñique izquierdo sube a la tecla:', options: [{ value: 'a', label: 'W' }, { value: 'b', label: 'Q' }, { value: 'c', label: 'E' }, { value: 'd', label: 'R' }], answer: 'b' },
          { id: 'f7', type: 'mc', prompt: 'Tema 3 (Comas y signos) · La coma (,) está ubicada en:', options: [{ value: 'a', label: 'La fila superior' }, { value: 'b', label: 'La fila inferior, al lado de M' }, { value: 'c', label: 'La fila home' }, { value: 'd', label: 'La fila de números' }], answer: 'b' },
          { id: 'f8', type: 'tf', prompt: 'Tema 3 (Comas y signos) · Los signos de interrogación (¿?) se escriben sin Shift.', answer: 'false' },
          { id: 'f9', type: 'mc', prompt: 'Tema 3 (Comas y signos) · Los signos de interrogación y exclamación los pulsa:', options: [{ value: 'a', label: 'El índice derecho' }, { value: 'b', label: 'El medio derecho' }, { value: 'c', label: 'El meñique derecho' }, { value: 'd', label: 'El anular derecho' }], answer: 'c' },
          { id: 'f10', type: 'mc', prompt: 'Tema 4 (Dictado) · Cuando te equivocas en un dictado, debes:', options: [{ value: 'a', label: 'Borrar y corregir' }, { value: 'b', label: 'Seguir adelante' }, { value: 'c', label: 'Empezar de nuevo' }, { value: 'd', label: 'Detener el dictado' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Dictado) · La mirada durante un dictado debe estar en:', options: [{ value: 'a', label: 'El teclado' }, { value: 'b', label: 'La pantalla' }, { value: 'c', label: 'Las manos' }, { value: 'd', label: 'El papel' }], answer: 'b' },
          { id: 'f12', type: 'tf', prompt: 'Tema 4 (Dictado) · 0-2 errores en un dictado se considera "Excelente".', answer: 'true' },
          { id: 'f13', type: 'mc', prompt: 'Tema 5 (Velocidad) · Para escribir más rápido, los dedos deben:', options: [{ value: 'a', label: 'Golpear fuerte las teclas' }, { value: 'b', label: 'Tocar suavemente las teclas' }, { value: 'c', label: 'Estar siempre levantados' }, { value: 'd', label: 'Moverse sin ritmo' }], answer: 'b' },
          { id: 'f14', type: 'mc', prompt: 'Tema 5 (Velocidad) · PPM netas se calcula como:', options: [{ value: 'a', label: 'PPM brutas + errores' }, { value: 'b', label: 'PPM brutas - errores' }, { value: 'c', label: 'Errores x 2' }, { value: 'd', label: 'PPM brutas x errores' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · La posición de descanso de los dedos sobre las teclas ASDF - JKLÑ se llama fila _______.', answer: 'home' }
        ]
      }
    }
  ]
};
