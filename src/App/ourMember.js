const defaultGoals = {
    'y2025-10': `<span class="item-year">2025</span> 年至少使用 <br> <span class="item-percent">10% 綠電</span>`,
}
const setGoal = (year, goal, atLeast) => {
    return `<span class="item-year">${year}</span> 年${(atLeast)?"至少":""}使用 <br> <span class="item-percent">${goal} 綠電</span>`
}
const members = [
    {
        "index": 0,
        "name": "電信網通",
        "data": [
            {
                "img": require("./members/1-1.jpg"),
                "title": "台灣大哥大股份有限公司",
                "description": "以「Open Possible 能所不能」為品牌精神，透過想像力、科技力、行動力、連結力，與感動力，讓用戶能所不能",
                "goal": setGoal('2040','100%'),
                //`<span class="item-year">2040</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/1-2.jpg"),
                "title": "耀登科技股份有限公司",
                "description": "耀登集團提供全方位一站式的設計與開發服務，以通訊技術為根基，進行跨領域的擴展及服務整合，在5G網通產業佔據領先地位。",
                "goal": setGoal('2035','100%'),
                //``<span class="item-year">2035</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/planet.jpg"),
                "title": "普萊德科技股份有限公司",
                "description": "以國際專業網通設備品牌製造商為定位，堅持不斷創新數位網路傳輸技術和設備，普萊德自有品牌 PLANET 版圖已遍及全球上百國。",
                "goal": defaultGoals['y2025-10'],
            },
        ]
    },
    {
        "index": 1,
        "name": "紡織",
        "data": [
            {
                "img": require("./members/2-1.jpeg"),
                "title": "儒鴻企業股份有限公司",
                "description": "科技紡織公司，專業彈性功能性針織布料製造廠和服裝製造廠商",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/2-2.jpg"),
                "title": "鎰呈行股份有限公司",
                "description": "成立於 1997 年，臺灣績優布料製造商及 Neoprene 橡膠發泡廠",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/tuntex.jpg"),
                "title": "東豐纖維企業股份有限公司",
                "description": "具世界品質之織布、染整、成衣一貫作業，提供客戶全面專精服務之國際級標竿企業。<br>To be a Global Leader and Total Services Provider in the Textile and and Apparel Business.",
                "goal": setGoal('2050','100%'),
                //``<span class="item-year">2050</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/chiaher.jpg"),
                "title": "佳和實業股份有限公司",
                "description": "產品從設計、開發、紡紗、織布、染整到後加工一貫化作業，並與國際品牌保持長久合作，共同製造獨步全球的國際化產品。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 2,
        "name": "零售與電商",
        "data": [
            {
                "img": require("./members/3-1.jpg"),
                "title": "Clarins 新加坡商克蘭詩股份有限公司台灣分公司",
                "description": "國際知名女性美妝品牌，以「取之自然、尊重自然」為核心，努力不懈創造更美好、更美麗的未來",
                "goal": setGoal('2025','100%'),
                //``<span class="item-year">2025</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            // {
            //     "img": require("./members/3-2.jpg"),
            //     "title": "L'OCCITANE 台灣歐舒丹股份有限公司",
            //     "description": "",
            //     "goal": defaultGoals['y2025-10'],
            // },
            {
                "img": require("./members/3-3.jpg"),
                "title": "茶籽堂_捷順企業股份有限公司",
                "description": "臺灣在地洗沐品牌，臺灣苦茶油文化、苦茶樹契作與新植計畫品",
                "goal": `發展地方社區能源永續計畫，<br>讓企業與社區能源自主`,
            },
            {
                "img": require("./members/3-4.jpg"),
                "title": "美科實業股份有限公司",
                "description": "臺灣頭皮髮品的領導品牌，經營艾瑪絲與覺亞兩大品牌，以天然成分照顧頭皮健康",
                "goal": setGoal('2030','100%'),
                //``<span class="item-year">2030</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/3-5.jpg"),
                "title": "綠藤生物科技股份有限公司",
                "description": "以「 讓一個更真實、更健康的永續生活型態發芽」為品牌使命，產品創新結合理念推廣，帶動正向的實質改變",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/3-6.jpg"),
                "title": "台灣屈臣氏個人用品商店股份有限公司",
                "description": "屈臣氏為健康美麗零售領導品牌，提供個人化的諮詢及建議、最多元的產品種類，使顧客每天都能LOOK GOOD, DO GOOD, FEEL GREAT。",
                "goal": `門市平均每坪用電量(度數)，<br><span class="item-year">2025</span> 年與2015年相比，減少30%`,
            },
            {
                "img": require("./members/3-7.jpg"),
                "title": "淨毒五郎有限公司",
                "description": "#對世界更友善的潔淨選擇<br>淨毒五郎自 2015 年成立，品牌創立初期，臺灣正被食安風暴籠罩，對於食物清潔、加工等問題日益重視，我們希望提供從原料到包裝都對人體及環境友善的家用清潔產品，一步一步喚醒大眾對於居家清潔洗劑的關注。<br><br>我們堅信：「有意識的消費行為，在能力所及的範圍，做對世界更友善的選擇。」在2021年，淨毒五郎正式取得B型企業認證，我們希望透過品牌影響力推廣減塑環保，支持綠色供應與環境保護行動，並向大眾溝通＆徹底實踐「重複使用」的永續足跡，不僅對生態、人體友善，更要與整個世界共好。",
                "goal": setGoal('2025','100%'),
                //``<span class="item-year">2025</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/heineken.jpg"),
                "title": "荷蘭商海尼根股份有限公司台灣分公司",
                "description": "海尼根在台深耕超過 20年，現致力以消費者喜愛的品牌成為台灣第一名全球在地化的釀酒廠，追求永續、釀造更美好的世界。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/mattress.jpg"),
                "title": "滿庭芳床業有限公司",
                "description": "「滿庭芳床業」於1985年10月1日成立，致力於彈簧床墊的研發製作生產，集研發、客製、代工、批發、直營為一體，一步一腳印深耕台灣，堅持產業不外移，是在地有口皆碑的老品牌。，<br><br>在過去35年來，滿庭芳床業堅持真材實料、以誠相待、愛護土地與優質睡眠的四大信念，帶領所有職員以製造高品質床墊提供國人健康舒適的睡眠。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/jinmei.jpg"),
                "title": "京麗國際股份有限公司",
                "description": "京美產品以「在地」、「天然」、「無毒」的概念為出發，堅信只要擁有好的生活品質、創新的生活概念，便能引領國人更重視健康與機能。讓您「貼身更貼心」",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/11-1.jpg"),
                "title": "富國數位媒體科技股份有限公司",
                "description": "這次我們與地球站在一起。化身樹人；購買“ 低 / 零 / 負碳 ”標籤商品，即從排碳者轉化成減碳者；成為地球的守護者。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/11-2.jpg"),
                "title": "島語生活有限公司",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/howdy.jpg"),
                "title": "好心地文創有限公司",
                "description": "好心地文創前身為一家視覺傳達設計公司，以社會設計方式振興在地工藝，提供地方創生另外一種可能，以實地踏察挖掘台灣的Hidden Gem為目標努力至今。本著「宣揚、扶持獨立創作者的理念」，以實體店面結合網站力量，開設公平交易平台「好,的」 ，依工藝家和小農自訂價格販售商品， 僅收取管理費，作為持續發展營運基金；同時設立「好學堂」引入工藝家至社區，開設傳習工坊課程。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index":3,
        "name": "金融",
        "data": [
            {
                "img": require("./members/4-1.jpg"),
                "title": "元大金融控股公司",
                "description": "元大金控是台灣金融領導品牌之一，為一涵蓋證券、銀行、人壽、證金、期貨、投信、投顧、創投及資產管理等業務之金融集團。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/ubp.jpg"),
                "title": "瑞聯證券投資顧問股份有限公司",
                "description": "瑞聯投顧為瑞士財富管理業龍頭之一，全球前四大家族私人銀行之一的瑞聯銀行旗下的資產管理公司，瑞聯資產管理深耕全球市場，營運據點遍及全球16個主要城市，為了深耕台灣，於2018/9/6成立瑞聯投顧，期望為台灣市場帶來更多元化、獨特性之金融商品。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 4,
        "name": "軟體與網路科技",
        "data": [
            {
                "img": require("./members/5-2.jpg"),
                "title": "伊雲谷數位科技股份有限公司",
                "description": "雲端服務商，透過建立雲端生態係，提供企業數位化的解決方案進而協助透過雲端進行轉型",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/hongte.jpg"),
                "title": "circuplus奉茶行動 -<br>原點社會企業股份有限公司",
                "description": "奉茶行動APP：解你的渴，為地球減塑減碳<br>攜手企業實踐ESG，超過22萬人參與、源頭減少92萬瓶塑膠瓶",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 5,
        "name": "媒體",
        "data": [
            {
                "img": require("./members/5-1.jpg"),
                "title": "CATCHPLAY 台灣威亞數位科技股份有限公司",
                "description": "臺灣知名數位影音平台，以打造真正由用戶角度出發的創新服務，凝聚數位影音生態圈。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/am810.jpg"),
                "title": "國聲廣播公司",
                "description": "國聲廣播公司設立於民國41年，秉持服務聽眾的經營理念，在地勤懇耕耘有成。國聲播出頻率：AM810及AM1179千赫。發射範圍：北起苗栗縣、南至雲嘉，澎湖、金門、福建沿海亦能清晰收聽。<br>本公司長年為聽眾宣導減廢、減塑、節能愛地球之理念。112年1-3月比較111年同期耗電量漸少5600KWH，節電績效達13.1%，本公司願意善盡社會責任，持續推動各項節電宣導。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 6,
        "name": "共享運具",
        "data": [
            {
                "img": require("./members/6-1.jpg"),
                "title": "Gokube 夠酷比股份有限公司",
                "description": "共享電動車品牌，使電動車成為比傳統車與大眾交通工具更便利而且更經濟的選擇",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/6-2.jpg"),
                "title": "ZEV 臻環科技股份有限公司",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 7,
        "name": "設計與製造",
        "data": [
            {
                "img": require("./members/7-1.jpg"),
                "title": "創揚科技股份有限公司",
                "description": "專業的鋰電池存儲系統及應用方案的供應商，為綠能產業盡一份心力，發展環保綠能永續經營",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/7-2.jpg"),
                "title": "胤源企業有限公司",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/7-3.jpeg"),
                "title": "穩譚科技股份有限公司",
                "description": "致力研發全球首款植物滅火藥劑，不只能有效滅火保障安全同時也保護環境，實現綠色消防時代",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/ccr.jpg"),
                "title": "全傑橡膠股份有限公司",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/7-5.jpg"),
                "title": "緯凱工業有限公司",
                "description": "從智慧製造到永續綠能，專於噴頭、生技醫材等塑膠模具開發到無塵室塑膠射出成型，期待共好的路上有你我。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/chinda.jpg"),
                "title": "慶達科技股份有限公司",
                "description": "專精於各類高階扣件生產與行銷，宣示 2025 年總電量 10% 使用綠電，以淨零碳排為目標，實現碳中和綠色轉型；提供客戶最純淨的品質與服務，打造企業與產業供應鏈的永續未來。",
                "goal": setGoal('2050','100%'),
                //``<span class="item-year">2050</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/superb.jpg"),
                "title": "保忠精密工具股份有限公司",
                "description": "創立於西元1998年，數十年來深根自行車產業，逐步從代工廠成長為國際知名品牌，致力於製造最符合人體工學的工具，也希望為下一代創造最適合生活的土地。",
                "goal": `<span class="item-year">2022</span> 年前購置 10% 綠電，<br>並於 <span class="item-year">2035</span> 年達成 100% 綠電`,
            },
            {
                "img": require("./members/jmg.jpg"),
                "title": "錦明實業股份有限公司",
                "description": `自1987年創立以來35年間，錦明實業對於提供更好的服務內容不遺餘力，始終堅持以慇懃態度、服務精神，用心對待每一位客戶。錦明致力於以下各點
                <br>「專注品質」技術為本、誠信為要，高標自我要求，超越客戶需求。
                <br>「使命必達」全新創造客戶價值，共建不凡，成就雙贏。
                <br>「持續創新」領導技術開發，接軌市場變化。
                `,
                "goal": `以廠房太陽能自發自用達成 <br><span class="item-year">2025</span> 年占比 15% 綠電目標`,
            },
            {
                "img": require("./members/evergood.jpg"),
                "title": "永佳環球有限公司",
                "description": "成立於2003年，為台灣第一家獲得COSMOS有機驗證的化粧品專業研發製造的公司，致力於維護生物多樣性與環境永續性。",
                "goal": `<span class="item-year">2021</span> 綠電佔比 54% ，<br>並於 <span class="item-year">2025</span> 年達成 70% 綠電`,
            },
        ]
    },
    {
        "index": 8,
        "name": "顧問與專業服務",
        "data": [
            // {
            //     "img": require("./members/8-1.jpg"),
            //     "title": "CircuPlus",
            //     "description": "",
            //     "goal": `<span class="item-year"></span>`,
            // },
            {
                "img": require("./members/8-2.jpg"),
                "title": "CSRone 頤德國際股份有限公司",
                "description": "CSRone 是台灣第一家CSR永續溝通與互動平台， 深耕台灣多年，對於CSR相關業務範疇皆駕輕就熟。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/8-3.jpg"),
                "title": "DOMI綠然能源股份有限公司",
                "description": "志在創造環境與社會影響力的社會企業，只為一個簡單的使命：讓我們孩子的未來更美好！",
                "goal": `Net zero by <span class="item-year">2030</span>`,
            },
            {
                "img": require("./members/8-4.jpg"),
                "title": "左腦創意行銷有限公司",
                "description": "左腦希望在服務客戶的同時改變公眾思維，透過創意與多元手法推廣議題，產生真正的社會影響力",
                "goal": setGoal('2030','100%'),
                //``<span class="item-year">2030</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/8-5.jpg"),
                "title": "若水數位評價股份有限公司",
                "description": "EONE GLOBAL 成員之一，提供企業價值服務、企業評價與資產評價、新創事業輔導等服務",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/8-6.jpeg"),
                "title": "龍邑工程顧問",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/8-7.jpg"),
                "title": "技聯組工程顧問",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/8-8.jpg"),
                "title": "鉅舵顧問有限公司",
                "description": "以成為乘載人類未來的諾亞方舟為願景，提供永續發展、氣候變遷、能源轉型等各類議題之專業服務。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/8-9.jpg"),
                "title": "鴻元工程顧問有限公司",
                "description": "太陽光電工程規劃與設計，打造「綠色奇蹟，陽光變現金」",
                "goal": setGoal('2035','50%'),
                //``<span class="item-year">2035</span> 年使用 <br> <span class="item-percent">50% 綠電</span>`,
            },
            {
                "img": require("./members/8-10.jpg"),
                "title": "InfoLink 英富霖諮詢有限公司",
                "description": "InfoLink Consulting 為全球領先的新能源與科技研究顧問公司，提供產業分析、策略規劃與顧問服務，協助企業獲得競爭優勢。",
                "goal": `<span class="item-year">2025</span> 年前使用50%綠電，<br><span class="item-year">2030</span> 年100%`,
            },
            {
                "img": require("./members/impacthub.jpg"),
                "title": "Impact Hub Taipei",
                "description": "Impact Hub Taipei成立於2015年，扮演著社會創新生態系、孵化器和社群中心等多元的角色，更是提供各種資源、靈感、合作機會的獨特生態系統。",
                "goal": `<span class="item-year">2025</span> 年至少使用10%綠電，<br><span class="item-year">2030</span> 年 impact hub 空間碳中和`,
            },
            {
                "img": require("./members/vanilla.jpg"),
                "title": "格園社會企業有限公司",
                "description": "格園社會企業以解決農村問題為出發點，冀能追求企業獲利的同時亦能協助農民能有更好獲利的共善經營模式營運為宗旨。採用組織培養技術可以大量生產高單價且經濟價值高的健康種苗，有效降低農民種植的購苗成本，擴大產值規模，提升農民獲利。",
                "goal": setGoal('2025', '50%'),
            },
            {
                "img": require("./members/seed.jpg"),
                "title": "學籽文創有限公司",
                "description": "生活風格線上教育品牌，將專業人士的知識和技藝，融匯成高品質線上課程，引導學員將興趣的種籽灌溉成未曾想像的樣貌。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/jue.jpg"),
                "title": "覺數據有限公司",
                "description": "覺數據團隊成員中已擁有超過10年以上數位行銷專業,擅長關鍵字廣告、多媒體廣告、影                音行銷及數據分析,並提供行銷服務、教育訓練、顧問輔導等,服務的客戶包含海內外B2B、B2C類型的客戶。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/hqric.jpg"),
                "title": "護全禪心國際股份有限公司",
                "description": "透過FSPN計畫，運用國際ISO標準去協助中小微企業完成簡易盤查與減排規劃，並透過學術認證進行碳權採購與抵銷。",
                "goal": `<span class="item-year">2025</span> 年使用 10% 綠電，<span class="item-year">2050</span> 年使用 100% 綠電並輔導淨零聯盟夥伴會員 100% 使用綠電`,
            },
            {
                "img": require("./members/simply.jpg"),
                "title": "美好創意有限公司",
                "description": "美好創意具備跨國商務顧問團隊，具備澳洲、美國、日本、台灣等國際品牌經營經驗。擅長品牌策劃、ESG企業永續規劃、國際品牌海內外營銷聯盟、大數據分析，提供企業各項績效評估，規劃設計內稽內控制度，國際化管理顧問服務，是企業最佳的永續合作夥伴。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 9,
        "name": "休閒與戶外運動",
        "data": [
            {
                "img": require("./members/9-1.jpg"),
                "title": "恩瀛企業有限公司（台灣潛水）",
                "description": "兩岸三地唯一擁有白金課程總監的五星職業發展中心，宗旨為「Bring Ocean Into Your Life」，藉由潛水，讓更多人愛上大海、一起保護大海",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 10,
        "name": "事務所、診所與商家",
        "data": [
            {
                "img": require("./members/9-7.jpg"),
                "title": "丰采美學牙醫診所",
                "description": "大臺北指標型牙醫診所，以「人」為本，從「心」出發為診所的中心思想，結合馬斯洛人類需求理論發展出診所的兩大理念——「自我實現」與「美學」。",
                "goal": setGoal('2022','100%'),
                //``<span class="item-year">2022</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/9-5.jpg"),
                "title": "嘉威聯合會計師事務所",
                "description": "1986 年成立，提供臺灣數千家中小企業各式專業服務，期許與客戶以及B型企業一起用商業的力量改變社會",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/9-6.jpg"),
                "title": "點亮咖啡",
                "description": "直接貿易精品咖啡廳，全面使用直接貿易咖啡、公平貿易食材，邀請大家善用消費，改變世界",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/9-8.jpg"),
                "title": "博仲法律事務所",
                "description": "以智慧財產權見長的全方位律師事務所，於 2017 年成為亞洲第一家獲得B型企業認證的法律事務所，並已經於 2020 年達成碳中和目標",
                "goal": `已於 <span class="item-year">2020</span> 年達成碳中和`,
            },
            {
                "img": require("./members/9-9.jpg"),
                "title": "正信不動產",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            },
        ]
    },
    {
        "index": 11,
        "name": "非營利組織",
        "data": [
            {
                "img": require("./members/9-2.jpg"),
                "title": "臺北市動態藝術嘻哈文化業職業工會",
                "description": "致力扶植動態藝術/街舞/嘻哈文化職業工作者，爭取就業權利及各類勞工福利保障",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/valley.jpg"),
                "title": "心之谷永續教育園區",
                "description": "希望推動ESG永續精神於日常生活中，和全球的人們攜手打造綠意盎然的美好未來！",
                "goal": `<span class="item-year">2022</span> 年1-12月已完成場館碳盤查並已自主碳中和。<span class="item-year">2023</span> 年將逐步進行能源管理及綠電導入，預計於 <span class="item-year">2025</span> 年達成RE10x10之承諾目標。
                `,
            },
        ]
    },
    {
        "index": 12,
        "name": "電子",
        "data": [
            {
                "img": require("./members/10-1.jpg"),
                "title": "E-SENSE 逸盛科技股份有限公司",
                "description": "逸盛科技長期關心環境議題，我們選用對環境較為友善的材質及符合環保要求的包裝材料",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/10-2.jpg"),
                "title": "研華科技股份有限公司",
                "description": "研華為物聯網智能系統與嵌入式平台產業之全球領導廠商，並以「智能地球的推手」作為企業品牌願景。",
                "goal": `<span class="item-year">2026</span> 年使用50%綠電 <br> <span class="item-year">2032</span> 年使用100%綠電(台灣)`,
                
            },
            {
                "img": require("./members/10-3.jpg"),
                "title": "群聯電子股份有限公司",
                "description": "群聯電子於2000年11月成立於新竹。從提供全球首顆單晶片USB快閃記憶體隨身碟控制晶片起家，群聯目前已經成為USB隨身碟、SD記憶卡、eMMC、UFS、PATA、SATA與PCIe固態磁碟等控制晶片領域的領頭者。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/ubiqconn.jpg"),
                "title": "攸泰科技股份有限公司",
                "description": "攸泰為強固型移動式物聯網解決方案之領導廠商，積極構建各產業的物聯網連結願景，且響應綠能與注重永續發展。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/tglobal.jpg"),
                "title": "高柏科技股份有限公司",
                "description": "提供全方位散熱/導熱產品與服務，在現有產品或是新興科技，都能滿足您的需求，找到最佳的解決方案。",
                "goal": setGoal('2030', '10%', true),
            }
        ]
    },
    {
        "index": 13,
        "name": "百貨零售業",
        "data": [
            {
                "img": require("./members/9-4.jpg"),
                "title": "嘉瓦士有限公司",
                "description": "小型獨立戶外品牌， 設計更好的戶外裝備，希望透過品牌的力量邀請大家共享戶外的美好",
                "goal": defaultGoals['y2025-10'],
            },
        ]
    },
    {
        "index": 14,
        "name": "出口貿易",
        "data": [
            {
                "img": require("./members/12-1.jpg"),
                "title": "億暉實業股份有限公司",
                "description": "",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 15,
        "name": "能源",
        "data": [
            {
                "img": require("./members/13-1.jpg"),
                "title": "亞福儲能股份有限公司",
                "description": "建立一個被高度信賴的企業典範，發展安全、環保的新儲能技術，成為能源產業的最佳合作夥伴。",
                "goal": `2023年5%, 2025年10%, 2050年100% 綠電`,
            },
            {
                "img": require("./members/13-2.jpg"),
                "title": "宏威環球事業股份有限公司",
                "description": "太陽人全民電廠致力於將民間力量導入能源轉型，透過綠能共享經濟與日光循環公益模式讓民眾輕鬆參與，達成永續與經濟的共贏。",
                "goal": `<span class="item-year">2030</span> 年前使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/13-3.jpg"),
                "title": "森崴能源股份有限公司",
                "description": "森崴能源為正崴集團子公司，以保護地球、永續發展、綠能減碳、潔淨能源為核心價值與願景，擁有近二十年經驗的專業能源工程技術整合團隊．致力於再生能源與潔淨能源服務與技術發展。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/13-4.jpg"),
                "title": "富堡能源股份有限公司",
                "description": "富堡能源為一家專業生產燃料電池的公司。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/hwantai-solar.jpg"),
                "title": "環台光電股份有限公司",
                "description": "我們為專業太陽能投資建置商，以綠色能源為志業，從光電規劃投資至施工營運，目標2030年達到200MW的規模，為地球永續盡一份力。",
                "goal": `預計於 <span class="item-year">2025</span> 年使用 50% 綠電，<br>逐年增加，於2030年達成100%綠電。</span>`,
            },
            {
                "img": require("./members/mobii.jpg"),
                "title": "莫比綠電股份有限公司",
                "description": "莫比綠電是提供全方位ESG和可再生能源轉型解決方案的領先供應商，憑藉其創新的解決方案和完整的綠電服務，已成為業界信賴的夥伴。我們擁有台灣經濟部核發的再生能源售電業牌照。我們提供購售綠電、創能、充能、儲能、節能、碳盤查、碳權交易等服務，並提供綠色轉型、數位轉型、永續品牌三大類解決方案，協助客戶實現ESG轉型與永續發展目標。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/newsolar.jpg"),
                "title": "禾原新能源科技股份有限公司",
                "description": "公司成立於2000年長達23年歷史與經驗，從電池片→模組產品→電廠系統服務，實現太陽能中、下游產業鏈，為地球及環境盡一份心力。",
                "goal": `<span class="item-year">2025</span> 年至少使用 10% 綠電 <br> <span class="item-year">2050</span> 年使用100%綠電(台灣)`,
            },
            {
                "img": require("./members/gama.jpg"),
                "title": "佳瑪環能科技股份有限公司",
                "description": "佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(Refuse derived fuel, RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(Micro Gas Turbine Generator, MTG)轉換成電力提供穩定的再生能源。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/hengs.jpg"),
                "title": "聚恆科技股份有限公司",
                "description": "聚恆是太陽能能源系統整合商，設計及施工以長久使用為目標，2019年發行興櫃；期望成為零碳排的企業ESG標竿。",
                "goal": `<span class="item-year">2025</span> 年至少使用 10% 綠電 <br> <span class="item-year">2028</span> 年前使用 100% 綠電`,
            }
        ]
    },
    {
        "index": 16,
        "name": "建築",
        "data": [
            {
                "img": require("./members/16-1.jpg"),
                "title": "菁鏈科技股份有限公司(本住)",
                "description": "菁鏈科技(本住)，成立於2019年，專注於再生能源和系統整合，打造永續建築與空間。以人為本，與地球和諧相處。",
                "goal": `要求我司合作夥伴、供應鏈<br>也使用一定比例的綠電`,
            }
        ]
    },
    {
        "index": 17,
        "name": "半導體",
        "data": [
            {
                "img": require("./members/17-1.jpg"),
                "title": "新加坡商安富利股份有限公司台灣分公司",
                "description": "安富利是全球領先的科技分銷商與解決方案供應商。安富利的全體同仁專注落實環境永續的經營實務，藉此回饋社會並貢獻全球，其中包括了改善能源使用效益、改採再生能源等，具體降低企業碳足跡。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/chyiding.jpg"),
                "title": "奇鼎科技股份有限公司",
                "description": "2003年創立，為半導體製程環境溫濕度、潔淨度控制與AMC去除製造設備；提供節能規劃，已為客戶節省十億元電費。",
                "goal": `<span class="item-year">2030</span> 年以前達成 <br> <span class="item-percent">100% 再生能源</span>`,
            },
            {
                "img": require("./members/tsc.jpg"),
                "title": "崇越科技股份有限公司",
                "description": "提供半導體及光電產業整合服務，延伸擴及環保綠能與大健康事業，為節能減碳、永續發展提供環境對策與能源機制。",
                "goal": `2024 年使用至 10% 、2025 年使用至 25% 、 2030 年使用至 50% 、 2040 年使用至 80% 、 2050 年使用至 100%`,
            }
        ]
    },
    {
        "index": 18,
        "name": "生技",
        "data": [
            {
                "img": require("./members/18-1.jpg"),
                "title": "京冠生物科技股份有限公司",
                "description": "京冠結合在地農產業，將農食副產物(豆渣、咖啡渣、蘿蔔廢料等)以生物科技製程創造循環經濟價值，應用於動物機能性飼料添加劑及妝品、保健食品、植物新藥的原料供應。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/white.jpg"),
                "title": "台江生技股份有限公司",
                "description": "",
                "goal": setGoal('2030','100%'),
                //``<span class="item-year">2030</span> 年使用 <br> <span class="item-percent">100% 綠電</span>`,
            },
            {
                "img": require("./members/greencome.jpg"),
                "title": "大醫生技股份有限公司",
                "description": "大醫生技除了照顧消費者的健康，也在意環境健康。我們透過綠電採購及植樹造林，達成能源轉型及減碳目標。",
                "goal": `<span class="item-year">2025</span> 年前使用 60% 綠電，並逐步增加採購量`,
            },
            {
                "img": require("./members/amed.jpg"),
                "title": "安美得生醫股份有限公司",
                "description": "我們致力於傷口照護的核心技術研發、生產製造、通路行銷以及產品衛教服務，透過產銷分工、通路經營與專責服務，在各領域內專注專精，務實創新，創造效益。",
                "goal": `預計於 <span class="item-year">2024</span> 年採購 5% 綠電，<br><span class="item-year">2025</span> 年達成至少 10% 綠電`,
            }
        ]
    },
    {
        "index": 19,
        "name": "環保",
        "data": [
            {
                "img": require("./members/7-4.jpg"),
                "title": "盈松環保股份有限公司",
                "description": "盈松環保股份有限公司為生產木質包裝材(木棧板、木箱)之業者,自 2017 年起採購多套生質能氣化發電設備,計畫將廠內之木質廢棄物與下腳料投入產電,落實循環經濟,達到綠電自產自用之計畫。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/jyd.jpg"),
                "title": "金益鼎企業股份有限公司",
                "description": "從廢棄物回收到原物料生產，搭起循環經濟產業鏈的連結，達到環境與產業共生的目標。",
                "goal": defaultGoals['y2025-10'],
            },
            {
                "img": require("./members/hongte.jpg"),
                "title": "circuplus奉茶行動 -<br>原點社會企業股份有限公司",
                "description": "奉茶行動APP：解你的渴，為地球減塑減碳<br>攜手企業實踐ESG，超過22萬人參與、源頭減少92萬瓶塑膠瓶",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 20,
        "name": "塑化",
        "data": [
            {
                "img": require("./members/living.jpg"),
                "title": "集泉塑膠工業股份有限公司",
                "description": "1991年成立，生產各式清潔/食品/生技藥包材，豐富經驗的綠塑包材廠商、以SDGs為目標，可協助相關企業達成ESG。",
                "goal": defaultGoals['y2025-10'],
            }
        ]
    },
    {
        "index": 21,
        "name": "水泥",
        "data": [
            {
                "img": require("./members/hwantai-cp.jpg"),
                "title": "環台水泥製品股份有限公司",
                "description": "公司成立自 1965 年，主要產品為基樁，實績含括全球指標性廠辦，亞洲重大公共建設及台灣再生能源電廠相關工程。",
                "goal": `預計於 <span class="item-year">2025</span> 年使用 50% 綠電，逐年增加，於 2030 年達成 RE10x10 之承諾目標。`,
            }
        ]
    },
    {
        "index": 22,
        "name": "農業",
        "data": [
            {
                "img": require("./members/vanilla.jpg"),
                "title": "格園社會企業有限公司",
                "description": "格園社會企業以解決農村問題為出發點，冀能追求企業獲利的同時亦能協助農民能有更好獲利的共善經營模式營運為宗旨。採用組織培養技術可以大量生產高單價且經濟價值高的健康種苗，有效降低農民種植的購苗成本，擴大產值規模，提升農民獲利",
                "goal": setGoal('2025', '50%'),
            }
        ]
    }
]

            
module.exports = members