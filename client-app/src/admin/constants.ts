export type LoginModel = {
  username: string
  password: string
}

export type Pagination = {
  currentPage: number
  pageSize: number
}

export type GenreModel = {
  id?: number
  name: string
  slug: string
}