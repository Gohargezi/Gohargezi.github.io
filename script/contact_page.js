
const items = [
    {
      image: "image/icon/phone_icon.png",
      title: "تلفن همراه : 09945953803 ",
      link: "tel:09945953803"
    },
    {
      image: "image/icon/email_icon.png",
      title: "ایمیل : gohargezi@outlook.com ",
      link: "mailto:gohargezi@outlook.com "
    },
    {
      image: "image/icon/github_icon.png",
      title: "گیت هاب : gohargezi@",
      link: "https://github.com/Gohargezi"
    },
    {
      image: "image/icon/linkedin_icon.png",
      title: "لینکدین : Mohammad Gohargazi",
      link: "https://www.linkedin.com/in/gohargazi/"
    },
    {
      image: "image/icon/eitaa_icon.png",
      title: "ایتا : gohargezi@",
      link: "https://eitaa.com/gohargezi"
    },
    {
      image: "image/icon/telegram_icon.png",
      title: "تلگرام : gohargezi@",
      link: "https://t.me/gohargezi"
    }
  ];
  
  function pop_up (index)
  {
      if ( index == -1 )
      {
          document.getElementById("pop-up").style.display = "none" ;
          return ;
      }
      const item = items[index] ;
      document.getElementById("pop-up").style.display = "flex" ;
      document.getElementById("image").src = item.image;
      document.getElementById("title").textContent = item.title;
      document.getElementById("link").href = item.link;
  }