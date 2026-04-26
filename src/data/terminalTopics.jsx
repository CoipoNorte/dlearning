/* ============================================
   terminalTopics.jsx — TODOS los temas de Terminal (10/10)
   ============================================ */
import CodeBlock from '../components/ui/CodeBlock'
import AeroCard from '../components/ui/AeroCard'
import LiveDemo from '../components/ui/LiveDemo'

function TermIntro() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📖 ¿Qué es la Terminal?</h2>
      <p className="text-sm text-win-gray-600">Interfaz de texto para hablar con tu computadora. Más rápida que la GUI para desarrollo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <AeroCard title="Terminales por sistema" icon="💻" variant="blue">
          <ul className="space-y-1 text-xs">
            <li><strong>Windows:</strong> CMD, PowerShell, Windows Terminal, Git Bash</li>
            <li><strong>macOS:</strong> Terminal.app, iTerm2</li>
            <li><strong>Linux:</strong> GNOME Terminal, Konsole</li>
            <li><strong>Todos:</strong> Terminal de VSCode (Ctrl+`)</li>
          </ul>
        </AeroCard>
        <CodeBlock title="Primeros comandos" language="bash"
          code={`pwd         # dónde estoy
ls          # qué hay aquí (dir en Windows)
cd carpeta  # entrar a carpeta
cd ..       # subir un nivel
cd ~        # ir al home
clear       # limpiar pantalla (cls en Windows)
history     # historial de comandos
Ctrl+C      # cancelar comando`} />
      </div>
    </div>
  )
}

function TermNav() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📂 Navegación</h2>
      <p className="text-sm text-win-gray-600">Moverse por el sistema de archivos.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Navegación" language="bash"
          code={`# Rutas
cd /home/usuario/proyectos   # absoluta
cd proyectos/mi-app          # relativa
cd -                         # volver al anterior

# Atajos
.       # directorio actual
..      # padre
~       # home

# Listar
ls -la      # todo con detalles
ls -lh      # tamaños legibles
ls *.js     # solo .js
tree -L 2   # árbol 2 niveles`} />
        <AeroCard title="Atajos de teclado" icon="⚡" variant="blue">
          <ul className="space-y-1 text-xs">
            <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Tab</kbd> — Autocompletar</li>
            <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">↑/↓</kbd> — Historial</li>
            <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+R</kbd> — Buscar en historial</li>
            <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+L</kbd> — Limpiar</li>
            <li><kbd className="px-1 bg-win-gray-100 border border-win-gray-300 rounded text-[10px] font-code">Ctrl+A/E</kbd> — Inicio/fin de línea</li>
          </ul>
        </AeroCard>
      </div>
    </div>
  )
}

function TermFiles() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📁 Archivos y Carpetas</h2>
      <p className="text-sm text-win-gray-600">Crear, copiar, mover, renombrar y eliminar.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Operaciones con archivos" language="bash"
          code={`# ── CREAR ──
touch archivo.txt            # crear archivo vacío
mkdir carpeta                # crear carpeta
mkdir -p padre/hijo/nieto    # crear anidadas

# ── COPIAR ──
cp archivo.txt copia.txt     # copiar archivo
cp -r carpeta/ copia/        # copiar carpeta (-r = recursivo)

# ── MOVER / RENOMBRAR ──
mv archivo.txt nueva-ruta/   # mover
mv viejo.txt nuevo.txt       # renombrar

# ── ELIMINAR ──
rm archivo.txt               # eliminar archivo
rm -r carpeta/               # eliminar carpeta
rm -rf carpeta/              # forzar sin preguntar ⚠️
rmdir carpeta-vacia/         # solo si está vacía

# ── VER CONTENIDO ──
cat archivo.txt              # ver todo
head -20 archivo.txt         # primeras 20 líneas
tail -20 archivo.txt         # últimas 20 líneas
tail -f log.txt              # seguir en tiempo real
less archivo.txt             # ver con scroll (q para salir)
wc -l archivo.txt            # contar líneas

# ── TAMAÑO ──
du -sh carpeta/              # tamaño de carpeta
df -h                        # espacio en disco`} />
        <AeroCard title="⚠️ rm -rf es peligroso" icon="⚠️" variant="red">
          <p className="text-xs">
            <code className="font-code">rm -rf</code> borra TODO sin preguntar y sin papelera. 
            <strong> Nunca</strong> hagas <code className="font-code">rm -rf /</code> — borraría todo el sistema.
            Siempre verifica la ruta antes de ejecutar.
          </p>
        </AeroCard>
      </div>
    </div>
  )
}

