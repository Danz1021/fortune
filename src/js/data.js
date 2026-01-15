// 測驗題庫
export const questions = [
    {
        id: 1, tag: "除夕",
        text: "除夕夜圍爐，大家在聊明年的計畫，這時你會？",
        img: "src/assets/images/q1_cny.jpg",
        options: [
            { label: "A", text: "主導話題：興奮地分享自己的宏大目標，並給晚輩建議。", value: "Fire" },
            { label: "B", text: "冷靜觀察：默默聽大家說，心裡在分析誰說得有道理。", value: "Earth" },
            { label: "C", text: "熱絡氣氛：忙著夾菜、說笑話，確保每個人都開心。", value: "Wind" },
            { label: "D", text: "放空神遊：雖然人在現場，但腦子裡已經在想等一下要去哪裡玩。", value: "Water" }
        ]
    },
    {
        id: 2, tag: "財運",
        text: "拿到一筆意外的年終獎金（或紅包），你的第一直覺是？",
        img: "src/assets/images/q2_wealth.jpg",
        options: [
            { label: "A", text: "投資自己：拿去報名高階課程或買一身行頭。", value: "Fire" },
            { label: "B", text: "存入帳戶：按照原本的理財規劃分配，安全第一。", value: "Earth" },
            { label: "C", text: "請客分享：買禮物給家人朋友，大家開心我就開心。", value: "Wind" },
            { label: "D", text: "圓夢基金：終於可以買那個觀望很久的酷東西，或是去旅行。", value: "Water" }
        ]
    },
    {
        id: 3, tag: "職場",
        text: "2026 年，你最不想遇到的「職場鬼故事」是？",
        img: "src/assets/images/q3_workplace.jpg",
        options: [
            { label: "A", text: "權力被架空：明明我有能力，卻不讓我做決定。", value: "Fire" },
            { label: "B", text: "流程混亂：SOP 改來改去，一直在做白工。", value: "Earth" },
            { label: "C", text: "氣氛火爆：同事之間勾心鬥角、吵架冷戰。", value: "Wind" },
            { label: "D", text: "創意枯竭：每天做重複無聊的瑣事，沒有發揮空間。", value: "Water" }
        ]
    },
    {
        id: 4, tag: "角色",
        text: "朋友約你去玩「密室逃脫」，你通常擔任什麼角色？",
        img: "src/assets/images/q4_role.jpg",
        options: [
            { label: "A", text: "隊長：負責分配任務，帶領大家衝出去。", value: "Fire" },
            { label: "B", text: "解謎擔當：對著複雜的密碼鎖沈思，邏輯推理。", value: "Earth" },
            { label: "C", text: "氣氛後援：幫忙找找道具，或是被嚇到時負責尖叫。", value: "Wind" },
            { label: "D", text: "腦洞王：發現隱藏機關，用非典型思考破解。", value: "Water" }
        ]
    },
    {
        id: 5, tag: "劇本",
        text: "2026 年如果是電影的一年，你希望你的劇本主題是？",
        img: "src/assets/images/q5_script.jpg",
        options: [
            { label: "A", text: "《華爾街之狼》：商戰、競爭、成為最後的贏家。", value: "Fire" },
            { label: "B", text: "《福爾摩斯》：精密、推理、一切盡在掌握之中。", value: "Earth" },
            { label: "C", text: "《六人行》：溫馨、友情、充滿歡笑與愛的日常。", value: "Wind" },
            { label: "D", text: "《星際效應》：探索、未知、穿越時空的壯闊旅程。", value: "Water" }
        ]
    },
    {
        id: 6, tag: "回血",
        text: "當工作壓力大到爆炸時，什麼方式最能讓你回血？",
        img: "src/assets/images/q6_recover.jpg",
        options: [
            { label: "A", text: "運動宣洩：去健身房爆汗、打拳擊。", value: "Fire" },
            { label: "B", text: "獨處整理：整理房間、列清單，環境乾淨了心就靜了。", value: "Earth" },
            { label: "C", text: "聚會訴苦：找好朋友喝一杯，把苦水吐出來。", value: "Wind" },
            { label: "D", text: "抽離放鬆：看電影、聽音樂，暫時逃離現實。", value: "Water" }
        ]
    },
    {
        id: 7, tag: "直覺",
        text: "眼前有四扇門，直覺告訴你，哪一扇門後藏著寶藏？",
        img: "src/assets/images/q7_intuition.jpg",
        options: [
            { label: "A", text: "金屬大門：厚重、雕刻著獅子圖騰，感覺金碧輝煌。", value: "Fire" },
            { label: "B", text: "幾何拱門：線條極簡、帶有密碼鎖，藏著高科技機密。", value: "Earth" },
            { label: "C", text: "木製花門：掛滿藤蔓與鮮花，感覺溫暖舒適。", value: "Wind" },
            { label: "D", text: "星光虛掩門：半透明發著幽光，充滿神秘吸引力。", value: "Water" }
        ]
    },
    {
        id: 8, tag: "開運",
        text: "如果要選一個幸運符隨身攜帶，你會選？",
        img: "src/assets/images/q8_lucky.jpg",
        options: [
            { label: "A", text: "黃金/黑曜石：象徵財富與避邪的強大能量。", value: "A" },
            { label: "B", text: "白金/銀飾：象徵純粹與理性的冷靜能量。", value: "B" },
            { label: "C", text: "粉晶/琥珀：象徵人緣與親和的溫柔能量。", value: "C" },
            { label: "D", text: "青金石/隕石：象徵靈性與直覺的宇宙能量。", value: "D" }
        ]
    }
];

