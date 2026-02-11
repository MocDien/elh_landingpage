import Image from 'next/image'
import React from 'react'

export const Constraction = () => {
    return (
        <div className="mt-16 space-y-16">

            <div className="items-center space-y-2 gap-x-2 lg:flex lg:space-y-0">
                <div className="bg-primary-blue mt-1.5 hidden h-px w-full lg:block" />
                <p className="shrink-0 text-xl font-semibold uppercase">Công trình thực tế </p>

            </div>
            <div className="gap-10 space-y-4 md:grid md:grid-cols-2 md:space-y-0 xl:grid-cols-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}>
                        <div className="h-full">
                            <Image
                                src={`/images/cong_trinh/1-${i === 9 ? `10` : `0${i + 1}`}.png`}
                                width={400}
                                height={400}
                                alt="Janastic"
                                className="h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
