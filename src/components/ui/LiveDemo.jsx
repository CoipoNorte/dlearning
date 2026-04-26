/* ============================================
   LiveDemo.jsx — Preview estilo ventana Windows
   ============================================ */
export default function LiveDemo({ title, children }) {
  return (
    <div className="rounded-md overflow-hidden border border-win-gray-300 shadow-sm">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-b from-win-gray-100 to-win-gray-200 border-b border-win-gray-300">
        <span className="w-2 h-2 rounded-full bg-win-green" />
        <span className="text-xs text-win-gray-600">{title || 'Vista previa'}</span>
      </div>
      <div className="bg-white p-4">
        {children}
      </div>
    </div>
  )
}