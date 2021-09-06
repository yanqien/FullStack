import Cookies from 'js-cookie'

const TokenKey = 'user-Token'

export function getToken(): string | undefined {
  return Cookies.get(TokenKey)
}

export function setToken(token: any): string | undefined {
  return Cookies.set(TokenKey, token, { expires: 6000 })
}

export function removeToken(): void {
  return Cookies.remove(TokenKey)
}
