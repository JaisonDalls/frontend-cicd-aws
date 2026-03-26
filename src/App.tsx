import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';

function App() {
  return (
    <div className="flex min-h-screen bg-bg-dark text-white font-sans selection:bg-primary/30">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        <Header />
        <div className="p-8 flex-1 animate-in fade-in duration-700">
          <section className="bg-bg-card/50 backdrop-blur-xl p-10 rounded-3xl border border-white/5 max-w-4xl shadow-2xl shadow-black/50">
            <h1 className="text-4xl font-extrabold mb-4 bg-accent-gradient bg-clip-text text-transparent">
              Bem-vindo ao SysFull
            </h1>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