function TermText() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔍 Texto y Búsqueda</h2>
      <p className="text-sm text-win-gray-600">Buscar texto en archivos y manipular contenido.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Búsqueda" language="bash"
          code={`# ── GREP: buscar texto en archivos ──
grep "error" log.txt              # buscar en archivo
grep -r "TODO" src/               # buscar recursivo
grep -rn "function" src/          # con número de línea
grep -ri "error" src/             # ignorar mayúsculas
grep -rn "import.*from" src/      # regex

# ── FIND: buscar archivos ──
find . -name "*.js"               # por nombre
find . -name "*.log" -delete      # buscar y borrar
find . -type d -name "node_modules" # solo carpetas
find . -size +10M                 # mayores a 10MB
find . -mtime -7                  # modificados últimos 7 días

# ── SED: reemplazar texto ──
sed 's/viejo/nuevo/g' archivo.txt       # reemplazar (muestra)
sed -i 's/viejo/nuevo/g' archivo.txt    # reemplazar en archivo

# ── SORT y UNIQ ──
sort archivo.txt                  # ordenar
sort -u archivo.txt               # ordenar y quitar duplicados
uniq archivo.txt                  # quitar duplicados consecutivos

# ── AWK: procesar columnas ──
awk '{print $1}' archivo.txt      # primera columna
awk -F: '{print $1}' /etc/passwd  # separador :

# ── CONTAR ──
wc -l archivo.txt                 # líneas
wc -w archivo.txt                 # palabras
wc -c archivo.txt                 # bytes`} />
        <AeroCard title="grep es tu mejor amigo" icon="🔍" variant="blue">
          <p className="text-xs">
            <code className="font-code">grep -rn "texto" carpeta/</code> busca texto en todos los archivos 
            recursivamente y te dice el archivo y línea. Es esencial para debugging.
          </p>
        </AeroCard>
      </div>
    </div>
  )
}

function TermPerms() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔒 Permisos</h2>
      <p className="text-sm text-win-gray-600">Controlar quién puede leer, escribir o ejecutar archivos (Linux/Mac).</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Permisos" language="bash"
          code={`# ── VER PERMISOS ──
ls -la
# -rw-r--r-- 1 usuario grupo 1234 Jan 1 archivo.txt
# │╰─┬──╯╰─┬──╯╰─┬──╯
# │  │     │     │
# │  owner group others
# tipo (- archivo, d carpeta, l link)

# r = read (4)
# w = write (2)
# x = execute (1)

# ── CHMOD: cambiar permisos ──
chmod 755 script.sh    # rwxr-xr-x (owner todo, otros leer+ejecutar)
chmod 644 archivo.txt  # rw-r--r-- (owner leer+escribir, otros solo leer)
chmod +x script.sh     # agregar permiso de ejecución
chmod -w archivo.txt   # quitar permiso de escritura

# ── CHOWN: cambiar dueño ──
sudo chown usuario archivo.txt
sudo chown usuario:grupo archivo.txt
sudo chown -R usuario carpeta/   # recursivo

# ── SUDO: ejecutar como admin ──
sudo comando                     # ejecutar con permisos root
sudo apt install paquete         # instalar software
sudo chmod 755 /etc/algo         # cambiar permisos del sistema`} />
        <AeroCard title="Permisos numéricos" icon="🔢" variant="blue">
          <ul className="space-y-1 text-xs">
            <li><code className="font-code text-[10px]">7</code> = rwx (4+2+1) — Todo</li>
            <li><code className="font-code text-[10px]">6</code> = rw- (4+2) — Leer + escribir</li>
            <li><code className="font-code text-[10px]">5</code> = r-x (4+1) — Leer + ejecutar</li>
            <li><code className="font-code text-[10px]">4</code> = r-- (4) — Solo leer</li>
            <li><code className="font-code text-[10px]">0</code> = --- — Nada</li>
            <li className="mt-2"><strong>755</strong> = rwxr-xr-x (scripts, carpetas)</li>
            <li><strong>644</strong> = rw-r--r-- (archivos normales)</li>
          </ul>
        </AeroCard>
      </div>
    </div>
  )
}

