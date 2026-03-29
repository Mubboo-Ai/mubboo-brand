export interface Country {
  code: string;
  name: string;
  domain: string;
  flag: string;
  region: 'Asia Pacific' | 'North America' | 'Europe';
  status: 'live' | 'coming-soon';
  channels: ('shopping' | 'travel' | 'finance' | 'local' | 'info')[];
}

export const countries: Country[] = [
  // Asia Pacific
  { code: 'AU', name: 'Australia', domain: 'mubboo.au', flag: '\u{1F1E6}\u{1F1FA}', region: 'Asia Pacific', status: 'live', channels: ['shopping', 'travel', 'finance', 'local', 'info'] },
  { code: 'NZ', name: 'New Zealand', domain: 'mubboo.nz', flag: '\u{1F1F3}\u{1F1FF}', region: 'Asia Pacific', status: 'live', channels: ['shopping', 'travel', 'finance', 'local', 'info'] },
  // North America
  { code: 'US', name: 'United States', domain: 'mubboo.com', flag: '\u{1F1FA}\u{1F1F8}', region: 'North America', status: 'live', channels: ['shopping', 'travel', 'finance', 'local', 'info'] },
  { code: 'CA', name: 'Canada', domain: 'mubboo.ca', flag: '\u{1F1E8}\u{1F1E6}', region: 'North America', status: 'coming-soon', channels: ['shopping', 'travel', 'finance', 'local', 'info'] },
  // Europe
  { code: 'GB', name: 'United Kingdom', domain: 'mubboo.uk', flag: '\u{1F1EC}\u{1F1E7}', region: 'Europe', status: 'live', channels: ['shopping', 'travel', 'finance', 'local', 'info'] },
  { code: 'DE', name: 'Germany', domain: 'mubboo.de', flag: '\u{1F1E9}\u{1F1EA}', region: 'Europe', status: 'coming-soon', channels: [] },
  { code: 'FR', name: 'France', domain: 'mubboo.fr', flag: '\u{1F1EB}\u{1F1F7}', region: 'Europe', status: 'coming-soon', channels: [] },
  { code: 'IT', name: 'Italy', domain: 'mubboo.it', flag: '\u{1F1EE}\u{1F1F9}', region: 'Europe', status: 'coming-soon', channels: [] },
  { code: 'ES', name: 'Spain', domain: 'mubboo.es', flag: '\u{1F1EA}\u{1F1F8}', region: 'Europe', status: 'coming-soon', channels: [] },
  { code: 'NL', name: 'Netherlands', domain: 'mubboo.nl', flag: '\u{1F1F3}\u{1F1F1}', region: 'Europe', status: 'coming-soon', channels: [] },
  { code: 'BE', name: 'Belgium', domain: 'mubboo.be', flag: '\u{1F1E7}\u{1F1EA}', region: 'Europe', status: 'coming-soon', channels: [] },
];

export const liveCountries = countries.filter(c => c.status === 'live');
export const comingSoonCountries = countries.filter(c => c.status === 'coming-soon');
