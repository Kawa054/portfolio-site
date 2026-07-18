export type ContentLink = {
  label: string
  url: string
}

export type ContentParagraph = string | Array<string | ContentLink>

export type ContentFigure = {
  src: string
  alt: string
  caption?: string
}

export type ContentBlock =
  | { type: 'paragraphs'; paragraphs: ContentParagraph[] }
  | { type: 'figures'; figures: ContentFigure[] }

export type ContentSection = {
  title?: string
  blocks?: ContentBlock[]
  galleryColumns?: 2 | 3
  widget?: 'standard-map-experiment'
  paragraphs?: ContentParagraph[]
  figures?: ContentFigure[]
  paragraphsAfterFigures?: ContentParagraph[]
  images?: string[]
  videos?: string[]
  links?: ContentLink[]
}

export type Skill = {
  name: string
  icon: string
  description: string
}

export type SkillRow = {
  level: string
  star: string
  description: string
  skills: Skill[]
}

export type Hobby = {
  title: string
  text: string
}

export type RelatedWork = {
  title: string
  image: string
  href: string
}

export type CareerIcon = 'school' | 'university' | 'graduate' | 'work'

export type CareerEntry = {
  period: string
  organization: string
  detail: string
  duration?: string
  note?: string
  achievement?: string
  icon: CareerIcon
  iconClass: string
  works: RelatedWork[]
}

export type Paper = {
  date: string
  venue: string
  title: string
  url: string
}

export type Presentation = {
  date: string
  event: string
  title: string
  planned: boolean
}

export type Work = {
  title: string
  image: string
  heading: string
  period: string
  body: string[]
  details: string[]
  sections: ContentSection[]
}

export type ResearchTopic = {
  title: string
  heading: string
  image?: string
  sections: ContentSection[]
}

export type DiaryEntry = {
  id: string
  date: string
  title: string
  category: string
  body: string
}
