"use client"

import { Avatar } from "@/components/ui/avatar"
import { Building2, MapPin } from "lucide-react"

const recentShifts = [
  {
    id: 1,
    location: "Downtown Restaurant",
    date: "2024-03-20",
    hours: 8,
    earnings: 160,
    address: "123 Main St"
  },
  {
    id: 2,
    location: "Waterfront Café",
    date: "2024-03-19",
    hours: 6,
    earnings: 120,
    address: "456 Harbor View"
  },
  {
    id: 3,
    location: "City Bistro",
    date: "2024-03-18",
    hours: 7,
    earnings: 140,
    address: "789 Urban Ave"
  }
]

export function RecentShifts() {
  return (
    <div className="space-y-8">
      {recentShifts.map((shift) => (
        <div key={shift.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <Building2 className="h-4 w-4" />
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{shift.location}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              {shift.address}
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">${shift.earnings}</p>
            <p className="text-sm text-muted-foreground">{shift.hours} hours</p>
          </div>
        </div>
      ))}
    </div>
  )
}