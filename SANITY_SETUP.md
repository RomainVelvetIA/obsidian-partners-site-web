# Guide de Configuration Sanity CMS

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- Un compte sur [sanity.io](https://www.sanity.io/) (gratuit)
- Node.js installé sur votre machine

## 🚀 Étapes de Configuration

### 1. Créer un Projet Sanity

1. Allez sur [sanity.io/manage](https://www.sanity.io/manage)
2. Cliquez sur "Create project"
3. Donnez un nom à votre projet : **"Obsidian Partners Blog"**
4. Choisissez le plan gratuit
5. Notez votre **Project ID** (vous en aurez besoin)

### 2. Initialiser Sanity dans le Projet

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npx sanity init --project-id VOTRE_PROJECT_ID --dataset production
```

Remplacez `VOTRE_PROJECT_ID` par l'ID obtenu à l'étape 1.

### 3. Configurer les Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet (s'il n'existe pas déjà) :

```bash
cp .env.example .env.local
```

Éditez `.env.local` et ajoutez :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id_ici
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 4. Lancer le Studio Sanity

Pour gérer votre contenu :

```bash
npx sanity dev
```

Le studio sera accessible sur `http://localhost:3333`

### 5. Configurer les CORS

1. Allez sur [sanity.io/manage](https://www.sanity.io/manage)
2. Sélectionnez votre projet
3. Allez dans "API" → "CORS Origins"
4. Ajoutez :
   - `http://localhost:3000` (développement)
   - Votre URL de production (ex: `https://obsidian-partners.netlify.app`)

### 6. Déployer le Studio (Optionnel)

Pour un accès permanent au studio sans lancer le serveur local :

```bash
npx sanity deploy
```

Votre studio sera accessible sur `https://[votre-projet].sanity.studio`

## ✅ Vérification

Une fois configuré, testez :

```bash
npm run dev
```

Visitez `http://localhost:3000/blog` - la page devrait s'afficher sans erreur.

## 📝 Créer Votre Premier Article

1. Ouvrez le studio Sanity
2. Cliquez sur "Article de Blog" → "Create"
3. Remplissez les champs
4. Cliquez sur "Publish"
5. Rafraîchissez `/blog` - votre article devrait apparaître !

## 🐛 Problèmes Courants

**Erreur "Configuration must contain projectId"**
→ Vérifiez que `.env.local` existe et contient le bon Project ID

**Les articles ne s'affichent pas**
→ Vérifiez que les articles sont bien publiés (pas en brouillon)

**Erreur CORS**
→ Ajoutez votre URL dans les CORS settings du projet Sanity
