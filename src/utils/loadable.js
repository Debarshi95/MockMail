import React from 'react';

export const loadable = (importFunc) => {
  return React.lazy(importFunc);
};
