import React from 'react';
import { render } from '@testing-library/react';
import * as router from 'react-router';
import NavBar from './NavBar';

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

it('Should show navbar', () => {
  render(<NavBar />);
});
