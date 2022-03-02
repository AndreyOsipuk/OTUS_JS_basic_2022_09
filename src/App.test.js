import React from 'react';
import { App } from './App'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe('App', () => {
  it('render', () => {
    render(<App />)
  })
  it('render2', () => {
    render(<><App /><App /></>)
    expect(screen.queryAllByRole('button').length).toBe(2);
  })

  it('disabled', () => {
    render(<App disabled />)
    expect(screen.getByText('submit')).toBeDisabled();
  })

  it('style', () => {
    render(<App />)
    expect(screen.getByText('submit')).toHaveStyle({
      backgroundColor: 'red',
    })
  })

  test('click', () => {
    const mockHandler = jest.fn();
    // render(
    //   // <div>
    //   //   <label htmlFor="checkbox">Check</label>
    //   //   <input id="checkbox" type="checkbox" />
    //   // </div>,
    // )
    render(<App click={mockHandler} />)

    userEvent.click(screen.getByText('submit'))
    expect(mockHandler).toBeCalledTimes(1)
  })

  test('click async', async () => {
    const mockHandler = jest.fn();
    // render(
    //   // <div>
    //   //   <label htmlFor="checkbox">Check</label>
    //   //   <input id="checkbox" type="checkbox" />
    //   // </div>,
    // )
    render(<App click={() => setTimeout(mockHandler, 1000)} />)

    userEvent.click(screen.getByText('submit'))

    await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), { timeout: 1100 })
  })
})


