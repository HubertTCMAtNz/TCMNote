# Title

1. Learn how to contribute to the TypeScript compiler on GitHub through a real-world example  
    [reference](https://dev.to/remojansen/learn-how-to-contribute-to-the-typescript-compiler-on-github-through-a-real-world-example-4df0)  

    ```text
    learn about compiler by watching many Anders Hejlsberg interviews online
    typescript milestones(you may find some work to do here): https://github.com/Microsoft/TypeScript/milestones

    The TypeScript tests are a bit strange because they use Mocha in a very abstracted way. We don't need to write test fixtures or tests cases, instead we write a TypeScript code snippet which is expected to work in certain way or to throw a certain compilation error. The testing tools will then generate some outputs and a test case will be created automatically for each of these outputs.
    In order to write a test, we need to create a new file under the tests folder (/tests/cases/compiler/) with a unique name.
    ```

    [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg)  

1. Typescript document  
    [hand book](https://www.typescriptlang.org/docs/handbook/interfaces.html)  

    ```Typescript
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

    // Function Types
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }

    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    function f(this: void) {
        // make sure `this` is unusable in this standalone function
    }

    type NonNullableConveter<T, K extends keyof T> = {
        [P in K]: NonNullable<T[P]>;
    };
    ```
