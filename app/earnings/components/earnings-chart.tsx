"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Mon", earnings: 120 },
  { date: "Tue", earnings: 167 },
  { date: "Wed", earnings: 145 },
  { date: "Thu", earnings: 189 },
  { date: "Fri", earnings: 242 },
  { date: "Sat", earnings: 286 },
  { date: "Sun", earnings: 173 },
]

export function EarningsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis
                dataKey="date"
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
                dataKey="earnings"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 