import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const hardware = [
  'Custom built PC, 5950X, RTX3090, 1TB SSD, 2TB HDD, 64GB RAM',
  'Electriq 49" 5120x1440 UltraWide display',
  'Polarity Works BT65 in a custom acrylic case with pudding keycaps and Kailh Box Brown switches',
  'Logitech MX Master 3S mouse',
  'Elgato Stream Deck',
  'Razer Kiyo camera',
  'Blue Yeti mic',
];

const software = ['VS Code', 'Windows Terminal', 'Windows 11', 'WSL2'];

export default function Uses() {
  return (
    <main
      id="main-content"
      className="mx-auto min-h-[calc(100vh-4rem)] w-[calc(100%-2rem)] max-w-4xl py-14 md:w-[calc(100%-3rem)] md:py-20"
    >
      <h1 className="text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
        Uses
      </h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ['Hardware', hardware],
          ['Software', software],
        ].map(([title, items]) => (
          <Card key={title as string}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
                {(items as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
