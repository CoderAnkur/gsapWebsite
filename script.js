var tl=gsap.timeline()

tl.from('#nav h3',{
  y:-50,
  delay:0.3,
  duration:0.8,
  opacity:0,
  stagger:0.35
})

tl.from('#main h1',{
  x:-50,
  duration:0.8,
  opacity:0,
  stagger:0.4

})

gsap.from('img',{
  x:200,
  delay:2,
  opacity:0,
  rotate:40,
  duration:0.8,
  stagger:0.5
})

gsap.from('#footer h4',{
  y:50,
  delay:2,
  opacity:0,
  duration:0.3,
  stagger:0.3
})
