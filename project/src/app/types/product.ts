export enum ProductType {
  CHILLY = "chilly",
  SPICE = "spice",
  SAUCE = "sauce",
  BLEND = "blend",
  EXTRACT = "extract",
}

export enum HeatLevel {
  LOWEST = "s",
  MEDIUM = "m",
  HIGHER = "l",
  HIGH = "xl",
}

export interface Product {
  id: string,
  documentId: string,
  name: string,
  price: {
    value: number,
    currency: "USD" | "EUR" | "GBP",
  },
  description: string,
  image: {
    url: string,
  },
  // NB! Scale 1..10
  rating: number,
  heatLevel: HeatLevel,
  type: ProductType,
}
