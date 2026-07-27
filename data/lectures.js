// 차시 정보: 이 배열만 수정하면 메인 페이지 카드가 자동으로 반영됩니다.
// link: 교안이 준비되면 실제 강의안 페이지(예: lectures/lecture-01.html)나 PDF/노션 링크로 바꿔주세요.
const LECTURES = [
  {
    no: 1,
    title: "AI 활용 콘텐츠 제작 실무",
    summary: "인포그래픽 제작부터 Google Flow 숏폼 영상 제작까지, AI로 병원 홍보 콘텐츠를 기획-제작-수정하는 전 과정을 실습합니다.",
    link: "lectures/lecture-01.html",
  },
];

// 강의 정보(제목/부제/설명/강사/기간)는 여기서 수정 가능합니다.
const COURSE_INFO = {
  title: "AI 활용 콘텐츠 제작 실무",
  subtitle: "국립공주병원 · AI 활용교육",
  description: "인포그래픽과 숏폼 영상 제작을 중심으로, 병원 홍보 콘텐츠를 AI로 직접 기획하고 만들어보는 2시간 실무 중심 교육입니다. Claude, Gemini, Google Flow, Canva, CapCut 등 실제 업무에 바로 쓸 수 있는 도구를 다룹니다.",
  instructor: "한성은",
  instructorTags: ["한국AI에듀랩 대표", "AI 활용교육 전문강사"],
  period: "2026.07.27",
};

const MATERIALS_SECTION = {
  title: "📚 강의 자료",
  desc: "강의안과 실습 파일을 내려받으세요.",
};

// 자료 카드 목록: 필요한 만큼 항목을 추가/삭제하세요.
// type: "padlet" → 버튼에 "패들렛 열기"가 표시되고 새 창으로 열립니다. (url에 패들렛 보드 링크를 넣으세요)
// type: "download" → 버튼에 "다운로드"가 표시됩니다. (url에 파일/노션 링크를 넣으세요)
const MATERIALS = [
  {
    icon: "📌",
    title: "실습 결과물 업로드 (패들렛)",
    description: "실습 중 만든 인포그래픽·영상 결과물을 패들렛에 올리고 함께 공유해요",
    type: "padlet",
    url: "https://padlet.com/vividhan0900/bit-ly-ai-48y4o0i5vn9cbp3g",
  },
  {
    icon: "📊",
    title: "강의 자료 (PPTX)",
    description: "전체 차시 강의안 원본입니다. 업로드 후 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
];
