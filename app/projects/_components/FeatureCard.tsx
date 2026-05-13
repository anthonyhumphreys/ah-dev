import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export type Feature = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  slug: string;
};

export default function FeatureCard({ title, description, icon: Icon, slug }: Feature) {
  return (
    <Link href={`ai-scrum-assistant/${slug}`} className="block">
      <Card className="h-full transition-transform hover:-translate-y-1">
        <CardHeader>
          <Icon aria-hidden="true" className="text-primary" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
