import React from 'react'
import type { Page } from '@/payload-types'

// Import editable versions
import { Hero } from './hero-editable'
import { Benefits } from './benefits-editable'
import { CTA } from './cta-editable'
import { Team } from './team-editable'
import { UseCases } from './use-cases-editable'
import { VisionFunnel } from './vision-funnel-editable'
import { FAQs } from './faqs-editable'
import { Contact } from './contact-editable'
import { Testimonials } from './testimonials-editable'
import { RichContent } from './rich-content'
import { ContentGrid } from './content-grid'
import { ImageText } from './image-text'
import { Stats } from './stats'
import { Spacer } from './spacer'

// Import static versions (complex components to be enhanced later)
import { ProblemFailures } from './problem-failures'
import { HowItWorks } from './how-it-works'
import { DivideX } from './divide'

type Props = {
  layout: Page['layout']
}

// Composant qui rend les blocs dynamiquement
export const RenderBlocks: React.FC<Props> = ({ layout }) => {
  if (!layout || !Array.isArray(layout)) {
    return null
  }

  return (
    <>
      {layout.map((block, index) => {
        const { blockType } = block

        // On ajoute le DivideX entre chaque bloc
        return (
          <React.Fragment key={index}>
            {index > 0 && <DivideX />}
            {renderBlock(block, blockType)}
          </React.Fragment>
        )
      })}
    </>
  )
}

// Fonction qui rend chaque bloc individuellement
function renderBlock(block: any, blockType: string) {
  switch (blockType) {
    case 'hero':
      return <Hero {...block} />

    case 'visionFunnel':
      return <VisionFunnel {...block} />

    case 'problemFailures':
      return <ProblemFailures {...block} />

    case 'useCases':
      return <UseCases {...block} />

    case 'benefits':
      return <Benefits {...block} />

    case 'howItWorks':
      return <HowItWorks {...block} />

    case 'faqs':
      return <FAQs {...block} />

    case 'team':
      return <Team {...block} />

    case 'cta':
      return <CTA {...block} />

    case 'contact':
      return <Contact {...block} />

    case 'testimonials':
      return <Testimonials {...block} />

    case 'richContent':
      return <RichContent {...block} />

    case 'contentGrid':
      return <ContentGrid {...block} />

    case 'imageText':
      return <ImageText {...block} />

    case 'stats':
      return <Stats {...block} />

    case 'spacer':
      return <Spacer {...block} />

    default:
      return null
  }
}
