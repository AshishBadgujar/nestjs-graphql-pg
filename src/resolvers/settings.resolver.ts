import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserSettingsInput } from 'src/dtos/setting.dto';
import { UserSetting } from 'src/entities/settings.entity';
import { UserSettingService } from 'src/services/setting.service';


@Resolver()
export class UserSettingsResolver {
    constructor(private userSettingsService: UserSettingService) { }

    @Mutation((returns) => UserSetting)
    async createUserSettings(
        @Args('createUserSettingsData')
        createUserSettingsData: CreateUserSettingsInput,
    ) {
        const userSetting = await this.userSettingsService.createUserSettings(
            createUserSettingsData,
        );
        return userSetting;
    }
}