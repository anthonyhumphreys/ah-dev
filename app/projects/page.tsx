import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectList/ProjectList';

export const metadata: Metadata = {
  title: 'Builds and experiments',
  description:
    'Lexio builds and experiments: small, focused software testing AI workflows, developer-facing tools, and useful ideas in the real world, plus the Anvil Registry open-source project.',
};

export default function ProjectsPage() {
  return <ProjectGrid />;
}
