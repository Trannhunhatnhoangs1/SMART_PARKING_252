import { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface HistoryEntry {
  date: string;
  timeIn: string;
  timeOut: string;
  slot: string;
  duration: string;
  fee: string;
  cardType: string; 
  status: 'active' | 'paid';
}

export function MyHistory() {
  const [selectedPeriod, setSelectedPeriod] = useState('Tháng này');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const historyData: HistoryEntry[] = [
    {
      date: '10/04/2026',
      timeIn: '08:00 AM',
      timeOut: '-',
      slot: 'A04',
      duration: '-',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '09/04/2026',
      timeIn: '08:10 AM',
      timeOut: '05:15 PM',
      slot: 'A04',
      duration: '9h 5m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '08/04/2026',
      timeIn: '07:45 AM',
      timeOut: '04:30 PM',
      slot: 'B07',
      duration: '8h 45m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '07/04/2026',
      timeIn: '08:20 AM',
      timeOut: '05:00 PM',
      slot: 'C02',
      duration: '8h 40m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '06/04/2026',
      timeIn: '08:05 AM',
      timeOut: '12:00 PM',
      slot: 'A10',
      duration: '3h 55m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '05/04/2026',
      timeIn: '09:00 AM',
      timeOut: '06:30 PM',
      slot: 'D05',
      duration: '9h 30m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '04/04/2026',
      timeIn: '07:30 AM',
      timeOut: '04:00 PM',
      slot: 'B03',
      duration: '8h 30m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
    {
      date: '03/04/2026',
      timeIn: '08:15 AM',
      timeOut: '05:45 PM',
      slot: 'A07',
      duration: '9h 30m',
      cardType: 'Thẻ tháng', 
      fee: '-',
      status: 'active',
    },
  ];

  const totalPages = Math.ceil(historyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = historyData.slice(startIndex, endIndex);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Lịch sử của tôi</h1>
          <p className="text-gray-600">Kiểm tra lịch sử đậu xe và giao dịch của bạn.</p>
        </div>
        
        {/* Period Selector */}
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-gray-700">{selectedPeriod}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ngày</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Giờ vào</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Giờ ra</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Chỗ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Thời gian</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Loại thẻ</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phí</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.timeIn}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.timeOut}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.slot}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.cardType}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.fee}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {entry.status === 'active' && 'Đang hoạt động'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Hiển thị {startIndex + 1} đến {Math.min(endIndex, historyData.length)} trong {historyData.length} mục
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}