import { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
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
import { mockMenuItems, MenuItem } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'All'>('All');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getCategoryColor = (category: MenuItem['category']) => {
    switch (category) {
      case 'Food':
        return 'bg-orange-100 text-orange-700';
      case 'Drinks':
        return 'bg-blue-100 text-blue-700';
      case 'Desserts':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-zinc-100 text-zinc-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Menu Management</h1>
          <p className="text-zinc-600 mt-1">Manage your restaurant menu items</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Add Menu Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Menu Item</DialogTitle>
              <DialogDescription>
                Add a new item to your restaurant menu
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Item Name</Label>
                <Input id="name" placeholder="e.g. Margherita Pizza" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Drinks">Drinks</SelectItem>
                      <SelectItem value="Desserts">Desserts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Brief description of the item"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" placeholder="https://..." />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Add Item
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="All" onClick={() => setSelectedCategory('All')}>
                All Items
              </TabsTrigger>
              <TabsTrigger value="Food" onClick={() => setSelectedCategory('Food')}>
                Food
              </TabsTrigger>
              <TabsTrigger value="Drinks" onClick={() => setSelectedCategory('Drinks')}>
                Drinks
              </TabsTrigger>
              <TabsTrigger value="Desserts" onClick={() => setSelectedCategory('Desserts')}>
                Desserts
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card
                    key={item.id}
                    className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="aspect-video bg-zinc-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-zinc-900 mb-1">
                            {item.name}
                          </h3>
                          <Badge className={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                        </div>
                        <div className="text-right ml-2">
                          <div className="text-lg font-bold text-orange-600">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="w-3 h-3 mr-1" />
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>Edit Menu Item</DialogTitle>
                              <DialogDescription>
                                Update the menu item details
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="edit-name">Item Name</Label>
                                <Input
                                  id="edit-name"
                                  defaultValue={item.name}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="edit-price">Price</Label>
                                  <Input
                                    id="edit-price"
                                    type="number"
                                    defaultValue={item.price}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="edit-category">Category</Label>
                                  <Select defaultValue={item.category}>
                                    <SelectTrigger id="edit-category">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="Food">Food</SelectItem>
                                      <SelectItem value="Drinks">Drinks</SelectItem>
                                      <SelectItem value="Desserts">Desserts</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="edit-description">Description</Label>
                                <Input
                                  id="edit-description"
                                  defaultValue={item.description}
                                />
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
                          onClick={() => deleteMenuItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="text-center py-12 text-zinc-500">
                  No menu items found matching your search.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
