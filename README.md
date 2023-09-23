# Criando um projeto React App

`npx create-react-app pokemon`

## Abrindo o projeto para iniciar

`cd pokemon`
`npm start`

## Limpando o App.js

Retirar os dados da página padrão react

## Importanto os Hooks `useEffect` e `useState`

_import React, { useEffect, useState} from 'react';_

1. Na `function APP` crie useState:
_`const [pokemon, setPokemon] = useState([])`_
_`const [name, setName] = useState([])`_
2. Criar novo  `useEffect(() => {}, [])` e dentro dela a URL da API Pokemon
let url = `https://pokeapi.co/api/v2/pokemon/${name}`. 
3. Para fazer a requisição HTTP dentro do fetch, utilizei o 'json', 'setPokemon', e no final [name] para ler a const


## Resposta da requisição

Dentro do "return" preparar a aplicação para mostrar as informações do pokemon criando um 'header' e 'input' para procurar o valor e retorna-lo.

## Inserindo os dados do 'Pokemon' na aplicação

Dentro do 'header' inserir e declarar os itens que deseja pegar na API:
_imagem_
_Nome, n°, peso, e altura_


## Criando pasta CSS

1. Criar um arquivo 'style.css' dentro da pasta SRC
2. Dentro da className 'container' e do 'body', 'header' fazer as alterações de estilo.
3. Importar o arquivo 'style.css' para o 'App.js'

## Inserindo Imagens

No arquivo 'html' insire as imagens dentro da 'section'.

## Tela do site da API Pokemon funcionado

![pokemon](image.png)
