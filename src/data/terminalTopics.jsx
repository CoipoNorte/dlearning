/* ============================================
   terminalTopics.jsx — Temas de Terminal
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import AeroCard from '../components/ui/AeroCard'

function TermIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📖 ¿Qué es la Terminal?</h2>
      <p className="text-sm text-win-gray-600">
        La terminal (o CLI) es una interfaz de texto para hablar con tu computadora. 
        Es más rápida que la interfaz gráfica para muchas tareas de desarrollo.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="Terminales por sistema" icon="💻" variant="blue">
            <ul className="space-y-1.5 text-xs">
              <li><strong>Windows:</strong> CMD, PowerShell, Windows Terminal, Git Bash</li>
              <li><strong>macOS:</strong> Terminal.app, iTerm2</li>
              <li><strong>Linux:</strong> GNOME Terminal, Konsole, Alacritty</li>
              <li><strong>Cross-platform:</strong> Terminal integrada de VSCode (Ctrl+`)</li>
            </ul>
          </AeroCard>
          <AeroCard title="Shell vs Terminal" icon="🤔" variant="default">
            <ul className="space-y-1 text-xs">
              <li><strong>Terminal</strong> — La ventana/app donde escribes (la interfaz)</li>
              <li><strong>Shell</strong> — El programa que interpreta tus comandos (el motor)</li>
              <li><strong>bash</strong> — Shell default en Linux/macOS</li>
              <li><strong>zsh</strong> — Shell moderno en macOS (default actual)</li>
              <li><strong>PowerShell</strong> — Shell de Windows</li>
              <li><strong>cmd</strong> — Shell antiguo de Windows (evitar)</li>
            </ul>
          </AeroCard>
        </div>
        <div className="space-y-4">
          <CodeBlock title="Primeros comandos" language="bash"
            code={`# ¿Dónde estoy? (Print Working Directory)
pwd
# /home/usuario/proyectos

# ¿Qué hay aquí? (List)
ls          # Linux/Mac
dir         # Windows CMD

# Moverse a una carpeta (Change Directory)
cd mi-carpeta
cd ..       # subir un nivel
cd ~        # ir al home
cd /        # ir a la raíz

# Limpiar pantalla
clear       # Linux/Mac
cls         # Windows CMD

# Ver historial de comandos
history

# Manual de un comando
man ls      # Linux/Mac
help dir    # Windows CMD

# Cancelar un comando en ejecución
Ctrl + C`} />
          <AeroCard title="Tip: Tab Autocompletado" icon="💡" variant="green">
            <p className="text-xs">
              Presiona <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Tab</kbd> para 
              autocompletar nombres de archivos y carpetas. Es tu mejor amigo en la terminal.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function TermNav() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📂 Navegación</h2>
      <p className="text-sm text-win-gray-600">Moverse por el sistema de archivos desde la terminal.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Navegación" language="bash"
          code={`# ── RUTAS ──
# Absoluta: desde la raíz
cd /home/usuario/proyectos

# Relativa: desde donde estás
cd proyectos/mi-app

# Atajos de ruta
.     # directorio actual
..    # directorio padre
~     # home del usuario
-     # directorio anterior (volver)

# ── EJEMPLOS ──
cd ~/Desktop          # ir al escritorio
cd ../..              # subir 2 niveles
cd -                  # volver al último directorio

# ── LISTAR ARCHIVOS ──
ls                    # básico
ls -l                 # lista detallada
ls -la                # incluir ocultos
ls -lh                # tamaños legibles (KB, MB)
ls -lt                # ordenar por fecha
ls *.js               # solo archivos .js

# Windows equivalente:
dir                   # básico
dir /a                # incluir ocultos
dir /o:d              # ordenar por fecha

# ── VER ÁRBOL ──
tree                  # árbol de carpetas
tree -L 2             # solo 2 niveles
tree -I node_modules  # ignorar carpeta`} />
        <div className="space-y-4">
          <AeroCard title="Rutas explicadas" icon="🗺️" variant="blue">
            <pre className="text-[10px] font-code text-win-gray-600">
{`/                    ← raíz del sistema
├── home/
│   └── usuario/     ← ~ (home)
│       ├── Desktop/
│       ├── Documents/
│       └── proyectos/
│           ├── app1/    ← cd app1
│           └── app2/    ← cd ../app2
├── etc/
├── var/
└── usr/`}
            </pre>
          </AeroCard>
          <AeroCard title="Atajos rápidos" icon="⚡" variant="default">
            <ul className="space-y-1 text-xs">
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Tab</kbd> — Autocompletar</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">↑ / ↓</kbd> — Historial de comandos</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+R</kbd> — Buscar en historial</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+L</kbd> — Limpiar pantalla</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+A</kbd> — Ir al inicio de la línea</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+E</kbd> — Ir al final de la línea</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function ComingSoon({ title, icon }) {
  return () => (
    <div className="text-center py-12">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-base font-semibold text-win-gray-700 mt-3">{title}</h3>
      <p className="text-sm text-win-gray-400 mt-1">Contenido próximamente...</p>
    </div>
  )
}

export const terminalTopics = {
  'term-intro':   TermIntro,
  'term-nav':     TermNav,
  'term-files':   ComingSoon({ title: 'Archivos y carpetas', icon: '📁' }),
  'term-text':    ComingSoon({ title: 'Texto y búsqueda', icon: '🔍' }),
  'term-perms':   ComingSoon({ title: 'Permisos', icon: '🔒' }),
  'term-pipes':   ComingSoon({ title: 'Pipes y redirección', icon: '🔗' }),
  'term-scripts': ComingSoon({ title: 'Scripts (.sh/.bat)', icon: '📜' }),
  'term-env':     ComingSoon({ title: 'Variables de entorno', icon: '🌍' }),
  'term-ssh':     ComingSoon({ title: 'SSH y redes', icon: '🌐' }),
  'term-tips':    ComingSoon({ title: 'Tips y aliases', icon: '💡' }),
}