function TermPipes() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🔗 Pipes y Redirección</h2>
      <p className="text-sm text-win-gray-600">Conectar comandos entre sí y redirigir la salida.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Pipes y redirección" language="bash"
          code={`# ── PIPE (|): enviar salida de uno al siguiente ──
ls -la | grep ".js"           # listar y filtrar .js
cat log.txt | grep "error"    # buscar errores en log
history | grep "git"          # buscar en historial
ps aux | grep "node"          # buscar proceso node
cat archivo.txt | sort | uniq # ordenar y quitar duplicados
cat archivo.txt | wc -l       # contar líneas

# ── REDIRECCIÓN ──
# > crear/sobrescribir archivo
echo "hola" > archivo.txt     # crea con "hola"
ls -la > listado.txt          # guardar listado

# >> agregar al final
echo "línea nueva" >> archivo.txt

# 2> redirigir errores
comando 2> errores.txt        # errores a archivo
comando > salida.txt 2>&1     # todo a un archivo

# < leer de archivo
sort < datos.txt

# /dev/null = "basura" (descartar)
comando > /dev/null 2>&1      # silenciar todo

# ── ENCADENAR COMANDOS ──
&&    # ejecutar si el anterior tuvo éxito
||    # ejecutar si el anterior falló
;     # ejecutar siempre

mkdir proyecto && cd proyecto && npm init -y
# Crea carpeta, entra, e inicializa npm

npm test || echo "Tests fallaron"
# Si test falla, mostrar mensaje`} />
        <AeroCard title="Pipes explicados" icon="🔗" variant="blue">
          <pre className="text-[10px] font-code text-win-gray-600 leading-relaxed">
{`comando1 | comando2 | comando3

La salida de comando1
  se convierte en
    la entrada de comando2
      que se convierte en
        la entrada de comando3

Ejemplo real:
cat access.log | grep "404" | sort | uniq -c | sort -rn
  1. Leer el log
  2. Filtrar errores 404
  3. Ordenar
  4. Contar repetidos
  5. Ordenar por cantidad (más frecuente primero)`}
          </pre>
        </AeroCard>
      </div>
    </div>
  )
}

