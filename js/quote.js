const quotes = [
  {
    quote:
      "누구도 좋은 책을 읽으며 자살하지 않는다. 하지만 좋은 책을 쓰면서는 많은 이들이 자살했다.",
    author: "로버트 번",
  },
  {
    quote:
      "캐릭터가 스타일이다. 나쁘고 잘 다듬어지지 않은 캐릭터에선 좋은 스타일이 나올 수가 없다.",
    author: "노먼 메일러",
  },
  {
    quote: "없애는 건, 남아 있는 걸 응축시킨다. ",
    author: "트레이시 세발리에",
  },
  {
    quote:
      "다른 출판물에서 익숙하게 본 비유나 직유, 상징을 절대 사용하지 마라.",
    author: "조지 오웰",
  },
  {
    quote:
      "캐릭터는 작가가 창조하는 게 아니다. 원래 존재하고 있었는데, 발견되는 것이다.",
    author: "엘리자베스 보웬",
  },
  {
    quote: "다 완성하기 전까진, 절대 이렇게 이렇게 쓸거야 남에게 말하지 마라.",
    author: "마리오 푸조",
  },
  {
    quote: "우울하지 않으면, 당신은 진지한 작가가 될 수 없다. ",
    author: "커트 보네거트",
  },
  {
    quote:
      "언어 사용은 우리가 죽음과 침묵에 맞서 싸우게 할만한 유일한 것이다. ",
    author: "조이스 캐롤 오츠",
  },
  {
    quote: "영감이 찾아오길 기다려선 안된다. 몽둥이를 들고 그걸 쫓아가야 한다.",
    author: "잭 런던",
  },
  {
    quote:
      "작가가 지켜야할 규율은 가만히 서서 등장인물들이 말하는 걸 들어보는 것이다.",
    author: "레이첼 카슨",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `${todaysQuote.author}`;
