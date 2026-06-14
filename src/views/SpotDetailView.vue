<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useCityTour } from '@/composables/useCityTour'

const route = useRoute()
const { getSpotById } = useCityTour()

// 🌟 1. 精準抓取網址對應的單一卡片詳細資料物件
const spot = computed(() => getSpotById(route.params.id))

// 🌟 2. 攔截是從哪個分類點進來的 (?fromType=spot 或是 ?fromType=food)
const fromType = computed(() => route.query.fromType || '')

// 🌟 3. 核心：智慧判定返回按鈕的跳轉路徑
const backUrl = computed(() => {
    if (fromType.value) {
        // 如果原本有分類篩選，回去時就自動補上該 query
        return `/cities/${spot.value.city}?type=${fromType.value}`
    }
    // 如果原本是全部探索，返回時就回到純城市頁面
    return `/cities/${spot.value.city}`
})

// 判定是不是美食分頁（用來做畫面視覺微調）
const isFoodMode = computed(() => spot.value.type === 'food' || fromType.value === 'food')
</script>

<template>
    <div class="detail-container" :class="{ 'food-theme': isFoodMode }">
        <header class="detail-header">
            <RouterLink :to="backUrl" class="back-link">
                <span>⬅️ 返回 {{ spot.cityName }} 景點列表</span>
            </RouterLink>
            <span class="category-badge">{{ spot.type === 'food' ? '🍕 在地美食' : '🎬 網美秘境' }}</span>
        </header>

        <main class="main-content" v-if="spot.name">
            <h1 class="spot-title">{{ spot.name }}</h1>
            <p class="spot-tags">{{ spot.tag }}</p>

            <div class="info-grid">
                <div class="text-card">
                    <h3>ℹ️ 景點概述</h3>
                    <p class="desc">{{ spot.description }}</p>

                    <div v-if="spot.type === 'spot' && spot.culture" class="sub-info">
                        <h4>🏛️ 當地人文歷史背景</h4>
                        <p>{{ spot.culture }}</p>
                    </div>
                    <div v-if="spot.type === 'food' && spot.food" class="sub-info highlight-box">
                        <h4>🍜 饕客私藏風味指南</h4>
                        <p>{{ spot.food }}</p>
                    </div>
                </div>

                <div class="cover-image-box">
                    <img :src="spot.type === 'food' ? spot.foodImg : spot.imgUrl" :alt="spot.name">
                </div>
            </div>

            <section class="gallery-section" v-if="spot.type === 'food' && spot.foodGallery?.length">
                <h3 class="gallery-title">📸 視覺與味蕾的沉浸相簿</h3>
                <div class="asymmetric-gallery">
                    <div v-for="(img, index) in spot.foodGallery" :key="index" :class="`gallery-item-` + (index + 1)">
                        <img :src="img" alt="美食側拍">
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
/* 這裡可以放你原本寫好的漂亮樣式 */
.detail-container {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.detail-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.back-link {
    text-decoration: none;
    color: #1e293b;
    font-weight: bold;
    font-size: 1.1rem;
}

.back-link:hover {
    color: #ff5a5f;
}

.info-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    margin-top: 20px;
}

.cover-image-box {
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cover-image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.highlight-box {
    background: #fffdf5;
    border-left: 5px solid #f59e0b;
    padding: 15px;
    border-radius: 4px;
    color: #b45309;
}

/* 不對稱相簿網格設計 */
.asymmetric-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.asymmetric-gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
}

@media (max-width: 768px) {

    .info-grid,
    .asymmetric-gallery {
        grid-template-columns: 1fr;
    }
}
</style>