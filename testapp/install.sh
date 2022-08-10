pushd ../components/
npm run build:clean || exit 1
npm pack --pack-destination ../testapp
popd
pushd ../tokens
npm run build:clean || exit 1
npm pack --pack-destination ../testapp
popd
npm install norges-domstoler-dds-*.tgz
npm install
rm norges-domstoler-dds-*.tgz
