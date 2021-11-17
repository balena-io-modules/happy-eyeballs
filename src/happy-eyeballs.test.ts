import { expect, test } from "../test/test";
import { zip } from "./happy-eyeballs";

test('zip', () => {
  const fake = getFakeAddresses(3);
  const sorted = [ [ '192.168.1.2', 'dead::2' ], [ '192.168.1.1', 'dead::1' ] ];
  // @ts-ignore
  expect(Array.from(zip(fake))).toMatchObject(sorted);
})

function getFakeAddresses(num: number) {
  const result = [];
  while (--num) {
    result.push({
      family: 6,
      address: 'dead::' + num.toString(16),
    }, {
      family: 4,
      address: '192.168.1.' + num,
    })
  }
  return result;
}