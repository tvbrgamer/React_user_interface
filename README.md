# 👥 User Management System | Sistema de Cadastro de Usuários

Aplicação web moderna e responsiva para cadastro e gerenciamento de usuários, consumindo uma API REST.

> Projeto desenvolvido com foco em React.js, hooks, roteamento dinâmico e estilização avançada com Styled Components.

---

## 🚀 Preview do Projeto

Interface intuitiva para cadastro de usuários com listagem dinâmica, permitindo a visualização e exclusão de registros em tempo real.

---

## 🧠 Sobre o Projeto

Este projeto foi desenvolvido para praticar:

* **React Hooks**: Uso estratégico de `useRef` para formulários e `useEffect` para integração com API.
* **Styled Components**: Criação de interfaces modernas via CSS-in-JS.
* **Programação Assíncrona**: Gerenciamento de requisições HTTP com `Axios`.
* **React Router DOM**: Navegação entre páginas (SPA) sem recarregamento do navegador.
* **Responsividade**: Design fluido que se adapta a diferentes resoluções.

---

## 🛠️ Tecnologias Utilizadas

* **React.js** (Vite)
* **JavaScript** (ES6+)
* **Styled Components** (Estilização)
* **Axios** (Consumo de API)
* **React Router DOM** (Navegação)
* **API de Gerenciamento**: Conexão com banco de dados via serviço externo.

---

## 📂 Estrutura do Projeto

```text
public/
 ├── favicon.svg
 └── icons.svg
src/
 ├── assets/          # Imagens e ícones (hero, trash, users)
 ├── components/      # Componentes reutilizáveis (Button, TopBackground)
 ├── pages/           # Telas da aplicação (Home e ListUsers)
 ├── services/        # Configuração da API (api.js)
 ├── styles/          # Temas e Estilos globais (GlobalStyles.js)
 ├── main.jsx         # Ponto de entrada
 └── routes.jsx       # Configuração de rotas
```

---

## ⚙️ Como Funciona

1. **Cadastro**: O usuário preenche o formulário na página inicial (`Home`). Os dados são capturados de forma eficiente através do hook `useRef`, evitando renderizações desnecessárias.
2. **Integração**: Ao clicar em cadastrar, a aplicação utiliza o **Axios** para enviar uma requisição `POST` para a API.
3. **Navegação**: Após o sucesso, o **React Router** redireciona o usuário para a tela de listagem.
4. **Gerenciamento**:
   * A tela `ListUsers` consome a API (`GET`) assim que é carregada via `useEffect`.
   * É possível excluir usuários em tempo real através do botão de lixeira, que dispara um método `DELETE`.

---

## 📱 Responsividade

O layout foi planejado para ser "Mobile First" e adaptável:
* **Flexbox & Grid**: Utilizados para garantir que os cards de usuários se organizem bem em qualquer tamanho de janela.
* **Componentização**: Estilos dinâmicos com **Styled Components** que facilitam a manutenção do design responsivo.

---

## 💡 Aprendizados Técnicos

✔ **Manipulação de DOM Virtual**: Entendimento profundo de como o React lida com atualizações de interface.<br>
✔ **Consumo de APIs REST**: Experiência prática com métodos HTTP (GET, POST, DELETE).<br>
✔ **Hooks Avançados**: Diferença prática entre `useState` e `useRef` para performance.<br>
✔ **Clean Code**: Separação de rotas, serviços e componentes para um projeto escalável.<br>

---
