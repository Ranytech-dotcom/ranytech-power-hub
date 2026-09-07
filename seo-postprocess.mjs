import { readFileSync, writeFileSync } from 'node:fs';

const patches = {
  'index.html': {
    titleFrom: 'RanyTech Power Hub Calabar | Solar, Network, CCTV &amp; IT',
    titleTo: 'RanyTech Power Hub | Solar, CCTV &amp; IT in Calabar',
    descFrom: 'Solar, inverter, MikroTik/Wi-Fi, Starlink, CCTV, cabling and IT support in Calabar, Cross River and reachable Akwa Ibom areas.',
    descTo: 'Solar, inverter, MikroTik/Wi-Fi, Starlink, CCTV and IT support in Calabar, Cross River and reachable Akwa Ibom areas.'
  },
  'services.html': {
    titleFrom: 'Services | RanyTech Power Hub Solar, Network, CCTV &amp; IT',
    titleTo: 'RanyTech Power Hub Services | Solar, CCTV &amp; IT',
    descFrom: 'Explore RanyTech Power Hub services: solar, inverter, MikroTik/Wi-Fi, Starlink, CCTV, cabling, IT support and device charging in Calabar.',
    descTo: 'Explore RanyTech Power Hub solar, inverter, MikroTik/Wi-Fi, Starlink, CCTV, cabling, IT support and device charging services in Calabar.'
  },
  'service-areas.html': {
    titleFrom: 'Service Areas | RanyTech Power Hub Cross River &amp; Akwa Ibom',
    titleTo: 'RanyTech Service Areas | Cross River &amp; Akwa Ibom',
    descFrom: 'RanyTech Power Hub serves Calabar and reachable parts of Cross River and Akwa Ibom with solar, networking, Starlink, CCTV and IT services.',
    descTo: 'RanyTech Power Hub serves Calabar, Cross River and reachable Akwa Ibom areas with solar, networking, Starlink, CCTV and IT services.'
  }
};

for (const [file, patch] of Object.entries(patches)) {
  let html = readFileSync(file, 'utf8');
  html = html.split(patch.titleFrom).join(patch.titleTo);
  html = html.split(patch.descFrom).join(patch.descTo);
  writeFileSync(file, html);
  console.log(`SEO metadata normalized: ${file}`);
}
