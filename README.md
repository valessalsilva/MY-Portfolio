# Personal Portfolio 🚀

Este projeto é meu **portfólio pessoal**, desenvolvido com **React + Vite**, focado em performance, organização de código e uma interface moderna.

---

## 🧩 Tecnologias utilizadas

* **React**
* **Vite** (com HMR – Hot Module Replacement)
* **TypeScript**
* **Tailwind CSS**
* **ESLint**

---

## ⚡ Sobre o Vite

Este projeto utiliza o Vite para um ambiente de desenvolvimento rápido e otimizado.

Atualmente, dois plugins oficiais do React estão disponíveis:

* **@vitejs/plugin-react** → Usa **Babel** (ou *oxc* no rolldown-vite) para Fast Refresh.
* **@vitejs/plugin-react-swc** → Usa **SWC**, oferecendo builds ainda mais rápidos.

---

## 🧠 Compilador React

O **React Compiler** não vem habilitado por padrão neste template, pois pode impactar o desempenho durante o desenvolvimento e o build.

Caso deseje utilizá-lo, consulte a documentação oficial do React.

---

## 🛠️ ESLint e boas práticas

Para aplicações em produção, é altamente recomendado:

* Uso de **TypeScript**
* Regras de lint que considerem tipos
* Integração com **typescript-eslint**

Essas práticas ajudam a manter o código mais seguro, legível e escalável.

---

## ▶️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

---

## 🌐 Deploy

O projeto pode ser facilmente publicado usando plataformas como:

* **Vercel**
* **Netlify**
* **GitHub Pages**

---

## ✉️ Configurar EmailJS (Envio de mensagens pelo formulário)

Siga estes passos para permitir o envio de mensagens pelo formulário do portfólio:

1. Crie uma conta em https://www.emailjs.com/ e faça login.
2. Adicione um **Service** (por exemplo, Gmail, Outlook ou outro provedor). Anote o **Service ID** (ex.: `service_xxxxx`).
3. Crie um **Template** com os campos que você usará (ex.: `from_name`, `reply_to`, `message`). Anote o **Template ID** (ex.: `template_xxxxx`).
4. Obtenha sua **Public Key** (às vezes chamada de User ID/Public Key) no painel do EmailJS.
5. No seu projeto, defina as variáveis de ambiente no arquivo `.env` ou via painel do provedor (Vercel/Netlify):

```dotenv
VITE_EMAILJS_PUBLIC_KEY=seu_public_key_aqui
VITE_EMAILJS_SERVICE_ID=service_XXXXXXX
VITE_EMAILJS_TEMPLATE_ID=template_XXXXXXX
```

6. Confirme que os nomes dos campos do template (`{{from_name}}`, `{{reply_to}}`, `{{message}}`) batem com os `templateParams` enviados no `Contact.jsx`.

Nota: Alguns templates usam outras variáveis como `{{name}}`, `{{email}}` ou `{{title}}`. O formulário foi atualizado para enviar esses aliases também (`name`, `email`, `title`), então o template funcionará mesmo que use essas variações.

7. Teste localmente (`npm run dev`) e veja o console / aba Network para diagnosticar erros. No painel do EmailJS você também pode ver logs de envio.

> Dica: No código, o `publicKey` precisa ser um string (ex.: `emailjs.init(YOUR_PUBLIC_KEY)`), e também pode ser passado como 4º argumento para `emailjs.send`.

---

## 📌 Objetivo

Este portfólio tem como objetivo apresentar meus projetos, habilidades técnicas e evolução como desenvolvedora.

---

✨ Desenvolvido por **Valessa Lopes**
