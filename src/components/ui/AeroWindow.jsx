/* ============================================
   AeroWindow.jsx — Ventana estilo Windows 7
   Con barra de título, botones de control y glass
   ============================================ */
export default function AeroWindow({ title, icon, children, className = '' }) {
  return (
    <div className={`aero-glass rounded-lg overflow-hidden win-shadow ${className}`}>
      {/* Barra de título */}
      <div className="aero-titlebar px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-sm">{icon}</span>}
          <span className="text-sm font-medium text-win-gray-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
            {title}
          </span>
        </div>
        {/* Botones de ventana */}
        <div className="flex items-center gap-0.5">
          <button className="w-6 h-5 rounded-sm text-[10px] text-win-gray-600 hover:bg-win-blue-light/20 flex items-center justify-center transition-colors">
            ─
          </button>
          <button className="w-6 h-5 rounded-sm text-[10px] text-win-gray-600 hover:bg-win-blue-light/20 flex items-center justify-center transition-colors">
            □
          </button>
          <button className="w-6 h-5 rounded-sm text-[10px] text-win-gray-600 hover:bg-win-red/80 hover:text-white flex items-center justify-center transition-colors">
            ✕
          </button>
        </div>
      </div>
      {/* Contenido */}
      <div className="bg-white/95">
        {children}
      </div>
    </div>
  )
}