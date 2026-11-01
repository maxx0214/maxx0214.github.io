const projectNotes = {
  turini: `<h2 id="dialog-title">Turini</h2><p class="dialog-subtitle">금융 학습 서비스 · PBL · RAG 개발 및 평가 경험</p>
  <h3>어떤 문제를 다뤘나요?</h3><p>금융 초보자가 자신의 금융 수준과 투자 성향을 파악하고, 진단 기반의 학습과 포트폴리오 해석을 통해 판단력을 기를 수 있도록 돕는 서비스입니다. 금융 용어나 상품을 질문하면 근거 중심으로 설명하고, 이어지는 질문에도 맥락을 유지하는 경험을 목표로 했습니다.</p>
  <h3>검색부터 답변까지</h3><div class="flow"><span>User question</span><b>→</b><span>Query rewrite</span><b>→</b><span>Dense + BM25</span><b>→</b><span>Reranking</span><b>→</b><span>Grounded answer</span></div><p>Query Rewrite로 맥락을 반영한 질문을 만들고, Dense Retrieval과 BM25를 결합한 Hybrid Retrieval 및 Reranking으로 관련 문서를 검색합니다. 검색된 근거를 바탕으로 답변을 생성하는 RAG 파이프라인을 적용했습니다.</p>
  <figure><img src="assets/rag-pipeline.webp" alt="Turini RAG 파이프라인: 검색, 재순위화, 문맥 선택, 생성" loading="lazy"><figcaption>포트폴리오 원본의 RAG 파이프라인</figcaption></figure>
  <h3>평가를 통해 달라진 질문</h3><p>RAG 평가 과정에서 Answer Relevancy가 다른 지표와 일치하지 않는 사례를 접했습니다. 단일 점수로 전체 시스템의 품질을 결론 내리기보다, 검색 성능과 생성 품질을 나누고 사람의 판단과 함께 해석할 필요가 있다는 점을 배웠습니다.</p><ul><li>검색: Hit@K, Recall@K, MRR, nDCG 등으로 근거 문서 검색을 확인</li><li>생성: Faithfulness, Answer Relevancy, Answer Correctness 등으로 답변 품질을 해석</li><li>사람의 평가: 관련성, 정확성, 유용성 관점에서 결과를 함께 검토</li></ul>
  <figure><img src="assets/evaluation.webp" alt="모듈별 검색·생성 평가 시스템의 아키텍처" loading="lazy"><figcaption>포트폴리오 원본의 모듈형 RAG 평가 구조</figcaption></figure><p class="research-note">이 경험은 “AI가 답변을 만들 수 있는가”에서 “평가가 실제 신뢰성을 반영하는가”로 관심을 확장하는 계기가 되었습니다.</p><a class="dialog-link" href="https://github.com/team-TURINI/Turini-e2e" target="_blank" rel="noopener noreferrer">프로젝트 GitHub ↗</a><br><a class="dialog-link" href="https://sylee0214.tistory.com/1" target="_blank" rel="noopener noreferrer">평가 문제를 정리한 글 ↗</a>`,
  penalty: `<h2 id="dialog-title">Penalty RL</h2><p class="dialog-subtitle">Unity ML-Agents · 페널티킥 강화학습 환경</p><figure><img src="assets/penalty-rl.webp" alt="Unity 페널티킥 학습 환경" loading="lazy"><figcaption>포트폴리오 원본의 Unity 환경 화면</figcaption></figure><h3>환경을 만들고 행동을 학습시키기</h3><p>Unity ML-Agents를 이용해 페널티킥 환경을 구축했습니다. 에이전트가 환경과 상호작용하며 행동을 학습하도록 하고, 설계와 학습 조건을 바꾸면서 결과를 비교했습니다.</p><h3>결과만큼 중요했던 실험 기록</h3><ul><li>상태·행동·보상 설계의 변경 사항 기록</li><li>서로 다른 학습 설정 비교</li><li>성공한 결과와 함께 실패 사례 분석</li><li>각 접근법이 작동하거나 실패한 이유 설명</li></ul><figure><img src="assets/training.webp" alt="강화학습 훈련 과정의 지표 그래프" loading="lazy"><figcaption>포트폴리오 원본의 학습 기록</figcaption></figure><p class="research-note">학습 성과를 보여주는 데서 끝내지 않고, 어떤 설계와 조건이 결과를 만들었는지 추적하는 과정에 집중했습니다.</p><a class="dialog-link" href="https://github.com/maxx0214/Unity-adversarial-PPO-PenaltyRL" target="_blank" rel="noopener noreferrer">코드와 실험 기록 보기 ↗</a>`,
  sleep: `<h2 id="dialog-title">Beyond the mean</h2><p class="dialog-subtitle">MESA Sleep · 수면 변동성과 주간 졸림 · 논문 투고 상태</p><h3>연구 질문</h3><p>평균 수면 시간 외에도 수면 변동성이 주간 졸림을 설명하는 데 관련이 있을까요? 수면 시간, 수면 효율, WASO, 수면 중간 시점의 변동성을 살펴봤습니다. 결과 변수로 Epworth Sleepiness Scale(ESS)을 사용했습니다.</p><h3>분석 과정</h3><ul><li>충분한 유효 수면 관측일을 가진 참여자 선정</li><li>수면 지표의 표준편차(SD)와 변동계수(CV) 계산</li><li>나이, 성별, BMI, AHI를 통제한 모형 비교</li><li>평균만 포함한 모형과 평균·변동성을 함께 포함한 모형 비교</li></ul><figure><img src="assets/research-model.webp" alt="수면 평균 및 변동성 입력, 회귀 모형, ESS 결과로 이어지는 연구 분석 구조" loading="lazy" style="max-width:320px;margin:auto"><figcaption>포트폴리오 원본의 연구 분석 구조</figcaption></figure><h3>관찰과 해석</h3><p>평균 수면 시간을 고려한 후에도 수면 시간 변동성과 주간 졸림 사이에 작지만 일관된 연관성을 관찰했습니다. 이 결과는 신중하게 해석해야 합니다.</p><p class="research-note">원본 포트폴리오 기준 논문은 투고 상태입니다. 게재·수락된 논문으로 표시하지 않으며, 관찰된 연관성을 인과관계로 해석하지 않습니다.</p>`
};
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let trigger = null;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    trigger = button;
    content.innerHTML = projectNotes[button.dataset.project];
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  trigger?.focus();
});
