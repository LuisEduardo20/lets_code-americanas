/*
  (1) ToDo List

Listar atividades

Adicionar atividades

Deletar atividades

Editar atividades

Marcar atividades (concluida/nao-concluida)

Plus: tag prioridade (baixa, normal, alta, altissima)

Equipes: Solo Dupla Trio Grupo All-in

item1 = new Item('Fazer atividade', '2023-02-06', 'alta'); item2 = new Item('Ler um livro', '2023-02-06', 'normal'); item3 = new Item('Jogar Pokemon', '2023-02-06', 'altissima'); item4 = new Item('Assistir Pokemon', '2023-02-06', 'baixa');

lista = [item1, item2, item3, item4];

item1.editar('Fazer nova atividade', '2023-02-25', 'baixa'); item2.deletar(); item3.marcar(); item5 = new Item('Assistir Pokemon', '2023-02-06', 'baixa'); lista.adicionar(item5);
*/

const Task = require("./scripts/task");

const tasksList = [
  new Task("Fazer atividade let's code", "2023-01-31", "highest"),

  new Task("Ir para a academia", "2023-02-01", "high"),

  new Task("Se alongar", "2023-02-01", "normal"),
];

tasksList.forEach((task, index) => {
  console.log(`Task${index + 1}:`, task.name);
  console.log(`Task id:`, task.getTaskId());
  console.log(`Data:`, task.date);
  console.log(`Concluída:`, task.getIsDone());
  console.log("\n");
});
