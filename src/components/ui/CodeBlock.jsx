/* ============================================
   CodeBlock.jsx — Bloque de código estilo Notepad/cmd
   ============================================ */
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({ code, language = 'bash', title }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-md overflow-hidden border border-win-gray-300 shadow-sm">
      {/* Header estilo barra de título */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-b from-win-gray-100 to-win-gray-200 border-b border-win-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-xs">📄</span>
          <span className="text-xs text-win-gray-600">{title || `archivo.${language}`}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-win-gray-400 font-code">{language}</span>
          <button onClick={handleCopy}
            className="p-1 rounded-sm hover:bg-win-accent/10 text-win-gray-500 hover:text-win-accent transition-colors">
            {copied ? <Check size={12} className="text-win-green" /> : <Copy size={12} />}
          </button>
        </div>
      </div>
      {/* Código con fondo oscuro tipo CMD */}
      <div className="bg-win-gray-900 p-3 overflow-x-auto">
        <pre className="font-code text-sm leading-relaxed">
          <code className="text-gray-200">{code.trim()}</code>
        </pre>
      </div>
    </div>
  )
}