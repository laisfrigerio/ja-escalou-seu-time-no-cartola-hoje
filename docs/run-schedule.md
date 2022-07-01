# Crontab

No Linux (MacOS também) temos a ferramenta `crontab`. Ela é responsável por gerenciar e executar comandos agendados. Portanto, no nosso cenário vamos configurar a crontab para rodar a cada 15 minutos.

# Bashscript

Nossa configuração na crontab vai executar um arquivo bashscript (`.sh`). Basicamente, o script vai ser responsável por rodar o conteúdo do nosso arquivo `index.js`: 

`node ./src/index.js`

Precisamos nos atentar e usar o caminho absoluto em que o node está instalado e do nosso arquivo `index.js`.

## Caminho absoluto (Absolute Path)

1) Para descobrir em qual pasta seu node está instalado, execute no terminal o seguinte comando:

`which node`

No meu caso, o node está no seguinte caminho:

`/home/lais/.nvm/versions/node/v16.15.0/bin/node`

2) Já para encontrar o caminho absoluto da sua pasta `src`, que está dentro da raiz do projeto (`ja-escalou-seu-time-no-cartola-hoje`), você deve:

- Entrar na pasta `src` com o comando `cd` (change directory):

`cd src`

- Executar o comando `pwd` (path working directory name):

`pwd`

No meu caso, este projeto está na seguinte estrutura de pastas (caminho):

`/home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src`

## Ajustando o arquivo `run-cron.sh`

Ajuste seu script `run-cron.sh` com o caminho absoluto do node e do seu arquivo `index.js`:

```sh
#!/bin/sh
/home/lais/.nvm/versions/node/v16.15.0/bin/node /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/index.js
```

## Configuração Crontab

A configuração tem a seguinte sintaxe:

```
* * * * * caminho-absoluto-do-seu-script.sh
```

Basicamente, da esquerda para direita, cada asterísco representa um período:

[minuto] [hora] [dia do mês] [mês] [dia da semana]

Quando você usa somente `* * * * *`, seu script vai ser executado a cada 1 minuto.

No nosso caso, a cron deve ser executada a cada 15 minutos:

```
*/15 * * * * caminho-absoluto-do-seu-script.sh
```

Para salvar esta configuração na crontab, você deve executar no seu terminal:

`crontab -e`

Salve no edito que abriu no seu terminal, a configuração de período de execução seguido do caminho absoluto do script `run-cron.sh`:

```sh
#!/bin/sh
*/15 * * * * /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/run-cron.sh
```

Você pode também criar um arquivo `log.txt` e salvar o resultado de cada `console.log`:

```sh
#!/bin/sh
*/15 * * * * /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/run-cron.sh > /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/log.txt
```

**Obs:** Não esqueça do caminho absoluto para o arquivo de log `.txt` tbm ;)