import RoadmapContent from '@/components/roadmap-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OWASP-BLT Roadmap',
  description: 'Comprehensive roadmap for the OWASP-BLT project, including milestones and priorities.',
}

export default function RoadmapPage() {
  return <RoadmapContent />
}

