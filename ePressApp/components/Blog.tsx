
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogComponent() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unlocking the Potential of Blockchain: A Transformative Journey
          </h1>
          <div className="flex gap-2">
            <Button>Donate</Button>
            <Button variant="secondary">Mint</Button>
          </div>
        </div>
        <img
          src="/resources/placeholder.svg"
          alt="Blog post cover image"
          width={1250}
          height={340}
          className="aspect-video overflow-hidden rounded-lg object-cover mb-12"
        />
        <p>
          In a world where technology is rapidly evolving, the blockchain revolution has emerged as a transformative
          force, reshaping industries and empowering individuals. This blog post delves into the captivating journey of
          unlocking the potential of blockchain, exploring its far-reaching implications and the remarkable advancements
          that are shaping our future.
        </p>
        <p>
          Blockchain, at its core, is a decentralized and secure digital ledger that records transactions across many
          computers in a network. This innovative technology has the power to revolutionize the way we approach data
          management, financial transactions, supply chain logistics, and even social interactions. By eliminating the
          need for intermediaries and centralizing control, blockchain offers a transparent, tamper-resistant, and
          efficient alternative to traditional systems.
        </p>
        <p>
          One of the most exciting aspects of blockchain is its ability to empower individuals and communities. Through
          the use of cryptocurrencies and decentralized applications (dApps), people around the world can engage in
          peer-to-peer transactions, access financial services, and participate in the digital economy without the
          constraints of traditional financial institutions. This democratization of finance has the potential to bridge
          the gap between the unbanked and the financial mainstream, fostering financial inclusion and economic
          empowerment.
        </p>
        <p>
          Beyond the financial realm, blockchain technology is making significant strides in various industries. In the
          realm of supply chain management, blockchain-based systems can enhance transparency, traceability, and
          efficiency, ensuring the integrity of products and reducing the risk of counterfeiting. In the healthcare
          sector, blockchain-powered platforms are revolutionizing the way patient data is stored, shared, and secured,
          empowering individuals to maintain control over their own medical records.
        </p>
        <p>
          As the blockchain ecosystem continues to evolve, we are witnessing the emergence of innovative applications
          that challenge the status quo. From decentralized social media platforms to blockchain-based voting systems,
          the potential for blockchain to disrupt and transform various industries is truly boundless.
        </p>
        <p>
          In conclusion, the journey of unlocking the potential of blockchain is a captivating and transformative one.
          As we navigate this technological revolution, we must embrace the opportunities it presents and work
          collectively to harness its power for the betterment of our society. The future is blockchain, and the
          possibilities are limitless.
        </p>
      </article>
      <div className="max-w-3xl mx-auto flex items-start gap-8 mt-8 md:mt-12">
        <div className="flex gap-4">
          <img src="/resources/profile.png" alt="Author profile image" width={128} height={0} className="rounded-full" />
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Jane Doe</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Link href="#" className="hover:underline" prefetch={false}>
                  <TwitterIcon className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  <GitlabIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <p className="text-muted-foreground">
              Jane Doe is a passionate writer and blockchain enthusiast. With years of experience in the tech industry,
              she is dedicated to exploring the transformative potential of blockchain technology and sharing her
              insights with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}