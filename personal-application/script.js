function updateCalendar() {

    const now= new Date();
    const day= now.getDate();
    const month_names= ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const month= month_names[now.getMonth()];

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
}

updateCalendar();