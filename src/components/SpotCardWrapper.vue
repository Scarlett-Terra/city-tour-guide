<template>
    <div class="card-wrapper">
        <slot></slot>
    </div>
</template>

<script setup>
// 這個元件只專注於外殼的樣式與容器包裝，保持乾淨
</script>

<style scoped>
.card-wrapper {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 16px;
    overflow: hidden;

    /* 🌟 輕盈俐落的關鍵：大範圍極淡陰影 */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);

    /* 🌟 設定流暢的轉場：為了讓全域 CSS 控制的 hover 浮起特效不會生硬 */
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
        box-shadow 0.3s ease;

    height: 100%;
    /* 確保在 Grid 網格中每張卡片高度強制一致，排版超俐落 */
    display: flex;
    flex-direction: column;
}
</style>