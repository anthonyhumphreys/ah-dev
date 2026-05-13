import { render, screen } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('renders the site intro', () => {
    render(<Welcome />);
    expect(
      screen.getByRole('heading', {
        name: /building useful software across ai, mobile, research and product systems/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/making complicated ideas usable for real people/i)
    ).toBeInTheDocument();
  });
});
