export function validateCity(city: string): boolean {
  const xssPatterns = [/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, /on\w+\s*=/gi];
  if (xssPatterns.some(pattern => pattern.test(city))) return false;
  
  const allowedRegex = /^[a-zA-Zа-яА-ЯёЁ\u00C0-\u017F\u0400-\u04FF\s\-!]+$/u;
  return allowedRegex.test(city) && city.length > 0;
}
