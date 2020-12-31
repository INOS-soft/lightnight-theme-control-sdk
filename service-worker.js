/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4090ce3145c12c1dd2472962d18c5bf3"
  },
  {
    "url": "about/index.html",
    "revision": "90c68aa951f497f33ab3ca98a14e2ed1"
  },
  {
    "url": "archive/index.html",
    "revision": "834065588ac4702c229878041bde900b"
  },
  {
    "url": "assets/css/0.styles.bfe18536.css",
    "revision": "b03b8709f4c5ee446a6667a0e1d4b9f5"
  },
  {
    "url": "assets/fonts/fa-brands-400.8300bd7f.ttf",
    "revision": "8300bd7f30e0a313c1d772b49d96cb8e"
  },
  {
    "url": "assets/fonts/fa-brands-400.ad527cc5.woff",
    "revision": "ad527cc5ec23d6da66e8a1d6772ea6d3"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2ca6541.eot",
    "revision": "e2ca6541bff3a3e9f4799ee327b28c58"
  },
  {
    "url": "assets/fonts/fa-brands-400.f075c50f.woff2",
    "revision": "f075c50f89795e4cdb4d45b51f1a6800"
  },
  {
    "url": "assets/fonts/fa-regular-400.3c6879c4.woff",
    "revision": "3c6879c4f342203d099bdd66dce6d396"
  },
  {
    "url": "assets/fonts/fa-regular-400.49f00693.ttf",
    "revision": "49f00693b0e5d45097832ef5ea1bc541"
  },
  {
    "url": "assets/fonts/fa-regular-400.4a74738e.woff2",
    "revision": "4a74738e7728e93c4394b8604081da62"
  },
  {
    "url": "assets/fonts/fa-regular-400.b01516c1.eot",
    "revision": "b01516c1808be557667befec76cd6318"
  },
  {
    "url": "assets/fonts/fa-solid-900.205f07b3.ttf",
    "revision": "205f07b3883c484f27f40d21a92950d4"
  },
  {
    "url": "assets/fonts/fa-solid-900.4451e1d8.woff",
    "revision": "4451e1d86df7491dd874f2c41eee1053"
  },
  {
    "url": "assets/fonts/fa-solid-900.8ac31674.eot",
    "revision": "8ac3167427b1d5d2967646bd8f7a0587"
  },
  {
    "url": "assets/fonts/fa-solid-900.8e1ed89b.woff2",
    "revision": "8e1ed89b6ccb8ce41faf5cb672677105"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/ad.png",
    "revision": "f83672204fdc9dc1363f01e3fb7145fb"
  },
  {
    "url": "assets/img/android-chrome-192x192.png",
    "revision": "9dc784a560d2f0756dfd483bb7f74d7e"
  },
  {
    "url": "assets/img/android-chrome-512x512.png",
    "revision": "4336a8bbda285df76c6df998d09c21f9"
  },
  {
    "url": "assets/img/apple-touch-icon.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.44903107.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/avatar.png",
    "revision": "4490310751700e5caaafe81681cbac31"
  },
  {
    "url": "assets/img/background.png",
    "revision": "b52da4f7c0e1bc5424245b8a0b1e79fd"
  },
  {
    "url": "assets/img/brand.a6838b12.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/brand.png",
    "revision": "a6838b126aeae1009be079395b9e8f60"
  },
  {
    "url": "assets/img/by-nc-sa.03dda63e.svg",
    "revision": "03dda63e80b9508d421e792236239ef1"
  },
  {
    "url": "assets/img/empty.png",
    "revision": "596be35cb3b05083be5a8d7c4177c669"
  },
  {
    "url": "assets/img/fa-brands-400.2f122423.svg",
    "revision": "2f12242375edd68e9013ecfb59c672e9"
  },
  {
    "url": "assets/img/fa-regular-400.3602b7e8.svg",
    "revision": "3602b7e8b2cb1462b0bef9738757ef8a"
  },
  {
    "url": "assets/img/fa-solid-900.664de393.svg",
    "revision": "664de3932dd6291b4b8a8c0ddbcb4c61"
  },
  {
    "url": "assets/img/hitokoto.left.7d59b2d0.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.left.png",
    "revision": "7d59b2d074309127019c6dcc093005d7"
  },
  {
    "url": "assets/img/hitokoto.right.d80507e4.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/hitokoto.right.png",
    "revision": "d80507e476ea08c105a11e6b6951af8d"
  },
  {
    "url": "assets/img/qq.png",
    "revision": "b2fcc67452f144ad13bd6c347400fbb2"
  },
  {
    "url": "assets/img/records.2ade8ac9.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/records.png",
    "revision": "2ade8ac9e3a351cfee0345aebe5a421e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "d7aaeb7652a86820babdf501c01621a2"
  },
  {
    "url": "assets/js/10.af73759c.js",
    "revision": "c3f5eda30b087be46e605dac8414b3ad"
  },
  {
    "url": "assets/js/11.404d5629.js",
    "revision": "d93b34e1d8f5a7e54f25f84034ae9c64"
  },
  {
    "url": "assets/js/12.2dc9af50.js",
    "revision": "09e0db7911f5d94cb4a1f036f9bed3c3"
  },
  {
    "url": "assets/js/13.0f4381df.js",
    "revision": "c412d7bffd7fb201a14089e3c9b78cc3"
  },
  {
    "url": "assets/js/14.c6c5585c.js",
    "revision": "a576832ee79817ab30cabe068a9fa982"
  },
  {
    "url": "assets/js/15.49e83323.js",
    "revision": "885d29a8f5b956d02545df92de7b4b48"
  },
  {
    "url": "assets/js/16.1cf2738c.js",
    "revision": "d8b0df8bbf254ae36977308ac636c2b6"
  },
  {
    "url": "assets/js/17.13de28e1.js",
    "revision": "df5d4107af8505f1456f8232a0593985"
  },
  {
    "url": "assets/js/18.a33f4282.js",
    "revision": "d59dc5d8338eff34fffa8140b5bb6fcc"
  },
  {
    "url": "assets/js/19.b9683112.js",
    "revision": "06d35711b301e661f59a6f83b19e952b"
  },
  {
    "url": "assets/js/20.9ef6579d.js",
    "revision": "d7ab85b9cae74f794c9e7df61ce7111f"
  },
  {
    "url": "assets/js/21.ccdd7dd4.js",
    "revision": "b50f9a6574659b4f799af228d1d6a934"
  },
  {
    "url": "assets/js/22.41d6c851.js",
    "revision": "48f2b457ff1b021b52de4657d8430211"
  },
  {
    "url": "assets/js/23.653fb77d.js",
    "revision": "f35267fa8c26a6e25a8aca3c7b79dd64"
  },
  {
    "url": "assets/js/24.513f39c0.js",
    "revision": "b37a76cc57a40c809966fd204aa50b4d"
  },
  {
    "url": "assets/js/25.8802665b.js",
    "revision": "08c56c7291c443147daaafabc9a97353"
  },
  {
    "url": "assets/js/26.c21340d9.js",
    "revision": "3c1133f9cbef7e9f176c80bd7157a49e"
  },
  {
    "url": "assets/js/27.8195169f.js",
    "revision": "418152dfd6dab2cbbea9f7b2226af551"
  },
  {
    "url": "assets/js/28.19126b80.js",
    "revision": "cd5a530d91b27343f55a982785248425"
  },
  {
    "url": "assets/js/29.4abf2f19.js",
    "revision": "46c4617572b4a1919a0335bc8483a6dd"
  },
  {
    "url": "assets/js/3.12239266.js",
    "revision": "652d7ffad38487bbe766c025611f7596"
  },
  {
    "url": "assets/js/30.9e2de623.js",
    "revision": "bf9107be5f6c4983149edc72302e9334"
  },
  {
    "url": "assets/js/31.c77494a9.js",
    "revision": "3e6bdc5a21ad414a107d4ef13fc06d61"
  },
  {
    "url": "assets/js/32.7eab532d.js",
    "revision": "4686f55e91fd9e49775bfb0de2f427d3"
  },
  {
    "url": "assets/js/33.d570eaf5.js",
    "revision": "6b566577a5992ab42f2b2b929c998a9a"
  },
  {
    "url": "assets/js/34.d1b711b1.js",
    "revision": "5c24aed4c34921ece989d5d1d50053c9"
  },
  {
    "url": "assets/js/4.dc546022.js",
    "revision": "2a855c1e7e8d6f5df6aa14ab547c90ae"
  },
  {
    "url": "assets/js/5.0554a7c5.js",
    "revision": "298fd12e41a3edb5cb8c1a0f495f7fa0"
  },
  {
    "url": "assets/js/6.fd761b99.js",
    "revision": "803d30cf0c056d62488d253039a6e7da"
  },
  {
    "url": "assets/js/7.64405e1c.js",
    "revision": "228b3ff54002d510988ee46d3b8420d3"
  },
  {
    "url": "assets/js/8.a106ca14.js",
    "revision": "cacd0988c1b279ec34951f0b278a3b2c"
  },
  {
    "url": "assets/js/9.1854f4bf.js",
    "revision": "d4500dfb70cece6a46a1b30bd751170f"
  },
  {
    "url": "assets/js/app.5cc13adb.js",
    "revision": "4c172d0b28f649922a706578c46e6db6"
  },
  {
    "url": "assets/js/vuejs-paginate.13dd3c7a.js",
    "revision": "24abf3b64d330f53de9e31f3fc74b9b0"
  },
  {
    "url": "category/Blog/index.html",
    "revision": "61adf2ec73b66140df229ef04a581382"
  },
  {
    "url": "category/Hexo/index.html",
    "revision": "1e2745da9d1ab0280e7071588ebbb874"
  },
  {
    "url": "category/index.html",
    "revision": "a067b2789b951892479ee30fc81274a2"
  },
  {
    "url": "category/Lab/index.html",
    "revision": "9a609e2403119f61a2fb1611352228fe"
  },
  {
    "url": "category/Markdown/index.html",
    "revision": "20a6b6df3307af23cb1cc07cb6695bdd"
  },
  {
    "url": "category/Note/index.html",
    "revision": "daec52e623bb7d1379c3d92f0de16782"
  },
  {
    "url": "category/Plugin/index.html",
    "revision": "df1ab5e8a68c1d41510f45540261e306"
  },
  {
    "url": "category/SQL/index.html",
    "revision": "a608b3ac84caad877537c0ec80d0bff5"
  },
  {
    "url": "category/数据结构与算法/index.html",
    "revision": "5dab205ddb955c57d7b46d3919230f3f"
  },
  {
    "url": "category/网络/index.html",
    "revision": "49ace792dff7931477d0445c67685057"
  },
  {
    "url": "codes/index.html",
    "revision": "02692cea30b37390f2f1b35b0922d9bc"
  },
  {
    "url": "gallery/data-structure-linked-list-normal.png",
    "revision": "1db30e017d3e0009ddf12311d31b2ae5"
  },
  {
    "url": "gallery/data-structure-linked-list-static-to-normal.png",
    "revision": "4643d5dd42eebf640134ab8d9df2e137"
  },
  {
    "url": "gallery/data-structure-queue.png",
    "revision": "db91100f07f4d68b2ae73b73baa34614"
  },
  {
    "url": "gallery/data-structure-random-linked-ram.png",
    "revision": "89bfac4f6ce9c3abb572dfff77a78a34"
  },
  {
    "url": "gallery/data-structure-stack.png",
    "revision": "7067ca734d65393dcd3fc3340310f787"
  },
  {
    "url": "gallery/FaceQ1583444636773.png",
    "revision": "a25a8ffa90c5b10c42e4e6992e1bc2f0"
  },
  {
    "url": "gallery/http-request-example.jpg",
    "revision": "3ad3cb077e4d852be159c0ce7d1a7e92"
  },
  {
    "url": "gallery/http-request-format.png",
    "revision": "3aeef0f8d0b869a5c3f4d47ee41d3c90"
  },
  {
    "url": "gallery/http-response-example.jpg",
    "revision": "c3cf8d2890449b9138527011ae403b49"
  },
  {
    "url": "gallery/http-response-format.png",
    "revision": "ea246cd67c5878fdb5f440e4657bd7a1"
  },
  {
    "url": "gallery/index.html",
    "revision": "a7d7d36add452e77806c5aadf7df5ad7"
  },
  {
    "url": "gallery/tcp-ip-ipv6-prefix.jpg",
    "revision": "527c1e33dd1752265990fdaf101e224e"
  },
  {
    "url": "gallery/tcp-ip-router-network.jpg",
    "revision": "6d35c987bd9240b925d8e80f60331396"
  },
  {
    "url": "gallery/tcp-ip-router-subnet.jpg",
    "revision": "ac9c9b39b390465be42f7f946243b459"
  },
  {
    "url": "gallery/yao2048-0.jpg",
    "revision": "b68678816508660ea9c32a813d1d769e"
  },
  {
    "url": "gallery/yaoplayer-0.jpg",
    "revision": "acb68980b34d9666841b8939d78ee967"
  },
  {
    "url": "icons/index.html",
    "revision": "fbfe856e5465dc299ba7b891df8920d1"
  },
  {
    "url": "index.html",
    "revision": "452e6a15f3268d3991bd1c22030916ed"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "4f93e4c64b61b422e4a72404604d5e3c"
  },
  {
    "url": "post/1f9ef45914104b2f003b92915846fd68/index.html",
    "revision": "b8bae641a5b97a47911dd471115695bf"
  },
  {
    "url": "post/2437fe17d260e818ba1d29b7b5369fe1/index.html",
    "revision": "c501d3ee9ad57c29df5abc3c8070b32b"
  },
  {
    "url": "post/35c6c5b15b7cff4f490d46f4eaeb6db3/index.html",
    "revision": "c8074eec2654870a63138c72e75dcbad"
  },
  {
    "url": "post/61a5bfbd43560b6ade79f43a21b24f8f/index.html",
    "revision": "3307804b99fcff1989e1b0baddb911c9"
  },
  {
    "url": "post/6bcc18badae0766fe60126de2f1f6b8d/index.html",
    "revision": "1bd090f3bb7580eaf555eed7e39c816c"
  },
  {
    "url": "post/92352439199b198c609fb844289c0b2e/index.html",
    "revision": "e191981473931b34477d10da232c2b69"
  },
  {
    "url": "post/943b3a74bc47049c640b96b75e1e3f89/index.html",
    "revision": "e53d068a2daad8f44361a687d3e99c21"
  },
  {
    "url": "post/a054300f3b4002e7ee9b1cb2a9a38130/index.html",
    "revision": "118d087118568a54c2c62b84a40e71c0"
  },
  {
    "url": "post/ab7c252be1b1245460152938385d6910/index.html",
    "revision": "cff151dbb8f105c118c01caca2e124a5"
  },
  {
    "url": "post/b18411e081244296990738826c864aa8/index.html",
    "revision": "a513abc51bb26a021ec69e04c1ac0260"
  },
  {
    "url": "post/b6f7be7a10da30826d883cbcedbc994f/index.html",
    "revision": "eaf873cf247ae12cee6992f48568d043"
  },
  {
    "url": "post/cd0e94fa87bd88209ee0bc5be2d6b5eb/index.html",
    "revision": "c41ab7e1b1796201616782270bd8ab5e"
  },
  {
    "url": "post/d2d79ef3285fc02533ff582e2129efa2/index.html",
    "revision": "03c3af020bab07a61f7a23086b22b815"
  },
  {
    "url": "post/d58d778b71c1bca92f076cf824279743/index.html",
    "revision": "9f81fb50f032a9cc565ee11f5b755547"
  },
  {
    "url": "post/f31a1c1340823fc0cfe5038d936417a1/index.html",
    "revision": "ca3b2ea344037f9d47219dcbc829b0bd"
  },
  {
    "url": "post/f4ce45f08928815c94558fd64e1fbf64/index.html",
    "revision": "94b4e80e62a8a575340f244283db759a"
  },
  {
    "url": "records/index.html",
    "revision": "df59c1cf338d996a2c3af1ea9db13b2a"
  },
  {
    "url": "tag/2048/index.html",
    "revision": "3b00359c3f83577027c73949b6307455"
  },
  {
    "url": "tag/Big O/index.html",
    "revision": "8e26929aa9f525f57f4fc3b9c27c4b53"
  },
  {
    "url": "tag/Command/index.html",
    "revision": "61009438d2b526678967c1d6566ddba3"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "1343a4a16df4513ae5ae61dab2ee16ea"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "1a23e8ff1ebffc24786ff034f46a708b"
  },
  {
    "url": "tag/HTTPS/index.html",
    "revision": "b06ee31dce74813ace0a9ff069308aff"
  },
  {
    "url": "tag/index.html",
    "revision": "4304fa89784030467756ee4a110dd927"
  },
  {
    "url": "tag/IPv4/index.html",
    "revision": "7968d40a36475f2ad6c54b9d57cbff9e"
  },
  {
    "url": "tag/IPv6/index.html",
    "revision": "cdf51e8026b379c26640017fd1846bc5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3c5847ef5038196c8b79b043dcfd1a75"
  },
  {
    "url": "tag/Links/index.html",
    "revision": "142d750aa235848d87db347da97e538b"
  },
  {
    "url": "tag/List/index.html",
    "revision": "58ba04bb405e8063f69b8529347bfdf3"
  },
  {
    "url": "tag/MAC/index.html",
    "revision": "05a3553233ef05edc9b792f92dac3ae1"
  },
  {
    "url": "tag/Mustom/index.html",
    "revision": "dc73bf1dc0a9ec483e39dfbd2da97b80"
  },
  {
    "url": "tag/old blog/index.html",
    "revision": "8f107dbfc127e8501f3a02cbb290b3d1"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "4582b8fb59d47de86e259e752e418147"
  },
  {
    "url": "tag/Queue/index.html",
    "revision": "0703570ad59949773dafc7d774b6f9f6"
  },
  {
    "url": "tag/SFWRTECH 3IT3/index.html",
    "revision": "a6b0191bf50c7c6f13541a220c69d586"
  },
  {
    "url": "tag/SQL/index.html",
    "revision": "429a9c5e06df47464792e9664e2960a8"
  },
  {
    "url": "tag/Stack/index.html",
    "revision": "90338a1f0c971860d4b392d4aeaf8cba"
  },
  {
    "url": "tag/TCP/IP/index.html",
    "revision": "1d950ddbf87ee6caa84c4e372646d3b5"
  },
  {
    "url": "tag/Test/index.html",
    "revision": "d182b72450ba022261d1a50eac4a290f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6ce4ddc25b3e58ef4a08073b3454aeaa"
  },
  {
    "url": "tag/抽象数据类/index.html",
    "revision": "4a87b1d9369fa7fcc50ea042a1fea54d"
  },
  {
    "url": "tag/线性表/index.html",
    "revision": "d9189feaa906588b98749c69b51fb53b"
  },
  {
    "url": "tag/音乐播放器/index.html",
    "revision": "a69096874d22bf6334d6307e803f0add"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
