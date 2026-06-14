<script setup>
import { RouterView, RouterLink } from 'vue-router'
// 💡 建議也把 RouterLink import 進來，這樣最標準！
</script>

<template>
  <header>
    <nav class="main-nav">
      <RouterLink to="/cities">首頁 (城市列表)</RouterLink>

    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* 幫你加一點點乾淨的排版，讓按鈕拉開 */
.main-nav {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}

.main-nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

/* 點擊到該路由時，按鈕會自動變色（Vue內建功能） */
.router-link-active {
  color: #42b983 !important;
}

/* =========================================================================
   🌅 全站頂級沉浸式：高質感度假風「藍天白雲陽光」固定底圖視差系統
   ========================================================================= */
.page-container {
  min-height: 100vh;
  background-color: #f4f7f9;
  /* 融入高質感的明亮海岸線底圖 */
  background-image: linear-gradient(rgba(240, 244, 248, 0.75), rgba(235, 241, 245, 0.82)),
    url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600');

  /* 視差滾動核心 */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* 頂部大 Banner 固定背景視差 */
.hero-banner {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.2)),
    url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600');
}

/* =========================================================================
   📐 補齊第二頁與第三頁專屬的高階「按鈕發亮鎖死」與 320px RWD 樣式
   ========================================================================= */
.filter-group {
  display: flex;
  gap: 14px;
  margin-bottom: 35px;
}

.filter-btn {
  padding: 14px 28px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  text-decoration: none;
  color: #475569;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.filter-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  color: #1e293b;
}

/* 🔒 終極鎖死：當按鈕被選中發亮時，展現極高規格的 Airbnb 橘紅呼吸微光 */
.active-lock {
  background-color: #ff5a5f !important;
  color: #ffffff !important;
  border-color: #ff5a5f !important;
  box-shadow: 0 8px 20px rgba(255, 90, 95, 0.4) !important;
  transform: translateY(-2px) scale(1.02);
}

/* 📐 RWD 320px 超美型單手點擊自適應 */
@media (max-width: 768px) {
  .filter-group {
    flex-direction: column;
    gap: 10px;
  }

  .filter-btn {
    padding: 16px;
    text-align: center;
    font-size: 1.1rem;
    border-radius: 14px;
  }

  .hero-content h1 {
    font-size: 2rem !important;
  }
}
</style>