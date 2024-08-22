const { bubbleSort, filterEven, sumList, binarySearch } = require('../operationsController');

describe('Operations Controller', () => {

  describe('bubbleSort', () => {
    it('should sort the numbers using bubble sort', () => {
      const req = { body: { numbers: [5, 3, 8, 4, 2] } };
      const res = {
        json: jest.fn(),
      };

      bubbleSort(req, res);

      expect(res.json).toHaveBeenCalledWith({ sorted: [2, 3, 4, 5, 8] });
    });

    it('should handle empty arrays', () => {
      const req = { body: { numbers: [] } };
      const res = {
        json: jest.fn(),
      };

      bubbleSort(req, res);

      expect(res.json).toHaveBeenCalledWith({ sorted: [] });
    });
  });

  describe('filterEven', () => {
    it('should filter out even numbers', () => {
      const req = { body: { numbers: [1, 2, 3, 4, 5, 6] } };
      const res = {
        json: jest.fn(),
      };

      filterEven(req, res);

      expect(res.json).toHaveBeenCalledWith({ evens: [2, 4, 6] });
    });

    it('should return an empty array if no evens', () => {
      const req = { body: { numbers: [1, 3, 5] } };
      const res = {
        json: jest.fn(),
      };

      filterEven(req, res);

      expect(res.json).toHaveBeenCalledWith({ evens: [] });
    });
  });

  describe('sumList', () => {
    it('should sum all numbers in the list', () => {
      const req = { body: { numbers: [1, 2, 3, 4, 5] } };
      const res = {
        json: jest.fn(),
      };

      sumList(req, res);

      expect(res.json).toHaveBeenCalledWith({ sum: 15 });
    });

    it('should return 0 if the list is empty', () => {
      const req = { body: { numbers: [] } };
      const res = {
        json: jest.fn(),
      };

      sumList(req, res);

      expect(res.json).toHaveBeenCalledWith({ sum: 0 });
    });
  });

  describe('binarySearch', () => {
    it('should return the correct index if the target is found', () => {
      const req = { body: { numbers: [1, 2, 3, 4, 5], target: 3 } };
      const res = {
        json: jest.fn(),
      };

      binarySearch(req, res);

      expect(res.json).toHaveBeenCalledWith({ found: true, index: 2 });
    });

    it('should return found false if the target is not found', () => {
      const req = { body: { numbers: [1, 2, 3, 4, 5], target: 6 } };
      const res = {
        json: jest.fn(),
      };

      binarySearch(req, res);

      expect(res.json).toHaveBeenCalledWith({ found: false, index: -1 });
    });

    it('should handle empty arrays', () => {
      const req = { body: { numbers: [], target: 1 } };
      const res = {
        json: jest.fn(),
      };

      binarySearch(req, res);

      expect(res.json).toHaveBeenCalledWith({ found: false, index: -1 });
    });
  });
});
