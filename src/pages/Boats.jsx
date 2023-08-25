import React, {useState} from 'react'
import {HiOutlineBars3} from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai'
import { descriptionItems } from '../utils';
import { BsInstagram, BsFacebook, BsVimeo , BsFillEnvelopeFill } from 'react-icons/bs';
import { BoatDescription, BoatFeatures, BoatPlans } from '../components';


const Boats = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Features");
  const navigate = useNavigate()

  const buttons = [
    'Features',
    'Description',
    'Plans',
  ]

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <>
      <div
        className={`top-0 w-full ease-linear duration-200 bg-white text-black absolute h-[80%] z-20 hidden lg:inline ${
          showMenu ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <div className="mx-20 space-y-4 text-2xl">
          <div className="border-t border-gray-500 mt-[8.5rem]"></div>
          {/* container */}
          <div className="grid grid-cols-12 pt-3">
            {/* 1 column */}
            <div className="col-span-6 ml-4">
              <h1 className="font-semibold text-2xl mb-4">For Sale</h1>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150">
                  <p>See vessels</p>
                  <AiOutlineRight />
                </div>
                <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150">
                  <p>In stock</p>
                  <AiOutlineRight />
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-5">
                  <p className="text-sm text-gray-300 mt-20 mb-2">By brand</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                      <p>Jeanneau</p>
                      <AiOutlineRight />
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                      <p>Zodiac</p>
                      <AiOutlineRight />
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                      <p>Lomac</p>
                      <AiOutlineRight />
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                      <p>Pacific Craft</p>
                      <AiOutlineRight />
                    </div>
                    <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                      <p>Voraz</p>
                      <AiOutlineRight />
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <p className="text-sm text-gray-300 mt-20 mb-2">
                    By families
                  </p>
                  <div className="flex justify-between">
                    {/* LEFT DIV ICONS */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="14"
                          >
                            <g>
                              <path
                                d="M32.522 7.508l-1.429-2.474h-.33c-.048 0-2.498-.126-5.956-.282C22.862 2.999 14.39-.021 13.796.093c-.595.114-2.534 2.858-3.284 4.155C3.979 4.302.353 5.448.047 5.983l.858 1.044c1.16 1.417 5.062 6.058 6.443 6.305h25.09l.12-.45c.126-.487 1.267-4.54 1.279-4.582l.21-.726-1.525-.066zM22.459 4.632c-2.059-.09-4.328-.186-6.604-.27l1.2-2.048a51.32 51.32 0 015.404 2.318zm-8.405-3.326c.348.09 1.003.3 1.801.6l-1.393 2.402-1.483-.054h-1.122c.702-.979 1.777-2.468 2.221-2.948h-.024zM12.96 5.46c7.295.247 15.652.655 17.411.739l.721 1.243L3.121 6.12a43.156 43.156 0 019.864-.66h-.024zm18.558 6.677H7.504C6.855 11.92 4.676 9.645 2.7 7.304l29.773 1.405c-.264.954-.727 2.605-.955 3.428z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Walk Around</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="15"
                          >
                            <g>
                              <path
                                d="M32.31 8.226l-1.165-2.463h-.36c-.055 0-3.504-.18-8.016-.372l.253-1.58-1.202-.193-.276 1.718c-1.893-.084-3.924-.162-5.942-.24L17.5 1.557h4.933V.356h-7.3v1.201h1.01L14.285 5.03l-1.25-.042C5.358 4.73.503 5.968.06 6.7L.9 7.746c1.49 1.832 5.108 6.134 6.453 6.38h25.186l.097-.48c.066-.313.769-2.938 1.201-4.633l.199-.72-1.725-.067zM12.994 6.19c7.252.24 15.561.648 17.37.739l.6 1.231L3.087 6.85a42.658 42.658 0 019.895-.66h.012zm18.583 6.753H7.545c-.65-.217-2.836-2.53-4.807-4.903l29.813 1.406c-.319.973-.77 2.656-.986 3.497h.012z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Center Console</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="15"
                          >
                            <g>
                              <path
                                d="M32.31 8.735l-1.2-2.463h-.361l-1.652-.078-2.853-4.836h3.604V.156H16.89L9.117 5.503C3.711 5.683.413 6.62.053 7.22L.9 8.266c1.49 1.802 5.1 6.115 6.445 6.361l25.188.03.096-.48c.066-.312.769-2.938 1.202-4.631l.198-.721-1.718-.09zM17.294 1.34h7.611l2.781 4.763c-3.478-.162-9.353-.426-14.657-.6-.6 0-1.201-.03-1.754-.03l6.019-4.133zm-4.307 5.364c7.256.24 15.564.649 17.366.74l.601 1.23L3.08 7.366a42.65 42.65 0 019.906-.66zm18.58 6.752H7.538c-.65-.222-2.836-2.523-4.806-4.89l29.807 1.406c-.306.937-.757 2.631-.973 3.478v.006z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Weekender</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="17"
                          >
                            <g>
                              <path
                                d="M32.31 10.485l-1.2-2.463h-.36l-1.268-.066.81-1.838h1.803V4.917h-1.25l1.598-3.605-1.1-.486L28.22 7.92c-1.682-.078-4.06-.192-6.71-.306l-.054-5.719h2.259V.694H10.758v1.201h2.246l-3.97 5.406C3.687 7.488.414 8.42.023 9.013l.847 1.04c1.49 1.832 5.1 6.12 6.446 6.367l25.187.03.096-.48c.066-.313.77-2.944 1.202-4.632l.198-.72-1.688-.133zM14.5 1.853h5.755l.054 5.67c-2.36-.095-4.878-.198-7.28-.276a58.318 58.318 0 00-2.482-.03L14.5 1.853zm-1.514 6.608c7.257.24 15.564.649 17.367.739l.6 1.201-27.872-1.31a42.686 42.686 0 019.905-.642v.012zm18.58 6.746H7.538c-.649-.217-2.836-2.517-4.806-4.884l29.807 1.406c-.306.949-.757 2.619-.973 3.466v.012z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Sport-Fishing</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="14"
                          >
                            <g>
                              <path
                                d="M32.47 7.132l-1.353-2.457h-.33l-2.043-.096V1.613h1.744V.414H20.57l-8.49 3.482C5.313 3.764.483 4.615.094 5.304H.047l.138.755c1.096 5.92 2.313 6.993 2.936 7.107h29.362l.114-.456c.084-.335 1.276-4.793 1.276-4.793l.192-.713-1.594-.072zM20.805 1.595h6.741V4.5c-3.068-.144-7.88-.36-12.536-.527l5.795-2.38zM13.014 5.1c7.263.246 15.58.653 17.378.737l.665 1.199L3.6 5.484a53.8 53.8 0 019.444-.384h-.03zm18.522 6.897h-28.2c-.473-.341-1.276-2.726-1.827-5.393L32.507 8.36c-.264.977-.743 2.762-.97 3.637z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Day Boat</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="15"
                          >
                            <g>
                              <path
                                d="M31.992 7.587h-3.723v-4.34h-1.208v4.334h-6.648l.574-2.907-1.209-.236-.604 3.137h-3.928l3.946-6.152h10.709V.213H15.572v1.21h2.194l-3.934 6.152h-1.427a8.83 8.83 0 01-1.378-.115L2.434 6.028C1.829 5.93.62 6.028.228 7.06a2.006 2.006 0 000 1.638 2.58 2.58 0 001.626 1.245l.247.066c2.019 4.297 9.204 4.52 9.525 4.527H31.26l.344-2.66h.544a2.018 2.018 0 001.402-.604 2.128 2.128 0 00.51-1.672 2.043 2.043 0 00-2.067-2.012zm-1.813 5.693l-18.53-.03c-.06 0-5.577-.176-7.855-2.92 2.205.448 5.638 1.082 7.403 1.402.237.04.478.063.719.067l18.438.054-.175 1.427zm2.478-2.877a.798.798 0 01-.502.218l-20.227-.067a2.72 2.72 0 01-.502-.042c-4.019-.731-8.539-1.584-9.18-1.813a1.475 1.475 0 01-.888-.605.78.78 0 01.042-.658c.091-.23.46-.266.683-.266h.176l8.581 1.426c.521.086 1.049.13 1.577.133l19.514.12a.816.816 0 01.84.847.985.985 0 01-.133.707h.019z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>RIB</p>
                      </div>
                    </div>
                    {/* RIGHT DIV ICONS */}
                    <div className="space-y-2 mr-10">
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="15"
                          >
                            <g>
                              <path
                                d="M40.029 9.355a2.232 2.232 0 00-2.316-2.039h-1.78l.652-1.465h1.81V4.644H37.14l1.604-3.619L37.64.543l-3.015 6.791H25.33l.09-2.6-1.205-.041-.09 2.635H19.77l1.724-4.264 1.104.489.489-1.11L19.715.91l-.482 1.104 1.152.506-1.924 4.747h-3.939c-.555 0-1.11-.043-1.659-.127L2.738 5.651C2.03 5.496.607 5.514.21 6.732a2.207 2.207 0 000 1.755 2.817 2.817 0 001.81 1.207c.072 0 .186.048.319.078 2.328 4.336 10.826 4.59 11.206 4.602h22.986l.567-2.624h.814a2.352 2.352 0 001.634-.687 2.087 2.087 0 00.483-1.707zm-4.47 3.715H13.613c-.079 0-6.695-.199-9.41-2.985 2.256.41 5.827.995 8.909 1.495.271.04.545.063.82.067l21.924.06-.295 1.363zm3.095-2.865a1.17 1.17 0 01-.748.302l-23.969-.067a4.498 4.498 0 01-.603-.054C7.049 9.373 3.081 8.686 2.441 8.492c-.44-.126-.959-.313-1.103-.603a1.164 1.164 0 01.048-.82c.084-.253.404-.314.687-.314.158.004.315.018.47.042L12.72 8.3c.599.09 1.204.137 1.81.139l23.16.066a1.056 1.056 0 011.134.941.925.925 0 01-.17.766v-.006z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>RIB Diving-Fishing</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="14"
                          >
                            <g>
                              <path
                                d="M40.04 8.443a2.128 2.128 0 00-.734-1.573 2.356 2.356 0 00-1.634-.482h-7.34V1.566h4.218V.361H24.486l-7.678 5.966h-2.23a10.92 10.92 0 01-1.664-.126L2.801 4.712C2.102 4.543.661 4.568.234 5.87a2.103 2.103 0 000 1.688 2.814 2.814 0 001.874 1.169l.314.078c2.332 4.34 10.806 4.508 11.173 4.514h23.017l.548-2.567h.741a2.315 2.315 0 001.597-.669 2.121 2.121 0 00.543-1.64zm-15.12-6.9h4.218v4.82h-2.887l.344-2.067-1.205-.193-.374 2.26h-6.274l6.178-4.82zm10.673 10.54H13.607c-.072 0-6.665-.133-9.371-2.905 2.742.5 7.232 1.205 8.907 1.5.271.042.545.062.82.061l21.907.066-.277 1.278zm3.05-2.802c-.2.18-.455.284-.724.295l-23.956-.079a3.58 3.58 0 01-.603-.048C8.6 8.684 3.241 7.786 2.47 7.557c-.519-.15-1.013-.326-1.145-.573a1.14 1.14 0 01.054-.753.705.705 0 01.741-.398c.152.002.303.018.452.048L12.74 7.382c.599.09 1.203.137 1.808.139l23.15.066h.072c.272-.018.541.056.765.21a.946.946 0 01.302.724.988.988 0 01-.193.76z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Yatch Tender</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="13"
                          >
                            <g>
                              <path
                                d="M33.26 4.718a1.824 1.824 0 00-1.276-.483L12.72 4.14a5.502 5.502 0 01-1.317-.167l-1.294-.322.227-2.217L5.173.343l-.274 2.009-1.371-.346A2.82 2.82 0 00.238 3.59l-.048.137c-.626 2.331.912 3.082 1.824 3.53l.13.065c.164.07.331.132.501.185 2.105 5.215 8.942 5.364 9.275 5.394h19.265l.46-3.213h.673a1.406 1.406 0 001.02-.411 3.11 3.11 0 00.732-2.349 2.884 2.884 0 00-.81-2.211zM6.18 1.773l2.855.596-.095.984-2.879-.715.12-.865zm23.974 9.937H11.932c-.06 0-5.501-.143-7.749-3.767 1.192.304 2.724.68 4.489 1.096 1.234.298 2.295.549 2.783.686.25.067.506.1.763.101l18.204-.125-.268 2.009zm2.176-3.213l-20.1.137a1.967 1.967 0 01-.453-.06c-.5-.137-1.573-.393-2.82-.69C6.8 7.37 3.195 6.505 2.676 6.25l-.137-.066C1.596 5.725.97 5.415 1.346 4.062a1.592 1.592 0 011.484-.947c.14-.002.281.014.417.047l7.88 1.967c.523.133 1.06.2 1.598.203l19.283.095h.042c.162.013.316.08.435.191.288.378.425.85.381 1.323-.006 1.24-.381 1.52-.548 1.556h.012z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Dinghy</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="16"
                          >
                            <g>
                              <path
                                d="M31.306 7.646a1.734 1.734 0 00-1.208-.457l-11.79-.057.566-2.65-1.102-.248-.65 2.893H13.13l1.61-3.955 1.796.735.43-1.05L12.128.895l-.424 1.05 1.989.803-1.785 4.344h-.102a5.204 5.204 0 01-1.243-.159l-1.23-.303.215-2.107-4.892-1.028-.26 1.904-1.853-.463c-.536-.141-1.694 0-2.31 1.514-.661 1.694.305 3.039 1.559 3.654.151.072.308.133.469.181 1.994 4.943 8.501 5.084 8.795 5.084h18.256l.43-3.045h.621a1.35 1.35 0 00.96-.39 2.948 2.948 0 00.7-2.225 2.756 2.756 0 00-.717-2.062zm-25.64-2.79l2.707.565-.096.932-2.723-.684.113-.813zm22.714 9.416H11.09c-.057 0-5.208-.141-7.344-3.57 1.13.288 2.576.644 4.248 1.04 1.17.282 2.18.52 2.638.643.236.065.479.1.723.102l17.257-.119-.232 1.904zm2.068-3.045l-19.053.13a1.573 1.573 0 01-.424-.062c-.48-.13-1.497-.373-2.672-.65-2.045-.49-5.468-1.304-5.954-1.547-.265-.13-1.559-.853-1.01-2.26.293-.745.705-.841.892-.841h.05L10.3 8.002a6.32 6.32 0 001.514.192l18.279.09h.034c.154.012.3.075.412.181.278.356.41.805.367 1.254.023 1.21-.338 1.514-.48 1.514l.023-.006z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Jet Tender</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="10"
                          >
                            <g>
                              <path
                                d="M32.595.558a1.578 1.578 0 00-1.152-.483H.901a1.065 1.065 0 00-.817.756C-.294 2.193 2.38 5.065 4.028 6.675c1.052.941 3.096 2.508 4.83 2.508h21.86a1.641 1.641 0 001.561-1.09c.526-1.523.693-4.643.743-6.365a1.61 1.61 0 00-.427-1.17zm-1.152.786a.347.347 0 01.26.112.335.335 0 01.105.266c0 .347 0 .817-.055 1.356L2.239 2.88a5.764 5.764 0 01-.942-1.536h30.146zm-.7 6.631H8.877c-1.146 0-2.817-1.133-3.988-2.173a31.095 31.095 0 01-1.61-1.696l28.407.192c-.06 1.15-.24 2.292-.539 3.405a.415.415 0 01-.402.241v.031z"
                                fill="#000"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>Bote</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd column */}
            <div className="col-span-3 border-r border-l border-gray-500">
              <div className="ml-5 font-semibold text-2xl">
                <h1 className="mb-2">Services</h1>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                    <p>Financing</p>
                    <AiOutlineRight />
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                    <p>Maintenance</p>
                    <AiOutlineRight />
                  </div>
                </div>
                <h1 className="mt-[7rem]">Occasion</h1>
                <div className="flex items-center space-x-2 text-sm font-semibold hover:text-red-500 ease-in-out duration-150 hover:cursor-pointer">
                  <p>Financing</p>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
            {/* 3rd column */}
            <div className="col-span-3 mx-auto">
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/02/img-menu-01.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <main
        className="h-full overflow-auto overflow-x-hidden overflow-y-hidden lg:absolute lg:overflow-y-auto"
        onMouseEnter={() => setShowMenu(false)}
      >
        {/* SIDEBAR DIV FOR MOBILE VERSION */}
        <aside
          className={`top-0 right-0 w-[80%] ease-linear duration-200 bg-white text-black absolute h-full z-40 lg:hidden ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="mx-5 space-y-4 text-2xl">
            <div className="flex flex-row-reverse p-3">
              <AiOutlineClose
                className="text-3xl mt-3 text-black"
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <h1>
              The nautical of Ibiza, <br />
              since 1925
            </h1>
            <div className="border-t-2 border-gray-500"></div>
            <div className="flex justify-between font-semibold">
              <Link to="/boats">
                <h1>Boats</h1>
              </Link>
              <AiOutlineRight />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Yamaha</h1>
              <AiOutlineRight />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Nautical equipment</h1>
              <AiOutlineRight />
            </div>
            <div className="flex justify-between font-semibold">
              <h1>Water sports</h1>
              <AiOutlineRight />
            </div>
            <h1 className="font-semibold">Sea Magazine</h1>
            <h1 className="font-semibold">We</h1>
            <h1 className="font-semibold">
              <Link to="/contact">Contact</Link>
            </h1>
          </div>
        </aside>
        {/* sticky Navbar */}
        <div className="flex h-[8%] lg:h-[11%] w-full justify-between lg:justify-normal sticky top-0 bg-white z-30 lg:p-6">
          <img
            src="https://nauticaereso.com/wp-content/uploads/2023/01/logo.svg"
            alt="logo"
            className="w-[30%] ml-4 lg:w-[10%] hover:cursor-pointer"
            onClick={() => navigate("/")}
          />
          <HiOutlineBars3
            className="text-5xl text-black m-3 lg:hidden"
            onClick={toggleShowSidebar}
          />
          <div className="hidden md:flex font-semibold text-medium space-x-10 items-center pl-[35%] ">
            <h1
              className="hover:text-red-500 lg:cursor-pointer"
              onMouseOver={toggleShowMenu}
            >
              Boats
            </h1>
            <h1 className="hover:text-red-500 lg:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </h1>
          </div>
        </div>
        {/* top section (images and product specifications) */}
        <section className="">
          {/* container */}
          <div className=" lg:h-screen flex flex-col lg:mx-7 lg:flex-row lg:overflow-y-auto lg:mt-10">
            {/* images container */}
            <div className="lg:h-max flex m-3 space-x-2 lg:space-y-14 lg:overflow-y-auto lg:flex-col overflow-x-auto h-[15rem] lg:w-[50rem]">
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-IB-barco-en-stock-scaled.jpg"
                alt="image"
                className="w-[calc(100%-1.25rem)] lg:ml-2 lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-nueva-Ibiza-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-IB-mesa-popa-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-cockpit-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-cocina-popa-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-solarium-proa-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-balcon-scaled.jpg"
                alt="image"
                className="lg:w-full lg:h-[32rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-cabina-scaled-e1679074697335.jpg"
                alt="image"
                className="lg:w-full lg:h-[34rem]"
              />
              <img
                src="https://nauticaereso.com/wp-content/uploads/2023/03/Jeanneau-DB-43-lavabo-scaled-e1679074859183.jpg"
                alt="image"
                className="lg:w-full lg:h-[37.5rem]"
              />
            </div>
            {/* specifications container */}
            <div className="flex flex-col mx-3 mt-10 lg:mt-1 lg:sticky lg:top-0 lg:w-[40%] lg:mx-auto">
              <div>
                <h1 className="font-bold text-5xl lg:text-[5.5rem]">
                  Jeanneau DB/43 OB
                </h1>
              </div>
              {/* buttons */}
              <div className="flex justify-between mt-10 space-x-2">
                {buttons.map((item, index) => {
                  return (
                    <button
                      type="button"
                      className={`p-4 lg:p-1 w-[33.33%] font-bold text-lg  ${
                        active == item && "text-white bg-red-500"
                      }`}
                      key={index}
                      onClick={() => {
                        setActive(item);
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {/* Description div */}
              {active == buttons[0] ? (
                <BoatFeatures />
              ) : active == buttons[1] ? (
                <BoatDescription />
              ) : (
                <BoatPlans />
              )}
              {/* PRICE DIV AND BUTTON */}
              {/* container */}
              <div className="mt-10 lg:mt-2 flex flex-col mx-3 lg:flex-row lg:justify-between">
                {/* price div */}
                <div className="flex flex-col text-center lg:text-left">
                  <p className="text-sm">From</p>
                  <div className="flex text-left font-bold  lg:flex-col-reverse">
                    <p className="w-[50%] text-lg lg:text-sm lg:w-full">
                      (5.320 E/month) <br />
                      <span className="underline">Customize your quota</span>
                    </p>
                    <h1 className="font-bold text-2xl">
                      787.200 E <br className="lg:hidden" />
                      (tax incl.)
                    </h1>
                  </div>
                </div>
                {/* button div */}
                <div className="my-5 lg:grid lg:content-end lg:w-[40%]">
                  <button className="bg-black w-full p-4 lg:p-1 lg:text-sm lg:font-light lg: text-white">
                    I WANT THIS BOAT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section className="h-96 lg:h-[40rem]  mt-10 mb-10 mx-4 flex flex-col items-center justify-center space-y-7 lg:text-center relative lg:relative">
          <img
            src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-flag-red.svg"
            alt="image"
            className="top-20 left-80 absolute"
          />
          <img
            src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-cross-green.svg"
            alt="image"
            className="absolute top-80 right-40"
          />
          <img
            src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-square-in-square-green.svg"
            alt="image"
            className="absolute top-40 right-80"
          />
          <img
            src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-chess-2x2-red.svg"
            alt="image"
            className="absolute top-2 left-40 lg:top-50 lg:left-40 "
          />
          <img
            src="https://nauticaereso.com/wp-content/themes/ereso/images/ico-decor-burger-red.svg"
            alt="image"
            className="absolute bottom-20 left-80"
          />
          <h1 className="text-xl lg:text-3xl font-bold w-[80%] uppercase lg:normal-case lg:pb-4 ">
            Contact us to learn more
          </h1>
          <button className="bg-black p-3 lg:p-2 lg:text-sm lg:w-[10%] w-[50%] flex space-x-5 justify-center items-center text-white lg:hover:bg-red-500 ease-in-out duration-200">
            <BsFillEnvelopeFill className="text-2xl" />
            <h1>CONTACT</h1>
          </button>
        </section>
        {/* FOOTER */}
        <section className=" bg-[#fa503c]">
          <div className="space-y-8 flex flex-col  justify-center items-center">
            <div className="lg:flex lg:items-center lg:justify-between lg:w-[80%] lg:mt-60">
              <div className="hidden lg:block space-y-4 text-center text-white">
                <h1>SCHEDULE</h1>
                <h1>MONDAY - FRIDAY</h1>
                <h1>
                  9:00 - 13:00 H <br /> 16:00 - 20:00 H
                </h1>
                <h1>SATURDAYS</h1>
                <h1>9:00 - 13:00 H</h1>
              </div>
              <div className="pt-20 lg:p-0 text-white space-y-4 text-center">
                <h1>CONTACT US:</h1>
                <h1>INFO@NAUTICAERESO.COM</h1>
                <h1>
                  971 199 605 <br /> (BOATS AND MOTOR SHOP)
                </h1>
                <h1>
                  971 199 605 <br />
                  (ACCESSORIES STORE)
                </h1>
              </div>
              <div className="text-white text-center space-y-4">
                <h1>ADDRESS:</h1>
                <h1>
                  SANTA EULARIA AV. <br />
                  DES RIU,23-27 <br />
                  07800
                </h1>
                <h1>IBIZI (BALEARIC ISLANDS)</h1>
                {/* ICONS FOR DESKTOP */}
                <div className="text-white text-center pt-2 lg:ml-8 text-2xl space-x-9 hidden lg:flex">
                  <BsInstagram />
                  <BsFacebook />
                  <BsVimeo />
                </div>
              </div>
              {/* ICONS FOR MOBILE */}
              <div className="flex text-white text-center ml-8 pt-2 text-2xl space-x-9 lg:hidden">
                <BsInstagram />
                <BsFacebook />
                <BsVimeo />
              </div>
            </div>
            <img
              src="https://nauticaereso.com/wp-content/uploads/2023/01/ico-logo-footer.svg"
              alt="image"
              className="w-[90%] pt-6 lg:pt-20"
            />
          </div>
          <div className="mt-5 pb-4 space-y-3">
            <h1 className="text-white pl-4 text-lg lg:hidden">
              Terms and Conditions
            </h1>
            <p className="text-small pl-4 lg:pl-20 text-sm text-white">
              2023. Nautica Ereso. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Boats