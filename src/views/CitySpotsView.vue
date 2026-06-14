<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useCityTour } from '@/composables/useCityTour'
import SpotCardWrapper from '@/components/SpotCardWrapper.vue'
import SpotItem from '@/components/SpotItem.vue'

const route = useRoute()
const { allSpots } = useCityTour()

// 🔍 核心響應式變數：精準抓取網址參數
const currentCity = computed(() => route.params.city)
const currentQueryType = computed(() => route.query.type) // 可能是 undefined, 'spot', 或 'food'

// =========================================================================
// 🎯 1. 核心卡片牆資料流：嚴格過濾「當前城市」與「當前類型」的卡片
// =========================================================================
const displaySpots = computed(() => {
    // 先過濾出屬於這個城市的卡片
    const cityCards = allSpots.value.filter(spot => spot.city === currentCity.value)

    // 如果網址指定 type=food，就「只」留下 type 確實等於 food 的卡片
    if (currentQueryType.value === 'food') {
        return cityCards.filter(spot => spot.type === 'food')
    }
    // 如果網址指定 type=spot，就「只」留下 type 確實等於 spot 的卡片
    if (currentQueryType.value === 'spot') {
        return cityCards.filter(spot => spot.type === 'spot')
    }
    // 預設（全部探索）：顯示該城市所有的卡片
    return cityCards
})

// 抓取當前城市的正確中文名稱
const cityNameDisplay = computed(() => {
    const found = allSpots.value.find(spot => spot.city === currentCity.value)
    return found ? found.cityName : currentCity.value
})

// =========================================================================
// 🌟 2. 頂部大看板資料流：修正後備邏輯，拒絕任何跨界交叉污染！
// =========================================================================
const currentCityRawData = computed(() => {
    if (currentQueryType.value === 'food') {
        // 🎯 修正：在美食分頁，就絕對只能抓 type === 'food' 的資料！
        return allSpots.value.find(spot => spot.city === currentCity.value && spot.type === 'food') || {}
    }
    // 🎯 在景點或全部探索分頁，預設拿景點（type === 'spot'）的資料當看板背景
    return allSpots.value.find(spot => spot.city === currentCity.value && spot.type === 'spot') || {}
})

// =========================================================================
// 🖼️ 3. 動態控制文字與標題
// =========================================================================
const pageHeadingContent = computed(() => {
    if (currentQueryType.value === 'food') {
        return {
            title: `🍕 ${cityNameDisplay.value}・在地饕客必吃美食清單`,
            subtitle: '深入老街與夜市巷弄！由當地人私藏推薦的頂級正宗風味。'
        }
    }
    if (currentQueryType.value === 'spot') {
        return {
            title: `🎬 ${cityNameDisplay.value}・IG 網美必訪秘境導覽`,
            subtitle: '絕美日落、科幻建築與歷史遺跡一次搜羅！'
        }
    }
    return {
        title: `📍 探索精選：${cityNameDisplay.value}完整全攻略`,
        subtitle: '為你打包極致視覺與味蕾的雙重饗宴。'
    }
})
</script>

<template>
    <div class="page-container">
        <div class="content-section">

            <div class="filter-group">
                <RouterLink :to="`/cities/${currentCity}`" class="filter-btn"
                    :class="{ 'active-lock': !currentQueryType }">全部探索</RouterLink>
                <RouterLink :to="`/cities/${currentCity}?type=spot`" class="filter-btn"
                    :class="{ 'active-lock': currentQueryType === 'spot' }">🎬 網美景點</RouterLink>
                <RouterLink :to="`/cities/${currentCity}?type=food`" class="filter-btn"
                    :class="{ 'active-lock': currentQueryType === 'food' }">🍕 在地美食</RouterLink>
            </div>

            <header class="premium-nav-header">
                <div class="action-box">
                    <RouterLink :to="currentQueryType ? `/cities/${currentCity}` : '/cities'" class="back-step-btn">
                        <span>⬅️</span>
                        <span>{{ currentQueryType ? '返回全部探索' : '返回城市大區' }}</span>
                    </RouterLink>
                </div>
                <div class="title-info-box">
                    <h2 class="dynamic-title">{{ pageHeadingContent.title }}</h2>
                    <p class="dynamic-subtitle">{{ pageHeadingContent.subtitle }}</p>
                </div>
            </header>

            <div class="city-intro-board">
                <div v-if="currentQueryType === 'food'" class="intro-content-wrapper">
                    <div class="intro-text-zone">
                        <h3>🍜 當地必吃特色美食推薦</h3>
                        <p class="highlight-text-box">
                            {{ currentCityRawData.food }}
                        </p>
                    </div>
                    <div class="intro-img-zone" v-if="currentCityRawData.foodImg">
                        <img :src="currentCityRawData.foodImg" :alt="`${cityNameDisplay}美食主圖`">
                    </div>
                </div>

                <div v-if="currentQueryType === 'spot' && currentCityRawData.spotGallery && currentCityRawData.spotGallery.length"
                    class="full-width-gallery-section">
                    <h4 class="gallery-section-title">📷 景點精選實拍相簿</h4>
                    <div class="spot-gallery-grid">
                        <div v-for="(img, index) in currentCityRawData.spotGallery" :key="index" class="gallery-card">
                            <img :src="img" alt="景點實拍圖" class="spot-gallery-thumb" />
                        </div>
                    </div>
                </div>
            </div>

            <ul class="spot-grid">
                <li v-for="spot in displaySpots" :key="spot.id">
                    <RouterLink
                        :to="{ path: `/cities/${currentCity}/spots/${spot.id}`, query: { fromType: currentQueryType || '' } }"
                        class="card-link">
                        <SpotCardWrapper>
                            <SpotItem :imgUrl="spot.type === 'food' ? spot.foodImg : spot.imgUrl"
                                :title="spot.type === 'food' ? spot.name : spot.name" :tag="spot.tag"
                                :description="spot.type === 'food' ? spot.description : spot.description" />
                        </SpotCardWrapper>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* 保持你原本美麗的 CSS 樣式不變 */
