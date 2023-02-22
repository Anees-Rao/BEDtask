import { PartialType } from '@nestjs/mapped-types';
import { CreateApirequestDto } from './create-apirequest.dto';

export class UpdateApirequestDto extends PartialType(CreateApirequestDto) {
    method: string;
}
