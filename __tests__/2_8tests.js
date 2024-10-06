//Pass/Fail Patterns

const { sum } = require('../backend/math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // Passes if the result is 3, fails otherwise
});


//Collection Management Patterns

const { addToList, getList } = require('../backend/listManager');

test('adds item to the list', () => {
  const item = 'apple';
  addToList(item);
  expect(getList()).toContain(item); // Passes if the list contains 'apple'
});


//Data-Driven Patterns

const { sum } = require('../backend/math');

test.each([
  [1, 2, 3],
  [2, 2, 4],
  [5, 5, 10],
])('adds %i + %i to equal %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});


//Performance Patterns

const { heavyComputation } = require('../backend/compute');

test('performs heavy computation under 200ms', () => {
  const startTime = Date.now();
  heavyComputation();
  const endTime = Date.now();
  expect(endTime - startTime).toBeLessThan(200); // Passes if execution time is under 200ms
});


//Process Patterns

const { startProcess, getProcessState } = require('../backend/processManager');

test('process transitions from pending to completed', () => {
  startProcess();
  expect(getProcessState()).toBe('completed'); // Passes if the process ends in the 'completed' state
});


//Simulation Patterns

const db = require('../backend/db');
const { getUserById } = require('../backend/userController');

jest.mock('../backend/db');

test('simulates fetching user from mock database', () => {
  const mockUser = { id: 1, name: 'John Doe' };
  db.getUserById.mockReturnValue(mockUser);
  const result = getUserById(1);
  expect(result).toEqual(mockUser); // Passes if mock data is returned as expected
});


//Multithreading Patterns

const { fetchDataConcurrently } = require('../backend/concurrencyManager');

test('fetches data concurrently without race conditions', async () => {
  const result = await fetchDataConcurrently();
  expect(result).toEqual(['data1', 'data2', 'data3']); // Ensures concurrent threads fetch expected data
});


//Stress Test Patterns

const { processLargeDataset } = require('../backend/dataProcessor');

test('handles large dataset without crashing', () => {
  const largeDataset = new Array(100000).fill({ name: 'item' });
  expect(() => processLargeDataset(largeDataset)).not.toThrow(); // Passes if no error is thrown
});


