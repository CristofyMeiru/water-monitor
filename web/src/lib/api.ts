import type { WaterLevelData } from "@/types/water-level-data.types";

const BASE = import.meta.env.PUBLIC_API_URL;

export async function getWaterLevelData(): Promise<WaterLevelData> {
  const capacityLiters = 2000
  const  availableLiters = 826
  return {
    capacityLiters,
    availableLiters,
    percentage: Math.floor((availableLiters / capacityLiters) * 100),
    updatedAt: Date.now().toString(),
  };
}
