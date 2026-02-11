import Link from 'next/link'

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <div>
      <nav className="flex py-3 pr-5 text-gray-700" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="hover:text-primary-orange inline-flex items-center text-sm font-medium transition"
            >
              <svg
                className="me-2.5 h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Trang chủ
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="text-atok-neutral-8 mx-1 h-3 w-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span title={title} className="ms-1 line-clamp-1 cursor-default text-sm font-medium">
                {title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
