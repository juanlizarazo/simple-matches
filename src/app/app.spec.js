const { App } = require('./app');

describe('app.js', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe('hasMatchingBrackets()', () => {
    it('returns true with simple symmetrical brackets like {}', () => {
      const result = app.hasMatchingBrackets('{}');
      expect(result).toBe(true);
    });

    it('returns true with symmetrical brackets and other characters', () => {
      const result = app.hasMatchingBrackets('{a{a{}abcde}abc}');
      expect(result).toBe(true);
    });

    it('returns false when it stats with closed bracket', () => {
      const result = app.hasMatchingBrackets('}{');
      expect(result).toBe(false);
    });

    it('returns false with missing closing bracket', () => {
      const result = app.hasMatchingBrackets('{{}');
      expect(result).toBe(false);
    });

    it('returns false with missing opening brackets like {}}', () => {
      const result = app.hasMatchingBrackets('{}}');
      expect(result).toBe(false);
    });

    it('processes other asymmetrical brackets', () => {
      const result = app.hasMatchingBrackets('{}}{}');
      expect(result).toBe(false);
    });

    it('returns true when there are no brackets', () => {
      const result = app.hasMatchingBrackets('');
      expect(result).toBe(true);
    });
  });

  describe('findTheSumOfMultiplesOfThreeAndFiveBelowLimit()', () => {
    it('returns 23 if the limit is 10', () => {
      const result = app.findTheSumOfMultiplesOfThreeAndFiveBelowLimit(10);

      expect(result).toBe(23);
    });

    it('returns 195 if the limit is 30', () => {
      const result = app.findTheSumOfMultiplesOfThreeAndFiveBelowLimit(30);
      expect(result).toBe(195);
    });

    it('returns 233168 if the limit is 1000', () => {
      const result = app.findTheSumOfMultiplesOfThreeAndFiveBelowLimit(1000);
      expect(result).toBe(233168);
    });
  });
});
