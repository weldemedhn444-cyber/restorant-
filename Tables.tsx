import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockTables, Table } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Users } from 'lucide-react';

export function Tables() {
  const [tables, setTables] = useState<Table[]>(mockTables);

  const updateTableStatus = (id: number, status: Table['status']) => {
    setTables((prev) =>
      prev.map((table) => (table.id === id ? { ...table, status } : table))
    );
  };

  const getStatusColor = (status: Table['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-green-500 hover:bg-green-600';
      case 'Occupied':
        return 'bg-red-500 hover:bg-red-600';
      case 'Reserved':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'bg-zinc-500';
    }
  };

  const getStatusBadgeColor = (status: Table['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Occupied':
        return 'bg-red-100 text-red-700';
      case 'Reserved':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-zinc-100 text-zinc-700';
    }
  };

  const availableCount = tables.filter((t) => t.status === 'Available').length;
  const occupiedCount = tables.filter((t) => t.status === 'Occupied').length;
  const reservedCount = tables.filter((t) => t.status === 'Reserved').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Table Management</h1>
        <p className="text-zinc-600 mt-1">Visual overview of restaurant tables</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Available Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{availableCount}</div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Occupied Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{occupiedCount}</div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Reserved Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">{reservedCount}</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-200 shadow-sm">
        <CardHeader>
          <CardTitle>Restaurant Floor Plan</CardTitle>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-zinc-600">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-zinc-600">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm text-zinc-600">Reserved</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tables.map((table) => (
              <Dialog key={table.id}>
                <DialogTrigger asChild>
                  <button
                    className={`${getStatusColor(
                      table.status
                    )} text-white p-6 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">
                        Table {table.id}
                      </div>
                      <div className="flex items-center justify-center gap-1 text-sm opacity-90">
                        <Users className="w-4 h-4" />
                        <span>{table.seats}</span>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Table {table.id} Details</DialogTitle>
                    <DialogDescription>
                      Manage table status and information
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-zinc-600">Table Number</p>
                        <p className="text-lg font-semibold">{table.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-600">Seats</p>
                        <p className="text-lg font-semibold">{table.seats}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 mb-2">Current Status</p>
                      <Badge className={getStatusBadgeColor(table.status)}>
                        {table.status}
                      </Badge>
                    </div>
                    {table.currentOrder && (
                      <div>
                        <p className="text-sm text-zinc-600">Current Order</p>
                        <p className="text-lg font-semibold">{table.currentOrder}</p>
                      </div>
                    )}
                    <div className="pt-4 border-t border-zinc-200">
                      <p className="text-sm text-zinc-600 mb-3">Update Status</p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant="outline"
                          onClick={() => updateTableStatus(table.id, 'Available')}
                          className={
                            table.status === 'Available'
                              ? 'bg-green-50 border-green-200 text-green-700'
                              : ''
                          }
                        >
                          Available
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => updateTableStatus(table.id, 'Occupied')}
                          className={
                            table.status === 'Occupied'
                              ? 'bg-red-50 border-red-200 text-red-700'
                              : ''
                          }
                        >
                          Occupied
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => updateTableStatus(table.id, 'Reserved')}
                          className={
                            table.status === 'Reserved'
                              ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                              : ''
                          }
                        >
                          Reserved
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
