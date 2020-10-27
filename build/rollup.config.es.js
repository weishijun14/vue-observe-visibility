import base from './rollup.config.base'

const config = Object.assign({}, base, {
	output: {
		name: 'wsj-vue-observe-visibility',
		file: 'dist/wsj.vue-observe-visibility.esm.js',
		format: 'es',
	},
})

export default config
