export type Schema<T> = (arg: T) => void

export function validate<T> (schema: Schema<T>, schemaObject: T): void {
  schema(schemaObject)
}
