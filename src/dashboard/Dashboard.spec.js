// Test away
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Dashboard />);
    expect(wrap).toBeTruthy();
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it('should be able to toggle between open and closed when clicked', () => {
    const wrap = rtl.render(<Dashboard />);
    const closedButton = wrap.getByTestId('closeButton');

    rtl.fireEvent.click(closedButton);
    expect(wrap.getByText('Open Gate'));

    rtl.fireEvent.click(closedButton);
    expect(wrap.getByText('Close Gate'));
  });
  it('should be able to toggle between locked and unlocked when clicked', () => {
    const wrap = rtl.render(<Dashboard />);
    const lockedButton = wrap.getByTestId('lockButton');
    const closedButton = wrap.getByTestId('closeButton');

    rtl.fireEvent.click(closedButton);
    rtl.fireEvent.click(lockedButton);
    expect(wrap.getByText('Unlock Gate'));

    rtl.fireEvent.click(lockedButton);
    expect(wrap.getByText('Lock Gate'));
  });
  it('should not be able to render the locked gate if gate is open', () => {
    const wrap = rtl.render(<Dashboard />);
    const lockedButton = wrap.getByTestId('lockButton');

    rtl.fireEvent.click(lockedButton);
    expect(wrap.queryByText('Unlock Gate')).toBeFalsy();
  })

});
