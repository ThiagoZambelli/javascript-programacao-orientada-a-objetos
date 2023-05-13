<div align="center">

![Alt text](assets/logoLithtleZ.svg)

&nbsp;

---

&nbsp;




&nbsp;

---
</div>


<img align="left" width="50%" style="margin-top:-20px" src="assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">OOB com Node.JS</h2>

&nbsp;

<h2 align="justify">Feito por : Thiago Zambelli</h2>

&nbsp;

<h3 align="justify">Projeto feito durante a aula de -> JavaScript: programação orientada a objetos.</h3>

  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>

</div>

&nbsp;

> Este projeto refere-se aos primeiros passos em direção aos conceitos de OOB com JavaScript.

 
---

## Sumário:
- [Projeto](#projeto)
- [Problemas e Soluções](#problemas__solucoes)
- [Aulas](#aulas)
---

&nbsp;


# Projeto -> <div id='projeto'></div>

## UML (Linguagem de Modelagem Unificada - do inglês Unified Modeling Language):

> Ela consiste na padronização de algumas notações para facilitar o entendimento entre os times de desenvolvimento que eventualmente irão lidar com um determinado sistema.
Um dos diagramas mais comuns de ser representado utilizando a UML é o diagrama de classe. A função dele é representar as estruturas e relações entre as classes de um projeto e interfaces com outros sistemas.

## `npm init -y`:
> Comando de criação do arquivo de configuração do npm

## Metodos estaticos:
> Metodos não estaticos so podem ser invocados mediante uma instancia da classe a qual pertencem, porem metodos estaticos podem ser invocados diretamente da classe sem a necessidade de intsncia.
  - E.X:
  ~~~JavaScript
    class exemplo {
      metodoDeExemploNaoEstatico(){
        // Metodo não estatico que só pode ser invocado via estancia da classe
      }
      static metodoDeExemploEstatico(){
        // Metodo estatico que pode ser invocado sem a intancia da classe
      }
    }
  ~~~

&nbsp;

---
&nbsp;

# Problemas e soluções -> <div id='problemas__solucoes'></div>


## Import e Export:
> Para a utilização do import e do export foi passado no arquivo de configuração `package.json` o argumento `"type":"module"`.

## Strict Mode:
> O modo estrito do JavaScript serve para impedir que alguns comportamentos do JavaScript causem “falhas silenciosas” (transformando em erros que são lançados pelo interpretador) e corrigir alguns outros que podem induzir a bugs potenciais e comportamentos inesperados.

&nbsp;

---

&nbsp;

# Aulas -> <div id='aulas'></div>

## Aula 1:

- Qual é a motivação e a base conceitual da programação orientada a objetos, que é abstrair modelos a partir de conceitos da vida real e estruturar a forma como o programa é desenvolvido a partir destes modelos;
- Quais são as características de um objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto (também chamados de métodos);
- Sobre o princípio de usar modelos (ou classes) para criar cópias (ou instâncias) de um objeto e como isso ajuda a reaproveitar código;
- A estrutura e os conceitos por trás do UML (Linguagem de Modelagem Unificada), linguagem que oferece uma série de ferramentas e padrões para definirmos as classes de um sistema, quais métodos serão necessários e quais seus desdobramentos.

## Aula 2:

- O que é a palavra-chave this e sua importância na manipulação de objetos com JavaScript, uma vez que o this representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos bind(), call() e apply();
- Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros;
- Como acessar as propriedades prototype e __proto__ e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como Object ou Function;
- As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: Object.create() e funções construtoras com new; sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes.

## Aula 3:

- O que são e como funcionam as classes, elementos essenciais para se trabalhar com orientação a objetos em grande parte das linguagens de programação voltadas para este paradigma. As classes fornecem um modelo para a criação de cópias (instâncias) de objetos que compartilham dos mesmos tipos de propriedades e métodos;
- O conceito de herança de classe, também importante para se trabalhar com orientação a objetos, como criar subclasses que herdam propriedades e métodos de uma superclasse e como reaproveitar estas propriedades e métodos da superclasse através da função super();
- Como uma subclasse pode ter propriedades e métodos próprios, além dos recebidos da superclasse, e como declarar isso no código criando novos métodos;
- A praticar a sintaxe de classe com JavaScript, criando classes, subclasses, propriedades, construtores e métodos.