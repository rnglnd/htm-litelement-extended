import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'index.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife',
		sourcemap: true
	},
  plugins: [
    resolve()
  ]
};
