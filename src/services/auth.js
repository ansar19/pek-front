import jwtDecode from 'jwt-decode'

export const isAuthenticated = () => {
  const token = localStorage.getItem("token")
  if (token) {
    const { exp } = jwtDecode(token)
    if (exp * 1000 < Date.now()) {
      localStorage.removeItem("token")
    }
    return exp * 1000 > Date.now()
  }
  return false
}
