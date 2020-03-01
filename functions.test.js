const functions = require('./functions')

const initDatabase = () => console.log('Initialized database');
const closeDatabase = () => console.log('Closed database');


beforeEach(() => initDatabase())
afterEach(() => closeDatabase())

beforeAll(() => console.log('Runs once at the beginning'))
afterAll(() => console.log('Runs once at the end'))

const nameCheck = () => {
    console.log('Checking name');
}

describe('Cheching names', () => {
    beforeEach(() => nameCheck())
    
    test("Cheching Jeff", () => {
        console.log('Jeff');
        
        expect("Jeff").toEqual("Jeff")
    })

    test("Cheching Bob", () => {
        console.log('Bob');
        
        expect("Bob").toEqual("Bob")
    })
})

test('Adds 2 + 2 equals to 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 2 NOT equals to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

test('Test if it is null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Check Value', () => {
    expect(functions.checkValue(2)).toBe(2)
})

test('SHould be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('SHould be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
})

test('SHould be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('Testing user',() => {
    expect(functions.createUser()).toEqual({
        firstName: 'lolo',
        lastName: 'lala'
    })
})

test('Should be under 16000',() => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('Testing Arrays', () => {
    username = ['lala','lolo','lele']
    expect(username).toContain('lala')
})

test('Testiing async data with promise', () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham")
        })
})

test('Testiing async data with async await', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham")
        
})