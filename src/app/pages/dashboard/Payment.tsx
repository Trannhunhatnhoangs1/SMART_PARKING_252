import { useState } from "react";
import { CreditCard, CheckCircle, Calendar, Smartphone } from "lucide-react";

export function Payment() {
  const role = localStorage.getItem("accountRole") || "student";

  const isStudent = role === "student";
  const isLecturer = role === "lecturer";

  // lecturer state
  const [quantity, setQuantity] = useState(1);
  const [purchased, setPurchased] = useState(0);

  const pricePerEntry = 5000;
  const total = quantity * pricePerEntry;

  const handlePay = () => {
    setPurchased(prev => prev + quantity);
    setQuantity(1);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Thanh toán (Hàng tháng)
        </h1>
        <p className="text-gray-600">
          Đăng ký và thanh toán phí gửi xe hàng tháng.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* ================= STUDENT ================= */}
        {isStudent && (
          <>
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h2 className="text-lg font-semibold mb-4">Gói của bạn</h2>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-4">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-bold">Gói sinh viên tháng</h3>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                      Đang hoạt động
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                      Không giới hạn thời gian gửi xe
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                      Có hiệu lực 1 tháng
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle className="text-green-600 w-5 h-5" />
                      Tất cả khu vực
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Thời gian</h3>
                  <div className="flex gap-3 bg-gray-50 p-4 rounded">
                    <Calendar className="text-blue-600" />
                    <div>
                      01/04/2024 - 30/04/2024
                      <div className="text-sm text-gray-500">
                        Tự động gia hạn
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Phí</span>
                    <span>50,000 VND</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Giảm giá</span>
                    <span>-10,000 VND</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Tổng</span>
                    <span className="text-blue-600">50,000 VND</span>
                  </div>
                </div>
              </div>
            </div>

            {/* student payment */}
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold mb-4">Thanh toán</h2>

              <button className="w-full bg-blue-600 text-white p-3 rounded mb-4 flex justify-center gap-2">
                <Smartphone /> BKPay
              </button>

              {/* QR */}
              <div className="bg-gray-50 p-6 rounded text-center">
                <div className="grid grid-cols-8 gap-1 w-40 mx-auto mb-2">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div
                      key={i}
                      className={Math.random() > 0.5 ? "bg-black h-3" : "h-3"}
                    />
                  ))}
                </div>
                <p>50,000 VND</p>
              </div>
            </div>
          </>
        )}

        {/* ================= LECTURER ================= */}
        {isLecturer && (
          <>
            {/* LEFT */}
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold mb-4">Gói giảng viên</h2>

              <p className="mb-2">Đã dùng: 15 / 50</p>
              <div className="bg-gray-200 h-2 rounded mb-2">
                <div className="bg-purple-600 h-2 w-[30%]" />
              </div>

              <p className="text-sm text-gray-500">Còn 35 lượt</p>
            </div>

            {/* RIGHT */}
            <div className="bg-white p-6 rounded-xl border">
              <h2 className="font-semibold mb-4">Mua thêm lượt</h2>

              {/* đã mua */}
              <p className="mb-2">
                Đã mua:{" "}
                <span className="text-purple-600 font-semibold">
                  {purchased}
                </span>{" "}
                lượt
              </p>

              <p className="text-sm text-gray-600 mb-2">
                5,000 VND / lượt
              </p>

              {/* input */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border p-2 rounded w-full mb-3"
              />

              {/* total */}
              <p className="mb-3">
                Tổng:{" "}
                <span className="text-purple-600 font-semibold">
                  {total.toLocaleString()} VND
                </span>
              </p>

              <button
                onClick={handlePay}
                className="w-full bg-purple-600 text-white p-3 rounded mb-4 flex justify-center gap-2"
              >
                <Smartphone /> BKPay
              </button>

              {/* QR */}
              <div className="bg-gray-50 p-6 rounded text-center">
                <div className="grid grid-cols-8 gap-1 w-40 mx-auto mb-2">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div
                      key={i}
                      className={Math.random() > 0.5 ? "bg-black h-3" : "h-3"}
                    />
                  ))}
                </div>

                <p>{total.toLocaleString()} VND</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}