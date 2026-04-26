/* ============================================
   vscodeTopics.jsx — TODOS los temas de VSCode (10/10)
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import AeroCard from '../components/ui/AeroCard'
import LiveDemo from '../components/ui/LiveDemo'

function VscIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🖥️ Interfaz de VSCode</h2>
      <p className="text-sm text-win-gray-600">Conocer las 5 zonas principales del editor.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Las 5 zonas" icon="🗺️" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><strong>Activity Bar</strong> — Iconos izquierda: Explorer, Search, Git, Debug, Extensions</li>
            <li><strong>Sidebar</strong> — Panel de explorador, búsqueda, Git</li>
            <li><strong>Editor</strong> — Donde escribes. Soporta tabs y split</li>
            <li><strong>Panel inferior</strong> — Terminal, Problems, Output</li>
            <li><strong>Status Bar</strong> — Branch Git, lenguaje, errores</li>
          </ul>
        </AeroCard>
        <div className="space-y-4">
          <LiveDemo title="Layout VSCode">
            <div className="bg-win-gray-800 rounded text-[10px] font-code text-white/80 overflow-hidden">
              <div className="bg-win-gray-700 px-2 py-1 text-white/50 flex gap-2"><span>File</span><span>Edit</span><span>View</span></div>
              <div className="flex" style={{ height: 160 }}>
                <div className="w-7 bg-win-gray-900 flex flex-col items-center gap-1.5 py-2 text-white/40 text-[8px]">
                  <span>📁</span><span>🔍</span><span>🔀</span><span>🐛</span><span>🧩</span>
                </div>
                <div className="w-28 bg-win-gray-800 border-r border-white/10 p-1.5">
                  <p className="text-white/40 text-[8px] uppercase mb-1">Explorer</p>
                  <p className="text-white/70 text-[9px]">📁 src/</p>
                  <p className="text-white/50 text-[9px] pl-2">📄 App.jsx</p>
                </div>
                <div className="flex-1 p-2 text-[9px]">
                  <p><span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{'}</p>
                  <p className="pl-3"><span className="text-purple-400">return</span> &lt;<span className="text-blue-400">div</span>&gt;Hello&lt;/<span className="text-blue-400">div</span>&gt;</p>
                  <p>{'}'}</p>
                </div>
              </div>
              <div className="bg-win-accent text-white/80 px-2 py-0.5 text-[8px] flex justify-between">
                <span>🔀 main</span><span>UTF-8</span>
              </div>
            </div>
          </LiveDemo>
          <AeroCard title="Abrir desde terminal" icon="⚡" variant="default">
            <pre className="text-[11px] font-code bg-win-gray-100 p-2 rounded">{`code .          # abrir carpeta actual
code archivo.js # abrir archivo
code -n .       # nueva ventana`}</pre>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscShortcuts() {
  const shortcuts = [
    { keys: 'Ctrl+P', desc: 'Abrir archivo rápido' },
    { keys: 'Ctrl+Shift+P', desc: 'Command Palette' },
    { keys: 'Ctrl+B', desc: 'Toggle sidebar' },
    { keys: 'Ctrl+`', desc: 'Toggle terminal' },
    { keys: 'Ctrl+D', desc: 'Seleccionar siguiente ocurrencia' },
    { keys: 'Ctrl+Shift+K', desc: 'Borrar línea' },
    { keys: 'Alt+↑/↓', desc: 'Mover línea' },
    { keys: 'Ctrl+Shift+L', desc: 'Seleccionar TODAS las ocurrencias' },
    { keys: 'Ctrl+/', desc: 'Comentar línea' },
    { keys: 'Ctrl+F', desc: 'Buscar en archivo' },
    { keys: 'Ctrl+Shift+F', desc: 'Buscar en proyecto' },
    { keys: 'Ctrl+H', desc: 'Buscar y reemplazar' },
    { keys: 'F2', desc: 'Renombrar símbolo' },
    { keys: 'Ctrl+G', desc: 'Ir a línea' },
    { keys: 'Ctrl+Tab', desc: 'Cambiar tabs' },
  ]
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">⌨️ Atajos Esenciales</h2>
      <p className="text-sm text-win-gray-600">Los atajos que te hacen 10x más rápido.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Top 15 atajos" icon="⭐" variant="blue">
          <div className="space-y-0.5">
            {shortcuts.map(s => (
              <div key={s.keys} className="flex items-center justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                <kbd className="px-1.5 py-0.5 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">{s.keys}</kbd>
                <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
              </div>
            ))}
          </div>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Navegación" icon="🧭" variant="default">
            <div className="space-y-0.5">
              {[
                { keys: 'Ctrl+\\', desc: 'Dividir editor' },
                { keys: 'Ctrl+1/2/3', desc: 'Ir al panel 1, 2 o 3' },
                { keys: 'Ctrl+W', desc: 'Cerrar tab' },
                { keys: 'Ctrl+Shift+E', desc: 'Explorer' },
                { keys: 'Ctrl+Shift+G', desc: 'Git panel' },
                { keys: 'Ctrl+Shift+X', desc: 'Extensions' },
              ].map(s => (
                <div key={s.keys} className="flex items-center justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                  <kbd className="px-1.5 py-0.5 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">{s.keys}</kbd>
                  <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
                </div>
              ))}
            </div>
          </AeroCard>
          <AeroCard title="El más importante" icon="🏆" variant="green">
            <p className="text-xs">
              <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+Shift+P</kbd> —
              Command Palette. Desde ahí accedes a <strong>CUALQUIER</strong> acción de VSCode.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscExtensions() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🧩 Extensiones</h2>
      <p className="text-sm text-win-gray-600">Las extensiones esenciales para desarrollo web.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Esenciales" icon="⭐" variant="blue">
          <ul className="space-y-2 text-xs">
            {[
              { name: 'Prettier', desc: 'Formateo automático de código' },
              { name: 'ESLint', desc: 'Detectar errores de JavaScript' },
              { name: 'GitLens', desc: 'Superpoderes de Git en el editor' },
              { name: 'Auto Rename Tag', desc: 'Renombrar tags HTML automáticamente' },
              { name: 'Path Intellisense', desc: 'Autocompletar rutas de archivos' },
              { name: 'Error Lens', desc: 'Errores inline en el código' },
              { name: 'Thunder Client', desc: 'Probar APIs (como Postman)' },
              { name: 'Live Server', desc: 'Servidor local con auto-refresh' },
            ].map(ext => (
              <li key={ext.name} className="border-b border-win-gray-100 pb-1 last:border-0">
                <strong>{ext.name}</strong>
                <span className="text-win-gray-500"> — {ext.desc}</span>
              </li>
            ))}
          </ul>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Temas populares" icon="🎨" variant="default">
            <ul className="space-y-1 text-xs">
              <li>🌙 <strong>One Dark Pro</strong> — El más popular oscuro</li>
              <li>🧛 <strong>Dracula</strong> — Colores vibrantes</li>
              <li>🔵 <strong>Material Theme</strong> — Material Design</li>
              <li>☀️ <strong>GitHub Theme</strong> — Light y dark</li>
              <li>🌃 <strong>Tokyo Night</strong> — Tonos azules suaves</li>
            </ul>
          </AeroCard>
          <CodeBlock title="Instalar por terminal" language="bash"
            code={`# Instalar extensión
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint

# Listar extensiones instaladas
code --list-extensions

# Desinstalar
code --uninstall-extension nombre.extension`} />
          <AeroCard title="Tip: Profiles" icon="💡" variant="green">
            <p className="text-xs">
              Crea <strong>Profiles</strong> para diferentes proyectos: un perfil para React, otro para Python, etc.
              Cada uno con sus extensiones y settings propios.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscTerminal() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">⬛ Terminal Integrada</h2>
      <p className="text-sm text-win-gray-600">VSCode tiene una terminal completa dentro del editor.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Atajos de terminal" icon="⌨️" variant="blue">
          <div className="space-y-0.5">
            {[
              { keys: 'Ctrl+`', desc: 'Abrir/cerrar terminal' },
              { keys: 'Ctrl+Shift+`', desc: 'Nueva terminal' },
              { keys: 'Ctrl+Shift+5', desc: 'Dividir terminal' },
              { keys: 'Ctrl+PgUp/PgDn', desc: 'Cambiar entre terminales' },
              { keys: 'Ctrl+Shift+C', desc: 'Copiar selección' },
              { keys: 'Ctrl+Shift+V', desc: 'Pegar' },
            ].map(s => (
              <div key={s.keys} className="flex items-center justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">{s.keys}</kbd>
                <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
              </div>
            ))}
          </div>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Configurar shell por defecto" icon="⚙️" variant="default">
            <p className="text-xs mb-2">En settings.json:</p>
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded">{`// Windows
"terminal.integrated.defaultProfile.windows": "Git Bash"

// macOS/Linux
"terminal.integrated.defaultProfile.osx": "zsh"`}</pre>
          </AeroCard>
          <AeroCard title="Tips" icon="💡" variant="green">
            <ul className="space-y-1 text-xs">
              <li>✅ Puedes tener múltiples terminales a la vez</li>
              <li>✅ Dividir horizontal y verticalmente</li>
              <li>✅ Renombrar terminales para organizarte</li>
              <li>✅ El terminal abre en la carpeta del proyecto</li>
              <li>✅ Click en rutas de error para ir al archivo</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscGit() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔀 Git en VSCode</h2>
      <p className="text-sm text-win-gray-600">VSCode tiene integración nativa con Git sin extensiones.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Panel Source Control" icon="🔀" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li><strong>Ctrl+Shift+G</strong> — Abrir panel Git</li>
            <li><strong>Changes</strong> — Archivos modificados (click para ver diff)</li>
            <li><strong>Staged</strong> — Archivos listos para commit (click + para stagear)</li>
            <li><strong>Commit</strong> — Escribir mensaje y hacer commit</li>
            <li><strong>... menú</strong> — Pull, Push, Fetch, Branch, Stash, etc</li>
          </ul>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Features visuales" icon="👁️" variant="default">
            <ul className="space-y-1 text-xs">
              <li>🟢 <strong>Verde</strong> — Líneas agregadas</li>
              <li>🔴 <strong>Rojo</strong> — Líneas eliminadas</li>
              <li>🔵 <strong>Azul</strong> — Líneas modificadas</li>
              <li>📌 <strong>Gutter</strong> — Indicadores al lado de números de línea</li>
              <li>🔍 <strong>Inline diff</strong> — Click en los indicadores para ver cambios</li>
            </ul>
          </AeroCard>
          <AeroCard title="GitLens (extensión)" icon="🔮" variant="green">
            <ul className="space-y-1 text-xs">
              <li>👤 Ver quién editó cada línea (blame)</li>
              <li>📜 Historial completo de un archivo</li>
              <li>🔍 Comparar ramas visualmente</li>
              <li>📊 Gráfico de commits interactivo</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscDebug() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🐛 Debugging</h2>
      <p className="text-sm text-win-gray-600">Depurar código paso a paso desde VSCode.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="Controles de debug" icon="🎛️" variant="blue">
            <div className="space-y-0.5">
              {[
                { keys: 'F5', desc: 'Iniciar/Continuar debug' },
                { keys: 'F9', desc: 'Toggle breakpoint' },
                { keys: 'F10', desc: 'Step Over (siguiente línea)' },
                { keys: 'F11', desc: 'Step Into (entrar a función)' },
                { keys: 'Shift+F11', desc: 'Step Out (salir de función)' },
                { keys: 'Shift+F5', desc: 'Detener debug' },
                { keys: 'Ctrl+Shift+F5', desc: 'Reiniciar debug' },
              ].map(s => (
                <div key={s.keys} className="flex justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                  <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">{s.keys}</kbd>
                  <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
                </div>
              ))}
            </div>
          </AeroCard>
          <AeroCard title="Tipos de breakpoints" icon="🔴" variant="default">
            <ul className="space-y-1 text-xs">
              <li>🔴 <strong>Normal</strong> — Pausa en esa línea</li>
              <li>🟡 <strong>Condicional</strong> — Solo si se cumple una condición</li>
              <li>📝 <strong>Logpoint</strong> — Imprime sin pausar (como console.log)</li>
            </ul>
          </AeroCard>
        </div>
        <CodeBlock title="launch.json (Node.js)" language="json"
          code={`{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run Server",
      "program": "\${workspaceFolder}/server.js",
      "restart": true,
      "console": "integratedTerminal"
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Open Chrome",
      "url": "http://localhost:5173",
      "webRoot": "\${workspaceFolder}/src"
    }
  ]
}`} />
      </div>
    </div>
  )
}

function VscSnippets() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">✂️ Snippets</h2>
      <p className="text-sm text-win-gray-600">Plantillas de código que se expanden al escribir un prefijo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="Snippets built-in" icon="📋" variant="blue">
            <p className="text-xs mb-2">Escribe el prefijo y presiona Tab:</p>
            <ul className="space-y-1 text-xs">
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">!</code> o <code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">html:5</code> — Estructura HTML completa</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">div.clase</code> — {'<div class="clase"></div>'}</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">{'ul>li*5'}</code> — Lista con 5 items (Emmet)</li>              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">log</code> — console.log() (JS)</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">imp</code> — import statement</li>
            </ul>
          </AeroCard>
          <AeroCard title="Emmet (HTML/CSS)" icon="⚡" variant="green">
            <ul className="space-y-1 text-xs">
              <li><code className="font-code text-[10px]">{'div.card>h2+p'}</code> → div con clase, h2 y p dentro</li>              <li><code className="font-code text-[10px]">{'ul>li.item*3'}</code> → ul con 3 li con clase</li>
              <li><code className="font-code text-[10px]">m10-20</code> → margin: 10px 20px (en CSS)</li>
              <li><code className="font-code text-[10px]">bgc#333</code> → background-color: #333</li>
            </ul>
          </AeroCard>
        </div>
        <CodeBlock title="Crear snippet propio" language="json"
          code={`// File → Preferences → Configure User Snippets
// Seleccionar lenguaje (ej: javascript.json)

{
  "React Component": {
    "prefix": "rfc",
    "body": [
      "export default function \${1:Component}() {",
      "  return (",
      "    <div>",
      "      <h1>\${1:Component}</h1>",
      "      \$0",
      "    </div>",
      "  )",
      "}"
    ],
    "description": "React Functional Component"
  },
  "Console Log": {
    "prefix": "clg",
    "body": "console.log('\${1:label}:', \${2:variable});",
    "description": "Console log con label"
  },
  "Try Catch": {
    "prefix": "tc",
    "body": [
      "try {",
      "  \$0",
      "} catch (error) {",
      "  console.error(error);",
      "}"
    ]
  }
}

// $1, $2 = tab stops (donde salta el cursor)
// $0 = posición final del cursor
// \${1:placeholder} = con texto por defecto`} />
      </div>
    </div>
  )
}

function VscSettings() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">⚙️ Configuración</h2>
      <p className="text-sm text-win-gray-600">Personalizar VSCode para tu flujo de trabajo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="settings.json recomendado" language="json"
          code={`{
  // ── EDITOR ──
  "editor.fontSize": 14,
  "editor.fontFamily": "'JetBrains Mono', monospace",
  "editor.fontLigatures": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.lineHeight": 1.6,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,

  // ── FORMATO AUTOMÁTICO ──
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // ── ARCHIVOS ──
  "files.autoSave": "onFocusChange",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,

  // ── TERMINAL ──
  "terminal.integrated.fontSize": 13,

  // ── EXPLORER ──
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,

  // ── EMMET ──
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}`} />
        <div className="space-y-4">
          <AeroCard title="Acceder a settings" icon="📂" variant="blue">
            <ul className="space-y-1 text-xs">
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+,</kbd> — Settings UI</li>
              <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+Shift+P</kbd> → "Open Settings JSON"</li>
              <li><strong>User</strong> — Global, aplica a todo</li>
              <li><strong>Workspace</strong> — Solo este proyecto (.vscode/settings.json)</li>
            </ul>
          </AeroCard>
          <AeroCard title="Settings Sync" icon="☁️" variant="green">
            <p className="text-xs">
              <strong>Settings Sync</strong> sincroniza tu configuración, extensiones, snippets y keybindings
              entre computadoras. Actívalo con tu cuenta de GitHub o Microsoft.
            </p>
          </AeroCard>
          <AeroCard title="Workspace settings" icon="📁" variant="default">
            <p className="text-xs">
              Crea <code className="font-code text-[10px]">.vscode/settings.json</code> en tu proyecto para
              configuración específica. Se comparte con el equipo via Git.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscMulti() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">👆 Multi-cursor y Selección</h2>
      <p className="text-sm text-win-gray-600">Editar múltiples líneas a la vez como un pro.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Multi-cursor" icon="👆" variant="blue">
          <div className="space-y-0.5">
            {[
              { keys: 'Alt+Click', desc: 'Agregar cursor donde clickeas' },
              { keys: 'Ctrl+Alt+↑/↓', desc: 'Agregar cursor arriba/abajo' },
              { keys: 'Ctrl+D', desc: 'Seleccionar siguiente ocurrencia' },
              { keys: 'Ctrl+Shift+L', desc: 'Seleccionar TODAS las ocurrencias' },
              { keys: 'Ctrl+U', desc: 'Deshacer última selección' },
              { keys: 'Alt+Shift+I', desc: 'Cursor al final de cada línea seleccionada' },
              { keys: 'Ctrl+L', desc: 'Seleccionar línea completa' },
              { keys: 'Alt+Shift+Drag', desc: 'Selección rectangular (columna)' },
              { keys: 'Ctrl+Shift+K', desc: 'Borrar línea completa' },
              { keys: 'Alt+Shift+↑/↓', desc: 'Duplicar línea arriba/abajo' },
            ].map(s => (
              <div key={s.keys} className="flex justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">{s.keys}</kbd>
                <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
              </div>
            ))}
          </div>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Ejemplo práctico" icon="🎬" variant="default">
            <p className="text-xs mb-2">Renombrar "color" por "colour" en todo el archivo:</p>
            <ol className="space-y-1 text-xs">
              <li>1. Selecciona la palabra <code className="font-code text-[10px]">color</code></li>
              <li>2. <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+Shift+L</kbd> selecciona TODAS</li>
              <li>3. Escribe <code className="font-code text-[10px]">colour</code></li>
              <li>4. Todas cambian a la vez ✨</li>
            </ol>
          </AeroCard>
          <AeroCard title="Selección de columna" icon="📊" variant="green">
            <p className="text-xs">
              <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Alt+Shift+Drag</kbd> para
              seleccionar una columna vertical. Perfecto para editar datos tabulares o múltiples imports.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscTips() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🏆 Tips Pro</h2>
      <p className="text-sm text-win-gray-600">Trucos avanzados que te hacen más productivo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Tips del día a día" icon="💡" variant="blue">
          <ul className="space-y-1.5 text-xs">
            <li>✅ <strong>Zen Mode</strong> (Ctrl+K Z) — Pantalla completa sin distracciones</li>
            <li>✅ <strong>Breadcrumbs</strong> — Muestra la ruta del archivo actual arriba</li>
            <li>✅ <strong>Sticky Scroll</strong> — Los scopes se pegan arriba al hacer scroll</li>
            <li>✅ <strong>Timeline</strong> — Historial local del archivo (sin Git)</li>
            <li>✅ <strong>Peek Definition</strong> (Alt+F12) — Ver definición sin cambiar de archivo</li>
            <li>✅ <strong>Go to Definition</strong> (F12) — Ir a donde se definió</li>
            <li>✅ <strong>Find All References</strong> (Shift+F12) — Dónde se usa</li>
            <li>✅ <strong>Rename Symbol</strong> (F2) — Renombrar en todo el proyecto</li>
            <li>✅ <strong>Quick Fix</strong> (Ctrl+.) — Sugerencias de corrección</li>
            <li>✅ <strong>Fold/Unfold</strong> (Ctrl+Shift+[/]) — Colapsar bloques</li>
          </ul>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Workspace multi-root" icon="📁" variant="default">
            <p className="text-xs">
              Abre múltiples carpetas en una ventana: File → Add Folder to Workspace.
              Perfecto para frontend + backend juntos.
            </p>
          </AeroCard>
          <AeroCard title="Tasks (automatizar)" icon="🤖" variant="default">
            <p className="text-xs mb-2">Crear .vscode/tasks.json para tareas repetitivas:</p>
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded">
              {`{
  "tasks": [{
    "label": "Dev Server",
    "type": "shell",
    "command": "npm run dev",
    "group": "build"
  }]
}`}
            </pre>
          </AeroCard>
          <AeroCard title="Keybindings personalizados" icon="⌨️" variant="green">
            <p className="text-xs">
              <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+K Ctrl+S</kbd> para
              abrir la lista de atajos. Puedes buscar, cambiar o agregar los tuyos propios.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

export const vscodeTopics = {
  'vsc-intro': VscIntro,
  'vsc-shortcuts': VscShortcuts,
  'vsc-extensions': VscExtensions,
  'vsc-terminal': VscTerminal,
  'vsc-git': VscGit,
  'vsc-debug': VscDebug,
  'vsc-snippets': VscSnippets,
  'vsc-settings': VscSettings,
  'vsc-multi': VscMulti,
  'vsc-tips': VscTips,
}