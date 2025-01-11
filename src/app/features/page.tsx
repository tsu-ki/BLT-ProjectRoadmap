import FeaturesContent from '@/components/features-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OWASP-BLT Features Guide',
  description: 'Comprehensive guide to OWASP-BLT website features and functionality',
}

export default function FeaturesPage() {
  return <FeaturesContent />
}

