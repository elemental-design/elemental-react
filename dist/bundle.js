(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components'), require('styled-system')) :
  typeof define === 'function' && define.amd ? define(['exports', 'styled-components', 'styled-system'], factory) :
  (global = global || self, factory(global.ui = {}, global.styled, global.styledSystem));
}(this, function (exports, styled, styledSystem) { 'use strict';

  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }
  var Box = styled.div(_templateObject(), styledSystem.display, styledSystem.background, styledSystem.borderRadius, styledSystem.borderColor, styledSystem.space);
  Box.defaultProps = {
    display: 'flex'
  };



  var index = /*#__PURE__*/Object.freeze({
    Box: Box
  });

  exports.components = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