function TermScripts() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">📜 Scripts</h2>
      <p className="text-sm text-win-gray-600">Automatizar tareas con scripts .sh (Linux/Mac) o .bat (Windows).</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Script bash (.sh)" language="bash"
          code={`#!/bin/bash
# deploy.sh — Script de deploy automático

# Variables
PROJECT="mi-app"
BRANCH="main"

echo "🚀 Desplegando $PROJECT..."

# Actualizar código
git checkout $BRANCH
git pull origin $BRANCH

# Instalar dependencias
npm install

# Build
npm run build

# Verificar
if [ $? -eq 0 ]; then
  echo "✅ Build exitoso!"
  echo "📦 Desplegando..."
  # cp -r dist/ /var/www/html/
else
  echo "❌ Error en el build"
  exit 1
fi

echo "🎉 Deploy completado!"

# ── EJECUTAR ──
# chmod +x deploy.sh    (dar permiso, solo 1 vez)
# ./deploy.sh           (ejecutar)`} />
        <div className="space-y-4">
          <CodeBlock title="Script batch (.bat) Windows" language="bash"
            code={`@echo off
REM setup.bat — Setup del proyecto en Windows

echo Instalando dependencias...
npm install

echo Creando archivo .env...
echo PORT=3000 > .env
echo DB_HOST=localhost >> .env

echo Iniciando servidor...
npm run dev

pause`} />
          <AeroCard title="Conceptos de scripting" icon="📋" variant="blue">
            <ul className="space-y-1 text-xs">
              <li><code className="font-code text-[10px]">#!/bin/bash</code> — Shebang (indica qué shell usar)</li>
              <li><code className="font-code text-[10px]">$VARIABLE</code> — Usar variable</li>
              <li><code className="font-code text-[10px]">$?</code> — Exit code del último comando (0 = éxito)</li>
              <li><code className="font-code text-[10px]">if/else/fi</code> — Condicionales</li>
              <li><code className="font-code text-[10px]">for/do/done</code> — Loops</li>
              <li><code className="font-code text-[10px]">$1, $2</code> — Argumentos del script</li>
            </ul>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function TermEnv() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🌍 Variables de Entorno</h2>
      <p className="text-sm text-win-gray-600">Valores de configuración del sistema y tus apps.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Variables de entorno" language="bash"
          code={`# ── VER ──
env                          # todas las variables
echo $HOME                   # una específica
echo $PATH                   # rutas de ejecutables
echo $USER                   # usuario actual

# ── CREAR (temporal, solo esta sesión) ──
export MI_VARIABLE="valor"
echo $MI_VARIABLE

# ── CREAR (permanente) ──
# Agregar al final de ~/.bashrc o ~/.zshrc
echo 'export MI_VARIABLE="valor"' >> ~/.bashrc
source ~/.bashrc             # recargar

# ── PATH: dónde busca ejecutables ──
echo $PATH
# /usr/local/bin:/usr/bin:/bin:...

# Agregar al PATH
export PATH="$PATH:/nueva/ruta"

# ── ARCHIVO .env (para proyectos) ──
# .env (NUNCA commitear a Git!)
PORT=3000
DB_HOST=localhost
DB_PASSWORD=secreto123
API_KEY=abc123

# En Node.js con dotenv:
# require('dotenv').config()
# process.env.PORT  → "3000"

# ── WINDOWS ──
# Ver: echo %PATH%
# Crear: setx MI_VARIABLE "valor"
# O: Panel de Control → Sistema → Variables de Entorno`} />
        <AeroCard title="⚠️ .env y seguridad" icon="🔒" variant="red">
          <ul className="space-y-1 text-xs">
            <li><strong>NUNCA</strong> commitear .env a Git</li>
            <li>Agregar .env al .gitignore</li>
            <li>Crear .env.example con las keys sin valores</li>
            <li>Usar secrets en CI/CD para producción</li>
          </ul>
        </AeroCard>
      </div>
    </div>
  )
}

function TermSsh() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">🌐 SSH y Redes</h2>
      <p className="text-sm text-win-gray-600">Conectarte a servidores remotos de forma segura.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="SSH" language="bash"
          code={`# ── CONECTAR A SERVIDOR ──
ssh usuario@192.168.1.100
ssh usuario@servidor.com
ssh -p 2222 usuario@servidor.com   # puerto custom

# ── GENERAR LLAVES SSH ──
ssh-keygen -t ed25519 -C "tu@email.com"
# Guarda en ~/.ssh/id_ed25519 (privada)
# y ~/.ssh/id_ed25519.pub (pública)

# Copiar llave pública al servidor
ssh-copy-id usuario@servidor.com

# ── COPIAR ARCHIVOS (SCP) ──
scp archivo.txt usuario@server:/ruta/
scp -r carpeta/ usuario@server:/ruta/
scp usuario@server:/ruta/archivo.txt ./local/

# ── COMANDOS DE RED ──
ping google.com              # verificar conexión
curl https://api.ejemplo.com # hacer petición HTTP
curl -o archivo.zip URL      # descargar archivo
wget URL                     # descargar (Linux)
ifconfig                     # ver IPs (Linux/Mac)
ipconfig                     # ver IPs (Windows)
netstat -tlnp                # puertos abiertos
lsof -i :3000                # qué usa el puerto 3000
kill -9 PID                  # matar proceso por PID`} />
        <div className="space-y-4">
          <AeroCard title="Configurar SSH" icon="⚙️" variant="blue">
            <p className="text-xs mb-2">Crear ~/.ssh/config para alias:</p>
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded">{`Host mi-server
  HostName 192.168.1.100
  User admin
  Port 22
  IdentityFile ~/.ssh/id_ed25519

