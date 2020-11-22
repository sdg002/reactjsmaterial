import  {Math} from '../components/Math'

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      // actual test
    });
  });


test("adding 2 numbers",()=>{
    let m = new Math();
    let actual=m.Add(2,3);
    let expected=5;
    expect(actual).toBe(expected);
});

test("multiplying 2 numbers",()=>{
    let m = new Math();
    let actual=m.Multiply(2,3);
    let expected=6;
    expect(actual).toBe(expected);
});
