import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `당신은 대한민국 50년 전통의 산업·특수가스 토탈 솔루션 선도기업 (주)MS가스의 공식 AI 상담원 'MS 가스봇'입니다.
고객에게 신뢰감 있고 친절하며 전문적인 가스 엔지니어의 톤앤매너로 명확하게 답변해 주세요.

[(주)MS가스 핵심 정보]
- 설립: 1974년 창립 (반세기 50년 업력)
- 대표자: 전청민 대표이사 (대한민국 은탑산업훈장 수훈)
- 본사: 부산광역시 사상구 낙동대로 1378 (삼락동) / 대표전화: 051-303-3111, 팩스: 051-303-3118
- 거점 인프라: 전국 8개 권역 거점(부산 본사/통합물류기지, 울산 석유화학지점, 여수·광양센터, 창원 방산/기계지점, 천안·아산 반도체물류센터, 인천·수도권 광역물류기지, 평택 반도체센터, 대구·경북 영업소) 및 17개 직영 영업소
- 연간 매출액: 935억원 (2024 GAAP 기준 안정적 재무건전성)
- 해외 네트워크: 10개국 글로벌 고순도 원자재 수급 인프라

[주요 제품군 및 스펙]
1. 산업용 가스:
   - 산소(O₂): 순도 99.5%~99.999% (철강 제강, 조선 절단/용접, 화학 플랜트)
   - 질소(N₂): 99.999% 초고순도 (배관 퍼지(Purge), 식품 포장, 열처리 불활성 블랭킷)
   - 아르곤(Ar): 99.999% (스테인리스, 알루미늄 TIG/MIG 아크 용접 쉴드가스)
   - 탄산가스(CO₂): 99.9%~99.99% (선박 용접, 주조 몰드 경화, 탄산음료, 드라이아이스)
2. 연료용 가스:
   - 프로판(C3H8), 부탄(C4H10): 산업용 대형 가열로, 소성로, 알루미늄 다이캐스팅
   - 프라멕스(Flammex): 친환경 고효율 금속 절단용 특수 혼합가스 (역화 위험 최소화, 절단면 조도 우수)
3. 반도체 & 하이테크 특수가스:
   - 초고순도 N2 6N(99.9999%), H2 6N, SiH4(실란), NF3, He 6N 등 ppb 단위 불순물 제어
   - 반도체 박막 증착(CVD/ALD), 플라즈마 식각(Dry Etching), 챔버 크리닝
4. 생명 & 헬스케어 의료용 가스:
   - KGMP(의약품 제조 및 품질관리기준) 적합 승인 의료용 산소, 아산화질소(N2O)
   - 종합병원 수술실, 중환자실, 응급 환자 호흡 치료
5. 연구 & 교정 표준가스:
   - 국가기술표준원 KOLAS 국제공인시험기관 인정
   - 분석 기기 검량선 작성, 굴뚝 TMS 환경 분석기 교정용 2~10성분 정밀 혼합가스
6. 설비 & 엔지니어링:
   - 초저온 진공단열 액화가스 저장탱크(5톤~50톤), 자동 절체 매니폴드(Automatic Manifold), 실린더 캐비닛, 크린룸 SUS 316L 전해연마(EP) 배관 시공, KGS 완성검사 인허가 대행

[주요 서비스 및 친환경 국책사업]
- 플랜트 T/A(정기보수) 질소 퍼지 및 배관 비파괴/안전진단 토탈 솔루션
- 초정밀 가스 크로마토그래피(GC-DID/FID/TCD) 분석 성적서(COA) 및 MSDS 실시간 제공
- 충남 탄소중립 성과 확산 충남도지사 표창 (온실가스 감축 에너지 전환)
- 울산 규제자유특구 『암모니아 TTS(Truck-to-Ship)용 벙커링 인프라 구축 및 표준 개발』 주관 컨소시엄

[응답 가이드라인]
- 고객의 문의 사항(가스 특성, 추천 순도, 공급 용기 형태, 배관 공사 등)에 친절하고 이해하기 쉽게 답변하세요.
- 공급 견적이나 현장 상담을 원할 경우 웹사이트의 [온라인 문의] 버튼을 통해 신청하시면 담당 권역 직영 지점에서 24시간 내 유선 안내를 해드린다고 안내하세요.
- 포맷팅은 보기 편한 불릿 기호나 단락을 활용하세요.`;

