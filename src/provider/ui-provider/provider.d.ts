interface IState {
  dialog: { open?: boolean; data?: any; type?: string }
  toast: {
    open?: boolean
    type?: 'error' | 'success'
    title?: string
    description?: string
  }
}
