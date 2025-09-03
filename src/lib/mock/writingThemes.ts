import { ResourceCategory } from './literaryResources';

// 写作主题类型定义
export interface WritingTheme {
  id: number;
  title: string;
  description: string;
  category: ResourceCategory;
  suggestions: string[]; 
  storyId: number; // 关联文学故事ID
}

// 100个贴合文学故事精神的写作主题
export const writingThemes: WritingTheme[] = [
  {
    id: 1,
    title: "逆境中的豁然开朗",
    description: "描写在困境或挫折中，如何通过某个瞬间或感悟实现心境的转变与释然",
    category: "ancient" as ResourceCategory,
    suggestions: ["刻画内心挣扎", "描写顿悟时刻", "展现心态转变"],
    storyId: 1 // 苏东坡《夜饮东坡醒复醉》
  },
  {
    id: 2,
    title: "平凡人的高尚瞬间",
    description: "描写日常生活中普通人展现出的令人敬佩的品质或行为，以及这些瞬间如何改变你的看法",
    category: "modern" as ResourceCategory,
    suggestions: ["通过具体事件展现", "描写心理变化", "使用对比手法"],
    storyId: 2 // 鲁迅《一件小事》
  },
  {
    id: 3,
    title: "离别时的背影",
    description: "描写离别场景中令人难忘的细节，捕捉亲人或朋友离去时的背影及其带来的情感冲击",
    category: "modern" as ResourceCategory,
    suggestions: ["关注细节描写", "注重情感表达", "运用环境烘托气氛"],
    storyId: 3 // 朱自清《背影》
  },
  {
    id: 4,
    title: "记忆中的亲情印记",
    description: "通过一件旧物或场景，回忆亲人在世时的温暖片段与深刻影响",
    category: "contemporary" as ResourceCategory,
    suggestions: ["以物品为线索", "穿插今昔对比", "注重细节描写"],
    storyId: 4 // 史铁生《合欢树》
  },
  {
    id: 5,
    title: "不屈的意志",
    description: "描写面对困难和挑战时，如何保持坚韧不拔的精神，即使最终未能完全成功也不放弃",
    category: "foreign" as ResourceCategory,
    suggestions: ["展现内心挣扎", "描写坚持过程", "表达对尊严的理解"],
    storyId: 5 // 海明威《老人与海》
  },
  {
    id: 6,
    title: "表象与现实",
    description: "描写对事物或人的第一印象与后续发现的真实情况之间的差距",
    category: "foreign" as ResourceCategory,
    suggestions: ["设置悬念", "描写发现过程", "表达人生感悟"],
    storyId: 6 // 莫泊桑《项链》
  },
  {
    id: 7,
    title: "社会底层的悲凉",
    description: "通过对社会底层人物的描写，反映社会现实与人性冷漠",
    category: "modern" as ResourceCategory,
    suggestions: ["运用白描手法", "刻画细节特征", "展现社会背景"],
    storyId: 7 // 契诃夫《变色龙》
  },
  {
    id: 8,
    title: "困境中的希望之光",
    description: "描写在艰难处境中发现的微小希望，以及它如何影响你的心态和行动",
    category: "modern" as ResourceCategory,
    suggestions: ["注重细节观察", "描写内心变化", "加入象征元素"],
    storyId: 8 // 冰心《小桔灯》
  },
  {
    id: 9,
    title: "故乡的记忆碎片",
    description: "描写回到曾经熟悉的地方，发现物是人非时的感受和思考",
    category: "modern" as ResourceCategory,
    suggestions: ["运用今昔对比", "描写感官细节", "表达内心感慨"],
    storyId: 9 // 鲁迅《故乡》
  },
  {
    id: 10,
    title: "遥远童年的清晰印象",
    description: "描写童年时期某个至今仍历历在目的场景，以及它对你的深远影响",
    category: "modern" as ResourceCategory,
    suggestions: ["注重感官描写", "刻画情感细节", "展现记忆的独特性"],
    storyId: 10 // 林海音《城南旧事》
  },
  {
    id: 11,
    title: "纯真爱情",
    description: "描写简单纯粹的爱情故事，展现人性的美好与善良",
    category: "contemporary" as ResourceCategory,
    suggestions: ["通过细节展现", "描写人物互动", "表达对生活的感悟"],
    storyId: 11 // 汪曾祺《受戒》
  },
  {
    id: 12,
    title: "月夜思乡",
    description: "通过对月夜景色的描写，表达对故乡和亲人的思念之情",
    category: "ancient" as ResourceCategory,
    suggestions: ["借景抒情", "运用比喻手法", "刻画心理活动"],
    storyId: 12 // 李白《静夜思》
  },
  {
    id: 13,
    title: "秋日感怀",
    description: "描写秋日景色，抒发对时光流逝和人生短暂的感慨",
    category: "ancient" as ResourceCategory,
    suggestions: ["情景交融", "运用对仗", "表达深沉情感"],
    storyId: 13 // 杜甫《登高》
  },
  {
    id: 14,
    title: "中秋望月思亲",
    description: "在中秋佳节，通过对明月的描写表达对亲人的思念和对人生的旷达态度",
    category: "ancient" as ResourceCategory,
    suggestions: ["情景交融", "运用想象", "表达人生哲理"],
    storyId: 14 // 苏轼《水调歌头·明月几时有》
  },
  {
    id: 15,
    title: "孤寂愁苦的心绪",
    description: "描写在孤独处境中内心的忧愁与苦闷",
    category: "ancient" as ResourceCategory,
    suggestions: ["运用叠字抒情", "描写凄凉景象", "刻画内心感受"],
    storyId: 15 // 李清照《声声慢·寻寻觅觅》
  },
  {
    id: 16,
    title: "人生如梦",
    description: "通过对繁华落尽的描写，表达对人生无常的感慨",
    category: "ancient" as ResourceCategory,
    suggestions: ["运用象征手法", "描写对比鲜明", "表达人生感悟"],
    storyId: 16 // 曹雪芹《红楼梦》
  },
  {
    id: 17,
    title: "月下荷塘的宁静之美",
    description: "描写自然景色的细腻之美，表达对宁静生活的向往",
    category: "modern" as ResourceCategory,
    suggestions: ["运用通感修辞", "描写层次分明", "表达内心感受"],
    storyId: 17 // 朱自清《荷塘月色》
  },
  {
    id: 18,
    title: "社会底层的悲凉",
    description: "通过对社会底层人物悲惨命运的描写，揭露社会的冷漠与不公",
    category: "modern" as ResourceCategory,
    suggestions: ["运用白描手法", "刻画典型细节", "展现社会背景"],
    storyId: 18 // 鲁迅《孔乙己》
  },
  {
    id: 19,
    title: "凤凰涅槃",
    description: "描写在毁灭中重生的过程，表达对理想的追求和对旧世界的反抗",
    category: "modern" as ResourceCategory,
    suggestions: ["运用象征手法", "表达强烈情感", "展现精神力量"],
    storyId: 19 // 郭沫若《女神·凤凰涅槃》
  },
  {
    id: 20,
    title: "时代洪流中的挣扎",
    description: "描写在时代变迁中个人命运的起伏与挣扎",
    category: "modern" as ResourceCategory,
    suggestions: ["社会剖析", "刻画人物性格", "展现时代特征"],
    storyId: 20 // 茅盾《子夜》
  },
  {
    id: 21,
    title: "人生的围城",
    description: "描写人们在追求与得到之间的矛盾心态，探讨人生的困境",
    category: "modern" as ResourceCategory,
    suggestions: ["运用讽刺手法", "刻画人物心理", "表达人生哲理"],
    storyId: 21 // 钱钟书《围城》
  },
  {
    id: 22,
    title: "家族的束缚与反抗",
    description: "描写封建大家庭对年轻人的束缚以及他们的反抗",
    category: "modern" as ResourceCategory,
    suggestions: ["刻画人物冲突", "展现时代背景", "表达反抗精神"],
    storyId: 22 // 巴金《家》
  },
  {
    id: 23,
    title: "命运的悲剧",
    description: "描写在黑暗社会中，个人命运的悲惨与无奈",
    category: "modern" as ResourceCategory,
    suggestions: ["运用象征手法", "刻画人物性格", "展现社会背景"],
    storyId: 23 // 曹禺《雷雨》
  },
  {
    id: 24,
    title: "底层人民的挣扎",
    description: "描写社会底层人民在压迫下的艰难生活和不屈挣扎",
    category: "modern" as ResourceCategory,
    suggestions: ["现实主义手法", "刻画人物形象", "展现社会不公"],
    storyId: 24 // 老舍《骆驼祥子》
  },
  {
    id: 25,
    title: "纯真的爱情",
    description: "描写乡村中纯真质朴的爱情故事，展现人性的美好",
    category: "modern" as ResourceCategory,
    suggestions: ["田园牧歌风格", "刻画自然景色", "表达纯真情感"],
    storyId: 25 // 沈从文《边城》
  },
  {
    id: 26,
    title: "人性的扭曲",
    description: "描写在封建礼教压迫下人性的扭曲与变态",
    category: "modern" as ResourceCategory,
    suggestions: ["心理描写", "刻画人物变化", "展现社会背景"],
    storyId: 26 // 张爱玲《金锁记》
  },
  {
    id: 27,
    title: "感恩与同情",
    description: "表达对养育自己的人的感恩之情和对劳动人民的深切同情",
    category: "modern" as ResourceCategory,
    suggestions: ["抒情手法", "描写具体事例", "表达真挚情感"],
    storyId: 27 // 艾青《大堰河——我的保姆》
  },
  {
    id: 28,
    title: "离别之情",
    description: "描写与亲友离别时的不舍与留恋之情",
    category: "modern" as ResourceCategory,
    suggestions: ["意象手法", "描写场景细节", "表达真挚情感"],
    storyId: 28 // 徐志摩《再别康桥》
  },
  {
    id: 29,
    title: "孤独与彷徨",
    description: "描写在迷茫的人生道路上的孤独与彷徨",
    category: "modern" as ResourceCategory,
    suggestions: ["象征手法", "描写内心感受", "表达迷茫情绪"],
    storyId: 29 // 戴望舒《雨巷》
  },
  {
    id: 30,
    title: "相对与依存",
    description: "探讨人与人之间相互依存、相互影响的关系",
    category: "modern" as ResourceCategory,
    suggestions: ["运用哲理小诗形式", "描写生活场景", "表达人生感悟"],
    storyId: 30 // 卞之琳《断章》
  },
  {
    id: 31,
    title: "商业困境",
    description: "描写小商人在动荡社会中的经营困境",
    category: "modern" as ResourceCategory,
    suggestions: ["社会写实", "刻画人物心理", "展现时代特征"],
    storyId: 31 // 茅盾《林家铺子》
  },
  {
    id: 32,
    title: "青春的苦闷",
    description: "描写青年在社会压力下的孤独、彷徨与苦闷",
    category: "modern" as ResourceCategory,
    suggestions: ["心理写实", "刻画内心活动", "表达反抗精神"],
    storyId: 32 // 郁达夫《沉沦》
  },
  {
    id: 33,
    title: "爱的哲学",
    description: "表达对母爱、童真和自然的赞美",
    category: "modern" as ResourceCategory,
    suggestions: ["抒情小诗", "运用比喻手法", "表达真挚情感"],
    storyId: 33 // 冰心《繁星》
  },
  {
    id: 34,
    title: "春的生机",
    description: "描写春天的生机勃勃，表达对生命的热爱",
    category: "modern" as ResourceCategory,
    suggestions: ["景物描写", "运用拟人手法", "表达喜悦之情"],
    storyId: 34 // 朱自清《春》
  },
  {
    id: 35,
    title: "封建礼教的压迫",
    description: "揭露封建礼教对女性的压迫和摧残",
    category: "modern" as ResourceCategory,
    suggestions: ["社会批判", "刻画人物命运", "展现社会背景"],
    storyId: 35 // 鲁迅《祝福》
  },
  {
    id: 36,
    title: "叛逆与创造",
    description: "表达对旧世界的叛逆和对新事物的创造精神",
    category: "modern" as ResourceCategory,
    suggestions: ["浪漫主义风格", "运用夸张手法", "表达强烈情感"],
    storyId: 36 // 郭沫若《女神》
  },
  {
    id: 37,
    title: "对现实失望",
    description: "通过对黑暗现实的描写，表达对社会的失望和对变革的渴望",
    category: "modern" as ResourceCategory,
    suggestions: ["隐喻手法", "描写鲜明对比", "表达强烈情感"],
    storyId: 37 // 闻一多《死水》
  },
  {
    id: 38,
    title: "时代变迁",
    description: "描写在时代变迁中个人命运与家族兴衰",
    category: "modern" as ResourceCategory,
    suggestions: ["史诗笔法", "刻画人物众多", "展现历史背景"],
    storyId: 38 // 林语堂《京华烟云》
  },
  {
    id: 39,
    title: "爱情与命运",
    description: "描写青年男女在社会阶层差异下的爱情故事",
    category: "modern" as ResourceCategory,
    suggestions: ["通俗小说风格", "刻画人物性格", "表达人生感悟"],
    storyId: 39 // 张恨水《啼笑因缘》
  },
  {
    id: 40,
    title: "社会的黑暗",
    description: "揭露都市生活的黑暗与腐朽",
    category: "modern" as ResourceCategory,
    suggestions: ["象征手法", "刻画人物群像", "表达批判态度"],
    storyId: 40 // 曹禺《日出》
  },
  {
    id: 41,
    title: "流浪与探索",
    description: "描写在边疆流浪的经历和对人生的探索",
    category: "modern" as ResourceCategory,
    suggestions: ["写实主义", "描写边疆风情", "表达自由精神"],
    storyId: 41 // 艾芜《南行记》
  },
  {
    id: 42,
    title: "官场腐败",
    description: "讽刺官场的腐败现象和官僚主义",
    category: "modern" as ResourceCategory,
    suggestions: ["讽刺手法", "刻画人物形象", "展现社会现实"],
    storyId: 42 // 沙汀《在其香居茶馆里》
  },
  {
    id: 43,
    title: "民族觉醒",
    description: "描写在民族危亡时刻人民的觉醒和团结",
    category: "modern" as ResourceCategory,
    suggestions: ["现实主义", "刻画群体形象", "表达爱国情怀"],
    storyId: 43 // 吴组缃《山洪》
  },
  {
    id: 44,
    title: "抗日救国",
    description: "描写人民群众在抗日战争中的英勇斗争",
    category: "modern" as ResourceCategory,
    suggestions: ["革命现实主义", "刻画英雄形象", "表达爱国精神"],
    storyId: 44 // 萧军《八月的乡村》
  },
  {
    id: 45,
    title: "生命的轮回",
    description: "描写普通人在苦难生活中的生死轮回",
    category: "modern" as ResourceCategory,
    suggestions: ["自然主义", "描写乡土风情", "表达生命感悟"],
    storyId: 45 // 萧红《生死场》
  },
  {
    id: 46,
    title: "精神追求",
    description: "描写在艰苦环境中对精神追求的执着",
    category: "contemporary" as ResourceCategory,
    suggestions: ["写实手法", "刻画专注神情", "表达人生境界"],
    storyId: 46 // 阿城《棋王》
  },
  {
    id: 47,
    title: "理想与现实",
    description: "描写青年知识分子的理想与现实的冲突",
    category: "contemporary" as ResourceCategory,
    suggestions: ["现实主义", "刻画人物心理", "表达社会批判"],
    storyId: 47 // 王蒙《组织部新来的青年人》
  },
  {
    id: 48,
    title: "教育反思",
    description: "反思教育对青少年心灵的影响",
    category: "contemporary" as ResourceCategory,
    suggestions: ["社会写实", "刻画师生关系", "表达教育思考"],
    storyId: 48 // 刘心武《班主任》
  },
  {
    id: 49,
    title: "平凡中的伟大",
    description: "描写普通人在平凡生活中的奋斗与坚持",
    category: "contemporary" as ResourceCategory,
    suggestions: ["现实主义", "刻画人物性格", "表达人生感悟"],
    storyId: 49 // 路遥《平凡的世界》
  },
  {
    id: 50,
    title: "乡土变迁",
    description: "描写在社会变革中乡村的变迁",
    category: "contemporary" as ResourceCategory,
    suggestions: ["乡土文学", "刻画人物群像", "表达文化反思"],
    storyId: 50 // 贾平凹《秦腔》
  },
  {
    id: 51,
    title: "生命的野性",
    description: "描写生命本能的野性与力量",
    category: "contemporary" as ResourceCategory,
    suggestions: ["魔幻现实主义", "描写乡土传奇", "表达生命激情"],
    storyId: 51 // 莫言《红高粱家族》
  },
  {
    id: 52,
    title: "生命的韧性",
    description: "描写人在苦难中顽强生存的韧性",
    category: "contemporary" as ResourceCategory,
    suggestions: ["极简主义", "刻画苦难经历", "表达生命感悟"],
    storyId: 52 // 余华《活着》
  },
  {
    id: 53,
    title: "上海往事",
    description: "描写上海都市生活中的女性命运",
    category: "contemporary" as ResourceCategory,
    suggestions: ["细腻描写", "刻画人物心理", "展现时代变迁"],
    storyId: 53 // 王安忆《长恨歌》
  },
  {
    id: 54,
    title: "家族史诗",
    description: "描写家族在历史变迁中的兴衰沉浮",
    category: "contemporary" as ResourceCategory,
    suggestions: ["史诗笔法", "刻画人物众多", "展现历史厚重"],
    storyId: 54 // 陈忠实《白鹿原》
  },
  {
    id: 55,
    title: "文明的碰撞",
    description: "描写乡村与城市文明的碰撞与融合",
    category: "contemporary" as ResourceCategory,
    suggestions: ["象征手法", "刻画少女情怀", "表达希望向往"],
    storyId: 55 // 铁凝《哦，香雪》
  },
  {
    id: 56,
    title: "精神的追寻",
    description: "描写对精神家园的执着追寻",
    category: "contemporary" as ResourceCategory,
    suggestions: ["象征手法", "描写自然景观", "表达理想主义"],
    storyId: 56 // 张承志《北方的河》
  },
  {
    id: 57,
    title: "语言与文化",
    description: "探讨语言与文化、身份认同的关系",
    category: "contemporary" as ResourceCategory,
    suggestions: ["实验性写作", "描写乡土语言", "表达文化反思"],
    storyId: 57 // 韩少功《马桥词典》
  },
  {
    id: 58,
    title: "女性悲剧",
    description: "描写封建家庭中女性的悲剧命运",
    category: "contemporary" as ResourceCategory,
    suggestions: ["细腻描写", "刻画人物心理", "表达社会批判"],
    storyId: 58 // 苏童《妻妾成群》
  },
  {
    id: 59,
    title: "命运的偶然",
    description: "描写命运中的偶然事件对人生的影响",
    category: "contemporary" as ResourceCategory,
    suggestions: ["先锋派手法", "设置悬念", "表达人生感慨"],
    storyId: 59 // 格非《迷舟》
  },
  {
    id: 60,
    title: "文化反思",
    description: "通过对文化古迹的描写，表达对文化传承的思考",
    category: "contemporary" as ResourceCategory,
    suggestions: ["文化散文", "描写历史遗迹", "表达文明思考"],
    storyId: 60 // 余秋雨《文化苦旅》
  },
  {
    id: 61,
    title: "生命的意义",
    description: "探讨生命的意义和价值",
    category: "contemporary" as ResourceCategory,
    suggestions: ["哲理散文", "描写自然景观", "表达人生感悟"],
    storyId: 61 // 史铁生《我与地坛》
  },
  {
    id: 62,
    title: "历史的反思",
    description: "通过家族历史反思社会变迁",
    category: "contemporary" as ResourceCategory,
    suggestions: ["现实主义", "刻画家族恩怨", "表达历史思考"],
    storyId: 62 // 张炜《古船》
  },
  {
    id: 63,
    title: "都市烦恼",
    description: "描写现代都市人的生活压力和精神困境",
    category: "contemporary" as ResourceCategory,
    suggestions: ["新写实主义", "描写生活琐事", "表达都市感悟"],
    storyId: 63 // 池莉《烦恼人生》
  },
  {
    id: 64,
    title: "平凡的生活",
    description: "描写普通人生活中的琐碎与无奈",
    category: "contemporary" as ResourceCategory,
    suggestions: ["写实主义", "刻画生活细节", "表达人生感悟"],
    storyId: 64 // 刘震云《一地鸡毛》
  },
  {
    id: 65,
    title: "文明的消逝",
    description: "描写少数民族文化在现代化进程中的消逝",
    category: "contemporary" as ResourceCategory,
    suggestions: ["民族史诗", "描写自然与人", "表达文化反思"],
    storyId: 65 // 迟子建《额尔古纳河右岸》
  },
  {
    id: 66,
    title: "黑暗中的光明",
    description: "描写残疾人在黑暗中寻找光明的努力",
    category: "contemporary" as ResourceCategory,
    suggestions: ["细腻描写", "刻画人物心理", "表达人性尊严"],
    storyId: 66 // 毕飞宇《推拿》
  },
  {
    id: 67,
    title: "上海风情",
    description: "描写上海弄堂生活的独特风情",
    category: "contemporary" as ResourceCategory,
    suggestions: ["方言写作", "刻画市井生活", "表达时代变迁"],
    storyId: 67 // 金宇澄《繁花》
  },
  {
    id: 68,
    title: "自然与人",
    description: "描写人与自然和谐相处的游牧生活",
    category: "contemporary" as ResourceCategory,
    suggestions: ["散文笔法", "描写自然景观", "表达生活态度"],
    storyId: 68 // 李娟《阿勒泰的角落》
  },
  {
    id: 69,
    title: "生活的诗意",
    description: "描写日常生活中的诗意瞬间",
    category: "contemporary" as ResourceCategory,
    suggestions: ["散文笔法", "描写细腻感受", "表达生活热爱"],
    storyId: 69 // 汪曾祺《昆明的雨》
  },
  {
    id: 70,
    title: "爱的礼赞",
    description: "表达对爱情的赞美和对美好生活的向往",
    category: "modern" as ResourceCategory,
    suggestions: ["抒情手法", "运用比喻", "表达浪漫情怀"],
    storyId: 70 // 林徽因《你是人间的四月天》
  },
  {
    id: 71,
    title: "理想社会",
    description: "描写对理想社会的向往",
    category: "ancient" as ResourceCategory,
    suggestions: ["寓言手法", "描写田园生活", "表达社会理想"],
    storyId: 71 // 陶渊明《桃花源记》
  },
  {
    id: 72,
    title: "爱国情怀",
    description: "表达对国家和人民的深厚感情",
    category: "ancient" as ResourceCategory,
    suggestions: ["浪漫主义", "运用象征", "表达忧国忧民"],
    storyId: 72 // 屈原《离骚》
  },
  {
    id: 73,
    title: "人生得意",
    description: "表达豪放不羁的人生态度和自信",
    category: "ancient" as ResourceCategory,
    suggestions: ["豪放风格", "运用夸张", "表达自信人生"],
    storyId: 73 // 李白《将进酒》
  },
  {
    id: 74,
    title: "忧国忧民",
    description: "表达对国家命运和人民疾苦的深切关怀",
    category: "ancient" as ResourceCategory,
    suggestions: ["现实主义", "描写民生疾苦", "表达博大胸怀"],
    storyId: 74 // 杜甫《茅屋为秋风所破歌》
  },
  {
    id: 75,
    title: "爱情悲剧",
    description: "描写帝王与妃子的爱情悲剧",
    category: "ancient" as ResourceCategory,
    suggestions: ["叙事诗", "描写细腻情感", "表达历史反思"],
    storyId: 75 // 白居易《长恨歌》
  },
  {
    id: 76,
    title: "人生惘然",
    description: "表达对人生变幻无常的感慨",
    category: "ancient" as ResourceCategory,
    suggestions: ["象征手法", "运用典故", "表达人生感悟"],
    storyId: 76 // 李商隐《锦瑟》
  },
  {
    id: 77,
    title: "兴亡之鉴",
    description: "通过历史事件表达对国家兴亡的思考",
    category: "ancient" as ResourceCategory,
    suggestions: ["赋体文", "描写宏大场景", "表达历史警示"],
    storyId: 77 // 杜牧《阿房宫赋》
  },
  {
    id: 78,
    title: "旷达人生",
    description: "表达对人生的旷达态度和超脱精神",
    category: "ancient" as ResourceCategory,
    suggestions: ["赋体文", "情景交融", "表达超然物外"],
    storyId: 78 // 苏轼《赤壁赋》
  },
  {
    id: 79,
    title: "爱国情怀",
    description: "表达对国家的热爱和对收复失地的渴望",
    category: "ancient" as ResourceCategory,
    suggestions: ["豪放词", "运用典故", "表达壮志豪情"],
    storyId: 79 // 辛弃疾《永遇乐·京口北固亭怀古》
  },
  {
    id: 80,
    title: "少女情怀",
    description: "描写少女无忧无虑的生活和纯真情感",
    category: "ancient" as ResourceCategory,
    suggestions: ["婉约词", "描写生动场景", "表达纯真情感"],
    storyId: 80 // 李清照《如梦令》
  },
  {
    id: 81,
    title: "爱国忧民",
    description: "表达对国家命运的深切忧虑和爱国情怀",
    category: "ancient" as ResourceCategory,
    suggestions: ["七言绝句", "语言简练", "表达至死不渝"],
    storyId: 81 // 陆游《示儿》
  },
  {
    id: 82,
    title: "社会不公",
    description: "揭露社会的不公和对弱者的同情",
    category: "ancient" as ResourceCategory,
    suggestions: ["元杂剧", "描写悲惨命运", "表达反抗精神"],
    storyId: 82 // 关汉卿《窦娥冤》
  },
  {
    id: 83,
    title: "爱情追求",
    description: "描写青年男女对自由爱情的勇敢追求",
    category: "ancient" as ResourceCategory,
    suggestions: ["元杂剧", "刻画人物性格", "表达反抗精神"],
    storyId: 83 // 王实甫《西厢记》
  },
  {
    id: 84,
    title: "官逼民反",
    description: "描写在官府压迫下民众的反抗精神",
    category: "ancient" as ResourceCategory,
    suggestions: ["章回小说", "刻画英雄形象", "表达反抗压迫"],
    storyId: 84 // 施耐庵《水浒传》
  },
  {
    id: 85,
    title: "天下大势",
    description: "描写天下大势分久必合、合久必分的历史规律",
    category: "ancient" as ResourceCategory,
    suggestions: ["章回小说", "描写宏大历史", "表达历史感悟"],
    storyId: 85 // 罗贯中《三国演义》
  },
  {
    id: 86,
    title: "修行之路",
    description: "描写师徒四人西天取经的艰难历程",
    category: "ancient" as ResourceCategory,
    suggestions: ["神魔小说", "刻画人物性格", "表达信仰坚定"],
    storyId: 86 // 吴承恩《西游记》
  },
  {
    id: 87,
    title: "人鬼情未了",
    description: "描写人与鬼之间的情感故事",
    category: "ancient" as ResourceCategory,
    suggestions: ["志怪小说", "描写奇幻情节", "表达人性探索"],
    storyId: 87 // 蒲松龄《聊斋志异》
  },
  {
    id: 88,
    title: "科举批判",
    description: "讽刺科举制度对知识分子的毒害",
    category: "ancient" as ResourceCategory,
    suggestions: ["讽刺小说", "刻画人物群像", "表达社会批判"],
    storyId: 88 // 吴敬梓《儒林外史》
  },
  {
    id: 89,
    title: "人鬼情未了",
    description: "描写人与鬼之间的情感纠葛",
    category: "ancient" as ResourceCategory,
    suggestions: ["志怪小说", "描写细腻情感", "表达人性探索"],
    storyId: 89 // 蒲松龄《聊斋志异》
  },
  {
    id: 90,
    title: "封建礼教的压迫",
    description: "揭露封建礼教对女性的压迫",
    category: "modern" as ResourceCategory,
    suggestions: ["现实主义", "描写悲惨命运", "表达社会批判"],
    storyId: 90 // 鲁迅《祝福》
  },
  {
    id: 91,
    title: "爱国情怀",
    description: "表达对国家的热爱和对正义的呐喊",
    category: "modern" as ResourceCategory,
    suggestions: ["历史剧", "运用象征手法", "表达理想主义"],
    storyId: 91 // 郭沫若《屈原》
  },
  {
    id: 92,
    title: "农民的苦难",
    description: "描写农民在剥削下的苦难生活",
    category: "modern" as ResourceCategory,
    suggestions: ["现实主义", "描写劳动场景", "表达社会批判"],
    storyId: 92 // 茅盾《春蚕》
  },
  {
    id: 93,
    title: "家庭悲剧",
    description: "描写在社会动荡中家庭的悲剧命运",
    category: "modern" as ResourceCategory,
    suggestions: ["现实主义", "刻画人物关系", "表达社会批判"],
    storyId: 93 // 巴金《寒夜》
  },
  {
    id: 94,
    title: "社会变迁",
    description: "通过茶馆的兴衰描写社会的变迁",
    category: "modern" as ResourceCategory,
    suggestions: ["话剧", "刻画人物群像", "表达时代变迁"],
    storyId: 94 // 老舍《茶馆》
  },
  {
    id: 95,
    title: "复仇与救赎",
    description: "描写在复仇过程中的人性挣扎与救赎",
    category: "modern" as ResourceCategory,
    suggestions: ["象征主义", "刻画内心冲突", "表达人性探索"],
    storyId: 95 // 曹禺《原野》
  },
  {
    id: 96,
    title: "女性命运",
    description: "描写封建礼教下女性的悲惨命运",
    category: "modern" as ResourceCategory,
    suggestions: ["乡土文学", "刻画人物命运", "表达社会批判"],
    storyId: 96 // 沈从文《萧萧》
  },
  {
    id: 97,
    title: "人生智慧",
    description: "表达对人生的深刻思考和智慧",
    category: "modern" as ResourceCategory,
    suggestions: ["散文随笔", "运用比喻", "表达人生感悟"],
    storyId: 97 // 钱钟书《写在人生边上》
  },
  {
    id: 98,
    title: "爱情与命运",
    description: "描写在乱世中爱情的脆弱与坚韧",
    category: "modern" as ResourceCategory,
    suggestions: ["细腻描写", "刻画人物心理", "表达苍凉美学"],
    storyId: 98 // 张爱玲《倾城之恋》
  },
  {
    id: 99,
    title: "爱国情怀",
    description: "表达对祖国深深的热爱和对民族命运的忧虑",
    category: "modern" as ResourceCategory,
    suggestions: ["象征手法", "描写土地景色", "表达深沉情感"],
    storyId: 99 // 艾青《我爱这土地》
  },
  {
    id: 100,
    title: "偶然与必然",
    description: "描写人生中的偶然相遇与必然分离",
    category: "modern" as ResourceCategory,
    suggestions: ["抒情诗", "运用比喻", "表达人生感悟"],
    storyId: 100 // 徐志摩《偶然》
  }
];