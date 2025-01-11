import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center mb-12">
        <div className="w-48 h-48 relative mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blt-logo-AH3ixodPTMh6oRlqSS5cL9Yskkqqh8.png"
            alt="OWASP-BLT Logo"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to OWASP-BLT</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          OWASP-BLT (Bug Logging Tool) is an open-source bug logging and management platform
          that helps security researchers and organizations manage and track security vulnerabilities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Roadmap</CardTitle>
            <CardDescription>View our comprehensive project roadmap</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Track the development progress and upcoming features of OWASP-BLT.
            </p>
            <Link href="/roadmap" className="text-blue-500 hover:underline">
              View Roadmap
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dependencies</CardTitle>
            <CardDescription>Explore project dependencies and provide feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Review the technologies powering OWASP-BLT and contribute to dependency optimization.
            </p>
            <Link href="/dependencies" className="text-blue-500 hover:underline">
              View Dependencies
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">About OWASP-BLT</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Open-source bug logging and management</li>
                <li>Integration with popular version control systems</li>
                <li>Comprehensive API for automation</li>
                <li>Support for private bug bounties</li>
                <li>Advanced security features and privacy protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a
                    href="https://github.com/OWASP-BLT/BLT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://blt.owasp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Platform
                  </a>
                </li>
                <li>Join our community discussions</li>
                <li>Contribute to development</li>
                <li>Report bugs and suggest features</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

