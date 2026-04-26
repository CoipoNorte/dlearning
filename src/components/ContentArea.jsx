/* ============================================
   ContentArea.jsx — Área principal de contenido
   ============================================ */
import { gitTopics } from '../data/gitTopics'
import { vscodeTopics } from '../data/vscodeTopics'
import { terminalTopics } from '../data/terminalTopics'
import TopicNav from './ui/TopicNav'
import AeroWindow from './ui/AeroWindow'

const allTopics = { ...gitTopics, ...vscodeTopics, ...terminalTopics }

export default function ContentArea({ activeTab, activeTopic, setActiveTopic, setActiveTab, sidebarCollapsed }) {
  const TopicComponent = allTopics[activeTopic]

  return (
    <div className={`pt-11 min-h-screen transition-all duration-300 ${
      sidebarCollapsed ? 'lg:pl-11' : 'lg:pl-56'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {TopicComponent ? (
          <div className="animate-fade-in">
            <AeroWindow title={activeTopic} icon="📄">
              <div className="p-5">
                <TopicComponent />
                <TopicNav
                  currentTopic={activeTopic}
                  onNavigate={setActiveTopic}
                  onTabChange={setActiveTab}
                />
              </div>
            </AeroWindow>
          </div>
        ) : (
          <WelcomeScreen activeTab={activeTab} />
        )}
      </div>
    </div>
  )
}

function WelcomeScreen({ activeTab }) {
  const info = {
    git:      { icon: '🔀', name: 'Git', desc: 'Control de versiones' },
    vscode:   { icon: '💎', name: 'VSCode', desc: 'Editor de código' },
    terminal: { icon: '⬛', name: 'Terminal', desc: 'Línea de comandos' },
  }
  const t = info[activeTab]

  return (
    <AeroWindow title="dlearning — Bienvenido" icon="💻">
      <div className="p-8 text-center">
        <div className="text-5xl mb-4">{t.icon}</div>
        <h2 className="text-xl font-bold text-win-gray-800 mb-2">{t.name}</h2>
        <p className="text-win-gray-500 mb-6">{t.desc}</p>
        <div className="inline-block aero-panel rounded-md p-4 text-left">
          <p className="text-xs text-win-gray-500 mb-1">📁 Selecciona un tema del panel izquierdo para comenzar.</p>
          <p className="text-xs text-win-gray-400">Cada tema incluye explicaciones, código y ejemplos.</p>
        </div>
      </div>
    </AeroWindow>
  )
}