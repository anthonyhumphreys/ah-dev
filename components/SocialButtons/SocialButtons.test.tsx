import { render, screen } from '@/test-utils';
import { SocialButtons } from './SocialButtons';

describe('Social Buttons component', () => {
  it('renders a list of buttons', () => {
    render(<SocialButtons />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
