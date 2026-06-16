function updateCalendar() {

    const now= new Date();
    const day= now.getDate();
    const month_names= ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const month= month_names[now.getMonth()];

    document.getElementById("daynum").textContent = day;
    document.getElementById("month").textContent = month;
}

updateCalendar();

async function getDailyQuote() {
  const response = await fetch('https://zenquotes.io/api/today');
  const data = await response.json();
  document.getElementById('quote').innerText = `"${data[0].q}"`;
}

getDailyQuote();