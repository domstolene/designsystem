import fs from 'node:fs';
import path from 'node:path';

import semver from 'semver';
import { describe, expect, it } from 'vitest';

import packageJson from '../../package.json';

function readPackageJson(pkgName: string) {
  const pkgPath = path.join(
    process.cwd(),
    'node_modules',
    pkgName,
    'package.json',
  );

  if (!fs.existsSync(pkgPath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
}

describe('@internationalized/date', () => {
  it('all packages referencing @internationalized/date use the same version range', () => {
    const expected = packageJson.peerDependencies['@internationalized/date'];

    expect(expected).toBeDefined();

    const offenders = [];

    const directDeps = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    });

    for (const dep of directDeps) {
      const depPkg = readPackageJson(dep);
      if (!depPkg) continue;

      const declared =
        depPkg.dependencies?.['@internationalized/date'] ??
        depPkg.peerDependencies?.['@internationalized/date'];

      if (declared && !semver.intersects(declared, expected)) {
        offenders.push({ name: dep, declared });
      }
    }
    expect(
      offenders,
      'Packages must align on @internationalized/date version range',
    ).toEqual([]);
  });
});
