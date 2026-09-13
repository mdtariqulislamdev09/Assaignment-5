
import './App.css'
import { Nav } from './component/nav'
import { Banner } from './component/banner'
import { Suspense } from 'react'
import type { ITechnologies } from './type/technologieType'
import Technologies from './component/technologies/technologies'
import { useState } from 'react'
import { Footer } from './component/footer'


const technologiesFetch = async (): Promise<ITechnologies[]> => {
  const res = await fetch('./data.json')
  const data = await res.json()
  return data
}


function App() {
const [technologiesPromise] = useState(()=> technologiesFetch());
 

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies  technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
