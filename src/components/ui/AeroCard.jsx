/* ============================================
   AeroCard.jsx — Card estilo panel Windows 7
   ============================================ */
export default function AeroCard({ title, icon, variant = 'default', children }) {
  const variants = {
    default: 'border-win-gray-300 bg-white',
    blue:    'border-win-accent/30 bg-win-sky-light',
    green:   'border-win-green/30 bg-green-50',
    yellow:  'border-win-yellow/30 bg-yellow-50',
    red:     'border-win-red/30 bg-red-50',
  }

  return (
    <div className={`rounded-md border p-4 ${variants[variant]}`}
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(0,0,0,0.06)' }}>
      {title && (
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-win-gray-200">
          {icon && <span>{icon}</span>}
          <h4 className="text-sm font-semibold text-win-gray-800">{title}</h4>
        </div>
      )}
      <div className="text-sm text-win-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}