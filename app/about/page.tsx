import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "...",
}
const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>

      <Image
        src="https://images.unsplash.com/photo-1789276392890-1bc1d0f04374"
        alt="image"
        width={300}
        height={300}
      ></Image>
      <Image src="https://i.ibb.co.com/JjGpPttd/masud-github-readme-banner.png" alt="cover" width={300} height={300}></Image>
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
