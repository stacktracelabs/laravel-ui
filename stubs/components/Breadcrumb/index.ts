export { default as Breadcrumb } from './Breadcrumb.vue'
export { default as BreadcrumbEllipsis } from './BreadcrumbEllipsis.vue'
export { default as BreadcrumbItem } from './BreadcrumbItem.vue'
export { default as BreadcrumbLink } from './BreadcrumbLink.vue'
export { default as BreadcrumbList } from './BreadcrumbList.vue'
export { default as BreadcrumbPage } from './BreadcrumbPage.vue'
export { default as BreadcrumbSeparator } from './BreadcrumbSeparator.vue'
export { default as BreadcrumbNavigation } from './BreadcrumbNavigation.vue'

export interface BreadcrumbNavigationItem {
  title: string
  action: { type: 'link', link: { url: string, external: boolean } } | null
}

export type BreadcrumbNavigationList = Array<BreadcrumbNavigationItem>
