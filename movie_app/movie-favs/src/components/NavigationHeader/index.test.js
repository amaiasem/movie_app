import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// import { fireEvent } from '@testing-library/react';
import NavigationHeader from '.';

describe('Given a component NavigationHeader', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When is rendered', () => {
    it('It should display a Link My Favourites', () => {
      act(() => {
        render(<NavigationHeader />, container);
      });

      const link = container.getByText('My Favourites');
      expect(link).toBeInTheDocument();
    });
  });
});
