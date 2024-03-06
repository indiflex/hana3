import About from '@/app/about/page';
import { fireEvent, screen, render } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */
describe('About page', () => {
  it('click the BTN1', async () => {
    render(<About />);

    // click 전에는 'Name:'
    const spanBefore = screen.getByText(/^Name/);
    expect(spanBefore).toHaveTextContent('Name:');

    // click
    const btn = screen.getByRole('button', { name: 'BTN1' });
    fireEvent.click(btn);

    // Name: !!!
    const spanAfter = screen.getByText(/^Name/);
    expect(spanAfter).toHaveTextContent('Name: Hong');

    // make disable BTN2
    // expect(screen.getByRole('button', { name: 'BTTN' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'BTN2' })).toBeDisabled();
  });
});
