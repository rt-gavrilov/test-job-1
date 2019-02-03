enum TodoStatus {
  Open = 'Open',
  Complete = 'Complete',
  Rejected = 'Rejected',
}

export class Todo {
  constructor(
    public name: string,
    public description: string,
    public deadline: Date,
    public createdAt: Date = new Date(),
    public status: TodoStatus = TodoStatus.Open
  ) {}

  get expired(): boolean {
    return new Date() > this.deadline && ! this.done;
  }

  get done(): boolean {
    return this.status != TodoStatus.Open;
  }

  complete() {
    this.status = TodoStatus.Complete;
  }

  reject() {
    this.status = TodoStatus.Rejected;
  }

  toJson(): any {
    return {
      name: this.name,
      description: this.description,
      deadline: this.deadline.getTime(),
      createdAt: this.createdAt.getTime(),
      status: this.status
    };
  }

  static fromJson(json: any): Todo {
    return new Todo(
      json.name,
      json.description,
      new Date(json.deadline),
      new Date(json.createdAt),
      json.status
    );
  }
}
