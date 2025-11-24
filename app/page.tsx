import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative h-[90vh]">
        <nav className="flex justify-between p-8 mx-auto container text-white z-20 relative">
          <div className="font-bold text-2xl">Sotico</div>
          <ul className="flex justify-between gap-6">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </nav>

        {/* Background image */}
        <Image
          src="/factory.jpg"
          alt="Construction background"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      {/* CATEGORY SECTION */}
      <div className="p-4">
        <h2 className="mx-auto text-5xl font-bold text-center my-8">Category</h2>

        {/* First row */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((item) => (
            <div key={item} className="relative w-full aspect-4/3">
              <Image
                src="/cat-const.jpg"
                alt="Construction"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-xl">
                <span className="block text-xl font-semibold mb-3">Construction</span>
                <button className="px-6 py-2 border-2 border-amber-100 hover:bg-amber-100 hover:text-black transition">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative w-full aspect-4/3">
              <Image
                src="/cat-const.jpg"
                alt="Construction"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 rounded-xl">
                <span className="block text-xl font-semibold mb-3">Construction</span>
                <button className="px-6 py-2 border-2 border-amber-100 hover:bg-amber-100 hover:text-black transition">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ABOUT US SECTION */}
<section className="relative mt-16 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Image */}
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/constraction.jpg"
        alt="Our team working on construction uniforms"
        fill
        className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
    </div>

    {/* Right: Text */}
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
        About <span className="text-amber-600">Sotico</span>
      </h2>
      <p className="text-gray-600 leading-relaxed text-lg">
        At <strong>Sotico</strong>, we design and craft professional uniforms that bring comfort, safety, 
        and confidence to every worker. From construction sites to workshops, we believe that quality 
        work starts with quality wear.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our mission is to blend **durability, functionality, and modern style** — because we know that 
        good design can empower productivity. Every fabric we choose and every stitch we make 
        reflects our passion for excellence.
      </p>
      <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow hover:bg-amber-600 transition">
        Learn More
      </button>
    </div>
  </div>

  {/* Decorative background shapes */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
</section>
{/* PARTNERS / LOGO SLIDER SECTION */}
<section className="py-16 bg-white">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
    Trusted by Leading Companies
  </h2>

  <div className="overflow-hidden relative w-full">
    <div className="flex w-max animate-infinite-slider">

      {/* FIRST GROUP */}
      <div className="flex gap-16">
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
      </div>

      {/* SECOND GROUP (COPY FOR INFINITE LOOP) */}
      <div className="flex gap-16">
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
        <Image src="/images.jpeg" width={140} height={60} alt="logo" />
      </div>

    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 py-14 mt-16">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* COMPANY INFO */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-4">Sotico</h3>
      <p className="text-gray-400 leading-relaxed">
        We design and craft durable, comfortable and professional uniforms
        for construction, industrial and mechanical sectors.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li className="hover:text-white transition cursor-pointer">Home</li>
        <li className="hover:text-white transition cursor-pointer">Shop</li>
        <li className="hover:text-white transition cursor-pointer">About Us</li>
        <li className="hover:text-white transition cursor-pointer">Contact</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
      <ul className="space-y-2">
        <li>📞 +216 00 000 000</li>
        <li>📧 contact@sotico.tn</li>
        <li>📍 Tunisia</li>
      </ul>
    </div>

    {/* SOCIAL MEDIA */}
    <div>
      <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
      <div className="flex gap-4 text-2xl">
        <a href="#" className="hover:text-white transition">🌐</a>
        <a href="#" className="hover:text-white transition">📘</a>
        <a href="#" className="hover:text-white transition">📸</a>
      </div>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
    © {new Date().getFullYear()} Sotico. All rights reserved.
  </div>
</footer>

    </div>
  );
}
