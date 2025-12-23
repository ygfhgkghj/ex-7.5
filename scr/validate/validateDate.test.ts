import { validateDate } from './validateDate';

describe('validateDate', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-12-23T16:00:00Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('пропускает дату в формате ДД.ММ.ГГГГ', () => {
    expect(validateDate('25.12.2025')).toBe(true);
  });

  it('не пропускает спецсимволы', () => {
    expect(validateDate('25.12#2025')).toBe(false);
    expect(validateDate('25@12.2025')).toBe(false);
  });

  it('не пропускает буквы', () => {
    expect(validateDate('25.Dec.2025')).toBe(false);
    expect(validateDate('ab.cd.efgh')).toBe(false);
  });

  it('блокирует дату раньше текущей', () => {
    expect(validateDate('22.12.2025')).toBe(false);
  });
});
