import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PreviousNext({ prevNext }) {
    return (
        <div>
            <nav>
                <div className="flex mt-4 w-full mx-auto">
                    {prevNext.prev != '' && <Link href={prevNext.prev.path}>
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <g fill="currentColor">
                                    <path d="M14,17.414l-4.707-4.707c-0.391-0.391-0.391-1.023,0-1.414L14,6.586L15.414,8l-4,4l4,4L14,17.414z" />
                                </g>
                            </svg>{prevNext.prev.title}
                        </a>
                    </Link>}
                    {prevNext.next != '' && <Link href={prevNext.next.path}>
                        <a class="inline-flex ml-auto md:mb-2 lg:mb-0 text-indigo-500 ">{prevNext.next.title}
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <g fill="currentColor">
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </g>
                            </svg>
                        </a>
                    </Link>}
                </div>
            </nav>
        </div>
    )
}
