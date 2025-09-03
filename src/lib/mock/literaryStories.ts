import { Story } from '@/components/literary-story/StoryCard';
import { env } from '@/config/env';

// 文学故事模拟数据
export const literaryStories: Story[] = [
  {
    id: 1,
    author: "苏东坡",
    title: "夜饮东坡醒复醉",
    era: "北宋",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Su%20Dongpo%20ancient%20Chinese%20poet%20writing%20poetry%20by%20moonlight&sign=7c80e47ef134955588a68592e5a11949",
    brief: "被贬黄州的苏东坡，在一个夜晚醉酒归来，却发现家门被锁，于是写下了千古名篇《临江仙·夜饮东坡醒复醉》。",
    text: "夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，江海寄余生。这是苏轼被贬黄州时所作，当时他在政治上遭受重大打击，却在这样一个被家童拒之门外的夜晚，获得了精神上的超脱与自由。词中通过对深夜江景的描写，表达了作者旷达的人生态度和对自由的向往。全词语言质朴，却意境深远，展现了苏轼在逆境中依然保持豁达的心境。",
    fullText: "夜饮东坡醒复醉，归来仿佛三更。家童鼻息已雷鸣。敲门都不应，倚杖听江声。长恨此身非我有，何时忘却营营。夜阑风静縠纹平。小舟从此逝，江海寄余生。这是苏轼被贬黄州时所作，当时他在政治上遭受重大打击，却在这样一个被家童拒之门外的夜晚，获得了精神上的超脱与自由。词中通过对深夜江景的描写，表达了作者旷达的人生态度和对自由的向往。",
    content: "宋神宗元丰三年，苏东坡因“乌台诗案”被贬为黄州团练副使，政治失意，生活困顿。一个秋夜，他与友人饮酒至深夜，醉后回到居所“东坡雪堂”，却发现家童早已睡熟，无论如何敲门都无人应答。\n\n在寂静的夜晚，苏东坡没有恼怒，反而转身走向江边，看着江面上的明月与清风，豁然开朗。他领悟到“长恨此身非我有，何时忘却营营”的人生哲理，于是写下了这首流传千古的《临江仙》。\n\n这首词通过对一个平凡夜晚经历的描写，展现了苏东坡旷达超脱的人生态度和对自由的向往。在逆境中，他没有沉沦，而是以豁达的心态面对人生的挫折，这种精神境界正是其作品历久弥新的魅力所在。",
    theme: {
      title: "忘带钥匙",
      literaryDevice: "情景交融"
    },
    relatedThemes: ["忘带钥匙", "意外困境", "独处时刻", "豁然开朗"]
  },
  {
    id: 2,
    author: "鲁迅",
    title: "一件小事",
    era: "近代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Xun%20Chinese%20writer%20in%20old%20Beijing%20street&sign=890fc6f514e98269cc9ad3528898f9a2",
    brief: "鲁迅在寒冷的冬天乘坐人力车时，遇到了一件看似平凡却对他产生深刻影响的小事，反映了底层人民的高尚品质。",
    text: "这是民国六年的冬天，大北风刮得正猛，我因为生计关系，不得不一早在路上走。一路几乎遇不见人，好容易才雇定了一辆人力车，教他拉到S门去。不一会，北风小了，路上浮尘早已刮净，剩下一条洁白的大道来，车夫也跑得更快。刚近S门，忽而车把上带着一个人，慢慢地倒了。跌倒的是一个女人，花白头发，衣服都很破烂。伊从马路边上突然向车前横截过来；车夫已经让开道，但伊的破棉背心没有上扣，微风吹着，向外展开，所以终于兜着车把。幸而车夫早有点停步，否则伊定要栽一个大斤斗，跌到头破血出了。我料定这老女人并没有伤，又没有别人看见，便很怪他多事，要自己惹出是非，也误了我的路。我便对他说，'没有什么的。走你的罢！'车夫毫不理会，却放下车子，扶那老女人慢慢起来，搀着臂膊立定，问伊说：'你怎么啦？'我有些诧异，忙看前面，是一所巡警分驻所，大风之后，外面也不见人。这车夫扶着那老女人，便正是向那大门走去。我这时突然感到一种异样的感觉，觉得他满身灰尘的后影，刹时高大了，而且愈走愈大，须仰视才见。",
    fullText: "我从乡下跑到京城里，一转眼已经六年了。其间耳闻目睹的所谓国家大事，算起来也很不少；但在我心里，都不留什么痕迹，倘要我寻出这些事的影响来说，便只是增长了我的坏脾气，——老实说，便是教我一天比一天的看不起人。但有一件小事，却于我有意义，将我从坏脾气里拖开，使我至今忘记不得。这是民国六年的冬天，大北风刮得正猛，我因为生计关系，不得不一早在路上走。一路几乎遇不见人，好容易才雇定了一辆人力车，教他拉到S门去。不一会，北风小了，路上浮尘早已刮净，剩下一条洁白的大道来，车夫也跑得更快。刚近S门，忽而车把上带着一个人，慢慢地倒了。跌倒的是一个女人，花白头发，衣服都很破烂。伊从马路边上突然向车前横截过来；车夫已经让开道，但伊的破棉背心没有上扣，微风吹着，向外展开，所以终于兜着车把。幸而车夫早有点停步，否则伊定要栽一个大斤斗，跌到头破血出了。伊伏在地上；车夫便也立住脚。我料定这老女人并没有伤，又没有别人看见，便很怪他多事，要自己惹出是非，也误了我的路。我便对他说，“没有什么的。走你的罢！”车夫毫不理会，——或者并没有听到，——却放下车子，扶那老女人慢慢起来，搀着臂膊立定，问伊说：“你怎么啦？”“我摔坏了。”我想，我眼见你慢慢倒地，怎么会摔坏呢，装腔作势罢了，这真可憎恶。车夫多事，也正是自讨苦吃，现在你自己想法去。车夫听了这老女人的话，却毫不踌躇，仍然搀着伊的臂膊，便一步一步的向前走。我有些诧异，忙看前面，是一所巡警分驻所，大风之后，外面也不见人。这车夫扶着那老女人，便正是向那大门走去。我这时突然感到一种异样的感觉，觉得他满身灰尘的后影，刹时高大了，而且愈走愈大，须仰视才见。而且他对于我，渐渐的又几乎变成一种威压，甚而至于要榨出皮袍下面藏着的“小”来。我的活力这时大约有些凝滞了，坐着没有动，也没有想，直到看见分驻所里走出一个巡警，才下了车。",
    content: "1919年冬天，鲁迅从师范学校辞职，准备回故乡接母亲到北京。在一个北风呼啸的早晨，他乘坐人力车去S门，途中遇到一位老妇人突然从路旁冲出，与人力车相撞摔倒在地。\n\n在那个年代，底层人民的生命价值往往不被重视。鲁迅起初也只关心自己是否会迟到，甚至认为老妇人是故意碰瓷。然而，他的车夫却毫不犹豫地停下车子，扶起老妇人，并主动提出送她去巡警分驻所。\n\n这一件小事深深触动了鲁迅，让他感到自己的渺小与车夫的伟大。他在文中写道：“我这时突然感到一种异样的感觉，觉得他满身灰尘的后影，刹时高大了，而且愈走愈大，须仰视才见。”\n\n通过这件小事，鲁迅不仅批判了当时社会的冷漠与不公，更展现了普通劳动者身上的正直与善良，以及这种品质对知识分子的精神震撼。",
    theme: {
      title: "被他人折服",
      literaryDevice: "对比手法"
    },
    relatedThemes: ["被他人折服", "改变看法", "平凡中的伟大", "意外感动"]
  },
  {
    id: 3,
    author: "朱自清",
    title: "背影",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chinese%20father%20carrying%20luggage%20at%20old%20train%20station&sign=03ae2fa63ad21f34bf0dcd06396f18a0",
    brief: "朱自清在南京浦口车站送别父亲时，看到父亲为他买橘子的背影，这个平凡的瞬间成为他心中永远的感动。",
    text: "我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪，怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的橘子往回走了。过铁道时，他先将橘子散放在地上，自己慢慢爬下，再抱起橘子走。到这边时，我赶紧去搀他。他和我走到车上，将橘子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的。过一会儿说：'我走了，到那边来信！'我望着他走出去。他走了几步，回过头看见我，说：'进去吧，里边没人。'等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。",
    content: "1925年，朱自清在北京大学任教，寒假后返京时，父亲到南京浦口车站为他送行。当时父亲正处于失业状态，家庭经济困难，心情也不好，但他仍然坚持要送儿子上车。\n\n在车站，父亲拖着肥胖的身躯，蹒跚地穿过铁道，爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。\n\n这是一个极其平凡的场景，却蕴含着深沉的父爱。朱自清在文中写道：“等他的背影混入来来往往的人里，再找不着了，我便进来坐下我的眼泪又来了。”\n\n《背影》通过对父亲送别场景的细致描写，展现了中国传统父子之间含蓄而深沉的情感。这个看似普通的背影，不仅是父亲的形象，更是父爱的象征，触动了无数读者的心弦。",
    theme: {
      title: "离别",
      literaryDevice: "细节描写"
    },
    relatedThemes: ["离别", "亲情", "感动瞬间", "难忘回忆"]
  },
  {
    id: 4,
    author: "史铁生",
    title: "合欢树",
    era: "当代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chinese%2Awriter%20Shi%20Tiesheng%20in%20a%20garden%20with%20a%20tree&sign=1aa0fde0fe76d15bea3611ea8c9765d5",
    brief: "史铁生通过回忆母亲栽种合欢树的往事表达了对母亲深深的思念和对生命的感悟。",
    text: "十岁那年，我在一次作文比赛中得了第一。母亲那时候还年轻，急着跟我说她自己，说她小时候的作文做得还要好，老师甚至不相信那么好的文章会是她写的。“老师找到家来问，是不是家里的大人帮了忙。我那时可能还不到十岁呢。”我听得扫兴，故意笑：“可能？什么叫可能还不到？”她就解释，我装作根本不再注意她的话，对着墙打乒乓球，把她气得够呛。不过我承认她聪明，承认她是世界上长得最好看的女的。她正给自己做一条蓝地白花的裙子。二十岁，我的两条腿残废了。除去给人家画彩蛋，我想我还应该再干点别的事，先后改变了几次主意，最后想学写作。母亲那时已不年轻，为了我的腿，她头上开始有了白发。医院已经明确表示，我的病目前没办法治。母亲的全副心思却还放在给我治病上，到处找大夫，打听偏方，花很多钱。她倒总能找来些稀奇古怪的药，让我吃，让我喝，或者是洗、敷、熏、灸。“别浪费时间啦！根本没用！”我说，我一心只想着写小说，仿佛那东西能把残疾人救出困境。",
    content: "十岁那年，我在一次作文比赛中得了第一。母亲那时候还年轻，急着跟我说她自己，说她小时候的作文做得还要好，老师甚至不相信那么好的文章会是她写的。“老师找到家来问，是不是家里的大人帮了忙。我那时可能还不到十岁呢。”我听得扫兴，故意笑：“可能？什么叫可能还不到？”她就解释，我装作根本不再注意她的话，对着墙打乒乓球，把她气得够呛。不过我承认她聪明，承认她是世界上长得最好看的女的。她正给自己做一条蓝地白花的裙子。\n\n二十岁，我的两条腿残废了。除去给人家画彩蛋，我想我还应该再干点别的事，先后改变了几次主意，最后想学写作。母亲那时已不年轻，为了我的腿，她头上开始有了白发。医院已经明确表示，我的病目前没办法治。母亲的全副心思却还放在给我治病上，到处找大夫，打听偏方，花很多钱。她倒总能找来些稀奇古怪的药，让我吃，让我喝，或者是洗、敷、熏、灸。“别浪费时间啦！根本没用！”我说，我一心只想着写小说，仿佛那东西能把残疾人救出困境。",
    theme: {
      title: "回忆往事",
      literaryDevice: "借物抒情"
    },
    relatedThemes: ["回忆往事", "亲情", "成长经历", "人生感悟"]
  },
  {
    id: 5,
    author: "海明威",
    title: "老人与海",
    era: "20世纪",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=The%20Old%20Man%20and%20the%20Sea%20fishing%20boat%20ocean%20scene&sign=9923bd15c54640c70a0c339c2f4b8fd5",
    brief: "古巴老渔夫圣地亚哥连续84天没捕到鱼，终于钓到一条巨大的马林鱼，展现了人在极端困境下的勇气和尊严。",
    text: "他是个独自在湾流中一条小船上钓鱼的老人，至今已去了八十四天，一条鱼也没逮住。头四十天里，有个男孩子跟他在一起。可是，过了四十天还没捉到一条鱼，孩子的父母对他说，老人如今准是十足地'倒了血霉'，这就是说，倒霉到了极点，于是孩子听从了他们的吩咐，上了另外一条船，头一个礼拜就捕到了三条好鱼。孩子看见老人每天回来时船总是空的，感到很难受，他总是走下岸去，帮老人拿卷起的钓索，或者鱼钩和鱼叉，还有绕在桅杆上的帆。帆上用面粉袋片打了些补丁，收拢后看来像是一面标志着永远失败的旗子。老人消瘦而憔悴，脖颈上有些很深的皱纹。腮帮上有些褐斑，那是太阳在热带海面上反射的光线所引起的良性皮肤癌变。褐斑从他脸的两侧一直蔓延下去，他的双手常用绳索拉大鱼，留下了刻得很深的伤疤。但是这些伤疤中没有一块是新的。它们像无鱼可打的沙漠中被侵蚀的地方一般古老。他身上的一切都显得古老，除了那双眼睛，它们像海水一般蓝，是愉快而不肯认输的。",
    content: "他是个独自在湾流中一条小船上钓鱼的老人，至今已去了八十四天，一条鱼也没逮住。头四十天里，有个男孩子跟他在一起。可是，过了四十天还没捉到一条鱼，孩子的父母对他说，老人如今准是十足地“倒了血霉”，这就是说，倒霉到了极点，于是孩子听从了他们的吩咐，上了另外一条船，头一个礼拜就捕到了三条好鱼。孩子看见老人每天回来时船总是空的，感到很难受，他总是走下岸去，帮老人拿卷起的钓索，或者鱼钩和鱼叉，还有绕在桅杆上的帆。帆上用面粉袋片打了些补丁，收拢后看来像是一面标志着永远失败的旗子。\n\n老人消瘦而憔悴，脖颈上有些很深的皱纹。腮帮上有些褐斑，那是太阳在热带海面上反射的光线所引起的良性皮肤癌变。褐斑从他脸的两侧一直蔓延下去，他的双手常用绳索拉大鱼，留下了刻得很深的伤疤。但是这些伤疤中没有一块是新的。它们像无鱼可打的沙漠中被侵蚀的地方一般古老。他身上的一切都显得古老，除了那双眼睛，它们像海水一般蓝,是愉快而不肯认输的。",
    theme: {
      title: "坚持与放弃",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["坚持与放弃", "克服困难", "勇气", "挑战自我"]
  },
  {
    id: 6,
    author: "莫泊桑",
    title: "项链",
    era: "19世纪",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Maupassant%20short%20story%20The%20Necklace%20scene&sign=bdf098d800d7c7c3f54e1e246a29d684",
    brief: "玛蒂尔德为参加舞会向朋友借了一条钻石项链，不慎丢失后辛苦十年偿还债务，最终却发现项链是假的。",
    content: "她也是一个美丽动人的姑娘，好像由于命运的差错，生在一个小职员的家里。她没有陪嫁的资产，也没有什么法子让一个有钱的体面人认识她，了解她，爱她，娶她；最后只得跟教育部的一个小书记结了婚。\n\n她不能够讲究打扮，只好穿得朴朴素素，但是她觉得很不幸，好像这降低了她的身份似的。因为在妇女，美丽、丰韵、娇媚，就是她们的出身；天生的聪明，优美的资质，温柔的性情，就是她们唯一的资格。",
    theme: {
      title: "意外之财",
      literaryDevice: "讽刺手法"
    }, 
    relatedThemes: ["意外之财", "虚荣心", "人生起伏", "命运捉弄"]
  },
  {
    id: 7,
    author: "契诃夫",
    title: "变色龙",
    era: "19世纪",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chekhov%20short%20story%20Chameleon%20scene&sign=9c4091a2f6c3e41d546e73f3f75a622d",
    brief: "警官奥楚蔑洛夫在处理狗咬人事件时，根据狗主人的身份不断改变自己的态度，刻画出一个见风使舵的小人形象.",
    content: "“好哇，你咬人？该死的东西！”奥楚蔑洛夫忽然听见叫喊声，“伙计们，别放走它！这年月，咬人可不行！逮住它！哎哟……哎哟！”\n\n传来了狗的尖叫声和人的叫喊声：“别放走它！”有人从商店里探出头来，脸上还带着睡意。木柴场四周很快就聚了一群人，仿佛一下子从地底下钻出来的。\n\n“好像出乱子了，长官！”巡警说。\n\n奥楚蔑洛夫微微向左一转，往人群那里走去。在木柴场门口，他看见那个敞开了坎肩的人举起右手，把一个血淋淋的手指头伸给人们看。他那半醉的脸上现出这样的神气：“我要揭你的皮，坏蛋！”而且那手指头本身就像是一面胜利的旗帜。奥楚蔑洛夫认出这人是首饰匠赫留金。闹出这场乱子的祸首是一条白毛小猎狗，它蹲在地上，前腿劈开，浑身发抖——原来是这么回事：赫留金追上了这条狗，举起了棍子想打它。",
    theme: {
      title: "克服偏见",
      literaryDevice: "夸张手法"
    },
    relatedThemes: ["克服偏见", "见风使舵", "人性弱点", "社会现实"]
  },
  {
    id: 8,
    author: "冰心",
    title: "小桔灯",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Bing%20Xin%20short%20story%20Little%20Orange%20Lantern%20scene&sign=fe20ad6e9e8a2c5e2a1dcee2abf7fb64",
    brief: "小姑娘用橘子皮做了一盏小桔灯，照亮了“我”前行的路，也象征着在黑暗中不灭的希望。",
    content: "这是十几年以前的事了。\n\n在一个春节前一天的下午，我到重庆郊外去看一位朋友。她住在那个乡村的乡公所楼上。走上一段阴暗的仄仄的楼梯，进到一间有一张方桌和几张竹凳、墙上装着一架电话的屋子，再进去就是我的朋友的房间，和外间只隔一幅布帘。她不在家，窗前桌上留着一张条子，说是她临时有事出去，叫我等着她。\n\n我在她桌前坐下，随手拿起一张报纸来看，忽然听见外屋板门吱地一声开了，过了一会儿，又听见有人在挪动那竹凳子。我掀开帘子，看见一个小姑娘，只有八九岁光景，瘦瘦的苍白的脸，冻得发紫的嘴唇，头发很短，穿一身很破旧的衣裤，光脚穿一双草鞋，正在登上竹凳想去摘墙上的听话器。",
    theme: {
      title: "捡到宠物",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["捡到宠物", "善良纯真", "希望之光", "人间温暖"]
  },
  { 
    id: 9,
    author: "鲁迅",
    title: "故乡",
    era: "近代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Xun%20novel%20Hometown%20scene&sign=e31f9ef17b978fade9bdbf812923d888",
    brief: "鲁迅回到阔别二十余年的故乡，发现物是人非，儿时好友闰土也变得麻木迟钝。",
    content: "我冒了严寒，回到相隔二千余里，别了二十余年的故乡去。\n\n时候既然是深冬；渐近故乡时，天气又阴晦了，冷风吹进船舱中，呜呜的响，从篷隙向外一望，苍黄的天底下，远近横着几个萧索的荒村，没有一些活气。我的心禁不住悲凉起来了。\n\n阿！这不是我二十年来时时记得的故乡？\n\n我所记得的故乡全不如此。我的故乡好得多了。但要我记起他的美丽，说出他的佳处来，却又没有影像，没有言辞了。仿佛也就如此。于是我自己解释说：故乡本也如此，——虽然没有进步，也未必有如我所感的悲凉，这只是我自己心情的改变罢了，因为我这次回乡，本没有什么好心绪。",
    theme: { 
      title: "久别故乡",
      literaryDevice: "对比手法"
    },
    relatedThemes: ["久别故乡", "物是人非", "时光流逝", "社会变迁"]
  },
  {
    id: 10,
    author: "林海音",
    title: "城南旧事",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lin%20Haiyin%20memoir%20My%20Memories%20of%20Old%20Beijing%20scene&sign=dbcd8adc16d8e7fde20da253af5d575d",
    brief: "小英子在城南经历的童年往事，展现了20世纪20年代北京城南的市井生活。",
    content: "骆驼队来了，停在我家的门前。\n\n它们排列成一长串，沉默地站着，等候人们的安排。天气又干又冷，拉骆驼的摘下了他的毡帽，秃瓢儿上冒着热气，是一股白色的烟，融入干冷的空气中。\n\n爸爸在和他讲价钱。双峰的驼背上，每匹都驮着两麻袋煤。我在想，麻袋里面是“南山高末”呢？还是“乌金墨玉”呢？我常常看见顺城街煤栈的白墙上，写着这样几个大黑字。\n\n但是拉骆驼的说，他们从门头沟来，他们和骆驼，是一步一步走来的。",
    theme: {
      title: "第一次独自居住",
      literaryDevice: "童年视角"
    },
    relatedThemes: ["第一次独自居住", "童年回忆", "成长历程", "故乡情怀"]
  },
  {
    id: 11,
    author: "汪曾祺",
    title: "受戒",
    era: "当代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wang%20Zengqi%20short%20story%20Ordination%20scene&sign=e4bf085cda3c259eed29c548ba1189ba",
    brief: "明海和尚与小英子之间纯真的爱情故事，展现了普通人对美好生活的向往。",
    content: "明海出家已经四年了。\n\n他是十三岁来的。\n\n这个地方的地名有点怪，叫庵赵庄。赵，是因为庄上大都姓赵。叫做庄，可是人家住得很分散，这里两三家，那里两三家。一出门，远远可以看到，走起来得走一会儿，因为没有大路，都是弯弯曲曲的田埂。庵，是因为有一个庵。庵叫菩提庵，可是大家叫讹了，叫成荸荠庵。连庵里的和尚也这样叫。“宝刹何处？”——“荸荠庵。”庵其实很小，一共三间房子。当中是佛殿，塑着三世佛。两边是方丈室和僧寮。\n\n庵是几代祖传的，家里人丁兴旺，就把他送到庵里来了。他的家乡不叫“出家”，叫“当和尚”。他是“当和尚”的。",
    theme: {
      title: "纯真爱情",
      literaryDevice: "平淡中见真情"
    },
    relatedThemes: ["纯真爱情", "乡土风情", "平凡生活", "心灵自由"]
  },
  {
    id: 12,
    author: "李白",
    title: "静夜思",
    era: "唐代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Bai%20poem%20Quiet%20Night%20Thoughts%20scene&sign=0e7009646292456cf870623da934a244",
    brief: "唐代诗人李白的千古名篇，通过对月夜的描写，表达了浓浓的思乡之情。",
    content: "床前明月光，疑是地上霜。\n举头望明月，低头思故乡。",
    theme: {
      title: "月夜思乡",
      literaryDevice: "借景抒情" 
    },
    relatedThemes: ["月夜思乡", "乡愁", "孤独", "思念亲人"]
  },
  {
    id: 13,
    author: "杜甫",
    title: "登高",
    era: "唐代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Du%20Fu%20poem%20Ascending%20Height%20scene&sign=d722a141e4545441b4f7db2a1ce996c9",
    brief: "杜甫晚年的代表作之一，通过登高所见的秋日景象，抒发了诗人长年漂泊、老病孤愁的复杂感情。",
    text: "风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。这首诗是杜甫晚年的代表作，通过登高所见的秋日景象，抒发了诗人长年漂泊、老病孤愁的复杂感情。前四句写景，后四句抒情，情景交融，气象雄浑，被誉为\"古今七言律诗之冠\"。",
   content: "风急天高猿啸哀，渚清沙白鸟飞回。\n无边落木萧萧下，不尽长江滚滚来。\n万里悲秋常作客，百年多病独登台。\n艰难苦恨繁霜鬓潦倒新停浊酒杯。",
   theme: {
     title: "秋日感怀",
     literaryDevice: "情景交融"
   },
    relatedThemes: ["秋日感怀", "人生苦短", "壮志未酬", "自然之美"] 
  },
  {
    id:14,
    author: "苏轼",
    title: "水调歌头·明月几时有",
    era: "北宋",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Su%20Shi%20poem%20Mid-Autumn%20Festival%20scene&sign=2083d9952f7d8deac5226c623b598f2b",
    brief: "苏轼在中秋之夜思念弟弟苏辙而作，表达了对亲人的思念和对人生的旷达态度。",
    content: "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？\n\n转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
    theme: {
      title: "中秋望月思亲",
      literaryDevice: "情景交融"
    },
    relatedThemes: ["中秋望月思亲", "思念亲人", "人生哲理", "旷达胸怀"]
  },
  { id: 15,
    author: "李清照",
    title: "声声慢·寻寻觅觅",
    era: "宋代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Qingzhao%20poem%20Slow%20Tune%20scene&sign=bb7116113dc491f9803da1bdefc915cf",
    brief: "李清照南渡后的代表作，通过描写残秋所见、所闻、所感，抒发自己因国破家亡、天涯沦落而产生的孤寂落寞、悲凉愁苦的心绪。",
    content: "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。乍暖还寒时候，最难将息。三杯两盏淡酒怎敌他、晚来风急！雁过也，正伤心，却是旧时相识。\n\n满地黄花堆积，憔悴损，如今有谁堪摘？守着窗儿，独自怎生得黑！梧桐更兼细雨，到黄昏、点点滴滴。这次第，怎一个愁字了得！",
    theme: {
      title: "孤寂愁苦的心绪",
      literaryDevice: "叠字抒情"
    },
    relatedThemes: ["孤寂愁苦的心绪", "孤独", "忧愁", "秋日伤感"]
  },
  {
    id: 16,
    author: "曹雪芹",
    title: "红楼梦",
    era: "清代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Dream%20of%20the%20Red%20Chamber%20scene&sign=eb1b9b27b36d3fb95163514ec71e3626",
    brief: "中国古典小说的巅峰之作，以贾、史、王、薛四大家族的兴衰为背景，描绘了贾宝玉与林黛玉薛宝钗的爱情婚姻悲剧。", 
    content: "满纸荒唐言，一把辛酸泪！\n都云作者痴，谁解其中味？",
    theme: {
      title: "人生如梦",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["人生如梦", "世事无常", "繁华落尽", "命运无常"]
  },
  {
    id: 17,
    author: "朱自清",
    title: "荷塘月色",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zhu%20Ziqing%20prose%20Lotus%20Pond%20Moonlight%20scene&sign=0d1bc5cd774ebe5fe379dc93c700680a",
    brief: "朱自清的散文代表作之一，通过对荷塘月色美景的细腻描写，寄托了作者对自由宁静生活的向往。",
    content: "月光如流水一般，静静地泻在这一片叶子和花上薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。虽然是满月，天上却有一层淡淡的云，所以不能朗照，但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。",
    theme: {
      title: "月下荷塘的宁静之美",
      literaryDevice: "通感修辞"
    },
    relatedThemes: ["月下荷塘的宁静之美", "自然景色", "内心平静", "独处时光"]
  },
  {
    id: 18,
    author: "鲁迅",
    title: "孔乙己",
    era: "近代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Xun%20story%20Kong%20Yiji%20scene&sign=99bb169d4f94e579caa2e120b42ff5c7",
    brief: "鲁迅短篇小说代表作，通过对孔乙己悲惨一生的描写，揭露了封建科举制度对知识分子的毒害和封建社会的冷漠。",
    content: "孔乙己是站着喝酒而穿长衫的唯一的人。他身材很高大；青白脸色，皱纹间时常夹些伤痕；一部乱蓬蓬的花白的胡子。穿的虽然是长衫，可是又脏又破，似乎十多年没有补，也没有洗。他对人说话，总是满口之乎者也，教人半懂不懂的。因为他姓孔，别人便从描红纸上的“上大人孔乙己”这半懂不懂的话里，替他取下一个绰号，叫作孔乙己。",
    theme: {
      title: "社会底层的悲凉",
      literaryDevice: "白描手法"
    },
    relatedThemes: ["社会底层的悲凉", "人性冷漠", "社会批判", "个人命运"]
  },
  {
    id: 19,
    author: "郭沫若",
    title: "女神·凤凰涅槃",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Guo%20Moruo%20poem%20Phoenix%20Nirvana%20scene&sign=bc9f21ce09997ac70f68ab9f3213372b",
    brief: "郭沫若的代表作，通过凤凰浴火重生的神话故事，表达了对旧世界的诅咒和对新世界的向往。",
    content: "我们飞向西方，\n西方同是一座屠场。\n我们飞向东方，\n东方同是一座囚牢。\n我们飞向南方，\n南方同是一座坟墓。\n我们飞向北方，\n北方同是一座地狱。\n我们生在这样个世界当中，\n只好学着海洋哀哭。",
    theme: {
      title: "凤凰涅槃",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["凤凰涅槃", "破旧立新", "理想追求", "自我超越"]
  },
  {
    id:20,
    author: "茅盾",
    title: "子夜",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Mao%20Dun%20novel%20Midnight%20scene&sign=757ac133eb9490fff3796616115ed9e0",
    brief: "茅盾的长篇小说代表作，以1930年代的上海为背景，描写了民族资本家吴荪甫在帝国主义和封建势力双重压迫下的悲剧命运。",
    content: "太阳刚刚下了地平线。软风一阵一阵地吹上人面，怪痒痒的。苏州河的浊水幻成了金绿色，轻轻地，悄悄地，向西流去。黄浦的夕潮不知怎的已经涨上了，现在沿这苏州河的两岸的各色船只都浮得高高的，舱面比码头还高了约莫半尺。风吹来外滩公园里的音乐，却只有那炒豆似的铜鼓声最分明，也最叫人兴奋。",
    theme: { title: "时代洪流中的挣扎",
      literaryDevice: "社会剖析"
    },
    relatedThemes: ["时代洪流中的挣扎", "社会变革", "个人命运", "理想与现实"]
  },
  {
    id: 21,
    author: "钱钟书",
    title: "围城", 
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Qian%20Zhongshu%20novel%20Fortress%20Besieged%20scene&sign=298f599246500e19c81313e2c293c57f",
    brief: "钱钟书的讽刺小说代表作，通过方鸿渐的人生经历，探讨了婚姻与人生的困境。",
    content: "围城是钱钟书所著的长篇小说，故事主要写抗战初期知识分子的群相。主人公方鸿渐留学回国后，在爱情、婚姻、事业上遭遇的种种挫折，展现了当时知识分子的精神困境。",
    theme: {
      title: "人生的围城",
      literaryDevice: "讽刺手法" 
    },
    relatedThemes: ["人生的围城", "爱情婚姻", "知识分子", "社会讽刺"]
  },
  {
    id: 22,
    author: "巴金",
    title: "家",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ba%20Jin%20novel%20Family%20scene&sign=12a2a34ba152878a16987e3a1c25d05e",
    brief: "巴金《激流三部曲》第一部，描写封建大家庭的没落和青年一代的觉醒。",
    content: "我们家里的人，除了祖父和父亲，其余的人都喜欢新的思想，尤其是觉慧。他是我们家里最年轻的一个，也是最叛逆的一个。他不喜欢祖父的专制，不喜欢父亲的懦弱，更不喜欢这个家的沉闷空气。",
    theme: {
      title: "家族の束缚与反抗",
      literaryDevice: "现实主义"
    },
    relatedThemes: ["家族的束缚与反抗", "青春觉醒", "封建礼教", "新旧冲突"]
  },
  {
    id: 23,
    author: "曹禺", 
    title: "雷雨",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Cao%20Yu%20play%20Thunderstorm%20scene&sign=1e081454fe5ee869d4d675868ce9a745", 
    brief: "中国现代话剧的经典之作，通过一个家庭的悲剧展现社会的黑暗。",
    content: "雷雨前的闷热，让人喘不过气来。这个周公馆里的每一个人，都像在闷热的天气里一样，压抑着自己的情感，也压抑着自己的欲望。他们不知道，一场大雷雨即将来临，将把这个家彻底摧毁。",
    theme: {
      title: "命运的悲剧",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["命运的悲剧", "人性冲突", "社会黑暗", "道德困境"]
  },
  {
    id: 24,
    author: "老舍",
    title: "骆驼祥子",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Laoshe%20novel%20Rickshaw%20Boy%20scene&sign=fe948c4505129d6b8db7e66aedddf5df",
    brief: "老舍代表作，讲述人力车夫祥子在旧社会的悲惨命运。",
    content: "祥子是个年轻力壮的车夫，他的梦想是拥有一辆自己的洋车。但是，在那个黑暗的社会里，他的梦想一次又一次地破灭。他努力过，挣扎过，但最终还是被社会吞噬，变成了一个麻木、潦倒的人。",
    theme: {
      title: "底层人民的挣扎",
      literaryDevice: "现实主义"
    },
    relatedThemes: ["底层人民的挣扎", "社会压迫", "人性异化", "梦想与现实"]
  },
  {
    id: 25,
    author: "沈从文",
    title: "边城",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Shen%20Congwen%20novel%20Border%20Town%20scene&sign=941e6017bf0d13bfcb427567e965525f",
    brief: "沈从文代表作，描绘湘西边境小镇的风土人情和纯真爱情。",
    content: "茶峒地方凭水依山筑城，近山的一面，城墙如一条长蛇，缘山爬去。临水一面则在城外河边留出余地设码头，湾泊小小篷船。船下行时运桐油青盐，染色的棓子。",
    theme: {
      title: "纯真的爱情",
      literaryDevice: "田园牧歌"
    },
    relatedThemes: ["纯真的爱情", "乡土风情", "人性美", "命运无常"] 
  },
  {
    id: 26,
    author: "张爱玲", 
    title: "金锁记",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Eileen%20Chang%20novel%20The%20Golden%20Chain%20scene&sign=b26ced1fbd62495a103b0ddf3d902d25",
    brief: "张爱玲代表作，讲述一个女性在封建家庭中的悲剧人生。",
    content: "三十年前的上海，一个有月亮的晚上……我们也许没赶上看见三十年前的月亮。年轻的人想着三十年前的月亮该是铜钱大的一个红黄的湿晕，像朵云轩信笺上落了一滴泪珠，陈旧而迷糊。",
    theme: {
      title: "人性的扭曲",
      literaryDevice: "心理描写"
    },
    relatedThemes: ["人性的扭曲", "封建压迫", "女性悲剧", "欲望与枷锁"]
  },
  {
    id: 27,
    author: "艾青",
    title: "大堰河——我的保姆",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ai%20Qing%20poem%20Dayan%20River%20scene&sign=07ae02b91098d5b9fa4fded18538a156",
    brief: "艾青代表作，表达对保姆大堰河的深情和对劳动人民的同情。",
    content: "大堰河，是我的保姆。她的名字就是生她的村庄的名字，她是童养媳，大堰河，是我的保姆。我是地主的儿子，也是吃了大堰河的奶而长大了的大堰河的儿子。",
    theme: {
      title: "感恩与同情",
      literaryDevice: "抒情手法"
    },
    relatedThemes: ["感恩与同情", "母爱", "劳动人民", "阶级差异"]
  },
  {
    id: 28,
    author: "徐志摩",
    title: "再别康桥",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Xu%20Zhimo%20poem%20Saying%20Goodbye%20to%20Cambridge%20Again%20scene&sign=f0460104492323558e839840569ea8ed",
    brief: "徐志摩代表作，表达对康桥的留恋之情。",
    content: "轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。那河畔的金柳，是夕阳中的新娘；波光里的艳影，在我的心头荡漾。",
    theme: {
      title: "离别之情",
      literaryDevice: "意象手法"
    },
    relatedThemes: ["离别之情", "怀旧", "自然之美", "不舍与留恋"]
  },
  {
    id: 29,
    author: "戴望舒",
    title: "雨巷", 
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Dai%20Wangshu%20poem%20Rainy%20Alley%20scene&sign=1e35b757e4193f61974b41a8211fba74",
    brief: "戴望舒代表作，描绘雨中邂逅的凄美意境。",
    content: "撑着油纸伞，独自彷徨在悠长、悠长又寂寥的雨巷，我希望逢着一个丁香一样的结着愁怨的姑娘。她是有丁香一样的颜色，丁香一样的芬芳，丁香一样的忧愁，在雨中哀怨，哀怨又彷徨。",
    theme: {
      title: "孤独与彷徨",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["孤独与彷徨", "理想与现实", "邂逅", "忧郁"]
  },
  {
    id: 30,
    author: "卞之琳",
    title: "断章",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Bian%20Zhilin%20poem%20Fragment%20scene&sign=ad8dc85f6c8375009a4050174bd79227",
    brief: "卞之琳代表作，以简洁的语言表达深刻的哲理。",
    content: "你站在桥上看风景，看风景的人在楼上看你。明月装饰了你的窗子，你装饰了别人的梦。",
    theme: {
      title: "相对与依存",
      literaryDevice: "哲理小诗"
    },
    relatedThemes: ["相对与依存", "人生哲理", "视角转换", "偶然与必然"]
  },
  { id: 31,
    author: "茅盾", 
    title: "林家铺子",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Mao%20Dun%20novel%20Lin%20Family%20Shop%20scene&sign=9e1299e801dcb59d13df775a0ae1b759",
    brief: "茅盾短篇小说代表作，描写小商人在旧社会的困境。",
    content: "林老板的铺子里，除了柜台前的两三个顾客，就只有他和女儿阿秀。账台上的玻璃罩里，放着几包香烟，和一个银角子。外面，细雨还在飘飘扬扬地落着。",
    theme: {
      title: "商业困境",
      literaryDevice: "社会写实"
    },
    relatedThemes: ["商业困境", "社会压迫", "小人物命运", "经济危机"]
  },
  {
    id: 32,
    author: "郁达夫",
    title: "沉沦",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Yu%20Dafu%25%20twenty0novel%20Sinking%20scene&sign=2f45b220ea1bd5d4f65e915c42c8885f",
    brief: "郁达夫代表作，描写青年的苦闷与彷徨。",
    content: "他近来觉得孤冷得可怜。他的早熟的性情，竟把他挤到与世人绝不相容的境地去，世人与他的中间介在的那一道屏障，愈筑愈高了",
    theme: {
      title: "青春的苦闷",
      literaryDevice: "心理写实"
    },
    relatedThemes: ["青春的苦闷", "孤独与彷徨", "自我认同", "社会压力"]
  },
  {
    id: 33,
    author: "冰心",
    title: "繁星",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Bing%20Xin%20poem%20Stars%20scene&sign=27feebbe1da29f49e52851fe2d70644c",
    brief: "冰心代表作，以短诗形式表达对母爱、童真和自然的赞美。",
    content: "繁星闪烁着——深蓝的太空，何曾听得见它们对语？沉默中微光里，它们深深的互相颂赞了。",
    theme: {
      title: "爱的哲学",
      literaryDevice: "抒情小诗"
    },
    relatedThemes: ["爱的哲学", "母爱", "童真", "自然之美"]
  },
  {
    id: 34,
    author: "朱自清",
    title: "春", 
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zhu%20Ziqing%20prose%20Spring%20scene&sign=0d85087f697cf422ecf0dc6f7d0d8c25",
    brief: "朱自清散文代表作，描绘春天的生机勃勃。",
    content: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。",
    theme: {
      title: "春的生机",
      literaryDevice: "景物描写"
    },
    relatedThemes: ["春的生机", "自然之美", "希望", "生命活力"]
  },
  {
    id: 35,
    author: "鲁迅",
    title: "祝福",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Xun%20story%20Blessing%20scene&sign=cc39f1cce8b561296b47b71f3b88c182",
    brief: "鲁迅短篇小说，描写祥林嫂的悲惨命运。",
    content: "旧历的年底毕竟最像年底，村镇上不必说，就在天空中也显出将到新年的气象来。灰白色的沉重的晚云中间时时发出闪光，接着一声钝响，是送灶的爆竹；近处燃放的可就更强烈了，震耳的大音还没有息，空气里已经散满了幽微的火药香。",
    theme: {
      title: "封建礼教的压迫",
      literaryDevice: "社会批判"
    },
    relatedThemes: ["封建礼教的压迫", "女性悲剧", "社会冷漠", "人性解放"]
  },
  {
    id: 36,
    author: "郭沫若",
    title: "女神",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Guo%20Moruo%20poem%20Goddess%20scene&sign=4389b7f3ddd29806e06b971418373655",
    brief: "郭沫若诗集代表作，充满激情与反叛精神。",
    content: "我是一条天狗呀！我把月来吞了，我把日来吞了，我把一切的星球来吞了，我把全宇宙来吞了。我便是我了！",
    theme: {
      title: "叛逆与创造",
      literaryDevice: "浪漫主义"
    },
    relatedThemes: ["叛逆与创造", "自我解放", "激情", "理想追求"]
  },
  {
    id: 37, 
    author: "闻一多",
    title: "死水", 
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wen%20Yiduo%20poem%20Dead%20Water%20scene&sign=3f5ce2e9ab1000079acce7b3f1d9cce0",
    brief: "闻一多代表作，以死水比喻黑暗的社会现实。",
    content: "这是一沟绝望的死水，清风吹不起半点漪沦。不如多扔些破铜烂铁，爽性泼你的剩菜残羹。也许铜的要绿成翡翠，铁罐上锈出几瓣桃花；再让油腻织一层罗绮，霉菌给他蒸出些云霞。",
    theme: {
      title: "对现实失望",
      literaryDevice: "隐喻手法" 
    },
    relatedThemes: ["对现实失望", "社会批判", "理想与现实", "变革渴望"]
  },
  {
    id: 38,
    author: "林语堂",
    title: "京华烟云",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lin%20Yutang%20novel%20Moment%20in%20Peking%20scene&sign=3ff1121d20059de0e316903b9319c1e2",
    brief: "林语堂代表作，描写北平几大家族的兴衰史。",
    content: "北平的四季都有它的特别的地方，春天是杨花，夏天是蝉声，秋天是红叶，冬天是白雪。这四季的特色，是各有各的好处，都不是其他地方所能有的。",
    theme: {
      title: "时代变迁",
      literaryDevice: "史诗笔法"
    },
    relatedThemes: ["时代变迁", "家族兴衰", "文化冲突", "家国情怀"]
  }, {
    id: 39,
    author: "张恨水",
    title: "啼笑因缘",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zhang%20Henshui%20novel%20Between%25%20twenty0Laughs%20and%20Tears%20scene&sign=55e0aaeb8a06fd922b26f354497b9516",
    brief: "张恨水代表作，描写青年男女的爱情故事。", 
    content: "这时候，正是民国十八年的夏天，北平城里的荷花，都开得十分茂盛。在什刹海的荷花市场，每天都有许多人去游玩。有一个年轻的书生，姓樊名家树，是从江南来的，也随着众人，到什刹海去逛。",
    theme: {
      title: "爱情与命运",
      literaryDevice: "通俗小说"
    },
    relatedThemes: ["爱情与命运", "社会阶层", "理想与现实", "人生选择"]
  },
  {
    id: 40,
    author: "曹禺",
    title: "日出",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Cao%20Yu%20play%20Sunrise%20scene&sign=ffc72075296db1a5a0f34d22143d7a21", 
    brief: "曹禺代表作，描写都市生活的黑暗与腐朽。",
    content: "太阳出来了，黑暗留在后面。但是太阳不是我们的，我们要睡了。",
    theme: {
      title: "社会的黑暗",
      literaryDevice: "象征手法"
    },
    relatedThemes: ["社会的黑暗", "人性异化", "贫富差距", "希望与绝望"]
  },
  {
    id: 41,
    author: "艾芜",
    title: "南行记",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ai%20Wu%20novel%20Journey%20to%20the%20South%20scene&sign=ce71c8613a8292c081c7dcd75b611d8e",
    brief: "艾芜代表作，描写西南边境的风土人情。",
    content: "天色快黑尽了，我还在山路上走着。这是一条荒凉的山路，两旁都是高山，中间只有一条羊肠小道。山风吹来，有些凉意。我加紧脚步，希望能在天黑以前，赶到前面的小镇。",
    theme: {
      title: "流浪与探索",
      literaryDevice: "写实主义"
    },
    relatedThemes: ["流浪与探索", "边疆风情", "人生历练", "自由精神"]
  },
  {
    id: 42,
    author: "沙汀",
    title: "在其香居茶馆里", 
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Sha%20Ting%20story%20In%20Qixiangju%20Teahouse%20scene&sign=9c8ae98627627e1dc8747a3ac0705e8f",
    brief: "沙汀代表作，描写四川乡镇的官场腐败。",
    content: "坐在其香居茶馆里的联保主任方治国当他看见正从东头走来嘴里照例扰嚷不休的邢幺吵吵的时候，他简直立刻冷了半截，觉得身子快要坐不稳了。",
    theme: {
      title: "官场腐败",
      literaryDevice: "讽刺手法"
    },
    relatedThemes: ["官场腐败", "社会讽刺", "权力斗争", "小人物命运"] 
  },
  {
    id: 43,
    author: "吴组缃",
    title: "山洪",
    era: "现代",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wu%20Zuxiang%20novel%20Mountain%20Flood%20scene&sign=5126f0d19940facc9038886245f60f10",
    brief: "吴组缃代表作，描写农民在抗战中的觉醒。",
    content: "山洪暴发了。这是一个狂暴的夜晚，大雨像瓢泼一样，不停地倾泻下来。山洪从山上涌下来，冲毁了道路，淹没了田地。但是，在这场灾难中，人们并没有屈服，他们团结起来，共同抗洪。",
    theme: {
      title: "民族觉醒",
      literaryDevice: "现实主义"
    },
    relatedThemes: ["民族觉醒", "抗战题材", "团结精神", "个人与集体"]
  },
  { id: 44, author: "萧军", title: "八月的乡村", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Xiao%20Jun%20novel%20August%20Countryside%20scene&sign=be208f92297e15da94cbbe9caa898c70", brief: "萧军代表作，描写东北抗日联军的斗争生活。", content: "八月的乡村，是充满了希望的季节。田野里的庄稼都成熟了，金黄色的谷子，沉甸甸的高粱，都在向人们微笑。但是，在这个美丽的季节里，日本侵略者的铁蹄却践踏了这片土地。", theme: { title: "抗日救国", literaryDevice: "革命现实主义" }, relatedThemes: ["抗日救国", "民族精神", "战争创伤", "英雄主义"] },
  { id: 45, author: "萧红", title: "生死场", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Xiao%20Hong%20novel%20Field%20of%20Life%20and%20Death%20scene&sign=7992e40dfdd081b4b60cb3b5db04ef8e", brief: "萧红代表作，描写东北农村的苦难生活。", content: "在乡村，人和动物一起，忙着生，忙着死。这是一个古老的村庄，人们世世代代在这里生活经历着生与死的轮回。他们像土地一样沉默，也像土地一样坚韧。", theme: { title: "生命的轮回", literaryDevice: "自然主义" }, relatedThemes: ["生命的轮回", "乡土文学", "生存困境", "女性命运"] },
  { id: 46, author: "阿城", title: "棋王", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=A%20Cheng%20story%20King%20of%20Chess%20scene&sign=6c3c6b53c15d7ebde1e1e505d4b2bfa2", brief: "阿城代表作描写知青生活和对棋艺的追求。", content: "车站是乱得不能再乱，成千上万的人挤在那里。我和王一生挤在一个角落里，谁也不说话。他说过，先得解决肚子问题，才能再谈其他。我知道他说得对，但是现在，我什么也做不了，只能等着。", theme: { title: "精神追求", literaryDevice: "写实手法" }, relatedThemes: ["精神追求", "知青生活", "人生境界", "专注与执着"] },
  { id: 47, author: "王蒙", title: "组织部新来的青年人", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wang%20Meng%20story%20The%20Young%20Newcomer%20in%20the%20Organization%20Department%20scene&sign=946fb65803dd986941c4ae33090bc282", brief: "王蒙代表作，描写青年干部的理想与现实冲突。", content: "林震是一个年轻的知识分子，他充满理想刚刚调到组织部工作。他希望能够为人民做一些实事，但是，他很快发现，机关里的工作并不像他想象的那样简单。", theme: { title: "理想与现实", literaryDevice: "现实主义" }, relatedThemes: ["理想与现实", "官场生态", "青年成长", "社会变革"] },
  { id: 48, author: "刘心武", title: "班主任", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Liu%20Xinwu%20story%20Class%20Teacher%20scene&sign=a416c869c9a4876930b200e937746a6d", brief: "刘心武代表作，反思文革对青少年的影响。", content: "张俊石老师是初三(3)班的班主任，他看着眼前这一群孩子，心里感到一阵沉重。这些孩子都是文革的受害者，他们的心灵受到了创伤，他们的前途也变得迷茫。", theme: { title: "教育反思", literaryDevice: "社会写实" }, relatedThemes: ["教育反思", "文革创伤", "青少年成长", "人性复苏"] },
  { id: 49, author: "路遥", title: "平凡的世界", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Yao%20novel%20Ordinary%20World%20scene&sign=a6247e7aaa385317e65a57fbf7e4342e", brief: "路遥代表作，描写普通人在改革大潮中的奋斗。", content: "劳动着是幸福的，无论在什么时代。在这个千变万化的世界里，人们都在为了自己的幸福而奋斗。这奋斗，也许微不足道，但它却是构成这个世界的基础。", theme: { title: "平凡中的伟大", literaryDevice: "现实主义" }, relatedThemes: ["平凡中的伟大", "人生奋斗", "时代变迁", "理想与现实"] },
  { id: 50, author: "贾平凹", title: "秦腔", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Jia%20Pingwa%20novel%20Qin%20Opera%20scene&sign=b7a99ed4d3a5158d207b1acc8516b868", brief: "贾平凹代表作，描写陕西农村的变迁。", content: "夏天的太阳像火一样烤着大地，清风街的人们都躲在家里不敢出门。只有那些老人，还坐在自家的门楼下，摇着蒲扇，聊着家常。他们的话题，总是离不开村里的那些事。", theme: { title: "乡土变迁", literaryDevice: "乡土文学" }, relatedThemes: ["乡土变迁", "文化传承", "社会变革", "人性百态"] }, { id: 51, author: "莫言", title: "红高粱家族", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Mo%20Yan%20novel%20Red%20Sorghum%20Family%20scene&sign=6f1175c585737e43f2f2c58506175075", brief: "莫言代表作，描写山东高密乡的传奇故事。", content: "我给你说说我爷爷我奶奶的故事。我爷爷叫余占鳌，我奶奶叫戴凤莲。他们都是英雄好汉，他们在高粱地里相爱，在高粱地里战斗，也在高粱地里牺牲。", theme: { title: "生命的野性", literaryDevice: "魔幻现实主义" }, relatedThemes: ["生命的野性", "家族传奇", "战争创伤", "民族精神"] },
  { id: 52, author: "余华", title: "活着", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Yu%20Hua%20novel%20To%20Live%20scene&sign=60e6812e134dc82baf2fc7ed30dd4afa", brief: "余华代表作，描写普通人在历史变迁中的生存。", content: "我认识福贵的时候，他已经是一个老人了。他牵着一头老牛，在田埂上慢慢走着。夕阳照在他的身上，也照在老牛的身上，他们的影子被拉得很长很长。", theme: { title: "生命的韧性", literaryDevice: "极简主义" }, relatedThemes: ["生命的韧性", "人生苦难", "历史变迁", "亲情"] },
  { id: 53, author: "王安忆", title: "长恨歌", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wang%20Anyi%20novel%20Song%20of%20Everlasting%20Sorrow%20scene&sign=5148df328692a2dc4e94986bcc9200e7", brief: "王安忆代表作，描写上海小姐王琦瑶的一生。", content: "上海是个大都市，花花世界。王琦瑶就是在这个世界里长大的。她是个美丽的姑娘，也是个聪明的姑娘。她知道自己想要什么，也知道怎么去得到。", theme: { title: "上海往事", literaryDevice: "细腻描写" }, relatedThemes: ["上海往事", "女性命运", "时代变迁", "爱情与人生"] },
  { id: 54, author: "陈忠实", title: "白鹿原", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chen%20Zhongshi%20novel%20White%20Deer%20Plain%20scene&sign=8e74c85fc7f507bff47c02a4c8fac19e", brief: "陈忠实代表作，描写陕西白鹿原的家族史诗。", content: "白鹿原是一个古老的地方，也是一个神奇的地方。在这里，白家和鹿家世代居住，他们的命运，也和这片土地紧紧地联系在一起。", theme: { title: "家族史诗", literaryDevice: "史诗笔法" }, relatedThemes: ["家族史诗", "乡土中国", "文化冲突", "历史变迁"] },
  { id: 55, author: "铁凝", title: "哦，香雪", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tie%20Ning%20story%20Ah%20Xiangxue%20scene&sign=a567f8ec4e7c8bb5991849aa2850638e", brief: "铁凝代表作，描写乡村少女对现代文明的向往。", content: "每天晚上，当火车经过台儿沟的时候，香雪总是第一个跑到站台上去。她喜欢看火车，喜欢听火车的声音，更喜欢那些从火车上下来的人。", theme: { title: "文明的碰撞", literaryDevice: "象征手法" }, relatedThemes: ["文明的碰撞", "乡村与城市", "少女情怀", "希望与向往"] },
  { id: 56, author: "张承志", title: "北方的河", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zhang%20Chengzhi%20novel%20The%20Northern%20Rivers%20scene&sign=535869270ba298d4311e7cb2ea81c629", brief: "张承志代表作，描写对北方河流的精神追寻。", content: "我是一个北方人，我爱北方的河。黄河、湟水、永定河……这些河流，就像我生命中的一部分，它们养育了我，也塑造了我。", theme: { title: "精神的追寻", literaryDevice: "象征手法" }, relatedThemes: ["精神的追寻", "自然之美", "生命力量", "理想主义"] },
  { id: 57, author: "韩少功", title: "马桥词典", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Han%20Shaogong%20novel%20A%20Dictionary%20of%20Maqiao%20scene&sign=8f692f1e7f7774c89339d211e9e595e3", brief: "韩少功代表作，以词典形式描写马桥的风土人情。", content: "马桥是个小地方，但它有自己的语言，自己的历史，自己的文化。我在这里生活了很多年，也收集了很多马桥的词语。这些词语，就像一把钥匙，可以打开马桥人的心灵。", theme: { title: "语言与文化", literaryDevice: "实验性写作" }, relatedThemes: ["语言与文化", "乡土中国", "文化反思", "身份认同"] },
  { id: 58, author: "苏童", title: "妻妾成群", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Su%20Tong%20novel%20Wives%20and%20Concubines%20scene&sign=70edfb9f4e58354e6432d0e871aae243", brief: "苏童代表作，描写封建家庭中女性的悲剧命运。", content: "陈家大院是个阴森的地方，尤其是在晚上。我是四太太，刚嫁过来不久。我知道，在这个院子里，我要学会生存，也要学会斗争。", theme: { title: "女性悲剧", literaryDevice: "细腻描写" }, relatedThemes: ["女性悲剧", "封建礼教", "人性异化", "权力斗争"] },
  { id: 59, author: "格非", title: "迷舟", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ge%20Fei%20story%20The%20Lost%20Boat%20scene&sign=ccb548c666b89e345079425b47371dc5", brief: "格非代表作，描写战争年代的悬疑故事。", content: "萧去榆关的那天，天气很不好。下着小雨，路上很滑。他不知道，这一去，会改变他的一生。他更不知道，等待他的确是一个巨大的谜团。", theme: { title: "命运的偶然", literaryDevice: "先锋派手法" }, relatedThemes: ["命运的偶然", "悬疑", "战争创伤", "记忆与现实"] },
  { id: 60, author: "余秋雨", title: "文化苦旅", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Yu%20Qiuyu%20prose%20Cultural%20Pilgrimage%20scene&sign=9749757988e255b93b523e06076443e2", brief: "余秋雨代表作，描写文化古迹的历史沧桑。", content: "我走在这片古老的土地上，感受着历史的沧桑。每一座山，每一条河，每一座古迹，都在诉说着过去的故事。这些故事，有辉煌，有悲壮，也有遗憾。", theme: { title: "文化反思", literaryDevice: "文化散文" }, relatedThemes: ["文化反思", "历史沧桑", "文明传承", "精神追寻"] },
  { id: 61, author: "史铁生", title: "我与地坛", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Shi%20Tiesheng%20prose%20I%20and%20the%20Earth%20Altar%20scene&sign=cf9412f6cf20781d8699b664147d2f70", brief: "史铁生代表作，描写对生命的思考。", content: "我在好几篇小说中都提到过一座废弃的古园，实际就是地坛。许多年前旅游业还没有兴起，园子荒芜冷落得如同一片野地，很少被人记起。", theme: { title: "生命的意义", literaryDevice: "哲理散文" }, relatedThemes: ["生命的意义", "残疾与人生", "母爱", "命运与超越"] },
  { id: 62, author: "张炜", title: "古船", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Zhang%20Wei%20novel%20Ancient%20Ship%20scene&sign=63dd0366253d044de8256e0ca922cee5", brief: "张炜代表作，描写胶东半岛的家族恩怨。", content: "洼狸镇是个古老的镇子，也是个多事的镇子。这里的人们，世世代代生活在这片土地上，经历着风风雨雨，也经历着恩怨情仇。", theme: { title: "历史的反思", literaryDevice: "现实主义" }, relatedThemes: ["历史的反思", "家族恩怨", "社会变革", "人性善恶"] },
  { id: 63, author: "池莉", title: "烦恼人生", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chi%20Li%20story%20Troubled%20Life%20scene&sign=6d57a915cf6a65e5c61fb16efbca6217", brief: "池莉代表作，描写都市普通人的生活烦恼。", content: "印家厚的一天是从闹铃声中开始的。他睁开眼，看到的是天花板，听到的是妻子的抱怨。他知道，新的一天开始了，也意味着新的烦恼开始了。", theme: { title: "都市烦恼", literaryDevice: "新写实主义" }, relatedThemes: ["都市烦恼", "平凡人生", "生活压力", "婚姻家庭"] },
  { id: 64, author: "刘震云", title: "一地鸡毛", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Liu%20Zhenyun%20story%20A%20Pile%20of%20Chicken%20Feathers%20scene&sign=712881cb626d57efc9d970de8592c908", brief: "刘震云代表作，描写普通人的琐碎生活。", content: "小林是个普通的机关干部，他的生活，就像一地鸡毛，琐碎而平凡每天，他都要面对各种各样的小事，这些小事，看起来微不足道，却占据他生活的大部分时间。", theme: { title: "平凡的生活", literaryDevice: "写实主义" }, relatedThemes: ["平凡的生活", "都市人生", "生活琐事", "理想与现实"] }, { id: 65, author: "迟子建", title: "额尔古纳河右岸", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chi%20Zijian%20novel%20The%20Right%20Bank%20of%20the%20Argun%20River%20scene&sign=4d9c49f9639a067d827e003c9535bd5e", brief: "迟子建代表作，描写鄂温克族人的生活。", content: "我是最后一个酋长女人。我的一生，都生活在额尔古纳河右岸我是见证了我们民族的兴衰，也见证时代的变迁", theme: { title: "文明的消逝", literaryDevice: "民族史诗"}, relatedThemes: ["文明的消逝", "民族文化", "自然与人", "生命轮回"] },
  { id: 66, author: "毕飞宇", title: "推拿", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Bi%20Feiyu%20novel%20Massage%20scene&sign=cf7ca12307932b081f2c271cc3207585", brief: "毕飞宇代表作描写盲人推拿师的生活", content: "沙宗琪推拿中心是个特殊的地方，这里的师傅们都是盲人他们虽然看不见这个世界，但他们用自己的双手，感受着这个世界，也服务着这个世界", theme: { title: "黑暗中的光明", literaryDevice: "细腻描写" }, relatedThemes: ["黑暗中的光明", "残疾人生活", "人性尊严", "情感世界"] },
  { id: 67, author: "金宇澄", title: "繁花", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Jin%20Yucheng%20novel%20Blossoms%20scene&sign=13cc276cfa3d0495911bf1a93b1df12f", brief: "金宇澄代表作，描写上海弄堂生活。", content: "上海是个大码头龙蛇混杂我叫阿宝，从小在弄堂里长大弄堂里的生活，就像一幅画，充满了色彩和味道", theme: { title: "上海风情", literaryDevice: "方言写作" }, relatedThemes: ["上海风情", "市井生活", "时代变迁", "人生百态"] }, { id: 68, author: "李娟", title: "阿勒泰的角落", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Juan%20prose%20Corners%20of%20Altay%20scene&sign=b74cc274d4388fd4e82d6fe3fa7a4e73", brief: "李娟代表作，描写阿勒泰的游牧生活。", content: "阿勒泰是个美丽的地方，也是个遥远的地方。我们一家人，就生活在这里过着游牧的生活跟着羊群，跟着季节，四处迁徙", theme: { title: "自然与人", literaryDevice: "散文笔法" }, relatedThemes: ["自然与人", "游牧生活", "边疆风情", "简单生活"] },
  { id: 69, author: "汪曾祺", title: "昆明的雨", era: "当代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wang%20Zengqi%20prose%20Rain%20in%20Kunming%20scene&sign=abe4c11d7586d5d2375d22a8c51378f9", brief: "汪曾祺代表作，描写昆明雨季的生活。", content: "昆明的雨季是明亮的、丰满的，使人动情的。城春草木深，孟夏草木长。昆明的雨季，是浓绿的。草木的枝叶里的水分都到了饱和状态，显示出过分的、近于夸张的旺盛。", theme: { title: "生活的诗意", literaryDevice: "散文笔法" }, relatedThemes: ["生活的诗意", "地方风情", "平淡之美", "怀旧"] },
  { id: 70, author: "林徽因", title: "你是人间的四月天", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lin%20Huiyin%20poem%20You%20are%20the%20April%20of%20the%20world%20scene&sign=960eee6c2789b8b1dff6cc34ef5905f1", brief: "林徽因代表作，表达对爱情的赞美。", content: "我说你是人间的四月天；笑响点亮了四面风；轻灵在春的光艳中交舞着变。你是四月早天里的云烟，黄昏吹着风的软，星子在无意中闪，细雨点洒在花前。", theme: { title: "爱的礼赞", literaryDevice: "抒情手法" }, relatedThemes: ["爱的礼赞", "自然之美", "生命喜悦", "浪漫情怀"] },
  { id: 71, author: "陶渊明", title: "桃花源记", era: "东晋", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Tao%20Yuanming%20prose%20The%20Peach%20Blossom%20Spring%20scene&sign=b309cf724ac649294fb2351188e9ec40", brief: "陶渊明代表作，描写理想中的世外桃源。", content: "晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷，渔人甚异之，复前行，欲穷其林", theme: { title: "理想社会", literaryDevice: "寓言手法" }, relatedThemes: ["理想社会", "田园生活", "避世思想", "乌托邦"] },
  { id: 72, author: "屈原", title: "离骚", era: "战国", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Qu%20Yuan%20poem%20Li%20Sao%20scene&sign=cbac406cfbc9d69e22bcda30b193b661", brief: "屈原代表作，表达对国家的忧思。", content: "长太息以掩涕兮，哀民生之多艰。余虽好修姱以鞿羁兮，謇朝谇而夕替。既替余以蕙纕兮，又申之以揽茝。亦余心之所善兮，虽九死其犹未悔。", theme: { title: "爱国情怀", literaryDevice: "浪漫主义" }, relatedThemes: ["爱国情怀", "理想追求", "忧国忧民", "高洁品格"] },
  { id: 73, author: "李白", title: "将进酒", era: "唐代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Bai%20poem%20Bring%20the%20Wine%20scene&sign=33f82852af59a47b5b6a81439673342c", brief: "李白代表作,表达豪放不羁的人生态度。", content: "君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。", theme: { title: "人生得意", literaryDevice: "豪放风格" }, relatedThemes: ["人生得意", "豪放不羁", "珍爱时光", "自信人生"] },
  { id: 74, author: "杜甫", title: "茅屋为秋风所破歌", era: "唐代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Du%20Fu%20poem%20The%20Song%20of%20the%20Windy%20Roof%20scene&sign=8521394d988aa3f8e5fff6b45ff94001", brief: "杜甫代表作，表达忧国忧民的情怀。", content: "八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。", theme: { title: "忧国忧民", literaryDevice: "现实主义" }, relatedThemes: ["忧国忧民", "民生疾苦", "博大胸怀", "社会关怀"] },
  { id:75, author: "白居易", title: "长恨歌", era: "唐代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Bai%20Juyi%20poem%20The%20Song%20of%20Everlasting%20Sorrow%20scene&sign=7c55d93783be8b8475944451767ff632", brief: "白居易代表作，描写唐玄宗与杨贵妃的爱情悲剧。", content: "汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识。天生丽质难自弃，一朝选在君王侧回眸一笑百媚生，六宫粉黛无颜色。", theme: { title: "爱情悲剧", literaryDevice: "叙事诗" }, relatedThemes: ["爱情悲剧", "历史反思", "红颜祸水", "命运无常"] },
  { id:76, author: "李商隐", title: "锦瑟", era: "唐代",imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Shangyin%20poem%20Jin%20Se%20scene&sign=d1a66b27161247e4f65e1c65cf7db6fa", brief: "李商隐代表作，表达对人生的感慨。", content: "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然", theme: { title: "人生惘然", literaryDevice: "象征手法" }, relatedThemes: ["人生惘然", "往事追忆", "爱情失落", "命运无常"] },
  { id:77, author: "杜牧", title: "阿房宫赋", era: "唐代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Du%20Mu%20prose%20Ode%20to%20the%20Epang%20Palace%20scene&sign=a99ecd4edf35c18afe2195b62af99b9a", brief: "杜牧代表作，描写阿房宫的奢华与毁灭。", content: "六王毕，四海一；蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。", theme: { title: "兴亡之鉴", literaryDevice: "赋体文" }, relatedThemes: ["兴亡之鉴", "奢侈亡国", "历史反思", "警示后人"] },
  { id:78, author: "苏轼", title: "赤壁赋", era: "北宋", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Su%20Shi%20prose%20Ode%20to%20the%20Red%20Cliff%20scene&sign=064efab40549e5dffa41672a51197bd4", brief: "苏轼代表作，表达对人生的旷达态度。", content: "壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。", theme: { title: "旷达人生", literaryDevice: "赋体文" }, relatedThemes: ["旷达人生", "人生哲理", "自然之美", "超然物外"] },
  { id:79, author: "辛弃疾", title: "永遇乐·京口北固亭怀古", era: "南宋", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Xin%20Qiji%20ci%20Yongyule%20Gu%20Bei%20Ting%20Huai%20Gu%20scene&sign=bfea73f954fe1e8a4c6d559d9dd29b1d", brief: "辛弃疾代表作，表达爱国情怀。", content: "千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。", theme: { title: "爱国情怀", literaryDevice: "豪放词" }, relatedThemes: ["爱国情怀", "壮志未酬", "历史反思", "英雄末路"] },
  { id:80, author: "李清照", title: "如梦令", era: "宋代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Li%20Qingzhao%20ci%20Ru%20Meng%20Ling%20scene&sign=b8776b84ecce055184c066ece4449e74", brief: "李清照代表作，描写少女生活。", content: "常记溪亭日暮，沉醉不知归路。兴尽晚回舟，并误入藕花深处。争渡，争渡，惊起一滩鸥鹭。", theme: { title: "少女情怀", literaryDevice: "婉约词" }, relatedThemes: ["少女情怀", "自然之美", "生活情趣", "无忧无虑"] },
  { id:81, author: "陆游", title: "示儿", era: "南宋", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20You%20poem%20Shi%20Er%20scene&sign=5bda271f22f36b71884a86cefa44fdd2", brief: "陆游代表作，表达爱国情怀。", content: "死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。", theme: { title: "爱国忧民", literaryDevice: "七言绝句" }, relatedThemes: ["爱国忧民", "家国情怀", "壮志未酬", "至死不渝"] },
  { id:82, author: "关汉卿", title: "窦娥冤", era: "元代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Guan%20Hanqing%20play%20The%20Injustice%20to%20Dou%20E%20scene&sign=1dc4f2a982ec2df84f8889abd273bf38", brief: "关汉卿代表作，描写窦娥的冤屈。", content: "有日月朝暮悬，有鬼神掌着生死权。天地也只合把清浊分辨，可怎生糊突了盗跖颜渊：为善的受贫穷更命短，造恶的享富贵又寿延。天地也，做得个怕硬欺软，却元来也这般顺水推船", theme: { title: "社会不公", literaryDevice: "元杂剧" }, relatedThemes: ["社会不公", "冤屈", "善恶有报", "反抗精神"] },
  { id:83, author: "王实甫", title: "西厢记", era: "元代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wang%20Shifu%20play%20The%20Romance%20of%20the%20Western%20Chamber%20scene&sign=b65f8cc7b5a2aee4b8370a977861af82", brief: "王实甫代表作，描写张生与崔莺莺的爱情故事。", content: "待月西厢下，迎风户半开。隔墙花影动，疑是玉人来。", theme: { title: "爱情追求", literaryDevice: "元杂剧" }, relatedThemes: ["爱情追求", "反抗礼教", "浪漫情怀", "有情人终成眷属"] },
  { id:84, author: "施耐庵", title: "水浒传", era: "明代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Shi%20Nai%27an%20novel%20Water%20Margin%20scene&sign=1567203644c0f2bf0a029917529e4f53", brief: "施耐庵代表作，描写梁山好汉的故事。", content: "话说当时薛霸双手举起棍来，望林冲脑袋上便劈下来!说时迟，那时快!薛霸的棍恰举起来，只见松树背后，雷鸣也似一声，那条铁禅杖飞将来，把这水火棍一隔，丢去九霄云外，跳出一个胖大和尚来，喝道：洒家在林子里听你多时!", theme: { title: "官逼民反", literaryDevice: "章回小说" }, relatedThemes: ["官逼民反", "侠义精神", "兄弟情谊", "反抗压迫"] },
  { id:85, author: "罗贯中", title: "三国演义", era: "明代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Luo%20Guanzhong%20novel%20Romance%20of%20the%20Three%20Kingdoms%20scene&sign=e2b9d324fe7f8be84bbb10ffcb818ac4", brief: "罗贯中代表作，描写三国时期的历史故事。", content: "话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义", theme: { title: "天下大势", literaryDevice: "章回小说" }, relatedThemes: ["天下大势", "英雄辈出", "忠义精神", "历史变迁"] },
  { id:86, author: "吴承恩", title: "西游记", era: "明代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wu%20Cheng%27en%20novel%20Journey%20to%20the%20West%20scene&sign=af9978e91f605d7bec7f88abca674f90", brief: "吴承恩代表作，描写唐僧师徒西天取经的故事。", content: "诗曰：混沌未分天地乱，茫茫渺渺无人见。自从盘古破鸿蒙，开辟从兹清浊辨。覆载群生仰至仁，发明万物皆成善。欲知造化会元功，须看西游释厄传。", theme: { title: "修行之路", literaryDevice: "神魔小说" }, relatedThemes: ["修行之路", "团队合作", "降妖伏魔", "信仰坚定"] },
  { id:87, author: "蒲松龄", title: "聊斋志异", era: "清代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Pu%20Songling%20story%20Strange%20Tales%20from%20a%20Chinese%20Studio%20scene&sign=35395148c4007953cb94c8d301706a9d", brief: "蒲松龄代表作，描写神鬼狐妖的故事。", content: "青凤，太原耿氏之甥也。耿有别墅，取便留居。生往游见一叟坐廊下，一僮侍侧烹茶。叟揖生入，言：余姓胡，代耕于斯。生因与接谈，词旨颇雅。", theme: { title: "人鬼情未了", literaryDevice: "志怪小说" }, relatedThemes: ["人鬼情未了", "善恶有报", "人性探索", "奇幻想象"] },
  { id:88, author: "吴敬梓", title: "儒林外史", era: "清代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Wu%20Jingzi%20novel%20The%20Scholars%20scene&sign=5c0a0a4ae0ce77995643dfb2cfe3a9b9", brief: "吴敬梓代表作，描写科举制度下的文人。", content: "说楔子敷陈大义，借名流隐括全文。人生南北多歧路，将相神仙，也要凡人做。百代兴亡朝复暮，江风吹倒前朝树。功名富贵无凭据，费尽心情，总把流光误。浊酒三杯沉醉去，水流花谢知何处?", theme: { title: "科举批判", literaryDevice: "讽刺小说" }, relatedThemes: ["科举批判", "文人百态", "社会讽刺", "理想与现实"] },
  { id:89, author: "蒲松龄", title: "聊斋志异", era: "清代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Pu%20Songling%20story%20Strange%20Tales%20from%20a%20Chinese%20Studio%20scene&sign=35395148c4007953cb94c8d301706a9d", brief: "蒲松龄代表作，描写神鬼狐妖的故事。", content: "青凤，太原耿氏之甥也。耿有别墅，取便留居。生往游见一叟坐廊下，一僮侍侧烹茶。叟揖生入，言：余姓胡，代耕于斯。生因与接谈，词旨颇雅。", theme: { title: "人鬼情未了", literaryDevice: "志怪小说" }, relatedThemes: ["人鬼情未了", "善恶有报", "人性探索", "奇幻想象"] },
  { id:90, author: "鲁迅", title: "祝福", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Lu%20Xun%20story%20Blessing%20scene&sign=cc39f1cce8b561296b47b71f3b88c182", brief: "鲁迅代表作，描写祥林嫂的悲惨命运。", content: "旧历的年底毕竟最像年底，村镇上不必说，就在天空中也显出将到新年的气象来。灰白色的沉重的晚云中间时时发出闪光，接着一声钝响，是送灶的爆竹；近处燃放的可就更强烈了，震耳的大音还没有息，空气里已经散满了幽微的火药香。", theme: { title: "封建礼教的压迫", literaryDevice: "现实主义" }, relatedThemes: ["封建礼教的压迫", "女性悲剧", "社会冷漠", "人性解放"] },
  { id:91, author: "郭沫若", title: "屈原", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Guo%20Moruo%20play%20Qu%20Yuan%20scene&sign=edb7d0ad210c39905716f35b1d7845dc", brief: "郭沫若代表作，描写屈原的爱国情怀。", content: "风！你咆哮吧！咆哮吧！尽力地咆哮吧！在这暗无天日的时候，一切都睡着了，都沉在梦里，都死了的时候，正是应该你咆哮的时候，应该你尽力咆哮的时候！", theme: { title: "爱国情怀", literaryDevice: "历史剧" }, relatedThemes: ["爱国情怀", "正义呐喊", "理想主义", "反抗精神"] },
  { id:92, author: "茅盾", title: "春蚕", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Mao%20Dun%20story%20Spring%20Silkworms%20scene&sign=919c4e36a742f9c68e4222341f02e27f", brief: "茅盾代表作，描写蚕农的悲惨命运。", content: "老通宝坐在塘河边的一块石头上，望着那片桑树。桑叶已经长得很茂盛了，绿油油的，像一片海洋。老通宝的心里面，也像这片桑海一样，充满了希望。", theme: { title: "农民的苦难", literaryDevice: "现实主义" }, relatedThemes: ["农民的苦难", "经济剥削", "社会压迫", "希望与绝望"] },
  { id:93, author: "巴金", title: "寒夜", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ba%20Jin%20novel%20Cold%20Night%20scene&sign=27b9a8ec9d684b6c587c792077539d87", brief: "巴金代表作，描写家庭悲剧。", content: "夜是寒冷的。他站在窗前，望着外面的街道。街道上很冷清，只有几盏路灯，发出微弱的光芒。他的心里，也像这夜晚一样，充满了寒冷和孤独。", theme: { title: "家庭悲剧", literaryDevice: "现实主义" }, relatedThemes: ["家庭悲剧", "婚姻危机", "人性冲突", "社会压力"] },
  { id:94, author: "老舍", title: "茶馆", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Laoshe%20play%20Teahouse%20scene&sign=563789a8ba55992ee51d4fd7491937f7", brief: "老舍代表作，描写茶馆里的社会百态。", content: "裕泰茶馆里，人渐渐多起来了。有的喝茶，有的聊天，有的下棋。掌柜的王利发，穿梭在桌子之间，招呼着客人。他的脸上，总是挂着笑容，但心里，却有说不出的苦。", theme: { title: "社会变迁", literaryDevice: "话剧" }, relatedThemes: ["社会变迁", "小人物命运", "时代缩影", "人生百态"] },
  { id:95, author: "曹禺", title: "原野", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Cao%20Yu%20play%20The%20Wilderness%20scene&sign=f17b5f85d360c6e257b44823c4f86e2d", brief: "曹禺代表作，描写复仇的故事。", content: "原野是一片荒凉的土地，也是一片充满了仇恨的土地。仇虎回来了，带着二十年的仇恨，回到了这片土地。他要复仇，要向那些伤害过他家人的人复仇。", theme: { title: "复仇与救赎", literaryDevice: "象征主义" }, relatedThemes: ["复仇与救赎", "人性冲突", "命运悲剧", "罪恶与惩罚"] },
  { id:96, author: "沈从文", title: "萧萧", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Shen%20Congwen%20story%20Xiao%20Xiao%20scene&sign=7381d275749a5a1a55bf5fa8a10c890c", brief: "沈从文代表作，描写童养媳的命运。", content: "萧萧是个童养媳，十二岁就嫁到了婆家。她每天要做家务，要照顾比她小的丈夫。她的生活，就像一条平静的小溪，没有波澜，也没有希望。", theme: { title: "女性命运", literaryDevice: "乡土文学" }, relatedThemes: ["女性命运", "封建礼教", "乡土中国", "人性解放"] },
  { id:97, author: "钱钟书", title: "写在人生边上", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Qian%20Zhongshu%20prose%20Written%20on%20the%20Margin%20of%20Life%20scene&sign=42747a7aec59e9e3990ad793e3a08577", brief: "钱钟书代表作，表达对人生的思考。", content: "人生据说是一部大书。假使人生真是这样，那么，我们一大半作者只能算是书评家，具有书评家的本领，无须看得几页书，议论早已发了一大堆，书评一篇写完交卷。", theme: { title: "人生智慧", literaryDevice: "散文随笔" }, relatedThemes: ["人生智慧", "讽刺幽默", "人性洞察", "哲学思考"] },
  { id:98, author: "张爱玲", title: "倾城之恋", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Eileen%20Chang%20novel%20Love%20in%20a%20Fallen%20City%20scene&sign=089bd46838579f283354858260a4de87", brief: "张爱玲代表作，描写爱情故事。", content: "上海为了“节省天光”，将所有的时钟都拨快了一小时，然而白公馆里说：“我们用的是老钟。”他们的十点钟是人家的十一点。他们唱歌唱走了板，跟不上生命的胡琴。", theme: { title: "爱情与命运", literaryDevice: "细腻描写" }, relatedThemes: ["爱情与命运", "乱世情缘", "人性复杂", "苍凉美学"] },
  { id:99, author: "艾青", title: "我爱这土地", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ai%20Qing%20poem%20I%20Love%20This%20Land%20scene&sign=5e16a766e76e5aa7f490685951d3d176", brief: "艾青代表作，表达对祖国的热爱。", content: "假如我是一只鸟，我也应该用嘶哑的喉咙歌唱：这被暴风雨所打击着的土地，这永远汹涌着我们的悲愤的河流，这无止息地吹刮着的激怒的风，和那来自林间间的无比温柔的黎明……——然后我死了，连羽毛也腐烂在土地里面。为什么我的眼里常含泪水？因为我对这土地爱得深沉……", theme: { title: "爱国情怀", literaryDevice: "象征手法" }, relatedThemes: ["爱国情怀", "民族精神", "土地情结", "悲愤与希望"] },
  { id:100, author: "徐志摩", title: "偶然", era: "现代", imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Xu%20Zhimo%20poem%20Accidental%20scene&sign=6d1b67c4e7318689d7db86dce86e5f7e", brief: "徐志摩代表作，描写偶然的相遇。", content: "我是天空里的一片云，偶尔投影在你的波心——你不必讶异，更无须欢喜——在转瞬间消灭了踪影。你我相逢在黑夜的海上，你有你的，我有我的，方向；你记得也好，最好你忘掉，在这交会时互放的光亮！", theme: { title: "偶然与必然", literaryDevice: "抒情诗" }, relatedThemes: ["偶然与必然", "相遇与离别", "人生过客", "缘分"] }
];