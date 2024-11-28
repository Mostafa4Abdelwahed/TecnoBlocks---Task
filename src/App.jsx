import Tabel from "./components/Main/Table";
import CartsSection from "./components/Main/CartsSection";
import Navbar from "./components/Navbar"
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import { SidebarContext } from "./context/sidebarContext";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <SidebarContext.Provider value={{ show, setShow }}>
      <div className="bg-dark-200 flex">
        <Sidebar />
        <main className="w-full min-h-screen pl-[70px] lg:pl-0">
          <Navbar />
          <Container className="mt-7">
            <CartsSection />
            <Tabel />
          </Container>
        </main>
      </div>
    </SidebarContext.Provider>
  );
}

export default App;
