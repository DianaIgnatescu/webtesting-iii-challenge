// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('Controls component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Controls />);
    expect(wrap).toBeTruthy();
    expect(wrap.asFragment()).toMatchSnapshot();
  });
});
