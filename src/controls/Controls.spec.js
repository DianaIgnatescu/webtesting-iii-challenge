import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(rtl.cleanup);

describe('Controls component', () => {
  it('should render without crashing', () => {
    const wrap = rtl.render(<Controls />);
    expect(wrap).toBeTruthy();
    expect(wrap.asFragment()).toMatchSnapshot();
  });
  it('should render a Close button', () => {
    const wrap = rtl.render(<Controls />);
    const closeButton = wrap.getByTestId('closeButton');
    const isButton = closeButton.matches('button');
    expect(isButton).toBe(true);
  });
  it('should render a Lock button', () => {
    const wrap = rtl.render(<Controls />);
    const lockButton = wrap.getByTestId('lockButton');
    const isButton = lockButton.matches('button');
    expect(isButton).toBe(true);
  });
  it('should render buttons with expected labels', () => {
    const wrap = rtl.render(<Controls />);
    expect(wrap.getByTestId('closeButton')).toHaveTextContent('Close Gate');
    expect(wrap.getByTestId('lockButton')).toHaveTextContent('Lock Gate');
  });
  it('should render buttons with expected attributes', () => {
    const wrap = rtl.render(<Controls closed={false} locked={false} />);
    expect(wrap.getByText(/lock gate/i)).toHaveTextContent('Lock Gate');
    expect(wrap.getByText(/close gate/i)).toHaveTextContent('Close Gate');
  });
  it('should disable the open button when the gate is locked', () => {
    const wrap = rtl.render(<Controls locked={true}/>);
    expect(wrap.getByTestId('closeButton')).toBeDisabled();
  });

  it('should disable the lock button when the gate is open', () => {
    const wrap = rtl.render(<Controls closed={false}/>);
    expect(wrap.getByTestId('lockButton')).toHaveAttribute('disabled');
  })
});
