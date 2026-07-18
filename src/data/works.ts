import type { Work } from './types'

export const works: Work[] = [
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

