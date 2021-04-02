import { validate, Schema } from '../src/Schema'

describe(`Primitive Types`, function () {
    it('validates strings', function () {
        const stringObject = 'dummyString'
        const stringSchema: Schema<string> = jest.fn()

        validate(stringSchema, stringObject)

        expect(stringSchema).toHaveBeenCalledWith(stringObject)
    })
})