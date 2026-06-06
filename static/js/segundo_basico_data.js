const COURSE_DATA = {
  grade: 'segundo_basico',
  title: 'TAC (Mecanografía) · Segundo Básico',
  subtitle: 'Redacción, lectura y mecanografía',
  classes: [
    {
      id: 'c1', num: 1, icon: '📝',
      title: 'Párrafos y estructura de texto · Conceptos',
      tagline: 'Aprende qué es un párrafo y por qué es la base de todo texto bien escrito.',
      info: [
        { tag: 'Bienvenida', html: `
          <h3>👋 ¡Bienvenido a TAC, Segundo Básico!</h3>
          <p>Este año vamos a trabajar <strong>tres habilidades fundamentales</strong>:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Redacción</h5>
              <p>Párrafos, estructura de texto y uso correcto de mayúsculas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📖</div>
              <h5>Lectura</h5>
              <p>Velocidad y comprensión lectora para entender lo que lees.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Mecanografía</h5>
              <p>Escribir rápido en el teclado sin mirar las teclas.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Objetivo del grado:</strong> Al finalizar las 6 clases serás capaz de escribir textos cortos correctamente, leer con fluidez y velocidad, y dominar el teclado.</p>
          </div>
        `},
        { tag: '¿Qué es un párrafo?', html: `
          <h3>📄 ¿Qué es un párrafo?</h3>
          <p>Un <strong>párrafo</strong> es una unidad de texto formada por una o varias oraciones que hablan sobre <strong>una sola idea</strong>. Se separa del resto del texto por un espacio en blanco y, al comenzar, lleva una <strong>sangría</strong> (un pequeño espacio al inicio).</p>
          <h4>💡 Ejemplo visual</h4>
          <div class="slide-info">
            <span class="icon">📋</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              &nbsp;&nbsp;&nbsp;<strong>Primer párrafo.</strong> Aquí explico una primera idea. Puedo usar varias oraciones para desarrollarla, pero todas giran alrededor del mismo tema.<br><br>
              &nbsp;&nbsp;&nbsp;<strong>Segundo párrafo.</strong> Ahora cambio a otra idea relacionada. Empiezo otra vez con sangría y desarrollo el nuevo concepto en una o más oraciones.<br><br>
              &nbsp;&nbsp;&nbsp;<strong>Tercer párrafo.</strong> Y así sucesivamente, cada párrafo trata UNA idea principal.
            </p>
          </div>
        `},
        { tag: 'Características', html: `
          <h3>🔍 Características de un buen párrafo</h3>
          <p>Un párrafo bien escrito cumple con estas características:</p>
          <ul>
            <li><strong>Tiene UNA idea principal.</strong> No mezcla varios temas.</li>
            <li><strong>Empieza con sangría</strong> (espacio al inicio de la primera línea).</li>
            <li><strong>Las oraciones tienen conexión</strong> entre sí (usando conectores).</li>
            <li><strong>Tiene al menos 3 oraciones</strong> para que la idea quede bien explicada.</li>
            <li><strong>Termina con un punto aparte</strong> (.) y un espacio antes del siguiente párrafo.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error común:</strong> Hacer párrafos de una sola oración muy larga, o párrafos de 10 oraciones sin orden. La regla es: párrafos de 3 a 7 oraciones, todas sobre el mismo tema.</p>
          </div>
        `},
        { tag: 'Tipos de párrafo', html: `
          <h3>🎨 Tipos de párrafo según su función</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🚪</div>
              <h5>Párrafo de inicio</h5>
              <p>Presenta el tema y captura la atención del lector. Suele ser corto y llamativo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔧</div>
              <h5>Párrafo de desarrollo</h5>
              <p>Explica, argumenta o desarrolla la idea principal con ejemplos y detalles.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔚</div>
              <h5>Párrafo de cierre</h5>
              <p>Resume, concluye o deja una reflexión final al lector.</p>
            </div>
          </div>
          <h4>💡 Ejemplo de un texto con los 3 tipos</h4>
          <div class="slide-info">
            <span class="icon">📋</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              &nbsp;&nbsp;&nbsp;<strong>Inicio.</strong> ¿Alguna vez te has preguntado por qué el cielo es azul? Es una pregunta sencilla con una respuesta fascinante.<br><br>
              &nbsp;&nbsp;&nbsp;<strong>Desarrollo.</strong> El color del cielo se debe a un fenómeno llamado dispersión de Rayleigh. La luz del sol está formada por muchos colores, y cuando atraviesa la atmósfera, los colores azul y violeta se dispersan más que los demás. Nuestros ojos son más sensibles al azul, por eso vemos el cielo de ese color.<br><br>
              &nbsp;&nbsp;&nbsp;<strong>Cierre.</strong> La próxima vez que mires al cielo, recuerda que ese azul es el resultado de miles de millones de fotones bailando en la atmósfera de la Tierra.
            </p>
          </div>
        `},
        { tag: 'La sangría', html: `
          <h3>↪️ La sangría: marca el inicio de un párrafo</h3>
          <p>La <strong>sangría</strong> es el pequeño espacio en blanco que se deja al inicio de la primera línea de un párrafo. Sirve para indicar al lector: "<em>aquí empieza una idea nueva</em>".</p>
          <h4>📏 Tipos de sangría</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">1️⃣</div>
              <h5>Sangría de primera línea</h5><p>Es la más común. Se sangra SOLO la primera línea del párrafo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">2️⃣</div>
              <h5>Sangría francesa</h5><p>Se sangra la primera línea Y las siguientes llevan un margen mayor a la izquierda.</p>
            </div>
            <div class="grid-item">
              <div class="icon">3️⃣</div>
              <h5>Sin sangría</h5><p>Se separa por línea en blanco entre párrafos. Común en textos digitales.</p>
            </div>
          </div>
          <h4>⌨️ ¿Cómo se hace la sangría en el computador?</h4>
          <ul>
            <li>En <strong>Word/Google Docs</strong>: presiona la tecla <code>Tab</code> al inicio de la primera línea.</li>
            <li>Equivale a <strong>5 espacios</strong> en blanco.</li>
            <li>Tamaño recomendado: entre 0.5 y 1.25 cm.</li>
          </ul>
        `},
        { tag: 'Errores comunes', html: `
          <h3>🚫 Errores comunes al escribir párrafos</h3>
          <div class="slide-grid">
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Párrafos demasiado largos</h5>
              <p>Un párrafo de 15 oraciones agota al lector. Mejor divídelo en 2-3.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Párrafos de una sola oración</h5>
              <p>Si es muy corto, intégralo al párrafo anterior o sírvelo como cierre.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Mezclar ideas</h5>
              <p>Un párrafo debe tratar UN solo tema. Si cambias de tema, abre otro párrafo.</p>
            </div>
            <div class="grid-item" style="border-color:rgba(239,68,68,0.3)">
              <div class="icon">❌</div>
              <h5>Sin conectores</h5>
              <p>Las oraciones sueltas parecen una lista. Usa conectores: además, sin embargo, por eso...</p>
            </div>
          </div>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Regla de oro:</strong> Lee tu párrafo en voz alta. Si te quedas sin aire, es muy largo. Si suena a lista, faltan conectores.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Párrafo', hint: '¿Cuántas oraciones mínimas debe tener un párrafo bien escrito?' },
        { term: 'Sangría', hint: '¿Qué tecla del computador se usa para hacer sangría?' },
        { term: 'Idea principal', hint: 'Diferencia entre la idea principal y las ideas secundarias.' },
        { term: 'Punto aparte', hint: 'Investiga: ¿cuál es la diferencia entre punto seguido, punto aparte y punto final?' },
        { term: 'Párrafo de inicio', hint: '¿Qué función cumple el primer párrafo de un texto?' },
        { term: 'Párrafo de cierre', hint: '¿Qué suele contener el último párrafo de un texto?' },
        { term: 'Conector', hint: 'Escribe 5 ejemplos de conectores y su función: "además", "sin embargo"...' }
      ],
      exercises: [
        { id: 'c1e1', n: 1, type: 'mc', prompt: '¿Qué es un párrafo?', options: [
          { value: 'a', label: 'Una sola palabra escrita en una línea' },
          { value: 'b', label: 'Un conjunto de oraciones que desarrollan una sola idea' },
          { value: 'c', label: 'Una página completa de un libro' },
          { value: 'd', label: 'Un título de un texto' }
        ], answer: 'b' },
        { id: 'c1e2', n: 2, type: 'mc', prompt: '¿Cuál de estos NO es un tipo de párrafo según su función?', options: [
          { value: 'a', label: 'Párrafo de inicio' },
          { value: 'b', label: 'Párrafo de desarrollo' },
          { value: 'c', label: 'Párrafo de cierre' },
          { value: 'd', label: 'Párrafo de imagen' }
        ], answer: 'd' },
        { id: 'c1e3', n: 3, type: 'tf', prompt: 'La sangría es el pequeño espacio que se deja al inicio de la primera línea de un párrafo.', answer: 'true' },
        { id: 'c1e4', n: 4, type: 'fill', prompt: 'Un párrafo bien escrito debe tratar ______ sola idea principal.', answer: 'una' }
      ],
      tasks: [
        { id: 'c1t1', title: '✍️ Escribe 3 párrafos', description: 'Escribe un texto corto de 3 párrafos (uno de inicio, uno de desarrollo, uno de cierre) sobre el tema: "Mi lugar favorito". Mínimo 3 oraciones por párrafo. Usa sangría al inicio de cada uno.', evidence: 'Captura del texto en Word o Google Docs.' },
        { id: 'c1t2', title: '🔍 Encuentra los errores', description: 'Copia el siguiente texto mal escrito y corrígelo: (1) "Me gusta el fútbol. Lo juego todos los días. Mi equipo favorito es el Barcelona. Messi es el mejor jugador. También me gusta el basquetbol. La NBA es muy divertida. Estudio mucho. Voy al colegio cada mañana." Identifica dónde deben ir los puntos aparte y separa en párrafos coherentes.' }
      ],
      exam: {
        id: 'c1_mini', title: 'Mini-examen · Clase 1',
        description: 'Responde las 5 preguntas sobre párrafos.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La sangría se coloca:', options: [
            { value: 'a', label: 'En todas las líneas del párrafo' },
            { value: 'b', label: 'Solo en la primera línea del párrafo' },
            { value: 'c', label: 'Solo al final' },
            { value: 'd', label: 'Nunca se coloca' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: 'Un párrafo debe tratar sobre:', options: [
            { value: 'a', label: 'Muchas ideas a la vez' },
            { value: 'b', label: 'Una sola idea principal' },
            { value: 'c', label: 'Solo una oración' },
            { value: 'd', label: 'Solo listas' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Un párrafo debe tener al menos 3 oraciones para desarrollar bien una idea.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El párrafo que cierra un texto se llama:', options: [
            { value: 'a', label: 'Párrafo de inicio' },
            { value: 'b', label: 'Párrafo de desarrollo' },
            { value: 'c', label: 'Párrafo de cierre' },
            { value: 'd', label: 'Párrafo central' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'Las palabras que unen las oraciones de un párrafo se llaman _______.', answer: 'conectores' }
        ]
      }
    },

    {
      id: 'c2', num: 2, icon: '🧩',
      title: 'Párrafos · Estructura y conectores',
      tagline: 'Aprende a construir párrafos coherentes y bien organizados.',
      info: [
        { tag: 'Idea principal y secundarias', html: `
          <h3>🎯 Idea principal e ideas secundarias</h3>
          <p>Todo párrafo tiene una <strong>idea principal</strong> (la más importante) y, opcionalmente, <strong>ideas secundarias</strong> que la explican, la ejemplifican o la amplían.</p>
          <h4>💡 Ejemplo</h4>
          <div class="slide-info">
            <span class="icon">📋</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              &nbsp;&nbsp;&nbsp;<strong style="color:var(--primary-light)">[Idea principal]</strong> La lectura es una habilidad fundamental en la vida moderna. <strong style="color:var(--secondary-light)">[Idea secundaria 1]</strong> Nos permite acceder a información, aprender cosas nuevas y desarrollar el pensamiento crítico. <strong style="color:var(--secondary-light)">[Idea secundaria 2]</strong> Además, mejora nuestra capacidad de concentración y nuestra empatía, ya que al leer ficción nos ponemos en el lugar de otros personajes. <strong style="color:var(--accent-light)">[Ejemplo]</strong> Un estudio reciente demostró que las personas que leen al menos 20 minutos al día tienen un vocabulario un 50% más amplio que quienes no lo hacen.
            </p>
          </div>
          <p>¿Lo ves? La idea principal es "<em>La lectura es fundamental</em>" y todo lo demás la apoya con razones y ejemplos.</p>
        `},
        { tag: 'Conectores', html: `
          <h3>🔗 Conectores: el pegamento de los párrafos</h3>
          <p>Los <strong>conectores</strong> son palabras o frases que unen las oraciones de un párrafo y muestran la relación entre ellas. Sin ellos, el texto suena como una lista de frases sueltas.</p>
          <h4>📋 Tipos de conectores</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">➕</div>
              <h5>Para AÑADIR ideas</h5>
              <p>además, también, igualmente, de igual forma, asimismo, por otro lado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⚡</div>
              <h5>Para CAUSA</h5>
              <p>porque, ya que, debido a, puesto que, a causa de, dado que.</p>
            </div>
            <div class="grid-item">
              <div class="icon">➡️</div>
              <h5>Para CONSECUENCIA</h5>
              <p>por eso, por lo tanto, en consecuencia, así que, de modo que, entonces.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔄</div>
              <h5>Para CONTRASTAR</h5>
              <p>sin embargo, pero, aunque, a pesar de, no obstante, en cambio.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📌</div>
              <h5>Para EJEMPLIFICAR</h5>
              <p>por ejemplo, es decir, en otras palabras, concretamente, en particular.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏁</div>
              <h5>Para CERRAR</h5>
              <p>en conclusión, finalmente, en resumen, para terminar, en definitiva.</p>
            </div>
          </div>
        `},
        { tag: 'Ejemplos', html: `
          <h3>📖 Párrafos con y sin conectores</h3>
          <h4>❌ Párrafo sin conectores (mala calidad)</h4>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "Internet es muy útil. Tiene mucha información. La uso para estudiar. También para ver videos. A veces me confundo con tanta información. Mis padres me ayudan a buscar."
            </p>
          </div>
          <h4>✅ Párrafo con conectores (buena calidad)</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "Internet es una herramienta muy útil en el estudio. <strong>Gracias a</strong> ella, podemos acceder a información actualizada sobre casi cualquier tema. <strong>Sin embargo</strong>, la enorme cantidad de datos disponibles puede resultar abrumadora. <strong>Por eso</strong>, es importante que los estudiantes aprendan a buscar fuentes confiables y <strong>además</strong> cuenten con la guía de un adulto, como recomiendan los expertos en educación digital."
            </p>
          </div>
          <p>¿Notas la diferencia? El segundo párrafo <strong>fluye</strong> como una conversación lógica. El primero suena a lista.</p>
        `},
        { tag: 'Estructura', html: `
          <h3>🏗️ Estructura recomendada de un párrafo</h3>
          <p>Un párrafo bien construido sigue generalmente esta estructura:</p>
          <ol>
            <li><strong>Oración temática (T):</strong> presenta la idea principal. Suele ser la primera oración.</li>
            <li><strong>Oraciones de desarrollo (D):</strong> explican, argumentan, dan ejemplos. Van en el medio.</li>
            <li><strong>Oración de cierre (C):</strong> resume, concluye o conecta con el siguiente párrafo.</li>
          </ol>
          <h4>💡 Plantilla útil</h4>
          <pre style="background:var(--bg-1);padding:1rem;border-radius:var(--radius-sm);overflow-x:auto"><code>[T] La idea principal que voy a desarrollar es...
[D1] En primer lugar, ...
[D2] Además, ...
[D3] Por ejemplo, ...
[D4] Sin embargo, ...
[C] En conclusión, ...</code></pre>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>No es obligatorio</strong> usar todas las D. Pero siempre debe haber al menos una T y una C.</p>
          </div>
        `},
        { tag: 'Coherencia y cohesión', html: `
          <h3>🌟 Coherencia y cohesión: las dos claves</h3>
          <p>Un párrafo de calidad tiene dos propiedades:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🧠</div>
              <h5>Coherencia</h5>
              <p>Las ideas tienen <strong>sentido lógico</strong> y están relacionadas entre sí. Se entiende el mensaje completo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔗</div>
              <h5>Cohesión</h5>
              <p>Las oraciones están <strong>unidas correctamente</strong> con conectores y pronombres. No hay "saltos".</p>
            </div>
          </div>
          <h4>💡 Ejemplo de párrafo con coherencia pero sin cohesión</h4>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El sol es una estrella. (coherente) La pizza es deliciosa. (¡incoherente! Salta de tema) El deporte es saludable. (incoherente otra vez)"
            </p>
          </div>
          <h4>💡 Ejemplo de párrafo coherente y cohesionado</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El sol es una estrella como las demás. <strong>Sin embargo</strong>, para nosotros es especial porque está mucho más cerca. <strong>Gracias a</strong> su energía, la vida en la Tierra es posible. <strong>Por eso</strong>, cuidar nuestra atmósfera es tan importante para proteger ese equilibrio."
            </p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Vamos a practicar</h3>
          <p>Te propongo este ejercicio para aplicar todo lo aprendido. Vamos a tomar 4 oraciones sueltas y convertirlas en un párrafo bien escrito.</p>
          <h4>📝 Oraciones sueltas</h4>
          <ol>
            <li>"El cambio climático es un problema real."</li>
            <li>"Los glaciares se están derritiendo."</li>
            <li>"Los veranos son más calurosos cada año."</li>
            <li>"Todos podemos ayudar reciclando."</li>
          </ol>
          <h4>✅ Párrafo bien escrito</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              &nbsp;&nbsp;&nbsp;<strong>El cambio climático es uno de los problemas más urgentes de nuestra época.</strong> Sus efectos ya son visibles: los glaciares de los polos se están derritiendo a un ritmo sin precedentes y los veranos son más calurosos cada año. <strong>Además</strong>, estos cambios afectan la agricultura, la fauna y la salud humana en todo el mundo. <strong>Afortunadamente</strong>, todos podemos contribuir a frenarlo con acciones cotidianas como reciclar, ahorrar energía y usar menos el automóvil. <strong>En conclusión</strong>, el futuro del planeta depende de las decisiones que tomemos hoy.
            </p>
          </div>
          <p>Observa cómo se usaron conectores (<strong>Además, Afortunadamente, En conclusión</strong>) y la oración temática está <strong>resaltada</strong> al inicio.</p>
        `}
      ],
      keywords: [
        { term: 'Idea principal', hint: '¿En qué parte del párrafo suele ir la idea principal?' },
        { term: 'Conector', hint: 'Escribe 3 conectores de causa y 3 de consecuencia.' },
        { term: 'Coherencia', hint: '¿Qué significa que un párrafo sea coherente?' },
        { term: 'Cohesión', hint: 'Diferencia entre coherencia y cohesión con un ejemplo.' },
        { term: 'Oración temática', hint: '¿Qué función cumple la primera oración de un párrafo?' },
        { term: 'Sin embargo', hint: '¿Es un conector de adición, causa, consecuencia o contraste?' },
        { term: 'Por lo tanto', hint: '¿Qué tipo de relación establece entre dos ideas?' }
      ],
      exercises: [
        { id: 'c2e1', n: 1, type: 'mc', prompt: 'La oración que presenta la idea principal de un párrafo se llama:', options: [
          { value: 'a', label: 'Oración temática' },
          { value: 'b', label: 'Oración de cierre' },
          { value: 'c', label: 'Conector' },
          { value: 'd', label: 'Sangría' }
        ], answer: 'a' },
        { id: 'c2e2', n: 2, type: 'mc', prompt: '¿Cuál de estos es un conector de CONTRASTE?', options: [
          { value: 'a', label: 'Además' },
          { value: 'b', label: 'Porque' },
          { value: 'c', label: 'Sin embargo' },
          { value: 'd', label: 'Por ejemplo' }
        ], answer: 'c' },
        { id: 'c2e3', n: 3, type: 'tf', prompt: 'Un párrafo coherente es aquel cuyas ideas tienen sentido lógico entre sí.', answer: 'true' },
        { id: 'c2e4', n: 4, type: 'fill', prompt: 'La palabra "además" es un conector de _______.', answer: 'adición' }
      ],
      tasks: [
        { id: 'c2t1', title: '✍️ Mejora el párrafo', description: 'Toma el párrafo mal escrito de la tarea 1 de la clase anterior y reescríbelo usando conectores apropiados. Identifica la oración temática, las de desarrollo y la de cierre.', evidence: 'Antes y después en el mismo documento.' },
        { id: 'c2t2', title: '🎯 Escribe desde cero', description: 'Escribe un párrafo de 5-7 oraciones sobre "La importancia de la lectura". Usa al menos: 1 oración temática, 2 de desarrollo, 1 de cierre, 4 conectores diferentes y 1 ejemplo.', evidence: 'Documento de Word/Google Docs.' }
      ],
      exam: {
        id: 'c2_mini', title: 'Mini-examen · Clase 2',
        description: 'Responde las 5 preguntas sobre estructura y conectores.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '"Por lo tanto" es un conector de:', options: [
            { value: 'a', label: 'Adición' },
            { value: 'b', label: 'Causa' },
            { value: 'c', label: 'Consecuencia' },
            { value: 'd', label: 'Contraste' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: 'La idea principal de un párrafo:', options: [
            { value: 'a', label: 'Va siempre al final' },
            { value: 'b', label: 'Suele ir en la primera oración' },
            { value: 'c', label: 'No se menciona nunca' },
            { value: 'd', label: 'Va en cursiva' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Un párrafo cohesionado es aquel cuyas oraciones están bien unidas con conectores.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: '¿Cuál de estos NO es un conector?', options: [
            { value: 'a', label: 'Sin embargo' },
            { value: 'b', label: 'Porque' },
            { value: 'c', label: 'La' },
            { value: 'd', label: 'Por ejemplo' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'La oración que cierra un párrafo y resume la idea principal se llama oración de _______.', answer: 'cierre' }
        ]
      }
    },

    {
      id: 'c3', num: 3, icon: '🔠',
      title: 'Uso de mayúsculas en nombres propios',
      tagline: 'Las reglas del uso correcto de mayúsculas en español.',
      info: [
        { tag: '¿Cuándo usar mayúscula?', html: `
          <h3>🔠 Las reglas básicas de la mayúscula</h3>
          <p>En español, escribimos con <strong>letra mayúscula</strong> en estos casos:</p>
          <ul>
            <li>La <strong>primera palabra de un texto</strong> o de un párrafo.</li>
            <li>La <strong>primera palabra después de un punto</strong> (punto seguido o aparte).</li>
            <li>Los <strong>nombres propios</strong> de personas, lugares, instituciones, marcas, etc.</li>
            <li>Los <strong>apellidos</strong> de las personas.</li>
            <li>Los <strong>nombres de ciudades, países, continentes</strong>.</li>
            <li>Los <strong>atributos de Dios</strong> (Dios, Todopoderoso, Alá).</li>
            <li>Los <strong>siglas y acrónimos</strong> (UNAM, NASA, ADN).</li>
            <li>Después de <strong>signos de apertura</strong> como ¡ o ¿, si la palabra siguiente es inicio de frase.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p><strong>Diferencia con inglés:</strong> En español, los días de la semana, los meses y los idiomas se escriben con <strong>minúscula</strong> (lunes, enero, español). En inglés se escriben con mayúscula (Monday, January, Spanish).</p>
          </div>
        `},
        { tag: 'Nombres de personas', html: `
          <h3>👤 Nombres de personas</h3>
          <p>Se escriben con <strong>mayúscula</strong> el nombre y los apellidos de las personas.</p>
          <h4>✅ Correcto</h4>
          <ul>
            <li>María García</li>
            <li>Juan Pablo II (el "II" también es mayúscula)</li>
            <li>José de San Martín</li>
            <li>Sor Juana Inés de la Cruz</li>
            <li>Ludwig van Beethoven</li>
          </ul>
          <h4>❌ Incorrecto</h4>
          <ul>
            <li>maria garcia ❌</li>
            <li>juan pablo ii ❌</li>
            <li>josé de san martín ❌</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Excepción:</strong> Las partículas <em>de, del, de la, y</em> dentro de un nombre se escriben con <strong>minúscula</strong>, salvo la primera palabra del nombre. Ejemplo: "Luis <strong>de</strong> Góngora", pero si empieza el nombre: "<strong>De</strong> Góngora fue un gran poeta".</p>
          </div>
        `},
        { tag: 'Lugares e instituciones', html: `
          <h3>🌍 Nombres de lugares, instituciones y marcas</h3>
          <h4>🗺️ Lugares</h4>
          <p>Se escriben con mayúscula los <strong>nombres propios geográficos</strong>:</p>
          <ul>
            <li><strong>Guatemala</strong>, <strong>México</strong>, <strong>Antigua Guatemala</strong>.</li>
            <li><strong>Lago de Atitlán</strong>, <strong>Río Usumacinta</strong>, <strong>Volcán de Pacaya</strong>.</li>
            <li><strong>América del Sur</strong>, <strong>Europa Occidental</strong>.</li>
            <li>Calles: <strong>6ª Avenida</strong>, <strong>Calle del Arco</strong>.</li>
          </ul>
          <h4>🏛️ Instituciones</h4>
          <ul>
            <li><strong>Universidad de San Carlos</strong> (USAC).</li>
            <li><strong>Ministerio de Educación</strong>.</li>
            <li><strong>Organización de las Naciones Unidas</strong> (ONU).</li>
            <li><strong>Banco Industrial</strong>.</li>
          </ul>
          <h4>🏢 Marcas y productos</h4>
          <ul>
            <li><strong>Microsoft</strong>, <strong>Google</strong>, <strong>Apple</strong>.</li>
            <li><strong>Coca-Cola</strong>, <strong>Mercedes-Benz</strong>.</li>
            <li><strong>iPhone</strong>, <strong>Photoshop</strong>.</li>
          </ul>
          <div class="slide-info">
            <span class="icon">💡</span>
            <p>En cambio, los nombres <strong>comunes</strong> (ciudad, país, mar) van con minúscula: "vivo en la ciudad de Guatemala", "el mar Mediterráneo".</p>
          </div>
        `},
        { tag: 'Otros casos', html: `
          <h3>📚 Otros casos importantes</h3>
          <h4>📅 Días, meses y estaciones</h4>
          <p>En español van con <strong>minúscula</strong>:</p>
          <ul>
            <li>Los días: <strong>lunes, martes, miércoles</strong>.</li>
            <li>Los meses: <strong>enero, febrero, marzo</strong>.</li>
            <li>Las estaciones: <strong>primavera, verano, otoño, invierno</strong>.</li>
          </ul>
          <p>Solo se mayúsculan si forman parte de un nombre propio: "<em>el lunes</em>" pero "<em>el Lunes de Pascua</em>".</p>
          <h4>🗣️ Idiomas y gentilicios</h4>
          <ul>
            <li>Idiomas: <strong>español, inglés, francés, k'iche'</strong>.</li>
            <li>Gentilicios: <strong>guatemalteco, mexicano, estadounidense</strong>.</li>
          </ul>
          <h4>🏷️ Marcas comerciales y programas</h4>
          <p>Se mayúsculan las marcas: <strong>Word, Excel, Chrome</strong>. Pero los nombres genéricos de programas se escriben con minúscula: "<em>un procesador de textos</em>".</p>
          <h4>📜 Títulos de obras</h4>
          <p>Solo la <strong>primera palabra</strong> del título va con mayúscula (salvo nombres propios):</p>
          <ul>
            <li><em>El quijote de la Mancha</em> (Quijote porque es nombre propio).</li>
            <li><em>Cien años de soledad</em>.</li>
            <li><em>La divina comedia</em>.</li>
          </ul>
        `},
        { tag: 'Después de signos', html: `
          <h3>❓ Después de ¿ y ¡</h3>
          <p>En español, después de los <strong>signos de apertura</strong> de interrogación (¿) y exclamación (¡), la palabra que sigue va con <strong>mayúscula SOLO si inicia una nueva oración</strong>.</p>
          <h4>✅ Ejemplos correctos</h4>
          <ul>
            <li>¿Cómo estás? → "<em>Cómo</em>" con minúscula porque sigue en la misma oración.</li>
            <li>¿<strong>Q</strong>ué hora es? → "<em>Qué</em>" con minúscula.</li>
            <li>¡<strong>Q</strong>ué sorpresa! → "<em>Qué</em>" con minúscula.</li>
            <li>¿<strong>E</strong>stás bien? ¡<strong>S</strong>í, gracias! → Cada pregunta/exclamación inicia con mayúscula porque son oraciones independientes.</li>
            <li>"¿<strong>V</strong>ienes mañana?", preguntó. → Mayúscula porque después de la coma inicia una nueva oración.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Error frecuente:</strong> Escribir "¡Hola!" con H mayúscula. Lo correcto es: "¡<em>Hola</em>!" o si es inicio de texto: "¡<em>H</em>ola!" (mayúscula porque es la primera palabra del texto).</p>
          </div>
        `},
        { tag: 'Práctica', html: `
          <h3>✏️ Ejercicios de mayúsculas</h3>
          <h4>📝 Corrige este texto</h4>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "el lunes pasado fui a la Ciudad de Guatemala con mi amiga maría. Visitamos la universidad de san carlos y luego comimos en un restaurante del centro histórico. Después viajamos a antigua guatemala para conocer el volcán de agua. Fue un día increíble, aunque empezó a llover por la tarde. ¿volveremos pronto? ¡Espero que sí!"
            </p>
          </div>
          <h4>✅ Versión corregida</h4>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El <strong>lunes</strong> pasado fui a la <strong>Ciudad de Guatemala</strong> con mi amiga <strong>María</strong>. Visitamos la <strong>Universidad de San Carlos</strong> y luego comimos en un restaurante del <strong>Centro Histórico</strong>. Después viajamos a <strong>Antigua Guatemala</strong> para conocer el <strong>Volcán de Agua</strong>. Fue un día increíble, aunque empezó a llover por la tarde. ¿<strong>V</strong>olveremos pronto? ¡<strong>E</strong>spero que sí!"
            </p>
          </div>
          <p>Cambios realizados: <strong>El</strong> (inicio), <strong>lunes</strong> (minúscula), <strong>Ciudad de Guatemala</strong> (ciudad), <strong>María</strong> (nombre), <strong>Universidad de San Carlos</strong> (institución), <strong>Centro Histórico</strong> (zona), <strong>Antigua Guatemala</strong> (ciudad), <strong>Volcán de Agua</strong> (accidente geográfico), <strong>Volveremos</strong> (inicio de pregunta), <strong>Espero</strong> (inicio de exclamación).</p>
        `}
      ],
      keywords: [
        { term: 'Mayúscula', hint: '¿Cuántas reglas básicas de mayúscula conoces? Menciona al menos 4.' },
        { term: 'Nombre propio', hint: 'Diferencia entre nombre común y nombre propio. Da 3 ejemplos de cada uno.' },
        { term: 'Gentilicio', hint: '¿Tu gentilicio va con mayúscula o minúscula? ¿Por qué?' },
        { term: 'Sigla', hint: 'Investiga: ¿qué es un acrónimo y en qué se diferencia de una sigla?' },
        { term: 'Antigua Guatemala', hint: '¿Por qué "Antigua Guatemala" va con mayúsculas? ¿Es nombre propio?' },
        { term: 'Idiomas', hint: '¿Los idiomas en español van con mayúscula o minúscula? ¿Y en inglés?' },
        { term: 'Títulos de obras', hint: '¿Qué regla siguen los títulos de libros y películas en español?' }
      ],
      exercises: [
        { id: 'c3e1', n: 1, type: 'mc', prompt: '¿Cuál de estas palabras debe escribirse con MAYÚSCULA?', options: [
          { value: 'a', label: 'lunes' },
          { value: 'b', label: 'María' },
          { value: 'c', label: 'español' },
          { value: 'd', label: 'verano' }
        ], answer: 'b' },
        { id: 'c3e2', n: 2, type: 'mc', prompt: 'En español, los días de la semana se escriben con:', options: [
          { value: 'a', label: 'Mayúscula' },
          { value: 'b', label: 'Minúscula' },
          { value: 'c', label: 'Ambas son correctas' },
          { value: 'd', label: 'Depende del día' }
        ], answer: 'b' },
        { id: 'c3e3', n: 3, type: 'tf', prompt: 'Los nombres de ciudades, países y continentes se escriben con mayúscula.', answer: 'true' },
        { id: 'c3e4', n: 4, type: 'fill', prompt: 'En español, después de ¿ solo se escribe mayúscula si inicia una nueva _______.', answer: 'oración' }
      ],
      tasks: [
        { id: 'c3t1', title: '✏️ Corrige 5 textos', description: 'Escribe 5 oraciones con errores de mayúscula. Luego intercámbialas con un compañero y corríjanlas mutuamente. Cada uno debe entregar las 5 oraciones corregidas.', evidence: 'Documento con originales y correcciones.' },
        { id: 'c3t2', title: '🌎 Investigación geográfica', description: 'Investiga 5 ciudades del mundo y 5 personalidades históricas. Escribe una breve biografía (3-4 líneas) de cada personalidad usando correctamente las mayúsculas.', evidence: 'Documento de Word/Google Docs.' }
      ],
      exam: {
        id: 'c3_mini', title: 'Mini-examen · Clase 3',
        description: 'Responde las 5 preguntas sobre mayúsculas.',
        questions: [
          { id: 'q1', type: 'mc', prompt: '¿Cuál de estos NO va con mayúscula?', options: [
            { value: 'a', label: 'Guatemala' },
            { value: 'b', label: 'María' },
            { value: 'c', label: 'enero' },
            { value: 'd', label: 'Universidad' }
          ], answer: 'c' },
          { id: 'q2', type: 'mc', prompt: '"La Universidad de San Carlos" se escribe con mayúscula porque:', options: [
            { value: 'a', label: 'Es el inicio de un texto' },
            { value: 'b', label: 'Es el nombre de una institución' },
            { value: 'c', label: 'Porque sí' },
            { value: 'd', label: 'Es un idioma' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Después de ¿ la palabra siguiente SIEMPRE va con mayúscula.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'Los gentilicios como "guatemalteco" van con:', options: [
            { value: 'a', label: 'Mayúscula' },
            { value: 'b', label: 'Minúscula' },
            { value: 'c', label: 'Cursiva' },
            { value: 'd', label: 'Subrayado' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'Los nombres de personas, lugares e instituciones se llaman nombres _______.', answer: 'propios' }
        ]
      }
    },

    {
      id: 'c4', num: 4, icon: '⚡',
      title: 'Velocidad con comprensión lectora',
      tagline: 'Lee más rápido sin perder el sentido del texto.',
      info: [
        { tag: '¿Qué es la velocidad lectora?', html: `
          <h3>⚡ ¿Qué es la velocidad lectora?</h3>
          <p>La <strong>velocidad lectora</strong> se mide en <strong>palabras por minuto (PPM)</strong>. Es la cantidad de palabras que puedes leer correctamente en un minuto.</p>
          <h4>📊 Promedios de velocidad lectora</h4>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🐢</div>
              <h5>Lector lento</h5>
              <p>Menos de 150 PPM. Lee palabra por palabra.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🚶</div>
              <h5>Lector promedio</h5>
              <p>200-250 PPM. Lee frases cortas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🏃</div>
              <h5>Lector bueno</h5>
              <p>300-400 PPM. Lee por bloques de palabras.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🚀</div>
              <h5>Lector experto</h5>
              <p>500+ PPM. Lee párrafos completos de un vistazo.</p>
            </div>
          </div>
          <div class="slide-info">
            <span class="icon">🎯</span>
            <p><strong>Meta para Segundo Básico:</strong> alcanzar al menos 180-220 PPM con buena comprensión. La comprensión es tan importante como la velocidad: leer rápido sin entender no sirve.</p>
          </div>
        `},
        { tag: 'Hábitos que frenan', html: `
          <h3>🐢 Hábitos que frenan tu lectura</h3>
          <p>Muchas personas leen lento por estos <strong>malos hábitos</strong>. Reconócelos y elimínalos:</p>
          <ul>
            <li><strong>Subvocalización:</strong> pronunciar cada palabra en tu cabeza mientras lees. Es lo que más frena.</li>
            <li><strong>Regresión:</strong> volver a leer palabras o frases que ya leíste. Lo haces por desconfianza.</li>
            <li><strong>Movimiento del dedo:</strong> señalar cada palabra con el dedo. Útil al principio, luego frena.</li>
            <li><strong>Lectura palabra por palabra:</strong> en vez de leer por bloques.</li>
            <li><strong>Distracciones:</strong> ruido, celular, televisión, hambre.</li>
            <li><strong>Decodificación:</strong> detenerte en palabras desconocidas sin seguir leyendo.</li>
          </ul>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p>Si te detienes mucho en una palabra desconocida, no pares. <strong>Sigue leyendo</strong>: a veces el contexto te da la pista de qué significa.</p>
          </div>
        `},
        { tag: 'Técnicas para leer más rápido', html: `
          <h3>🚀 5 técnicas para aumentar tu velocidad</h3>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">👀</div>
              <h5>1. Lectura por bloques</h5>
              <p>Entrena tus ojos a tomar <strong>3-4 palabras a la vez</strong> en vez de una sola.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📏</div>
              <h5>2. Uso del dedo o tarjeta</h5>
              <p>Desliza el dedo por debajo de cada línea a velocidad constante. Mantén el ritmo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🤫</div>
              <h5>3. Silenciar la voz interior</h5>
              <p>Imagina que lees en silencio absoluto. No pronuncies cada palabra.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⏱️</div>
              <h5>4. Ponerte retos de tiempo</h5>
              <p>"Voy a leer esta página en 2 minutos". Cronométrate.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📚</div>
              <h5>5. Leer todos los días</h5>
              <p>15-20 minutos diarios. La velocidad mejora con la práctica constante.</p>
            </div>
          </div>
        `},
        { tag: 'Comprensión lectora', html: `
          <h3>🧠 Comprensión lectora: tan importante como la velocidad</h3>
          <p>Leer rápido sin entender no tiene sentido. La <strong>comprensión lectora</strong> es tu capacidad de captar el significado del texto.</p>
          <h4>🎯 Niveles de comprensión</h4>
          <ul>
            <li><strong>Literal:</strong> entender lo que el texto dice de forma directa. (¿Qué? ¿Quién? ¿Cuándo? ¿Dónde?)</li>
            <li><strong>Inferencial:</strong> deducir información que NO está escrita. (¿Por qué? ¿Para qué? ¿Qué pasaría si...?)</li>
            <li><strong>Crítica:</strong> opinar sobre el texto, comparar con otros, juzgar. (¿Estoy de acuerdo? ¿Es justo? ¿Es coherente?)</li>
          </ul>
          <h4>💡 Ejemplo</h4>
          <p>Texto: "<em>Juan se olvidó el paraguas. Cuando salió de la casa, el cielo estaba gris y caían algunas gotas.</em>"</p>
          <ul>
            <li><strong>Literal:</strong> Juan olvidó el paraguas. Llueve afuera.</li>
            <li><strong>Inferencial:</strong> Seguramente Juan se va a mojar, porque no tiene paraguas y está lloviendo.</li>
            <li><strong>Crítica:</strong> Juan debería haber revisado el clima antes de salir, o aprender a ser más responsable con sus cosas.</li>
          </ul>
        `},
        { tag: 'Estrategias de comprensión', html: `
          <h3>🛠️ Estrategias para mejorar la comprensión</h3>
          <ul>
            <li><strong>Lee el título y las imágenes primero.</strong> Te dan pistas del contenido.</li>
            <li><strong>Lee la primera y última oración de cada párrafo.</strong> Ahí suele estar la idea principal.</li>
            <li><strong>Subraya las ideas clave.</strong> Pero sin subrayar todo: solo lo importante.</li>
            <li><strong>Hazte preguntas mientras lees.</strong> "¿Qué me está queriendo decir el autor?"</li>
            <li><strong>Relaciona lo que lees con lo que ya sabes.</strong> "Esto me recuerda a..."</li>
            <li><strong>Parafrasea:</strong> después de leer un párrafo, intenta decirlo con tus palabras.</li>
            <li><strong>Resume al final.</strong> En 2-3 oraciones, ¿de qué trataba el texto?</li>
          </ul>
          <div class="slide-success">
            <span class="icon">✨</span>
            <p><strong>Tip profesional:</strong> Antes de leer un texto largo, dedica 30 segundos a "escanearlo": mira títulos, subtítulos, imágenes y conclusiones. Esto prepara tu cerebro para entender mejor.</p>
          </div>
        `},
        { tag: 'Ejercicio práctico', html: `
          <h3>🏋️ Vamos a entrenar</h3>
          <h4>📝 Test rápido de velocidad</h4>
          <p>Vas a leer este texto y luego responder 3 preguntas. Te cronometras.</p>
          <div class="slide-info">
            <span class="icon">📖</span>
            <p style="font-family:Georgia,serif;line-height:1.8">
              "El quetzal es considerado el ave más bella de Centroamérica. Su plumaje es de un verde brillante iridiscente, con el pecho rojo y una larga cola que puede alcanzar los 65 centímetros en los machos. Habita en las selvas nubosas de regiones montañosas, desde el sur de México hasta el oeste de Panamá. Para los antiguos mayas y quichés, el quetzal era un ave sagrada, símbolo de la libertad y la divinidad. De hecho, se cuenta que cuando los españoles conquistaron Guatemala, capturaron a un rey quiché y le arrancaron las plumas de quetzal de su tocado. El ave, según la leyenda, prefirió morir antes que seguir viviendo en cautiverio. Por eso, en la actualidad, el quetzal representa el espíritu de libertad de los pueblos centroamericanos y aparece en la bandera y el escudo de Guatemala."
            </p>
          </div>
          <h4>⏱️ Pasos</h4>
          <ol>
            <li>Cuenta las palabras del texto (son ~190).</li>
            <li>Lee el texto cronometrándote con un reloj o cronómetro.</li>
            <li>Calcula: <code>PPM = (palabras ÷ segundos) × 60</code>.</li>
            <li>Sin mirar el texto, responde: ¿de qué trata? ¿Cuál es la idea principal? ¿Qué datos curiosos aprendiste?</li>
          </ol>
          <p>¡Repite este ejercicio cada semana con textos diferentes y verás tu progreso!</p>
        `}
      ],
      keywords: [
        { term: 'PPM', hint: '¿Qué significan las siglas PPM en lectura?' },
        { term: 'Subvocalización', hint: '¿Qué es y por qué frena la velocidad de lectura?' },
        { term: 'Comprensión lectora', hint: 'Diferencia entre comprensión literal e inferencial con un ejemplo.' },
        { term: 'Lectura por bloques', hint: '¿En qué consiste y cómo se practica?' },
        { term: 'Regresión', hint: '¿Qué es la regresión en lectura y cómo evitarla?' },
        { term: 'Idea principal', hint: 'Investiga: ¿cómo encontrar la idea principal de un párrafo en 10 segundos?' },
        { term: 'Paráfrasis', hint: '¿Qué es y cómo te ayuda a comprender mejor un texto?' }
      ],
      exercises: [
        { id: 'c4e1', n: 1, type: 'mc', prompt: 'La velocidad lectora se mide en:', options: [
          { value: 'a', label: 'Páginas por hora' },
          { value: 'b', label: 'Palabras por minuto (PPM)' },
          { value: 'c', label: 'Párrafos por día' },
          { value: 'd', label: 'Letras por segundo' }
        ], answer: 'b' },
        { id: 'c4e2', n: 2, type: 'tf', prompt: 'La subvocalización (pronunciar mentalmente cada palabra) aumenta la velocidad de lectura.', answer: 'false' },
        { id: 'c4e3', n: 3, type: 'mc', prompt: 'La comprensión INFERENCIAL es aquella en la que:', options: [
          { value: 'a', label: 'Solo lees lo que está escrito literalmente' },
          { value: 'b', label: 'Deduce información que NO está escrita' },
          { value: 'c', label: 'Opinas sobre el texto' },
          { value: 'd', label: 'Traduces el texto' }
        ], answer: 'b' },
        { id: 'c4e4', n: 4, type: 'fill', prompt: 'Volver a leer palabras o frases que ya se leyeron se llama _______.', answer: 'regresión' }
      ],
      tasks: [
        { id: 'c4t1', title: '⏱️ Mide tu velocidad', description: 'Toma cualquier texto de al menos 200 palabras (de tu libro de texto, una noticia, etc.). Cronométrate. Calcula tus PPM. Hazlo 3 veces esta semana y compara.', evidence: 'Tabla con las 3 mediciones y el cálculo de PPM.' },
        { id: 'c4t2', title: '📚 Lectura con resumen', description: 'Lee un cuento o artículo de al menos 300 palabras. Después, escribe: (1) idea principal, (2) 3 ideas secundarias, (3) tu opinión crítica (1 párrafo).', evidence: 'Resumen escrito y tu opinión.' }
      ],
      exam: {
        id: 'c4_mini', title: 'Mini-examen · Clase 4',
        description: 'Responde las 5 preguntas sobre velocidad y comprensión lectora.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'Un lector promedio lee aproximadamente:', options: [
            { value: 'a', label: '50 PPM' },
            { value: 'b', label: '200-250 PPM' },
            { value: 'c', label: '500 PPM' },
            { value: 'd', label: '1000 PPM' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál es un mal hábito de lectura?', options: [
            { value: 'a', label: 'Leer por bloques' },
            { value: 'b', label: 'Subvocalizar' },
            { value: 'c', label: 'Hacer pausas' },
            { value: 'd', label: 'Releer si es necesario' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'Parafrasear es decir con tus propias palabras lo que leíste.', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'La comprensión CRÍTICA consiste en:', options: [
            { value: 'a', label: 'Entender lo literal' },
            { value: 'b', label: 'Deducir lo que no se dice' },
            { value: 'c', label: 'Opinar y juzgar sobre el texto' },
            { value: 'd', label: 'Memorizar el texto' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'La técnica de leer varias palabras a la vez en vez de una por una se llama lectura por _______.', answer: 'bloques' }
        ]
      }
    },

    {
      id: 'c5', num: 5, icon: '💾',
      title: 'Introducción a guardar archivos · Mecanografía',
      tagline: 'Aprende a crear, nombrar y guardar documentos digitales correctamente.',
      info: [
        { tag: 'El teclado', html: `
          <h3>⌨️ Conoce tu teclado</h3>
          <p>El teclado QWERTY es el más usado en español. Tiene <strong>5 zonas principales</strong>:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🔤</div>
              <h5>Zona de letras</h5>
              <p>La zona central con las teclas A-Z. Tiene 4 filas: la del medio es la <strong>fila home</strong>.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔢</div>
              <h5>Zona de números</h5>
              <p>La fila superior con 1, 2, 3... 0. Incluye símbolos: !, @, #, $, etc.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Tecla de espacio</h5>
              <p>La barra larga abajo. Se presiona con los pulgares.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⏎</div>
              <h5>Enter/Intro</h5>
              <p>Salta a la siguiente línea.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌫</div>
              <h5>Borrar (Backspace)</h5>
              <p>Borra lo que está a la izquierda del cursor.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⇧</div>
              <h5>Shift (Mayúsculas)</h5>
              <p>Se mantiene presionada y se pulsa otra tecla para escribirla en mayúscula.</p>
            </div>
          </div>
        `},
        { tag: 'Fila home', html: `
          <h3>🏠 La fila home: tu posición de descanso</h3>
          <p>La <strong>fila home</strong> (o fila de inicio) es la fila central de letras: <strong>A S D F (mano izquierda) — J K L Ñ (mano derecha)</strong>. Es la posición en la que tus dedos deben descansar siempre que no estés escribiendo.</p>
          <h4>👆 ¿Qué dedo pulsa cada tecla?</h4>
          <ul>
            <li><strong>Mano izquierda:</strong> meñique → A, anular → S, medio → D, índice → F.</li>
            <li><strong>Mano derecha:</strong> índice → J, medio → K, anular → L, meñique → Ñ.</li>
            <li><strong>Pulgares:</strong> ambos pulgares controlan la barra espaciadora.</li>
          </ul>
          <h4>💡 Truco para encontrar la fila home sin mirar</h4>
          <p>En las teclas <strong>F</strong> y <strong>J</strong> hay una pequeña <strong>raya o relieve táctil</strong> (como una línea). Pon los dedos índices sobre esas marcas y ya estás en la posición correcta. ¡No necesitas mirar!</p>
          <div class="slide-warn">
            <span class="icon">⚠️</span>
            <p><strong>Regla de oro de la mecanografía:</strong> NUNCA mires el teclado. Si miras, nunca aprenderás a escribir rápido. Aunque al principio sea más lento, luego será muchísimo más rápido.</p>
          </div>
        `},
        { tag: 'Postura', html: `
          <h3>🧘 La postura correcta al escribir</h3>
          <p>Una buena postura evita lesiones y te hace más eficiente:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">🪑</div>
              <h5>Espalda</h5>
              <p>Recta, apoyada en el respaldo. No te encorves.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🦶</div>
              <h5>Pies</h5>
              <p>Planos en el suelo. No cruzados ni colgando.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💪</div>
              <h5>Codos</h5>
              <p>Flexionados a 90°, cerca del cuerpo. No muy arriba ni muy abajo.</p>
            </div>
            <div class="grid-item">
              <div class="icon">👀</div>
              <h5>Mirada</h5>
              <p>Siempre a la PANTALLA, nunca al teclado.</p>
            </div>
            <div class="grid-item">
              <div class="icon">⌨️</div>
              <h5>Manos</h5>
              <p>Relajadas, flotando sobre la fila home. No apoyes las muñecas.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💡</div>
              <h5>Iluminación</h5>
              <p>Buena luz sobre el teclado y la pantalla. Nada de escribir a oscuras.</p>
            </div>
          </div>
        `},
        { tag: 'Crear documentos', html: `
          <h3>📄 Crear un documento nuevo</h3>
          <h4>🪟 En Microsoft Word</h4>
          <ol>
            <li>Abre Word desde el menú Inicio o el escritorio.</li>
            <li>Verás un documento en blanco listo para escribir.</li>
            <li>Si quieres un documento nuevo, ve a <strong>Archivo → Nuevo → Documento en blanco</strong>.</li>
          </ol>
          <h4>☁️ En Google Docs (gratis, en línea)</h4>
          <ol>
            <li>Entra a <strong>docs.google.com</strong> con tu cuenta de Gmail.</li>
            <li>Haz clic en el botón <strong>"+"</strong> (Documento en blanco).</li>
            <li>Listo, ya puedes escribir.</li>
          </ol>
          <h4>📱 En el celular (Word app o Google Docs)</h4>
          <ol>
            <li>Abre la aplicación.</li>
            <li>Toca el botón <strong>"+"</strong> para crear un documento nuevo.</li>
            <li>Aparecerá el teclado en pantalla. ¡A escribir!</li>
          </ol>
        `},
        { tag: 'Guardar', html: `
          <h3>💾 Guardar: la acción más importante</h3>
          <p>Si no guardas, <strong>perderás todo tu trabajo</strong> si se va la luz, se cierra el programa o se apaga la computadora.</p>
          <h4>⌨️ Atajos de teclado para guardar</h4>
          <ul>
            <li><strong>Ctrl + S</strong> (Windows / Linux)</li>
            <li><strong>Cmd + S</strong> (Mac)</li>
          </ul>
          <p>Aparecerá un cuadro que pregunta: <em>"¿Quieres guardar los cambios?"</em>. Haz clic en <strong>Guardar</strong> o presiona Enter.</p>
          <h4>📁 Dónde se guarda</h4>
          <ul>
            <li>En <strong>Word</strong>: en <em>Documentos</em> (Windows) o <em>Documents</em> (Mac), a menos que elijas otra carpeta.</li>
            <li>En <strong>Google Docs</strong>: se guarda <strong>automáticamente</strong> en la nube (en tu Google Drive). No necesitas Ctrl+S, pero también funciona.</li>
          </ul>
          <h4>🆕 Guardar por primera vez (Guardar como)</h4>
          <p>La primera vez, el programa te pedirá <strong>nombre y ubicación</strong>:</p>
          <ol>
            <li>Aparece una ventana para escribir el <strong>nombre del archivo</strong>.</li>
            <li>Elige la <strong>carpeta</strong> donde guardarlo.</li>
            <li>Haz clic en <strong>Guardar</strong>.</li>
          </ol>
        `},
        { tag: 'Nombres de archivo', html: `
          <h3>📝 Cómo nombrar bien tus archivos</h3>
          <p>Un buen nombre de archivo te ayuda a encontrarlo después. Sigue estas reglas:</p>
          <h4>✅ Buenos nombres</h4>
          <ul>
            <li><code>Ensayo_El_Cambio_Climatico_2B.docx</code></li>
            <li><code>Matematicas_Tarea5_MariaGarcia.pdf</code></li>
            <li><code>Biografia_Simona_Bolivar_2024.docx</code></li>
          </ul>
          <h4>❌ Malos nombres</h4>
          <ul>
            <li><code>Documento1.docx</code> (no dice nada)</li>
            <li><code>nuevo.docx</code> (igual de genérico)</li>
            <li><code>final final final definitivo.docx</code> (caótico)</li>
            <li><code>trabajodelcolegioquenosequehacer.docx</code> (muy largo)</li>
          </ul>
          <h4>📋 Reglas de oro</h4>
          <ul>
            <li>Incluye: <strong>tema + grado/curso + tu nombre + fecha</strong> si es necesario.</li>
            <li>Usa <strong>guión bajo (_)</strong> en vez de espacios.</li>
            <li>Evita caracteres especiales: <code>ñ</code>, <code>á</code>, <code>/</code>, <code>\</code>, <code>?</code>, <code>*</code>.</li>
            <li>Sé breve pero descriptivo (máximo 5-7 palabras).</li>
          </ul>
          <h4>📂 Extensiones de archivo</h4>
          <p>La parte después del punto indica el <strong>tipo de archivo</strong>:</p>
          <ul>
            <li><code>.docx</code>: documento de Word.</li>
            <li><code>.pdf</code>: documento portable (no editable normalmente).</li>
            <li><code>.xlsx</code>: hoja de cálculo de Excel.</li>
            <li><code>.pptx</code>: presentación de PowerPoint.</li>
            <li><code>.txt</code>: texto plano.</li>
            <li><code>.jpg</code>, <code>.png</code>: imágenes.</li>
          </ul>
        `}
      ],
      keywords: [
        { term: 'Fila home', hint: '¿Cuáles son las teclas de la fila home para cada mano?' },
        { term: 'QWERTY', hint: 'Investiga: ¿por qué se llama QWERTY y quién lo inventó?' },
        { term: 'Atajo de teclado', hint: '¿Cuál es el atajo para guardar en Windows y en Mac?' },
        { term: 'Ctrl + S', hint: '¿Qué pasa si presionas Ctrl + S la primera vez que guardas?' },
        { term: 'Extensión', hint: '¿Qué indica la extensión de un archivo y por qué es importante?' },
        { term: 'Postura', hint: '¿Por qué es importante la postura correcta al escribir?' },
        { term: 'Mecanografía', hint: '¿Cuál es el objetivo principal de aprender mecanografía?' }
      ],
      exercises: [
        { id: 'c5e1', n: 1, type: 'mc', prompt: 'La posición correcta de los dedos al escribir es:', options: [
          { value: 'a', label: 'Mirando el teclado' },
          { value: 'b', label: 'Sobre la fila home (ASDF - JKLÑ)' },
          { value: 'c', label: 'En cualquier posición' },
          { value: 'd', label: 'Solo con dos dedos' }
        ], answer: 'b' },
        { id: 'c5e2', n: 2, type: 'mc', prompt: 'El atajo para guardar en Windows es:', options: [
          { value: 'a', label: 'Ctrl + G' },
          { value: 'b', label: 'Ctrl + S' },
          { value: 'c', label: 'Ctrl + N' },
          { value: 'd', label: 'Ctrl + P' }
        ], answer: 'b' },
        { id: 'c5e3', n: 3, type: 'tf', prompt: 'Google Docs guarda automáticamente en la nube sin necesidad de presionar Ctrl + S.', answer: 'true' },
        { id: 'c5e4', n: 4, type: 'fill', prompt: 'La extensión de un documento de Word es _______.', answer: '.docx' }
      ],
      tasks: [
        { id: 'c5t1', title: '⌨️ Práctica de mecanografía', description: 'Entra a un sitio de práctica de mecanografía (typing.com, keybr.com o similar). Practica 15 minutos al día esta semana. Registra tu PPM inicial y final.', evidence: 'Capturas de tu progreso con la fecha y PPM.' },
        { id: 'c5t2', title: '📁 Organiza tu carpeta', description: 'Crea una carpeta llamada "Segundo_Basico_TAC" en Documentos. Dentro, crea 3 subcarpetas: "Tareas", "Proyectos", "Practica". Guarda un documento de prueba en cada una con un nombre descriptivo.', evidence: 'Captura de la estructura de carpetas.' }
      ],
      exam: {
        id: 'c5_mini', title: 'Mini-examen · Clase 5',
        description: 'Responde las 5 preguntas sobre teclado y archivos.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La fila home está compuesta por las teclas:', options: [
            { value: 'a', label: 'QWERTY' },
            { value: 'b', label: 'ASDF - JKLÑ' },
            { value: 'c', label: 'ZXCV - M,./' },
            { value: 'd', label: '1234567890' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál de estos nombres de archivo es MEJOR?', options: [
            { value: 'a', label: 'Documento1.docx' },
            { value: 'b', label: 'nuevo final bueno.docx' },
            { value: 'c', label: 'Ensayo_2B_MariaGarcia.docx' },
            { value: 'd', label: 'trabajoescuela.docx' }
          ], answer: 'c' },
          { id: 'q3', type: 'tf', prompt: 'Mirar el teclado mientras se escribe es un buen hábito.', answer: 'false' },
          { id: 'q4', type: 'mc', prompt: 'La extensión de una presentación de PowerPoint es:', options: [
            { value: 'a', label: '.docx' },
            { value: 'b', label: '.xlsx' },
            { value: 'c', label: '.pptx' },
            { value: 'd', label: '.pdf' }
          ], answer: 'c' },
          { id: 'q5', type: 'fill', prompt: 'En Mac, el atajo para guardar es ____ + S.', answer: 'Cmd' }
        ]
      }
    },

    {
      id: 'c6', num: 6, icon: '🏆',
      title: 'Repaso general + Examen final',
      tagline: 'Demuestra todo lo aprendido y obtén tu certificado de Segundo Básico.',
      info: [
        { tag: 'Resumen del grado', html: `
          <h3>🎓 Lo que aprendimos en este grado</h3>
          <p>¡Felicitaciones por llegar a la última clase! Has recorrido un camino increíble. Repasemos los 4 temas principales:</p>
          <div class="slide-grid">
            <div class="grid-item">
              <div class="icon">📝</div>
              <h5>Párrafos y estructura</h5>
              <p>Idea principal, idea secundaria, conectores, coherencia, cohesión, sangría.</p>
            </div>
            <div class="grid-item">
              <div class="icon">🔠</div>
              <h5>Mayúsculas</h5>
              <p>Nombres propios, lugares, instituciones, marcas, después de ¿ y !, títulos de obras.</p>
            </div>
            <div class="grid-item">
              <div class="icon">📖</div>
              <h5>Velocidad y comprensión</h5>
              <p>PPM, lectura por bloques, comprensión literal/inferencial/crítica, paráfrasis.</p>
            </div>
            <div class="grid-item">
              <div class="icon">💾</div>
              <h5>Guardar archivos</h5>
              <p>Atajos Ctrl/Cmd+S, nombres descriptivos, extensiones, fila home del teclado.</p>
            </div>
          </div>
        `},
        { tag: 'Tips para el examen', html: `
          <h3>💡 Consejos para el examen final</h3>
          <ul>
            <li><strong>Lee cada pregunta con calma.</strong> Tienes tiempo de sobra.</li>
            <li><strong>Si no sabes una respuesta, no te detengas.</strong> Pasa a la siguiente y vuelve después.</li>
            <li><strong>En las preguntas verdadero/falso</strong>, piensa: ¿es 100% verdad o 100% falso? Si tienes dudas, relee la pregunta.</li>
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
            <li><strong>Lee 15-20 minutos todos los días.</strong> Cualquier texto: noticias, cuentos, libros de tu interés.</li>
            <li><strong>Practica mecanografía</strong> en sitios como typing.com o keybr.com. Meta: 30+ PPM.</li>
            <li><strong>Escribe un diario personal</strong> en un documento de Word. 3 párrafos por día sobre tu día.</li>
            <li><strong>Usa conectores</strong> en todas tus redacciones. Empieza por "sin embargo" y "por lo tanto".</li>
            <li><strong>Practica la mayúscula</strong> cuando uses redes sociales (los comentarios también son texto).</li>
            <li><strong>Organiza tus archivos</strong> con nombres descriptivos desde el primer día.</li>
          </ul>
          <div class="slide-success">
            <span class="icon">🏆</span>
            <p><strong>¡Lo lograste!</strong> Al completar este curso has dado un paso enorme hacia el dominio de la comunicación escrita y digital. Sigue practicando y verás cómo cada vez es más natural y rápido.</p>
          </div>
        `}
      ],
      keywords: [
        { term: 'Coherencia', hint: 'En tus propias palabras: ¿qué es la coherencia textual?' },
        { term: 'Sangría', hint: '¿Cuántas formas de separar párrafos conoces?' },
        { term: 'Conector', hint: 'Escribe un párrafo corto de 3 oraciones con al menos 3 conectores diferentes.' },
        { term: 'Comprensión lectora', hint: '¿Cuál es la diferencia entre comprensión literal e inferencial?' },
        { term: 'PPM', hint: '¿Cómo se calculan las palabras por minuto de una lectura?' },
        { term: 'Guardar', hint: '¿Cuál es la diferencia entre "Guardar" y "Guardar como"?' }
      ],
      exercises: [
        { id: 'c6e1', n: 1, type: 'mc', prompt: '¿Cuál es el conector de CONTRASTE?', options: [
          { value: 'a', label: 'Además' },
          { value: 'b', label: 'Porque' },
          { value: 'c', label: 'Sin embargo' },
          { value: 'd', label: 'Por ejemplo' }
        ], answer: 'c' },
        { id: 'c6e2', n: 2, type: 'tf', prompt: 'La idea principal de un párrafo suele estar en la primera oración.', answer: 'true' },
        { id: 'c6e3', n: 3, type: 'mc', prompt: 'En un nombre de archivo, lo MEJOR es:', options: [
          { value: 'a', label: 'Llamarlo "Documento1"' },
          { value: 'b', label: 'Usar el tema + curso + tu nombre' },
          { value: 'c', label: 'Dejarlo sin nombre' },
          { value: 'd', label: 'Usar caracteres especiales' }
        ], answer: 'b' },
        { id: 'c6e4', n: 4, type: 'mc', prompt: 'La comprensión INFERENCIAL es:', options: [
          { value: 'a', label: 'Leer palabra por palabra' },
          { value: 'b', label: 'Deducir lo que no está escrito' },
          { value: 'c', label: 'Opinar sobre el texto' },
          { value: 'd', label: 'Copiar el texto' }
        ], answer: 'b' },
        { id: 'c6e5', n: 5, type: 'fill', prompt: 'La extensión de un documento de Word es _______.', answer: '.docx' }
      ],
      tasks: [
        { id: 'c6t1', title: '🎯 Proyecto final: Bitácora personal', description: 'Crea un documento de Word llamado "Bitacora_SegundoBasico_TuNombre.docx". Escribe 5 entradas (una por cada clase que dimos), cada una con: título, fecha, 3-4 párrafos usando correctamente mayúsculas, conectores y párrafos bien estructurados. Guárdalo en una carpeta organizada con nombre descriptivo.', evidence: 'Documento completo + captura de la carpeta organizada.' }
      ],
      exam: {
        id: 'c6_mini', title: 'Mini-examen · Clase 6',
        description: 'Repaso final antes del examen acumulativo.',
        questions: [
          { id: 'q1', type: 'mc', prompt: 'La sangría se coloca:', options: [
            { value: 'a', label: 'En todas las líneas' },
            { value: 'b', label: 'Solo en la primera línea del párrafo' },
            { value: 'c', label: 'Solo al final' },
            { value: 'd', label: 'Nunca' }
          ], answer: 'b' },
          { id: 'q2', type: 'mc', prompt: '¿Cuál de estos nombres propios va con MAYÚSCULA?', options: [
            { value: 'a', label: 'lunes' },
            { value: 'b', label: 'Guatemala' },
            { value: 'c', label: 'verano' },
            { value: 'd', label: 'español' }
          ], answer: 'b' },
          { id: 'q3', type: 'tf', prompt: 'La velocidad lectora se mide en palabras por minuto (PPM).', answer: 'true' },
          { id: 'q4', type: 'mc', prompt: 'El atajo para GUARDAR en Mac es:', options: [
            { value: 'a', label: 'Ctrl + S' },
            { value: 'b', label: 'Cmd + S' },
            { value: 'c', label: 'Alt + S' },
            { value: 'd', label: 'Mayús + S' }
          ], answer: 'b' },
          { id: 'q5', type: 'fill', prompt: 'La fila home del teclado está formada por las teclas ____ y JKLÑ.', answer: 'ASDF' }
        ]
      },
      finalExam: {
        id: 'c6_final', title: '🏆 Examen Final · Segundo Básico',
        description: '15 preguntas cubriendo los 4 temas del grado. Necesitas 60% para aprobar.',
        passMark: 60,
        questions: [
          { id: 'f1', type: 'mc', prompt: 'Tema 1 (Párrafos) · Un párrafo bien escrito trata sobre:', options: [{ value: 'a', label: 'Muchas ideas' }, { value: 'b', label: 'Una sola idea principal' }, { value: 'c', label: 'Solo una oración' }, { value: 'd', label: 'Sin ideas' }], answer: 'b' },
          { id: 'f2', type: 'mc', prompt: 'Tema 1 (Párrafos) · "Sin embargo" es un conector de:', options: [{ value: 'a', label: 'Adición' }, { value: 'b', label: 'Causa' }, { value: 'c', label: 'Contraste' }, { value: 'd', label: 'Consecuencia' }], answer: 'c' },
          { id: 'f3', type: 'mc', prompt: 'Tema 1 (Párrafos) · ¿Qué se coloca al inicio de la primera línea de un párrafo?', options: [{ value: 'a', label: 'Un número' }, { value: 'b', label: 'Una sangría' }, { value: 'c', label: 'Un punto' }, { value: 'd', label: 'Una imagen' }], answer: 'b' },
          { id: 'f4', type: 'tf', prompt: 'Tema 2 (Mayúsculas) · Los días de la semana en español van con mayúscula.', answer: 'false' },
          { id: 'f5', type: 'mc', prompt: 'Tema 2 (Mayúsculas) · ¿Cuál de estos NO va con mayúscula?', options: [{ value: 'a', label: 'María' }, { value: 'b', label: 'Guatemala' }, { value: 'c', label: 'enero' }, { value: 'd', label: 'Universidad' }], answer: 'c' },
          { id: 'f6', type: 'tf', prompt: 'Tema 2 (Mayúsculas) · Los nombres de ciudades, países e instituciones van con mayúscula.', answer: 'true' },
          { id: 'f7', type: 'mc', prompt: 'Tema 3 (Velocidad lectora) · La velocidad lectora se mide en:', options: [{ value: 'a', label: 'Páginas por hora' }, { value: 'b', label: 'Palabras por minuto' }, { value: 'c', label: 'Letras por segundo' }, { value: 'd', label: 'Párrafos por día' }], answer: 'b' },
          { id: 'f8', type: 'mc', prompt: 'Tema 3 (Velocidad) · La comprensión INFERENCIAL es:', options: [{ value: 'a', label: 'Solo leer lo literal' }, { value: 'b', label: 'Deducir lo que no está escrito' }, { value: 'c', label: 'Criticar el texto' }, { value: 'd', label: 'Traducir' }], answer: 'b' },
          { id: 'f9', type: 'tf', prompt: 'Tema 3 (Velocidad) · Pronunciar mentalmente cada palabra (subvocalización) aumenta la velocidad de lectura.', answer: 'false' },
          { id: 'f10', type: 'mc', prompt: 'Tema 4 (Archivos) · El atajo para guardar en Windows es:', options: [{ value: 'a', label: 'Ctrl + G' }, { value: 'b', label: 'Ctrl + S' }, { value: 'c', label: 'Ctrl + N' }, { value: 'd', label: 'Ctrl + P' }], answer: 'b' },
          { id: 'f11', type: 'mc', prompt: 'Tema 4 (Archivos) · La fila home del teclado es:', options: [{ value: 'a', label: 'QWERTY' }, { value: 'b', label: 'ASDF - JKLÑ' }, { value: 'c', label: '1234567890' }, { value: 'd', label: 'ZXCVBNM' }], answer: 'b' },
          { id: 'f12', type: 'mc', prompt: 'Tema 4 (Archivos) · La extensión de un documento de Word es:', options: [{ value: 'a', label: '.docx' }, { value: 'b', label: '.xlsx' }, { value: 'c', label: '.pptx' }, { value: 'd', label: '.pdf' }], answer: 'a' },
          { id: 'f13', type: 'tf', prompt: 'Tema 4 (Archivos) · Google Docs guarda automáticamente en la nube.', answer: 'true' },
          { id: 'f14', type: 'mc', prompt: 'Tema general · Un párrafo coherente es aquel cuyas ideas:', options: [{ value: 'a', label: 'No tienen relación' }, { value: 'b', label: 'Tienen sentido lógico entre sí' }, { value: 'c', label: 'Son muy cortas' }, { value: 'd', label: 'Están en inglés' }], answer: 'b' },
          { id: 'f15', type: 'fill', prompt: 'Tema general · La primera línea de un párrafo tiene un pequeño espacio en blanco llamado _______.', answer: 'sangría' }
        ]
      }
    }
  ]
};
