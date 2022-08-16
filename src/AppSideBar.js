import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const AppSideBar = [
    {title: 'Login',
    path: '/',
    icon: < AiIcons.AiFillHome/>,
    cName: 'nav-text'
   }, 
   {title: 'Profile',
    path: '/profile',
    icon: < AiIcons.AiFillHome/>,
    cName: 'nav-text'
   }, 
   {title: 'admin',
    path: '/admin',
    icon: < AiIcons.AiFillHome/>,
    cName: 'nav-text'
   },
   {title: 'announcements',
    path: '/admin/sms',
    icon: < AiIcons.AiFillHome/>,
    cName: 'nav-text'
   },
   {title: 'Comments ',
    path: '/comments',
    icon: < AiIcons.AiFillCalendar/>,
    cName: 'nav-text'
   },
   {title: 'teacher',
    path: '/teacher',
    icon: < IoIcons.IoIosPeople/>,
    cName: 'nav-text'
   },
   {title: 'student',
    path: '/student',
    icon: < IoIcons.IoIosPeople/>,
    cName: 'nav-text'
   },
//    {title: 'chats',
//     path: '/chats',
//     icon: < AiIcons.AiFillWechat/>,
//     cName: 'nav-text'
//    },
   {title: 'parent',
    path: '/parent',
    icon: < IoIcons.IoIosPeople/>,
    cName: 'nav-text'
   },
]