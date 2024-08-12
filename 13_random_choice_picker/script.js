const textareaEl = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textareaEl.focus();

textareaEl.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    
    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(x => x.trim() !== '').map(x => x.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        toggleHighlightTag(randomTag)
        setTimeout(() => {
            toggleHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            toggleHighlightTag(randomTag)
        }, 100)
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function toggleHighlightTag(tag) {
    tag.classList.toggle('highlight');
}