export const printObject = (arg: any) => {
    console.log(arg);
}


// This is a generic function using the "any" type.
// we actually are losing the information about what that type was when the function returns.
export function genericFnAny(arg: any): any {
    return arg;
}

//We have to add a special kind of variable that works on types rather than values.
// This "T" allows us to capture the type the user provides (e.g. number),
// so that we can use that information later. Here, we use "T" again as the return type. 
// On inspection, we can now see the same type is used for the argument and the return type.
// We can name this variable as "Type" or "A" or any other name, for convention "T" is most often used.
export function genericFnT<T>(arg: T): T {
    return arg;
}

export const genericArrowFn = <Type>(arg: Type): Type => arg;


