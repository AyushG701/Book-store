import React from "react";
import { FiMenu, FiHome, FiTrello, FiInbox } from "react-icons/fi";
import {
  AiOutlineInbox,
  AiOutlineUser,
  AiOutlineShop,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineQuestionCircle,
  AiOutlineAppstore,
  AiOutlineArrowUp,
} from "react-icons/ai";

import userImage from "../assets/profile.jpg";
const SideBar = () => {
  return (
    <div className="flex">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {/* <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg> */}
        <FiMenu />
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <a href="/" className="flex items-center pl-2.5 mb-5 ">
              <img
                src={userImage}
                className="h-6 mr-3 sm:h-7 rounded-full"
                alt="User Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Book Admin
              </span>
            </a>
            <li>
              <a
                href="/admin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
              >
                <FiHome />
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/admin/dashboard/upload"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
              >
                <FiTrello />
                <span className="ml-3">Upload your book</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/dashboard/manage"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
              >
                <AiOutlineInbox className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                <span className="ml-3">Manage YOur book</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-700 dark:hover-bg-gray-700 group"
              >
                <AiOutlineUser className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                <span className="ml-3">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-700 dark:hover-bg-gray-700 group"
              >
                <AiOutlineLogin className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                <span className="ml-3">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-700 dark:hover-bg-gray-700 group"
              >
                <AiOutlineShop className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                <span className="ml-3">Logout</span>
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-700 dark:hover-bg-gray-700 group"
              >
                <AiOutlineUserAdd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                <span className="ml-3">Sign Up</span>
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Actions
            </span>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700"
                >
                  <AiOutlineArrowUp className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                  <span className="ml-3">Upgrade to Pro</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700"
                >
                  <AiOutlineAppstore className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                  <span className="ml-3">Documentation</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700"
                >
                  <AiOutlineQuestionCircle className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover-text-white" />
                  <span className="ml-3">Help</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {/* Main content area */}
        {/* Placeholder elements */}
      </div>
    </div>
  );
};

export default SideBar;
