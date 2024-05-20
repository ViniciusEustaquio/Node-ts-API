

# Projeto Node com TypeScript

Este é um projeto de servidor HTTP simples desenvolvido com Node.js e TypeScript, sem a utilização de frameworks adicionais. O servidor fornece endpoints para listar podcasts e filtrar episódios específicos.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- TypeScript

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina a porta do servidor:

   ```env
   PORT=3333
   ```

## Execução

### Modo Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento, use:

```bash
npm run start:dev
```

Para iniciar o servidor em modo de desenvolvimento com recompilação automática, use:

```bash
npm run start:watch
```

### Modo Produção

Para compilar o projeto e iniciar o servidor a partir do código compilado, use:

```bash
npm run start:dist
```



## Endpoints

### Listar Podcasts

- **URL:** `/list`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de podcasts.
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "name": "Podcast Example",
      "description": "Description of the podcast"
    },
    ...
  ]
  ```

### Filtrar Episódio

- **URL:** `/episode`
- **Método:** `GET`
- **Descrição:** Filtra e retorna detalhes de um episódio específico com base nos parâmetros de consulta.
- **Parâmetros de Consulta:**
  - `id`: ID do episódio.
- **Resposta:**
  ```json
  {
    "id": 1,
    "title": "Episode Title",
    "description": "Description of the episode"
  }
  ```

## Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com recompilação automática, utilize:

```bash
npm run start:watch
```

## Scripts

- `test`: Comando padrão de teste (ainda não especificado).
- `start:dev`: Inicia o servidor em modo de desenvolvimento diretamente a partir do arquivo TypeScript (`src/index.ts`).
- `start:watch`: Inicia o servidor em modo de desenvolvimento com watch mode, recompilando automaticamente ao detectar mudanças no código (`src/index.ts`).
- `dist`: Compila o código TypeScript para a pasta `dist` usando `tsup`.
- `start:dist`: Compila o código e inicia o servidor a partir do código compilado na pasta `dist`.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona minha feature'`).
4. Faça um push para a branch (`git push origin minha-feature`).
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.
