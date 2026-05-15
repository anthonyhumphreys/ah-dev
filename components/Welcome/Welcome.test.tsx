import { render, screen } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('renders the site intro', () => {
    render(<Welcome />);
    expect(
      screen.getByRole('heading', {
        name: /building useful software for messy real-world work/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/keeping it understandable for the team that owns it next/i)
    ).toBeInTheDocument();
  });
});
