import Header from '../components/Header'
import Head from 'next/head'
import LandingSection from '../components/LandingSection'
import PortfolioSection from '../components/PortfolioSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import { useRecoilState } from 'recoil'
import { contactState, portfolioState, skillsState } from '@/recoil/atoms'
import { useEffect, useState } from 'react'


export default function Home() {

  const [portfolio] = useRecoilState(portfolioState);
  const [skills] = useRecoilState(skillsState);
  const [contact] = useRecoilState(contactState);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

  }, [scrollPosition])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className=' text-white'>

        <LandingSection />

        <PortfolioSection />

        <SkillsSection />

        <ContactSection />

      </main>

    </>
  )
}
