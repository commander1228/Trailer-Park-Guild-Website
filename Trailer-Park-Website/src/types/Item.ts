export const QUALITY_TYPE = {
  POOR: "#9d9d9d",
  COMMON: "#ffffff",
  UNCOMMON: "#1eff00",
  RARE: "#0070dd",
  EPIC: "#a335ee",
  LEGENDARY: "#ff8000",
} as const;

export type Quality = keyof typeof QUALITY_TYPE;

export interface WowItem {
  id: number
  name: string
  qualityType: Quality
  qualityName: string
  quantity: number
}