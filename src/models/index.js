// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "FAILED": "FAILED"
};

const PostStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE",
  "STAGED": "STAGED"
};

const { User, TeamMembership, Team, Task, Book, BookOrder, Order, Message, Post, SubTask } = initSchema(schema);

export {
  User,
  TeamMembership,
  Team,
  Task,
  Book,
  BookOrder,
  Order,
  Message,
  Post,
  OrderStatus,
  PostStatus,
  SubTask
};