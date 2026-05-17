# RoboLua — Application pédagogique Lua / Roblox

Application web pédagogique pour apprendre à coder en Lua pour Roblox, destinée aux enfants de 8-13 ans.
Tuteur IA intégré (Robo), multilingue FR/EN/ES, Progressive Web App installable sur tablette.

---

## Déploiement sur Vercel (recommandé)

### Étape 1 — Préparer le dépôt GitHub

1. Créer un compte sur https://github.com (gratuit)
2. Créer un nouveau dépôt public nommé `robolua-app`
3. Uploader tous les fichiers de ce dossier dans le dépôt

### Étape 2 — Déployer sur Vercel

1. Créer un compte sur https://vercel.com (gratuit, connexion avec GitHub)
2. Cliquer "Add New Project" → importer le dépôt `robolua-app`
3. Dans "Environment Variables", ajouter :
   - Nom : `ANTHROPIC_API_KEY`
   - Valeur : ta clé API (obtenir sur https://console.anthropic.com)
4. Cliquer "Deploy"

Vercel génère automatiquement une URL du type : `https://robolua-app.vercel.app`

### Étape 3 — Installer sur tablette (iPad / Android)

**Sur iPad (Safari) :**
1. Ouvrir l'URL dans Safari
2. Appuyer sur l'icône Partager (carré avec flèche)
3. Sélectionner "Sur l'écran d'accueil"
4. L'app s'ouvre comme une vraie application, plein écran

**Sur Android (Chrome) :**
1. Ouvrir l'URL dans Chrome
2. Appuyer sur les 3 points (menu)
3. Sélectionner "Ajouter à l'écran d'accueil"

---

## Développement local

```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000

---

## Structure des fichiers

```
robolua-app/
├── pages/
│   ├── _app.js          # Configuration Next.js
│   ├── index.js         # Application principale React
│   └── api/
│       └── chat.js      # Proxy sécurisé vers l'API Claude
├── styles/
│   └── globals.css
├── public/
│   └── manifest.json    # Manifest PWA (installation tablette)
├── package.json
└── next.config.js
```

---

## Clé API Anthropic

La clé API est stockée côté serveur (variable d'environnement Vercel).
Elle n'est jamais exposée dans le code frontend. ✓

Obtenir une clé : https://console.anthropic.com → API Keys → Create Key
