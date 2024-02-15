# NF APP

APP responsável para gerenciamento de despesas dos Empreendedores formalizados como Microempreendedores Individuais que buscam uma forma automática de organizar suas Receitas (geração de Notas Fiscais) para evitar surpresas com pagamento de impostos ao final do ano.

## Funcionalidades

- Gerenciar Notas Fiscais
- Gerenciar Despesas
- Analise de Dashboard

## Tecnologias

- NodeJS ([NestJS](https://nestjs.com/))
- Javascript ([ReactJS](https://pt-br.legacy.reactjs.org/))
- mongoDB ([moongose](https://mongoosejs.com/))
- Monorepo
- yarn
- Docker

## Rodando localmente

O APP foi construido separando o backend do frontend, então para executar será preciso iniciar as aplicaçoes individualmente.

Clone o projeto

```bash
  git clone https://git.vibbra.com.br/rafael-1657549296/news-app.git
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

[Documentação](https://news-app-backend.rbmdev.com.br/api)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Backend:

`NEWS_API_KEY`

Frontend:

`VITE_API_URL`
