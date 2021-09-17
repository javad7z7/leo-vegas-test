interface IMoviesList {
  onSearch?: Function
  toggleFavourite?: Function
  favourites?: { isOpen: boolean; list: any[] }
  query?: string
  watchLater?: { isOpen: boolean; list: any[] }
  toggleWatchLater?: Function
  movies?: any[]
  isLoading?: boolean
  onWatchLater?: Function
  onFavourite?: Function
  totalPage?: number
  onPaginate?: Function
  page?: number
}
