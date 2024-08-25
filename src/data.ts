import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ContentPasteGoOutlinedIcon from '@mui/icons-material/ContentPasteGoOutlined';


export const pieChartBrandedData = [
    { name: "Branded", value: 60, color: "#fd904b" },
    { name: "Non-Branded", value: 20, color: "#334bff" }
];

export const pieChartMissionData = [
    { name: "Started", total : 1, value: 60, color: "#334bff" },
    { name: "Evaluating",total : 3.9, value: 20, color: "#fd904b" },
    { name: "Completed",total : 1.1, value: 20, color: "#67ab75" }
];

export const middleRowData = [
    { title: "Total Value of Mission", icon: CurrencyRupeeOutlinedIcon, count: 235000 },
    { title: "Mission Applications", icon : PersonAddAltOutlinedIcon, count: 12},
    { title: "No. of Transactions", icon : DriveFolderUploadOutlinedIcon, count: 134},
    { title: "Total Value of Mission", icon: CurrencyRupeeOutlinedIcon, count: 235000 },
    { title: "No. of Transactions", icon : DriveFolderUploadOutlinedIcon, count: 134},
    { title: "Mission Applications", icon : PersonAddAltOutlinedIcon, count: 12},
    { title: "No. of Transactions", icon : DriveFolderUploadOutlinedIcon, count: 134},
    { title: "Mission Submissions", icon : ContentPasteGoOutlinedIcon, count: 12},
];

export const barChartData = {
    title : 'No. of Opportunities',
    subTitle : 'Listed per day',
    filterVal : 'All time',
    barInfo : ['Missions', 'Giveaways', 'Job/Internship'],
    barChartArray : [
        {
          name: 'Mo',
          job: 5,
          giveaways: 10,
          missions: 10,
          oppo: 0,
        },
        {
          name: 'Tu',
          job: 20,
          giveaways: 10,
          missions: 10,
          oppo: 5,
        },
        {
          name: 'We',
          giveaways: 14,
          missions: 10,
          job: 12,
          oppo: 10,
        },
        {
          name: 'Th',
          giveaways: 10,
          missions: 20,
          job: 5,
          oppo: 20,
        },
        {
          name: 'Fr',
          giveaways: 0,
          missions: 10,
          job: 9,
          oppo: 25,
        },
        {
          name: 'Sa',
          giveaways: 8,
          missions: 15,
          job: 6,
          oppo: 30,
        },
        {
          name: 'Su',
          giveaways: 4,
          missions: 10,
          job: 15,
          oppo: 35,
        },
    ],
}

export const lineChartData = {
    title : 'No. of Missions',
    subTitle : 'Evaluated per Day',
    filterVal : 'Last 7 days',
    lineChartArray : [
        {
          name: 'Mo',
          pv: 2,
          amt: 0,
        },
        {
          name: 'Tu',
          pv: 15,
          amt: 5,
        },
        {
          name: 'We',
          pv: 13,
          amt: 10,
        },
        {
          name: 'Th',
          pv: 13,
          amt: 20,
        },
        {
          name: 'Fr',
          pv: 20,
          amt: 25,
        },
        {
          name: 'Sa',
          pv: 20,
          amt: 30,
        },
        {
          name: 'Su',
          pv: 35,
          amt: 35,
        },
    ],
}

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Draft',
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat opinion",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    type : 'Internship',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Completed',
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Gujrat Tourism",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    type : 'Money',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Evaluating',
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Internship',
    openings : 24,
    end: "12/04/2023, 12:00 PM",
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Unpublished',
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    openings : 24,
    end: "12/04/2023, 12:00 PM",
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Draft',
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    signedup : 24,
    end: "12/04/2023, 12:00 PM",
    submitted : 24,
    approved : 24,
    status : 'Completed',
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    type : 'Internship',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Draft',
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    type : 'Money',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Started',
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    end: "12/04/2023, 12:00 PM",
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Completed',
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Draft',
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    end: "12/04/2023, 12:00 PM",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Unpublished',
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    end: "12/04/2023, 12:00 PM",
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Started',
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    end: "12/04/2023, 12:00 PM",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    status : 'Evaluating',
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Giveaway',
    openings : 24,
    signedup : 24,
    end: "12/04/2023, 12:00 PM",
    submitted : 24,
    approved : 24,
    status : 'Completed',
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    name: "Create a reel for Gujrat Tourism on Instagram",
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    type : 'Money',
    status : 'Draft',
  },
];


export type Person = {
  name: string;
  id: number;
  brand: string;
  start: string;
  end: string;
  status: string;
  type: string;
  openings : number;
  signedup : number;
  submitted : number;
  approved : number;
  state : string;
};

export const data: Person[] = [
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 57,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    state : 'Admin'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 31,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    type : 'Money',
    status : 'Draft',
    state : 'Evaluator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 22,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    state : 'Admin'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 65,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    state : 'Evaluator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 56,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    end: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    state : 'Moderator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 22,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    state : 'Admin'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 65,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    state : 'Evaluator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 56,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    end: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    state : 'Moderator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 22,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    state : 'Admin'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 65,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    type : 'Money',
    status : 'Draft',
    end: "12/04/2023, 12:00 PM",
    state : 'Evaluator'
  },
  {
    name: "Create a reel for Gujrat Tourism on Instagram",
    id: 56,
    brand: "Snapchat",
    start: "12/04/2023, 12:00 PM",
    openings : 24,
    signedup : 24,
    submitted : 24,
    approved : 24,
    end: "12/04/2023, 12:00 PM",
    type : 'Money',
    status : 'Draft',
    state : 'Moderator'
  },
]
