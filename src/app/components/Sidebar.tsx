import { Link, useLocation } from 'react-router';
import { Home, ParkingSquare, Clock, CreditCard, User, HelpCircle, LogOut, Users } from 'lucide-react';
import logoImage from "/src/assets/01_logobachkhoa.png";

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: ParkingSquare, label: 'Tình trạng', path: '/dashboard/parking' },
    { icon: Clock, label: 'Lịch sử', path: '/dashboard/history' },
  //  { icon: CreditCard, label: 'Thanh toán', path: '/dashboard/payment' },
    { icon: User, label: 'Hồ sơ', path: '/dashboard/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <img src={logoImage} alt="HCMUT Logo" className="w-15 h-15 object-contain" />
        <div>
          <div className="font-bold text-lg">TRANG CHỦ</div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-blue-700">
        <button className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-700 rounded-lg w-full transition-colors mb-2">
          <HelpCircle className="w-5 h-5" />
          <span>Trợ giúp</span>
        </button>
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-3 text-blue-100 hover:bg-blue-700 rounded-lg w-full transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Đăng xuất</span>
        </Link>
      </div>
    </div>
  );
}