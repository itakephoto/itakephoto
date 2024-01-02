const data = [
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.57161,40.43744]},
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.55508 , 40.42537]},
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.56671 , 40.43313]},
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.57111 , 40.43875]},
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.57050 , 40.44855]},
{"name":"北京市怀柔区慕田峪长城国家级旅游景区","value":[116.55656 , 40.46329]},
{"name":"北京市延庆区八达岭长城","value":[116.02752,40.35921]},
{"name":"北京市延庆区八达岭长城","value":[116.02506 , 40.36351]},
{"name":"北京市延庆区八达岭长城","value":[116.02649 , 40.36550 ]},
{"name":"北京市延庆区八达岭长城","value":[116.02861 , 40.36827]},
{"name":"北京市朝阳区北京奥林匹克公园","value":[116.39958,40.00723]},
{"name":"鸟巢","value":[116.40241,39.99758]},{"name":"水立方","value":[116.39689,39.99939]},
{"name":"朝阳区","value":[116.49,39.92]},{"name":"怀柔区","value":[116.62,40.32]},
{"name":"北京市昌平区北京军都山滑雪场","value":[116.33689,40.24115]},
{"name":"北京市海淀区香山公园","value":[116.19504,39.99619]},
{"name":"北京市海淀区颐和园","value":[116.27875,40.00487]},
{"name":"北京市海淀区圆明园遗址公园","value":[116.3098,40.01266]},
{"name":"北京市海淀区清华园","value":[116.33096,40.0069]},
{"name":"北京市朝阳区北京首都国际机场","value":[116.60956,40.08381]},
{"name":"北京市西城区后海公园","value":[116.38881,39.94839]},
{"name":"北京市西城区北海公园","value":[116.39548,39.93291]},
{"name":"北京市西城区什刹海公园","value":[116.39141,39.94805]},
{"name":"北京市东城区南锣鼓巷","value":[116.40913,39.95317]},
{"name":"北京市西城区景山公园","value":[116.40282,39.93227]},
{"name":"北京市东城区故宫博物院","value":[116.40341,39.92409]},
{"name":"北京市东城区故宫博物院","value":[116.40292 , 39.92768]},
{"name":"北京市东城区故宫博物院","value":[116.40322 , 39.92865]},
{"name":"北京市东城区故宫博物院","value":[116.40329 , 39.92649]},
{"name":"北京市东城区故宫博物院","value":[116.40115 , 39.92418 ]},
{"name":"北京市东城区故宫博物院","value":[116.40365 , 39.92005 ]},
{"name":"北京市东城区紫禁城角楼","value":[116.4075,39.92884]},
{"name":"北京市东城区紫禁城角楼","value":[116.39886 , 39.92867]},
{"name":"北京市东城区天安门广场","value":[116.40418,39.90965]},
{"name":"北京市大民大会堂","value":[116.39960 , 39.91167]},
{"name":"北京市国家大剧院","value":[116.39627 , 39.91126 ]},
{"name":"北京市东城区中国国家博物馆","value":[116.40802,39.91146]},
{"name":"北京市东城区前门大街","value":[116.4047,39.89969]},
{"name":"北京市东城区全聚德","value":[116.40463,39.90289]},
{"name":"北京市西城区大栅栏","value":[116.39763,39.90154]},
{"name":"北京市东城区天坛公园","value":[116.41725,39.88824]},
{"name":"北京市东城区天坛公园","value":[116.41949 , 39.88444]},
{"name":"北京市东城区天坛公园","value":[116.41971 , 39.88301 ]},
{"name":"北京市东城区天坛公园","value":[116.41938 , 39.89003]},
{"name":"北京市东城区地坛公园","value":[116.42136,39.9599]},
{"name":"北京市朝阳区日坛公园","value":[116.45044,39.92134]},
{"name":"北京市海淀区清华大学","value":[116.33337,40.00965]},
{"name":"北京市海淀区北京大学","value":[116.31683,39.99888]},
{"name":"海淀区","value":[116.31,39.96]},
{"name":"大兴区","value":[116.33,39.73]},
{"name":"北京市东城区东单篮球场","value":[116.42372,39.91388]},
{"name":"北京市西城区西单","value":[116.3819,39.91333]},
{"name":"北京市大兴区北京大兴国际机场","value":[116.42396,39.51158]},
{"name":"北京市西城区月坛公园","value":[116.35887,39.92213]},
{"name":"北京市丰台区北京南站","value":[116.38549,39.87128]},
{"name":"北京市东城区中山公园","value":[116.40058,39.9167]},
{"name":"北京市东城区毛主席纪念堂","value":[116.40432,39.90887]},
{"name":"北京市东城区人民英雄纪念碑","value":[116.40416,39.91097]},
{"name":"北京市东城区王府井商业街","value":[116.41804,39.91979]},
{"name":"北京市海淀区公主坟","value":[116.31374,39.9154]},
{"name":"北京市东城区东直门","value":[116.43243,39.94638]},
{"name":"北京市朝阳区北京798艺术中心","value":[116.50207,39.99109]},
{"name":"北京市大兴区亦庄文化园","value":[116.49715,39.8129]},
{"name":"北京市大兴区三羊里","value":[116.52262,39.82524]},
{"name":"北京市朝阳区国贸","value":[116.46588,39.91567]},
{"name":"北京市朝阳区十里河","value":[116.46862,39.86933]},
{"name":"北京市朝阳区双井","value":[116.46734,39.90031]},
{"name":"北京市西城区恭王府","value":[116.39291,39.94245]},
{"name":"北京市朝阳区三里屯","value":[116.46099,39.94076]},
{"name":"北京市东城区孔庙和国子监博物馆","value":[116.42027,39.95288]},
{"name":"北京市东城区鼓楼","value":[116.40238,39.94702]},
{"name":"北京市北京市八步口胡同","value":[116.39155,39.95428]},
{"name":"北京市东城区正阳门","value":[116.4042,39.90692]},
{"name":"北京市西城区德胜门","value":[116.38784,39.96199]},
{"name":"天津","value":[117.2,39.13]},
{"name":"天津市红桥区天津之眼摩天轮","value":[117.19305,39.1597]},
{"name":"天津市和平区中国瓷房子博物馆","value":[117.2089,39.13071]},
{"name":"天津市和平区五大道文化旅游区","value":[117.21,39.11639]},
{"name":"天津市和平区张学良故居","value":[117.20824,39.12981]},
{"name":"天津市南开区天津古文化街旅游区","value":[117.19918,39.14953]},
{"name":"天津市河北区天津意式风情区","value":[117.20418,39.14057]},
{"name":"山东省","value":[117,36.65]},
{"name":"济南市","value":[117,36.65]},
{"name":"济南市历城区济南遥墙国际机场","value":[117.21998 , 36.85743]},
{"name":"青岛市","value":[120.33,36.07]},
{"name":"青岛市市南区青岛站","value":[120.31917,36.07012]},
{"name":"青岛市城阳区青岛流亭国际机场","value":[120.39242,36.27313]},
{"name":"淄博市","value":[118.05,36.78]},
{"name":"滨州市沾化区沾化区","value":[118.10545,37.7053]},
{"name":"东营市","value":[118.49,37.46]},
{"name":"东营市河口区河口区","value":[118.53251,37.89112]},
{"name":"滨州市博兴县博兴县","value":[118.11749,37.16048]},
{"name":"济南市历下区趵突泉","value":[117.02234,36.66742]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.09474,36.26989]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.09481 , 36.31142]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.11200 , 36.21318 ]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.12046 , 36.24310]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.11157 , 36.25974]},
{"name":"泰安市岱岳区泰山风景名胜区","value":[117.11404 , 36.25744]},
{"name":"泰安市","value":[117.13,36.18]},
{"name":"青岛市崂山区崂山风景区","value":[120.62565,36.19066]},
{"name":"青岛市崂山区崂山风景区","value":[120.67375 , 36.16125]},
{"name":"青岛市崂山区崂山风景区","value":[120.67015 , 36.15191]},
{"name":"日照市","value":[119.46,35.42]},
{"name":"日照市","value":[119.58690 , 35.44791]},
{"name":"日照市","value":[119.58879 , 35.45233]},
{"name":"日照市","value":[119.59008 , 35.45689]},
{"name":"日照市","value":[119.34458 , 35.69342 ]},
{"name":"青岛市市南区栈桥","value":[120.32659,36.06544]},
{"name":"德州市","value":[116.29,37.45]},
{"name":"济南市历下区大明湖公园","value":[117.03246,36.68073]},
{"name":"滨州市","value":[118.03,37.36]},
{"name":"滨州市黄河","value":[117.96689 , 37.29868]},
{"name":"滨州市黄河","value":[117.95438 , 37.30005]},
{"name":"青岛市市南区八大关风景区","value":[120.35841,36.05965]},
{"name":"青岛市市南区五四广场","value":[120.39119,36.06866]},
{"name":"青岛市市南区青岛天主教圣弥厄尔大教堂","value":[120.32729,36.07399]},
{"name":"青岛市市南区第一海水浴场","value":[120.34768,36.06338]},
{"name":"青岛市市南区第二海水浴场","value":[120.35729,36.05686]},
{"name":"山东省潍坊市潍坊市","value":[119.16837,36.71265]},
{"name":"合肥市","value":[117.283042,31.86119]},
{"name":"合肥市包河区合肥南站","value":[117.29698 , 31.80431]},
{"name":"无锡市","value":[120.301663,31.574729]},
{"name":"无锡市梁溪区无锡站","value":[120.31214 , 31.59281]},
{"name":"无锡市新吴区无锡硕放机场","value":[120.44031 , 31.51007]},
{"name":"郑州市","value":[113.665412,34.757975]},
{"name":"许昌市","value":[113.826063,34.022956]},
{"name":"潜江市","value":[112.896866,30.421215]},
{"name":"武汉市","value":[114.298572,30.584355]},
{"name":"无锡市滨湖区无锡太湖鼋头渚风景区","value":[120.23341,31.52977]},
{"name":"无锡市滨湖区无锡太湖鼋头渚风景区","value":[120.22168 , 31.53204]},
{"name":"无锡市滨湖区无锡太湖鼋头渚风景区","value":[120.19833 , 31.52593]},
{"name":"无锡市滨湖区无锡太湖鼋头渚风景区","value":[120.19969 , 31.52206]},
{"name":"上海市","value":[121.48,31.22]},
{"name":"东方明珠","value":[121.50638,31.24541]},
{"name":"上海市黄浦区外滩","value":[121.4972,31.24345]},
{"name":"上海市黄浦区南京路步行街","value":[121.49118,31.24329]},
{"name":"上海市黄浦区人民广场","value":[121.48315,31.23818]},
{"name":"杭州市西湖区灵隐寺","value":[120.10783,30.24691]},
{"name":"杭州市","value":[120.153576,30.287459]},
{"name":"杭州市西湖区西湖风景区","value":[120.12792,30.22893]},
{"name":"杭州市西湖区杭州宋城旅游区","value":[120.10538,30.17579]},
{"name":"杭州市西湖区西溪国家湿地公园","value":[120.07153,30.27289]},
{"name":"杭州市西湖区雷峰塔景区","value":[120.15536,30.23684]},
{"name":"杭州市西湖区钱塘江观景点","value":[120.15402,30.22003]},
{"name":"杭州市西湖区钱塘江大桥","value":[120.14485 , 30.20103]},
{"name":"杭州市西湖区钱塘江观景点","value":[120.16617 , 30.19822]},
{"name":"杭州市西湖区钱塘江观景点","value":[120.18869 , 30.20763]},
{"name":"杭州市西湖区云栖竹径景区","value":[120.09737,30.1978]},
{"name":"杭州市西湖区龙井村","value":[120.11186,30.22518]},
{"name":"杭州市西湖区杭州西湖风景名胜区断桥残雪","value":[120.15778,30.26406]},
{"name":"杭州市西湖区九溪风景区","value":[120.12274,30.19514]},
{"name":"杭州市西湖区钱塘江大桥纪念馆","value":[120.14179,30.20524]},
{"name":"杭州市西湖区六和塔文化公园","value":[120.14166,30.19165]},
{"name":"杭州市上城区杭州白塔公园","value":[120.14627,30.20504]},
{"name":"杭州市西湖区浙江大学","value":[120.1312,30.19885]},
{"name":"杭州市上城区南宋官窑博物馆","value":[120.16155,30.21552]},
{"name":"杭州市萧山区杭州萧山国际机场","value":[120.44385,30.24183]},
{"name":"杭州市滨江区浙江大华技术股份有限公司","value":[120.17899,30.18893]},
{"name":"杭州市滨江区杭州滨江宝龙城","value":[120.17391,30.19352]},
{"name":"杭州市西湖区阿里云栖园区","value":[120.08934,30.1349]},
{"name":"杭州市滨江区滨江公园","value":[120.20905,30.21773]},
{"name":"宁德市霞浦县霞浦县","value":[120.01142,26.89135]},
{"name":"宁德市","value":[119.52,26.65]},
{"name":"宁德市霞浦县东壁村","value":[120.197,26.92647]},
{"name":"福州市","value":[119.3,26.08]},
{"name":"厦门市","value":[118.1,24.46]},
{"name":"厦门市","value":[118.06602 , 24.50185]},
{"name":"厦门市","value":[118.10095 , 24.52171]},
{"name":"厦门市","value":[118.11144 , 24.54264]},
{"name":"厦门市","value":[118.06663 , 24.50601]},
{"name":"厦门市","value":[118.07905 , 24.44909]},
{"name":"莆田市","value":[119,25.44]},
{"name":"福州市平潭县平潭岛","value":[119.81002,25.51499]},
{"name":"福州市平潭县平潭岛","value":[119.69265 , 25.48122 ]},
{"name":"福州市平潭县平潭岛","value":[119.74024 , 25.49747 ]},
{"name":"福州市平潭县平潭岛","value":[119.79650 , 25.50470]},
{"name":"福州市平潭县猴研岛","value":[119.86539,25.46398]},
{"name":"福州市平潭县平潭国际旅游岛68海里景区","value":[119.86807,25.46591]},
{"name":"福州市平潭县平潭国际旅游岛仙人井景区","value":[119.87656,25.55612]},
{"name":"福州市平潭县长江澳海滩","value":[119.79682,25.61423]},
{"name":"福州市平潭县北港村","value":[119.83463,25.59012]},
{"name":"福州市平潭县龙王头沙滩","value":[119.81545,25.50581]},
{"name":"福州市平潭县北部生态长廊","value":[119.79027,25.66399]},
{"name":"福州市平潭县国彩村","value":[119.77866,25.64784]},
{"name":"泉州市","value":[118.58,24.93]},
{"name":"泉州市鲤城区泉州开元寺","value":[118.59204,24.92033]},
{"name":"泉州市泉州市西街","value":[118.58625,24.92622]},
{"name":"泉州市晋江市晋江梧林传统村落","value":[118.6046,24.75902]},
{"name":"泉州市晋江市晋江梧林传统村落","value":[118.60228 , 24.75953]},
{"name":"泉州市晋江市晋江梧林传统村落","value":[118.60387 , 24.75948 ]},
{"name":"泉州市鲤城区钟楼","value":[118.59753,24.91817]},
{"name":"漳州市","value":[117.35,24.52]},
{"name":"厦门市思明区厦门大学","value":[118.10857,24.44232]},
{"name":"厦门市思明区沙坡尾","value":[118.09386,24.44482]},
{"name":"厦门市思明区曾厝垵","value":[118.12749,24.43636]},
{"name":"厦门市思明区鼓浪屿","value":[118.07347,24.45097]},
{"name":"厦门市思明区中山路步行街","value":[118.08591,24.46038]},
{"name":"龙岩市","value":[117.01,25.12]},
{"name":"桂林市阳朔县阳朔县","value":[110.50347,24.78452]},
{"name":"桂林市阳朔县阳朔西街","value":[110.50029,24.77936]},
{"name":"桂林市灵川县漓江景区","value":[110.43826,25.15317]},
{"name":"桂林市阳朔县十里画廊","value":[110.49748,24.7594]},
{"name":"桂林市阳朔县九马画山","value":[110.50337,24.922]},
{"name":"北海市","value":[109.119254,21.473343]},
{"name":"桂林市阳朔县月亮山","value":[110.48029,24.73199]},
{"name":"北海市银海区北海银滩国家旅游度假区","value":[109.15675,21.4105]},
{"name":"贺州市昭平县黄姚古镇景区","value":[111.21996,24.24962]},
{"name":"贺州市","value":[111.552056,24.414141]},
{"name":"广州市从化区龙潭水库","value":[113.55353 , 23.68712 ]},
{"name":"广州市从化区从化温泉旅游区","value":[113.65889 , 23.65494]},
{"name":"广州市花都区了哥髻","value":[113.39347 , 23.50415]},
{"name":"广州市增城区蒙花布村","value":[113.90424 , 23.44603]},
{"name":"广州市增城区正果老街","value":[113.90066 , 23.42442 ]},
{"name":"广州市增城区高埔水库","value":[113.72587 , 23.46851]},
{"name":"广州市增城区山角水库","value":[113.76231 , 23.30181]},
{"name":"广州市增城区师爷山","value":[113.92616 , 23.47470 ]},
{"name":"广州市增城区牛牯嶂","value":[113.86171 , 23.57413]},
{"name":"广州市从化区大江里","value":[113.73932 , 23.74418]},
{"name":"广州市从化区通天蜡烛","value":[113.79586 , 23.90722]},
{"name":"广州市从化区三角山","value":[113.94743 , 23.74444]},
{"name":"广州市广州市桂峰山","value":[114.02748 , 23.83661]},
{"name":"广州市从化区黄龙带水库","value":[113.75127 , 23.78654]},
{"name":"广州市从化区鸡枕山","value":[113.81355 , 23.76333]},
{"name":"广州市从化区天堂顶风景区","value":[113.76948 , 23.63277 ]},
{"name":"广州市从化区老虎头","value":[113.78518 , 23.71210]},
{"name":"广州市从化区黄茶园","value":[113.89794 , 23.72558]},
{"name":"广州市从化区溪头旅游村","value":[113.87363 , 23.71913 ]},
{"name":"广州市从化区千泷沟大瀑布旅游区","value":[113.85410 , 23.70500]},
{"name":"广州市从化区流溪河国家森林公园","value":[113.78804 , 23.75396]},
{"name":"广州市从化区从化五指山景区","value":[113.81042 , 23.74166]},
{"name":"广州市增城区增城白水寨风景名胜景区","value":[13.77115 , 23.59926]},
{"name":"广州市增城区大丰门景区","value":[113.83781 , 23.59901]},
{"name":"惠州市龙门县南昆山国家森林公园","value":[113.89162 , 23.64703]},
{"name":"广州市从化区石门国家森林公园","value":[113.78874 , 23.63101]},
{"name":"广州市白云区帽峰山森林公园","value":[113.46356 , 23.30385]},
{"name":"广州市天河区火炉山森林公园","value":[113.39020 , 23.18289 ]},
{"name":"广州市海珠区黄埔古港景观区","value":[113.39770 , 23.09363]},
{"name":"广州市大学城","value":[113.40206 , 23.06111]},
{"name":"广州市天河区珠江公园","value":[113.34717 , 23.12729]},
{"name":"广州市越秀区广州动物园","value":[113.31190 , 23.14738]},
{"name":"广州市荔湾区沙面岛","value":[113.25095 , 23.11302 ]},
{"name":"广州市荔湾区荔枝湾景区","value":[113.24005 , 23.12704]},
{"name":"广州市白云区白云山","value":[113.30653 , 23.19121 ]},
{"name":"广州市麓湖公园","value":[113.28892 , 23.15496]},
{"name":"广州市越秀区流花湖公园","value":[113.280637,23.125178]},
{"name":"广州市越秀区南越王博物院","value":[113.27551 , 23.13512 ]},
{"name":"广州市越秀区南越王博物院","value":[113.26763 , 23.14398 ]},
{"name":"广州市兰圃","value":[113.26675 , 23.14993]},
{"name":"广州市越秀区越秀公园","value":[113.27242 , 23.14739]},
{"name":"广州市番禺区广州番禺长隆野生动物世界","value":[113.32171 , 23.00794]},
{"name":"广州市番禺区长隆水上乐园","value":[113.33073 , 23.00769]},
{"name":"广州市南沙区南沙天后宫","value":[113.62396 , 22.76315]},
{"name":"韶关市","value":[113.591544,24.801322]},
{"name":"深圳市","value":[114.085947,22.547]},
{"name":"珠海市","value":[113.58256,22.27656]},
{"name":"珠海市香洲区淇澳岛","value":[113.64206 , 22.42093 ]},
{"name":"汕头市","value":[116.708463,23.37102]},
{"name":"佛山市","value":[113.122717,23.028762]},
{"name":"佛山市禅城区祖庙","value":[113.11967 , 23.03556]},
{"name":"佛山市顺德区清晖园","value":[113.26161 , 22.84176]},
{"name":"佛山市顺德区顺峰山公园","value":[113.29230 , 22.82510]},
{"name":"佛山市顺德区北滘公园","value":[113.21351 , 22.93414]},
{"name":"佛山市顺德区美的总部","value":[113.22656 , 22.94055]},
{"name":"江门市蓬江区江门三十三墟街","value":[113.09770 , 22.58386]},
{"name":"湛江市","value":[110.364977,21.274898]},
{"name":"茂名市","value":[110.919229,21.659751]},
{"name":"肇庆市","value":[112.472529,23.051546]},
{"name":"肇庆市端州区七星岩景区","value":[112.47624 , 23.08147]},
{"name":"肇庆市端州区七星岩景区","value":[112.48564 , 23.08620 ]},
{"name":"肇庆市端州区七星岩景区","value":[112.47426 , 23.06974]},
{"name":"肇庆市鼎湖区鼎湖山景区","value":[112.54482 , 23.17389]},
{"name":"肇庆市鼎湖区鼎湖山景区","value":[112.54664 , 23.18125]},
{"name":"肇庆市鼎湖区鼎湖山景区","value":[112.54910 , 23.18330]},
{"name":"肇庆市鼎湖区鼎湖山景区","value":[112.55262 , 23.17540]},
{"name":"惠州市","value":[114.412599,23.079404]},
{"name":"梅州市","value":[116.117582,24.299112]},
{"name":"梅州市大埔县花萼楼","value":[116.92974 , 24.26575]},
{"name":"梅州市大埔县花萼楼","value":[116.92983 , 24.26535]},
{"name":"汕尾市","value":[115.364238,22.774485]},
{"name":"河源市","value":[114.697802,23.746266]},
{"name":"河源市东源县万绿湖风景区","value":[114.63898 , 23.78154]},
{"name":"河源市东源县万绿湖风景区","value":[114.66493 , 23.73215 ]},
{"name":"河源市东源县万绿湖风景区","value":[114.64236 , 23.72757]},
{"name":"河源市东源县万绿湖风景区","value":[114.58228 , 23.74992]},
{"name":"河源市东源县万绿湖风景区","value":[114.59541 , 23.72565]},
{"name":"阳江市","value":[111.975107,21.859222]},
{"name":"清远市","value":[113.051227,23.685022]},
{"name":"东莞市","value":[113.746262,23.046237]},
{"name":"东莞市东莞市观澜湖高尔夫花园别墅","value":[114.01842 , 22.79021 ]},
{"name":"中山市","value":[113.382391,22.521113]},
{"name":"中山市","value":[113.52828 , 22.45093]},
{"name":"中山市","value":[113.53401 , 22.44726]},
{"name":"中山市","value":[113.53374 , 22.45397 ]},
{"name":"中山市","value":[113.37044 , 22.52297]},
{"name":"中山市","value":[113.39079 , 22.51882]},
{"name":"中山市中山市石岐佬中山菜馆","value":[113.38941 , 22.54503]},
{"name":"中山市中山市小榄镇","value":[113.25741 , 22.67812]},
{"name":"中山市中山市缤纷幻彩摩天轮","value":[113.37329 , 22.53215]},
{"name":"中山市中山市崖口村","value":[113.55492 , 22.46775]},
{"name":"潮州市","value":[116.632301,23.661701]},
{"name":"揭阳市","value":[116.355733,23.543778]},
{"name":"云浮市","value":[112.044439,22.929801]},
{"name":"云浮市罗定市罗定风车山","value":[111.20225 , 22.61414 ]},
{"name":"云浮市罗定市罗定风车山","value":[111.19978 , 22.62539 ]},
{"name":"香港特别行政区离岛区香港国际机场","value":[113.94514,22.31764]},
{"name":"澳门特别行政区氹仔岛澳门国际机场","value":[113.58614,22.1604]},
{"name":"澳门特别行政区澳门半岛澳门葡京酒店","value":[113.55654,22.19283]},
{"name":"澳门特别行政区澳门半岛澳门观光塔街","value":[113.55197,22.18466]},
{"name":"澳门特别行政区澳门半岛澳门渔人码头","value":[113.55197,22.18466]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.06827,23.44064]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[116.94147 , 23.44655]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[116.95460 , 23.43056]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[116.99925 , 23.42377]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.03916 , 23.41893 ]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.07488 , 23.41311]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.13685 , 23.40390]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.14211 , 23.44801]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.12267 , 23.48338]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[117.05019 , 23.45140]},
{"name":"汕头市南澳县南澳岛生态旅游区","value":[116.97824 , 23.45867]},
{"name":"汕尾市城区红海湾旅游区","value":[115.57635,22.66646]},
{"name":"汕尾市城区金町湾沙滩","value":[115.30678,22.79769]},
{"name":"汕尾市城区汕尾风车岛","value":[115.58719,22.74552]},
{"name":"汕尾市城区牛尾山","value":[115.24321,22.7882]},
{"name":"惠州市惠东县双月湾","value":[114.90918,22.57106]},
{"name":"惠州市惠东县双月湾","value":[114.91077 , 22.59422 ]},
{"name":"惠州市惠东县双月湾","value":[114.91045 , 22.58620]},
{"name":"惠州市惠东县海龟湾","value":[114.89678,22.5522]},
{"name":"惠州市惠东县海龟湾","value":[114.90918 , 22.56474]},
{"name":"惠州市惠东县海龟湾","value":[114.89715 , 22.55168 ]},
{"name":"惠州市惠东县海龟湾","value":[114.90552 , 22.55727]},
{"name":"惠州市博罗县罗浮山风景名胜区","value":[114.04283,23.27057]},
{"name":"惠州市惠东县亚婆角旅游度假区","value":[114.71681,22.79789]},
{"name":"香港特别行政区油尖旺区重庆大厦","value":[114.18444,22.29939]},
{"name":"香港特别行政区油尖旺区維多利亞港","value":[114.18286,22.29612]},
{"name":"香港特别行政区荃湾区香港迪士尼乐园","value":[114.05279,22.31585]},
{"name":"深圳市南山区深圳湾公园","value":[113.9694,22.52481]},
{"name":"深圳市南山区海上世界广场","value":[113.92293,22.48914]},
{"name":"深圳市南山区春笋大厦","value":[113.95313,22.52038]},
{"name":"珠海市香洲区珠海大剧院","value":[113.5954,22.29021]},
{"name":"珠海市香洲区野狸山","value":[113.5944,22.28205]},
{"name":"珠海市香洲区海滨公园","value":[113.59148,22.26467]},
{"name":"珠海市香洲区珠海渔女","value":[113.5948,22.26743]},
{"name":"珠海市香洲区爱情守护塔","value":[113.59855,22.26291]},
{"name":"珠海市斗门区斗门镇","value":[113.20249 , 22.23802]},
{"name":"珠海市香洲区圆明新园","value":[113.54666,22.24958]},
{"name":"珠海市香洲区情侣路","value":[113.62906,22.35551]},
{"name":"珠海市香洲区中山大学","value":[113.58694,22.35491]},
{"name":"珠海市香洲区长隆海洋王国","value":[113.54225,22.1042]},
{"name":"珠海市香洲区励骏庞都广场","value":[113.54929,22.14401]},
{"name":"阳江市江城区海陵岛","value":[111.85379,21.58672]},
{"name":"阳江市江城区马尾岛","value":[111.82191,21.57324]},
{"name":"阳江市江城区闸坡镇","value":[111.94424,21.63761]},
{"name":"阳江市江城区十里银滩","value":[111.88006,21.5773]},
{"name":"阳江市江城区阳江东岛金沙滩风景区","value":[112.00361,21.62604]},
{"name":"长沙市","value":[113,28.21]},
{"name":"株洲市","value":[113.16,27.83]},
{"name":"郴州市","value":[113,25.79]},
{"name":"长沙市岳麓区橘子洲景区","value":[112.96874,28.19293]},
{"name":"衡阳市","value":[112.61,26.89]},
{"name":"长沙市天心区杜甫江阁","value":[112.97539,28.19053]},
{"name":"长沙市芙蓉区五一广场","value":[112.98474,28.19752]},
{"name":"长沙市开福区岳麓书院","value":[112.94747,28.18649]},
{"name":"长沙市岳麓区湖南大学","value":[112.95069,28.18605]},
{"name":"长沙市天心区太平老街","value":[112.97857,28.19927]},
{"name":"长沙市芙蓉区黄兴路步行街","value":[112.98317,28.19653]},
{"name":"郴州市苏仙区高椅岭旅游区","value":[113.16556,25.96266]},
{"name":"郴州市资兴市东江湖风景区","value":[113.31757,25.87196]},
{"name":"郴州市资兴市小东江景区","value":[113.28766,25.92208]},
{"name":"郴州市资兴市东江湖景区白廊景区","value":[113.40558,25.92307]},
{"name":"长沙市天心区长沙文和友","value":[112.97648 , 28.19572]},
{"name":"长沙市岳麓区橘子洲头碑","value":[1112.96717 , 28.17544]},
{"name":"长沙市芙蓉区长沙站","value":[113.01949 , 28.20007]},
{"name":"长沙市雨花区长沙南站","value":[113.07158 , 28.15323]},
{"name":"长沙市长沙县蓝思科技","value":[113.09779 , 28.23262]},
{"name":"株洲市天元区株洲西站","value":[113.07478 , 27.79702]},
{"name":"潜江市潜江市潜江站","value":[112.94571 , 30.39582]},
{"name":"杭州市西湖区西溪国家湿地公园","value":[120.06835 , 30.27774]},
{"name":"杭州市西湖区西溪国家湿地公园","value":[120.06625 , 30.27483]},
{"name":"杭州市西湖区西溪国家湿地公园","value":[120.06636 , 30.27006]},
{"name":"杭州市西湖区西溪国家湿地公园","value":[120.08790 , 30.27065]},
{"name":"杭州市宋城","value":[120.10621 , 30.17502]},
{"name":"杭州市宋城","value":[120.10456 , 30.17484]},
{"name":"杭州市宋城","value":[120.10400 , 30.17741]},
{"name":"杭州市宋城","value":[120.10588 , 30.17689]},
{"name":"杭州市宋城","value":[120.10482 , 30.17534]},
{"name":"杭州市宋城","value":[120.10309 , 30.17516]},
{"name":"杭州市宋城","value":[120.10517 , 30.17787]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.14072 , 30.25821]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.13903 , 30.24924]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.15181 , 30.25813]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.16140 , 30.24614]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.14204 , 30.23879]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.14476 , 30.23332]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.14213 , 30.22391]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.13836 , 30.20265]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.15260 , 30.20880]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.11814 , 30.19025]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.14826 , 30.23228]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.12083 , 30.19425]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.12371 , 30.19767]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.12035 , 30.20292]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.12016 , 30.20950]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.11450 , 30.21658]},
{"name":"杭州市西湖区杭州市西湖风景名胜区","value":[120.10736 , 30.24838]},
{"name":"杭州市西湖区河坊街景区","value":[120.17599 , 30.24581]},
{"name":"杭州市西湖区河坊街景区","value":[120.17793 , 30.24374]},
{"name":"杭州市西湖区河坊街景区","value":[120.17673 , 30.24534]},
{"name":"汕头小公园","value":[116.680419,23.36115]},
{"name":"东山岛","value":[117.407033,23.61964]},
{"name":"宫前村","value":[117.384597,23.578648]},
{"name":"天涯澳角","value":[117.443238,23.592426]},
{"name":"环岛风车路","value":[117.427141,23.631631]},
{"name":"苏峰山","value":[117.485207,23.663145]},
{"name":"岩雅村","value":[117.49728,23.663145]},
{"name":"金銮湾","value":[117.481183,23.686445]},
{"name":"马銮湾","value":[117.493831,23.717151]},
{"name":"南屿双面海","value":[117.528613,23.71821]},
{"name":"左耳拍摄地","value":[117.510504,23.739912]},
{"name":"南门湾","value":[117.523727,23.728532]}
];
