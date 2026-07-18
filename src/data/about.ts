import type { CareerEntry, Hobby, Paper, Presentation, SkillRow } from './types'

export const careerEntries: CareerEntry[] = [
  {
    period: '2016 - 2021',
    organization: '熊本高等専門学校',
    detail: '人間情報システム工学科',
    duration: '5年間',
    achievement: '卒業時席次1位',
    icon: 'school',
    iconClass: 'bg-[#0f766e] text-white',
    works: [
      { title: 'Rolling Snow', image: '/works/rs.png', href: '/works?work=5#content' },
      { title: 'Androidアプリ開発インターン', image: '/works/intern.png', href: '/works?work=4#content' },
      { title: 'CCCeB', image: '/works/procon.png', href: '/works?work=3#content' }
    ]
  },
  {
    period: '2021 - 2024',
    organization: '京都大学',
    detail: '工学部 情報学科 数理工学コース',
    duration: '3年間',
    note: '2年次編入',
    icon: 'university',
    iconClass: 'bg-zinc-900 text-white',
    works: [
      { title: 'NHKロボットコンテスト', image: '/works/robocon.png', href: '/works?work=2#content' },
      { title: 'MinDiger', image: '/works/mindiger.png', href: '/works?work=1#content' }
    ]
  },
  {
    period: '2024 - 2026',
    organization: '京都大学大学院',
    detail: '情報学研究科 数理工学コース',
    duration: '2年間',
    icon: 'graduate',
    iconClass: 'bg-[#b91c1c] text-white',
    works: [
      { title: 'ポートフォリオサイト', image: '/works/portfolio.png', href: '/works?work=0#content' },
      { title: '折り紙力学系の研究', image: '/origami/tess.png', href: '/research?topic=1#content' }
    ]
  },
  {
    period: '2026 - 現在',
    organization: '通信系大手企業',
    detail: 'Software Engineer',
    icon: 'work',
    iconClass: 'bg-[#0369a1] text-white',
    works: []
  }
]

export const qualifications = [
  '普通自動車第一種運転免許',
  '基本情報技術者',
  '応用情報技術者',
  'TOEIC 780点',
  '英検2級'
]

export const achievements = ['第30回全国高専プロコン本選 敢闘賞']

export const papers: Paper[] = [
  {
    date: '2026/06/24',
    venue: 'Chaos 36, 063139 (2026)',
    title: 'Invariant curves and the variational structure in tubular origami dynamical systems',
    url: 'https://doi.org/10.1063/5.0332738'
  }
]

export const presentations: Presentation[] = [
  {
    date: '2026/09',
    event: '日本応用数理学会',
    title: '管状折り紙力学系の変分構造と大域的カオス',
    planned: true
  },
  {
    date: '2025/09/04',
    event: '日本応用数理学会 2025年度 年会',
    title: '折り紙写像における不変曲線とアトラクターの存在について',
    planned: false
  },
  {
    date: '2025/01/12',
    event: 'WINTER ANNUAL CONFERENCE ON DYNAMICAL SYSTEMS 2024',
    title: 'The existence of invariant curves in Origami maps',
    planned: false
  },
  {
    date: '2024/09/16',
    event: '日本応用数理学会 2024年度 年会',
    title: '折り紙写像における不変曲線の存在について',
    planned: false
  }
]

export const skillRows: SkillRow[] = [
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

export const hobbies: Hobby[] = [
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
