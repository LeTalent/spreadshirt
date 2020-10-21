
export interface Category {
  "id": number,
  "name": string
}


export interface Breed {
  "id": string,
  "name": string,
  "temperament": string,
  "life_span": string,
  "alt_names": string,
  "wikipedia_url": string,
  "origin": string,
  "weight_imperial": string,
  "experimental": number,
  "hairless": number,
  "natural": number,
  "rare": number,
  "rex": number,
  "suppress_tail": number,
  "short_legs": number,
  "hypoallergenic": number,
  "adaptability": number,
  "affection_level": number,
  "country_codes": string,
  "child_friendly": number,
  "dog_friendly": number,
  "energy_level": number,
  "grooming": number,
  "health_issues": number,
  "intelligence": number,
  "shedding_level": number,
  "social_needs": number,
  "stranger_friendly": number,
  "vocalisation": number,
}

export interface Image {
  "id": string,
  "url": string,
  "sub_id"?: string,
  "created_at"?: string,
  "original_filename"?: string,
  "breeds": Breed[],
  "categories"?: Category[],
  "width"?: number,
  "height"?: number
}
