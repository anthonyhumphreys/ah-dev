import { fireEvent, render, screen } from '@/test-utils';
import { SiteShortcuts } from './SiteShortcuts';

const mockToastSuccess = jest.fn();
const push = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}));

jest.mock('sonner', () => ({
  toast: {
    success: (...args: unknown[]) => mockToastSuccess(...args),
  },
}));

describe('SiteShortcuts', () => {
  beforeEach(() => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
    push.mockClear();
    mockToastSuccess.mockClear();
  });

  it('opens the command palette with Cmd+K and runs an action', async () => {
    render(<SiteShortcuts />);

    fireEvent.keyDown(window, { key: 'k', metaKey: true });
    expect(screen.getByRole('dialog', { name: 'Command Palette' })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Search portfolio actions'), {
      target: { value: 'writing' },
    });
    fireEvent.click(screen.getByText('Writing'));

    expect(push).toHaveBeenCalledWith('/blog');
  });

  it('toggles the show-the-working overlay with the Konami code', () => {
    render(<SiteShortcuts />);

    const enterCode = () =>
      [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
      ].forEach((key) => fireEvent.keyDown(window, { key }));

    enterCode();

    expect(document.documentElement).toHaveClass('show-working');
    expect(mockToastSuccess).toHaveBeenCalledWith('Showing the working.', {
      description: 'Every box, outlined. Enter the code again to tidy up.',
    });

    enterCode();

    expect(document.documentElement).not.toHaveClass('show-working');
    expect(mockToastSuccess).toHaveBeenLastCalledWith('Working tidied away.');
  });

  it('shows a useful empty state', () => {
    render(<SiteShortcuts />);

    fireEvent.keyDown(window, { key: 'k', ctrlKey: true });
    fireEvent.change(screen.getByLabelText('Search portfolio actions'), {
      target: { value: 'zzzz-nothing' },
    });

    expect(screen.getByText('No match. Try ‘writing’, ‘AI’ or ‘contact’.')).toBeInTheDocument();
  });
});
