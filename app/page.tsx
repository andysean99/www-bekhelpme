import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import StickyCTA from "@/components/StickyCTA";
import WorkCard from "@/components/WorkCard";
import Quote from "@/components/Quote";

const MAILTO = "mailto:bek8278278@gmail.com";
const BOOK_URL = "https://cal.com/bektsai/30min";

export default function Home() {
  return (
    <>
      <StickyCTA />

      {/* ───────────── ㊀ HERO ───────────── */}
      <header className="relative mx-auto flex min-h-[88vh] w-full max-w-[46rem] flex-col justify-center px-5 py-20 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Bekhelpme.com
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-7 text-balance font-serif text-[2rem] font-bold leading-[1.42] text-ink sm:text-[2.7rem] sm:leading-[1.36]">
            模型大家共用，
            <span className="whitespace-nowrap text-accent">脈絡只屬於你一家。</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 text-[1.0625rem] leading-[1.95] text-ink-soft sm:text-[1.1875rem]">
            當「擁有 AI」變得不值錢，真正值錢的，是它旁邊那個不會被商品化的東西——你公司專屬的判斷、數據、流程、客戶脈絡（context，公司獨有的來龍去脈）。我做的事，是把那個東西<strong className="font-bold text-ink">編譯進 AI</strong>。
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-6 font-sans text-sm font-medium tracking-wide text-ink-faint">
            — Bek Tsai（蔡奇峯）
          </p>
        </Reveal>
        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href={BOOK_URL} external>免費預約一場對齊的對話</CTAButton>
            <a
              href="#work"
              className="font-sans text-sm text-ink-faint underline-offset-4 hover:text-accent hover:underline"
            >
              或往下看：我怎麼想事情、做過什麼
            </a>
          </div>
        </Reveal>
      </header>

      <main className="mx-auto w-full max-w-[44rem] px-5 sm:px-6">
        <hr className="rule-soft" />

        {/* ───────────── ㊁ 為什麼是現在 ───────────── */}
        <section className="prose-letter py-16 sm:py-20">
          <Reveal>
            <h2>為什麼是現在</h2>
            <p>先講兩家公司。</p>
            <p>
              同一個產業，規模差不多。它們買的是同一批 AI、同一個 ChatGPT、同一套模型。一年後，一家把 AI 變成了印鈔機，另一家連一塊錢都擠不出來。
            </p>
            <p>
              今年一月，達沃斯。PwC 訪了四千多位 CEO，最常被引用的是一個數字：台灣 54% 的老闆說，導入 AI 一整年，沒帶來任何可衡量的成效。市場把它讀成一句結論——AI 被高估了。
            </p>
            <p>
              但同一份報告往裡翻幾頁，藏著那兩家公司的答案：把 AI 關鍵能力準備齊全的那群公司，營收成長是其餘公司的 <strong>2.4 倍</strong>。
            </p>
            <p>
              所以真正的問題，從來不是「AI 有沒有效」。同一個工具，誰都叫得到，價格還逐月在掉——為什麼它對一小群公司是印鈔機，對大多數一毛都擠不出來？
            </p>
            <p>
              答案不在 AI 裡。<strong>模型正在變成電力</strong>：便宜、隨處可得、彼此趨同。當「擁有 AI」不再值錢，值錢的就是它旁邊那個不會被商品化的東西。差距擴大的，從來不是「誰有 AI」，是「誰把自己的脈絡編譯進了 AI」。前者一週可得，後者要數年累積，而且每多跑一輪就更難被複製。
            </p>
            <p>
              多數公司買了模型，卻沒有可供模型運算的脈絡——<strong>編譯器有了，卻沒有原始碼。</strong>我做的，就是幫你把原始碼補上。
            </p>
          </Reveal>
        </section>

        <hr className="rule-soft" />

        {/* ───────────── ㊂ 為什麼是我 ───────────── */}
        <section className="prose-letter py-16 sm:py-20">
          <Reveal>
            <h2>為什麼是我</h2>
            <p>你大概想問：那你憑什麼？</p>
            <p>
              我不打算給你一張學歷清單。在 AI 把產出變便宜的時代，履歷上的頭銜誰都生得出來，能證明一個人的，只剩一件事：你做過什麼。
            </p>
            <p>
              那，我做過什麼。2014 年，我策劃、與騰訊財經合辦一場交易大賽，三個月聚集了 <strong>20 萬人</strong>參加。2015 年，我把一家公司從 <strong>3 個人，一年做到 150 人</strong>，每個月接近<strong>一億新台幣</strong>的營業額。同一段時間，我操盤的廣告投放，平均 <strong>ROAS 做到 1 比 20</strong>——花一塊、收回二十塊，整整維持<strong>四年</strong>。
            </p>
            <p>而這些，全發生在還沒有 AI 的年代。</p>
            <p>
              這套本事不是我發明的——我花五年上完、再用十年實戰，向一整排行銷大師（直效行銷、文案、漏斗到發售）學來，前後 17 位，學費砸了 200 萬以上；一門大師的課要十五萬，我上了十七個。說老實話，<strong>我頂多只用出了他們的三成</strong>——就做出了上面那些數字。
            </p>
            <p>
              現在是 AI 時代。同一套被驗證過的方法和工作流程，可以被自動化、用百倍千倍的速度運轉：不是測一兩個廣告，是同時測上百個、上千個——而團隊，比過去少掉一半的人。<strong>甚至一個人，就能做出過去 5 到 10 人團隊的收入與業績。</strong>
            </p>
            <p>
              我不是大師，我是誠實的翻譯者：把這套被時間驗證、不會退流行的判斷力，翻譯成 AI 時代你也接得住的語言。空口無憑——下面三件事，才是我真正請你拿來檢驗我的證據。
            </p>
          </Reveal>
        </section>
      </main>

      {/* ───────────── ㊃ 作品即 transaction ───────────── */}
      <section id="work" className="bg-paper-deep/30 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[48rem] px-5 sm:px-6">
          <Reveal>
            <h2 className="font-sans text-[1.6rem] font-black leading-tight text-ink sm:text-[2rem]">
              作品即 transaction
              <span className="mt-1 block font-serif text-base font-normal text-ink-faint sm:text-lg">
                交易，一筆可被檢驗的事
              </span>
            </h2>
            <p className="mt-5 max-w-[40rem] text-[1.0625rem] leading-[1.9] text-ink-soft sm:text-[1.125rem]">
              與其聽我形容自己，不如看三件我做過、而且願意連「哪裡會壞」都攤開講的事。
            </p>
          </Reveal>

          <div className="mt-10 space-y-7">
            <Reveal>
              <WorkCard
                kicker="作品一"
                title="Bek OS · FDE 前進部署"
                subtitle="Forward Deployed Engineer，前進部署工程師 — 第一個外部案"
                blocks={[
                  {
                    label: "這是什麼",
                    body: (
                      <>
                        我把一家設計服務業者的「老闆判斷」與「關鍵人經驗」，編譯成全隊查得到、用得上的 AI 系統。落地兩樣天天在跑的東西：老闆判斷力校準器（a、b 兩版都上線），員工把報價、提案、回覆先丟進去，拿到「通過／修改／上呈」（Pass／Revise／Escalate）的預審結果，再送到老闆面前；以及一個公司雲腦，把核心成員的真實判斷整理過閘後存起來，整隊查得到。不是擺著好看的展示，是核心隊伍日常在用。
                      </>
                    ),
                  },
                  {
                    label: "為何這樣做",
                    body: (
                      <>
                        因為這件事我做過一次，只是換了媒介。上面那家公司，我做的就是把一支業務團隊的銷售判斷拆解、標準化成全隊跑得動的流程——讓<strong>人均產值翻了十倍</strong>。這套校準器是同一個動作：把老闆腦中的判斷拆出來，變成新人也接得住的系統。所以我對外賣的是為結果負責的部署，不是賣一套聽不懂的「平台」；也因為我清楚瓶頸在哪，刻意先做判斷校準、不先做花俏的儀表板——中小企業最值錢的判斷，鎖在老闆和少數老兵腦中。
                      </>
                    ),
                  },
                  {
                    label: "什麼會壞",
                    body: (
                      <>
                        最脆的是技術前提：整套綁在員工端要裝對工具、雲端要同步，安裝對非技術員工不是零阻力，鏈斷一環就停。第二，採用有長尾：核心成員撐起大部分貢獻，邊緣的人還薄，「全公司在用」此刻更精確是「核心隊伍在用、邊緣待擴」。第三，知識萃取吃工具——員工訪談用錯 AI 就會脫軌。
                      </>
                    ),
                  },
                  {
                    label: "我學到什麼",
                    body: (
                      <>
                        我做過多年流程優化，這次又印證一次：工具選錯，再好的人也做不出好東西。所以我的紀律是先把規矩立好，再用真案子去逼出問題——不靠運氣，靠流程。
                      </>
                    ),
                  },
                  {
                    label: "早期成效（上線兩週）",
                    body: (
                      <>
                        最先出現的變化是溝通。員工的東西先過 AI 對過一輪，送到老闆面前時更成形，來回變少、對話更有效率，老闆花在低品質重複溝通上的時間開始下降——這正是這套部署的本意：不是把人換成 AI，是把老闆從重複溝通裡解放出來。這是兩週的早期體感，不是已結算的數字，可量化的前後差別仍在追蹤中。
                      </>
                    ),
                  },
                ]}
              />
            </Reveal>

            <Reveal>
              <WorkCard
                kicker="作品二"
                title="四天 AI 創業課"
                subtitle="站在巨人的肩膀上"
                blocks={[
                  {
                    label: "這是什麼",
                    body: (
                      <>
                        一門四個禮拜天、現場上課的課（NT$68,000，無限次複訓），把我向 17
                        位行銷大師學來的東西，用 AI
                        翻譯成你這週就接得住的版本。四天走完一條完整的線：第一天定位、第二天做漏斗素材、第三天把公域流量轉成私域名單、第四天發售演練。不是聽完很爽的觀念課，是四天親手把一門生意，從一個信念，長成一台會自己賺錢的引擎。
                      </>
                    ),
                  },
                  {
                    label: "為何這樣做",
                    body: (
                      <>
                        因為這套方法不是新的，也不是只有我用得動。早在 2007 到 2012
                        年，它就成就了一批老闆——其中有人做到月入百萬、月入千萬。四天課，是把這套被十幾年驗證過的成交邏輯，翻譯成
                        AI 時代你今天就能跑的版本。市面上多數 AI
                        課教工具，工具幾個月就過期；這套判斷力，被驗過幾十年。
                      </>
                    ),
                  },
                  {
                    label: "什麼會壞",
                    body: (
                      <>
                        這門課最吃的是「老闆本人願不願意動手」。我把路鋪好、把大師的東西翻譯好，但四天裡真正要長出引擎的，是你自己的生意、你自己的判斷——我不能替你做那部分。所以它對「想找一顆按鈕、按了就有客戶」的人不會有效；對願意親手走完四天、回去持續迭代的人才會複利。無限次複訓，是為這種人準備的。
                      </>
                    ),
                  },
                  {
                    label: "我學到什麼",
                    body: (
                      <>
                        我把它設計成四天走完一條完整的線、而不是拆成零散技巧，是因為我自己踩過——學了一堆單點技巧卻接不起來，等於沒學。無限次複訓也是刻意的：這套東西第一次聽懂、和真的做出來，中間隔著好幾次回來重看，我把那幾次也算進這堂課裡。
                      </>
                    ),
                  },
                  {
                    label: "成效",
                    body: (
                      <>
                        四天 AI 創業課首梯 2026 年 6 月 14
                        日開課、已在進行，下一梯 7
                        月；學員的完整成果還在結算中。下面的見證，來自真實上過課的早期學員，不誇大為已驗證數字。
                      </>
                    ),
                  },
                ]}
                link={{
                  href: "https://4days.bekhelpme.com",
                  label: "到 4days.bekhelpme.com 看課程",
                  external: true,
                }}
              />
            </Reveal>

            <Reveal>
              <WorkCard
                kicker="作品三"
                title="〈Context Divide：為什麼 AI 越便宜，差距越大〉"
                blocks={[
                  {
                    label: "這是什麼",
                    body: (
                      <>
                        這是一篇拆解一個被全台灣讀錯的數字的文章。達沃斯 PwC 調查說台灣 54%
                        的老闆覺得導入 AI
                        沒帶來可衡量成效，市場把它讀成「AI
                        被高估了」。文章主張它的意思剛好相反：同一批模型誰都叫得到，那
                        2.4 倍的差距不在 AI，在一家公司有沒有把自己編譯成 AI
                        跑得動的東西——編譯器有了，卻沒有原始碼。而且這道差距會擴大、不會收斂。
                      </>
                    ),
                  },
                  {
                    label: "為何這樣寫",
                    body: (
                      <>
                        我刻意不從「AI
                        很強、快用這些工具」開始，而是從一個大家都讀過、而且讀錯的數字翻起——因為要說服一個老闆，攻擊他沒看過的新東西沒用，鬆動他自以為懂的舊結論才有用。我也刻意不靠單一來源：PwC、MIT、McKinsey
                        三份各自獨立的數據疊起來，論點才不是我一個人的嘴。再搬兩段歷史（工廠電氣化、生產力悖論）和一家台灣公司（大江生醫的「生物挖礦」），是要讓讀者沒辦法說「那是矽谷的事」。
                      </>
                    ),
                  },
                  {
                    label: "寫它讓我想通了什麼",
                    body: (
                      <>
                        寫這篇逼我把兩件常被混在一起的事切開：「導入 AI」和「把你的脈絡編譯進
                        AI」。前者一週可得、是商品；後者要數年累積、是複利。切開的那一刻我才看清，我做的東西就站在這條線上——也才真正把自己產品存在的理由講準。
                      </>
                    ),
                  },
                ]}
                link={{
                  href: "https://articles.bekhelpme.com",
                  label: "到 articles.bekhelpme.com 讀全文",
                  external: true,
                }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[44rem] px-5 sm:px-6">
        {/* ───────────── ㊄ 從一個人的判斷，到一套系統 ───────────── */}
        <section className="prose-letter py-16 sm:py-20">
          <Reveal>
            <h2>從一個人的判斷，到一套系統</h2>
            <p>
              你大概注意到了：上面這些事，是同一個動作的不同樣子——把判斷拆出來、講清楚、編譯成別人接得住的東西。
            </p>
            <p>
              這也是 Bek OS（公司操作系統）在做的事。它把老闆的決策標準、關鍵人的防錯智慧、公司的流程與紅線，編譯成 AI 與人都讀得懂、查得到、會隨公司演化的經營脈絡——而且每條進系統的知識都要過晉升閘門（Promotion Gate，先過濾才入庫），治理優先（governance-first），寧可少、不要髒。
            </p>
            <p>
              你可能想：那我直接請一個會用 AI 又懂業務的人就好？——那是最慢的解。你只是把瓶頸從老闆換到他一個人身上。真正可控的路，是把判斷力外包成一套系統。
            </p>
          </Reveal>
        </section>
      </main>

      {/* ───────────── ㊅ offer ladder ───────────── */}
      <section id="start" className="bg-paper-deep/30 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[46rem] px-5 sm:px-6">
          <Reveal>
            <h2 className="font-sans text-[1.6rem] font-black leading-tight text-ink sm:text-[2rem]">
              你可以從哪裡開始
              <span className="mt-1 block font-serif text-base font-normal text-ink-faint sm:text-lg">
                由輕到重
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-6 max-w-[42rem] space-y-4 text-[1.0625rem] leading-[1.9] text-ink-soft sm:text-[1.125rem]">
              <p>
                我的目標很具體：<strong className="text-ink">協助 100 位老闆，用 AI 把收入做到三倍以上</strong>，成為這一波 AI 紅利的先行者。
              </p>
              <p>
                因為先動手的人，會先把脈絡的雪球滾起來；雪球一旦滾動，動能會自己把他和同行的距離越拉越開。先行者的優勢，從來不是「先有 AI」——是<strong className="text-ink">先把自己編譯進 AI</strong>。你可以是這 100 個裡的一個。
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {/* 先讀（免費） */}
            <Reveal>
              <div className="rounded-2xl border border-rule bg-paper/60 px-6 py-7 sm:px-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-sans text-lg font-black text-ink">先讀</h3>
                  <span className="font-sans text-sm font-bold text-accent">
                    免費
                  </span>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.85] text-ink-soft">
                  我把怎麼想這些事寫成文章，放在{" "}
                  <a
                    href="https://articles.bekhelpme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    articles.bekhelpme.com
                  </a>
                  。不用花一毛，先看我怎麼拆問題。
                </p>
              </div>
            </Reveal>

            {/* 半天工作坊 */}
            <Reveal>
              <div className="rounded-2xl border border-rule bg-paper/60 px-6 py-7 sm:px-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-sans text-lg font-black text-ink">
                    半天工作坊
                  </h3>
                  <span className="font-sans text-sm font-bold text-accent">
                    NT$5,000
                    <span className="ml-2 font-normal text-ink-faint">
                      （原價 NT$12,000，同公司二位同行）
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.85] text-ink-soft">
                  四小時，現場。帶走兩套可立即上手的 AI 武器（Bek 幫我 AI、Bek
                  阿卡西下載），和一套跟 AI 說話的方式。入門品，先試手感。
                </p>
                <div className="mt-5 space-y-4">
                  <Quote who="張哲倫 · 萬代南宮 前副總">
                    他把複雜到不行的 AI
                    系統工具，整理成兩個直接能用的系統，交到我們手上。用起來真的好像一個人請了十幾個專家幫我解答問題，而且非常快。這堂課，太值得了。
                  </Quote>
                  <Quote who="羅睿綸 · 上曜集團 董事長特助">
                    如果沒上過 Bek 的 AI 課，你不要跟我說你懂用 AI。他設計的工具直接讓我們上手，無形中省掉大量摸索的時間。要把 AI
                    的效益發揮到很高，沒有這種等級的老師帶，會非常困難。
                  </Quote>
                  <Quote who="潘欣怡">
                    Bek 老師兩小時的 AI 應用課真令我大開眼界！過去我常要把 AI
                    拉回現實、讓它聚焦、核實資料，來回耗費大量時間，這套方法都能迎刃而解，為我省下最貴的時間成本。我這個
                    AI 麻瓜有救了！
                  </Quote>
                  <Quote who="漢堡">
                    用老師寫的那個機器人、搭配拆步驟的提示詞，我寫出了處理公司銷售數據、即時判斷斷貨的
                    prompt，還有多種切角的短影音與銷售頁腳本。沒有它的輔助，我真的寫不出這些東西。
                  </Quote>
                </div>
              </div>
            </Reveal>

            {/* 四天課 */}
            <Reveal>
              <div className="rounded-2xl border border-rule bg-paper/60 px-6 py-7 sm:px-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-sans text-lg font-black text-ink">
                    四天 AI 創業課
                  </h3>
                  <span className="font-sans text-sm font-bold text-accent">
                    NT$68,000
                    <span className="ml-2 font-normal text-ink-faint">
                      （無限次複訓）
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.85] text-ink-soft">
                  <strong className="text-ink">再過一兩期，價格會往上調到 10 萬、15 萬、30 萬——現在進場，是最低的一梯。</strong>{" "}
                  詳情在{" "}
                  <a
                    href="https://4days.bekhelpme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    4days.bekhelpme.com
                  </a>
                  。四個禮拜天，親手把一門生意，從一個信念，長成一台會自己賺錢的引擎。
                </p>
                <div className="mt-5 space-y-4">
                  <Quote who="林建華 · 聯合治作 主持人（四天課學員）">
                    在 Bek 老師帶領的這四堂 AI
                    訓練裡，不只是工具介紹，而是從 AI
                    趨勢一路連結到商業運作、從戰術到戰略。他會為每一個團隊，量身打造專屬於他們商業模式的
                    AI
                    訓練與運用。最珍貴的是，學會怎麼把它真正用進每天的工作裡，甚至開始想像往後的事業，可以怎麼用更多
                    AI Agent（AI 代理程式）去推進。
                  </Quote>
                  <Quote who="Molly · 整合行銷企劃 · 聯合治作 doTsuwa（四天課學員）">
                    上課前，我們公司已經在用 ChatGPT、Gemini
                    處理客服、資料、社群素材——但一直停在「工具輔助」的層次。我知道它很強，卻不知道自己該怎麼真正用，甚至開始焦慮：是不是學太慢、是不是被
                    AI
                    牽著走。這堂課真正的轉變，是讓我重新理解——問題從來不在工具，而是在思考方式。老師讓我第一次意識到，AI
                    可以成為思考的延伸，而不只是執行工具。課程結束後，那種焦慮，慢慢變成一種「可以被陪伴前進」的安全感。
                  </Quote>
                </div>
              </div>
            </Reveal>

            {/* FDE — 主打 */}
            <Reveal>
              <div className="rounded-2xl border-2 border-accent/40 bg-accent/[0.04] px-6 py-8 sm:px-8 sm:py-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-sans text-xl font-black text-ink">
                    Bek OS · FDE 前進部署
                  </h3>
                  <span className="font-sans text-sm font-bold text-accent">
                    高階 · 需求洽談
                  </span>
                </div>
                <p className="mt-3 text-[1.0625rem] leading-[1.9] text-ink sm:text-[1.125rem]">
                  不是賣一套你聽不懂的平台，是部署一支為結果負責、會幫你把判斷變成系統的隊伍。<strong>這是我最想跟你談的一條。</strong>
                </p>
                <div className="mt-7">
                  <CTAButton href={BOOK_URL} external>免費預約一場對齊的對話</CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── ㊆ 聯絡 + footer ───────────── */}
      <section
        id="talk"
        className="mx-auto w-full max-w-[44rem] scroll-mt-8 px-5 py-20 text-center sm:px-6 sm:py-28"
      >
        <Reveal>
          <h2 className="font-sans text-[1.6rem] font-black leading-snug text-ink sm:text-[2rem]">
            想清楚你公司的原始碼<br className="hidden sm:block" />
            該怎麼編譯？
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.9] text-ink-soft sm:text-[1.125rem]">
            寄信給我，或預約一場對齊的對話。
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton href={BOOK_URL} external>免費預約一場對齊的對話</CTAButton>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-rule bg-paper-deep/40">
        <div className="mx-auto w-full max-w-[44rem] px-5 py-10 text-center sm:px-6">
          <p className="font-sans text-sm text-ink-soft">
            <a
              href={MAILTO}
              className="font-medium text-ink hover:text-accent"
            >
              bek8278278@gmail.com
            </a>
            <span className="mx-2 text-ink-faint">✦</span>
            <a
              href="tel:+886908278094"
              className="font-medium text-ink hover:text-accent"
            >
              0908 278 094
            </a>
          </p>
          <p className="mt-3 font-sans text-sm text-ink-faint">
            延伸：
            <a
              href="https://4days.bekhelpme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline-offset-4 hover:text-accent hover:underline"
            >
              四天課 4days.bekhelpme.com
            </a>
            <span className="mx-2">✦</span>
            <a
              href="https://articles.bekhelpme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft underline-offset-4 hover:text-accent hover:underline"
            >
              文章 articles.bekhelpme.com
            </a>
            <span className="mx-2">✦</span>
            <a
              href="/bek-open-brain"
              className="text-ink-soft underline-offset-4 hover:text-accent hover:underline"
            >
              Bek Open Brain
            </a>
          </p>
          <p className="mt-5 font-sans text-xs tracking-wide text-ink-faint">
            © 2026 Bekhelpme.com
          </p>
        </div>
      </footer>
    </>
  );
}
