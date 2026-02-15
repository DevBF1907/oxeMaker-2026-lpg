# ÔXE-MAKER-2026 Landing Page

Bem-vindo ao repositório da Landing Page do evento ÔXE-MAKER-2026! Este projeto é uma página única desenvolvida para apresentar o evento, seus objetivos, programação, patrocinadores e muito mais, com um design moderno e responsivo.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

*   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite**: Ferramenta de build de nova geração que oferece uma experiência de desenvolvimento extremamente rápida.
*   **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
*   **Tailwind CSS**: Framework CSS utility-first para estilização rápida e eficiente, permitindo a construção de designs personalizados diretamente no markup.

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e a escalabilidade, seguindo um padrão baseado em componentes e funcionalidades:

```
.
├── public/                     # Arquivos estáticos (imagens, etc.)
│   ├── logo-oxe-2026-Photoroom.png
│   └── logo.png
├── src/
│   ├── components/             # Componentes React
│   │   ├── common/             # Componentes de uso geral
│   │   │   ├── Countdown.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── Navbar.tsx
│   │   ├── About/              # Componente da seção "Sobre o Evento"
│   │   │   └── About.tsx
│   │   ├── Features/           # Componente da seção de "Atividades"
│   │   │   └── Features.tsx
│   │   ├── FinalCTA/           # Componente da seção de "Chamada para Ação Final"
│   │   │   └── FinalCTA.tsx
│   │   ├── Footer/             # Componente do rodapé
│   │   │   └── Footer.tsx
│   │   ├── Gallery/            # Componente da galeria de fotos
│   │   │   └── Gallery.tsx
│   │   ├── Hero/               # Componente da seção principal (Hero)
│   │   │   └── Hero.tsx
│   │   ├── Schedule/           # Componente da programação do evento
│   │   │   └── Schedule.tsx
│   │   └── Sponsors/           # Componente dos patrocinadores
│   │       └── Sponsors.tsx
│   ├── App.tsx                 # Componente raiz da aplicação
│   ├── constants.tsx           # Arquivo com dados constantes da aplicação (programação, recursos, etc.)
│   ├── index.css               # Estilos globais (geralmente Tailwind base/components/utilities)
│   ├── index.html              # Arquivo HTML principal
│   ├── index.tsx               # Ponto de entrada do JavaScript/TypeScript
│   ├── metadata.json           # Metadados do projeto
│   ├── package-lock.json       # Bloqueio de dependências
│   ├── package.json            # Definições do projeto e scripts
│   ├── README.md               # Este arquivo
│   ├── tsconfig.json           # Configurações do TypeScript
│   ├── types.ts                # Definições de tipos para o TypeScript
│   └── vite.config.ts          # Configurações do Vite
```

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

### 1. Clonar o Repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd ôxe-maker-2026-landing-page
```

### 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Rodar o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O servidor de desenvolvimento será iniciado, e você poderá acessar a aplicação em `http://localhost:5173` (ou outra porta disponível).

### 4. Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados na pasta `dist/`.

## Componentes Chave

*   **`App.tsx`**: O componente principal que orquestra todas as seções da landing page.
*   **`components/common/Navbar.tsx`**: A barra de navegação superior do site.
*   **`components/Hero/Hero.tsx`**: A seção de destaque inicial da página.
*   **`components/About/About.tsx`**: Informações sobre o evento.
*   **`components/Features/Features.tsx`**: Detalhes sobre as atividades e o que esperar do evento.
*   **`components/Gallery/Gallery.tsx`**: Uma galeria de fotos de edições anteriores ou inspirações.
*   **`components/Schedule/Schedule.tsx`**: O cronograma detalhado do evento.
*   **`components/Sponsors/Sponsors.tsx`**: Exibição dos patrocinadores do evento.
*   **`components/FinalCTA/FinalCTA.tsx`**: Uma chamada final para ação.
*   **`components/Footer/Footer.tsx`**: O rodapé da página.
*   **`components/common/Logo.tsx`**: Componente reutilizável para o logo do evento.
*   **`components/common/Countdown.tsx`**: Componente que exibe uma contagem regressiva para a data do evento.

## Gerenciamento de Dados e Tipagem

*   **`constants.tsx`**: Este arquivo centraliza todas as constantes e dados que são utilizados em várias partes da aplicação, como a data do evento, a lista de atividades, patrocinadores e itens da galeria.
*   **`types.ts`**: Contém as definições de interface TypeScript para os dados (`ScheduleItem`, `Sponsor`, `Feature`, `GalleryItem`), garantindo tipagem forte e maior segurança no desenvolvimento.

## Estilização

A estilização do projeto é feita com **Tailwind CSS**, que permite aplicar estilos de forma declarativa diretamente no JSX dos componentes. Isso agiliza o desenvolvimento e mantém a consistência visual.

---

Este README visa fornecer uma visão geral completa do projeto e facilitar a colaboração.
