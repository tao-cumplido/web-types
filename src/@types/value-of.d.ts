export type ValueOf<T extends Record<keyof T, unknown>> = T[keyof T];
