# Hướng dẫn tùy biến Portfolio (chi tiết)

Tài liệu này hướng dẫn **từng bước** để bạn tự chỉnh portfolio: thêm blog, chèn ảnh đúng chỗ, đổi ngày đăng, đổi tên/avatar, và dùng IDE nào để **vừa sửa code vừa xem trang cập nhật ngay**.

Không cần biết framework — chỉ HTML / CSS / JS thuần.

---

## Mục lục

1. [Chuẩn bị & mở dự án](#1-chuẩn-bị--mở-dự-án)
2. [IDE nào dùng? Xem live preview](#2-ide-nào-dùng-xem-live-preview)
3. [Bản đồ thư mục (biết file nào sửa gì)](#3-bản-đồ-thư-mục)
4. [Đổi thông tin cá nhân (tên, bio, email)](#4-đổi-thông-tin-cá-nhân)
5. [Đổi ảnh đại diện (avatar)](#5-đổi-ảnh-đại-diện-avatar)
6. [Thêm bài blog / write-up mới](#6-thêm-bài-blog--write-up-mới)
7. [Chỉnh ngày tháng đăng blog](#7-chỉnh-ngày-tháng-đăng-blog)
8. [Thêm / thay ảnh trong bài viết](#8-thêm--thay-ảnh-trong-bài-viết)
9. [Sửa nội dung từng section portfolio](#9-sửa-nội-dung-từng-section-portfolio)
10. [Thêm category blog mới (SOC, HTB, …)](#10-thêm-category-blog-mới)
11. [Filter blog & URL](#11-filter-blog--url)
12. [Theme tối / sáng](#12-theme-tối--sáng)
13. [Đưa lên GitHub Pages (public)](#13-đưa-lên-github-pages)
14. [Checklist trước khi share](#14-checklist-trước-khi-share)
15. [Lỗi thường gặp](#15-lỗi-thường-gặp)

---

## 1. Chuẩn bị & mở dự án

### Yêu cầu

| Công cụ | Bắt buộc? | Ghi chú |
|---------|-----------|---------|
| Trình duyệt (Chrome / Edge / Firefox) | Có | Xem trang |
| VS Code (hoặc Cursor) | Rất nên | Sửa file + Live Preview |
| Python **hoặc** Node.js | Nên có | Chạy server local ổn định hơn `file://` |

### Mở thư mục dự án

1. Giải nén / clone repo `PorfolioGrok`
2. Mở thư mục bằng IDE (File → Open Folder)
3. Cấu trúc quan trọng:

```text
PorfolioGrok/
├── index.html          ← Trang chủ portfolio
├── style.css           ← Giao diện (màu, layout)
├── script.js           ← Theme, menu, filter blog
├── HUONG-DAN.md        ← File bạn đang đọc
├── README.md
└── blog/
    ├── posts-data.js   ← ★ Danh sách bài (ngày, tiêu đề, category)
    ├── index.html      ← Hub blog (filter All / SOC / HTB / …)
    ├── writeup-template.html
    ├── htb/
    ├── soc/
    ├── tryhackme/
    ├── ad/
    └── footprinting/
```

---

## 2. IDE nào dùng? Xem live preview

Mục tiêu: **sửa file → lưu → trình duyệt tự refresh** (hoặc một click), thấy ngay kết quả.

### Lựa chọn khuyến nghị

| IDE / editor | Độ phù hợp | Live preview |
|--------------|------------|--------------|
| **Visual Studio Code** | ★★★★★ (khuyến nghị) | Extension **Live Server** hoặc **Live Preview** |
| **Cursor** | ★★★★★ | Cũng là VS Code-based → cài Live Server giống VS Code |
| **VS Code + Python server** | ★★★★★ | Ổn định, không cần extension |
| WebStorm / PhpStorm | ★★★★ | Built-in preview / server |
| Notepad++ / chỉ Notepad | ★★ | Phải F5 thủ công, dễ sai path |
| Mở `index.html` bằng double-click | ★★ | Hoạt động một phần; filter URL / một số path kém ổn |

**Khuyến nghị chính:** **VS Code** hoặc **Cursor** + **Live Server** (hoặc Python HTTP server).

---

### Cách A — VS Code / Cursor + extension Live Server (trực quan nhất)

1. Cài [Visual Studio Code](https://code.visualstudio.com/) hoặc Cursor.
2. Mở thư mục `PorfolioGrok`.
3. Vào Extensions (`Ctrl+Shift+X`), tìm và cài:
   - **Live Server** (Ritwick Dey) — phổ biến nhất  
   - *hoặc* **Live Preview** (Microsoft)
4. Chuột phải vào `index.html` → **Open with Live Server**  
   (hoặc bấm **Go Live** góc phải dưới).
5. Trình duyệt mở `http://127.0.0.1:5500` (port có thể khác).
6. Mỗi lần bạn **Ctrl+S** lưu file HTML/CSS/JS → trang **tự reload**.

**Mẹo làm việc song song:**

- Màn hình / cửa sổ trái: VS Code  
- Phải: Chrome với trang portfolio  
- Sửa → Save → nhìn bên phải

Với bài blog: Open with Live Server rồi vào `blog/index.html` hoặc click card để mở trang chi tiết.

---

### Cách B — Python (không cần extension)

Trong terminal của VS Code (`Ctrl+`` `):

```powershell
cd "D:\All about git repo\PorfolioGrok"
python -m http.server 8080
```

Mở trình duyệt: [http://localhost:8080](http://localhost:8080)

- Sửa file → **Save** → trong trình duyệt bấm **F5** (hoặc bật extension auto-reload nếu có).
- Dừng server: `Ctrl+C` trong terminal.

---

### Cách C — Node.js (`npx serve`)

```powershell
cd "D:\All about git repo\PorfolioGrok"
npx --yes serve .
```

Làm theo URL mà terminal in ra (thường `http://localhost:3000`).

---

### Cách D — Chỉ double-click `index.html`

- Vẫn xem được layout cơ bản.
- **Nhược điểm:** một số trình duyệt hạn chế `file://` với JS/history; filter `?cat=htb` có thể kém ổn.
- **Nên dùng server local** (A/B/C) khi chỉnh blog.

---

### Gợi ý layout màn hình (workflow trực quan)

```text
┌─────────────────────────┬──────────────────────────┐
│  VS Code / Cursor       │  Chrome / Edge           │
│  - index.html           │  http://localhost:5500   │
│  - blog/posts-data.js   │  hoặc :8080              │
│  - blog/htb/xxx.html    │  F5 nếu không auto-reload│
│  - style.css            │                          │
└─────────────────────────┴──────────────────────────┘
```

1. Sửa text trong editor  
2. `Ctrl+S`  
3. Nhìn trình duyệt (Live Server tự refresh)

---

## 3. Bản đồ thư mục

| Bạn muốn… | Sửa file nào? |
|-----------|----------------|
| Tên, About, Skills, Contact trên trang chủ | `index.html` |
| Màu sắc, khoảng cách, dark mode | `style.css` |
| Hành vi filter blog, theme, form | `script.js` |
| **Danh sách card blog** (tiêu đề, ngày, category, link) | `blog/posts-data.js` |
| Nội dung đầy đủ 1 bài write-up | `blog/<category>/<tên-file>.html` |
| Trang hub filter All/SOC/HTB | `blog/index.html` (thường không cần sửa list — list do JS render) |
| Bản gốc copy khi tạo bài mới | `blog/writeup-template.html` |
| Ảnh avatar / screenshot write-up | thư mục `assets/` (bạn tự tạo) |

---

## 4. Đổi thông tin cá nhân

Mở `index.html`, tìm và thay các chỗ sau (có thể `Ctrl+F`):

| Placeholder | Ý nghĩa |
|-------------|---------|
| `Nguyễn Trường Bảo` | Tên hiển thị (sidebar, title, footer) |
| `bigzero3939@gmail.com` | Email |
| `zewolkt3939` | GitHub / LinkedIn / X |
| Đoạn trong `#about` | Giới thiệu bản thân |
| `Vietnam · Open to remote` | Địa điểm |

**Ví dụ đổi title trình duyệt:**

```html
<title>Nguyen Van A | Cybersecurity Student</title>
```

**Ví dụ đổi tên sidebar:**

```html
<h1 class="sidebar-name">Nguyen Van A</h1>
<p class="sidebar-title">Cybersecurity Student</p>
```

### Đồng bộ sidebar trên trang blog

Các trang trong `blog/htb/`, `blog/soc/`, … cũng có sidebar với `Nguyễn Trường Bảo`.  
Sau khi đổi tên trên `index.html`, nên **find & replace** `Nguyễn Trường Bảo` toàn project (trong VS Code: `Ctrl+Shift+H`) để đồng bộ.

---

## 5. Đổi ảnh đại diện (avatar)

### Bước 1 — Tạo thư mục ảnh

Trong root dự án:

```text
PorfolioGrok/
└── assets/
    └── avatar.jpg    ← ảnh vuông của bạn (khuyến nghị ≥ 280×280 px)
```

### Bước 2 — Sửa thẻ `<img class="avatar">`

Trong `index.html` (và các trang blog nếu muốn):

**Trước (placeholder online):**

```html
<img
  class="avatar"
  src="https://api.dicebear.com/9.x/shapes/svg?seed=cybersec&backgroundColor=1a1a2e"
  alt="Avatar của Nguyễn Trường Bảo"
  width="140"
  height="140"
/>
```

**Sau (ảnh local):**

```html
<img
  class="avatar"
  src="assets/avatar.jpg"
  alt="Avatar của Nguyen Van A"
  width="140"
  height="140"
/>
```

### Path ảnh trên trang blog con

| File đang ở | `src` avatar đúng |
|-------------|-------------------|
| `index.html` | `assets/avatar.jpg` |
| `blog/index.html` | `../assets/avatar.jpg` |
| `blog/htb/sample-linux-machine.html` | `../../assets/avatar.jpg` |

**Quy tắc:** mỗi lần “lên” một thư mục cha = thêm một `../`.

---

## 6. Thêm bài blog / write-up mới

Có **2 việc bắt buộc**: (1) tạo file HTML bài viết, (2) đăng ký trong catalog.

### Tổng quan 4 bước

```text
1. Copy template → đúng thư mục category
2. Sửa path CSS/JS/link (nếu cần)
3. Viết nội dung + ảnh
4. Thêm object vào blog/posts-data.js
     ↓
  Card tự hiện trên trang chủ & blog hub
```

---

### Bước 1 — Chọn category & copy template

| Category | Thư mục |
|----------|---------|
| SOC | `blog/soc/` |
| HTB | `blog/htb/` |
| TryHackMe | `blog/tryhackme/` |
| AD | `blog/ad/` |
| Footprinting | `blog/footprinting/` |

**Ví dụ:** bài HTB tên “RouterSpace”

1. Copy file:

   ```text
   blog/writeup-template.html
   → blog/htb/routerspace.html
   ```

2. Đặt **tên file** bằng chữ thường, gạch ngang, không dấu, không khoảng trắng:

   - ✅ `routerspace.html`, `windows-event-logs.html`
   - ❌ `Router Space.html`, `bài 1.html`

---

### Bước 2 — Sửa đường dẫn trong file mới

Template gốc nằm ở `blog/writeup-template.html` (1 cấp dưới root).  
File copy vào `blog/htb/` nằm **sâu hơn 1 cấp** → cần path `../../`.

Trong `blog/htb/routerspace.html`, kiểm tra:

```html
<!-- CSS -->
<link rel="stylesheet" href="../../style.css" />

<!-- Nav portfolio -->
<a href="../../index.html#about" class="nav-link">About</a>
...
<a href="../index.html" class="nav-link active">Write-ups</a>

<!-- Quay lại hub -->
<a class="writeup-back" href="../index.html?cat=htb">← Back to HTB</a>

<!-- JS -->
<script src="../../script.js"></script>
```

Tham khảo file mẫu có sẵn (vd. `blog/htb/sample-linux-machine.html`) và copy cấu trúc path — **an toàn hơn** sửa tay từ template gốc.

---

### Bước 3 — Điền nội dung bài

Trong file HTML bài viết, tìm và thay:

| Vị trí | Việc cần làm |
|--------|----------------|
| `<title>…</title>` | Tiêu đề tab trình duyệt |
| `.writeup-title` | Tiêu đề lớn trang |
| `.writeup-lead` | Tóm tắt 1–2 câu |
| `.writeup-meta-row` | Badge category, difficulty, **ngày** |
| Các section `#overview`, `#enumeration`, … | Viết notes thật |
| `.code-block` | Dán lệnh / output (cắt bớt cho gọn) |
| `.img-placeholder` | Thay bằng thẻ `<img>` (xem mục 8) |
| Tags `.tag` | Từ khóa |

**Lưu ý đạo đức:** chỉ đăng write-up **bạn tự làm**. Không copy nguyên bài người khác.

---

### Bước 4 — Đăng ký card trong `blog/posts-data.js`

Mở `blog/posts-data.js`, **thêm 1 object** vào mảng `window.PORTFOLIO_POSTS` (thường chèn **đầu mảng** nếu muốn bài mới hiện trên cùng khi sort theo ngày):

```js
{
  id: "htb-routerspace",              // duy nhất, không trùng
  title: "HTB — RouterSpace",
  category: "htb",                    // soc | htb | tryhackme | ad | footprinting
  categoryLabel: "HTB",               // chữ trên badge
  date: "2026-04-12",                 // ★ ngày đăng (YYYY-MM-DD)
  difficulty: "Easy",                 // Easy | Medium | Hard | Insane | Notes
  excerpt:
    "Tóm tắt 1–2 câu hiện trên card. Nên viết ngắn, rõ attack path.",
  tags: ["Linux", "Web", "PrivEsc"],  // tối đa ~3 hiện trên card
  slug: "htb/routerspace.html",       // path tính từ thư mục blog/
  icon: "🎯",                         // emoji góc card
},
```

**Sau khi lưu `posts-data.js`:**

- Refresh trang chủ → section Write-ups có card mới  
- Refresh `blog/index.html` → filter HTB thấy bài mới  
- Click card → mở `blog/htb/routerspace.html`

Nếu **không thấy card:** kiểm tra (1) lỗi cú pháp JS (dấu phẩy), (2) `slug` đúng tên file, (3) server đang chạy đúng thư mục gốc.

---

### Không cần sửa `index.html` để thêm card

Danh sách card được **JS render** từ `posts-data.js`.  
Chỉ cần file HTML + entry trong catalog.

---

## 7. Chỉnh ngày tháng đăng blog

Ngày hiển thị ở **2 nơi** — nên sửa **cả hai** cho khớp.

### 7.1. Ngày trên card (trang chủ / blog hub)

File: `blog/posts-data.js`

```js
date: "2026-04-12",   // format BẮT BUỘC: YYYY-MM-DD
```

- Đúng: `"2026-03-15"`, `"2025-12-01"`
- Sai: `"15/03/2026"`, `"Mar 15, 2026"`, `"2026-3-5"` (nên pad `03`, `05`)

JS sẽ format thành dạng đọc được, ví dụ: **Apr 12, 2026**.

**Thứ tự card:** bài có `date` **mới hơn** hiện trước.

### 7.2. Ngày trên trang chi tiết write-up

File: `blog/htb/routerspace.html` (ví dụ)

```html
<div class="writeup-meta-row">
  <span class="cat-badge cat-htb">HTB</span>
  <span class="diff-badge diff-easy">Easy</span>
  <time datetime="2026-04-12">Apr 12, 2026</time>
</div>
```

| Thuộc tính | Ý nghĩa |
|------------|---------|
| `datetime="2026-04-12"` | Chuẩn máy / SEO (YYYY-MM-DD) |
| Text trong thẻ `Apr 12, 2026` | Chữ người đọc thấy |

Sửa **cả hai** cho cùng một ngày.

### 7.3. Bảng tra nhanh tháng (tiếng Anh — đang dùng trên site)

| Số | Viết tắt |
|----|----------|
| 01 | Jan |
| 02 | Feb |
| 03 | Mar |
| 04 | Apr |
| 05 | May |
| 06 | Jun |
| 07 | Jul |
| 08 | Aug |
| 09 | Sep |
| 10 | Oct |
| 11 | Nov |
| 12 | Dec |

Ví dụ `2026-08-06` → `datetime="2026-08-06"` và chữ `Aug 6, 2026`.

---

## 8. Thêm / thay ảnh trong bài viết

### 8.1. Tổ chức thư mục ảnh (khuyến nghị)

```text
PorfolioGrok/
└── assets/
    ├── avatar.jpg
    └── writeups/
        ├── htb-routerspace-nmap.png
        ├── htb-routerspace-foothold.png
        └── soc-eventlog-timeline.png
```

Đặt tên file rõ ràng, không dấu, không khoảng trắng.

### 8.2. Tìm vị trí placeholder trong HTML

Trong bài write-up, tìm block kiểu:

```html
<figure class="writeup-figure">
  <div class="img-placeholder" role="img" aria-label="Screenshot placeholder">
    📷 Screenshot placeholder — replace with your image
    ...
  </div>
  <figcaption>Figure: Overview / landing page</figcaption>
</figure>
```

### 8.3. Thay bằng ảnh thật

**Từ file trong `blog/htb/xxx.html`:**

```html
<figure class="writeup-figure">
  <img
    src="../../assets/writeups/htb-routerspace-nmap.png"
    alt="Nmap scan results for RouterSpace"
  />
  <figcaption>Figure 1 — Port scan overview</figcaption>
</figure>
```

**Bảng path nhanh:**

| File HTML ở | Path tới `assets/writeups/anh.png` |
|-------------|-------------------------------------|
| `blog/htb/*.html` | `../../assets/writeups/anh.png` |
| `blog/soc/*.html` | `../../assets/writeups/anh.png` |
| `blog/index.html` | `../assets/writeups/anh.png` |
| `index.html` | `assets/writeups/anh.png` |

### 8.4. Chèn ảnh ở **đúng chỗ bạn muốn** (không chỉ placeholder có sẵn)

Bạn có thể **dán thêm** block `<figure>` ở bất kỳ đâu trong `.writeup-section`:

```html
<section id="enumeration" class="writeup-section">
  <h2>Enumeration</h2>
  <p>Sau khi scan, các port sau mở...</p>

  <!-- Ảnh ngay sau đoạn mô tả -->
  <figure class="writeup-figure">
    <img src="../../assets/writeups/htb-ports.png" alt="Open ports" />
    <figcaption>Figure 2 — Open ports</figcaption>
  </figure>

  <h3>Port scan</h3>
  <pre class="code-block"><code>nmap -sC -sV 10.10.x.x</code></pre>

  <!-- Ảnh sau code block -->
  <figure class="writeup-figure">
    <img src="../../assets/writeups/htb-nmap-full.png" alt="Full nmap output" />
    <figcaption>Figure 3 — Full nmap</figcaption>
  </figure>
</section>
```

**Thứ tự trong HTML = thứ tự trên trang:** đoạn nào viết trước sẽ hiện trước.

### 8.5. Ảnh từ URL ngoài (không khuyến nghị lâu dài)

```html
<img src="https://example.com/image.png" alt="Mô tả" />
```

Ảnh local trong `assets/` **ổn định hơn** (không sợ link chết, portfolio offline vẫn xem được).

### 8.6. Tối ưu ảnh

- Format: PNG (screenshot UI) hoặc JPG (ảnh chụp)
- Nên resize chiều ngang ~1200–1600px (không cần 4K full)
- `alt="..."` mô tả ngắn (accessibility + SEO)

CSS đã có `img { max-width: 100% }` → ảnh không tràn layout.

### 8.7. Ảnh trên card blog?

Hiện card dùng **emoji `icon`** trong `posts-data.js`, chưa dùng cover image.  
Muốn đổi “ảnh card” đơn giản: đổi field `icon: "🎯"` sang emoji khác.

---

## 9. Sửa nội dung từng section portfolio

Toàn bộ nằm trong `index.html`:

| Section | `id` | Nội dung |
|---------|------|----------|
| About | `#about` | Giới thiệu, current focus |
| Skills | `#skills` | Thẻ `.tag` trong `.skill-card` |
| Certifications | `#certifications` | `.cert-card` |
| Write-ups | `#writeups` | Filter + grid (data từ `posts-data.js`) |
| Projects | `#projects` | `.project-card` |
| Contact | `#contact` | Email, form demo |

### Thêm skill tag

```html
<span class="tag">Wireshark</span>
```

### Thêm project

Copy nguyên một `<article class="project-card">…</article>`, sửa title / desc / link GitHub.

### Thêm chứng chỉ thật

Copy `.cert-card`, **bỏ** class `cert-planned` nếu đã earn, cập nhật ngày Issued và link verify.

---

## 10. Thêm category blog mới

Ví dụ thêm mục **Malware**:

### 1) Catalog categories — `blog/posts-data.js`

```js
window.PORTFOLIO_CATEGORIES = [
  // ... các mục cũ ...
  { id: "malware", label: "Malware", description: "Malware analysis notes" },
];
```

### 2) Thư mục

```text
blog/malware/
```

### 3) Màu badge (tùy chọn) — `style.css`

```css
.cat-malware {
  background: rgba(236, 72, 153, 0.12);
  color: #db2777;
}
[data-theme="dark"] .cat-malware {
  color: #f472b6;
}
```

### 4) Bài đầu + entry trong `PORTFOLIO_POSTS` với `category: "malware"`.

### 5) Cập nhật link category tĩnh trên các trang write-up cũ (sidebar) nếu muốn hiện “Malware” — hoặc chỉ dùng filter trên hub (JS tự vẽ từ `PORTFOLIO_CATEGORIES`).

---

## 11. Filter blog & URL

| Hành động | Kết quả |
|-----------|---------|
| Bấm chip **SOC** trên hub | Chỉ còn bài `category: "soc"` |
| URL `blog/index.html?cat=htb` | Mở thẳng filter HTB |
| `?cat=all` hoặc không có `cat` | Hiện tất cả |

Trên **trang chủ**, filter không đổi URL (chỉ lọc tại chỗ).  
Trên **blog hub**, filter có thể cập nhật `?cat=`.

---

## 12. Theme tối / sáng

- Nút **Dark mode / Light mode** trên sidebar hoặc header mobile.
- Lựa chọn lưu trong trình duyệt: key `portfolio-theme`.
- Không cần sửa code để đổi theme hàng ngày.

Muốn **mặc định luôn dark**, có thể sửa script inline đầu `index.html` — nâng cao, không bắt buộc.

---

## 13. Đưa lên GitHub Pages

1. Tạo repo GitHub, push toàn bộ thư mục (kể cả `assets/`).
2. **Settings → Pages → Deploy from branch** `main` / folder `/ (root)`.
3. Vài phút sau: `https://<username>.github.io/<repo>/`
4. Kiểm tra:
   - Avatar / screenshot load đúng
   - Click write-up không 404 (đúng `slug` trong `posts-data.js`)

**Lưu ý:** sau khi sửa local, `git add` → `commit` → `push` thì site public mới cập nhật.

---

## 14. Checklist trước khi share

- [ ] Đã thay `Nguyễn Trường Bảo`, email, link social
- [ ] Avatar local hoặc URL ổn định
- [ ] Write-up là **notes của bạn**, không copy full người khác
- [ ] `posts-data.js`: `date` format `YYYY-MM-DD`, `slug` khớp file
- [ ] Ảnh trong `assets/writeups/` và path `../../assets/...` đúng
- [ ] Ngày trên card **=** ngày trên trang chi tiết
- [ ] Mở bằng Live Server / `localhost`, test filter All → từng category
- [ ] Mobile: thu nhỏ cửa sổ trình duyệt, mở menu hamburger

---

## 15. Lỗi thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách xử lý |
|------------|------------------------|------------|
| Card không xuất hiện | Quên thêm vào `posts-data.js` hoặc lỗi dấu phẩy JS | Mở DevTools (F12) → tab Console xem lỗi đỏ |
| Click card → 404 | `slug` sai tên file / sai thư mục | `slug: "htb/ten-file.html"` khớp path thật |
| Ảnh vỡ (icon broken) | Path `../` thiếu/thừa cấp | Xem bảng path mục 5 & 8 |
| Sửa HTML mà card vẫn title cũ | Chỉ sửa HTML, chưa sửa `posts-data.js` | Card lấy title/ngày từ **posts-data.js** |
| Filter không chạy | Mở bằng `file://` hoặc chưa load `posts-data.js` | Dùng Live Server / `python -m http.server` |
| CSS không đổi | Cache trình duyệt | Hard refresh: `Ctrl+Shift+R` |
| Sidebar blog vẫn “Nguyễn Trường Bảo” | Chỉ sửa `index.html` | Replace toàn project |
| Live Server không reload | Chưa Save file | `Ctrl+S`; kiểm tra Go Live đang chạy |

### Kiểm tra nhanh `posts-data.js`

1. F12 → Console  
2. Gõ: `PORTFOLIO_POSTS.length` → Enter  
3. Phải ra số bài (vd. `7` hoặc nhiều hơn sau khi thêm)

---

## Phụ lục A — Workflow mẫu: thêm 1 bài HTB trong 10 phút

1. Bật Live Server trên `index.html`.  
2. Copy `blog/htb/sample-linux-machine.html` → `blog/htb/my-box.html`.  
3. Sửa title, ngày, overview, dán 1–2 screenshot vào `assets/writeups/`.  
4. Thêm object trong `posts-data.js` với `date` hôm nay và `slug: "htb/my-box.html"`.  
5. Save → refresh → thấy card → click vào đọc.  
6. (Tùy chọn) filter **HTB** để chỉ xem bài HTB.

---

## Phụ lục B — File nào *không* cần đụng khi mới bắt đầu

| File | Khi nào mới sửa |
|------|------------------|
| `script.js` | Muốn đổi logic filter / form |
| `style.css` | Muốn đổi màu, font, layout |
| `blog/index.html` | Muốn đổi intro text hub (list card thì **không** sửa tay) |

Ưu tiên làm quen: **`index.html`** + **`blog/posts-data.js`** + **1 file trong `blog/htb/`**.

---

## Phụ lục C — Thuật ngữ nhanh

| Thuật ngữ | Nghĩa trong project này |
|-----------|-------------------------|
| **Card** | Ô bài viết trên grid (tiêu đề + excerpt + ngày) |
| **Catalog** | Mảng trong `posts-data.js` |
| **Slug** | Đường dẫn file bài tính từ `blog/` |
| **Category** | SOC / HTB / THM / AD / Footprinting |
| **Write-up page** | Trang HTML chi tiết 1 bài |
| **Hub** | `blog/index.html` — danh sách + filter |
| **Live reload** | Lưu file → trình duyệt tự tải lại |

---

## Hỗ trợ thêm

- Tóm tắt ngắn: xem `README.md`  
- Cấu trúc template section: mở `blog/writeup-template.html` hoặc bất kỳ bài mẫu trong `blog/htb/`, `blog/soc/`

Chúc bạn customize portfolio mượt — nhớ: **sửa → Ctrl+S → nhìn trình duyệt**.
