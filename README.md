# Minh Thang Bui — Robotics Research Portfolio (V1)

Website giới thiệu nghiên cứu với video UR10 né vật cản động trong suốt làm điểm nhấn. Giao diện viết bằng **Astro + HTML/CSS/JavaScript**, triển khai miễn phí trên **GitHub Pages**. Không dùng tracking, font CDN hay dịch vụ ngoài để tải trang.

## Xem thử ngay (không cần cài Astro)

Mở file `dist/index.html` bằng trình duyệt. Nếu trình duyệt chặn tải video từ `file://`, hãy chạy một web server trong thư mục `dist`:

```bash
cd dist
python3 -m http.server 8000
# Mở http://localhost:8000
```

Thư mục `dist/` đính kèm là **bản xem trước tĩnh** của website. Khi publish lên GitHub, workflow sẽ tạo `dist/` mới bằng Astro.

## Đưa lên GitHub Pages

1. Trên GitHub, tạo repo public mới. Cách gọn nhất là đặt tên repo đúng dạng **`<github-username>.github.io`**. Nếu thích repo tên khác (ví dụ `robotics-portfolio`) thì cũng được — cấu hình sẽ tự tạo đường dẫn có tên repo.
2. Giải nén cả dự án, rồi đưa toàn bộ file/folder vào repo (phải có `package.json`, `src/`, `public/`, và `.github/workflows/deploy.yml`). Không upload nguyên file ZIP mà không giải nén.
3. Vào **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push lên nhánh `main` hoặc vào **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Chờ workflow hoàn thành để nhận URL.

Nếu dùng Git trong terminal:

```bash
git init
git add .
git commit -m "Initial robotics research portfolio"
git branch -M main
git remote add origin https://github.com/<github-username>/<repo-name>.git
git push -u origin main
```

Workflow GitHub sẽ tự cài Astro và build lại từ `src/pages/index.astro`; không cần build thủ công trước khi push.

## Chạy và chỉnh sửa trên máy

Yêu cầu: Node.js 22+ và mạng để cài package lần đầu.

```bash
npm install
npm run dev
# Astro dev server sẽ hiển thị địa chỉ localhost
```

| Muốn chỉnh | File cần sửa |
| --- | --- |
| Tên, câu giới thiệu, các đoạn nghiên cứu và DOI | `src/pages/index.astro` |
| Màu sắc, kích thước, bố cục desktop/mobile | `public/styles.css` |
| Nút phát video, modal, animation | `public/main.js` |
| Video hero (6 giây) | `public/media/ur10-hero.mp4` |
| Video đầy đủ (~20 giây) | `public/media/ur10-full-demo.mp4` |
| Khung hình cover | `public/media/ur10-poster.webp` |
| Quỹ đạo và magnetic field | `public/figures/trajectory.webp`, `magnetic-field.webp` |
| Cấu hình URL GitHub Pages | `astro.config.mjs` |

**Lưu ý:** Bản offline `dist/` không tự cập nhật sau khi sửa source. Muốn xem thay đổi thì chạy `npm run dev` (nếu đã cài Astro) hoặc `python3 scripts/build-static-preview.py` (nếu chỉ chỉnh HTML, CSS, JS và assets).

## Nội dung đã đưa vào

- Video UR10 với hai vật cản trong suốt (web-compressed, không ghép nội dung/mô phỏng thêm).
- Hình trajectory 3D và magnetic steering field từ hai PDF gốc do tác giả cung cấp.
- Sơ đồ radar → closing speed → magnetic avoidance leaf → RMPflow.
- Số liệu **multiple dynamic obstacles**, PF+Radar vs MS+Radar, 10 lần thử mỗi cấu hình:
  - Success rate: **20% vs 80%**.
  - Reactive clearing time: **1.12 ± 0.20 s vs 0.70 ± 0.12 s**.
- Hai công trình và DOI:
  - IEEE RA-L (2026): https://doi.org/10.1109/LRA.2026.3706942
  - IEEE Sensors Journal (issue 2026, DOI đăng ký 2025): https://doi.org/10.1109/JSEN.2025.3639627
- RB-Y1 ghi rõ **work in progress**, chưa công bố các kết quả chưa được xác nhận.

## Cần bổ sung sau (không cản trở bản V1)

- Link **Google Scholar profile trực tiếp** (hiện dùng link tìm kiếm tên, chưa tự đoán ID profile).
- Link **GitHub cá nhân** và CV (chưa có URL/file nên không đặt link giả).
- Ảnh chân dung độ phân giải cao nếu muốn.
- Video baseline Potential Field vs Magnetic Steering để thêm so sánh cạnh nhau.
- Dữ liệu `.mat`, `.csv`, `.npz` của đồ thị để tái dựng interactive animation; bản V1 dùng hình gốc.
- Chỉ public video/ảnh/chi tiết từ AIDIN hoặc các tư liệu bài báo khi đã có quyền sử dụng phù hợp. PDF toàn văn IEEE **không** được nhúng hoặc phân phối lại trong dự án; link dẫn tới DOI của publisher.

## Lưu ý phương pháp khoa học

Trong bài RA-L, radar cung cấp phép đo **vật cản gần nhất** ở mỗi update; thử nghiệm nhiều vật cản đánh giá các tương tác liên tiếp. Website không tuyên bố multi-target tracking đồng thời, whole-arm collision safety, hoặc chứng minh formal safety guarantee. Các số liệu định lượng là kết quả có điều kiện trong bài, không phải cam kết tổng quát.

## Tình trạng kiểm thử

- Bản offline tĩnh xem trực tiếp trên trình duyệt và kiểm tra desktop/mobile.
- Video nén H.264 MP4 có `faststart`, poster ảnh WebP.
- `astro build` cần tải dependency qua npm, do đó sẽ được thực thi bởi GitHub Actions khi đẩy repo (không có npm registry trong môi trường tạo bản V1).

© 2026 Minh Thang Bui. All research materials and footage remain subject to their respective rights holders' permissions; no license to redistribute them is implied by this repository.
# About_me
