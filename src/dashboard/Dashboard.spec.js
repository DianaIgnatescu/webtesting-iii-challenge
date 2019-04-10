// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap).toBeTruthy();
  });
});
