/* ============================================
   gitTopics.jsx — Temas de Git
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import LiveDemo from '../components/ui/LiveDemo'
import AeroCard from '../components/ui/AeroCard'

function GitIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📖 ¿Qué es Git?</h2>
      <p className="text-sm text-win-gray-600">
        Git es un <strong>sistema de control de versiones</strong> distribuido. Registra cada cambio en tu código
        como una "foto" (commit) para poder volver atrás, trabajar en equipo y llevar un historial completo.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="¿Por qué usar Git?" icon="🤔" variant="blue">
            <ul className="space-y-1.5 text-xs">
              <li>✅ <strong>Historial completo</strong> — cada cambio queda registrado</li>
              <li>✅ <strong>Volver atrás</strong> — ¿rompiste algo? vuelve a la versión anterior</li>
              <li>✅ <strong>Ramas</strong> — trabaja en features sin afectar el código principal</li>
              <li>✅ <strong>Equipo</strong> — múltiples personas en el mismo proyecto</li>
              <li>✅ <strong>Estándar</strong> — toda empresa lo usa, es obligatorio saberlo</li>
            </ul>
          </AeroCard>
          <AeroCard title="Git ≠ GitHub" icon="⚠️" variant="yellow">
            <ul className="space-y-1 text-xs">
              <li><strong>Git</strong> — Herramienta local en tu PC. Gratis, open source.</li>
              <li><strong>GitHub</strong> — Plataforma web para alojar repos de Git. Como un "drive" para código.</li>
              <li><strong>GitLab / Bitbucket</strong> — Alternativas a GitHub.</li>
            </ul>
          </AeroCard>
        </div>
        <div className="space-y-4">
          <CodeBlock title="Instalar Git" language="bash"
            code={`# Windows → descargar de https://git-scm.com
# Verificar instalación:
git --version
# git version 2.44.0

# Configurar tu identidad (OBLIGATORIO, solo 1 vez):
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Ver configuración:
git config --list

# Configurar editor (opcional):
git config --global core.editor "code --wait"`} />
          <AeroCard title="Conceptos clave" icon="📌" variant="default">
            <ul className="space-y-1.5 text-xs">
              <li><strong>Repository (repo)</strong> — Carpeta con historial Git</li>
              <li><strong>Commit</strong> — "Foto" del código en un momento</li>
              <li><strong>Branch</strong> — Línea de desarrollo paralela</li>
              <li><strong>Remote</strong> — Repo en la nube (GitHub)</li>
              <li><strong>Clone</strong> — Copiar un repo remoto</li>
              <li><strong>Push</strong> — Subir cambios al remoto</li>
              <li><strong>Pull</strong> — Bajar cambios del remoto</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function GitInit() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🆕 Iniciar un Repositorio</h2>
      <p className="text-sm text-win-gray-600">
        Dos formas de empezar: crear uno nuevo o clonar uno existente.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Crear repo nuevo" language="bash"
          code={`# 1. Crear carpeta del proyecto
mkdir mi-proyecto
cd mi-proyecto

# 2. Inicializar Git (crea carpeta .git oculta)
git init
# Initialized empty Git repository in .../mi-proyecto/.git/

# 3. Crear primer archivo
echo "# Mi Proyecto" > README.md

# 4. Agregar al staging
git add README.md

# 5. Primer commit
git commit -m "feat: inicio del proyecto"

# 6. Conectar con GitHub (opcional)
git remote add origin https://github.com/usuario/repo.git
git push -u origin main`} />
        <div className="space-y-4">
          <CodeBlock title="Clonar repo existente" language="bash"
            code={`# Clonar con HTTPS
git clone https://github.com/usuario/repo.git

# Clonar con SSH (más seguro)
git clone git@github.com:usuario/repo.git

# Clonar en carpeta específica
git clone https://github.com/usuario/repo.git mi-carpeta

# Después de clonar, entrar al directorio:
cd repo`} />
          <AeroCard title="¿Qué es .git?" icon="📁" variant="blue">
            <p className="text-xs">
              La carpeta <code>.git</code> contiene TODO el historial, ramas, configuración del repo.
              <strong> Nunca la borres ni modifiques manualmente.</strong> Si la borras, pierdes todo el historial.
            </p>
          </AeroCard>
          <AeroCard title=".gitignore" icon="🚫" variant="default">
            <p className="text-xs mb-2">Archivo que le dice a Git qué archivos IGNORAR:</p>
            <pre className="text-[11px] font-code bg-win-gray-100 p-2 rounded">
{`node_modules/
.env
dist/
*.log
.DS_Store`}
            </pre>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

/* Placeholder para los demás */
function ComingSoon({ title, icon }) {
  return () => (
    <div className="text-center py-12">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-base font-semibold text-win-gray-700 mt-3">{title}</h3>
      <p className="text-sm text-win-gray-400 mt-1">Contenido próximamente...</p>
    </div>
  )
}

export const gitTopics = {
  'git-intro':    GitIntro,
  'git-init':     GitInit,
  'git-staging':  ComingSoon({ title: 'Staging y commits', icon: '📦' }),
  'git-branches': ComingSoon({ title: 'Ramas (branches)', icon: '🌿' }),
  'git-merge':    ComingSoon({ title: 'Merge y conflictos', icon: '🔀' }),
  'git-remote':   ComingSoon({ title: 'Remotes y GitHub', icon: '☁️' }),
  'git-log':      ComingSoon({ title: 'Historial y log', icon: '📜' }),
  'git-undo':     ComingSoon({ title: 'Deshacer cambios', icon: '↩️' }),
  'git-flow':     ComingSoon({ title: 'Git Flow', icon: '🔄' }),
  'git-tips':     ComingSoon({ title: 'Tips y aliases', icon: '💡' }),
}