import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserSetting } from "./settings.entity";

@Entity({ name: "users" })
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)  // default is Float
    id: number;

    @Column()
    @Field()
    username: string;

    @Column()
    @Field({ nullable: true })
    displayName?: string

    @OneToOne(() => UserSetting)
    @JoinColumn()
    @Field({ nullable: true })
    settings?: UserSetting;

}