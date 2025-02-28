import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaUser } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Selamat Datang!</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ini adalah portfolio saya. Temukan karya-karya saya, pengalaman, dan kontak saya di sini.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
            >
              Tentang Saya
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600"
            >
              Hubungi Saya
            </Link>
          </div>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-blue-500 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Proyek Terbaru</h3>
            </div>
            <p className="text-gray-600">
              Lihat beberapa proyek terbaru saya yang meliputi aplikasi web modern, desain responsif, dan teknologi terkini.
            </p>
            <Link to="/projects" className="text-blue-500 hover:underline mt-2 inline-block">
              Lihat Proyek
            </Link>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center mb-4">
              <FaUser className="text-blue-500 mr-3" size={28} />
              <h3 className="text-2xl font-bold">Profil</h3>
            </div>
            <p className="text-gray-600">
              Saya seorang pengembang web dengan pengalaman dalam berbagai teknologi dan senang berbagi pengetahuan.
            </p>
            <Link to="/about" className="text-blue-500 hover:underline mt-2 inline-block">
              Selengkapnya
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white shadow mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
