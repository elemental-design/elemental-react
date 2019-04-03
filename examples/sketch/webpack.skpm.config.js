/* eslint-disable no-param-reassign */
const path = require('path');

// eslint-disable-next-line spaced-comment
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = (config) => {
  /* you can change config here */

  config.resolve = {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.jsx'],
    alias: {
      ...config.resolve.alias,
      'elemental-react': path.resolve(__dirname, '../../'),
      'react-sketchapp': path.resolve(__dirname, './node_modules/react-sketchapp/'),
      'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
      'react-primitives-svg': path.resolve(__dirname, './node_modules/react-primitives-svg'),
    },
  };
};
