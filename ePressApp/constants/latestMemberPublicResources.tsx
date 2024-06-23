import { ILatestResources } from "@/interfaces/latestResources";

export const LATEST_PUBLIC_MEMBER_RESOURCES : ILatestResources = {
    title: "Latest Member Resources",
    resources: [
        {
            title: "Mastering React Hooks: A Comprehensive Guide",
            description: "Dive deep into the world of React Hooks and learn how to leverage them to build powerful and efficient web applications.",
            image: "/resources/placeholder.svg",
            buttonTitle: "Read"
        },
        {
            title: "Exploring the Power of Tailwind CSS",
            description: "Learn how to leverage the utility-first approach of Tailwind CSS to build responsive and maintainable user interfaces.",
            image: "/resources/placeholder.svg",
            buttonTitle: "Read"
        },
        {
            title: "Building a Modern Web Application with Next.js",
            description: "Discover the power of server-side rendering and static site generation with Next.js to build fast and scalable web applications.",
            image: "/resources/placeholder.svg",
            buttonTitle: "Read"
        }
    ],
    readMoreTitle: "View All Member Resources",
    readMoreRef: "/resources"
}