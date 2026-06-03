import { Injectable } from '@nestjs/common';
import { MetaService } from '../meta/meta.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly metaService: MetaService,
  ) {}

  async getDashboard() {
    return this.metaService.getDashboardMetrics();
  }

  async getTrends() {
    return this.metaService.getTrendMetrics();
  }
}