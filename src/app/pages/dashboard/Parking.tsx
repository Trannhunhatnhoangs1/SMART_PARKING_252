import { useState } from 'react';
import { Filter, RefreshCw, Car } from 'lucide-react';

type Zone = 'A' | 'B' | 'C' | 'D';
type SlotStatus = 'available' | 'full' | 'yours';

interface ParkingSlot {
  id: string;
  status: SlotStatus;
}

export function Parking() {
  const [selectedZone, setSelectedZone] = useState<Zone>('A');
  const [selectedSlot, setSelectedSlot] = useState<string | null>('A04');

  // Generate parking slots for each zone
  const generateSlots = (zone: Zone): ParkingSlot[][] => {
    const rows = ['A', 'B', 'C', 'D'];
    const cols = 10;
    
    return rows.map(row => {
      return Array.from({ length: cols }, (_, i) => {
        const slotId = `${row}${String(i + 1).padStart(2, '0')}`;
        const random = Math.random();
        let status: SlotStatus = 'available';
        
        if (slotId === 'A04') {
          status = 'yours';
        } else if (random > 0.6) {
          status = 'available';
        } else {
          status = 'full';
        }
        
        return { id: slotId, status };
      });
    });
  };

  const parkingSlots = generateSlots(selectedZone);
  const zones: Zone[] = ['A', 'B', 'C', 'D'];

  const selectedSlotData = selectedSlot
    ? parkingSlots.flat().find(slot => slot.id === selectedSlot)
    : null;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tình trạng bãi</h1>
        <p className="text-gray-600">Tìm và chọn chỗ đậu xe còn trống.</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Zone Tabs */}
        <div className="flex gap-2">
          {zones.map(zone => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedZone === zone
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Khu {zone}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            <Filter className="w-4 h-4" />
            Lọc
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <RefreshCw className="w-4 h-4" />
            Làm mới
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Parking Grid */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="space-y-3">
            {/* Column Numbers */}
            <div className="flex gap-2 ml-12 mb-2">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="w-14 text-center text-sm font-medium text-gray-600">
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Parking Slots */}
            {parkingSlots.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {/* Row Label */}
                <div className="w-8 flex items-center justify-center text-lg font-bold text-gray-700">
                  {String.fromCharCode(65 + rowIndex)}
                </div>
                
                {row.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    disabled={slot.status === 'full'}
                    className={`w-14 h-16 rounded-lg flex flex-col items-center justify-center transition-all relative ${
                      slot.status === 'available'
                        ? 'bg-green-100 hover:bg-green-200 cursor-pointer border-2 border-green-300'
                        : slot.status === 'full'
                        ? 'bg-red-100 cursor-not-allowed border-2 border-red-300'
                        : 'bg-blue-100 border-2 border-blue-500'
                    } ${
                      selectedSlot === slot.id ? 'ring-4 ring-blue-400 scale-105' : ''
                    }`}
                  >
                    <Car
                      className={`w-6 h-6 ${
                        slot.status === 'available'
                          ? 'text-green-600'
                          : slot.status === 'full'
                          ? 'text-red-600'
                          : 'text-blue-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Slot Detail Panel
        <div className="space-y-6">
          {selectedSlotData && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedSlot}</h2>
              
              <div className="flex items-center gap-2 mb-6">
                <Car className={`w-5 h-5 ${
                  selectedSlotData.status === 'available' ? 'text-green-600' :
                  selectedSlotData.status === 'full' ? 'text-red-600' : 'text-blue-600'
                }`} />
                <span className={`font-medium ${
                  selectedSlotData.status === 'available' ? 'text-green-600' :
                  selectedSlotData.status === 'full' ? 'text-red-600' : 'text-blue-600'
                }`}>
                  Khu {selectedSlot?.charAt(0)}
                </span>
              </div>

              {selectedSlotData.status === 'available' && (
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Đậu xe ở đây
                </button>
              )}


              {selectedSlotData.status === 'full' && (
                <button disabled className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed font-medium">
                  Đã có xe
                </button>
              )}
            </div>
          )} */}

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Chú thích</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 border-2 border-green-300 rounded flex items-center justify-center">
                  <Car className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700">Còn trống</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center">
                  <Car className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-700">Đã đầy</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 border-2 border-blue-500 rounded flex items-center justify-center">
                  <Car className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">Chỗ của bạn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   // </div>
  );
}