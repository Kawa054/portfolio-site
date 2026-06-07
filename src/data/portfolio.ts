type LinkItem = {
  label: string
  url: string
}

type Section = {
  title?: string
  paragraphs?: string[]
  images?: string[]
  videos?: string[]
  links?: LinkItem[]
}

export const navItems = [
  { label: 'Home', to: '/', mark: 'H' },
  { label: 'About', to: '/about', mark: 'A' },
  { label: 'Works', to: '/works', mark: 'W' },
  { label: 'Reserch', to: '/reserch', mark: 'R' },
  { label: 'Diary', to: '/diary', mark: 'D' },
  { label: 'Contact', to: '/contact', mark: 'C' }
]

export const history = [
  {
    date: '2000/12/05',
    text: '熊本県で生まれました。楽しいことがあると、夕飯の時間にずっとしゃべっていたり、よく友達と遅くまで遊んだりと元気な子だったようです。'
  },
  {
    date: '2013/04/01',
    text: '中学校入学。中学ではバドミントン部に所属しており、仲間と勝利のため日々切磋琢磨してました。また、普段は毎日ゲームをしており、家で遊んだ内容を学校で友達と話す日々で、放課後もよく友達とゲームをして遊んでいました。このころ、ちょうど「マインクラフト」というゲームに熱中し、勝手に親のPCを使ってサーバーを建て、独学でプラグインなどを自作し、作ったミニゲームで遊んだりもしていました。ここで、頭の中の想像を実際に実現する手段としてプログラミングがあると感じ、この経験がきっかけで高専でプログラミングをより深く学びたいと思いました。'
  },
  {
    date: '2016/04/01',
    text: '高専入学。入学後すぐに熊本地震があり、一か月後の学校では上手く馴染めないかもしれないと不安を感じていました。しかし、ゲームの話がきっかけで友達も作れ、私も将来ゲームのような人に喜びを与える体験を生み出し、人と人との繋がりの基になるものを作りたいと思いました。夢を実現できるよう高専では手を多く動かし、コンテストやインターンでの開発体験などにも積極的に参加しました。そうしていくうちに、もっと数学や物理学といった基礎理論を深く学びたいと感じたこと、より広い分野で活躍できる技術者になりたいと感じ、京都大学への編入をしました。'
  },
  {
    date: '2021/04/01',
    text: '大学編入学(2年次)。大学では高度な数学や物理、情報科学などを学びました。その過程で様々な価値観に触れ、色々なことに悩み、自分を見つめなおすことで人として成長することができました。大学で学んだ多くの理論は、必要な時に新しい技術を習得する下地になっており、これからの挑戦の支えになっています。また、研究では複雑すぎるような問題でも特定の具体的な状況に分けて考えることで、全体を解明していくプロセスを学び、答えのない未知の問題に対応する力を付けることが出来ました。大学での経験を糧に、活躍できる技術者に成れるよう努力を続けています。'
  }
]