// Fallback intelligent responder for offline/keyless mode
function generateFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('질소') || q.includes('n2') || q.includes('nitrogen') || q.includes('퍼지') || q.includes('purge')) {
    return `(주)MS가스의 **질소(N₂)** 솔루션을 안내해 드립니다.

- **순도**: 일반 공업용(99.99%)부터 반도체/분석용 초고순도(99.999%~99.9999% 6N)까지 공급
- **공급 형태**: 초저온 액화질소 탱크로리(Bulk), 초저온 액체용기(LGC 160~240L), 고압 실린더(47L 150/200bar), 실린더 번들
- **주요 용도**: 석유화학/정유 플랜트 정기보수(T/A) 질소 퍼지(Purge), 산화 방지 블랭킷, 레이저 정밀 절단, 열처리
- **문의 안내**: 대용량 탱크로리 납품 및 긴급 질소 퍼지 서비스는 웹사이트의 **[온라인 문의]** 메뉴를 통해 신청하시면 전국 지점에서 신속히 배차해 드립니다.`;
  }

  if (q.includes('산소') || q.includes('o2') || q.includes('oxygen')) {
    return `(주)MS가스의 **산업용 및 의료용 산소(O₂)** 안내입니다.

- **산업용 산소**: 순도 99.5%~99.999%, 제철 제강 연소 취입, 조선소 후판 절단 및 용접, 유리 용해, 폐수 처리 폭기용으로 대량 공급됩니다.
- **의료용 산소**: 식품의약품안전처 KGMP(의약품 제조 및 품질관리기준) 인증을 획득하여 대학병원 및 종합병원 수술실, 응급실에 공급됩니다.
- **공급 규격**: 초저온 액체산소 저장탱크(VIE), 전용 탱크로리, 고압 실린더 및 병원용 매니폴드 시스템.`;
  }

  if (q.includes('반도체') || q.includes('특수가스') || q.includes('초고순도') || q.includes('sih4') || q.includes('nf3')) {
    return `(주)MS가스는 반도체·디스플레이 첨단 공정을 위한 **초고순도 특수가스**를 전문 공급하고 있습니다.

- **취급 품목**: N₂ 6N, H₂ 6N, Ar 6N, SiH₄(실란), NF₃(삼불화질소), He 6N 등
- **품질 관리**: ppb 단위 미량 불순물 검출이 가능한 초고정밀 가스 크로마토그래피(GC-DID) 설비로 전 로트(Lot) 시험성적서(COA) 보증
- **물류 거점**: 천안·아산 첨단물류센터 및 평택 서포트 센터를 통해 삼성전자, SK하이닉스 및 협력 팹에 신속 직배송됩니다.`;
  }

  if (q.includes('견적') || q.includes('가격') || q.includes('단가') || q.includes('주문') || q.includes('배송') || q.includes('납품')) {
    return `가스 공급 견적 및 단가는 **사용 가스 품목, 희망 순도, 월간 예상 사용량(톤/본), 납품 지역(권역), 공급 형태(탱크로리/용기)**에 따라 맞춤 산정됩니다.

- 상단의 **[온라인 문의]** 버튼을 클릭하시면 1분 안에 맞춤 견적 신청서를 접수하실 수 있습니다.
- 접수 시 등록된 공급 희망 지역의 직영 지점 담당 엔지니어가 24시간 내 정확한 견적서와 공급 계획을 유선으로 안내해 드립니다.
- 긴급 문의: 본사 고객센터 ☎ 051-303-3111`;
  }

  if (q.includes('지점') || q.includes('위치') || q.includes('오시는') || q.includes('영업소') || q.includes('전화')) {
    return `(주)MS가스는 **전국 8개 권역 거점 및 17개 직영 영업소**를 운영하여 365일 24시간 당일 긴급 공급망을 갖추고 있습니다.

- **부산 본사/통합물류기지**: 부산 사상구 낙동대로 1378 (☎ 051-303-3111)
- **울산 석유화학 거점**: 울산 남구 여천로 217번길 (☎ 052-258-4111)
- **여수·광양 센터**: 전남 여수시 산단중앙로 88 (☎ 061-685-5111)
- **창원 기계·방산 지점**: 경남 창원시 성산구 정동로 62 (☎ 055-282-3111)
- **천안·아산 하이테크 허브**: 충남 천안시 서북구 2공단3로 45 (☎ 041-554-6111)
- **인천·수도권 광역기지**: 인천 서구 가좌로 95 (☎ 032-578-8111)
- **평택 반도체센터**: 경기 평택시 고덕면 고덕산단로 110 (☎ 031-667-9111)
- **대구·경북 영업소**: 대구 달서구 성서공단로 21길 34 (☎ 053-583-7111)`;
  }

  if (q.includes('설비') || q.includes('탱크') || q.includes('배관') || q.includes('매니폴드') || q.includes('공사')) {
    return `(주)MS가스는 가스 공급뿐 아니라 **가스 저장탱크 설치 및 초청정 배관 엔지니어링**을 원스톱 시공합니다.

- **초저온 저장탱크**: 5톤 ~ 50톤 진공단열 액화가스 탱크 설계, 기초 토목, 설치 및 완성검사 대행
- **자동 절체 매니폴드**: 1차 실린더 소진 시 무중단 자동 절체 및 누출 감지 긴급 차단 시스템
- **클린룸 배관**: SUS 316L 전해연마(EP) 배관 시공 및 비파괴 헬륨 리크 테스트
- 상세 상담은 [온라인 문의]에서 '설비 & 엔지니어링'을 선택해 주시면 기술팀에서 현장 실사 지원을 진행해 드립니다.`;
  }

  return `안녕하세요! 대한민국 50년 전통의 가스 솔루션 선도기업 **(주)MS가스 AI 도우미**입니다.

- **산업용 가스**: 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산가스(CO₂)
- **연료용 가스**: 프로판, 부탄, 고효율 절단가스 프라멕스
- **반도체 특수가스**: 99.9999% 초고순도 가스 및 실란(SiH₄)
- **의료용 가스 / 표준가스**: 식약처 KGMP 및 국가공인 KOLAS 표준가스
- **설비 & 엔지니어링**: 초저온 저장탱크, 자동 절체 매니폴드, 배관 시공

궁금하신 가스 종류, 공급 방식, 혹은 견적 문의 사항을 편하게 질문해 주세요!`;
}

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  const { messages, userMessage } = req.body;
  const prompt = userMessage || (messages && messages.length > 0 ? messages[messages.length - 1].content : '');

  if (!prompt) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      const fallbackReply = generateFallbackResponse(prompt);
      return res.json({ reply: fallbackReply });
    }

    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (messages && messages.length > 1) {
      for (const m of messages.slice(-8)) {
        contents.push({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        });
      }
    } else {
      contents.push({
        role: 'user',
        parts: [{ text: prompt }],
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || generateFallbackResponse(prompt);
    return res.json({ reply });
  } catch (err: any) {
    console.error('Gemini API Error, using fallback:', err?.message || err);
    const reply = generateFallbackResponse(prompt);
    return res.json({ reply });
  }
});

// Start Express server and bind Vite middlewares in development
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
