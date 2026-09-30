# fournil-margot

Site vitrine statique du **Fournil de Margot**, boulangerie artisanale à Lyon.
Traduit du design pen.dev [`boulangerie`](https://github.com/codeside-dev/maquettes-pen-dev/tree/main/boulangerie).

## Stack

- [Astro](https://astro.build) 5, en sortie statique
- [Tailwind CSS](https://tailwindcss.com) v4, via `@tailwindcss/vite`
- `astro:assets` pour l'optimisation des images

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil : heros, la maison, boutique filtrable, nous trouver |
| `/produit/<slug>/` | Fiche produit — six articles |

Les filtres de catégorie fonctionnent côté client. L'état actif est porté par
`aria-pressed`, donc le style suit l'attribut et l'état est annoncé aux lecteurs
d'écran.

## Commandes

```bash
pnpm install
pnpm dev       # developpement
pnpm build     # build statique dans dist/
pnpm preview   # previsualisation du build
```

## Déploiement

Le build produit un ensemble de fichiers dans `dist/` : n'importe quel hébergeur
statique convient. Le site est déployé sur Vercel, projet `codeside/fournil-margot`.

## Photos

Les sept photographies de `src/assets/` proviennent d'Openverse et de Wikimedia
Commons. Elles **ne sont pas couvertes par la licence MIT** de ce dépôt et
restent soumises à leurs licences respectives — CC0, CC BY ou CC BY-SA. L'auteur
et la licence de chacune sont dans [`src/assets/CREDITS.json`](src/assets/CREDITS.json).

## Licence

MIT — voir [`LICENSE`](LICENSE). Elle couvre le code, les composants, les styles
et le texte de ce dépôt, à l'exclusion des photographies.
