# ✨ Setup React Hook Form Dan Yup Ke Projek React Kita ✨

### Dokumentasi Plugin

| plugin          | website                        |
| --------------- | ------------------------------ |
| React Hook Form | https://react-hook-form.com/   |
| YUP             | https://github.com/jquense/yup |

### Instalasi

Instal React Hook Form ke dalam projek kita

```sh
npm install react-hook-form
```

Kemudian instal YUP

```sh
npm install @hookform/resolvers yup
```

### Import Plugin Ke Projek Kita

Import plugin React Hook Form yang akan mengelola hook dari form input kita

```sh
import { useForm } from "react-hook-form";
```

Import plugin YUP yang akan mempermudak kita dalam membuat validasi yang lebih rapi dan tersetruktur

```sh
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
```

### Membuat Schema Dengan YUP

```sh
const schemaValidationWithYup = yup.object({
    fullName : yup.string("file wajib string").required("filed wajib di isi"),
    <!--letakkan semua validasi disini-->
})
```

### Implementasi React Hook Form

menggabungkan antara React Hook Form dan YUP sebagai schema validatornya

- register akan di gunakan untuk menghubungkan antara input form dengan validasi schema dari yup
- handleSubmit adalah sebuah function yang akan di jalankan ketika kita menekan tombol submit
- formState : { errors } sesuai dengan namanya kita akan gunakan untuk menampilkan error jika sebuah field input tidak di isi sesuai dengan validasi yang telah kita tentukan
- useForm ini kita gunakan untuk memberi tahu kepada React Hook Form kalau kita untuk validasi menggunakan YUP, kenapa seperti itu ? sebenarnya React Hook Form sendiri juga sudah memiliki fitur untuk validasi namun menurut saya itu kurang rapih

```sh
const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schemaValidationWithYup)
  });
```

### Implementasi Ke Form Input Kita

```sh
const handleSubmitData = (data) => {
    <!--letakkan aksi selanjutnya disini-->
}

<form onSubmit={handleSubmit(handleSubmitData)}>
    <input type="text" {...register("fullName")}/>
    <p>{errors?.fullName?.message}</p>

    <button type="submit">Simpan</button>
</form>
```
