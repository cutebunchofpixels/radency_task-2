type NonNullableMapped<T> = { [P in keyof T]-?: T[P] & {} };

export default NonNullableMapped;
