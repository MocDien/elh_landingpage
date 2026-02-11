import Container from '@/components/Container'
import React from 'react'

export const Constraction = () => {
    return (
        <div className="mt-16 space-y-16">
            <Container>
                <div className="items-center space-y-2 gap-x-2 lg:flex lg:space-y-0">
                    <p className="shrink-0 text-xl font-semibold uppercase">Khách hàng thân thiết </p>
                    <div className="bg-primary-blue mt-1.5 hidden h-px w-full lg:block" />
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                        <p>Posco | Intermalt | Kenda | ChengLong |</p>
                        <button className="text-primary-orange uppercase">Xem tất cả</button>
                    </div>
                </div>


            </Container>
        </div>
    )
}
