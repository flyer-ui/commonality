import index from '../src/index'

test("version is 0.0.1?", () => {
    const test = index;
    expect(test()).toBe("The current version is 0.0.1");
});