# Ahora: ssh mi-server`}</pre>
          </AeroCard>
          <AeroCard title="curl para APIs" icon="🌐" variant="green">
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded">{`# GET
curl https://api.ejemplo.com/users

# POST con JSON
curl -X POST https://api.ejemplo.com/users \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Ana","email":"a@b.com"}'

# Con autenticación
curl -H "Authorization: Bearer TOKEN" \\
  https://api.ejemplo.com/me`}</pre>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

function TermTips() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold text-win-gray-800">💡 Tips y Aliases</h2>
      <p className="text-sm text-win-gray-600">Personalizar tu terminal para ser más productivo.</p>
      <div className="grid lg:grid-cols-2 gap-4">
        <CodeBlock title="Aliases recomendados" language="bash"
          code={`# Agregar a ~/.bashrc o ~/.zshrc

# ── NAVEGACIÓN ──
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -lah"
alias la="ls -la"

# ── GIT ──
alias gs="git status -sb"
alias gl="git log --oneline -15"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"
alias gpl="git pull"
alias gco="git checkout"
alias gb="git branch"

# ── NPM ──
alias ni="npm install"
alias nd="npm run dev"
alias nb="npm run build"
alias nt="npm test"

# ── PROYECTOS ──
alias proyectos="cd ~/proyectos"
alias work="cd ~/work"

# ── UTILIDADES ──
alias cls="clear"
alias ports="lsof -i -P -n | grep LISTEN"
alias myip="curl ifconfig.me"
alias weather="curl wttr.in"

# ── FUNCIONES ──
mkcd() {
  mkdir -p "$1" && cd "$1"
}
# mkcd mi-proyecto → crea Y entra

# Recargar configuración
source ~/.bashrc`} />
        <div className="space-y-4">
          <AeroCard title="Oh My Zsh (recomendado)" icon="🎨" variant="blue">
            <p className="text-xs mb-2">Framework para zsh con temas, plugins y autocompletado:</p>
            <pre className="text-[10px] font-code bg-win-gray-100 p-2 rounded">{`# Instalar
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Plugins recomendados (en ~/.zshrc):
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  z
)`}</pre>
          </AeroCard>
          <AeroCard title="Herramientas modernas" icon="🆕" variant="green">
            <ul className="space-y-1 text-xs">
              <li><strong>bat</strong> — Reemplazo de cat con colores</li>
              <li><strong>exa/eza</strong> — Reemplazo de ls con iconos</li>
              <li><strong>ripgrep (rg)</strong> — Reemplazo de grep ultra rápido</li>
              <li><strong>fd</strong> — Reemplazo de find más simple</li>
              <li><strong>fzf</strong> — Buscador fuzzy interactivo</li>
              <li><strong>tldr</strong> — Manual simplificado de comandos</li>
              <li><strong>z</strong> — Saltar a carpetas frecuentes</li>
            </ul>
          </AeroCard>
          <AeroCard title="🎓 ¡Completaste Dev Tools!" icon="🏆" variant="default">
            <p className="text-xs">
              Con Git + VSCode + Terminal dominados, tienes las herramientas esenciales de todo desarrollador. 
              ¡Ahora a usarlas en proyectos reales!
            </p>
          </AeroCard>
        </div>
      </div>
    </div>
  )
}

export const terminalTopics = {
  'term-intro':   TermIntro,
  'term-nav':     TermNav,
  'term-files':   TermFiles,
  'term-text':    TermText,
  'term-perms':   TermPerms,
  'term-pipes':   TermPipes,
  'term-scripts': TermScripts,
  'term-env':     TermEnv,
  'term-ssh':     TermSsh,
  'term-tips':    TermTips,
}