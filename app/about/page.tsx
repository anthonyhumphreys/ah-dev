import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const usefulWhen = [
  'The goal is real, but the path is still foggy.',
  'Service design, architecture, implementation detail, and delivery risk need to be discussed in the same room.',
  'A prototype needs turning into something a team can actually run, support, and evolve.',
  'Cloud decisions need to account for reliability, security, cost, migration, and operational ownership.',
];

export default function About() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
        Anthony Humphreys
      </h1>

      <Card className="mt-8">
        <CardContent className="flex flex-col gap-5 text-lg leading-8 text-muted-foreground">
          <p>
            I&apos;m a Senior Developer at Lancaster University, working within the IT Partnering
            and Innovation team. I work across student-facing platforms, applied AI, service design,
            research tools, and the practical engineering needed to keep services alive after
            launch.
          </p>
          <p>
            I&apos;m useful when work is ambiguous and not neatly packaged yet: when a vague goal
            needs separating from the assumed solution, when trade-offs need making visible, and
            when the architecture has to survive contact with budgets, users, teams, and time.
          </p>
          <p>
            I can move between user needs, service design, architecture, implementation detail, and
            delivery risk without treating those as separate planets. The point is not only to ship
            software, but to leave behind systems that teams can understand, operate, and improve
            after the impressive demo has left the room.
          </p>
          <p>
            I&apos;m AWS Certified Solutions Architect - Professional, which gives me a structured
            way to reason about cloud architecture in practical delivery contexts: reliability,
            security, cost, scalability, migration, observability, and operational support.
          </p>
        </CardContent>
      </Card>

      <section className="mt-10">
        <h2 className="text-3xl font-extrabold tracking-tight">Where I tend to help</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {usefulWhen.map((item) => (
            <Card key={item}>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Senior judgement
                </Badge>
                <CardTitle className="text-lg leading-tight">{item}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
