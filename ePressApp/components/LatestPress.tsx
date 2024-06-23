import { CardHeader, CardTitle, Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { ILatestResources } from "@/interfaces/latestResources"

export default function LatestPressComponent(ResourceInfo: ILatestResources) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <CardHeader className="mb-8 md:mb-10 lg:mb-12">
          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">{ResourceInfo.title}</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {ResourceInfo.resources.map((resource, index) => (
                <Card key={index} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                    <img
                        src={resource.image}
                        alt="Blog Post Image"
                        width={300}
                        height={200}
                        className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <CardContent className="p-4">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                                {resource.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="mt-2 text-muted-foreground flex flex-col h-full">
                            {resource.description}
                        </CardContent>
                        <CardFooter>
                            <Button className="mt-4">{resource.buttonTitle}</Button>
                        </CardFooter>
                    </CardContent>
                </Card>
            ))}

        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            {ResourceInfo.readMoreTitle}
          </Link>
        </div>
      </div>
    </section>
  )
}