# Desafio Zoox

## Sobre o Projeto

O projeto é um buscador de estados e cidade, para isso foi criado uma API REST capaz de realizar a criação, atualização, exclusão e listagem de estados e cidades. Além disso foi criado uma SPA (Single Page Application) que permite de forma intuitiva a utilização de algumas funções básica da API.

**Tecnologias**: MongoDB - NodeJs (Typescript) - VueJs 2.x (utilizando a [composition-api](https://composition-api.vuejs.org/) + typescript) (Framework JavaScript).

Já exposto, foi utilizado framework VueJs e para inicialização do projeto foi utilizado seu [CLI](https://cli.vuejs.org/).

## Requisitos necessários

É necessário a instalação do NodeJs 12.X e GIT para inicialização do projeto.

- **Instalação do NodeJs:** [Acesse aqui](https://nodejs.org/en/download/) e realize o download do NodeJs 12.X
- **Instalação do GIT:** Realize o download [aqui](https://git-scm.com/downloads) e realize a instalção.

Realizado as configurações vamos para a próxima etapa.

## Incializando o projeto

Acesse o [repositório](https://github.com/lmaiaa/challenge-zoox) do meu desafio

Execute o comando

```
git clone https://github.com/lmaiaa/challenge-zoox.git
```

Acesse a pasta clonada e instale as dependências

```
cd challenge-zoox

npm install

npm run install-dependencies
```

Após isso o projeto está pronto para ser inicializado.
Para inicializar execute o comando:

```
npm start
```

## Projeto inicializado

Ao inicializar o projeto:

- API pode ser acessada em: **http://localhost:3333**
- Client (Frontend) pode ser acessado em: **http://localhost:8080**


## MongoDB

Vale ressaltar a utilização de um Cluster no MongoAtlas nesse projeto. Você pode verificar que há um host no .env no backend. Tais credenciais foi disponibilizada a fim de teste do projeto e ao fim do processo seletivo tal Cluster será excluído.
*Caso queira testar tal repositorío após o fim do processo seletivo, basta reconfigurar o MongoDB informando o seu host nesse .env.* 

## Rotas

A API está por padrão sendo executada na URL:

**Estados**

- GET /state -> Retorna uma lista ordenada com todos os Estados
- GET /state _?name=filter_ -> Retorna uma lista (ordenada) com o(s) Estado(s) filtrado (função like - semelhança)
- PUT /state/_:stateId_ -> Edição de um Estado já existente
- DELETE /state/_:stateId_ -> Exclusão de um Estado já existente

**Cidades**

- GET /city -> Retorna uma lista ordenada com todas as Cidades
- GET /city _?name=filter_ -> Retorna uma lista (ordenada) com a(s) Cidades(s) filtrado (função like - semelhança)
- GET /city/_:stateId_ -> Retorna uma lista ordenada com todas as Cidades referente a um Estado
- GET /city/_:stateId_/_?name=filter_ -> Retorna uma lista (ordenada) com a(s) Cidades(s) filtrada referente a um estado (função like - semelhança)
- PUT /city/_:cityId_ -> Edição de uma Cidade já existente
- DELETE /city/_:cityId_ -> Exclusão de uma Cidade já existente

Para mais informações acesse: **http://localhost:3333/api-docs**
