# Plataforma gratuita de Português e Matemática

## ODS
<img width="224" height="224" alt="ods" src="https://github.com/user-attachments/assets/4e51dc99-cecc-45c2-a1a6-cab90a0336d6" /><br>
## Educação de Qualidade
Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.

## Problema
A plaforma oferece aulas gratuitas de português e matemática de ensino básico gratuito, ajudando pessoas que têm pouco ou que não tiveram acesso à educação básica.

## Público-alvo
A plataforma têm como público-alvo estudantes do Ensino básico brasileiro com acesso à internet, especialmente da faixa etária entre 6 a 12 anos, mas acessível para públicos de todas as idades

## Proposta de Valor
O ensino básico configura um pilar fundamental do desenvolvimento da sociedade. A plataforma propõe democratizar o acesso a educação básica de matemática e português com ensino gratuito e de qualidade.

## Benchmarking

## Requisitos
### Requisitos funcionais
- RF01 — Tela Inicial (Landing Page): O sistema deve apresentar uma página inicial institucional contendo a apresentação do projeto social, a relação com o ODS 4 (Educação de Qualidade) e botões de acesso rápido.
- RF02 — Seleção de Perfil e Login Simulado: O sistema deve permitir que o usuário escolha seu papel de acesso por meio de uma interface de login simulada ("Entrar como Estudante" ou "Entrar como Tutor"), direcionando-o para o painel correspondente sem necessidade de autenticação de backend.
- RF03 — Catálogo de Aulas e Filtros: O sistema deve exibir uma listagem de aulas de reforço disponíveis e permitir filtrar os resultados por disciplina escolar (ex: Matemática, Português, Ciências).
- RF04 — Tela de Detalhes da Aula: O sistema deve exibir informações completas — como descrição, horário, nível e tutor responsável — ao selecionar uma aula específica no catálogo.
- RF05 — Simulação de Inscrição em Aula: O sistema deve permitir que o estudante clique para se inscrever em uma aula e exiba um feedback visual imediato (alerta ou mensagem de confirmação) na tela.
- RF06 — Painel do Estudante (Dashboard): O sistema deve exibir a tela de perfil do aluno contendo um resumo de suas próximas aulas agendadas e atalhos de navegação.
- RF07 — Painel e Cadastro Simulado do Tutor: O sistema deve permitir que o tutor visualize suas aulas oferecidas e utilize um formulário estático para simular o cadastro de uma nova oferta de reforço escolar.
- RF08 — Simulação de Sala de Aula Virtual: O sistema deve prover uma interface com espaço de vídeo simulado, chat de apoio ou área para anotações durante a sessão de estudo.
- RF09 — Tela de Conquistas e Progresso: O sistema deve exibir uma tela de gamificação com medalhas e indicadores de progresso simulados para incentivar o engajamento do estudante.
- RF10 — Central de Ajuda (FAQ): O sistema deve disponibilizar uma tela com perguntas frequentes, informações de suporte e regras de convivência da comunidade.

### Requisitos não-funcionais
- RNF01 — Responsividade Básica: A interface da aplicação deve utilizar um framework de estilos utilitários (como Tailwind CSS ou Flexbox/Grid nativo) para garantir boa visualização e usabilidade em telas de computadores e dispositivos móveis.

- RNF02 — Escolha de Framework Front-end: A aplicação deve ser desenvolvida obrigatoriamente utilizando um framework moderno de mercado de livre escolha da equipe (como React, Vue, Next.js ou Angular).

- RNF03 — Componentização do Código: O código-fonte da aplicação deve ser organizado de forma modular, dividindo elementos repetitivos em componentes reutilizáveis (ex: Navbar, Footer, Cards de Aula).

- RNF04 — Navegação por Rotas (SPA): A aplicação deve implementar uma navegação fluida entre as páginas do protótipo (10 telas) sem necessidade de recarregamento completo da página (Single Page Application).

- RNF05 — Feedback Visual de Ações: O sistema deve fornecer retornos visuais claros e imediatos para o usuário (como mensagens de confirmação ou alertas na tela) ao interagir com botões e formulários.

- RNF06 — Versionamento de Código (Git): O projeto deve ser versionado utilizando o Git, mantendo um histórico claro de commits significativos ao longo do desenvolvimento.

- RNF07 — Deploy Público Acessível: A aplicação final deve ser publicada e estar acessível pela internet por meio de uma plataforma de hospedagem estática gratuita (como Vercel, Netlify ou GitHub Pages).

