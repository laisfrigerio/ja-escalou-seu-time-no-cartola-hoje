# Crontab

No Linux (MacOS também) temos a ferramenta `crontab`. Ela é responsável por gerenciar e executar comandos agendados. Portanto, no nosso cenário vamos configurar a crontab para rodar a cada 15 minutos.

## Bashscript

Nossa configuração na crontab vai executar um arquivo bashscript (`.sh`). Basicamente, o script vai ser responsável por rodar o conteúdo do nosso arquivo `index.js`: 

```console
lais@lais:~$ node ./src/index.js
```

Precisamos nos atentar e usar o caminho absoluto tanto do node quanto do nosso arquivo `index.js`.

## Caminho absoluto (Absolute Path)

1) Para descobrir em qual pasta seu node está instalado, execute no terminal o seguinte comando:

```console
lais@lais:~$ which node
```

No meu caso, o node está no seguinte caminho:

```console
lais@lais:~$ /home/lais/.nvm/versions/node/v16.15.0/bin/node
```

2) Já para encontrar o caminho absoluto da sua pasta `src`, que está dentro da raiz do projeto (`ja-escalou-seu-time-no-cartola-hoje`), você deve:

- Entrar na pasta `src` com o comando `cd` (change directory):

```console
lais@lais:~$ cd src
```

- Executar o comando `pwd` (path working directory name):

```console
lais@lais:~$ pwd
```

No meu caso, este projeto está na seguinte estrutura de pastas (caminho):

```console
lais@lais:~$ /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src
```

## Ajustando o arquivo `run-cron.sh`

Você precisa tornar seu arquivo `run-cron.sh` executável:

```console
lais@lais:~$ chmod -x run-cron.sh
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

```console
lais@lais:~$ crontab -e
```

Um editor (nano, vim, visual studio) vai abrir. Então, você precisa ajustar o período de execução e do caminho absoluto do script `run-cron.sh`:

```sh
#!/bin/sh
*/15 * * * * /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/run-cron.sh
```

Salve o arquivo!

Você pode também criar um arquivo `log.txt` e salvar o resultado de cada `console.log`:

```sh
#!/bin/sh
*/15 * * * * /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/run-cron.sh > /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/log.txt
```

**Obs:** Não esqueça do caminho absoluto para o arquivo de log `.txt` tbm ;)