import {
  appendVariantClasses,
  formatClassList,
  joinStrings
} from './utils'


describe('utils', () => {
  /*============================================================
    Unit test the appendVariantClasses() function.
  ============================================================*/
  test('appendVariantClasses', () => {
    const variants: Record<string, string> = {
      test: '0',
      foo: '1',
      bar: '2'
    }

    const output: string = appendVariantClasses('test', variants, 'test')

    expect(output).toBe('test 0')
  })

  /*============================================================
    Unit test the formatClassList() function.
  ============================================================*/
  test('formatClassList', () => {
    const input: string = `
      test
      foo
      bar
    `

    const output: string = formatClassList(input)

    expect(output).toBe('test foo bar')
  })

  /*============================================================
    Unit test the joinStrings() function.
  ============================================================*/
  test('joinStrings', () => {
    expect(joinStrings(' ', 'test', 'foo', 'bar')).toBe('test foo bar')
  })
})
