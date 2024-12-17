"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { useTheme } from "next-themes"

const preferencesFormSchema = z.object({
  tipoutRates: z.object({
    support: z.string().regex(/^\d+(\.\d{1,2})?$/, {
      message: "Please enter a valid percentage",
    }),
    bar: z.string().regex(/^\d+(\.\d{1,2})?$/, {
      message: "Please enter a valid percentage",
    }),
  }),
  defaultView: z.string({
    required_message: "Please select a default view",
  }),
  reportDisplay: z.string({
    required_message: "Please select a report display option",
  }),
  autoExport: z.boolean().default(false),
  darkMode: z.boolean().default(false),
})

type PreferencesFormValues = z.infer<typeof preferencesFormSchema>

const defaultValues: Partial<PreferencesFormValues> = {
  tipoutRates: {
    support: "2.5",
    bar: "5",
  },
  defaultView: "weekly",
  reportDisplay: "detailed",
  autoExport: false,
  darkMode: false,
}

export function PreferencesForm() {
  const { theme, setTheme } = useTheme()
  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(preferencesFormSchema),
    defaultValues: {
      ...defaultValues,
      darkMode: theme === "dark",
    },
  })

  function onSubmit(data: PreferencesFormValues) {
    setTheme(data.darkMode ? "dark" : "light")
    toast.success("Preferences updated successfully!")
    console.log(data)
  }

  React.useEffect(() => {
    const isDark = theme === "dark"
    form.setValue("darkMode", isDark)
  }, [theme, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Tipout Rates</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="tipoutRates.support"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Support Staff (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      placeholder="2.5"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Percentage for bussers, hosts, and food runners
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tipoutRates.bar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bar (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      placeholder="5"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Percentage for bartenders
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="defaultView"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Default View</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select default view" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose your preferred default time period view
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reportDisplay"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Report Display</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                  <SelectItem value="summary">Summary Only</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose how detailed you want your reports to be
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="autoExport"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Automatic Report Export
                  </FormLabel>
                  <FormDescription>
                    Automatically export reports at the end of each shift
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="darkMode"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Dark Mode</FormLabel>
                  <FormDescription>
                    Enable dark mode for the application
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked)
                      setTheme(checked ? "dark" : "light")
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save preferences</Button>
      </form>
    </Form>
  )
} 