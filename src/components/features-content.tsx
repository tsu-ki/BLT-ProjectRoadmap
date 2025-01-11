"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Feature {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
}

const features: Feature[] = [
  {
    id: "user-profile",
    title: "User Profile",
    description: `The user profile system offers robust identity management and achievement tracking. Users can authenticate through multiple methods including email, GitHub, Google, or Facebook. Profile customization features allow Gravatar integration for personalized avatars. The system implements a sophisticated points-based progression, with users advancing through four distinct title levels: Level 1 for 1-10 issues, Level 2 for 11-50 issues, Level 3 for 51-200 issues, and Level 4 for over 200 issues. An automatic badge system recognizes various achievements, including GitHub-integrated accomplishments like PR submissions, code reviews, and successful builds. Users can showcase their earned badges on their profiles and receive custom badges for special contributions.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user-profile-CFqBFMe5sa7LVJRaKnPNg6Mkhwas9d.png",
    imageAlt: "User Profile Interface showing stats, badges, and activity tracking"
  },
  {
    id: "teams",
    title: "Teams",
    description: `The team collaboration system enables efficient group management through customizable team creation and member coordination. Team leaders can create named teams, send member invitations, and establish role-based permissions distinguishing between managers and regular members. The system handles join requests systematically and maintains comprehensive team activity tracking. Teams benefit from shared issue management capabilities and can monitor their collective performance through a dedicated statistics dashboard.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teams-p3MG86lJyupmR8rX5Cm84mRtiq0VLn.png",
    imageAlt: "Teams Management Interface showing team details and member management"
  },
  {
    id: "projects",
    title: "Projects",
    description: `The project management system provides detailed repository tracking and analysis. Each project entry maintains comprehensive metrics including star counts, fork statistics, and contributor activity. Users can efficiently navigate projects through advanced search and filtering options based on freshness, star count, fork count, and specific tags or categories. The system generates detailed activity metrics and contributor statistics for each project, enabling effective project monitoring and management.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-xWHu85YIBiqya5hcCVMY8eKZj0YGmS.png",
    imageAlt: "Project Management Dashboard with repository metrics and filters"
  },
  {
    id: "issues",
    title: "Issues (Bug Reporting)",
    description: `The Bug Logging Tool (BLT) delivers a sophisticated issue tracking system for security vulnerabilities and bugs. Users can create issues through a structured form requiring URLs with HTTPS validation, detailed descriptions supporting markdown formatting, and optional screenshot attachments with automatic validation. The system supports CVE ID linking and implements rate limiting of 50 issues per day for authenticated users and 30 for anonymous users. Social features include a voting system with upvotes/downvotes, threaded comments with reply support, and email notifications for interactions. Users can save or bookmark issues, track status changes (open, closed, resolved), and benefit from GitHub integration for automatic issue creation. The system also facilitates team member assignment for collaborative issue resolution.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/report-bug-qOUy9ULKEF3wi0YXD2E7EMJRh2LOwf.png",
    imageAlt: "Bug Reporting Interface with issue cards and status indicators"
  },
  {
    id: "sizzle",
    title: "Sizzle (Timer)",
    description: `Sizzle provides comprehensive time management capabilities with start/stop timer functionality and detailed activity categorization. The system generates automated reports including daily logs, weekly summaries, and user-specific reports. Users can update their daily status and track progress through the integrated tracking system. The platform includes sophisticated time analytics and visualization tools to help users understand their productivity patterns and time utilization.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sizzle-ULYF6EsGIo03sdrf0aXlssrF4g8DIS.png",
    imageAlt: "Sizzle Timer Interface with activity tracking and reports"
  },
  {
    id: "bug-bounties",
    title: "Bug Bounties",
    description: `The bug bounty system manages security research competitions through time-bound hunts with defined prize pools. Hunts are categorized as ongoing, upcoming, previous, or draft status. The system includes a sophisticated bidding mechanism that tracks current bids, manages bid status, and generates automated bid images. A comprehensive leaderboard system facilitates winner selection and prize distribution, ensuring fair and transparent reward allocation.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bug-hunt-5en6t46D5mrPmQ4A1hMtaYOIx2hqS9.png",
    imageAlt: "Bug Bounty System showing active hunts and rewards"
  },
  {
    id: "similarity-check",
    title: "Similarity Check",
    description: `The similarity check system performs detailed code analysis comparing repositories, functions, and models. Results are visually represented using a color-coded system: red for less than 50% similarity, orange for 50-80% similarity, and green for greater than 80% similarity. The system generates comprehensive comparison data that can be exported in CSV format for further analysis.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/similarity-scan-3rAQyq3Uv57CYugGARo81XcZGYdVlK.png",
    imageAlt: "Similarity Check Interface with repository comparison tools"
  },
  {
    id: "takedowns",
    title: "Takedowns",
    description: `The content removal request system manages the process of content takedowns efficiently. Users can submit requests by identifying specific content, specifying removal reasons, and uploading supporting documentation. The system maintains a review queue for administrators, tracks request status, and facilitates communication between parties. All actions and resolutions are logged for transparency and reference.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/takedowns-oOXhloPFC5fbmQYqfKRCCnSNAgrvfW.png",
    imageAlt: "Takedowns Management Interface with request form"
  },
  {
    id: "submit-pr",
    title: "Submit PR for Review",
    description: `The pull request review system streamlines code review processes through GitHub integration. Users can submit PRs by linking repositories, providing change descriptions, and connecting related issues. The review process includes automated code analysis, a comprehensive comment system, and change request tracking. The system monitors review metrics, response times, and approval rates, providing valuable insights into the review process efficiency.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/submit-PR-for-analysis-GIv4xBfW8gYSI0STX4eOCXkY5lo1LU.png",
    imageAlt: "PR Review System with submission form"
  },
  {
    id: "suggestions",
    title: "Suggestions (Feature Suggestions)",
    description: `The feature suggestion system enables users to submit and track feature requests. Each submission includes detailed descriptions, use case explanations, and priority settings. A voting system allows community members to influence feature prioritization through upvotes and downvotes. The system tracks suggestion status through various stages including review, acceptance, development, and implementation, while maintaining discussion threads for community feedback.`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suggestions-Z2BU7tez4dN9nspio1dm7DEzKahoa3.png",
    imageAlt: "Feature Suggestions Interface with voting system"
  }
]

export default function FeaturesContent() {
  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Website Features and Section Guide</h1>
        <p className="text-xl mb-8">
          A comprehensive guide to all features and functionality available in the OWASP-BLT platform.
        </p>

        <div className="grid gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    priority={feature.id === "user-profile"}
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

