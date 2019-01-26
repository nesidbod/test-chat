import IAuthState from './IAuthState'

export default {
  authError: undefined,
  isAuthenticated: false,
  isAuthenticating: false,
  user: { name: 'Test user', email: '' }
} as IAuthState
