// Import file CSS latihan.css dan fungsi useState dari React
import './latihan.css'
import { useState } from 'react';

// Komponen AboutPage untuk menampilkan halaman tentang
function AboutPage() {
    return (
      <>
        <h1>Tentang</h1>
        <p>Halo.<br />Apa kabar?</p>
      </>
    );
}

// Komponen MyButton untuk membuat tombol dengan alert saat di klik
function MyButton() {
    function handleClick() {
      alert('Anda mengeklik saya!');
    }
    return (
      <button onClick={handleClick}>
        Klik saya
      </button>
    );
}

// Objek user untuk menampung data pengguna
const user = {
    name: 'Monkey D.Luffy',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273698053276e5f2b236dd2de91',
    imageSize: 100,
};

// Array of objects products untuk daftar produk yang akan ditampilkan
const products = [
    { title: 'Motherboard', isElectoric: false, id: 1 },
    { title: 'Monitor', isElectoric: false, id: 2 },
    { title: 'RTX 3090', isElectoric: true, id: 3 },
];

// Komponen ButtonTambah untuk menghitung penambahan, pengurangan, dan reset
function ButtonTambah() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    function kurang() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
          <button onClick={handleClick} style={{marginRight: 10}}>
            tambah +1
          </button>
          <button onClick={kurang} style={{marginRight: 10}}>
            kurang -1
          </button>
          <button onClick={reset} style={{marginRight: 10}}>
            reset
          </button>
          <h1>{count}</h1>
        </>
    );
}

// Komponen ButtonCount untuk menambah angka saat tombol di klik
function ButtonCount() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return (
        <>
          <button onClick={handleClick} style={{marginRight: 10}}>
            tambah {count}
          </button>
        </>
    );
}

// Komponen ButtonCount2 untuk membuat tombol yang menampilkan berapa kali telah diklik
function ButtonCount2({ count, onClick }) {
    return (
    
      <button onClick={onClick} style={{marginRight: 10}}>
        Diklik {count} kali
      </button>
    );
}

// Komponen utama MyApp untuk menggabungkan semua komponen dan menampilkan aplikasi
export default function Latihan() {
    // Menggunakan map untuk menghasilkan elemen list berdasarkan produk
    const listItems = products.map(product =>
        <li
          key={product.id}
          style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
          }}
        >
          {product.title}
        </li>
    );

    // State untuk counter yang digunakan di ButtonCount2
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    // Menampilkan semua bagian aplikasi
    return (
        <>
          <div style={{ marginBottom: 20}}>
            <h1>Selamat datang di aplikasi saya</h1>
            <MyButton />
          </div>
          <div>================================================</div>
          <AboutPage />
          <div>================================================</div>
          <h1>{user.name}</h1>

          <img
            className="avatar"
            src={user.imageUrl}
            alt={'Foto ' + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize
            }}
          />
         <div>================================================</div>
          <h1>List Belanja</h1>
          <ul>{listItems}</ul>
          <div>================================================</div>
          <div style={{ marginBottom: 20}}>
            <h1>Penghitung yang diperbarui secara terpisah</h1>
            <ButtonCount />
            <ButtonCount />
          </div>
          <div>================================================</div>
          <div style={{ marginBottom: 20}}>
            <h1>Penghitung yang diperbarui bersamaan</h1>
            <ButtonCount2 count={count} onClick={handleClick} />
            <ButtonCount2 count={count} onClick={handleClick} />
          </div>
          <div>================================================</div>
          <div>
            <h1>Tambah dan Kurang</h1>
            <p><ButtonTambah /></p>
          </div>
          <div>================================================</div>
          <p>By Ibrahim</p>
        </>
    );
}
