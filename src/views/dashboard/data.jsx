import * as am4core from "@amcharts/amcharts4/core";

const Data = {
  averageChart1: [
    {
      date: "2018-01-1",
      price: 180
    },
    {
      date: "2018-01-2",
      price: 252
    },
    {
      date: "2018-01-3",
      price: 185
    },
    {
      date: "2018-01-4",
      price: 189
    },
    {
      date: "2018-01-5",
      price: 158
    },
    {
      date: "2018-01-6",
      price: 200
    },
    {
      date: "2018-01-7",
      price: 187
    },
    {
      date: "2018-01-8",
      price: 180
    },
    {
      date: "2018-01-9",
      price: 252
    },
    {
      date: "2018-01-10",
      price: 185
    },
    {
      date: "2018-01-11",
      price: 268
    },
    {
      date: "2018-01-12",
      price: 158
    },
    {
      date: "2018-01-13",
      price: 200
    },
    {
      date: "2018-01-14",
      price: 187
    },
    {
      date: "2018-01-15",
      price: 180
    },
    {
      date: "2018-01-16",
      price: 252
    },
    {
      date: "2018-01-17",
      price: 185
    },
    {
      date: "2018-01-18",
      price: 250
    },
    {
      date: "2018-01-19",
      price: 158
    },
    {
      date: "2018-01-20",
      price: 200
    },
    {
      date: "2018-01-21",
      price: 187
    },
    {
      date: "2018-01-22",
      price: 180
    },
    {
      date: "2018-01-23",
      price: 252
    },
    {
      date: "2018-01-24",
      price: 185
    },
    {
      date: "2018-01-25",
      price: 295
    },
    {
      date: "2018-01-26",
      price: 158
    },
    {
      date: "2018-01-27",
      price: 200
    },
    {
      date: "2018-01-28",
      price: 90
    }
  ],
  averageChart2: [
    {
      date: "2018-01-1",
      price: 180
    },
    {
      date: "2018-01-2",
      price: 252
    },
    {
      date: "2018-01-3",
      price: 185
    },
    {
      date: "2018-01-4",
      price: 189
    },
    {
      date: "2018-01-5",
      price: 158
    },
    {
      date: "2018-01-6",
      price: 200
    },
    {
      date: "2018-01-7",
      price: 187
    },
    {
      date: "2018-01-8",
      price: 180
    },
    {
      date: "2018-01-9",
      price: 252
    },
    {
      date: "2018-01-10",
      price: 185
    },
    {
      date: "2018-01-11",
      price: 268
    },
    {
      date: "2018-01-12",
      price: 158
    },
    {
      date: "2018-01-13",
      price: 200
    },
    {
      date: "2018-01-14",
      price: 187
    },
    {
      date: "2018-01-15",
      price: 180
    },
    {
      date: "2018-01-16",
      price: 252
    },
    {
      date: "2018-01-17",
      price: 185
    },
    {
      date: "2018-01-18",
      price: 250
    },
    {
      date: "2018-01-19",
      price: 158
    },
    {
      date: "2018-01-20",
      price: 200
    },
    {
      date: "2018-01-21",
      price: 187
    },
    {
      date: "2018-01-22",
      price: 180
    },
    {
      date: "2018-01-23",
      price: 252
    },
    {
      date: "2018-01-24",
      price: 185
    },
    {
      date: "2018-01-25",
      price: 295
    },
    {
      date: "2018-01-26",
      price: 158
    },
    {
      date: "2018-01-27",
      price: 200
    },
    {
      date: "2018-01-28",
      price: 90
    }
  ],
  amMap1: [
    {
      id: "africa",
      color: am4core.color("#2196f3")
    },
    {
      id: "asia",
      zoomLevel: 2,
      zoomGeoPoint: {
        latitude: 46,
        longitude: 89
      }
    },
    {
      id: "oceania",
      color: am4core.color("#f44336")
    },
    {
      id: "europe"
    },
    {
      id: "northAmerica",
      color: am4core.color("#4caf50")
    },
    {
      id: "southAmerica"
    }
  ],
  typePie: [
    {
      sector: "Desktop Computers",
      size: 8
    },
    {
      sector: "Smartphones",
      size: 14.6
    },
    {
      sector: "Tablets",
      size: 22.5
    }
  ],
  lineChart1: [
    {
      city: "1",
      income: 20.5
    },
    {
      city: "2",
      income: 18.2
    },
    {
      city: "3",
      income: 17.1
    },
    {
      city: "4",
      income: 16.9
    },
    {
      city: "5",
      income: 15.6
    },
    {
      city: "6",
      income: 14.2
    },
    {
      city: "7",
      income: 13.1
    },
    {
      city: "8",
      income: 16.5
    },
    {
      city: "9",
      income: 15.6
    },
    {
      city: "10",
      income: 16.2
    },
    {
      city: "11",
      income: 14.1
    },
    {
      city: "12",
      income: 18.5
    },
    {
      city: "13",
      income: 17.6
    },
    {
      city: "14",
      income: 19.2
    },
    {
      city: "15",
      income: 18.1
    },
    {
      city: "15",
      income: 17.5
    },
    {
      city: "17",
      income: 16.6
    },
    {
      city: "18",
      income: 19.5
    },
    {
      city: "19",
      income: 18.2
    },
    {
      city: "20",
      income: 19.1
    },
    {
      city: "21",
      income: 18.9
    },
    {
      city: "22",
      income: 15.6
    },
    {
      city: "23",
      income: 14.2
    },
    {
      city: "24",
      income: 12.1
    },
    {
      city: "25",
      income: 15.5
    },
    {
      city: "26",
      income: 19.6
    },
    {
      city: "27",
      income: 20.2
    },
    {
      city: "28",
      income: 19.1
    },
    {
      city: "29",
      income: 18.5
    },
    {
      city: "30",
      income: 17.6
    },
    {
      city: "31",
      income: 16.2
    },
    {
      city: "32",
      income: 17.1
    },
    {
      city: "33",
      income: 20.5
    },
    {
      city: "34",
      income: 21.6
    },
    {
      city: "35",
      income: 20.5
    },
    {
      city: "36",
      income: 21.2
    },
    {
      city: "37",
      income: 22.1
    },
    {
      city: "38",
      income: 20.9
    },
    {
      city: "39",
      income: 19.6
    },
    {
      city: "40",
      income: 20.2
    },
    {
      city: "41",
      income: 25.1
    },
    {
      city: "42",
      income: 26.5
    },
    {
      city: "43",
      income: 27.6
    },
    {
      city: "44",
      income: 26.2
    },
    {
      city: "45",
      income: 28.1
    },
    {
      city: "46",
      income: 25.5
    },
    {
      city: "47",
      income: 27.6
    },
    {
      city: "48",
      income: 25.9
    },
    {
      city: "49",
      income: 29.2
    },
    {
      city: "50",
      income: 25.2
    },
    {
      city: "51",
      income: 27.5
    }
  ],
  lineChart2: [
    {
      city: "1",
      income: 20.5
    },
    {
      city: "2",
      income: 18.2
    },
    {
      city: "3",
      income: 17.1
    },
    {
      city: "4",
      income: 16.9
    },
    {
      city: "5",
      income: 15.6
    },
    {
      city: "6",
      income: 14.2
    },
    {
      city: "7",
      income: 13.1
    },
    {
      city: "8",
      income: 16.5
    },
    {
      city: "9",
      income: 15.6
    },
    {
      city: "10",
      income: 16.2
    },
    {
      city: "11",
      income: 14.1
    },
    {
      city: "12",
      income: 18.5
    },
    {
      city: "13",
      income: 17.6
    },
    {
      city: "14",
      income: 19.2
    },
    {
      city: "15",
      income: 18.1
    },
    {
      city: "15",
      income: 17.5
    },
    {
      city: "17",
      income: 16.6
    },
    {
      city: "18",
      income: 19.5
    },
    {
      city: "19",
      income: 18.2
    },
    {
      city: "20",
      income: 19.1
    },
    {
      city: "21",
      income: 18.9
    },
    {
      city: "22",
      income: 15.6
    },
    {
      city: "23",
      income: 14.2
    },
    {
      city: "24",
      income: 12.1
    },
    {
      city: "25",
      income: 15.5
    },
    {
      city: "26",
      income: 19.6
    },
    {
      city: "27",
      income: 20.2
    },
    {
      city: "28",
      income: 19.1
    },
    {
      city: "29",
      income: 18.5
    },
    {
      city: "30",
      income: 17.6
    },
    {
      city: "31",
      income: 16.2
    },
    {
      city: "32",
      income: 17.1
    },
    {
      city: "33",
      income: 20.5
    },
    {
      city: "34",
      income: 21.6
    },
    {
      city: "35",
      income: 20.5
    },
    {
      city: "36",
      income: 21.2
    },
    {
      city: "37",
      income: 22.1
    },
    {
      city: "38",
      income: 20.9
    },
    {
      city: "39",
      income: 19.6
    },
    {
      city: "40",
      income: 20.2
    },
    {
      city: "41",
      income: 25.1
    },
    {
      city: "42",
      income: 26.5
    },
    {
      city: "43",
      income: 27.6
    },
    {
      city: "44",
      income: 26.2
    },
    {
      city: "45",
      income: 28.1
    },
    {
      city: "46",
      income: 25.5
    },
    {
      city: "47",
      income: 27.6
    },
    {
      city: "48",
      income: 25.9
    },
    {
      city: "49",
      income: 29.2
    },
    {
      city: "50",
      income: 25.2
    },
    {
      city: "51",
      income: 27.5
    }
  ],
  lineChart3: [
    {
      city: "1",
      income: 20.5
    },
    {
      city: "2",
      income: 18.2
    },
    {
      city: "3",
      income: 17.1
    },
    {
      city: "4",
      income: 16.9
    },
    {
      city: "5",
      income: 15.6
    },
    {
      city: "6",
      income: 14.2
    },
    {
      city: "7",
      income: 13.1
    },
    {
      city: "8",
      income: 16.5
    },
    {
      city: "9",
      income: 15.6
    },
    {
      city: "10",
      income: 16.2
    },
    {
      city: "11",
      income: 14.1
    },
    {
      city: "12",
      income: 18.5
    },
    {
      city: "13",
      income: 17.6
    },
    {
      city: "14",
      income: 19.2
    },
    {
      city: "15",
      income: 18.1
    },
    {
      city: "15",
      income: 17.5
    },
    {
      city: "17",
      income: 16.6
    },
    {
      city: "18",
      income: 19.5
    },
    {
      city: "19",
      income: 18.2
    },
    {
      city: "20",
      income: 19.1
    },
    {
      city: "21",
      income: 18.9
    },
    {
      city: "22",
      income: 15.6
    },
    {
      city: "23",
      income: 14.2
    },
    {
      city: "24",
      income: 12.1
    },
    {
      city: "25",
      income: 15.5
    },
    {
      city: "26",
      income: 19.6
    },
    {
      city: "27",
      income: 20.2
    },
    {
      city: "28",
      income: 19.1
    },
    {
      city: "29",
      income: 18.5
    },
    {
      city: "30",
      income: 17.6
    },
    {
      city: "31",
      income: 16.2
    },
    {
      city: "32",
      income: 17.1
    },
    {
      city: "33",
      income: 20.5
    },
    {
      city: "34",
      income: 21.6
    },
    {
      city: "35",
      income: 20.5
    },
    {
      city: "36",
      income: 21.2
    },
    {
      city: "37",
      income: 22.1
    },
    {
      city: "38",
      income: 20.9
    },
    {
      city: "39",
      income: 19.6
    },
    {
      city: "40",
      income: 20.2
    },
    {
      city: "41",
      income: 25.1
    },
    {
      city: "42",
      income: 26.5
    },
    {
      city: "43",
      income: 27.6
    },
    {
      city: "44",
      income: 26.2
    },
    {
      city: "45",
      income: 28.1
    },
    {
      city: "46",
      income: 25.5
    },
    {
      city: "47",
      income: 27.6
    },
    {
      city: "48",
      income: 25.9
    },
    {
      city: "49",
      income: 29.2
    },
    {
      city: "50",
      income: 25.2
    },
    {
      city: "51",
      income: 27.5
    }
  ],
  lineChart4: [
    {
      city: "1",
      income: 20.5
    },
    {
      city: "2",
      income: 18.2
    },
    {
      city: "3",
      income: 17.1
    },
    {
      city: "4",
      income: 16.9
    },
    {
      city: "5",
      income: 15.6
    },
    {
      city: "6",
      income: 14.2
    },
    {
      city: "7",
      income: 13.1
    },
    {
      city: "8",
      income: 16.5
    },
    {
      city: "9",
      income: 15.6
    },
    {
      city: "10",
      income: 16.2
    },
    {
      city: "11",
      income: 14.1
    },
    {
      city: "12",
      income: 18.5
    },
    {
      city: "13",
      income: 17.6
    },
    {
      city: "14",
      income: 19.2
    },
    {
      city: "15",
      income: 18.1
    },
    {
      city: "15",
      income: 17.5
    },
    {
      city: "17",
      income: 16.6
    },
    {
      city: "18",
      income: 19.5
    },
    {
      city: "19",
      income: 18.2
    },
    {
      city: "20",
      income: 19.1
    },
    {
      city: "21",
      income: 18.9
    },
    {
      city: "22",
      income: 15.6
    },
    {
      city: "23",
      income: 14.2
    },
    {
      city: "24",
      income: 12.1
    },
    {
      city: "25",
      income: 15.5
    },
    {
      city: "26",
      income: 19.6
    },
    {
      city: "27",
      income: 20.2
    },
    {
      city: "28",
      income: 19.1
    },
    {
      city: "29",
      income: 18.5
    },
    {
      city: "30",
      income: 17.6
    },
    {
      city: "31",
      income: 16.2
    },
    {
      city: "32",
      income: 17.1
    },
    {
      city: "33",
      income: 20.5
    },
    {
      city: "34",
      income: 21.6
    },
    {
      city: "35",
      income: 20.5
    },
    {
      city: "36",
      income: 21.2
    },
    {
      city: "37",
      income: 22.1
    },
    {
      city: "38",
      income: 20.9
    },
    {
      city: "39",
      income: 19.6
    },
    {
      city: "40",
      income: 20.2
    },
    {
      city: "41",
      income: 25.1
    },
    {
      city: "42",
      income: 26.5
    },
    {
      city: "43",
      income: 27.6
    },
    {
      city: "44",
      income: 26.2
    },
    {
      city: "45",
      income: 28.1
    },
    {
      city: "46",
      income: 25.5
    },
    {
      city: "47",
      income: 27.6
    },
    {
      city: "48",
      income: 25.9
    },
    {
      city: "49",
      income: 29.2
    },
    {
      city: "50",
      income: 25.2
    },
    {
      city: "51",
      income: 27.5
    }
  ],
  visitCountryMap: {
    list: [
      {
        country: "USA",
        visitCount: "8.7k",
        percent: "8",
        color: "blue"
      },
      {
        country: "India",
        visitCount: "7.7k",
        percent: "8",
        color: "red"
      },
      {
        country: "China",
        visitCount: "9.7k",
        percent: "8",
        color: "green"
      },
      {
        country: "BD",
        visitCount: "6.7k",
        percent: "8",
        color: "yellow"
      },
      {
        country: "Other",
        visitCount: "4.2k",
        percent: "8",
        color: "purple "
      }
    ]
  },
  dateTime: [
    {
      hour: "12pm",
      weekday: "Sun",
      value: 2990
    },
    {
      hour: "1am",
      weekday: "Sun",
      value: 2520
    },
    {
      hour: "2am",
      weekday: "Sun",
      value: 2334
    },
    {
      hour: "3am",
      weekday: "Sun",
      value: 2230
    },
    {
      hour: "4am",
      weekday: "Sun",
      value: 2325
    },
    {
      hour: "5am",
      weekday: "Sun",
      value: 2019
    },
    {
      hour: "6am",
      weekday: "Sun",
      value: 2128
    },
    {
      hour: "7am",
      weekday: "Sun",
      value: 2246
    },
    {
      hour: "8am",
      weekday: "Sun",
      value: 2421
    },
    {
      hour: "9am",
      weekday: "Sun",
      value: 2788
    },
    {
      hour: "10am",
      weekday: "Sun",
      value: 2959
    },
    {
      hour: "11am",
      weekday: "Sun",
      value: 3018
    },
    {
      hour: "12am",
      weekday: "Sun",
      value: 3154
    },
    {
      hour: "1pm",
      weekday: "Sun",
      value: 3172
    },
    {
      hour: "2pm",
      weekday: "Sun",
      value: 3368
    },
    {
      hour: "3pm",
      weekday: "Sun",
      value: 3464
    },
    {
      hour: "4pm",
      weekday: "Sun",
      value: 3746
    },
    {
      hour: "5pm",
      weekday: "Sun",
      value: 3656
    },
    {
      hour: "6pm",
      weekday: "Sun",
      value: 3336
    },
    {
      hour: "7pm",
      weekday: "Sun",
      value: 3292
    },
    {
      hour: "8pm",
      weekday: "Sun",
      value: 3269
    },
    {
      hour: "9pm",
      weekday: "Sun",
      value: 3300
    },
    {
      hour: "10pm",
      weekday: "Sun",
      value: 3403
    },
    {
      hour: "11pm",
      weekday: "Sun",
      value: 3323
    },
    {
      hour: "12pm",
      weekday: "Mon",
      value: 3346
    },
    {
      hour: "1am",
      weekday: "Mon",
      value: 2725
    },
    {
      hour: "2am",
      weekday: "Mon",
      value: 3052
    },
    {
      hour: "3am",
      weekday: "Mon",
      value: 3876
    },
    {
      hour: "4am",
      weekday: "Mon",
      value: 4453
    },
    {
      hour: "5am",
      weekday: "Mon",
      value: 3972
    },
    {
      hour: "6am",
      weekday: "Mon",
      value: 4644
    },
    {
      hour: "7am",
      weekday: "Mon",
      value: 5715
    },
    {
      hour: "8am",
      weekday: "Mon",
      value: 7080
    },
    {
      hour: "9am",
      weekday: "Mon",
      value: 8022
    },
    {
      hour: "10am",
      weekday: "Mon",
      value: 8446
    },
    {
      hour: "11am",
      weekday: "Mon",
      value: 9313
    },
    {
      hour: "12am",
      weekday: "Mon",
      value: 9011
    },
    {
      hour: "1pm",
      weekday: "Mon",
      value: 8508
    },
    {
      hour: "2pm",
      weekday: "Mon",
      value: 8515
    },
    {
      hour: "3pm",
      weekday: "Mon",
      value: 8399
    },
    {
      hour: "4pm",
      weekday: "Mon",
      value: 8649
    },
    {
      hour: "5pm",
      weekday: "Mon",
      value: 7869
    },
    {
      hour: "6pm",
      weekday: "Mon",
      value: 6933
    },
    {
      hour: "7pm",
      weekday: "Mon",
      value: 5969
    },
    {
      hour: "8pm",
      weekday: "Mon",
      value: 5552
    },
    {
      hour: "9pm",
      weekday: "Mon",
      value: 5434
    },
    {
      hour: "10pm",
      weekday: "Mon",
      value: 5070
    },
    {
      hour: "11pm",
      weekday: "Mon",
      value: 4851
    },
    {
      hour: "12pm",
      weekday: "Tue",
      value: 4468
    },
    {
      hour: "1am",
      weekday: "Tue",
      value: 3306
    },
    {
      hour: "2am",
      weekday: "Tue",
      value: 3906
    },
    {
      hour: "3am",
      weekday: "Tue",
      value: 4413
    },
    {
      hour: "4am",
      weekday: "Tue",
      value: 4726
    },
    {
      hour: "5am",
      weekday: "Tue",
      value: 4584
    },
    {
      hour: "6am",
      weekday: "Tue",
      value: 5717
    },
    {
      hour: "7am",
      weekday: "Tue",
      value: 6504
    },
    {
      hour: "8am",
      weekday: "Tue",
      value: 8104
    },
    {
      hour: "9am",
      weekday: "Tue",
      value: 8813
    },
    {
      hour: "10am",
      weekday: "Tue",
      value: 9278
    },
    {
      hour: "11am",
      weekday: "Tue",
      value: 10425
    },
    {
      hour: "12am",
      weekday: "Tue",
      value: 10137
    },
    {
      hour: "1pm",
      weekday: "Tue",
      value: 9290
    },
    {
      hour: "2pm",
      weekday: "Tue",
      value: 9255
    },
    {
      hour: "3pm",
      weekday: "Tue",
      value: 9614
    },
    {
      hour: "4pm",
      weekday: "Tue",
      value: 9713
    },
    {
      hour: "5pm",
      weekday: "Tue",
      value: 9667
    },
    {
      hour: "6pm",
      weekday: "Tue",
      value: 8774
    },
    {
      hour: "7pm",
      weekday: "Tue",
      value: 8649
    },
    {
      hour: "8pm",
      weekday: "Tue",
      value: 9937
    },
    {
      hour: "9pm",
      weekday: "Tue",
      value: 10286
    },
    {
      hour: "10pm",
      weekday: "Tue",
      value: 9175
    },
    {
      hour: "11pm",
      weekday: "Tue",
      value: 8581
    },
    {
      hour: "12pm",
      weekday: "Wed",
      value: 8145
    },
    {
      hour: "1am",
      weekday: "Wed",
      value: 7177
    },
    {
      hour: "2am",
      weekday: "Wed",
      value: 5657
    },
    {
      hour: "3am",
      weekday: "Wed",
      value: 6802
    },
    {
      hour: "4am",
      weekday: "Wed",
      value: 8159
    },
    {
      hour: "5am",
      weekday: "Wed",
      value: 8449
    },
    {
      hour: "6am",
      weekday: "Wed",
      value: 9453
    },
    {
      hour: "7am",
      weekday: "Wed",
      value: 9947
    },
    {
      hour: "8am",
      weekday: "Wed",
      value: 11471
    },
    {
      hour: "9am",
      weekday: "Wed",
      value: 12492
    },
    {
      hour: "10am",
      weekday: "Wed",
      value: 9388
    },
    {
      hour: "11am",
      weekday: "Wed",
      value: 9928
    },
    {
      hour: "12am",
      weekday: "Wed",
      value: 9644
    },
    {
      hour: "1pm",
      weekday: "Wed",
      value: 9034
    },
    {
      hour: "2pm",
      weekday: "Wed",
      value: 8964
    },
    {
      hour: "3pm",
      weekday: "Wed",
      value: 9069
    },
    {
      hour: "4pm",
      weekday: "Wed",
      value: 8898
    },
    {
      hour: "5pm",
      weekday: "Wed",
      value: 8322
    },
    {
      hour: "6pm",
      weekday: "Wed",
      value: 6909
    },
    {
      hour: "7pm",
      weekday: "Wed",
      value: 5810
    },
    {
      hour: "8pm",
      weekday: "Wed",
      value: 5151
    },
    {
      hour: "9pm",
      weekday: "Wed",
      value: 4911
    },
    {
      hour: "10pm",
      weekday: "Wed",
      value: 4487
    },
    {
      hour: "11pm",
      weekday: "Wed",
      value: 4118
    },
    {
      hour: "12pm",
      weekday: "Thu",
      value: 3689
    },
    {
      hour: "1am",
      weekday: "Thu",
      value: 3081
    },
    {
      hour: "2am",
      weekday: "Thu",
      value: 6525
    },
    {
      hour: "3am",
      weekday: "Thu",
      value: 6228
    },
    {
      hour: "4am",
      weekday: "Thu",
      value: 6917
    },
    {
      hour: "5am",
      weekday: "Thu",
      value: 6568
    },
    {
      hour: "6am",
      weekday: "Thu",
      value: 6405
    },
    {
      hour: "7am",
      weekday: "Thu",
      value: 8106
    },
    {
      hour: "8am",
      weekday: "Thu",
      value: 8542
    },
    {
      hour: "9am",
      weekday: "Thu",
      value: 8501
    },
    {
      hour: "10am",
      weekday: "Thu",
      value: 8802
    },
    {
      hour: "11am",
      weekday: "Thu",
      value: 9420
    },
    {
      hour: "12am",
      weekday: "Thu",
      value: 8966
    },
    {
      hour: "1pm",
      weekday: "Thu",
      value: 8135
    },
    {
      hour: "2pm",
      weekday: "Thu",
      value: 8224
    },
    {
      hour: "3pm",
      weekday: "Thu",
      value: 8387
    },
    {
      hour: "4pm",
      weekday: "Thu",
      value: 8218
    },
    {
      hour: "5pm",
      weekday: "Thu",
      value: 7641
    },
    {
      hour: "6pm",
      weekday: "Thu",
      value: 6469
    },
    {
      hour: "7pm",
      weekday: "Thu",
      value: 5441
    },
    {
      hour: "8pm",
      weekday: "Thu",
      value: 4952
    },
    {
      hour: "9pm",
      weekday: "Thu",
      value: 4643
    },
    {
      hour: "10pm",
      weekday: "Thu",
      value: 4393
    },
    {
      hour: "11pm",
      weekday: "Thu",
      value: 4017
    },
    {
      hour: "12pm",
      weekday: "Fri",
      value: 4022
    },
    {
      hour: "1am",
      weekday: "Fri",
      value: 3063
    },
    {
      hour: "2am",
      weekday: "Fri",
      value: 3638
    },
    {
      hour: "3am",
      weekday: "Fri",
      value: 3968
    },
    {
      hour: "4am",
      weekday: "Fri",
      value: 4070
    },
    {
      hour: "5am",
      weekday: "Fri",
      value: 4019
    },
    {
      hour: "6am",
      weekday: "Fri",
      value: 4548
    },
    {
      hour: "7am",
      weekday: "Fri",
      value: 5465
    },
    {
      hour: "8am",
      weekday: "Fri",
      value: 6909
    },
    {
      hour: "9am",
      weekday: "Fri",
      value: 7706
    },
    {
      hour: "10am",
      weekday: "Fri",
      value: 7867
    },
    {
      hour: "11am",
      weekday: "Fri",
      value: 8615
    },
    {
      hour: "12am",
      weekday: "Fri",
      value: 8218
    },
    {
      hour: "1pm",
      weekday: "Fri",
      value: 7604
    },
    {
      hour: "2pm",
      weekday: "Fri",
      value: 7429
    },
    {
      hour: "3pm",
      weekday: "Fri",
      value: 7488
    },
    {
      hour: "4pm",
      weekday: "Fri",
      value: 7493
    },
    {
      hour: "5pm",
      weekday: "Fri",
      value: 6998
    },
    {
      hour: "6pm",
      weekday: "Fri",
      value: 5941
    },
    {
      hour: "7pm",
      weekday: "Fri",
      value: 5068
    },
    {
      hour: "8pm",
      weekday: "Fri",
      value: 4636
    },
    {
      hour: "9pm",
      weekday: "Fri",
      value: 4241
    },
    {
      hour: "10pm",
      weekday: "Fri",
      value: 3858
    },
    {
      hour: "11pm",
      weekday: "Fri",
      value: 3833
    },
    {
      hour: "12pm",
      weekday: "Sat",
      value: 3503
    },
    {
      hour: "1am",
      weekday: "Sat",
      value: 2842
    },
    {
      hour: "2am",
      weekday: "Sat",
      value: 2808
    },
    {
      hour: "3am",
      weekday: "Sat",
      value: 2399
    },
    {
      hour: "4am",
      weekday: "Sat",
      value: 2280
    },
    {
      hour: "5am",
      weekday: "Sat",
      value: 2139
    },
    {
      hour: "6am",
      weekday: "Sat",
      value: 2527
    },
    {
      hour: "7am",
      weekday: "Sat",
      value: 2940
    },
    {
      hour: "8am",
      weekday: "Sat",
      value: 3066
    },
    {
      hour: "9am",
      weekday: "Sat",
      value: 3494
    },
    {
      hour: "10am",
      weekday: "Sat",
      value: 3287
    },
    {
      hour: "11am",
      weekday: "Sat",
      value: 3416
    },
    {
      hour: "12am",
      weekday: "Sat",
      value: 3432
    },
    {
      hour: "1pm",
      weekday: "Sat",
      value: 3523
    },
    {
      hour: "2pm",
      weekday: "Sat",
      value: 3542
    },
    {
      hour: "3pm",
      weekday: "Sat",
      value: 3347
    },
    {
      hour: "4pm",
      weekday: "Sat",
      value: 3292
    },
    {
      hour: "5pm",
      weekday: "Sat",
      value: 3416
    },
    {
      hour: "6pm",
      weekday: "Sat",
      value: 3131
    },
    {
      hour: "7pm",
      weekday: "Sat",
      value: 3057
    },
    {
      hour: "8pm",
      weekday: "Sat",
      value: 3227
    },
    {
      hour: "9pm",
      weekday: "Sat",
      value: 3060
    },
    {
      hour: "10pm",
      weekday: "Sat",
      value: 2855
    },
    {
      hour: "11pm",
      weekday: "Sat",
      value: 2625
    }
  ],
  account1: [],
  sitVisit: [
    {
      date: "2018-01-13",
      price: 135
    },
    {
      date: "2018-01-14",
      price: 187
    },
    {
      date: "2018-01-15",
      price: 180
    },
    {
      date: "2018-01-16",
      price: 222
    },
    {
      date: "2018-01-17",
      price: 185
    },
    {
      date: "2018-01-18",
      price: 195
    },
    {
      date: "2018-01-19",
      price: 158
    }
  ],
  siteVisitData: {
    list: [
      {
        date: "8-11-2016",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 68,
        arpu: 43.3,
        arpuPro: 43,
        ecpi: 29.7,
        ecpiPro: 29,
        roi: 3.25,
        roiPro: 53,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      },
      {
        date: "15-10-2016	",
        click: 886,
        clickPro: 80,
        cost: 485,
        costPro: 48,
        ctr: 468,
        ctrPro: 76,
        arpu: 53.3,
        arpuPro: 33,
        ecpi: 85.7,
        ecpiPro: 97,
        roi: 13.25,
        roiPro: 81,
        revenue: [10, 55],
        revenuePro: 60,
        conversions: 33.8,
        conversionsPro: 75
      },
      {
        date: "8-8-2017",
        click: 186,
        clickPro: 40,
        cost: 985,
        costPro: 27,
        ctr: 368,
        ctrPro: 38,
        arpu: 93.3,
        arpuPro: 68,
        ecpi: 59.7,
        ecpiPro: 59,
        roi: 63.25,
        roiPro: 84,
        revenue: [10, 55],
        revenuePro: 50,
        conversions: 54.8,
        conversionsPro: 84
      },
      {
        date: "11-02-2019",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 768,
        arpu: 43.3,
        arpuPro: 43.3,
        ecpi: 29.7,
        ecpiPro: 29.7,
        roi: 3.25,
        roiPro: 25,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      }
    ]
  },
  siteVisitData2: {
    list: [
      {
        date: "8-11-2016",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 68,
        arpu: 43,
        arpuPro: 43,
        ecpi: 29.7,
        ecpiPro: 29,
        roi: 3.25,
        roiPro: 53,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      },
      {
        date: "15-10-2016	",
        click: 886,
        clickPro: 80,
        cost: 485,
        costPro: 48,
        ctr: 468,
        ctrPro: 76,
        arpu: 53.3,
        arpuPro: 33,
        ecpi: 85.7,
        ecpiPro: 97,
        roi: 13.25,
        roiPro: 81,
        revenue: [10, 55],
        revenuePro: 60,
        conversions: 33.8,
        conversionsPro: 75
      },
      {
        date: "8-8-2017",
        click: 186,
        clickPro: 40,
        cost: 985,
        costPro: 27,
        ctr: 368,
        ctrPro: 38,
        arpu: 93.3,
        arpuPro: 68,
        ecpi: 59.7,
        ecpiPro: 59,
        roi: 63.25,
        roiPro: 84,
        revenue: [10, 55],
        revenuePro: 50,
        conversions: 54.8,
        conversionsPro: 84
      },
      {
        date: "11-02-2019",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 768,
        arpu: 43.3,
        arpuPro: 43.3,
        ecpi: 29.7,
        ecpiPro: 29.7,
        roi: 3.25,
        roiPro: 25,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      },
      {
        date: "8-11-2016",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 68,
        arpu: 43.3,
        arpuPro: 43,
        ecpi: 29.7,
        ecpiPro: 29,
        roi: 3.25,
        roiPro: 53,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      },
      {
        date: "15-10-2016	",
        click: 886,
        clickPro: 80,
        cost: 485,
        costPro: 48,
        ctr: 468,
        ctrPro: 76,
        arpu: 53.3,
        arpuPro: 33,
        ecpi: 85.7,
        ecpiPro: 97,
        roi: 13.25,
        roiPro: 81,
        revenue: [10, 55],
        revenuePro: 60,
        conversions: 33.8,
        conversionsPro: 75
      },
      {
        date: "8-8-2017",
        click: 186,
        clickPro: 40,
        cost: 985,
        costPro: 27,
        ctr: 368,
        ctrPro: 38,
        arpu: 93,
        arpuPro: 68,
        ecpi: 59.7,
        ecpiPro: 59,
        roi: 63.25,
        roiPro: 84,
        revenue: [10, 55],
        revenuePro: 50,
        conversions: 54.8,
        conversionsPro: 84
      },
      {
        date: "11-02-2019",
        click: 786,
        clickPro: 50,
        cost: 485,
        costPro: 85,
        ctr: 768,
        ctrPro: 768,
        arpu: 43.3,
        arpuPro: 43.3,
        ecpi: 29.7,
        ecpiPro: 29.7,
        roi: 3.25,
        roiPro: 25,
        revenue: [10, 55],
        revenuePro: 80,
        conversions: 33.8,
        conversionsPro: 33
      }
    ]
  },
  siteTraffic: [
    {
      date: "2018-01-01",
      steps: 4561
    },
    {
      date: "2018-01-02",
      steps: 5687
    },
    {
      date: "2018-01-03",
      steps: 6348
    },
    {
      date: "2018-01-04",
      steps: 4878
    },
    {
      date: "2018-01-05",
      steps: 9867
    },
    {
      date: "2018-01-06",
      steps: 7561
    },
    {
      date: "2018-01-07",
      steps: 1287
    },
    {
      date: "2018-01-08",
      steps: 3298
    },
    {
      date: "2018-01-09",
      steps: 5697
    },
    {
      date: "2018-01-10",
      steps: 4878
    },
    {
      date: "2018-01-11",
      steps: 8788
    },
    {
      date: "2018-01-12",
      steps: 9560
    },
    {
      date: "2018-01-13",
      steps: 11687
    },
    {
      date: "2018-01-14",
      steps: 5878
    },
    {
      date: "2018-01-15",
      steps: 9789
    },
    {
      date: "2018-01-16",
      steps: 3987
    },
    {
      date: "2018-01-17",
      steps: 5898
    },
    {
      date: "2018-01-18",
      steps: 9878
    },
    {
      date: "2018-01-19",
      steps: 13687
    },
    {
      date: "2018-01-20",
      steps: 6789
    },
    {
      date: "2018-01-21",
      steps: 4531
    },
    {
      date: "2018-01-22",
      steps: 5856
    },
    {
      date: "2018-01-23",
      steps: 5737
    },
    {
      date: "2018-01-24",
      steps: 9987
    },
    {
      date: "2018-01-25",
      steps: 16457
    },
    {
      date: "2018-01-26",
      steps: 7878
    },
    {
      date: "2018-01-27",
      steps: 6845
    },
    {
      date: "2018-01-28",
      steps: 4659
    },
    {
      date: "2018-01-29",
      steps: 7892
    },
    {
      date: "2018-01-30",
      steps: 7362
    },
    {
      date: "2018-01-31",
      steps: 3268
    },
    {
      date: "2018-02-01",
      steps: 4561
    },
    {
      date: "2018-02-02",
      steps: 5687
    },
    {
      date: "2018-02-03",
      steps: 6348
    },
    {
      date: "2018-02-04",
      steps: 4878
    },
    {
      date: "2018-02-05",
      steps: 9867
    },
    {
      date: "2018-02-06",
      steps: 7561
    },
    {
      date: "2018-02-07",
      steps: 1287
    },
    {
      date: "2018-02-08",
      steps: 3298
    },
    {
      date: "2018-02-09",
      steps: 5697
    },
    {
      date: "2018-02-10",
      steps: 4878
    },
    {
      date: "2018-02-11",
      steps: 8788
    },
    {
      date: "2018-02-12",
      steps: 9560
    },
    {
      date: "2018-02-13",
      steps: 11687
    },
    {
      date: "2018-02-14",
      steps: 5878
    },
    {
      date: "2018-02-15",
      steps: 9789
    },
    {
      date: "2018-02-16",
      steps: 3987
    },
    {
      date: "2018-02-17",
      steps: 5898
    },
    {
      date: "2018-02-18",
      steps: 9878
    },
    {
      date: "2018-02-19",
      steps: 13687
    },
    {
      date: "2018-02-20",
      steps: 6789
    },
    {
      date: "2018-02-21",
      steps: 4531
    },
    {
      date: "2018-02-22",
      steps: 5856
    },
    {
      date: "2018-02-23",
      steps: 5737
    },
    {
      date: "2018-02-24",
      steps: 9987
    },
    {
      date: "2018-02-25",
      steps: 16457
    },
    {
      date: "2018-02-26",
      steps: 7878
    },
    {
      date: "2018-02-27",
      steps: 6845
    },
    {
      date: "2018-02-28",
      steps: 4659
    }
  ],
  databtc: [],
  dataeth: [],
  dataltc: [],
  cryptoStatist: [
    {
      status: "+",
      name: "Bitcoin",
      price: "145.85"
    },
    {
      status: "-",
      name: "Ethereum",
      price: "6.368"
    },
    {
      status: "+",
      name: "Ripple",
      price: "458.63"
    },
    {
      status: "-",
      name: "Neo",
      price: "5.631"
    },
    {
      status: "-",
      name: "Bitcoin",
      price: "75.86"
    },
    {
      status: "+",
      name: "Ethereum",
      price: "453.63"
    },
    {
      status: "+",
      name: "Bitcoin",
      price: "145.85"
    },
    {
      status: "-",
      name: "Ethereum",
      price: "6.368"
    },
    {
      status: "+",
      name: "Ripple",
      price: "458.63"
    },
    {
      status: "-",
      name: "Neo",
      price: "5.631"
    },
    {
      status: "-",
      name: "Bitcoin",
      price: "75.86"
    },
    {
      status: "+",
      name: "Ethereum",
      price: "453.63"
    }
  ],
  coinData: [
    {
      coin: "BTC",
      color: "yellow",
      badgeColor: "warning",
      price: "6,485.50",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.90"
    },
    {
      coin: "ETH",
      color: "red",
      badgeColor: "danger",
      price: "0.33698",
      cap: "15.50",
      volume: "6.03",
      supply: "65.45",
      change: "0.17"
    },
    {
      coin: "RPL",
      color: "blue",
      badgeColor: "primary",
      price: "9.56986",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.42"
    },

    {
      coin: "BTC",
      color: "green",
      badgeColor: "success",
      price: "6,485.50",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.90"
    },
    {
      coin: "ETH",
      color: "red",
      badgeColor: "danger",
      price: "6,485.50",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.90"
    },
    {
      coin: "BTC",
      color: "yellow",
      badgeColor: "warning",
      price: "6,485.50",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.90"
    },
    {
      coin: "ETH",
      color: "red",
      badgeColor: "danger",
      price: "0.33698",
      cap: "15.50",
      volume: "6.03",
      supply: "65.45",
      change: "0.17"
    },
    {
      coin: "RPL",
      color: "blue",
      badgeColor: "primary",
      price: "9.56986",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.42"
    },
    {
      coin: "BTC",
      color: "green",
      badgeColor: "success",
      price: "6,485.50",
      cap: "56.58",
      volume: "8.05",
      supply: "65.45",
      change: "0.90"
    }
  ],
  sitCryptoStatics: [],
  supportStatic: {
    staticData: [
      {
        static: 10,
        text: "Open"
      },
      {
        static: 5,
        text: "Running"
      },
      {
        static: 3,
        text: "Solved"
      }
    ],
    staticChart: [
      {
        date: "2018-01-1",
        price: 180
      },
      {
        date: "2018-01-2",
        price: 252
      },
      {
        date: "2018-01-3",
        price: 185
      },
      {
        date: "2018-01-4",
        price: 189
      },
      {
        date: "2018-01-5",
        price: 158
      },
      {
        date: "2018-01-6",
        price: 200
      },
      {
        date: "2018-01-7",
        price: 187
      },
      {
        date: "2018-01-8",
        price: 180
      },
      {
        date: "2018-01-9",
        price: 252
      },
      {
        date: "2018-01-10",
        price: 185
      },
      {
        date: "2018-01-11",
        price: 268
      },
      {
        date: "2018-01-12",
        price: 158
      },
      {
        date: "2018-01-13",
        price: 200
      },
      {
        date: "2018-01-14",
        price: 187
      },
      {
        date: "2018-01-15",
        price: 180
      },
      {
        date: "2018-01-16",
        price: 252
      },
      {
        date: "2018-01-17",
        price: 185
      },
      {
        date: "2018-01-18",
        price: 250
      },
      {
        date: "2018-01-19",
        price: 158
      },
      {
        date: "2018-01-20",
        price: 200
      },
      {
        date: "2018-01-21",
        price: 187
      },
      {
        date: "2018-01-22",
        price: 180
      },
      {
        date: "2018-01-23",
        price: 252
      },
      {
        date: "2018-01-24",
        price: 185
      },
      {
        date: "2018-01-25",
        price: 295
      },
      {
        date: "2018-01-26",
        price: 158
      },
      {
        date: "2018-01-27",
        price: 200
      },
      {
        date: "2018-01-28",
        price: 90
      }
    ]
  },
  supportStatic1: {
    staticData: [
      {
        static: 5,
        text: "pending"
      },
      {
        static: "75+",
        text: "Satisfied clients"
      }
    ],
    staticChart: [
      {
        date: "2018-01-1",
        price: 180
      },
      {
        date: "2018-01-2",
        price: 252
      },
      {
        date: "2018-01-3",
        price: 185
      },
      {
        date: "2018-01-4",
        price: 189
      },
      {
        date: "2018-01-5",
        price: 158
      },
      {
        date: "2018-01-6",
        price: 200
      },
      {
        date: "2018-01-7",
        price: 187
      },
      {
        date: "2018-01-8",
        price: 180
      },
      {
        date: "2018-01-9",
        price: 252
      },
      {
        date: "2018-01-10",
        price: 185
      },
      {
        date: "2018-01-11",
        price: 268
      },
      {
        date: "2018-01-12",
        price: 158
      },
      {
        date: "2018-01-13",
        price: 200
      },
      {
        date: "2018-01-14",
        price: 187
      },
      {
        date: "2018-01-15",
        price: 180
      },
      {
        date: "2018-01-16",
        price: 252
      },
      {
        date: "2018-01-17",
        price: 185
      },
      {
        date: "2018-01-18",
        price: 250
      },
      {
        date: "2018-01-19",
        price: 158
      },
      {
        date: "2018-01-20",
        price: 200
      },
      {
        date: "2018-01-21",
        price: 187
      },
      {
        date: "2018-01-22",
        price: 180
      },
      {
        date: "2018-01-23",
        price: 252
      },
      {
        date: "2018-01-24",
        price: 185
      },
      {
        date: "2018-01-25",
        price: 295
      },
      {
        date: "2018-01-26",
        price: 158
      },
      {
        date: "2018-01-27",
        price: 200
      },
      {
        date: "2018-01-28",
        price: 90
      }
    ]
  },
  supportStatic2: {
    staticData: [
      {
        static: 80,
        text: "Starred"
      },
      {
        static: 5,
        text: "Reopen"
      },
      {
        static: "14+",
        text: "Reassigned"
      }
    ],
    staticChart: [
      {
        date: "2018-01-1",
        price: 180
      },
      {
        date: "2018-01-2",
        price: 252
      },
      {
        date: "2018-01-3",
        price: 185
      },
      {
        date: "2018-01-4",
        price: 189
      },
      {
        date: "2018-01-5",
        price: 158
      },
      {
        date: "2018-01-6",
        price: 200
      },
      {
        date: "2018-01-7",
        price: 187
      },
      {
        date: "2018-01-8",
        price: 180
      },
      {
        date: "2018-01-9",
        price: 252
      },
      {
        date: "2018-01-10",
        price: 185
      },
      {
        date: "2018-01-11",
        price: 268
      },
      {
        date: "2018-01-12",
        price: 158
      },
      {
        date: "2018-01-13",
        price: 200
      },
      {
        date: "2018-01-14",
        price: 187
      },
      {
        date: "2018-01-15",
        price: 180
      },
      {
        date: "2018-01-16",
        price: 252
      },
      {
        date: "2018-01-17",
        price: 185
      },
      {
        date: "2018-01-18",
        price: 250
      },
      {
        date: "2018-01-19",
        price: 158
      },
      {
        date: "2018-01-20",
        price: 200
      },
      {
        date: "2018-01-21",
        price: 187
      },
      {
        date: "2018-01-22",
        price: 180
      },
      {
        date: "2018-01-23",
        price: 252
      },
      {
        date: "2018-01-24",
        price: 185
      },
      {
        date: "2018-01-25",
        price: 295
      },
      {
        date: "2018-01-26",
        price: 158
      },
      {
        date: "2018-01-27",
        price: 200
      },
      {
        date: "2018-01-28",
        price: 90
      }
    ]
  },
  satisfactionChart:[
    {
      sector: "Very Poor [66%]",
      size: 8
    },
    {
      sector: "Satisfied [50%]",
      size: 14.6
    },
    {
      sector: "Very Satisfied [40%]",
      size: 22.5
    },
    {
      sector: "Poor [30%]",
      size: 8
    }
  ]
};

