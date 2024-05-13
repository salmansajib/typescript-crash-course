// ========== Basic Types ==========
let id: number = 5;
let company: string = 'Salman Media';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;
age = 32;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// ========== Tuple ==========
let person: [number, string, boolean] = [1, 'Bard', true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
];

// ========== Union ==========
let pid: string | number;
pid = 22;

// ========== Enum ==========
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// console.log(Direction2.Left);

// ========== Objects ==========
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

// ========== Type Assertion ==========
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
// console.log(typeof customerId);

// ========== Functions ==========
function addNum(x: number, y: number): number {
  return x + y;
}
// console.log(addNum(5, 5));

// ========== Void ==========
function log(message: string | number) {
  console.log(message);
}
log('Hello');
// log(5);
