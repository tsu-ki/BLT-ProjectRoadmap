"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const priorities = [
  {
    name: "High Priority",
    description: "Critical milestones with high impact",
    milestones: [
      {
        emoji: "🥓",
        title: "BACON (Blockchain Assisted Contribution Network)",
        description: "Integration of Bitcoin Core technology and Runes protocol",
        details: [
          "Estimated Time to Completion: 4-6 months",
          "Stakeholder Priority: Extremely High",
          "User Impact Score: 9/10",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/45",
      },
      {
        emoji: "🕵️",
        title: "Private Bug Bounties",
        description: "Allows companies to conduct private, paid bug bounties",
        details: [
          "Estimated Time to Completion: 3 weeks",
          "Stakeholder Priority: High",
          "User Impact Score: 8/10",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/22",
      },
      {
        emoji: "🔒",
        title: "Protection Of Online Privacy",
        description: "Enhances user trust through robust privacy measures",
        details: [
          "Current Phase: Testing",
          "Risk Assessment: High",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/24",
      },
      {
        emoji: "🛡️",
        title: "Trademark Defense",
        description: "Protects brand integrity and legal standing",
        details: [
          "Dependency Count: 2 dependencies",
          "Estimated ROI: High",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/23",
      },
      {
        emoji: "📡",
        title: "Cyber Dashboard",
        description: "Comprehensive dashboard of stats and information for organizations",
        details: [
          "Resource Allocation: 4 devs, 160 hours",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/17",
      },
      {
        emoji: "💰",
        title: "Multi-Crypto Donations",
        description: "Facilitates decentralized multi-crypto payment integration",
        details: [
          "Bug Count: 3 bugs",
          "User Engagement Prediction: 10% increase",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/31",
      },
      {
        emoji: "🔧",
        title: "Maintenance",
        description: "Continuous maintenance of the platform",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/36",
      },
      {
        emoji: "🤖",
        title: "Artificial Intelligence",
        description: "Integration of AI to improve automated issue resolution",
        details: [
          "Potential workload reduction: 20%",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/41",
      },
    ],
  },
  {
    name: "Medium Priority",
    description: "Important features with moderate impact",
    milestones: [
      {
        emoji: "🏠",
        title: "Home Page Improvements",
        description: "Enhancements aimed at reducing bounce rates",
        details: [
          "Estimated Time to Completion: 2 weeks",
          "Expected bounce rate reduction: 15%",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/34",
      },
      {
        emoji: "🐞",
        title: "New Issue Detail Page",
        description: "Improves issue tracking efficiency and developer experience",
        details: [
          "User Impact Score: 7/10",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/32",
      },
      {
        emoji: "🌀",
        title: "BLT Teams",
        description: "Allows for the formation of bug hunting teams",
        details: [],
        link: "http://blt.owasp.org/",
      },
      {
        emoji: "🏆",
        title: "Gamification",
        description: "Introduces gamification elements to the platform",
        details: [
          "Predicted user engagement increase: 25%",
        ],
        link: "https://github.com/OWASP-BLT/BLT/milestone/39",
      },
      {
        emoji: "👷",
        title: "Contributor Ranking",
        description: "Displays contributor activity",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/27",
      },
      {
        emoji: "📺",
        title: "BLTV - BLT Education",
        description: "Adds educational content to the platform",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/30",
      },
      {
        emoji: "🔔",
        title: "Follower Notifications",
        description: "Allows users to follow company bug reports",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/21",
      },
      {
        emoji: "🥗",
        title: "Fresh",
        description: "Daily check-in component to encourage consistent participation",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/38",
      },
    ],
  },
  {
    name: "Low Priority",
    description: "Additional features with lower immediate impact",
    milestones: [
      {
        emoji: "🕹️",
        title: "Penteston Integration",
        description: "Adds pentesting tools to the platform",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/19",
      },
      {
        emoji: "🪝",
        title: "Webhooks",
        description: "Automates synchronization of issue statuses",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/28",
      },
      {
        emoji: "🥬",
        title: "Lettuce",
        description: "Security analysis of Slack Workspace Apps",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/33",
      },
      {
        emoji: "🌐",
        title: "Organizations",
        description: "Refactors website to combine companies and teams",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/40",
      },
      {
        emoji: "🌟",
        title: "Suggestions",
        description: "Feature to gather user suggestions",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/42",
      },
      {
        emoji: "🔥",
        title: "Sizzle",
        description: "Multi-platform time-tracking feature",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/37",
      },
      {
        emoji: "🛠️",
        title: "Projects",
        description: "Project management features",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT/milestone/46",
      },
    ],
  },
  {
    name: "BLT-Flutter",
    description: "Mobile app development milestones for OWASP-BLT",
    milestones: [
      {
        emoji: "🌍",
        title: "Banned Apps Simulation",
        description: "Simulate app behavior in countries with restrictions to ensure compliance and accessibility.",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT-Flutter/milestone/7",
      },
      {
        emoji: "🏆",
        title: "Sponsorship in app",
        description: "Introduces a sponsorship model for leaderboards to engage users.",
        details: [
          "Allow users to sponsor leaderboards",
          "Implement in-app payments",
          "Distribute winnings to first place monthly winner",
        ],
        link: "https://github.com/OWASP-BLT/BLT-Flutter/milestone/3",
      },
      {
        emoji: "💌",
        title: "Invites in app",
        description: "Enhance user growth through an invitation system, leveraging network effects.",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT-Flutter/milestone/4",
      },
      {
        emoji: "🏷️",
        title: "Issue Tagging in app",
        description: "Implement a tagging system for issues to improve organization and searchability.",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT-Flutter/milestone/5",
      },
      {
        emoji: "🏢",
        title: "Company Portal in App",
        description: "Develop a portal for company-specific information and tools, enhancing employee engagement.",
        details: [],
        link: "https://github.com/OWASP-BLT/BLT-Flutter/milestone/6",
      },
    ],
  },
]

const categories = [
  "High Priority",
  "Medium Priority",
  "Low Priority",
  "BLT-Flutter"
]

export default function RoadmapContent() {
  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">OWASP-BLT Project Roadmap</h1>
        <p className="text-xl mb-8">
          This roadmap outlines the key milestones and priorities for the OWASP-BLT project.
        </p>
        <Tabs defaultValue="high" className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            {priorities.map((priority) => (
              <TabsTrigger key={priority.name} value={priority.name.toLowerCase().replace(" ", "-")} className="flex-1">
                {priority.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {priorities.map((priority) => (
            <TabsContent key={priority.name} value={priority.name.toLowerCase().replace(" ", "-")}>
              <Card>
                <CardHeader>
                  <CardTitle>{priority.name}</CardTitle>
                  <CardDescription>{priority.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {priority.milestones.map((milestone) => (
                      <Card key={milestone.title}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <span>{milestone.emoji}</span>
                            <span>{milestone.title}</span>
                          </CardTitle>
                          <CardDescription>{milestone.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 mb-4">
                            {milestone.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                          <a
                            href={milestone.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            View Milestone
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="list-disc pl-5">
            <li>
              <a
                href="https://github.com/orgs/OWASP-BLT/projects/2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Comprehensive Project Issue List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ScrollArea>
  )
}

