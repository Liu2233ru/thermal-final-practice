window.HEAT_BANK = (window.HEAT_BANK || []).concat([
  {
    "id": "u-effusion-mixture-1",
    "family": "u-effusion-mixture",
    "type": "single",
    "points": 2,
    "stem": "同温容器里有 A、B 两种稀薄理想气体，二者分压相同，摩尔质量分别是 4 和 20 g/mol。容器有一个直径远小于自由程的小孔。刚打开小孔时，A 与 B 逸出粒子数率之比约是多少？",
    "options": [
      "\\(5\\)",
      "\\(2.2361\\)",
      "\\(1\\)",
      "\\(0.44721\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "小孔逸出由撞向孔口的分子通量决定，通量 \\(J=n\\bar v/4\\)。分压和温度均相同，所以两组分数密度相等。麦克斯韦平均速率在同温下正比于 \\(M^{-1/2}\\)，故逸出率比为 \\(\\sqrt{M_B/M_A}\\)。这里比较的是粒子数率，质量流率还要乘粒子质量。代入题给数值，结果为 \\(2.2361\\)。"
  },
  {
    "id": "u-wall-hit-count-1",
    "family": "u-wall-hit-count",
    "type": "single",
    "points": 2,
    "stem": "各向同性的气体分子数密度为 \\(1.2\\times10^{21}\\,\\mathrm{m^{-3}}\\)，平均速率为 320 m/s。取器壁上一块 \\(2\\times10^{-5}\\,\\mathrm{m^2}\\) 的面积，统计 0.04 s，预计发生的碰壁总次数约为多少？",
    "options": [
      "\\(3.072\\times10^{17}\\)",
      "\\(1.536\\times10^{17}\\)",
      "\\(3.84\\times10^{16}\\)",
      "\\(7.68\\times10^{16}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "撞壁只来自朝向器壁的半空间，计数还需乘速度的法向投影。对各向同性方向积分后，单位面积、单位时间的平均撞壁数是 \\(n\\bar v/4\\)。再乘面积与统计时长。代入题给数值，结果为 \\(7.68\\times10^{16}\\)。"
  },
  {
    "id": "u-free-path-survival-1",
    "family": "u-free-path-survival",
    "type": "single",
    "points": 2,
    "stem": "某平衡稀薄气体的分子平均自由程为 36 nm。近似把单位路程内的碰撞概率视为常数。一个分子自上次碰撞后至少再飞行 25 nm 而没有发生新碰撞的概率约为多少？",
    "options": [
      "\\(0.50065\\)",
      "\\(0.59016\\)",
      "\\(0.23693\\)",
      "\\(0.49935\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "若单位路程上碰撞概率近似恒定，未碰撞概率 \\(P(x)\\) 满足 \\(\\mathrm dP/\\mathrm dx=-P/\\lambda\\)，且 \\(P(0)=1\\)。因此 \\(P(x)=e^{-x/\\lambda}\\)。题目问存活概率，\\(1-P(x)\\) 才是发生碰撞的概率。代入题给数值，结果为 \\(0.49935\\)。"
  },
  {
    "id": "u-single-molecule-wall-force-1",
    "family": "u-single-molecule-wall-force",
    "type": "single",
    "points": 3,
    "stem": "一质量 \\(3\\times10^{-26}\\,\\mathrm{kg}\\) 的分子只沿长度为 2 cm 的容器的法向运动，速率为 360 m/s，在两端壁之间来回弹性反射。忽略其他分子，求这个分子对其中一端壁的时间平均作用力。",
    "options": [
      "\\(9.72\\times10^{-20}\\,\\mathrm N\\)",
      "\\(1.944\\times10^{-21}\\,\\mathrm N\\)",
      "\\(3.888\\times10^{-19}\\,\\mathrm N\\)",
      "\\(1.944\\times10^{-19}\\,\\mathrm N\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "每次与指定壁弹性碰撞时，交给壁的冲量是 \\(2mv\\)。下一次撞到同一壁要完成一个往返，间隔 \\(2L/v\\)。平均力为冲量除以间隔，即 \\(mv^2/L\\)。长度应由 cm 换成 m。代入题给数值，结果为 \\(1.944\\times10^{-19}\\,\\mathrm N\\)。"
  },
  {
    "id": "u-uniform-rms-1",
    "family": "u-uniform-rms",
    "type": "single",
    "points": 2,
    "stem": "一组分子的速率在 0 和 300 m/s 之间均匀分布。求其方均根速率。",
    "options": [
      "\\(100\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(150\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(212.13\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(173.21\\,\\mathrm{m\\,s^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "速率概率密度为 \\(1/v_0\\)。方均根速率要先算 \\(\\langle v^2\\rangle=v_0^{-1}\\int_0^{v_0}v^2\\,\\mathrm dv=v_0^2/3\\)，再开平方。直接对 \\(v\\) 取平均会得到 \\(v_0/2\\)，与所求不同。代入题给数值，结果为 \\(173.21\\,\\mathrm{m\\,s^{-1}}\\)。"
  },
  {
    "id": "u-degenerate-level-1",
    "family": "u-degenerate-level",
    "type": "single",
    "points": 3,
    "stem": "某系统每个粒子只可占据两个能量值。下能级有 1 个等能微观状态，上能级有 2 个，能隙为 0.6 倍的 \\(k_{\\mathrm B}T\\)。在温度 \\(T\\) 的热平衡下，上能级的粒子比例约是多少？",
    "options": [
      "\\(0.66667\\)",
      "\\(0.35434\\)",
      "\\(0.52327\\)",
      "\\(0.47673\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "同一能级内每个等能态的玻尔兹曼权重相同，因此总权重还需乘简并数。将下能级能量取零，上、下权重分别为 \\(g_{\\rm u}e^{-\\Delta E/(k_BT)}\\) 与 \\(g_{\\rm l}\\)。用上能级权重除以两者总和。代入题给数值，结果为 \\(0.52327\\)。"
  },
  {
    "id": "u-selective-particle-removal-1",
    "family": "u-selective-particle-removal",
    "type": "single",
    "points": 2,
    "stem": "一刚性容器的容积为 3.2 L，装有同温理想气体 A、B，A 的初始分压为 72 kPa。温度恒为 280 K，只移走 A 组分中 19% 的分子。A 的物质的量减少多少？",
    "options": [
      "\\(1.8805\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(0.015232\\,\\mathrm{mol}\\)",
      "\\(0.098972\\,\\mathrm{mol}\\)",
      "\\(0.018805\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "只对 A 组分用状态方程，初始物质的量 \\(n_{A0}=p_AV/(RT)\\)，题设比例乘的是 A 的初始物质的量。这里 \\(T=280\\,\\mathrm K\\)，并可用 \\(1\\,\\mathrm{kPa\\,L}=1\\,\\mathrm J\\) 直接换算。代入题给数值，结果为 \\(0.018805\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-gauge-pressure-heating-1",
    "family": "u-gauge-pressure-heating",
    "type": "single",
    "points": 2,
    "stem": "密闭刚性容器内的理想气体初温 280 K，压力表显示表压 25 kPa。加热到 320 K，外界大气压一直为 100 kPa。末态压力表显示的表压约是多少？",
    "options": [
      "\\(28.571\\,\\mathrm{kPa}\\)",
      "\\(142.86\\,\\mathrm{kPa}\\)",
      "\\(42.857\\,\\mathrm{kPa}\\)",
      "\\(55.357\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "气体状态方程用绝对压强。先将初始表压加大气压，再利用恒容恒质量条件 \\(p_{\\rm abs,2}/p_{\\rm abs,1}=T_2/T_1\\)。最后将末态绝对压强减去大气压，才得到表压。代入题给数值，结果为 \\(42.857\\,\\mathrm{kPa}\\)。"
  },
  {
    "id": "u-mixing-different-heat-capacities-1",
    "family": "u-mixing-different-heat-capacities",
    "type": "single",
    "points": 3,
    "stem": "绝热刚性容器的两侧分别有 1 mol 单原子理想气体（270 K）和 1.4 mol 刚性双原子理想气体（390 K）。移去隔板，混合至同一温度。最终温度约是多少？",
    "options": [
      "\\(390\\,\\mathrm K\\)",
      "\\(340\\,\\mathrm K\\)",
      "\\(330\\,\\mathrm K\\)",
      "\\(354\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "外壁绝热且刚性，混合系统没有从外界吸热也没有做体积功，总内能守恒。两组分的定容摩尔热容分别为 \\(3R/2\\) 和 \\(5R/2\\)，故终温以两组分的总定容热容 \\(n_i C_{V,m,i}\\) 加权，而非仅按物质的量平均。代入题给数值，结果为 \\(354\\,\\mathrm K\\)。"
  },
  {
    "id": "u-state-coefficients-isochoric-1",
    "family": "u-state-coefficients-isochoric",
    "type": "single",
    "points": 3,
    "stem": "某气体在初态的体膨胀系数为 \\(0.0016\\,\\mathrm{K^{-1}}\\)，等温压缩系数为 \\(1.9\\times10^{-8}\\,\\mathrm{Pa^{-1}}\\)。把容器体积保持不变，将温度小幅升高 2 K。用一阶近似求压强增量。",
    "options": [
      "\\(3.3684\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(1.6842\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(-1.6842\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(84211\\,\\mathrm{Pa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 2 章",
    "explanation": "小变化满足 \\(\\mathrm dV/V=\\alpha\\,\\mathrm dT-\\kappa_T\\,\\mathrm dp\\)。定容使左边为零，因此升温造成的膨胀趋势必须由增压抵消，\\(\\Delta p=\\alpha\\Delta T/\\kappa_T\\)；单位是 Pa。代入题给数值，结果为 \\(1.6842\\times10^{5}\\,\\mathrm{Pa}\\)。"
  },
  {
    "id": "u-vdw-isothermal-energy-1",
    "family": "u-vdw-isothermal-energy",
    "type": "single",
    "points": 3,
    "stem": "1 mol 范德瓦耳斯气体的摩尔内能为 \\(U_m=C_{V,m}T-a/V_m\\)，其中 \\(a=0.13\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)。恒温下摩尔体积由 0.55 L/mol 增到 0.935 L/mol。求内能变化。",
    "options": [
      "\\(-97.326\\,\\mathrm J\\)",
      "\\(97.326\\,\\mathrm J\\)",
      "\\(236.36\\,\\mathrm J\\)",
      "\\(139.04\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "初末温度相同，内能中的热运动项 \\(C_{V,m}T\\) 相消。分子吸引项由 \\(-a/V_{m1}\\) 变为 \\(-a/V_{m2}\\)，体积变大后其绝对值变小。先把摩尔体积换为 \\(\\mathrm{m^3\\,mol^{-1}}\\)，再求末态摩尔内能减初态摩尔内能，最后乘 1 mol 得到总内能变化。代入题给数值，结果为 \\(97.326\\,\\mathrm J\\)。"
  },
  {
    "id": "u-vdw-critical-temperature-1",
    "family": "u-vdw-critical-temperature",
    "type": "single",
    "points": 3,
    "stem": "某范德瓦耳斯气体的参数为 \\(0.18\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)、\\(7\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\)，分别对应 \\(a,b\\)。用临界等温线的拐点条件估算临界温度。",
    "options": [
      "\\(309.29\\,\\mathrm K\\)",
      "\\(183.28\\,\\mathrm K\\)",
      "\\(11.455\\,\\mathrm K\\)",
      "\\(91.641\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "由 \\(p=RT/(V_m-b)-a/V_m^2\\)，临界等温线满足 \\((\\partial p/\\partial V_m)_T=0\\) 和 \\((\\partial^2p/\\partial V_m^2)_T=0\\)。两式消元得到 \\(V_{m,c}=3b\\)，代回一阶导数条件得 \\(T_c=8a/(27Rb)\\)。代入题给数值，结果为 \\(91.641\\,\\mathrm K\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-compressibility-factor-1",
    "family": "u-compressibility-factor",
    "type": "single",
    "points": 2,
    "stem": "实测某气体在 275 K、2.5 MPa 下的摩尔体积为 0.69 L/mol。按 \\(Z=pV_m/(RT)\\) 定义，压缩因子约是多少？",
    "options": [
      "\\(0.00075448\\)",
      "\\(1.3254\\)",
      "\\(0.75448\\)",
      "\\(1\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "将压强换成 Pa、摩尔体积换成 \\(\\mathrm{m^3\\,mol^{-1}}\\) 后，\\(pV_m\\) 和 \\(RT\\) 都以 J/mol 计。用测得的 \\(pV_m\\) 除以同温的理想气体摩尔值 \\(RT\\)，得到无量纲的压缩因子。代入题给数值，结果为 \\(0.75448\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-wall-interface-temperature-1",
    "family": "u-wall-interface-temperature",
    "type": "single",
    "points": 3,
    "stem": "双层平板墙的两层面积相同，热面温度为 355 K，冷面为 288 K。靠热侧的第一层厚 14 mm、导热系数 0.31 W/(m·K)，第二层厚 45 mm、导热系数 0.8 W/(m·K)。达到稳定后，两层交界面温度约是多少？",
    "options": [
      "\\(317.84\\,\\mathrm K\\)",
      "\\(336.29\\,\\mathrm K\\)",
      "\\(325.16\\,\\mathrm K\\)",
      "\\(321.5\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "稳态下两层的单位面积热流相同，温降与热阻 \\(L/k\\) 成正比。第一层的温降是总温差乘 \\((L_1/k_1)/(L_1/k_1+L_2/k_2)\\)，从热面温度扣除该温降，得到交界面的温度。代入题给数值，结果为 \\(325.16\\,\\mathrm K\\)。"
  },
  {
    "id": "u-parallel-wall-path-1",
    "family": "u-parallel-wall-path",
    "type": "single",
    "points": 3,
    "stem": "一面厚 24 mm 的墙由两块并排材料组成，两块都贯穿墙厚。其面积分别为 0.1、0.17 m²，导热系数为 0.29、1.2 W/(m·K)。墙两面温差为 24 K，忽略横向热流。总导热功率是多少？",
    "options": [
      "\\(233\\,\\mathrm W\\)",
      "\\(204\\,\\mathrm W\\)",
      "\\(116.5\\,\\mathrm W\\)",
      "\\(25.391\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "两块材料具有相同的温差和厚度，构成并联导热路径。分别求 \\(\\dot Q_i=k_iA_i\\Delta T/L\\) 再相加。把两块热阻直接相加属于串联模型。代入题给数值，结果为 \\(233\\,\\mathrm W\\)。"
  },
  {
    "id": "u-cylindrical-conduction-1",
    "family": "u-cylindrical-conduction",
    "type": "single",
    "points": 3,
    "stem": "长度 0.7 m 的圆柱管壁导热系数为 0.35 W/(m·K)，内、外半径为 16 和 27.2 mm，内表面比外表面高 40 K。忽略端面漏热，稳态导热功率是多少？",
    "options": [
      "\\(116.04\\,\\mathrm W\\)",
      "\\(87.965\\,\\mathrm W\\)",
      "\\(61.575\\,\\mathrm W\\)",
      "\\(149.54\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "半径 \\(r\\) 处的导热面积是 \\(2\\pi rL\\)。稳态热流恒定，由傅里叶定律分离变量，热阻为 \\(\\int_{r_1}^{r_2}\\mathrm dr/(2\\pi kLr)=\\ln(r_2/r_1)/(2\\pi kL)\\)。总温差除以热阻。代入题给数值，结果为 \\(116.04\\,\\mathrm W\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-ice-water-melting-budget-1",
    "family": "u-ice-water-melting-budget",
    "type": "single",
    "points": 3,
    "stem": "绝热容器里有 0.18 kg、28 ℃ 的水，加入足够多的 0 ℃ 冰，使最终仍有冰剩余。取水的比热容 4180 J/(kg·K)、冰的熔化潜热 334 kJ/kg。会有多少 kg 冰熔化？",
    "options": [
      "\\(0.063075\\,\\mathrm{kg}\\)",
      "\\(0.031538\\,\\mathrm{kg}\\)",
      "\\(0.12615\\,\\mathrm{kg}\\)",
      "\\(63.075\\,\\mathrm{kg}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "仍有冰剩余，所以平衡温度是 0 ℃。原有温水降至 0 ℃ 放出的热量是 \\(m_wc_w t\\)，这部分热量全部用于冰的相变，满足 \\(m_{\\rm melt}L_f=m_wc_wt\\)。潜热需以 J/kg 代入。代入题给数值，结果为 \\(0.063075\\,\\mathrm{kg}\\)。"
  },
  {
    "id": "u-soap-bubble-surface-work-1",
    "family": "u-soap-bubble-surface-work",
    "type": "single",
    "points": 2,
    "stem": "从近似零半径缓慢吹出一个薄壁肥皂泡，最后半径为 3 mm，液膜的表面张力系数为 0.031 N/m。忽略其他功和损耗，新增两个液面的表面能是多少？",
    "options": [
      "\\(7.012\\times10^{-6}\\,\\mathrm J\\)",
      "\\(2.1036\\times10^{-8}\\,\\mathrm J\\)",
      "\\(1.4024\\times10^{-5}\\,\\mathrm J\\)",
      "\\(3.506\\times10^{-6}\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 7 章",
    "explanation": "肥皂泡有内、外两个液面，每个球面面积为 \\(4\\pi r^2\\)。表面能增量为表面张力乘总面积增量，即 \\(8\\pi r^2\\gamma\\)。只按一个液面计算会少一半。代入题给数值，结果为 \\(7.012\\times10^{-6}\\,\\mathrm J\\)。"
  },
  {
    "id": "u-saturated-headspace-1",
    "family": "u-saturated-headspace",
    "type": "single",
    "points": 2,
    "stem": "密闭容器中有液态水，液面上方的气相空间为 3.5 L。保持 303 K，水的饱和蒸气压为 4.207 kPa。达到平衡后仍有液态水。将水蒸气视为理想气体，求气相中水的物质的量。",
    "options": [
      "\\(5.845\\,\\mathrm{mol}\\)",
      "\\(5.845\\times10^{-6}\\,\\mathrm{mol}\\)",
      "\\(0.005845\\,\\mathrm{mol}\\)",
      "\\(0.01169\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "有液水与蒸气共存时，水蒸气分压等于该温度的饱和蒸气压。只把气相空间体积代入状态方程 \\(n_{\\rm vap}=p_{\\rm sat}V_{\\rm gas}/(RT)\\)，液态水的体积不算入气体体积。代入题给数值，结果为 \\(0.005845\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-vapour-pressure-two-temperatures-1",
    "family": "u-vapour-pressure-two-temperatures",
    "type": "single",
    "points": 3,
    "stem": "某液体在 300 K 的饱和蒸气压为 13 kPa。在此温区内取摩尔汽化潜热 28 kJ/mol 为常量，忽略液体摩尔体积，把蒸气视为理想气体。估算 312 K 的饱和蒸气压。",
    "options": [
      "\\(20.02\\,\\mathrm{kPa}\\)",
      "\\(8.4417\\,\\mathrm{kPa}\\)",
      "\\(13.52\\,\\mathrm{kPa}\\)",
      "\\(13\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 8 章",
    "explanation": "克拉珀龙方程在题设近似下化为 \\(\\mathrm d(\\ln p)/\\mathrm dT=L/(RT^2)\\)。由 \\(T_1\\) 积分到 \\(T_2\\)，得 \\(\\ln(p_2/p_1)=(L/R)(1/T_1-1/T_2)\\)。温度提高时指数为正，蒸气压增大。代入题给数值，结果为 \\(20.02\\,\\mathrm{kPa}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-entropy-variable-cv-1",
    "family": "u-entropy-variable-cv",
    "type": "single",
    "points": 3,
    "stem": "一定量气体在刚性容器里由 280 K 升到 340 K。整份气体的定容热容为 \\(C_V(T)=a+bT\\)，其中 \\(a=12\\,\\mathrm{J/K}\\)、\\(b=0.045\\,\\mathrm{J/K^2}\\)。求气体的熵变。",
    "options": [
      "\\(2.7\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(5.3005\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(5.0299\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2.3299\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "取相同端点间的一条可逆等容路径。因 \\(\\mathrm dS=C_V(T)\\,\\mathrm dT/T\\)，积分核可写成 \\(a/T+b\\)。前一项积分为 \\(a\\ln(T_2/T_1)\\)，后一项给出 \\(b(T_2-T_1)\\)。代入题给数值，结果为 \\(5.0299\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-cooling-work-1",
    "family": "u-finite-cooling-work",
    "type": "single",
    "points": 3,
    "stem": "一个热容恒为 85 J/K 的物体起初处在 400 K。让它作为可逆热机的高温端逐步冷却，低温热库保持 290 K。物体冷却到热库温度时，热机累计输出的功为多少？",
    "options": [
      "\\(1423\\,\\mathrm J\\)",
      "\\(9350\\,\\mathrm J\\)",
      "\\(2571.3\\,\\mathrm J\\)",
      "\\(7927\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "每一步热机的高温端温度都等于物体的即时温度 \\(T\\)。物体放出的热量为 \\(C\\,|\\mathrm dT|\\)，其中 \\(1-T_0/T\\) 的比例转为功。从 \\(T_0\\) 积到 \\(T_h\\)，得到 \\(C(T_h-T_0)-CT_0\\ln(T_h/T_0)\\)。代入题给数值，结果为 \\(1423\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-reversible-equilibrium-1",
    "family": "u-finite-reversible-equilibrium",
    "type": "single",
    "points": 3,
    "stem": "两个热容分别恒为 90、130 J/K 的物体，初温分别为 410、275 K。将它们作为可逆热机的两个热端，缓慢运行至两物体等温。忽略其他热交换，求共同末温。",
    "options": [
      "\\(342.5\\,\\mathrm K\\)",
      "\\(323.81\\,\\mathrm K\\)",
      "\\(330.23\\,\\mathrm K\\)",
      "\\(335.78\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "可逆热机循环中没有净熵变，两个物体与外界也没有热交换，所以 \\(C_1\\ln(T_f/T_1)+C_2\\ln(T_f/T_2)=0\\)。把共同末温的对数项移到同一边，再取指数。若令两物体净放热为零，就漏算了热机向外做功。代入题给数值，结果为 \\(323.81\\,\\mathrm K\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-heat-pump-cycle-count-1",
    "family": "u-heat-pump-cycle-count",
    "type": "single",
    "points": 2,
    "stem": "一台可逆热泵在 580 K 和 290 K 的两个热源之间工作。高温端平均每秒得到 1400 J 热量，热泵每秒运行 1.4 个循环。每个循环要输入多少功？",
    "options": [
      "\\(1000\\,\\mathrm J\\)",
      "\\(385\\,\\mathrm J\\)",
      "\\(595\\,\\mathrm J\\)",
      "\\(500\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "用热量的正数大小记号。可逆热泵有 \\(Q_c/Q_h=T_c/T_h\\)，故输入功为 \\(Q_h(1-T_c/T_h)\\)。题中给的供热量是每秒的，把输入功率再除以每秒循环数才得到每循环的输入功。代入题给数值，结果为 \\(500\\,\\mathrm J\\)。"
  },
  {
    "id": "u-cascade-second-engine-work-1",
    "family": "u-cascade-second-engine-work",
    "type": "single",
    "points": 2,
    "stem": "两台可逆热机串联。第一台在 640 K 和 460 K 间运行，每循环吸热 380 J。第一台排出的热量全部交给第二台，后者在 460 K 和 300 K 间运行。问与第一台这一次循环对应，第二台输出多少功？",
    "options": [
      "\\(132.17\\,\\mathrm J\\)",
      "\\(95\\,\\mathrm J\\)",
      "\\(106.88\\,\\mathrm J\\)",
      "\\(201.88\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "第一台排热为 \\(Q_hT_m/T_h\\)，这正是第二台获得的热量。第二台效率为 \\(1-T_c/T_m\\)，所以它的功是 \\(Q_h(T_m-T_c)/T_h\\)。若直接把第一台吸热当成第二台的输入，会高估输出。代入题给数值，结果为 \\(95\\,\\mathrm J\\)。"
  },
  {
    "id": "u-rectangular-cycle-efficiency-1",
    "family": "u-rectangular-cycle-efficiency",
    "type": "single",
    "points": 3,
    "stem": "理想气体沿 \\(p\\!-\\!V\\) 图上的顺时针矩形循环。低、高压分别为 90、180 kPa，小、大体积分别为 2、5 L。给定摩尔定容热容 \\(C_{V,m}=1.5R\\)，求热机效率（百分数）。",
    "options": [
      "\\(25\\,\\%\\)",
      "\\(50\\,\\%\\)",
      "\\(8.3333\\,\\%\\)",
      "\\(16.667\\,\\%\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "净功是矩形面积 \\((p_h-p_l)(V_h-V_l)\\)。在小体积等容增压吸收 \\((C_{V,m}/R)(p_h-p_l)V_l\\)，在高压下等压膨胀吸收 \\((C_{p,m}/R)p_h(V_h-V_l)\\)。另两段均放热。将净功除以上述两段吸热之和。代入题给数值，结果为 \\(16.667\\,\\%\\)。"
  },
  {
    "id": "u-polytropic-molar-heat-1",
    "family": "u-polytropic-molar-heat",
    "type": "single",
    "points": 3,
    "stem": "单原子理想气体沿准静态路径 \\(pV^m=\\mathrm{const}\\) 变化，指数 \\(m=1.7\\)。路径的摩尔热容 \\(\\delta Q/(n\\,\\mathrm dT)\\) 约是多少？",
    "options": [
      "\\(2.5\\,R\\)",
      "\\(2.9286\\,R\\)",
      "\\(0.071429\\,R\\)",
      "\\(1.5\\,R\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "联立 \\(pV^m=\\mathrm{const}\\) 与 \\(pV=nRT\\)，得 \\(\\mathrm dT/T=(1-m)\\mathrm dV/V\\)。由第一定律，\\(\\delta Q=nC_{V,m}\\mathrm dT+p\\,\\mathrm dV\\)，故路径热容为 \\(C_{V,m}+R/(1-m)\\)。这里的热容沿指定路径定义。代入题给数值，结果为 \\(0.071429\\,R\\)。"
  },
  {
    "id": "u-external-pressure-adiabat-1",
    "family": "u-external-pressure-adiabat",
    "type": "single",
    "points": 3,
    "stem": "气缸中有初温 335 K、初压 \\(p_i\\) 的理想气体，其摩尔定容热容为 \\(1.5R\\)。绝热地突然将恒定外压降至 \\(0.35p_i\\)，活塞移动，最终静止并达到力学平衡。忽略活塞的质量、摩擦及高度变化，求气体末温。",
    "options": [
      "\\(335\\,\\mathrm K\\)",
      "\\(247.9\\,\\mathrm K\\)",
      "\\(220.13\\,\\mathrm K\\)",
      "\\(117.25\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "全过程边界功为 \\(p_e(V_f-V_i)\\)。绝热第一定律给 \\(nC_{V,m}(T_f-T_i)=-p_e(V_f-V_i)\\)。利用终态 \\(p_eV_f=nRT_f\\) 与初态 \\(p_iV_i=nRT_i\\)，可解出 \\(T_f/T_i=(C_{V,m}/R+p_e/p_i)/(C_{V,m}/R+1)\\)。突变外压的过程不可用可逆绝热关系。代入题给数值，结果为 \\(247.9\\,\\mathrm K\\)。"
  },
  {
    "id": "u-path-heat-difference-1",
    "family": "u-path-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体起始为 115 kPa、2 L，末态体积 4 L，末温与初温相同。路径甲沿初压等压膨胀后等容冷却，路径乙为可逆等温膨胀。求甲比乙多吸收的净热量。",
    "options": [
      "\\(-70.576\\,\\mathrm J\\)",
      "\\(159.42\\,\\mathrm J\\)",
      "\\(230\\,\\mathrm J\\)",
      "\\(70.576\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "两条路径的初末温度相同，理想气体 \\(\\Delta U=0\\)，所以各自净吸热等于各自净功。甲只有等压段做功 \\(p_1(V_2-V_1)\\)，乙做功 \\(p_1V_1\\ln(V_2/V_1)\\)。两者相减，\\(\\mathrm{kPa\\,L}\\) 可直接换成 J。代入题给数值，结果为 \\(70.576\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-calorimetry-specific-heat-1",
    "family": "u-calorimetry-specific-heat",
    "type": "single",
    "points": 3,
    "stem": "热容为 38 J/K 的量热器装有 0.32 kg 的水，初温均为 20 ℃。把 0.43 kg、79 ℃ 的金属块迅速浸入，达到 27 ℃。忽略向环境漏热，水的比热容取 4180 J/(kg·K)。求金属的比热容。",
    "options": [
      "\\(418.75\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(185.18\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(430.64\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(3199.1\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "金属放热 \\(mc_m(t_m-t_f)\\)，水和量热器共同吸热 \\((m_wc_w+C_{\\mathrm{cal}})(t_f-t_w)\\)。量热器给的是总热容，水要先用质量乘比热容，两项才能相加。代入题给数值，结果为 \\(430.64\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-mixture-specific-heat-difference-1",
    "family": "u-mixture-specific-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体混合物由氦和氮组成，氦的质量分数是 25%。氦、氮的摩尔质量分别取 4、28 g/mol。求混合物按单位质量计的 \\(c_p-c_v\\)。",
    "options": [
      "\\(0.74232\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(8.314\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(742.32\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(377.91\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "每摩尔理想气体有 \\(C_{p,m}-C_{V,m}=R\\)。以 1 kg 混合气体为基准，其摩尔数为 \\(w_{\\rm He}/M_{\\rm He}+w_{\\rm N}/M_{\\rm N}\\)，乘 \\(R\\) 就得到按每千克计的差值。题给质量分数须先换算成摩尔数。代入题给数值，结果为 \\(742.32\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-pressure-melting-shift-1",
    "family": "u-pressure-melting-shift",
    "type": "single",
    "points": 3,
    "stem": "某晶体在给定压力下的熔点为 272 K，固、液密度分别为 910、1000 kg/m³，熔化潜热为 330 kJ/kg。将压强提高 35 MPa，把这些参数视为常量。估算熔点变化。",
    "options": [
      "\\(-28.531\\,\\mathrm K\\)",
      "\\(-2.8531\\,\\mathrm K\\)",
      "\\(-0.028531\\,\\mathrm K\\)",
      "\\(2.8531\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "熔化过程的质量比容变化为 \\(\\Delta v=1/\\rho_l-1/\\rho_s\\)。克拉珀龙式给 \\(\\mathrm dT/\\mathrm dp=T\\Delta v/L\\)，乘压强增量得近似温变。液相更密，\\(\\Delta v<0\\)，提高压强会使熔点下降。代入题给数值，结果为 \\(-2.8531\\,\\mathrm K\\)。"
  },
  {
    "id": "u-barometric-height-from-density-1",
    "family": "u-barometric-height-from-density",
    "type": "single",
    "points": 2,
    "stem": "在恒温 286 K、重力加速度取 9.81 m/s² 的大气层里，气体平均摩尔质量为 24 g/mol。气体可视为理想气体。到达多大高度时，气体密度是地面密度的 63%？",
    "options": [
      "\\(4666.3\\,\\mathrm m\\)",
      "\\(3736.8\\,\\mathrm m\\)",
      "\\(-4666.3\\,\\mathrm m\\)",
      "\\(4.6663\\,\\mathrm m\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "等温静力平衡中，\\(\\mathrm d\\ln p/\\mathrm dz=-Mg/(RT)\\)。因为 \\(T\\) 与 \\(M\\) 固定，\\(\\rho/\\rho_0=p/p_0=e^{-Mgz/(RT)}\\)。对给定密度比取自然对数后求 \\(z\\)。代入题给数值，结果为 \\(4666.3\\,\\mathrm m\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-unequal-volume-occupancy-1",
    "family": "u-unequal-volume-occupancy",
    "type": "single",
    "points": 2,
    "stem": "容器被想象中的分界面分成两部分，左区占总体积 19%。有 8 个可区分的理想气体分子，平衡时可把各分子的位置看作相互独立。任一时刻恰有 3 个分子在左区的概率约为多少？",
    "options": [
      "\\(0.21875\\)",
      "\\(0.0023916\\)",
      "\\(0.13393\\)",
      "\\(0.007369\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 1 章",
    "explanation": "先指定哪 \\(m\\) 个粒子在左边，对应概率是 \\(p^m(1-p)^{N-m}\\)。有 \\(\\binom Nm\\) 种指定法，且事件互斥。因此用二项分布取恰好 \\(m\\) 的一项，\\(p\\) 是左区体积分数。代入题给数值，结果为 \\(0.13393\\)。"
  },
  {
    "id": "u-bath-entropy-isothermal-compression-1",
    "family": "u-bath-entropy-isothermal-compression",
    "type": "single",
    "points": 2,
    "stem": "把 1.1 mol 理想气体与 298 K 的大热库保持热接触，并可逆等温地压缩气体，直到初体积与末体积之比为 1.6。热库的熵变约是多少？",
    "options": [
      "\\(6.8774\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.2984\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-4.2984\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(1280.9\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "气体等温压缩时内能不变，外界对气体做的功全部以热量流向热库。气体熵变是 \\(nR\\ln(V_f/V_i)<0\\)，过程可逆，热库熵增等于其相反数。结果是热库的熵变，单位为 J/K。代入题给数值，结果为 \\(4.2984\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-diffusion-number-density-change-1",
    "family": "u-diffusion-number-density-change",
    "type": "single",
    "points": 2,
    "stem": "同一种稀薄硬球气体在温度 300 K 时扩散系数为 0.013 m²/s。改为 390 K，分子数密度变为原来的 1.4 倍。估算新状态下的扩散系数。",
    "options": [
      "\\(0.010587\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.012071\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.0092857\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.014822\\,\\mathrm{m^2\\,s^{-1}}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "平均自由程随分子数密度的倒数变化，分子平均速率随绝对温度平方根变化。用 \\(D\\simeq\\bar v\\lambda/3\\) 得 \\(D_2/D_1=\\sqrt{T_2/T_1}/(n_2/n_1)\\)。同一种气体的分子碰撞直径在两种状态中相同。代入题给数值，结果为 \\(0.010587\\,\\mathrm{m^2\\,s^{-1}}\\)。"
  },
  {
    "id": "u-piston-isothermal-entropy-generation-1",
    "family": "u-piston-isothermal-entropy-generation",
    "type": "single",
    "points": 3,
    "stem": "1 mol 理想气体初始与恒温 330 K 的热库达到热平衡。外压从初态气压突然提高到原来的 1.2 倍，活塞在恒定外压下重新静止后，气体再次与热库达到热平衡。求气体和热库的总熵变。",
    "options": [
      "\\(-0.14698\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(1.5158\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(0.14698\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(1.6628\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "等温末态有 \\(V_f=V_i/k\\)。恒外压使外界对气体做功 \\(kp_i(V_i-V_f)=(k-1)RT\\)，等温气体将这些能量作为热传给热库，故热库熵增 \\((k-1)R\\)。气体熵变为 \\(R\\ln(V_f/V_i)=-R\\ln k\\)，二者相加。代入题给数值，结果为 \\(0.14698\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-effusion-mixture-2",
    "family": "u-effusion-mixture",
    "type": "single",
    "points": 2,
    "stem": "同温容器里有 A、B 两种稀薄理想气体，二者分压相同，摩尔质量分别是 2 和 28 g/mol。容器有一个直径远小于自由程的小孔。刚打开小孔时，A 与 B 逸出粒子数率之比约是多少？",
    "options": [
      "\\(0.26726\\)",
      "\\(3.7417\\)",
      "\\(1\\)",
      "\\(14\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "小孔逸出由撞向孔口的分子通量决定，通量 \\(J=n\\bar v/4\\)。分压和温度均相同，所以两组分数密度相等。麦克斯韦平均速率在同温下正比于 \\(M^{-1/2}\\)，故逸出率比为 \\(\\sqrt{M_B/M_A}\\)。这里比较的是粒子数率，质量流率还要乘粒子质量。代入题给数值，结果为 \\(3.7417\\)。"
  },
  {
    "id": "u-wall-hit-count-2",
    "family": "u-wall-hit-count",
    "type": "single",
    "points": 2,
    "stem": "各向同性的气体分子数密度为 \\(1.6\\times10^{21}\\,\\mathrm{m^{-3}}\\)，平均速率为 355 m/s。取器壁上一块 \\(3\\times10^{-5}\\,\\mathrm{m^2}\\) 的面积，统计 0.06 s，预计发生的碰壁总次数约为多少？",
    "options": [
      "\\(1.0224\\times10^{18}\\)",
      "\\(2.556\\times10^{17}\\)",
      "\\(5.112\\times10^{17}\\)",
      "\\(1.278\\times10^{17}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "撞壁只来自朝向器壁的半空间，计数还需乘速度的法向投影。对各向同性方向积分后，单位面积、单位时间的平均撞壁数是 \\(n\\bar v/4\\)。再乘面积与统计时长。代入题给数值，结果为 \\(2.556\\times10^{17}\\)。"
  },
  {
    "id": "u-free-path-survival-2",
    "family": "u-free-path-survival",
    "type": "single",
    "points": 2,
    "stem": "某平衡稀薄气体的分子平均自由程为 43 nm。近似把单位路程内的碰撞概率视为常数。一个分子自上次碰撞后至少再飞行 38 nm 而没有发生新碰撞的概率约为多少？",
    "options": [
      "\\(0.41324\\)",
      "\\(0.32252\\)",
      "\\(0.58676\\)",
      "\\(0.53086\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "若单位路程上碰撞概率近似恒定，未碰撞概率 \\(P(x)\\) 满足 \\(\\mathrm dP/\\mathrm dx=-P/\\lambda\\)，且 \\(P(0)=1\\)。因此 \\(P(x)=e^{-x/\\lambda}\\)。题目问存活概率，\\(1-P(x)\\) 才是发生碰撞的概率。代入题给数值，结果为 \\(0.41324\\)。"
  },
  {
    "id": "u-single-molecule-wall-force-2",
    "family": "u-single-molecule-wall-force",
    "type": "single",
    "points": 3,
    "stem": "一质量 \\(4\\times10^{-26}\\,\\mathrm{kg}\\) 的分子只沿长度为 3 cm 的容器的法向运动，速率为 405 m/s，在两端壁之间来回弹性反射。忽略其他分子，求这个分子对其中一端壁的时间平均作用力。",
    "options": [
      "\\(2.187\\times10^{-21}\\,\\mathrm N\\)",
      "\\(1.0935\\times10^{-19}\\,\\mathrm N\\)",
      "\\(4.374\\times10^{-19}\\,\\mathrm N\\)",
      "\\(2.187\\times10^{-19}\\,\\mathrm N\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "每次与指定壁弹性碰撞时，交给壁的冲量是 \\(2mv\\)。下一次撞到同一壁要完成一个往返，间隔 \\(2L/v\\)。平均力为冲量除以间隔，即 \\(mv^2/L\\)。长度应由 cm 换成 m。代入题给数值，结果为 \\(2.187\\times10^{-19}\\,\\mathrm N\\)。"
  },
  {
    "id": "u-uniform-rms-2",
    "family": "u-uniform-rms",
    "type": "single",
    "points": 2,
    "stem": "一组分子的速率在 0 和 350 m/s 之间均匀分布。求其方均根速率。",
    "options": [
      "\\(247.49\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(175\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(116.67\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(202.07\\,\\mathrm{m\\,s^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "速率概率密度为 \\(1/v_0\\)。方均根速率要先算 \\(\\langle v^2\\rangle=v_0^{-1}\\int_0^{v_0}v^2\\,\\mathrm dv=v_0^2/3\\)，再开平方。直接对 \\(v\\) 取平均会得到 \\(v_0/2\\)，与所求不同。代入题给数值，结果为 \\(202.07\\,\\mathrm{m\\,s^{-1}}\\)。"
  },
  {
    "id": "u-degenerate-level-2",
    "family": "u-degenerate-level",
    "type": "single",
    "points": 3,
    "stem": "某系统每个粒子只可占据两个能量值。下能级有 1 个等能微观状态，上能级有 3 个，能隙为 0.89 倍的 \\(k_{\\mathrm B}T\\)。在温度 \\(T\\) 的热平衡下，上能级的粒子比例约是多少？",
    "options": [
      "\\(0.55196\\)",
      "\\(0.29111\\)",
      "\\(0.44804\\)",
      "\\(0.75\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "同一能级内每个等能态的玻尔兹曼权重相同，因此总权重还需乘简并数。将下能级能量取零，上、下权重分别为 \\(g_{\\rm u}e^{-\\Delta E/(k_BT)}\\) 与 \\(g_{\\rm l}\\)。用上能级权重除以两者总和。代入题给数值，结果为 \\(0.55196\\)。"
  },
  {
    "id": "u-selective-particle-removal-2",
    "family": "u-selective-particle-removal",
    "type": "single",
    "points": 2,
    "stem": "一刚性容器的容积为 3.8 L，装有同温理想气体 A、B，A 的初始分压为 84 kPa。温度恒为 290 K，只移走 A 组分中 26% 的分子。A 的物质的量减少多少？",
    "options": [
      "\\(0.13239\\,\\mathrm{mol}\\)",
      "\\(0.034421\\,\\mathrm{mol}\\)",
      "\\(3.4421\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(0.025472\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "只对 A 组分用状态方程，初始物质的量 \\(n_{A0}=p_AV/(RT)\\)，题设比例乘的是 A 的初始物质的量。这里 \\(T=290\\,\\mathrm K\\)，并可用 \\(1\\,\\mathrm{kPa\\,L}=1\\,\\mathrm J\\) 直接换算。代入题给数值，结果为 \\(0.034421\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-gauge-pressure-heating-2",
    "family": "u-gauge-pressure-heating",
    "type": "single",
    "points": 2,
    "stem": "密闭刚性容器内的理想气体初温 285 K，压力表显示表压 40 kPa。加热到 330 K，外界大气压一直为 100 kPa。末态压力表显示的表压约是多少？",
    "options": [
      "\\(162.11\\,\\mathrm{kPa}\\)",
      "\\(62.105\\,\\mathrm{kPa}\\)",
      "\\(82.105\\,\\mathrm{kPa}\\)",
      "\\(46.316\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "气体状态方程用绝对压强。先将初始表压加大气压，再利用恒容恒质量条件 \\(p_{\\rm abs,2}/p_{\\rm abs,1}=T_2/T_1\\)。最后将末态绝对压强减去大气压，才得到表压。代入题给数值，结果为 \\(62.105\\,\\mathrm{kPa}\\)。"
  },
  {
    "id": "u-mixing-different-heat-capacities-2",
    "family": "u-mixing-different-heat-capacities",
    "type": "single",
    "points": 3,
    "stem": "绝热刚性容器的两侧分别有 1.2 mol 单原子理想气体（278 K）和 1.55 mol 刚性双原子理想气体（398 K）。移去隔板，混合至同一温度。最终温度约是多少？",
    "options": [
      "\\(359.94\\,\\mathrm K\\)",
      "\\(398\\,\\mathrm K\\)",
      "\\(345.64\\,\\mathrm K\\)",
      "\\(338\\,\\mathrm K\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "外壁绝热且刚性，混合系统没有从外界吸热也没有做体积功，总内能守恒。两组分的定容摩尔热容分别为 \\(3R/2\\) 和 \\(5R/2\\)，故终温以两组分的总定容热容 \\(n_i C_{V,m,i}\\) 加权，而非仅按物质的量平均。代入题给数值，结果为 \\(359.94\\,\\mathrm K\\)。"
  },
  {
    "id": "u-state-coefficients-isochoric-2",
    "family": "u-state-coefficients-isochoric",
    "type": "single",
    "points": 3,
    "stem": "某气体在初态的体膨胀系数为 \\(0.0017\\,\\mathrm{K^{-1}}\\)，等温压缩系数为 \\(2.1\\times10^{-8}\\,\\mathrm{Pa^{-1}}\\)。把容器体积保持不变，将温度小幅升高 3 K。用一阶近似求压强增量。",
    "options": [
      "\\(-2.4286\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(7.2857\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(1.2143\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(2.4286\\times10^{5}\\,\\mathrm{Pa}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 2 章",
    "explanation": "小变化满足 \\(\\mathrm dV/V=\\alpha\\,\\mathrm dT-\\kappa_T\\,\\mathrm dp\\)。定容使左边为零，因此升温造成的膨胀趋势必须由增压抵消，\\(\\Delta p=\\alpha\\Delta T/\\kappa_T\\)；单位是 Pa。代入题给数值，结果为 \\(2.4286\\times10^{5}\\,\\mathrm{Pa}\\)。"
  },
  {
    "id": "u-vdw-isothermal-energy-2",
    "family": "u-vdw-isothermal-energy",
    "type": "single",
    "points": 3,
    "stem": "1 mol 范德瓦耳斯气体的摩尔内能为 \\(U_m=C_{V,m}T-a/V_m\\)，其中 \\(a=0.153\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)。恒温下摩尔体积由 0.61 L/mol 增到 1.1285 L/mol。求内能变化。",
    "options": [
      "\\(135.58\\,\\mathrm J\\)",
      "\\(250.82\\,\\mathrm J\\)",
      "\\(-115.24\\,\\mathrm J\\)",
      "\\(115.24\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "初末温度相同，内能中的热运动项 \\(C_{V,m}T\\) 相消。分子吸引项由 \\(-a/V_{m1}\\) 变为 \\(-a/V_{m2}\\)，体积变大后其绝对值变小。先把摩尔体积换为 \\(\\mathrm{m^3\\,mol^{-1}}\\)，再求末态摩尔内能减初态摩尔内能，最后乘 1 mol 得到总内能变化。代入题给数值，结果为 \\(115.24\\,\\mathrm J\\)。"
  },
  {
    "id": "u-vdw-critical-temperature-2",
    "family": "u-vdw-critical-temperature",
    "type": "single",
    "points": 3,
    "stem": "某范德瓦耳斯气体的参数为 \\(0.212\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)、\\(7.8\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\)，分别对应 \\(a,b\\)。用临界等温线的拐点条件估算临界温度。",
    "options": [
      "\\(12.108\\,\\mathrm K\\)",
      "\\(193.73\\,\\mathrm K\\)",
      "\\(326.91\\,\\mathrm K\\)",
      "\\(96.863\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "由 \\(p=RT/(V_m-b)-a/V_m^2\\)，临界等温线满足 \\((\\partial p/\\partial V_m)_T=0\\) 和 \\((\\partial^2p/\\partial V_m^2)_T=0\\)。两式消元得到 \\(V_{m,c}=3b\\)，代回一阶导数条件得 \\(T_c=8a/(27Rb)\\)。代入题给数值，结果为 \\(96.863\\,\\mathrm K\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-compressibility-factor-2",
    "family": "u-compressibility-factor",
    "type": "single",
    "points": 2,
    "stem": "实测某气体在 290 K、2.9 MPa 下的摩尔体积为 0.74 L/mol。按 \\(Z=pV_m/(RT)\\) 定义，压缩因子约是多少？",
    "options": [
      "\\(1\\)",
      "\\(0.00089006\\)",
      "\\(1.1235\\)",
      "\\(0.89006\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "将压强换成 Pa、摩尔体积换成 \\(\\mathrm{m^3\\,mol^{-1}}\\) 后，\\(pV_m\\) 和 \\(RT\\) 都以 J/mol 计。用测得的 \\(pV_m\\) 除以同温的理想气体摩尔值 \\(RT\\)，得到无量纲的压缩因子。代入题给数值，结果为 \\(0.89006\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-wall-interface-temperature-2",
    "family": "u-wall-interface-temperature",
    "type": "single",
    "points": 3,
    "stem": "双层平板墙的两层面积相同，热面温度为 358 K，冷面为 290 K。靠热侧的第一层厚 16 mm、导热系数 0.36 W/(m·K)，第二层厚 48 mm、导热系数 0.9 W/(m·K)。达到稳定后，两层交界面温度约是多少？",
    "options": [
      "\\(320.91\\,\\mathrm K\\)",
      "\\(327.09\\,\\mathrm K\\)",
      "\\(324\\,\\mathrm K\\)",
      "\\(338.57\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "稳态下两层的单位面积热流相同，温降与热阻 \\(L/k\\) 成正比。第一层的温降是总温差乘 \\((L_1/k_1)/(L_1/k_1+L_2/k_2)\\)，从热面温度扣除该温降，得到交界面的温度。代入题给数值，结果为 \\(327.09\\,\\mathrm K\\)。"
  },
  {
    "id": "u-parallel-wall-path-2",
    "family": "u-parallel-wall-path",
    "type": "single",
    "points": 3,
    "stem": "一面厚 28 mm 的墙由两块并排材料组成，两块都贯穿墙厚。其面积分别为 0.115、0.19 m²，导热系数为 0.33、1.32 W/(m·K)。墙两面温差为 28 K，忽略横向热流。总导热功率是多少？",
    "options": [
      "\\(288.75\\,\\mathrm W\\)",
      "\\(144.37\\,\\mathrm W\\)",
      "\\(250.8\\,\\mathrm W\\)",
      "\\(32.962\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "两块材料具有相同的温差和厚度，构成并联导热路径。分别求 \\(\\dot Q_i=k_iA_i\\Delta T/L\\) 再相加。把两块热阻直接相加属于串联模型。代入题给数值，结果为 \\(288.75\\,\\mathrm W\\)。"
  },
  {
    "id": "u-cylindrical-conduction-2",
    "family": "u-cylindrical-conduction",
    "type": "single",
    "points": 3,
    "stem": "长度 0.82 m 的圆柱管壁导热系数为 0.39 W/(m·K)，内、外半径为 19 和 34.39 mm，内表面比外表面高 45 K。忽略端面漏热，稳态导热功率是多少？",
    "options": [
      "\\(152.4\\,\\mathrm W\\)",
      "\\(202.05\\,\\mathrm W\\)",
      "\\(111.63\\,\\mathrm W\\)",
      "\\(90.421\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "半径 \\(r\\) 处的导热面积是 \\(2\\pi rL\\)。稳态热流恒定，由傅里叶定律分离变量，热阻为 \\(\\int_{r_1}^{r_2}\\mathrm dr/(2\\pi kLr)=\\ln(r_2/r_1)/(2\\pi kL)\\)。总温差除以热阻。代入题给数值，结果为 \\(152.4\\,\\mathrm W\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-ice-water-melting-budget-2",
    "family": "u-ice-water-melting-budget",
    "type": "single",
    "points": 3,
    "stem": "绝热容器里有 0.21 kg、33 ℃ 的水，加入足够多的 0 ℃ 冰，使最终仍有冰剩余。取水的比热容 4180 J/(kg·K)、冰的熔化潜热 334 kJ/kg。会有多少 kg 冰熔化？",
    "options": [
      "\\(86.729\\,\\mathrm{kg}\\)",
      "\\(0.043364\\,\\mathrm{kg}\\)",
      "\\(0.17346\\,\\mathrm{kg}\\)",
      "\\(0.086729\\,\\mathrm{kg}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "仍有冰剩余，所以平衡温度是 0 ℃。原有温水降至 0 ℃ 放出的热量是 \\(m_wc_w t\\)，这部分热量全部用于冰的相变，满足 \\(m_{\\rm melt}L_f=m_wc_wt\\)。潜热需以 J/kg 代入。代入题给数值，结果为 \\(0.086729\\,\\mathrm{kg}\\)。"
  },
  {
    "id": "u-soap-bubble-surface-work-2",
    "family": "u-soap-bubble-surface-work",
    "type": "single",
    "points": 2,
    "stem": "从近似零半径缓慢吹出一个薄壁肥皂泡，最后半径为 3.7 mm，液膜的表面张力系数为 0.035 N/m。忽略其他功和损耗，新增两个液面的表面能是多少？",
    "options": [
      "\\(4.4557\\times10^{-8}\\,\\mathrm J\\)",
      "\\(2.4085\\times10^{-5}\\,\\mathrm J\\)",
      "\\(6.0212\\times10^{-6}\\,\\mathrm J\\)",
      "\\(1.2042\\times10^{-5}\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 7 章",
    "explanation": "肥皂泡有内、外两个液面，每个球面面积为 \\(4\\pi r^2\\)。表面能增量为表面张力乘总面积增量，即 \\(8\\pi r^2\\gamma\\)。只按一个液面计算会少一半。代入题给数值，结果为 \\(1.2042\\times10^{-5}\\,\\mathrm J\\)。"
  },
  {
    "id": "u-saturated-headspace-2",
    "family": "u-saturated-headspace",
    "type": "single",
    "points": 2,
    "stem": "密闭容器中有液态水，液面上方的气相空间为 4 L。保持 307 K，水的饱和蒸气压为 5.276 kPa。达到平衡后仍有液态水。将水蒸气视为理想气体，求气相中水的物质的量。",
    "options": [
      "\\(8.2683\\,\\mathrm{mol}\\)",
      "\\(0.0082683\\,\\mathrm{mol}\\)",
      "\\(8.2683\\times10^{-6}\\,\\mathrm{mol}\\)",
      "\\(0.016537\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "有液水与蒸气共存时，水蒸气分压等于该温度的饱和蒸气压。只把气相空间体积代入状态方程 \\(n_{\\rm vap}=p_{\\rm sat}V_{\\rm gas}/(RT)\\)，液态水的体积不算入气体体积。代入题给数值，结果为 \\(0.0082683\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-vapour-pressure-two-temperatures-2",
    "family": "u-vapour-pressure-two-temperatures",
    "type": "single",
    "points": 3,
    "stem": "某液体在 302 K 的饱和蒸气压为 15 kPa。在此温区内取摩尔汽化潜热 30 kJ/mol 为常量，忽略液体摩尔体积，把蒸气视为理想气体。估算 315 K 的饱和蒸气压。",
    "options": [
      "\\(24.561\\,\\mathrm{kPa}\\)",
      "\\(15.646\\,\\mathrm{kPa}\\)",
      "\\(15\\,\\mathrm{kPa}\\)",
      "\\(9.1609\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 8 章",
    "explanation": "克拉珀龙方程在题设近似下化为 \\(\\mathrm d(\\ln p)/\\mathrm dT=L/(RT^2)\\)。由 \\(T_1\\) 积分到 \\(T_2\\)，得 \\(\\ln(p_2/p_1)=(L/R)(1/T_1-1/T_2)\\)。温度提高时指数为正，蒸气压增大。代入题给数值，结果为 \\(24.561\\,\\mathrm{kPa}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-entropy-variable-cv-2",
    "family": "u-entropy-variable-cv",
    "type": "single",
    "points": 3,
    "stem": "一定量气体在刚性容器里由 286 K 升到 350 K。整份气体的定容热容为 \\(C_V(T)=a+bT\\)，其中 \\(a=14\\,\\mathrm{J/K}\\)、\\(b=0.049\\,\\mathrm{J/K^2}\\)。求气体的熵变。",
    "options": [
      "\\(6.2905\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2.8272\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(5.9632\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(3.136\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "取相同端点间的一条可逆等容路径。因 \\(\\mathrm dS=C_V(T)\\,\\mathrm dT/T\\)，积分核可写成 \\(a/T+b\\)。前一项积分为 \\(a\\ln(T_2/T_1)\\)，后一项给出 \\(b(T_2-T_1)\\)。代入题给数值，结果为 \\(5.9632\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-cooling-work-2",
    "family": "u-finite-cooling-work",
    "type": "single",
    "points": 3,
    "stem": "一个热容恒为 100 J/K 的物体起初处在 420 K。让它作为可逆热机的高温端逐步冷却，低温热库保持 293 K。物体冷却到热库温度时，热机累计输出的功为多少？",
    "options": [
      "\\(3840.2\\,\\mathrm J\\)",
      "\\(2149.6\\,\\mathrm J\\)",
      "\\(10550\\,\\mathrm J\\)",
      "\\(12700\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "每一步热机的高温端温度都等于物体的即时温度 \\(T\\)。物体放出的热量为 \\(C\\,|\\mathrm dT|\\)，其中 \\(1-T_0/T\\) 的比例转为功。从 \\(T_0\\) 积到 \\(T_h\\)，得到 \\(C(T_h-T_0)-CT_0\\ln(T_h/T_0)\\)。代入题给数值，结果为 \\(2149.6\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-reversible-equilibrium-2",
    "family": "u-finite-reversible-equilibrium",
    "type": "single",
    "points": 3,
    "stem": "两个热容分别恒为 100、145 J/K 的物体，初温分别为 422、277 K。将它们作为可逆热机的两个热端，缓慢运行至两物体等温。忽略其他热交换，求共同末温。",
    "options": [
      "\\(341.9\\,\\mathrm K\\)",
      "\\(336.18\\,\\mathrm K\\)",
      "\\(328.93\\,\\mathrm K\\)",
      "\\(349.5\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "可逆热机循环中没有净熵变，两个物体与外界也没有热交换，所以 \\(C_1\\ln(T_f/T_1)+C_2\\ln(T_f/T_2)=0\\)。把共同末温的对数项移到同一边，再取指数。若令两物体净放热为零，就漏算了热机向外做功。代入题给数值，结果为 \\(328.93\\,\\mathrm K\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-heat-pump-cycle-count-2",
    "family": "u-heat-pump-cycle-count",
    "type": "single",
    "points": 2,
    "stem": "一台可逆热泵在 605 K 和 295 K 的两个热源之间工作。高温端平均每秒得到 1530 J 热量，热泵每秒运行 1.55 个循环。每个循环要输入多少功？",
    "options": [
      "\\(505.79\\,\\mathrm J\\)",
      "\\(987.1\\,\\mathrm J\\)",
      "\\(481.31\\,\\mathrm J\\)",
      "\\(1037.3\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "用热量的正数大小记号。可逆热泵有 \\(Q_c/Q_h=T_c/T_h\\)，故输入功为 \\(Q_h(1-T_c/T_h)\\)。题中给的供热量是每秒的，把输入功率再除以每秒循环数才得到每循环的输入功。代入题给数值，结果为 \\(505.79\\,\\mathrm J\\)。"
  },
  {
    "id": "u-cascade-second-engine-work-2",
    "family": "u-cascade-second-engine-work",
    "type": "single",
    "points": 2,
    "stem": "两台可逆热机串联。第一台在 655 K 和 468 K 间运行，每循环吸热 430 J。第一台排出的热量全部交给第二台，后者在 468 K 和 304 K 间运行。问与第一台这一次循环对应，第二台输出多少功？",
    "options": [
      "\\(150.68\\,\\mathrm J\\)",
      "\\(230.43\\,\\mathrm J\\)",
      "\\(107.66\\,\\mathrm J\\)",
      "\\(122.76\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "第一台排热为 \\(Q_hT_m/T_h\\)，这正是第二台获得的热量。第二台效率为 \\(1-T_c/T_m\\)，所以它的功是 \\(Q_h(T_m-T_c)/T_h\\)。若直接把第一台吸热当成第二台的输入，会高估输出。代入题给数值，结果为 \\(107.66\\,\\mathrm J\\)。"
  },
  {
    "id": "u-rectangular-cycle-efficiency-2",
    "family": "u-rectangular-cycle-efficiency",
    "type": "single",
    "points": 3,
    "stem": "理想气体沿 \\(p\\!-\\!V\\) 图上的顺时针矩形循环。低、高压分别为 96、198 kPa，小、大体积分别为 2.1、5.3 L。给定摩尔定容热容 \\(C_{V,m}=2.5R\\)，求热机效率（百分数）。",
    "options": [
      "\\(51.515\\,\\%\\)",
      "\\(17.784\\,\\%\\)",
      "\\(5.9279\\,\\%\\)",
      "\\(11.856\\,\\%\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "净功是矩形面积 \\((p_h-p_l)(V_h-V_l)\\)。在小体积等容增压吸收 \\((C_{V,m}/R)(p_h-p_l)V_l\\)，在高压下等压膨胀吸收 \\((C_{p,m}/R)p_h(V_h-V_l)\\)。另两段均放热。将净功除以上述两段吸热之和。代入题给数值，结果为 \\(11.856\\,\\%\\)。"
  },
  {
    "id": "u-polytropic-molar-heat-2",
    "family": "u-polytropic-molar-heat",
    "type": "single",
    "points": 3,
    "stem": "单原子理想气体沿准静态路径 \\(pV^m=\\mathrm{const}\\) 变化，指数 \\(m=1.84\\)。路径的摩尔热容 \\(\\delta Q/(n\\,\\mathrm dT)\\) 约是多少？",
    "options": [
      "\\(2.5\\,R\\)",
      "\\(1.5\\,R\\)",
      "\\(2.6905\\,R\\)",
      "\\(0.30952\\,R\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "联立 \\(pV^m=\\mathrm{const}\\) 与 \\(pV=nRT\\)，得 \\(\\mathrm dT/T=(1-m)\\mathrm dV/V\\)。由第一定律，\\(\\delta Q=nC_{V,m}\\mathrm dT+p\\,\\mathrm dV\\)，故路径热容为 \\(C_{V,m}+R/(1-m)\\)。这里的热容沿指定路径定义。代入题给数值，结果为 \\(0.30952\\,R\\)。"
  },
  {
    "id": "u-external-pressure-adiabat-2",
    "family": "u-external-pressure-adiabat",
    "type": "single",
    "points": 3,
    "stem": "气缸中有初温 347 K、初压 \\(p_i\\) 的理想气体，其摩尔定容热容为 \\(2.5R\\)。绝热地突然将恒定外压降至 \\(0.41p_i\\)，活塞移动，最终静止并达到力学平衡。忽略活塞的质量、摩擦及高度变化，求气体末温。",
    "options": [
      "\\(142.27\\,\\mathrm K\\)",
      "\\(347\\,\\mathrm K\\)",
      "\\(288.51\\,\\mathrm K\\)",
      "\\(268.97\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "全过程边界功为 \\(p_e(V_f-V_i)\\)。绝热第一定律给 \\(nC_{V,m}(T_f-T_i)=-p_e(V_f-V_i)\\)。利用终态 \\(p_eV_f=nRT_f\\) 与初态 \\(p_iV_i=nRT_i\\)，可解出 \\(T_f/T_i=(C_{V,m}/R+p_e/p_i)/(C_{V,m}/R+1)\\)。突变外压的过程不可用可逆绝热关系。代入题给数值，结果为 \\(288.51\\,\\mathrm K\\)。"
  },
  {
    "id": "u-path-heat-difference-2",
    "family": "u-path-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体起始为 123 kPa、2.2 L，末态体积 4.5 L，末温与初温相同。路径甲沿初压等压膨胀后等容冷却，路径乙为可逆等温膨胀。求甲比乙多吸收的净热量。",
    "options": [
      "\\(282.9\\,\\mathrm J\\)",
      "\\(89.253\\,\\mathrm J\\)",
      "\\(-89.253\\,\\mathrm J\\)",
      "\\(193.65\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "两条路径的初末温度相同，理想气体 \\(\\Delta U=0\\)，所以各自净吸热等于各自净功。甲只有等压段做功 \\(p_1(V_2-V_1)\\)，乙做功 \\(p_1V_1\\ln(V_2/V_1)\\)。两者相减，\\(\\mathrm{kPa\\,L}\\) 可直接换成 J。代入题给数值，结果为 \\(89.253\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-calorimetry-specific-heat-2",
    "family": "u-calorimetry-specific-heat",
    "type": "single",
    "points": 3,
    "stem": "热容为 42 J/K 的量热器装有 0.36 kg 的水，初温均为 21 ℃。把 0.48 kg、82 ℃ 的金属块迅速浸入，达到 29 ℃。忽略向环境漏热，水的比热容取 4180 J/(kg·K)。求金属的比热容。",
    "options": [
      "\\(486.42\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(473.21\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(233.48\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(3222.5\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "金属放热 \\(mc_m(t_m-t_f)\\)，水和量热器共同吸热 \\((m_wc_w+C_{\\mathrm{cal}})(t_f-t_w)\\)。量热器给的是总热容，水要先用质量乘比热容，两项才能相加。代入题给数值，结果为 \\(486.42\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-mixture-specific-heat-difference-2",
    "family": "u-mixture-specific-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体混合物由氦和氮组成，氦的质量分数是 35%。氦、氮的摩尔质量分别取 4、28 g/mol。求混合物按单位质量计的 \\(c_p-c_v\\)。",
    "options": [
      "\\(0.92048\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(424.18\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(8.314\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(920.48\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "每摩尔理想气体有 \\(C_{p,m}-C_{V,m}=R\\)。以 1 kg 混合气体为基准，其摩尔数为 \\(w_{\\rm He}/M_{\\rm He}+w_{\\rm N}/M_{\\rm N}\\)，乘 \\(R\\) 就得到按每千克计的差值。题给质量分数须先换算成摩尔数。代入题给数值，结果为 \\(920.48\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-pressure-melting-shift-2",
    "family": "u-pressure-melting-shift",
    "type": "single",
    "points": 3,
    "stem": "某晶体在给定压力下的熔点为 274 K，固、液密度分别为 913、998 kg/m³，熔化潜热为 332 kJ/kg。将压强提高 41 MPa，把这些参数视为常量。估算熔点变化。",
    "options": [
      "\\(3.1566\\,\\mathrm K\\)",
      "\\(-3.1566\\,\\mathrm K\\)",
      "\\(-0.031566\\,\\mathrm K\\)",
      "\\(-31.566\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "熔化过程的质量比容变化为 \\(\\Delta v=1/\\rho_l-1/\\rho_s\\)。克拉珀龙式给 \\(\\mathrm dT/\\mathrm dp=T\\Delta v/L\\)，乘压强增量得近似温变。液相更密，\\(\\Delta v<0\\)，提高压强会使熔点下降。代入题给数值，结果为 \\(-3.1566\\,\\mathrm K\\)。"
  },
  {
    "id": "u-barometric-height-from-density-2",
    "family": "u-barometric-height-from-density",
    "type": "single",
    "points": 2,
    "stem": "在恒温 297 K、重力加速度取 9.81 m/s² 的大气层里，气体平均摩尔质量为 26 g/mol。气体可视为理想气体。到达多大高度时，气体密度是地面密度的 57%？",
    "options": [
      "\\(-5441.9\\,\\mathrm m\\)",
      "\\(4162.9\\,\\mathrm m\\)",
      "\\(5.4419\\,\\mathrm m\\)",
      "\\(5441.9\\,\\mathrm m\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "等温静力平衡中，\\(\\mathrm d\\ln p/\\mathrm dz=-Mg/(RT)\\)。因为 \\(T\\) 与 \\(M\\) 固定，\\(\\rho/\\rho_0=p/p_0=e^{-Mgz/(RT)}\\)。对给定密度比取自然对数后求 \\(z\\)。代入题给数值，结果为 \\(5441.9\\,\\mathrm m\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-unequal-volume-occupancy-2",
    "family": "u-unequal-volume-occupancy",
    "type": "single",
    "points": 2,
    "stem": "容器被想象中的分界面分成两部分，左区占总体积 23%。有 10 个可区分的理想气体分子，平衡时可把各分子的位置看作相互独立。任一时刻恰有 4 个分子在左区的概率约为多少？",
    "options": [
      "\\(0.20508\\)",
      "\\(0.010928\\)",
      "\\(0.00058325\\)",
      "\\(0.12248\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 1 章",
    "explanation": "先指定哪 \\(m\\) 个粒子在左边，对应概率是 \\(p^m(1-p)^{N-m}\\)。有 \\(\\binom Nm\\) 种指定法，且事件互斥。因此用二项分布取恰好 \\(m\\) 的一项，\\(p\\) 是左区体积分数。代入题给数值，结果为 \\(0.12248\\)。"
  },
  {
    "id": "u-bath-entropy-isothermal-compression-2",
    "family": "u-bath-entropy-isothermal-compression",
    "type": "single",
    "points": 2,
    "stem": "把 1.27 mol 理想气体与 306 K 的大热库保持热接触，并可逆等温地压缩气体，直到初体积与末体积之比为 1.9。热库的熵变约是多少？",
    "options": [
      "\\(12.877\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(6.7772\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2073.8\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-6.7772\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "气体等温压缩时内能不变，外界对气体做的功全部以热量流向热库。气体熵变是 \\(nR\\ln(V_f/V_i)<0\\)，过程可逆，热库熵增等于其相反数。结果是热库的熵变，单位为 J/K。代入题给数值，结果为 \\(6.7772\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-diffusion-number-density-change-2",
    "family": "u-diffusion-number-density-change",
    "type": "single",
    "points": 2,
    "stem": "同一种稀薄硬球气体在温度 305 K 时扩散系数为 0.016 m²/s。改为 399 K，分子数密度变为原来的 1.6 倍。估算新状态下的扩散系数。",
    "options": [
      "\\(0.013082\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.0183\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.01\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.011438\\,\\mathrm{m^2\\,s^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "平均自由程随分子数密度的倒数变化，分子平均速率随绝对温度平方根变化。用 \\(D\\simeq\\bar v\\lambda/3\\) 得 \\(D_2/D_1=\\sqrt{T_2/T_1}/(n_2/n_1)\\)。同一种气体的分子碰撞直径在两种状态中相同。代入题给数值，结果为 \\(0.011438\\,\\mathrm{m^2\\,s^{-1}}\\)。"
  },
  {
    "id": "u-piston-isothermal-entropy-generation-2",
    "family": "u-piston-isothermal-entropy-generation",
    "type": "single",
    "points": 3,
    "stem": "1 mol 理想气体初始与恒温 337 K 的热库达到热平衡。外压从初态气压突然提高到原来的 1.35 倍，活塞在恒定外压下重新静止后，气体再次与热库达到热平衡。求气体和热库的总熵变。",
    "options": [
      "\\(-0.41483\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2.4951\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(0.41483\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2.9099\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "等温末态有 \\(V_f=V_i/k\\)。恒外压使外界对气体做功 \\(kp_i(V_i-V_f)=(k-1)RT\\)，等温气体将这些能量作为热传给热库，故热库熵增 \\((k-1)R\\)。气体熵变为 \\(R\\ln(V_f/V_i)=-R\\ln k\\)，二者相加。代入题给数值，结果为 \\(0.41483\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-effusion-mixture-3",
    "family": "u-effusion-mixture",
    "type": "single",
    "points": 2,
    "stem": "同温容器里有 A、B 两种稀薄理想气体，二者分压相同，摩尔质量分别是 16 和 40 g/mol。容器有一个直径远小于自由程的小孔。刚打开小孔时，A 与 B 逸出粒子数率之比约是多少？",
    "options": [
      "\\(2.5\\)",
      "\\(1\\)",
      "\\(0.63246\\)",
      "\\(1.5811\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "小孔逸出由撞向孔口的分子通量决定，通量 \\(J=n\\bar v/4\\)。分压和温度均相同，所以两组分数密度相等。麦克斯韦平均速率在同温下正比于 \\(M^{-1/2}\\)，故逸出率比为 \\(\\sqrt{M_B/M_A}\\)。这里比较的是粒子数率，质量流率还要乘粒子质量。代入题给数值，结果为 \\(1.5811\\)。"
  },
  {
    "id": "u-wall-hit-count-3",
    "family": "u-wall-hit-count",
    "type": "single",
    "points": 2,
    "stem": "各向同性的气体分子数密度为 \\(2\\times10^{21}\\,\\mathrm{m^{-3}}\\)，平均速率为 390 m/s。取器壁上一块 \\(4\\times10^{-5}\\,\\mathrm{m^2}\\) 的面积，统计 0.08 s，预计发生的碰壁总次数约为多少？",
    "options": [
      "\\(3.12\\times10^{17}\\)",
      "\\(6.24\\times10^{17}\\)",
      "\\(2.496\\times10^{18}\\)",
      "\\(1.248\\times10^{18}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "撞壁只来自朝向器壁的半空间，计数还需乘速度的法向投影。对各向同性方向积分后，单位面积、单位时间的平均撞壁数是 \\(n\\bar v/4\\)。再乘面积与统计时长。代入题给数值，结果为 \\(6.24\\times10^{17}\\)。"
  },
  {
    "id": "u-free-path-survival-3",
    "family": "u-free-path-survival",
    "type": "single",
    "points": 2,
    "stem": "某平衡稀薄气体的分子平均自由程为 50 nm。近似把单位路程内的碰撞概率视为常数。一个分子自上次碰撞后至少再飞行 51 nm 而没有发生新碰撞的概率约为多少？",
    "options": [
      "\\(0.36059\\)",
      "\\(0.49505\\)",
      "\\(0.37516\\)",
      "\\(0.63941\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "若单位路程上碰撞概率近似恒定，未碰撞概率 \\(P(x)\\) 满足 \\(\\mathrm dP/\\mathrm dx=-P/\\lambda\\)，且 \\(P(0)=1\\)。因此 \\(P(x)=e^{-x/\\lambda}\\)。题目问存活概率，\\(1-P(x)\\) 才是发生碰撞的概率。代入题给数值，结果为 \\(0.36059\\)。"
  },
  {
    "id": "u-single-molecule-wall-force-3",
    "family": "u-single-molecule-wall-force",
    "type": "single",
    "points": 3,
    "stem": "一质量 \\(5\\times10^{-26}\\,\\mathrm{kg}\\) 的分子只沿长度为 4 cm 的容器的法向运动，速率为 450 m/s，在两端壁之间来回弹性反射。忽略其他分子，求这个分子对其中一端壁的时间平均作用力。",
    "options": [
      "\\(5.0625\\times10^{-19}\\,\\mathrm N\\)",
      "\\(2.5313\\times10^{-19}\\,\\mathrm N\\)",
      "\\(1.2656\\times10^{-19}\\,\\mathrm N\\)",
      "\\(2.5313\\times10^{-21}\\,\\mathrm N\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "每次与指定壁弹性碰撞时，交给壁的冲量是 \\(2mv\\)。下一次撞到同一壁要完成一个往返，间隔 \\(2L/v\\)。平均力为冲量除以间隔，即 \\(mv^2/L\\)。长度应由 cm 换成 m。代入题给数值，结果为 \\(2.5313\\times10^{-19}\\,\\mathrm N\\)。"
  },
  {
    "id": "u-uniform-rms-3",
    "family": "u-uniform-rms",
    "type": "single",
    "points": 2,
    "stem": "一组分子的速率在 0 和 400 m/s 之间均匀分布。求其方均根速率。",
    "options": [
      "\\(200\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(282.84\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(133.33\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(230.94\\,\\mathrm{m\\,s^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "速率概率密度为 \\(1/v_0\\)。方均根速率要先算 \\(\\langle v^2\\rangle=v_0^{-1}\\int_0^{v_0}v^2\\,\\mathrm dv=v_0^2/3\\)，再开平方。直接对 \\(v\\) 取平均会得到 \\(v_0/2\\)，与所求不同。代入题给数值，结果为 \\(230.94\\,\\mathrm{m\\,s^{-1}}\\)。"
  },
  {
    "id": "u-degenerate-level-3",
    "family": "u-degenerate-level",
    "type": "single",
    "points": 3,
    "stem": "某系统每个粒子只可占据两个能量值。下能级有 3 个等能微观状态，上能级有 2 个，能隙为 1.18 倍的 \\(k_{\\mathrm B}T\\)。在温度 \\(T\\) 的热平衡下，上能级的粒子比例约是多少？",
    "options": [
      "\\(0.4\\)",
      "\\(0.17002\\)",
      "\\(0.23505\\)",
      "\\(0.82998\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "同一能级内每个等能态的玻尔兹曼权重相同，因此总权重还需乘简并数。将下能级能量取零，上、下权重分别为 \\(g_{\\rm u}e^{-\\Delta E/(k_BT)}\\) 与 \\(g_{\\rm l}\\)。用上能级权重除以两者总和。代入题给数值，结果为 \\(0.17002\\)。"
  },
  {
    "id": "u-selective-particle-removal-3",
    "family": "u-selective-particle-removal",
    "type": "single",
    "points": 2,
    "stem": "一刚性容器的容积为 4.4 L，装有同温理想气体 A、B，A 的初始分压为 96 kPa。温度恒为 300 K，只移走 A 组分中 33% 的分子。A 的物质的量减少多少？",
    "options": [
      "\\(0.16935\\,\\mathrm{mol}\\)",
      "\\(0.037444\\,\\mathrm{mol}\\)",
      "\\(5.5886\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(0.055886\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "只对 A 组分用状态方程，初始物质的量 \\(n_{A0}=p_AV/(RT)\\)，题设比例乘的是 A 的初始物质的量。这里 \\(T=300\\,\\mathrm K\\)，并可用 \\(1\\,\\mathrm{kPa\\,L}=1\\,\\mathrm J\\) 直接换算。代入题给数值，结果为 \\(0.055886\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-gauge-pressure-heating-3",
    "family": "u-gauge-pressure-heating",
    "type": "single",
    "points": 2,
    "stem": "密闭刚性容器内的理想气体初温 290 K，压力表显示表压 55 kPa。加热到 340 K，外界大气压一直为 100 kPa。末态压力表显示的表压约是多少？",
    "options": [
      "\\(64.483\\,\\mathrm{kPa}\\)",
      "\\(81.724\\,\\mathrm{kPa}\\)",
      "\\(181.72\\,\\mathrm{kPa}\\)",
      "\\(109.22\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "气体状态方程用绝对压强。先将初始表压加大气压，再利用恒容恒质量条件 \\(p_{\\rm abs,2}/p_{\\rm abs,1}=T_2/T_1\\)。最后将末态绝对压强减去大气压，才得到表压。代入题给数值，结果为 \\(81.724\\,\\mathrm{kPa}\\)。"
  },
  {
    "id": "u-mixing-different-heat-capacities-3",
    "family": "u-mixing-different-heat-capacities",
    "type": "single",
    "points": 3,
    "stem": "绝热刚性容器的两侧分别有 1.4 mol 单原子理想气体（286 K）和 1.7 mol 刚性双原子理想气体（406 K）。移去隔板，混合至同一温度。最终温度约是多少？",
    "options": [
      "\\(366.31\\,\\mathrm K\\)",
      "\\(351.81\\,\\mathrm K\\)",
      "\\(406\\,\\mathrm K\\)",
      "\\(346\\,\\mathrm K\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "外壁绝热且刚性，混合系统没有从外界吸热也没有做体积功，总内能守恒。两组分的定容摩尔热容分别为 \\(3R/2\\) 和 \\(5R/2\\)，故终温以两组分的总定容热容 \\(n_i C_{V,m,i}\\) 加权，而非仅按物质的量平均。代入题给数值，结果为 \\(366.31\\,\\mathrm K\\)。"
  },
  {
    "id": "u-state-coefficients-isochoric-3",
    "family": "u-state-coefficients-isochoric",
    "type": "single",
    "points": 3,
    "stem": "某气体在初态的体膨胀系数为 \\(0.0018\\,\\mathrm{K^{-1}}\\)，等温压缩系数为 \\(2.3\\times10^{-8}\\,\\mathrm{Pa^{-1}}\\)。把容器体积保持不变，将温度小幅升高 4 K。用一阶近似求压强增量。",
    "options": [
      "\\(1.5652\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(-3.1304\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(1.2522\\times10^{6}\\,\\mathrm{Pa}\\)",
      "\\(3.1304\\times10^{5}\\,\\mathrm{Pa}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 2 章",
    "explanation": "小变化满足 \\(\\mathrm dV/V=\\alpha\\,\\mathrm dT-\\kappa_T\\,\\mathrm dp\\)。定容使左边为零，因此升温造成的膨胀趋势必须由增压抵消，\\(\\Delta p=\\alpha\\Delta T/\\kappa_T\\)；单位是 Pa。代入题给数值，结果为 \\(3.1304\\times10^{5}\\,\\mathrm{Pa}\\)。"
  },
  {
    "id": "u-vdw-isothermal-energy-3",
    "family": "u-vdw-isothermal-energy",
    "type": "single",
    "points": 3,
    "stem": "1 mol 范德瓦耳斯气体的摩尔内能为 \\(U_m=C_{V,m}T-a/V_m\\)，其中 \\(a=0.176\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)。恒温下摩尔体积由 0.67 L/mol 增到 1.34 L/mol。求内能变化。",
    "options": [
      "\\(262.69\\,\\mathrm J\\)",
      "\\(-131.34\\,\\mathrm J\\)",
      "\\(101.13\\,\\mathrm J\\)",
      "\\(131.34\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "初末温度相同，内能中的热运动项 \\(C_{V,m}T\\) 相消。分子吸引项由 \\(-a/V_{m1}\\) 变为 \\(-a/V_{m2}\\)，体积变大后其绝对值变小。先把摩尔体积换为 \\(\\mathrm{m^3\\,mol^{-1}}\\)，再求末态摩尔内能减初态摩尔内能，最后乘 1 mol 得到总内能变化。代入题给数值，结果为 \\(131.34\\,\\mathrm J\\)。"
  },
  {
    "id": "u-vdw-critical-temperature-3",
    "family": "u-vdw-critical-temperature",
    "type": "single",
    "points": 3,
    "stem": "某范德瓦耳斯气体的参数为 \\(0.244\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)、\\(8.6\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\)，分别对应 \\(a,b\\)。用临界等温线的拐点条件估算临界温度。",
    "options": [
      "\\(202.23\\,\\mathrm K\\)",
      "\\(12.639\\,\\mathrm K\\)",
      "\\(341.26\\,\\mathrm K\\)",
      "\\(101.11\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "由 \\(p=RT/(V_m-b)-a/V_m^2\\)，临界等温线满足 \\((\\partial p/\\partial V_m)_T=0\\) 和 \\((\\partial^2p/\\partial V_m^2)_T=0\\)。两式消元得到 \\(V_{m,c}=3b\\)，代回一阶导数条件得 \\(T_c=8a/(27Rb)\\)。代入题给数值，结果为 \\(101.11\\,\\mathrm K\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-compressibility-factor-3",
    "family": "u-compressibility-factor",
    "type": "single",
    "points": 2,
    "stem": "实测某气体在 305 K、3.3 MPa 下的摩尔体积为 0.79 L/mol。按 \\(Z=pV_m/(RT)\\) 定义，压缩因子约是多少？",
    "options": [
      "\\(1.0281\\)",
      "\\(0.0010281\\)",
      "\\(1\\)",
      "\\(0.97268\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "将压强换成 Pa、摩尔体积换成 \\(\\mathrm{m^3\\,mol^{-1}}\\) 后，\\(pV_m\\) 和 \\(RT\\) 都以 J/mol 计。用测得的 \\(pV_m\\) 除以同温的理想气体摩尔值 \\(RT\\)，得到无量纲的压缩因子。代入题给数值，结果为 \\(1.0281\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-wall-interface-temperature-3",
    "family": "u-wall-interface-temperature",
    "type": "single",
    "points": 3,
    "stem": "双层平板墙的两层面积相同，热面温度为 361 K，冷面为 292 K。靠热侧的第一层厚 18 mm、导热系数 0.41 W/(m·K)，第二层厚 51 mm、导热系数 1 W/(m·K)。达到稳定后，两层交界面温度约是多少？",
    "options": [
      "\\(329.08\\,\\mathrm K\\)",
      "\\(323.92\\,\\mathrm K\\)",
      "\\(326.5\\,\\mathrm K\\)",
      "\\(340.94\\,\\mathrm K\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "稳态下两层的单位面积热流相同，温降与热阻 \\(L/k\\) 成正比。第一层的温降是总温差乘 \\((L_1/k_1)/(L_1/k_1+L_2/k_2)\\)，从热面温度扣除该温降，得到交界面的温度。代入题给数值，结果为 \\(329.08\\,\\mathrm K\\)。"
  },
  {
    "id": "u-parallel-wall-path-3",
    "family": "u-parallel-wall-path",
    "type": "single",
    "points": 3,
    "stem": "一面厚 32 mm 的墙由两块并排材料组成，两块都贯穿墙厚。其面积分别为 0.13、0.21 m²，导热系数为 0.37、1.44 W/(m·K)。墙两面温差为 32 K，忽略横向热流。总导热功率是多少？",
    "options": [
      "\\(350.5\\,\\mathrm W\\)",
      "\\(302.4\\,\\mathrm W\\)",
      "\\(41.499\\,\\mathrm W\\)",
      "\\(175.25\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "两块材料具有相同的温差和厚度，构成并联导热路径。分别求 \\(\\dot Q_i=k_iA_i\\Delta T/L\\) 再相加。把两块热阻直接相加属于串联模型。代入题给数值，结果为 \\(350.5\\,\\mathrm W\\)。"
  },
  {
    "id": "u-cylindrical-conduction-3",
    "family": "u-cylindrical-conduction",
    "type": "single",
    "points": 3,
    "stem": "长度 0.94 m 的圆柱管壁导热系数为 0.43 W/(m·K)，内、外半径为 22 和 42.24 mm，内表面比外表面高 50 K。忽略端面漏热，稳态导热功率是多少？",
    "options": [
      "\\(138.03\\,\\mathrm W\\)",
      "\\(194.66\\,\\mathrm W\\)",
      "\\(265.01\\,\\mathrm W\\)",
      "\\(126.98\\,\\mathrm W\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "半径 \\(r\\) 处的导热面积是 \\(2\\pi rL\\)。稳态热流恒定，由傅里叶定律分离变量，热阻为 \\(\\int_{r_1}^{r_2}\\mathrm dr/(2\\pi kLr)=\\ln(r_2/r_1)/(2\\pi kL)\\)。总温差除以热阻。代入题给数值，结果为 \\(194.66\\,\\mathrm W\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-ice-water-melting-budget-3",
    "family": "u-ice-water-melting-budget",
    "type": "single",
    "points": 3,
    "stem": "绝热容器里有 0.24 kg、38 ℃ 的水，加入足够多的 0 ℃ 冰，使最终仍有冰剩余。取水的比热容 4180 J/(kg·K)、冰的熔化潜热 334 kJ/kg。会有多少 kg 冰熔化？",
    "options": [
      "\\(0.057068\\,\\mathrm{kg}\\)",
      "\\(0.11414\\,\\mathrm{kg}\\)",
      "\\(114.14\\,\\mathrm{kg}\\)",
      "\\(0.22827\\,\\mathrm{kg}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "仍有冰剩余，所以平衡温度是 0 ℃。原有温水降至 0 ℃ 放出的热量是 \\(m_wc_w t\\)，这部分热量全部用于冰的相变，满足 \\(m_{\\rm melt}L_f=m_wc_wt\\)。潜热需以 J/kg 代入。代入题给数值，结果为 \\(0.11414\\,\\mathrm{kg}\\)。"
  },
  {
    "id": "u-soap-bubble-surface-work-3",
    "family": "u-soap-bubble-surface-work",
    "type": "single",
    "points": 2,
    "stem": "从近似零半径缓慢吹出一个薄壁肥皂泡，最后半径为 4.4 mm，液膜的表面张力系数为 0.039 N/m。忽略其他功和损耗，新增两个液面的表面能是多少？",
    "options": [
      "\\(3.7952\\times10^{-5}\\,\\mathrm J\\)",
      "\\(9.4881\\times10^{-6}\\,\\mathrm J\\)",
      "\\(1.8976\\times10^{-5}\\,\\mathrm J\\)",
      "\\(8.3495\\times10^{-8}\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 7 章",
    "explanation": "肥皂泡有内、外两个液面，每个球面面积为 \\(4\\pi r^2\\)。表面能增量为表面张力乘总面积增量，即 \\(8\\pi r^2\\gamma\\)。只按一个液面计算会少一半。代入题给数值，结果为 \\(1.8976\\times10^{-5}\\,\\mathrm J\\)。"
  },
  {
    "id": "u-saturated-headspace-3",
    "family": "u-saturated-headspace",
    "type": "single",
    "points": 2,
    "stem": "密闭容器中有液态水，液面上方的气相空间为 4.5 L。保持 311 K，水的饱和蒸气压为 6.573 kPa。达到平衡后仍有液态水。将水蒸气视为理想气体，求气相中水的物质的量。",
    "options": [
      "\\(0.011439\\,\\mathrm{mol}\\)",
      "\\(1.1439\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(0.022879\\,\\mathrm{mol}\\)",
      "\\(11.439\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "有液水与蒸气共存时，水蒸气分压等于该温度的饱和蒸气压。只把气相空间体积代入状态方程 \\(n_{\\rm vap}=p_{\\rm sat}V_{\\rm gas}/(RT)\\)，液态水的体积不算入气体体积。代入题给数值，结果为 \\(0.011439\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-vapour-pressure-two-temperatures-3",
    "family": "u-vapour-pressure-two-temperatures",
    "type": "single",
    "points": 3,
    "stem": "某液体在 304 K 的饱和蒸气压为 17 kPa。在此温区内取摩尔汽化潜热 32 kJ/mol 为常量，忽略液体摩尔体积，把蒸气视为理想气体。估算 318 K 的饱和蒸气压。",
    "options": [
      "\\(17\\,\\mathrm{kPa}\\)",
      "\\(9.7358\\,\\mathrm{kPa}\\)",
      "\\(29.684\\,\\mathrm{kPa}\\)",
      "\\(17.783\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 8 章",
    "explanation": "克拉珀龙方程在题设近似下化为 \\(\\mathrm d(\\ln p)/\\mathrm dT=L/(RT^2)\\)。由 \\(T_1\\) 积分到 \\(T_2\\)，得 \\(\\ln(p_2/p_1)=(L/R)(1/T_1-1/T_2)\\)。温度提高时指数为正，蒸气压增大。代入题给数值，结果为 \\(29.684\\,\\mathrm{kPa}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-entropy-variable-cv-3",
    "family": "u-entropy-variable-cv",
    "type": "single",
    "points": 3,
    "stem": "一定量气体在刚性容器里由 292 K 升到 360 K。整份气体的定容热容为 \\(C_V(T)=a+bT\\)，其中 \\(a=16\\,\\mathrm{J/K}\\)、\\(b=0.053\\,\\mathrm{J/K^2}\\)。求气体的熵变。",
    "options": [
      "\\(6.9536\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(3.604\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(3.3496\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(7.344\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "取相同端点间的一条可逆等容路径。因 \\(\\mathrm dS=C_V(T)\\,\\mathrm dT/T\\)，积分核可写成 \\(a/T+b\\)。前一项积分为 \\(a\\ln(T_2/T_1)\\)，后一项给出 \\(b(T_2-T_1)\\)。代入题给数值，结果为 \\(6.9536\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-cooling-work-3",
    "family": "u-finite-cooling-work",
    "type": "single",
    "points": 3,
    "stem": "一个热容恒为 115 J/K 的物体起初处在 440 K。让它作为可逆热机的高温端逐步冷却，低温热库保持 296 K。物体冷却到热库温度时，热机累计输出的功为多少？",
    "options": [
      "\\(13494\\,\\mathrm J\\)",
      "\\(3066\\,\\mathrm J\\)",
      "\\(16560\\,\\mathrm J\\)",
      "\\(5419.6\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "每一步热机的高温端温度都等于物体的即时温度 \\(T\\)。物体放出的热量为 \\(C\\,|\\mathrm dT|\\)，其中 \\(1-T_0/T\\) 的比例转为功。从 \\(T_0\\) 积到 \\(T_h\\)，得到 \\(C(T_h-T_0)-CT_0\\ln(T_h/T_0)\\)。代入题给数值，结果为 \\(3066\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-reversible-equilibrium-3",
    "family": "u-finite-reversible-equilibrium",
    "type": "single",
    "points": 3,
    "stem": "两个热容分别恒为 110、160 J/K 的物体，初温分别为 434、279 K。将它们作为可逆热机的两个热端，缓慢运行至两物体等温。忽略其他热交换，求共同末温。",
    "options": [
      "\\(356.5\\,\\mathrm K\\)",
      "\\(334.03\\,\\mathrm K\\)",
      "\\(342.15\\,\\mathrm K\\)",
      "\\(347.97\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "可逆热机循环中没有净熵变，两个物体与外界也没有热交换，所以 \\(C_1\\ln(T_f/T_1)+C_2\\ln(T_f/T_2)=0\\)。把共同末温的对数项移到同一边，再取指数。若令两物体净放热为零，就漏算了热机向外做功。代入题给数值，结果为 \\(334.03\\,\\mathrm K\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-heat-pump-cycle-count-3",
    "family": "u-heat-pump-cycle-count",
    "type": "single",
    "points": 2,
    "stem": "一台可逆热泵在 630 K 和 300 K 的两个热源之间工作。高温端平均每秒得到 1660 J 热量，热泵每秒运行 1.7 个循环。每个循环要输入多少功？",
    "options": [
      "\\(1074.1\\,\\mathrm J\\)",
      "\\(511.48\\,\\mathrm J\\)",
      "\\(976.47\\,\\mathrm J\\)",
      "\\(464.99\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "用热量的正数大小记号。可逆热泵有 \\(Q_c/Q_h=T_c/T_h\\)，故输入功为 \\(Q_h(1-T_c/T_h)\\)。题中给的供热量是每秒的，把输入功率再除以每秒循环数才得到每循环的输入功。代入题给数值，结果为 \\(511.48\\,\\mathrm J\\)。"
  },
  {
    "id": "u-cascade-second-engine-work-3",
    "family": "u-cascade-second-engine-work",
    "type": "single",
    "points": 2,
    "stem": "两台可逆热机串联。第一台在 670 K 和 476 K 间运行，每循环吸热 480 J。第一台排出的热量全部交给第二台，后者在 476 K 和 308 K 间运行。问与第一台这一次循环对应，第二台输出多少功？",
    "options": [
      "\\(169.41\\,\\mathrm J\\)",
      "\\(120.36\\,\\mathrm J\\)",
      "\\(259.34\\,\\mathrm J\\)",
      "\\(138.99\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "第一台排热为 \\(Q_hT_m/T_h\\)，这正是第二台获得的热量。第二台效率为 \\(1-T_c/T_m\\)，所以它的功是 \\(Q_h(T_m-T_c)/T_h\\)。若直接把第一台吸热当成第二台的输入，会高估输出。代入题给数值，结果为 \\(120.36\\,\\mathrm J\\)。"
  },
  {
    "id": "u-rectangular-cycle-efficiency-3",
    "family": "u-rectangular-cycle-efficiency",
    "type": "single",
    "points": 3,
    "stem": "理想气体沿 \\(p\\!-\\!V\\) 图上的顺时针矩形循环。低、高压分别为 102、216 kPa，小、大体积分别为 2.2、5.6 L。给定摩尔定容热容 \\(C_{V,m}=1.5R\\)，求热机效率（百分数）。",
    "options": [
      "\\(8.7605\\,\\%\\)",
      "\\(26.282\\,\\%\\)",
      "\\(17.521\\,\\%\\)",
      "\\(52.778\\,\\%\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "净功是矩形面积 \\((p_h-p_l)(V_h-V_l)\\)。在小体积等容增压吸收 \\((C_{V,m}/R)(p_h-p_l)V_l\\)，在高压下等压膨胀吸收 \\((C_{p,m}/R)p_h(V_h-V_l)\\)。另两段均放热。将净功除以上述两段吸热之和。代入题给数值，结果为 \\(17.521\\,\\%\\)。"
  },
  {
    "id": "u-polytropic-molar-heat-3",
    "family": "u-polytropic-molar-heat",
    "type": "single",
    "points": 3,
    "stem": "单原子理想气体沿准静态路径 \\(pV^m=\\mathrm{const}\\) 变化，指数 \\(m=1.98\\)。路径的摩尔热容 \\(\\delta Q/(n\\,\\mathrm dT)\\) 约是多少？",
    "options": [
      "\\(0.47959\\,R\\)",
      "\\(1.5\\,R\\)",
      "\\(2.5\\,R\\)",
      "\\(2.5204\\,R\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "联立 \\(pV^m=\\mathrm{const}\\) 与 \\(pV=nRT\\)，得 \\(\\mathrm dT/T=(1-m)\\mathrm dV/V\\)。由第一定律，\\(\\delta Q=nC_{V,m}\\mathrm dT+p\\,\\mathrm dV\\)，故路径热容为 \\(C_{V,m}+R/(1-m)\\)。这里的热容沿指定路径定义。代入题给数值，结果为 \\(0.47959\\,R\\)。"
  },
  {
    "id": "u-external-pressure-adiabat-3",
    "family": "u-external-pressure-adiabat",
    "type": "single",
    "points": 3,
    "stem": "气缸中有初温 359 K、初压 \\(p_i\\) 的理想气体，其摩尔定容热容为 \\(1.5R\\)。绝热地突然将恒定外压降至 \\(0.47p_i\\)，活塞移动，最终静止并达到力学平衡。忽略活塞的质量、摩擦及高度变化，求气体末温。",
    "options": [
      "\\(282.89\\,\\mathrm K\\)",
      "\\(359\\,\\mathrm K\\)",
      "\\(168.73\\,\\mathrm K\\)",
      "\\(265.42\\,\\mathrm K\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "全过程边界功为 \\(p_e(V_f-V_i)\\)。绝热第一定律给 \\(nC_{V,m}(T_f-T_i)=-p_e(V_f-V_i)\\)。利用终态 \\(p_eV_f=nRT_f\\) 与初态 \\(p_iV_i=nRT_i\\)，可解出 \\(T_f/T_i=(C_{V,m}/R+p_e/p_i)/(C_{V,m}/R+1)\\)。突变外压的过程不可用可逆绝热关系。代入题给数值，结果为 \\(282.89\\,\\mathrm K\\)。"
  },
  {
    "id": "u-path-heat-difference-3",
    "family": "u-path-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体起始为 131 kPa、2.4 L，末态体积 5 L，末温与初温相同。路径甲沿初压等压膨胀后等容冷却，路径乙为可逆等温膨胀。求甲比乙多吸收的净热量。",
    "options": [
      "\\(109.84\\,\\mathrm J\\)",
      "\\(230.76\\,\\mathrm J\\)",
      "\\(340.6\\,\\mathrm J\\)",
      "\\(-109.84\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "两条路径的初末温度相同，理想气体 \\(\\Delta U=0\\)，所以各自净吸热等于各自净功。甲只有等压段做功 \\(p_1(V_2-V_1)\\)，乙做功 \\(p_1V_1\\ln(V_2/V_1)\\)。两者相减，\\(\\mathrm{kPa\\,L}\\) 可直接换成 J。代入题给数值，结果为 \\(109.84\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-calorimetry-specific-heat-3",
    "family": "u-calorimetry-specific-heat",
    "type": "single",
    "points": 3,
    "stem": "热容为 46 J/K 的量热器装有 0.4 kg 的水，初温均为 22 ℃。把 0.53 kg、85 ℃ 的金属块迅速浸入，达到 31 ℃。忽略向环境漏热，水的比热容取 4180 J/(kg·K)。求金属的比热容。",
    "options": [
      "\\(3241.5\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(525.79\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(286.33\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(540.25\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "金属放热 \\(mc_m(t_m-t_f)\\)，水和量热器共同吸热 \\((m_wc_w+C_{\\mathrm{cal}})(t_f-t_w)\\)。量热器给的是总热容，水要先用质量乘比热容，两项才能相加。代入题给数值，结果为 \\(540.25\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-mixture-specific-heat-difference-3",
    "family": "u-mixture-specific-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体混合物由氦和氮组成，氦的质量分数是 45%。氦、氮的摩尔质量分别取 4、28 g/mol。求混合物按单位质量计的 \\(c_p-c_v\\)。",
    "options": [
      "\\(8.314\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(483.37\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(1.0986\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(1098.6\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "每摩尔理想气体有 \\(C_{p,m}-C_{V,m}=R\\)。以 1 kg 混合气体为基准，其摩尔数为 \\(w_{\\rm He}/M_{\\rm He}+w_{\\rm N}/M_{\\rm N}\\)，乘 \\(R\\) 就得到按每千克计的差值。题给质量分数须先换算成摩尔数。代入题给数值，结果为 \\(1098.6\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-pressure-melting-shift-3",
    "family": "u-pressure-melting-shift",
    "type": "single",
    "points": 3,
    "stem": "某晶体在给定压力下的熔点为 276 K，固、液密度分别为 916、996 kg/m³，熔化潜热为 334 kJ/kg。将压强提高 47 MPa，把这些参数视为常量。估算熔点变化。",
    "options": [
      "\\(-34.056\\,\\mathrm K\\)",
      "\\(3.4056\\,\\mathrm K\\)",
      "\\(-3.4056\\,\\mathrm K\\)",
      "\\(-0.034056\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "熔化过程的质量比容变化为 \\(\\Delta v=1/\\rho_l-1/\\rho_s\\)。克拉珀龙式给 \\(\\mathrm dT/\\mathrm dp=T\\Delta v/L\\)，乘压强增量得近似温变。液相更密，\\(\\Delta v<0\\)，提高压强会使熔点下降。代入题给数值，结果为 \\(-3.4056\\,\\mathrm K\\)。"
  },
  {
    "id": "u-barometric-height-from-density-3",
    "family": "u-barometric-height-from-density",
    "type": "single",
    "points": 2,
    "stem": "在恒温 308 K、重力加速度取 9.81 m/s² 的大气层里，气体平均摩尔质量为 28 g/mol。气体可视为理想气体。到达多大高度时，气体密度是地面密度的 51%？",
    "options": [
      "\\(-6277.3\\,\\mathrm m\\)",
      "\\(6.2773\\,\\mathrm m\\)",
      "\\(4568\\,\\mathrm m\\)",
      "\\(6277.3\\,\\mathrm m\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "等温静力平衡中，\\(\\mathrm d\\ln p/\\mathrm dz=-Mg/(RT)\\)。因为 \\(T\\) 与 \\(M\\) 固定，\\(\\rho/\\rho_0=p/p_0=e^{-Mgz/(RT)}\\)。对给定密度比取自然对数后求 \\(z\\)。代入题给数值，结果为 \\(6277.3\\,\\mathrm m\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-unequal-volume-occupancy-3",
    "family": "u-unequal-volume-occupancy",
    "type": "single",
    "points": 2,
    "stem": "容器被想象中的分界面分成两部分，左区占总体积 27%。有 12 个可区分的理想气体分子，平衡时可把各分子的位置看作相互独立。任一时刻恰有 5 个分子在左区的概率约为多少？",
    "options": [
      "\\(0.00015852\\)",
      "\\(0.19336\\)",
      "\\(0.017175\\)",
      "\\(0.12555\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 1 章",
    "explanation": "先指定哪 \\(m\\) 个粒子在左边，对应概率是 \\(p^m(1-p)^{N-m}\\)。有 \\(\\binom Nm\\) 种指定法，且事件互斥。因此用二项分布取恰好 \\(m\\) 的一项，\\(p\\) 是左区体积分数。代入题给数值，结果为 \\(0.12555\\)。"
  },
  {
    "id": "u-bath-entropy-isothermal-compression-3",
    "family": "u-bath-entropy-isothermal-compression",
    "type": "single",
    "points": 2,
    "stem": "把 1.44 mol 理想气体与 314 K 的大热库保持热接触，并可逆等温地压缩气体，直到初体积与末体积之比为 2.2。热库的熵变约是多少？",
    "options": [
      "\\(-9.4395\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(9.4395\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(20.767\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(2964\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "气体等温压缩时内能不变，外界对气体做的功全部以热量流向热库。气体熵变是 \\(nR\\ln(V_f/V_i)<0\\)，过程可逆，热库熵增等于其相反数。结果是热库的熵变，单位为 J/K。代入题给数值，结果为 \\(9.4395\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-diffusion-number-density-change-3",
    "family": "u-diffusion-number-density-change",
    "type": "single",
    "points": 2,
    "stem": "同一种稀薄硬球气体在温度 310 K 时扩散系数为 0.019 m²/s。改为 408 K，分子数密度变为原来的 1.8 倍。估算新状态下的扩散系数。",
    "options": [
      "\\(0.010556\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.021797\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.01211\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.013892\\,\\mathrm{m^2\\,s^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "平均自由程随分子数密度的倒数变化，分子平均速率随绝对温度平方根变化。用 \\(D\\simeq\\bar v\\lambda/3\\) 得 \\(D_2/D_1=\\sqrt{T_2/T_1}/(n_2/n_1)\\)。同一种气体的分子碰撞直径在两种状态中相同。代入题给数值，结果为 \\(0.01211\\,\\mathrm{m^2\\,s^{-1}}\\)。"
  },
  {
    "id": "u-piston-isothermal-entropy-generation-3",
    "family": "u-piston-isothermal-entropy-generation",
    "type": "single",
    "points": 3,
    "stem": "1 mol 理想气体初始与恒温 344 K 的热库达到热平衡。外压从初态气压突然提高到原来的 1.5 倍，活塞在恒定外压下重新静止后，气体再次与热库达到热平衡。求气体和热库的总熵变。",
    "options": [
      "\\(3.371\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(0.78596\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.157\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-0.78596\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "等温末态有 \\(V_f=V_i/k\\)。恒外压使外界对气体做功 \\(kp_i(V_i-V_f)=(k-1)RT\\)，等温气体将这些能量作为热传给热库，故热库熵增 \\((k-1)R\\)。气体熵变为 \\(R\\ln(V_f/V_i)=-R\\ln k\\)，二者相加。代入题给数值，结果为 \\(0.78596\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-effusion-mixture-4",
    "family": "u-effusion-mixture",
    "type": "single",
    "points": 2,
    "stem": "同温容器里有 A、B 两种稀薄理想气体，二者分压相同，摩尔质量分别是 20 和 40 g/mol。容器有一个直径远小于自由程的小孔。刚打开小孔时，A 与 B 逸出粒子数率之比约是多少？",
    "options": [
      "\\(2\\)",
      "\\(1\\)",
      "\\(0.70711\\)",
      "\\(1.4142\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "小孔逸出由撞向孔口的分子通量决定，通量 \\(J=n\\bar v/4\\)。分压和温度均相同，所以两组分数密度相等。麦克斯韦平均速率在同温下正比于 \\(M^{-1/2}\\)，故逸出率比为 \\(\\sqrt{M_B/M_A}\\)。这里比较的是粒子数率，质量流率还要乘粒子质量。代入题给数值，结果为 \\(1.4142\\)。"
  },
  {
    "id": "u-wall-hit-count-4",
    "family": "u-wall-hit-count",
    "type": "single",
    "points": 2,
    "stem": "各向同性的气体分子数密度为 \\(2.4\\times10^{21}\\,\\mathrm{m^{-3}}\\)，平均速率为 425 m/s。取器壁上一块 \\(5\\times10^{-5}\\,\\mathrm{m^2}\\) 的面积，统计 0.1 s，预计发生的碰壁总次数约为多少？",
    "options": [
      "\\(2.55\\times10^{18}\\)",
      "\\(5.1\\times10^{18}\\)",
      "\\(6.375\\times10^{17}\\)",
      "\\(1.275\\times10^{18}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "撞壁只来自朝向器壁的半空间，计数还需乘速度的法向投影。对各向同性方向积分后，单位面积、单位时间的平均撞壁数是 \\(n\\bar v/4\\)。再乘面积与统计时长。代入题给数值，结果为 \\(1.275\\times10^{18}\\)。"
  },
  {
    "id": "u-free-path-survival-4",
    "family": "u-free-path-survival",
    "type": "single",
    "points": 2,
    "stem": "某平衡稀薄气体的分子平均自由程为 57 nm。近似把单位路程内的碰撞概率视为常数。一个分子自上次碰撞后至少再飞行 64 nm 而没有发生新碰撞的概率约为多少？",
    "options": [
      "\\(0.32537\\)",
      "\\(0.4104\\)",
      "\\(0.67463\\)",
      "\\(0.47107\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "若单位路程上碰撞概率近似恒定，未碰撞概率 \\(P(x)\\) 满足 \\(\\mathrm dP/\\mathrm dx=-P/\\lambda\\)，且 \\(P(0)=1\\)。因此 \\(P(x)=e^{-x/\\lambda}\\)。题目问存活概率，\\(1-P(x)\\) 才是发生碰撞的概率。代入题给数值，结果为 \\(0.32537\\)。"
  },
  {
    "id": "u-single-molecule-wall-force-4",
    "family": "u-single-molecule-wall-force",
    "type": "single",
    "points": 3,
    "stem": "一质量 \\(6\\times10^{-26}\\,\\mathrm{kg}\\) 的分子只沿长度为 5 cm 的容器的法向运动，速率为 495 m/s，在两端壁之间来回弹性反射。忽略其他分子，求这个分子对其中一端壁的时间平均作用力。",
    "options": [
      "\\(2.9403\\times10^{-19}\\,\\mathrm N\\)",
      "\\(2.9403\\times10^{-21}\\,\\mathrm N\\)",
      "\\(5.8806\\times10^{-19}\\,\\mathrm N\\)",
      "\\(1.4701\\times10^{-19}\\,\\mathrm N\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "每次与指定壁弹性碰撞时，交给壁的冲量是 \\(2mv\\)。下一次撞到同一壁要完成一个往返，间隔 \\(2L/v\\)。平均力为冲量除以间隔，即 \\(mv^2/L\\)。长度应由 cm 换成 m。代入题给数值，结果为 \\(2.9403\\times10^{-19}\\,\\mathrm N\\)。"
  },
  {
    "id": "u-uniform-rms-4",
    "family": "u-uniform-rms",
    "type": "single",
    "points": 2,
    "stem": "一组分子的速率在 0 和 450 m/s 之间均匀分布。求其方均根速率。",
    "options": [
      "\\(225\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(150\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(259.81\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(318.2\\,\\mathrm{m\\,s^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "速率概率密度为 \\(1/v_0\\)。方均根速率要先算 \\(\\langle v^2\\rangle=v_0^{-1}\\int_0^{v_0}v^2\\,\\mathrm dv=v_0^2/3\\)，再开平方。直接对 \\(v\\) 取平均会得到 \\(v_0/2\\)，与所求不同。代入题给数值，结果为 \\(259.81\\,\\mathrm{m\\,s^{-1}}\\)。"
  },
  {
    "id": "u-degenerate-level-4",
    "family": "u-degenerate-level",
    "type": "single",
    "points": 3,
    "stem": "某系统每个粒子只可占据两个能量值。下能级有 2 个等能微观状态，上能级有 4 个，能隙为 1.47 倍的 \\(k_{\\mathrm B}T\\)。在温度 \\(T\\) 的热平衡下，上能级的粒子比例约是多少？",
    "options": [
      "\\(0.685\\)",
      "\\(0.18694\\)",
      "\\(0.315\\)",
      "\\(0.66667\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "同一能级内每个等能态的玻尔兹曼权重相同，因此总权重还需乘简并数。将下能级能量取零，上、下权重分别为 \\(g_{\\rm u}e^{-\\Delta E/(k_BT)}\\) 与 \\(g_{\\rm l}\\)。用上能级权重除以两者总和。代入题给数值，结果为 \\(0.315\\)。"
  },
  {
    "id": "u-selective-particle-removal-4",
    "family": "u-selective-particle-removal",
    "type": "single",
    "points": 2,
    "stem": "一刚性容器的容积为 5 L，装有同温理想气体 A、B，A 的初始分压为 108 kPa。温度恒为 310 K，只移走 A 组分中 40% 的分子。A 的物质的量减少多少？",
    "options": [
      "\\(0.083807\\,\\mathrm{mol}\\)",
      "\\(0.050284\\,\\mathrm{mol}\\)",
      "\\(0.20952\\,\\mathrm{mol}\\)",
      "\\(8.3807\\times10^{-5}\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "只对 A 组分用状态方程，初始物质的量 \\(n_{A0}=p_AV/(RT)\\)，题设比例乘的是 A 的初始物质的量。这里 \\(T=310\\,\\mathrm K\\)，并可用 \\(1\\,\\mathrm{kPa\\,L}=1\\,\\mathrm J\\) 直接换算。代入题给数值，结果为 \\(0.083807\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-gauge-pressure-heating-4",
    "family": "u-gauge-pressure-heating",
    "type": "single",
    "points": 2,
    "stem": "密闭刚性容器内的理想气体初温 295 K，压力表显示表压 70 kPa。加热到 350 K，外界大气压一直为 100 kPa。末态压力表显示的表压约是多少？",
    "options": [
      "\\(83.051\\,\\mathrm{kPa}\\)",
      "\\(101.69\\,\\mathrm{kPa}\\)",
      "\\(136.69\\,\\mathrm{kPa}\\)",
      "\\(201.69\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "气体状态方程用绝对压强。先将初始表压加大气压，再利用恒容恒质量条件 \\(p_{\\rm abs,2}/p_{\\rm abs,1}=T_2/T_1\\)。最后将末态绝对压强减去大气压，才得到表压。代入题给数值，结果为 \\(101.69\\,\\mathrm{kPa}\\)。"
  },
  {
    "id": "u-mixing-different-heat-capacities-4",
    "family": "u-mixing-different-heat-capacities",
    "type": "single",
    "points": 3,
    "stem": "绝热刚性容器的两侧分别有 1.6 mol 单原子理想气体（294 K）和 1.85 mol 刚性双原子理想气体（414 K）。移去隔板，混合至同一温度。最终温度约是多少？",
    "options": [
      "\\(358.35\\,\\mathrm K\\)",
      "\\(414\\,\\mathrm K\\)",
      "\\(354\\,\\mathrm K\\)",
      "\\(373\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "外壁绝热且刚性，混合系统没有从外界吸热也没有做体积功，总内能守恒。两组分的定容摩尔热容分别为 \\(3R/2\\) 和 \\(5R/2\\)，故终温以两组分的总定容热容 \\(n_i C_{V,m,i}\\) 加权，而非仅按物质的量平均。代入题给数值，结果为 \\(373\\,\\mathrm K\\)。"
  },
  {
    "id": "u-state-coefficients-isochoric-4",
    "family": "u-state-coefficients-isochoric",
    "type": "single",
    "points": 3,
    "stem": "某气体在初态的体膨胀系数为 \\(0.0019\\,\\mathrm{K^{-1}}\\)，等温压缩系数为 \\(2.5\\times10^{-8}\\,\\mathrm{Pa^{-1}}\\)。把容器体积保持不变，将温度小幅升高 5 K。用一阶近似求压强增量。",
    "options": [
      "\\(-3.8\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(3.8\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(1.9\\times10^{6}\\,\\mathrm{Pa}\\)",
      "\\(1.9\\times10^{5}\\,\\mathrm{Pa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 2 章",
    "explanation": "小变化满足 \\(\\mathrm dV/V=\\alpha\\,\\mathrm dT-\\kappa_T\\,\\mathrm dp\\)。定容使左边为零，因此升温造成的膨胀趋势必须由增压抵消，\\(\\Delta p=\\alpha\\Delta T/\\kappa_T\\)；单位是 Pa。代入题给数值，结果为 \\(3.8\\times10^{5}\\,\\mathrm{Pa}\\)。"
  },
  {
    "id": "u-vdw-isothermal-energy-4",
    "family": "u-vdw-isothermal-energy",
    "type": "single",
    "points": 3,
    "stem": "1 mol 范德瓦耳斯气体的摩尔内能为 \\(U_m=C_{V,m}T-a/V_m\\)，其中 \\(a=0.199\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)。恒温下摩尔体积由 0.73 L/mol 增到 1.5695 L/mol。求内能变化。",
    "options": [
      "\\(126.79\\,\\mathrm J\\)",
      "\\(-145.81\\,\\mathrm J\\)",
      "\\(145.81\\,\\mathrm J\\)",
      "\\(272.6\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "初末温度相同，内能中的热运动项 \\(C_{V,m}T\\) 相消。分子吸引项由 \\(-a/V_{m1}\\) 变为 \\(-a/V_{m2}\\)，体积变大后其绝对值变小。先把摩尔体积换为 \\(\\mathrm{m^3\\,mol^{-1}}\\)，再求末态摩尔内能减初态摩尔内能，最后乘 1 mol 得到总内能变化。代入题给数值，结果为 \\(145.81\\,\\mathrm J\\)。"
  },
  {
    "id": "u-vdw-critical-temperature-4",
    "family": "u-vdw-critical-temperature",
    "type": "single",
    "points": 3,
    "stem": "某范德瓦耳斯气体的参数为 \\(0.276\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)、\\(9.4\\times10^{-5}\\,\\mathrm{m^3\\,mol^{-1}}\\)，分别对应 \\(a,b\\)。用临界等温线的拐点条件估算临界温度。",
    "options": [
      "\\(209.28\\,\\mathrm K\\)",
      "\\(13.08\\,\\mathrm K\\)",
      "\\(104.64\\,\\mathrm K\\)",
      "\\(353.16\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "由 \\(p=RT/(V_m-b)-a/V_m^2\\)，临界等温线满足 \\((\\partial p/\\partial V_m)_T=0\\) 和 \\((\\partial^2p/\\partial V_m^2)_T=0\\)。两式消元得到 \\(V_{m,c}=3b\\)，代回一阶导数条件得 \\(T_c=8a/(27Rb)\\)。代入题给数值，结果为 \\(104.64\\,\\mathrm K\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-compressibility-factor-4",
    "family": "u-compressibility-factor",
    "type": "single",
    "points": 2,
    "stem": "实测某气体在 320 K、3.7 MPa 下的摩尔体积为 0.84 L/mol。按 \\(Z=pV_m/(RT)\\) 定义，压缩因子约是多少？",
    "options": [
      "\\(1.1682\\)",
      "\\(0.0011682\\)",
      "\\(0.85601\\)",
      "\\(1\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "将压强换成 Pa、摩尔体积换成 \\(\\mathrm{m^3\\,mol^{-1}}\\) 后，\\(pV_m\\) 和 \\(RT\\) 都以 J/mol 计。用测得的 \\(pV_m\\) 除以同温的理想气体摩尔值 \\(RT\\)，得到无量纲的压缩因子。代入题给数值，结果为 \\(1.1682\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-wall-interface-temperature-4",
    "family": "u-wall-interface-temperature",
    "type": "single",
    "points": 3,
    "stem": "双层平板墙的两层面积相同，热面温度为 364 K，冷面为 294 K。靠热侧的第一层厚 20 mm、导热系数 0.46 W/(m·K)，第二层厚 54 mm、导热系数 1.1 W/(m·K)。达到稳定后，两层交界面温度约是多少？",
    "options": [
      "\\(329\\,\\mathrm K\\)",
      "\\(331.12\\,\\mathrm K\\)",
      "\\(343.36\\,\\mathrm K\\)",
      "\\(326.88\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "稳态下两层的单位面积热流相同，温降与热阻 \\(L/k\\) 成正比。第一层的温降是总温差乘 \\((L_1/k_1)/(L_1/k_1+L_2/k_2)\\)，从热面温度扣除该温降，得到交界面的温度。代入题给数值，结果为 \\(331.12\\,\\mathrm K\\)。"
  },
  {
    "id": "u-parallel-wall-path-4",
    "family": "u-parallel-wall-path",
    "type": "single",
    "points": 3,
    "stem": "一面厚 36 mm 的墙由两块并排材料组成，两块都贯穿墙厚。其面积分别为 0.145、0.23 m²，导热系数为 0.41、1.56 W/(m·K)。墙两面温差为 36 K，忽略横向热流。总导热功率是多少？",
    "options": [
      "\\(418.25\\,\\mathrm W\\)",
      "\\(209.12\\,\\mathrm W\\)",
      "\\(51\\,\\mathrm W\\)",
      "\\(358.8\\,\\mathrm W\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "两块材料具有相同的温差和厚度，构成并联导热路径。分别求 \\(\\dot Q_i=k_iA_i\\Delta T/L\\) 再相加。把两块热阻直接相加属于串联模型。代入题给数值，结果为 \\(418.25\\,\\mathrm W\\)。"
  },
  {
    "id": "u-cylindrical-conduction-4",
    "family": "u-cylindrical-conduction",
    "type": "single",
    "points": 3,
    "stem": "长度 1.06 m 的圆柱管壁导热系数为 0.47 W/(m·K)，内、外半径为 25 和 50.75 mm，内表面比外表面高 55 K。忽略端面漏热，稳态导热功率是多少？",
    "options": [
      "\\(172.17\\,\\mathrm W\\)",
      "\\(339.32\\,\\mathrm W\\)",
      "\\(243.16\\,\\mathrm W\\)",
      "\\(167.15\\,\\mathrm W\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "半径 \\(r\\) 处的导热面积是 \\(2\\pi rL\\)。稳态热流恒定，由傅里叶定律分离变量，热阻为 \\(\\int_{r_1}^{r_2}\\mathrm dr/(2\\pi kLr)=\\ln(r_2/r_1)/(2\\pi kL)\\)。总温差除以热阻。代入题给数值，结果为 \\(243.16\\,\\mathrm W\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-ice-water-melting-budget-4",
    "family": "u-ice-water-melting-budget",
    "type": "single",
    "points": 3,
    "stem": "绝热容器里有 0.27 kg、43 ℃ 的水，加入足够多的 0 ℃ 冰，使最终仍有冰剩余。取水的比热容 4180 J/(kg·K)、冰的熔化潜热 334 kJ/kg。会有多少 kg 冰熔化？",
    "options": [
      "\\(145.3\\,\\mathrm{kg}\\)",
      "\\(0.1453\\,\\mathrm{kg}\\)",
      "\\(0.072649\\,\\mathrm{kg}\\)",
      "\\(0.2906\\,\\mathrm{kg}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "仍有冰剩余，所以平衡温度是 0 ℃。原有温水降至 0 ℃ 放出的热量是 \\(m_wc_w t\\)，这部分热量全部用于冰的相变，满足 \\(m_{\\rm melt}L_f=m_wc_wt\\)。潜热需以 J/kg 代入。代入题给数值，结果为 \\(0.1453\\,\\mathrm{kg}\\)。"
  },
  {
    "id": "u-soap-bubble-surface-work-4",
    "family": "u-soap-bubble-surface-work",
    "type": "single",
    "points": 2,
    "stem": "从近似零半径缓慢吹出一个薄壁肥皂泡，最后半径为 5.1 mm，液膜的表面张力系数为 0.043 N/m。忽略其他功和损耗，新增两个液面的表面能是多少？",
    "options": [
      "\\(5.6218\\times10^{-5}\\,\\mathrm J\\)",
      "\\(1.4055\\times10^{-5}\\,\\mathrm J\\)",
      "\\(1.4336\\times10^{-7}\\,\\mathrm J\\)",
      "\\(2.8109\\times10^{-5}\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 7 章",
    "explanation": "肥皂泡有内、外两个液面，每个球面面积为 \\(4\\pi r^2\\)。表面能增量为表面张力乘总面积增量，即 \\(8\\pi r^2\\gamma\\)。只按一个液面计算会少一半。代入题给数值，结果为 \\(2.8109\\times10^{-5}\\,\\mathrm J\\)。"
  },
  {
    "id": "u-saturated-headspace-4",
    "family": "u-saturated-headspace",
    "type": "single",
    "points": 2,
    "stem": "密闭容器中有液态水，液面上方的气相空间为 5 L。保持 315 K，水的饱和蒸气压为 8.137 kPa。达到平衡后仍有液态水。将水蒸气视为理想气体，求气相中水的物质的量。",
    "options": [
      "\\(15.535\\,\\mathrm{mol}\\)",
      "\\(1.5535\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(0.015535\\,\\mathrm{mol}\\)",
      "\\(0.03107\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "有液水与蒸气共存时，水蒸气分压等于该温度的饱和蒸气压。只把气相空间体积代入状态方程 \\(n_{\\rm vap}=p_{\\rm sat}V_{\\rm gas}/(RT)\\)，液态水的体积不算入气体体积。代入题给数值，结果为 \\(0.015535\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-vapour-pressure-two-temperatures-4",
    "family": "u-vapour-pressure-two-temperatures",
    "type": "single",
    "points": 3,
    "stem": "某液体在 306 K 的饱和蒸气压为 19 kPa。在此温区内取摩尔汽化潜热 34 kJ/mol 为常量，忽略液体摩尔体积，把蒸气视为理想气体。估算 321 K 的饱和蒸气压。",
    "options": [
      "\\(10.175\\,\\mathrm{kPa}\\)",
      "\\(35.479\\,\\mathrm{kPa}\\)",
      "\\(19\\,\\mathrm{kPa}\\)",
      "\\(19.931\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 8 章",
    "explanation": "克拉珀龙方程在题设近似下化为 \\(\\mathrm d(\\ln p)/\\mathrm dT=L/(RT^2)\\)。由 \\(T_1\\) 积分到 \\(T_2\\)，得 \\(\\ln(p_2/p_1)=(L/R)(1/T_1-1/T_2)\\)。温度提高时指数为正，蒸气压增大。代入题给数值，结果为 \\(35.479\\,\\mathrm{kPa}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-entropy-variable-cv-4",
    "family": "u-entropy-variable-cv",
    "type": "single",
    "points": 3,
    "stem": "一定量气体在刚性容器里由 298 K 升到 370 K。整份气体的定容热容为 \\(C_V(T)=a+bT\\)，其中 \\(a=18\\,\\mathrm{J/K}\\)、\\(b=0.057\\,\\mathrm{J/K^2}\\)。求气体的熵变。",
    "options": [
      "\\(3.8954\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(7.9994\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(8.4594\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.104\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "取相同端点间的一条可逆等容路径。因 \\(\\mathrm dS=C_V(T)\\,\\mathrm dT/T\\)，积分核可写成 \\(a/T+b\\)。前一项积分为 \\(a\\ln(T_2/T_1)\\)，后一项给出 \\(b(T_2-T_1)\\)。代入题给数值，结果为 \\(7.9994\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-cooling-work-4",
    "family": "u-finite-cooling-work",
    "type": "single",
    "points": 3,
    "stem": "一个热容恒为 130 J/K 的物体起初处在 460 K。让它作为可逆热机的高温端逐步冷却，低温热库保持 299 K。物体冷却到热库温度时，热机累计输出的功为多少？",
    "options": [
      "\\(7325.5\\,\\mathrm J\\)",
      "\\(16745\\,\\mathrm J\\)",
      "\\(4185.5\\,\\mathrm J\\)",
      "\\(20930\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "每一步热机的高温端温度都等于物体的即时温度 \\(T\\)。物体放出的热量为 \\(C\\,|\\mathrm dT|\\)，其中 \\(1-T_0/T\\) 的比例转为功。从 \\(T_0\\) 积到 \\(T_h\\)，得到 \\(C(T_h-T_0)-CT_0\\ln(T_h/T_0)\\)。代入题给数值，结果为 \\(4185.5\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-reversible-equilibrium-4",
    "family": "u-finite-reversible-equilibrium",
    "type": "single",
    "points": 3,
    "stem": "两个热容分别恒为 120、175 J/K 的物体，初温分别为 446、281 K。将它们作为可逆热机的两个热端，缓慢运行至两物体等温。忽略其他热交换，求共同末温。",
    "options": [
      "\\(348.12\\,\\mathrm K\\)",
      "\\(339.09\\,\\mathrm K\\)",
      "\\(363.5\\,\\mathrm K\\)",
      "\\(354.01\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "可逆热机循环中没有净熵变，两个物体与外界也没有热交换，所以 \\(C_1\\ln(T_f/T_1)+C_2\\ln(T_f/T_2)=0\\)。把共同末温的对数项移到同一边，再取指数。若令两物体净放热为零，就漏算了热机向外做功。代入题给数值，结果为 \\(339.09\\,\\mathrm K\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-heat-pump-cycle-count-4",
    "family": "u-heat-pump-cycle-count",
    "type": "single",
    "points": 2,
    "stem": "一台可逆热泵在 655 K 和 305 K 的两个热源之间工作。高温端平均每秒得到 1790 J 热量，热泵每秒运行 1.85 个循环。每个循环要输入多少功？",
    "options": [
      "\\(1110.3\\,\\mathrm J\\)",
      "\\(450.55\\,\\mathrm J\\)",
      "\\(517.02\\,\\mathrm J\\)",
      "\\(967.57\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "用热量的正数大小记号。可逆热泵有 \\(Q_c/Q_h=T_c/T_h\\)，故输入功为 \\(Q_h(1-T_c/T_h)\\)。题中给的供热量是每秒的，把输入功率再除以每秒循环数才得到每循环的输入功。代入题给数值，结果为 \\(517.02\\,\\mathrm J\\)。"
  },
  {
    "id": "u-cascade-second-engine-work-4",
    "family": "u-cascade-second-engine-work",
    "type": "single",
    "points": 2,
    "stem": "两台可逆热机串联。第一台在 685 K 和 484 K 间运行，每循环吸热 530 J。第一台排出的热量全部交给第二台，后者在 484 K 和 312 K 间运行。问与第一台这一次循环对应，第二台输出多少功？",
    "options": [
      "\\(288.6\\,\\mathrm J\\)",
      "\\(155.52\\,\\mathrm J\\)",
      "\\(133.08\\,\\mathrm J\\)",
      "\\(188.35\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "第一台排热为 \\(Q_hT_m/T_h\\)，这正是第二台获得的热量。第二台效率为 \\(1-T_c/T_m\\)，所以它的功是 \\(Q_h(T_m-T_c)/T_h\\)。若直接把第一台吸热当成第二台的输入，会高估输出。代入题给数值，结果为 \\(133.08\\,\\mathrm J\\)。"
  },
  {
    "id": "u-rectangular-cycle-efficiency-4",
    "family": "u-rectangular-cycle-efficiency",
    "type": "single",
    "points": 3,
    "stem": "理想气体沿 \\(p\\!-\\!V\\) 图上的顺时针矩形循环。低、高压分别为 108、234 kPa，小、大体积分别为 2.3、5.9 L。给定摩尔定容热容 \\(C_{V,m}=2.5R\\)，求热机效率（百分数）。",
    "options": [
      "\\(6.175\\,\\%\\)",
      "\\(18.525\\,\\%\\)",
      "\\(12.35\\,\\%\\)",
      "\\(53.846\\,\\%\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "净功是矩形面积 \\((p_h-p_l)(V_h-V_l)\\)。在小体积等容增压吸收 \\((C_{V,m}/R)(p_h-p_l)V_l\\)，在高压下等压膨胀吸收 \\((C_{p,m}/R)p_h(V_h-V_l)\\)。另两段均放热。将净功除以上述两段吸热之和。代入题给数值，结果为 \\(12.35\\,\\%\\)。"
  },
  {
    "id": "u-polytropic-molar-heat-4",
    "family": "u-polytropic-molar-heat",
    "type": "single",
    "points": 3,
    "stem": "单原子理想气体沿准静态路径 \\(pV^m=\\mathrm{const}\\) 变化，指数 \\(m=2.12\\)。路径的摩尔热容 \\(\\delta Q/(n\\,\\mathrm dT)\\) 约是多少？",
    "options": [
      "\\(2.5\\,R\\)",
      "\\(0.60714\\,R\\)",
      "\\(1.5\\,R\\)",
      "\\(2.3929\\,R\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "联立 \\(pV^m=\\mathrm{const}\\) 与 \\(pV=nRT\\)，得 \\(\\mathrm dT/T=(1-m)\\mathrm dV/V\\)。由第一定律，\\(\\delta Q=nC_{V,m}\\mathrm dT+p\\,\\mathrm dV\\)，故路径热容为 \\(C_{V,m}+R/(1-m)\\)。这里的热容沿指定路径定义。代入题给数值，结果为 \\(0.60714\\,R\\)。"
  },
  {
    "id": "u-external-pressure-adiabat-4",
    "family": "u-external-pressure-adiabat",
    "type": "single",
    "points": 3,
    "stem": "气缸中有初温 371 K、初压 \\(p_i\\) 的理想气体，其摩尔定容热容为 \\(2.5R\\)。绝热地突然将恒定外压降至 \\(0.53p_i\\)，活塞移动，最终静止并达到力学平衡。忽略活塞的质量、摩擦及高度变化，求气体末温。",
    "options": [
      "\\(196.63\\,\\mathrm K\\)",
      "\\(309.45\\,\\mathrm K\\)",
      "\\(371\\,\\mathrm K\\)",
      "\\(321.18\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "全过程边界功为 \\(p_e(V_f-V_i)\\)。绝热第一定律给 \\(nC_{V,m}(T_f-T_i)=-p_e(V_f-V_i)\\)。利用终态 \\(p_eV_f=nRT_f\\) 与初态 \\(p_iV_i=nRT_i\\)，可解出 \\(T_f/T_i=(C_{V,m}/R+p_e/p_i)/(C_{V,m}/R+1)\\)。突变外压的过程不可用可逆绝热关系。代入题给数值，结果为 \\(321.18\\,\\mathrm K\\)。"
  },
  {
    "id": "u-path-heat-difference-4",
    "family": "u-path-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体起始为 139 kPa、2.6 L，末态体积 5.5 L，末温与初温相同。路径甲沿初压等压膨胀后等容冷却，路径乙为可逆等温膨胀。求甲比乙多吸收的净热量。",
    "options": [
      "\\(403.1\\,\\mathrm J\\)",
      "\\(-132.33\\,\\mathrm J\\)",
      "\\(270.77\\,\\mathrm J\\)",
      "\\(132.33\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "两条路径的初末温度相同，理想气体 \\(\\Delta U=0\\)，所以各自净吸热等于各自净功。甲只有等压段做功 \\(p_1(V_2-V_1)\\)，乙做功 \\(p_1V_1\\ln(V_2/V_1)\\)。两者相减，\\(\\mathrm{kPa\\,L}\\) 可直接换成 J。代入题给数值，结果为 \\(132.33\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-calorimetry-specific-heat-4",
    "family": "u-calorimetry-specific-heat",
    "type": "single",
    "points": 3,
    "stem": "热容为 50 J/K 的量热器装有 0.44 kg 的水，初温均为 23 ℃。把 0.58 kg、88 ℃ 的金属块迅速浸入，达到 33 ℃。忽略向环境漏热，水的比热容取 4180 J/(kg·K)。求金属的比热容。",
    "options": [
      "\\(576.55\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(3257.2\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(343.49\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(592.23\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "金属放热 \\(mc_m(t_m-t_f)\\)，水和量热器共同吸热 \\((m_wc_w+C_{\\mathrm{cal}})(t_f-t_w)\\)。量热器给的是总热容，水要先用质量乘比热容，两项才能相加。代入题给数值，结果为 \\(592.23\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-mixture-specific-heat-difference-4",
    "family": "u-mixture-specific-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体混合物由氦和氮组成，氦的质量分数是 55%。氦、氮的摩尔质量分别取 4、28 g/mol。求混合物按单位质量计的 \\(c_p-c_v\\)。",
    "options": [
      "\\(1.2768\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(561.76\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(1276.8\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(8.314\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "每摩尔理想气体有 \\(C_{p,m}-C_{V,m}=R\\)。以 1 kg 混合气体为基准，其摩尔数为 \\(w_{\\rm He}/M_{\\rm He}+w_{\\rm N}/M_{\\rm N}\\)，乘 \\(R\\) 就得到按每千克计的差值。题给质量分数须先换算成摩尔数。代入题给数值，结果为 \\(1276.8\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-pressure-melting-shift-4",
    "family": "u-pressure-melting-shift",
    "type": "single",
    "points": 3,
    "stem": "某晶体在给定压力下的熔点为 278 K，固、液密度分别为 919、994 kg/m³，熔化潜热为 336 kJ/kg。将压强提高 53 MPa，把这些参数视为常量。估算熔点变化。",
    "options": [
      "\\(-0.036003\\,\\mathrm K\\)",
      "\\(-36.003\\,\\mathrm K\\)",
      "\\(3.6003\\,\\mathrm K\\)",
      "\\(-3.6003\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "熔化过程的质量比容变化为 \\(\\Delta v=1/\\rho_l-1/\\rho_s\\)。克拉珀龙式给 \\(\\mathrm dT/\\mathrm dp=T\\Delta v/L\\)，乘压强增量得近似温变。液相更密，\\(\\Delta v<0\\)，提高压强会使熔点下降。代入题给数值，结果为 \\(-3.6003\\,\\mathrm K\\)。"
  },
  {
    "id": "u-barometric-height-from-density-4",
    "family": "u-barometric-height-from-density",
    "type": "single",
    "points": 2,
    "stem": "在恒温 319 K、重力加速度取 9.81 m/s² 的大气层里，气体平均摩尔质量为 30 g/mol。气体可视为理想气体。到达多大高度时，气体密度是地面密度的 45%？",
    "options": [
      "\\(-7196\\,\\mathrm m\\)",
      "\\(7.196\\,\\mathrm m\\)",
      "\\(4956.5\\,\\mathrm m\\)",
      "\\(7196\\,\\mathrm m\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "等温静力平衡中，\\(\\mathrm d\\ln p/\\mathrm dz=-Mg/(RT)\\)。因为 \\(T\\) 与 \\(M\\) 固定，\\(\\rho/\\rho_0=p/p_0=e^{-Mgz/(RT)}\\)。对给定密度比取自然对数后求 \\(z\\)。代入题给数值，结果为 \\(7196\\,\\mathrm m\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-unequal-volume-occupancy-4",
    "family": "u-unequal-volume-occupancy",
    "type": "single",
    "points": 2,
    "stem": "容器被想象中的分界面分成两部分，左区占总体积 31%。有 14 个可区分的理想气体分子，平衡时可把各分子的位置看作相互独立。任一时刻恰有 6 个分子在左区的概率约为多少？",
    "options": [
      "\\(4.56\\times10^{-5}\\)",
      "\\(0.02764\\)",
      "\\(0.13694\\)",
      "\\(0.18329\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 1 章",
    "explanation": "先指定哪 \\(m\\) 个粒子在左边，对应概率是 \\(p^m(1-p)^{N-m}\\)。有 \\(\\binom Nm\\) 种指定法，且事件互斥。因此用二项分布取恰好 \\(m\\) 的一项，\\(p\\) 是左区体积分数。代入题给数值，结果为 \\(0.13694\\)。"
  },
  {
    "id": "u-bath-entropy-isothermal-compression-4",
    "family": "u-bath-entropy-isothermal-compression",
    "type": "single",
    "points": 2,
    "stem": "把 1.61 mol 理想气体与 322 K 的大热库保持热接触，并可逆等温地压缩气体，直到初体积与末体积之比为 2.5。热库的熵变约是多少？",
    "options": [
      "\\(-12.265\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(3949.3\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(12.265\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(30.663\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "气体等温压缩时内能不变，外界对气体做的功全部以热量流向热库。气体熵变是 \\(nR\\ln(V_f/V_i)<0\\)，过程可逆，热库熵增等于其相反数。结果是热库的熵变，单位为 J/K。代入题给数值，结果为 \\(12.265\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-diffusion-number-density-change-4",
    "family": "u-diffusion-number-density-change",
    "type": "single",
    "points": 2,
    "stem": "同一种稀薄硬球气体在温度 315 K 时扩散系数为 0.022 m²/s。改为 417 K，分子数密度变为原来的 2 倍。估算新状态下的扩散系数。",
    "options": [
      "\\(0.012656\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.025313\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.014562\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.011\\,\\mathrm{m^2\\,s^{-1}}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "平均自由程随分子数密度的倒数变化，分子平均速率随绝对温度平方根变化。用 \\(D\\simeq\\bar v\\lambda/3\\) 得 \\(D_2/D_1=\\sqrt{T_2/T_1}/(n_2/n_1)\\)。同一种气体的分子碰撞直径在两种状态中相同。代入题给数值，结果为 \\(0.012656\\,\\mathrm{m^2\\,s^{-1}}\\)。"
  },
  {
    "id": "u-piston-isothermal-entropy-generation-4",
    "family": "u-piston-isothermal-entropy-generation",
    "type": "single",
    "points": 3,
    "stem": "1 mol 理想气体初始与恒温 351 K 的热库达到热平衡。外压从初态气压突然提高到原来的 1.65 倍，活塞在恒定外压下重新静止后，气体再次与热库达到热平衡。求气体和热库的总熵变。",
    "options": [
      "\\(5.4041\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-1.2407\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.1634\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(1.2407\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "等温末态有 \\(V_f=V_i/k\\)。恒外压使外界对气体做功 \\(kp_i(V_i-V_f)=(k-1)RT\\)，等温气体将这些能量作为热传给热库，故热库熵增 \\((k-1)R\\)。气体熵变为 \\(R\\ln(V_f/V_i)=-R\\ln k\\)，二者相加。代入题给数值，结果为 \\(1.2407\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-effusion-mixture-5",
    "family": "u-effusion-mixture",
    "type": "single",
    "points": 2,
    "stem": "同温容器里有 A、B 两种稀薄理想气体，二者分压相同，摩尔质量分别是 28 和 44 g/mol。容器有一个直径远小于自由程的小孔。刚打开小孔时，A 与 B 逸出粒子数率之比约是多少？",
    "options": [
      "\\(0.79772\\)",
      "\\(1\\)",
      "\\(1.5714\\)",
      "\\(1.2536\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "小孔逸出由撞向孔口的分子通量决定，通量 \\(J=n\\bar v/4\\)。分压和温度均相同，所以两组分数密度相等。麦克斯韦平均速率在同温下正比于 \\(M^{-1/2}\\)，故逸出率比为 \\(\\sqrt{M_B/M_A}\\)。这里比较的是粒子数率，质量流率还要乘粒子质量。代入题给数值，结果为 \\(1.2536\\)。"
  },
  {
    "id": "u-wall-hit-count-5",
    "family": "u-wall-hit-count",
    "type": "single",
    "points": 2,
    "stem": "各向同性的气体分子数密度为 \\(2.8\\times10^{21}\\,\\mathrm{m^{-3}}\\)，平均速率为 460 m/s。取器壁上一块 \\(6\\times10^{-5}\\,\\mathrm{m^2}\\) 的面积，统计 0.12 s，预计发生的碰壁总次数约为多少？",
    "options": [
      "\\(1.1592\\times10^{18}\\)",
      "\\(9.2736\\times10^{18}\\)",
      "\\(4.6368\\times10^{18}\\)",
      "\\(2.3184\\times10^{18}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 4 章",
    "explanation": "撞壁只来自朝向器壁的半空间，计数还需乘速度的法向投影。对各向同性方向积分后，单位面积、单位时间的平均撞壁数是 \\(n\\bar v/4\\)。再乘面积与统计时长。代入题给数值，结果为 \\(2.3184\\times10^{18}\\)。"
  },
  {
    "id": "u-free-path-survival-5",
    "family": "u-free-path-survival",
    "type": "single",
    "points": 2,
    "stem": "某平衡稀薄气体的分子平均自由程为 64 nm。近似把单位路程内的碰撞概率视为常数。一个分子自上次碰撞后至少再飞行 77 nm 而没有发生新碰撞的概率约为多少？",
    "options": [
      "\\(0.69975\\)",
      "\\(0.4539\\)",
      "\\(0.30025\\)",
      "\\(0.43554\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "若单位路程上碰撞概率近似恒定，未碰撞概率 \\(P(x)\\) 满足 \\(\\mathrm dP/\\mathrm dx=-P/\\lambda\\)，且 \\(P(0)=1\\)。因此 \\(P(x)=e^{-x/\\lambda}\\)。题目问存活概率，\\(1-P(x)\\) 才是发生碰撞的概率。代入题给数值，结果为 \\(0.30025\\)。"
  },
  {
    "id": "u-single-molecule-wall-force-5",
    "family": "u-single-molecule-wall-force",
    "type": "single",
    "points": 3,
    "stem": "一质量 \\(7\\times10^{-26}\\,\\mathrm{kg}\\) 的分子只沿长度为 6 cm 的容器的法向运动，速率为 540 m/s，在两端壁之间来回弹性反射。忽略其他分子，求这个分子对其中一端壁的时间平均作用力。",
    "options": [
      "\\(1.701\\times10^{-19}\\,\\mathrm N\\)",
      "\\(3.402\\times10^{-21}\\,\\mathrm N\\)",
      "\\(3.402\\times10^{-19}\\,\\mathrm N\\)",
      "\\(6.804\\times10^{-19}\\,\\mathrm N\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "每次与指定壁弹性碰撞时，交给壁的冲量是 \\(2mv\\)。下一次撞到同一壁要完成一个往返，间隔 \\(2L/v\\)。平均力为冲量除以间隔，即 \\(mv^2/L\\)。长度应由 cm 换成 m。代入题给数值，结果为 \\(3.402\\times10^{-19}\\,\\mathrm N\\)。"
  },
  {
    "id": "u-uniform-rms-5",
    "family": "u-uniform-rms",
    "type": "single",
    "points": 2,
    "stem": "一组分子的速率在 0 和 500 m/s 之间均匀分布。求其方均根速率。",
    "options": [
      "\\(250\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(166.67\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(288.68\\,\\mathrm{m\\,s^{-1}}\\)",
      "\\(353.55\\,\\mathrm{m\\,s^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "速率概率密度为 \\(1/v_0\\)。方均根速率要先算 \\(\\langle v^2\\rangle=v_0^{-1}\\int_0^{v_0}v^2\\,\\mathrm dv=v_0^2/3\\)，再开平方。直接对 \\(v\\) 取平均会得到 \\(v_0/2\\)，与所求不同。代入题给数值，结果为 \\(288.68\\,\\mathrm{m\\,s^{-1}}\\)。"
  },
  {
    "id": "u-degenerate-level-5",
    "family": "u-degenerate-level",
    "type": "single",
    "points": 3,
    "stem": "某系统每个粒子只可占据两个能量值。下能级有 3 个等能微观状态，上能级有 5 个，能隙为 1.76 倍的 \\(k_{\\mathrm B}T\\)。在温度 \\(T\\) 的热平衡下，上能级的粒子比例约是多少？",
    "options": [
      "\\(0.625\\)",
      "\\(0.22284\\)",
      "\\(0.77716\\)",
      "\\(0.14679\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 5 章",
    "explanation": "同一能级内每个等能态的玻尔兹曼权重相同，因此总权重还需乘简并数。将下能级能量取零，上、下权重分别为 \\(g_{\\rm u}e^{-\\Delta E/(k_BT)}\\) 与 \\(g_{\\rm l}\\)。用上能级权重除以两者总和。代入题给数值，结果为 \\(0.22284\\)。"
  },
  {
    "id": "u-selective-particle-removal-5",
    "family": "u-selective-particle-removal",
    "type": "single",
    "points": 2,
    "stem": "一刚性容器的容积为 5.6 L，装有同温理想气体 A、B，A 的初始分压为 120 kPa。温度恒为 320 K，只移走 A 组分中 47% 的分子。A 的物质的量减少多少？",
    "options": [
      "\\(0.00011872\\,\\mathrm{mol}\\)",
      "\\(0.062919\\,\\mathrm{mol}\\)",
      "\\(0.11872\\,\\mathrm{mol}\\)",
      "\\(0.25259\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "只对 A 组分用状态方程，初始物质的量 \\(n_{A0}=p_AV/(RT)\\)，题设比例乘的是 A 的初始物质的量。这里 \\(T=320\\,\\mathrm K\\)，并可用 \\(1\\,\\mathrm{kPa\\,L}=1\\,\\mathrm J\\) 直接换算。代入题给数值，结果为 \\(0.11872\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-gauge-pressure-heating-5",
    "family": "u-gauge-pressure-heating",
    "type": "single",
    "points": 2,
    "stem": "密闭刚性容器内的理想气体初温 300 K，压力表显示表压 85 kPa。加热到 360 K，外界大气压一直为 100 kPa。末态压力表显示的表压约是多少？",
    "options": [
      "\\(102\\,\\mathrm{kPa}\\)",
      "\\(122\\,\\mathrm{kPa}\\)",
      "\\(222\\,\\mathrm{kPa}\\)",
      "\\(164.5\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 1 章",
    "explanation": "气体状态方程用绝对压强。先将初始表压加大气压，再利用恒容恒质量条件 \\(p_{\\rm abs,2}/p_{\\rm abs,1}=T_2/T_1\\)。最后将末态绝对压强减去大气压，才得到表压。代入题给数值，结果为 \\(122\\,\\mathrm{kPa}\\)。"
  },
  {
    "id": "u-mixing-different-heat-capacities-5",
    "family": "u-mixing-different-heat-capacities",
    "type": "single",
    "points": 3,
    "stem": "绝热刚性容器的两侧分别有 1.8 mol 单原子理想气体（302 K）和 2 mol 刚性双原子理想气体（422 K）。移去隔板，混合至同一温度。最终温度约是多少？",
    "options": [
      "\\(422\\,\\mathrm K\\)",
      "\\(379.92\\,\\mathrm K\\)",
      "\\(365.16\\,\\mathrm K\\)",
      "\\(362\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "外壁绝热且刚性，混合系统没有从外界吸热也没有做体积功，总内能守恒。两组分的定容摩尔热容分别为 \\(3R/2\\) 和 \\(5R/2\\)，故终温以两组分的总定容热容 \\(n_i C_{V,m,i}\\) 加权，而非仅按物质的量平均。代入题给数值，结果为 \\(379.92\\,\\mathrm K\\)。"
  },
  {
    "id": "u-state-coefficients-isochoric-5",
    "family": "u-state-coefficients-isochoric",
    "type": "single",
    "points": 3,
    "stem": "某气体在初态的体膨胀系数为 \\(0.002\\,\\mathrm{K^{-1}}\\)，等温压缩系数为 \\(2.7\\times10^{-8}\\,\\mathrm{Pa^{-1}}\\)。把容器体积保持不变，将温度小幅升高 6 K。用一阶近似求压强增量。",
    "options": [
      "\\(-4.4444\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(2.2222\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(4.4444\\times10^{5}\\,\\mathrm{Pa}\\)",
      "\\(2.6667\\times10^{6}\\,\\mathrm{Pa}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 2 章",
    "explanation": "小变化满足 \\(\\mathrm dV/V=\\alpha\\,\\mathrm dT-\\kappa_T\\,\\mathrm dp\\)。定容使左边为零，因此升温造成的膨胀趋势必须由增压抵消，\\(\\Delta p=\\alpha\\Delta T/\\kappa_T\\)；单位是 Pa。代入题给数值，结果为 \\(4.4444\\times10^{5}\\,\\mathrm{Pa}\\)。"
  },
  {
    "id": "u-vdw-isothermal-energy-5",
    "family": "u-vdw-isothermal-energy",
    "type": "single",
    "points": 3,
    "stem": "1 mol 范德瓦耳斯气体的摩尔内能为 \\(U_m=C_{V,m}T-a/V_m\\)，其中 \\(a=0.222\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)。恒温下摩尔体积由 0.79 L/mol 增到 1.817 L/mol。求内能变化。",
    "options": [
      "\\(158.83\\,\\mathrm J\\)",
      "\\(281.01\\,\\mathrm J\\)",
      "\\(122.18\\,\\mathrm J\\)",
      "\\(-158.83\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "初末温度相同，内能中的热运动项 \\(C_{V,m}T\\) 相消。分子吸引项由 \\(-a/V_{m1}\\) 变为 \\(-a/V_{m2}\\)，体积变大后其绝对值变小。先把摩尔体积换为 \\(\\mathrm{m^3\\,mol^{-1}}\\)，再求末态摩尔内能减初态摩尔内能，最后乘 1 mol 得到总内能变化。代入题给数值，结果为 \\(158.83\\,\\mathrm J\\)。"
  },
  {
    "id": "u-vdw-critical-temperature-5",
    "family": "u-vdw-critical-temperature",
    "type": "single",
    "points": 3,
    "stem": "某范德瓦耳斯气体的参数为 \\(0.308\\,\\mathrm{Pa\\,m^6\\,mol^{-2}}\\)、\\(0.000102\\,\\mathrm{m^3\\,mol^{-1}}\\)，分别对应 \\(a,b\\)。用临界等温线的拐点条件估算临界温度。",
    "options": [
      "\\(215.23\\,\\mathrm K\\)",
      "\\(13.452\\,\\mathrm K\\)",
      "\\(107.61\\,\\mathrm K\\)",
      "\\(363.2\\,\\mathrm K\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "由 \\(p=RT/(V_m-b)-a/V_m^2\\)，临界等温线满足 \\((\\partial p/\\partial V_m)_T=0\\) 和 \\((\\partial^2p/\\partial V_m^2)_T=0\\)。两式消元得到 \\(V_{m,c}=3b\\)，代回一阶导数条件得 \\(T_c=8a/(27Rb)\\)。代入题给数值，结果为 \\(107.61\\,\\mathrm K\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-compressibility-factor-5",
    "family": "u-compressibility-factor",
    "type": "single",
    "points": 2,
    "stem": "实测某气体在 335 K、4.1 MPa 下的摩尔体积为 0.89 L/mol。按 \\(Z=pV_m/(RT)\\) 定义，压缩因子约是多少？",
    "options": [
      "\\(0.76327\\)",
      "\\(1\\)",
      "\\(0.0013101\\)",
      "\\(1.3101\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 3 章",
    "explanation": "将压强换成 Pa、摩尔体积换成 \\(\\mathrm{m^3\\,mol^{-1}}\\) 后，\\(pV_m\\) 和 \\(RT\\) 都以 J/mol 计。用测得的 \\(pV_m\\) 除以同温的理想气体摩尔值 \\(RT\\)，得到无量纲的压缩因子。代入题给数值，结果为 \\(1.3101\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-wall-interface-temperature-5",
    "family": "u-wall-interface-temperature",
    "type": "single",
    "points": 3,
    "stem": "双层平板墙的两层面积相同，热面温度为 367 K，冷面为 296 K。靠热侧的第一层厚 22 mm、导热系数 0.51 W/(m·K)，第二层厚 57 mm、导热系数 1.2 W/(m·K)。达到稳定后，两层交界面温度约是多少？",
    "options": [
      "\\(331.5\\,\\mathrm K\\)",
      "\\(345.82\\,\\mathrm K\\)",
      "\\(329.79\\,\\mathrm K\\)",
      "\\(333.21\\,\\mathrm K\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "稳态下两层的单位面积热流相同，温降与热阻 \\(L/k\\) 成正比。第一层的温降是总温差乘 \\((L_1/k_1)/(L_1/k_1+L_2/k_2)\\)，从热面温度扣除该温降，得到交界面的温度。代入题给数值，结果为 \\(333.21\\,\\mathrm K\\)。"
  },
  {
    "id": "u-parallel-wall-path-5",
    "family": "u-parallel-wall-path",
    "type": "single",
    "points": 3,
    "stem": "一面厚 40 mm 的墙由两块并排材料组成，两块都贯穿墙厚。其面积分别为 0.16、0.25 m²，导热系数为 0.45、1.68 W/(m·K)。墙两面温差为 40 K，忽略横向热流。总导热功率是多少？",
    "options": [
      "\\(61.463\\,\\mathrm W\\)",
      "\\(420\\,\\mathrm W\\)",
      "\\(492\\,\\mathrm W\\)",
      "\\(246\\,\\mathrm W\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "两块材料具有相同的温差和厚度，构成并联导热路径。分别求 \\(\\dot Q_i=k_iA_i\\Delta T/L\\) 再相加。把两块热阻直接相加属于串联模型。代入题给数值，结果为 \\(492\\,\\mathrm W\\)。"
  },
  {
    "id": "u-cylindrical-conduction-5",
    "family": "u-cylindrical-conduction",
    "type": "single",
    "points": 3,
    "stem": "长度 1.18 m 的圆柱管壁导热系数为 0.51 W/(m·K)，内、外半径为 28 和 59.92 mm，内表面比外表面高 60 K。忽略端面漏热，稳态导热功率是多少？",
    "options": [
      "\\(425.88\\,\\mathrm W\\)",
      "\\(199.01\\,\\mathrm W\\)",
      "\\(226.87\\,\\mathrm W\\)",
      "\\(298.2\\,\\mathrm W\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "半径 \\(r\\) 处的导热面积是 \\(2\\pi rL\\)。稳态热流恒定，由傅里叶定律分离变量，热阻为 \\(\\int_{r_1}^{r_2}\\mathrm dr/(2\\pi kLr)=\\ln(r_2/r_1)/(2\\pi kL)\\)。总温差除以热阻。代入题给数值，结果为 \\(298.2\\,\\mathrm W\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-ice-water-melting-budget-5",
    "family": "u-ice-water-melting-budget",
    "type": "single",
    "points": 3,
    "stem": "绝热容器里有 0.3 kg、48 ℃ 的水，加入足够多的 0 ℃ 冰，使最终仍有冰剩余。取水的比热容 4180 J/(kg·K)、冰的熔化潜热 334 kJ/kg。会有多少 kg 冰熔化？",
    "options": [
      "\\(0.36043\\,\\mathrm{kg}\\)",
      "\\(180.22\\,\\mathrm{kg}\\)",
      "\\(0.090108\\,\\mathrm{kg}\\)",
      "\\(0.18022\\,\\mathrm{kg}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "仍有冰剩余，所以平衡温度是 0 ℃。原有温水降至 0 ℃ 放出的热量是 \\(m_wc_w t\\)，这部分热量全部用于冰的相变，满足 \\(m_{\\rm melt}L_f=m_wc_wt\\)。潜热需以 J/kg 代入。代入题给数值，结果为 \\(0.18022\\,\\mathrm{kg}\\)。"
  },
  {
    "id": "u-soap-bubble-surface-work-5",
    "family": "u-soap-bubble-surface-work",
    "type": "single",
    "points": 2,
    "stem": "从近似零半径缓慢吹出一个薄壁肥皂泡，最后半径为 5.8 mm，液膜的表面张力系数为 0.047 N/m。忽略其他功和损耗，新增两个液面的表面能是多少？",
    "options": [
      "\\(3.9737\\times10^{-5}\\,\\mathrm J\\)",
      "\\(7.9474\\times10^{-5}\\,\\mathrm J\\)",
      "\\(1.9868\\times10^{-5}\\,\\mathrm J\\)",
      "\\(2.3047\\times10^{-7}\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 7 章",
    "explanation": "肥皂泡有内、外两个液面，每个球面面积为 \\(4\\pi r^2\\)。表面能增量为表面张力乘总面积增量，即 \\(8\\pi r^2\\gamma\\)。只按一个液面计算会少一半。代入题给数值，结果为 \\(3.9737\\times10^{-5}\\,\\mathrm J\\)。"
  },
  {
    "id": "u-saturated-headspace-5",
    "family": "u-saturated-headspace",
    "type": "single",
    "points": 2,
    "stem": "密闭容器中有液态水，液面上方的气相空间为 5.5 L。保持 319 K，水的饱和蒸气压为 10.013 kPa。达到平衡后仍有液态水。将水蒸气视为理想气体，求气相中水的物质的量。",
    "options": [
      "\\(0.041529\\,\\mathrm{mol}\\)",
      "\\(2.0765\\times10^{-5}\\,\\mathrm{mol}\\)",
      "\\(20.765\\,\\mathrm{mol}\\)",
      "\\(0.020765\\,\\mathrm{mol}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "有液水与蒸气共存时，水蒸气分压等于该温度的饱和蒸气压。只把气相空间体积代入状态方程 \\(n_{\\rm vap}=p_{\\rm sat}V_{\\rm gas}/(RT)\\)，液态水的体积不算入气体体积。代入题给数值，结果为 \\(0.020765\\,\\mathrm{mol}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-vapour-pressure-two-temperatures-5",
    "family": "u-vapour-pressure-two-temperatures",
    "type": "single",
    "points": 3,
    "stem": "某液体在 308 K 的饱和蒸气压为 21 kPa。在此温区内取摩尔汽化潜热 36 kJ/mol 为常量，忽略液体摩尔体积，把蒸气视为理想气体。估算 324 K 的饱和蒸气压。",
    "options": [
      "\\(42.046\\,\\mathrm{kPa}\\)",
      "\\(21\\,\\mathrm{kPa}\\)",
      "\\(10.488\\,\\mathrm{kPa}\\)",
      "\\(22.091\\,\\mathrm{kPa}\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 8 章",
    "explanation": "克拉珀龙方程在题设近似下化为 \\(\\mathrm d(\\ln p)/\\mathrm dT=L/(RT^2)\\)。由 \\(T_1\\) 积分到 \\(T_2\\)，得 \\(\\ln(p_2/p_1)=(L/R)(1/T_1-1/T_2)\\)。温度提高时指数为正，蒸气压增大。代入题给数值，结果为 \\(42.046\\,\\mathrm{kPa}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-entropy-variable-cv-5",
    "family": "u-entropy-variable-cv",
    "type": "single",
    "points": 3,
    "stem": "一定量气体在刚性容器里由 304 K 升到 380 K。整份气体的定容热容为 \\(C_V(T)=a+bT\\)，其中 \\(a=20\\,\\mathrm{J/K}\\)、\\(b=0.061\\,\\mathrm{J/K^2}\\)。求气体的熵变。",
    "options": [
      "\\(4.4629\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(9.0989\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.636\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(9.6353\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "取相同端点间的一条可逆等容路径。因 \\(\\mathrm dS=C_V(T)\\,\\mathrm dT/T\\)，积分核可写成 \\(a/T+b\\)。前一项积分为 \\(a\\ln(T_2/T_1)\\)，后一项给出 \\(b(T_2-T_1)\\)。代入题给数值，结果为 \\(9.0989\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-cooling-work-5",
    "family": "u-finite-cooling-work",
    "type": "single",
    "points": 3,
    "stem": "一个热容恒为 145 J/K 的物体起初处在 480 K。让它作为可逆热机的高温端逐步冷却，低温热库保持 302 K。物体冷却到热库温度时，热机累计输出的功为多少？",
    "options": [
      "\\(5519.5\\,\\mathrm J\\)",
      "\\(9571.2\\,\\mathrm J\\)",
      "\\(20290\\,\\mathrm J\\)",
      "\\(25810\\,\\mathrm J\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "每一步热机的高温端温度都等于物体的即时温度 \\(T\\)。物体放出的热量为 \\(C\\,|\\mathrm dT|\\)，其中 \\(1-T_0/T\\) 的比例转为功。从 \\(T_0\\) 积到 \\(T_h\\)，得到 \\(C(T_h-T_0)-CT_0\\ln(T_h/T_0)\\)。代入题给数值，结果为 \\(5519.5\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-finite-reversible-equilibrium-5",
    "family": "u-finite-reversible-equilibrium",
    "type": "single",
    "points": 3,
    "stem": "两个热容分别恒为 130、190 J/K 的物体，初温分别为 458、283 K。将它们作为可逆热机的两个热端，缓慢运行至两物体等温。忽略其他热交换，求共同末温。",
    "options": [
      "\\(354.09\\,\\mathrm K\\)",
      "\\(344.13\\,\\mathrm K\\)",
      "\\(360.02\\,\\mathrm K\\)",
      "\\(370.5\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "可逆热机循环中没有净熵变，两个物体与外界也没有热交换，所以 \\(C_1\\ln(T_f/T_1)+C_2\\ln(T_f/T_2)=0\\)。把共同末温的对数项移到同一边，再取指数。若令两物体净放热为零，就漏算了热机向外做功。代入题给数值，结果为 \\(344.13\\,\\mathrm K\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-heat-pump-cycle-count-5",
    "family": "u-heat-pump-cycle-count",
    "type": "single",
    "points": 2,
    "stem": "一台可逆热泵在 680 K 和 310 K 的两个热源之间工作。高温端平均每秒得到 1920 J 热量，热泵每秒运行 2 个循环。每个循环要输入多少功？",
    "options": [
      "\\(437.65\\,\\mathrm J\\)",
      "\\(522.35\\,\\mathrm J\\)",
      "\\(960\\,\\mathrm J\\)",
      "\\(1145.8\\,\\mathrm J\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "用热量的正数大小记号。可逆热泵有 \\(Q_c/Q_h=T_c/T_h\\)，故输入功为 \\(Q_h(1-T_c/T_h)\\)。题中给的供热量是每秒的，把输入功率再除以每秒循环数才得到每循环的输入功。代入题给数值，结果为 \\(522.35\\,\\mathrm J\\)。"
  },
  {
    "id": "u-cascade-second-engine-work-5",
    "family": "u-cascade-second-engine-work",
    "type": "single",
    "points": 2,
    "stem": "两台可逆热机串联。第一台在 700 K 和 492 K 间运行，每循环吸热 580 J。第一台排出的热量全部交给第二台，后者在 492 K 和 316 K 间运行。问与第一台这一次循环对应，第二台输出多少功？",
    "options": [
      "\\(172.34\\,\\mathrm J\\)",
      "\\(318.17\\,\\mathrm J\\)",
      "\\(207.48\\,\\mathrm J\\)",
      "\\(145.83\\,\\mathrm J\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "第一台排热为 \\(Q_hT_m/T_h\\)，这正是第二台获得的热量。第二台效率为 \\(1-T_c/T_m\\)，所以它的功是 \\(Q_h(T_m-T_c)/T_h\\)。若直接把第一台吸热当成第二台的输入，会高估输出。代入题给数值，结果为 \\(145.83\\,\\mathrm J\\)。"
  },
  {
    "id": "u-rectangular-cycle-efficiency-5",
    "family": "u-rectangular-cycle-efficiency",
    "type": "single",
    "points": 3,
    "stem": "理想气体沿 \\(p\\!-\\!V\\) 图上的顺时针矩形循环。低、高压分别为 114、252 kPa，小、大体积分别为 2.4、6.2 L。给定摩尔定容热容 \\(C_{V,m}=1.5R\\)，求热机效率（百分数）。",
    "options": [
      "\\(27.21\\,\\%\\)",
      "\\(54.762\\,\\%\\)",
      "\\(18.14\\,\\%\\)",
      "\\(9.0702\\,\\%\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "净功是矩形面积 \\((p_h-p_l)(V_h-V_l)\\)。在小体积等容增压吸收 \\((C_{V,m}/R)(p_h-p_l)V_l\\)，在高压下等压膨胀吸收 \\((C_{p,m}/R)p_h(V_h-V_l)\\)。另两段均放热。将净功除以上述两段吸热之和。代入题给数值，结果为 \\(18.14\\,\\%\\)。"
  },
  {
    "id": "u-polytropic-molar-heat-5",
    "family": "u-polytropic-molar-heat",
    "type": "single",
    "points": 3,
    "stem": "单原子理想气体沿准静态路径 \\(pV^m=\\mathrm{const}\\) 变化，指数 \\(m=2.26\\)。路径的摩尔热容 \\(\\delta Q/(n\\,\\mathrm dT)\\) 约是多少？",
    "options": [
      "\\(2.5\\,R\\)",
      "\\(1.5\\,R\\)",
      "\\(0.70635\\,R\\)",
      "\\(2.2937\\,R\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "联立 \\(pV^m=\\mathrm{const}\\) 与 \\(pV=nRT\\)，得 \\(\\mathrm dT/T=(1-m)\\mathrm dV/V\\)。由第一定律，\\(\\delta Q=nC_{V,m}\\mathrm dT+p\\,\\mathrm dV\\)，故路径热容为 \\(C_{V,m}+R/(1-m)\\)。这里的热容沿指定路径定义。代入题给数值，结果为 \\(0.70635\\,R\\)。"
  },
  {
    "id": "u-external-pressure-adiabat-5",
    "family": "u-external-pressure-adiabat",
    "type": "single",
    "points": 3,
    "stem": "气缸中有初温 383 K、初压 \\(p_i\\) 的理想气体，其摩尔定容热容为 \\(1.5R\\)。绝热地突然将恒定外压降至 \\(0.59p_i\\)，活塞移动，最终静止并达到力学平衡。忽略活塞的质量、摩擦及高度变化，求气体末温。",
    "options": [
      "\\(383\\,\\mathrm K\\)",
      "\\(320.19\\,\\mathrm K\\)",
      "\\(225.97\\,\\mathrm K\\)",
      "\\(310.13\\,\\mathrm K\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "全过程边界功为 \\(p_e(V_f-V_i)\\)。绝热第一定律给 \\(nC_{V,m}(T_f-T_i)=-p_e(V_f-V_i)\\)。利用终态 \\(p_eV_f=nRT_f\\) 与初态 \\(p_iV_i=nRT_i\\)，可解出 \\(T_f/T_i=(C_{V,m}/R+p_e/p_i)/(C_{V,m}/R+1)\\)。突变外压的过程不可用可逆绝热关系。代入题给数值，结果为 \\(320.19\\,\\mathrm K\\)。"
  },
  {
    "id": "u-path-heat-difference-5",
    "family": "u-path-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体起始为 147 kPa、2.8 L，末态体积 6 L，末温与初温相同。路径甲沿初压等压膨胀后等容冷却，路径乙为可逆等温膨胀。求甲比乙多吸收的净热量。",
    "options": [
      "\\(313.7\\,\\mathrm J\\)",
      "\\(-156.7\\,\\mathrm J\\)",
      "\\(156.7\\,\\mathrm J\\)",
      "\\(470.4\\,\\mathrm J\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 6 章",
    "explanation": "两条路径的初末温度相同，理想气体 \\(\\Delta U=0\\)，所以各自净吸热等于各自净功。甲只有等压段做功 \\(p_1(V_2-V_1)\\)，乙做功 \\(p_1V_1\\ln(V_2/V_1)\\)。两者相减，\\(\\mathrm{kPa\\,L}\\) 可直接换成 J。代入题给数值，结果为 \\(156.7\\,\\mathrm J\\)。",
    "reference": "积分表：\\(\\int\\mathrm dx/x=\\ln|x|+C\\)。"
  },
  {
    "id": "u-calorimetry-specific-heat-5",
    "family": "u-calorimetry-specific-heat",
    "type": "single",
    "points": 3,
    "stem": "热容为 54 J/K 的量热器装有 0.48 kg 的水，初温均为 24 ℃。把 0.63 kg、91 ℃ 的金属块迅速浸入，达到 35 ℃。忽略向环境漏热，水的比热容取 4180 J/(kg·K)。求金属的比热容。",
    "options": [
      "\\(3270.5\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(642.41\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(625.58\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(404.72\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      1
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "金属放热 \\(mc_m(t_m-t_f)\\)，水和量热器共同吸热 \\((m_wc_w+C_{\\mathrm{cal}})(t_f-t_w)\\)。量热器给的是总热容，水要先用质量乘比热容，两项才能相加。代入题给数值，结果为 \\(642.41\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-mixture-specific-heat-difference-5",
    "family": "u-mixture-specific-heat-difference",
    "type": "single",
    "points": 3,
    "stem": "理想气体混合物由氦和氮组成，氦的质量分数是 65%。氦、氮的摩尔质量分别取 4、28 g/mol。求混合物按单位质量计的 \\(c_p-c_v\\)。",
    "options": [
      "\\(1.4549\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(670.48\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(1455\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)",
      "\\(8.314\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 2 章",
    "explanation": "每摩尔理想气体有 \\(C_{p,m}-C_{V,m}=R\\)。以 1 kg 混合气体为基准，其摩尔数为 \\(w_{\\rm He}/M_{\\rm He}+w_{\\rm N}/M_{\\rm N}\\)，乘 \\(R\\) 就得到按每千克计的差值。题给质量分数须先换算成摩尔数。代入题给数值，结果为 \\(1455\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-pressure-melting-shift-5",
    "family": "u-pressure-melting-shift",
    "type": "single",
    "points": 3,
    "stem": "某晶体在给定压力下的熔点为 280 K，固、液密度分别为 922、992 kg/m³，熔化潜热为 338 kJ/kg。将压强提高 59 MPa，把这些参数视为常量。估算熔点变化。",
    "options": [
      "\\(-3.7407\\,\\mathrm K\\)",
      "\\(3.7407\\,\\mathrm K\\)",
      "\\(-0.037407\\,\\mathrm K\\)",
      "\\(-37.407\\,\\mathrm K\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 8 章",
    "explanation": "熔化过程的质量比容变化为 \\(\\Delta v=1/\\rho_l-1/\\rho_s\\)。克拉珀龙式给 \\(\\mathrm dT/\\mathrm dp=T\\Delta v/L\\)，乘压强增量得近似温变。液相更密，\\(\\Delta v<0\\)，提高压强会使熔点下降。代入题给数值，结果为 \\(-3.7407\\,\\mathrm K\\)。"
  },
  {
    "id": "u-barometric-height-from-density-5",
    "family": "u-barometric-height-from-density",
    "type": "single",
    "points": 2,
    "stem": "在恒温 330 K、重力加速度取 9.81 m/s² 的大气层里，气体平均摩尔质量为 32 g/mol。气体可视为理想气体。到达多大高度时，气体密度是地面密度的 39%？",
    "options": [
      "\\(-8229.5\\,\\mathrm m\\)",
      "\\(5331.3\\,\\mathrm m\\)",
      "\\(8.2295\\,\\mathrm m\\)",
      "\\(8229.5\\,\\mathrm m\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 4 章",
    "explanation": "等温静力平衡中，\\(\\mathrm d\\ln p/\\mathrm dz=-Mg/(RT)\\)。因为 \\(T\\) 与 \\(M\\) 固定，\\(\\rho/\\rho_0=p/p_0=e^{-Mgz/(RT)}\\)。对给定密度比取自然对数后求 \\(z\\)。代入题给数值，结果为 \\(8229.5\\,\\mathrm m\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-unequal-volume-occupancy-5",
    "family": "u-unequal-volume-occupancy",
    "type": "single",
    "points": 2,
    "stem": "容器被想象中的分界面分成两部分，左区占总体积 35%。有 16 个可区分的理想气体分子，平衡时可把各分子的位置看作相互独立。任一时刻恰有 7 个分子在左区的概率约为多少？",
    "options": [
      "\\(0.15245\\)",
      "\\(1.3326\\times10^{-5}\\)",
      "\\(0.044201\\)",
      "\\(0.17456\\)"
    ],
    "answer": [
      0
    ],
    "source": "教材经典题型改编 · 常树人《热学》第 1 章",
    "explanation": "先指定哪 \\(m\\) 个粒子在左边，对应概率是 \\(p^m(1-p)^{N-m}\\)。有 \\(\\binom Nm\\) 种指定法，且事件互斥。因此用二项分布取恰好 \\(m\\) 的一项，\\(p\\) 是左区体积分数。代入题给数值，结果为 \\(0.15245\\)。"
  },
  {
    "id": "u-bath-entropy-isothermal-compression-5",
    "family": "u-bath-entropy-isothermal-compression",
    "type": "single",
    "points": 2,
    "stem": "把 1.78 mol 理想气体与 330 K 的大热库保持热接触，并可逆等温地压缩气体，直到初体积与末体积之比为 2.8。热库的熵变约是多少？",
    "options": [
      "\\(5028.3\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(42.664\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-15.237\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(15.237\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "气体等温压缩时内能不变，外界对气体做的功全部以热量流向热库。气体熵变是 \\(nR\\ln(V_f/V_i)<0\\)，过程可逆，热库熵增等于其相反数。结果是热库的熵变，单位为 J/K。代入题给数值，结果为 \\(15.237\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  },
  {
    "id": "u-diffusion-number-density-change-5",
    "family": "u-diffusion-number-density-change",
    "type": "single",
    "points": 2,
    "stem": "同一种稀薄硬球气体在温度 320 K 时扩散系数为 0.025 m²/s。改为 426 K，分子数密度变为原来的 2.2 倍。估算新状态下的扩散系数。",
    "options": [
      "\\(0.011364\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.028845\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.013111\\,\\mathrm{m^2\\,s^{-1}}\\)",
      "\\(0.015128\\,\\mathrm{m^2\\,s^{-1}}\\)"
    ],
    "answer": [
      2
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 6 章",
    "explanation": "平均自由程随分子数密度的倒数变化，分子平均速率随绝对温度平方根变化。用 \\(D\\simeq\\bar v\\lambda/3\\) 得 \\(D_2/D_1=\\sqrt{T_2/T_1}/(n_2/n_1)\\)。同一种气体的分子碰撞直径在两种状态中相同。代入题给数值，结果为 \\(0.013111\\,\\mathrm{m^2\\,s^{-1}}\\)。"
  },
  {
    "id": "u-piston-isothermal-entropy-generation-5",
    "family": "u-piston-isothermal-entropy-generation",
    "type": "single",
    "points": 3,
    "stem": "1 mol 理想气体初始与恒温 358 K 的热库达到热平衡。外压从初态气压突然提高到原来的 1.8 倍，活塞在恒定外压下重新静止后，气体再次与热库达到热平衡。求气体和热库的总熵变。",
    "options": [
      "\\(6.6512\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(-1.7643\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(4.8869\\,\\mathrm{J\\,K^{-1}}\\)",
      "\\(1.7643\\,\\mathrm{J\\,K^{-1}}\\)"
    ],
    "answer": [
      3
    ],
    "source": "教材经典题型改编 · 宋锋等《热学》第 3 章",
    "explanation": "等温末态有 \\(V_f=V_i/k\\)。恒外压使外界对气体做功 \\(kp_i(V_i-V_f)=(k-1)RT\\)，等温气体将这些能量作为热传给热库，故热库熵增 \\((k-1)R\\)。气体熵变为 \\(R\\ln(V_f/V_i)=-R\\ln k\\)，二者相加。代入题给数值，结果为 \\(1.7643\\,\\mathrm{J\\,K^{-1}}\\)。",
    "reference": "气体常数 \\(R=8.314\\,\\mathrm{J\\,mol^{-1}\\,K^{-1}}\\)。"
  }
]);
