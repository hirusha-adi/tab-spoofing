import { useEffect } from "react";

const TabSpoofer = () => {
  useEffect(() => {
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

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Randomly pick one spoof option
        const randomSpoof = spoofOptions[Math.floor(Math.random() * spoofOptions.length)];
        document.title = randomSpoof.title;
        document.querySelector("link[rel='icon']").href = randomSpoof.icon;
      } else {
        // Restore original title and icon when user returns
        document.title = originalTitle;
        document.querySelector("link[rel='icon']").href = originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TabSpoofer;
