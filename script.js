document.addEventListener("DOMContentLoaded", () => {
  // Handle Elegant Intro Animation
  const introScreen = document.getElementById("intro-screen");
  
  // The CSS animation takes 2.8s. We remove the screen slightly after.
  setTimeout(() => {
    introScreen.style.opacity = '0';
    
    setTimeout(() => {
      introScreen.style.visibility = 'hidden';
    }, 800); // Matches the CSS transition duration
  }, 2900);

  // Sidebar Logic
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const chatInput = document.querySelector(".input-box input");
  const sendBtn = document.querySelector(".send-btn");

  const openSidebar = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  };

  const closeSidebar = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  };

  menuBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  // Handle Input Button State (macOS Blue styling)
  chatInput.addEventListener("input", (e) => {
    if (e.target.value.trim() !== "") {
      sendBtn.style.background = "#007aff";
      sendBtn.style.color = "#fff";
    } else {
      sendBtn.style.background = "#e5e5ea";
      sendBtn.style.color = "#a1a1a6";
    }
  });
});
