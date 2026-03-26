/**
 * 성공 사례 이미지 — 아래 둘 중 **한 가지 방식**만 실제로 쓰입니다.
 *
 * ① 권장: `src/assets/success-stories/` 안에 `.jpg` / `.png` / `.webp` 를 넣기
 *    → 빌드(Vite)가 자동으로 묶습니다. 파일 **이름이 그대로 캡션**으로 쓰입니다.
 *    → 이 폴더에 이미지가 **하나라도 있으면** 아래 SUCCESS_STORIES·public 경로는 사용하지 않습니다.
 *
 * ② 대안: `public/images/stories/` 에 파일 두기 (예: 01.jpg …)
 *    → 반드시 아래 `SUCCESS_STORIES` 의 `imageFile` 이름과 **정확히 일치**해야 합니다.
 *    → 새 파일만 넣고 목록을 안 고치면 화면에 안 나옵니다. 항목을 추가하거나 이름을 맞추세요.
 *
 * 이미지를 바꾼 뒤 반영이 안 되면: 개발 서버 한 번 재시작, 브라우저 강력 새로고침.
 * `public` 경로를 쓰는 경우 `storyImageSrc` 의 `?v=` 숫자를 올리면 캐시를 끊을 수 있습니다.
 */
export type SuccessStory = {
  id: string;
  imageFile: string;
  imageAlt: string;
  /** 이미지 아래 한 줄 (날짜 · 비자 변경 · 국가 등) */
  caption: string;
};

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "1",
    imageFile: "01.jpg",
    imageAlt: "비자 성공 사례 썸네일 1",
    caption: "D10→E7(요리사) 변경",
  },
  {
    id: "2",
    imageFile: "02.jpg",
    imageAlt: "비자 성공 사례 썸네일 2",
    caption: "E7 해외초청(중국)",
  },
  {
    id: "3",
    imageFile: "03.jpg",
    imageAlt: "비자 성공 사례 썸네일 3",
    caption: "D8(투자) 비자 연장",
  },
  {
    id: "4",
    imageFile: "04.jpg",
    imageAlt: "비자 성공 사례 썸네일 4",
    caption: "E7 해외초청(미국)",
  },
  {
    id: "5",
    imageFile: "05.jpg",
    imageAlt: "비자 성공 사례 썸네일 5",
    caption: "국적상실신고+F4비자",
  },
  {
    id: "6",
    imageFile: "06.jpg",
    imageAlt: "비자 성공 사례 썸네일 6",
    caption: "E7 해외초청(태국)",
  },
  {
    id: "7",
    imageFile: "07.jpg",
    imageAlt: "비자 성공 사례 썸네일 7",
    caption: "B2→E7(해외영업원) 변경",
  },
  {
    id: "8",
    imageFile: "08.jpg",
    imageAlt: "비자 성공 사례 썸네일 8",
    caption: "C3→D8(투자) 변경",
  },
  {
    id: "9",
    imageFile: "09.jpg",
    imageAlt: "비자 성공 사례 썸네일 9",
    caption: "D2→F2-R(지역특화형) 변경",
  },
  {
    id: "10",
    imageFile: "10.jpg",
    imageAlt: "비자 성공 사례 썸네일 10",
    caption: "D10→E7(상품기획) 변경",
  },
  {
    id: "11",
    imageFile: "11.jpg",
    imageAlt: "비자 성공 사례 썸네일 11",
    caption: "E7 근무처변경허가",
  },
  {
    id: "12",
    imageFile: "12.jpg",
    imageAlt: "비자 성공 사례 썸네일 12",
    caption: "E9→E7-4R(지역특화형) 변경",
  },
  {
    id: "13",
    imageFile: "13.jpg",
    imageAlt: "비자 성공 사례 썸네일 13",
    caption: "F6→E7(상품기획) 변경",
  },
];

export function storyImageSrc(fileName: string) {
  return `/images/stories/${fileName}?v=5`;
}
