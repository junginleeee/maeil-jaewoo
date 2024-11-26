document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".grid-container");

    // 페이지 전환 URL 설정
    const pages = ["index.html", "page2.html", "page3.html", "page4.html"];
    const currentUrl = window.location.href;
    const currentPageIndex = pages.findIndex((page) => currentUrl.includes(page));

    // 페이지별 블록 설정
    let totalBlocks = 0;
    let blocksPerRow = 0; // 한 줄에 들어갈 블록 개수
    if (currentPageIndex === 0) {
        totalBlocks = 16; // 페이지 1: 총 16개
        blocksPerRow = 16; // 한 줄에 4개
    } else if (currentPageIndex === 1) {
        totalBlocks = 52; // 페이지 2: 총 52개
        blocksPerRow = 26; // 한 줄에 13개
    } else if (currentPageIndex === 2) {
        totalBlocks = 208; // 페이지 3: 총 208개
        blocksPerRow = 26; // 한 줄에 26개
    } else if (currentPageIndex === 3) {
        totalBlocks = 104 * 6; // 페이지 4
        blocksPerRow = 52; // 한 줄에 52개
    }

    // grid-template-columns 설정
    container.style.gridTemplateColumns = `repeat(${blocksPerRow}, 1fr)`;

    // 블록 생성
    for (let i = 0; i < totalBlocks; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        container.appendChild(block);
    }

    // 클릭 시 페이지 전환
    container.addEventListener("click", () => {
        const nextPageIndex = (currentPageIndex + 1) % pages.length;
        window.location.href = pages[nextPageIndex];
    });
});
