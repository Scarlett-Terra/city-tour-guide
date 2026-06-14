// src/composables/useCityTour.js
import { ref } from 'vue'

export function useCityTour() {
    const allSpots = ref([
        // =========================================================================
        // 🌴 區域一：東南亞：熱帶島嶼度假 (southeast-asia) - 5 城市
        // =========================================================================
        // 1️⃣ 曼谷 (bangkok)
        {
            id: 1, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'bangkok', cityName: '曼谷',
            name: '曼谷鄭王廟與網美水上市場', type: 'spot',
            imgUrl: 'https://twopigsfun.com/wp-content/uploads/2026/01/27267881812_8dbc919b45_z.jpg',
            tag: '#網美日落 #佛寺巡禮',
            description: '大城王朝的歷史奇蹟，象徵著湄南河畔的歷史推移與傳統水上貿易文化的傳承。',
            culture: '泰國傳統佛教建築融合孟族工藝，每年水燈節更是湄南河畔的心靈信仰核心。',
            // 🎯 這裡就是你專屬的「景點多圖相簿」，完全不會污染到美食！
            spotGallery: [
                'https://tse2.mm.bing.net/th/id/OIP.ZDOjOZovZLGgcIIipH1T5gHaFj?pid=Api&h=220&P=0',
                'https://static.liontech.com.tw/cmspic/PIC2304-000011/M_PIC2304-000011.jpg',
                'https://tse4.mm.bing.net/th/id/OIP.xWxgepvqPwHj-5Voj1y3iAHaE8?pid=Api&h=220&P=0',
                'https://image.cdn-eztravel.com.tw/Z8-qqA7FK9kTfGWpdhWCvOdwwzhyZDP1gt2c9Zreik0/rs:fill:900:0:1/g:ce/q:100/aHR0cDovL3d3dy5oc2lodW5nLmNvbS50dy9pbnRyYW5ldC92aWV3L2ltYWdlcy9WVEhJSEhRMzkuanBn.jpg'
            ]
        },
        {
            id: 101, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'bangkok', cityName: '曼谷',
            name: '正宗泰式冬蔭功與現烤大頭蝦海鮮盛宴', type: 'food',
            imgUrl: 'https://i.ytimg.com/vi/LotKtgWIqUM/maxresdefault.jpg',
            foodImg: 'https://i.ytimg.com/vi/LotKtgWIqUM/maxresdefault.jpg',
            tag: '#正宗泰味 #酸辣過癮',
            description: '濃郁的手標泰式酸辣湯，配上現撈現烤、肉質彈牙的香脆大頭蝦，是最具代表性的街頭靈魂美食。',
            food: '正宗泰式手標冬蔭功奶茶、現烤香脆大頭蝦與綿密傳統芒果糯米飯。',
            foodGallery: [
                'https://i.ytimg.com/vi/5ZL1llBLabs/maxresdefault.jpg',
                '/images/food/bangkok-rice-sub2.jpg',
                '/images/food/bangkok-tea-sub3.jpg'
            ]
        },

        // 2️⃣ 普吉島 (phuket)
        {
            id: 2, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'phuket', cityName: '普吉島',
            name: '皮皮島蔚藍秘境海灘', type: 'spot',
            imgUrl: 'https://www.agoda.com/wp-content/uploads/2024/02/Featured-image-Phi-Phi-Island-Thailand.jpg', tag: '#果凍浪花 #頂級日光浴',
            description: '極致清澈的果凍浪花與安達曼海珍珠，躺在細白沙灘上享受熱帶島嶼奢華陽光。',
            culture: '融合海上吉普賽人的獨特歷史與泰南捕魚文化，展現熱帶海洋的和諧共生。',
            spotGallery: [
                'https://tse4.mm.bing.net/th/id/OIP.-jtBKXp9Pt6tNKJ-4t_KwQHaE8?pid=Api&h=220&P=0',
                'https://blog.startravel.com.tw/wp-content/uploads/2023/03/%E6%B3%B0%E5%9C%8B%E6%99%AE%E5%90%89%E5%B3%B6%E8%87%AA%E5%8A%A9%E6%97%85%E8%A1%8C%E8%A1%8C%E5%89%8D%E8%A6%8F%E5%8A%83%E3%80%81%E6%99%AF%E9%BB%9E%E3%80%81%E4%BA%A4%E9%80%9A%E3%80%81%E7%BE%8E%E9%A3%9F%E3%80%81%E6%87%B6%E4%BA%BA%E5%8C%85-9.jpg',
                'https://www.tattpe.org.tw/uploads/hotnews/20210628_IMG.jpg',
                'https://tse4.mm.bing.net/th/id/OIP.4cgqWM5gIKqaEmsX3WZMsQHaEX?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 102, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'phuket', cityName: '普吉島',
            name: '泰南風味黃金咖哩炒蟹與海膽珍饈', type: 'food',
            imgUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400',
            foodImg: 'https://i.ytimg.com/vi/4ud7dufprGM/maxresdefault.jpg',
            tag: '#海島海鮮 #泰南辛香',
            description: '運用大量泰南黃薑與新鮮辛香料爆炒的黃金咖哩蟹，蟹肉極致肥美鮮甜，配上現剖椰子冰淇淋堪稱絕配。',
            food: '泰南風味黃金咖哩炒蟹、現剖消暑椰子冰淇淋、碳烤香料沙爹肉串。',
            foodGallery: [
                'https://ap.bluecross.com.hk/CMSService/api/Image/GetImage?fileName=1250e0f2-0bb4-4b15-b898-e9d542adef84-imgage.jpeg',
                'https://static.japan-food.guide/uploads/ckeditor_asset/data/000/014/379/4af27f85e1447ca660528a89518a52eb0f1edebe785c0781ad92585dead6cca1/f6807d39-42b0-4b82-8d2d-fdf4540561f7.jpg'
            ]
        },

        // 3️⃣ 新加坡 (singapore)
        {
            id: 3, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'singapore', cityName: '新加坡',
            name: '濱海灣花園超級樹迷幻森林', type: 'spot',
            imgUrl: 'https://img.vialife.tw/201307/13-0.jpg', tag: '#未來科技 #科幻溫室',
            description: '巨大科幻擎天樹與溫室瀑布交織，夜晚燈光秀亮起時彷彿置身阿凡達世界。',
            culture: '展現現代都市與自然生態的頂級融合，體現了花園城市前瞻性的綠色永續文化。',
            spotGallery: [
                'https://tse4.mm.bing.net/th/id/OIP.Iw65X2PUjE9qj6p2ddXlwAHaE8?pid=Api&h=220&P=0',
                'https://a.bbkz.net/forum/attachment.php?attachmentid=1123555&thumb=1&d=1393255938',
                'https://krupa.tw/wp-content/uploads/2022/07/20220731151636_99.jpg',
                'https://youimg1.c-ctrip.com/target/100i12000000ry1r64F2B_W_10000_1200.jpg?proc=autoorient'
            ]
        },
        {
            id: 103, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'singapore', cityName: '新加坡',
            name: '新加坡招牌辣椒螃蟹與黑醬油海南雞飯', type: 'food',
            imgUrl: 'https://5b0988e595225.cdn.sohucs.com/images/20180108/b50556e16ad1420f878e6dde51bc5029.jpeg',
            foodImg: 'https://5b0988e595225.cdn.sohucs.com/images/20180108/b50556e16ad1420f878e6dde51bc5029.jpeg',
            tag: '#星洲國菜 #米其林推薦',
            description: '酸甜帶辣的濃郁醬汁裹滿整隻斯里蘭卡大蟹，搭配外酥內軟的現炸小饅頭，以及雞油香氣四溢的滑嫩海南雞肉。',
            food: '香濃黑醬油海南雞飯、辛辣濃郁新加坡辣椒螃蟹、南洋香酥咖椰吐司。',
            foodGallery: [
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500',
                'https://cc.tvbs.com.tw/img/program/upload/2017/12/14/20171214200207-24948f12.jpg',
                'https://cc.tvbs.com.tw/img/program/upload/2022/06/28/20220628115014-71931b07.jpg'
            ]
        },

        // 4️⃣ 峇里島 (bali)
        {
            id: 4, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'bali', cityName: '峇里島',
            name: '烏布天空梯田與神聖海神廟', type: 'spot',
            imgUrl: 'https://happytravel.tw/wp-content/uploads/2025/06/20250607004822_0_9eae0b.jpg', tag: '#心靈洗滌 #世界遺產',
            description: '層層疊疊的翠綠燕麥色梯田，與矗立在驚濤駭浪之中的神聖千年海神廟。',
            culture: '獨特的峇里島印度教神話文化，蘇巴克（Subak）灌溉系統被列為世界文化遺產。',
            spotGallery: [
                'https://tse3.mm.bing.net/th/id/OIP.hhsQr5bqHMxSytySs7FW3wHaE8?pid=Api&h=220&P=0',
                'https://yuho1314.com/wp-content/uploads/2023/08/2-5-%E8%92%BC%E5%8F%A4Canggu-%E6%B5%B7%E7%81%98_%E7%BB%93%E6%9E%9C.jpg',
                'https://tse2.mm.bing.net/th/id/OIP.dVaTrtKv5LzhTpny5hEc7AHaE8?pid=Api&h=220&P=0',
                'https://yuho1314.com/wp-content/uploads/2023/08/2-5-%E8%92%BC%E5%8F%A4Canggu-%E6%B5%B7%E7%81%983_%E7%BB%93%E6%9E%9C.jpg'
            ]
        },
        {
            id: 104, region: 'southeast-asia', regionName: '東南亞：熱帶島嶼度假', city: 'bali', cityName: '峇里島',
            name: '神級香脆印尼髒鴨飯與芭比烤豬饗宴', type: 'food',
            imgUrl: 'https://tse2.mm.bing.net/th/id/OIP.kFQcHRCec2SIgNOVtRUt2gHaE7?pid=Api&h=220&P=0',
            foodImg: 'https://i.ytimg.com/vi/JfgjGr3ZkHU/maxresdefault.jpg',
            tag: '#傳統髒鴨飯 #香料烤豬',
            description: '經多種南洋香料醃製並酥炸至骨肉分離的傳統髒鴨飯，外皮香脆不油膩，以及充滿油亮焦香的烤豬肉片。',
            food: '傳統香脆印尼髒鴨飯、正宗峇里島芭比烤豬、香辣珍多冰（Cendol）。',
            foodGallery: [
                'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
                'https://img.bigfang.tw/2023/06/1687779485-86c3cbc8cde622a8c725d89a88bdcb96.jpg', 'https://dimg04.tripcdn.com/images/1n96b224x93b3htiwE6FA.jpg'

            ]
        },



        // =========================================================================
        // 🦘 區域二：澳洲：自然大冒險 (australia) - 5 城市雙卡片配置
        // =========================================================================
        // 6️⃣ 雪梨 (sydney)
        {
            id: 6, region: 'australia', regionName: '澳洲：自然大冒險', city: 'sydney', cityName: '雪梨',
            name: '雪梨歌劇院與邦代海灘衝浪', type: 'spot',
            imgUrl: 'https://cdn.jourtrip.com/images/_blog/AUS/7e6d211bbb63/03.jpg', tag: '#現代地標 #太平洋衝浪',
            description: '鬼才設計風帆建築佇立於港灣，與陽光灑落、充滿活力的金黃衝浪天堂。',
            culture: '融合達洛格（Darug）原住民歷史與英國大航海殖民色彩，交織出奔放的當代海洋文化。',
            spotGallery: [
                'https://tse2.mm.bing.net/th/id/OIP._RVawL-5phUKA0qgeXbjDgHaFD?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.FT3PUA6CVg5rhiW9PaKd1QHaFf?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.tlwI8TjoU33V4sArlaHZ8gHaEH?pid=Api&h=220&P=0',
                'https://tse2.mm.bing.net/th/id/OIP.J1oj4eVNmHMiU4zuoyIeXgHaFM?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 106, region: 'australia', regionName: '澳洲：自然大冒險', city: 'sydney', cityName: '雪梨',
            name: '澳洲 M9 頂級和牛牛排與現開生蠔盛宴', type: 'food',
            imgUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
            foodImg: 'https://media.etmall.com.tw/nximg/002241/2241252/2241252_xxl.jpg?t=17987278144',
            tag: '#頂級饗宴 #海鮮直送',
            description: '外皮帶有炭香、切開斷面呈完美粉紅色的頂級澳洲和牛，搭配每天從太平洋空運現開、肥美鮮甜的生蠔。',
            food: '頂級炭烤澳洲M9和牛牛排、現開鮮甜生蠔配白酒、傳統肉派。',
            foodGallery: [
                'https://stancylife.com/wp-content/uploads/2025/10/batch_20251003_140545.jpg',
                'https://stancylife.com/wp-content/uploads/2025/10/batch_20251003_133056.jpg',
                'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500'
            ]
        },

        // 7️⃣ 墨爾本 (melbourne)
        {
            id: 7, region: 'australia', regionName: '澳洲：自然大冒險', city: 'melbourne', cityName: '墨爾本',
            name: '大洋路十二門徒石斷崖', type: 'spot',
            imgUrl: 'https://ginatw.com/wp-content/uploads/2021/04/DSC04346.jpg', tag: '#工匠咖啡 #蔚藍海岸線',
            description: '南冰洋風暴與狂浪雕刻出的巨大石灰岩柱，沿著絕美海岸公路體驗自然震撼。',
            culture: '全球頂尖的咖啡與塗鴉藝術重鎮，將維多利亞時代古典美學與當代嬉皮完美交融。',
            spotGallery: [
                'https://tse4.mm.bing.net/th/id/OIP.jrY-7ROfvC5CzODt0EisUQHaFG?pid=Api&h=220&P=0',
                'https://image.kkday.com/v2/image/get/h_650%2Cc_fit/s1.kkday.com/product_17939/20210526063142_CUwk5/jpg',
                'https://tse3.mm.bing.net/th/id/OIP.V13JkOhAIFQ3fpv25CZzRQHaFj?pid=Api&h=220&P=0',
                'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1704265074/iupi5y1nmimkmj4hkn3t.jpg'
            ]
        },
        {
            id: 107, region: 'australia', regionName: '澳洲：自然大冒險', city: 'melbourne', cityName: '墨爾本',
            name: '澳式工廠精釀拿鐵與慢火烤羊肩肉', type: 'food',
            imgUrl: 'https://tse3.mm.bing.net/th/id/OIP.vBppr09SFRs6Bta5Wr2guwHaFj?pid=Api&h=220&P=0',
            foodImg: 'https://tse3.mm.bing.net/th/id/OIP.vBppr09SFRs6Bta5Wr2guwHaFj?pid=Api&h=220&P=0',
            tag: '#世界咖啡之都 #慢火料理',
            description: '品嚐職人精緻調配的澳式馥芮白（Flat White），搭配外皮酥脆、肉質多汁軟嫩的慢火烤羊肩肉。',
            food: '澳式工廠精釀拿鐵（Flat White）、脆皮慢火烤羊肩肉、墨爾本巷弄酪梨吐司。',
            foodGallery: [
                'https://img.shoplineapp.com/media/image_clips/6923f995ef7c02001884fbcc/original.jpg?1763965332=&owner_id=5ca6dda99972ff000189e573',
                'https://www.winnews.com.tw/wp-content/uploads/2023/11/1-7-1024x604.jpg',
                'https://bpic.588ku.com/back_origin_min_pic/23/06/29/a849e1c51b2aad9cc38e230a771ce68b.jpg!/fw/750/quality/99/unsharp/true/compress/true'
            ]
        },

        // 8️⃣ 凱恩斯 (cairns)
        {
            id: 8, region: 'australia', regionName: '澳洲：自然大冒險', city: 'cairns', cityName: '凱恩斯',
            name: '大堡礁極致珊瑚礁潛水', type: 'spot',
            imgUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', tag: '#世界自然遺產 #熱帶雨林',
            description: '從太空中唯一可見的巨型活體生物結構，下潛體驗與綠蠵龜共游的夢幻海洋。',
            culture: '傳承超過四萬年的庫庫亞蘭吉（Kuku Yalanji）原住民熱帶雨林永續狩獵智慧。',
            spotGallery: [
                'https://tse1.mm.bing.net/th/id/OIP.uAKNcENgtaP16XDNxrRLRwHaFj?pid=Api&h=220&P=0',
                'https://res.klook.com/image/upload/activities/v1sqte5xj2dc57bfwuzm.jpg',
                'https://ginatw.com/wp-content/uploads/2025/10/261236.jpg',
                'https://tse2.mm.bing.net/th/id/OIP.jnp9z0-z93q57MpF_zkF_AHaFj?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 108, region: 'australia', regionName: '澳洲：自然大冒險', city: 'cairns', cityName: '凱恩斯',
            name: '炭烤新鮮國王大蝦與野生魚排饗宴', type: 'food',
            imgUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
            foodImg: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
            tag: '#熱帶海鮮 #帕芙洛娃',
            description: '現撈現烤的澳洲國王大蝦帶著淡淡焦香，配上昆士蘭特產尖吻鱸魚排，最後用熱帶水果帕芙洛娃蛋糕做完美結尾。',
            food: '炭烤新鮮澳洲國王大蝦、野生尖吻鱸（Barramundi）魚排、熱帶水果帕芙洛娃蛋糕。',
            foodGallery: [
                'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500',
                'https://farm2.staticflickr.com/1625/25461021492_c6dc99f5b1_c.jpg',
                'https://image.kkday.com/v2/image/get/h_650%2Cc_fit/s1.kkday.com/product_142976/20230427051643_bbmbJ/jpg'
            ]
        },

        // 9️⃣ 布里斯本 (brisbane)
        {
            id: 9, region: 'australia', regionName: '澳洲：自然大冒險', city: 'brisbane', cityName: '布里斯本',
            name: '龍柏無尾熊保護區與陽光海岸', type: 'spot',
            imgUrl: 'https://joycelohas.com/wp-content/uploads/20170215161204_56.jpg', tag: '#親近野生動物 #亞熱帶河畔',
            description: '全球歷史最悠久的首座無尾熊聖地，近距離親手擁抱與餵食親人的袋鼠群。',
            culture: '輕鬆開朗的昆士蘭「戶外生活文化」，高竿地在都市叢林中保留了大自然野性。',
            spotGallery: [
                'https://tse3.mm.bing.net/th/id/OIP.5aseZX-0XNXeVvedcqyfxgHaFH?pid=Api&h=220&P=0',
                'https://tse2.mm.bing.net/th/id/OIP.ezSTJ-4Ht8BTrdfAW964SwHaEK?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.3sxS5-jJCiJncnyTAdjCswHaEc?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.pzCHPN3zxXfJqtmE49HOsQHaEI?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 109, region: 'australia', regionName: '澳洲：自然大冒險', city: 'brisbane', cityName: '布里斯本',
            name: '昆士蘭香煎盲曹魚與炭烤袋鼠肉串', type: 'food',
            imgUrl: 'https://i.ytimg.com/vi/sJbaU9zlvGI/maxresdefault.jpg',
            foodImg: 'https://i.ytimg.com/vi/l7vIJvllPio/maxresdefault.jpg',
            tag: '#澳洲在地風味 #炸魚薯條',
            description: '鮮嫩的昆士蘭香煎盲曹魚，搭配風味獨特的風味炭烤袋鼠肉串，讓人體驗最純粹的澳式地道野性飲食習慣。',
            food: '昆士蘭香煎盲曹魚、手工碳烤袋鼠肉串、金黃炸魚薯條配塔塔醬。',
            foodGallery: [
                'https://tse4.mm.bing.net/th/id/OIP.Azolztql4LZkpHTWkuoTbQHaEx?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP._G7Bt3dKMHiRDe8a7790SwHaE8?pid=Api&h=220&P=0',
                'https://tse2.mm.bing.net/th/id/OIP.wc_g6oT2KNz40N5c4iMW0wHaE7?pid=Api&h=220&P=0'
            ]
        },

        // 🔟 伯斯 (perth)
        {
            id: 10, region: 'australia', regionName: '澳洲：自然大冒險', city: 'perth', cityName: '伯斯',
            name: '羅特尼斯島微笑袋鼠秘境', type: 'spot',
            imgUrl: 'https://i.ytimg.com/vi/4xBy25jTncM/maxresdefault.jpg', tag: '#最孤獨城市 #微笑短尾矮袋鼠',
            description: '遺世獨立的西澳珍珠，尋找世界上最快樂的萌寵短尾矮袋鼠（Quokka）合照。',
            culture: '天鵝河谷的葡萄種植與品酒文化，展現了西澳洲從容不迫的高質感慢活步調。',
            spotGallery: [
                'https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mlahvt3d0iqv016j1zpp/%E4%BC%AF%E6%96%AF%20-%20%E8%B4%B9%E9%87%8C%E6%9B%BC%E5%9B%BE%E6%B8%B8%E8%88%B9%E4%BD%93%E9%AA%8C%EF%BC%88%E5%8D%95%E7%A8%8B%EF%BC%89.jpg',
                'https://res.klook.com/image/upload/w_1265,h_791,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/jx0aidy1dzma2niuw7mx.jpg',
                'https://tse3.mm.bing.net/th/id/OIP.3sxS5-jJCiJncnyTAdjCswHaEc?pid=Api&h=220&P=0',
                'https://tse1.mm.bing.net/th/id/OIP.MhiOL5iIBFvJcyP41WsmwAHaGD?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 110, region: 'australia', regionName: '澳洲：自然大冒險', city: 'perth', cityName: '伯斯',
            name: '天鵝河谷頂級紅酒與蒜香烤岩龍蝦', type: 'food',
            imgUrl: 'https://tse4.mm.bing.net/th/id/OIP.amVLjzqOwBYEST7GpUie7wHaE2?pid=Api&h=220&P=0',
            foodImg: 'https://tse3.mm.bing.net/th/id/OIP.GfpEkTivacXAQUyiNW42uQHaFC?pid=Api&h=220&P=0',
            tag: '#西澳奢華慢活 #天鵝河谷',
            description: '品嚐天鵝河谷酒莊直送的卡本內蘇維翁紅酒，搭配肉質極致緊實彈牙、散發濃郁蒜香的現烤西澳岩龍蝦。',
            food: '天鵝河谷頂級卡本內蘇維翁紅酒、蒜香烤岩龍蝦、松露野菇燉飯。',
            foodGallery: [
                'https://www.finovino.com.hk/image/cache/catalog/Product%20Photo%2006102020/Velenosi_Verso-Sera1-1000x1000.jpg',
                'https://tokyo-kitchen.icook.network/uploads/recipe/cover/236602/large_fc3622af79a045cb.jpg',
                'https://lcp-prod-obs.line-scdn.net/0hQzu8RxQXDlVIQR2t-jlxAhgcAiR7MApdITkTaG0bLGcCchxmIWA9b2xBOxMzLRtIdGcTRgUdBRBlKzJcEC89VRFCLDoaLRxfcGw9MDMHLBcOMChmBA'
            ]
        },
        // =========================================================================
        // 🏰 區域三：歐美：浪漫古堡文化 (europe-america) - 5 城市雙卡片配置
        // =========================================================================

        // 1️⃣1️⃣ 巴黎 (paris)
        {
            id: 11, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'paris', cityName: '巴黎',
            name: '凡爾賽宮鏡廳與盧瓦爾河谷古堡', type: 'spot',
            imgUrl: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f1gy9qygjenpilw09cgz/%E6%B3%95%E5%9C%8B%E7%9B%A7%E7%93%A6%E7%88%BE%E6%B2%B3%E8%B0%B7%E5%9F%8E%E5%A0%A1%E5%8D%80%E5%B0%8E%E8%A6%BD%EF%BC%88%E5%B7%B4%E9%BB%8E%E5%87%BA%E7%99%BC%EF%BC%89.jpg', tag: '#巴洛克美學 #文藝復興浪漫',
            description: '奢華巴洛克美學的終極巔峰，水晶吊燈與千面鏡子折射出波旁王朝的輝煌歷史。',
            culture: '路易十四時代確立的宮廷禮儀與法國高級訂製（Haute Couture）時尚文化源頭。',
            spotGallery: [
                'https://tse1.mm.bing.net/th/id/OIP.58J7ysEA8Np2wEDj0fl8WQHaE6?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.YZHyr9ag0Kbr67U1tm6WZAHaEx?pid=Api&h=220&P=0',
                'https://tse4.mm.bing.net/th/id/OIP._VK3NPasgLB5vJh9v1SWKgHaEp?pid=Api&h=220&P=0',
                'https://tse2.mm.bing.net/th/id/OIP.wRQhM7KPa-Y_dR23__EL1AAAAA?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 111, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'paris', cityName: '巴黎',
            name: '法式經典油封鴨腿與勃根地紅酒燉牛肉', type: 'food',
            imgUrl: 'https://www.bring-you.info/imgs/2017/03/Versailles-23-900x600.jpg',
            foodImg: 'https://i.ytimg.com/vi/hj6mZpTYuRo/maxresdefault.jpg',
            tag: '#米其林三星美學 #法式工藝',
            description: '經過低溫慢火油封的鴨腿外皮極致香酥、肉質入口即化，配上濃郁的勃根地醬汁與精緻焦糖千層酥。',
            food: '法式經典油封鴨腿、勃根地紅酒燉牛肉、法式焦糖千層酥。',
            foodGallery: [
                'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500',
                'https://tse4.mm.bing.net/th/id/OIP.bWEj0ytn_Cfxn3SVJDS8AwHaDt?pid=Api&h=220&P=0',
                'https://tse1.mm.bing.net/th/id/OIP.9aGUyLRuQyMaFRjM-T-E-wHaHa?pid=Api&h=220&P=0'
            ]
        },

        // 1️⃣2️⃣ 慕尼黑 (munich)
        {
            id: 12, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'munich', cityName: '慕尼黑',
            name: '新天鵝堡夢幻童話森林', type: 'spot',
            imgUrl: 'https://i0.wp.com/shiningchan-com.sfo3.digitaloceanspaces.com/wp-content/uploads/2023/04/%E6%96%B0%E5%A4%A9%E9%B5%9D%E5%A0%A146.jpeg?resize=1290%2C912&ssl=1', tag: '#迪士尼原型 #巴伐利亞傳奇',
            description: '孤傲國王路德維希二世打造的夢幻高山古堡，也是迪士尼經典城堡的靈感原型。',
            culture: '巴伐利亞王國深厚的騎士精神傳奇，與歷史悠久的皇家黑啤酒釀造文化。',
            spotGallery: [
                'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/xxm5eghz6vaayblixclj.jpg',
                'https://jamesdiscover.tw/uploads/2026/02/09/2e26f545284e94621bd3753465ea18f6.webp',
                'https://carolblog.tw/wp-content/uploads/2023/10/%E6%85%95%E5%B0%BC%E9%BB%91%E8%87%AA%E7%94%B1%E8%A1%8C_14.jpg',
                'https://tse4.mm.bing.net/th/id/OIP.WqmAwhsGZr9sVzxR_-dF8QHaEI?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 112, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'munich', cityName: '慕尼黑',
            name: '正宗巴伐利亞脆皮烤豬腳與紐倫堡香腸組合', type: 'food',
            imgUrl: 'https://www.travelliker.com.hk/img/upload/img/%E6%96%B0%E5%A4%A9%E9%B5%9D%E5%A0%A102.jpg',
            foodImg: 'https://tokyo-kitchen.icook.network/uploads/recipe/cover/394833/62b03fb65d32c5af.jpg',
            tag: '#巨無霸烤豬腳 #皇家黑啤',
            description: '外皮烤至金黃酥脆爆汁、內層肉質依舊軟嫩的德式豬腳，搭配香煎紐倫堡香腸與大杯皇家黑啤酒。',
            food: '正宗巴伐利亞脆皮烤豬腳、香煎德式紐倫堡香腸、慕尼黑皇家小麥黑啤酒。',
            foodGallery: [
                'https://b2eimg.pxec.com.tw/00340376/0b181b191e78411387ae50284982e78a.jpg',
                'https://tse2.mm.bing.net/th/id/OIP.VLsWQuO2LBPZhYH4Dabb-QHaE8?pid=Api&h=220&P=0',
                'https://img.gogoshop.cloud/dc1f3606/kktEFBxPO0Y.jpg'
            ]
        },

        // 1️⃣3️⃣ 倫敦 (london)
        {
            id: 13, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'london', cityName: '倫敦',
            name: '倫敦塔橋與神祕溫莎城堡', type: 'spot',
            imgUrl: 'https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1733561106/mawjjsoubxcb43x89y6r.webp', tag: '#皇室現存古堡 #哥德式建築',
            description: '全球現存最古老、且仍有英國皇室居住的巍峨巨石城堡，見證不列顛帝國風雲。',
            culture: '傳承近千年的英國皇室授勳、皇家衛兵交接儀式以及精緻優雅的英式紳士文化。',
            spotGallery: [
                'https://tse1.mm.bing.net/th/id/OIP.5wxIiAP8QyGpwDerBnp7mAHaEK?pid=Api&h=220&P=0',
                'https://tse1.mm.bing.net/th/id/OIP.aJYtI-t9E_YKRAUfgqc16wHaE8?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.N8KjRoTTSH1GuRPyXFrt_gHaEK?pid=Api&h=220&P=0',
                'https://tse3.mm.bing.net/th/id/OIP.iQDIS7d6ZJ-WTSAtDuiauQHaEj?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 113, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'london', cityName: '倫敦',
            name: '英式尊榮三層下午茶與名店威靈頓牛排', type: 'food',
            imgUrl: 'https://tse4.mm.bing.net/th/id/OIP.QXEzeU72BJYaIF2Dwu2CpQHaE9?pid=Api&h=220&P=0',
            foodImg: 'https://img.ltn.com.tw/Upload/news/600/2018/11/04/166.jpg',
            tag: '#英倫優雅下午茶 #威靈頓牛排',
            description: '酥皮金黃酥脆、內層裹滿松露菇泥的粉嫩威靈頓牛排，搭配最傳統精緻的英式三層骨瓷下午茶。',
            food: '英式傳統三層下午茶、酥脆大西洋鱈魚薯條配豌豆泥、威靈頓牛排。',
            foodGallery: [
                'https://tse4.mm.bing.net/th/id/OIF.gIFfoJYqmrlZ4Idb7caZpg?pid=Api&h=220&P=0',
                'https://tse1.mm.bing.net/th?id=OIF.yWVf2tXek%2bb6o9iyG6X2cA&pid=Api&h=220&P=0',
                'https://imgs.699pic.com/images/600/670/348.jpg!list1x.v2'
            ]
        },

        // 1️⃣4️⃣ 羅馬 (rome)
        {
            id: 14, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'rome', cityName: '羅馬',
            name: '古羅馬競技場與聖天使城堡', type: 'spot',
            imgUrl: 'https://tse3.mm.bing.net/th/id/OIP.DjtF8E_sFWhiY7AzujlMngHaE7?pid=Api&h=220&P=0', tag: '#帝國遺跡 #巴洛克橋樑',
            description: '原為哈德良皇帝的宏偉陵墓，後改建為教宗防禦古堡，守護著永恆之城的日落。',
            culture: '文藝復興與巴洛克雕刻美學發源地，教宗天主教文化的千年核心重鎮。',
            spotGallery: [
                'https://tse3.mm.bing.net/th/id/OIP.g5tlbYU_6mAdLhT6Z-MpXAHaE8?pid=Api&h=220&P=0',
                'https://www.bring-you.info/wp-content/uploads/2021/11/St.-Peters-cathedral.jpg',
                'https://tse2.mm.bing.net/th/id/OIP.VIttLHJ0XS1p-ThiQiehowHaFj?pid=Api&h=220&P=0',
                'https://tse1.mm.bing.net/th/id/OIP.oOzbqiyJixX54vmWdcGZ7QHaFj?pid=Api&h=220&P=0'
            ]
        },
        {
            id: 114, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'rome', cityName: '羅馬',
            name: '正宗窯燒瑪格麗特披薩與義式 Gelato 冰淇淋', type: 'food',
            imgUrl: 'https://res.klook.com/image/upload/activities/hdmyysjfpyztenzxlabo.jpg',
            foodImg: 'https://mall.iopenmall.tw/website/uploads_product/website_37196/P3719605778050_3_85992336.png?hash=25401',
            tag: '#正宗羅馬風味 #窯燒披薩',
            description: '香氣四溢的煙燻豬頰肉培根麵，搭配現點現做、餅皮香Q的柴燒瑪格麗特披薩，最後來一球綿密的經典義式手工 Gelato。',
            food: '正宗羅馬煙燻豬頰肉培根義大利麵、現窯柴燒瑪格麗特披薩、義式經典 Gelato。',
            foodGallery: [
                'https://bjsmile.tw/wp-content/uploads/2023/10/15-4-jpg.webp',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
                'https://tse2.mm.bing.net/th/id/OIP.SI84PhmA7CJdrYCF0O_DUwHaFZ?pid=Api&h=220&P=0'
            ]
        },

        // 1️⃣5️⃣ 愛丁堡 (edinburgh)
        {
            id: 15, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'edinburgh', cityName: '愛丁堡',
            name: '愛丁堡死火山皇家古堡', type: 'spot',
            imgUrl: 'https://tse1.mm.bing.net/th/id/OIP.LPcCMUnLFelQvfdJZA8ySgHaE8?pid=Api&h=220&P=0', tag: '#死火山峭壁 #風笛呢喃',
            description: '巍峨矗立在黑色死火山峭壁之巔的軍事古堡，散發著蘇格蘭古老而蒼涼的宿命感。',
            culture: '凱爾特人的古老神話、蘇格蘭風笛呢喃、格子呢傳統服飾與威士忌蒸餾工藝文化。',
            spotGallery: [
                'https://i0.wp.com/bobotravel.tw/wp-content/uploads/2023/03/Edinburgh34.jpg?resize=1200%2C900&ssl=1',
                'https://i0.wp.com/bobotravel.tw/wp-content/uploads/2023/03/Edinburgh19.jpg?resize=1200%2C801&ssl=1',
                'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/72/89/e7/edinburgh-old-town.jpg?w=1200&h=1200&s=1',
                'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/m8bkxqdblvoaqelbkg1s/%E6%84%9B%E4%B8%81%E5%A0%A1%E5%9F%8E%E5%A0%A1%E9%96%80%E7%A5%A8.jpg'
            ]
        },
        {
            id: 115, region: 'europe-america', regionName: '歐美：浪漫古堡文化', city: 'edinburgh', cityName: '愛丁堡',
            name: '傳統蘇格蘭肉餡羊肚與高地泥煤單一麥芽威士忌', type: 'food',
            imgUrl: 'https://tse1.mm.bing.net/th/id/OIP.3WkfAfFskRqhiP13qSdpyAHaE6?pid=Api&h=220&P=0',
            foodImg: 'https://www.shuomingshu.cn/wp-content/uploads/images/2023/03/13/7345b1b6c3bc4d83b7b9c1b453abbc82_zyqjoifc53v.jpg',
            tag: '#高地風情 #泥煤威士忌',
            description: '最道地的蘇格蘭傳統佳餚肉餡羊肚（Haggis），配上剛出爐的香酥金黃司康，與一杯散發著迷人泥煤香氣的單一麥芽威士忌。',
            food: '經典蘇格蘭肉餡羊肚（Haggis）、香酥黃金司康、泥煤風味單一麥芽威士忌。',
            foodGallery: [
                'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
                'https://www.hsinfei.com/wp-content/uploads/2025/12/%E8%8B%B1%E5%9C%8B%E7%BE%8E%E9%A3%9F%E6%8E%A8%E8%96%A6-9%EF%BC%8DHaggis%EF%BC%88%E8%98%87%E6%A0%BC%E8%98%AD%E5%93%88%E5%90%89%E6%96%AF%EF%BC%89.jpg',
                'https://www.icheers.tw/EDM/vipeaper/20221230BenRiach_0.jpg'
            ]
        }
    ])

    const getUniqueCitiesByRegion = (region) => {
        const regionSpots = allSpots.value.filter(item => item.region === region)
        return Array.from(new Map(regionSpots.map(item => [item.city, item])).values())
    }

    const getSpotsByCity = (city) => {
        return allSpots.value.filter(item => item.city === city)
    }

    const getSpotById = (id) => {
        return allSpots.value.find(item => item.id === Number(id)) || {}
    }

    return {
        allSpots,
        getUniqueCitiesByRegion,
        getSpotsByCity,
        getSpotById
    }
}