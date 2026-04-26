/* ============================================
   gitTopics.jsx — TODOS los temas de Git (10/10)
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import LiveDemo from '../components/ui/LiveDemo'
import AeroCard from '../components/ui/AeroCard'

/* ══════════════════════════════════════════
   01: Qué es Git
   ══════════════════════════════════════════ */
function GitIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📖 ¿Qué es Git?</h2>
      <p className="text-sm text-win-gray-600">
        Git es un <strong>sistema de control de versiones</strong> distribuido. Registra cada cambio como un "commit".
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="¿Por qué usar Git?" icon="🤔" variant="blue">
            <ul className="space-y-1.5 text-xs">
              <li>✅ <strong>Historial completo</strong> — cada cambio queda registrado</li>
              <li>✅ <strong>Volver atrás</strong> — revertir si algo se rompe</li>
              <li>✅ <strong>Ramas</strong> — features sin afectar lo principal</li>
              <li>✅ <strong>Equipo</strong> — múltiples personas en el mismo proyecto</li>
              <li>✅ <strong>Estándar</strong> — toda empresa lo usa</li>
            </ul>
          </AeroCard>
          <AeroCard title="Git ≠ GitHub" icon="⚠️" variant="yellow">
            <ul className="space-y-1 text-xs">
              <li><strong>Git</strong> — Herramienta local en tu PC</li>
              <li><strong>GitHub</strong> — Plataforma web para alojar repos</li>
              <li><strong>GitLab / Bitbucket</strong> — Alternativas a GitHub</li>
            </ul>
          </AeroCard>
        </div>
        <div className="space-y-4">
          <CodeBlock title="Instalar y configurar" language="bash"
            code={`# Verificar instalación
git --version

# Configurar identidad (solo 1 vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Ver configuración
git config --list

# Editor por defecto
git config --global core.editor "code --wait"`} />
          <AeroCard title="Conceptos clave" icon="📌" variant="default">
            <ul className="space-y-1 text-xs">
              <li><strong>Repository</strong> — Carpeta con historial Git</li>
              <li><strong>Commit</strong> — "Foto" del código en un momento</li>
              <li><strong>Branch</strong> — Línea de desarrollo paralela</li>
              <li><strong>Remote</strong> — Repo en la nube (GitHub)</li>
              <li><strong>Push/Pull</strong> — Subir/bajar cambios</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   02: Iniciar repositorio
   ══════════════════════════════════════════ */
function GitInit() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🆕 Iniciar un Repositorio</h2>
      <p className="text-sm text-win-gray-600">Dos formas: crear nuevo o clonar existente.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Crear repo nuevo" language="bash"
          code={`# Crear carpeta e inicializar
mkdir mi-proyecto
cd mi-proyecto
git init

# Crear primer archivo
echo "# Mi Proyecto" > README.md

# Primer commit
git add README.md
git commit -m "feat: inicio del proyecto"

# Conectar con GitHub
git remote add origin https://github.com/user/repo.git
git push -u origin main`} />
        <div className="space-y-4">
          <CodeBlock title="Clonar existente" language="bash"
            code={`# HTTPS
git clone https://github.com/user/repo.git

# SSH (más seguro)
git clone git@github.com:user/repo.git

# En carpeta específica
git clone https://github.com/user/repo.git mi-carpeta
cd mi-carpeta`} />
          <AeroCard title=".gitignore" icon="🚫" variant="default">
            <p className="text-xs mb-2">Archivos que Git debe ignorar:</p>
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

/* ══════════════════════════════════════════
   03: Staging y commits
   ══════════════════════════════════════════ */
