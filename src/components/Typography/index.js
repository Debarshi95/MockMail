import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  body1: 'span',
  body2: 'span',
};

const Typography = ({ variant, children, ...props }) => {
  const Component = variants[variant];
  return <Component {...props}>{children}</Component>;
};

Typography.defaultProps = {
  variant: 'p',
  children: '',
};

Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
export default Typography;
