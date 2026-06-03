import { Injectable } from '@nestjs/common';

@Injectable()
export class MetaService {
  async getAccounts() {
    return [
      {
        id: 'act_123456789',
        name: 'Demo Ad Account',
        currency: 'USD',
      },
    ];
  }

  async getCampaigns() {
    return [
      {
        id: 'cmp_1',
        name: 'Summer Sale Campaign',
        status: 'ACTIVE',
        spend: 1200,
      },
      {
        id: 'cmp_2',
        name: 'Lead Generation Campaign',
        status: 'ACTIVE',
        spend: 850,
      },
    ];
  }

  async getDashboardMetrics() {
    return {
      spend: 4225.76,
      impressions: 120000,
      reach: 95000,
      clicks: 3200,
      ctr: 2.67,
      cpc: 1.32,
      cpm: 35.21,
      leads: 40,
      cpl: 105.64,
      purchases: 12,
      revenue: 18000,
      roas: 4.25,
    };
  }

  async getTrendMetrics() {
    return [
      {
        date: '2026-06-01',
        spend: 100,
        leads: 4,
      },
      {
        date: '2026-06-02',
        spend: 130,
        leads: 6,
      },
      {
        date: '2026-06-03',
        spend: 160,
        leads: 7,
      },
      {
        date: '2026-06-04',
        spend: 180,
        leads: 8,
      },
    ];
  }
}