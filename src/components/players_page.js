import React from 'react'
import Footer from './footer'
import Header from './header'
import Player from './player'

export default function Players() {
    const information =[
        {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },
    {key: "0",
    player:"Slayer",
    realname:"Piyush Mehta",
    game:"BGMI",
    trophy:"45"
    },

    ]
  return (
    <div className='flex flex-col h-[100vh] w-full'>
      <Header/>
      <div className='flex flex-col flex-wrap items-center overflow-y-scroll  w-full h-[90vh] bg-[#000000] text-[#ffffff]'>

<div className='w-[90vw] flex flex-wrap '>
{information.map((value) => (
                      <Player
                        key={value.id}
                        player={value.player}
                        realname={value.realname}
                        game={value.game}
                        trophy={value.trophy}

                      />
                    ))}
       </div>
      </div>
      <Footer/>
    </div>
  )
}






