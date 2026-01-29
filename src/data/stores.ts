/**
 * Flying Dodo Store Locations Data
 * 
 * This file contains all retail locations where Flying Dodo beers are available.
 * The owner can edit this file to add, remove, or update store information.
 * 
 * Stores are grouped by region:
 * - NORTH: Northern Mauritius
 * - CENTRE: Central region including Moka
 * - WEST: Western coast
 * - EAST: Eastern coast
 * - SOUTH: Southern Mauritius
 */

export interface Store {
  id: string;
  name: string;
  address?: string;
  area?: string;
}

export interface StoreRegion {
  id: string;
  name: string;
  stores: Store[];
}

export const storeRegions: StoreRegion[] = [
  {
    id: "north",
    name: "NORTH",
    stores: [
      { id: "n1", name: "Super U Grand Baie", area: "Grand Baie" },
      { id: "n2", name: "Winner's Grand Baie", area: "Grand Baie" },
      { id: "n3", name: "Intermart Grand Baie", area: "Grand Baie" },
      { id: "n4", name: "Super U Pamplemousses", area: "Pamplemousses" },
      { id: "n5", name: "Intermart Trou aux Biches", area: "Trou aux Biches" },
    ],
  },
  {
    id: "centre",
    name: "CENTRE",
    stores: [
      { id: "c1", name: "Flying Dodo Brewery (Bagatelle)", area: "Moka" },
      { id: "c2", name: "Super U Bagatelle", area: "Moka" },
      { id: "c3", name: "Jumbo Phoenix", area: "Phoenix" },
      { id: "c4", name: "Super U Flacq", area: "Flacq" },
      { id: "c5", name: "Winner's Curepipe", area: "Curepipe" },
      { id: "c6", name: "Intermart Rose Hill", area: "Rose Hill" },
      { id: "c7", name: "Super U Quatre Bornes", area: "Quatre Bornes" },
    ],
  },
  {
    id: "west",
    name: "WEST",
    stores: [
      { id: "w1", name: "Super U Flic en Flac", area: "Flic en Flac" },
      { id: "w2", name: "Intermart Flic en Flac", area: "Flic en Flac" },
      { id: "w3", name: "Winner's Tamarin", area: "Tamarin" },
      { id: "w4", name: "Super U Black River", area: "Black River" },
    ],
  },
  {
    id: "east",
    name: "EAST",
    stores: [
      { id: "e1", name: "Super U Belle Mare", area: "Belle Mare" },
      { id: "e2", name: "Intermart Palmar", area: "Palmar" },
      { id: "e3", name: "Winner's Centre de Flacq", area: "Centre de Flacq" },
    ],
  },
  {
    id: "south",
    name: "SOUTH",
    stores: [
      { id: "s1", name: "Super U Mahebourg", area: "Mahebourg" },
      { id: "s2", name: "Intermart Blue Bay", area: "Blue Bay" },
      { id: "s3", name: "Winner's Souillac", area: "Souillac" },
    ],
  },
];

// Main restaurant/brewpub location (excluding closed Port Louis)
export const brewpubLocation = {
  name: "Flying Dodo Brewing Company",
  address: "1, Mall of Mauritius Bagatelle",
  city: "Reduit 80832, Moka",
  country: "Republic of Mauritius",
  phone: "+(230) 468 8810",
  description: "Visit our main brewery and taproom at Bagatelle Mall for fresh craft beer straight from the source.",
};
