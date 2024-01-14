import { Container, Text } from '@mantine/core';

export default function Uses() {
  return (
    <Container>
      <Text>Uses</Text>
      <Text>Hardware</Text>
      <ul>
        <li>Custom Built PC, 5950X, RTX3090, 1TB SSD, 2TB HDD, 64GB RAM</li>
        <li>Electriq 49" 5120x1440 UltraWide display</li>
        <li>
          Polarity Works BT65 in a custom acrylic case with pudding keycaps and Kailh Box Brown
          switches
        </li>
        <li>Logitech MX Master 3S Mouse</li>
        <li>Elgato Stream Deck</li>
        <li>Razer Kiyo Camera</li>
        <li>Blue Yeti Mic</li>
      </ul>
      <Text>Software</Text>
      <ul>
        <li>VSCode</li>
        <li>Windows Terminal</li>
        <li>Windows 11</li>
        <li>WSL2</li>
      </ul>
    </Container>
  );
}
