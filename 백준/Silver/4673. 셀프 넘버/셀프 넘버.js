function d(n) {
  return (
    n +
    String(n)
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0)
  );
}

const isGenerated = new Array(10001).fill(false);

for (let i = 1; i <= 10000; i++) {
  const generator = d(i);
  if (generator <= 10000) {
    isGenerated[generator] = true;
  }
}

for (let i = 1; i <= 10000; i++) {
  if (!isGenerated[i]) {
    console.log(i);
  }
}