function GitStaging() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📦 Staging y Commits</h2>
      <p className="text-sm text-win-gray-600">
        Git tiene 3 áreas: Working Directory → Staging Area → Repository.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <LiveDemo title="Las 3 áreas de Git">
            <div className="flex gap-2 text-xs">
              <div className="flex-1 border border-win-gray-300 rounded p-2 bg-red-50 text-center">
                <p className="font-bold text-win-red">Working Dir</p>
                <p className="text-[10px] text-win-gray-500 mt-1">Archivos modificados</p>
              </div>
              <div className="flex items-center text-win-gray-400">→</div>
              <div className="flex-1 border border-win-gray-300 rounded p-2 bg-yellow-50 text-center">
                <p className="font-bold text-win-orange">Staging</p>
                <p className="text-[10px] text-win-gray-500 mt-1">Listos para commit</p>
              </div>
              <div className="flex items-center text-win-gray-400">→</div>
              <div className="flex-1 border border-win-gray-300 rounded p-2 bg-green-50 text-center">
                <p className="font-bold text-win-green">Repository</p>
                <p className="text-[10px] text-win-gray-500 mt-1">Historial guardado</p>
              </div>
            </div>
          </LiveDemo>
          <AeroCard title="Conventional Commits" icon="📝" variant="blue">
            <p className="text-xs mb-2">Formato recomendado para mensajes de commit:</p>
            <ul className="space-y-1 text-xs">
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">feat:</code> — Nueva funcionalidad</li>
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">fix:</code> — Corrección de bug</li>
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">docs:</code> — Solo documentación</li>
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">style:</code> — Formato, no lógica</li>
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">refactor:</code> — Reestructurar código</li>
              <li><code className="text-[10px] font-code bg-win-gray-100 px-1 rounded">chore:</code> — Tareas de mantenimiento</li>
            </ul>
          </AeroCard>
        </div>
        <CodeBlock title="Staging y commits" language="bash"
          code={`# Ver estado actual
git status

# ── AGREGAR AL STAGING ──
git add archivo.js          # un archivo
git add src/                # una carpeta
git add .                   # TODO
git add *.css               # por extensión
git add -p                  # interactivo (por partes)

# ── QUITAR DEL STAGING ──
git restore --staged archivo.js
git reset HEAD archivo.js     # alternativa

# ── HACER COMMIT ──
git commit -m "feat: agregar login"
git commit -m "fix: corregir bug en navbar"

# Commit con descripción larga
git commit -m "feat: sistema de autenticación" \\
           -m "Agrega login, registro y JWT tokens"

# Modificar último commit (antes de push)
git commit --amend -m "feat: nuevo mensaje"

# Agregar archivos olvidados al último commit
git add archivo-olvidado.js
git commit --amend --no-edit

# ── VER DIFERENCIAS ──
git diff                    # cambios sin stagear
git diff --staged           # cambios en staging
git diff HEAD               # todos los cambios`} />
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   04: Ramas (branches)
   ══════════════════════════════════════════ */
function GitBranches() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🌿 Ramas (Branches)</h2>
      <p className="text-sm text-win-gray-600">
        Las ramas permiten trabajar en features sin afectar el código principal.
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <CodeBlock title="Comandos de ramas" language="bash"
            code={`# ── VER RAMAS ──
git branch              # locales
git branch -r           # remotas
git branch -a           # todas

# ── CREAR RAMA ──
git branch nueva-rama
git checkout -b nueva-rama    # crear + cambiar
git switch -c nueva-rama      # alternativa moderna

# ── CAMBIAR DE RAMA ──
git checkout main
git switch main               # alternativa moderna

# ── RENOMBRAR RAMA ──
git branch -m viejo-nombre nuevo-nombre
git branch -m nuevo-nombre    # renombrar la actual

# ── ELIMINAR RAMA ──
git branch -d rama-ya-mergeada   # seguro
git branch -D rama-sin-mergear   # forzar

# ── ELIMINAR RAMA REMOTA ──
git push origin --delete rama-remota

# ── VER ÚLTIMA ACTIVIDAD ──
git branch -v             # último commit de cada rama
git branch --merged       # ramas ya mergeadas
git branch --no-merged    # ramas pendientes`} />
          <AeroCard title="Naming conventions" icon="📋" variant="default">
            <ul className="space-y-1 text-xs">
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">feature/login</code> — Nueva funcionalidad</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">fix/navbar-bug</code> — Corrección</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">hotfix/security</code> — Fix urgente</li>
              <li><code className="font-code text-[10px] bg-win-gray-100 px-1 rounded">release/v2.0</code> — Preparar release</li>
            </ul>
          </AeroCard>
        </div>
        <LiveDemo title="Flujo de ramas visual">
          <pre className="text-[10px] font-code text-win-gray-600 leading-relaxed">
{`main      ──●──●──────────●──●── (producción)
               \\          /
feature/login   ●──●──●──●   (tu feature)
                    \\
                     ●──●    (sub-branch)

● = commit
\\ = crear rama
/ = merge de vuelta a main`}
          </pre>
          <div className="mt-3 space-y-1.5">
            <p className="text-[11px] text-win-gray-500">1. Crear rama desde main</p>
            <p className="text-[11px] text-win-gray-500">2. Trabajar y hacer commits en tu rama</p>
            <p className="text-[11px] text-win-gray-500">3. Merge de vuelta a main cuando esté listo</p>
            <p className="text-[11px] text-win-gray-500">4. Eliminar la rama después del merge</p>
          </div>
        </LiveDemo>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   05: Merge y conflictos
   ══════════════════════════════════════════ */
