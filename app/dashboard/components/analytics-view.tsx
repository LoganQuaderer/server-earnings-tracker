"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const shiftTypeData = [
  { name: 'Lunch', value: 35 },
  { name: 'Dinner', value: 45 },
  { name: 'Bar', value: 15 },
  { name: 'Events', value: 5 },
]

const monthlyTrends = [
  { month: 'Jan', earnings: 2100, hours: 80 },
  { month: 'Feb', earnings: 2300, hours: 85 },
  { month: 'Mar', earnings: 2800, hours: 90 },
  { month: 'Apr', earnings: 2600, hours: 88 },
  { month: 'May', earnings: 2900, hours: 92 },
  { month: 'Jun', earnings: 3100, hours: 95 },
]

const peakHours = [
  { time: '11AM', customers: 20 },
  { time: '12PM', customers: 45 },
  { time: '1PM', customers: 50 },
  { time: '2PM', customers: 30 },
  { time: '5PM', customers: 35 },
  { time: '6PM', customers: 55 },
  { time: '7PM', customers: 60 },
  { time: '8PM', customers: 50 },
  { time: '9PM', customers: 35 },
]

export function AnalyticsView() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Shift Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={shiftTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {shiftTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-1">
              {shiftTypeData.map((entry, index) => (
                <div key={entry.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="h-3 w-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-sm">{entry.name}</span>
                  </div>
                  <span className="text-sm font-medium">{entry.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrends}>
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="earnings"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.3}
                  />
                  <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="hours"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Peak Hours Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={peakHours}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="customers"
                  fill="#8884d8"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Average Tips per Customer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8.45</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Most Profitable Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Saturday</div>
            <p className="text-xs text-muted-foreground">
              Average: $286/day
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Peak Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7:00 PM</div>
            <p className="text-xs text-muted-foreground">
              60 customers/hour avg
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Best Performing Section
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Bar</div>
            <p className="text-xs text-muted-foreground">
              $45.50/hour avg
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 