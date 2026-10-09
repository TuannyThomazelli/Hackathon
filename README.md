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




# 📚 User Stories — Aprende+

## 🎯 Objetivo

As User Stories descrevem as funcionalidades do Aprende+ a partir da perspectiva dos usuários, apresentando o que eles desejam realizar e qual benefício esperam obter.

## 👤 User Stories

### US01 — Acessar a plataforma
**Como** usuário cadastrado,  
**quero** fazer login na plataforma,  
**para** acessar os recursos educacionais disponíveis.

**Critério de aceitação:**
- O sistema deve disponibilizar campos para e-mail e senha.
- O usuário deve conseguir acessar a plataforma utilizando suas credenciais.

### US02 — Visualizar a página inicial
**Como** estudante,  
**quero** visualizar a página inicial do Aprende+,  
**para** conhecer a plataforma e encontrar suas principais funcionalidades.

**Critério de aceitação:**
- A página inicial deve apresentar informações sobre a plataforma.
- As principais funcionalidades devem estar acessíveis pela navegação.

### US03 — Visualizar as disciplinas
**Como** estudante,  
**quero** visualizar as disciplinas disponíveis,  
**para** escolher a matéria que desejo estudar.

**Critério de aceitação:**
- O sistema deve apresentar as disciplinas disponíveis.
- Cada disciplina deve ser identificada de forma clara.

### US04 — Acessar conteúdos educacionais
**Como** estudante,  
**quero** acessar os conteúdos de uma disciplina,  
**para** aprender e revisar os assuntos estudados.

**Critério de aceitação:**
- O sistema deve permitir o acesso aos conteúdos da disciplina selecionada.
- Os materiais devem ser apresentados de maneira organizada.

### US05 — Navegar entre disciplinas
**Como** estudante,  
**quero** navegar entre as diferentes disciplinas,  
**para** estudar matérias diferentes conforme minha necessidade.

**Critério de aceitação:**
- O usuário deve conseguir selecionar outra disciplina.
- A navegação deve permitir o acesso aos conteúdos correspondentes.


### US06 — Retornar às páginas anteriores
**Como** estudante,  
**quero** retornar às áreas anteriores da plataforma,  
**para** continuar minha navegação sem precisar recomeçar o percurso.

**Critério de aceitação:**
- O sistema deve permitir o retorno à página inicial ou à lista de disciplinas.
- A navegação deve funcionar de maneira clara e intuitiva.

### US07 — Encontrar recursos educacionais
**Como** estudante,  
**quero** visualizar os recursos educacionais de forma organizada,  
**para** encontrar os materiais necessários para meus estudos com facilidade.

**Critério de aceitação:**
- Os recursos devem estar organizados por disciplina ou categoria.
- Os materiais devem ser apresentados de maneira fácil de localizar.

## Funcionalidades
# 📚 Funcionalidades do Sistema — Aprende+

## 1. Página inicial
Apresenta a plataforma Aprende+, suas principais informações e opções de navegação, facilitando o acesso às funcionalidades disponíveis.

## 2. Visualização das disciplinas
Disponibiliza uma área com as disciplinas oferecidas pela plataforma, permitindo que o estudante escolha a matéria que deseja estudar.

## 3. Acesso aos conteúdos educacionais
Permite que os estudantes acessem materiais de estudo relacionados às disciplinas disponíveis, auxiliando na aprendizagem e na revisão dos conteúdos escolares.

## 4. Navegação entre disciplinas
Possibilita a troca entre diferentes disciplinas, permitindo que o estudante explore os materiais de cada matéria de acordo com suas necessidades.

## 5. Retorno à navegação
Permite que o estudante retorne a áreas anteriores, como a página inicial ou a lista de disciplinas, facilitando a movimentação dentro da plataforma.


## Tecnologias Utilizadas 
Vercel | React | Typescript | Stitch | Gemini| ChatGPT

## Framework Utilizado 
- React

## Como Executar 
- git clone https://github.com/TuannyThomazelli/Hackathon.git
- cd Hackathon
- npm install
- npm run dev

## Protótipo 
[Visualizar protótipo]([https://seu-link-do-prototipo.com](https://stitch.google.com/projects/8837065371333945349))

## Aplicação 
[Visualizar Aplicação]([https://seu-link-do-prototipo.com](https://hackathon-j7690zvo9-tuannythomazelli-3003s-projects.vercel.app/))

## Registro de Utilização de IA
Código do React|
Prototipação|
Cards|
Pesquisas adicionais|
Requisitos Funcionais|

## Integrantes
Cauã Felipe Carvalho, Lívia Ghirardi do Amaral, Tuanny Thomazelli
