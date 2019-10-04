# Aqui será registrado insights e ideias absorvidas durante cada aula

## Aula 02

Para adicionar um novo pacote no ambiente de desenvolvimento no yarn use:
<pre>
    yarn add nome_do_pacote -D
</pre>

Scripts personalizados do yarn são colocados dentro do campo "scripts" no package.json (igual o npm).


#### Insight 01
Se na sua aplicação você está colocando muita regra de negócio em controllers ou em models, provavelmente você deveria usar um outro padrão de projeto (como o POJO ou até mesmo o DAO) juntamente com o MVC para ajudar a organizar sua aplicação.

#### Insight 02
A frase `Se o seu controllador precisa de mais métodos que o index, show, destroy, update e new provavelmente você precisa separar seu controller em dois.` é bem 
para se policiar quanto ao tamanho de seu controlador. Talvez seja um pouco radical, mas a ideia por trás é bem conveniente.