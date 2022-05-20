################### Memulai ###################

- <b style='font-weight : bold'>React Hook Form</b> adalah salah satu plugin untuk mempermudah kita untuk mengelola hook dari sebuah input data ( form )
- <b style='font-weight : bold'>YUP</b> adalah schema untuk mempermudah kita untuk melakukan validasi terhadap form kita agar lebih rapi dan tersetruktur

1. Silahkan install plugin React Hook Form ke projek kita ( <p style='color : blue'> npm install react-hook-form <p> )

2. Kemudian install yup ke projek kita ( <p style='color : blue'> npm install @hookform/resolvers yup <p> )

3. Import plugins yang di butuhkan ke page kita :
   <p style='color : blue'>
    import { useForm } from "react-hook-form";
    import { yupResolver } from '@hookform/resolvers/yup';
    import \* as yup from "yup";
   </p>
