import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function EarningsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Earnings</CardTitle>
          <CardDescription>Gross earnings this period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$2,456.32</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last period
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Hours Worked</CardTitle>
          <CardDescription>Total hours this period</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">38.5</div>
          <Progress value={80} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Hourly</CardTitle>
          <CardDescription>Including tips</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$32.45</div>
          <p className="text-xs text-muted-foreground">
            +5.2% from last period
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tips by Type</CardTitle>
          <CardDescription>Cash vs Card</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm">Card</div>
              <div className="text-sm font-bold">$1,234.56</div>
            </div>
            <Progress value={75} />
            <div className="flex items-center justify-between">
              <div className="text-sm">Cash</div>
              <div className="text-sm font-bold">$432.10</div>
            </div>
            <Progress value={25} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 