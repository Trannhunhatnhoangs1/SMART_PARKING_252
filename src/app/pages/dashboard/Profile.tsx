import { Mail, Phone, Edit, Bell, Receipt } from 'lucide-react';

export function Profile() {
  const accountRole = localStorage.getItem('accountRole') || 'student';
  const isLecturer = accountRole === 'lecturer';

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hồ sơ</h1>
        <p className="text-gray-600">Quản lí thông tin cá nhân.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 bg-blue-100 rounded-full mb-4" />

            <h2 className="text-2xl font-bold text-gray-900 mb-1">Minh Le</h2>

            <div className="text-blue-600 font-medium mb-1">
              {isLecturer ? 'Giảng viên' : 'Sinh viên'}
            </div>

            {!isLecturer && (
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <span className="font-medium">ID:</span>
                <span>2311234</span>
              </div>
            )}

            {isLecturer && (
              <div className="text-sm text-gray-600">
                Khoa: Khoa Kỹ thuật Máy tính
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-gray-600">Email:</div>
                <div className="text-gray-900">minh.le@hcmut.edu.vn</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-gray-600">SĐT:</div>
                <div className="text-gray-900">0123 456 789</div>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Chỉnh sửa thông tin
          </button>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">
          {/* ACCOUNT */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-6">Thông tin tài khoản</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-700">Vai trò</label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {isLecturer ? 'Giảng viên' : 'Sinh viên'}
                </div>
              </div>

              {!isLecturer && (
                <div>
                  <label className="text-sm text-gray-700">Khoa</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    Khoa Kỹ thuật Máy tính
                  </div>
                </div>
              )}

              {isLecturer && (
                <div>
                  <label className="text-sm text-gray-700">Khoa</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    Khoa Kỹ thuật Máy tính
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm text-gray-700">Biển số xe</label>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span>59A-123.45</span>
                  <Edit className="w-4 h-4 text-blue-600" />
                </div>
              </div>
               {!isLecturer && (
                <div>
                  <label className="text-sm text-gray-700">Mã thẻ</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    8686868
                  </div>
                </div>
              )}

              {isLecturer && (
                <div>
                  <label className="text-sm text-gray-700">Mã thẻ</label>
                  <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>5823538</span>
                    <Edit className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Tùy chọn</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Thông báo</div>
                    <div className="text-sm text-gray-600">Nhận thông báo đẩy</div>
                  </div>
                </div>
                <button className="inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="translate-x-6 h-4 w-4 bg-white rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Receipt className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Biên lai</div>
                    <div className="text-sm text-gray-600">Nhận biên lai qua email</div>
                  </div>
                </div>
                <button className="inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="translate-x-6 h-4 w-4 bg-white rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Quyền lợi</div>
                    <div className="text-sm text-gray-600">Nhận thông tin khuyến mãi</div>
                  </div>
                </div>
                <button className="inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                  <span className="translate-x-1 h-4 w-4 bg-white rounded-full" />
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Bảo mật</h2>

            <div className="space-y-3">
              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 flex justify-between">
                <span className="font-medium text-gray-900">Đổi mật khẩu</span>
                <Edit className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 flex justify-between">
                <span className="font-medium text-gray-900">Xác thực hai lớp</span>
                <Edit className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}