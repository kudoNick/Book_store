"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SgetDetailBook } from "@/services/book/book";
import Link from "next/link";
import Image from "next/image";
import { Calistoga } from "next/font/google";

export default function CdetailBook({ idBook, book }) {
  const [detailBook, setDetailBook] = useState([]);
  const [error, setError] = useState("");

  const [isLove, setIsLove] = useState(true);
  const [isShowFullText, setIsShowFullText] = useState(true);

  console.log(detailBook);
  useEffect(
    () => async () => {
      console.log(idBook);
      const respones = await SgetDetailBook(idBook);

      if (respones?.status === "200") {
        setDetailBook(respones?.data);
      } else if (respones?.status === "404") {
        setError(respones?.messages);
      }
    },
    []
  );

  function handleClickIsLove() {
    setIsLove(!isLove);
  }
  function handleShowFuullText() {
    setIsShowFullText(!isShowFullText);
  }
  return (
    <div className="flex flex-col m-6">
      <div className="flex flex-row">
        <Link
          href={`/type-book/${book?.typeBook?.id}`}
          className="text-sm  mb-2"
        >
          {book?.typeBook?.nameType}
        </Link>
        <h1 className="text-sm  mb-2 ml-1 mr-1">&gt; </h1>
        <Link
          href={`/category-book/${book?.catetoryBook?.id}`}
          className="text-sm  mb-2"
        >
          {book?.catetoryBook?.nameCategory}
        </Link>
      </div>
      <div className="flex flex-row  ">
        <div class="basic-1/3">
          <Image
            className="rounded-2xl"
            src={book?.imageBook}
            alt="Picture of the book"
            style={{ width: "auto", height: "auto" }}
            width={260}
            height={350}
            // priority={true}
          />
        </div>

        <div className="ml-12 flex flex-col divide-y divide-gray-500 basis-3/6">
          <div className="flex flex-col ">
            <h1 className="text-2xl font-bold mb-2">{book?.nameBook}</h1>

            <div className="flex flex-row ">
              <h1>5.0 </h1>
              <h1 className="ml-1">★★★★★</h1>
              <h1 className="ml-8"> 5 đánh giá </h1>
            </div>
            <div className="flex flex-row mt-3">
              <div className="flex flex-col">
                <h1>Tác giả</h1>
                <h1 className="font-bold">{book?.auther?.name}</h1>
              </div>

              <div className="flex flex-col ml-20">
                <h1>Thể loại</h1>
                <h1 className="font-bold">
                  {book?.catetoryBook?.nameCategory}
                </h1>
              </div>

              <div className="flex flex-col ml-20">
                <h1>Nhà xuất bản</h1>
                <h1 className="font-bold">{detailBook?.publisher || "NaN"}</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-3">
            <div className="flex row mt-3">
              <button class=" mr-3 border border-green-500 bg-green-300 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full flex items-center">
                <svg
                  class="w-4 h-4 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Thêm vào giỏ hàng
              </button>
              <button class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full flex items-center">
                <svg
                  class="w-4 h-4 text-gray-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V2ZM5 0C3.34315 0 2 1.34315 2 3V21C2 22.6569 3.34315 24 5 24H19C20.6569 24 22 22.6569 22 21V3C22 1.34315 20.6569 0 19 0H5ZM5 3H19V21H5V3ZM9 8C8.44772 8 8 8.44772 8 9V13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13V9C16 8.44772 15.5523 8 15 8H9ZM9 9H15V13H9V9ZM7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H8C7.44772 5 7 4.55228 7 4Z"
                    fill="#000000"
                  />
                </svg>
                Mua sách
              </button>

              <button
                onClick={handleClickIsLove}
                type="button"
                className={
                  isLove
                    ? "ml-20 border border-red-500  hover:border-red-600 hover:text-red-600 text-black font-bold py-1 px-2 rounded-full flex items-center"
                    : "ml-20 border border-red-500 bg-red-500 text-white font-bold py-1 px-2 rounded-full flex items-center"
                }
              >
                <svg
                  class="size-6 hover:stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>

            <p
              onClick={handleShowFuullText}
              className={
                isShowFullText
                  ? "mt-12 line-clamp-4 text-justify"
                  : "mt-12 line-clamp-none text-justify"
              }
            >
              Bạn có thể lựa chọn kiểm soát sự tập trung của mình, hoặc để người
              khác đánh cắp nó. Khi bạn học cách tránh xa các hoạt động kích
              thích cao độ gây phá hủy khả năng bình tĩnh và tập trung, bạn sẽ
              thấy mình có thể giải quyết các nhiệm vụ quan trọng ở mức dễ dàng
              hơn bao giờ hết. Thực hiện quá trình giải độc dopamine sẽ giúp bạn
              giảm mức độ kích thích và đảm bảo bản thân hoàn thành các công
              việc chính. Hãy nhớ rằng sự phấn khích và thỏa mãn là hai điều
              khác nhau. Khi bạn học cách loại bỏ các kích thích bên ngoài và
              đắm mình vào công việc, sở thích hoặc các mối quan hệ, bạn sẽ trải
              nghiệm cảm giác thỏa mãn sâu sắc hơn và cảm thấy tốt hơn nhiều.
              Bạn cũng sẽ trở nên năng suất hơn và đạt được nhiều mục tiêu cũng
              như ước mơ của mình. Vì vậy, hãy ngừng để môi trường tác động đến
              não bộ của bạn và thay vào đó, hãy kiểm soát lại nó. Đây là chìa
              khóa cho một cuộc sống khỏe mạnh và hiệu quả. Waka xin trân trọng
              giới thiệu Dopamine Detox - Thibaut Meurisse! Rút gọn Xem
            </p>

            <h1 className="mt-12 font-bold">
              Khách hàng nói gì về '{book?.nameBook}'{" "}
            </h1>
            <h1 className="mt-2 font-bold text-green-600">
              Đánh giá & nhật xét
            </h1>
          </div>

          <div className="flex flex-col mt-3 ">
            <div className=" mt-2 flex flex-row  bg-gray-500 shadow-sm rounded-md ">
              <div className="flex flex-row w-full h-full ">
                <div className="flex flex-col m-4 ">
                  <h1 className="text-5xl font-bold">5.0</h1>
                  <h1 className="mt-1 text-sm">5 đánh giá</h1>
                </div>

                <div class="basis-3/4 ml-6">
                  <div class="">
                    <div class="mt-4">
                      <div class="mt-2">
                        <div class="flex items-center mb-1">
                          <span class="text-yellow-400 text-lg">
                            ⭐⭐⭐⭐⭐{" "}
                          </span>
                          <div class="bg-gray-600 h-2 rounded-lg flex-grow ml-2">
                            <div
                              class="bg-yellow-400 h-full rounded-lg"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>
                        <div class="flex items-center mb-1">
                          <span class="text-yellow-400 text-lg">⭐⭐⭐⭐</span>
                          <div class="bg-gray-600 h-2 rounded-lg flex-grow ml-2"></div>
                        </div>
                        <div class="flex items-center mb-1">
                          <span class="text-yellow-400 text-lg">⭐⭐⭐</span>
                          <div class="bg-gray-600 h-2 rounded-lg flex-grow ml-2"></div>
                        </div>
                        <div class="flex items-center mb-1">
                          <span class="text-yellow-400 text-lg">⭐⭐</span>
                          <div class="bg-gray-600 h-2 rounded-lg flex-grow ml-2"></div>
                        </div>
                        <div class="flex items-center">
                          <span class="text-yellow-400 text-lg">⭐</span>
                          <div class="bg-gray-600 h-2 rounded-lg flex-grow ml-2"></div>
                        </div>
                      </div>
                    </div>
                    <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center ml-96">
                      <svg
                        class="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 21H7V9h2v12zm8-2H11V5h2V3h2v2h2v14zm-8-4h8V5h2v10H9v-2zm-8-3H7V3H5v9H1v2z" />
                      </svg>
                      Viết đánh giá
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}