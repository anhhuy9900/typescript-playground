// Nested Namespaces
namespace OuterNamespace {
    export namespace InnerNamespace {
        export class OuterClass {
            constructor(public value: number) {}

            getValue() {
                console.log(`The value is: ${this.value}`);
            }
        }
    }
}

// Using the fully-qualified name
const instance = new OuterNamespace.InnerNamespace.OuterClass(15);
instance.getValue(); // Output: The value is: 15