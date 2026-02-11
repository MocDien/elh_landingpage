import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen">
      <div className="space-y-20 pt-44 text-center">
        <div className="flex justify-center">
          <Image src="/images/logo_elh.svg" width={250} height={250} unoptimized alt="" />
        </div>
        <div className="space-y-12">
          <h1 className="mt-10 text-5xl font-semibold">Something went wrong!</h1>

          <div className="flex items-start justify-center gap-x-2 text-xl font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>

            <Link href={'/'}>Go back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
