import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Save, Building2, User, Bell, Palette } from 'lucide-react';
import { toast } from 'sonner';

export function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [lowStockAlerts, setLowStockAlerts] = useState(true);

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Settings</h1>
        <p className="text-zinc-600 mt-1">Manage your restaurant and account settings</p>
      </div>

      <Tabs defaultValue="restaurant" className="space-y-4">
        <TabsList>
          <TabsTrigger value="restaurant">
            <Building2 className="w-4 h-4 mr-2" />
            Restaurant
          </TabsTrigger>
          <TabsTrigger value="profile">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="w-4 h-4 mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="restaurant" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Restaurant Information</CardTitle>
              <CardDescription>
                Update your restaurant's basic information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input
                    id="restaurant-name"
                    defaultValue="The Gourmet Kitchen"
                    placeholder="Enter restaurant name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cuisine-type">Cuisine Type</Label>
                  <Input
                    id="cuisine-type"
                    defaultValue="International"
                    placeholder="e.g., Italian, Chinese"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  defaultValue="123 Main Street, New York, NY 10001"
                  placeholder="Full address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    defaultValue="+1 (555) 123-4567"
                    placeholder="Contact number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="info@restaurant.com"
                    placeholder="Contact email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="opening-time">Opening Time</Label>
                  <Input id="opening-time" type="time" defaultValue="09:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="closing-time">Closing Time</Label>
                  <Input id="closing-time" type="time" defaultValue="22:00" />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your personal account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    defaultValue="John"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    defaultValue="Doe"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-email">Email Address</Label>
                <Input
                  id="profile-email"
                  type="email"
                  defaultValue="john.doe@restaurant.com"
                  placeholder="Your email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input
                  id="phone-number"
                  defaultValue="+1 (555) 987-6543"
                  placeholder="Your phone"
                />
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-zinc-600">
                    Receive email updates about orders and system events
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="order-alerts">New Order Alerts</Label>
                  <p className="text-sm text-zinc-600">
                    Get notified when new orders are placed
                  </p>
                </div>
                <Switch
                  id="order-alerts"
                  checked={orderAlerts}
                  onCheckedChange={setOrderAlerts}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="low-stock-alerts">Low Stock Alerts</Label>
                  <p className="text-sm text-zinc-600">
                    Alert when inventory items are running low
                  </p>
                </div>
                <Switch
                  id="low-stock-alerts"
                  checked={lowStockAlerts}
                  onCheckedChange={setLowStockAlerts}
                />
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-zinc-600">
                    Switch between light and dark theme
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Theme Color</Label>
                <p className="text-sm text-zinc-600 mb-3">
                  Choose your preferred accent color
                </p>
                <div className="flex gap-3">
                  <button className="w-12 h-12 rounded-lg bg-orange-500 ring-2 ring-orange-500 ring-offset-2"></button>
                  <button className="w-12 h-12 rounded-lg bg-green-500 hover:ring-2 hover:ring-green-500 hover:ring-offset-2"></button>
                  <button className="w-12 h-12 rounded-lg bg-blue-500 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2"></button>
                  <button className="w-12 h-12 rounded-lg bg-purple-500 hover:ring-2 hover:ring-purple-500 hover:ring-offset-2"></button>
                  <button className="w-12 h-12 rounded-lg bg-pink-500 hover:ring-2 hover:ring-pink-500 hover:ring-offset-2"></button>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
