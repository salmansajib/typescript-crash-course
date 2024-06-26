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

// ========== Interfaces ==========
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};
// console.log(user1.name);
// user1.id = 4;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(add(3, 4));

// ========== Classes ==========
interface personInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements personInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const salman = new Person(1, 'Salman Sajib');
const rohim = new Person(2, 'Rohim Uddin');

// console.log(salman.register());

// console.log(salman, rohim);

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Karim', 'Developer');
console.log(emp.position);
