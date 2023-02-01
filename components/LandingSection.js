import React, { useEffect, useRef, useState } from 'react'

let hue = 0
let spots = []
const mouse = {
  x: undefined,
  y: undefined

}

function LandingSection() {

  const canvasRef = useRef()
  let canvas
  let context

  useEffect(() => {
    canvas = canvasRef.current
    // console.log(window.innerWidth)
    // console.log(window.innerHeight)

    canvas.width = window?.innerWidth;
    canvas.height = window?.innerHeight;

    // if (!canvas) return
    context = canvas.getContext('2d')
    // if (!context) return

    animate()

    const handleMouseMove = (event) => {
      // console.log(event)
      mouse.x = event.x
      mouse.y = event.y
      // console.log(event.clientX, event.clientY)
      for (let i = 0; i < 5; i++) {
        // spots.push(new Particle(context, event.clientX / 4.2, event.clientY / 4.4))
        spots.push(new Particle(context))
      }
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  function handleParticle() {
    for (let i = 0; i < spots.length; i++) {
      spots[i].update()
      spots[i].draw()
      for (let j = i; j < spots.length; j++) {
        const dx = spots[i].x - spots[j].x;
        const dy = spots[i].y - spots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 90) {
          context.beginPath();
          context.strokeStyle = spots[i].color
          context.lineWidth = spots[i].size / 10
          context.moveTo(spots[i].x, spots[i].y)
          context.lineTo(spots[j].x, spots[j].y)
          context.stroke()
        }
      }
      if (spots[i].size <= 0.3) {
        spots.splice(i, 1); i--;
      }
    }
  }

  function animate() {
    context.clearRect(0, 0, window?.innerWidth, window?.innerHeight);
    handleParticle()
    hue++
    requestAnimationFrame(animate)
  }

  useEffect(() => {

    if (canvas) {

      window?.addEventListener('resize', () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        // init()
      })
    }
    window?.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    })

  }, [])


  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(position);
  };
  // handle scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <section className='  w-full h-screen text-5xl font-bold  '>
      <canvas ref={canvasRef} className=' absolute w-full h-full '></canvas>
      <h1 className=' pt-36 pl-24'>Henry Jian,</h1>
      <h1 className=' pt-1 pl-24'>Web Developer</h1>
      <h3 className=' pt-3 pl-24 text-xl font-normal'>Full Stack Developer</h3>
    </section>
  )
}

export default LandingSection

class Particle {
  constructor(context) {
    this.context = context
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 2 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = `hsl(` + hue + `, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.03
  }
  draw() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.context.fill()
  }
}

