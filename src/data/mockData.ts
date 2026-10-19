import { GasProduct, NewsItem, RegionalHub } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1UKdxf5dYpS0iQ51Uk1q8k03xstc2seByF-Bh5oMMciHttKkt_t_y0KrXRe02OZ9ZJwSaaQ8Ez7_o0oy293wn0y0yvtiUz88FXxqSfw8rDhqxVAZcHZnasUQHtLy-Q2MdusBlDMc2SOD4aT_QWxOrPS6o2X8wIGyhAmiAt6acH0xjkf-S_b1lnJOhwVGTcRivFYMudgVLU8eUZuJvdqREjM7CNYBDk-FigPTDisEq8kmAgCX7DGIr4vTg";
export const FACILITY_IMAGE_1 = "https://lh3.googleusercontent.com/aida/AEtjO1WJwa2pXsm8B086F_CfljO6JCOHkuNe0iYpRwR7NmaEBDDXkeztzBPHTuIDQzJXk5Tb-nVZ7yhWYMP4tH5QIiWwOsCmOjq5dM53Dt7XwSEjGuIhMmwqrzQs6zQNmT3Al1cir4af9ydA9GPbuqFxx6VAel6uImP4P0ty4StZ-uNNoM02cI-vmdp2YjBBMG20pWiuNgbBtZAi1RwYRG6ATg9Ip8iG3EC-XF2CY7SiaTYusAbCEp0xr7E5YL8";
export const FACILITY_IMAGE_2 = "https://lh3.googleusercontent.com/aida/AEtjO1VAMVz8GTWuvFu3mwC380O0HlA-w2cd7Zs18TmXRTC0VbS2b_qH2AZlbtl-X-3vDQbQRV5G2tcp1xPhisVmqQlyim-HTU3braKYLhyG5jUD67O-FKFC600Pv3mR7oGuXgpFatF-wRS0hnh1oQxyjK3zFlieVAbkijrCVlVYNUf6CUlP6s2caz9xyzb_m-bGS0GewUS2gvT9gKSajm6ZRXXg-Tm1liHlRDwS5DV2eqJFNSmst_N5g-SsDHs";
export const NEWS_IMAGE_1 = "https://lh3.googleusercontent.com/aida/AEtjO1WovLXGbtno6e3gpbjjs0zP6qi1Wd7wCBnpRuiq-sZ-4aEbqCB8mzUX-F-m_0ZRHhQBQbCCPKsrYLnzE60FMXt133gC8qx46ZI5fvkTt5tDArNFcf3Y8BREzt-oXUsRqruY2ZgX_kZvxDY3MZ4Z9R35xGxKbH-jbYmFQ3jf0v7ntzmHDzO1t84_ljsW8KcKh-tBpuXKz0QIqCYUXf1p13Wylmh-pPEqXpR5byFxQxqBy_p0bae_oOZguzo";
export const NEWS_IMAGE_2 = "https://lh3.googleusercontent.com/aida/AEtjO1V1w5xdsc9CUl61SlTdFCpppjgmFyRWvoOcBDswtmSNwZW3k34eZRzxOzwFKKolKsgx2CEiXMDblffLG1fAmqNgLzA51I-0KKC_18-ooZcr_6RCWoQl_aFF2oB3LDz88c8YI6oNs5DM6SgdSa6Bt_CSa1Ri6Cjwb7POri_gMsm_2DHRpoGS866jL_4JhB3Y5308yVdpB2wymSn2HYQ4uu2hjVQl7Ny7sDOXoxpHFif_CNmfuL3tqJHp2M4";

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'prod-ind-1',
    nameKo: '산소',
    nameEn: 'Oxygen',
    formula: 'O₂',
    category: 'industrial',
    categoryLabelKo: '산업 인프라',
    categoryLabelEn: 'Industrial Infra',
    purity: '99.5% ~ 99.999%',
    descriptionKo: '철강, 조선, 석유화학 및 유리 용해 등 제조 공정 연소 효율 개선과 산화 반응에 무중단 대량 공급되는 필수 산업 기초 가스입니다.',
    descriptionEn: 'Essential industrial gas continuously supplied to steel, shipbuilding, petrochemical, and glass melting facilities for enhanced combustion efficiency.',
    supplyForms: ['초저온 액화가스 탱크로리 (Bulk)', '고압 실린더 (47L, 40L)', '실린더 번들 (12병/16병/20병)', '온사이트 플랜트 배관 공급'],
    applications: ['제철 제강 및 산소 취입', '조선소 후판 절단 및 용접', '유리 용융 및 환경 수처리 폭기', '화학 원료 합성'],
    msdsCode: 'MSDS-O2-001'
  },
  {
    id: 'prod-ind-2',
    nameKo: '질소',
    nameEn: 'Nitrogen',
    formula: 'N₂',
    category: 'industrial',
    categoryLabelKo: '산업 인프라',
    categoryLabelEn: 'Industrial Infra',
    purity: '99.999% (초고순도)',
    descriptionKo: '화학공장 배관 퍼지(Purge), 산화 방지 불활성 블랭킷, 식품 포장 및 열처리 공정에서 완벽한 안전성을 보장하는 고순도 불활성 가스입니다.',
    descriptionEn: 'High-purity inert gas ensuring optimal safety in pipeline purging, oxidation prevention blanketing, and food packaging.',
    supplyForms: ['초저온 액화질소 탱크로리 (Cryogenic)', '고압 실린더 (150bar / 200bar)', '실린더 번들', '초저온 액체용기 (LGC)'],
    applications: ['플랜트 배관 세정 및 질소 퍼지(Purge)', '석유화학 저장탱크 질소 블랭킷', '금속 광휘 열처리 및 레이저 절단', '식품 및 제약 포장 치환'],
    msdsCode: 'MSDS-N2-002'
  },
  {
    id: 'prod-ind-3',
    nameKo: '아르곤',
    nameEn: 'Argon',
    formula: 'Ar',
    category: 'industrial',
    categoryLabelKo: '산업 인프라',
    categoryLabelEn: 'Industrial Infra',
    purity: '99.999%',
    descriptionKo: '스테인리스강, 알루미늄, 티타늄 등 비철금속의 TIG/MIG 용접 시 산화를 방지하고 고품질 용접 비드를 구현하는 최고 순도 쉴드가스입니다.',
    descriptionEn: 'Premium shielding gas for TIG/MIG welding of stainless steel, aluminum, and titanium alloys without oxidation.',
    supplyForms: ['초저온 액화아르곤 탱크로리', '초저온 액체용기 (LGC 160L~240L)', '고압 가스 실린더 (47L)', '용접용 번들'],
    applications: ['정밀 TIG/MIG 아크 용접 쉴드가스', '특수강 진공 탈가스 정련', '반도체 단결정 실리콘 잉곳 성장', '분석 장비 플라즈마 ICP'],
    msdsCode: 'MSDS-AR-003'
  },
  {
    id: 'prod-ind-4',
    nameKo: '탄산가스',
    nameEn: 'Carbon Dioxide',
    formula: 'CO₂',
    category: 'industrial',
    categoryLabelKo: '산업 인프라',
    categoryLabelEn: 'Industrial Infra',
    purity: '99.9% ~ 99.99%',
    descriptionKo: '선박 용접 쉴드가스, 주조 공정 사형 경화, 탄산음료 및 드라이아이스 제조, 냉매 및 농업 하우스 광합성 촉진용 다목적 가스입니다.',
    descriptionEn: 'Multi-purpose carbon dioxide for shipyard welding, foundry casting, beverage carbonation, dry ice, and industrial processing.',
    supplyForms: ['액화탄산 전용 탱크로리 (Bulk)', '고압 사이폰 실린더', '일반 탄산 실린더', '드라이아이스 펠릿/블록'],
    applications: ['조선·철구조물 CO₂ 용접 쉴드가스', '식음료 탄산 주입 및 신선 급랭', '주조 몰드 경화제', '초임계 유체 추출 세정'],
    msdsCode: 'MSDS-CO2-004'
  },
  {
    id: 'prod-fuel-1',
    nameKo: '프로판 & 부탄',
    nameEn: 'Propane & Butane',
    formula: 'C₃H₈ / C₄H₁₀',
    category: 'fuel',
    categoryLabelKo: '에너지 솔루션',
    categoryLabelEn: 'Energy Solution',
    purity: '공업용 규격 98%+',
    descriptionKo: '산업용 대형 가열로, 소성로, 알루미늄 다이캐스팅 및 건조 공정에 안정적인 열량을 공급하는 친환경 고효율 청정 탄화수소 연료입니다.',
    descriptionEn: 'High-calorie clean burning hydrocarbon fuels providing reliable thermal energy to industrial furnaces, kilns, and die-casting lines.',
    supplyForms: ['벌크로리 공급 (2.9톤~10톤)', '소형 저장탱크 (0.5톤~2.9톤)', '50kg 공업용 실린더 (기화기 직결)'],
    applications: ['산업용 가열로 및 금속 열처리 로', '식품 가공 건조 및 아스콘 플랜트', '비상 발전용 열원', '도장 부스 온풍 공급'],
    msdsCode: 'MSDS-LPG-005'
  },
  {
    id: 'prod-fuel-2',
    nameKo: '프라멕스',
    nameEn: 'Flammex',
    category: 'fuel',
    categoryLabelKo: '에너지 솔루션',
    categoryLabelEn: 'Energy Solution',
    purity: '고효율 복합 배합가스',
    descriptionKo: '기존 아세틸렌과 프로판의 단점을 보완한 친환경 고효율 금속 절단용 특수 혼합 가스로, 역화 위험이 적고 절단면 조도가 탁월합니다.',
    descriptionEn: 'High-performance proprietary gas formulation for metal cutting and beveling, offering superior safety and clean edge finishes.',
    supplyForms: ['전용 가스 실린더 (50L)', '이동형 랙 번들'],
    applications: ['조선소 및 중공업 두꺼운 강판 절단', '후판 베벨(Bevel) 가공', '가열 교정 및 화염 세척', '스크랩 절단 해체'],
    msdsCode: 'MSDS-FLX-006'
  },
  {
    id: 'prod-spec-1',
    nameKo: '초고순도 특수가스',
    nameEn: 'Ultra-High Purity Specialty Gases',
    formula: 'N₂ 6N / H₂ 6N / SiH₄ / NF₃ / He 6N',
    category: 'specialty',
    categoryLabelKo: '반도체 & 하이테크',
    categoryLabelEn: 'Semiconductor & Hi-Tech',
    purity: '99.9999% (ppb 불순물 보증)',
    descriptionKo: '반도체(Semiconductor), 첨단 디스플레이(OLED) 및 이차전지 제조 팹의 CVD 증착, 식각(Etching), 이온 주입 공정에 쓰이는 초고순도 가스입니다.',
    descriptionEn: 'Electronic material grade gases tailored for advanced semiconductor and display fabrication with ppb-level impurity control.',
    supplyForms: ['Y-실린더 (470L 특수용기)', 'SUS 내면연마 전용 실린더', '초순도 특수 튜브 트레일러', '전용 캐비닛 패키지'],
    applications: ['반도체 박막 증착 (CVD / ALD)', '플라즈마 건식 식각 (Dry Etch)', '챔버 크리닝 및 불순물 제거', '차세대 배터리 실리콘 음극재 합성'],
    msdsCode: 'MSDS-SPEC-007',
    highlight: true
  },
  {
    id: 'prod-med-1',
    nameKo: '의료용 가스',
    nameEn: 'Medical Grade Gases',
    formula: 'Medical O₂ / N₂O / CO₂',
    category: 'medical',
    categoryLabelKo: '생명 & 헬스케어',
    categoryLabelEn: 'Life & Healthcare',
    purity: '의약품 제조 및 품질관리기준 (KGMP 인증)',
    descriptionKo: '의약품 규격의 엄격한 관리를 받는 의료용 산소, 마취용 아산화질소 등 종합병원 수술실, 중환자실, 응급 구호 현장에 무결점 공급됩니다.',
    descriptionEn: 'Certified medical grade gases meeting strict KGMP pharmaceutical standards for operating rooms, intensive care, and respiratory therapy.',
    supplyForms: ['병원 전용 초저온 액체산소 저장탱크 (VIE)', '의료용 핀인덱스 알루미늄 용기 (4.7L~40L)', '중앙 공급 배관 시스템 매니폴드'],
    applications: ['응급실 및 수술실 환자 산소 호흡 치료', '전신 마취용 보조 가스 (N₂O)', '복강경 수술 기복용 CO₂', '고압 산소 챔버 요법'],
    msdsCode: 'MSDS-MED-008'
  },
  {
    id: 'prod-std-1',
    nameKo: '표준가스 & 교정가스',
    nameEn: 'Standard & Calibration Gas Mixtures',
    category: 'standard',
    categoryLabelKo: '연구 & 교정',
    categoryLabelEn: 'R&D & Calibration',
    purity: 'ppm / ppb 정밀 배합 (KOLAS 공인)',
    descriptionKo: '국가공인 교정기관 표준물질에 기초하여 정밀 계측기, 굴뚝 TMS 환경 분석기, R&D 실험실 연구용으로 조제되는 2~10성분 정밀 혼합가스입니다.',
    descriptionEn: 'Multi-component standard gas mixtures certified under KOLAS for instrument calibration, TMS monitoring, and precision R&D.',
    supplyForms: ['특수 알루미늄/스틸 실린더 (10L~47L)', '소형 일회용 에어로졸 캐니스터 (실험실용)', '정밀 압력조정기 일체형 키트'],
    applications: ['굴뚝 연속자동측정기 (TMS) 교정', '가스 크로마토그래피 (GC-FID/TCD) 검량선 작성', '석유화학 반응기 분석 센서 교정', '차량 배기가스 규제 검사'],
    msdsCode: 'MSDS-STD-009'
  },
  {
    id: 'prod-eq-1',
    nameKo: '가스 저장탱크 & 배관 엔지니어링',
    nameEn: 'Cryogenic Tanks & Pipeline Engineering',
    category: 'equipment',
    categoryLabelKo: '설비 & 엔지니어링',
    categoryLabelEn: 'Equipment & Engineering',
    purity: 'KGS 고압가스 안전관리법 및 ASME 규격',
    descriptionKo: '초저온 액화가스 저장탱크(5톤~50톤), 자동 절체 매니폴드, 실린더 캐비닛, 감압 밸브 스테이션 및 고순도 SUS 배관 시공 원스톱 엔지니어링을 제공합니다.',
    descriptionEn: 'Comprehensive EPC engineering for cryogenic storage tanks, automatic changeover manifolds, cylinder cabinets, and ultra-clean SUS piping.',
    supplyForms: ['초저온 진공단열 저장탱크 (5~50Ton)', '자동 절체 가스 매니폴드 (Manifold)', '가스 누출 감지 및 자동차단 시스템', '클린룸 SUS 316L 전해연마(EP) 배관 시공'],
    applications: ['신축 공장 고압가스 인입 공사', '연구소 전용 특수가스 공급 캐비닛', '기존 배관 안전진단 및 비파괴 검사', '가스안전공사 완성검사 인허가 대행'],
    msdsCode: 'MSDS-ENG-010'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: '기업 수상',
    categoryEn: 'Corporate Award',
    date: '2024.12.30',
    titleKo: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈',
    titleEn: 'MS Gas CEO Received Silver Tower Order of Industrial Service Merit',
    summaryKo: '대한민국 가스 산업 선진화 및 지속 가능한 에너지 물류 인프라 구축에 기여한 공로로 대한민국 정부 포상 은탑산업훈장을 수훈하였습니다.',
    summaryEn: 'Honored with the prestigious governmental medal for advancing Korea’s industrial gas sector and leading sustainable logistics.',
    imageUrl: NEWS_IMAGE_1,
    contentKo: `대한민국 산업통상자원부와 정부 포상 심의위원회는 2024년 12월 30일, (주)MS가스 전청민 대표이사에게 국가 기간산업 발전과 가스 안전 선진화, 그리고 수소·암모니아 친환경 미래에너지 인프라 구축에 기여한 혁혁한 공로를 인정하여 은탑산업훈장(Silver Tower Order of Industrial Service Merit)을 수여하였습니다.

1974년 창립 이래 50년간 반도체, 조선, 철강 등 국가 제조 경쟁력의 핵심인 고순도 산업가스를 무중단 공급하고, 전국 직영 지점망과 첨단 실시간 원격 모니터링 시스템을 구축해 무사고 안전 경영을 실천해 왔습니다.

전청민 대표이사는 "이번 은탑산업훈장은 지난 반세기 동안 현장에서 묵묵히 땀 흘려온 전 임직원의 결실이자, MS가스를 믿고 함께해 주신 고객사와 협력업체 여러분의 성원 덕분"이라며, "앞으로도 고부가가치 특수가스 국산화와 탄소중립 친환경 에너지 전환에 선도적인 역할을 다할 것"이라고 소감을 밝혔습니다.`,
    contentEn: `On December 30, 2024, the Korean Government awarded the prestigious Silver Tower Order of Industrial Service Merit to MS Gas CEO, in recognition of outstanding contributions to the advancement of national industrial gas infrastructure, 50 years of zero-accident safety leadership, and pioneering next-generation clean energy logistics including ammonia and hydrogen.`
  },
  {
    id: 'news-2',
    category: 'ESG 경영',
    categoryEn: 'ESG Management',
    date: '2024.12.30',
    titleKo: '충남 중소기업 탄소중립 성과 확산의 날 충남도지사 유공자 표창 수여',
    titleEn: 'Received Commendation for Carbon Neutrality from Chungnam Governor',
    summaryKo: '탄소 저감 에너지 전환 사업 및 친환경 가스 물류 솔루션 혁신으로 온실가스 감축 성과를 인정받아 충남도지사 표창을 수상했습니다.',
    summaryEn: 'Commended by Chungnam Province for tangible greenhouse gas reduction through eco-friendly energy transition and clean fleet innovations.',
    imageUrl: NEWS_IMAGE_2,
    contentKo: `충청남도가 주최한 '2024 충남 중소기업 탄소중립 성과 확산의 날' 기념식에서 (주)MS가스가 탄소 저감형 산업 에너지 전환 모델 구축 및 친환경 운송 물류 최적화의 우수 공로를 인정받아 충남도지사 유공자 표창을 수상하였습니다.

(주)MS가스는 대기오염물질 배출이 많은 기존 중유·경유 연소 사업장을 대상으로 고효율 청정 탄화수소 및 가스 연료 공급 체계로 전환을 지원함으로써 연간 수천 톤에 달하는 온실가스(GHG) 감축 효과를 이끌어냈습니다.

또한 전국 운송 물류 시스템에 차량 관제 AI 솔루션을 도입하여 운송 경로 최적화 및 공차 운행을 32% 감축하는 등 물류 분야 탄소발자국 저감에도 솔선수범하고 있습니다.`,
    contentEn: `MS Gas was awarded the Governor’s Commendation at the 2024 Chungnam Carbon Neutrality Promotion Day, recognizing leadership in converting heavy fuel systems to cleaner gas alternatives and deploying AI route optimization to minimize fleet emissions.`
  },
  {
    id: 'news-3',
    category: '국책 R&D 실증',
    categoryEn: 'National R&D Project',
    date: '2024.12.18',
    titleKo: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』',
    titleEn: 'Ulsan Free Zone: Ammonia Truck-to-Ship Bunkering Infrastructure Verification R&D',
    summaryKo: '탱크로리를 이용한 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 및 구축시스템 3자 안전진단 평가 용역 진행 공고',
    summaryEn: 'Commenced HAZOP risk assessment and 3rd-party safety certification for Truck-to-Ship (TTS) ammonia marine bunkering systems.',
    isSpecialProject: true,
    contentKo: `중소벤처기업부 지정 울산 수소·친환경 규제자유특구의 핵심 전략 과제인 『암모니아 TTS(Truck-to-Ship)용 벙커링 인프라 구축 및 기자재·표준 개발』 실증 사업에서 (주)MS가스가 주관 컨소시엄으로서 해상 친환경 선박용 암모니아 연료 공급 실증을 본격 추진합니다.

본 사업은 무탄소 선박 연료로 급부상 중인 액화 암모니아를 육상 전용 탱크로리에서 선박으로 직접 이송·충전(TTS)하는 기술적 타당성과 안전성 기준을 세계 최초 수준으로 정립하는 국책 프로젝트입니다.

현재 암모니아 고압 이송 설비의 위험요소를 정밀 분석하기 위해 글로벌 공인 기관과 함께 정성적 위험평가(HAZOP, Hazard and Operability Study) 및 정량적 위험성평가(QRA)를 착수하였으며, 실시간 누출 감지 및 비상 차단 차폐 시스템을 적용하여 무재해 안전 기준을 수립할 예정입니다.`,
    contentEn: `MS Gas leads the consortium for the national demonstration project developing Truck-to-Ship (TTS) ammonia bunkering infrastructure in the Ulsan Regulation-Free Special Zone. The initiative includes comprehensive HAZOP assessments and sets global safety standards for clean maritime fuels.`
  }
];

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'hub-1',
    nameKo: '부산 본사 & 통합 물류 허브',
    nameEn: 'Busan Headquarters & Logistics Hub',
    type: '본사 / 주력 공급기지',
    addressKo: '부산광역시 사상구 낙동대로 1378 (삼락동)',
    addressEn: '1378 Nakdong-daero, Sasang-gu, Busan, Republic of Korea',
    phone: '051-303-3111',
    fax: '051-303-3118',
    tankCapacity: '초저온 저장탱크 550톤 (O2/N2/Ar/CO2)',
    fleetCount: '전용 탱크로리 28대, 실린더 수송차 18대',
    descriptionKo: '부울경 권역 및 남부권 핵심 산업단지에 24시간 실시간 무중단 가스 공급을 관제하는 컨트롤타워입니다.',
    descriptionEn: 'The core control tower supplying 24/7 industrial and medical gas to southeastern industrial clusters.',
    coordinates: { x: 74, y: 76 }
  },
  {
    id: 'hub-2',
    nameKo: '울산 석유화학 거점 지점',
    nameEn: 'Ulsan Petrochemical Branch',
    type: '석유화학 단지 전용 거점',
    addressKo: '울산광역시 남구 여천로 217번길 (용연공단 인근)',
    addressEn: 'Yeocheon-ro, Nam-gu, Ulsan',
    phone: '052-258-4111',
    fax: '052-258-4118',
    tankCapacity: '초저온 저장설비 320톤',
    fleetCount: '대용량 벌크 트레일러 15대',
    descriptionKo: '울산 미포 및 온산 국가산업단지 석유화학 설비에 플랜트 퍼지용 초고순도 질소 및 대용량 연료가스를 직공급합니다.',
    descriptionEn: 'Specialized supply node for Ulsan petrochemical complex, delivering plant purge nitrogen and bulk fuels.',
    coordinates: { x: 80, y: 70 }
  },
  {
    id: 'hub-3',
    nameKo: '여수·광양 국가산단 센터',
    nameEn: 'Yeosu & Gwangyang Complex Center',
    type: '호남권 정유/철강 거점',
    addressKo: '전라남도 여수시 산단중앙로 88 (여수국가산단)',
    addressEn: 'Sandanjungang-ro, Yeosu-si, Jeollanam-do',
    phone: '061-685-5111',
    fax: '061-685-5118',
    tankCapacity: '초저온 저장설비 280톤',
    fleetCount: '벌크로리 12대, LGC 전용차 8대',
    descriptionKo: '여수 산단 화학 플랜트 정기보수(T/A) 질소 퍼지 솔루션 및 광양 제철소 협력업체 공급망을 전담합니다.',
    descriptionEn: 'Dedicated branch providing nitrogen purging for turnaround (T/A) plant maintenance and steel partners.',
    coordinates: { x: 50, y: 82 }
  },
  {
    id: 'hub-4',
    nameKo: '창원 기계·방산 클러스터 지점',
    nameEn: 'Changwon Defense & Machinery Branch',
    type: '방산/정밀기계 거점',
    addressKo: '경상남도 창원시 성산구 정동로 62 (창원국가산단)',
    addressEn: 'Jeongdong-ro, Seongsan-gu, Changwon-si, Gyeongnam',
    phone: '055-282-3111',
    fax: '055-282-3118',
    tankCapacity: '초저온 저장설비 210톤',
    fleetCount: '특수가스 전용 차량 14대',
    descriptionKo: '국내 방위산업 및 중공업 레이저 정밀 가공용 고순도 쉴드가스(Ar, CO2, 레이저 믹스)를 적기 공급합니다.',
    descriptionEn: 'Supplying ultra-pure laser cutting and shield gases to precision defense and machinery manufacturers.',
    coordinates: { x: 68, y: 77 }
  },
  {
    id: 'hub-5',
    nameKo: '천안·아산 반도체/디스플레이 물류센터',
    nameEn: 'Cheonan & Asan High-Tech Logistics Hub',
    type: '첨단 전자소재 전용 허브',
    addressKo: '충청남도 천안시 서북구 2공단3로 45',
    addressEn: '2gongdan 3-ro, Seobuk-gu, Cheonan-si, Chungnam',
    phone: '041-554-6111',
    fax: '041-554-6118',
    tankCapacity: '초순도 특수 실린더 랙 1,200본 보관능력',
    fleetCount: '온도제어 특수가스 전용 운반차 16대',
    descriptionKo: '천안·아산 및 탕정 디스플레이 라인에 ppb 단위 불순물 제어 초고순도 특수가스를 전담 배송합니다.',
    descriptionEn: 'Ultra-pure specialty gas distribution hub serving semiconductor and display fabs in central Korea.',
    coordinates: { x: 44, y: 44 }
  },
  {
    id: 'hub-6',
    nameKo: '인천·수도권 광역 물류기지',
    nameEn: 'Incheon & Seoul Metropolitan Hub',
    type: '수도권 통합 공급기지',
    addressKo: '인천광역시 서구 가좌로 95 (가좌산업단지)',
    addressEn: 'Gajwa-ro, Seo-gu, Incheon',
    phone: '032-578-8111',
    fax: '032-578-8118',
    tankCapacity: '초저온 저장설비 360톤',
    fleetCount: '탱크로리 20대, 일반 실린더 배송차 22대',
    descriptionKo: '인천, 남동공단, 시화·반월 산단 및 수도권 주요 종합병원 의료용 산소를 신속 공급합니다.',
    descriptionEn: 'Metropolitan hub distributing industrial gases and medical oxygen to hospitals and factories across Gyeonggi and Incheon.',
    coordinates: { x: 34, y: 30 }
  },
  {
    id: 'hub-7',
    nameKo: '평택 반도체 서포트 센터',
    nameEn: 'Pyeongtaek Semiconductor Support Center',
    type: '반도체 배후 거점',
    addressKo: '경기도 평택시 고덕면 고덕산단로 110',
    addressEn: 'Godeok Sandan-ro, Godeok-myeon, Pyeongtaek-si, Gyeonggi',
    phone: '031-667-9111',
    fax: '031-667-9118',
    tankCapacity: '초저온 백업 탱크 250톤',
    fleetCount: '비상 출동 탱크로리 10대',
    descriptionKo: '평택 고덕 클러스터 인근에 위치하여 긴급 충전 및 비상 가스 배관 진단 서비스를 1시간 내 대응합니다.',
    descriptionEn: 'Rapid emergency response center guaranteeing under-1-hour dispatch to the Pyeongtaek chip cluster.',
    coordinates: { x: 40, y: 38 }
  },
  {
    id: 'hub-8',
    nameKo: '대구·경북 성서산단 영업소',
    nameEn: 'Daegu & Gyeongbuk Regional Office',
    type: '내륙 자동차부품 거점',
    addressKo: '대구광역시 달서구 성서공단로 21길 34',
    addressEn: 'Seongseogongdan-ro, Dalseo-gu, Daegu',
    phone: '053-583-7111',
    fax: '053-583-7118',
    tankCapacity: '저장설비 180톤',
    fleetCount: '수송 차량 12대',
    descriptionKo: '대구 성서산단 및 경북 구미 전자단지를 잇는 내륙 교통 요충지 직영 공급망입니다.',
    descriptionEn: 'Inland transport node linking Daegu automotive parts makers and Gumi electronic complexes.',
    coordinates: { x: 62, y: 58 }
  }
];

