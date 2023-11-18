export interface Optinos {
  search: string,
  filter: 'all' | 'current' | 'expelled' | 'captain' | 'prefect' | 'inquisitor',
  sorting: 'firstName' | 'lastName' | 'house',
  sortingOrder: 1 | -1
}