export const skillRows = [
  {
    level: '4',
    star: '/logo/star4.png',
    description: '問題なく言語を使えるだけでなく、その言語のライブラリを作ったり、フレームワークを作ることもできる',
    skills: [
      { name: 'C', icon: '/logo/c.png', description: '高専での授業、大学での授業での成果物に使用。5年以上触れており、問題なく様々なものを作成できる。' },
      { name: 'Java', icon: '/logo/java.png', description: '高専での授業や普段の開発等で使用し、オブジェクト指向型言語の中で最も理解している言語。ゲームなどのやや規模の大きい開発なども行ったことがあり、独立性、再利用性、拡張性を考えつつ開発を行える。UMLを用い、システムの振る舞いを記述する事も可能。JavaベースのProcessingでの開発も得意。' }
    ]
  },
  {
    level: '3',
    star: '/logo/star3.png',
    description: '言語文法・開発環境について理解しており、必要に応じてリファレンスを見ながらプログラムを開発できる',
    skills: [
      { name: 'C++', icon: '/logo/cpp.png', description: '主に競技プログラミングで使用しており、Java言語と同じくリファレンスを参照しつつある程度の規模の開発を行うことが出来る。また、高専時の一部の数値計算プログラムなども作成していた。' },
      { name: 'C#', icon: '/logo/c-sharp.png', description: 'Unityでのプログラムや、高専でのWindows GUIアプリケーション開発等で主に使用。リファレンスなどを見つつ中規模程度の開発ならば可能。' },
      { name: 'Git', icon: '/logo/git.png', description: '高専プログラミングコンテストやインターンシップ、ロボコン等でのチーム開発で主に使用。GitLabを使い、issue作成をしつつ振りかえりを行うようなチーム開発も経験。また、一部の個人開発でも使用しており、基礎的なコマンドは理解している。' },
      { name: 'Python', icon: '/logo/python.png', description: '高専、大学の授業や研究等で主に使用しており、数値計算やシミュレーション、グラフのプロット等を行える。また、TensorFlowやPytorchなどの深層学習関連のコードや、ロボットの画像認識プログラム等の作成経験もある。必要に応じて、Javaのようにオブジェクト指向を意識したクラスの作成等も可能で、中規模程度のアプリケーションであれば作成可能。' },
      { name: 'Unity', icon: '/logo/unity.png', description: '主に個人での3Dゲーム開発で使用。学祭でゲームランチャー等のUIアプリケーションも作成したことがあり、中規模のゲームを作成可能。' },
      { name: 'HTML', icon: '/logo/html.png', description: '学校での授業や、WEB系開発アルバイト、このポートフォリオ制作等で使用。基礎的な知識はあり、特に問題なく理解できる。' },
      { name: 'Vue3', icon: '/logo/vue.png', description: 'WEB系開発アルバイトと、このポートフォリオサイトの作成で使用。適当なサイトやリファレンスを参照しながら中規模程度のWEBアプリの開発も可能。外部のライブラリや新しい要素の追加にも対応でき、WEB系の開発アルバイトではVue2からVue3への移行作業なども行った経験がある。' },
      { name: 'GameMaker Studio', icon: '/logo/gml.png', description: '主に個人での2Dゲーム開発で使用。大きめのゲームを作成したこともあり、Unityと同じくらい扱うことができる。内部の独自言語であるGMLも特に問題なく使いこなすことができ、2Dゲームならば大きめのゲームも作成可能。' }
    ]
  },
  {
    level: '2',
    star: '/logo/star2.png',
    description: '言語文法・開発環境のリファレンスを常に見ながらであればプログラムを開発できる',
    skills: [
      { name: 'OpenGL', icon: '/logo/opengl.png', description: '2Dゲームなどでのシェーダーの開発時に使用。GLSLでのシェーダー作成を行うことができ、ある程度基礎的な知識は身に付けている。' },
      { name: 'Linux', icon: '/logo/linux.png', description: '基礎的なコマンドはもちろん、WSLを用いた開発もコンテスト等で行ったことがあり問題なく使用できる。Raspberry Piを用いた電子工作も一部可能。' },
      { name: 'React Native', icon: '/logo/react.png', description: '高専プログラミングコンテストの成果物に使用。iOSとAndroid上で動作する簡単なアプリケーションや、やや中規模程度の開発を行うことが出来る。' },
      { name: 'CSS', icon: '/logo/css.png', description: '学校の授業やWEB系開発アルバイト、このポートフォリオサイト等で使用。調べながら、HTMLと併せて特に問題なく扱える。' },
      { name: 'JavaScript', icon: '/logo/js.png', description: '学校の授業やWEB系開発アルバイト、このポートフォリオサイト等で使用。調べながら、HTMLと併せて特に問題なく扱える。' },
      { name: 'TypeScript', icon: '/logo/ts.png', description: 'WEB系開発アルバイト、このポートフォリオサイト等で一部使用。調べながらであればある程度扱える。' },
      { name: 'SQL', icon: '/logo/sql.png', description: '学校のデータベースでの授業やWEB系開発アルバイトで使用。主に顧客や商品のデータに関する一連の処理などを実装することが出来る。必要なクエリについては都度調べながら実装できる。' },
      { name: 'PHP', icon: '/logo/php.png', description: '中学校時の携帯ゲーム「Minecraft:PE」でのサーバープラグイン開発で主に使用。そのため従来のPHPの使い方の理解とは少し異なるが、基礎的な文法などの知識はある。当時は1万行クラスのコードを書いており、チーム戦のゲームなども作っていた。' }
    ]
  },
  {
    level: '1',
    star: '/logo/star1.png',
    description: '授業などで触れたことがある程度。実用的なプログラムの開発経験はない',
    skills: [
      { name: 'Docker', icon: '/logo/docker.png', description: '開発過程で時々扱う程度で、あまり理解度は高くない。一部のコマンドの理解と、コンテナの仕組みについての基礎知識がある程度。' },
      { name: 'ROS', icon: '/logo/ros.png', description: '大学でのNHKロボコンへ向けてのシミュレーター制作で使用。Gazebo、rvizなどと併せてWSL上で開発を行った。正直調べながらなんとなくで実装しており、理解しているかは微妙。' }
    ]
  }
]

