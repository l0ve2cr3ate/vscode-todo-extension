import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  name: string;

  @Column("text", { unique: true })
  githubId: string;

  @Column()
  creatorId: number;

  @OneToMany(() => Todo, (t) => t.creator)
  @JoinColumn({ name: "creatorId" })
  todos: Promise<Todo[]>;
}
