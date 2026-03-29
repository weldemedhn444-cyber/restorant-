import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Download, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { salesData, mockMenuItems } from '../data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const monthlyData = [
  { month: 'Jan', revenue: 32000, orders: 420, expenses: 18000 },
  { month: 'Feb', revenue: 28000, orders: 380, expenses: 16500 },
  { month: 'Mar', revenue: 35000, orders: 450, expenses: 19000 },
  { month: 'Apr', revenue: 38000, orders: 490, expenses: 20000 },
  { month: 'May', revenue: 42000, orders: 530, expenses: 21500 },
  { month: 'Jun', revenue: 45000, orders: 580, expenses: 22000 },
];

export function Reports() {
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  const totalRevenue = monthlyData.reduce((sum, month) => sum + month.revenue, 0);
  const totalOrders = monthlyData.reduce((sum, month) => sum + month.orders, 0);
  const totalExpenses = monthlyData.reduce((sum, month) => sum + month.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;

  const bestSellingItems = mockMenuItems
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((item, index) => ({
      ...item,
      sold: Math.floor(Math.random() * 100) + 50,
      revenue: item.price * (Math.floor(Math.random() * 100) + 50),
    }));

  const exportToPDF = () => {
    alert('Exporting to PDF... (Feature demo)');
  };

  const exportToCSV = () => {
    alert('Exporting to CSV... (Feature demo)');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Reports & Analytics</h1>
          <p className="text-zinc-600 mt-1">Business insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportToCSV}>
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline" onClick={exportToPDF}>
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Total Revenue
            </CardTitle>
            <DollarSign className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +15% from last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Total Orders
            </CardTitle>
            <ShoppingCart className="w-5 h-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              {totalOrders.toLocaleString()}
            </div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% from last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Total Expenses
            </CardTitle>
            <DollarSign className="w-5 h-5 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-zinc-900">
              ${totalExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-zinc-600 mt-1">Operating costs</p>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-600">
              Net Profit
            </CardTitle>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              ${netProfit.toLocaleString()}
            </div>
            <p className="text-xs text-green-600 mt-1">
              {((netProfit / totalRevenue) * 100).toFixed(1)}% margin
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
          <TabsTrigger value="orders">Order Trends</TabsTrigger>
          <TabsTrigger value="profit">Profit & Loss</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="month" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e4e4e7',
                      borderRadius: '8px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#f97316"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                    name="Revenue ($)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Monthly Order Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="month" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e4e4e7',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="orders" fill="#f97316" name="Orders" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profit" className="space-y-4">
          <Card className="border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle>Revenue vs Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="month" stroke="#71717a" />
                  <YAxis stroke="#71717a" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e4e4e7',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#22c55e"
                    strokeWidth={2}
                    name="Revenue ($)"
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="Expenses ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Best Selling Items */}
      <Card className="border-zinc-200 shadow-sm">
        <CardHeader>
          <CardTitle>Best Selling Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bestSellingItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                    #{index + 1}
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">{item.name}</h4>
                    <p className="text-sm text-zinc-600">{item.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-zinc-600">{item.sold} sold</div>
                  <div className="font-semibold text-zinc-900">
                    ${item.revenue.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
