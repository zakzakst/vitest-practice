// globals の値を設定することでテストファイルで test, describe, expect などの関数を import しなくても利用できるようになります。
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