function GitMerge() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔀 Merge y Conflictos</h2>
      <p className="text-sm text-win-gray-600">Unir ramas y resolver cuando dos personas editan lo mismo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Merge" language="bash"
          code={`# ── MERGE BÁSICO ──
# 1. Ir a la rama destino
git checkout main

# 2. Mergear la rama feature
git merge feature/login

# ── TIPOS DE MERGE ──
# Fast-forward: si main no cambió, solo avanza
git merge feature/login
# → Fast-forward (sin commit extra)

# Merge commit: si ambas ramas tienen commits nuevos
git merge feature/login
# → Crea un commit de merge automático

# ── MERGE SIN FAST-FORWARD ──
# Fuerza crear commit de merge (mejor para historial)
git merge --no-ff feature/login

# ── CANCELAR MERGE ──
git merge --abort

# ── REBASE (alternativa a merge) ──
# Re-aplica tus commits sobre la rama destino
git checkout feature/login
git rebase main
# Historial más limpio, pero reescribe historia
# NUNCA rebase ramas públicas/compartidas`} />
        <div className="space-y-4">
          <AeroCard title="Cuando hay CONFLICTO" icon="💥" variant="red">
            <p className="text-xs mb-2">Git no sabe qué versión elegir cuando dos personas editaron la misma línea:</p>
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded leading-relaxed">
{`<<<<<<< HEAD (tu rama)
const color = "azul";
=======
const color = "rojo";
>>>>>>> feature/login (otra rama)

// Tú decides: quedarte con una,
// combinar ambas, o escribir algo nuevo.
// Luego borra las marcas <<<<< ===== >>>>>`}
            </pre>
          </AeroCard>
          <CodeBlock title="Resolver conflicto" language="bash"
            code={`# 1. Git marca los archivos con conflicto
git status
# → both modified: archivo.js

# 2. Abrir el archivo y resolver manualmente
#    (borrar las marcas <<<< ==== >>>>)

# 3. Marcar como resuelto
git add archivo.js

# 4. Completar el merge
git commit -m "fix: resolver conflicto en archivo.js"

# Tip: VSCode tiene UI para resolver conflictos
# Te muestra botones: Accept Current | Incoming | Both`} />
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   06: Remotes y GitHub
   ══════════════════════════════════════════ */
