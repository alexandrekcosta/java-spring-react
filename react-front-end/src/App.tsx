import NotificationBtn from "./components/notification-btn"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <main>

      <section id="sales">

        <div className="dsmeta-container">
            <Header/>
          <div className="dsmeta-card">
            <SalesCard/>
            
          </div>
        </div>
      </section>
    </main>




  )
}

export default App
