let age: number = 20;
if (age < 50) {
  age += 10;
}

let year = 1995;
let word = "hello";
let is_published = true;
let anything;
let numberArr: number[] = [1, 2, 3];
let user: [number, string, number] = [25, "Mike", 23];

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

function CalcTaxes(income: number): number {
  return income + 10;
}

// Type Alias
type Employee = { readonly id: number; name: string };

let employee: Employee = {
  id: 2,
  name: "Mike",
};

employee.name = "Jhon";

// Union Types

function KqtoLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

KqtoLbs(20);
KqtoLbs("20kq");

// Intersection sizes

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types (exact, specific)

let quantity: 50 | 55;
