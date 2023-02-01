import { skillsState } from '@/recoil/atoms';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import Language from '../components/Language';
import LanguageLogo from '../components/LanguageLogo';

function SkillsSection() {

  const skillsSectionRef = useRef()
  const [windowDimensions, setWindowDimensions] = useState(null)
  const [skills, setSkills] = useRecoilState(skillsState);

  let [selectedNum, setSelectedNum] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedNum < 15) {
        setSelectedNum(prev => prev + 1)
      } else if (selectedNum >= 15) {
        setSelectedNum(1)
      }
    }, 1440);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedNum >= 16) {
      setSelectedNum(1)
    }
  }, [selectedNum])



  function getWindowDimensions() {
    if (window) {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      }
    }
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setSkills(skillsSectionRef.current.offsetTop)
  }, [windowDimensions, skillsSectionRef])



  return (
    <section ref={skillsSectionRef} className=' pt-14 px-7  w-full max-h-screen h-screen text-3xl font-bold overflow-clip'>
      <h1 className=' '>My Skills</h1>
      <div className=' flex mt-3 space-x-3'>

        <div className=' flex flex-col text-xl '>
          <Language name={"JavaScript"} selectedNum={selectedNum} num={1} />
          <Language name={"CSS"} selectedNum={selectedNum} num={2} />
          <Language name={"HTML"} selectedNum={selectedNum} num={3} />
          <Language name={"NodeJS"} selectedNum={selectedNum} num={4} />
          <Language name={"Git"} selectedNum={selectedNum} num={5} />
          <Language name={"ReactJS"} selectedNum={selectedNum} num={6} />
          <Language name={"ReduxJS"} selectedNum={selectedNum} num={7} />
          <Language name={"NextJS"} selectedNum={selectedNum} num={8} />
          <Language name={"MongoDB"} selectedNum={selectedNum} num={9} />
          <Language name={"REST"} selectedNum={selectedNum} num={10} />
          <Language name={"npm"} selectedNum={selectedNum} num={11} />
        </div>
        <div className=' flex flex-col text-xl w-32'>
          <Language name={"SASS"} selectedNum={selectedNum} num={12} />
          <Language name={"JSON"} selectedNum={selectedNum} num={13} />
          <Language name={"TailwindCSS"} selectedNum={selectedNum} num={14} />
          <Language name={"Styled Components"} selectedNum={selectedNum} num={15} />
        </div>

        <div className=' grid grid-cols-6 ml-12  h-fit '>

          <LanguageLogo selectedNum={selectedNum} num={1} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} />
          <LanguageLogo selectedNum={selectedNum} num={2} imgUrl={"https://png.pngitem.com/pimgs/s/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png"} />
          <LanguageLogo selectedNum={selectedNum} num={3} imgUrl={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"} />
          <LanguageLogo selectedNum={selectedNum} num={4} imgUrl={"https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"} />
          <LanguageLogo selectedNum={selectedNum} num={5} imgUrl={"https://git-scm.com/images/logos/logomark-black@2x.png"} />
          <LanguageLogo selectedNum={selectedNum} num={6} imgUrl={"https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"} />
          <LanguageLogo selectedNum={selectedNum} num={7} imgUrl={"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"} />
          <LanguageLogo selectedNum={selectedNum} num={8} imgUrl={"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"} />
          <LanguageLogo selectedNum={selectedNum} num={9} imgUrl={"https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png"} />
          <LanguageLogo selectedNum={selectedNum} num={10} imgUrl={"https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png"} />
          <LanguageLogo selectedNum={selectedNum} num={11} imgUrl={"https://www.bleepstatic.com/content/posts/2018/07/12/npm.png"} />
          <LanguageLogo selectedNum={selectedNum} num={12} imgUrl={"https://www.seekpng.com/png/detail/377-3772047_sass-logo.png"} />
          <LanguageLogo selectedNum={selectedNum} num={13} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/1200px-JSON_vector_logo.svg.png"} />
          <LanguageLogo selectedNum={selectedNum} num={14} imgUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"} />
          <LanguageLogo selectedNum={selectedNum} num={15} imgUrl={"https://styled-components.com/logo.png"} bg={"bg-stone-800"} />



        </div>

      </div>


    </section>
  )
}

export default SkillsSection