
import { useState } from "react";
import "./App.css";

type Materia = {
  nome: string;
  emoji: string;
  descricao: string;
  cor: string;
  topicos: string[];
};

const materias: Materia[] = [
  {
    nome: "Matemática",
    emoji: "📐",
    descricao: "Aprenda matemática com explicações simples e exercícios práticos.",
    cor: "matematica",
    topicos: ["Operações básicas", "Frações", "Porcentagem", "Equações"],
  },
  {
    nome: "Português",
    emoji: "📚",
    descricao: "Melhore sua leitura, escrita e interpretação de textos.",
    cor: "portugues",
    topicos: ["Interpretação de texto", "Gramática", "Ortografia", "Redação"],
  },
  {
    nome: "Ciências",
    emoji: "🔬",
    descricao: "Explore o corpo humano, a natureza e o universo científico.",
    cor: "ciencias",
    topicos: ["Corpo humano", "Meio ambiente", "Seres vivos", "Energia"],
  },
  {
    nome: "Geografia",
    emoji: "🌎",
    descricao: "Conheça o planeta, os países, os mapas e os diferentes ambientes.",
    cor: "geografia",
    topicos: ["Mapas e regiões", "Clima", "Países e continentes", "Meio ambiente"],
  },
  {
    nome: "História",
    emoji: "🏛️",
    descricao: "Descubra acontecimentos, povos e civilizações do passado.",
    cor: "historia",
    topicos: ["Antiguidade", "Idade Média", "História do Brasil", "Linha do tempo"],
  },
];

function App() {
  const [tela, setTela] = useState<"login" | "inicio" | "materia">("login");
  const [nomeAluno, setNomeAluno] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [materiaSelecionada, setMateriaSelecionada] =
    useState<Materia | null>(null);
  const [topicoSelecionado, setTopicoSelecionado] = useState("");

  function entrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nome = email.split("@")[0].replace(/[._-]/g, " ");
    setNomeAluno(nome || "Estudante");
    setTela("inicio");
  }

  function abrirMateria(materia: Materia) {
    setMateriaSelecionada(materia);
    setTopicoSelecionado("");
    setTela("materia");
  }

  function sair() {
    setTela("login");
    setEmail("");
    setSenha("");
    setNomeAluno("");
    setMateriaSelecionada(null);
  }

  if (tela === "login") {
    return (
      <main className="login-page">
        <section className="login-card">
          <div className="login-logo">A+</div>
          <p className="etiqueta">EDUCAÇÃO PARA TODOS</p>
          <h1>Bem-vindo ao Aprende+</h1>
          <p className="login-description">
            Seu espaço para aprender, praticar e descobrir coisas novas.
          </p>

          <form onSubmit={entrar}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />

            <button className="botao-principal" type="submit">
              Entrar na plataforma
            </button>
          </form>

          <p className="login-aviso">
            Um lugar para aprender no seu ritmo. 💚
          </p>
        </section>
      </main>
    );
  }

  if (tela === "materia" && materiaSelecionada) {
    return (
      <div className="app-page">
        <header className="topbar">
          <button className="logo-button" onClick={() => setTela("inicio")}>
            <span className="mini-logo">A+</span> Aprende+
          </button>
          <button className="botao-sair" onClick={sair}>
            Sair
          </button>
        </header>

        <main className="conteudo materia-page">
          <button className="botao-voltar" onClick={() => setTela("inicio")}>
            ← Voltar para as matérias
          </button>

          <section className={`materia-banner ${materiaSelecionada.cor}`}>
            <span className="materia-emoji grande">
              {materiaSelecionada.emoji}
            </span>
            <p className="etiqueta">SUA ÁREA DE ESTUDOS</p>
            <h1>{materiaSelecionada.nome}</h1>
            <p>{materiaSelecionada.descricao}</p>
          </section>

          <section className="topicos-section">
            <p className="etiqueta">VAMOS APRENDER?</p>
            <h2>Escolha um conteúdo</h2>
            <p className="texto-suave">
              Selecione um assunto para começar a estudar.
            </p>

            <div className="topicos-grid">
              {materiaSelecionada.topicos.map((topico, indice) => (
                <button
                  className={`topico-card ${
                    topicoSelecionado === topico ? "topico-ativo" : ""
                  }`}
                  key={topico}
                  onClick={() => setTopicoSelecionado(topico)}
                >
                  <span className="numero-topico">
                    {String(indice + 1).padStart(2, "0")}
                  </span>
                  <span>{topico}</span>
                  <span className="seta">→</span>
                </button>
              ))}
            </div>

            {topicoSelecionado && (
              <div className="atividade-box">
                <p className="etiqueta">CONTEÚDO SELECIONADO</p>
                <h3>{topicoSelecionado}</h3>
                <p>
                  Você escolheu este assunto! Aqui poderão ser adicionadas
                  videoaulas, resumos, materiais de leitura e exercícios.
                </p>
                <p className="texto-suave">
                  Esta é uma área demonstrativa. O material de estudo ainda
                  precisa ser cadastrado.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-page">
      <header className="topbar">
        <button className="logo-button" onClick={() => setTela("inicio")}>
          <span className="mini-logo">A+</span> Aprende+
        </button>

        <div className="usuario-menu">
          <span className="avatar">
            {nomeAluno.charAt(0).toUpperCase()}
          </span>
          <span className="nome-usuario">{nomeAluno}</span>
          <button className="botao-sair" onClick={sair}>
            Sair
          </button>
        </div>
      </header>

      <main className="conteudo">
        <section className="boas-vindas">
          <div>
            <p className="etiqueta">ODS 4 · EDUCAÇÃO DE QUALIDADE</p>
            <h1>Olá, {nomeAluno}! 👋</h1>
            <p>
              Aprender pode ser mais fácil quando você tem o apoio certo.
              Vamos estudar hoje?
            </p>
            <a href="#materias" className="botao-principal link-botao">
              Explorar matérias ↓
            </a>
          </div>
          <div className="boas-vindas-ilustracao">📖</div>
        </section>

        <section id="materias" className="materias-section">
          <p className="etiqueta">SEU ESPAÇO DE APRENDIZAGEM</p>
          <h2>O que vamos estudar?</h2>
          <p className="texto-suave">
            Escolha uma matéria e aprenda no seu próprio ritmo.
          </p>

          <div className="materias-grid">
            {materias.map((materia) => (
              <button
                className="materia-card"
                key={materia.nome}
                onClick={() => abrirMateria(materia)}
              >
                <span className={`materia-icone ${materia.cor}`}>
                  {materia.emoji}
                </span>
                <h3>{materia.nome}</h3>
                <p>{materia.descricao}</p>
                <span className="card-link">Estudar agora →</span>
              </button>
            ))}
          </div>
        </section>

        <section className="objetivo-box">
          <span>🌱</span>
          <div>
            <h2>Aprender transforma vidas</h2>
            <p>
              O Aprende+ contribui com a ODS 4, incentivando uma educação
              inclusiva, acessível e de qualidade para todos.
            </p>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <strong>Aprende+</strong>
        <p>Conhecimento para todos. Educação para o futuro.</p>
      </footer>
    </div>
  );
}

export default App;