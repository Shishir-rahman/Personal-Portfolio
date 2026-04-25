import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Calendar, Quote, ChevronRight, BookOpen } from 'lucide-react';

const TravelBlog = () => {
  const stories = [
    {
      id: "five-billion-star",
      title: "Five Billion Star Hotel",
      subtitle: "The Story of Five Billion Star Hotel ❤️",
      date: "October, 2020",
      location: "Bethany Para, Bandarban",
      tag: "Featured Story",
      images: [
        "/images/blog/star_hotel_1.jpg",
        "/images/blog/star_hotel_2.jpg",
        "/images/blog/star_hotel_3.jpg"
      ],
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            বয়স সবে ২৩, এ জীবনটা না দৈর্ঘ্যের হিসাবে বড়, না গুণের হিসাবে......গুণ বলতে ঐ একটাই ঘোরাঘুরি ভালোই পারি। ভ্রমণ জিনিসটা যেন শিরায় শিরায় বহমান। হাতেখড়ি হয়েছিল আব্বুর হাত ধরেই কিন্তু ইন্টারমিডিয়েট লাইফ থেকে একাই চলতে শিখেছি।
          </p>
          <p>
            ভ্রমণের ফলে দেশের বিভিন্ন যায়গায় গাছতলা থেকে Five Star হোটেল পর্যন্ত রাত কাটিয়েছি, কিন্তু আজকে আমি ফাইব বিলিয়ন স্টার হোটেলের কথা বলবো❤️
            ভ্রমণের জন্য সবচেয়ে বেশি যে যায়গাটা টানে সেটা হলো পাহাড়⛰️⛰️ ভাগ্যক্রমে কলেজ লাইফে আমার বেষ্ট ফ্রেন্ড হয় স্টিফেন বম, বান্দরবানের আদিবাসী ছেলে। মাঝে মাঝেই ওর বাসায় যাওয়া হতো এবং ওদের কালচারে মেশা হতো। যার ফলে ওদের লাইফস্টাইল খুব কাছ থেকে দেখার সৌভাগ্য হয়েছে।
          </p>

          <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-neonBlue my-8">
            <Quote className="text-neonBlue/40 mb-2" size={32} />
            <p className="italic text-gray-200 text-base md:text-lg">
              "মাচাং ঘরে চিত হয়ে শুয়ে আকাশের দিকে তাকিয়ে আছি, আকাশে কি দেখতে পাচ্ছি জানেন?....কয়েক লক্ষ বা কোটি কোটি তারা🤩 তাই আমার আজকের থাকায় যায়গাটা Five Billion Star Hotel❤️"
            </p>
          </div>

          <p>
            গত ১৩ তারিখ বান্দরবান যাই স্টিফেনের বাসায়। প্লান ছিলো রাতে পাহাড়ে থাকবো। স্টিফেনদের বান্দরবানে কয়েকটা পাহাড় আছে সেগুলোতে আনারস, আম, পেপে চাষ করা হয়। আমাদের প্লান ছিলো আমরা রাতে পাহাড়ের চুড়ায় মাচাং ঘরে থাকবো। সেই অনুযায় আমরা বান্দরবান শহর থেকে মুরগি আর প্যাকেট পরোটা কিনে নিয়ে যাই রাতে বারবিকিউের জন্য।
          </p>
          <p>
            খাওয়াদাওয়া শেষে কিছুক্ষণ রেষ্ট নেওয়া হলো। রাত গভীর হয়ে যাচ্ছে আমরা মাচাং ঘরে শুয়ে আছি, গান চলছে তার আপন গতিতে, শোঁশোঁ করে বাতাস বয়ে যাচ্ছে গা স্পর্শ করে... নিরবতা ভেঙে ঝিঝিপোকা ডেকে যাচ্ছে অবিরাম। আপনি কল্পনা করুন আপনি এমন একটা যায়গায় শুয়ে আছেন যেটা সমুদ্রপৃষ্ঠ থেকে হাজার ফুট উচু কোন এক পাহাড়, আশেপাশে আপনি ছাড়া আর কেউ নেই, লক্ষ লক্ষ তারা দেখছেন... বিনা খরচায় যা পাচ্ছেন তা লাখ টাকা খরচ করে কোন Five star হোটেলেও পাবেন না।
          </p>
          <p className="font-bold text-neonBlue">
            এ যেন দুনিয়ার বুকে স্বর্গীয় অনুভূতি ❤️❤️❤️
          </p>
        </div>
      )
    },
    {
      id: "sunamganj-adventure",
      title: "Sunamganj Adventure",
      subtitle: "চার জনের সুনামগঞ্জের গল্প 🥰",
      date: "March, 2021",
      location: "Sunamganj, Sylhet & Srimangal",
      tag: "Road Trip",
      images: [
        "/images/blog/sunamganj_1.jpg",
        "/images/blog/sunamganj_2.jpg",
        "/images/blog/sunamganj_3.jpg"
      ],
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-neonPurple scrollbar-track-white/5">
          <p>
            চার জনের সুনামগঞ্জের গল্প🥰
          </p>
          <p>
            সন্ধ্যায় লিংরোডে চা খাচ্ছিলাম আমি আর রাজ, চায়ে চুমুক দিতেই শাকিলের আগমন...মামা আরেক কাপ চা দিন। চায়ে চুমুক দিতে দিতে বিস্তার পরিকল্পনা কারণ একটু পরেই আমরা সুনামগঞ্জের উদ্দেশ্যে রওনা দিবো। ওদিকে কাউন্টারে যামি বসে আছে। রং চায়ের প্রতি চুমুকটা যেন মাথার জট খুলে দিচ্ছে। চা শেষ করে কাউন্টারে এসে দেখি বোকাসোকা যামি গাপটি মেরে বসে আছে, তার মুখ যেন বলছে তার মাথায় কত চিন্তা হয়তো সে কার্গিলের যুদ্ধে যাচ্ছে😅
          </p>
          <p>
            রাতের খাবার শেষে আমরা বাসে চেপে বসলাম, নাইট কোচ গুলা যেন একেকটা রোলার কোস্টার। ফজরের একটু পরে বাস সুনামগঞ্জ বাসস্ট্যান্ডে পৌঁছালো, আমরা নেমেই চলে গেলাম পানশি রেস্টুরেন্টে (সিলেট অঞ্চলে পানশি সবচেয়ে ভালো এবং জনপ্রিয় রেস্টুরেন্টে)। পানশি ঢুকে সবাই ফ্রেস হয়ে যখন টেবিলে বসলাম তখন খাবারের মেনু দেখে বাকি ৩ জনের চোখ ছানাবড়া, খাবারের দাম সবার কাছে পানির মত, এতে বড় রেস্টুরেন্টে এতো কম দামে খাবার কেউ ভাবতেই পারে নাই।
          </p>

          <p>
            ভোর বেলা বাইক নিয়ে যখন সুরমা ব্রিজ পার হচ্ছি তখন মনে হচ্ছে সৌন্দর্য যেন গিলে খাচ্ছি। প্রথমে যাদুকাটা নদী তারপর বারিক্কের টিলা দেখে যখন নীলাদ্রি লেকে যাচ্ছিলাম তখন রাস্তার মধ্যে জামাল ভাই বললো ভাই চলেন এই পাশে একটা যায়গা আছে, জামাল ভাইয়ের পিছে পিছে খাসিয়াদের পাড়া পার হয়ে একটু সমানে যেতেই দেখি বাংলাদেশ ভারতের সীমান্ত পিলার তার সমানেই তারকাঁটার বেড়া। জামাল ভাই বললো ভাই ইন্ডিয়ার বর্ডারে মুতে দেন😆 আমরা চারজন সাথে সাথেই ইন্ডিয়ার বর্ডারে হিসু করতে করতে বললাম মুতে দিলাম তোরে🤣
          </p>

          <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-neonPurple my-8">
            <Quote className="text-neonPurple/40 mb-2" size={32} />
            <p className="italic text-gray-200 text-base md:text-lg">
              "প্রকৃতি কত সুন্দর সেটা উপলব্ধি করতে প্রকৃতিকে অন্তরচক্ষু দিয়ে দেখতে হবে। সৌন্দর্য দেখতে কাশ্মির যেতে হয় না, সৌন্দর্যকে উপলব্ধি করতে পারলে ঘরের পাশও কাশ্মির হয়ে যায়।"
            </p>
          </div>

          <p>
            ফেরার পথে নীলাদ্রি লেকে ঝাপ🏊♂️ যেন সবাই প্রকৃতির সৌন্দর্যে স্নান করছি। এখন আমরা দুপুরের খাবার খেতে জয়বাংলা বাজারে। টাঙ্গুয়া হাওরের মাছ দিয়ে সবাই যখন ভাত খাচ্ছে তখন আমি হাওরের হাঁসের মাংস চিবাচ্ছি। প্রতিটা খাবারের দানা যেন অমৃত। খাওয়া শেষ করে শিমুলবাগান হয়ে সুনামগঞ্জ ফিরছি। সুনামগঞ্জ দেখার সব শেষ এখন আমরা সিলেট যাবো।
          </p>

          <p>
            সিলেটে এসে পাঁচভাই রেস্টুরেন্টে গরুর ভুনা খাচ্ছি নাকি অমৃত খাচ্ছি বলাবাহুল্য। অমৃত ঢেঁকুর তুলে যখন হোটেলে তখন সবার চোখে ঘুমে কাত কিন্তু শাকিল আর যামি কার্ড খেলবে। ঘুম বাদ কার্ড ইজ অন😄 শাকিলের এখন গেম খাবে, তার পার্টনার যামিকে আচ্ছা মত ধুয়ে দিচ্ছে এদিকে আমরা বিজয়ের হাসি নিয়ে ঘুম😄 ঘুমানোর সময় ছিলাম এক খাটে আর ঘুম থেকে উঠে দেখে অন্য খাটে, এই সাইন্সটা এখনও বুঝলাম না।
          </p>

          <p>
            সিলেট শেষে আমরা এবার শ্রীমঙ্গলের উদ্দেশ্যে। লাউয়াছড়ার নির্জনতা ভেঙে আমরা যখন শ্রীমঙ্গলে তখন দুপুর গড়াচ্ছে। ট্রেন থেকে নেমেই পানশিতে। শ্রীমঙ্গলের পানশি একটু আলাদা এখানে গরুর মাংস পাওয়া যায় না আর সব খাবার মাটির চুলায় রান্না হয় তাই খাবারের দামও একটু বেশি। কিন্তু খাবারের টেষ্ট অন্য সবার চেয়ে ইউনিক। খাবার শেষে হোটেল খুঁজতেছি, একটা পেয়ে গেলাম মোটামুটি কিন্তু সিলেটের চেয়ে ১০০ টাকা বেশি কারন আমাদের হোটেলে ফ্রি ওয়াইফাই আছে😂
          </p>

          <p>
            গোসল করে যখন সবাই রেস্ট নিচ্ছি তখনই মনিপুরী পাড়াতে যাওয়ার ভূত মাথায় চাপে। সন্ধ্যার একটু আগে আমরা ফিনলে চা বাগানে ছবি উঠতেছি ঠিক তখনই বাগানের মালির সাথে ভাব জমাচ্ছি, সন্ধ্যা হয়ে গেছে এখন আমরা বাগান থেকে বের হচ্ছি আর গুটিগুটি পায়ে মনিপুরী পাড়ার দিকে এগোচ্ছি। শাকিল শাড়ি কিনবে আপুর জন্য, পাড়াতে একটা দিদির সাথে রাজ ভাব জমাচ্ছে কারন টাকা কম দিতে হবে😄 অবশেষে সফল হকারি করে সবচেয়ে কম দামেই শাড়িটা কিনতে পেরেছে😅 দিদিও খুশি আমরাও খুশি😄
          </p>

          <p>
            পরের দিন সকালে আমরা লাউয়াছড়ায় হাজির। লাউয়াছড়ার রেল লাইন ধরে হাঁটতে হাঁটতে রাজ বললো চল আমরা আজকে চিটাগং যাই😁 শাকিল শুনেই চোটপাট। তোরা গেলে যা আমি যাবো না😑 অনেক কষ্টেও যখন বেচারাকে রাজি করানো গেলো না তখন আমরা ঢাকার পথে ব্যাগ গুছচ্ছি। আমরা এখন ঢাকার ট্রেনে, টিকিট কাঁটা হয় নাই। টিটি আসার পর রাজ আর শাকিল আবার হকারি শুরু😄 টিটি ১০০ টাকায় রাজি হয়ে গেলো😅 এদিকে যামি টিটিকে বলে উঠলো ভাই আমাদের জন্য নাস্তার ব্যবস্থা নাই?🤣 আমরা সহ টিটি হাসতে হাসতে গড়াগড়ি খাচ্ছি। টিটিও আমাদের চা খাওয়ালো🤣
          </p>

          <p className="font-bold text-neonPurple">
            আমরা এখন ঢাকাতে😇 সবার ডেসটিনেশন আলাদা 😇 সবার বুকেই যেন নিদারুণ যন্ত্রণা যার ভাষা সবার চোখ😇 হয়তো আবার কোন দিন অন্য কোন উদ্দেশ্যে😊
          </p>
        </div>
      )
    },
    {
      id: "chittagong-adventure",
      title: "Chittagong Adventure",
      subtitle: "আমরা তীর হারা নদীর হাল ছাড়া নৌকা⚡",
      date: "Birthday Special, 2021",
      location: "Sitakunda, Khoiyachora & Patenga",
      tag: "Spontaneous Trip",
      images: [
        "/images/blog/chittagong_1.jpg",
        "/images/blog/chittagong_2.jpg",
        "/images/blog/chittagong_3.jpg"
      ],
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-neonBlue scrollbar-track-white/5">
          <p>
            আমরা তীর হারা নদীর হাল ছাড়া নৌকা⚡
          </p>
          <p>
            আজ ২০ তারিখ, রাজের জন্মদিন। সেই উদ্দেশ্য হাতিরঝিল আমরা সবাই, রাজের বার্থডে সেলিব্রেট করা হবে। কিন্তু বিধিবাম, হাল ছাড়া নৌকা কখনো তীর হারা নদীর পারে পৌঁছাতে পারে?
          </p>
          <p>
            রাজ হটাৎ মজা করে বলে উঠলো আজকে রাতে চল চট্টগ্রাম যাই, বলতে দেরি শাকিলের রাজি হতে দেরি নেই। বললো চল। কি কপাল যেখানে পুরান ঢাকাতে যাওয়ার কথা ছিলো কেক কেটে বিরিয়ানি খাওয়ার জন্য সেখানে আমরা চট্রগ্রাম যাচ্ছি? 😄
            নো ডিলে, তারাতাড়ি হাতিরঝিল থেকে বের হয়ে নাইমের বাসায় ছোট খাটো একটা কেক কেটেই দৌড় কমলাপুর স্টেশনে। ১০ঃ৩০ এর লোকাল ট্রেন ধরতে হবে তাহলে ফ্রি ফ্রি চট্রগ্রাম যাওয়া যাবে😄 ৯ঃ৪৫ এ প্লাটফর্মে ঢুকে পরেছি, ট্রেনও দাঁড়ানো। তারাতাড়ি প্রথমদিকের বগীর শেষ দিকে এক সারির ৬ টা সীট আমাদের দখলে!
          </p>

          <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-neonBlue my-8">
            <Quote className="text-neonBlue/40 mb-2" size={32} />
            <p className="italic text-gray-200 text-base md:text-lg">
              "জীবনে কখনো গান গাই নাই আমরা অথচ আজকে আমরা পুরো বগি মাতিয়ে রেখেছি গান গেয়ে, অনেকেই আমাদের সাথে তাল মিলিয়েছে আবার অনেকে বিরক্ত হয়েছে😄"
            </p>
          </div>

          <p>
            এভাবেই তাদের জ্বালিয়ে আমরা এখন সীতাকুণ্ড স্টেশনে, সময় সকাল ৭ঃ৩০। সকালে নাস্তা শেষ করে গন্তব্য চন্দ্রনাথ পাহাড়। ১২০০ ফুট উঁচু মধ্যম পর্যায়ের একটা পাহাড় বৃষ্টিতে যে কতটুকু ভয়ংকর সেটা না দেখলে বুঝা যাবে না। চূড়ায় উঠার সাথে সাথে মেঘ গুলো গা স্পর্শ করতে শুরু করলো, যেখানে একটু আগেও দাঁড়িয়ে ৩ পাশের পাহাড় আর সামনের সমুদ্র দেখা যাচ্ছিলো সেখানে এখন মেঘের ভেলা। চার দিকে সাদা মেঘ আর আমরা মেঘের ভিতর🤯। একটু পরেই শুরু ঝুম বৃষ্টি।
          </p>

          <p>
            বৃষ্টি শেষে পাহাড় থেকে নামার পালা, কিন্তু বিপত্তি এখানেই। উঠার চেয়ে নামাটাই যেন ভয়ংকর চ্যালেঞ্জিং। শেষে এসে বড়সড় একটা আছাড় খেয়েই বসলাম😅 আছাড় খেয়ে আমরা এখন পাহাড়ের নিচে😁
          </p>

          <p>
            পরবর্তী গন্তব্য খৈয়াছড়া ঝর্ণা। কাঁদার সাথে যুদ্ধ ১ ঘন্টা যুদ্ধ করে ঝর্ণাতে পৌঁছানোর পর সব ক্লান্তি যেন পানির সাথে সব ধুঁয়ে গেলো😇 আল্লাহ তার সৃষ্টি কত সুন্দর করে রেখেছে সেটা না দেখলে বুঝানো যাবে না। ফিরতে হবে তাই সবাইকে নিয়ে চট্টগ্রাম শহরের উদ্দেশ্যে রওয়ানা হলাম, সময় তখন সন্ধ্যা।
          </p>

          <p>
            হাতে সময় আছে ৪-৫ ঘন্টা। তাই চলে গেলাম পতেঙ্গা। রাতের সাগরের বাতাস আর সাগরের মাঝে জাহাজের লাইট গুলো যেন আরেক দুনিয়াতে নিয়ে গেলো। আমরা ৫ জন বসে আছি নির্জনতায়, আর ভাবছি এক দিনে আমরা পাহাড়, ঝর্ণা, সাগর দেখেছি😆আমাদের সক্ষমতা কতটুকু😆😆
          </p>

          <p>
            রাত ১০টা, বিচে সী ফুড তাকিয়ে আছে আমাদের দিকে👀 নিজেকে ধরে রাখতে পারলাম না। সবাই কাঁকড়া ফ্রাই খেতে শুরু করলাম🦀। খাওয়া শেষে বাস কাউন্টারে যাচ্ছি ঢাকাতে আসার জন্য। এতটুকু সময়ের মধ্যেই নাইমের কাঁকড়া খাওয়ার একশন শুরু হয়ে গেছে😆 বন্ধু বমির উপর বমি🤮 ১ঃ১৫ তে বাসে উঠি।
          </p>

          <p className="font-bold text-neonBlue">
            সকাল ৬ টা বাস ঢাকাতে, সবাই যার যার ডেসটিনেশনে হাজির😇 এবারের মত ট্যুর শেষ কিন্তু ট্যুর শেষ না।😇 প্রতিটা ট্যুর শেষ হ নতুন একটা ট্যুর শুরু জন্য😇 Happy Travelling ❤️
          </p>
        </div>
      )
    },
    {
      id: "sylhet-srimangal",
      title: "Sylhet & Srimangal",
      subtitle: "বৃষ্টি ভেজা সিলেট ও শ্রীমঙ্গল 💦",
      date: "June, 2023",
      location: "Sylhet, Jaflong & Srimangal",
      tag: "Monsoon Trip",
      images: [
        "/images/blog/sylhet_1.jpg",
        "/images/blog/sylhet_2.jpg",
        "/images/blog/sylhet_3.jpg"
      ],
      content: (
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-neonPurple scrollbar-track-white/5">
          <p>
            সাইকেলিং 🚲 করে আমরা এখন লাভ রোডে। সন্ধ্যার পর এখানে ভালোবাসা আদান-প্রদানের হাট বসে। এই পথে আমিও একসময় হেঁটেছি, সে-সব আজ দুঃস্মৃতির ডায়েরিতে বন্দী করে রেখেছি। আজকে আমরা ৩ জন বাদাম আর চা-সিগারেটের সাথে আড্ডায় মগ্ন।
          </p>
          <p>
            এদিকে এখন আমের ভরা মৌসুম। আড্ডার ফাঁকে বলে ফেললাম রাজশাহী আমের বাগানে ঘুরতে যাওয়া যায় এই সপ্তাহান্তে। ঘুরেও আসলাম, আমও খেয়ে আসলাম আবার কর্মব্যস্ততা থেকে একটু হাঁফ ছেড়ে বাঁচলাম।
          </p>
          
          <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-neonPurple my-8">
            <Quote className="text-neonPurple/40 mb-2" size={32} />
            <p className="italic text-gray-200 text-base md:text-lg">
              "সিলেটের আকাশে বৃষ্টি আর ছোট বাচ্চার হিসু দু’টোই আনপ্রেডিক্টেবল💦, কখন ঝরবে কেউ জানে না। রাত থেকেই গুঁড়ি গুঁড়ি বৃষ্টি, আর আমাদের কপালে দুশ্চিন্তার ভাঁজ আমরা বৃষ্টিতে ঠিক ভাবে ঘুরতে পারবো তো?"
            </p>
          </div>

          <p>
            ১৫ জুন, দুপুর বেলা এয়ারপোর্ট রেলওয়ে স্টেশন। যে সময় আমরা থাকার কথা সিল্ক সিটি এক্সপ্রেসে সেখানে আমরা এখন কালনী এক্সপ্রেসে, গন্তব্য সিলেট। রাত ১০:৪৫, আমরা এখন সিলেট রেলস্টেশনে। ভোজনরসিকদের পেটে ক্ষুধার হাক। সিলেটে এসে খাবার মানেই পানশী আর পাঁচ ভাই। স্টেশন থেকে বের হয়ে পেট পূজোয় আমরা এখন পানশীতে। আহার্য সম্পন্নের পর আম্বরখানার রাস্তার এক সস্তা হেটেলে বদ্ধ কেবিনে বন্দী তিনজনে।
          </p>

          <p>
            ১৬ জুন, সকাল ৮ টা। ঝকঝকে আকাশ, ফুরফুরা মন নিয়ে বের হয়ে পরলাম সাদা পাথরের উদ্দেশ্যে। CNG তে এয়ারপোর্ট পার হতে না হতেই কালবৈশাখী ঝড়ের ন্যায় ঝড় শুরু হলো। এক বৃষ্টিতেই ভিজে একাকার, ভিজে ভিজেই পৌছালাম সাদা পাথর, সেখান থেকে দুপুর পরেই রওনা হলাম রাতারগুলের উদ্দেশ্য। এদিকে ভেজা কাপড় গায়েই শুঁকিয়ে ফেলেছি। সেখান থেকে সন্ধ্যার আগে আমরা মালনীছড়া চা বাগানে, এটি উপমহাদেশের প্রথম চা বাগান। এদিকে রাতের আহার্য সম্পন্ন হলো পাঁচ ভাইয়ে। আজকে আমরা সস্তা হোটেল থেকে কিছুটা প্রমোশন নিয়ে হোটেল শেরাটনে অবস্থা করছি।
          </p>

          <p>
            ১৭ জুন, সকাল ৮ টা। আজকে সকালে পানশীতে নিহারি খাওয়ার কথা থাকলেও বৃষ্টির কারনে তা পারিনি। বৃষ্টি একটু কমে আসাতেই আমরা রওনা হই জাফলং, সংগ্রামপুঞ্জি ঝর্ণার উদ্দেশ্যে। আগের দিনের মতই আবার একটু যেতে না যেতেই ঝুম বৃষ্টি। এদিকে বৃষ্টিতে রাস্তা তলিয়ে যাওয়ায় আমাদের CNG এখন পানির নিচে ভাঙ্গা রাস্তার খাদে আঁটকে আছে। আমি আর নাসির ভাই গাড়ি থেকে হাঁটু পানিতে নেমে CNG ঠেলে যখন ভালো রাস্তায় উঠালাম তখন আমরা মোরগ ভেজার মত হয়ে আছি।
          </p>

          <p>
            এই অবস্থাতেই আমরা এখন সংগ্রামপুঞ্জি ঝর্ণার সামনে। আমি অবাক দৃষ্টিতে তাকিয়ে আছি ঝর্ণার দিকে, চোখ যেন সরছেই না। যে ঝর্ণা তে পানির চেয়ে মানুষ বেশি থাকে সেখানে আজ পানির নহর। ইতিপূর্বে এই ঝর্ণায় আমি এতো পানি কখনো দেখিনি। আজকেও ভেঁজা কাপড় গায়ে শুঁকিয়েছি। এদিকে আজকে সন্ধ্যার মধ্যেই শ্রীমঙ্গল পৌঁছাতে হবে, কারণ আমরা পরের দিন শ্রীমঙ্গল ঘুরবো। বিকাল ৫:৩০, ভেঁজা কাপড়ে আমরা এখন সিলেট বাস টার্মিনাল। বাংলাদেশের সবচেয়ে সুন্দর বাস টার্মিনাল এটি। এখানে ড্রেস চেঞ্জ করে বাসে উঠে পরলাম শ্রীমঙ্গলের উদ্দেশ্যে। রাত ৮:৩০, আমরা এখন শ্রীমঙ্গলে। আজকে আমরা রাত্রি যাপন করবো হোটেল নীলিমার ৩৩০ নম্বর রুমে, আর আহার্য সম্পন্ন করবো পানশীতে বোয়াল মাছ দিয়ে।
          </p>

          <p>
            ১৮ জুন, সকাল ৮:৩০। বাহিরের আবহাওয়া ফুটফুটে সুন্দর, একটু স্বস্তির নিশ্বাস ছাড়লাম। এখন যাচ্ছি লাউয়াছড়া, ভিতরে প্রবেশ করে রেললাইন পর্যন্ত যেতে না যেতেই বৃষ্টি। সে কি বৃষ্টি, ঝুম বৃষ্টি। বনের ভিতর ২ ঘন্টা কাটালাম বৃষ্টিতে। ভেবেছিলাম আজকে হয়তো ভিজবো না, কিন্তু বিধিবাম। ভিজতে ভিজতে নুরজাহান চা বাগান ঘুরে এখন আমরা নীলকন্ঠে। উদ্দেশ্য সাত রঙের চা, বরাবরই এটা আমার কাছে চায়ের বদলে গরম শরবত মনে হয়🍺। চা পান শেষে মনিপুরী পাড়া থেকে শপিংয়ের পালা। অবশেষে সঠিক সময়ে সকল কাজ, ঘোরাঘুরি শেষ করে আমরা এখন শ্রীমঙ্গল রেলস্টেশনে।
          </p>

          <p className="font-bold text-neonPurple">
            রাত ১০:৪৫, আমরা এখন এয়ারপোর্ট রেলস্টেশনে। আরো একটি ভ্রমণের ইতি😇 আগে প্রতিটা ভ্রমণের শেষ দিন প্রচুর মন খারাপ থাকতো, এখন আর মন খারাপ হয় না কারণ এই ভ্রমণ টা শেষ করেছি নতুন আরেকটা ভ্রমণের লক্ষ্যে😇
          </p>
        </div>
      )
    }
  ];

  const [activeStory, setActiveStory] = useState(stories[0]);

  return (
    <section className="py-24 relative z-10 border-t border-white/10 bg-space" id="blog">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header with Story Selection */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-glow-purple mb-4 tracking-tight">TRAVEL DIARIES</h2>
            <p className="text-gray-400 text-lg">Heartfelt stories from the trails of Bangladesh</p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {stories.map((story) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(story)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${activeStory.id === story.id
                  ? 'bg-neonPurple text-white border-neonPurple shadow-[0_0_20px_rgba(157,0,255,0.4)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                  }`}
              >
                {story.title}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-panel overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row">

              {/* Story Content */}
              <div className="lg:w-3/5 p-6 md:p-12 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeStory.tag === 'Featured Story'
                    ? 'bg-neonBlue/20 text-neonBlue border-neonBlue/30'
                    : activeStory.tag === 'Road Trip'
                      ? 'bg-neonPurple/20 text-neonPurple border-neonPurple/30'
                      : 'bg-neonBlue/20 text-neonBlue border-neonBlue/30'
                    }`}>
                    {activeStory.tag}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{activeStory.date}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  {activeStory.id === 'five-billion-star' ? (
                    <>
                      The Story of <span className="text-neonBlue">Five Billion Star Hotel</span> ❤️
                    </>
                  ) : (
                    activeStory.subtitle
                  )}
                </h3>

                {activeStory.content}
              </div>

              {/* Photo Gallery Sidebar */}
              <div className="lg:w-2/5 bg-white/5 border-l border-white/10 p-8 flex flex-col gap-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                  <Star className="text-neonPurple" size={16} /> Memory Lane
                </h4>

                {activeStory.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer aspect-video"
                  >
                    <img
                      src={img}
                      alt={`Story Photo ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}

                <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-neonPurple/20 to-neonBlue/20 border border-white/10">
                  <div className="flex items-center gap-3 mb-2 text-white">
                    <MapPin size={18} className="text-neonBlue" />
                    <span className="font-bold">{activeStory.location}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {activeStory.id === 'five-billion-star'
                      ? "Experiencing the authentic lifestyle with the Bom community and enjoying a night under the stars on a mountain peak."
                      : activeStory.id === 'sunamganj-adventure'
                        ? "A memorable road trip across Sunamganj's wetlands, Sylhet's tea gardens, and Srimangal's forests with friends."
                        : "A spontaneous birthday trip covering the mystical peaks of Sitakunda, the tiers of Khoiyachora, and the night waves of Patenga."}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TravelBlog;
