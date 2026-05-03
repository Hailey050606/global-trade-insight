window.SITE_CONTENT = {
  site: {
    title: "Global Trade Insight",
    titleEn: "Global Trade Insight",
    subtitle: "面向全球贸易团队的实务知识库，从交易结构到合规风控，支持跨区域协作与决策。",
    subtitleEn: "A practical knowledge base for global trade teams, from deal structure to compliance and risk control.",
    updatedAt: "2026-05-03",
    metrics: [
      { value: "40+", label: "国际专题模块" },
      { value: "12", label: "贸易场景模板" },
      { value: "5", label: "区域市场集群" },
      { value: "24h", label: "可维护更新周期" }
    ],
    metricsEn: [
      { value: "40+", label: "Trade Knowledge Modules" },
      { value: "12", label: "Execution Templates" },
      { value: "5", label: "Regional Market Clusters" },
      { value: "24h", label: "Content Update Cycle" }
    ],
    marketCoverage: ["北美", "欧洲", "亚太", "中东", "拉美", "跨区域供应链"],
    marketCoverageEn: ["North America", "Europe", "APAC", "Middle East", "LATAM", "Cross-region Supply Chains"]
  },
  paths: [
    {
      id: "starter",
      name: "入门路径",
      nameEn: "Starter Track",
      desc: "快速认识国际贸易链路、常见角色与基础术语。",
      descEn: "Understand global trade flow, key stakeholders, and foundational terms.",
      highlights: ["贸易参与方", "基础术语", "关键单证"],
      highlightsEn: ["Trade participants", "Core terms", "Core documents"]
    },
    {
      id: "operations",
      name: "实务路径",
      nameEn: "Operations Track",
      desc: "覆盖询盘报价、合同条款、付款安排、物流执行与清关协同。",
      descEn: "Cover quotation, contract terms, payment setup, logistics execution, and clearance coordination.",
      highlights: ["报价策略", "合同设计", "履约协同"],
      highlightsEn: ["Pricing strategy", "Contract design", "Execution coordination"]
    },
    {
      id: "risk-control",
      name: "风控路径",
      nameEn: "Risk Control Track",
      desc: "提升交易安全性，降低拒付、延误、合规与地缘风险。",
      descEn: "Improve deal security and reduce non-payment, delay, compliance, and geopolitical risks.",
      highlights: ["客户资信", "制裁筛查", "争议处理"],
      highlightsEn: ["Customer credit", "Sanctions screening", "Dispute handling"]
    },
    {
      id: "analytics",
      name: "决策分析路径",
      nameEn: "Trade Analytics Track",
      desc: "用数据驱动报价、库存、运输与市场进入策略。",
      descEn: "Use data to drive pricing, inventory, transport, and market entry decisions.",
      highlights: ["落地成本", "需求预测", "区域对比"],
      highlightsEn: ["Landed cost", "Demand forecast", "Regional benchmark"]
    }
  ],
  topics: [
    {
      id: "incoterms",
      title: "Incoterms 2020 实战理解",
      titleEn: "Incoterms 2020 in Practice",
      level: "入门",
      levelEn: "Beginner",
      region: "全球",
      regionEn: "Global",
      summary: "理解 EXW、FOB、CIF、DAP 等术语下的风险与费用边界。",
      summaryEn: "Understand risk and cost boundaries under EXW, FOB, CIF, DAP and more.",
      detail: "重点掌握风险转移时点、费用承担主体与责任边界，避免合同条款与实际物流安排冲突。",
      detailEn: "Focus on transfer of risk points, cost allocation, and responsibilities to avoid contract-logistics mismatch.",
      tags: ["术语", "费用划分", "风险转移"],
      tagsEn: ["Terms", "Cost allocation", "Risk transfer"],
      featured: true
    },
    {
      id: "supplier-due-diligence",
      title: "海外供应商尽调框架",
      titleEn: "Overseas Supplier Due Diligence Framework",
      level: "入门",
      levelEn: "Beginner",
      region: "全球",
      regionEn: "Global",
      summary: "建立供应商筛选标准，评估交付能力、财务稳定性和合规历史。",
      summaryEn: "Set supplier screening criteria across delivery capability, financial stability, and compliance history.",
      detail: "建议结合审厂、样品验证、贸易记录、第三方信用报告进行多维度评估。",
      detailEn: "Use multi-layer evaluation with factory audits, sampling, trade records, and third-party credit reports.",
      tags: ["供应链", "尽调", "采购"],
      tagsEn: ["Supply chain", "Due diligence", "Sourcing"],
      featured: true
    },
    {
      id: "payment",
      title: "付款方式与回款安全",
      titleEn: "Payment Methods and Collection Security",
      level: "中级",
      levelEn: "Intermediate",
      region: "全球",
      regionEn: "Global",
      summary: "比较 T/T、L/C、D/P 的适用场景，建立回款风控清单。",
      summaryEn: "Compare T/T, L/C, and D/P scenarios and build a collection risk checklist.",
      detail: "建立客户信用分级、授信额度与付款节点联动机制，结合条款保障回款效率。",
      detailEn: "Set customer credit tiers, exposure limits, and payment milestones to improve collection certainty.",
      tags: ["结算", "信用证", "拒付预防"],
      tagsEn: ["Settlement", "Letter of credit", "Non-payment prevention"],
      featured: true
    },
    {
      id: "trade-finance",
      title: "贸易融资工具组合",
      titleEn: "Trade Finance Instruments Portfolio",
      level: "中级",
      levelEn: "Intermediate",
      region: "全球",
      regionEn: "Global",
      summary: "比较保理、福费廷、信用证议付和出口信保的融资逻辑。",
      summaryEn: "Compare factoring, forfaiting, L/C discounting, and export credit insurance structures.",
      detail: "不同工具在资金成本、可融资比例和风险承担方式上差异明显，需按客群与账期组合使用。",
      detailEn: "Each instrument differs in cost, financing ratio, and risk transfer; combine by customer profile and tenor.",
      tags: ["融资", "现金流", "风控"],
      tagsEn: ["Finance", "Cash flow", "Risk control"]
    },
    {
      id: "customs-global",
      title: "跨区域清关协同要点",
      titleEn: "Cross-Region Customs Coordination Essentials",
      level: "中级",
      levelEn: "Intermediate",
      region: "跨区域",
      regionEn: "Cross-region",
      summary: "整合出口国与进口国申报要求，降低改单和查验概率。",
      summaryEn: "Align exporter and importer declaration requirements to reduce amendment and inspection risk.",
      detail: "建议建立统一商品主数据和 HS 归类审查机制，避免多地口径不一致。",
      detailEn: "Build a unified product master and HS review process to prevent cross-market inconsistencies.",
      tags: ["报关", "HS编码", "流程协同"],
      tagsEn: ["Customs", "HS code", "Process coordination"]
    },
    {
      id: "regional-tariff-strategy",
      title: "区域关税策略与 FTA 利用",
      titleEn: "Regional Tariff Strategy and FTA Utilization",
      level: "中级",
      levelEn: "Intermediate",
      region: "亚太",
      regionEn: "APAC",
      summary: "通过 RCEP、双边自贸协定优化税率与原产地路径。",
      summaryEn: "Use RCEP and bilateral FTAs to optimize duty rates and origin pathways.",
      detail: "核心在于原产地规则管理、供应链路径设计以及单证合规一致性。",
      detailEn: "Success depends on rules-of-origin governance, supply chain design, and document consistency.",
      tags: ["FTA", "原产地", "税务优化"],
      tagsEn: ["FTA", "Origin", "Duty optimization"]
    },
    {
      id: "latam-distribution",
      title: "拉美分销网络与渠道风控",
      titleEn: "LATAM Distribution Network and Channel Risk Control",
      level: "中级",
      levelEn: "Intermediate",
      region: "拉美",
      regionEn: "LATAM",
      summary: "构建经销商准入和返点机制，降低渠道冲突与坏账风险。",
      summaryEn: "Design distributor onboarding and incentive rules to reduce channel conflict and bad debt.",
      detail: "建议将销售目标、库存周转、账款表现纳入渠道评级体系。",
      detailEn: "Include sales target, inventory turns, and receivable performance in partner scoring.",
      tags: ["拉美", "渠道", "应收管理"],
      tagsEn: ["LATAM", "Channels", "AR management"]
    },
    {
      id: "middle-east-payment",
      title: "中东市场信用与付款安排",
      titleEn: "Credit and Payment Setup for Middle East Markets",
      level: "中级",
      levelEn: "Intermediate",
      region: "中东",
      regionEn: "Middle East",
      summary: "结合项目制采购与账期习惯，优化信用条件与担保条款。",
      summaryEn: "Adapt credit terms and guarantee clauses to project-based procurement and payment cycles.",
      detail: "通过分期节点、保函机制和违约条款设计，减少回款不确定性。",
      detailEn: "Use milestone payments, guarantees, and default clauses to reduce collection uncertainty.",
      tags: ["中东", "信用管理", "合同条款"],
      tagsEn: ["Middle East", "Credit management", "Contract clauses"]
    },
    {
      id: "compliance",
      title: "出口合规与制裁风险",
      titleEn: "Export Compliance and Sanctions Risks",
      level: "进阶",
      levelEn: "Advanced",
      region: "欧美",
      regionEn: "EU/US",
      summary: "识别受限实体、双用途物项及高风险地区交易信号。",
      summaryEn: "Identify restricted entities, dual-use items, and high-risk regional signals.",
      detail: "将客户、最终用途、货物属性纳入统一筛查流程，确保交易可审计可追踪。",
      detailEn: "Integrate customer, end-use, and item attributes into one auditable screening process.",
      tags: ["合规", "制裁", "风险预警"],
      tagsEn: ["Compliance", "Sanctions", "Risk alerts"]
    },
    {
      id: "eu-cbam",
      title: "欧盟 CBAM 对出口企业的影响",
      titleEn: "How EU CBAM Impacts Exporters",
      level: "进阶",
      levelEn: "Advanced",
      region: "欧洲",
      regionEn: "Europe",
      summary: "理解碳边境调节机制对报价、申报和供应链的连锁影响。",
      summaryEn: "Understand CBAM effects on pricing, declarations, and supply chain planning.",
      detail: "企业需要建立碳数据采集、核验和客户披露机制，避免合规成本失控。",
      detailEn: "Set up carbon data collection, verification, and customer disclosure workflows to control compliance cost.",
      tags: ["CBAM", "碳合规", "欧洲市场"],
      tagsEn: ["CBAM", "Carbon compliance", "Europe market"]
    },
    {
      id: "us-trade-remedies",
      title: "美国贸易救济风险识别",
      titleEn: "US Trade Remedy Risk Identification",
      level: "进阶",
      levelEn: "Advanced",
      region: "北美",
      regionEn: "North America",
      summary: "关注反倾销、反补贴和 301 关税变化对订单利润的影响。",
      summaryEn: "Track antidumping, countervailing, and Section 301 changes to protect deal margins.",
      detail: "建议建立关税监测机制和替代原产地方案，以提高应对速度。",
      detailEn: "Build a tariff watchlist and alternative origin plan to improve response speed.",
      tags: ["北美", "贸易救济", "风险监测"],
      tagsEn: ["North America", "Trade remedies", "Risk monitoring"]
    },
    {
      id: "logistics",
      title: "国际物流方案选择",
      titleEn: "Choosing International Logistics Models",
      level: "入门",
      levelEn: "Beginner",
      region: "全球",
      regionEn: "Global",
      summary: "海运、空运、铁路、多式联运对时效与成本的影响。",
      summaryEn: "Evaluate cost and lead-time impacts of ocean, air, rail, and multimodal shipping.",
      detail: "根据货值、交期、库存成本建立运输方式决策矩阵，而不是只看运价。",
      detailEn: "Use a decision matrix based on value, lead time, and inventory cost, not freight only.",
      tags: ["物流", "时效", "成本"],
      tagsEn: ["Logistics", "Lead time", "Cost"]
    },
    {
      id: "tariff",
      title: "关税结构与落地成本核算",
      titleEn: "Tariff Structure and Landed Cost Modeling",
      level: "进阶",
      levelEn: "Advanced",
      region: "全球",
      regionEn: "Global",
      summary: "将关税、增值税、清关杂费纳入 landed cost 核算模型。",
      summaryEn: "Include duty, VAT, and clearance charges in landed cost models.",
      detail: "报价前进行汇率与税率敏感性分析，可降低低价签约带来的利润侵蚀。",
      detailEn: "Sensitivity analysis on FX and tax rates before quoting helps protect gross margin.",
      tags: ["关税", "成本", "报价"],
      tagsEn: ["Tariff", "Cost", "Quotation"],
      featured: true
    }
  ],
  cases: [
    {
      title: "信用证不符点导致延期回款",
      titleEn: "Delayed Collection Due to L/C Discrepancy",
      problem: "装船日期与提单签发日期逻辑不一致，被开证行提出不符点。",
      problemEn: "A mismatch between shipment and B/L issuance dates triggered a discrepancy.",
      solution: "建立制单前检查清单，新增业务与单证双人交叉复核。",
      solutionEn: "Implemented a pre-document checklist and two-person cross review.",
      lesson: "单证一致性决定回款确定性，流程标准化比经验更可靠。",
      lessonEn: "Document consistency directly impacts collection certainty; standardization beats personal experience."
    },
    {
      title: "欧洲客户要求补充 CBAM 信息导致发货延迟",
      titleEn: "Shipment Delay Due to Additional CBAM Data Requests",
      problem: "客户在出运前临时要求提供碳排放核算明细，供应商端数据准备不足。",
      problemEn: "Buyer requested detailed emissions data before shipment, while supplier data readiness was weak.",
      solution: "建立产品级碳数据模板，提前与供应商签订数据披露条款。",
      solutionEn: "Introduced product-level carbon templates and pre-agreed supplier disclosure clauses.",
      lesson: "新型合规要求会直接影响交付节奏，必须前置准备。",
      lessonEn: "Emerging compliance requirements directly affect delivery timelines and need proactive preparation."
    },
    {
      title: "北美市场关税政策调整导致利润倒挂",
      titleEn: "North America Tariff Shift Caused Margin Inversion",
      problem: "订单签订后政策调整，新增税负未在合同中设置风险分担机制。",
      problemEn: "Tariff changes after PO confirmation were not covered by burden-sharing clauses.",
      solution: "新增政策变化触发条款，并在重点市场建立月度关税复盘机制。",
      solutionEn: "Added tariff-change trigger clauses and a monthly tariff review cadence for key markets.",
      lesson: "跨境合同需要内置政策波动缓冲机制。",
      lessonEn: "Cross-border contracts should embed policy-volatility buffers."
    },
    {
      title: "拉美分销商回款拉长影响现金流",
      titleEn: "Extended Collection Cycle from LATAM Distributor",
      problem: "项目交付后账期被动拉长，导致资金占用超出年度计划。",
      problemEn: "Post-delivery payment cycles stretched unexpectedly and consumed planned cash capacity.",
      solution: "按里程碑拆分账期并引入信用保险，降低单一客户回款集中风险。",
      solutionEn: "Split terms by milestones and introduced credit insurance to reduce concentration risk.",
      lesson: "渠道扩张必须同步升级应收管理体系。",
      lessonEn: "Channel expansion must be accompanied by stronger receivables governance."
    },
    {
      title: "中东项目订单因保函条款争议停滞",
      titleEn: "Middle East Project Order Stalled by Guarantee Clause Dispute",
      problem: "双方对预付款保函与履约保函触发条件理解不一致。",
      problemEn: "Buyer and seller interpreted advance and performance guarantee triggers differently.",
      solution: "在投标前统一法律条款模板，并建立法务与业务联审机制。",
      solutionEn: "Standardized legal templates pre-bid and launched legal-business joint review.",
      lesson: "跨法域项目应在签约前解决条款语义差异。",
      lessonEn: "Cross-jurisdiction projects should resolve clause semantics before contract signature."
    }
  ],
  resources: [
    {
      name: "外贸合同关键条款清单",
      nameEn: "Key Clauses Checklist for Trade Contracts",
      type: "模板",
      typeEn: "Template",
      desc: "覆盖交付、验收、违约、不可抗力、争议解决等关键项。",
      descEn: "Covers delivery, acceptance, breach, force majeure, and dispute resolution clauses.",
      link: "#"
    },
    {
      name: "单证审核 Checklist",
      nameEn: "Document Review Checklist",
      type: "模板",
      typeEn: "Template",
      desc: "按开证要求核验单据一致性，降低银行不符点风险。",
      descEn: "Validate consistency against L/C terms to reduce bank discrepancy risk.",
      link: "#"
    },
    {
      name: "落地成本（Landed Cost）核算模板",
      nameEn: "Landed Cost Modeling Template",
      type: "模板",
      typeEn: "Template",
      desc: "支持关税、税费、物流、汇率敏感性分析。",
      descEn: "Supports duty, tax, logistics, and FX sensitivity analysis.",
      link: "#"
    },
    {
      name: "供应商尽调问卷模板",
      nameEn: "Supplier Due Diligence Questionnaire",
      type: "模板",
      typeEn: "Template",
      desc: "覆盖合规、产能、财务、质量体系和可持续指标。",
      descEn: "Covers compliance, capacity, financials, quality systems, and sustainability metrics.",
      link: "#"
    },
    {
      name: "WTO 官方网站",
      nameEn: "WTO Official Website",
      type: "外部参考",
      typeEn: "Reference",
      desc: "多边贸易规则、争端与统计信息的权威入口。",
      descEn: "Authoritative source for multilateral trade rules, disputes, and statistics.",
      link: "https://www.wto.org/"
    },
    {
      name: "国际商会 ICC",
      nameEn: "International Chamber of Commerce (ICC)",
      type: "外部参考",
      typeEn: "Reference",
      desc: "Incoterms、贸易规则与合同实践的重要参考来源。",
      descEn: "A key source for Incoterms, trade rules, and contract practice.",
      link: "https://iccwbo.org/"
    },
    {
      name: "联合国贸发会议 UNCTAD",
      nameEn: "UNCTAD",
      type: "外部参考",
      typeEn: "Reference",
      desc: "全球贸易、投资与发展数据与政策研究。",
      descEn: "Global trade, investment, and development data and policy research.",
      link: "https://unctad.org/"
    },
    {
      name: "欧盟 CBAM 官方页面",
      nameEn: "EU CBAM Official Portal",
      type: "外部参考",
      typeEn: "Reference",
      desc: "碳边境调节机制法规与申报信息。",
      descEn: "Official regulations and reporting information for CBAM.",
      link: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en"
    },
    {
      name: "美国国际贸易管理局 ITA",
      nameEn: "US International Trade Administration (ITA)",
      type: "外部参考",
      typeEn: "Reference",
      desc: "美国市场准入、贸易政策和行业指引。",
      descEn: "US market access, trade policy, and sector guidance.",
      link: "https://www.trade.gov/"
    }
  ],
  faq: [
    {
      q: "我第一次做出口，优先学习哪些内容？",
      qEn: "What should I learn first for my first export deal?",
      a: "建议先掌握 Incoterms、付款方式、核心单据和目的国合规要求，再进入报价与履约流程。",
      aEn: "Start with Incoterms, payment methods, core documentation, and destination compliance requirements."
    },
    {
      q: "为什么同样产品，不同国家报价差很多？",
      qEn: "Why can quote levels differ a lot by destination country?",
      a: "差异主要来自关税税率、清关规则、物流方案、币种波动和付款风险成本。",
      aEn: "Differences often come from tariffs, customs rules, logistics, FX movement, and collection risk."
    },
    {
      q: "这是面向哪些地区的内容？",
      qEn: "Which regions does this knowledge base target?",
      a: "首版覆盖全球通用框架，并增加欧盟、北美、中东、拉美等区域专题，可继续按目标市场扩展。",
      aEn: "The first release covers global fundamentals plus focused topics for Europe, North America, Middle East, and LATAM."
    },
    {
      q: "后续我怎么更新网站内容？",
      qEn: "How do I update site content later?",
      a: "直接修改 content.js 里的对象内容即可，不需要改页面结构。",
      aEn: "Edit object values in content.js directly; no need to change page layout."
    },
    {
      q: "收藏功能的数据会同步到云端吗？",
      qEn: "Are favorites synced to cloud?",
      a: "当前版本保存在浏览器本地存储，适合个人使用；后续可接入账号系统实现跨设备同步。",
      aEn: "Current favorites are stored locally in browser storage; account-based sync can be added later."
    }
  ]
};
