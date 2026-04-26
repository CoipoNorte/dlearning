/* ============================================
   vscodeTopics.jsx — Temas de VSCode
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import AeroCard from '../components/ui/AeroCard'
import LiveDemo from '../components/ui/LiveDemo'

function VscIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🖥️ Interfaz de VSCode</h2>
      <p className="text-sm text-win-gray-600">
        Visual Studio Code es el editor más popular del mundo. Conocer su interfaz es el primer paso.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Las 5 zonas principales" icon="🗺️" variant="blue">
          <ul className="space-y-2 text-xs">
            <li><strong>Activity Bar (izquierda)</strong> — Iconos para cambiar de panel: Explorer, Search, Git, Debug, Extensions</li>
            <li><strong>Sidebar</strong> — Explorador de archivos, búsqueda, Git...</li>
            <li><strong>Editor</strong> — Donde escribes código. Soporta tabs y split.</li>
            <li><strong>Panel inferior</strong> — Terminal, Problems, Output, Debug Console</li>
            <li><strong>Status Bar (abajo)</strong> — Branch de Git, lenguaje, encoding, errores</li>
          </ul>
        </AeroCard>
        <div className="space-y-4">
          <LiveDemo title="Layout de VSCode">
            <div className="bg-win-gray-800 rounded text-[10px] font-code text-white/80 overflow-hidden">
              <div className="bg-win-gray-700 px-2 py-1 text-white/50 flex gap-2">
                <span>File</span><span>Edit</span><span>View</span><span>Terminal</span><span>Help</span>
              </div>
              <div className="flex" style={{ height: 200 }}>
                <div className="w-8 bg-win-gray-900 flex flex-col items-center gap-2 py-2 text-white/40">
                  <span>📁</span><span>🔍</span><span>🔀</span><span>🐛</span><span>🧩</span>
                </div>
                <div className="w-36 bg-win-gray-800 border-r border-white/10 p-2">
                  <p className="text-white/40 text-[9px] uppercase mb-1">Explorer</p>
                  <p className="text-white/70">📁 src/</p>
                  <p className="text-white/50 pl-3">📄 App.jsx</p>
                  <p className="text-white/50 pl-3">📄 index.css</p>
                  <p className="text-white/70">📄 package.json</p>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="bg-win-gray-700 px-2 py-0.5 text-[9px] flex gap-2">
                    <span className="text-white/70 bg-win-gray-800 px-2 py-0.5 rounded-t">App.jsx ✕</span>
                    <span className="text-white/40">index.css</span>
                  </div>
                  <div className="flex-1 p-2 text-white/50">
                    <p><span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> {'<'}<span className="text-blue-400">div</span>{'>'}Hello{'</'}<span className="text-blue-400">div</span>{'>'}</p>
                    <p>{'}'}</p>
                  </div>
                </div>
              </div>
              <div className="bg-win-accent text-white/80 px-2 py-0.5 text-[9px] flex justify-between">
                <span>🔀 main</span><span>JavaScript</span><span>UTF-8</span>
              </div>
            </div>
          </LiveDemo>
          <AeroCard title="Abrir VSCode desde terminal" icon="⚡" variant="default">
            <pre className="text-[11px] font-code bg-win-gray-100 p-2 rounded">
{`# Abrir carpeta actual
code .

# Abrir archivo específico
code archivo.js

# Abrir en nueva ventana
code -n .`}
            </pre>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function VscShortcuts() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">⌨️ Atajos Esenciales</h2>
      <p className="text-sm text-win-gray-600">Estos atajos te harán 10x más rápido. Aprende los top 20.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Los más importantes" icon="⭐" variant="blue">
          <div className="space-y-1">
            {[
              { keys: 'Ctrl+P', desc: 'Abrir archivo rápido' },
              { keys: 'Ctrl+Shift+P', desc: 'Command Palette (TODAS las acciones)' },
              { keys: 'Ctrl+B', desc: 'Toggle sidebar' },
              { keys: 'Ctrl+`', desc: 'Toggle terminal' },
              { keys: 'Ctrl+S', desc: 'Guardar' },
              { keys: 'Ctrl+Z / Y', desc: 'Deshacer / Rehacer' },
              { keys: 'Ctrl+D', desc: 'Seleccionar siguiente ocurrencia' },
              { keys: 'Ctrl+Shift+K', desc: 'Borrar línea completa' },
              { keys: 'Alt+↑/↓', desc: 'Mover línea arriba/abajo' },
              { keys: 'Ctrl+Shift+L', desc: 'Seleccionar TODAS las ocurrencias' },
              { keys: 'Ctrl+/', desc: 'Comentar/descomentar línea' },
              { keys: 'Ctrl+F', desc: 'Buscar en archivo' },
              { keys: 'Ctrl+Shift+F', desc: 'Buscar en TODO el proyecto' },
              { keys: 'Ctrl+H', desc: 'Buscar y reemplazar' },
              { keys: 'F2', desc: 'Renombrar símbolo' },
            ].map(s => (
              <div key={s.keys} className="flex items-center justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                <kbd className="px-1.5 py-0.5 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code text-win-gray-700 shadow-sm">
                  {s.keys}
                </kbd>
                <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
              </div>
            ))}
          </div>
        </AeroCard>
        <div className="space-y-4">
          <AeroCard title="Navegación" icon="🧭" variant="default">
            <div className="space-y-1">
              {[
                { keys: 'Ctrl+G', desc: 'Ir a línea número' },
                { keys: 'Ctrl+Tab', desc: 'Cambiar entre tabs abiertos' },
                { keys: 'Ctrl+\\', desc: 'Dividir editor (split)' },
                { keys: 'Ctrl+1/2/3', desc: 'Ir al editor 1, 2 o 3' },
                { keys: 'Ctrl+W', desc: 'Cerrar tab actual' },
                { keys: 'Ctrl+Shift+E', desc: 'Ir al Explorer' },
                { keys: 'Ctrl+Shift+G', desc: 'Ir a Git' },
                { keys: 'Ctrl+Shift+X', desc: 'Ir a Extensions' },
              ].map(s => (
                <div key={s.keys} className="flex items-center justify-between text-xs py-0.5 border-b border-win-gray-100 last:border-0">
                  <kbd className="px-1.5 py-0.5 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code shadow-sm">
                    {s.keys}
                  </kbd>
                  <span className="text-win-gray-600 text-[11px]">{s.desc}</span>
                </div>
              ))}
            </div>
          </AeroCard>
          <AeroCard title="Tip: Command Palette" icon="🏆" variant="green">
            <p className="text-xs">
              <kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+Shift+P</kbd> es 
              el atajo <strong>más importante</strong>. Desde ahí puedes hacer CUALQUIER cosa: 
              cambiar tema, formatear, instalar extensiones, configurar...
            </p>
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

export const vscodeTopics = {
  'vsc-intro':      VscIntro,
  'vsc-shortcuts':  VscShortcuts,
  'vsc-extensions': ComingSoon({ title: 'Extensiones', icon: '🧩' }),
  'vsc-terminal':   ComingSoon({ title: 'Terminal integrada', icon: '⬛' }),
  'vsc-git':        ComingSoon({ title: 'Git en VSCode', icon: '🔀' }),
  'vsc-debug':      ComingSoon({ title: 'Debugging', icon: '🐛' }),
  'vsc-snippets':   ComingSoon({ title: 'Snippets', icon: '✂️' }),
  'vsc-settings':   ComingSoon({ title: 'Configuración', icon: '⚙️' }),
  'vsc-multi':      ComingSoon({ title: 'Multi-cursor', icon: '👆' }),
  'vsc-tips':       ComingSoon({ title: 'Tips pro', icon: '🏆' }),
}