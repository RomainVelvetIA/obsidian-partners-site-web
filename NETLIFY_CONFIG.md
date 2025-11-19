# Configuration Netlify pour le Blog

## 🚀 Déploiement Automatique

Netlify devrait détecter automatiquement les changements sur GitHub et redéployer votre site.

## ⚙️ Variables d'Environnement Requises

Pour que le blog fonctionne en production, vous devez ajouter les variables d'environnement Sanity dans Netlify :

### Étapes :

1. **Allez sur Netlify** : [app.netlify.com](https://app.netlify.com)

2. **Sélectionnez votre site** "Obsidian Partners"

3. **Accédez aux variables d'environnement** :
   - Cliquez sur **Site configuration** (ou **Site settings**)
   - Dans le menu de gauche, cliquez sur **Environment variables**

4. **Ajoutez ces 3 variables** (cliquez sur "Add a variable" pour chacune) :

   | Variable | Valeur |
   |----------|--------|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `6fry4t3n` |
   | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
   | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

5. **Sauvegardez** et **redéployez** si nécessaire

## 🔄 Forcer un Redéploiement

Si le site ne se redéploie pas automatiquement :

1. Allez dans **Deploys**
2. Cliquez sur **Trigger deploy** → **Deploy site**

## ✅ Vérification

Une fois déployé, vérifiez :
- ✅ Page d'accueil : `https://votre-site.netlify.app`
- ✅ Page blog : `https://votre-site.netlify.app/blog`
- ✅ Votre article s'affiche correctement

## 🔧 Configuration CORS Sanity (Production)

N'oubliez pas d'ajouter votre URL Netlify aux CORS de Sanity :

1. Allez sur [sanity.io/manage](https://www.sanity.io/manage)
2. Sélectionnez votre projet
3. **API** → **CORS Origins**
4. Ajoutez votre URL Netlify : `https://votre-site.netlify.app`
5. Cochez "Allow credentials"
6. Sauvegardez

## 📝 Note

Le déploiement prend généralement 2-3 minutes. Vous recevrez un email de Netlify quand c'est terminé.