function GitRemote() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">☁️ Remotes y GitHub</h2>
      <p className="text-sm text-win-gray-600">Conectar tu repo local con GitHub para respaldar y colaborar.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Remotes" language="bash"
          code={`# ── CONECTAR CON GITHUB ──
git remote add origin https://github.com/user/repo.git

# Ver remotes configurados
git remote -v

# ── PUSH: subir cambios ──
git push origin main             # subir a main
git push origin feature/login    # subir rama
git push -u origin main          # -u = set upstream (primera vez)
git push                         # después solo esto

# ── PULL: bajar cambios ──
git pull origin main             # bajar y mergear
git pull                         # rama trackeada
git pull --rebase                # pull + rebase (más limpio)

# ── FETCH: bajar info sin mergear ──
git fetch origin                 # traer cambios sin aplicar
git fetch --all                  # de todos los remotes

# ── PUSH FORCE (cuidado!) ──
git push --force-with-lease      # forzar pero seguro
# Solo usar después de rebase o amend

# ── CLONAR ──
git clone https://github.com/user/repo.git

# ── FORK WORKFLOW ──
# 1. Fork en GitHub (botón Fork)
# 2. Clonar TU fork
git clone https://github.com/TU-USER/repo.git
# 3. Agregar el repo original como "upstream"
git remote add upstream https://github.com/ORIGINAL/repo.git
# 4. Mantener actualizado
git fetch upstream
git merge upstream/main`} />
        <div className="space-y-4">
          <AeroCard title="HTTPS vs SSH" icon="🔐" variant="blue">
            <ul className="space-y-1.5 text-xs">
              <li><strong>HTTPS</strong> — Pide usuario/token cada vez. Más fácil de configurar.</li>
              <li><strong>SSH</strong> — Usa llaves criptográficas. Más seguro y no pide contraseña.</li>
            </ul>
          </AeroCard>
          <CodeBlock title="Configurar SSH" language="bash"
            code={`# 1. Generar llave SSH
ssh-keygen -t ed25519 -C "tu@email.com"

# 2. Copiar llave pública
cat ~/.ssh/id_ed25519.pub
# Copiar el output

# 3. En GitHub → Settings → SSH Keys → New
#    Pegar la llave pública

# 4. Verificar conexión
ssh -T git@github.com
# "Hi usuario! You've successfully..."

# 5. Clonar con SSH
git clone git@github.com:user/repo.git`} />
          <AeroCard title="Pull Request (PR)" icon="🔄" variant="green">
            <ul className="space-y-1 text-xs">
              <li>1. Crear rama feature y hacer commits</li>
              <li>2. Push de la rama a GitHub</li>
              <li>3. En GitHub → "New Pull Request"</li>
              <li>4. Describir los cambios</li>
              <li>5. Pedir review a compañeros</li>
              <li>6. Mergear cuando esté aprobado</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   07: Historial y log
   ══════════════════════════════════════════ */
function GitLog() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📜 Historial y Log</h2>
      <p className="text-sm text-win-gray-600">Explorar el historial de commits y entender qué pasó.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Git log" language="bash"
          code={`# ── LOG BÁSICO ──
git log                          # completo
git log --oneline                # una línea por commit
git log --oneline -10            # últimos 10
git log --oneline --graph        # con gráfico de ramas

# ── LOG BONITO ──
git log --oneline --graph --all --decorate
# Muestra TODAS las ramas con gráfico visual

# ── FILTRAR ──
git log --author="Ana"           # por autor
git log --since="2024-01-01"     # desde fecha
git log --until="2024-06-01"     # hasta fecha
git log --grep="fix"             # por mensaje
git log -- archivo.js            # de un archivo
git log -S "función"             # buscar en el código

# ── VER DETALLE DE UN COMMIT ──
git show abc1234                 # ver commit específico
git show HEAD                    # último commit
git show HEAD~2                  # hace 2 commits

# ── VER QUIÉN EDITÓ CADA LÍNEA ──
git blame archivo.js
# Muestra autor, fecha y commit de cada línea

# ── COMPARAR ──
git diff main..feature           # diferencia entre ramas
git diff abc1234..def5678        # entre commits
git diff HEAD~3..HEAD            # últimos 3 commits

# ── ALIAS RECOMENDADO ──
git config --global alias.lg "log --oneline --graph --all --decorate"
# Ahora usas: git lg`} />
        <div className="space-y-4">
          <LiveDemo title="Ejemplo de git log --oneline --graph">
            <pre className="text-[10px] font-code text-win-gray-600 leading-relaxed">
{`* e4f5g6h (HEAD -> main) fix: responsive navbar
*   a1b2c3d Merge branch 'feature/auth'
|\\
| * 7h8i9j0 feat: add JWT validation
| * 4e5f6g7 feat: login endpoint
|/
* 1a2b3c4 feat: setup express server
* 9x8y7z6 chore: initial commit`}
            </pre>
          </LiveDemo>
          <AeroCard title="Leer el log" icon="🔍" variant="blue">
            <ul className="space-y-1 text-xs">
              <li><code className="font-code text-[10px]">*</code> — Un commit</li>
              <li><code className="font-code text-[10px]">|</code> — Línea de rama</li>
              <li><code className="font-code text-[10px]">\\ /</code> — Branch/merge</li>
              <li><code className="font-code text-[10px]">HEAD</code> — Donde estás ahora</li>
              <li><code className="font-code text-[10px]">origin/main</code> — Rama remota</li>
            </ul>
          </AeroCard>
          <AeroCard title="git reflog (tu salvavidas)" icon="🆘" variant="red">
            <p className="text-xs">
              <code className="font-code">git reflog</code> muestra TODAS las acciones, incluso las "borradas". 
              Si hiciste algo mal, aquí puedes encontrar el commit perdido y recuperarlo.
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   08: Deshacer cambios
   ══════════════════════════════════════════ */
