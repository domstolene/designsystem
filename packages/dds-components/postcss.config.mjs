import autoprefixer from 'autoprefixer';
import postcssUrl from 'postcss-url';

export default {
  plugins: [
    autoprefixer(),
    postcssUrl({ url: 'inline', filter: asset => /\.svg$/.test(asset.url) }),
  ],
};
