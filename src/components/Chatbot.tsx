import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, RotateCcw, Sparkles, ArrowRight, ExternalLink, ShieldCheck, Flame, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  actionType?: 'inquiry' | 'network' | 'catalog';
}

interface ChatbotProps {
  lang: Language;
  onOpenInquiry: (productName?: string) => void;
  onOpenNetwork: () => void;
  onOpenCatalog: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  lang,
  onOpenInquiry,
  onOpenNetwork,
  onOpenCatalog
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting: Message = {
    id: 'welcome',
    role: 'assistant',
    content: lang === 'ko'
      ? `안녕하세요! 반세기 50년 가스 기술을 선도하는 **(주)MS가스 AI 기술 지원 어시스턴트**입니다.

산업용·의료용·초고순도 특수가스 규격, 탱크로리 공급, 질소 퍼지(Purge) 서비스, 맞춤 견적에 대해 무엇이든 편하게 질문해 주세요.`
      : `Hello! I am the **MS Gas AI Technical Consultant**. Ask me about high-purity industrial gases, cryogenic bulk delivery, nitrogen purging, or custom quotes.`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);

  const quickQuestions = [
    { labelKo: '초고순도 반도체 특수가스 규격', labelEn: 'Semiconductor Gas Specs', query: '반도체 공정용 초고순도 특수가스 순도 및 불순물 관리 규격을 알려주세요.' },
    { labelKo: '탱크로리 벌크 공급 견적 신청', labelEn: 'Tank Lorry Bulk Quote', query: '초저온 액화가스 탱크로리 대량 공급 절차와 견적 신청 방법을 알려주세요.' },
    { labelKo: '플랜트 질소 퍼지(Purge) 서비스', labelEn: 'Nitrogen Purge Service', query: '화학 플랜트 정기보수(T/A) 질소 퍼지 및 배관 안전진단 서비스는 어떻게 진행되나요?' },
    { labelKo: '전국 8개 권역 거점 및 직영 지점', labelEn: 'Nationwide Hub Network', query: 'MS가스의 전국 공급 거점과 인근 영업소 위치를 알려주세요.' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (userText: string) => {
    const text = userText.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMessage: text,
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const replyText = data.reply || (lang === 'ko' ? '답변을 생성하지 못했습니다.' : 'Could not generate a response.');

      // Check if message mentions quote or network or catalog to show action buttons
      let actionType: 'inquiry' | 'network' | 'catalog' | undefined;
      const lower = text.toLowerCase();
      if (lower.includes('견적') || lower.includes('신청') || lower.includes('주문') || lower.includes('가격')) {
        actionType = 'inquiry';
      } else if (lower.includes('지점') || lower.includes('위치') || lower.includes('거점') || lower.includes('오시는')) {
        actionType = 'network';
      } else if (lower.includes('제품') || lower.includes('카탈로그') || lower.includes('품목') || lower.includes('스펙')) {
        actionType = 'catalog';
      }

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback response
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: lang === 'ko'
          ? `(주)MS가스 고객센터 ☎ **051-303-3111** 또는 상단의 **[온라인 문의]** 메뉴를 통해 24시간 실시간 가스 공급 견적과 전문 엔지니어 상담을 받으실 수 있습니다.`
          : `Please contact our service hotline at +82-51-303-3111 or use the Online Inquiry button for instant quotation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType: 'inquiry'
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([initialGreeting]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {!isOpen && hasUnread && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer bg-[#0B1B3D] text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#41befd]/40 flex items-center gap-2 animate-bounce transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-[#41befd]" />
            <span className="font-semibold">{lang === 'ko' ? 'MS 가스봇 AI 기술 상담' : 'MS Gas AI Assistant'}</span>
            <span className="w-2 h-2 rounded-full bg-[#41befd]" />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none cursor-pointer ${
            isOpen
              ? 'bg-[#0B1B3D] text-white rotate-90'
              : 'bg-gradient-to-tr from-[#003a53] via-[#0079C2] to-[#41befd] text-white shadow-[#0079C2]/40'
          }`}
          aria-label={isOpen ? 'Close chat' : 'Open MS Gas Chatbot'}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Bot className="w-7 h-7" />
              <Flame className="w-3.5 h-3.5 text-cyan-200 fill-cyan-200 absolute -top-1 -right-1" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[620px] h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B1B3D] to-[#003a53] text-white p-4 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[#41befd]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">
                    {lang === 'ko' ? 'MS 가스봇' : 'MS Gas AI Assistant'}
                  </h3>
                  <span className="text-[10px] bg-[#0079C2] text-white px-1.5 py-0.2 rounded font-semibold">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {lang === 'ko' ? '가스 규격 & 공급 견적 전문 상담' : '24/7 Technical Gas Advisor'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title={lang === 'ko' ? '대화 내용 초기화' : 'Reset chat'}
                className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick suggestions header strip */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 overflow-x-auto whitespace-nowrap flex items-center gap-1.5 scrollbar-thin shrink-0">
            <span className="text-[11px] font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#0079C2]" />
              {lang === 'ko' ? '추천 질문:' : 'Quick:'}
            </span>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q.query)}
                className="text-[11px] font-medium bg-white hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 transition-colors shrink-0 shadow-2xs"
              >
                {lang === 'ko' ? q.labelKo : q.labelEn}
              </button>
            ))}
          </div>

          {/* Messages scroll area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-[#003a53] text-white rounded-br-xs shadow-sm'
                      : 'bg-white text-slate-800 rounded-bl-xs border border-slate-200 shadow-sm'
                  }`}
                >
                  {/* Assistant Header Icon */}
                  {m.role === 'assistant' && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0079C2] mb-1.5 border-b border-slate-100 pb-1">
                      <Flame className="w-3.5 h-3.5 fill-[#0079C2]" />
                      <span>(주)MS가스 기술지원봇</span>
                    </div>
                  )}

                  {m.content}

                  {/* Context Action Buttons */}
                  {m.actionType && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col gap-1.5">
                      {m.actionType === 'inquiry' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenInquiry();
                          }}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0079C2] hover:bg-[#00658d] text-white py-1.5 px-3 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                        >
                          <span>{lang === 'ko' ? '온라인 맞춤 견적 신청서 열기' : 'Open Inquiry Form'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {m.actionType === 'network' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenNetwork();
                          }}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#003a53] hover:bg-[#0B1B3D] text-white py-1.5 px-3 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                        >
                          <span>{lang === 'ko' ? '전국 8개 권역 거점 지도 확인' : 'Explore Nationwide Hubs'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {m.actionType === 'catalog' && (
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onOpenCatalog();
                          }}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-1.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                        >
                          <span>{lang === 'ko' ? '전체 가스 품목 카탈로그 보기' : 'Browse Gas Catalog'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-3 text-xs text-slate-500 shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#0079C2]" />
                  <span>{lang === 'ko' ? 'MS가스 기술 데이터베이스 분석 중...' : 'Analyzing MS Gas database...'}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'ko' ? '가스 규격, 탱크로리 공급, 견적을 물어보세요...' : 'Ask about gas specs, delivery, or quotes...'}
                className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0079C2] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-[#0079C2] hover:bg-[#00658d] disabled:opacity-50 text-white p-2.5 rounded-xl transition-colors shadow-sm shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                {lang === 'ko' ? '50년 가스 기술 공인 데이터 기반' : 'Powered by MS Gas Knowledge Base'}
              </span>
              <span>본사: 051-303-3111</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
