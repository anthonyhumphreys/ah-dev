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

describe('Welcome evidence', () => {
  it('keeps anchor targets and evidence card ids', () => {
    render(<Welcome />);
    for (const id of [
      'platforms',
      'products',
      'open-source',
      'experience',
      'writing',
      'work-luca',
      'work-anvil-registry',
    ]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: /LUCA: LinkedIn write-up/ })).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });
});
