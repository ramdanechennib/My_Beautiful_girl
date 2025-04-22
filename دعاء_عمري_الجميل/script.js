const loveMessage = document.getElementById("love-message");
const langSwitch = document.getElementById("lang-switch");

// النصوص باللغتين
const messages = {
    ar: `يا مؤنستي الغالية 🌸، يا أجمل صدفة في حياتي 💫، يا هدية ربي 🎁 التي جاءتني في وقت كنت ألح على الله 🙏 ليعطيني استجابة جميلة، وها أنا ذا 💞 حبيب فتاة تمنيتها من أعماق قلبي ❤️ وهي أنتِ يا بشرى 😍 أحبك كثيييييراً 💖... أأأأه 🥺

يا دعائي الجميل 🌹، كل يوم أعيشه معك هو نعمة من ربي 💝، وكل لحظة أسمع فيها صوتك 🎶 كأنها آذان رحمة تنزل في قلبي ❤️ وراحة تسكن في نفسي 🕊️.

أنتِ هدية قدري 🎀، يا ملاكي الذي أنار لي حياتي ✨، والذي غير قلبي كثيراً وجعله يؤمن أن الله لا يخيب عبداً إذا تمنى أصعب الأمنيات 💫. فأنتِ كنتِ بالنسبة لي أصعب وأجمل أمنية 💌.

مهما كتبت 📝، ومهما قلت 🎤، لا تكفيني كل الكلمات لأعبر عن حبي لك 💘، لأنكِ ببساطة: هدية من الله من غير موعد 🎉، وبدعاء استمر أكثر من 5 سنوات ⏳... ولكنك جئتِ فوق ما تمنيت 💗.

أتمنى ألا أجرحك يوماً 💔، وألا تتغيري عليّ أبداً 🙏، فإني فرح بك كثيييييراً 🥰 يا حُباه 💞.
`,
    en: `My dearest companion 🌸, the most beautiful coincidence in my life 💫, the gift from God 🎁 that came when I was begging Him 🙏 for a beautiful answer. And here I am 💞 in love with the girl I always wished for — and it's you, Bouchra 😍. I love you soooo much 💖... ahhh 🥺

You're my beautiful prayer 🌹. Every day I live with you is a blessing from above 💝, and every moment I hear your voice 🎶 feels like a wave of mercy in my heart ❤️ and peace within my soul 🕊️.

You are the gift of my destiny 🎀, my angel who lit up my life ✨, the one who changed my heart and made me believe that God never disappoints those who wish for the hardest dreams 💫. And you were the hardest — and most beautiful — wish I ever had 💌.

No matter what I write 📝, no matter what I say 🎤, no words will ever be enough to express my love for you 💘. Because simply: you are a gift from God, without a scheduled time 🎉, and a prayer that lasted more than 5 years ⏳… and yet, you came better than I ever imagined 💗.

I just hope I never hurt you 💔, and that you never change the way you love me 🙏. I am sooo happy to have you 🥰, my love 💞.
`
  };

// حدث التبديل بين اللغتين
langSwitch.addEventListener("change", function () {
  loveMessage.textContent = langSwitch.checked ? messages.en : messages.ar;
});

document.getElementById("btn").addEventListener("click", function () {
  const yourName = document.getElementById("your-name").value.trim().toLowerCase();
  const partnerName = document.getElementById("partner-name").value.trim().toLowerCase();
  const result = document.getElementById("result");
  const audio = new Audio("image/beep-24.mp3");

  if (yourName === "" || partnerName === "") {
    result.textContent = "ماعليش تدخل اسمي واسمك يا دعائي الرائع 💔";
    return;
  }

  const validNames = [
    ["رمضان شنيب", "ramdane chennib"],
    ["بشرى حمدي", "bouchra hamdi"]
  ];

  const namesEntered = [yourName, partnerName];
  const matchFirstName = validNames[0].includes(namesEntered[0]) || validNames[0].includes(namesEntered[1]);
  const matchSecondName = validNames[1].includes(namesEntered[0]) || validNames[1].includes(namesEntered[1]);

  if (!(matchFirstName && matchSecondName)) {
    result.textContent = " يا الزينة تاعي ماعرفتش تكتب الاسم؟ 😅 جرب اكتب  بشرى حمدي و رمضان شنيب ماعليش اكتب حتا بالانجليزي ❤️ ";
    return;
  }

  audio.play();
  const loveScore = Math.floor(Math.random() * 101);
  result.textContent = `${yourName} ❤️ ${partnerName} = ${loveScore}%`;

  for (let i = 0; i < 10; i++) {
    setTimeout(createBubble, i * 100);
  }
});

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.textContent = "❤️ ❤️ ❤️";
  document.getElementById("bubble-container").appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}
