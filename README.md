# NEWS APP

APP responsável para buscar as ultimas noticias por um tópico especifico.

## Tecnologias

- NodeJS ([NestJS](https://nestjs.com/))
- Javascript ([ReactJS](https://pt-br.legacy.reactjs.org/))
- Monorepo
- yarn
- Docker

## Rodando localmente

O APP foi construido separando o backend do frontend, então para executar será preciso iniciar as aplicaçoes individualmente.

Clone o projeto

```bash
  git clone git@github.com:rbraga23/news-app.git
```

Entre no diretório do projeto

```bash
  cd news-app
```

Instale as dependências

```bash
  yarn install
```

Inicie as aplicações

```bash
  docker compose up
```

Caso preficar rodar cada container individualmente

```bash
  docker compose up <nome_do_serviço>
```

## Documentação

[Documentação](http:localhost:<porta>/api)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Backend:

`NEWS_API_KEY`

Frontend:

`VITE_API_URL`
