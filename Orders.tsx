import { useState } from 'react';
import { Search, Filter, Eye, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { mockOrders, Order } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesStatus =
      statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const deleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-200';
      case 'Preparing':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'Served':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'Completed':
        return 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200';
      default:
        return 'bg-zinc-100 text-zinc-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Orders Management</h1>
        <p className="text-zinc-600 mt-1">Track and manage all restaurant orders</p>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>All Orders</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  placeholder="Search orders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Preparing">Preparing</SelectItem>
                  <SelectItem value="Served">Served</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-zinc-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-zinc-50">
                  <TableHead>Order ID</TableHead>
                  <TableHead>Table</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-zinc-50">
                    <TableCell className="font-semibold">{order.id}</TableCell>
                    <TableCell>Table {order.tableNumber}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-orange-600 hover:text-orange-700 text-sm hover:underline">
                            {order.items.length} items
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Order {order.id} Details</DialogTitle>
                            <DialogDescription>
                              Table {order.tableNumber} - {order.time}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="p-3 bg-zinc-50 rounded-lg"
                              >
                                {item}
                              </div>
                            ))}
                            <div className="pt-3 border-t border-zinc-200">
                              <div className="flex justify-between font-semibold">
                                <span>Total:</span>
                                <span>${order.total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={order.status}
                        onValueChange={(value) =>
                          updateOrderStatus(order.id, value as Order['status'])
                        }
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue>
                            <Badge className={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Preparing">Preparing</SelectItem>
                          <SelectItem value="Served">Served</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-zinc-600">{order.time}</TableCell>
                    <TableCell className="font-semibold">
                      ${order.total.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Order {order.id} Details</DialogTitle>
                              <DialogDescription>
                                Complete order information
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-zinc-600">Table Number</p>
                                  <p className="font-semibold">{order.tableNumber}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-zinc-600">Time</p>
                                  <p className="font-semibold">{order.time}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-zinc-600">Status</p>
                                  <Badge className={getStatusColor(order.status)}>
                                    {order.status}
                                  </Badge>
                                </div>
                                <div>
                                  <p className="text-sm text-zinc-600">Total</p>
                                  <p className="font-semibold">
                                    ${order.total.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-zinc-600 mb-2">Items</p>
                                <div className="space-y-2">
                                  {order.items.map((item, index) => (
                                    <div
                                      key={index}
                                      className="p-3 bg-zinc-50 rounded-lg"
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteOrder(order.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12 text-zinc-500">
              No orders found matching your search criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
