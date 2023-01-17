import {BuzzMapper, FizzbuzzMapper, FizzMapper, FooMapper, Kata} from "./index"

const testkata = new Kata([new FizzMapper(), new BuzzMapper(), new FizzbuzzMapper(), new FooMapper()])

describe("test suite ", () => {
  test("the function kataString is called", () => {
    const num = 5;
    expect(testkata.kataString(num)).toHaveBeenCalled;
  });

  test('when int is 1 returns 1', ()=> {
    const numeroQuePasamos = 1
    const numeroQueEsperamos = "1"

    expect(testkata.kataString(numeroQuePasamos)).toBe(numeroQueEsperamos)
  })

  test('when int is 2 returns 2', ()=> {
    const numeroQuePasamos = 2
    const numeroQueEsperamos = "2"

    expect(testkata.kataString(numeroQuePasamos)).toBe(numeroQueEsperamos)
  })

  test('when int is 3 returns fizz', ()=> {
    expect(testkata.kataString(3)).toBe("fizz")
  })

  test('when int is 4 returns 4', ()=> {
    expect(testkata.kataString(4)).toBe("4")
  })

  test('when int is 5 returns buzz', ()=> {
    expect(testkata.kataString(5)).toBe("buzz")
  })

  test('when int is 6 returns fizz', ()=> {
    expect(testkata.kataString(6)).toBe("fizz")
  })

  test('when int is 7 returns 7', ()=> {
    expect(testkata.kataString(7)).toBe("7")
  })

  test('when int is 9 returns fizz', ()=> {
    expect(testkata.kataString(9)).toBe("fizz")
  })

  test('when int is 10 returns buzz', ()=> {
    expect(testkata.kataString(10)).toBe("buzz")
  })

  test('when int is 11 returns 11', ()=> {
    expect(testkata.kataString(11)).toBe("11")
  })

  test('when int is 12 returns fizz', ()=> {
    expect(testkata.kataString(12)).toBe("fizz")
  })

  test('when int is 15 returns fizzbuzz', ()=> {
    expect(testkata.kataString(15)).toBe("fizzbuzz")
  })

  test('when int is 20 returns buzz', ()=> {
    expect(testkata.kataString(20)).toBe("buzz")
  })

  test('when int is 30 returns fizzbuzz', ()=> {
    expect(testkata.kataString(30)).toBe("fizzbuzz")
  })

  test('when int is 45 returns fizzbuzz', ()=> {
    expect(testkata.kataString(45)).toBe("fizzbuzz")
  })
})
