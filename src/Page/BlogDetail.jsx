import React from "react";
import Header from "../component/NavBar";
import blog from "../assets/img/blog.png";
import Footer from "../component/Footer";

export default function BlogDetail() {
  return (
    <div className=" mt-[10rem]">
      <Header />
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl">
          Ini Daftar Mitra dan Distributor E-Meterai Resmi Peruri yang Harus
          Kamu Ketahui
        </h1>
        <span>
          Posted on{" "}
          <a href="y" className="link">
            Mei 1, 2024
          </a>{" "}
          by{" "}
          <a href="t" className="link">
            admin
          </a>
        </span>
      </div>
      <img className="px-[2rem] w-full my-[2rem]" src={blog} alt="" />
      <div className="flex items-start justify-center flex-col px-[12rem] ">
        <p>
          Mulai dari bulan Oktober tahun 2021, pemerintah sudah merilis
          e-meterai untuk melancarkan semua urusan dokumen, terutama mengatasi
          masalah jarak jauh. Seiring dengan perkembangan zaman, ada banyak
          surat perjanjian saat ini dapat dilakukan secara online dan pembubuhan
          meterai yang dahulu menggunakan cara manual sekarang dimudahkan dengan
          hadirnya e-meterai.
        </p>
        <p>
          Saat ini sudah cukup banyak daftar mitra dan distributor e-meterai
          resmi Peruri yang bisa kamu gunakan untuk membantu pembubuhan meterai
          elektronik. Menurut Peraturan Pemerintah no 86 Tahun 2021 mengenai
          Pengadaan, Pengelolaan dan Penjualan Meterai, meterai elektronik ini
          dibuat dan didistribusikan melalui Perum Perusia atau instansi yang
          bertugas untuk mencetak meterai tempel.
        </p>
        <p>
          Tetapi, menurut Peraturan Menteri Keuangan no 133 tahun 2021, Perum
          Peruri perlu mendistribusikan meterai elektronik lewat distributor
          resmi dan juga mitra strategis. Di bawah ini ada daftar mitra dan
          distributor meterai elektronik resmi yang bisa kamu pilih.
        </p>
        <h3 className="text-start">Kumpulan Distributor Resmi e-Meterai</h3>
        <p>
          Kamu bisa membeli meterai elektronik yang sah dan aman di beberapa
          distributor resmi seperti berikut:
        </p>
        <ul className="list-disc mx-5">
          <li>PT Peruri Digital Security</li>
          <li>PT Mitracomm Ekasarana</li>
          <li>Koperasi Pegawai Swadharma</li>
          <li>PT Finnet Indonesia</li>
          <li>PT Mitra Pajakku</li>
        </ul>
        <p>
          Tidak hanya distributor resmi di atas saja, meterai elektronik juga
          dapat kamu akses lewat tujuh mitra strategis yang sudah melakukan
          kerja sama dengan Perum Peruri, diantaranya yaitu:
        </p>
        <ul className="list-disc mx-5">
          <li>
            <a href="p" className="link">
              PT Mitra Era Teknologi atau eMET bisa diakses langsung eMET.id
            </a>
          </li>
          <li>PT Solusi Nusantara Terpadu</li>
          <li>PT Digital Prima Sejahtera</li>
          <li>PT Mahardika Teknotama Integrasi</li>
          <li>PT MCP Indo Utama</li>
          <li>PT Redphoenix Kreatif Genesis</li>
          <li>PT Digital Logistik Internasional</li>
        </ul>
        <h3>Aturan Menggunakan Meterai</h3>
        <p>
          Dikutip dari Indonesia Baik, ada sejumlah aturan dalam menggunakan
          meterai, diantaranya yaitu:
        </p>
        <ul className="list-disc mx-5">
          <li>
            Wajib memakai meterai tempel maupun kertas meterai yang baru atau
            belum pernah dipakai sama sekali sebelumnya atau meterai bekas
            digunakan
          </li>
          <li>
            Tidak diperbolehkan memakai meterai dengan ciri dan bentuk yang
            tidak sesuai dengan ketentuan dalam perundang-undangan, seperti
            meterai hasil edit atau unduh gambar di internet maupun lainnya yang
            sejenis
          </li>
        </ul>
        <h3>Kenali Ciri dan Bentuk e-Meterai</h3>
        <p>
          Tidak hanya mengetahui aturan menggunakan meterai yang baik dan benar
          saja, kamu juga perlu mengetahui ciri dan bentuk e-meterai. Karena,
          meterai elektronik ini sangat berbeda dengan meterai tempel dan
          mempunyai ciri khusus yang memiliki unsur pengamanan. Seperti dikutip
          dari website Indonesia Baik, di bawah ini informasinya:
        </p>
        <ul className="list-disc mx-5">
          <li>
            Meterai elektronik memiliki bentuk persegi dan warna nya lebih
            dominan merah muda
          </li>
          <li>
            Di dalam meterai elektronik tercantum angka 1000 dengan tulisan
            “SEPULUH RIBU RUPIAH”
          </li>
          <li>
            Pada meterai elektronik juga mempunyai kode unik dengan bentuk nomor
            seri sebanyak 22 digit
          </li>
          <li>
            Dalam meterai elektronik juga tercantum keterangan tertentu seperti
            tulisan “METERAI ELEKTRONIK” dan lambang Garuda Pancasila yang
            merupakan lambang negara.
          </li>
          <p>
            Apabila kamu melihat bentuk lain atau nomor seri yang tidak sebanyak
            jumlah yang disebutkan di atas, lebih baik kamu jangan memakai
            meterai elektronik tersebut sebab dikhawatirkan e-meterai tersebut
            tidak asli.
          </p>
        </ul>
        <h3>Cara Membubuhkan e-Meterai pada Dokumen</h3>
        <p>
          Kamu bisa memilih membubuhkan e-meterai di situs eMET karena mempunyai
          cara yang sangat mudah yaitu tidak perlu mendaftar dan hanya perlu
          melakukan tiga langkah saja, maka dokumen mu sudah dibubuhi dengan
          meterai elektronik. Cara membubuhkan meterai elektronik di website
          eMET yakni dengan cara:
        </p>
        <h5>1. Unggah dokumen</h5>
        <p>
          Sesudah kamu masuk ke dalam website resmi eMET di{" "}
          <a href="/" className="link">
            eMET.id
          </a>{" "}
          , langkah selanjutnya yang wajib kamu lakukan adalah mengunggah
          dokumen ke website tersebut. Format dokumen yang harus kamu siapkan
          yaitu berbentuk PDF, doc, dan docx dengan ukuran maksimal dokumen
          sebesar 2 MB saja.
        </p>
        <h5>2. Bubuhkan e-meterai</h5>
        <p>
          Setelah kamu mengunggah dokumen yang ingin dibubuhi dengan meterai
          elektronik sesuai dengan format yang tertera. Langkah selanjutnya yang
          harus kamu lakukan yaitu membubuhi meterai elektronik di dalam dokumen
          yang sudah kamu upload. Letakkan e-meterai sesuai dengan tempatnya.
        </p>
        <h5>3. Lakukan pembayaran dan menunggu email</h5>
        <p>
          Langkah terakhir dalam pembubuhan meterai ini adalah kamu perlu
          melakukan pembayaran meterai elektronik secara online. eMET
          menyediakan fitur pembayaran online yang bisa memudahkan kamu untuk
          melakukan transaksi pembayaran meterai elektronik ini.
        </p>
        <p>
          Sesudah pembayaran kamu lakukan dan pembayaran dinyatakan berhasil,
          maka e-meterai mu akan langsung diproses secara otomatis. Lalu,
          dokumen digital yang sudah kamu bubuhi dengan e-meterai ini akan
          langsung dikirimkan ke email yang sudah kamu cantumkan sebelumnya.
        </p>
        <p>
          Bila kamu mencari meterai elektronik, maka kamu tidak perlu ragu untuk
          menggunakan eMET di website atau aplikasinya yang tersedia di Play
          Store dan App Store. Gunakan eMET untuk pembubuhan meterai elektronik
          sekarang juga!
        </p>
        <span className="mt-4">
          Posted in{" "}
          <a href="/produktivitas" className="link">
            Produktivitas
          </a>
        </span>
        <div className="-ml-4 w-full">
          <h3>Leave a Reply</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form action="" className="flex flex-col gap-2 ">
            <label htmlFor="">Comment *</label>
            <textarea
              name=""
              className="input p-3 rounded-[3px]"
              id=""
              cols="45"
              rows="8"
            ></textarea>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="">Name *</label>
              <input type="text" className="input w-1/4 rounded-[3px]" />
              <label htmlFor="">Email *</label>
              <input type="text" className="input w-1/4 rounded-[3px]" />
              <label htmlFor="">Website </label>
              <input type="text" className="input w-1/4 rounded-[3px]" />
            </div>
            <div className="mt-2">
              <input type="checkbox" className="mr-2" name="" id="" />
              <label htmlFor="">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button className="bg-[#7C7CFC] px-4 py-2 text-white font-light rounded-[3px] w-1/6 my-4">Post Comment</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
