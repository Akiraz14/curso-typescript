function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (flag: boolean = false): Function => {
    if (flag)
    { return printToConsole; }
    else
    { return () => console.log("Hello world!"); }
}

const blockPrototype = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function validatePokemonId():Function {
    return function(
        target: any, 
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // console.log({target, propertyKey, descriptor});
        // descriptor.value = () => console.log("Hello World!");
        
        const original = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 1025) {
                return console.error("The id must be between 1 and 1025.");
            }
            else {
                return original(id);
            }
        }
    }
}

function readOnly(isWritable: boolean = true): Function {
    return function(target: object, propertyKey: string) {
        // console.log({target, propertyKey});
        
        const descriptor: PropertyDescriptor = {
            get() {
                // console.log("getter", this);
                return "Something!";
            },
            set(this, val) {
                // console.log("setter", this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }
        return descriptor;
    }
}


// @printToConsole
// @printToConsoleConditional(true)
// @printToConsoleConditional(false)
// @blockPrototype
export class Pokemon {

    @readOnly()
    public publicApi: string = "https://pokeapi.co";

    constructor(
        public name: string,
    ) {

    }

    @validatePokemonId()
    savePokemonToDB(id: number) {
        console.log("Pokemon saved successfully.");
    }
}