import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

export enum PostStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  STAGED = "STAGED"
}

export declare class SubTask {
  readonly content: string;
  readonly due: string;
  constructor(init: ModelInit<SubTask>);
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly teams?: TeamMembership[];
  readonly owner?: String;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class TeamMembership {
  readonly id: string;
  readonly team: Team;
  readonly member: User;
  constructor(init: ModelInit<TeamMembership>);
  static copyOf(source: TeamMembership, mutator: (draft: MutableModel<TeamMembership>) => MutableModel<TeamMembership> | void): TeamMembership;
}

export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly members?: TeamMembership[];
  readonly tasks?: Task[];
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class Task {
  readonly id: string;
  readonly title: string;
  readonly team?: Team;
  readonly editors?: string[];
  readonly subtasks?: SubTask[];
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class Book {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly image?: string;
  readonly author?: string;
  readonly featured?: boolean;
  readonly price?: number;
  readonly orders?: BookOrder[];
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class BookOrder {
  readonly id: string;
  readonly book?: Book;
  readonly order?: Order;
  readonly customer?: String;
  constructor(init: ModelInit<BookOrder>);
  static copyOf(source: BookOrder, mutator: (draft: MutableModel<BookOrder>) => MutableModel<BookOrder> | void): BookOrder;
}

export declare class Order {
  readonly id: string;
  readonly user: string;
  readonly date?: string;
  readonly total?: number;
  readonly books?: BookOrder[];
  readonly customer?: String;
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class Message {
  readonly id: string;
  readonly user?: string;
  readonly text?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly posts?: Post[];
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly rating: number;
  readonly blog?: Blog;
  readonly comments?: Comment[];
  readonly status: PostStatus | keyof typeof PostStatus;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly content?: string;
  readonly post?: Post;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}