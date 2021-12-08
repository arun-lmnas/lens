import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PreviousNext({prevNext}) {
    return (
        <div>
            <nav>
                <div class="inline-flex">         
                    {prevNext.prev != '' && <Link href={prevNext.prev.path}>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                            {prevNext.prev.title}
                        </button>
                    </Link>}
                    {prevNext.next !='' && <Link href={prevNext.next.path}>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                            {prevNext.next.title}
                        </button>
                    </Link>}
                </div>
            </nav>
        </div>
    )
}
