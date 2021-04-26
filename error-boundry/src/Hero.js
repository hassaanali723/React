import React from 'react'

export default function Hero({HeroName}) {
    if(HeroName=="Usama"){
        throw new Error ("Not a Hero")
    }

    return (
        <div>
            <span>{HeroName} is Hero </span>
        </div>
    )
}
