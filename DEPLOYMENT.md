# 🚀 Déploiement du Studio Sanity

## Configuration Actuelle

✅ **Variables d'environnement configurées**
- Project ID: `6fry4t3n`
- Dataset: `production`
- Build Next.js: **Réussi** ✓

## Prochaines Étapes

### 1. Se Connecter à Sanity

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npx sanity login
```

Cela ouvrira votre navigateur pour vous connecter à votre compte Sanity.

### 2. Déployer le Schéma

Une fois connecté, déployez le schéma du blog :

```bash
npx sanity schema deploy
```

Cela enverra le schéma du blog à votre projet Sanity.

### 3. Lancer le Studio Sanity

Pour gérer vos articles de blog :

```bash
npx sanity dev
```

Le studio sera accessible sur `http://localhost:3333`

### 4. Créer Votre Premier Article

1. Ouvrez `http://localhost:3333` dans votre navigateur
2. Cliquez sur "Article de Blog"
3. Cliquez sur "Create" (bouton en haut à droite)
4. Remplissez les champs :
   - **Titre** : Ex: "Bienvenue sur notre blog"
   - **Slug** : Cliquez sur "Generate" à côté du champ
   - **Image principale** : Uploadez une image (optionnel)
   - **Catégories** : Sélectionnez une catégorie
   - **Extrait** : Écrivez un court résumé
   - **Contenu** : Rédigez votre article
   - **SEO** : Remplissez les champs meta title et description
5. Cliquez sur "Publish" en bas à droite

### 5. Voir Votre Article sur le Site

1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Ouvrez `http://localhost:3000/blog`

3. Votre article devrait apparaître !

## Déployer le Studio en Ligne (Optionnel)

Pour accéder au studio sans lancer le serveur local :

```bash
npx sanity deploy
```

Votre studio sera accessible sur `https://[votre-projet].sanity.studio`

## Configurer les CORS

Pour que votre site en production puisse accéder aux données Sanity :

1. Allez sur [sanity.io/manage](https://www.sanity.io/manage)
2. Sélectionnez votre projet "Obsidian Partners Blog"
3. Allez dans "API" → "CORS Origins"
4. Cliquez sur "Add CORS origin"
5. Ajoutez :
   - `http://localhost:3000` (pour le développement)
   - Votre URL Netlify (ex: `https://obsidian-partners.netlify.app`)
6. Cochez "Allow credentials"
7. Cliquez sur "Save"

## Déploiement sur Netlify

Avant de déployer sur Netlify, ajoutez les variables d'environnement :

1. Allez dans votre projet Netlify
2. Site settings → Environment variables
3. Ajoutez :
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `6fry4t3n`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`

Puis déployez normalement !

## 🎉 C'est Tout !

Votre blog est maintenant prêt. Vous pouvez :
- ✅ Créer des articles via le studio Sanity
- ✅ Les voir apparaître automatiquement sur `/blog`
- ✅ Filtrer par catégorie
- ✅ Bénéficier du SEO optimisé
- ✅ Gérer tout sans toucher au code !
