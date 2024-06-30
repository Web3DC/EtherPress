import { CardHeader, CardTitle, Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { ILatestResourcesAll } from "@/interfaces/latestResourcesAll"

export default function ListPressAllComponent(ResourceInfo: ILatestResourcesAll) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <CardHeader className="mb-8 md:mb-10 lg:mb-12">
          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">{ResourceInfo.title}</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {ResourceInfo.resources.map((resource, index) => (
                <Card key={index} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                    <Image
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
                            <Link href={resource.resourceUrl}>
                              <Button className="mt-4">{resource.buttonTitle}</Button>
                            </Link>
                        </CardFooter>
                    </CardContent>
                </Card>
            ))}

        </div>
        <div className="mt-8 flex justify-center">

        <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

        </div>
      </div>
    </section>
  )
}