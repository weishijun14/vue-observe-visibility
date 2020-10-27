import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
	output: {
		exports: 'named',
		name: 'wsjVueObserveVisibility',
		file: 'dist/wsj.vue-observe-visibility.min.js',
		format: 'iife',
	},
})

config.plugins.push(terser())

export default config
