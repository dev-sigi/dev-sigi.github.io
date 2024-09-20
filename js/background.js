const body = document.querySelector("body");

const images = [
  "url('https://images.unsplash.com/photo-1726677644019-c010b789cf12?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  "url('https://plus.unsplash.com/premium_photo-1667682997863-62ee7e76cca3?q=80&w=1001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  "url('https://images.unsplash.com/photo-1726664182321-6c8ba2ad912a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  "url('https://images.unsplash.com/photo-1726584800551-2b7809b9a6de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = chosenImage;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
