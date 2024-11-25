import Tabel from "./components/Main/Table"
import CartsSection from "./components/Main/CartsSection";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-dark-200">
      <Sidebar />
      <main className="w-full min-h-screen md:pl-[320px] lg:pl-[18rem]">
        <Container className="mt-7">
          <CartsSection />
          <Tabel />
        </Container>
      </main>
    </div>
  );
}

export default App;
