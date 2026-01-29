/**
 * Flying Dodo Beers Data
 * 
 * This file contains all beer information and can be edited by the owner
 * to update beer details, add new beers, or remove discontinued ones.
 * 
 * Each beer includes:
 * - name: Display name of the beer
 * - style: Beer style category
 * - description: Tasting notes and description
 * - abv: Alcohol by volume percentage
 * - ibu: International Bitterness Units (optional)
 * - plato: Original gravity in Plato degrees (optional)
 * - foodPairing: Recommended food pairings (optional)
 * - image: Path to beer image (optional)
 * - isNew: Flag for highlighting new releases
 */

export interface Beer {
  id: string;
  name: string;
  style: string;
  description: string;
  abv: number;
  ibu?: number;
  plato?: number;
  foodPairing?: string;
  image?: string;
  isNew?: boolean;
}

export const beers: Beer[] = [
  {
    id: "blonde",
    name: "Flying Dodo BLONDE",
    style: "Belgian Blonde Ale",
    description: "A light, refreshing Belgian-style blonde ale with subtle fruity esters and a clean, crisp finish. Brewed with premium malts and aromatic hops for a perfectly balanced taste.",
    abv: 5.0,
    ibu: 20,
    plato: 11.5,
    foodPairing: "Pairs perfectly with grilled seafood, light salads, and soft cheeses.",
  },
  {
    id: "nationale",
    name: "Flying Dodo NATION'ALE",
    style: "Amber Ale",
    description: "Our flagship amber ale celebrating Mauritian pride. Rich caramel notes with a hint of tropical fruit, crafted with locally sourced ingredients where possible.",
    abv: 5.5,
    ibu: 25,
    plato: 12.5,
    foodPairing: "Excellent with grilled meats, spicy curries, and aged cheddar.",
  },
  {
    id: "neipa",
    name: "Flying Dodo N E I P A",
    style: "New England IPA",
    description: "Hazy, juicy, and bursting with tropical hop character. This NEIPA showcases notes of mango, passion fruit, and citrus with a soft, pillowy mouthfeel and minimal bitterness.",
    abv: 6.5,
    ibu: 40,
    plato: 14.0,
    foodPairing: "Try with spicy Asian cuisine, fish tacos, or tangy goat cheese.",
  },
  {
    id: "experimentale-ipa",
    name: "Flying Dodo EXPERIMENT'ALE IPA",
    style: "American IPA",
    description: "Our experimental IPA series pushing the boundaries of hop exploration. Bold, aromatic, and unapologetically hoppy with each batch featuring unique hop combinations.",
    abv: 6.8,
    ibu: 55,
    plato: 14.5,
    foodPairing: "Matches well with burgers, BBQ, and strong blue cheeses.",
  },
  {
    id: "belgian-wit",
    name: "Flying Dodo OLD STYLE BELGIAN WIT",
    style: "Belgian Witbier",
    description: "A traditional Belgian wheat beer with refreshing notes of coriander and orange peel. Cloudy, light, and incredibly refreshing - perfect for tropical island life.",
    abv: 4.8,
    ibu: 15,
    plato: 11.0,
    foodPairing: "Ideal with mussels, light seafood dishes, and fresh salads.",
  },
];

// Brewery information for the "new beer every month" feature
export const breweryInfo = {
  monthlyBrewMessage: "A new beer is brewed every month - ask us what's fresh!",
  batchSize: "500L",
  style: "Unpasteurized & Unfiltered",
  philosophy: "Small batches, big flavours. Each beer is crafted with hands, heart, and sincere passion.",
};
