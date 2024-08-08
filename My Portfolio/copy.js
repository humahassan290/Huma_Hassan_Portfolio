// Get all video elements
const videos = document.querySelectorAll('video');

// Add an event listener to each video element
videos.forEach(video => {
  video.addEventListener('click', () => {
    // Toggle the bright class on the video element
    video.classList.toggle('bright');

    // Set the video to loop
    video.loop = true;
  });
});