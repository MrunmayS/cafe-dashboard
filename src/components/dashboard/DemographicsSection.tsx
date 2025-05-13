"use client";

import { ChartData } from '@/lib/metrics';
import { BarChart } from '../charts/BarChart';

interface DemographicsSectionProps {
  incomeVsCompletionRate: ChartData;
}

export function DemographicsSection({
  incomeVsCompletionRate
}: DemographicsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* <PieChart 
        data={genderBreakdownOfCompletions} 
        title="Gender Breakdown" 
      /> */}
      <BarChart 
        data={incomeVsCompletionRate} 
        title="Income Range vs Avg. Spending" 
      />
      {/* <BarChart 
        data={channelEffectiveness} 
        title="Channel Effectiveness" 
        horizontal={true}
      /> */}
    </div>
  );
}
