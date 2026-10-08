
import "./App.css";

function App() {
  const materias = [
    "📐 Matemática",
    "📚 Português",
    "🔬 Ciências",
    "🌎 Geografia",
    "🏛️ História"
  ];

  return (
    <div>
      <header>
        <h2>Aprende+</h2>
        <p>ODS 4 — Educação de Qualidade</p>
      </header>

      <main>
        <h1>Aprender transforma vidas!</h1>

        <p>
          Uma plataforma gratuita para ajudar estudantes
          a aprender e melhorar seus conhecimentos.
        </p>

        <h2>Escolha uma matéria</h2>

        <div className="materias">
          {materias.map((materia) => (
            <div className="card" key={materia}>
              <h3>{materia}</h3>

              <button
                onClick={() =>
                  alert(`Vamos estudar ${materia}!`)
                }
              >
                Estudar
              </button>
            </div>
          ))}
        </div>

        <section>
          <h2>Nosso objetivo</h2>
          <p>
            Oferecer acesso ao conhecimento e incentivar
            uma educação inclusiva e de qualidade para todos.
          </p>
        </section>
      </main>

      <footer>
        <p>Aprende+ | Projeto ODS 4</p>
      </footer>
    </div>
  );
}

export default App;