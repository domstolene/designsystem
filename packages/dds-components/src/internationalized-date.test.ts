import { describe, expect, it } from 'vitest';

import packageJson from '../package.json';

describe('@internationalized/date', () => {
  it('has same version range for peer dependency and dev dependency', () => {
    const peer = packageJson.peerDependencies['@internationalized/date'];
    const dev = packageJson.devDependencies['@internationalized/date'];

    const message =
      'Expected version range of @internationalized/date to be the same for peer dependency and dev dependency.';

    expect(peer, message).toBeDefined();
    expect(dev, message).toBeDefined();
    expect(peer, message).toBe(dev);
  });
});
