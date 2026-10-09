# Plataforma gratuita de Português e Matemática

## ODS
<img width="224" height="224" alt="ods" src="https://github.com/user-attachments/assets/4e51dc99-cecc-45c2-a1a6-cab90a0336d6" /><br>
## Educação de Qualidade
Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos.

## Tabela de Conteúdos

1. [Problema](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#problema)
2. [Público-Alvo](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#p%C3%BAblico-alvo)
3. [Benchmarking](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#benchmarking)
4. [Requisitos](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#requisitos)
5. [User Stories](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#user-stories)
6. [Funcionalidades](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#funcionalidades)
7. [Tecnologias Utilizadas](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#tecnologias-utilizadas)
8. [Framework Utilizado](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#framework-utilizado)
9. [Como Executar](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#como-executar)
10. [Protótipo](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#prot%C3%B3tipo)
11. [Aplicação](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#aplica%C3%A7%C3%A3o)
12. [Processo de Desenvolvimento](https://github.com/TuannyThomazelli/Hackathon/blob/main/README.md#processo-de-desenvolvimento)

## Problema
A plaforma oferece aulas gratuitas de português e matemática de ensino básico gratuito, ajudando pessoas que têm pouco ou que não tiveram acesso à educação básica.

## Público-alvo
A plataforma têm como público-alvo estudantes do Ensino básico brasileiro com acesso à internet, especialmente da faixa etária entre 6 a 12 anos, mas acessível para públicos de todas as idades

## Proposta de Valor
O ensino básico configura um pilar fundamental do desenvolvimento da sociedade. A plataforma propõe democratizar o acesso a educação básica de matemática e português com ensino gratuito e de qualidade.

## Benchmarking

### 1. Introdução

Esta etapa de benchmark tem como objetivo analisar concorrentes e plataformas de referência no setor educacional e tecnológico. A partir da análise de pontos fortes, usabilidade e modelos de engajamento dessas plataformas, podemos extrair insights valiosos para definir os diferenciais, a arquitetura de informação e a experiência do usuário (UX/UI) do *Aprendê +*.

---

### 2. Matriz de Análise Comparativa por Critérios

Para entender o posicionamento e o valor que cada plataforma selecionada entrega, analisamos as cinco referências sob quatro pilares fundamentais:

| Plataforma | Experiência de UX/UI | Engajamento & Retenção | Acessibilidade & Alcance | Modelo de Conteúdo |
| --- | --- | --- | --- | --- |
| *Khan Academy* | Minimalista, focada em produtividade acadêmica. | Alta (sistema de pontos, emblemas e níveis). | Boa adaptabilidade mobile e web. | Foco em exatas e ciências, altamente estruturado. |
| *MEC / Rede Enem* | Institucional, direta e formal. | Baixa/Moderada (foco na obrigatoriedade do vestibular). | Foco em redes públicas e estudantes de baixa renda. | Voltado para o Ensino Médio e exames nacionais. |
| *Duolingo* | Altamente lúdica, colorida e interativa. | Altíssima (streaks, notificações, lembretes diários). | Excelente em dispositivos móveis (mobile-first). | Micro-aulas (pílulas), idiomas e habilidades rápidas. |
| *IFRS* | Tradicional, estilo ambiente virtual de aprendizagem (AVA). | Moderada (foco na conclusão do curso para certificação). | Foco institucional, requer bom suporte de leitura. | Cursos abertos (MOOCs) de extensão e qualificação. |
| *Fundação Bradesco* | Profissional, organizada e corporativa. | Moderada (foco em capacitação profissional e empregabilidade). | Foco em inclusão digital no mercado de trabalho. | Trilhas voltadas para tecnologia, administração e inovação. |

---

### 3. Análise Detalhada dos Insights Extraídos

#### A. Khan Academy: Lições sobre Estruturação de Progresso e Autonomia

* *O problema que resolve:* Alunos frequentemente desistem por não saberem qual o próximo passo lógico em disciplinas complexas.
* *A solução mapeada:* O uso de mapas de progresso visuais em árvore (nós conectados). O aluno enxerga claramente o que já dominou, o que está desbloqueado e o que exige pré-requisitos.
* *Aplicação no Aprendê +:* Implementar uma visão de "Trilha do Saber", onde o estudante visualiza sua jornada de forma gráfica, reduzindo a ansiedade e aumentando a sensação de conquista a cada aula finalizada.

#### B. MEC / Rede Enem: Acolhimento e Democratização do Saber

* *O problema que resolve:* A barreira de acesso tecnológica e a complexidade de linguagem de conteúdos acadêmicos tradicionais.
* *A solução mapeada:* Uso de linguagem clara, direta e voltada para a realidade de estudantes de escolas públicas, além de arquitetura leve que consome poucos dados móveis.
* *Aplicação no Aprendê +:* Garantir que a plataforma adote uma interface responsiva otimizada para conexões móveis limitadas e traga uma comunicação acolhedora, reforçando a proposta de multiplicar o aprendizado.

#### C. Duolingo: A Ciência do Hábito e Microaprendizagem (Microlearning)

* *O problema que resolve:* A falta de tempo e a dificuldade dos usuários em manter a constância nos estudos de longo prazo.
* *A solução mapeada:* Divisão de conteúdos densos em módulos de 5 a 10 minutos diários, reforçados por gatilhos comportamentais (como contadores de dias seguidos estudando e alertas amigáveis).
* *Aplicação no Aprendê +:* Permitir que aulas longas sejam divididas em "pílulas de conhecimento" e introduzir elementos leves de incentivo à constância (como metas semanais de estudo), sem a pressão de uma nota escolar tradicional.

#### D. IFRS e Fundação Bradesco: Credibilidade, Organização de Catálogo e Empregabilidade

* *O problema que resolve:* A necessidade de organizar dezenas de cursos variados sem deixar o usuário perdido e a importância de gerar valor real para a vida profissional ou pessoal do aluno.
* *A solução mapeada:* Sistemas de filtros avançados (por eixo temático, carga horária e nível) combinados com um painel de controle (Dashboard) centralizado onde o histórico e os certificados ficam acessíveis.
* *Aplicação no Aprendê +:* Desenvolver um catálogo inteligente com tags e filtros rápidos, além de um painel do estudante limpo onde seja possível acompanhar o andamento dos cursos e o histórico de participação.

---

### 4. Síntese Estratégica: O Diferencial do Aprendê +

Cruzando os aprendizados dessas cinco referências, o *Aprendê +* posiciona-se não apenas como um repositório de vídeos ou textos, mas como um ecossistema integrador que une:

1. *A acessibilidade e foco social* inspirados no MEC e na Fundação Bradesco.
2. *A clareza de trilhas e o progresso visual* do Khan Academy e IFRS.
3. *A dinamicidade e o incentivo ao hábito diário* inspirados na agilidade do Duolingo.

---

## ⚙️ Requisitos Funcionais

| Código | Requisito | Descrição |
|---|---|---|
| RF01 | Login | O sistema deve permitir que usuários cadastrados acessem a plataforma por meio de suas credenciais. |
| RF02 | Página inicial | O sistema deve apresentar uma página inicial com informações sobre a plataforma e atalhos para suas funcionalidades. |
| RF03 | Visualização das disciplinas | O sistema deve disponibilizar uma área com as disciplinas oferecidas para estudo. |
| RF04 | Acesso aos conteúdos | O sistema deve permitir que o estudante acesse conteúdos educacionais de cada disciplina. |
| RF05 | Navegação entre disciplinas | O sistema deve permitir que o usuário selecione uma disciplina e navegue pelos conteúdos correspondentes. |
| RF06 | Perfil do usuário | O sistema deve permitir que o usuário visualize suas informações básicas de cadastro. |
| RF07 | Encerramento da sessão | O sistema deve permitir que o usuário saia da conta de forma segura. |
| RF08 | Retorno à navegação | O sistema deve permitir que o estudante retorne às áreas anteriores, como a página inicial e a lista de disciplinas. |
| RF09 | Acesso aos recursos educacionais | O sistema deve disponibilizar os recursos de aprendizagem de maneira organizada, facilitando a localização dos materiais de estudo. |
| RF10 | Botão de voltar | O sistema deve disponibilizar um botão para que o usuário retorne à página anterior. |

# 📋 Requisitos Não Funcionais — Aprende+

Os requisitos não funcionais definem os critérios de qualidade e funcionamento da plataforma Aprende+.

| Código | Requisito | Descrição |
|---|---|---|
| RNF01 | Usabilidade | A interface deve ser simples e intuitiva, permitindo que os estudantes utilizem as funcionalidades com facilidade. |
| RNF02 | Responsividade | A plataforma deve adaptar sua interface a computadores, tablets e celulares. |
| RNF03 | Acessibilidade | A interface deve utilizar textos legíveis, contraste adequado e elementos de navegação acessíveis. |
| RNF04 | Desempenho | As páginas e os conteúdos devem carregar em tempo adequado, evitando esperas desnecessárias. |
| RNF05 | Compatibilidade | A plataforma deve funcionar nos principais navegadores, como Google Chrome, Microsoft Edge e Mozilla Firefox. |
| RNF06 | Manutenibilidade | O código deve ser organizado em componentes e arquivos que facilitem futuras correções e melhorias. |
| RNF07 | Consistência visual | As páginas devem manter padrões de cores, tipografia, espaçamento, botões e elementos visuais. |
| RNF08 | Facilidade de aprendizagem | As funcionalidades devem ser compreensíveis para estudantes com diferentes níveis de familiaridade com a tecnologia. |
| RNF09 | Escalabilidade | A estrutura deve permitir a inclusão futura de novas disciplinas, conteúdos e funcionalidades sem exigir a reconstrução completa da plataforma. |
| RNF10 | Organização dos conteúdos | Os conteúdos educacionais devem ser apresentados de maneira organizada, facilitando a leitura e a navegação dos estudantes. |



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
