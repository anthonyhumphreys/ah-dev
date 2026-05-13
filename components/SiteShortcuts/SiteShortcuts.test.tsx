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
    fireEvent.click(screen.getByText('Open Writing'));

    expect(push).toHaveBeenCalledWith('/blog');
  });

  it('shows the Konami unlock message', () => {
    render(<SiteShortcuts />);

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

    expect(mockToastSuccess).toHaveBeenCalledWith('Senior mode unlocked', {
      description: 'Useful thing remains real.',
    });
  });
});
