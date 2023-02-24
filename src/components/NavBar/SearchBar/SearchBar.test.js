import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search  component', () => {
  it('Calls onChange function when user type input', () => {
    const onChangeMock = jest.fn();

    render(<SearchBar onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText('Search…');
    fireEvent.change(inputElement, { target: { value: 'abc' } });
    expect(onChangeMock).toBeCalledWith('abc');
  });

  it('Renders correct default value', () => {
    const value = 'default';

    render(<SearchBar value={value} />);
    const inputElement = screen.getByPlaceholderText('Search…');
    expect(inputElement.value).toBe(value);
  });
});
