export function validateDate(dateString: string): boolean {
  const dateRegex = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;
  const match = dateString.match(dateRegex);
  
  if (!match) return false;
  
  const [, day, month, year] = match.map(Number);
  const date = new Date(year, month - 1, day);
  
  if (!/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateString)) return false;
  
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return false;
  }
  
  return date >= new Date();
}
