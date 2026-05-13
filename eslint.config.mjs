import mantine from 'eslint-config-mantine';
import next from 'eslint-config-next';
import jest from 'eslint-plugin-jest';
import testingLibrary from 'eslint-plugin-testing-library';

const testFiles = ['**/?(*.)+(spec|test).[jt]s?(x)'];
const nextConfig = next.map((config) => {
  if (config.name !== 'next' || !config.plugins) {
    return config;
  }

  const { react: _react, 'jsx-a11y': _jsxA11y, ...plugins } = config.plugins;

  return {
    ...config,
    plugins,
  };
});

export default [
  {
    ignores: ['*.cjs', '*.mjs', '*.js', '.next/**', 'node_modules/**'],
  },
  ...mantine,
  ...nextConfig,
  {
    ...jest.configs['flat/recommended'],
    files: testFiles,
  },
  {
    ...testingLibrary.configs['flat/react'],
    files: testFiles,
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'import/extensions': 'off',
    },
  },
];
