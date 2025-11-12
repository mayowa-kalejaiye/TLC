import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import GlobalFamily from '@/components/GlobalFamily'
import FeaturedSermon from '@/components/FeaturedSermon'
// import Devotionals from '@/components/Devotionals'
import Ministries from '@/components/Ministries'
import Give from '@/components/Give'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <GlobalFamily />
      <FeaturedSermon />
      {/* <Devotionals /> */}
      <Ministries />
      <Give />
      <Newsletter />
    </>
  )
}
