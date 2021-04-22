# iterasys-itau-unibanco

<h2>Documentação do Projeto</h2>

<h3>1 - Pré-requisitos do sistema</h3>
1.1 - Sistema operacional
<ul>
<li>macOS 10.9 e superior (apenas 64 bits)</li>
<li>Linux Ubuntu 12.04 e superior, Fedora 21 e Debian 8 (somente 64 bits)</li>
<li>Windows 7 e superior</li>
</ul>
1.2 - Arquitetura do Projeto
<ul>
<li>Cypress@5.3.0</li>
<li>NodeJs v14.15.3</li>
<li>NPM 6.14.9</li>
</ul>
<h3>2 - Como instalar os Cypress e as dependências do projeto</h3>
<b>Executar no terminal o comando abaixo dentro da pasta do projeto</b>
<blockquote>npm install</blockquote>
<h3>3 - Como executar os Testes</h3>
<b>Comando para abrir o console do cypress:</b>
<blockquote>npx cypress open</blockquote><br/>
<b>Rodar a aplicação em modo headless:</b>
<blockquote>npx cypress run</blockquote>
<h3>4 - Como visualizar os relatórios</h3>
<h4>Comandos para gerar relatório dos testes via html.</h4>
<blockquote>npm run report:merge </blockquote>
<blockquote>npm run report:mocha </blockquote>
<h4><i>Obs: Ao rodar a aplicação no modo Headless, o Cypress grava um vídeo para cada arquivo de especificação</i></h4>
<h3>5 - Ferramentas e bibliotecas utilizadas</h3>
<ul>
<li>Mochawesome</li>
<li>Cypress-multi-reporters</li>
 <li>Mochawesome-report-generator</li>
</ul>
<h3>6 - Integração contínua</h3>
<ul>
<li>Integração contínua (CI) do projeto foi realizada através do Github Actions</li> 
</ul>
