import {sub, formatISO, Duration, add} from 'date-fns';

import {dateUtils} from '@utils';

const MOCKED_NOW = 1696573824333;

function getDateISO(duration: Duration, op?: 'sub' | 'add'): string {
  op = op || 'sub';
  const time =
    op === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });
    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 20})).toBe('20 m');
    });
    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 15})).toBe('15 h');
    });

    it('should be displayed in days if less than 7 day ago', () => {
      expect(getDateISO({days: 5})).toBe('5 d');
    });
    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 3, hours: 2})).toBe('3 sem');
    });

    it('should be displayed in month if is 1 month', () => {
      expect(getDateISO({months: 1})).toBe('1 mês');
    });

    it('should be displayed in months if less than 12 months ago and more than 1 month', () => {
      expect(getDateISO({months: 10})).toBe('10 meses');
    });

    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('06/09/2022');
    });

    it('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('08/10/2023');
    });
  });
});
