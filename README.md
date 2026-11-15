# DevBurger — Frontend

Interface de usuário do sistema de delivery **DevBurger**, com autenticação, 
listagem de produtos, carrinho, checkout com pagamento e gestão de pedidos.

> 🚧 Projeto em evolução — deploy e testes automatizados em andamento.

## 🛠️ Stack

**Core:** React 18 · Vite · JavaScript (ES6+)

**Estilização:** Styled Components · Material UI (MUI) · Phosphor Icons

**Roteamento:** React Router DOM

**Formulários e validação:** React Hook Form · Yup

**Consumo de API:** Axios

**Pagamentos:** Stripe

**UI/UX:** React Toastify (notificações) · Swiper · React Multi Carousel · React Select

**Qualidade de código:** ESLint · Prettier

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Yarn ou npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/DenisAndrade007/dev-burger-frontend.git
cd dev-burger-frontend

# Instale as dependências
yarn install
# ou: npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com a URL da sua API

# Rode o projeto
yarn dev
# ou: npm run dev
