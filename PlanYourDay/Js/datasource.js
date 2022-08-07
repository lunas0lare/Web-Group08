window.applyCategoryColor = function (args, currentView) {
    var categoryColor = args.data.CategoryColor;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Agenda') {
        (args.element.firstChild).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
};

window.scheduleData = [
   
];

window.timelineData = [
   
];

window.zooEventsData = [
    
];

window.eventsData = [
   
];

window.employeeEventData = [
   
];

window.leaveData = [
   
];

window.webinarData = [
   
];

window.resourceData = [

];

window.timelineResourceData = [
];

window.resourceConferenceData = [
    {
        Id: 1,
        Subject: 'Burning Man',
        StartTime: new Date(2021, 5, 1, 15, 0),
        EndTime: new Date(2021, 5, 1, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 2,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2021, 5, 2, 12, 0),
        EndTime: new Date(2021, 5, 2, 14, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 3,
        Subject: 'Techweek',
        StartTime: new Date(2021, 5, 2, 15, 0),
        EndTime: new Date(2021, 5, 2, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 4,
        Subject: 'Content Marketing World',
        StartTime: new Date(2021, 5, 2, 18, 0),
        EndTime: new Date(2021, 5, 2, 20, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 5,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2021, 5, 3, 10, 0),
        EndTime: new Date(2021, 5, 3, 12, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 6,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2021, 5, 3, 13, 0),
        EndTime: new Date(2021, 5, 3, 15, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 7,
        Subject: 'Grow Conference',
        StartTime: new Date(2021, 5, 3, 16, 0),
        EndTime: new Date(2021, 5, 3, 18, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 8,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2021, 5, 3, 19, 0),
        EndTime: new Date(2021, 5, 3, 21, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 9,
        Subject: 'Blogcademy',
        StartTime: new Date(2021, 5, 4, 10, 0),
        EndTime: new Date(2021, 5, 4, 11, 30),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 10,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2021, 5, 4, 13, 0),
        EndTime: new Date(2021, 5, 4, 15, 30),
        ConferenceId: [1, 2]
    }, {
        Id: 11,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2021, 5, 4, 9, 0),
        EndTime: new Date(2021, 5, 4, 9, 45),
        ConferenceId: [2, 3]
    }, {
        Id: 12,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2021, 5, 5, 12, 0),
        EndTime: new Date(2021, 5, 5, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 13,
        Subject: 'The Human Gathering',
        StartTime: new Date(2021, 5, 5, 15, 0),
        EndTime: new Date(2021, 5, 5, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 14,
        Subject: 'Web Summit',
        StartTime: new Date(2021, 5, 5, 18, 0),
        EndTime: new Date(2021, 5, 5, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 15,
        Subject: 'Funnel Hacking Live',
        StartTime: new Date(2021, 5, 6, 12, 0),
        EndTime: new Date(2021, 5, 6, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 16,
        Subject: 'Data Science Conference',
        StartTime: new Date(2021, 5, 6, 15, 0),
        EndTime: new Date(2021, 5, 6, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 17,
        Subject: 'Powerful Living Experience',
        StartTime: new Date(2021, 5, 6, 21, 0),
        EndTime: new Date(2021, 5, 6, 23, 30),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 18,
        Subject: 'World Domination Summit',
        StartTime: new Date(2021, 5, 7, 12, 0),
        EndTime: new Date(2021, 5, 7, 14, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 19,
        Subject: 'Burning Man',
        StartTime: new Date(2021, 5, 7, 15, 0),
        EndTime: new Date(2021, 5, 7, 17, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 20,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2021, 5, 7, 18, 0),
        EndTime: new Date(2021, 5, 7, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 21,
        Subject: 'Techweek',
        StartTime: new Date(2021, 5, 8, 12, 0),
        EndTime: new Date(2021, 5, 8, 14, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 22,
        Subject: 'Content Marketing World',
        StartTime: new Date(2021, 5, 8, 15, 0),
        EndTime: new Date(2021, 5, 8, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 23,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2021, 5, 8, 20, 30),
        EndTime: new Date(2021, 5, 8, 21, 30),
        ConferenceId: [1, 3]
    }, {
        Id: 24,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2021, 5, 9, 12, 0),
        EndTime: new Date(2021, 5, 9, 14, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 25,
        Subject: 'Grow Conference',
        StartTime: new Date(2021, 5, 9, 15, 0),
        EndTime: new Date(2021, 5, 9, 17, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 26,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2021, 5, 9, 18, 0),
        EndTime: new Date(2021, 5, 9, 20, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 27,
        Subject: 'Blogcademy',
        StartTime: new Date(2021, 5, 10, 12, 0),
        EndTime: new Date(2021, 5, 10, 14, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 28,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2021, 5, 10, 15, 0),
        EndTime: new Date(2021, 5, 10, 17, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 29,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2021, 5, 10, 18, 0),
        EndTime: new Date(2021, 5, 10, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 30,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2021, 5, 11, 12, 0),
        EndTime: new Date(2021, 5, 11, 14, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 31,
        Subject: 'The Human Gathering',
        StartTime: new Date(2021, 5, 11, 15, 0),
        EndTime: new Date(2021, 5, 11, 17, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 32,
        Subject: 'Web Summit',
        StartTime: new Date(2021, 5, 11, 18, 0),
        EndTime: new Date(2021, 5, 11, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 33,
        Subject: 'Funnel Hacking Live',
        StartTime: new Date(2021, 5, 12, 14, 0),
        EndTime: new Date(2021, 5, 12, 16, 0),
        ConferenceId: [1]
    }, {
        Id: 34,
        Subject: 'Data Science Conference',
        StartTime: new Date(2021, 5, 12, 14, 0),
        EndTime: new Date(2021, 5, 12, 16, 0),
        ConferenceId: [2]
    }, {
        Id: 35,
        Subject: 'Powerful Living Experience',
        StartTime: new Date(2021, 5, 12, 18, 0),
        EndTime: new Date(2021, 5, 12, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 36,
        Subject: 'World Domination Summit',
        StartTime: new Date(2021, 5, 12, 18, 0),
        EndTime: new Date(2021, 5, 12, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 37,
        Subject: 'Burning Man',
        StartTime: new Date(2021, 5, 13, 14, 0),
        EndTime: new Date(2021, 5, 13, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 38,
        Subject: 'Data-Driven Economy',
        StartTime: new Date(2021, 5, 13, 14, 0),
        EndTime: new Date(2021, 5, 13, 16, 0),
        ConferenceId: [1]
    }, {
        Id: 39,
        Subject: 'Techweek',
        StartTime: new Date(2021, 5, 13, 18, 0),
        EndTime: new Date(2021, 5, 13, 20, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 40,
        Subject: 'Content Marketing World',
        StartTime: new Date(2021, 5, 13, 18, 0),
        EndTime: new Date(2021, 5, 13, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 41,
        Subject: 'B2B Marketing Forum',
        StartTime: new Date(2021, 5, 14, 14, 0),
        EndTime: new Date(2021, 5, 14, 16, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 42,
        Subject: 'Business Innovation Factory',
        StartTime: new Date(2021, 5, 14, 14, 0),
        EndTime: new Date(2021, 5, 14, 16, 0),
        ConferenceId: [2, 3]
    }, {
        Id: 43,
        Subject: 'Grow Conference',
        StartTime: new Date(2021, 5, 14, 18, 0),
        EndTime: new Date(2021, 5, 14, 20, 0),
        ConferenceId: [3]
    }, {
        Id: 44,
        Subject: 'Journalism Interactive',
        StartTime: new Date(2021, 5, 14, 18, 0),
        EndTime: new Date(2021, 5, 14, 20, 0),
        ConferenceId: [1, 2, 3]
    }, {
        Id: 45,
        Subject: 'Blogcademy',
        StartTime: new Date(2021, 5, 15, 14, 0),
        EndTime: new Date(2021, 5, 15, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 46,
        Subject: 'Sustainable Brands',
        StartTime: new Date(2021, 5, 15, 14, 0),
        EndTime: new Date(2021, 5, 15, 16, 0),
        ConferenceId: [1, 3]
    }, {
        Id: 47,
        Subject: 'Fashion Confidential',
        StartTime: new Date(2021, 5, 15, 18, 0),
        EndTime: new Date(2021, 5, 15, 20, 0),
        ConferenceId: [1, 2]
    }, {
        Id: 48,
        Subject: 'Mobile World Conference',
        StartTime: new Date(2021, 5, 15, 18, 0),
        EndTime: new Date(2021, 5, 15, 20, 0),
        ConferenceId: [2, 3]
    }
];

window.holidayData = [
    {
        Id: 401,
        Subject: 'Global Family Day',
        StartTime: new Date(2021, 0, 1),
        EndTime: new Date(2021, 0, 2),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 402,
        Subject: 'World Braille Day',
        StartTime: new Date(2021, 0, 4),
        EndTime: new Date(2021, 0, 5),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 403,
        Subject: 'World Literary Day',
        StartTime: new Date(2021, 0, 8),
        EndTime: new Date(2021, 0, 9),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 404,
        Subject: 'International Thank-You Day',
        StartTime: new Date(2021, 0, 11),
        EndTime: new Date(2021, 0, 12),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 405,
        Subject: 'World Leprosy Day',
        StartTime: new Date(2021, 0, 30),
        EndTime: new Date(2021, 0, 31),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 406,
        Subject: 'Darwin Day',
        StartTime: new Date(2021, 1, 12),
        EndTime: new Date(2021, 1, 13),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 407,
        Subject: 'International Mother Language Day',
        StartTime: new Date(2021, 1, 21),
        EndTime: new Date(2021, 1, 22),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 408,
        Subject: 'World Thinking Day',
        StartTime: new Date(2021, 1, 22),
        EndTime: new Date(2021, 1, 23),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 409,
        Subject: 'International Day of the Seal',
        StartTime: new Date(2021, 2, 1),
        EndTime: new Date(2021, 2, 2),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 410,
        Subject: 'International Women’s Day',
        StartTime: new Date(2021, 2, 8),
        EndTime: new Date(2021, 2, 9),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 411,
        Subject: 'World Book Day',
        StartTime: new Date(2021, 2, 14),
        EndTime: new Date(2021, 2, 15),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 412,
        Subject: 'World Frog Day',
        StartTime: new Date(2021, 2, 20),
        EndTime: new Date(2021, 2, 21),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 413,
        Subject: 'World Down Syndrome Day',
        StartTime: new Date(2021, 2, 21),
        EndTime: new Date(2021, 2, 22),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 414,
        Subject: 'World Day for Water',
        StartTime: new Date(2021, 2, 22),
        EndTime: new Date(2021, 2, 23),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 415,
        Subject: 'World Meteorological Day',
        StartTime: new Date(2021, 2, 23),
        EndTime: new Date(2021, 2, 24),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 416,
        Subject: 'International Children’s Book Day',
        StartTime: new Date(2021, 3, 2),
        EndTime: new Date(2021, 3, 3),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 417,
        Subject: 'World Health Day',
        StartTime: new Date(2021, 3, 7),
        EndTime: new Date(2021, 3, 8),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 418,
        Subject: 'International Special Librarian’s',
        StartTime: new Date(2021, 3, 13),
        EndTime: new Date(2021, 3, 14),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 419,
        Subject: 'International Creativity and Innovation Day',
        StartTime: new Date(2021, 3, 21),
        EndTime: new Date(2021, 3, 22),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 420,
        Subject: 'Earth Day',
        StartTime: new Date(2021, 3, 22),
        EndTime: new Date(2021, 3, 23),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 421,
        Subject: 'World Copyright Day',
        StartTime: new Date(2021, 3, 23),
        EndTime: new Date(2021, 3, 24),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 422,
        Subject: 'World Penguin Day',
        StartTime: new Date(2021, 3, 25),
        EndTime: new Date(2021, 3, 26),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 423,
        Subject: 'World Press Freedom Day',
        StartTime: new Date(2021, 4, 3),
        EndTime: new Date(2021, 4, 4),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 424,
        Subject: 'International Midwives Day',
        StartTime: new Date(2021, 4, 5),
        EndTime: new Date(2021, 4, 5),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 425,
        Subject: 'World Red Cross Day',
        StartTime: new Date(2021, 4, 8),
        EndTime: new Date(2021, 4, 9),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 426,
        Subject: 'World Lupus Day',
        StartTime: new Date(2021, 4, 10),
        EndTime: new Date(2021, 4, 11),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 427,
        Subject: 'International Nurses Day',
        StartTime: new Date(2021, 4, 12),
        EndTime: new Date(2021, 4, 12),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 428,
        Subject: 'IEEE Global Engineering Day',
        StartTime: new Date(2021, 4, 13),
        EndTime: new Date(2021, 4, 14),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 429,
        Subject: 'International Day of Families',
        StartTime: new Date(2021, 4, 15),
        EndTime: new Date(2021, 4, 16),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 430,
        Subject: 'International Museum Day',
        StartTime: new Date(2021, 4, 18),
        EndTime: new Date(2021, 4, 19),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 431,
        Subject: 'World Turtle Day',
        StartTime: new Date(2021, 4, 23),
        EndTime: new Date(2021, 4, 24),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 432,
        Subject: 'World No-Tobacco Day',
        StartTime: new Date(2021, 4, 31),
        EndTime: new Date(2021, 5, 1),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 433,
        Subject: 'World Ocean Day',
        StartTime: new Date(2021, 5, 8),
        EndTime: new Date(2021, 5, 9),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 434,
        Subject: 'World Blood Donor Day',
        StartTime: new Date(2021, 5, 14),
        EndTime: new Date(2021, 5, 15),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 435,
        Subject: 'World Day to Combat Desertification & Drought',
        StartTime: new Date(2021, 5, 17),
        EndTime: new Date(2021, 5, 18),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 436,
        Subject: 'World Refugee Day',
        StartTime: new Date(2021, 5, 20),
        EndTime: new Date(2021, 5, 21),
        IsAllDay: true,
        CalendarId: 4
    }, {
        Id: 437,
        Subject: 'International Day Against Drug Abuse & Trafficking',
        StartTime: new Date(2021, 5, 26),
        EndTime: new Date(2021, 5, 27),
        IsAllDay: true,
        CalendarId: 4
    }
];

window.birthdayData = [
    {
        Id: 301,
        Subject: 'Gladys Spellman',
        StartTime: new Date(2021, 2, 1),
        EndTime: new Date(2021, 2, 2),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 302,
        Subject: 'Susanna Salter',
        StartTime: new Date(2021, 2, 2),
        EndTime: new Date(2021, 2, 3),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 303,
        Subject: 'Dora Marsden',
        StartTime: new Date(2021, 2, 5),
        EndTime: new Date(2021, 2, 6),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 304,
        Subject: 'Anne Bonny',
        StartTime: new Date(2021, 2, 8),
        EndTime: new Date(2021, 2, 9),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 305,
        Subject: 'Clare Boothe Luce',
        StartTime: new Date(2021, 2, 10),
        EndTime: new Date(2021, 2, 11),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 306,
        Subject: 'Ethel Anderson',
        StartTime: new Date(2021, 2, 16),
        EndTime: new Date(2021, 2, 17),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 307,
        Subject: 'Louise Otto-Peters',
        StartTime: new Date(2021, 2, 26),
        EndTime: new Date(2021, 2, 27),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 308,
        Subject: 'Faith Leech',
        StartTime: new Date(2021, 2, 31),
        EndTime: new Date(2021, 3, 1),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 309,
        Subject: 'Wilhelmine Reichard',
        StartTime: new Date(2021, 3, 2),
        EndTime: new Date(2021, 3, 3),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 310,
        Subject: 'Janet Rowley',
        StartTime: new Date(2021, 3, 5),
        EndTime: new Date(2021, 3, 6),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 311,
        Subject: 'Kathleen Major',
        StartTime: new Date(2021, 3, 10),
        EndTime: new Date(2021, 3, 11),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 312,
        Subject: 'Kasturba Gandhi',
        StartTime: new Date(2021, 3, 11),
        EndTime: new Date(2021, 3, 12),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 313,
        Subject: 'Elizabeth Huckaby',
        StartTime: new Date(2021, 3, 14),
        EndTime: new Date(2021, 3, 15),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 314,
        Subject: 'Helene Hanff',
        StartTime: new Date(2021, 3, 15),
        EndTime: new Date(2021, 3, 16),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 315,
        Subject: 'Caresse Crosby',
        StartTime: new Date(2021, 3, 20),
        EndTime: new Date(2021, 3, 21),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 316,
        Subject: 'Angela Burdett-Coutts',
        StartTime: new Date(2021, 3, 21),
        EndTime: new Date(2021, 3, 22),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 317,
        Subject: 'Pandita Ramabai',
        StartTime: new Date(2021, 3, 23),
        EndTime: new Date(2021, 3, 24),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 318,
        Subject: 'Melissa Hayden',
        StartTime: new Date(2021, 3, 25),
        EndTime: new Date(2021, 3, 26),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 319,
        Subject: 'Mary Wollstonecraft',
        StartTime: new Date(2021, 3, 27),
        EndTime: new Date(2021, 3, 28),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 320,
        Subject: 'Mary Petty',
        StartTime: new Date(2021, 3, 29),
        EndTime: new Date(2021, 3, 30),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 321,
        Subject: 'Doris Fisher',
        StartTime: new Date(2021, 4, 2),
        EndTime: new Date(2021, 4, 3),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 322,
        Subject: 'Kay Petre',
        StartTime: new Date(2021, 4, 10),
        EndTime: new Date(2021, 4, 11),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 323,
        Subject: 'Williamina Fleming',
        StartTime: new Date(2021, 4, 15),
        EndTime: new Date(2021, 4, 16),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 324,
        Subject: 'Ondina Valla',
        StartTime: new Date(2021, 4, 20),
        EndTime: new Date(2021, 4, 21),
        IsAllDay: true,
        CalendarId: 3
    }, {
        Id: 325,
        Subject: 'Marie Menken',
        StartTime: new Date(2021, 4, 25),
        EndTime: new Date(2021, 4, 26),
        IsAllDay: true,
        CalendarId: 3
    }
];

window.companyData = [
    {
        Id: 201,
        Subject: 'Conference meeting',
        StartTime: new Date(2021, 2, 1),
        EndTime: new Date(2021, 2, 2),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 202,
        Subject: 'Product discussion',
        StartTime: new Date(2021, 2, 4),
        EndTime: new Date(2021, 2, 5),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 203,
        Subject: 'Companys growth related discussion',
        StartTime: new Date(2021, 2, 8),
        EndTime: new Date(2021, 2, 9),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 204,
        Subject: 'Customer issues',
        StartTime: new Date(2021, 2, 11),
        EndTime: new Date(2021, 2, 12),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 205,
        Subject: 'Development related chat',
        StartTime: new Date(2021, 2, 13),
        EndTime: new Date(2021, 2, 14),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 206,
        Subject: 'Product meeting',
        StartTime: new Date(2021, 2, 18),
        EndTime: new Date(2021, 2, 19),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 207,
        Subject: 'General discussion',
        StartTime: new Date(2021, 2, 21),
        EndTime: new Date(2021, 2, 22),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 208,
        Subject: 'Hike discussion',
        StartTime: new Date(2021, 2, 24),
        EndTime: new Date(2021, 2, 25),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 209,
        Subject: 'Customer meeting',
        StartTime: new Date(2021, 2, 28),
        EndTime: new Date(2021, 2, 29),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 210,
        Subject: 'New launch discussion',
        StartTime: new Date(2021, 2, 30),
        EndTime: new Date(2021, 2, 31),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 211,
        Subject: 'Conference Meeting',
        StartTime: new Date(2021, 3, 1),
        EndTime: new Date(2021, 3, 2),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 212,
        Subject: 'Product Discussion',
        StartTime: new Date(2021, 3, 3),
        EndTime: new Date(2021, 3, 4),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 213,
        Subject: 'Companys growth related issues',
        StartTime: new Date(2021, 3, 7),
        EndTime: new Date(2021, 3, 8),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 214,
        Subject: 'Customer issues',
        StartTime: new Date(2021, 3, 12),
        EndTime: new Date(2021, 3, 13),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 215,
        Subject: 'Development related chat',
        StartTime: new Date(2021, 3, 15),
        EndTime: new Date(2021, 3, 16),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 216,
        Subject: 'Product meeting',
        StartTime: new Date(2021, 3, 18),
        EndTime: new Date(2021, 3, 19),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 217,
        Subject: 'General discussion',
        StartTime: new Date(2021, 3, 21),
        EndTime: new Date(2021, 3, 22),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 218,
        Subject: 'Hike discussion',
        StartTime: new Date(2021, 3, 24),
        EndTime: new Date(2021, 3, 25),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 219,
        Subject: 'Customer meeting',
        StartTime: new Date(2021, 3, 26),
        EndTime: new Date(2021, 3, 27),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 220,
        Subject: 'New launch discussion',
        StartTime: new Date(2021, 3, 29),
        EndTime: new Date(2021, 3, 30),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 221,
        Subject: 'Conference Meeting',
        StartTime: new Date(2021, 4, 1),
        EndTime: new Date(2021, 4, 2),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 222,
        Subject: 'Product Discussion',
        StartTime: new Date(2021, 4, 3),
        EndTime: new Date(2021, 4, 4),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 223,
        Subject: 'Companys growth related issues',
        StartTime: new Date(2021, 4, 9),
        EndTime: new Date(2021, 4, 10),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 224,
        Subject: 'Customer issues',
        StartTime: new Date(2021, 4, 13),
        EndTime: new Date(2021, 4, 14),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 225,
        Subject: 'Development related chat',
        StartTime: new Date(2021, 4, 15),
        EndTime: new Date(2021, 4, 16),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 226,
        Subject: 'Product meeting',
        StartTime: new Date(2021, 4, 18),
        EndTime: new Date(2021, 4, 19),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 227,
        Subject: 'General discussion',
        StartTime: new Date(2021, 4, 21),
        EndTime: new Date(2021, 4, 22),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 228,
        Subject: 'Hike discussion',
        StartTime: new Date(2021, 4, 24),
        EndTime: new Date(2021, 4, 25),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 229,
        Subject: 'Customer meeting',
        StartTime: new Date(2021, 4, 26),
        EndTime: new Date(2021, 4, 27),
        IsAllDay: true,
        CalendarId: 2
    }, {
        Id: 230,
        Subject: 'New launch discussion',
        StartTime: new Date(2021, 4, 29),
        EndTime: new Date(2021, 4, 30),
        IsAllDay: true,
        CalendarId: 2
    }
];

window.personalData = [
    {
        Id: 101,
        Subject: 'Father Birthday',
        StartTime: new Date(2021, 2, 1),
        EndTime: new Date(2021, 2, 2),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 102,
        Subject: 'Engagement day',
        StartTime: new Date(2021, 2, 4),
        EndTime: new Date(2021, 2, 5),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 103,
        Subject: 'Wedding day',
        StartTime: new Date(2021, 2, 8),
        EndTime: new Date(2021, 2, 9),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 104,
        Subject: 'Mother Birthday',
        StartTime: new Date(2021, 2, 11),
        EndTime: new Date(2021, 2, 12),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 105,
        Subject: 'Peter`s Wedding Day',
        StartTime: new Date(2021, 2, 13),
        EndTime: new Date(2021, 2, 14),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 106,
        Subject: 'Family Trip',
        StartTime: new Date(2021, 2, 18),
        EndTime: new Date(2021, 2, 19),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 107,
        Subject: 'Cousin Wedding Ceremony',
        StartTime: new Date(2021, 2, 21),
        EndTime: new Date(2021, 2, 22),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 108,
        Subject: 'Family Meetup',
        StartTime: new Date(2021, 2, 24),
        EndTime: new Date(2021, 2, 25),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 109,
        Subject: 'Grandfather Birthday',
        StartTime: new Date(2021, 2, 28),
        EndTime: new Date(2021, 2, 29),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 110,
        Subject: 'Sister-in-law Wedding Ceremony',
        StartTime: new Date(2021, 2, 30),
        EndTime: new Date(2021, 2, 31),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 111,
        Subject: 'Family Meetup',
        StartTime: new Date(2021, 3, 1),
        EndTime: new Date(2021, 3, 2),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 112,
        Subject: 'Grandparent Wedding Day',
        StartTime: new Date(2021, 3, 3),
        EndTime: new Date(2021, 3, 4),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 113,
        Subject: 'Cousin Wedding Ceremony',
        StartTime: new Date(2021, 3, 7),
        EndTime: new Date(2021, 3, 8),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 114,
        Subject: 'Family Vacation Trip',
        StartTime: new Date(2021, 3, 12),
        EndTime: new Date(2021, 3, 13),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 115,
        Subject: 'Brother-in-law Birthday',
        StartTime: new Date(2021, 3, 15),
        EndTime: new Date(2021, 3, 16),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 116,
        Subject: 'Brother`s Birthday',
        StartTime: new Date(2021, 3, 18),
        EndTime: new Date(2021, 3, 19),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 117,
        Subject: 'Sister Wedding Anniversary',
        StartTime: new Date(2021, 3, 21),
        EndTime: new Date(2021, 3, 22),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 118,
        Subject: 'Family Vacation Trip',
        StartTime: new Date(2021, 3, 24),
        EndTime: new Date(2021, 3, 25),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 119,
        Subject: 'Wedding Anniversary',
        StartTime: new Date(2021, 3, 26),
        EndTime: new Date(2021, 3, 27),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 120,
        Subject: 'Month end trip',
        StartTime: new Date(2021, 3, 29),
        EndTime: new Date(2021, 3, 30),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 121,
        Subject: 'John Birthday',
        StartTime: new Date(2021, 4, 1),
        EndTime: new Date(2021, 4, 2),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 122,
        Subject: 'Vishnu Birthday',
        StartTime: new Date(2021, 4, 3),
        EndTime: new Date(2021, 4, 4),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 123,
        Subject: 'Family Trip',
        StartTime: new Date(2021, 4, 9),
        EndTime: new Date(2021, 4, 10),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 124,
        Subject: 'Revanth Wedding Anniversary',
        StartTime: new Date(2021, 4, 13),
        EndTime: new Date(2021, 4, 14),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 125,
        Subject: 'Family Meetup',
        StartTime: new Date(2021, 4, 15),
        EndTime: new Date(2021, 4, 16),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 126,
        Subject: 'Family get-together',
        StartTime: new Date(2021, 4, 18),
        EndTime: new Date(2021, 4, 19),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 127,
        Subject: 'Friends Reunion',
        StartTime: new Date(2021, 4, 21),
        EndTime: new Date(2021, 4, 22),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 128,
        Subject: 'Rahul Wedding Anniversary Celebration',
        StartTime: new Date(2021, 4, 24),
        EndTime: new Date(2021, 4, 25),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 129,
        Subject: 'Vacation Trip with friends',
        StartTime: new Date(2021, 4, 26),
        EndTime: new Date(2021, 4, 27),
        IsAllDay: true,
        CalendarId: 1
    }, {
        Id: 130,
        Subject: 'Friends Reunion',
        StartTime: new Date(2021, 4, 29),
        EndTime: new Date(2021, 4, 30),
        IsAllDay: true,
        CalendarId: 1
    }
];

window.doctorData = [
    {
        Id: 1,
        Subject: 'Echocardiogram',
        StartTime: new Date(2021, 3, 1, 9, 30),
        EndTime: new Date(2021, 3, 1, 11, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 2,
        Subject: 'Lumbar punctures',
        StartTime: new Date(2021, 3, 2, 9, 30),
        EndTime: new Date(2021, 3, 2, 10, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 3,
        Subject: 'Osteoarthritis',
        StartTime: new Date(2021, 3, 1, 8),
        EndTime: new Date(2021, 3, 1, 10, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 4,
        Subject: 'Ambulatory ECG',
        StartTime: new Date(2021, 3, 2, 12),
        EndTime: new Date(2021, 3, 2, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 5,
        Subject: 'Osteoporosis',
        StartTime: new Date(2021, 3, 2, 11),
        EndTime: new Date(2021, 3, 2, 11, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 6,
        Subject: 'Neuromuscular',
        StartTime: new Date(2021, 3, 5, 11, 30),
        EndTime: new Date(2021, 3, 5, 13, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 7,
        Subject: 'Rheumatoid arthritis',
        StartTime: new Date(2021, 3, 5, 13, 40),
        EndTime: new Date(2021, 3, 5, 14, 40),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 8,
        Subject: 'Cardiac Catheterization',
        StartTime: new Date(2021, 3, 5, 11, 30),
        EndTime: new Date(2021, 3, 5, 13),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 9,
        Subject: 'Growth abnormalities',
        StartTime: new Date(2021, 3, 6, 14),
        EndTime: new Date(2021, 3, 6, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 10,
        Subject: 'Sleep disorders',
        StartTime: new Date(2021, 3, 7, 12),
        EndTime: new Date(2021, 3, 7, 14),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 11,
        Subject: 'Torn ligaments',
        StartTime: new Date(2021, 3, 7, 13, 30),
        EndTime: new Date(2021, 3, 7, 14, 45),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 12,
        Subject: 'Coronary angiogram',
        StartTime: new Date(2021, 3, 6, 8),
        EndTime: new Date(2021, 3, 6, 9, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 13,
        Subject: 'Blood pressure',
        StartTime: new Date(2021, 3, 8, 12),
        EndTime: new Date(2021, 3, 8, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 14,
        Subject: 'Radiculopathy',
        StartTime: new Date(2021, 3, 9, 15, 45),
        EndTime: new Date(2021, 3, 9, 16, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 15,
        Subject: 'Sprains and strains',
        StartTime: new Date(2021, 3, 8, 14),
        EndTime: new Date(2021, 3, 8, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 16,
        Subject: 'Cardiac stress testing',
        StartTime: new Date(2021, 3, 9, 10),
        EndTime: new Date(2021, 3, 9, 10, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 17,
        Subject: 'Tendon injuries',
        StartTime: new Date(2021, 3, 9, 14),
        EndTime: new Date(2021, 3, 9, 15, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 18,
        Subject: 'Dementia',
        StartTime: new Date(2021, 3, 12, 15),
        EndTime: new Date(2021, 3, 12, 17),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 19,
        Subject: 'Pulled muscles',
        StartTime: new Date(2021, 3, 12, 13, 30),
        EndTime: new Date(2021, 3, 12, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 20,
        Subject: 'Coronary angiogram',
        StartTime: new Date(2021, 3, 12, 10, 30),
        EndTime: new Date(2021, 3, 12, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 21,
        Subject: 'Back pain',
        StartTime: new Date(2021, 3, 13, 10, 30),
        EndTime: new Date(2021, 3, 13, 11, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 22,
        Subject: 'Neuropathy',
        StartTime: new Date(2021, 3, 14, 12, 30),
        EndTime: new Date(2021, 3, 14, 13, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 23,
        Subject: 'Ruptured disks',
        StartTime: new Date(2021, 3, 14, 13),
        EndTime: new Date(2021, 3, 14, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 24,
        Subject: 'Atherosclerosis',
        StartTime: new Date(2021, 3, 13, 10),
        EndTime: new Date(2021, 3, 13, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 25,
        Subject: 'Arthroplasty',
        StartTime: new Date(2021, 3, 15, 9),
        EndTime: new Date(2021, 3, 15, 10),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 26,
        Subject: 'Hyperactivity disorder',
        StartTime: new Date(2021, 3, 16, 14),
        EndTime: new Date(2021, 3, 16, 15, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 27,
        Subject: 'Muscular dystrophy',
        StartTime: new Date(2021, 3, 15, 13, 10),
        EndTime: new Date(2021, 3, 15, 15, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 28,
        Subject: 'Consulting',
        StartTime: new Date(2021, 3, 16, 9, 20),
        EndTime: new Date(2021, 3, 16, 10, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 29,
        Subject: 'Hand surgery',
        StartTime: new Date(2021, 3, 16, 13, 20),
        EndTime: new Date(2021, 3, 16, 15, 22),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 30,
        Subject: 'Neuromuscular',
        StartTime: new Date(2021, 3, 19, 14),
        EndTime: new Date(2021, 3, 19, 15, 40),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 31,
        Subject: 'Spine surgery',
        StartTime: new Date(2021, 3, 19, 12, 18),
        EndTime: new Date(2021, 3, 19, 14, 23),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 32,
        Subject: 'Fibrinogen',
        StartTime: new Date(2021, 3, 19, 9),
        EndTime: new Date(2021, 3, 19, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 33,
        Subject: 'Bone tumors',
        StartTime: new Date(2021, 3, 20, 10, 45),
        EndTime: new Date(2021, 3, 20, 12, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 34,
        Subject: 'Neuromuscular',
        StartTime: new Date(2021, 3, 21, 13),
        EndTime: new Date(2021, 3, 21, 17),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 35,
        Subject: 'Osteoporosis',
        StartTime: new Date(2021, 3, 21, 11, 45),
        EndTime: new Date(2021, 3, 21, 14, 30),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 36,
        Subject: 'Triglyceride',
        StartTime: new Date(2021, 3, 20, 9, 30),
        EndTime: new Date(2021, 3, 20, 10, 45),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 37,
        Subject: 'Fibrinogen',
        StartTime: new Date(2021, 3, 22, 8),
        EndTime: new Date(2021, 3, 22, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 38,
        Subject: 'Head trauma',
        StartTime: new Date(2021, 3, 23, 12),
        EndTime: new Date(2021, 3, 23, 15),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 39,
        Subject: 'Arthroplasty',
        StartTime: new Date(2021, 3, 22, 12, 18),
        EndTime: new Date(2021, 3, 22, 13, 22),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 40,
        Subject: 'Echocardiogram',
        StartTime: new Date(2021, 3, 23, 10, 30),
        EndTime: new Date(2021, 3, 23, 12, 40),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 41,
        Subject: 'Skull reconstruction',
        StartTime: new Date(2021, 3, 23, 13, 20),
        EndTime: new Date(2021, 3, 23, 15, 45),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 42,
        Subject: 'Dementia',
        StartTime: new Date(2021, 3, 26, 12, 30),
        EndTime: new Date(2021, 3, 26, 16, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 43,
        Subject: 'Orthopedic trauma',
        StartTime: new Date(2021, 3, 26, 10, 18),
        EndTime: new Date(2021, 3, 26, 12, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 44,
        Subject: 'Blood pressure',
        StartTime: new Date(2021, 3, 26, 10, 50),
        EndTime: new Date(2021, 3, 26, 12, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 45,
        Subject: 'Ruptured disks',
        StartTime: new Date(2021, 3, 27, 12, 50),
        EndTime: new Date(2021, 3, 27, 15, 20),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 46,
        Subject: 'Head trauma',
        StartTime: new Date(2021, 3, 28, 11, 50),
        EndTime: new Date(2021, 3, 28, 12, 45),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 47,
        Subject: 'Cerebral palsy',
        StartTime: new Date(2021, 3, 28, 14, 50),
        EndTime: new Date(2021, 3, 28, 15, 50),
        IsAllDay: false,
        DoctorId: 3
    }, {
        Id: 48,
        Subject: 'Consulting',
        StartTime: new Date(2021, 3, 27, 9),
        EndTime: new Date(2021, 3, 27, 11, 30),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 49,
        Subject: 'Electrocardiogram',
        StartTime: new Date(2021, 3, 30, 9, 30),
        EndTime: new Date(2021, 3, 30, 11, 50),
        IsAllDay: false,
        DoctorId: 1
    }, {
        Id: 50,
        Subject: 'Radiculopathy',
        StartTime: new Date(2021, 3, 30, 14),
        EndTime: new Date(2021, 3, 30, 15, 30),
        IsAllDay: false,
        DoctorId: 2
    }, {
        Id: 51,
        Subject: 'Skull reconstruction',
        StartTime: new Date(2021, 3, 30, 14),
        EndTime: new Date(2021, 3, 30, 16),
        IsAllDay: false,
        DoctorId: 3
    }
];

window.resAirlinesData = [
    {
        Id: 1,
        Subject: '#SG 208 Greenville - Washington',
        StartTime: new Date(2021, 3, 2, 10, 0),
        EndTime: new Date(2021, 3, 2, 12, 30),
        IsAllDay: false,
        AirlineId: 1
    }, {
        Id: 2,
        Subject: '#IT 188 Washington - Arizona',
        StartTime: new Date(2021, 3, 2, 4, 0),
        EndTime: new Date(2021, 3, 2, 5, 0),
        IsAllDay: false,
        AirlineId: 3
    }, {
        Id: 3,
        Subject: '#SG 300 Chicago - Nevada',
        StartTime: new Date(2021, 3, 2, 11, 0),
        EndTime: new Date(2021, 3, 2, 13, 0),
        IsAllDay: false,
        AirlineId: 2
    }, {
        Id: 4,
        Subject: '#IT 306 Washington - Newport',
        StartTime: new Date(2021, 3, 4, 4, 0),
        EndTime: new Date(2021, 3, 4, 5, 0),
        IsAllDay: false,
        AirlineId: 1
    }, {
        Id: 5,
        Subject: '#AI 520 Washington - Chicago',
        StartTime: new Date(2021, 3, 3, 10, 30),
        EndTime: new Date(2021, 3, 3, 12, 30),
        IsAllDay: false,
        AirlineId: 3
    }, {
        Id: 6,
        Subject: '#SG 345 Renfrewshire - Lancashire',
        StartTime: new Date(2021, 3, 5, 6, 30),
        EndTime: new Date(2021, 3, 5, 7, 30),
        IsAllDay: false,
        AirlineId: 2
    }
];

window.fifaEventsData = [
];

var msPerDay = 86400000;
var msPerHour = 3600000;
var currentTime = new Date().setMinutes(0, 0, 0);
window.readonlyEventsData = [
    {
        Id: 1,
        Subject: 'Project Workflow Analysis',
        StartTime: new Date(currentTime + msPerDay * -2 + msPerHour * 2),
        EndTime: new Date(currentTime + msPerDay * -2 + msPerHour * 4),
        IsReadonly: true
    }, {
        Id: 2,
        Subject: 'Project Requirement Planning',
        StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * 2),
        EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * 4),
        IsReadonly: true
    }, {
        Id: 3,
        Subject: 'Meeting with Developers',
        StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * -3),
        EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * -1),
        IsReadonly: true
    }, {
        Id: 4,
        Subject: 'Team Fun Activities',
        StartTime: new Date(currentTime + msPerHour * -4),
        EndTime: new Date(currentTime + msPerHour * -2),
        IsReadonly: true
    }, {
        Id: 5,
        Subject: 'Quality Analysis',
        StartTime: new Date(currentTime + msPerHour * 1),
        EndTime: new Date(currentTime + msPerHour * 3),
        IsReadonly: false
    }, {
        Id: 6,
        Subject: 'Customer meeting – John Mackenzie',
        StartTime: new Date(currentTime + msPerHour * 5),
        EndTime: new Date(currentTime + msPerHour * 6),
        IsReadonly: false
    }, {
        Id: 7,
        Subject: 'Meeting with Core team',
        StartTime: new Date(currentTime + msPerHour * 9),
        EndTime: new Date(currentTime + msPerHour * 10),
        IsReadonly: false
    }, {
        Id: 8,
        Subject: 'Project Review',
        StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * 3),
        EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * 5),
        IsReadonly: false
    }, {
        Id: 9,
        Subject: 'Project demo meeting with Andrew',
        StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * -4),
        EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * -3),
        IsReadonly: false
    }, {
        Id: 10,
        Subject: 'Online Hosting of Project',
        StartTime: new Date(currentTime + msPerDay * 2 + msPerHour * 4),
        EndTime: new Date(currentTime + msPerDay * 2 + msPerHour * 6),
        IsReadonly: false
    }
];

window.getReminderEvents = function () {
    var today = new Date().getTime();
    var reminderEvents = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        Location: 'Space Centre USA',
        StartTime: new Date(today + 5000),
        EndTime: new Date(today + (msPerHour * 2) + 5000),
        StartTimezone: "UTC+07:00",
        EndTimezone: "UTC+07:00"
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        Location: 'Newyork City',
        StartTime: new Date(today - msPerDay - (msPerHour * 2)),
        EndTime: new Date(today - msPerDay),
        StartTimezone: "UTC",
        EndTimezone: "UTC"
    }, {
        Id: 3,
        Subject: 'Milky Way as Melting pot',
        Location: 'Space Centre USA',
        StartTime: new Date(today - msPerDay),
        EndTime: new Date(today - msPerDay + (msPerHour * 2)),
        StartTimezone: "UTC",
        EndTimezone: "UTC"
    }, {
        Id: 4,
        Subject: 'Blue Moon Eclipse',
        Location: 'Space Centre USA',
        StartTime: new Date(today + msPerDay + (msPerHour * 2)),
        EndTime: new Date(today + msPerDay + (msPerHour * 4)),
        StartTimezone: "UTC",
        EndTimezone: "UTC"
    }, {
        Id: 5,
        Subject: 'Mysteries of Bermuda Triangle',
        Location: 'Bermuda',
        StartTime: new Date(today + msPerDay),
        EndTime: new Date(today + msPerDay + (msPerHour * 2)),
        StartTimezone: "UTC",
        EndTimezone: "UTC"
    }];
    return reminderEvents;
};

window.generateObject = function (start, end, isWeekDaysOnly) {
    if (start === void 0) { start = new Date(2020, 6, 1).getTime(); }
    if (end === void 0) { end = new Date(2022, 11, 31).getTime(); }
    if (isWeekDaysOnly === void 0) { isWeekDaysOnly = false; }
    var data = [];
    var names = [
        'Story Time for Kids', 'Camping with Turtles', 'Wildlife Warriors', 'Parrot Talk', 'Birds of Prey', 'Croco World',
        'Venomous Snake Hunt', 'Face Painting & Drawing events', 'Pony Rides', 'Feed the Giants', 'Jungle Treasure Hunt',
        'Endangered Species Program', 'Black Cockatoos Playtime', 'Walk with Jungle King', 'Trained Climbers', 'Playtime with Chimpanzees',
        'Meet a small Mammal', 'Amazon Fish Feeding', 'Elephant Ride'
    ];
    var dayCount = 1000 * 60 * 60;
    var appCount = isWeekDaysOnly ? 1 : 9;
    for (var a = start, id = 1; a < end; a += (dayCount * 24)) {
        var count = Math.floor((Math.random() * appCount) + 1);
        for (var b = 0; b < count; b++) {
            var hour = Math.floor(Math.random() * 100) % 24;
            var minutes = Math.round((Math.floor(Math.random() * 100) % 60) / 5) * 5;
            var nCount = Math.floor(Math.random() * names.length);
            var startDate = new Date(new Date(a).setHours(hour, minutes));
            var endDate = new Date(startDate.getTime() + (dayCount * 2.5));

            if (isWeekDaysOnly && [0, 6].indexOf(startDate.getDay()) > -1 || [0, 6].indexOf(endDate.getDay()) > -1) {
                continue;
            }

            data.push({
                Id: id,
                Subject: names[nCount],
                StartTime: startDate,
                EndTime: endDate,
                IsAllDay: (id % 10) ? false : true
            });
            id++;
        }
    }
    return data;
};

window.roomData = [
   
];

window.hospitalData = [
    
];

window.blockData = [
   
];

window.resourceSampleData = [
   
];

window.quickInfoTemplateData = [
    
];
