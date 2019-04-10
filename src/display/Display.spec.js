// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('Display component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Display />);
    expect(wrap).toBeTruthy();
  });
});
