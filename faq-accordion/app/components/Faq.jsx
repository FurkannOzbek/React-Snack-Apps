"use client";
import styles from "./Faq.module.css";
import { useState } from "react";

export default function Faq() {
  /*Data we use in the FAQs */
  const faqItems = [
    {
      title: "What is Frontend Mentor, and how will it help me?",
      text: "Frontend Mentor offers realistic coding challanges to help developers improve their frontend coding skills with projects in HTML,CSS, and JavaSCript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      title: "Is Frontend Mentor free?",
      text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels",
    },
    {
      title: "Can I use Frontend Mentor projects in my portfolio?",
      text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      title: "How can I get help if I'm stuck on a challange?",
      text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  const [activeIndex, setActiveIndexs] = useState([]);

  // handle with toggle

  const toggleItem = (index) => {
    setActiveIndexs(
      (prevIndexs) =>
        prevIndexs.includes(index)
          ? prevIndexs.filter((i) => i !== index) // Remove index if it's already active
          : [...prevIndexs, index] // Add index if it's not active
    );
  };

  return (
    <>
      <div className={styles.wholePage}>
        <div className={styles.partTop}></div>
        <div className={styles.faqCard}>
          <div className={styles.title}>
            <img src="/icon-star.svg" alt="Star Icon" />
            <h1>FAQs</h1>
          </div>
          <div className={styles.faqItems}>
            {/* Displaying all titles */}
            {faqItems.map((item, index) => (
              <div key={index} className={styles.faqItemContainer}>
                <div className={styles.faqItemTitleContainer}>
                  <div className={styles.faqItemTitle} onClick={() => toggleItem(index)}>
                    {item.title}
                  </div>
                  {/* Condition for the plus or minus icon*/}
                  {activeIndex.includes(index) ? (
                    <div className={styles.minusIcon} onClick={() => toggleItem(index)}>
                      <img src="/icon-minus.svg" alt="Minus Icon" />
                    </div>
                  ) : (
                    <div className={styles.plusIcon} onClick={() => toggleItem(index)}>
                      <img src="/icon-plus.svg" alt="Plus Icon" />
                    </div>
                  )}
                </div>
                {/* Condition for showing text or not*/}
                {activeIndex.includes(index) && (
                  <div className={styles.faqItemText}>{item.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
