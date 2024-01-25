export enum SortBy {
  relevance,
  priceDesc,
  priceAsc,
  nameAToZ,
  nameZToA,
  men,
  women,
  children,
}
export interface SortButtonProps {
  label: string;
  sortMethod: SortMethod[];
}
export interface SortMethod {
  name: string;
  sortBy: SortBy;
}
export interface SortButtonState {
  isOpen: boolean;
}
