# Obsidian Partners - Site Web

Site vitrine pour Obsidian Partners, première entreprise de courtage en intelligence artificielle.

## 🚀 Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icônes

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 📤 Déploiement sur Netlify

### Option 1 : Via l'interface Netlify (Recommandé)

1. **Connecter le repository GitHub** :
   - Va sur [netlify.com](https://www.netlify.com)
   - Clique sur "Add new site" → "Import an existing project"
   - Connecte ton compte GitHub
   - Sélectionne le repository du projet

2. **Configuration automatique** :
   - Netlify détectera automatiquement Next.js
   - Build command : `npm run build`
   - Publish directory : `.next` (sera géré automatiquement par le plugin Next.js)

3. **Variables d'environnement** (si nécessaire) :
   - Aucune variable d'environnement requise pour ce projet

4. **Déployer** :
   - Clique sur "Deploy site"
   - Netlify construira et déploiera automatiquement

### Option 2 : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Initialiser le site
netlify init

# Déployer
netlify deploy --prod
```

### Option 3 : Via Drag & Drop

1. Build le projet localement :
   ```bash
   npm run build
   ```

2. Va sur [app.netlify.com/drop](https://app.netlify.com/drop)

3. Glisse-dépose le dossier `.next` (⚠️ Cette méthode ne fonctionne pas bien avec Next.js, préfère les options 1 ou 2)

## ⚙️ Configuration Netlify

Le fichier `netlify.toml` est déjà configuré avec :
- Plugin Next.js pour une intégration optimale
- Node.js version 20
- Commande de build automatique

## 📝 Notes

- Le site utilise des images distantes depuis Supabase (configuré dans `next.config.mjs`)
- Toutes les pages sont statiques ou server-side rendered
- Le site est entièrement responsive

## 🔗 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Netlify](https://docs.netlify.com)
- [Plugin Next.js Netlify](https://github.com/netlify/netlify-plugin-nextjs)


