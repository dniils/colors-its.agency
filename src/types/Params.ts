export type Params = Record<string, string | number | boolean>;

export interface SelectOption {
  id: number;
  label: string;
}

export interface SortOption extends SelectOption {
  sortBy: string;
  order: string;
}
