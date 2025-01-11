"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

interface Dependency {
  name: string
  description: string
  usage: string
  category: string
  comments: Comment[]
}

interface Comment {
  text: string
  timestamp: string
}

const dependencies: Dependency[] = [
  {
    category: "Core",
    name: "Django",
    description: "A Python web framework.",
    usage: "Routing requests, rendering templates, CSRF protection, authentication (login_required), and ORM for database operations.",
    comments: []
  },
  {
    category: "Core",
    name: "python-dotenv",
    description: "Loads environment variables from a .env file.",
    usage: "Used in code to privately configure tokens/credentials without committing secrets to source control.",
    comments: []
  },
  {
    category: "Authentication",
    name: "django-allauth",
    description: "Handles user registration and authentication through various OAuth providers.",
    usage: "Used for integrating with GitHub, Google, and other OAuth providers for user authentication.",
    comments: []
  },
  {
    category: "Authentication",
    name: "dj-rest-auth",
    description: "Simplifies creating token-based authentication endpoints for Django REST Framework.",
    usage: "Provides default routes for login, logout, password reset.",
    comments: []
  },
  {
    category: "Database",
    name: "psycopg2-binary",
    description: "PostgreSQL database driver for Python.",
    usage: "The primary Python <-> PostgreSQL adapter for Django.",
    comments: []
  },
  {
    category: "Database",
    name: "dj-database-url",
    description: "Parses database URLs from environment variables.",
    usage: "Used so the project can load databases by a DSN string (e.g., PostgreSQL, MySQL).",
    comments: []
  },
  {
    category: "Utils",
    name: "Unidecode",
    description: "Converts Unicode text to plain ASCII.",
    usage: "Often used to normalize or slugify non-ASCII text.",
    comments: []
  },
  {
    category: "Utils",
    name: "user-agents",
    description: "Parse user agent strings (browser details, OS, device type).",
    usage: "Analyzing request headers to discern client information.",
    comments: []
  },
  {
    category: "Utils",
    name: "beautifulsoup4",
    description: "HTML/XML parser.",
    usage: "Extracting or parsing HTML markup (e.g., scraping forms or textual content).",
    comments: []
  },
  {
    category: "API",
    name: "djangorestframework",
    description: "REST API framework for Django.",
    usage: "API views, response handling, token authentication.",
    comments: []
  },
  {
    category: "API",
    name: "requests",
    description: "Simplified HTTP client for Python.",
    usage: "Making external API calls (e.g., GitHub, Slack).",
    comments: []
  },
  {
    category: "Frontend",
    name: "django-bootstrap-datepicker-plus",
    description: "Date picker widget for Django forms using Bootstrap.",
    usage: "Adds a nicer date/time picker in templates.",
    comments: []
  },
  {
    category: "Frontend",
    name: "Pillow",
    description: "Image processing library.",
    usage: "Creating or modifying images (Image, ImageDraw, ImageFont).",
    comments: []
  },
  {
    category: "Testing",
    name: "selenium",
    description: "Browser automation for testing (Chrome, Firefox, etc.).",
    usage: "Allows code to simulate user actions in a real browser.",
    comments: []
  },
  {
    category: "AI/ML",
    name: "langchain",
    description: "Ecosystem library for building LLM-powered applications.",
    usage: "Likely used for chatbots, chain-of-thought workflows, or AI-based text processing.",
    comments: []
  },
  {
    category: "Dev",
    name: "black",
    description: "Code formatter enforcing consistent code style.",
    usage: "Used in development to maintain consistent Python code formatting.",
    comments: []
  },
  {
    category: "Integrations",
    name: "slack_bolt",
    description: "Slack application framework.",
    usage: "Defining Slack slash commands (/discover), responding to actions (pagination buttons), sending direct messages.",
    comments: []
  },
  {
    category: "Integrations",
    name: "stripe",
    description: "Payment processing library.",
    usage: "Facilitates Stripe API calls (billing, charges).",
    comments: []
  },
  {
    category: "Integrations",
    name: "GitPython",
    description: "Interact with local Git repositories.",
    usage: "Cloning repos, checking out branches, retrieving commit info.",
    comments: []
  },
  {
    category: "Monitoring",
    name: "Sentry",
    description: "Error tracking and performance monitoring.",
    usage: "Capturing application exceptions in production.",
    comments: []
  }
]

const categories = [
  "Core",
  "Authentication",
  "Database",
  "Utils",
  "API",
  "Frontend",
  "Testing",
  "AI/ML",
  "Dev",
  "Integrations",
  "Monitoring"
]

export default function DependenciesContent() {
  const [localDependencies, setLocalDependencies] = useState<Dependency[]>(dependencies)
  const [newComment, setNewComment] = useState<string>("")
  const [selectedDependency, setSelectedDependency] = useState<string | null>(null)

  const addComment = (dependencyName: string) => {
    if (!newComment.trim()) return

    setLocalDependencies(deps =>
      deps.map(dep => {
        if (dep.name === dependencyName) {
          return {
            ...dep,
            comments: [...dep.comments, {
              text: newComment,
              timestamp: new Date().toISOString()
            }]
          }
        }
        return dep
      })
    )
    setNewComment("")
    setSelectedDependency(null)
  }

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">OWASP-BLT Dependencies</h1>
        <p className="text-xl mb-8">
          A comprehensive list of dependencies used in the OWASP-BLT project. Users can provide feedback on potential refactoring opportunities.
        </p>

        <Tabs defaultValue={categories[0].toLowerCase()} className="w-full">
          <TabsList className="flex flex-wrap">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category.toLowerCase()}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category.toLowerCase()}>
              <div className="grid gap-6">
                {localDependencies
                  .filter(dep => dep.category === category)
                  .map((dependency) => (
                    <Card key={dependency.name}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{dependency.name}</CardTitle>
                          <Badge variant="outline">{dependency.category}</Badge>
                        </div>
                        <CardDescription>{dependency.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Usage in Code:</h4>
                            <p className="text-sm text-muted-foreground">{dependency.usage}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Feedback & Comments:</h4>
                            {dependency.comments.length > 0 ? (
                              <div className="space-y-2">
                                {dependency.comments.map((comment, index) => (
                                  <div key={index} className="p-3 bg-muted rounded-lg">
                                    <p className="text-sm">{comment.text}</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {new Date(comment.timestamp).toLocaleDateString()}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-sm text-muted-foreground">No comments yet.</p>
                            )}
                          </div>

                          {selectedDependency === dependency.name ? (
                            <div className="space-y-2">
                              <Textarea
                                placeholder="Add your feedback about potential refactoring..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="min-h-[100px]"
                              />
                              <div className="flex gap-2">
                                <Button onClick={() => addComment(dependency.name)}>
                                  Add Comment
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedDependency(null)
                                    setNewComment("")
                                  }}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              onClick={() => setSelectedDependency(dependency.name)}
                            >
                              Add Feedback
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ScrollArea>
  )
}

