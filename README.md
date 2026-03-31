# MYWALL — Visualizador de Paneles con IA

## 🚀 Guía de instalación paso a paso

Seguí estos pasos en orden. No necesitás saber programar.

---

## PASO 1: Configurar Google Sheets para recibir leads

Esto hace que cada vez que un cliente complete el formulario, te llegue automáticamente a una planilla de Google.

### 1.1 — Crear la planilla
1. Entrá a **sheets.google.com**
2. Hacé clic en **"En blanco"** para crear una planilla nueva
3. Ponele de nombre: **Mywall - Leads**
4. Dejala abierta (no le agregues nada, el script lo hace solo)

### 1.2 — Crear el script
1. Dentro de la misma planilla, andá al menú **Extensiones → Apps Script**
2. Se abre una ventana nueva. Borrá todo el código que aparece
3. Copiá y pegá TODO el contenido del archivo **google-apps-script.js** que está incluido en esta carpeta
4. Hacé clic en el icono de guardar 💾 (o Ctrl+S)
5. Ponele de nombre al proyecto: **Mywall Leads**

### 1.3 — Publicar el script como web app
1. Hacé clic en **Implementar → Nueva implementación**
2. Hacé clic en el engranaje ⚙️ y seleccioná **"App web"**
3. Configurá así:
   - Descripción: `Mywall Leads`
   - Ejecutar como: **Yo** (tu email)
   - Quién tiene acceso: **Cualquier persona**
4. Hacé clic en **Implementar**
5. Te va a pedir permiso, hacé clic en **Autorizar** → elegí tu cuenta → **Permitir**
6. **COPIÁ LA URL** que aparece (empieza con `https://script.google.com/macros/s/...`)
7. Guardá esa URL, la vas a necesitar en el paso 3

---

## PASO 2: Crear cuenta en Netlify (hosting gratuito)

1. Entrá a **netlify.com**
2. Hacé clic en **Sign up** → **Sign up with Google** (o el método que prefieras)
3. Ya tenés cuenta, no hay que pagar nada

---

## PASO 3: Subir el proyecto a Netlify

### 3.1 — Subir los archivos
1. En Netlify, andá a **Sites** → **Add new site** → **Deploy manually**
2. Arrastrá la carpeta **mywall-project** completa (esta misma carpeta) al área de upload
3. Esperá a que suba. Te va a dar una URL tipo `random-name-12345.netlify.app`

### 3.2 — Configurar las credenciales (IMPORTANTE)
1. Dentro de tu site en Netlify, andá a **Site configuration → Environment variables**
2. Agregá estas dos variables:

   | Variable | Valor |
   |----------|-------|
   | `GEMINI_API_KEY` | `AIzaSyCXowEby7p-7FMbrodwbVImcy3syk2pkD0` |
   | `GOOGLE_SHEETS_WEBHOOK` | La URL que copiaste en el paso 1.3 |

3. Hacé clic en **Save**

### 3.3 — Redesplegar
1. Andá a **Deploys** → hacé clic en **Trigger deploy → Deploy site**
2. Esperá unos segundos a que termine
3. Entrá a la URL de tu sitio y ¡listo!

---

## PASO 4: Personalizar la URL (opcional)

1. En Netlify, andá a **Domain management → Domains**
2. Podés cambiar el nombre a algo como `mywall-visualizer.netlify.app`
3. O conectar tu dominio propio si tenés uno

---

## ❓ Solución de problemas

**"Error al generar la imagen"**
→ Revisá que la variable GEMINI_API_KEY esté bien configurada en Netlify

**"Los leads no llegan a Google Sheets"**
→ Verificá que la variable GOOGLE_SHEETS_WEBHOOK tenga la URL correcta del Apps Script
→ Revisá que el script esté publicado como "Cualquier persona" tiene acceso

**"La página se ve pero el botón generar no funciona"**
→ Revisá que las funciones de Netlify estén activas (Netlify → Functions → deberías ver "generate")

---

## 📁 Archivos del proyecto

```
mywall-project/
├── index.html                          ← La página web
├── panels/
│   ├── roble-gris.webp                 ← Imagen panel Roble
│   └── lino-terra-negro.webp           ← Imagen panel Lino Terra
├── netlify/
│   └── functions/
│       ├── generate.js                 ← Función que conecta con Gemini
│       └── panels/
│           ├── roble-gris.b64          ← Panel Roble en base64
│           └── lino-terra-negro.b64    ← Panel Lino Terra en base64
├── netlify.toml                        ← Configuración de Netlify
├── package.json                        ← Info del proyecto
├── google-apps-script.js               ← Código para Google Sheets (copiarlo a mano)
└── README.md                           ← Estas instrucciones
```

## 🔧 Para agregar más paneles en el futuro

Pedile a Claude que te ayude a agregar más paneles. Solo necesitás:
1. La imagen del nuevo panel
2. El nombre del panel
