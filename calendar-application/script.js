const month_names_en= ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

const month_names_cn= ["一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月"];

let is_english= true;

function updateCalendar() {

    const now= new Date();
    const day= now.getDate();
    const month_names= is_english? month_names_en: month_names_cn;
    const month= month_names[now.getMonth()];

    document.getElementById("daynum").textContent = day;
    document.getElementById("month").textContent = month;
}

function toggle_language() {
    is_english= !is_english;
    document.getElementById("title").innerText= is_english? "Today's Date": "今日日期";
    document.getElementById("month").style.fontFamily= is_english? "'UnifrakturMaguntia', cursive": "'Noto Serif SC', serif";
    document.getElementById("title").style.fontFamily= is_english? "'UnifrakturMaguntia', cursive": "'Noto Serif SC', serif";
    updateCalendar();
}

updateCalendar();

async function getDailyQuote() {
  const response = await fetch('https://zenquotes.io/api/today');
  const data = await response.json();
  document.getElementById('quote').innerText = `"${data[0].q}"`;
}

getDailyQuote();