export const CORE_PILLARS = [
  {
    id: '01',
    labelKo: '01. TRUST & HISTORY',
    labelEn: '01. TRUST & HISTORY',
    titleKo: '고객과 함께하는 신뢰받는 기업',
    titleEn: 'A Trusted Partner Built on 50 Years of History',
    descKo: '1974년 창립 이래 반세기 동안 축적된 전문성과 정밀 기술력을 바탕으로 국가 핵심 기간산업의 파트너로 성장해 왔습니다.',
    descEn: 'Since our establishment in 1974, we have grown into a cornerstone partner for national heavy industries through relentless precision.',
    badgeKo: '창립 50주년 기념비',
    badgeEn: '50th Anniversary Milestone',
    detailsKo: [
      '1974년 삼락동 본사 창립 및 고압가스 충전 사업 개시',
      '국가 기간산업(철강, 조선, 석유화학) 독점·우선 공급 협약 체결',
      '전국 8개 거점 및 17개 영업소 직영 유통 네트워크 완성',
      'ISO 9001/14001 품질 및 환경경영체제 조기 획득'
    ]
  },
  {
    id: '02',
    labelKo: '02. LOGISTICS & SAFETY',
    labelEn: '02. LOGISTICS & SAFETY',
    titleKo: '전국적인 가스 운송능력',
    titleEn: 'Nationwide Logistics & Real-Time Safety Tracking',
    descKo: '전국을 아우르는 고도화된 운송 인프라와 실시간 모니터링 시스템을 통해 24시간 언제 어디서나 안정적이고 효율적인 가스를 공급합니다.',
    descEn: 'With state-of-the-art telemetry and dedicated cryogenic fleets, we deliver safe and reliable energy anywhere across the nation 24/7.',
    badgeKo: '전용 특수 탱크로리 운송 체계',
    badgeEn: 'Specialized Cryogenic Tank Lorry Fleet',
    detailsKo: [
      'GPS 및 압력/온도 실시간 텔레메트리 IoT 모니터링 적용',
      '자체 보유 초저온 탱크로리 75대 및 직영 수송차량 100+대 운영',
      '당일 긴급 발주 3시간 내 공급 보장 비상대응 프로토콜',
      '운전기사 전문 고압가스 운송 안전자격 및 KGS 법규 준수'
    ]
  },
  {
    id: '03',
    labelKo: '03. VALUE-ADDED INNOVATION',
    labelEn: '03. VALUE-ADDED INNOVATION',
    titleKo: '고부가가치형 가스 선도',
    titleEn: 'Pioneering High-Value Specialty Solutions',
    descKo: '반도체·전자용 초고순도 가스와 정밀 다성분 혼합가스 연구 역량을 갖추어 고부가가치 에너지 솔루션 혁신을 선도합니다.',
    descEn: 'Leading technological frontiers with ppb-grade semiconductor specialty gases, precision calibration mixtures, and green ammonia bunkering.',
    badgeKo: '초고순도 정밀 배관 제어',
    badgeEn: 'Ultra-Pure Precision Piping Control',
    detailsKo: [
      '99.9999% 초고순도 정제 및 정밀 가스 크로마토그래피(GC) 분석실 완비',
      'KOLAS 국제공인시험기관 인정 정밀 교정가스 제조 역량',
      '울산 규제자유특구 친환경 선박 암모니아 TTS 벙커링 국책 과제 주관',
      '클린룸 EP 배관 및 자동 절체 매니폴드 자체 설계/시공'
    ]
  }
];
