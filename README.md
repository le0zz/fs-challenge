# fs-challenge

Aplicação independente que faz a leitura de um banco de dados MongoDB e exibe-os numa página da web.

A aplicação é estruturada da seguinte maneira:

- Para o frontend, está sendo utilizado o framework Angular, em sua versão 11. Junto com isso, também está se fazendo uso de alguns componentes de código aberto (https://po-ui.io/)
- O frontend SERÁ executado em um servidor web no endereço http://localhost:3000, mas têm embutido no projeto o Electron
- O backend está construído em NestJs, e serve para conectar-se com o banco de dados e trazer as informações para o frontend

---
### Passos para execução do projeto

1. Docker
```
docker-compose build
docker-compose up
```  
O docker irá se inicializar e será servido no endereço http://localhost:3000

2. Yarn
```
npm i -g yarn @nestjs/cli @angular/cli concurrently
yarn
yarn start:dev
```
Obs.: A aplicação irá abrir em branco, se não carregar sozinho, vá em 'View' -> 'Reload' na janela do electron.