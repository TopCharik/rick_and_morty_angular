export interface PaginationState {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export const initialPaginationState: PaginationState = {
  count: 0,
  pages: 0,
  next: null,
  prev: null,
}
