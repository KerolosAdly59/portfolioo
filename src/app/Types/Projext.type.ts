export type Data = Project[]

export interface Project {
  id: number
  title: string
  description: string
  details: string[]
  image: string
  urlSite: string
  urlCode: string
  featured: boolean
}
