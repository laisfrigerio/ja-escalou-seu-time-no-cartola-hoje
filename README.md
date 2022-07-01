# :copyright: E aí, cartoleiro, já escalou seu time no Cartola hoje?

Não deixa para última hora! ~~como eu~~

[Entre aqui](https://t.me/+n8f3TlxXJ04wMThh) no grupo do Telegram agora mesmo ;)

<p align="center">
  <a><img src="./images/cartola-logo.png" alt="Logo do fantasy grame escrito 'Cartola' em texto branco sobre um fundo laranja" title="Logo do fantasy grame escrito 'Cartola' em texto branco sobre um fundo laranja"></a>
</p>

<p align="center">
  <a><img src="./images/smart-watch-notification.jpeg" alt="Notificação da mensagem do bot no grupo do telegram sendo exibida no smart watch mi band 6" title="Notificação da mensagem do bot no grupo do telegram sendo exibida no smart watch mi band 6"></a>
</p>

<p align="center">
  <a><img src="./images/mobile-notification.jpeg" alt="Notificação na tela de bloqueio do smartphone" title="Notificação na tela de bloqueio do smartphone"></a>
</p>

## O que é o Cartola?

É uma fantasy game desenvolvido pelo time tech da Globo.

A ideia do jogo é escalar um time com base em todos os atletas/técnicos que fazem parte do Campeonato Brasileiro da séria A (Brasileirão).

Sua pontuação é gerada a partir da performance dos jogadores em campo.

De acordo com a posição de cada atleta (goleiro, zagueiro, lateral, meio-campo, atacante, técnico), existem regras de pontuação.

Depois de escalado seu time é só torcer para seus atletas mitarem na rodada.

## Objetivo do BOT

Acessar uma API pública do cartola, coletar informação, como status do mercado (aberto, fechado) e data de fechamento (dia, horário, minuto) e enviar uma mensagem à um canal do Telegram para lembretar os cartoleiros de escalarem seus times.

## Motivação

Este projeto surgiu de uma necessidade pessoal: mesmo recebendo e-mail para escalar meu time na Rodada, eventualmente eu acabo esquecendo.

A ideia é criar um BOT para me lembrar e não mais esquecer de escalar meu time no Cartola.

## Regras de envio do lembrete

Inicialmente a ideia é:

- Enviar lembretes apenas no dia de fechamento do mercado;
- Períodos de envio:
    - 48 horas antes do fechamento;
    - 24 horas antes do fechamento;
    - 12 horas antes do fechamento;
    - 6 horas antes do fechamento;
    - 3 horas antes do fechamento;
    - 1 horas antes do fechamento;
    - 45 minutos antes do fechamento;
    - 30 minutos antes do fechamento; e
    - 15 minutos antes do fechamento;

## 🛠️ Stack

- NodeJS: `v16.15.0`
- npm: `8.5.5`
- Jest para os testes de unidade e integração (100% of coverage): `^28.1.1`
- API Cartola
- Integração com Telegram
- crontab (Linux)

## Run

Antes de rodar o project, você deve:

- Criar seu bot no telegram;
- Criar um grupo no telegram;
- Nas configurações do grupo criado, você deve associá-lo ao Bot;
- Pegar um valor chamado `chat_id` do grupo criado;

E, por fim, você deve:

- Criar um arquivo chamado `.env` com base no `.env.example`; e
- Preencha as variáveis ​​de ambiente com as suas credenciais do telegram;

E finalmente, execute:

```
    npm install
    npm start
```

## Run test

```
    npm run test
    npm run test:coverage
```

## Run Scheduler

No Linux (MacOS também) temos a ferramenta `crontab`. Ela é responsável por gerenciar e executar comandos agendados. Portanto, no nosso cenário vamos configurar a crontab para rodar a cada 15 minutos.

### Bashscript

Nossa configuração na crontab vai executar um arquivo bashscript (`.sh`). Basicamente, o script vai ser responsável por rodar o conteúdo do nosso arquivo `index.js`: 

`node ./src/index.js`

Precisamos nos atentar e usar o caminho absoluto em que o node está instalado e do nosso arquivo `index.js`.

#### Caminho absoluto (Absolute Path)

1) Para descobrir onde o seu node está instalado, execute no terminal o seguinte comando:

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

#### Ajustando o arquivo `run-cron.sh`

Ajuste seu script `run-cron.sh` com o caminho absoluto do node e de seu arquivo `index.js`:

```sh
#!/bin/sh
/home/lais/.nvm/versions/node/v16.15.0/bin/node /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/index.js
```

### Configuração Crontab

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

Você pode também criar um arquivo `log.txt` com o resultado de cada `console.log`:

```sh
#!/bin/sh
*/15 * * * * /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/run-cron.sh > /home/lais/Documents/ja-escalou-seu-time-no-cartola-hoje/src/log.txt
```

**Obs:** Não esqueça do caminho absoluto para o arquivo de log `.txt` tbm ;)

## Links de referência:

- [Telegram BOT API](https://core.telegram.org/bots/api)
- [Telegram BOT API: Available methods](https://core.telegram.org/bots/api#available-methods)
- [Get Telegram Chat ID](https://sean-bradley.medium.com/get-telegram-chat-id-80b575520659)
- [How to obtain the Chat ID](https://stackoverflow.com/questions/33858927/how-to-obtain-the-chat-id-of-a-private-telegram-channel)
- [Making a Telegram BOT](https://www.sohamkamani.com/blog/2016/09/21/making-a-telegram-bot/#:~:text=Go%20to%20the%20telegram%20app%20on%20your%20phone%20and%E2%80%A6&text=Click%20on%20or%20type%20%2Fnewbot,to%20be%20a%20unique%20name.)
- [How to mock axios requests in jest](https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/)

## 👩 Author

| [<img src="https://avatars.githubusercontent.com/u/20709086?v=4" width="100px;" alt="Lais Frigério"/><br /><sub><b>@laisfrigerio</b></sub>](https://github.com/laisfrigerio)<br /> |
| :---: |

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details

Como rodar crontab no Linux
Como identificar o caminho absoluto do node
Como tornar minhas variaveis de ambiente disponiveis para o crontab