//Account analytic info Rendom Start here
let grothactual = 100;
let actual = 200;
let plan = 300;

for (let i = 1; i < 120; i++) {
  grothactual += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
  actual = Math.round(
    grothactual +
      Math.random() * 5 +
      i / 5 -
      (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2
  );
  plan = Math.round(
    actual +
      Math.random() * 5 +
      i / 5 -
      (Math.random() < 0.5 ? 1 : -1) * Math.random() * 3
  );
  Data.account1.push({
    date: new Date(2018, 0, i),
    grothactual: grothactual,
    actual: actual,
    plan: plan
  });
}
//Account analytic info Rendom End here

//Crypto analytic info Rendom Start here
let visits = 10;

for (let i = 0; i <= 80; i++) {
  visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  Data.databtc.push({
    date: new Date().setSeconds(i - 30),
    value: Math.abs(visits)
  });
}

for (let i = 0; i <= 80; i++) {
  visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  Data.dataeth.push({
    date: new Date().setSeconds(i - 30),
    value: Math.abs(visits)
  });
}

for (let i = 0; i <= 80; i++) {
  visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  Data.dataltc.push({
    date: new Date().setSeconds(i - 30),
    value: Math.abs(visits)
  });
}

let visitsCount = 10;
for (let i = 0; i <= 30; i++) {
  visitsCount -= Math.round(
    (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
  );
  visitsCount = visitsCount > -5 && visitsCount < 5 ? visitsCount : 0;
  visitsCount = visitsCount < 0 ? 0 : visitsCount;
  Data.sitCryptoStatics.push({
    date: new Date().setSeconds(i - 30),
    value: visitsCount
  });
}

//Crypto analytic info Rendom End here

export default Data;
