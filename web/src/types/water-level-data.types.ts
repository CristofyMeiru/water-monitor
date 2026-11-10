// src/types/water-level.ts
export type LevelStatus = "maximum" | "medium" | "low" | "empty";

export type SensorReading = {
  distanceCm: number;
  readAt: string;
};

export type WaterLevelData = {
  percentage: number;
  availableLiters: number;
  capacityLiters: number;
  updatedAt: string;
};

export type DeviceStatus = {
  online: boolean;
  wifiSignalDbm?: number;
  lastReadingAt: string;
};
