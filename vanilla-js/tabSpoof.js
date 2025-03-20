document.addEventListener("DOMContentLoaded", function () {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel='icon']").href;
  
    // 📍 add more spoofing options here
    // ---------------------------------
    const spoofOptions = [
      { title: "Inbox (5) - Gmail", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
      { title: "X / Home", icon: "https://abs.twimg.com/favicons/twitter.2.ico" },
      { title: "WhatsApp", icon: "https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" }
    ];
    // ---------------------------------
  
    function changeTab() {
      if (document.hidden) {
        const randomSpoof = spoofOptions[Math.floor(Math.random() * spoofOptions.length)];
        document.title = randomSpoof.title;
        document.querySelector("link[rel='icon']").href = randomSpoof.icon;
      } else {
        document.title = originalTitle;
        document.querySelector("link[rel='icon']").href = originalFavicon;
      }
    }
  
    document.addEventListener("visibilitychange", changeTab);
  });
  