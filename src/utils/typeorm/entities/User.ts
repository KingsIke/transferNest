import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
// import * as bcrypt from "bcrypt"
// import { TaskEntity } from "src/tasks/task.entity";

@Entity()
@Unique(['userName']) //use for unique user or id
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  FirstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  salt: string;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'update_at' })
  update_at: Date;

  //   @OneToMany((type) => TaskEntity, (task) => task.user, { eager: true })
  //   tasks: TaskEntity[];

  // async validatePassword(password: string): Promise<boolean> {
  //   const hash = await bcrypt.hash(password, this.salt);
  //   return hash === this.password;
  // }
}
