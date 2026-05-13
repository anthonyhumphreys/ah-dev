import { Card, CardContent } from '@/components/ui/card';

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
            and Innovation team. I lead development on the University&apos;s mobile app ecosystem,
            contribute to core student-facing services, and support innovation projects across the
            institution.
          </p>
          <p>
            I specialise in building user-centred systems using React, React Native, C#/.NET, and
            cloud-native architectures. Much of my work blends product thinking with hands-on
            engineering, helping modernise services, introduce scalable patterns, and deliver clean,
            maintainable solutions.
          </p>
          <p>
            I&apos;m committed to continual development, delivery quality, and collaboration across
            the lifecycle: the bits that make software useful after the impressive demo has left the
            room.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
