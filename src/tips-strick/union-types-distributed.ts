type ToArray<T>= T extends unknown ? T : T[];

type ToFoo = ToArray<string | number>