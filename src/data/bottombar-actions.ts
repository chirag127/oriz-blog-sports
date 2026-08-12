import type { BottomBarAction } from '~/components/chrome/BottomBar.astro'

export const bottomBarActions: BottomBarAction[] = [
  { icon: 'home', label: 'Live', href: '/' },
  { icon: 'read', label: 'Fixtures', href: '/blog/' },
  { icon: 'series', label: 'Seasons', href: '/series/' },
  { icon: 'find', label: 'Search', href: '/search/' },
  { icon: 'menu', label: 'Menu', href: '#sb-toggle' },
]