- RNF08 — Idioma e Padrão de Texto: Todos os textos de interface, botões, títulos e mensagens do sistema devem estar redigidos em português do Brasil (pt-BR).

- RNF09 — Leveza e Desempenho Estático: Como o projeto não utilizará banco de dados complexos ou chamadas pesadas de backend, o tempo de carregamento inicial das páginas deve ser instantâneo.

- RNF10 — Documentação Completa (README): O repositório do projeto deve conter um arquivo README.md estruturado com todas as informações do desafio, ODS, protótipo, requisitos e dados dos integrantes.

## User Stories
### US01 — Tela Inicial
Como visitante da plataforma, quero visualizar uma página inicial clara sobre o projeto de reforço escolar e o ODS 4, para entender rapidamente o propósito social da aplicação e acessar as opções de entrada.

Critérios de Aceitação: A página exibe o banner, a descrição do ODS 4 e botões visíveis de login/navegação.

### US02 — Login Simulado
Como usuário da plataforma, quero selecionar meu perfil de acesso ("Estudante" ou "Tutor") através de uma tela de login simulada, para navegar diretamente pelo painel adequado ao meu papel sem precisar preencher cadastros complexos.

Critérios de Aceitação:
O sistema possui botões de escolha de perfil que redirecionam corretamente para a respectiva interface (Dashboard do aluno ou do tutor).

### US03 — Catálogo e Filtros de Aulas
Como estudante buscando apoio, quero visualizar a lista de aulas disponíveis e filtrá-las por disciplina, para encontrar facilmente o reforço escolar que preciso.

Critérios de Aceitação:
O sistema exibe os cards de aulas e o filtro altera a listagem em tempo real com base na matéria selecionada.

### US04 — Detalhes da Aula
Como estudante interessado em uma matéria, quero clicar em uma aula do catálogo e ver suas informações detalhadas, para saber exatamente o conteúdo abordado, horário e qual tutor ministrará.

Critérios de Aceitação:
Ao selecionar um card de aula, o sistema abre uma tela ou modal com a descrição completa, horário e dados do tutor.

### US05 — Inscrição em Aula
Como estudante, quero clicar em um botão para me inscrever na aula escolhida e receber um aviso visual, para ter certeza de que minha vaga foi garantida.

Critérios de Aceitação:
Ao clicar em "Inscrever-se", uma mensagem de sucesso (feedback visual) é exibida na tela.

### US06 — Painel do Estudante
Como estudante logado, quero acessar um painel (Dashboard) com minhas próximas aulas agendadas e atalhos, para acompanhar minha rotina de estudos de forma organizada.

Critérios de Aceitação:
A tela exibe um resumo das aulas do aluno e links rápidos para navegar pelo sistema.

### US07 — Painel e Cadastro de Aula do Tutor
Como tutor voluntário, quero visualizar minhas ofertas de aulas e usar um formulário simples para simular o cadastro de um novo horário, para disponibilizar apoio pedagógico aos alunos.

Critérios de Aceitação:
O tutor consegue ver suas aulas e preencher um formulário estático que adiciona dinamicamente uma nova aula à lista.

### US08 — Sala de Aula Virtual
Como usuário conectado a uma aula, quero acessar uma interface simulada de videochamada com chat e bloco de anotações, para vivenciar a experiência de uma aula de reforço online.

Critérios de Aceitação:
A tela apresenta uma área simulada de vídeo, um campo de chat/anotação e botões de controle básicos.

### US09 — Tela de Conquistas e Progresso
Como estudante, quero visualizar uma tela com minhas medalhas e progresso nas matérias, para me manter motivado e engajado nos estudos.

Critérios de Aceitação:
A tela exibe distintivos ou barras de progresso simuladas para recompensar a jornada de aprendizado.

### US10 — Central de Ajuda
Como usuário da plataforma,quero acessar uma seção de perguntas frequentes (FAQ) e suporte, para tirar dúvidas sobre como utilizar o site e participar do projeto.

Critérios de Aceitação:
A tela lista perguntas comuns com respostas expansíveis ou estáticas e canais de contato de suporte comunitário.

## Funcionalidades

## Tecnologias Utilizadas

## Framework Utilizado

## Como Executar

## Protótipo

## Aplicação

## Processo de Desenvolvimento

## Integrantes
Cauã Felipe Carvalho, Lívia Ghirardi do Amaral, Tuanny Thomazelli
