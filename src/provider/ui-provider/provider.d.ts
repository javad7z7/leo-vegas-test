interface IState {
  toast: {
    open?: boolean
    type?: 'error' | 'success'
    title?: string
    description?: string
  }
}
