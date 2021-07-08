function validate(u,p){
  u = u.trim(), p = p.trim()
  if (!u.length) throw ERRORS.usernameTooShort(u)
  if (u.length>12) throw ERRORS.usernameTooLong(u)
  if (p.includes(u)) throw ERRORS.passwordContainsUsername(p)
  if (p.length>24) throw ERRORS.passwordTooLong(p)
  if (/\W/.test(p)) throw ERRORS.passwordInvalidCharacters(p)
  if (/\W/.test(u)) throw ERRORS.usernameInvalidCharacters(u)
  if (p.length<8) throw ERRORS.passwordTooShort(p)
  if (!/[A-Z]/.test(p)) throw ERRORS.passwordNoCapital(p)
  if (!/\d/.test(p)) throw ERRORS.passwordNoNumber(p)
  return true
}