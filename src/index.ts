export class Kata {

  private mappers: Array<Mapper & Order>

  constructor(mappers: Array<Mapper & Order>) {
      this.mappers = mappers.sort((a: Order,b: Order)=>{
        return a.getOrder() - b.getOrder()
      })

  }

  public kataString(num: number): string {
    for (let index = 0; index < this.mappers.length; index++) {
      const element = this.mappers[index].map(num);
      if (element) {
        return element
      }
    }
    return `${num}`
  }
}

export class FizzMapper implements Mapper, Order{
  public map(num: number): string | undefined {
      if (num % 3 === 0) {
      return "fizz"
    } 
  }

  public getOrder(): number {
    return 1
  }
}

export class BuzzMapper implements Mapper, Order{
  public map(num: number): string | undefined {
    if (num % 5 === 0) {
      return "buzz"
    }
  }

  public getOrder(): number {
    return 2
  }
}

export class FizzbuzzMapper implements Mapper, Order{
  public map(num: number): string | undefined {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzbuzz" 
    }
  }

  public getOrder(): number {
    return 0
  }
}

export class FooMapper implements Mapper, Order{
  public map(num: number): string | undefined {
    if (num % 7 === 0 ) {
      return "foo" 
    }
  }

  public getOrder(): number {
    return 3
  }
}

interface Mapper {
  map(num: number): string | undefined 
}

interface Order {
  getOrder(): number 
}