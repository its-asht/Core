import { CommandValidator } from '@itsmybot';
import { Type } from 'class-transformer';
import { IsDefined, ValidateNested } from 'class-validator';

export default class DefaultConfig {
  @IsDefined()
  @ValidateNested()
  @Type(() => CommandValidator)
  'hello-world': CommandValidator
}
