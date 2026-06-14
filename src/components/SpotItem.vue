<script setup>
// 🌟 嚴格定義 Props 接口：從 Views 傳入每張卡片的清潔資訊，大大減少 Views 的負擔
defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="spot-item-card">
        <div class="image-box">
            <img :src="imgUrl" class="card-image" alt="導覽主圖">
        </div>

        <div class="card-body">
            <span class="card-tag">{{ tag }}</span>
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-desc">{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.spot-item-card {
    background-color: #ffffff;
    border-radius: 16px;
    /* 精緻的圓角 */
    overflow: hidden;
    /* 確保圖片圓角不會被裁切掉 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    /* 淡淡的質感陰影 */
    display: flex;
    flex-direction: column;
    /* 讓圖片在上、內容在下垂直排列 */
    height: 100%;
    /* 高度撐滿 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* 流暢的動畫效果 */
    cursor: pointer;
}

/* 滑鼠懸停時的「浮起」特效，這是卡片牆點睛之筆 */
.spot-item-card:hover {
    transform: translateY(-6px);
    /* 往上浮動 6 像素 */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    /* 陰影變深 */
}

/* 懸停時圖片微微放大，增加高級感 */
.spot-item-card:hover .card-image {
    transform: scale(1.05);
}

.image-box {
    width: 100%;
    height: 230px;
    /* 固定圖片高度，俐落排版 */
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 🌟 核心規格：確保圖片完美填滿不變形 */
    transition: transform 0.5s ease;
    /* 🌟 為滑鼠懸停（hover）放大做準備的流暢動畫 */
}

.card-body {
    padding: 24px;
    /* 🌟 UI/UX 呼吸感的關鍵留白 */
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    /* 讓文字區自動撐滿卡片下半部 */
}

.card-tag {
    align-self: flex-start;
    /* 標籤寬度自適應文字 */
    background-color: #e0f2fe;
    /* 亮色背景 */
    color: #0369a1;
    /* 藍色字體 */
    padding: 4px 10px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
}

.card-title {
    font-size: 1.25rem;
    color: #1e293b;
    /* 內斂的石板深藍，代替純黑 */
    margin: 4px 0 10px 0;
    font-weight: bold;
    transition: color 0.3s ease;
    line-height: 1.4;
}

.card-desc {
    margin: 0;
    font-size: 0.95rem;
    color: #64748b;
    line-height: 1.6;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    /* 加上這行標準屬性，通常就能消除 VS Code 的相容性警告 */
    line-clamp: 2;
    overflow: hidden;
}

/* 容器與卡片牆外層 */
.spot-grid {
    display: grid;
    /* 關鍵：自動填滿，每張卡片最少 300px，最多均分剩餘空間 */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    /* 卡片之間的間距（上下左右） */
    padding: 20px 0;
    /* 牆的上下內邊距 */
    list-style: none;
    /* 清除清單小圓點 */
    margin: 0;
    width: 100%;
}

/* 確保點擊區塊（RouterLink）撐滿整個網格單元，並具有過渡動畫 */
.card-link {
    text-decoration: none;
    /* 清除超連結底線 */
    color: inherit;
    /* 繼承原本文字顏色 */
    display: block;
    /* 轉為區塊元素，才能完整撐開 */
    height: 100%;
    /* 高度撐滿 */
}
</style>