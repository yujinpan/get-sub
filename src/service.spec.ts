import { getV2RaySubResult } from './service';

describe('Service', () => {
  it('should get sub correct', () => {
    expect(getV2RaySubResult()).toEqual(
      `c3M6Ly9ZV1Z6TFRJMU5pMW5ZMjA2TVRJek5EVTJRREUyT1M0eU5UUXVNak0yTGpZek9qRXhNVEU9I3Rlc3QKdm1lc3M6Ly9leUp3Y3lJNkluUmxjM1FpTENKd2IzSjBJam94TVRFeExDSnBaQ0k2SWpFeU16UTFOaUlzSW1Ga1pDSTZJakUyT1M0eU5UUXVNak0yTGpZekluMD0=`,
    );
  });
});
