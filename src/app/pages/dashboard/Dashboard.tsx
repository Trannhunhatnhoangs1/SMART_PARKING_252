import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Car, Calendar, CreditCard, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export function Dashboard() {
  const accountRole = localStorage.getItem('accountRole') || 'student';
  const isLecturer = accountRole === 'lecturer';

  const [parkingData, setParkingData] = useState({
    available: 120,
    total: 200,
    percentage: 60,
  });

  const [parkingSlots, setParkingSlots] = useState<string[][]>([]);

  // Generate parking slots
  useEffect(() => {
    const rows = ['A', 'B', 'C', 'D'];
    const cols = 10;
    const slots = rows.map(row => {
      return Array.from({ length: cols }, (_, i) => {
        // Randomly assign available or full
        const random = Math.random();
        return random > 0.3 ? 'available' : 'full';
      });
    });
    setParkingSlots(slots);
  }, []);

  // Mock data for login frequency (monthly)
  const loginFrequency = [
    { month: '11/2025', count: 12 },
    { month: '12/2025', count: 18 },
    { month: '01/2026', count: 25 },
    { month: '02/2026', count: 22 },
    { month: '03/2026', count: 15 },
  ];

  const maxCount = Math.max(...loginFrequency.map(d => d.count));

  return (
    <div className="p-6">
      {/* Welcome Message */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-600">Chào mừng trở lại! Đây là tổng quan bãi đậu xe của bạn.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Available Slots Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Chỗ còn trống</div>
              <div className="text-2xl font-bold text-gray-900">{parkingData.available} / {parkingData.total}</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">{parkingData.percentage}% còn trống</div>
        </div>

        {/* Monthly Plan Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Gói tháng</div>
              <div className="text-2xl font-bold text-gray-900">
                {isLecturer ? '0 VND' : '50,000 VND'}
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {isLecturer ? '(Cung cấp bởi trường)' : 'Có hiệu lực đến 30/04/2026'}
          </div>
        </div>

        {/* Lecturer Access Limit OR Student Status */}
        {isLecturer ? (
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-sm p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Giới hạn truy cập</div>
                <div className="text-2xl font-bold text-purple-600">15 / 50</div>
              </div>
            </div>
            <div className="text-sm text-purple-600 mb-2">đã sử dụng</div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Trạng thái</div>
                <div className="text-2xl font-bold text-gray-900">Chưa đậu xe</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">Không có phiên hoạt động</div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Parking Map */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Sơ đồ bãi đậu xe</h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded"></div>
                <span className="text-gray-600">Trống</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded"></div>
                <span className="text-gray-600">Đầy</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex gap-2 text-xs text-gray-600 mb-2">
              <div className="w-8"></div>
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="w-10 text-center">
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>
            {parkingSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                <div className="w-8 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                {row.map((status, colIndex) => (
                  <div
                    key={colIndex}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      status === 'available'
                        ? 'bg-green-400 hover:bg-green-500 cursor-pointer'
                        : 'bg-red-400 cursor-not-allowed'
                    }`}
                  >
                    <Car className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Login Frequency & Quick Access */}
        <div className="space-y-6">
          {/* Login Frequency Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tần suất đăng nhập (theo tháng)</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">Tháng này</button>
            </div>
            
            <div className="flex items-end justify-around gap-3 h-40 border-l-2 border-b-2 border-gray-300 pl-2 pb-2">
              {loginFrequency.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="text-xs font-bold text-gray-900">{data.count}</div>
                  <div 
                    className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600 min-h-[10px]"
                    style={{ height: `${(data.count / maxCount) * 80}%` }}
                  ></div>
                  <div className="text-xs text-gray-600">{data.month}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Truy cập nhanh</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">Xem tất cả</button>
            </div>
            
            <div className="space-y-3">
              <Link
                to="/dashboard/parking"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Tìm chỗ đậu</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
              
              <Link
                to="/dashboard/history"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Lịch sử của tôi</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
              
              <Link
                to="/dashboard/payment"
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">Thanh toán tháng</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Hoạt động gần đây</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700">Xem tất cả</button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900">Đã vào bãi</div>
                <div className="text-sm text-gray-600">Chỗ: A04, 08:00 AM</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">Hôm nay</div>
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900">Thanh toán</div>
                <div className="text-sm text-gray-600">Hoàn thành: 50,000 VND</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">01/04</div>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900">Đã ra khỏi bãi</div>
                <div className="text-sm text-gray-600">Chỗ: B07, 05:30 PM</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">01/04</div>
          </div>
        </div>
      </div>
    </div>
  );
}