export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'sports-blog',
  name: 'The Chalkboard',
  origin: 'https://sports-blog.oriz.in',
  tagline: 'Scorecards, tactics, and training for fans',
  description: 'Scorecards, tactics, and training — the game broken down for fans who want to see what is really happening on the pitch.',
}
