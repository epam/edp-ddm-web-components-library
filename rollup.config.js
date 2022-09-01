import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import alias from '@rollup/plugin-alias';
import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  'tslib',
  'clsx',
  'react-formio',
  'flatpickr',
  'flatpickr/dist/l10n/uk',
  'react-datepicker',
  'date-fns',
  'date-fns/locale/uk',
  'rxjs',
  'rxjs/ajax',
  'rxjs/operators',
  '@material-ui/lab/Autocomplete',
  'query-string',
  'react-input-mask',
  'react-number-format',
  'js-cookie',
  'uuid'
];

const input = [
  'src/index.ts',
  'src/components/AccountMenu/index.ts',
  'src/components/Button/index.ts',
  'src/components/Container/index.ts',
  'src/components/Divider/index.ts',
  'src/components/IconButton/index.ts',
  'src/components/Icons/index.ts',
  'src/components/Layouts/Standard/index.ts',
  'src/components/Layouts/Sidebar/index.ts',
  'src/components/Layouts/Error/index.ts',
  'src/components/Link/index.ts',
  'src/components/LinkBack/index.ts',
  'src/components/Loader/index.ts',
  'src/components/Typography/index.ts',
  'src/components/MenuPanel/index.ts',
  'src/components/Table/index.ts',
  'src/components/Popper/index.ts',
  'src/components/PopperButton/index.ts',
  'src/components/FormControls/Input/index.ts',
  'src/components/FormControls/Checkbox/index.ts',
  'src/components/FormControls/DateTimePicker/index.ts',
  'src/components/Switch/index.ts',
  'src/components/Navbar/index.ts',
  'src/components/FlashMessage/index.ts',
  'src/components/Tabs/index.ts',
  'src/components/SignatureWidget/index.ts',
  'src/components/ColoredBox/index.ts',
  'src/components/PropertyValueItem/index.ts',
  'src/components/MenuList/index.ts',
  'src/components/Chip/index.ts',
];

const config = {
  input,
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    postcss({
      extract: 'styles/index.css',
    }),
    url({
      include: ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png', '**/*.jp(e)?g', '**/*.gif', '**/*.webp'],
      limit: Infinity,
    }),
    svgr(),
    resolve(),
    commonjs(),
    peerDepsExternal(),
    terser(),
    alias({
      entries: [
        { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      ],
    }),
    del({ targets: ['dist/*'] }),
    typescript({
      typescript: ttypescript,
      useTsconfigDeclarationDir: true,
      inlineSources: true,
      sourceMap: true,
      tsconfigOverride: {
        exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      },
    }),
    json(),
  ],
  external,
};

export default config;
