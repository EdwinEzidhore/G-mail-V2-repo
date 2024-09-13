"use client"
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { TbSettings } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";

import { FaInbox } from "react-icons/fa";
import { IoPencilSharp } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbArrowBadgeRight } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { MdScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbCategory2 } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiWarningCircle } from "react-icons/pi";
import { TbMessages } from "react-icons/tb";
import { PiTagLight } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GoPlus } from "react-icons/go";


import { Children, useState } from "react";
import Link from "next/link";


export default function Home() {

  const [toggleSidebar, settoggleSidebar] = useState(false);
  const [toggleMore, SettoggleMore] = useState(false);
  const [togglecategory, settogglecategory] = useState(true)

  const toggleMoreHandler = () => {
    SettoggleMore((prev)=>!prev)
  }

  const handleToggle=() => {
    settoggleSidebar((prev) => !prev);    
  }

  const togglecategoryHandler = () => {
    settogglecategory((prev) => !prev);
  }
  return (
    <div className="main-wrapper h-screen">

      <div className="nav flex items-center justify-between w-screen bg-slate-50  p-2 ">
        <div className="min-w-60 pr-8">
          <ul className="flex items-center">
            <div className="hover:bg-gray-300 rounded-full">
              <button className="text-3xl p-1 m-1 text-gray-500" onClick={handleToggle}>
                <i className=""><TbMenu2 /></i>
              </button>
            </div>
            <li className="w-28 h-10 ml-1"><img className="w-full h-full" src="/logo_gmail_lockup_default_1x_r5.png" alt="gmail" /></li>
          </ul>
        </div>
        <div className="search ">
          <div className=" bg-slate-100 flex items-center rounded-full overflow-hidden h-fit">
            <div className="p-1"><button className="p-2 text-2xl"><IoSearch /></button></div>
            <div className="h-full w-96"><input className="bg-slate-100 py-4 px-3 focus:outline-none h-full w-full" type="search" placeholder="search" /></div>
            <div className="p-1"><button className="p-2 text-2xl"><LuSlidersHorizontal /></button></div>
          </div>
        </div>
        <div className="tools">
          <ul className="flex gap-2 items-center">
            <div className="icon"><li className="p-1 text-3xl m-1"><HiOutlineQuestionMarkCircle /></li></div>
            <div className="icon"><li className="p-1 text-3xl m-1"><TbSettings /></li></div>
            <div className="icon"><li className="p-1 text-3xl m-1"><SiGooglegemini /></li></div>
            <div className="icon"> <li className="p-1 text-3xl m-1"><CgMenuGridO /></li></div>
            <div className="icon"><li className="p-1 text-3xl m-1"><HiUserCircle /></li></div>
            
          </ul>
        </div>
      </div>

      {/* nav end */}
      <div className="email_wrapper flex">
        
          <aside className="sidebar h-full overflow-hidden  pb-20" data-collapse={toggleSidebar}>
            <ul className="sidebar_list h-full ">
              <li className="list_item ">
                <button className="sidebar_btn">
                  <div className="sidebar_icon"><IoPencilSharp /></div>
                  <span className="sidebar_title  font-semibold">Compose</span></button>

              </li>

              <div className="menus h-full overflow-y-auto p-1  scroll-smooth  pb-32">
              <li className="list_item">
                <Link className="sidebar_link " href={'#'}>
                  <div className="flex items-center">
                  <div className="sidebar_icon "><FaInbox /></div>
                  <span className="sidebar_title">Inbox</span>
                  </div>
                  <div>
                    <span className="unread text-sm">1232</span>
                  </div>
                </Link>
              </li>

              <li className="list_item">
                <Link className="sidebar_link relative" href={'#'}>
                  <div className="unread-mark hidden bg-red-600 h-2 w-2 rounded-full"></div>
                  <div className="flex items-center">
                  <div className="sidebar_icon "><MdOutlineStarOutline /></div>
                  <span className="sidebar_title">starred</span>
                  </div>
                  <div>
                    <span className="unread text-sm">1232</span>
                  </div>
                </Link>
              </li>

              <li className="list_item">
                <Link className="sidebar_link " href={'#'}>
                  <div className="flex items-center">
                  <div className="sidebar_icon "><FiClock /></div>
                  <span className="sidebar_title">Snoozed</span>
                  </div>
                  <div>
                    <span className="unread text-sm">1232</span>
                  </div>
                </Link>
              </li>

              <li className="list_item">
                <Link className="sidebar_link " href={'#'}>
                  <div className="flex items-center">
                  <div className="sidebar_icon "><LuSendHorizonal /></div>
                  <span className="sidebar_title">Sent</span>
                  </div>
                  <div>
                    <span className="unread text-sm">1232</span>
                  </div>
                </Link>
              </li>

              <li className="list_item">
                <Link className="sidebar_link " href={'#'}>
                  <div className="flex items-center">
                  <div className="sidebar_icon "><FaRegFile /></div>
                  <span className="sidebar_title">Drafts</span>
                  </div>
                  <div>
                    <span className="unread text-sm">1232</span>
                  </div>
                </Link>
              </li>

              <li className="list_item flex-col">
                <button className="sidebar_link justify-start w-full" onClick={toggleMoreHandler}>
                  <div className="sidebar_icon">{toggleMore ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</div>
                  <span className="sidebar_title">{toggleMore? "Less":"More" }</span>
                </button>
                
                <div className={toggleMore ? "block" :"opacity-0 hidden"}>
                  <ul>
                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><TbArrowBadgeRight /></div>
                          <span className="sidebar_title">Important</span>
                        </div>
                        <div>
                          <span className="unread text-sm">1232</span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><MdOutlineMessage /></div>
                          <span className="sidebar_title">Chats</span>
                        </div>
                        <div>
                          <span className="unread text-sm">1232</span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><MdScheduleSend /></div>
                          <span className="sidebar_title">Scheduled</span>
                        </div>
                        <div>
                          <span className="unread text-sm">1232</span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><LuMails /></div>
                          <span className="sidebar_title">All Mail</span>
                        </div>
                        <div>
                          <span className="unread text-sm">1232</span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><RiSpam2Line /></div>
                          <span className="sidebar_title">Spam</span>
                        </div>
                        <div>
                          <span className="unread text-sm"></span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><FaRegTrashCan /></div>
                          <span className="sidebar_title">Trash</span>
                        </div>
                        <div>
                          <span className="unread text-sm">1232</span>
                        </div>
                      </Link>
                    </li>

                    <li className="list_item flex-col">
                      <button className="sidebar_link justify-start w-full" onClick={togglecategoryHandler}>
                        <div>
                        <TbCategory2 />
                        </div>
                        <span className="sidebar_title">Categories</span>
                      </button>
                      <div className={togglecategory ? "block" :"opacity-0 hidden"}>
                        <ul>
                          <li className="list_item">
                            <Link className="sidebar_link pl-6" href={'#'}>
                              <div className="flex items-center">
                                <div className="sidebar_icon "><HiOutlineUsers />
                                </div>
                                <span className="sidebar_title">Social</span>
                              </div>
                              <div>
                              <span className="unread text-sm">1232</span>
                              </div>
                            </Link>
                          </li>

                          <li className="list_item">
                            <Link className="sidebar_link pl-6" href={'#'}>
                              <div className="flex items-center">
                                <div className="sidebar_icon "><PiWarningCircle /></div>
                                <span className="sidebar_title">Updates</span>
                              </div>
                              <div>
                              <span className="unread text-sm">1232</span>
                              </div>
                            </Link>
                          </li>

                          <li className="list_item">
                            <Link className="sidebar_link pl-6" href={'#'}>
                              <div className="flex items-center">
                                <div className="sidebar_icon "><TbMessages />
                                </div>
                                <span className="sidebar_title">Forums</span>
                              </div>
                              <div>
                              <span className="unread text-sm">1232</span>
                              </div>
                            </Link>
                          </li>

                          <li className="list_item">
                            <Link className="sidebar_link pl-6" href={'#'}>
                              <div className="flex items-center">
                                <div className="sidebar_icon "><PiTagLight /></div>
                                <span className="sidebar_title">Promotions</span>
                              </div>
                              <div>
                              <span className="unread text-sm">1232</span>
                              </div>
                            </Link>
                          </li>

                        </ul>
                      </div>

                    </li>
                    
                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><TbSettings /></div>
                          <span className="sidebar_title">Manage lables</span>
                        </div>
                        <div>
                          <span className="unread text-sm"></span>
                        </div>
                      </Link>
                    </li>
              
                    <li className="list_item">
                      <Link className="sidebar_link " href={'#'}>
                        <div className="flex items-center">
                          <div className="sidebar_icon "><GoPlus /></div>
                          <span className="sidebar_title">Create new lable</span>
                        </div>
                        <div>
                          <span className="unread text-sm"></span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list_item flex items-center justify-between  mt-12">
                <span className="sidebar_title text-lg">Labels</span>
                <button className="sidebar_icon sidebar_link text-xl"><GoPlus /></button>
              </li>
              
              </div>

          </ul>
          </aside>
        
        <div className="w-full bg-slate-50">
          <div className="w-full rounded-xl h-full bg-[#fff]">

            <div className="filter-bar sticky top-0">

            </div>
            <div className="mail-box">
              <div className="categories  ">
                <button className="category">
                  <div className="category-icon"><FaInbox/></div>
                  <span>Primary</span>
                </button>
                <button className="category">
                  <div className="category-icon"><PiTagLight /></div>
                  <span>Promotions</span>
                </button>
                <button className="category">
                  <div className="category-icon"><HiOutlineUsers /></div>
                  <span>Social</span>
                </button>
              </div>
              <hr />

              <div className="mail-wrapper w-full">
                <div className="flex items-center py-2 w-full hover:border hover:shadow-lg">
                  <div className="px-3"><input type="checkbox" /></div>
                  <div className="pr-3 text-xl "><MdOutlineStarOutline /></div>
                  <div className="flex flex-grow-1 w-96 pr-8"><span className="">Glassdoor jobs</span></div>
                  <div className="w-96 flex flex-grow-2 overflow-hidden whitespace-nowrap"><p className="pr-3 truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptate? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sint consequatur illo animi deleniti, odit officiis expedita autem quibusdam minima.</p></div>
                  <span className="flex-shrink-0">2:56PM</span>
                </div>
                
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
