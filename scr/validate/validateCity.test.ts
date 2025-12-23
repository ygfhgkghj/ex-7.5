import { validateCity } from './validateCity';

describe('validateCity', () => {
  it('блокирует XSS экранирование', () => {
    expect(validateCity('<script>alert(1)</script>')).toBe(false);
    expect(validateCity('"><img src=x onerror=alert(1)>')).toBe(false);
  });

  it('пропускает восклицательный знак и дефисы', () => {
    expect(validateCity('Saint-Louis-du-Ha! Ha!')).toBe(true);
  });

  it('пропускает unicode символы', () => {
    expect(validateCity('Ağrı')).toBe(true);
  });

  it('пропускает название из одной буквы', () => {
    expect(validateCity('A')).toBe(true);
    expect(validateCity('И')).toBe(true);
  });
});
