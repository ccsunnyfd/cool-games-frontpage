import Header from './header'
import Populars from './populars'
import GameSliders from './game-sliders'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center p-24">
    <>
      <Header />
      <Populars />
      <GameSliders />
    </>
  )
}
