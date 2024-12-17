"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Plus } from "lucide-react"
import { useEffect } from "react"

const shiftFormSchema = z.object({
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  sales: z.string().regex(/^\d+\.?\d*$/, {
    message: "Please enter a valid amount",
  }),
  cashTips: z.string().regex(/^\d+\.?\d*$/, {
    message: "Please enter a valid amount",
  }),
  cardTips: z.string().regex(/^\d+\.?\d*$/, {
    message: "Please enter a valid amount",
  }),
  section: z.string().min(1, {
    message: "Please select a section",
  }),
})

type ShiftFormValues = z.infer<typeof shiftFormSchema>

const defaultValues: Partial<ShiftFormValues> = {
  date: new Date().toISOString().split('T')[0],
  startTime: "",
  endTime: "",
  sales: "",
  cashTips: "",
  cardTips: "",
  section: "",
}

// Update the TipoutCalculations type
type TipoutCalculations = {
  support: number;
  bar: number;
  total: number;
}

export function AddShiftModal() {
  const [open, setOpen] = React.useState(false)
  const [tipouts, setTipouts] = React.useState<TipoutCalculations>({
    support: 0,
    bar: 0,
    total: 0,
  })

  // Update mock tipout rates
  const tipoutRates = {
    support: 2.5,
    bar: 5,
  }

  const form = useForm<ShiftFormValues>({
    resolver: zodResolver(shiftFormSchema),
    defaultValues,
  })

  // Update the useEffect for calculations
  useEffect(() => {
    const salesValue = parseFloat(form.watch("sales") || "0")
    if (!isNaN(salesValue)) {
      const calculations = {
        support: (salesValue * tipoutRates.support) / 100,
        bar: (salesValue * tipoutRates.bar) / 100,
        total: 0,
      }
      calculations.total = calculations.support + calculations.bar
      setTipouts(calculations)
    }
  }, [form.watch("sales")])

  function onSubmit(data: ShiftFormValues) {
    toast.success("Shift added successfully!")
    console.log(data)
    setOpen(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Shift
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Shift</DialogTitle>
          <DialogDescription>
            Enter the details for your new shift
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="section"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Section</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select section" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="main">Main</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="patio">Patio</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="sales"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Sales</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Add Tipout Calculations Display */}
            {tipouts.total > 0 && (
              <div className="rounded-lg border p-4 space-y-2">
                <h4 className="font-medium">Tipout Calculations</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span>Support Staff ({tipoutRates.support}%):</span>
                    <span className="font-medium">${tipouts.support.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bar ({tipoutRates.bar}%):</span>
                    <span className="font-medium">${tipouts.bar.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2 col-span-2">
                    <span className="font-medium">Total Tipout:</span>
                    <span className="font-medium">${tipouts.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cashTips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cash Tips</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardTips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Card Tips</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Add Shift</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 