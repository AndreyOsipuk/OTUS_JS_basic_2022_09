import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
describe('Button', () => {
  it('render component', () => {
    render(<Button label="button" />)
  })

  it("render with snapshot", () => {
    const { asFragment } = render(<Button label="button" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button label="button" />)
    expect(screen.getByText(/button/)).toBeInTheDocument();
  })

  it('render multiply component', () => {
    render(<><Button label="button" /><Button /></>)
    expect(screen.queryAllByRole("button").length).toBe(2);
  })

  it('button is disable', () => {
    render(<Button disabled />)
    expect(screen.getByText("label")).toBeDisabled();
  })

  // it('button have style background red', () => {
  //   render(<Button />)
  //   expect(screen.getByText("label")).toHaveStyle({
  //     backgroundColor: 'red'
  //   });
  // })

  it('button click with userEvent', () => {
    const mockHandler = jest.fn()
    render(<Button onButtonClick={mockHandler} />)

    userEvent.click(screen.getByText('label'))

    expect(mockHandler).toBeCalledTimes(1)
  })

  it('button async click', async () => {
    const mockHandler = jest.fn()
    render(<Button onButtonClick={() => setTimeout(mockHandler, 1000)} />)

    userEvent.click(screen.getByText('label'))

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), { timeout: 1100 })
  })
})