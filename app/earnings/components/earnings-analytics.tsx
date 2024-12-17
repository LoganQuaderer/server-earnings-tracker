"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const hourlyData = [
  { hour: "11AM", earnings: 45 },
  { hour: "12PM", earnings: 78 },
  { hour: "1PM", earnings: 65 },
  { hour: "2PM", earnings: 42 },
  { hour: "3PM", earnings: 35 },
  { hour: "4PM", earnings: 55 },
  { hour: "5PM", earnings: 85 },
  { hour: "6PM", earnings: 95 },
  { hour: "7PM", earnings: 115 },
  { hour: "8PM", earnings: 98 },
  { hour: "9PM", earnings: 75 },
  { hour: "10PM", earnings: 55 },
]

const shiftData = [
  { name: "Lunch", value: 35 },
  { name: "Dinner", value: 55 },
  { name: "Weekend", value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export function EarningsAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Hourly Earnings Distribution</CardTitle>
          <CardDescription>
            Average earnings broken down by hour of the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <XAxis dataKey="hour" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  formatter={(value) => [`$${value}`, "Earnings"]}
                />
                <Bar 
                  dataKey="earnings" 
                  fill="#8884d8" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Peak Performance Times</CardTitle>
          <CardDescription>
            Your most profitable hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Best Hour</p>
                <p className="text-2xl font-bold">7:00 PM</p>
                <p className="text-xs text-muted-foreground">
                  Average: $115/hour
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Best Day</p>
                <p className="text-2xl font-bold">Saturday</p>
                <p className="text-xs text-muted-foreground">
                  Average: $286/day
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shift Distribution</CardTitle>
          <CardDescription>
            Earnings by shift type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={shiftData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {shiftData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-1">
            {shiftData.map((entry, index) => (
              <div 
                key={entry.name} 
                className="flex items-center justify-between"
              >
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
    </div>
  )
} 