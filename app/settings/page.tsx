"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "./components/profile-form"
import { PreferencesForm } from "./components/preferences-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      <Separator />
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="space-y-4">
            <ProfileForm />
          </div>
        </TabsContent>
        <TabsContent value="preferences">
          <div className="space-y-4">
            <PreferencesForm />
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="space-y-4">
            {/* Existing notifications content */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 