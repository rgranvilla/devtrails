interface Options {
  message: string
  error: string
}

export class AlreadyInUseError extends Error {
  public error: string

  constructor({ message, error }: Options) {
    super(message ?? 'This is already in use')
    this.error = error ?? 'Not Available'
  }
}