export const hobbies = [
  {
    title: '音楽鑑賞',
    text: '単に気分転換で音楽を聴くだけでなく、歌詞の中にある世界観や価値観を自身のものと照らし合わせ、想像した世界に足を運ぶことが好きです。音楽を深く聴くことは、普段感じないことや考えたこともない物や世界に触れることができるため、物事をより多角的に見れるようになる魅力があると考えています。主に米津玄師さんの曲が好きで、他にもジャンルを問わず、ヨルシカ、King Gnu、Mrs. GREEN APPLE、Vaundyなど様々なバンドの曲やボーカロイド曲も聴いています。'
  },
  {
    title: 'ゲーム',
    text: '小さい頃から人と喜びを共有できるゲームが好きで、熱中すると一日丸ごとやることもありました。高専からはPvP系のゲームにハマり、ゲーム内のランキング上位を目指して自分のプレイやチームの雰囲気、連携などを反省・改善していく習慣がつき、今ではゲーム以外でも成長したいことがあるときの成長方法の基盤になっています。具体的には、Splatoon2ではあるルールで上位300位以内、Apex Legendsでは上位1%(マスター)、Valorantでも上位0.1%(イモータル3)といったランクに到達することが出来ました。'
  },
  {
    title: '映画・動画鑑賞',
    text: '音楽鑑賞と同様に、価値観に触れることが出来る映画や動画も好きで、他にもYouTube等での解説動画や配信なども好きです。最近では特にe-sportsの試合観戦にハマっており、積み上げた努力と勝ちたいという思いのぶつかり合いやそれから生まれる高度な戦術などを見て感動を友人と共有しています。また、選手のプレーの意図やチームの戦略を考えることも面白く、「成功」の再現確率を各々がどう上げているかなどを分析しています。この趣味を通じて、プロの仕事に対する姿勢から学ぶことが多くありました。'
  }
]

