import DependenciesContent from '@/components/dependencies-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OWASP-BLT Dependencies',
  description: 'Comprehensive list of dependencies used in the OWASP-BLT project.',
}

export default function DependenciesPage() {
  return <DependenciesContent />
}

