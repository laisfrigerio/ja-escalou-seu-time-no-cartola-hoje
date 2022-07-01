# Variáveis de Ambiente

Antes de realizar a configuração da sua cron, é importante deixar as variáveis de ambiente que estão no arquivo `.env` com acesso global. Assim, sua cron vai conseguir ler o valor destas variáveis e executar o script da forma esperada.

## Linux (Debian)

A princípio, nas distribuições Linux, é para existir um arquivo `/etc/environment`.

Basicamente, eu abri esse arquivo no meu editor de texto predileto nano ~~é mentira~~:

```console
lais@lais:~$ nano /etc/environment
```

E adicionei o conteúdo do meu arquivo `.env` dentro deste arquivo.

FIM!!!