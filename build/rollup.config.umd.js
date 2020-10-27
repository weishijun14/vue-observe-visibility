import base from './rollup.config.base'

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		name: 'wsj-vue-observe-visibility',
		file: 'dist/wsj.vue-observe-visibility.umd.js',
		format: 'umd',
	},
})

export default config
