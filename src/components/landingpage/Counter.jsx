import React from 'react'

export default function Counter() {

 const items = [
    {
        number : '25K',
        text : 'Happy Clients',
    },
    {
        number : '60',
        text : 'Total Rooms',
    },
    {
        number : '28',
        text : 'Award Won',
    },
    {
        number : '100',
        text : 'Total Member',
    },
 ]

  return (
    <div className='container lg:py-20 py-5' >
        <div className='flex justify-around lg:flex-row flex-col gap-10 items-center'>
            {
                items.map((item,index)=>(
                    <div className='counter text-center'>
                        <h2 className='text-primary text-[50px]' >{item.number}</h2>
                        <span className='text-sm' >{item.text}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
