import React, { PropsWithChildren } from 'react'

export default function ScrollView({children}: PropsWithChildren) {
    return (
        <div className="overflow-auto no-scrollbar pb-4 h-full">
            {children}
        </div>
    )
}
