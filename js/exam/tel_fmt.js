import assert from 'assert';
import { telfmt } from '../utils/regexputils.js';

assert.deepStrictEqual(telfmt('1577157'), '157-7157');
assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');

const upperToLower = str => str.replace(/[A-Z]/g, s => s.toLowerCase());
assert.strictEqual(
  upperToLower('Senior Coding Learning JS'),
  'senior coding learning js'
);
