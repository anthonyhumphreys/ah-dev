import { render, screen } from '@/test-utils';
import { SocialButtons } from './SocialButtons';

describe('Social Buttons component', () => {
  it('renders a list of buttons', () => {
    render(<SocialButtons />);
    expect(screen.getByRole('link', { name: /^Twitter/ })).toHaveAttribute(
      'href',
      'https://twitter.com/aphumphreys'
    );
    expect(screen.getByRole('link', { name: /^GitHub/ })).toHaveAttribute(
      'href',
      'https://github.com/anthonyhumphreys'
    );
    expect(screen.getByRole('link', { name: /^Discord/ })).toHaveAttribute(
      'href',
      'https://discord.gg/PAaPFVKbaF'
    );
    expect(screen.getByRole('link', { name: /^Twitch/ })).toHaveAttribute(
      'href',
      'https://www.twitch.tv/anthonyhumphreys'
    );
  });
});

describe('Social Buttons accessible names', () => {
  it('announces that links open in a new tab', () => {
    render(<SocialButtons />);
    expect(screen.getByRole('link', { name: 'GitHub (opens in new tab)' })).toHaveAttribute(
      'target',
      '_blank'
    );
  });
});
