export enum SortBy {
  none,
  relevance,
  priceDesc,
  priceAsc,
  nameAToZ,
  nameZToA,
}
export enum FilterBy {
  none,
  men,
  women,
  children,
}
export interface SortFilterButtonProps {
  label: string;
  method: ActionType[];
}
export interface ActionType {
  label: string;

  filterBy: FilterBy;
  filter: boolean;
  sortBy: SortBy;
  sort: boolean;
}
export interface SortButtonState {
  isOpen: boolean;
}
