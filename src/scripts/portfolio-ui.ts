import { initPortfolioNavigation } from './ui/navigation'
import { bindStandardMapExperiments } from './standard-map-experiment'

const portfolioWindow = window as typeof window & { __portfolioNavScrollBound?: boolean }

if (!portfolioWindow.__portfolioNavScrollBound) {
  portfolioWindow.__portfolioNavScrollBound = true
  initPortfolioNavigation()
}

bindStandardMapExperiments()
