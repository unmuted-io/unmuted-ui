import React from "react";
import * as Icons from "react-feather";

import avator1 from "../../assets/images/user/avatar-1.jpg";
import avator2 from "../../assets/images/user/avatar-2.jpg";
import avator3 from "../../assets/images/user/avatar-3.jpg";

const StaticData = {
  notifications: [
    {
      title: "Your Manager Posted.",
      user: "Jonny michel",
      avatorT: "image",
      avator: avator1
    },
    {
      title: "You have 3 pending Task.",
      user: "Hemilton",
      avatorT: "icon",
      color: "red",
      avator: <Icons.Briefcase size={16} />
    },
    {
      title: "New Order Received.",
      user: "Hemilton michel",
      avatorT: "icon",
      color: "green",
      avator: <Icons.Check size={16} />
    },
    {
      title: "Your Manager Posted.",
      user: "Jonny michel",
      avatorT: "image",
      avator: avator2
    },
    {
      title: "You have 3 pending Task.",
      user: "Hemilton",
      avatorT: "icon",
      color: "red",
      avator: <Icons.Briefcase size={16} />
    },
    {
      title: "New Order Received.",
      user: "Hemilton michel",
      avatorT: "icon",
      color: "green",
      avator: <Icons.Check size={16} />
    },
    {
      title: "Your Manager Posted.",
      user: "Jonny michel",
      avatorT: "image",
      avator: avator3
    },
    {
      title: "You have 3 pending Task.",
      user: "Hemilton",
      avatorT: "icon",
      color: "red",
      avator: <Icons.Briefcase size={16} />
    },
    {
      title: "New Order Received.",
      user: "Hemilton michel",
      avatorT: "icon",
      color: "green",
      avator: <Icons.Check size={16} />
    }
  ],
  socialresProgres: [
    {
      title: "Page Profile",
      progressValue: 25,
      color: "blue"
    },
    {
      title: "Favorite",
      progressValue: 85,
      color: "blue"
    },
    {
      title: "Like Story",
      progressValue: 65,
      color: "blue"
    }
  ],
  socialresProgres1: [
    {
      title: "Wall Profile",
      progressValue: 95,
      color: "red"
    },
    {
      title: "Favorite",
      progressValue: 45,
      color: "red"
    },
    {
      title: "Like Tweets",
      progressValue: 65,
      color: "red"
    }
  ],
  socialresProgres2: [
    {
      title: "profile",
      progressValue: 75,
      color: "green"
    },
    {
      title: "Connect",
      progressValue: 45,
      color: "green"
    },
    {
      title: "Like News",
      progressValue: 65,
      color: "green"
    }
  ],
  socialresProgres3: [
    {
      title: "profile",
      progressValue: 75,
      color: "yellow"
    },
    {
      title: "Connect",
      progressValue: 45,
      color: "yellow"
    },
    {
      title: "Like News",
      progressValue: 65,
      color: "yellow"
    }
  ],
  activityList: [
    {
      title: "Devlopment & Update",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Showcases",
      text: "Lorem dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    },
    {
      title: "Miscellaneous",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Devlopment",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    },
    {
      title: "Devlopment & Update",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Showcases",
      text: "Lorem dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    },
    {
      title: "Miscellaneous",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Devlopment",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    },
    {
      title: "Devlopment & Update",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Showcases",
      text: "Lorem dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    },
    {
      title: "Miscellaneous",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "primary",
      textColor: "blue"
    },
    {
      title: "Devlopment",
      text: "Lorem ipsum dolor sit amet,",
      borderColor: "success",
      textColor: "green"
    }
  ],
  userList: [
    {
      image: avator1,
      title: "Social Media App",
      user: "Tristan Madsen",
      completed: "326,134",
      status: 68,
      date: "October 26, 2017",
      color: "green"
    },
    {
      image: avator2,
      title: "Newspaper Wordpress Web",
      user: " Marcus Poulsen",
      completed: "110,134",
      status: 46,
      date: "September 4, 2017",
      color: "red"
    },
    {
      image: avator3,
      title: "Dashboard UI Kit Design",
      user: "Felix Johansen",
      completed: "226,134",
      status: 31,
      date: "November 14, 2017",
      color: "blue"
    },
    {
      image: avator1,
      title: "Social Media App",
      user: "Tristan Madsen",
      completed: "326,134",
      status: 68,
      date: "October 26, 2017",
      color: "green"
    },
    {
      image: avator2,
      title: "Newspaper Wordpress Web",
      user: " Marcus Poulsen",
      completed: "110,134",
      status: 46,
      date: "September 4, 2017",
      color: "red"
    },
    {
      image: avator3,
      title: "Dashboard UI Kit Design",
      user: "Felix Johansen",
      completed: "226,134",
      status: 31,
      date: "November 14, 2017",
      color: "blue"
    },
    {
      image: avator1,
      title: "Social Media App",
      user: "Tristan Madsen",
      completed: "326,134",
      status: 68,
      date: "October 26, 2017",
      color: "green"
    },
    {
      image: avator2,
      title: "Newspaper Wordpress Web",
      user: " Marcus Poulsen",
      completed: "110,134",
      status: 46,
      date: "September 4, 2017",
      color: "red"
    },
    {
      image: avator3,
      title: "Dashboard UI Kit Design",
      user: "Felix Johansen",
      completed: "226,134",
      status: 31,
      date: "November 14, 2017",
      color: "blue"
    },
    {
      image: avator1,
      title: "Social Media App",
      user: "Tristan Madsen",
      completed: "326,134",
      status: 68,
      date: "October 26, 2017",
      color: "green"
    },
    {
      image: avator2,
      title: "Newspaper Wordpress Web",
      user: " Marcus Poulsen",
      completed: "110,134",
      status: 46,
      date: "September 4, 2017",
      color: "red"
    },
    {
      image: avator3,
      title: "Dashboard UI Kit Design",
      user: "Felix Johansen",
      completed: "226,134",
      status: 31,
      date: "November 14, 2017",
      color: "blue"
    }
  ],
  sliderData: [
    {
      name: "REALTY",
      value: "-0.99",
      color: "red"
    },
    {
      name: "TELCOM",
      value: "+1.52",
      color: "green"
    },
    {
      name: "CPSE",
      value: "+5.78",
      color: "green"
    },
    {
      name: "INFRA",
      value: "-7.66",
      color: "red"
    },
    {
      name: "TECK",
      value: "+4.56",
      color: "green"
    },
    {
      name: "BASMTR",
      value: "+0.78",
      color: "green"
    }
  ],
  sliderDataDark: [
    {
      name: "Ethereum(ETH)",
      icon: ["fab", "ethereum"],
      iconColor: "red",
      value: "+1.5278",
      color: "danger"
    },
    {
      name: "Bitcoin(BTC)",
      icon: ["fab", "bitcoin"],
      iconColor: "yellow",
      value: "-0.997896",
      color: "warning"
    },
    {
      name: "Ripple(RPL)",
      icon: ["fab", "cloudsmith"],
      iconColor: "blue",
      value: "-7.66789",
      color: "primary"
    },
    {
      name: "Neo(NEO)",
      icon: ["fab", "asymmetrik"],
      iconColor: "yellow",
      value: "+5.78789",
      color: "warning"
    }
  ],
  timelineData1: [
    {
      icon: "up",
      iconText: "DIA",
      name: "METAL"
    },
    {
      icon: "down",
      iconText: "SPY",
      name: "BANKEX"
    },
    {
      icon: "up",
      iconText: "QQQ",
      name: "OILGAS"
    },
    {
      icon: "down",
      iconText: "IWM",
      name: "CDGS"
    }
  ],
  clientData: [
    {
      title1: "Support Requests",
      static1: 25,
      change1: -11,
      title2: "Open Ticket",
      static2: 29,
      change2: -11
    },
    {
      title1: "Support Resolved",
      static1: 1,
      change1: -11,
      title2: "Solved Ticket",
      static2: 4,
      change2: 5
    },
    {
      title1: "Pending Ticket",
      static1: 1.56,
      change1: 8,
      title2: "Reassign Ticket",
      static2: 2,
      change2: -11
    },
    {
      title1: "Reopen Ticket",
      static1: 5.76,
      change1: 4,
      title2: "Close Ticket",
      static2: 10,
      change2: 9
    },
    {
      title1: "Return Ticket",
      static1: "4 Days",
      change1: 7,
      title2: "Satisfied Clients",
      static2: 3,
      change2: 6
    },
    {
      title1: "Support Requests",
      static1: 25,
      change1: -11,
      title2: "Open Ticket",
      static2: 29,
      change2: -11
    }
  ]
};

export default StaticData;
