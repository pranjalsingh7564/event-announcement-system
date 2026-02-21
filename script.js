const API_BASE = "https://kanyc11eze.execute-api.ap-south-1.amazonaws.com/prod";

// CREATE EVENT
async function createEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("desc").value;

    await fetch(`${API_BASE}/createEvent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, description })
    });

    alert("Event Created & Email Sent!");
}

// SUBSCRIBE USER
async function subscribeUser() {
    const email = document.getElementById("email").value;

    await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    alert("Subscribed Successfully!");
}

// LOAD EVENTS ON HOME PAGE
async function loadEvents() {
    const res = await fetch(`${API_BASE}/events`);
    const data = await res.json();

    const list = document.getElementById("eventList");
    list.innerHTML = "";

    data.forEach(event => {
        const li = document.createElement("li");
        li.innerText = `${event.title} - ${event.date}`;
        list.appendChild(li);
    });
}

window.onload = loadEvents;