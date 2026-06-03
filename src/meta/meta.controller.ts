import { Controller, Get } from '@nestjs/common';
import { MetaService } from './meta.service';

@Controller('meta')
export class MetaController {
  constructor(
    private readonly metaService: MetaService,
  ) {}

  @Get('accounts')
  getAccounts() {
    return this.metaService.getAccounts();
  }

  @Get('campaigns')
  getCampaigns() {
    return this.metaService.getCampaigns();
  }
}