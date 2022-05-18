import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomePage';
import countryData from '../__mocks__/country';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => {}),
}));

describe('Render header', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  // Before each test Initialize functions used as a implementation of the mock.
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => { });
    useSelectorMock.mockImplementation((state) => state(countryData));
  });
  // After each test clear the useSelectorMock.
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  test('Assert Most Views title Header is rendered', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    // const title = screen.getByTestId('title');
    // await waitFor(() => {
    //   expect(title).toBeInTheDocument();
    // });
    const title = screen.getByText('Most Views');
    await waitFor(() => {
      expect(title).toBeInTheDocument();
    });
  });

  test('Assert search Icon is rendered', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
    const settingsIcon = screen.queryByTitle(/settings/i);
    expect(settingsIcon).toBeInTheDocument();
  });
});
