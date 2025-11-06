
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar/>
      <main className='cards' style={{borderRadius:"12px", height: "80vh"}}>
        <Card title={"Card 1"} desc={"This is card 1 disc"}/>
        <Card title="Card 2" desc="This is card 2 disc"/>
        <Card title="Card 3" desc="This is card 3 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
        <Card title="Card 4" desc="This is card 4 disc"/>
      </main>
      <Footer/>
    </>
  )
}

export default App
