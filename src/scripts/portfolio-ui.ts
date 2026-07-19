import { initPortfolioNavigation } from './ui/navigation'

const portfolioWindow = window as typeof window & { __portfolioNavScrollBound?: boolean }

if (!portfolioWindow.__portfolioNavScrollBound) {
  portfolioWindow.__portfolioNavScrollBound = true
  initPortfolioNavigation()
}