.premium-nav-header {
    display: flex;
    align-items: center;
    gap: 30px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 24px 32px;
    border-radius: 20px;
    margin-bottom: 35px;
}

.back-step-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    background-color: #1e293b;
    color: #ffffff;
    text-decoration: none;
    border-radius: 12px;
    font-weight: bold;
    white-space: nowrap;
    transition: all 0.2s;
}

.back-step-btn:hover {
    background-color: #ff5a5f;
    transform: translateY(-2px);
}

.title-info-box {
    flex-grow: 1;
    border-left: 2px solid #e2e8f0;
    padding-left: 25px;
}

.dynamic-title {
    font-size: 1.5rem;
    color: #0f172a;
    margin: 0 0 6px 0;
    font-weight: 800;
}

.dynamic-subtitle {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
}

.filter-group {
    display: flex;
    gap: 12px;
    margin-bottom: 25px;
}

.filter-btn {
    padding: 12px 24px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    text-decoration: none;
    color: #475569;
    font-weight: bold;
}

.active-lock {
    background-color: #ff5a5f !important;
    color: white !important;
    box-shadow: 0 6px 15px rgba(255, 90, 95, 0.3) !important;
}

.spot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    list-style: none;
    padding: 0;
}

.card-link {
    text-decoration: none;
    color: inherit;
}

.city-intro-board {
    margin: 20px 0 40px 0;
    width: 100%;
}

.intro-content-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    align-items: center;
}

.intro-text-zone h3 {
    font-size: 1.5rem;
    color: #0f172a;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 700;
}

.highlight-text-box {
    background: #fffdf5;
    border-left: 5px solid #f59e0b;
    padding: 20px;
    border-radius: 4px 12px 12px 4px;
    color: #b45309;
    font-weight: 600;
    line-height: 1.8;
    font-size: 1.1rem;
    margin: 0;
}

.culture-text {
    margin-top: 15px;
    font-size: 0.95rem;
    color: #64748b;
    font-style: italic;
}

.intro-img-zone {
    height: 300px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.intro-img-zone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .intro-content-wrapper {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .premium-nav-header {
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
    }

    .title-info-box {
        border-left: none;
        border-top: 2px solid #e2e8f0;
        padding-top: 15px;
    }

    .filter-group {
        flex-direction: column;
    }
}

/* =========================================================================
   📸 景點專屬多圖相簿樣式（防止排版死掉）
   ========================================================================= */

/* =========================================================================
   🌟 獨立景點相簿舞台（消滅空白、防止壓扁、高質感卡片風）
   ========================================================================= */
.full-width-gallery-section {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 25px 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    margin-bottom: 40px;
    /* 與下方卡片牆保持優雅的呼吸間距 */
}

.gallery-section-title {
    font-size: 1.2rem;
    color: #0f172a;
    margin-top: 0;
    margin-bottom: 20px;
    font-weight: 800;
    letter-spacing: 0.5px;
}

/* 改用自適應寬度網格：有多少張圖就優雅地排開，最多一列 3~4 張 */
.spot-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
}

/* 卡片外容器：增加微陰影層次感 */
.gallery-card {
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    background: #ffffff;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
}

/* 🎯 完美控高：高度改為 180px 讓照片有舒展空間，配合 object-fit 絕對不壓扁 */
.spot-gallery-thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    cursor: pointer;
}

/* 頂級懸浮動畫 */
.gallery-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

/* RWD 響應式：手機板自動調整 */
@media (max-width: 576px) {
    .full-width-gallery-section {
        padding: 20px;
    }

    .spot-gallery-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .spot-gallery-thumb {
        height: 160px;
    }
}
</style>