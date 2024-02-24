<h1 align="center">
<br/>
BuscaCEP
</h1>

<div align="center">
	  <img alt="GitHub" src="https://img.shields.io/github/license/pedroab0/busca-cep?style=for-the-badge">
	  <img alt="GitHub" src="https://img.shields.io/github/repo-size/pedroab0/busca-cep?style=for-the-badge">
	  <img alt="Github" src="https://img.shields.io/github/last-commit/pedroab0/busca-cep?style=for-the-badge">
	  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/pedroab0/busca-cep?logo=typescript&style=for-the-badge">
	  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedroab0/busca-cep?style=for-the-badge">
</div>

<h4 align="center">🔥 Live demo in link below 🔥</h4>

<div align="center"><a href="https://busca-cep-kv.vercel.app/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo Here" width="120px" /></a></div>



---
## 📑 Índice

<p align="center">
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-como-executar">Como executar</a> • 
  <a href="#-lighthouse-score">Lighthouse</a> • 
 <a href="#-autor">Autor</a>
</p>

---

##  🧪 Tecnologias

  

Esse projeto foi desenvolvido com as seguintes tecnologias:



<div align="center">
<a href="https://www.npmjs.com/">
		  <img alt="Acessar site do NPM" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
	</a>
	<a href="https://www.typescriptlang.org/">
		  <img alt="Acessar site do TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
	</a>
	<a href="https://reactjs.dev/">
		  <img alt="Acessar site do React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
	</a>
	<a href="https://nextjs.org/">
		  <img alt="Acessar site do NextJS" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
	</a>
	<a href="https://storybook.js.org/">
		<img alt="Acessar site do Storybook" src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white">
	</a>
	<a href="https://tailwindcss.com/">
		  <img alt="Acessar site do TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
	</a>
</div>

- Bootstrapped com [create next-app](https://nextjs.org/docs)
```bash
$ npx create-next-app@latest
```

#### 📦 Outros pacotes

- [swr](https://swr.vercel.app/pt-BR)
- [react-hook-form](https://react-hook-form.com/)


 ---
## 🎨 Design

Você pode visualizar o design do projeto através do link abaixo:

>Layout
<a href="https://www.figma.com/file/3XFsfW9WfHwlATE9JVC3gn/Teste-T%C3%A9cnico-Kivid">
	  <img alt="Acessar o design no Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</a>

---

##  🚀 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [NPM](https://www.npmjs.com/). 
Além disto, é bom ter um editor, recomendo o:
> <a href="https://code.visualstudio.com/"><img alt="Linkedin Badge" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white&https://code.visualstudio.com/"></a> 


### Executando  

Clone o projeto e acesse  seu diretório.

```bash

$ git clone https://github.com/pedroab0/busca-cep

$ cd busca-cep

```

##### Instale as dependências
```bash
$ npm i
```

##### Iniciar o projeto
```bash
$ npm run dev
```

##### Iniciar o Storybook
```bash
$ npm storybook
```

---

 ### 📘 Decisões Técnicas
<h4>App Router vs Pages Router?<h4/>

Optei pelo app router por ser a configuração recomendada pela Vercel e não ter sido especificado no requisitos.

<h4>TailwindCSS vs styled-components vs Os dois juntos?</h4>

Escolhi apenas o TailwindCSS por estar como um requisito obrigatório apesar de ser possível usar ambos juntos e de eu ter uma proficiência maior com o styled-components

<h4>Revalidação automática do SWR</h4>
Decidi desativar as revalidações automáticas pelo dado trazido ser imutável. Fiz isso usando as options do `useSWR`,  mas poderia também ter tido o mesmo resultado usando o `useImmutableSWR`.

```TS
const { data, isLoading, error } =  useSWR<FetchedAddressInterface, FetchedAddressError>(
formData  ?  `https://brasilapi.com.br/api/cep/v2/${formData}`  :  null, fetcher, {
	revalidateIfStale:  false,
	revalidateOnFocus:  false,
	revalidateOnReconnect:  false
  }
)
```

<h4>Arrow Function Component vs Function Component</h4>
Apesar de ter mais hábito escrevendo componentes com a notação

```TS
export function Home () {}
``` 

Decidi usar as arrows functions  por ter visto que é a preferência do dev front-end que já está no projeto
Mas falo mais um pouco sobre isso em um post que eu fiz no linkedin  <a href="https://www.linkedin.com/posts/pedroab0_os-2-tipos-de-componentes-react-activity-7010694644896280576--WK0?utm_source=share&utm_medium=member_desktop"><img alt="Linkedin Badge" src="https://img.shields.io/badge/-Pedro%20Barbosa-blue?style=for-the-badge&logo=Linkedin&logoColor=white&https://www.linkedin.com/in/pedro-abarbosa"></a>
 
---


## 🧑‍💻 Autor

<div align="center">
   <p align="center">
	<a href="https://www.linkedin.com/in/pedroab0/"><img alt="Linkedin Badge" src="https://img.shields.io/badge/-Pedro%20Barbosa-blue?style=for-the-badge&logo=Linkedin&logoColor=white&https://www.linkedin.com/in/pedro-abarbosa"></a> 
   <a href="mailto:p.brbsa@gmail.com"><img alt="Gmail Badge" src="https://img.shields.io/badge/-p.brbsa@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:p.brbsa@gmail.com"></a> 
</p>
</div>

---

##  📝 Licença
<br/>

<h4 align="center">🚧 🛠️ Em breve... 🛠️🚧</h4>

<br/>

Feito com ❤️ por Pedro Barbosa 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedroab0/)

---