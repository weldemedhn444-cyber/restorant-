export interface Order {
  id: string;
  tableNumber: number;
  items: string[];
  status: 'Pending' | 'Preparing' | 'Served' | 'Completed';
  time: string;
  total: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Drinks' | 'Food' | 'Desserts';
  image: string;
  description: string;
}

export interface Table {
  id: number;
  seats: number;
  status: 'Available' | 'Occupied' | 'Reserved';
  currentOrder?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'Chef' | 'Waiter' | 'Manager';
  contact: string;
  email: string;
  status: 'Active' | 'Inactive';
}

export const mockOrders: Order[] = [
  {
    id: 'ORD001',
    tableNumber: 5,
    items: ['Margherita Pizza', 'Caesar Salad', 'Coca Cola'],
    status: 'Preparing',
    time: '12:30 PM',
    total: 45.99,
  },
  {
    id: 'ORD002',
    tableNumber: 3,
    items: ['Burger', 'Fries', 'Lemonade'],
    status: 'Pending',
    time: '12:45 PM',
    total: 28.50,
  },
  {
    id: 'ORD003',
    tableNumber: 8,
    items: ['Pasta Carbonara', 'Tiramisu', 'Espresso'],
    status: 'Served',
    time: '1:00 PM',
    total: 52.00,
  },
  {
    id: 'ORD004',
    tableNumber: 2,
    items: ['Steak', 'Mashed Potatoes', 'Red Wine'],
    status: 'Preparing',
    time: '1:15 PM',
    total: 68.75,
  },
  {
    id: 'ORD005',
    tableNumber: 10,
    items: ['Sushi Platter', 'Miso Soup', 'Green Tea'],
    status: 'Pending',
    time: '1:30 PM',
    total: 42.00,
  },
];

export const mockMenuItems: MenuItem[] = [
  {
    id: 'MENU001',
    name: 'Margherita Pizza',
    price: 18.99,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    description: 'Classic pizza with tomato, mozzarella, and basil',
  },
  {
    id: 'MENU002',
    name: 'Caesar Salad',
    price: 12.50,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
    description: 'Fresh romaine with Caesar dressing and croutons',
  },
  {
    id: 'MENU003',
    name: 'Burger',
    price: 15.99,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    description: 'Juicy beef burger with all the fixings',
  },
  {
    id: 'MENU004',
    name: 'Pasta Carbonara',
    price: 22.00,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3',
    description: 'Creamy pasta with bacon and parmesan',
  },
  {
    id: 'MENU005',
    name: 'Steak',
    price: 38.00,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    description: 'Premium ribeye steak cooked to perfection',
  },
  {
    id: 'MENU006',
    name: 'Sushi Platter',
    price: 35.00,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    description: 'Assorted fresh sushi and sashimi',
  },
  {
    id: 'MENU007',
    name: 'Coca Cola',
    price: 3.50,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
    description: 'Chilled soft drink',
  },
  {
    id: 'MENU008',
    name: 'Lemonade',
    price: 4.00,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f8e',
    description: 'Fresh homemade lemonade',
  },
  {
    id: 'MENU009',
    name: 'Espresso',
    price: 3.00,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04',
    description: 'Strong Italian coffee',
  },
  {
    id: 'MENU010',
    name: 'Green Tea',
    price: 2.50,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9',
    description: 'Premium Japanese green tea',
  },
  {
    id: 'MENU011',
    name: 'Tiramisu',
    price: 8.50,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
    description: 'Classic Italian coffee-flavored dessert',
  },
  {
    id: 'MENU012',
    name: 'Chocolate Cake',
    price: 7.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    description: 'Rich and moist chocolate cake',
  },
];

export const mockTables: Table[] = [
  { id: 1, seats: 2, status: 'Available' },
  { id: 2, seats: 4, status: 'Occupied', currentOrder: 'ORD004' },
  { id: 3, seats: 4, status: 'Occupied', currentOrder: 'ORD002' },
  { id: 4, seats: 2, status: 'Available' },
  { id: 5, seats: 6, status: 'Occupied', currentOrder: 'ORD001' },
  { id: 6, seats: 4, status: 'Reserved' },
  { id: 7, seats: 2, status: 'Available' },
  { id: 8, seats: 6, status: 'Occupied', currentOrder: 'ORD003' },
  { id: 9, seats: 4, status: 'Available' },
  { id: 10, seats: 8, status: 'Occupied', currentOrder: 'ORD005' },
  { id: 11, seats: 2, status: 'Reserved' },
  { id: 12, seats: 4, status: 'Available' },
];

export const mockStaff: Staff[] = [
  {
    id: 'STF001',
    name: 'John Smith',
    role: 'Chef',
    contact: '+1 234-567-8901',
    email: 'john.smith@restaurant.com',
    status: 'Active',
  },
  {
    id: 'STF002',
    name: 'Sarah Johnson',
    role: 'Manager',
    contact: '+1 234-567-8902',
    email: 'sarah.johnson@restaurant.com',
    status: 'Active',
  },
  {
    id: 'STF003',
    name: 'Michael Brown',
    role: 'Waiter',
    contact: '+1 234-567-8903',
    email: 'michael.brown@restaurant.com',
    status: 'Active',
  },
  {
    id: 'STF004',
    name: 'Emily Davis',
    role: 'Waiter',
    contact: '+1 234-567-8904',
    email: 'emily.davis@restaurant.com',
    status: 'Active',
  },
  {
    id: 'STF005',
    name: 'David Wilson',
    role: 'Chef',
    contact: '+1 234-567-8905',
    email: 'david.wilson@restaurant.com',
    status: 'Active',
  },
  {
    id: 'STF006',
    name: 'Lisa Anderson',
    role: 'Waiter',
    contact: '+1 234-567-8906',
    email: 'lisa.anderson@restaurant.com',
    status: 'Inactive',
  },
];

export const salesData = [
  { name: 'Mon', sales: 4200, orders: 45 },
  { name: 'Tue', sales: 3800, orders: 38 },
  { name: 'Wed', sales: 5100, orders: 52 },
  { name: 'Thu', sales: 4600, orders: 48 },
  { name: 'Fri', sales: 6800, orders: 68 },
  { name: 'Sat', sales: 7200, orders: 72 },
  { name: 'Sun', sales: 6500, orders: 65 },
];

export const categoryData = [
  { name: 'Food', value: 12500 },
  { name: 'Drinks', value: 3200 },
  { name: 'Desserts', value: 1800 },
];
