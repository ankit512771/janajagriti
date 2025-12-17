// Array of notices
const notices = [
  {
    title: "Annual Sports Day",
    date: "2025-12-10",
    description: "Our annual sports day will be held at the school ground. Students are requested to participate actively.",
    points: [
      "All students must wear school uniform",
      "Bring water bottles and snacks",
      "Arrive by 8:00 AM"
    ],
    image: "memories/memories1.jpg"
  },
  {
    title: "New Library Books Arrived",
    date: "2025-12-15",
    description: "The school library has received a new collection of books. Students and teachers can borrow them from tomorrow.",
    points: [
      "Books are available for all grades",
      "Return within 2 weeks",
      "Handle books carefully"
    ],
    image: ""
  },
  {
    title: "Winter Vacation Notice",
    date: "2025-12-20",
    description: "Winter vacation will start from 25th December and school will reopen on 5th January.",
    points: [
      "School office will remain open for inquiries",
      "Prepare for exams after vacation"
    ],
    image: ""
  }
];

// Function to render notices on notices page
function renderNotices(noticesToRender) {
  const container = document.getElementById("allNotices");
  if(!container) return;

  container.innerHTML = "";

  noticesToRender.sort((a,b) => new Date(b.date) - new Date(a.date)); // latest first

  noticesToRender.forEach(notice => {
    const noticeDiv = document.createElement("div");
    noticeDiv.className = "bg-white p-6 rounded shadow";

    noticeDiv.innerHTML = `
      <h2 class="text-xl font-bold mb-2">${notice.title}</h2>
      <p class="text-sm text-gray-500 mb-2">${notice.date}</p>
      ${notice.image ? `<img src="${notice.image}" class="mb-4 rounded max-h-64 w-full object-cover">` : ""}
      <p class="mb-2">${notice.description}</p>
      ${notice.points && notice.points.length ? `<ul class="list-disc pl-5 space-y-1">${notice.points.map(p => `<li>${p}</li>`).join("")}</ul>` : ""}
    `;

    container.appendChild(noticeDiv);
  });
}
