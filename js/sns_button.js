const tagButtons = document.querySelectorAll('.tag-button');

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // console.dir(button);
    // console.dir(button.dataset.tag);
    const tag = button.dataset.tag;
    optionParams.q = `동성로${tag}`;
    // performYoutubeSearch();
  });
});
