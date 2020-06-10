/* eslint-env jest */

import { createObjectBuffer } from "../";
import { memoryStats } from "../internal/api";
import { MAX_64_BIG_INT } from "../internal/consts";

describe("bigint tests", () => {
  test("ok bigint", () => {
    const ob = createObjectBuffer<any>({}, 512, {});
    expect(memoryStats(ob).used).toMatchInlineSnapshot(`160`);

    ob.bigintNegative = undefined;
    ob.bigintPositive = undefined;

    expect(memoryStats(ob).used).toMatchInlineSnapshot(`352`);

    ob.bigintNegative = MAX_64_BIG_INT * BigInt("-1");
    ob.bigintPositive = MAX_64_BIG_INT;
    ob.bigintPositive = undefined;
    ob.bigintPositive = MAX_64_BIG_INT;

    expect(memoryStats(ob).used).toMatchInlineSnapshot(`400`);

    expect(ob).toMatchInlineSnapshot(`
      Object {
        "bigintNegative": -18446744073709551615n,
        "bigintPositive": 18446744073709551615n,
      }
    `);
  });

  test("bad bigint", () => {
    const ob = createObjectBuffer<any>({}, 512, {});
    expect(memoryStats(ob).used).toMatchInlineSnapshot(`160`);

    ob.bigintNegative = undefined;
    ob.bigintPositive = undefined;

    expect(memoryStats(ob).used).toMatchInlineSnapshot(`352`);

    ob.bigintNegative = (MAX_64_BIG_INT + BigInt("1")) * BigInt("-1");
    ob.bigintPositive = MAX_64_BIG_INT + BigInt("1");
    ob.bigintPositive = undefined;
    ob.bigintPositive = MAX_64_BIG_INT + BigInt("1");

    expect(memoryStats(ob).used).toMatchInlineSnapshot(`352`);

    expect(ob).toMatchInlineSnapshot(`
      Object {
        "bigintNegative": undefined,
        "bigintPositive": undefined,
      }
    `);
  });
});