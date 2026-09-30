import type { ImageMetadata } from "astro";

import tradition from "../assets/tradition.jpg";
import campagne from "../assets/campagne.jpg";
import seigle from "../assets/seigle.jpg";
import croissant from "../assets/croissant.jpg";
import chocolat from "../assets/chocolat.jpg";
import tarte from "../assets/tarte.jpg";

export interface Categorie {
  slug: string;
  label: string;
  etiquette: string;
}

export interface Produit {
  slug: string;
  categorie: string;
  categorieSlug: string;
  nom: string;
  description: string;
  prix: string;
  image: ImageMetadata;
  poids: string;
  composition: string;
  conservation: string;
  allergenes: string;
}

/* Les categories servent deux fois : le libelle affiche sur la carte produit,
   et le filtre. Le slug fait le lien entre les deux. */
export const categories: Categorie[] = [
  { slug: "pains", label: "Pains", etiquette: "PAINS" },
  { slug: "viennoiseries", label: "Viennoiseries", etiquette: "VIENNOISERIES" },
  { slug: "patisseries", label: "Pâtisseries", etiquette: "PÂTISSERIES" },
];

export const produits: Produit[] = [
  {
    slug: "tradition-au-levain",
    categorie: "PAINS",
    categorieSlug: "pains",
    nom: "Tradition au levain",
    description: "Farine T65 de la Drôme, croûte épaisse, mie dense.",
    prix: "4,20 €",
    image: tradition,
    poids: "500 g ou 1 kg",
    composition:
      "Farine de blé T65 de la Drôme, eau, sel de Guérande, levain naturel entretenu depuis 1998.",
    conservation:
      "Trois jours dans un torchon de lin, trois mois au congélateur, entier.",
    allergenes: "Gluten. Atelier manipulant sésame et fruits à coque.",
  },
  {
    slug: "campagne-aux-graines",
    categorie: "PAINS",
    categorieSlug: "pains",
    nom: "Campagne aux graines",
    description: "Tournesol, lin et sésame. Se garde trois jours.",
    prix: "4,80 €",
    image: campagne,
    poids: "600 g",
    composition:
      "Farine de blé T80, farine de seigle, graines de tournesol, lin et sésame, eau, sel, levain naturel.",
    conservation:
      "Quatre jours dans un torchon, deux mois au congélateur, tranché.",
    allergenes: "Gluten, sésame. Atelier manipulant fruits à coque.",
  },
  {
    slug: "seigle-complet",
    categorie: "PAINS",
    categorieSlug: "pains",
    nom: "Seigle complet",
    description: "Dense et long en bouche, parfait avec un fromage.",
    prix: "5,10 €",
    image: seigle,
    poids: "700 g",
    composition:
      "Farine de seigle complète, farine de blé T65, eau, sel, levain de seigle.",
    conservation:
      "Une semaine dans un torchon — il s'améliore les deux premiers jours.",
    allergenes: "Gluten. Atelier manipulant sésame et fruits à coque.",
  },
  {
    slug: "croissant-pur-beurre",
    categorie: "VIENNOISERIES",
    categorieSlug: "viennoiseries",
    nom: "Croissant pur beurre",
    description: "Beurre AOP, 72 heures de fermentation lente.",
    prix: "1,40 €",
    image: croissant,
    poids: "60 g",
    composition:
      "Farine de blé T45, beurre AOP Charentes-Poitou 82 %, lait entier, sucre, levure, sel.",
    conservation: "À déguster le jour même. Se réchauffe 3 minutes à 150 °C.",
    allergenes: "Gluten, lait. Atelier manipulant fruits à coque.",
  },
  {
    slug: "pain-au-chocolat",
    categorie: "VIENNOISERIES",
    categorieSlug: "viennoiseries",
    nom: "Pain au chocolat",
    description: "Deux barres de chocolat noir à 70 %.",
    prix: "1,60 €",
    image: chocolat,
    poids: "75 g",
    composition:
      "Farine de blé T45, beurre AOP, chocolat noir 70 % (cacao, sucre, beurre de cacao), lait, levure, sel.",
    conservation: "À déguster le jour même. Se réchauffe 3 minutes à 150 °C.",
    allergenes: "Gluten, lait, soja. Atelier manipulant fruits à coque.",
  },
  {
    slug: "tarte-aux-pommes",
    categorie: "PÂTISSERIES",
    categorieSlug: "patisseries",
    nom: "Tarte aux pommes",
    description: "Pommes du Forez, pâte brisée au beurre frais.",
    prix: "4,50 €",
    image: tarte,
    poids: "Part de 140 g",
    composition:
      "Pommes du Forez, farine de blé T55, beurre frais, sucre, œufs, cannelle.",
    conservation: "Deux jours au réfrigérateur, à sortir 20 minutes avant.",
    allergenes: "Gluten, œuf, lait. Atelier manipulant fruits à coque.",
  },
];

export const produitParSlug = (slug: string): Produit | undefined =>
  produits.find((p) => p.slug === slug);

export const filtres = [{ slug: "tout", label: "Tout" }, ...categories];
