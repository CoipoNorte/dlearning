/* ============================================
   Taskbar.jsx — Barra de tareas estilo Windows 7
   Funciona como navbar superior con los tabs
   ============================================ */
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

const tabs = [
  { id: 'git', label: 'Git', icon: '🔀' },
  { id: 'vscode', label: 'VSCode', icon: '💎' },
  { id: 'terminal', label: 'Terminal', icon: '⬛' },
]

export default function Taskbar({ activeTab, setActiveTab, onToggleSidebar }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-11"
      style={{
        background: 'linear-gradient(to bottom, rgba(30, 60, 110, 0.92), rgba(15, 35, 70, 0.95))',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}>
      <div className="flex items-center h-full px-2">
        {/* Botón inicio / hamburguesa */}
        <button onClick={onToggleSidebar}
          className="flex items-center gap-1.5 px-3 h-8 rounded-sm text-white/90 hover:bg-white/10 transition-all mr-1">
          <Menu size={14} className="lg:hidden" />
          <span className="text-sm">💻</span>
          <span className="text-xs font-semibold hidden sm:inline">dlearning</span>
        </button>

        {/* Separador */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Tabs de temas como botones de taskbar */}
        <div className="flex items-center gap-0.5">
          {tabs.map(tab => (
            <button key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 h-8 rounded-sm text-xs transition-all ${
                activeTab === tab.id
                  ? 'bg-white/15 text-white shadow-inner border border-white/10'
                  : 'text-white/60 hover:bg-white/8 hover:text-white/80'
              }`}
              style={activeTab === tab.id ? {
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 2px rgba(0,0,0,0.2)',
              } : {}}>
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* System tray (derecha) */}
        <div className="ml-auto flex items-center gap-2 text-white/50 text-[10px]">
          <span className="hidden md:inline">▲</span>
          <span className="hidden md:inline">🔊</span>
          <div className="px-2 py-1 hover:bg-white/10 rounded-sm text-[11px] text-white/70">
            {time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </nav>
  )
}