// 測驗結果
export const results = {
    "Domination": {
        title: "霸業",
        desc: "2026 是展現領導魅力的時刻。穩健的氣場與果斷的決策，將是你職場進階的關鍵。這一年適合帶領團隊面對挑戰，你的自信與擔當，將為眾人指引方向，成就非凡的事業里程碑。",
        productName: "躍馬迎春（金）",
        productCopy: "奔騰的駿馬與黑金配色，象徵無可阻擋的權力與勝利。這是王者的印記，助你在商場上開疆闢土。",
        img: "src/assets/images/res_domination.jpg", 
        link: "https://www.pinkoi.com/product/dVzXsRZz"
    },
    "Velocity": {
        title: "極速",
        desc: "效率與執行力是 2026 的關鍵詞。面對快速變化的環境，保持靈活的身段與敏銳的直覺，能讓你搶得先機。這一年適合果斷行動、快速驗證，用速度為自己創造更多可能。",
        productName: "碳纖黑",
        productCopy: "碳纖維代表輕量與極速。這張充滿科技感的名片，專為講求效率、走在時代尖端的你所打造。",
        img: "src/assets/images/res_velocity.jpg",
        link: "https://www.pinkoi.com/product/3utZUn6Z"
    },
    "Refinement": {
        title: "精煉",
        desc: "2026 年重在「質」的提升。專注於細節的打磨與專業深度的積累，將為你贏得長遠的信賴。不隨波逐流，堅持高品質的產出，你的專業價值將在沈澱後更加耀眼。",
        productName: "星空灰",
        productCopy: "介於黑白之間的高級灰，象徵你對質感細節的極致追求。這是一張經得起放大檢視的名片。",
        img: "src/assets/images/res_refinement.jpg",
        link: "https://www.pinkoi.com/product/FdTjyvBf"
    },
    "Strategy": {
        title: "佈局",
        desc: "2026 是適合長遠規劃的一年。透過縝密的思考與策略佈局，能在複雜的局勢中看清方向。比起一時的喧嘩，沈穩的籌備與佈局將為未來奠定堅實的基礎，靜待時機成熟。",
        productName: "月光黑",
        productCopy: "不需要多餘的裝飾，深沉的黑代表你的深不可測。這張卡低調卻擁有強大的內核，如同你的實力。",
        img: "src/assets/images/res_strategy.jpg",
        link: "https://www.pinkoi.com/product/AuG5MRHX"
    },
    "Popularity": {
        title: "人氣",
        desc: "人際連結將在 2026 年扮演重要角色。真誠的交流與互助合作，能為你帶來意想不到的資源與機會。發揮你的親和力，建立良好的合作關係，人脈將成為你事業上最溫暖的助力。",
        productName: "汪星 X 喵語 - 雙卡組（藍白配）",
        productCopy: "明亮輕快的配色，正如你陽光的個性。這是一張「自帶話題」的名片，拿出它，就是開啟一段新友誼的開始。",
        img: "src/assets/images/res_popularity.jpg",
        link: "https://www.pinkoi.com/product/JcJEfUdH"
    },
    "Harmony": {
        title: "圓融",
        desc: "平衡與協調是 2026 的智慧。在多變的環境中，你的包容力與同理心是團隊最強大的黏著劑。透過傾聽與溝通化解歧見，營造和諧的氛圍，將能匯聚眾人的力量，穩步前行。",
        productName: "汪星 X 喵語 - 雙卡組（黑白配）",
        productCopy: "貓狗依偎的背影，傳遞出「我願意傾聽」的友善訊號。它能瞬間融化陌生感，展現你內心柔軟的一面。",
        img: "src/assets/images/res_harmony.jpg",
        link: "https://www.pinkoi.com/product/JcJEfUdH"
    },
    "Wisdom": {
        title: "洞見",
        desc: "2026 年是充實內在、洞察趨勢的時刻。保持對新知的好奇心，深入探索未知的領域。你獨特的觀點與洞察力，將幫助你在迷霧中找到清晰的路徑，成為眾人信賴的智囊。",
        productName: "躍馬迎春（墨）",
        productCopy: "墨色代表著沈穩與智慧，結合奔騰的駿馬，象徵著在深思熟慮後，精準地抓住機會，一躍而起。",
        img: "src/assets/images/res_wisdom.jpg",
        link: "https://www.pinkoi.com/product/dVzXsRZz"
    },
    "Breakthrough": {
        title: "突破",
        desc: "2026 象徵著創新與可能。試著跳脫既有的框架，用全新的視角看待問題。這一年適合跨界嘗試、激發創意，你的獨特思維將打破常規，為自己開創出一片全新的天地。",
        productName: "星河夜曲雙卡組",
        productCopy: "浩瀚星空與52赫茲的鯨魚，象徵著無限的可能與自由的靈魂。這組套卡獻給勇於突破、不被定義的你。",
        img: "src/assets/images/res_breakthrough.jpg",
        link: "https://www.pinkoi.com/product/6Ecxn8cZ"
    }
};