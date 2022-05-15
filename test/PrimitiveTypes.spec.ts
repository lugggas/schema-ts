import sinon from 'sinon'
import { validate, Schema } from '../src/Schema.js'
import { expect } from './setup.js'

describe('Primitive Types', function () {
  it('validates strings', function () {
    const stringObject = 'dummyString'
    const stringSchema: Schema<string> = sinon.stub()

    validate(stringSchema, stringObject)

    expect(stringSchema).to.be.calledWith(stringObject)
  })
})
