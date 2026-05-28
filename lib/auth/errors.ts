/**
 * Traduce mensajes de error de Supabase Auth al español.
 */
const ERROR_MESSAGES: Record<string, string> = {
  "Invalid login credentials": "Correo o contraseña incorrectos.",
  "Email not confirmed": "Confirmá tu correo antes de iniciar sesión.",
  "User already registered": "Ya existe una cuenta con este correo.",
  "Password should be at least 6 characters":
    "La contraseña debe tener al menos 6 caracteres.",
  "Signup requires a valid password":
    "Ingresá una contraseña válida (mínimo 6 caracteres).",
  "Unable to validate email address: invalid format":
    "El formato del correo electrónico no es válido.",
  "Email rate limit exceeded":
    "Demasiados intentos. Esperá unos minutos e intentá de nuevo.",
  "For security purposes, you can only request this after 60 seconds.":
    "Por seguridad, esperá un momento antes de volver a intentar.",
};

export function translateAuthError(message: string): string {
  return ERROR_MESSAGES[message] ?? message;
}