function GitUndo() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">↩️ Deshacer Cambios</h2>
      <p className="text-sm text-win-gray-600">Cómo volver atrás según dónde esté el cambio.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Deshacer según estado" language="bash"
          code={`# ═══ ARCHIVO MODIFICADO (sin add) ═══
# Descartar cambios en un archivo
git restore archivo.js
git checkout -- archivo.js        # alternativa vieja

# Descartar TODOS los cambios
git restore .

# ═══ ARCHIVO EN STAGING (después de add) ═══
# Sacar del staging pero mantener cambios
git restore --staged archivo.js
git reset HEAD archivo.js         # alternativa vieja

# ═══ COMMIT HECHO (local, sin push) ═══
# Deshacer commit pero mantener cambios
git reset --soft HEAD~1
# → Cambios vuelven al staging

# Deshacer commit y sacar del staging
git reset --mixed HEAD~1          # default
# → Cambios vuelven al working directory

# Deshacer commit y BORRAR cambios
git reset --hard HEAD~1
# ⚠️ PELIGROSO: los cambios se pierden

# ═══ COMMIT PUBLICADO (después de push) ═══
# Crear un nuevo commit que revierte el anterior
git revert abc1234
# → Crea commit nuevo, no borra historial

# Revertir último commit
git revert HEAD

# ═══ RECUPERAR ALGO PERDIDO ═══
git reflog                        # ver historial completo
git reset --hard abc1234          # volver a ese punto`} />
        <div className="space-y-4">
          <AeroCard title="Resumen rápido" icon="📋" variant="blue">
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-green-50 border border-green-200 rounded">
                <p className="font-bold text-win-green">Cambios sin guardar</p>
                <code className="text-[10px] font-code">git restore archivo.js</code>
              </div>
              <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
                <p className="font-bold text-win-orange">En staging</p>
                <code className="text-[10px] font-code">git restore --staged archivo.js</code>
              </div>
              <div className="p-2 bg-blue-50 border border-blue-200 rounded">
                <p className="font-bold text-win-accent">Commit local</p>
                <code className="text-[10px] font-code">git reset --soft HEAD~1</code>
              </div>
              <div className="p-2 bg-red-50 border border-red-200 rounded">
                <p className="font-bold text-win-red">Commit publicado</p>
                <code className="text-[10px] font-code">git revert HEAD</code>
              </div>
            </div>
          </AeroCard>
          <AeroCard title="⚠️ reset vs revert" icon="⚠️" variant="yellow">
            <ul className="space-y-1 text-xs">
              <li><strong>reset</strong> — Borra historial. Solo para commits locales (sin push).</li>
              <li><strong>revert</strong> — Crea commit nuevo. Seguro para commits públicos.</li>
              <li><strong>Regla:</strong> Si ya hiciste push, SIEMPRE usa revert.</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   09: Git Flow
   ══════════════════════════════════════════ */
