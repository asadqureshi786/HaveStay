import React, { useState, useEffect, useRef } from 'react'

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

  const [counters, setCounters] = useState(items.map(item => {
    // Extract numeric value and suffix
    const hasK = item.number.includes('K')
    const numValue = parseInt(item.number.replace('K', ''))
    return { ...item, currentValue: 0, targetValue: hasK ? numValue * 1000 : numValue, suffix: hasK ? 'K' : '' }
  }))
  
  const counterRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const timersRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
      // Cleanup timers on unmount
      timersRef.current.forEach(timer => clearInterval(timer))
    }
  }, [hasAnimated])

  const animateCounters = () => {
    setCounters(prevCounters => {
      prevCounters.forEach((item, index) => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = item.targetValue / steps
        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const newValue = Math.min(Math.floor(increment * currentStep), item.targetValue)
          
          setCounters(prev => {
            const updated = [...prev]
            updated[index] = { ...updated[index], currentValue: newValue }
            
            // Ensure final value is set when animation completes
            if (currentStep >= steps) {
              updated[index] = { ...updated[index], currentValue: item.targetValue }
              clearInterval(timer)
            }
            
            return updated
          })
        }, duration / steps)
        
        timersRef.current.push(timer)
      })
      return prevCounters
    })
  }

  const formatNumber = (value, suffix) => {
    if (suffix === 'K') {
      return (value / 1000).toFixed(0) + suffix
    }
    return value.toString()
  }

  return (
    <div className='container lg:py-20 py-5' ref={counterRef}>
        <div className='flex justify-around lg:flex-row flex-col gap-10 items-center'>
            {
                counters.map((item,index)=>(
                    <div key={index} className='counter text-center'>
                        <h2 className='text-primary text-[50px]' >{formatNumber(item.currentValue, item.suffix)}</h2>
                        <span className='text-sm' >{item.text}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
