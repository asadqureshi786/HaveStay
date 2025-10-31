import React from "react";

export default function About() {
  return (
    <section className="container mt-[105px]">
      <div className="heading  font-[100] text-[35px] font-melow text-black text-center ">
        <h1> <span className="text-fuchsia-400">HaveStay:  </span>Your Gateway</h1>
        <h1>To Serenitry</h1>
      </div>

    <div className="grid grid-cols-2">
        <div className="left_side">
            <p className="p-5 text-[14px]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal it look like readable English. Many desktop publishing packages and web page editors now use Various versions have evolved over the years, sometimes by accident.
                <img src={} />
            </p>
        </div>
    </div>

    </section>
  );
}
