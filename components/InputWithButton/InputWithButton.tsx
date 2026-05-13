import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightIcon } from 'lucide-react';

export function InputWithButton(props: React.ComponentProps<typeof Input>) {
  return (
    <div className="flex items-center gap-2">
      <Input {...props} />
      <Button type="button" size="icon" aria-label="Submit">
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
