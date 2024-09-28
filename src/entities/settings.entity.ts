import { PrimaryColumn, Column, Entity } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity({ name: 'settings' })
@ObjectType()
export class UserSetting {
    @PrimaryColumn()
    @Field((type) => Int)
    userId: number;

    @Column({ default: false })
    @Field({ defaultValue: false })
    receiveNotifications: boolean;

    @Column({ default: false })
    @Field({ defaultValue: false })
    receiveEmails: boolean;
}