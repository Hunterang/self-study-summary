const React = {
  createElement(type, attrs, children, ...rest) {
    return {
      type,
      attrs,
      children,
      ...rest
    }
  }
}
