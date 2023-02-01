const urgencyLevelsList = ["low", "normal", "high", "highest"];
const blackListIds = [];
let taskId = 1;

class Task {
  #is_done = false;
  #id;

  constructor(name, date, urgency_level) {
    if (!urgencyLevelsList.includes(urgency_level)) {
      throw new Error("Invalid urgency level");
    }

    const taskId = Math.floor(Math.random() * 10000) + 1;

    while (!blackListIds.includes(taskId)) {
      this.#id = taskId;
      blackListIds.push(taskId);
    }

    this.name = name;
    this.date = date;
    this.urgency_level = urgency_level;
  }

  getTaskId() {
    return this.#id;
  }

  getIsDone() {
    return this.#is_done;
  }

  doTask() {
    this.#is_done = !this.#is_done;
  }
}

module.exports = Task;
