async function loadMangaTerbaru() {
  try {
    const response = await fetch("https://mangaverse-api.vercel.app/terbaru-2");
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();

    // The API sometimes returns an array directly or an object with a `data` property.
    const mangaList = Array.isArray(data) ? data : data.data || data || [];
    console.log("mangaTerbaru:", mangaList);

    // Find (or create) a container to render the results.
    let container = document.getElementById("manga-list");
    if (!container) {
      container = document.createElement("div");
      container.id = "manga-list";
      container.style.display = "grid";
      container.style.gridTemplateColumns =
        "repeat(auto-fill,minmax(220px,1fr))";
      container.style.gap = "12px";
      container.style.padding = "12px";
      container.style.boxSizing = "border-box";
      document.body.appendChild(container);
    }

    container.innerHTML = "";

    // Render each manga item as a small card.
    mangaList.forEach((item) => {
      const card = document.createElement("article");
      card.style.border = "1px solid #e0e0e0";
      card.style.padding = "8px";
      card.style.borderRadius = "6px";
      card.style.background = "#fff";
      card.style.boxSizing = "border-box";

      const img = document.createElement("img");
      img.src = item.thumbnail || item.image || "";
      img.alt = item.title || item.mangaSlug || "";
      img.style.width = "100%";
      img.style.height = "140px";
      img.style.objectFit = "cover";
      img.loading = "lazy";
      card.appendChild(img);

      const title = document.createElement("a");
      title.href = item.originalLink || item.latestChapterLink || "#";
      title.textContent = item.title || item.mangaSlug || "Untitled";
      title.style.display = "block";
      title.style.marginTop = "8px";
      title.style.fontWeight = "600";
      title.style.color = "#111";
      title.target = "_blank";
      card.appendChild(title);

      const meta = document.createElement("div");
      meta.style.fontSize = "12px";
      meta.style.color = "#555";
      meta.textContent = `${item.type || ""}${
        item.genre ? " • " + item.genre : ""
      }${item.updateTime ? " • " + item.updateTime : ""}`;
      card.appendChild(meta);

      const chapter = document.createElement("div");
      chapter.style.fontSize = "12px";
      chapter.style.marginTop = "6px";
      const chapLink = document.createElement("a");
      chapLink.href = item.latestChapterLink || item.apiChapterLink || "#";
      chapLink.textContent = item.latestChapterTitle || "";
      chapLink.target = "_blank";
      chapter.appendChild(chapLink);
      card.appendChild(chapter);

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Fetch error:", error);
    const existing = document.getElementById("manga-list");
    if (existing)
      existing.innerHTML = `<div style="color:red">Error loading data: ${error.message}</div>`;
  }
}

loadMangaTerbaru();
