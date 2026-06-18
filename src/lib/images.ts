import newborn1 from "@/assets/newborn-1.jpg.asset.json";
import newborn2 from "@/assets/newborn-2.jpg.asset.json";
import newborn4 from "@/assets/newborn-4.png.asset.json";
import maternity1 from "@/assets/maternity-1.jpg.asset.json";
import maternity3 from "@/assets/maternity-3.png.asset.json";
import family1 from "@/assets/family-1.jpg.asset.json";
import cakesmash1 from "@/assets/cakesmash-1.jpg.asset.json";

export type GalleryImage = {
  url: string;
  category: "Newborn" | "Maternity" | "Family" | "Milestones" | "Cake Smash";
  caption: string;
  orientation: "portrait" | "landscape" | "square";
};

export const images: Record<string, { url: string }> = {
  newborn1, newborn2, newborn4, maternity1, maternity3, family1, cakesmash1,
};

export const gallery: GalleryImage[] = [
  { url: newborn4.url, category: "Newborn", caption: "Sisters · A first embrace", orientation: "portrait" },
  { url: maternity3.url, category: "Maternity", caption: "Crimson Bloom", orientation: "square" },
  { url: newborn2.url, category: "Newborn", caption: "Sunflower Lullaby", orientation: "landscape" },
  { url: maternity1.url, category: "Maternity", caption: "Heritage & Hope", orientation: "portrait" },
  { url: cakesmash1.url, category: "Cake Smash", caption: "First Year, First Bite", orientation: "portrait" },
  { url: family1.url, category: "Family", caption: "Joy in Yellow", orientation: "portrait" },
  { url: newborn1.url, category: "Milestones", caption: "Beneath the Sea", orientation: "landscape" },
];
