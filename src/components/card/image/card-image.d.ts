interface ICardImage {
  title?: string
  description?: string
  isLoading?: boolean
  onFavourite?: Function
  onWatchLater?: Function
  item?: any
  isFavourite?: boolean
  isWatchLater?: boolean
  src?: string | null
}
