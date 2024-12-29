export class AppError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    // Corrige o protótipo para instâncias de subclasses
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Validation error', details?: Record<string, any>) {
    super(message, 400)
    this.details = details
  }

  details?: Record<string, any>
}

export class AuthError extends AppError {
  constructor(message = 'Authentication failed') {
    super(message, 401)
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Access denied') {
    super(message, 403)
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404)
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict') {
    super(message, 409)
  }
}