export const works: Array<{
  title: string
  image: string
  heading: string
  period: string
  body: string[]
  details: string[]
  sections: Section[]
}> = [
  {
    title: 'portfolio(Website)',
    image: '/works/portfolio.png',
    heading: 'ポートフォリオサイト',
    period: '制作期間 : 3週間程',
    body: [
      'このポートフォリオサイトです。旧サイトではWeb系開発アルバイトの経験から Vue3 / Nuxt.js を用いて制作しており、GitHub と連携した Netlify 上で公開していました。',
      '旧サイトでは自分のことを知ってもらうために、制作物、研究、技術、趣味などをまとめていました。現在は旧サイトの挙動と雰囲気を残しながら、Astro / Tailwind CSS / Three.js を中心にした構成へ移行しています。'
    ],
    details: ['旧サイト: Vue3 / Nuxt.js / Netlify', '現サイト: Astro / TypeScript / Tailwind CSS / Three.js', 'トップビューでは Three.js を使い、マウスホイールやドラッグでモデルを操作可能'],
    sections: [
      {
        paragraphs: [
          'Home のファーストビューには Three.js を用いた3D表現を入れ、旧サイトでは Tres.js も利用していました。マウスホイールやドラッグによるカメラ操作、gsap を用いたアニメーション、研究ページでの MathJax による数式表示なども取り入れていました。',
          'レスポンシブデザイン、canvas 描画、描画速度、画像読み込み周りなどを調整しながら制作していました。個人開発のため、旧サイトではテストやリポジトリ分割までは行っていません。'
        ],
        images: ['/works/portfolio_img1.png']
      },
      {
        title: '更新履歴',
        paragraphs: [
          '2025/09/07 : Home 画面の研究モデルの更新と全体的な修正。',
          '2025/04/06 : コンテンツ内容、詳細表示、挙動などの更新。',
          '2025/04/05 : ノートPC幅でのレスポンシブ表示を修正。'
        ]
      }
    ]
  },
  {
    title: 'MinDiger(Game)',
    image: '/works/mindiger.png',
    heading: 'MinDiger',
    period: '制作期間 : 4,5ヶ月程 / 大学3年夏頃',
    body: [
      '大きめのゲームを一度作ってみたいと思い、2人のイラスト担当と一緒に Game Creator 甲子園 2022 に応募するため制作した2D探索ゲームです。',
      '私はプログラミング、ゲーム企画、進捗管理、チームリーダーを担当しました。各メンバーのスケジュールの兼ね合いなどでコンテスト期間内に完成させることはできませんでしたが、ゲーム開発やリーダーとしての経験を多く得られました。'
    ],
    details: ['GameMaker Studio / GML', '2Dローグライク風探索ゲーム', 'パーリンノイズとシェーダーによる地面表現', 'チーム制作の企画・進行管理'],
    sections: [
      {
        images: ['/works/mindiger.png', '/works/mindiger/under1.png']
      },
      {
        title: '1. 開発初期',
        paragraphs: [
          '最初は、以前から作りたいと思っていた2Dローグライク風のゲームを提案しました。ポケモン不思議のダンジョン、Minecraft、勇者のくせに生意気だ。などを参考にしながら、制作開始から1ヶ月ほどはゲーム内容について話し合いました。',
          'テーマとして「冒険」を置き、プレイヤーが「この行動をしたらどうなるのか」という好奇心から仮説を立て、試してみることで予想通り・予想外の結果を見つけられる体験を目指しました。',
          'Rolling Snow の経験から UI は直感的に分かりやすいものを強く意識しました。イラスト担当の一人が UI を作りたいと言ってくれたため、参考資料やリソースの探し方を共有しながら調整し、かなり良い UI にできたと思います。'
        ],
        images: ['/works/mindiger/start1.png', '/works/mindiger/start2.png', '/works/mindiger/start3.png', '/works/mindiger/start4.png', '/works/mindiger/start5.png', '/works/mindiger/UI1.png', '/works/mindiger/UI2.png', '/works/mindiger/UI3.png', '/works/mindiger/UI4.png', '/works/mindiger/UI7.png', '/works/mindiger/UI8.png', '/works/mindiger/UI5.png', '/works/mindiger/UI6.png']
      },
      {
        title: '2. 地面の模様の実装とグラフィック',
        paragraphs: [
          '初期はマップタイルを用いて地面を表現していましたが、自然な地面の模様を作ることが難しく、規則的なパターンになりすぎました。手作業でマスクを描く方法も考えましたが、工数が大きくなりすぎるため別の方法を探しました。',
          'そこで Minecraft の地形生成のようにパーリンノイズを使い、0から255の2次元値を生成し、その値の区間に応じてシェーダーで色を置き換えることで地面の模様を作りました。',
          'この方法により自然な模様を自動生成でき、イラスト担当の負担も減らせました。ダンジョン内の床模様も同様に自動生成し、単調さを減らしました。',
          'また、ダンジョンの暗さや視野を変数で調整できるようにし、たいまつの明かりのようなシェーダーも実装しました。これにより、ゲームらしい雰囲気を出せるようになりました。'
        ],
        images: ['/works/mindiger/ground1.png', '/works/mindiger/ground2.png', '/works/mindiger/story.png', '/works/mindiger/ground3.png', '/works/mindiger/ground4.png', '/works/mindiger/ground5.png', '/works/mindiger/ground7.png', '/works/mindiger/ground6.png']
      },
      {
        title: '3. ロード待機',
        paragraphs: [
          'ストーリーモードの街マップに移動する際、読み込みが終わるまで画面が固まってしまう問題がありました。そのため、読み込み完了までローディング画面を表示する処理を追加しました。',
          '後から、忘れ物などで隣接マップへ戻るたびに毎回ロードが入るとUXが悪いと考え、直前に遷移したマップの情報をキャッシュしておくことで、隣接した移動では読み込みを挟まないようにしました。'
        ],
        images: ['/works/mindiger/loadgif.gif']
      },
      {
        title: '4. 敵とダンジョン',
        paragraphs: ['旧サイトでは「記載中...」としていた項目です。']
      }
    ]
  },
  {
    title: 'NHK robot contest',
    image: '/works/robocon.png',
    heading: 'NHKロボットコンテスト',
    period: '制作期間 : 2ヶ月程 / 大学2年秋頃',
    body: [
      '大学の知人から誘われ、NHKロボコンに向けたサークルのソフトウェア班に参加しました。高専時代の友人がロボコンをしていたこともあり、もともと興味がありました。',
      'ロボットの画像認識と、競技シミュレーターの制作を担当しました。'
    ],
    details: ['YOLOv5 / TensorFlow Lite', 'Raspberry Pi / Jetson', 'ROS / Gazebo / rviz', '競技用のボール認識とルート検討用シミュレーター'],
    sections: [
      {
        title: '1. ロボットの画像認識',
        paragraphs: [
          '競技で使うサッカーボールを認識する必要があったため、最初はPCとWebカメラを用いて YOLOv5 で画像認識を行いました。学習画像を用意し、PC上ではかなり高い精度で検出できました。',
          'しかし、実際にロボットに載せるカメラは Raspberry Pi カメラモジュールであり、Raspberry Pi 上では YOLO の fps が要求を満たしませんでした。必要だったのは、限られた計算資源の中で 4から6fps 程度、かつ 80%以上の精度で認識することでした。',
          '軽量な YOLO のバリエーションなども試しましたが、最終的には TensorFlow Lite を用いました。既存のサンプルを参考にモデルやコードを変更し、量子化も行うことで、Raspberry Pi 上で約4fps、80%以上の精度を達成しました。',
          'その後、チームとして 10fps 以上、90%以上の精度、より高い安定性が欲しいという要望が出たため、認識用モジュールは Raspberry Pi から Jetson に変更されました。結果的にこの作業はそのまま使われませんでしたが、限られた環境で機械学習モデルを動かす良い経験になりました。'
        ],
        links: [{ label: 'TensorFlow Lite Object Detection reference', url: 'https://github.com/EdjeElectronics/TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi/tree/master' }],
        images: ['/works/robocon/ball1.png', '/works/robocon/ball2.png', '/works/robocon/detect1.png']
      },
      {
        title: '2. 競技シミュレーター',
        paragraphs: [
          '別のソフトウェア班メンバーが競技用シミュレーターを必要としていたため、ROS を用いてシミュレーターを作りました。ロボット工学の知識はあまりなく、Linux や WSL の環境構築にも苦労しましたが、rviz や Gazebo に触れながら制作しました。',
          '青い扇形の部分はカメラの検出範囲を表しており、仮想的な箱型ロボットに対してルート設計を試せるようにしました。rostopic で操舵を制御でき、別ターミナルからコマンドを送って動かせるようにしていました。'
        ],
        images: ['/works/robocon/sim1.png', '/works/robocon/sim2.png']
      }
    ]
  },
  {
    title: 'CCCeB(Programing Contest)',
    image: '/works/procon.png',
    heading: '高専プロコン',
    period: '制作期間 : 2,3ヶ月程 / 高専4年',
    body: [
      '第30回全国高専プログラミングコンテストに向けて制作した教育支援アプリ「CCCeB」です。本選では敢闘賞を受賞しました。',
      '5人チームで制作し、私はネットワーク部分以外のプログラミング、プログラム班リーダー、全体の副リーダー、審査員や来場者への発表などを担当しました。'
    ],
    details: ['React Native / Expo', '5人チームでの開発', '第30回全国高専プロコン本選 敢闘賞', 'プログラム班リーダー・副リーダー'],
    sections: [
      {
        paragraphs: [
          '当時所属していた部活動で、外部コンテストへの参加文化が少ないと感じていました。挑戦する文化を作りたいと思い、メンバーを集め、先生にも相談して参加に向けて動きました。',
          '開発はプログラム、プロジェクター側(Raspberry Pi など)、サーバー側に分かれて進めました。私はプログラム班のリーダーとして React Native と Expo を初めて本格的に触り、C言語やJavaとは違う開発に苦労しながらも、深夜までデバッグして学びました。',
          'この経験から、必要な技術は必要になった時に学んで身につければよい、技術はあくまで目的のための手段である、という感覚を得ました。'
        ],
        links: [
          { label: '熊本高専 受賞記事', url: 'https://kumamoto-nct.ac.jp/award/2019/10/20191017a/' },
          { label: '第30回高専プロコン 課題部門資料', url: 'https://www.procon.gr.jp/wp-content/uploads//2019/10/df5dd5f98e2d4af3b822c6ad919b965e.pdf' }
        ],
        images: ['/works/procon/pic1.png']
      }
    ]
  },
  {
    title: 'Android App(Intern)',
    image: '/works/intern.png',
    heading: 'Androidアプリ開発インターンシップ',
    period: '制作期間 : 2週間 / 高専4年',
    body: [
      '高専4年のインターンシップで、SDNA の Android アプリ開発に参加しました。車の中で使うモバイルアプリというテーマで、4人チームで2週間の開発を行いました。',
      '私はチームリーダーとして、要件定義、設計、開発、テスト、運用、最終発表までの流れを経験しました。'
    ],
    details: ['Kotlin / Android', '4人チームのリーダー', 'GitLab を用いた開発管理', 'BPM解析処理の実装'],
    sections: [
      {
        paragraphs: [
          'チームリーダーとして、各メンバーがやりたいことや得意なこと、モチベーションを聞きながら作業を割り振り、困った時にすぐ相談できる雰囲気を作ることを意識しました。',
          'BPM解析の部分は難しく苦労しましたが、最終的には実装でき、社員の方から「チャレンジングなところを攻めるな」と言っていただきました。最終発表も上手くいき、社員の方や人事の方からも評価していただきました。',
          '毎日の終わりに KPT(Keep / Problem / Try) をホワイトボードに書いて振り返り、進捗や問題を話し合ったことが特に印象に残っています。リーダーとして責任を持つこと、コミュニケーションを取ること、難しい部分を自分が引き受けてチームを支えることの大切さを学びました。'
        ],
        images: ['/works/intern/intern5.png', '/works/intern/intern6.png', '/works/intern/intern0.JPG', '/works/intern/intern1.png', '/works/intern/intern2.png', '/works/intern/intern3.png', '/works/intern/intern4.png']
      }
    ]
  },
  {
    title: 'Rolling Snow(Game)',
    image: '/works/rs.png',
    heading: 'Rolling Snow',
    period: '制作期間 : 1週間 / 高専2年',
    body: [
      '高専2年の頃、ゲーム制作部として Unity インターハイに応募するために制作したゲームです。Processing や Java でのゲーム制作経験はありましたが、3Dゲーム制作は初めてで、締切まで1週間ほどしかない中で挑戦しました。',
      '雪玉を転がしてゴールまでの時間を競うゲームで、雪玉は転がるほど大きくなり、操作が難しくなります。運動エネルギーが大きくなるため壁に当たった時の跳ね返りも大きくなり、雪玉が壊れるとゲームオーバーになります。'
    ],
    details: ['Unity', '短期間での3Dゲーム制作', 'ユーザーテストによる操作感改善', 'Unityインターハイ一次審査通過'],
    sections: [
      {
        paragraphs: [
          '雪玉が大きくなるほど操作が難しくなる面白さを狙って設計しました。Unity インターハイでは一次審査を通過しましたが、最終審査には進めませんでした。審査員の方からは、操作が難しく、楽しさや爽快感が足りないというコメントをいただきました。',
          'この経験から、自分が設計した面白さがそのまま良いUXになるとは限らないことを学びました。',
          'その後、学祭で販売するために、ゲームが得意な人・苦手な人の両方にテストしてもらいました。最初のステージを苦手な人でもクリアしやすいように調整し、説明書を読まなくても遊べるよう UI も改善しました。結果として、「操作が楽しい」「スピード感が爽快」といった感想ももらえました。'
        ],
        images: ['/works/rs.png']
      }
    ]
  },
  {
    title: 'others',
    image: '/works/others.png',
    heading: '普段の開発など',
    period: '制作期間 : 全期間',
    body: [
      'Works に載せている大きめの制作以外にも、理解を深めるために小さなプログラムを作っています。',
      '制作物から得た知識は体系的でないことも多いため、普段の開発では技術や数理的な考え方を練習する目的で、短い実験やゲームを作ることがあります。'
    ],
    details: ['Processing / Java / C++', '当たり判定やクラス設計の練習', 'ベクトル場など数理的な動きの実験', '小規模ゲーム制作'],
    sections: [
      {
        title: '1. 弾幕ゲーム',
        paragraphs: [
          '高専1年の頃に作った簡単な弾幕ゲームです。Processing を用いて、Java の class の使い方を練習しました。弾の計算を通じて三角関数や円の当たり判定も練習しました。'
        ],
        images: ['/works/others/danmaku1.png', '/works/others/danmaku2.png']
      },
      {
        title: '2. BoundingPronama',
        paragraphs: [
          '高専1年の頃、先輩から「プロ生ちゃん」を使ったゲームコンテストの話を聞き、練習として参加しました。キャラクターを選択して上にジャンプしていくシンプルなゲームで、キャラクターごとに二段ジャンプやロングジャンプなどの性能差を付けました。',
          'Processing ではなく Java で一から作ったため、ライブラリなしでのゲーム制作に苦労しました。継承やオーバーライドの練習にもなりました。'
        ],
        images: ['/works/others/bp1.png', '/works/others/bp2.png', '/works/others/bp3.png']
      },
      {
        title: '3. わらしべ長者ゲーム',
        paragraphs: [
          '高専1年の頃に作った、アイテムをキャラクターに渡すと別のアイテムと交換してもらえるゲームです。昔遊んだ「クター」のミニゲームをもとに作りました。',
          'この頃は、なるべく綺麗なコードを書くこと、マジックナンバーを減らすこと、名前を分かりやすくすることを意識していました。後に Processing 版も作り、UI を改善しました。'
        ],
        images: ['/works/others/warashibe1.png', '/works/others/warashibe2.png', '/works/others/warashibe3.png', '/works/others/warashibe4.png', '/works/others/warashibe5.png', '/works/others/warashibe6.png']
      },
      {
        title: '4. 時間変動するベクトル場の実験',
        paragraphs: [
          '高専2年頃に C++ で行った実験です。場所ごとのベクトルが時間で変化していれば、ゲーム内の動きなどを簡単に作れるのではないかと考えて作りました。研究で扱うベクトル場に近い概念を、自分なりに思いついて試していたことが印象に残っています。'
        ],
        images: ['/works/others/vector.gif']
      },
      {
        title: '5. 早押し対決ゲーム',
        paragraphs: [
          '高専3年の頃、友人と学校で遊ぶために作った「刹那の見斬り」のような居合ゲームです。友人に絵を描いてもらい、Processing で1日ほどで作りました。マウスの左クリックと右クリックで2人対戦できます。'
        ],
        images: ['/works/others/setsuna1.png', '/works/others/setsuna2.png', '/works/others/setsuna4.png', '/works/others/setsuna3.png']
      },
      {
        title: '6. 記載中...',
        paragraphs: ['旧サイトでは「記載中...」としていた項目です。']
      }
    ]
  }
]

