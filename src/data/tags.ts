export const newsTags = [
  { id: 'all', label: 'All', colour: '#374151' },
  { id: 'ai', label: 'AI', colour: '#F97316' },
  { id: 'shopping', label: 'Shopping', colour: '#3B82F6' },
  { id: 'travel', label: 'Travel', colour: '#22C55E' },
  { id: 'finance', label: 'Finance', colour: '#D97706' },
  { id: 'local', label: 'Local', colour: '#7C3AED' },
  { id: 'e-commerce', label: 'E-commerce', colour: '#EC4899' },
  { id: 'industry', label: 'Industry', colour: '#6B7280' },
] as const;

export const blogTags = [
  { id: 'all', label: 'All', colour: '#374151' },
  { id: 'vision', label: 'Vision', colour: '#F97316' },
  { id: 'expansion', label: 'Expansion', colour: '#3B82F6' },
  { id: 'analysis', label: 'Analysis', colour: '#22C55E' },
  { id: 'product', label: 'Product', colour: '#D97706' },
  { id: 'behind-the-scenes', label: 'Behind the scenes', colour: '#7C3AED' },
] as const;

export type NewsTagId = typeof newsTags[number]['id'];
export type BlogTagId = typeof blogTags[number]['id'];