function GitFlow() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔄 Git Flow y Estrategias</h2>
      <p className="text-sm text-win-gray-600">Convenciones para organizar ramas en equipo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <AeroCard title="Git Flow clásico" icon="🔄" variant="blue">
            <ul className="space-y-1.5 text-xs">
              <li><strong>main</strong> — Producción. Siempre estable.</li>
              <li><strong>develop</strong> — Desarrollo. Se mergean features aquí.</li>
              <li><strong>feature/*</strong> — Nuevas funcionalidades.</li>
              <li><strong>release/*</strong> — Preparar nueva versión.</li>
              <li><strong>hotfix/*</strong> — Fix urgente en producción.</li>
            </ul>
          </AeroCard>
          <LiveDemo title="Git Flow visual">
            <pre className="text-[10px] font-code text-win-gray-600 leading-relaxed">
{`main     ──●─────────────────●──●──
            \\               /
develop   ──●──●──●──●──●──●──
               \\     /
feature/login   ●──●
                      \\
feature/signup         ●──●──●`}
            </pre>
          </LiveDemo>
          <AeroCard title="GitHub Flow (más simple)" icon="🌿" variant="green">
            <ul className="space-y-1 text-xs">
              <li>1. <strong>main</strong> siempre deployable</li>
              <li>2. Crear rama para cada feature</li>
              <li>3. Hacer commits y push</li>
              <li>4. Abrir Pull Request</li>
              <li>5. Review y merge a main</li>
              <li>6. Deploy automático</li>
            </ul>
          </AeroCard>
        </div>
        <CodeBlock title="Flujo de trabajo diario" language="bash"
          code={`# ── EMPEZAR FEATURE ──
git checkout main
git pull origin main          # actualizar main
git checkout -b feature/login # crear rama

# ── TRABAJAR ──
# ... editar archivos ...
git add .
git commit -m "feat: formulario de login"
# ... más cambios ...
git commit -m "feat: validación de email"

# ── MANTENER ACTUALIZADO ──
git checkout main
git pull origin main
git checkout feature/login
git merge main                # traer cambios de main
# (resolver conflictos si hay)

# ── PUBLICAR ──
git push origin feature/login

# ── EN GITHUB ──
# Abrir Pull Request: feature/login → main
# Pedir review
# Mergear cuando aprobado

# ── LIMPIAR ──
git checkout main
git pull origin main
git branch -d feature/login   # borrar local
git push origin --delete feature/login  # borrar remota`} />
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   10: Tips y aliases
   ══════════════════════════════════════════ */
function GitTips() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">💡 Tips y Aliases</h2>
      <p className="text-sm text-win-gray-600">Atajos y trucos para ser más productivo con Git.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Aliases útiles" language="bash"
          code={`# ── CONFIGURAR ALIASES ──
git config --global alias.s "status -sb"
git config --global alias.l "log --oneline -15"
git config --global alias.lg "log --oneline --graph --all"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.cm "commit -m"
git config --global alias.last "log -1 HEAD --stat"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.unstage "restore --staged ."
git config --global alias.amend "commit --amend --no-edit"

# AHORA puedes usar:
git s              # en vez de git status
git l              # log corto
git lg             # log con gráfico
git co main        # checkout
git cm "feat: x"   # commit
git undo           # deshacer último commit
git amend          # agregar al último commit`} />
        <div className="space-y-4">
          <CodeBlock title="Trucos avanzados" language="bash"
            code={`# ── STASH: guardar cambios temporalmente ──
git stash                     # guardar cambios
git stash list                # ver stashes
git stash pop                 # recuperar último
git stash apply stash@{2}     # aplicar uno específico
git stash drop stash@{0}      # eliminar uno

# ── CHERRY-PICK: traer un commit específico ──
git cherry-pick abc1234

# ── BISECT: encontrar qué commit rompió algo ──
git bisect start
git bisect bad                # actual está mal
git bisect good abc1234       # este estaba bien
# Git te va llevando por commits para encontrar el malo

# ── CLEAN: borrar archivos sin trackear ──
git clean -fd                 # borrar untracked
git clean -fdn                # preview (dry-run)

# ── WORKTREES: múltiples ramas a la vez ──
git worktree add ../hotfix hotfix/urgent
# Abre otra carpeta con otra rama

# ── TAG: marcar versiones ──
git tag v1.0.0
git tag -a v1.0.0 -m "Versión 1.0"
git push origin v1.0.0`} />
          <AeroCard title="Reglas de oro" icon="🏆" variant="blue">
            <ul className="space-y-1 text-xs">
              <li>✅ Commits pequeños y frecuentes</li>
              <li>✅ Mensajes descriptivos</li>
              <li>✅ Pull antes de push</li>
              <li>✅ Nunca trabajar directo en main</li>
              <li>✅ .gitignore desde el inicio</li>
              <li>❌ Nunca force push a main</li>
              <li>❌ Nunca commitear secrets/passwords</li>
              <li>❌ Nunca commits de 500+ archivos</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

export const gitTopics = {
  'git-intro':    GitIntro,
  'git-init':     GitInit,
  'git-staging':  GitStaging,
  'git-branches': GitBranches,
  'git-merge':    GitMerge,
  'git-remote':   GitRemote,
  'git-log':      GitLog,
  'git-undo':     GitUndo,
  'git-flow':     GitFlow,
  'git-tips':     GitTips,
}