export const researchTopics: Array<{
  title: string
  heading: string
  image: string
  body: string
  sections: Section[]
}> = [
  {
    title: '力学系とは',
    heading: '力学系理論',
    image: '/origami/result2.jpg',
    body: 'このページでは、研究分野である力学系理論について簡単に説明します。',
    sections: [
      {
        paragraphs: [
          String.raw`力学系理論とは、時間発展により変化するものを対象とする数学の分野で、原子サイズから惑星サイズの運動、流体、化学反応、脳波や睡眠などのリズム、人口の変動など様々な現象を力学系として表すことができます。`,
          String.raw`具体的には、\(\mathbb{R}^{n}\)やその開集合のような適当な空間を \(X\)、\(t\) に依らない写像 \(\boldsymbol{f}: X \to X\) について、\[\frac{d\boldsymbol{x}}{dt}=\boldsymbol{f}(\boldsymbol{x}),\quad \boldsymbol{x}\in X\] を自励的な連続力学系と呼びます。`,
          String.raw`私の研究では、上の式を \(\boldsymbol{x}_{n+1}=\boldsymbol{f}(\boldsymbol{x}_{n}),\ (n=0,1,2,\ldots)\) のように離散的に表した「離散力学系」を対象としています。`,
          String.raw`離散力学系において、初期点 \(\boldsymbol{x}_{0}\) を定めると写像 \(\boldsymbol{f}\) により点列 \(\{\boldsymbol{x}_{0}, \boldsymbol{x}_{1}, \boldsymbol{x}_{2}, \ldots\}\) が得られ、これを軌道と呼びます。力学系の研究では微分方程式そのものを解くことよりも、軌道や軌道の族の定性的な性質を調べることが多くあり、「相空間」自体や全軌道の概略を相空間上に示した「相図」が重要になってきます。今ではカオス理論や分岐現象、安定性の解析など、力学系の軌道の性質を調べる研究が広く行われています。`
        ],
        videos: ['xSwN9b2oQ40', 'qKQt3-ABw7g']
      }
    ]
  },
  {
    title: '折り紙と力学系',
    heading: '折り紙写像と離散力学系',
    image: '/origami/tess.png',
    body: '折り紙構造を数理モデルとして扱い、折り目や幾何条件から写像を作ることで、変形の振る舞いを力学系として調べています。',
    sections: [
      {
        paragraphs: [
          String.raw`折り紙は日本人に馴染み深いもので、実は様々な研究が行われています。例えば、宇宙に飛ばす人工衛星のパネルには「ミウラ折り」と呼ばれる折り方が用いられていたり、空き缶を潰しやすい形のダイヤモンド・パターンがあったりなど身近な物へ応用されています。`,
          String.raw`今回の研究では、人工血管などへの応用が期待されている「なまこ折り」と呼ばれる折り方について、展開図とそれを上下繋げ、折り込んで出来る立体を考えます。`
        ],
        links: [
          { label: '折り紙の研究例', url: 'https://www.nippon.com/ja/currents/d00161/' },
          { label: '人工血管などへの応用例', url: 'https://sdgs.hokudai.ac.jp/approach-to-sdgs/interview/itw-6946/' }
        ],
        images: ['/origami/tess.png', '/origami/w1.png', '/origami/dr.png']
      },
      {
        paragraphs: [
          String.raw`図中で緑色で示されている部分は1つの「モジュール」と呼ばれる部分で、黄色で示された部分はモジュールを縦に \(N\) 個並べた部分です。なまこ折りで出来る立体は波状の円柱形になるなど非自明な性質があり、この力学系を考えます。`,
          String.raw`黄緑色の1モジュールについて、モジュール内部のジグザグと立体上のジグザグを対応させ、立体上のジグザグの一部を2変数 \((d,\rho)\) で表します。回転対称性があるため、この一部の情報が立体のジグザグの情報を持っています。`,
          String.raw`赤、ピンク、青、赤のように1モジュール分のジグザグからジグザグへの写像を \(\boldsymbol{M}(d,\rho)\) として定め、これを折り紙写像と呼ぶことにします。すなわち、1モジュールに対して定まる \[\boldsymbol{M}:(d_m,\rho_m)\mapsto(d_{m+1},\rho_{m+1})\] という離散力学系を考えます。`
        ],
        images: ['/origami/ex1.png', '/origami/result2.jpg', '/origami/pd_shapes1.png']
      },
      {
        paragraphs: [
          String.raw`相図は格子状にいくつか初期点 \((d_0,\rho_0)\) を取り、写像 \(\boldsymbol{M}(d,\rho)\) によって得られる軌道を各色で表しています。それぞれの色の軌道は、なまこ折りの立体と対応しています。`,
          '例えば、研究のように上下は繋がっていませんが、折り紙を折ったシミュレーション結果を見ると、最初の円柱形は相図でいう点や楕円軌道と対応しており、反り返りだしたときの挙動が上下を横断する直線形と対応しています。'
        ],
        videos: ['4up8zHOO_Go']
      }
    ]
  },
  {
    title: 'KAM定理',
    heading: 'KAM定理',
    image: '/dyn/pic1.jpg',
    body: 'KAM定理は、可積分系において存在していた不変曲線(トーラス)が摂動を受けても多く生き残ることを主張する定理です。',
    sections: [
      {
        paragraphs: [
          String.raw`KAM定理とは、Kolmogorov、Arnol'd、Moserの3人の研究者から頭文字を取った定理で、可積分系において存在していた不変曲線(トーラス)が摂動を受けても多く生き残ることを主張する定理です。`,
          String.raw`例として、\[
x_{m+1}=x_m+\varepsilon V(x_m),\quad
y_{m+1}=y_m+x_{m+1}
\] で定義される標準写像(Standard Map)を考えます。ここで \((x_m,y_m)\in\mathbb{T}^2\)、\(\varepsilon>0\) を摂動パラメータ、\(V(x)\) を解析的な関数とします。`,
          String.raw`\(V(x)=\sin x\) としたとき、\(\varepsilon=0\) の上下を横断する直線が、\(\varepsilon\) を大きくするにつれて少なくなっていきます。しかし \(\varepsilon\) が十分小さいときには上下を横断する曲線が生き残っており、これがKAM定理の「不変曲線が摂動を受けても多く生き残る」主張の部分になります。`
        ],
        images: ['/dyn/pic1.jpg', '/dyn/pic2.jpg', '/dyn/pic3.jpg', '/dyn/pic4.jpg', '/dyn/pic5.jpg', '/dyn/pic6.jpg']
      },
      {
        paragraphs: [
          String.raw`標準写像のような保存系、つまり写像のヤコビ行列式が1となる力学系では、不変曲線の破壊や楕円状の曲線島の形成、\(\varepsilon\) を大きくしたときの砂粒のようなカオスの海が特徴的に見られます。`,
          String.raw`力学系では不変集合ごとに系を分け、それぞれの構造を調べることで元の力学系の構造を調べることができます。不変曲線は不変集合を区切るため、KAM定理は系全体の数理構造を知る上で重要です。`,
          String.raw`保存系における写像 \(f:\mathbb{T}^{n}\times\mathcal{U}\to\mathbb{T}^{n}\times\mathcal{U}\) が母関数 \(S(\boldsymbol{\theta},\boldsymbol{I}')\) により \(\boldsymbol{I}=\partial S/\partial\boldsymbol{\theta}\)、\(\boldsymbol{\theta}'=\partial S/\partial\boldsymbol{I}'\) と与えられているとします。`,
          String.raw`母関数が \[
S(\boldsymbol{\theta},\boldsymbol{I}';\varepsilon)=
\langle\boldsymbol{\theta},\boldsymbol{I}'\rangle+S_0(\boldsymbol{I}')+\varepsilon S_1(\boldsymbol{\theta},\boldsymbol{I}';\varepsilon)
\] の形で与えられ、非退化条件 \(\det(\mathrm{Hess}\ S_0)\neq0\) が成立し、\(\boldsymbol{\omega}=\partial S_0/\partial \boldsymbol{I}'(\boldsymbol{I}_0)\) がディオファントス条件を満たすならば、十分小さい摂動パラメータ \(\varepsilon>0\) に対して \(f\) にも不変曲線(トーラス)が存在する、というのがKAM定理の主張です。`
        ]
      }
    ]
  },
  {
    title: '研究結果',
    heading: '研究結果',
    image: '/origami/result5.jpg',
    body: '相図や軌道の数値計算を通じて、折り紙写像の保存構造や散逸系への拡張を調べています。',
    sections: [
      {
        paragraphs: [
          String.raw`離散力学系として定式化した折り紙写像 \(\boldsymbol{M}\) について、\(N\to\infty\) としたとき、ある \(d\) の関数 \(\xi(d)\) を用いて \[\lim_{N\to\infty}\boldsymbol{M}(d,\rho)=(d,\rho+\xi(d))\] と書けることが計算していくと分かりました。`,
          String.raw`これはKAM定理のページで紹介した標準写像の形と似ており、折り紙写像ではモジュール数 \(N\) が摂動パラメータ \(\varepsilon\) と関係していることが分かります。実際に計算すると \(\varepsilon=N^{-1}\) となっています。`,
          String.raw`この計算結果から折り紙写像にもKAM定理を適用することができ、非退化条件 \(\partial \xi/\partial d\neq0\) を満たし、\(\omega=\xi(d_0)\) がディオファントス条件を満たすならば、折り紙写像 \(\boldsymbol{M}\) にも十分大きい \(N\) について不変曲線が多く存在することを理論的に証明しました。`
        ],
        images: ['/origami/result1.jpg', '/origami/result2.jpg', '/origami/result3.jpg', '/origami/result4.jpg', '/origami/result5.jpg', '/origami/result6.jpg']
      },
      {
        paragraphs: [
          String.raw`現在はより一般的な系や、散逸的な折り紙の系にKAM定理を適用することで、数理構造とそれから得られる折り紙の研究を進めています。例えば、写像の形が \(N\to\infty\) としたとき \[\lim_{N\to\infty}\boldsymbol{M}(d,\rho)=(\lambda d+\mu,\rho+\xi(d))\] となるような折り紙を考えています。`,
          String.raw`\(\mu=0\) のときの相図を見ると、十分 \(N\) が大きいとき、点アトラクターが消え、\(d=0\) でアトラクター、つまり軌道が吸い込まれている領域が発生しています。`
        ],
        images: ['/origami/pd1_1.jpg', '/origami/pd1_2.jpg', '/origami/pd1_3.jpg', '/origami/pd1_4.jpg', '/origami/pd1_5.jpg', '/origami/pd1_6.jpg']
      },
      {
        paragraphs: [
          String.raw`しかし、\(d=0\) で写像はそれ以上軌道を生成出来ないため、この相図はあまり有用とは言えません。そこで \(\mu\) を上手く変更することで、このアトラクターの位置を変えることができます。`,
          String.raw`以下は \(\mu=0.05\) のときの相図です。この \(\mu\) は折り紙のモジュール間に追加した構造と対応しており、水色部分が与える影響等を散逸系におけるKAM定理(KAM Theory for Conformally Symplectic Systems)を用いて研究しています。`
        ],
        images: ['/origami/pd2_1.jpg', '/origami/pd2_2.jpg', '/origami/pd2_3.jpg', '/origami/pd2_4.jpg', '/origami/pd2_5.jpg', '/origami/pd2_6.jpg', '/origami/tess1.png']
      }
    ]
  }
]
