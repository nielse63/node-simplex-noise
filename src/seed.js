
export default (seed = 0, {
  perm, gradP, grad3, p,
}) => {
  if (seed > 0 && seed < 1) {
    // Scale the seed out
    seed *= 65536;
  }

  seed = Math.floor(seed);
  if (seed < 256) {
    seed |= seed << 8;
  }

  let i = 0;
  while (i < 256) {
    let v;
    if (i & 1) {
      v = p[i] ^ (seed & 255);
    } else {
      v = p[i] ^ ((seed >> 8) & 255);
    }

    perm[i] = v;
    perm[i + 256] = v;

    const w = grad3[v % 12];
    gradP[i] = w;
    gradP[i + 256] = w;
    i += 1;
  }

  return { perm, gradP };
};
