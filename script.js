document.addEventListener("DOMContentLoaded", () => {
    const bioElement = document.getElementById("bio")
    const readMoreBtn = document.getElementById("readMoreBtn")
  
    const fullBio = `I am Shahariar Rahman, a dedicated web designer and back-end developer with a passion for creating beautiful and functional websites. With expertise in modern web technologies and a keen eye for design, I strive to deliver exceptional digital experiences. My skills include HTML, CSS, JavaScript, React, Node.js, and various other web development tools and frameworks. I'm committed to staying up-to-date with the latest industry trends and best practices to ensure the highest quality in my work.`
  
    const truncatedBio = fullBio.slice(0, 85) + "..."
  
    let isExpanded = false
  
    function updateBio() {
      bioElement.textContent = isExpanded ? fullBio : truncatedBio
      readMoreBtn.textContent = isExpanded ? "Close" : "Read more"
    }
  
    readMoreBtn.addEventListener("click", () => {
      isExpanded = !isExpanded
      updateBio()
    })
  
    // Initial setup
    updateBio()
  })
  
  