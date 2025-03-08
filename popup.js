document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchBox').value;
    if (query) {
        const searchUrl = `http://172.16.50.4/search?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: searchUrl });
    }
});
