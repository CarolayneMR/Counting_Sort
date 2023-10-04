<h1 align="center">Counting Sort</h1>

<p align="center">Counting Sort é um algoritmo de ordenação caracterizado pelo seu método de contagem!</p>



<p>Seu método de contagem é focado em ordenação de números inteiros e positivos em pequena escala, a idéia deste algoritmo baseia-se em:</p>


<li>
  1- Criar uma array de contagem preenchida com zeros em que, sua quantidade de posições será definida pelo elemento de maior valor na array original.
  
  2- Relacionar os índices do array de contagem com os elemento do array original, a cada número presente na original, incremente 1 no indice correspondente no array de contagem.

  3- criação de uma variável inicializada no valor zero que na próxima iteração servirá como índice numa nova array com estes números já ordenados. 
  
  4- iterar sobre o tamanho da array de contagem e inserir numa nova array todo elemento da array de contagem que fosse maior que 0 

  5- a cada vez que este 4° passo ocorre:
    - definimos a nova array com seu indice na posição zero equivalente ao primeiro número da array de contagem á passar na condicional imposta pelo while loop
    - incrementado a variável que corresponde ao índice da nova array 
    - decrementando o valor do elemento do array de contagem
</li>

<p align="center">Assim podemos ter uma array ordenada, sendo demonstrada nessa aplicação :D</p>



![counting-sort-gif](https://github.com/CarolayneMR/Counting_Sort/blob/main/arquivos/counting.gif)


## Desenvolvedores ✌

* [Carolayne Maria](https://github.com/CarolayneMR)
* [Ian Elton](https://github.com/ianq1w1)
