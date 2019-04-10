// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(rtl.cleanup);

describe('Display component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Display />);
    expect(wrap).toBeTruthy();
  });

  it('should render with red LED when gate is closed or locked', () => {
    const wrap = rtl.render(<Display closed={true} locked={true}/>);
    expect(wrap.getByTestId(/closeGate/i)).toHaveClass('red-led');
    expect(wrap.getByTestId(/lockGate/i)).toHaveClass('red-led');
  });
  it('should render with green LED when gate is open or unlocked', () => {
    const wrap = rtl.render(<Display locked={false} closed={false}/>);
    expect(wrap.getByTestId(/lockGate/i)).toHaveClass('green-led');
    expect(wrap.getByTestId(/closeGate/i)).toHaveClass('green-led');
  });
  it('should render with gate open and unlocked', () => {
    const wrap = rtl.render(<Display locked={false} closed={false} />);
    expect(wrap.getByText(/open/i));
    expect(wrap.getByText(/unlocked/i));
  });
  it('should render with gate closed and locked', () => {
    const wrap = rtl.render(<Display locked={true} closed={true} />);
    expect(wrap.getByTestId(/closeGate/i)).toHaveTextContent('Closed');
    expect(wrap.getByTestId(/lockGate/i)).toHaveTextContent('Locked');
  });
  it('should render the open gate when the closed attribute is set to false', () => {
    const wrap = rtl.render(<Display closed={false} />);
    expect(wrap.getByTestId(/closeGate/i)).toHaveTextContent('Open');
  });
  it('should render the closed gate when the closed attribute is set to true', () => {
    const wrap = rtl.render(<Display closed={true} />);
    expect(wrap.getByTestId(/closeGate/i)).toHaveTextContent('Closed');
  });
  it('should render the locked gate when the locked attribute is set to true', () => {
    const wrap = rtl.render(<Display locked={true} />);
    expect(wrap.getByTestId(/lockGate/i)).toHaveTextContent('Locked');
  });
  it('should render the unlocked gate when the locked attribute is set to false', () => {
    const wrap = rtl.render(<Display locked={false} />);
    expect(wrap.getByTestId(/lockGate/i)).toHaveTextContent('Unlocked');
  });
});
