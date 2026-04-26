/* ============================================
   Sidebar.jsx — Panel lateral estilo Windows Explorer
   ============================================ */
import { ChevronLeft, ChevronRight } from 'lucide-react'

const topicsByTab = {
  git: [
    { id: 'git-intro', label: 'Qué es Git', icon: '📖' },
    { id: 'git-init', label: 'Iniciar repositorio', icon: '🆕' },
    { id: 'git-staging', label: 'Staging y commits', icon: '📦' },
    { id: 'git-branches', label: 'Ramas (branches)', icon: '🌿' },
    { id: 'git-merge', label: 'Merge y conflictos', icon: '🔀' },
    { id: 'git-remote', label: 'Remotes y GitHub', icon: '☁️' },
    { id: 'git-log', label: 'Historial y log', icon: '📜' },
    { id: 'git-undo', label: 'Deshacer cambios', icon: '↩️' },
    { id: 'git-flow', label: 'Git Flow', icon: '🔄' },
    { id: 'git-tips', label: 'Tips y aliases', icon: '💡' },
  ],
  vscode: [
    { id: 'vsc-intro', label: 'Interfaz y layout', icon: '🖥️' },
    { id: 'vsc-shortcuts', label: 'Atajos esenciales', icon: '⌨️' },
    { id: 'vsc-extensions', label: 'Extensiones', icon: '🧩' },
    { id: 'vsc-terminal', label: 'Terminal integrada', icon: '⬛' },
    { id: 'vsc-git', label: 'Git en VSCode', icon: '🔀' },
    { id: 'vsc-debug', label: 'Debugging', icon: '🐛' },
    { id: 'vsc-snippets', label: 'Snippets', icon: '✂️' },
    { id: 'vsc-settings', label: 'Configuración', icon: '⚙️' },
    { id: 'vsc-multi', label: 'Multi-cursor', icon: '👆' },
    { id: 'vsc-tips', label: 'Tips pro', icon: '🏆' },
  ],
  terminal: [
    { id: 'term-intro', label: 'Qué es la terminal', icon: '📖' },
    { id: 'term-nav', label: 'Navegación', icon: '📂' },
    { id: 'term-files', label: 'Archivos y carpetas', icon: '📁' },
    { id: 'term-text', label: 'Texto y búsqueda', icon: '🔍' },
    { id: 'term-perms', label: 'Permisos', icon: '🔒' },
    { id: 'term-pipes', label: 'Pipes y redirección', icon: '🔗' },
    { id: 'term-scripts', label: 'Scripts (.sh/.bat)', icon: '📜' },
    { id: 'term-env', label: 'Variables de entorno', icon: '🌍' },
    { id: 'term-ssh', label: 'SSH y redes', icon: '🌐' },
    { id: 'term-tips', label: 'Tips y aliases', icon: '💡' },
  ],
}

export default function Sidebar({ activeTab, activeTopic, setActiveTopic, collapsed, setCollapsed }) {
  const topics = topicsByTab[activeTab] || []
  const isMobile = () => window.innerWidth < 1024

  const handleSelect = (topicId) => {
    setActiveTopic(topicId)
    if (isMobile()) setCollapsed(true)
  }

  return (
    <>
      {!collapsed && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setCollapsed(true)} />
      )}

      <aside className={`fixed top-11 left-0 bottom-0 z-40 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-0 lg:w-11 overflow-hidden' : 'w-56'
      }`}
        style={{
          background: 'linear-gradient(to bottom, #e8eef7, #d4dce8)',
          borderRight: '1px solid #b0b8c4',
          boxShadow: collapsed ? 'none' : '2px 0 8px rgba(0,0,0,0.1)',
        }}>

        {/* Header */}
        {!collapsed && (
          <div className="px-3 py-2 border-b border-win-gray-300/50">
            <div className="text-[11px] text-win-gray-500 font-semibold uppercase tracking-wide">
              {activeTab === 'git' && '🔀 Git'}
              {activeTab === 'vscode' && '💎 VSCode'}
              {activeTab === 'terminal' && '⬛ Terminal'}
            </div>
          </div>
        )}

        {/* Lista de temas */}
        <div className="flex-1 overflow-y-auto py-1">
          {!collapsed && topics.map(topic => (
            <button key={topic.id}
              onClick={() => handleSelect(topic.id)}
              className={`w-full text-left px-3 py-1.5 flex items-center gap-2 text-[12px] transition-all ${
                activeTopic === topic.id
                  ? 'bg-win-accent/10 text-win-accent border-l-2 border-win-accent font-semibold'
                  : 'text-win-gray-700 hover:bg-white/60 border-l-2 border-transparent'
              }`}>
              <span className="text-xs w-5 text-center">{topic.icon}</span>
              <span className="truncate">{topic.label}</span>
            </button>
          ))}

          {collapsed && topics.map(topic => (
            <button key={topic.id}
              onClick={() => { setActiveTopic(topic.id); if (!isMobile()) setCollapsed(false) }}
              className={`hidden lg:block w-full py-1.5 text-center text-xs transition-all ${
                activeTopic === topic.id ? 'bg-win-accent/10' : 'hover:bg-white/60'
              }`}
              title={topic.label}>
              {topic.icon}
            </button>
          ))}
        </div>

        <button onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center py-2 border-t border-win-gray-300/50 text-win-gray-400 hover:text-win-accent hover:bg-white/60 transition-colors">
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </aside>
    </>
  )
}