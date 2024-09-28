import {
    Resolver,
    Query,
    Args,
    Int,
    ResolveField,
    Parent,
    Mutation,
} from '@nestjs/graphql';
import { CreateUserInput } from 'src/dtos/user.dto';
import { User } from 'src/entities/user.entity';
import { UserSettingService } from 'src/services/setting.service';
import { UserService } from 'src/services/user.service';


export let incrementalId = 3;

@Resolver((of) => User)
export class UserResolver {
    constructor(
        private userService: UserService,
        private userSettingService: UserSettingService,
    ) { }

    @Query((returns) => User, { nullable: true })
    getUserById(@Args('id', { type: () => Int }) id: number) {
        return this.userService.getUserById(id);
    }

    @Query(() => [User])
    getUsers() {
        return this.userService.getUsers();
    }

    // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
    // getUserSettings(@Parent() user: User) {
    //   return this.userSettingService.getUserSettingById(user.id);
    // }

    @Mutation((returns) => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.userService.createUser(createUserData);
    }
}