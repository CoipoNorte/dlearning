/* ============================================
   TopicNav.jsx — Navegación prev/next estilo Win7
   ============================================ */
import { ChevronLeft, ChevronRight } from 'lucide-react'

const allTopicsOrdered = [
  { id: 'git-intro', label: 'Qué es Git', tab: 'git' },
  { id: 'git-init', label: 'Iniciar repositorio', tab: 'git' },
  { id: 'git-staging', label: 'Staging y commits', tab: 'git' },
  { id: 'git-branches', label: 'Ramas (branches)', tab: 'git' },
  { id: 'git-merge', label: 'Merge y conflictos', tab: 'git' },
  { id: 'git-remote', label: 'Remotes y GitHub', tab: 'git' },
  { id: 'git-log', label: 'Historial y log', tab: 'git' },
  { id: 'git-undo', label: 'Deshacer cambios', tab: 'git' },
  { id: 'git-flow', label: 'Git Flow', tab: 'git' },
  { id: 'git-tips', label: 'Tips y aliases', tab: 'git' },
  { id: 'vsc-intro', label: 'Interfaz y layout', tab: 'vscode' },
  { id: 'vsc-shortcuts', label: 'Atajos esenciales', tab: 'vscode' },
  { id: 'vsc-extensions', label: 'Extensiones', tab: 'vscode' },
  { id: 'vsc-terminal', label: 'Terminal integrada', tab: 'vscode' },
  { id: 'vsc-git', label: 'Git en VSCode', tab: 'vscode' },
  { id: 'vsc-debug', label: 'Debugging', tab: 'vscode' },
  { id: 'vsc-snippets', label: 'Snippets', tab: 'vscode' },
  { id: 'vsc-settings', label: 'Configuración', tab: 'vscode' },
  { id: 'vsc-multi', label: 'Multi-cursor', tab: 'vscode' },
  { id: 'vsc-tips', label: 'Tips pro', tab: 'vscode' },
  { id: 'term-intro', label: 'Qué es la terminal', tab: 'terminal' },
  { id: 'term-nav', label: 'Navegación', tab: 'terminal' },
  { id: 'term-files', label: 'Archivos y carpetas', tab: 'terminal' },
  { id: 'term-text', label: 'Texto y búsqueda', tab: 'terminal' },
  { id: 'term-perms', label: 'Permisos', tab: 'terminal' },
  { id: 'term-pipes', label: 'Pipes y redirección', tab: 'terminal' },
  { id: 'term-scripts', label: 'Scripts (.sh/.bat)', tab: 'terminal' },
  { id: 'term-env', label: 'Variables de entorno', tab: 'terminal' },
  { id: 'term-ssh', label: 'SSH y redes', tab: 'terminal' },
  { id: 'term-tips', label: 'Tips y aliases', tab: 'terminal' },
]

export default function TopicNav({ currentTopic, onNavigate, onTabChange }) {
  const idx = allTopicsOrdered.findIndex(t => t.id === currentTopic)
  if (idx === -1) return null

  const prev = idx > 0 ? allTopicsOrdered[idx - 1] : null
  const next = idx < allTopicsOrdered.length - 1 ? allTopicsOrdered[idx + 1] : null

  const handleNav = (topic) => {
    const currentTab = allTopicsOrdered[idx].tab
    if (topic.tab !== currentTab) onTabChange(topic.tab)
    onNavigate(topic.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-8 pt-4 border-t border-win-gray-200">
      {/* Barra de progreso estilo Win7 */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] text-win-gray-500">
          {idx + 1}/{allTopicsOrdered.length}
        </span>
        <div className="flex-1 h-3 bg-win-gray-200 rounded-full border border-win-gray-300 overflow-hidden"
          style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}>
          <div className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((idx + 1) / allTopicsOrdered.length) * 100}%`,
              background: 'linear-gradient(to bottom, #5cb85c, #3d9b3d)',
              boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
          />
        </div>
        <span className="text-[11px] text-win-accent font-semibold">
          {Math.round(((idx + 1) / allTopicsOrdered.length) * 100)}%
        </span>
      </div>

      <div className="flex justify-between gap-3">
        {prev ? (
          <button onClick={() => handleNav(prev)}
            className="aero-btn aero-btn-hover flex items-center gap-2 flex-1 text-left rounded-md py-2.5 px-3">
            <ChevronLeft size={14} />
            <div>
              <div className="text-[10px] text-win-gray-400">← Anterior</div>
              <div className="text-xs">{prev.label}</div>
            </div>
          </button>
        ) : <div className="flex-1" />}

        {next ? (
          <button onClick={() => handleNav(next)}
            className="aero-btn aero-btn-hover flex items-center justify-end gap-2 flex-1 text-right rounded-md py-2.5 px-3">
            <div>
              <div className="text-[10px] text-win-gray-400">Siguiente →</div>
              <div className="text-xs">{next.label}</div>
            </div>
            <ChevronRight size={14} />
          </button>
        ) : (
          <div className="flex-1 aero-btn rounded-md py-2.5 px-3 text-center border-win-green">
            <span className="text-win-green text-xs font-semibold">🎓 ¡Curso completado!</span>
          </div>
        )}
      </div>
    </div>
  )
}