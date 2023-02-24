import React from 'react';
import { render } from '@testing-library/react';
import * as router from 'react-router';
import Main from './Main';

describe('Login Page', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  it('Should render Main page', () => {
    render(<Main />);
  });
});
