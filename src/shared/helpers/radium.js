import radium from 'radium'
import config from '../../config/config'

// function styleLogger({ componentName, style }) {
//   console.log('Name', componentName, style)
// }

export const getTheme = (styles) => {
  const theme = styles[config.theme]
  return { ...styles.default, ...theme }
}

export default (component) => radium({
  plugins: [
    radium.Plugins.mergeStyleArray,
    radium.Plugins.checkProps,
    radium.Plugins.resolveMediaQueries,
    radium.Plugins.resolveInteractionStyles,
    radium.Plugins.keyframes,
    radium.Plugins.visited,
    radium.Plugins.removeNestedStyles,
    radium.Plugins.prefix,
    // styleLogger,
    radium.Plugins.checkProps
  ]
})(component)
