import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users, Updoot } from '.';
@ObjectType()
@Entity()
export class Projects extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  headline!: string;

  @Field()
  @Column()
  headlineImage!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  featuredImage!: string;

  @Field()
  @Column()
  category!: string;

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => Users, (user) => user.projects)
  creator: Users;

  @OneToMany(() => Updoot, (updoot) => updoot.project)
  updoots: Updoot[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
