"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EarningsSummary } from "./components/earnings-summary"
import { EarningsChart } from "./components/earnings-chart"
import { EarningsAnalytics } from "./components/earnings-analytics"
import { ShiftsTable } from "./components/shifts-table"
import { DateRangePicker } from "./components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function EarningsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Earnings</h1>
          <p className="text-muted-foreground">
            Track and analyze your earnings over time
          </p>
        </div>
        <div className="flex items-center gap-4">
          <DateRangePicker />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="shifts">Shifts</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="space-y-4">
          <EarningsSummary />
          <EarningsChart />
        </TabsContent>
        <TabsContent value="analytics">
          <EarningsAnalytics />
        </TabsContent>
        <TabsContent value="shifts">
          <ShiftsTable />
        </TabsContent>
      </Tabs>
    </div>
  )
} 