const newsList = [
  {
    "date": "Feb 21,2025",
    "tag": "新聞稿",
    "title": "綠色和平推動臺灣中小企業綠電佔比近24%  更勝半導體產業",
    "url": "https://www.greenpeace.org/taiwan/video/43688/%e8%87%ba%e7%81%a3%e4%b8%ad%e5%b0%8f%e4%bc%81%e6%a5%ad%e7%b6%a0%e9%9b%bb%e6%8e%a1%e7%94%a8%e6%af%94%e4%be%8b%e6%9b%b4%e5%8b%9d%e5%8f%b0%e7%a9%8d%e9%9b%bb-re10x10%e5%80%a1%e8%ad%b0%e6%88%90%e5%8a%9f/"
  },{
    "date": "Jan 24,2024",
    "tag": "新聞稿",
    "title": "百家企業響應綠色和平RE10X10綠電倡議 臺灣綠電價格高！企業擴展自發自用新模式",
    "url": "https://www.greenpeace.org/taiwan/press/39406/%E7%99%BE%E5%AE%B6%E4%BC%81%E6%A5%AD%E9%9F%BF%E6%87%89%E7%B6%A0%E8%89%B2%E5%92%8C%E5%B9%B3re10x10%E7%B6%A0%E9%9B%BB%E5%80%A1%E8%AD%B0-%E8%87%BA%E7%81%A3%E7%B6%A0%E9%9B%BB%E5%83%B9%E6%A0%BC%E9%AB%98/"
  },{
    "date": "Mar 30,2023",
    "tag": "報告",
    "title": "2022年 RE10x10 成果報告發布",
    "url": "https://www.greenpeace.org/taiwan/press/35700/81%e5%ae%b6%e4%bc%81%e6%a5%ad%e9%9f%bf%e6%87%89%e7%b6%a0%e8%89%b2%e5%92%8c%e5%b9%b3re10x10%e7%b6%a0%e9%9b%bb%e5%80%a1%e8%ad%b0%ef%bc%8c%e8%87%ba%e7%81%a3%e5%86%8d%e7%94%9f%e8%83%bd%e6%ba%90%e4%be%9b/"
  },{
    "date": "Jul 1,2022",
    "tag": "轉載",
    "title": "InfoLink加入RE10x10綠電倡議 朝淨零碳排目標前進",
    "url": "https://www.infolink-group.com/latest-event/tw/InfoLink-joins-RE10x10-Enterprises-Initiative-Program"
  },{
    "date": "Dec 27,2021",
    "tag": "新聞稿",
    "title": "臺灣再生能源發展待突破! 逾50家企業響應RE10x10 呼籲政府打造健全再生能源市場",
    "url": "https://www.greenpeace.org/taiwan/press/28780/%e8%87%ba%e7%81%a3%e5%86%8d%e7%94%9f%e8%83%bd%e6%ba%90%e7%99%bc%e5%b1%95%e5%be%85%e7%aa%81%e7%a0%b4-%e9%80%be50%e5%ae%b6%e4%bc%81%e6%a5%ad%e9%9f%bf%e6%87%89re10x10/?_gl=1*datkkj*_gcl_au*MjEzODMwODA2Ny4xNjgzNTMwMzk3*_ga*MzE1MTI4OTYuMTY3NTY2ODc4Mw..*_ga_H0F0PQX947*MTY4ODM3MjU5My44My4xLjE2ODgzNzI2NDguNS4wLjA.&_ga=2.74406290.1816460612.1688366542-31512896.1675668783"
  },{
    "date": "Dec 12,2021",
    "tag": "轉載",
    "title": "永續零售潮流 屈臣氏響應RE10X10企業綠電倡議",
    "url": "https://www.cna.com.tw/news/afe/202112230341.aspx"
  },{
    "date": "Sep 22,2021",
    "tag": "專訪",
    "title": "【RE10x10 綠電倡議】Gokube：共享電動機車「衝」綠電，就是要 100% 零碳排！",
    "url": "https://www.greenpeace.org/taiwan/update/27347/%e3%80%90re10x10-%e7%b6%a0%e9%9b%bb%e5%80%a1%e8%ad%b0%e3%80%91gokube%ef%bc%9a%e5%85%b1%e4%ba%ab%e9%9b%bb%e5%8b%95%e6%a9%9f%e8%bb%8a%e3%80%8c%e8%a1%9d%e3%80%8d%e7%b6%a0%e9%9b%bb%ef%bc%8c%e5%b0%b1/?_gl=1*1q54bg8*_gcl_au*ODY1NTYxNjQwLjE2ODIwNzY0NTU.*_ga*MTMxNjAxNDk3LjE2NTYyNjcyMjU.*_ga_H0F0PQX947*MTY4ODM2OTY0OS41MS4xLjE2ODgzNzMwOTIuNDUuMC4w&_ga=2.70204944.1816460612.1688366542-31512896.1675668783"
  },{
    "date": "jul 1,2021",
    "tag": "轉載",
    "title": "牙醫、律師、會計師⋯⋯ 綠色和平的「RE10x10」綠電／淨零倡議，為什麼讓三師企業搶著加入？",
    "url": "https://csr.cw.com.tw/article/42051"
  },{
    "date": "Jun 28,2021",
    "tag": "專訪",
    "title": "【RE10x10 綠電倡議】Clarins 克蘭詩：對的事就去做！力拚大樓綠電領頭羊",
    "url": "https://www.greenpeace.org/taiwan/update/25595/%e3%80%90re10x10-%e7%b6%a0%e9%9b%bb%e5%80%a1%e8%ad%b0%e3%80%91clarins-%e5%85%8b%e8%98%ad%e8%a9%a9%ef%bc%9a%e5%b0%8d%e7%9a%84%e4%ba%8b%e5%b0%b1%e5%8e%bb%e5%81%9a%ef%bc%81%e5%8a%9b%e6%8b%9a%e5%a4%a7/?_gl=1*1q54bg8*_gcl_au*ODY1NTYxNjQwLjE2ODIwNzY0NTU.*_ga*MTMxNjAxNDk3LjE2NTYyNjcyMjU.*_ga_H0F0PQX947*MTY4ODM2OTY0OS41MS4xLjE2ODgzNzMwOTIuNDUuMC4w&_ga=2.70204944.1816460612.1688366542-31512896.1675668783"
  },{
    "date": "jun 21,2021",
    "tag": "專訪",
    "title": "【RE10x10 綠電倡議】CATCHPLAY：使用綠電不是科技業專利！",
    "url": "https://www.greenpeace.org/taiwan/update/25396/%e3%80%90re10x10-%e7%b6%a0%e9%9b%bb%e5%80%a1%e8%ad%b0%e3%80%91catchplay%ef%bc%9a%e4%bd%bf%e7%94%a8%e7%b6%a0%e9%9b%bb%e4%b8%8d%e6%98%af%e7%a7%91%e6%8a%80%e6%a5%ad%e5%b0%88%e5%88%a9%ef%bc%81/?_gl=1*krr82j*_gcl_au*ODY1NTYxNjQwLjE2ODIwNzY0NTU.*_ga*MTMxNjAxNDk3LjE2NTYyNjcyMjU.*_ga_H0F0PQX947*MTY4ODM2OTY0OS41MS4xLjE2ODgzNzMwOTIuNDUuMC4w&_ga=2.133452174.1816460612.1688366542-31512896.1675668783"
  },{
    "date": "Mar 26,2021",
    "tag": "專訪",
    "title": "RE10x10 綠電倡議，幫助臺灣企業從「懂綠電」到「用綠電」",
    "url": "https://www.greenpeace.org/taiwan/update/25010/re10x10-%e7%b6%a0%e9%9b%bb%e5%80%a1%e8%ad%b0%ef%bc%8c%e5%b9%ab%e5%8a%a9%e8%87%ba%e7%81%a3%e4%bc%81%e6%a5%ad%e5%be%9e%e3%80%8c%e6%87%82%e7%b6%a0%e9%9b%bb%e3%80%8d%e5%88%b0%e3%80%8c%e7%94%a8%e7%b6%a0/?_gl=1*14ez4li*_gcl_au*MjEzODMwODA2Ny4xNjgzNTMwMzk3*_ga*MzE1MTI4OTYuMTY3NTY2ODc4Mw..*_ga_H0F0PQX947*MTY4ODM3MjU5My44My4xLjE2ODgzNzI2NDguNS4wLjA.&_ga=2.108294274.1816460612.1688366542-31512896.1675668783"
  },{
    "date": "Nov 8,2023",
    "tag": "新聞稿",
    "title": "政府小額綠電競標治標不治本，輔導企業自發自用才是最佳解方，RE10x10逾百臺企仍待綠電新政",
    "url": "https://www.greenpeace.org/taiwan/press/38475/%e6%94%bf%e5%ba%9c%e5%b0%8f%e9%a1%8d%e7%b6%a0%e9%9b%bb%e7%ab%b6%e6%a8%99%e6%b2%bb%e6%a8%99%e4%b8%8d%e6%b2%bb%e6%9c%ac%ef%bc%8c%e8%bc%94%e5%b0%8e%e4%bc%81%e6%a5%ad%e8%87%aa%e7%99%bc%e8%87%aa%e7%94%a8/"
  }
]
module.exports = newsList;