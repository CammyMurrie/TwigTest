import { expect, should } from 'chai';
import 'babel-polyfill';
import {splitArray} from '../app/test1';
should();

describe('splitArray function', () => {
  //test case 1 - [0, 1, 2, 3], split value 0
  it('returns original array', () => {
    const array = splitArray(4, 0);
    expect(array.length, 'Expected array to have 4 elements').to.equal(4);
    expect(array[0], 'Expected array[0] to have length 2').to.equal(0);
    expect(array[1], 'Expected array[0] to have length 2').to.equal(1);
    expect(array[2], 'Expected array[0] to have length 2').to.equal(2);
    expect(array[3], 'Expected array[0] to have length 2').to.equal(3);
  });
  //test case 2 - [0, 1, 2, 3], split value 2...no remainder elements i.e splits equally
  it('returns an array with 2 elements of which have length 2', () => {
    const array = splitArray(4, 2);
    expect(array.length, 'Expected array to have 2 elements').to.equal(2);
    expect(array[0].length, 'Expected array[0] to have length 2').to.equal(2);
    expect(array[1].length, 'Expected array[1] to have length 2').to.equal(2);
    expect(array[2], 'Expected array[2] to not exist').to.be.undefined;
  });

  //test case 3 - [0, 1, 2, 3, 4, 5, 6, 7], split value 2...larger dataset than test case 2
  it('returns an array with 4 elements of which have length 2', () => {
    const array = splitArray(8, 2);
    expect(array.length, 'Expected array to have 8 elements').to.equal(4);
    expect(array[0].length, 'Expected array[0] to have length 2').to.equal(2);
    expect(array[1].length, 'Expected array[1] to have length 2').to.equal(2);
    expect(array[2].length, 'Expected array[2] to have length 2').to.equal(2);
    expect(array[3].length, 'Expected array[3] to have length 2').to.equal(2);
    expect(array[4], 'Expected array[2] to not exist').to.be.undefined;
  });

  //test case 4 - [0, 1, 2, 3, 4, 5], split value 3...splits equally
  it('returns an array with 2 elements of which have length 3', () => {
    const array = splitArray(6, 3);
    expect(array.length, 'Expected array to have 2 elements').to.equal(2);
    expect(array[0].length, 'Expected array[0] to have length 3').to.equal(3);
    expect(array[1].length, 'Expected array[1] to have length 3').to.equal(3);
    expect(array[2], 'Expected array[2] to not exist').to.be.undefined;
  });

  //test case 5 - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], split value 3...splits equally
  it('returns an array with 4 elements of which have length 3', () => {
    const array = splitArray(12, 3);
    expect(array.length, 'Expected array to have 4 elements').to.equal(4);
    expect(array[0].length, 'Expected array[0] to have length 3').to.equal(3);
    expect(array[1].length, 'Expected array[1] to have length 3').to.equal(3);
    expect(array[2].length, 'Expected array[0] to have length 3').to.equal(3);
    expect(array[3].length, 'Expected array[1] to have length 3').to.equal(3);
    expect(array[4], 'Expected array[4] to not exist').to.be.undefined;
  });

  //test case 6 - [0, 1, 2], split value 2...will have remainder
  it('returns an array with 2 elements of which have length 2 and 1 respectively', () => {
    const array = splitArray(3, 2);
    expect(array.length, 'Expected array to have 2 elements').to.equal(2);
    expect(array[0].length, 'Expected array[0] to have length 2').to.equal(2);
    expect(array[1].length, 'Expected array[1] to have length 1').to.equal(1);
    expect(array[2], 'Expected array[4] to not exist').to.be.undefined;
  });

  //test case 7 - [0, 1, 2, 3, 4], split value 3...will have remainder
  it('returns an array with 2 elements of which have length 3 and 2 respectively', () => {
    const array = splitArray(5, 3);
    expect(array.length, 'Expected array to have 2 elements').to.equal(2);
    expect(array[0].length, 'Expected array[0] to have length 3').to.equal(3);
    expect(array[1].length, 'Expected array[1] to have length 2').to.equal(2);
    expect(array[2], 'Expected array[4] to not exist').to.be.undefined;
  });

  //test case 8 - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  //split value 6...will have remainder
  it('returns an array with 4 elements of which have lengths of 6, 6, 6 and 4 respectively', () => {
    const array = splitArray(22, 6);
    expect(array.length, 'Expected array to have 4 elements').to.equal(4);
    expect(array[0].length, 'Expected array[0] to have length 6').to.equal(6);
    expect(array[1].length, 'Expected array[1] to have length 6').to.equal(6);
    expect(array[2].length, 'Expected array[2] to have length 6').to.equal(6);
    expect(array[3].length, 'Expected array[3] to have length 4').to.equal(4);
    expect(array[4], 'Expected array[4] to not exist').to.be.undefined;
  });

});
