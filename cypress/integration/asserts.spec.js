/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a).to.equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
});

it('Thuthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
    
});

it('Object Equality', () => {
    const obj = { 
        a: 1,
        b: 2
    }

    expect(obj).to.be.equal(obj);
    expect(obj).to.be.deep.equal({a: 1, b: 2});
    expect(obj).eql({a: 1, b: 2});
    expect(obj).include({a: 1});
});

it('Array', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.be.not.empty
    expect([]).to.be.empty
});

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
    
});

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/de/)
    expect(str).to.match(/teste$/)
    expect(str).to.match(/^String/)
});

it('Number', () => {
    const number = 4
    const floatNumber = 5.2365

    expect(number).to.equal(4)
    expect(number).to.above(3)
    expect(number).to.below(7)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.above(5)


});



