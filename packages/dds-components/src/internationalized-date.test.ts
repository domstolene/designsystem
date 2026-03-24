import { describe, expect, it } from 'vitest';

import reactStatelyDatepickerJson from '../node_modules/@react-stately/datepicker/package.json';
import packageJson from '../package.json';

describe('@internationalized/date', () => {
  it('has same version range for peer dependency, dev dependency and transitive dependency', () => {
    const peer = packageJson.peerDependencies['@internationalized/date'];
    const dev = packageJson.devDependencies['@internationalized/date'];
    const transitive =
      reactStatelyDatepickerJson.dependencies['@internationalized/date'];

    const message =
      'Expected version range of @internationalized/date to be the same for peer dependency, dev dependency and transitive dependency.';

    const transitiveMessage =
      'Expected to find transitive dependency @internationalized/date in @react-stately/datepicker. Has the source of the transitive dependency changed?';

    expect(peer, message).toBeDefined();
    expect(dev, message).toBeDefined();
    expect(transitive, transitiveMessage).toBeDefined();
    expect(peer, message).toBe(dev);
    expect(peer, message).toBe(transitive);
  });
});
