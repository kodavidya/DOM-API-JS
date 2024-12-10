const header = document.getElementById('main-header');
const introText = document.querySelector('#intro-text');
const itemList = document.querySelector('#item-list');
const addItemButton = document.querySelector('#add-item');
const toggleHighlightButton = document.querySelector('#toggle-highlight');

header.innerText = 'Learning DOM APIs with fun!';
introText.textContent = 'Explore how to dynamically intract with web pages!';

header.style.fontSize = '2rem';
header.style.borderBottom = '4px solid #ffffff';

addItemButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemList.children.length + 1} `;
  itemList.appendChild(newItem);
});

toggleHighlightButton.addEventListener('click', () => {
  itemList.querySelectorAll('li').forEach((item) => {
    item.classList.toggle('highlight');
  });
});

// Traversing Dom
itemList.addEventListener('click', () => {
  if (event.target.tagName === 'LI') {
    alert(`You clicked on: ${event.target.textContent}`);

    event.target.textContent = `${event.target.textContent} (Clicked)`;

    // Remove the clicked item after a 2 second delay
    const clickedItem = event.target;

    setTimeout(() => {
      itemList.removeChild(clickedItem);
    }, 2000);
  }
});

document.querySelector('body').setAttribute('data-theme', 'light');
