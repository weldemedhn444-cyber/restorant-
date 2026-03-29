import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { mockStaff, Staff } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

export function Staff() {
  const [staff, setStaff] = useState<Staff[]>(mockStaff);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredStaff = staff.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteStaff = (id: string) => {
    setStaff((prev) => prev.filter((member) => member.id !== id));
  };

  const getRoleColor = (role: Staff['role']) => {
    switch (role) {
      case 'Chef':
        return 'bg-orange-100 text-orange-700';
      case 'Manager':
        return 'bg-purple-100 text-purple-700';
      case 'Waiter':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-zinc-100 text-zinc-700';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const activeStaff = staff.filter((s) => s.status === 'Active').length;
  const chefs = staff.filter((s) => s.role === 'Chef' && s.status === 'Active').length;
  const waiters = staff.filter((s) => s.role === 'Waiter' && s.status === 'Active').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Staff Management</h1>
          <p className="text-zinc-600 mt-1">Manage your restaurant team</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Staff Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Staff Member</DialogTitle>
              <DialogDescription>
                Add a new team member to your restaurant
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chef">Chef</SelectItem>
                    <SelectItem value="Waiter">Waiter</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@restaurant.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number</Label>
                <Input id="contact" placeholder="+1 234-567-8900" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Add Staff
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Active Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">{activeStaff}</div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Chefs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{chefs}</div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Waiters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{waiters}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <CardTitle>All Staff Members</CardTitle>
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                placeholder="Search staff..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStaff.map((member) => (
              <Card
                key={member.id}
                className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600">
                      <AvatarFallback className="text-white font-semibold">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-zinc-900 truncate">
                            {member.name}
                          </h3>
                          <Badge className={`${getRoleColor(member.role)} mt-1`}>
                            {member.role}
                          </Badge>
                        </div>
                        <Badge
                          variant={member.status === 'Active' ? 'default' : 'secondary'}
                          className={
                            member.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-zinc-100 text-zinc-600'
                          }
                        >
                          {member.status}
                        </Badge>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                          <Mail className="w-4 h-4" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-600">
                          <Phone className="w-4 h-4" />
                          <span>{member.contact}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="w-3 h-3 mr-1" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>Edit Staff Member</DialogTitle>
                              <DialogDescription>
                                Update staff member information
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-name">Full Name</Label>
                                <Input
                                  id="edit-name"
                                  defaultValue={member.name}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-role">Role</Label>
                                <Select defaultValue={member.role}>
                                  <SelectTrigger id="edit-role">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Chef">Chef</SelectItem>
                                    <SelectItem value="Waiter">Waiter</SelectItem>
                                    <SelectItem value="Manager">Manager</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-email">Email Address</Label>
                                <Input
                                  id="edit-email"
                                  type="email"
                                  defaultValue={member.email}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-contact">Contact Number</Label>
                                <Input
                                  id="edit-contact"
                                  defaultValue={member.contact}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-status">Status</Label>
                                <Select defaultValue={member.status}>
                                  <SelectTrigger id="edit-status">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button className="bg-orange-500 hover:bg-orange-600">
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteStaff(member.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStaff.length === 0 && (
            <div className="text-center py-12 text-zinc-500">
              No staff members found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
