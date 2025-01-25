export default function Lesson06() {
  //typescript
  //1.string

  let userName: string = "Mikhail";
  userName = "Mikhail";

  //2.number

  let number: number = 42;
  number = 4.88;

  //3. boolean

  let isAdmin: boolean = true;
  isAdmin = 2 < 4;

  //4. null(явное отсутствие значения) |
  //undefined(неявное отсутствие значения)
  let nothing: undefined = undefined;
  let empty: null = null;
  //union type(объдинение типов)

  let value: number | string = 100;
  value = 100;
  value = "my favorite number" + value;

  value.toUpperCase();

  //array (массив)

  const colors: string[] = ["red", "black", "blue"];
  colors.push("magenta");

  const numbers: number[] = [1, 34, 567, 7];
  numbers.pop(); //убрать последний из массива

  //tupel(кортеж)
  // c readonly массив будет неизменяем, т.е.

  const person: readonly [string, number] = ["Person", 35];

  // functions

  function sum(a: number, b: number): number {
    return a + b;
  }
  const res: number = sum(42, 100);

  const showMessage = (message: string | number): void => {
    console.log(message);
  };
  const noReturn = showMessage(res);
  //помни, что функции без return возвращают undefind
  console.log(noReturn);

  //any
  //ленивый тип данных для тех, кто не хочет
  //прописывать типы
  //использовать не рекомендуется(только в
  //крайних случаях)

  return (
    <div>
      <h2>Typescript 🦿</h2>
      <p>
        Все самое интересное происходит 
        в теле функции, и в командной строке
      </p>
    </div>
  );
}
