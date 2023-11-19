export interface Options {
  search: string,
  filter: 'all' | 'current' | 'expelled' | 'captain' | 'prefect' | 'inquisitor',
  sorting: 'firstName' | 'lastName' | 'house',
  sortingOrder: number
}