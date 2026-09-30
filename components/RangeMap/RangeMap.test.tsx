import { render, screen, userEvent } from '@/test-utils';
import { RangeMap } from './RangeMap';

describe('RangeMap', () => {
  it('renders a toggle button for each domain', () => {
    render(<RangeMap />);
    for (const name of ['Applied AI', 'Mobile', 'Research', 'Cloud', 'Developer tooling']) {
      expect(screen.getByRole('button', { name: new RegExp(`^${name}`) })).toHaveAttribute(
        'aria-pressed',
        'false'
      );
    }
  });

  it('presses a domain and filters the list alternative', async () => {
    const user = userEvent.setup();
    render(<RangeMap />);
    const research = screen.getByRole('button', { name: /^Research/ });

    await user.click(research);
    expect(research).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText(/showing 4 of 10 projects in research/i)).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /work on the range map/i });
    expect(list.querySelectorAll('li')).toHaveLength(4);

    await user.click(research);
    expect(research).toHaveAttribute('aria-pressed', 'false');
  });

  it('links project nodes to their evidence on the page', () => {
    render(<RangeMap />);
    expect(screen.getByRole('link', { name: /^LUCA: Careers AI assistant/ })).toHaveAttribute(
      'href',
      '#work-luca'
    );
  });
});
