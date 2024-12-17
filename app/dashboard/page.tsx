"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"
import { 
  DollarSign, 
  Users, 
  Clock, 
  TrendingUp,
  CalendarDays,
} from "lucide-react"
import { AnalyticsView } from "./components/analytics-view"
import { ReportsView } from "./components/reports-view"
import { AddShiftModal } from "./components/add-shift-modal"

const revenueData = [
  { name: "Mon", total: 145.32 },
  { name: "Tue", total: 167.45 },
  { name: "Wed", total: 134.89 },
  { name: "Thu", total: 189.23 },
  { name: "Fri", total: 242.76 },
  { name: "Sat", total: 286.43 },
  { name: "Sun", total: 223.54 },
]

const weeklyHours = [
  { day: "Mon", hours: 5 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 4 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 8 },
  { day: "Sat", hours: 9 },
  { day: "Sun", hours: 6 },
]

const recentShifts = [
  {
    id: 1,
    date: "2024-03-20",
    time: "5:00 PM - 10:00 PM",
    earnings: 186.45,
    section: "Main Dining"
  },
  {
    id: 2,
    date: "2024-03-19",
    time: "11:00 AM - 4:00 PM",
    earnings: 143.23,
    section: "Bar"
  },
  {
    id: 3,
    date: "2024-03-18",
    time: "6:00 PM - 11:00 PM",
    earnings: 195.67,
    section: "Patio"
  }
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <AddShiftModal />
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Earnings
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,389.62</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Hours Worked
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">
                  +5 hours from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Per Hour
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$30.88</div>
                <p className="text-xs text-muted-foreground">
                  +12.3% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Shifts
                </CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last week
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Revenue</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Shifts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {recentShifts.map((shift) => (
                    <div key={shift.id} className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {new Date(shift.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {shift.time}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        ${shift.earnings.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Hours by Day</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyHours}>
                      <XAxis
                        dataKey="day"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="hours"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <AnalyticsView />
        </TabsContent>
        <TabsContent value="reports">
          <ReportsView />
        </TabsContent>
      </Tabs>
    </div>
  )
} 