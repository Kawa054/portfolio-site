import type { ResearchTopic } from './types'

export const researchTopics: ResearchTopic[] = [
  {
    title: '力学系理論',
    heading: '力学系理論',

    sections: [
      {
        paragraphs: [
          String.raw`力学系理論とは、時間発展により変化するものを対象とする数学の分野で、原子サイズから惑星サイズの運動、流体、化学反応、脳波や睡眠などのリズム、人口の変動など様々な現象を力学系として表すことができます。`,
          String.raw`具体的には、\(\mathbb{R}^{n}\)やその開集合のような適当な空間を \(X\)、\(t\) に依らない写像 \(\boldsymbol{f}: X \to X\) について、\[\frac{d\boldsymbol{x}}{dt}=\boldsymbol{f}(\boldsymbol{x}),\quad \boldsymbol{x}\in X\] を自励的な連続力学系と呼びます。難しく感じるかもしれませんが、要は\( \boldsymbol{f} \)が決まったルールみたいなもので、そのルールで状態が変わっていくくらいの理解で大丈夫です。`,
          String.raw`私の研究では、上の式を \(\boldsymbol{x}_{n+1}=\boldsymbol{f}(\boldsymbol{x}_{n}),\ (n=0,1,2,\ldots)\) のように離散的に表した「離散力学系」を対象としています。離散力学系において、初期点 \(\boldsymbol{x}_{0}\) を定めると写像 \(\boldsymbol{f}\) により点列 \(\{\boldsymbol{x}_{0}, \boldsymbol{x}_{1}, \boldsymbol{x}_{2}, \ldots\}\) が得られ、これを軌道と呼びます。`
        ],
        figures: [
          {
            src: '/dyn/discrete-dynamical-system-phase-portrait.png',
            alt: '相空間Xの中で、初期点x0から写像fを繰り返してx1、x2、x3へ進む赤い軌道と、色分けされた複数の閉じた不変曲線、楕円型固定点を示した保存的な離散力学系の概念図',
            caption: '赤：注目する軌道　各色：異なる初期点からの軌道'
          }
        ],
        paragraphsAfterFigures: [
          '力学系の研究では微分方程式そのものを解くことよりも、軌道や軌道の族の定性的な性質を調べることが多くあり、「相空間」自体や全軌道の概略を相空間上に示した「相図」が重要になってきます。今ではカオス理論や分岐現象、安定性の解析など、力学系の軌道の性質を調べる研究が広く行われています。',
          '以下は、力学系理論でよく知られる三体問題やカオスについて、分かりやすく解説した外部の動画です。力学系のイメージをつかむ際の参考として、ぜひご覧ください。'
        ],
        videos: ['xSwN9b2oQ40', 'qKQt3-ABw7g']
      }
    ]
  },
  {
    title: '折り紙と力学系',
    heading: '折り紙と離散力学系',

    sections: [
      {
        paragraphs: [
          [
            '折り紙は日本人に馴染み深いもので、実は',
            { label: '様々な研究', url: 'https://www.nippon.com/ja/currents/d00161/' },
            'が行われています。例えば、宇宙に飛ばす人工衛星のパネルには「ミウラ折り」と呼ばれる折り方が用いられていたり、空き缶を潰しやすい形のダイヤモンド・パターンがあったりなど身近な物へ応用されています。'
          ],
          [
            '今回の研究では、',
            { label: '人工血管などへの応用', url: 'https://sdgs.hokudai.ac.jp/approach-to-sdgs/interview/itw-6946/' },
            'が期待されている「なまこ折り」と呼ばれる折り方を扱います。なまこ折りは、基本となる形を規則的に繰り返す「テセレーション」の一種です。ここでは、その展開図を上下につなげ、折り込んでできる立体を考えます。'
          ]
        ],
        figures: [
          {
            src: '/origami/tessellation-overview.png',
            alt: 'なまこ折りの展開図における1つのモジュールとN個のモジュール、それらを折り込んでできる立体の対応図'
          }
        ]
      },
      {
        blocks: [
          {
            type: 'paragraphs',
            paragraphs: [
              String.raw`図中で緑色で示されている部分は1つの「モジュール」と呼ばれる部分で、黄色で示された部分はモジュールを縦に \(N\) 個並べた部分です。なお、赤色と青色の線はそれぞれ山折りと谷折りとなっています。なまこ折りを非一様に折って出来る立体は、波状の円柱形になるといった非自明な性質があり近年研究が進んでいます。`
            ]
          },
          {
            type: 'figures',
            figures: [
              {
                src: '/origami/undulation.png',
                alt: 'なまこ折りを非一様に折ることで形成される、周期的に太さが変化する波状の円柱形構造'
              }
            ]
          },
          {
            type: 'paragraphs',
            paragraphs: [
              'では、なぜこの折り紙が力学系と結びつくのでしょうか。なまこ折りは、先ほど紹介したテセレーションのように、基本パターンを規則的に繰り返して構成されます。左から順に同じ折りの規則を適用すると、そのたびに立体の状態が一定のルールに従って移り変わります。この「現在の状態から次の状態を定める」という仕組みを写像として表すことで、なまこ折りを離散力学系として捉えることができます。'
            ]
          },
          {
            type: 'figures',
            figures: [
              {
                src: '/origami/origami-parametrization.png',
                alt: 'なまこ折りのジグザグ構造を抽出し、立体上の頂点と辺を角度thetaと変数Iでパラメータ表示する対応図'
              }
            ]
          },
          {
            type: 'paragraphs',
            paragraphs: [
              String.raw`1モジュールについて、モジュール内部のジグザグと立体上のジグザグを対応させ、立体上のジグザグの一部を2変数 \((\theta,I)\) で表します。回転対称性があるため、この一部の情報が立体のジグザグの情報を持っています。ピンク、水色、緑、ピンクのように1モジュール分のジグザグからジグザグへの写像を \(\boldsymbol{M}(\theta,I)\) として定め、これを折り紙写像と呼ぶことにします。すなわち、1モジュールに対して定まる \[\boldsymbol{M}:(\theta_m,I_m)\mapsto(\theta_{m+1},I_{m+1})\] という離散力学系を考えます。詳しい定義などは論文を参考にしてみてください。`
            ]
          }
        ]
      },
      {
        paragraphs: [
          String.raw`相空間上に初期点 \((\theta_0,I_0)\) を格子状に配置し、それぞれの初期点に折り紙写像 \(\boldsymbol{M}\) を繰り返し適用して得られる軌道を考えます。一例として、モジュール数を \(N=40\) とし、特定のパラメータを与えたときの相図を以下に示します。`
        ]
      }
    ]
  },
  {
    title: 'KAM定理',
    heading: 'KAM定理',

    sections: [
      {
        paragraphs: [
          String.raw`KAM定理とは、Kolmogorov、Arnol'd、Moserの3人の研究者から頭文字を取った定理で、可積分系において存在していた不変曲線(トーラス)が摂動を受けても多く生き残ることを主張する定理です。`,
          String.raw`例として、\[
I_{m+1}=I_m+\varepsilon\sin\theta_m,\quad
\theta_{m+1}=\theta_m+I_{m+1}
\] で定義される標準写像(Standard Map)を考えます。ここで \((\theta_m,I_m)\in\mathbb{T}^2\)、\(\varepsilon>0\) を摂動パラメータとします。`,
          String.raw`横軸を \(\theta_m\)、縦軸を \(I_m\) とすると、\(\varepsilon=0\) では相空間を左右に横断する直線が現れます。\(\varepsilon\) を大きくするにつれて一部の直線は崩れていきますが、\(\varepsilon\) が十分小さいときには左右を横断する不変曲線が多く生き残ります。これがKAM定理の「不変曲線が摂動を受けても多く生き残る」という主張に対応します。`
        ],
        galleryColumns: 3,
        widget: 'standard-map-experiment',
        images: [
          '/dyn/standard-map/epsilon-0-0.png',
          '/dyn/standard-map/epsilon-0-1.png',
          '/dyn/standard-map/epsilon-0-2.png',
          '/dyn/standard-map/epsilon-0-5.png',
          '/dyn/standard-map/epsilon-0-8.png',
          '/dyn/standard-map/epsilon-1-0.png'
        ]
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

    sections: [
      {
        paragraphs: [
          String.raw`離散力学系として定式化した折り紙写像 \(\boldsymbol{M}\) について、\(N\to\infty\) としたとき、ある \(I\) の関数 \(\xi(I)\) を用いて \[\lim_{N\to\infty}\boldsymbol{M}(\theta,I)=(\theta+\xi(I),I)\] と書けることが計算していくと分かりました。`,
          String.raw`これはKAM定理のページで紹介した標準写像の形と似ており、折り紙写像ではモジュール数 \(N\) が摂動パラメータ \(\varepsilon\) と関係していることが分かります。実際に計算すると \(\varepsilon=N^{-1}\) となっています。`,
          String.raw`この計算結果から折り紙写像にもKAM定理を適用することができ、非退化条件 \(\partial \xi/\partial I\neq0\) を満たし、\(\omega=\xi(I_0)\) がディオファントス条件を満たすならば、折り紙写像 \(\boldsymbol{M}\) にも十分大きい \(N\) について不変曲線が多く存在することを理論的に証明しました。`
        ],
        images: ['/origami/result1.jpg', '/origami/result2.jpg', '/origami/result3.jpg', '/origami/result4.jpg', '/origami/result5.jpg', '/origami/result6.jpg']
      },
      {
        paragraphs: [
          String.raw`現在はより一般的な系や、散逸的な折り紙の系にKAM定理を適用することで、数理構造とそれから得られる折り紙の研究を進めています。例えば、写像の形が \(N\to\infty\) としたとき \[\lim_{N\to\infty}\boldsymbol{M}(\theta,I)=(\theta+\xi(I),\lambda I+\mu)\] となるような折り紙を考えています。`,
          String.raw`\(\mu=0\) のときの相図を見ると、十分 \(N\) が大きいとき、点アトラクターが消え、\(I=0\) でアトラクター、つまり軌道が吸い込まれている領域が発生しています。`
        ],
        images: ['/origami/pd1_1.jpg', '/origami/pd1_2.jpg', '/origami/pd1_3.jpg', '/origami/pd1_4.jpg', '/origami/pd1_5.jpg', '/origami/pd1_6.jpg']
      },
      {
        paragraphs: [
          String.raw`しかし、\(I=0\) で写像はそれ以上軌道を生成出来ないため、この相図はあまり有用とは言えません。そこで \(\mu\) を上手く変更することで、このアトラクターの位置を変えることができます。`,
          String.raw`以下は \(\mu=0.05\) のときの相図です。この \(\mu\) は折り紙のモジュール間に追加した構造と対応しており、水色部分が与える影響等を散逸系におけるKAM定理(KAM Theory for Conformally Symplectic Systems)を用いて研究しています。`
        ],
        images: ['/origami/pd2_1.jpg', '/origami/pd2_2.jpg', '/origami/pd2_3.jpg', '/origami/pd2_4.jpg', '/origami/pd2_5.jpg', '/origami/pd2_6.jpg', '/origami/tess1.png']
      }
    ]
  }
]
