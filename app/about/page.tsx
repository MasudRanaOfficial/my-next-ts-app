import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Image
        src="/images/arman.jpeg"
        alt="Arman Hossain"
        width={300}
        height={300}
      ></Image>
      <Image
        src="/images/masud.png"
        alt="Masud"
        width={400}
        height={500}
      ></Image>
      <Image
        src="/images/rana.jpeg"
        alt="Rana"
        width={200}
        height={400}
      ></Image>
    </div>
  );
};

export default AboutPage;
