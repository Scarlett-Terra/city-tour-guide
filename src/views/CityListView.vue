<script setup>
import { RouterLink } from 'vue-router'
import { useCityTour } from '@/composables/useCityTour'

const { getUniqueCitiesByRegion } = useCityTour()
 
const regions = [
    { id: 'southeast-asia', name: '🌴 東南亞：熱帶島嶼度假' },
    { id: 'australia', name: '🦘 澳洲：自然大冒險' },
    { id: 'europe-america', name: '🏰 歐美：浪漫古堡文化' }
]
</script>

<template>
    <div class="page-container">
        <header class="hero-banner">
            
            <div class="hero-content">
                <h1>探索你的下一場深度旅行</h1>
                <p>精選-數10個頂級國家城市・深度歷史景點與在地必吃美食指南</p>
            </div>
        </header>

        <main class="content-section">
            <div class="region-block" v-for="reg in regions" :key="reg.id">
                <h3 class="region-heading">{{ reg.name }}</h3>

                <div class="city-grid-layout">
                    <RouterLink v-for="cityInfo in getUniqueCitiesByRegion(reg.id)" :key="cityInfo.city"
                        :to="`/cities/${cityInfo.city}`" class="city-premium-card"
                        :style="{ backgroundImage: `url(${cityInfo.imgUrl})` }">
                        <div class="card-gradient-mask">
                            <div class="card-glass-badge">
                                <h4>{{ cityInfo.cityName }}</h4>
                                <span class="explore-text">深度探索 ➡️</span>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.top-nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
    position: absolute;
    top: 0;
}

.universal-back-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(8px);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.universal-back-btn:hover {
    background-color: #ff5a5f;
    transform: translateY(-1px);
}

.hero-banner {
    position: relative;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content h1 {
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 12px;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}

.hero-content p {
    color: blue;
    font-size: 1.15rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.content-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.region-block {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 35px;
    border-radius: 24px;
    margin-bottom: 45px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
}

.region-heading {
    font-size: 1.6rem;
    color: #1e293b;
    margin-top: 0;
    margin-bottom: 25px;
    border-left: 6px solid #ff5a5f;
    padding-left: 15px;
    font-weight: 800;
}

/* 🌟 進階網美級全版圖片卡片佈局 */
.city-grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 24px;
}

.city-premium-card {
    height: 260px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    display: block;
}

/* 遮罩與微動態 */
.card-gradient-mask {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.1) 60%);
    display: flex;
    align-items: flex-end;
    padding: 16px;
    transition: background 0.3s ease;
}

.city-premium-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(255, 90, 95, 0.25);
}

.city-premium-card:hover .card-gradient-mask {
    background: linear-gradient(to top, rgba(255, 90, 95, 0.85) 0%, rgba(0, 0, 0, 0.1) 80%);
}

/* 玻璃擬態字卡 */
.card-glass-badge {
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 12px 16px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
}

.card-glass-badge h4 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.explore-text {
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0.9;
}

.city-premium-card:hover .card-glass-badge {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
}
</style>