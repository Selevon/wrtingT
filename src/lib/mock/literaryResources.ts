// 文学资源相关类型定义
export type ResourceCategory = 'ancient' | 'modern' | 'contemporary' | 'foreign';

export interface LiteraryResource {
  id: number;
  title: string;
  author: string;
  era: string;
  category: ResourceCategory;
  content: string;
  appreciation: string;
  theme: string;
  literaryDevice: string;
  videoUrl?: string;
}


// 文学资源模拟数据
export const literaryResources: LiteraryResource[] = [
  // 古代文学
  {
    id: 1,
    title: "静夜思",
    author: "李白",
    era: "唐代",
    category: "ancient" as ResourceCategory,
    content: "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
    appreciation: "这首诗用极其简练的语言，通过对明月的描写，表达了浓浓的思乡之情。“举头”与“低头”的简单动作对比，生动刻画了游子的思乡心态，成为千古传诵的名篇。",
    theme: "思乡",
    literaryDevice: "借景抒情", 
    videoUrl: "https://example.com/videos/li-bai-jingyesi.mp4"
  },
  {
    id: 2,
    title: "登高",
    author: "杜甫",
    era: "唐代",
    category: "ancient" as ResourceCategory,
    content: "风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。",
    appreciation: "这首诗通过描绘登高所见的秋日景象，抒发了诗人长年漂泊他乡、年老多病的悲苦之情。前四句写景，后四句抒情，情景交融，气象雄浑，被誉为“古今七言律诗之冠”。",
    theme: "秋景",
    literaryDevice: "情景交融",
    videoUrl: "https://example.com/videos/du-fu-denggao.mp4" 
  },
  {
    id: 11,
    title: "送元二使安西",
    author: "王维",
    era: "唐代",
    category: "ancient" as ResourceCategory,
    content: "渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。",
    appreciation: "这首诗是唐代送别诗的代表作，通过清新的雨后景色描写，营造出离别的氛围。最后两句“劝君更尽一杯酒，西出阳关无故人”成为千古名句，将对友人的不舍之情表达得含蓄而深沉。",
    theme: "送别",
    literaryDevice: "情景交融",
    videoUrl: "https://example.com/videos/wang-wei-songyuaner.mp4"
  },
  
  // 现代文学
  {
    id: 3,
    title: "从百草园到三味书屋",
    author: "鲁迅",
    era: "近代",
    category: "modern" as ResourceCategory,
    content: "不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑椹；也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上，轻捷的叫天子忽然从草间直窜向云霄里去了。",
    appreciation: "这段文字通过细腻的观察和生动的描写，展现了百草园的生机盎然和儿童的好奇心理。作者运用“不必说...也不必说...”的句式，既表现了景物的丰富多样，又突出了重点，语言简练而富有表现力。",
    theme: "童年记忆",
    literaryDevice: "白描手法",
    videoUrl: "https://example.com/videos/lu-xun-baicaoyuan.mp4"
  },
  {
    id: 4,
    title: "荷塘月色",
    author: "朱自清",
    era: "现代",
    category: "modern" as ResourceCategory,
    content: "月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。",
    appreciation: "这段文字运用了通感和比喻的修辞手法，将月光下的荷塘描绘得如诗如画。作者将抽象的月光比作具体的流水，将荷叶和荷花在月光下的状态比作“笼着轻纱的梦”，创造出一种朦胧而优美的意境。",
    theme: "月色",
    literaryDevice: "通感修辞",
    videoUrl: "https://example.com/videos/zhu-ziqing-hetang.mp4"
  },
  {
    id: 12,
    title: "背影",
    author: "朱自清",
    era: "现代",
    category: "modern" as ResourceCategory,
    content: "我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。",
    appreciation: "这段文字通过对父亲背影的细致描写，展现了深沉的父爱。作者没有直接抒情，而是通过对父亲动作的白描，让读者感受到那份含蓄而真挚的情感，成为现代文学中描写亲情的经典段落。",
    theme: "离别",
    literaryDevice: "细节描写",
    videoUrl: "https://example.com/videos/zhu-ziqing-beiying.mp4"
  },
  
  // 当代文学
  {
    id: 5,
    title: "平凡的世界",
    author: "路遥",
    era: "当代",
    category: "contemporary" as ResourceCategory,
    content: "生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。",
    appreciation: "这段文字体现了作者对人生的深刻思考和积极态度。通过朴实而有力的语言，鼓励人们要积极面对生活，勇敢追求自己的理想，即使结果不尽如人意，也无怨无悔。这种积极向上的人生态度感染了无数读者。",
    theme: "人生",
    literaryDevice: "哲理思辨",
    videoUrl: "https://example.com/videos/lu-yao-pingfan.mp4"
  },
  {
    id: 6,
    title: "边城",
    author: "沈从文",
    era: "现代",
    category: "contemporary" as ResourceCategory,
    content: "茶峒地方凭水依山筑城，近山的一面，城墙如一条长蛇，缘山爬去。临水一面则在城外河边留出余地设码头，湾泊小小篷船。",
    appreciation: "这段文字以简练而生动的笔触，描绘了边城茶峒的地理环境和人文景观。作者用“长蛇”比喻城墙，形象生动；对码头和篷船的描写，则展现了边城的水乡特色和生活气息。文字朴实自然，充满诗意。",
    theme: "乡土",
    literaryDevice: "比喻手法",
    videoUrl: "https://example.com/videos/shen-congwen-biancheng.mp4"
  },
  {
    id: 13,
    title: "合欢树",
    author: "史铁生",
    era: "当代",
    category: "contemporary" as ResourceCategory,
    content: "我摇着车在街上慢慢走，不急着回家。人有时候只想独自静静地呆一会儿。悲伤也成享受。",
    appreciation: "这段文字体现了史铁生对生命的深刻思考和独特感悟。在经历了人生的重大挫折后，作者学会了与悲伤共处，将悲伤升华为一种生命体验。文字简练而富有张力，展现了作者对生命本质的独特理解。",
    theme: "离别",
    literaryDevice: "内心独白",
    videoUrl: "https://example.com/videos/shi-tiesheng-hehuanshu.mp4"
  },
  
  // 外国文学
  {
    id: 7,
    title: "小王子",
    author: "安托万·德·圣-埃克苏佩里",
    era: "20世纪",
    category: "foreign" as ResourceCategory,
    content: "所有的大人都曾经是小孩，虽然，只有少数的人记得。",
    appreciation: "这句话看似简单，却蕴含着深刻的哲理。作者通过小王子的视角，批判了成人世界的功利和虚伪，呼吁人们保持童心和想象力。简短的一句话，却道出了许多人内心深处的共鸣。",
    theme: "童真",
    literaryDevice: "哲理警句",
    videoUrl: "https://example.com/videos/antoine-lepetitprince.mp4"
  },
  {
    id: 8,
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    era: "20世纪",
    category: "foreign" as ResourceCategory,
    content: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
    appreciation: "这是文学史上最著名的开篇之一，作者运用了“时间折叠”的叙事手法，将过去、现在和未来三个时间维度巧妙地融合在一起，预示了整个布恩迪亚家族的命运。这种独特的叙事方式成为魔幻现实主义文学的典范。",
    theme: "记忆",
    literaryDevice: "时间叙事",
    videoUrl: "https://example.com/videos/marquez-cienanos.mp4"
  },
  {
    id: 9,
    title: "老人与海",
    author: "欧内斯特·海明威",
    era: "20世纪",
    category: "foreign" as ResourceCategory,
    content: "一个人可以被毁灭，但不能被打败。",
    appreciation: "这句话是《老人与海》的核心主题，也是海明威“硬汉精神”的集中体现。老人桑提亚哥虽然最终只带回了一副鱼骨，但他在与大海和鲨鱼的搏斗中展现出的顽强意志和不屈精神，赢得了人们的尊敬。这句话简短有力，充满哲理，成为激励人们战胜困难的精神力量。",
    theme: "勇气",
    literaryDevice: "象征手法",
    videoUrl: "https://example.com/videos/hemingway-oldmanandsea.mp4"
  },
  {
    id: 10,
    title: "简·爱",
    author: "夏洛蒂·勃朗特",
    era: "19世纪",
    category: "foreign" as ResourceCategory,
    content: "你以为我贫穷、相貌平平就没有感情吗？我向你发誓，如果上帝赋予我财富和美貌，我会让你无法离开我，就像我现在无法离开你一样。虽然上帝没有这么做，可我们在精神上依然是平等的。",
    appreciation: "这段话体现了简·爱追求精神平等的强烈愿望，是对当时社会等级观念的有力挑战。作者通过简·爱的口，表达了对爱情和人生的看法：真正的爱情不应建立在财富和外貌的基础上，而应基于精神上的平等和相互尊重。这段话充满激情和力量，展现了女性追求独立和尊严的决心。",
    theme: "平等",
    literaryDevice: "内心独白",
    videoUrl: "https://example.com/videos/bronte-janeeyre.mp4"
  },
  {
    id: 14,
    title: "车站",
    author: "契诃夫",
    era: "19世纪",
    category: "foreign" as ResourceCategory,
    content: "在月台上，他来回走着，仿佛在寻找什么失落的东西。他的脚步沉重，每一步都像踩在心上。火车启动时，他突然奔跑起来，追赶着渐渐远去的车厢，直到再也跑不动。",
    appreciation: "这段文字通过对人物动作的细致描写，展现了离别的伤感和不舍。作者没有直接描写人物的内心活动，而是通过“来回走着”“脚步沉重”“突然奔跑”等动作细节，让读者感受到人物内心的痛苦和无奈，体现了契诃夫高超的白描技巧。",
    theme: "离别",
    literaryDevice: "动作描写",
     videoUrl: "https://example.com/videos/chekhov-railwaystation.mp4"
  },
  {
    id: 15,
    title: "赋得古原草送别",
    author: "白居易",
    era: "唐代",
    category: "ancient" as ResourceCategory,
    content: "离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。远芳侵古道，晴翠接荒城。又送王孙去，萋萋满别情。",
    appreciation: "这首诗通过对古原上野草的描绘，抒发了送别友人时的依依惜别之情。诗人以野草的顽强生命力比喻友情的坚韧不拔，意境深远，余味无穷。",
    theme: "离别",
    literaryDevice: "托物言志",
    videoUrl: "https://example.com/videos/bai-juyi-songbie.mp4"
  },
  {
    id: 16,
    title: "送杜少府之任蜀州",
    author: "王勃",
    era: "唐代",
    category: "ancient" as ResourceCategory,
    content: "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。",
    appreciation: "这首诗是送别诗中的名作，诗人以开阔的胸襟表达了对友人的惜别之情。尤其“海内存知己，天涯若比邻”一句，意境高远，一改送别诗的悲戚氛围，成为千古传诵的名句。",
    theme: "送别",
    literaryDevice: "境界开阔",
    videoUrl: "https://example.com/videos/wang-bo-songbie.mp4"
  }
];