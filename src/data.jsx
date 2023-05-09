const places = [
    {
        id: "p1",
        name: "Restaurant All in All" ,
        location: "15-G, Jalan GC 14, Cyberjaya, 63000 Cyberjaya, Selangor",
        time: [{
            day:"Saturday",
            hours: "24 Hours"
        },
        {
            day:"Sunday",
            hours:"24 Hours"
        },
        {   
            day:"Monday",
            hours: "24 Hours"
        },
        {
            day: "Tuesday",
            hours: "24 Hours"
        },
        {
            day: "Wednesday",
            hours: "24 Hours"
        },
        {
            day: "Thursday",
            hours: "24 Hours"
        },
        {
            day: "Friday",
            hours: "24 Hours"
        }] ,
        phone: "03-8328 4578",
        category: ['breakfast', 'lunch', 'dinner'],
        image: ['./images/all3.jpg', './images/all1.jpeg', './images/all2.jpg', './images/all4.jpg']
    },
    {
        id: "p2",
        name: "Restaurant Hinz Kitchen" ,
        location: "MY Selangor Cyberjaya Glomac Jalan GC 1, 11 Block C63000",
        time:[{
                day:"Saturday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {
                day:"Sunday",
                hours:"10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {   
                day:"Monday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {
                day: "Tuesday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {
                day: "Wednesday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {
                day: "Thursday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            },
            {
                day: "Friday",
                hours: "10:30 am-3:30 pm, 5:30-9:30 pm"
            }],
        phone: "012-268 0621",
        category: ['breakfast', 'dinner', 'lunch'],
        image: ['/images/hinz1.jpg', '/images/hinz2.jpg']

    },
    {
        id: "p3",
        name: "Mama Homecook Mixed Rice" ,
        location: "8, Block D, Jalan GC 7, Glomac, 63200 Cyberjaya, Selangor",
        time: [{
            day:"Saturday",
            hours: "10:30 am-3 pm"
        },
        {
            day:"Sunday",
            hours:"Closed"
        },
        {   
            day:"Monday",
            hours: "10:30 am-8:30 pm"
        },
        {
            day: "Tuesday",
            hours: "10:30 am-8:30 pm"
        },
        {
            day: "Wednesday",
            hours: "10:30 am-8:30 pm"
        },
        {
            day: "Thursday",
            hours: "10:30 am-8:30 pm"
        },
        {
            day: "Friday",
            hours: "10:30 am-8:30 pm"
        }],
        phone: "017-370 5882",
        category: ['breakfast', 'dinner', 'lunch'],
        image: ['./images/mama1.jpg', './images/mam2.jpg']
    },
    {
        id: "p4",
        name: "Warung Hanna Plaza Crystalville (roundabout)" ,
        location: "A-G-08, Jalan Vita 1, Plaza Crystalville, Lingkaran Cyber Point Timur, Cyber 12, 63000 Cyberjaya, Selango",
        time:[{
            day:"Saturday",
            hours: "5 pm-2:30 am"
        },
        {
            day:"Sunday",
            hours:"5 pm-2:30 am"
        },
        {   
            day:"Monday",
            hours: "5 pm-2:30 am"
        },
        {
            day: "Tuesday",
            hours: "4 pm-2:30 am"
        },
        {
            day: "Wednesday",
            hours: "5 pm-2:30 am"
        },
        {
            day: "Thursday",
            hours: "5 pm-2:30 am"
        },
        {
            day: "Friday",
            hours: "5 pm-2:30 am"
        }],
        phone: "03-8320 4815",
        category: ['dinner'],
        image: ['./images/warung-hanna-1.jpg', './images/warung-hanna-2.jpg']
    },
    {
        id: "p5",
        name: "Kitchen Village" ,
        location: "Prima Avenue, 3503, Jalan Teknokrat 5, Cyberjaya, 63000 Cyberjaya, Selangor",
        time: [{
            day:"Saturday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day:"Sunday",
            hours:"Closed"
        },
        {   
            day:"Monday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day: "Tuesday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day: "Wednesday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day: "Thursday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day: "Friday",
            hours: "11:30 am-9:30 pm"
        }],
        phone: "03-8320 2699",
        category: ['dinner', 'lunch'],
        image: ['./images/kitchen-village-1.jpg', './images/kitchen-village-2.jpg']
    },
    {
        id: "p6",
        name: "Face To Face Noodle House 面对面" ,
        location: "No. 1, Block E, Jalan GC4 Glomac Cyberjaya, Cyber 12,, 63200 Cyberjaya, Selangor",
        time:[{
            day:"Saturday",
            hours: "10:30 am-9:30 pm"
        },
        {
            day:"Sunday",
            hours:"10:30 am-9:30 pm"
        },
        {   
            day:"Monday",
            hours: "10:30 am-9:30 pm"
        },
        {
            day: "Tuesday",
            hours: "11:30 am-9:30 pm"
        },
        {
            day: "Wednesday",
            hours: "10:30 am-9:30 pm"
        },
        {
            day: "Thursday",
            hours: "10:30 am-9:30 pm"
        },
        {
            day: "Friday",
            hours: "10:30 am-9:30 pm"
        }],
        phone: "03-8322 1652",
        category: ['breakfast', 'dinner', 'lunch'],
        image: ['./images/face-to-face-1.jpg', './images/face-to-face-2.jpg']
    },
    {
        id: "p7",
        name: "Restoran Nasi Kandar Sayat" ,
        location: "GF, MENARA PARAGON, 08, Persiaran Bestari, Cyberjaya, 63000 Cyberjaya, Selangor",
        time:[{
            day:"Saturday",
            hours: "24 Hours"
        },
        {
            day:"Sunday",
            hours:"24 Hours"
        },
        {   
            day:"Monday",
            hours: "24 Hours"
        },
        {
            day: "Tuesday",
            hours: "24 Hours"
        },
        {
            day: "Wednesday",
            hours: "24 Hours"
        },
        {
            day: "Thursday",
            hours: "24 Hours"
        },
        {
            day: "Friday",
            hours: "24 Hours"
        }]  ,
        phone: "N/A",
        category: ['breakfast', 'dinner', 'lunch'],
        image: ['./images/sayat-1.jpg', './images/sayat-2.jpg']
    },
    {
        id: "p8",
        name: "Ali Chicken & Fries" ,
        location: "L1-09, MENARA PARAGON, Persiaran Bestari, Cyber 11, 63000 Cyberjaya, Selangor",
        time: [{
            day:"Saturday",
            hours: "11 am-11:45 pm"
        },
        {
            day:"Sunday",
            hours:"11 am-11:45 pm"
        },
        {   
            day:"Monday",
            hours: "11 am-11:45 pm"
        },
        {
            day: "Tuesday",
            hours: "11 am-11:45 pm"
        },
        {
            day: "Wednesday",
            hours: "11 am-11:45 pm"
        },
        {
            day: "Thursday",
            hours: "11 am-11:45 pm"
        },
        {
            day: "Friday",
            hours: "11 am-11:45 pm"
        }],
        phone: "019-855 8212",
        category: ['dinner', 'lunch'],
        image: ['./images/ali-1.jpg', './images/ali-2.jpg']
    }
]

export default places