(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{663:function(v,_,e){"use strict";e.r(_);var a=e(2),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("线性表（List），了解线性表的基础知识，认识一下线性表的种类。")]),v._v(" "),e("h1",{attrs:{id:"线性表list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线性表list"}},[v._v("#")]),v._v(" 线性表 List")]),v._v(" "),e("p",[v._v("线性表（List）：由另个或多个元素组成的有限序列。"),e("strong",[v._v("元素是有序的，可以被排列的")]),v._v("。在有序结构中，某个元素 "),e("code",[v._v("ai")]),v._v("  前面的元素 "),e("code",[v._v("ai-1")]),v._v("  称为"),e("strong",[v._v("前驱元素")]),v._v("，后面的元素 "),e("code",[v._v("ai+1")]),v._v("  称为"),e("strong",[v._v("后继元素")]),v._v("。在 Java 语言中，数组（ArrayList）和链表（Linked List）都属于线性表。其中数组使用了顺序结构，而链表使用了链式结构。")]),v._v(" "),e("p",[v._v("线性表的数据对象集合为 "),e("code",[v._v("{a1,a2,...,an-1,an}")]),v._v(" ，每个元素的类型均为 "),e("code",[v._v("DataType")]),v._v(" 。** 数据元素之间的关系是一对一的关系。** 其中，除第一个元素 "),e("code",[v._v("a1")]),v._v("  外，每个元素有且只有一个直接前驱元素，除最后一个元素 "),e("code",[v._v("an")]),v._v("  外，每个元素有且只有一个直接后继元素。")]),v._v(" "),e("h1",{attrs:{id:"线性表伪代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线性表伪代码"}},[v._v("#")]),v._v(" 线性表伪代码")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("ADT 线性表（List）\nData\n  数据对象集合 {a1,a2,...,an-1,an}\nOperation\n  init(*L)：初始化空线性表L\n  isEmpty(L)：判断线性表是否为空\n  clear(*L)：清空线性表\n  getElement(L,i,*e)：将线性表L中第i个元素返回给e\n  elementAt(L,e)：线性表L中查找与e相等的元素，返回元素的位置\n  insert(*L,i,e)：线性表L中第i个位置插入新元素e\n  delete(*L,i,*e)：删除线性表L中第i个位置元素，并返回该元素给e\n  length(L)：返回线性表L的元数个数\nendADT\n")])])]),e("h1",{attrs:{id:"线性表的顺序存储结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线性表的顺序存储结构"}},[v._v("#")]),v._v(" 线性表的顺序存储结构")]),v._v(" "),e("p",[v._v("线性表的顺序存储结构封装需要 3 个属性：")]),v._v(" "),e("ul",[e("li",[v._v("存储空间初始位置，数组指针")]),v._v(" "),e("li",[v._v("线性表的最大长度，指存储空间总长度，初始化后不变")]),v._v(" "),e("li",[v._v("线性表的当前长度，指表中元素数量，大于等于 0，小于表的最大长度")])]),v._v(" "),e("h2",{attrs:{id:"顺序存储结构的地址计算方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顺序存储结构的地址计算方法"}},[v._v("#")]),v._v(" 顺序存储结构的地址计算方法")]),v._v(" "),e("p",[e("strong",[v._v("注： "),e("code",[v._v("i")]),v._v("  从 “1” 开始")])]),v._v(" "),e("p",[v._v("假设每个元素类型的 "),e("code",[v._v("DataType")]),v._v("  都需要占用 "),e("code",[v._v("c")]),v._v("  个储存单位（字节），那么线性表中第 "),e("code",[v._v("i+1")]),v._v("  个元素和第 "),e("code",[v._v("i")]),v._v("  个元素的存储位置的关系是（LOC 为获得存储位置的函数）：")]),v._v(" "),e("p",[e("code",[v._v("LOC(ai+1) = LOC(ai) + c")])]),v._v(" "),e("p",[v._v("所以找第 "),e("code",[v._v("i")]),v._v("  个元素 "),e("code",[v._v("ai")]),v._v("  的储存位置可以又线性表初始指针指向的 "),e("code",[v._v("a1")]),v._v("  推算出：")]),v._v(" "),e("p",[e("strong",[e("code",[v._v("LOC(ai) = LOC(a1) + (i-1) * c")])])]),v._v(" "),e("p",[v._v("通过这个公式，计算出线性表中任意位置的地址，所用的时间都是相同的，那么他的存储时间性能就是 "),e("code",[v._v("O(1)")]),v._v(" ，"),e("strong",[v._v("这种结构通常被称为随机存储结构。")])]),v._v(" "),e("h1",{attrs:{id:"线性表的链式存储结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线性表的链式存储结构"}},[v._v("#")]),v._v(" 线性表的链式存储结构")]),v._v(" "),e("p",[v._v("顺序存储结构最大的缺点，插入和删除需要移动大量元素，从而保持表中元素邻居的关系；链式存储结构通过携带后继元素的存储地址就解决了这个缺点。")]),v._v(" "),e("p",[v._v("链式存储结构的线性表中元素称为 “存储映像”，也称为 “节点（Node）”。每个节点都是由两部分组成：")]),v._v(" "),e("ul",[e("li",[v._v("数据域：储存数据元素信息的域")]),v._v(" "),e("li",[v._v("指针域：存储直接后继元素地址的域")])]),v._v(" "),e("h2",{attrs:{id:"单链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单链表"}},[v._v("#")]),v._v(" 单链表")]),v._v(" "),e("p",[e("code",[v._v("n")]),v._v("  个节点链接成一个链表，即为线性表 "),e("code",[v._v("(a1,a2,...,an-1,an)")]),v._v("  的链式存储结构。因为此链表的每个节点中只包含一个指针域，所以叫做单链表。")]),v._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"单链表图示","data-src":"/gallery/data-structure-linked-list-normal.png",loading:"lazy"}})]),v._v(" "),e("p",[v._v("单链表必须有一个头部加上 0 到多个节点。头指针是链表指向第一个节点的指针，如果链表有头结点，则头指针指向头结点。头结点携带第一个元素的节点指针，放在第一个节点之前，其数据域一般无意义，但也可以存放链表的长度。头结点不是必须的，但是头结点可以放一些对列表有用的变量。")]),v._v(" "),e("p",[v._v("尾指针是指向单链表的最后一个节点的指针，这个指针不是必须的，但是尾指针有好处，比如需要在尾部插入新节点。")]),v._v(" "),e("p",[e("strong",[v._v("若线性表需要频繁查找，很少进行插入和删除操作是，宜采用顺序存储结构。")])]),v._v(" "),e("p",[e("strong",[v._v("若需要频繁插入和删除时，宜采用单链表结构。")])]),v._v(" "),e("h2",{attrs:{id:"静态链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态链表"}},[v._v("#")]),v._v(" 静态链表")]),v._v(" "),e("p",[v._v("在内存中建立一个数组，在数组最大长度内的空间中再建立一个链表，这种链表就是静态链表。静态链表通过 “游标（Cursor）” 指向后继元素所处数组中的 “下标（Index）”。下图为静态链表转普通链表，最大长度为 "),e("code",[v._v("100")]),v._v(" ，第一个元素游标指向备用链表的头节点（既当前链表尾节点的游标，也是尾指针），最后一个元素游标指向当前链表头节点。")]),v._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"静态链表转普通链表","data-src":"/gallery/data-structure-linked-list-static-to-normal.png",loading:"lazy"}})]),v._v(" "),e("ul",[e("li",[v._v("数组中第一个和最后一个元素不存放数据")]),v._v(" "),e("li",[v._v("未使用的数组元素被称为备用链表")]),v._v(" "),e("li",[v._v("数组第一个元素，即 "),e("code",[v._v("Index = 0")]),v._v("  的元素的游标（Cursor）存放备用链表的第一个节点的下标")]),v._v(" "),e("li",[v._v("数组最后一个元素，即 "),e("code",[v._v("Index = MAX_SIZE-1")]),v._v("  的元素的游标（Cursor）存放当前链表的第一个节点的下标")]),v._v(" "),e("li",[v._v("静态链表初始化时， "),e("code",[v._v("Index = 0")]),v._v("  的元素的游标应从 "),e("code",[v._v("1")]),v._v("  开始，而 "),e("code",[v._v("Index = MAX_SIZE-1")]),v._v("  的元素的游标则是 "),e("code",[v._v("0")]),v._v(" ，表示空链表")])]),v._v(" "),e("h2",{attrs:{id:"循环链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环链表"}},[v._v("#")]),v._v(" 循环链表")]),v._v(" "),e("p",[v._v("在单链表中，如果不从头结点出发，就无法访问到全部节点。循环链表就解决了这个问题。只要有链表中某一节点的指针，就能跑完全部节点。当表为空时，头部后继指针指向头部本身。")]),v._v(" "),e("p",[e("strong",[v._v("循环链表所用的方法就是把尾节点的空指针指向头节点，使单链表形成一个环，这种头尾相接的单链表被称为单循环链表，简称循环链表。")])]),v._v(" "),e("p",[v._v("原单链表判断尾节点用 "),e("code",[v._v("node.next === null ?")]),v._v(" ，现在则是用 "),e("code",[v._v("node.next === head ?")]),v._v(" 。")]),v._v(" "),e("h2",{attrs:{id:"双向链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向链表"}},[v._v("#")]),v._v(" 双向链表")]),v._v(" "),e("p",[v._v("对比单链表，双向链表的节点有两个指针：前驱指针和后继指针。双向列表允许从尾部往回跑。当表为空时，头部前驱指针和后继指针都指向头部本身。")]),v._v(" "),e("h1",{attrs:{id:"找单链表中间的节点的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找单链表中间的节点的方法"}},[v._v("#")]),v._v(" 找单链表中间的节点的方法")]),v._v(" "),e("p",[v._v("利用快慢指针原理：设置两个指针 "),e("code",[v._v("*search")]),v._v("  和 "),e("code",[v._v("*middle")]),v._v("  都指向单链表的头结点。其中 "),e("code",[v._v("*search")]),v._v("  的移动速度是 "),e("code",[v._v("*middle")]),v._v("  的 2 倍。当 "),e("code",[v._v("*search")]),v._v("  指向尾节点时， "),e("code",[v._v("*middle")]),v._v("  正好就在中间。")]),v._v(" "),e("p",[v._v("在一个长度为 100 的单链表中，当 "),e("code",[v._v("*search")]),v._v("  指向第 100 个节点时， "),e("code",[v._v("*middle")]),v._v("  指向第 50 个节点。")]),v._v(" "),e("p",[v._v("在一个长度为 101 的单链表中，当 "),e("code",[v._v("*search")]),v._v("  指向 102（即超出长度）时， "),e("code",[v._v("*middle")]),v._v("  指向第 51 个节点，正好在中间。")]),v._v(" "),e("h1",{attrs:{id:"判断一个链表是否有环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断一个链表是否有环"}},[v._v("#")]),v._v(" 判断一个链表是否有环")]),v._v(" "),e("p",[v._v("方法一：设置两个指针 "),e("code",[v._v("*q")]),v._v("  和 "),e("code",[v._v("*b")]),v._v(" 。 "),e("code",[v._v("*q")]),v._v("  一直在走的情况下，每遇到一个节点， "),e("code",[v._v("*b")]),v._v("  就从新从头结点开始走。如果 "),e("code",[v._v("*q")]),v._v("  所在当前步数等于 "),e("code",[v._v("*b")]),v._v("  从头开始数的步数，则 "),e("code",[v._v("*q")]),v._v("  继续往前走一步，而 "),e("code",[v._v("*b")]),v._v("  从新走。如果 "),e("code",[v._v("*q")]),v._v("  所在当前步数不等于 "),e("code",[v._v("*b")]),v._v("  的从头开始数的步数，则存在环。这种方法可以找到环所在节点。")]),v._v(" "),e("p",[v._v("方法二：设置两个指针 "),e("code",[v._v("*q")]),v._v("  和 "),e("code",[v._v("*b")]),v._v("  都指向单链表的头结点。其中 "),e("code",[v._v("*q")]),v._v("  的移动速度是 "),e("code",[v._v("*b")]),v._v("  的 2 倍，若在某个时候 "),e("code",[v._v("*q == *b")]),v._v(" ，则存在环。一般偶数量节点的单循环链表跑两次后 "),e("code",[v._v("*q == *b")]),v._v(" 。")]),v._v(" "),e("blockquote",[e("p",[v._v("本文参考：\n"),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1jW411K7yg",target:"_blank",rel:"noopener noreferrer"}},[v._v("【C 语言描述】《数据结构和算法》（小甲鱼）"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=t.exports}}]);