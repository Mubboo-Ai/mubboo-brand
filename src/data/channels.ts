export interface Channel {
  id: string;
  name: string;
  subtitle: string;
  colour: string;
  bgColour: string;
  icon: string;
}

export const channels: Channel[] = [
  { id: 'shopping', name: 'Shopping', subtitle: 'Compare products and prices', colour: '#F97316', bgColour: '#FFF7ED', icon: '\u{1F6CD}\u{FE0F}' },
  { id: 'travel', name: 'Travel', subtitle: 'Flights, hotels, and destinations', colour: '#3B82F6', bgColour: '#EFF6FF', icon: '\u{2708}\u{FE0F}' },
  { id: 'finance', name: 'Finance', subtitle: 'Banking, insurance, and investing', colour: '#D97706', bgColour: '#FEF3C7', icon: '\u{1F4B0}' },
  { id: 'local', name: 'Local', subtitle: 'Restaurants and local services', colour: '#22C55E', bgColour: '#F0FDF4', icon: '\u{1F4CD}' },
  { id: 'info', name: 'Info', subtitle: 'Guides and everyday knowledge', colour: '#7C3AED', bgColour: '#EDE9FE', icon: '\u{1F4D6}' },
];
