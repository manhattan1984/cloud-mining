"use client";
import React from "react";
import FAQ from "../(components)/FAQ";

const page = () => {
  const QA = [
    {
      question: "Why Choose Us",
      answer:
        "Big Scope Profit Station has for years been one of the most trusted and reliable crypto broker company, with our trusted experts that work irelessly to ensure our clients get the most of their investment.",
    },
    {
      question: "Can I Invest Using Cryptocurrency",
      answer:
        "Cryptocurrency is our major form of investing, so yes you can invest using cryptocurrency.",
    },
    {
      question: "Why You Should Become An Investor",
      answer:
        "Digital currency has become the most widely used currency around the world now, and has been turning people into billionaires since the very beginning. Don't you want to be among the people earning massively from crypto today?",
    },
    {
      question: "What payment system can i use to withdraw?",
      answer: "You can withdraw to your external crypto wallet or bank.",
    },
    {
      question: "How Can I Start Working With WealthAid Mining?",
      answer:
        "First step is to signup on our company, choose an investments plan that best suits you and start earning with WealthAid Mining today.",
    },
  ];
  return (
    <div className="min-h-screen pt-8 bg-black text-white">
      <p className=" text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
        FAQs
      </p>
      <p className="capitalize text-center text-2xl font-bold mt-4 mb-8">
        we have the <span className="text-blue-500">answer</span>
      </p>
      {QA.map((faq, index) => (
        <FAQ {...faq} key={index} />
      ))}
    </div>
  );
};

export default page;
